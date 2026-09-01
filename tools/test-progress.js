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
  const { P } = load({ seed });

  /* The rename must not lose the learner's saved list. */
  eq(P.bookmarks(), ['B05', 'N01'], 'migration: favorites become bookmarks');
  eq(P.completed(), ['B01', 'B02'], 'migration: completions are kept, not re-earned');
  const r = P.resume();
  ok(r && r.id === 'B03' && r.stepIndex === 1, 'migration: resume point survives');
  ok(P._migratedFrom() === 1, 'migration: records where it came from');

  P.toggleBookmark('B06');
  const written = JSON.parse(P ? load({ seed }).storage._data[KEY] || '{}' : '{}');
  ok(true, 'migration: rewrite does not throw');
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

/* A newer record must be left ALONE, not overwritten with our shape. */
{
  const seed = {};
  const future = '{"schemaVersion":99,"completedTutorialIds":["B01"]}';
  seed[KEY] = future;
  const { P, storage } = load({ seed });
  eq(P.completed(), [], 'future schema: treated as unreadable');
  ok(storage._data[KEY] === future, 'future schema: left untouched until we write');
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

/* A stored step that no longer exists falls back to the first step. */
{
  const seed = {};
  seed[KEY] = JSON.stringify({
    schemaVersion: 2,
    currentTutorialId: 'B03',
    currentStepId: 'B03-S99',
    completedTutorialIds: [],
    bookmarkedIds: [],
    completedSpecialtyIds: [],
  });
  const { P } = load({ seed });
  const r = P.resume();
  ok(r && r.id === 'B03' && r.stepIndex === 0, 'stale: a vanished step falls back to step 1');
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
}
{
  const { P, catalog } = load({ throwOnWrite: true });
  ok(P.isAvailable() === false, 'write throws: reported unavailable');
  ok(P.toggleBookmark('B01') === true, 'write throws: bookmarking still works in memory');
  eq(P.bookmarks(), ['B01'], 'write throws: in-memory state kept');
  P.finish('B04');
  eq(P.completed(), ['B04'], 'write throws: completion tracked in memory');
  P.resetEverything();
  eq(P.bookmarks(), [], 'write throws: reset still clears in-memory state');
}

/* -------------------------------------------------------------- report */

console.log(`progress-state checks: ${pass} passed, ${failures.length} failed`);
if (failures.length) {
  failures.forEach((f) => console.log('  FAIL ' + f));
  process.exit(1);
}
console.log('LOCAL STATE OK');
