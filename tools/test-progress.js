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
  ['js/tutorials.js', 'js/progress.js'].forEach((rel) => {
    vm.runInContext(fs.readFileSync(path.join(ROOT, rel), 'utf8'), sandbox, { filename: rel });
  });
  return {
    P: sandbox.window.JDXI_PROGRESS,
    storage: sandbox.window.localStorage,
    catalog: sandbox.window.JDXI_TUTORIALS,
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
  eq(P.favorites(), [], 'empty: no favorites');
  ok(P.resume() === null, 'empty: no resume point');
  eq(P.levelCounts('beginner'), { total: 10, done: 0 }, 'empty: level counts');
}

/* ------------------------------------------------- save / read normal state */
{
  const { P, storage } = load();
  P.toggleFavorite('B03');
  P.noteVisit('B05', 1);
  const stored = JSON.parse(storage.getItem(KEY));
  eq(stored.favoriteTutorialIds, ['B03'], 'normal: favorite persisted');
  ok(stored.currentTutorialId === 'B05', 'normal: current tutorial persisted');
  ok(stored.schemaVersion === 1, 'normal: schema version written');

  const again = load({ seed: { [KEY]: JSON.stringify(stored) } });
  eq(again.P.favorites(), ['B03'], 'normal: favorite read back');
  ok(again.P.resume().id === 'B05', 'normal: resume read back');
  ok(again.P.resume().stepIndex === 1, 'normal: resume step read back');
}

/* --------------------------------------------------- favorite / unfavorite */
{
  const { P } = load();
  ok(P.toggleFavorite('B01') === true, 'favorite: toggling on returns true');
  ok(P.isFavorite('B01') === true, 'favorite: reported as favorite');
  ok(P.toggleFavorite('B01') === false, 'favorite: toggling off returns false');
  eq(P.favorites(), [], 'favorite: removed');
  ok(P.toggleFavorite('NOPE') === false, 'favorite: unknown id refused');
  eq(P.favorites(), [], 'favorite: unknown id not stored');
}

/* ------------------------------------------------------- mark tutorial done */
{
  const { P, catalog } = load();
  const last = lastStep(catalog, 'B04');
  P.noteVisit('B04', 0);
  eq(P.completed(), [], 'complete: first step does not complete');
  P.noteVisit('B04', last);
  eq(P.completed(), ['B04'], 'complete: final step completes');
  P.noteVisit('B04', last);
  eq(P.completed(), ['B04'], 'complete: not duplicated');
  eq(P.levelCounts('beginner'), { total: 10, done: 1 }, 'complete: level count follows');
}

/* ------------------------------------------------------------------- reset */
{
  const { P, storage } = load();
  P.toggleFavorite('B02');
  P.noteVisit('B02', 10);
  P.reset();
  eq(P.completed(), [], 'reset: completions cleared');
  eq(P.favorites(), [], 'reset: favorites cleared');
  ok(P.resume() === null, 'reset: resume cleared');
  ok(storage.getItem(KEY) === null, 'reset: key removed from storage');
}

/* ---------------------------------------------------------- malformed JSON */
{
  const { P } = load({ seed: { [KEY]: '{not json at all' } });
  eq(P.completed(), [], 'malformed: falls back to empty');
  ok(P.resume() === null, 'malformed: no resume');
  P.toggleFavorite('B01');
  eq(P.favorites(), ['B01'], 'malformed: still writable afterwards');
}

/* ------------------------------------------------------- wrong stored types */
{
  const { P } = load({ seed: { [KEY]: '"a string, not a record"' } });
  eq(P.completed(), [], 'wrong type: string record ignored');
}
{
  const { P } = load({ seed: { [KEY]: '[1,2,3]' } });
  eq(P.completed(), [], 'wrong type: array record ignored');
}

/* ------------------------------------------------------------ missing fields */
{
  const { P } = load({ seed: { [KEY]: JSON.stringify({ schemaVersion: 1 }) } });
  eq(P.completed(), [], 'missing fields: completed defaults to empty');
  eq(P.favorites(), [], 'missing fields: favorites defaults to empty');
  ok(P.resume() === null, 'missing fields: no resume');
}
{
  const { P } = load({ seed: { [KEY]: JSON.stringify({
    schemaVersion: 1, completedTutorialIds: 'B01', favoriteTutorialIds: { a: 1 },
  }) } });
  eq(P.completed(), [], 'wrong field types: non-array completed ignored');
  eq(P.favorites(), [], 'wrong field types: non-array favorites ignored');
}

/* ---------------------------------------------------------- unknown ids */
{
  const { P } = load({ seed: { [KEY]: JSON.stringify({
    schemaVersion: 1,
    completedTutorialIds: ['B01', 'GONE', 'N01'],
    favoriteTutorialIds: ['ALSOGONE', 'B02'],
  }) } });
  eq(P.completed(), ['B01', 'N01'], 'stale ids: unknown completions ignored');
  eq(P.favorites(), ['B02'], 'stale ids: unknown favorites ignored');
}

/* ------------------------------------------------------- unknown step id */
{
  const { P } = load({ seed: { [KEY]: JSON.stringify({
    schemaVersion: 1, currentTutorialId: 'B05', currentStepId: 'B05-S99',
  }) } });
  const r = P.resume();
  ok(r !== null, 'stale step: resume still offered');
  ok(r.id === 'B05', 'stale step: same tutorial');
  ok(r.stepIndex === 0, 'stale step: resolves to first step');
}

/* --------------------------------------------------- unknown tutorial id */
{
  const { P } = load({ seed: { [KEY]: JSON.stringify({
    schemaVersion: 1, currentTutorialId: 'GONE', currentStepId: 'GONE-S01',
  }) } });
  ok(P.resume() === null, 'stale tutorial: no resume point');
}

/* ------------------------------------------------ newer schema is unreadable */
{
  const { P } = load({ seed: { [KEY]: JSON.stringify({
    schemaVersion: 99,
    completedTutorialIds: ['B01', 'B02'],
    favoriteTutorialIds: ['B03'],
    currentTutorialId: 'B02',
  }) } });
  eq(P.completed(), [], 'newer schema: treated as unreadable, not guessed at');
  eq(P.favorites(), [], 'newer schema: favorites not read');
  ok(P.resume() === null, 'newer schema: no resume');
}

/* ------------------------------------------------------ read throws */
{
  const { P } = load({ throwOnRead: true });
  eq(P.completed(), [], 'read throws: empty state');
  ok(P.resume() === null, 'read throws: no resume');
  ok(P.toggleFavorite('B01') === true, 'read throws: favouriting still works in memory');
  eq(P.favorites(), ['B01'], 'read throws: in-memory state kept');
}

/* ----------------------------------------------------- write throws */
{
  const { P, catalog } = load({ throwOnWrite: true });
  ok(P.isAvailable() === false, 'write throws: reported unavailable');
  ok(P.toggleFavorite('B01') === true, 'write throws: favouriting still works in memory');
  eq(P.favorites(), ['B01'], 'write throws: in-memory state kept');
  P.noteVisit('B04', lastStep(catalog, 'B04'));
  eq(P.completed(), ['B04'], 'write throws: completion tracked in memory');
  P.reset();
  eq(P.favorites(), [], 'write throws: reset still clears in-memory state');
}

/* ------------------------------------------------------------------ report */
console.log(`progress-state checks: ${pass} passed, ${failures.length} failed`);
if (failures.length) {
  failures.forEach((f) => console.log('  FAIL ' + f));
  process.exit(1);
}
console.log('LOCAL STATE OK');
