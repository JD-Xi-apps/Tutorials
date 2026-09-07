/*
 * JD-Xi Tutorial Hub - local learner state.
 *
 * One namespaced record holding the whole ProgressState: completion, resume
 * point, and bookmarks. One key, so reads and writes stay coherent and a
 * reset is a single deletion rather than a hunt for stragglers.
 *
 * There is no account, no cloud and no sync, and the model is deliberately not
 * shaped in anticipation of any.
 *
 * Storage can legitimately be absent. The app runs from file://, where some
 * browsers treat every document as its own opaque origin, and a private window
 * or a policy restriction can make localStorage throw on access rather than
 * merely return null. EVERY access here is therefore wrapped: a failure
 * degrades to an in-memory state for the session, and the application stays
 * fully navigable. Only persistence is lost, never function.
 *
 * --------------------------------------------------------------------------
 * SCHEMA 2 (master-plan reconciliation). Three changes, all learner-visible:
 *
 * 1. COMPLETION IS EXPLICIT. Reaching the last step no longer completes a
 *    tutorial; only `finish()` does. `noteVisit` records where the learner
 *    is and nothing more. This is PRODUCT-CURRICULUM-MASTER-PLAN.md sec 22.
 *
 * 2. "Favorites" became "Bookmarked". The app-level feature is Bookmarked;
 *    "Favorite" is reserved for the JD-Xi's own hardware feature, so the two
 *    can never be confused in learner-facing text (master plan sec 16).
 *
 * 3. Specialty completion is tracked SEPARATELY and never counted in x/30.
 *    Bookmarks are shared, because a learner bookmarks a lesson without
 *    caring which data model it lives in.
 *
 * Schema 1 records are MIGRATED, not discarded: `favoriteTutorialIds` becomes
 * `bookmarkedIds`, and existing completions are kept. Those completions were
 * earned under the old reach-the-last-step rule, and erasing someone's record
 * because the rule changed underneath them would be the wrong trade.
 * --------------------------------------------------------------------------
 *
 * --------------------------------------------------------------------------
 * TWO INTEGRITY RULES that are easy to state and easy to lose:
 *
 * 1. A record written by a NEWER build is never overwritten by this one.
 *    Rejecting it on read is only half the guarantee - the next write would
 *    put our shape back over it. So a future record additionally puts
 *    persistence into READ-ONLY for the session: the learner keeps a fully
 *    working in-memory state, and the stored record survives untouched for
 *    the build that understands it. Only an explicit `resetEverything`, which
 *    deletes rather than rewrites, is allowed past that lock.
 *
 * 2. A stored step id that no longer resolves is NOT a claim that the learner
 *    was on step 1. `resume()` says which of the two it is, so a caller can
 *    word it honestly instead of inventing a position (see `resume`).
 * --------------------------------------------------------------------------
 *
 * Classic script on purpose - no modules, no fetch.
 */

window.JDXI_PROGRESS = (function () {
  "use strict";

  var KEY = "jdxi.tutorial-hub.progress";
  var SCHEMA_VERSION = 2;

  /* In-memory fallback. Also the working copy: reads go through here once
     loaded, so a mid-session storage failure cannot lose what the learner did
     while the app is still open. */
  var state = null;
  var storageWorks = null; // null = not yet probed
  /* Which schemaVersion the stored record announced when it was migrated up to
     the current one, or null if no migration happened. DIAGNOSTIC ONLY: it is
     exposed as `_migratedFrom()` for tools/test-progress.js, which asserts that
     a schema-1 record is recognised as migrated and a schema-2 record is not.
     No learner-facing surface reads it - Settings does not - and nothing should
     start without deciding what a learner would do with the answer. */
  var migratedFrom = null;

  /*
   * Set only when the stored record announced a schemaVersion this build does
   * not understand. While set, `persist` writes nothing: the session runs on
   * the in-memory state and the newer record is left exactly as we found it.
   * Ordinary corruption does NOT set this - a record we cannot parse carries
   * no data worth protecting, and locking on it would strand the learner with
   * unsaveable progress for the rest of the session.
   */
  var readOnlyReason = null;   // null | "future-schema"
  var futureSchemaVersion = null; // what the newer record claimed, for diagnostics

  function empty() {
    return {
      schemaVersion: SCHEMA_VERSION,
      completedTutorialIds: [],
      currentTutorialId: null,
      currentStepId: null,
      bookmarkedIds: [],
      completedSpecialtyIds: [],
    };
  }

  /*
   * Probe by writing and removing a value, not by checking for the object:
   * localStorage can exist and still throw on use, which is exactly the
   * file:// and private-window case this has to survive.
   */
  function probe() {
    if (storageWorks !== null) return storageWorks;
    try {
      var probeKey = KEY + ".probe";
      window.localStorage.setItem(probeKey, "1");
      window.localStorage.removeItem(probeKey);
      storageWorks = true;
    } catch (e) {
      storageWorks = false;
    }
    return storageWorks;
  }

  function readRaw() {
    try {
      return window.localStorage.getItem(KEY);
    } catch (e) {
      storageWorks = false;
      return null;
    }
  }

  function writeRaw(text) {
    try {
      window.localStorage.setItem(KEY, text);
      return true;
    } catch (e) {
      /* Quota, private mode, policy. The session keeps its in-memory state. */
      storageWorks = false;
      return false;
    }
  }

  function idList(value) {
    if (!Array.isArray(value)) return [];
    var out = [];
    value.forEach(function (v) {
      if (typeof v === "string" && out.indexOf(v) < 0) out.push(v);
    });
    return out;
  }

  /*
   * Parse a stored record into a known-good shape. Anything malformed yields
   * an empty state rather than a partly-trusted one.
   *
   * A record whose schemaVersion is NEWER than this build understands is
   * treated as unreadable and left untouched: guessing at a future shape is
   * how a later version's data gets silently corrupted by an earlier one.
   */
  function parse(text) {
    if (!text) return empty();
    var raw;
    try {
      raw = JSON.parse(text);
    } catch (e) {
      return empty();
    }
    if (!raw || typeof raw !== "object" || Array.isArray(raw)) return empty();
    /* No usable version marker: corrupt, not future. Nothing to protect. */
    if (typeof raw.schemaVersion !== "number") return empty();
    /* Future. Unreadable AND unwritable - see rule 1 in the header. */
    if (raw.schemaVersion > SCHEMA_VERSION) {
      readOnlyReason = "future-schema";
      futureSchemaVersion = raw.schemaVersion;
      return empty();
    }

    var out = {
      schemaVersion: SCHEMA_VERSION,
      completedTutorialIds: idList(raw.completedTutorialIds),
      currentTutorialId:
        typeof raw.currentTutorialId === "string" ? raw.currentTutorialId : null,
      currentStepId: typeof raw.currentStepId === "string" ? raw.currentStepId : null,
      bookmarkedIds: idList(raw.bookmarkedIds),
      completedSpecialtyIds: idList(raw.completedSpecialtyIds),
    };

    /*
     * Schema 1 migration. The rename is the whole of it: a v1 record has
     * favoriteTutorialIds and no bookmarkedIds. Both are read so that a
     * half-migrated record (written by one version, read by another) merges
     * rather than losing whichever half it did not expect.
     */
    if (raw.schemaVersion < SCHEMA_VERSION) {
      migratedFrom = raw.schemaVersion;
      idList(raw.favoriteTutorialIds).forEach(function (id) {
        if (out.bookmarkedIds.indexOf(id) < 0) out.bookmarkedIds.push(id);
      });
    }

    return out;
  }

  function load() {
    if (state) return state;
    state = probe() ? parse(readRaw()) : empty();
    return state;
  }

  /*
   * The single write path. Everything that changes learner state goes through
   * here, which is what makes the read-only lock a guarantee rather than a
   * convention: there is no second place a v2 record could be written from.
   */
  function persist() {
    if (!state) return false;
    if (readOnlyReason) return false;
    return writeRaw(JSON.stringify(state));
  }

  /* --------------------------------------------------------------- catalog */

  function catalog() {
    return window.JDXI_TUTORIALS || {};
  }

  function specialtyLessons() {
    return (window.JDXI_SPECIALTY || {}).lessons || {};
  }

  function known(id) {
    return Object.prototype.hasOwnProperty.call(catalog(), id);
  }

  function knownSpecialty(id) {
    return Object.prototype.hasOwnProperty.call(specialtyLessons(), id);
  }

  /* A bookmark may be either kind, which is the one place the two models
     deliberately share a list. */
  function bookmarkable(id) {
    return known(id) || knownSpecialty(id);
  }

  /*
   * Stored ids are hints, not guarantees: content evolves and stored state does
   * not. Unknown ids are ignored on read and dropped on the next write, rather
   * than rendering as broken entries.
   */
  function filterBy(list, test) {
    return list.filter(test);
  }

  /* ---------------------------------------------------------------- public */

  function isAvailable() {
    load();
    return probe();
  }

  /*
   * Whether this session may write, and why not when it may not. Kept separate
   * from `isAvailable`, which answers a different question - "does this browser
   * give us storage at all" - and whose answer drives learner-facing wording
   * about the BROWSER. A future record is not a browser problem, and saying so
   * would be inaccurate, so it is reported as its own reason.
   */
  function persistence() {
    load();
    var usable = probe();
    return {
      writable: usable && !readOnlyReason,
      reason: readOnlyReason ? readOnlyReason : usable ? "ok" : "unavailable",
      storedSchemaVersion: futureSchemaVersion,
    };
  }

  /* Convenience for the common check. True only in the future-record case. */
  function isReadOnly() {
    load();
    return readOnlyReason !== null;
  }

  function completed() {
    return filterBy(load().completedTutorialIds, known);
  }

  function isComplete(id) {
    return completed().indexOf(id) >= 0;
  }

  /*
   * The only way a canonical tutorial becomes complete. Reaching the last step
   * does not do it, and neither does deep-linking to the last step - which is
   * the whole point of the change (master plan sec 22).
   */
  function finish(id) {
    if (!known(id)) return false;
    var s = load();
    if (s.completedTutorialIds.indexOf(id) < 0) {
      s.completedTutorialIds.push(id);
      s.completedTutorialIds = filterBy(s.completedTutorialIds, known);
      persist();
    }
    return true;
  }

  /* Specialty completion, tracked apart from the canonical thirty. */
  function specialtyCompleted() {
    return filterBy(load().completedSpecialtyIds, knownSpecialty);
  }

  function isSpecialtyComplete(id) {
    return specialtyCompleted().indexOf(id) >= 0;
  }

  function finishSpecialty(id) {
    if (!knownSpecialty(id)) return false;
    var s = load();
    if (s.completedSpecialtyIds.indexOf(id) < 0) {
      s.completedSpecialtyIds.push(id);
      s.completedSpecialtyIds = filterBy(s.completedSpecialtyIds, knownSpecialty);
      persist();
    }
    return true;
  }

  /* ------------------------------------------------------------ bookmarks */

  function bookmarks() {
    return filterBy(load().bookmarkedIds, bookmarkable);
  }

  function isBookmarked(id) {
    return bookmarks().indexOf(id) >= 0;
  }

  function toggleBookmark(id) {
    if (!bookmarkable(id)) return false;
    var s = load();
    var at = s.bookmarkedIds.indexOf(id);
    if (at >= 0) s.bookmarkedIds.splice(at, 1);
    else s.bookmarkedIds.push(id);
    /* Drop any stale ids while we are writing anyway. */
    s.bookmarkedIds = filterBy(s.bookmarkedIds, bookmarkable);
    persist();
    return isBookmarked(id);
  }

  /* --------------------------------------------------------------- resume */

  /*
   * Where the learner was last working, or null when the stored tutorial no
   * longer exists.
   *
   * `stepIndex` is still always a usable index, so every existing caller keeps
   * working unchanged. What is NEW is that the result says whether that index
   * is the learner's actual recorded position or a fallback:
   *
   *   stepStatus "exact"   - the stored step id resolved; stepIndex IS where
   *                          they were, and `stepResolved` is true
   *   stepStatus "stale"   - a step id was stored but the curriculum no longer
   *                          contains it (steps renumbered, a step removed)
   *   stepStatus "missing" - the record named a tutorial but never a step
   *
   * For the last two, stepIndex falls back to 0 so navigation still works, but
   * `stepResolved` is false and a caller must not word it as "you were on step
   * 1" - the honest statement is that the exact place could not be recovered.
   * Silently presenting the fallback as a remembered position is the defect
   * this flag exists to make impossible.
   *
   * Canonical only. A specialty lesson is optional and outside the guided
   * path, so it never becomes the thing Home offers to continue.
   */
  function resume() {
    var s = load();
    var tut = s.currentTutorialId && catalog()[s.currentTutorialId];
    if (!tut) return null;
    var storedStepId = typeof s.currentStepId === "string" ? s.currentStepId : null;
    var found = -1;
    if (storedStepId) {
      for (var i = 0; i < tut.steps.length; i++) {
        if (tut.steps[i].id === storedStepId) {
          found = i;
          break;
        }
      }
    }
    var resolved = found >= 0;
    return {
      id: s.currentTutorialId,
      tutorial: tut,
      stepIndex: resolved ? found : 0,
      stepResolved: resolved,
      stepStatus: resolved ? "exact" : storedStepId ? "stale" : "missing",
      storedStepId: storedStepId,
    };
  }

  /* The resume point, but only when there is something left to do in it. */
  function unfinishedResume() {
    var r = resume();
    if (!r) return null;
    return isComplete(r.id) ? null : r;
  }

  /*
   * Records position. It does NOT complete anything - that is `finish`.
   * Specialty visits are ignored entirely, so an optional lesson can never
   * become the Continue card or displace canonical guided work.
   */
  function noteVisit(tutorialId, stepIndex) {
    var tut = catalog()[tutorialId];
    if (!tut) return;
    var step = tut.steps[stepIndex];
    if (!step) return;
    var s = load();
    if (s.currentTutorialId === tutorialId && s.currentStepId === step.id) return;
    s.currentTutorialId = tutorialId;
    s.currentStepId = step.id;
    persist();
  }

  /* Where the learner had got to in one tutorial, or null. */
  function stepIndexFor(tutorialId) {
    var s = load();
    if (s.currentTutorialId !== tutorialId) return null;
    var tut = catalog()[tutorialId];
    if (!tut || !s.currentStepId) return null;
    for (var i = 0; i < tut.steps.length; i++) {
      if (tut.steps[i].id === s.currentStepId) return i;
    }
    return null;
  }

  function levelCounts(level) {
    var all = catalog();
    var total = 0;
    var done = 0;
    Object.keys(all).forEach(function (id) {
      if (all[id].level !== level) return;
      total++;
      if (isComplete(id)) done++;
    });
    return { total: total, done: done };
  }

  /* --------------------------------------------------------------- resets */

  /*
   * Three separate resets, because they destroy different things and a learner
   * may well want one without the other (master plan sec 25).
   *
   * The partial resets go through `persist`, so while a future record holds the
   * read-only lock they clear the session but cannot be saved - writing a v2
   * record over a newer one is exactly what the lock prevents, and a reset is
   * not a special case. `resetEverything` is different: it DELETES the key
   * rather than rewriting it, which destroys nothing this build could have
   * misread, so it is allowed through and releases the lock afterwards.
   */
  function resetProgress() {
    var s = load();
    s.completedTutorialIds = [];
    s.completedSpecialtyIds = [];
    s.currentTutorialId = null;
    s.currentStepId = null;
    persist();
  }

  function resetBookmarks() {
    var s = load();
    s.bookmarkedIds = [];
    persist();
  }

  function resetEverything() {
    state = empty();
    try {
      window.localStorage.removeItem(KEY);
      /* The newer record is gone, so there is nothing left to protect and
         this session can persist normally again. */
      readOnlyReason = null;
      futureSchemaVersion = null;
    } catch (e) {
      storageWorks = false;
    }
  }

  return {
    isAvailable: isAvailable,
    persistence: persistence,
    isReadOnly: isReadOnly,

    completed: completed,
    isComplete: isComplete,
    finish: finish,

    specialtyCompleted: specialtyCompleted,
    isSpecialtyComplete: isSpecialtyComplete,
    finishSpecialty: finishSpecialty,

    bookmarks: bookmarks,
    isBookmarked: isBookmarked,
    toggleBookmark: toggleBookmark,

    resume: resume,
    unfinishedResume: unfinishedResume,
    noteVisit: noteVisit,
    stepIndexFor: stepIndexFor,
    levelCounts: levelCounts,

    resetProgress: resetProgress,
    resetBookmarks: resetBookmarks,
    resetEverything: resetEverything,

    _schemaVersion: SCHEMA_VERSION,
    _migratedFrom: function () { return migratedFrom; },
  };
})();
