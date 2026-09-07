/*
 * JD-Xi Tutorial Hub - development-only tests for the local learner state.
 *
 *   node tools/test-progress.js
 *
 * No dependencies. Loads js/progress.js against a fake localStorage so every
 * failure mode can be provoked deliberately: malformed JSON, missing fields,
 * stale ids, a record written by a newer build, and storage that throws on
 * read or on write.
 *
 * The contract under test is that the application stays fully navigable when
 * storage misbehaves. Only persistence may degrade.
 *
 * Two integrity rules get their own sections below, because both failed
 * silently - the app looked correct while the data underneath it was wrong:
 *
 *   - a record from a NEWER build must survive this build's writes, not just
 *     its reads (search "future schema");
 *   - a stored step id that no longer resolves must not be presented as the
 *     learner's remembered position (search "step resolution").
 */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');

let pass = 0;
const failures = [];
function ok(cond, name) {
  if (cond) pass++;
  else failures.push(name);
}
function eq(a, b, name) {
  ok(JSON.stringify(a) === JSON.stringify(b), `${name} (got ${JSON.stringify(a)}, want ${JSON.stringify(b)})`);
}

/* A localStorage stand-in that can be told to misbehave. */
function makeStorage(opts) {
  opts = opts || {};
  const data = Object.assign({}, opts.seed);
  return {
    getItem(k) {
      if (opts.throwOnRead) throw new Error('read blocked');
      return k in data ? data[k] : null;
    },
    setItem(k, v) {
      if (opts.throwOnWrite) throw new Error('write blocked');
      data[k] = String(v);
    },
    removeItem(k) {
      if (opts.throwOnWrite) throw new Error('write blocked');
      delete data[k];
    },
    _data: data,
  };
}

/* Fresh module instance per case: the module memoizes, which is the point. */
function load(storageOpts) {
  const sandbox = { window: { localStorage: makeStorage(storageOpts) }, console };
  sandbox.globalThis = sandbox;
  vm.createContext(sandbox);
  ['js/tutorials.js', 'js/specialty.js', 'js/progress.js'].forEach((rel) => {
    vm.runInContext(fs.readFileSync(path.join(ROOT, rel), 'utf8'), sandbox, { filename: rel });
  });
  return {
    P: sandbox.window.JDXI_PROGRESS,
    storage: sandbox.window.localStorage,
    catalog: sandbox.window.JDXI_TUTORIALS,
    specialty: sandbox.window.JDXI_SPECIALTY,
  };
}

/*
 * Never hard-code a step count. Curriculum reconciliation changes them, and a
 * fixture that says "B04 has 8 steps" turns a content edit into a test failure
 * that looks like a regression in storage.
 */
function lastStep(catalog, id) {
  return catalog[id].steps.length - 1;
}

const KEY = 'jdxi.tutorial-hub.progress';

/* B03's real first step id, read from the catalog rather than spelled out, for
   the same reason step counts are never hard-coded here. */
function catalogFirstStepId() {
  const sandbox = { window: { localStorage: makeStorage() }, console };
  sandbox.globalThis = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'js/tutorials.js'), 'utf8'), sandbox);
  return sandbox.window.JDXI_TUTORIALS.B03.steps[0].id;
}

/* ---------------------------------------------------------------- empty */
{
  const { P } = load();
  ok(P.isAvailable() === true, 'empty: storage reports available');
  eq(P.completed(), [], 'empty: no completed tutorials');
  eq(P.bookmarks(), [], 'empty: no bookmarks');
  eq(P.specialtyCompleted(), [], 'empty: no specialty completions');
  ok(P.resume() === null, 'empty: no resume point');
  ok(P.unfinishedResume() === null, 'empty: no unfinished resume point');
  eq(P.levelCounts('beginner'), { total: 10, done: 0 }, 'empty: level counts');
  ok(P._schemaVersion === 2, 'empty: schema version is 2');
}

/* -------------------------------------------- completion is EXPLICIT only */
{
  const { P, catalog } = load();
  const last = catalog.B04.steps.length - 1;

  /* The heart of the master-plan change: visiting the last step, however you
     arrive at it, must not complete the tutorial. */
  P.noteVisit('B04', 0);
  eq(P.completed(), [], 'explicit: first step does not complete');
  P.noteVisit('B04', last);
  eq(P.completed(), [], 'explicit: REACHING the last step does not complete');
  eq(P.levelCounts('beginner'), { total: 10, done: 0 }, 'explicit: nothing counted yet');

  P.finish('B04');
  eq(P.completed(), ['B04'], 'explicit: finish() completes');
  ok(P.isComplete('B04') === true, 'explicit: reported complete');
  P.finish('B04');
  eq(P.completed(), ['B04'], 'explicit: finishing twice does not duplicate');
  eq(P.levelCounts('beginner'), { total: 10, done: 1 }, 'explicit: level count follows');

  ok(P.finish('NOPE') === false, 'explicit: unknown id refused');
  eq(P.completed(), ['B04'], 'explicit: unknown id not stored');
  ok(P.finish('vocoder') === false, 'explicit: a specialty id is not canonical');
}

/* ----------------------------------------------------- resume, and finishing */
{
  const { P } = load();
  P.noteVisit('B05', 3);
  const r = P.resume();
  ok(r && r.id === 'B05' && r.stepIndex === 3, 'resume: records the visited step');
  ok(P.stepIndexFor('B05') === 3, 'resume: stepIndexFor agrees');
  ok(P.stepIndexFor('B06') === null, 'resume: stepIndexFor is null for another tutorial');

  const u = P.unfinishedResume();
  ok(u && u.id === 'B05', 'resume: unfinished while incomplete');
  P.finish('B05');
  ok(P.resume() !== null, 'resume: raw resume point survives completion');
  ok(P.unfinishedResume() === null, 'resume: a completed tutorial is not something to continue');
}

/* ------------------------------------------------------ specialty is apart */
{
  const { P, specialty } = load();
  const sid = specialty.order[0];
  ok(P.finishSpecialty(sid) === true, 'specialty: finishes');
  eq(P.specialtyCompleted(), [sid], 'specialty: tracked in its own list');
  eq(P.completed(), [], 'specialty: NEVER appears in canonical completions');
  eq(P.levelCounts('beginner'), { total: 10, done: 0 }, 'specialty: never counted in a level');
  ok(P.finishSpecialty('B01') === false, 'specialty: a canonical id is not specialty');

  P.noteVisit(sid, 0);
  ok(P.resume() === null, 'specialty: visiting one never becomes the resume point');
}

/* ------------------------------------------------------------- bookmarks */
{
  const { P, specialty } = load();
  const sid = specialty.order[0];
  ok(P.toggleBookmark('B01') === true, 'bookmark: toggling on returns true');
  ok(P.isBookmarked('B01') === true, 'bookmark: reported bookmarked');
  ok(P.toggleBookmark(sid) === true, 'bookmark: a specialty lesson can be bookmarked');
  eq(P.bookmarks(), ['B01', sid], 'bookmark: both kinds share one list');
  ok(P.toggleBookmark('B01') === false, 'bookmark: toggling off returns false');
  eq(P.bookmarks(), [sid], 'bookmark: removed');
  ok(P.toggleBookmark('NOPE') === false, 'bookmark: unknown id refused');
  eq(P.bookmarks(), [sid], 'bookmark: unknown id not stored');
}

/* ------------------------------------------- schema 1 migration, not loss */
{
  const seed = {};
  seed[KEY] = JSON.stringify({
    schemaVersion: 1,
    completedTutorialIds: ['B01', 'B02'],
    currentTutorialId: 'B03',
    currentStepId: 'B03-S02',
    favoriteTutorialIds: ['B05', 'N01'],
  });
  const { P, storage } = load({ seed });

  /* The rename must not lose the learner's saved list. */
  eq(P.bookmarks(), ['B05', 'N01'], 'migration: favorites become bookmarks');
  eq(P.completed(), ['B01', 'B02'], 'migration: completions are kept, not re-earned');
  const r = P.resume();
  ok(r && r.id === 'B03' && r.stepIndex === 1, 'migration: resume point survives');
  ok(P._migratedFrom() === 1, 'migration: records where it came from');

  /* Migration is only half done until it is written back at the new version:
     a v1 record that is read as v2 but re-saved as v1 migrates on every load
     forever, and never actually moves. */
  P.toggleBookmark('B06');
  const written = JSON.parse(storage._data[KEY]);
  ok(written.schemaVersion === 2, 'migration: the rewritten record is at schema 2');
  eq(written.bookmarkedIds, ['B05', 'N01', 'B06'], 'migration: migrated bookmarks are persisted');
  eq(written.completedTutorialIds, ['B01', 'B02'], 'migration: completions are persisted');
  ok(written.currentStepId === 'B03-S02', 'migration: the resume point is persisted');
  ok(!('favoriteTutorialIds' in written), 'migration: the v1 field is not written back');
}

/* A record already at schema 2 must not be re-migrated. */
{
  const seed = {};
  seed[KEY] = JSON.stringify({
    schemaVersion: 2,
    completedTutorialIds: ['B01'],
    bookmarkedIds: ['B02'],
    favoriteTutorialIds: ['B09'],
    completedSpecialtyIds: [],
    currentTutorialId: null,
    currentStepId: null,
  });
  const { P } = load({ seed });
  eq(P.bookmarks(), ['B02'], 'migration: a v2 record ignores a stray v1 field');
  ok(P._migratedFrom() === null, 'migration: a v2 record is not marked migrated');
}

/* ----------------------------------------------------- malformed records */
{
  const bad = [
    ['not json at all', 'garbage text'],
    ['[]', 'a JSON array'],
    ['null', 'JSON null'],
    ['{"schemaVersion":"two"}', 'a non-numeric schema version'],
    ['{"schemaVersion":99,"completedTutorialIds":["B01"]}', 'a newer schema'],
  ];
  bad.forEach(([text, what]) => {
    const seed = {};
    seed[KEY] = text;
    const { P } = load({ seed });
    eq(P.completed(), [], `malformed: ${what} yields an empty state`);
    eq(P.bookmarks(), [], `malformed: ${what} yields no bookmarks`);
    ok(P.resume() === null, `malformed: ${what} yields no resume point`);
  });
}

/* ------------------------------------------------- future schema, untouched
 *
 * Rejecting a newer record on READ is only half the guarantee. The defect this
 * section exists for: the read was correct, and then the very next write put a
 * v2 record over the top of it, destroying data a later build owned. Every
 * write path is therefore asserted separately - one unguarded path is enough
 * to lose the record.
 */
const FUTURE = JSON.stringify({
  schemaVersion: 99,
  completedTutorialIds: ['B01'],
  bookmarkedIds: ['B02'],
  /* A field only the newer build knows about. If anything here rewrites the
     record, this is the part that proves data was lost rather than reshaped. */
  somethingWeCannotKnowAbout: { learnerNotes: 'keep me' },
});
function futureSeed() {
  const seed = {};
  seed[KEY] = FUTURE;
  return seed;
}

{
  const { P, storage } = load({ seed: futureSeed() });
  eq(P.completed(), [], 'future schema: treated as unreadable');
  eq(P.bookmarks(), [], 'future schema: its bookmarks are not adopted either');
  ok(storage._data[KEY] === FUTURE, 'future schema: untouched by a plain load');
  ok(P.isReadOnly() === true, 'future schema: persistence is marked read-only');
  const st = P.persistence();
  ok(st.writable === false, 'future schema: persistence reports not writable');
  ok(st.reason === 'future-schema', 'future schema: the reason names the cause');
  ok(st.storedSchemaVersion === 99, 'future schema: the stored version is reported');
}

/* Each write path, one at a time. */
[
  ['noteVisit', (P) => P.noteVisit('B04', 2)],
  ['finish', (P) => P.finish('B04')],
  ['toggleBookmark', (P) => P.toggleBookmark('B01')],
  ['finishSpecialty', (P, ctx) => P.finishSpecialty(ctx.specialty.order[0])],
  ['resetProgress', (P) => P.resetProgress()],
  ['resetBookmarks', (P) => P.resetBookmarks()],
].forEach(([what, act]) => {
  const ctx = load({ seed: futureSeed() });
  act(ctx.P, ctx);
  ok(ctx.storage._data[KEY] === FUTURE, `future schema: ${what} leaves the newer record untouched`);
});

/* Everything at once, in the order a real session would do it. */
{
  const { P, storage, specialty } = load({ seed: futureSeed() });
  P.noteVisit('B04', 1);
  P.finish('B04');
  P.toggleBookmark('B06');
  P.finishSpecialty(specialty.order[0]);
  P.noteVisit('B05', 3);
  ok(storage._data[KEY] === FUTURE, 'future schema: a whole session of writes leaves it untouched');

  /* ...and the learner was not stopped from doing any of it. */
  eq(P.completed(), ['B04'], 'future schema: completion still works in memory');
  eq(P.bookmarks(), ['B06'], 'future schema: bookmarking still works in memory');
  eq(P.specialtyCompleted(), [specialty.order[0]], 'future schema: specialty still works in memory');
  const r = P.resume();
  ok(r && r.id === 'B05' && r.stepIndex === 3, 'future schema: the resume point still works in memory');
  ok(r.stepResolved === true, 'future schema: an in-memory visit resolves exactly');
  eq(P.levelCounts('beginner'), { total: 10, done: 1 }, 'future schema: level counts still work in memory');
}

/*
 * The one deliberate exception. `resetEverything` DELETES the key rather than
 * rewriting it, so it destroys nothing this build could have misread - the
 * learner asked for exactly that. Afterwards there is no newer record left to
 * protect, so the session must be able to save again.
 */
{
  const { P, storage } = load({ seed: futureSeed() });
  P.resetEverything();
  ok(!(KEY in storage._data), 'future schema: an explicit reset still deletes the record');
  ok(P.isReadOnly() === false, 'future schema: deleting the record releases the lock');
  P.finish('B04');
  const after = JSON.parse(storage._data[KEY]);
  ok(after.schemaVersion === 2, 'future schema: the session persists normally after the reset');
  eq(after.completedTutorialIds, ['B04'], 'future schema: the post-reset write lands');
}

/*
 * Corrupt is NOT future. A record we cannot parse carries nothing worth
 * protecting, and locking on it would leave the learner unable to save for the
 * rest of the session because of one bad byte.
 */
[
  ['garbage text', 'not json at all'],
  ['a JSON array', '[]'],
  ['JSON null', 'null'],
  ['a non-numeric schema version', '{"schemaVersion":"two"}'],
  ['a missing schema version', '{"completedTutorialIds":["B01"]}'],
].forEach(([what, text]) => {
  const seed = {};
  seed[KEY] = text;
  const { P, storage } = load({ seed });
  ok(P.isReadOnly() === false, `corrupt vs future: ${what} does NOT lock persistence`);
  ok(P.persistence().reason === 'ok', `corrupt vs future: ${what} reports a writable state`);
  P.finish('B04');
  const after = JSON.parse(storage._data[KEY]);
  ok(after.schemaVersion === 2, `corrupt vs future: ${what} is replaced by a v2 record`);
  eq(after.completedTutorialIds, ['B04'], `corrupt vs future: ${what} does not block the write`);
});

/* And an ordinary v2 session writes exactly what it should. */
{
  const { P, storage } = load();
  ok(P.isReadOnly() === false, 'normal writes: not read-only');
  eq(P.persistence(), { writable: true, reason: 'ok', storedSchemaVersion: null },
    'normal writes: persistence reports a plain writable state');
  P.noteVisit('B07', 2);
  P.finish('B07');
  P.toggleBookmark('B08');
  const after = JSON.parse(storage._data[KEY]);
  ok(after.schemaVersion === 2, 'normal writes: stored at schema 2');
  eq(after.completedTutorialIds, ['B07'], 'normal writes: completion persisted');
  eq(after.bookmarkedIds, ['B08'], 'normal writes: bookmark persisted');
  ok(after.currentTutorialId === 'B07', 'normal writes: resume tutorial persisted');
  ok(typeof after.currentStepId === 'string', 'normal writes: resume step persisted');
}

/* --------------------------------------------------------- stale ids drop */
{
  const seed = {};
  seed[KEY] = JSON.stringify({
    schemaVersion: 2,
    completedTutorialIds: ['B01', 'GONE'],
    bookmarkedIds: ['B02', 'ALSO-GONE'],
    completedSpecialtyIds: ['nope'],
    currentTutorialId: 'VANISHED',
    currentStepId: 'VANISHED-S01',
  });
  const { P } = load({ seed });
  eq(P.completed(), ['B01'], 'stale: unknown completion ignored');
  eq(P.bookmarks(), ['B02'], 'stale: unknown bookmark ignored');
  eq(P.specialtyCompleted(), [], 'stale: unknown specialty completion ignored');
  ok(P.resume() === null, 'stale: a vanished resume tutorial yields no resume point');
}

/* ------------------------------------------------------- step resolution
 *
 * A stored step id that no longer exists still falls back to index 0, so
 * navigation keeps working. The defect was that the result was then
 * INDISTINGUISHABLE from a learner genuinely sitting on step 1, which let the
 * app tell them it remembered a position it had actually invented. The index
 * stays; what is asserted here is that the result says which it is.
 */
function resumeSeed(stepId) {
  const seed = {};
  seed[KEY] = JSON.stringify({
    schemaVersion: 2,
    currentTutorialId: 'B03',
    currentStepId: stepId,
    completedTutorialIds: [],
    bookmarkedIds: [],
    completedSpecialtyIds: [],
  });
  return seed;
}

{
  const { P } = load({ seed: resumeSeed('B03-S99') });
  const r = P.resume();
  ok(r && r.id === 'B03', 'step resolution: a vanished step keeps the tutorial');
  ok(r.stepIndex === 0, 'step resolution: a vanished step still falls back to index 0');
  ok(r.stepResolved === false, 'step resolution: a vanished step is NOT reported as resolved');
  ok(r.stepStatus === 'stale', 'step resolution: a vanished step is reported stale');
  ok(r.storedStepId === 'B03-S99', 'step resolution: the unresolvable id is reported for diagnostics');
  /* stepIndexFor already answered honestly, and direct-entry routing depends
     on it staying that way. */
  ok(P.stepIndexFor('B03') === null, 'step resolution: stepIndexFor stays null for a vanished step');
}

{
  const { P, catalog } = load({ seed: resumeSeed(catalogFirstStepId()) });
  const r = P.resume();
  ok(r.stepIndex === 0, 'step resolution: a genuine step 1 is index 0');
  ok(r.stepResolved === true, 'step resolution: a genuine step 1 IS resolved');
  ok(r.stepStatus === 'exact', 'step resolution: a genuine step 1 is exact');
  ok(P.stepIndexFor('B03') === 0, 'step resolution: stepIndexFor agrees on a genuine step 1');
  ok(catalog.B03.steps[0].id === r.storedStepId, 'step resolution: the stored id is echoed back');
}

/* A record that names a tutorial but no step at all: also not step 1. */
{
  const { P } = load({ seed: resumeSeed(null) });
  const r = P.resume();
  ok(r && r.id === 'B03', 'step resolution: a stepless record still resumes the tutorial');
  ok(r.stepIndex === 0, 'step resolution: a stepless record falls back to index 0');
  ok(r.stepResolved === false, 'step resolution: a stepless record is not resolved');
  ok(r.stepStatus === 'missing', 'step resolution: a stepless record is reported missing');
  ok(r.storedStepId === null, 'step resolution: a stepless record reports no stored id');
}

/* A step recorded this session must always resolve exactly - including the
   real first step, which is the case the fallback could otherwise mask. */
{
  const { P, catalog } = load();
  P.noteVisit('B03', 0);
  const first = P.resume();
  ok(first.stepIndex === 0 && first.stepResolved === true,
    'step resolution: visiting step 1 resolves exactly');
  ok(first.stepStatus === 'exact', 'step resolution: a visited step 1 is exact');
  P.noteVisit('B03', 2);
  const later = P.resume();
  ok(later.stepIndex === 2 && later.stepResolved === true,
    'step resolution: a later visited step resolves exactly');
  ok(later.storedStepId === catalog.B03.steps[2].id, 'step resolution: the visited id round-trips');
}

/* unfinishedResume is the same object, so the flags must reach the Home card. */
{
  const { P } = load({ seed: resumeSeed('B03-S99') });
  const u = P.unfinishedResume();
  ok(u && u.stepResolved === false, 'step resolution: unfinishedResume carries the flag');
  ok(u.stepStatus === 'stale', 'step resolution: unfinishedResume carries the status');
}

/* ------------------------------------------------- three separate resets */
{
  const { P, catalog, specialty } = load();
  P.finish('B01');
  P.finishSpecialty(specialty.order[0]);
  P.noteVisit('B03', 2);
  P.toggleBookmark('B05');

  P.resetProgress();
  eq(P.completed(), [], 'resetProgress: completions cleared');
  eq(P.specialtyCompleted(), [], 'resetProgress: specialty completions cleared');
  ok(P.resume() === null, 'resetProgress: resume point cleared');
  eq(P.bookmarks(), ['B05'], 'resetProgress: bookmarks KEPT');
}
{
  const { P } = load();
  P.finish('B01');
  P.toggleBookmark('B05');
  P.resetBookmarks();
  eq(P.bookmarks(), [], 'resetBookmarks: bookmarks cleared');
  eq(P.completed(), ['B01'], 'resetBookmarks: progress KEPT');
}
{
  const { P, storage } = load();
  P.finish('B01');
  P.toggleBookmark('B05');
  P.resetEverything();
  eq(P.completed(), [], 'resetEverything: completions cleared');
  eq(P.bookmarks(), [], 'resetEverything: bookmarks cleared');
  ok(!(KEY in storage._data), 'resetEverything: the stored record is removed');
}

/* ------------------------------------------------------- storage failures */
{
  const { P } = load({ throwOnRead: true });
  ok(P.isAvailable() === false, 'read throws: reported unavailable');
  eq(P.completed(), [], 'read throws: degrades to an empty state');
  ok(P.toggleBookmark('B01') === true, 'read throws: still usable in memory');
  /* The reason string, not just the boolean: the UI now picks its wording from
     it, and a browser that gives us nothing must never be described with the
     future-record wording - or the learner is told to reset progress that does
     not exist, for a problem that is not theirs. */
  ok(P.persistence().reason === 'unavailable',
    'read throws: the reason is the browser, not a newer record');
  ok(P.persistence().storedSchemaVersion === null,
    'read throws: no schema version is reported for a browser problem');
  ok(P.isReadOnly() === false,
    'read throws: unavailable storage is not the read-only future-record lock');
}
{
  const { P, catalog } = load({ throwOnWrite: true });
  ok(P.isAvailable() === false, 'write throws: reported unavailable');
  ok(P.persistence().reason === 'unavailable',
    'write throws: the reason is the browser, not a newer record');
  ok(P.toggleBookmark('B01') === true, 'write throws: bookmarking still works in memory');
  eq(P.bookmarks(), ['B01'], 'write throws: in-memory state kept');
  P.finish('B04');
  eq(P.completed(), ['B04'], 'write throws: completion tracked in memory');
  P.resetEverything();
  eq(P.bookmarks(), [], 'write throws: reset still clears in-memory state');
}

/* ------------------------------------------------------- module surface */
{
  const { P } = load();
  ok(typeof P.persistence === 'function', 'surface: persistence() is exported');
  ok(typeof P.isReadOnly === 'function', 'surface: isReadOnly() is exported');
  /* Kept: both are read by diagnostics and the Settings surface. */
  ok(P._schemaVersion === 2, 'surface: _schemaVersion is kept');
  ok(typeof P._migratedFrom === 'function', 'surface: _migratedFrom is kept');
  /* Removed: nothing in the app, the tools or the tests ever read it, and a
     published storage key invites a second write path around `persist`. */
  ok(!('_key' in P), 'surface: the unreferenced _key export is gone');
}

/* -------------------------------------------------------------- report */

console.log(`progress-state checks: ${pass} passed, ${failures.length} failed`);
if (failures.length) {
  failures.forEach((f) => console.log('  FAIL ' + f));
  process.exit(1);
}
console.log('LOCAL STATE OK');
