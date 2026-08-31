/*
 * JD-Xi Tutorial Hub - local learner state.
 *
 * One namespaced record holding the whole ProgressState
 * (docs/TUTORIAL-ARCHITECTURE.md §12): completion, resume point, and
 * favourites. One key, so reads and writes stay coherent and "reset" is a
 * single deletion rather than a hunt for stragglers.
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
 * Classic script on purpose - no modules, no fetch.
 */

window.JDXI_PROGRESS = (function () {
  "use strict";

  var KEY = "jdxi.tutorial-hub.progress";
  var SCHEMA_VERSION = 1;

  /* In-memory fallback. Also the working copy: reads go through here once
     loaded, so a mid-session storage failure cannot lose what the learner did
     while the app is still open. */
  var state = null;
  var storageWorks = null; // null = not yet probed

  function empty() {
    return {
      schemaVersion: SCHEMA_VERSION,
      completedTutorialIds: [],
      currentTutorialId: null,
      currentStepId: null,
      favoriteTutorialIds: [],
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
    if (typeof raw.schemaVersion !== "number" || raw.schemaVersion > SCHEMA_VERSION) {
      return empty();
    }
    return {
      schemaVersion: SCHEMA_VERSION,
      completedTutorialIds: idList(raw.completedTutorialIds),
      currentTutorialId:
        typeof raw.currentTutorialId === "string" ? raw.currentTutorialId : null,
      currentStepId: typeof raw.currentStepId === "string" ? raw.currentStepId : null,
      favoriteTutorialIds: idList(raw.favoriteTutorialIds),
    };
  }

  function load() {
    if (state) return state;
    state = probe() ? parse(readRaw()) : empty();
    return state;
  }

  function persist() {
    if (!state) return false;
    return writeRaw(JSON.stringify(state));
  }

  /* --------------------------------------------------------------- catalog */

  function catalog() {
    return window.JDXI_TUTORIALS || {};
  }

  function known(id) {
    return Object.prototype.hasOwnProperty.call(catalog(), id);
  }

  /*
   * Stored ids are hints, not guarantees: content evolves and stored state does
   * not. Unknown ids are ignored on read and dropped on the next write, rather
   * than rendering as broken entries.
   */
  function knownOnly(list) {
    return list.filter(known);
  }

  /* ---------------------------------------------------------------- public */

  function isAvailable() {
    load();
    return probe();
  }

  function completed() {
    return knownOnly(load().completedTutorialIds);
  }

  function isComplete(id) {
    return completed().indexOf(id) >= 0;
  }

  function favorites() {
    return knownOnly(load().favoriteTutorialIds);
  }

  function isFavorite(id) {
    return favorites().indexOf(id) >= 0;
  }

  function toggleFavorite(id) {
    if (!known(id)) return false;
    var s = load();
    var at = s.favoriteTutorialIds.indexOf(id);
    if (at >= 0) s.favoriteTutorialIds.splice(at, 1);
    else s.favoriteTutorialIds.push(id);
    /* Drop any stale ids while we are writing anyway. */
    s.favoriteTutorialIds = knownOnly(s.favoriteTutorialIds);
    persist();
    return isFavorite(id);
  }

  /*
   * Where the learner was last working. A stored step that no longer exists
   * resolves to the tutorial's first step; a stored tutorial that no longer
   * exists yields no resume point at all.
   */
  function resume() {
    var s = load();
    var tut = s.currentTutorialId && catalog()[s.currentTutorialId];
    if (!tut) return null;
    var index = 0;
    if (s.currentStepId) {
      for (var i = 0; i < tut.steps.length; i++) {
        if (tut.steps[i].id === s.currentStepId) {
          index = i;
          break;
        }
      }
    }
    return { id: s.currentTutorialId, tutorial: tut, stepIndex: index };
  }

  function noteVisit(tutorialId, stepIndex) {
    var tut = catalog()[tutorialId];
    if (!tut) return;
    var step = tut.steps[stepIndex];
    if (!step) return;
    var s = load();
    var changed =
      s.currentTutorialId !== tutorialId || s.currentStepId !== step.id;
    s.currentTutorialId = tutorialId;
    s.currentStepId = step.id;

    /* Reaching the final step is what marks a tutorial complete. */
    if (stepIndex === tut.steps.length - 1 &&
        s.completedTutorialIds.indexOf(tutorialId) < 0) {
      s.completedTutorialIds.push(tutorialId);
      changed = true;
    }
    if (changed) {
      s.completedTutorialIds = knownOnly(s.completedTutorialIds);
      persist();
    }
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

  function reset() {
    state = empty();
    try {
      window.localStorage.removeItem(KEY);
    } catch (e) {
      storageWorks = false;
    }
  }

  return {
    isAvailable: isAvailable,
    completed: completed,
    isComplete: isComplete,
    favorites: favorites,
    isFavorite: isFavorite,
    toggleFavorite: toggleFavorite,
    resume: resume,
    noteVisit: noteVisit,
    levelCounts: levelCounts,
    reset: reset,
    _schemaVersion: SCHEMA_VERSION,
    _key: KEY,
  };
})();
