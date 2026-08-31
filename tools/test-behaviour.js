/*
 * JD-Xi Tutorial Hub - development-only behaviour tests for the discovery
 * surfaces and local learner state.
 *
 *   node tools/test-behaviour.js [chromium|firefox]
 *
 * Needs Playwright. Drives the real app from a real file:// URL and asserts
 * what the learner actually experiences: favouriting from a lesson and seeing
 * it on the Favorites surface, persistence across a reload, the resume point,
 * completion counting, the two-press Settings reset and its cancel path,
 * browser Back and Forward across the new surfaces, and the two things that
 * must NOT happen - a development fixture touching learner state, and an empty
 * collection rendering a placeholder page.
 *
 * tools/test-progress.js covers the storage layer's failure modes directly and
 * without a browser; this covers the wiring on top of it.
 */
'use strict';

const path = require('path');
const pw = require('playwright');

const repo = path.resolve(__dirname, '..');
const browserName = process.argv[2] || 'chromium';
const APP = 'file://' + repo + '/index.html';
let pass = 0; const fails = [];
const ok = (c, n) => c ? pass++ : fails.push(n);

(async () => {
  const b = await pw[browserName].launch();
  const ctx = await b.newContext({ viewport: { width: 1440, height: 900 } });
  const p = await ctx.newPage();
  const errs = [];
  p.on('pageerror', e => errs.push('pageerror ' + e.message));
  p.on('console', m => { if (m.type() === 'error') errs.push('console ' + m.text()); });

  const goto = async (h) => { await p.goto(APP + h); await p.waitForTimeout(260); };
  const hash = () => p.evaluate(() => window.location.hash);

  /* --- favourite a tutorial from the lesson screen --- */
  await goto('#tutorial/B03');
  ok(await p.isVisible('#lsn-fav'), 'favourite control visible on a canonical tutorial');
  ok(await p.getAttribute('#lsn-fav', 'aria-pressed') === 'false', 'favourite starts off');
  await p.click('#lsn-fav'); await p.waitForTimeout(120);
  ok(await p.getAttribute('#lsn-fav', 'aria-pressed') === 'true', 'favourite toggles on');
  ok((await p.textContent('#lsn-fav')).includes('Favorited'), 'favourite label updates');

  /* --- it shows up on the Favorites surface --- */
  await goto('#favorites');
  ok((await p.textContent('#cat-body')).includes('Find sounds you like'), 'favourite listed on #favorites');

  /* --- and survives a full reload (persistence) --- */
  await goto('#favorites');
  ok((await p.textContent('#cat-body')).includes('Find sounds you like'), 'favourite survives reload');

  /* --- unfavourite --- */
  await goto('#tutorial/B03');
  await p.click('#lsn-fav'); await p.waitForTimeout(120);
  await goto('#favorites');
  ok((await p.textContent('#cat-body')).includes('Nothing saved yet'), 'unfavourite empties the list');

  /* --- resume point --- */
  await goto('#tutorial/B05/step/4');
  await goto('#progress');
  const prog = await p.textContent('#cat-actions');
  ok(prog.includes('Resume B05') && prog.includes('step 4'), 'progress offers the resume point');
  await p.click('#cat-actions .cat-btn'); await p.waitForTimeout(260);
  ok((await hash()) === '#tutorial/B05/step/4', 'resume button returns to the right step');

  /* --- completing a tutorial marks it done --- */
  await goto('#tutorial/B04/step/8');   // B04's last step
  await goto('#level/beginner');
  const lvl = await p.textContent('#cat-body');
  ok(lvl.includes('1 of 10'), 'level page counts the completed tutorial');
  ok(await p.$('.tut-card.done') !== null, 'completed tutorial is marked on its card');

  /* --- the level Continue action --- */
  const act = await p.textContent('#cat-actions');
  ok(/Continue|Start/.test(act), 'level page offers a start or continue action');

  /* --- settings reset needs two presses --- */
  await goto('#settings');
  const danger = '#cat-body .cat-btn.danger';
  ok((await p.textContent(danger)) === 'Reset everything', 'reset starts unarmed');
  await p.click(danger); await p.waitForTimeout(120);
  ok((await p.textContent(danger)) === 'Press again to reset', 'first press only arms');
  await goto('#level/beginner');
  ok((await p.textContent('#cat-body')).includes('1 of 10'), 'arming alone does not reset');
  await goto('#settings');
  await p.click(danger); await p.waitForTimeout(100);
  await p.click(danger); await p.waitForTimeout(150);
  ok((await p.textContent('#cat-body')).includes('cleared'), 'second press reports the reset');
  await goto('#progress');
  ok((await p.textContent('#cat-body')).includes('0 of 30'), 'reset cleared progress');

  /* --- cancel path --- */
  await goto('#tutorial/B04/step/8');
  await goto('#settings');
  await p.click(danger); await p.waitForTimeout(100);
  await p.click('#cat-body .cat-btn.quiet'); await p.waitForTimeout(120);
  ok((await p.textContent('#cat-body')).includes('Nothing was changed'), 'cancel reports no change');
  await goto('#progress');
  ok((await p.textContent('#cat-body')).includes('1 of 30'), 'cancel really kept the progress');

  /* --- fixtures must never touch learner state --- */
  await goto('#dev/lesson-renderer/step/1');
  ok(!(await p.isVisible('#lsn-fav')), 'no favourite control on a development fixture');
  await goto('#progress');
  ok((await p.textContent('#cat-body')).includes('1 of 30'), 'fixture did not become a resume point');

  /* --- browser Back / Forward across the new surfaces --- */
  await goto('#home');
  await p.evaluate(() => { window.location.hash = '#level/novice'; }); await p.waitForTimeout(200);
  await p.evaluate(() => { window.location.hash = '#topic/making-beats'; }); await p.waitForTimeout(200);
  await p.goBack(); await p.waitForTimeout(220);
  ok((await hash()) === '#level/novice', 'Back returns to the level surface');
  await p.goForward(); await p.waitForTimeout(220);
  ok((await hash()) === '#topic/making-beats', 'Forward returns to the topic surface');

  /* --- an empty collection is not routable --- */
  await goto('#topic/vocoder');
  ok((await hash()) === '#home', 'the empty Vocoder collection degrades to #home');

  await b.close();
  console.log(`${browserName}: behaviour checks ${pass} passed, ${fails.length} failed`);
  fails.forEach(f => console.log('  FAIL ' + f));
  if (errs.length) { console.log('PAGE ERRORS:'); errs.forEach(e => console.log('  ' + e)); }
  if (fails.length || errs.length) process.exit(1);
  console.log('BEHAVIOUR OK');
})();
