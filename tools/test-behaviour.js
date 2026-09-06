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

  /*
   * Navigating to the URL the page is already on is a same-document no-op:
   * no load, no hashchange, so the router never re-runs and the previous view
   * stays on screen. That looks exactly like a routing bug and is not one, so
   * the helper reloads instead when the target matches where we already are.
   */
  const goto = async (h) => {
    const target = APP + h;
    if (p.url() === target) await p.reload();
    else await p.goto(target);
    await p.waitForTimeout(260);
  };
  const hash = () => p.evaluate(() => window.location.hash);

  /*
   * Ask the page how long a tutorial is rather than writing the number here.
   * A hard-coded "#tutorial/B04/step/8" silently stops testing completion the
   * moment B04 gains or loses a step: the route falls out of range, the router
   * correctly redirects to step 1, and the tutorial never completes - so the
   * failure surfaces four assertions later as "reset cleared progress", which
   * is nowhere near the cause.
   */
  /* Read the completion count from the app rather than from rendered text:
     "10 of 30" contains "0 of 30" as a substring, so a substring assertion
     about an empty record passes on a full one. */
  const doneCount = () => p.evaluate(() => window.JDXI_PROGRESS.completed().length);

  const lastStepHash = async (id) => {
    const n = await p.evaluate((t) => window.JDXI_TUTORIALS[t].steps.length, id);
    return `#tutorial/${id}/step/${n}`;
  };

  /* --- bookmark a tutorial from the lesson screen --- */
  await goto('#tutorial/B03');
  ok(await p.isVisible('#lsn-fav'), 'bookmark control visible on a canonical tutorial');
  ok(await p.getAttribute('#lsn-fav', 'aria-pressed') === 'false', 'bookmark starts off');
  await p.click('#lsn-fav'); await p.waitForTimeout(120);
  ok(await p.getAttribute('#lsn-fav', 'aria-pressed') === 'true', 'bookmark toggles on');
  ok((await p.textContent('#lsn-fav')).includes('Bookmarked'), 'bookmark label updates');

  /* The app feature is "Bookmarked"; "Favorite" belongs to the JD-Xi's own
     hardware feature and must not appear as an app control. */
  ok(!/Favorit/i.test(await p.textContent('#lsn-fav')), 'lesson control never says Favorite');
  ok(!/Favorit/i.test(await p.textContent('.topbar')), 'topbar never says Favorites');

  /* --- it shows up on the Bookmarked surface --- */
  await goto('#bookmarks');
  ok((await p.textContent('#cat-title')) === 'Bookmarked', 'the surface is called Bookmarked');
  ok((await p.textContent('#cat-body')).includes('Find sounds you like'), 'bookmark listed on #bookmarks');

  /* --- the old hash still resolves rather than dead-ending --- */
  await goto('#favorites');
  ok((await hash()) === '#bookmarks', 'legacy #favorites redirects to #bookmarks');

  /* --- a specialty lesson can be bookmarked too --- */
  await goto('#specialty/vocoder');
  ok(await p.isVisible('#lsn-fav'), 'bookmark control visible on a specialty lesson');
  await p.click('#lsn-fav'); await p.waitForTimeout(120);
  await goto('#bookmarks');
  ok((await p.textContent('#cat-body')).includes('Vocoder'), 'a specialty lesson lists on #bookmarks');

  /* --- unbookmark --- */
  await goto('#tutorial/B03'); await p.click('#lsn-fav'); await p.waitForTimeout(120);
  await goto('#specialty/vocoder'); await p.click('#lsn-fav'); await p.waitForTimeout(120);
  await goto('#bookmarks');
  ok((await p.textContent('#cat-body')).includes('Nothing bookmarked yet'), 'unbookmarking empties the list');

  /* --- reaching the last step must NOT complete --- */
  await goto(await lastStepHash('B04'));
  ok((await p.textContent('#lsn-next')).includes('Finish'), 'the last step offers Finish Tutorial');
  await goto('#progress');
  ok((await doneCount()) === 0, 'reaching the last step completes nothing');

  /* --- pressing Finish is what completes --- */
  await goto(await lastStepHash('B04'));
  await p.click('#lsn-next'); await p.waitForTimeout(300);
  ok((await hash()) === '#complete/B04', 'Finish goes to the completion surface');
  ok((await p.textContent('#cat-title')) === 'Tutorial complete', 'completion surface names the outcome');
  await goto('#progress');
  ok((await doneCount()) === 1, 'Finish is what counts');
  await goto('#level/beginner');
  ok((await p.textContent('#cat-body')).includes('1 of 10'), 'level page counts the finished tutorial');
  ok(await p.$('.tut-card.done') !== null, 'finished tutorial is marked on its card');

  /* --- a completed tutorial opens its review overview --- */
  await goto('#tutorial/B04');
  ok((await p.textContent('#cat-eyebrow')).includes('review'), 'a completed tutorial opens the review overview');
  const chips = await p.evaluate(() => document.querySelectorAll('.step-chip').length);
  const b04 = await p.evaluate(() => window.JDXI_TUTORIALS.B04.steps.length);
  ok(chips === b04, 'the review overview offers every step for free jumping');
  await p.evaluate(() => document.querySelectorAll('.step-chip')[2].click());
  await p.waitForTimeout(250);
  ok((await hash()) === '#tutorial/B04/step/3', 'a review chip jumps straight to its step');

  /* --- an unfinished tutorial offers Continue / Start over --- */
  await goto('#tutorial/B05/step/4');
  await goto('#tutorial/B05');
  const choice = await p.textContent('#cat-body');
  ok(choice.includes('Continue at step 4'), 'reopening offers Continue at the saved step');
  ok(choice.includes('Start over'), 'reopening also offers Start over');
  await p.evaluate(() => document.querySelectorAll('#cat-body .cat-btn')[1].click());
  await p.waitForTimeout(250);
  ok((await hash()) === '#tutorial/B05', 'Start over goes to step 1');

  /* --- Home offers the Continue banner --- */
  await goto('#tutorial/B06/step/5');
  await goto('#home');
  ok(!(await p.evaluate(() => document.getElementById('continue-card').hidden)), 'Home shows a Continue card');
  ok((await p.textContent('#continue-title')).includes('B06'), 'the Continue card names the tutorial');
  /*
   * The banner reports four things across its width, and each is read from a
   * different element - so a broken one renders as an empty column rather than
   * as an error. The bar is checked because a width that never gets set draws a
   * full rail, which reads as "finished" on a tutorial that is not.
   */
  const banner = await p.evaluate(() => {
    const total = window.JDXI_TUTORIALS.B06.steps.length;
    return {
      step: document.getElementById('continue-step').textContent,
      stepTitle: document.getElementById('continue-step-title').textContent,
      stepTitleExpected: window.JDXI_TUTORIALS.B06.steps[4].title,
      bar: document.getElementById('continue-bar').style.width,
      barExpected: (5 / total) * 100 + '%',
      label: document.getElementById('continue-card').getAttribute('aria-label'),
      action: document.querySelector('.cc-go').textContent.trim(),
      /* Home lays out in one band fewer without it; with it, nothing may fall
         past the stage, which clips rather than scrolls and would say nothing.
         offsetHeight, not getBoundingClientRect: the stage is transform-scaled,
         so the rect is in scaled pixels and scrollHeight is not. */
      hasContinue: document.querySelector('.shell').classList.contains('has-continue'),
      overflow: document.querySelector('.shell').scrollHeight -
        document.querySelector('.shell').offsetHeight,
    };
  });
  ok(banner.step === 'Step 5 of ' + (await p.evaluate(() => window.JDXI_TUTORIALS.B06.steps.length)),
    'the Continue banner states the step number and the total');
  ok(banner.stepTitle === banner.stepTitleExpected,
    'the Continue banner names the step the learner is on');
  ok(banner.bar === banner.barExpected, 'the Continue banner draws the position it states');
  ok(/step 5 of/i.test(banner.label || ''), 'the Continue banner has an accessible name with its position');
  ok(/^Continue/.test(banner.action), 'the Continue banner carries its action affordance');
  ok(banner.hasContinue, 'Home takes its Continue layout while the banner shows');
  ok(banner.overflow <= 0, `Home fits the stage with the Continue banner (overflow ${banner.overflow}px)`);
  await p.click('#continue-card'); await p.waitForTimeout(260);
  ok((await hash()) === '#tutorial/B06/step/5', 'the Continue card returns to the right step');

  /* --- progress offers the resume point --- */
  await goto('#progress');
  const prog = await p.textContent('#cat-actions');
  ok(prog.includes('Continue B06') && prog.includes('step 5'), 'progress offers the resume point');

  /* --- level completion surfaces --- */
  await p.evaluate(() => Object.keys(window.JDXI_TUTORIALS)
    .filter((i) => i[0] === 'B').forEach((i) => window.JDXI_PROGRESS.finish(i)));
  await goto('#complete/B10');
  ok((await p.textContent('#cat-title')) === 'Beginner complete', 'B10 closes the Beginner level');
  ok((await p.textContent('#cat-actions')).includes('Novice'), 'B10 points at Novice');
  await goto('#complete/N10');
  ok((await p.textContent('#cat-title')) === 'Novice complete', 'N10 closes the Novice level');
  ok((await p.textContent('#cat-actions')).includes('Intermediate'), 'N10 points at Intermediate');
  await goto('#complete/I10');
  ok((await p.textContent('#cat-title')) === 'Course complete', 'I10 closes the course');
  const courseLinks = await p.textContent('#cat-body');
  ok(courseLinks.includes('Hardware Explorer'), 'course complete links to the Explorer');
  ok(courseLinks.includes('Quick Reference'), 'course complete links to Quick Reference');
  ok(courseLinks.includes('Specialty'), 'course complete links to Specialty');
  ok(/Replay|replay/.test(courseLinks), 'course complete offers a replay route');

  /* --- specialty completion is tracked apart from x/30 --- */
  await goto('#progress');
  const before = await p.textContent('#cat-body');
  const beforeCount = (before.match(/(\d+) of 30/) || [])[1];
  await goto('#specialty/auto-note');
  const spLast = await p.evaluate(() => window.JDXI_SPECIALTY.lessons['auto-note'].steps.length);
  await goto('#specialty/auto-note/step/' + spLast);
  await p.click('#lsn-next'); await p.waitForTimeout(280);
  ok((await hash()) === '#complete/auto-note', 'finishing a specialty lesson has its own surface');
  await goto('#progress');
  const after = await p.textContent('#cat-body');
  ok(((after.match(/(\d+) of 30/) || [])[1]) === beforeCount, 'a specialty lesson never changes x/30');
  ok(after.includes('specialty'), 'progress reports specialty separately');

  /* --- three separate resets --- */
  await goto('#settings');
  const btnText = async (n) => p.evaluate((i) =>
    document.querySelectorAll('#cat-body .cat-btn.danger')[i].textContent, n);
  const clickReset = async (n) => p.evaluate((i) =>
    document.querySelectorAll('#cat-body .cat-btn.danger')[i].click(), n);
  ok((await p.evaluate(() => document.querySelectorAll('#cat-body .cat-btn.danger').length)) === 3,
    'settings offers three separate resets');
  ok((await btnText(0)) === 'Reset Progress', 'the first reset is Reset Progress');

  /* arming alone must not act */
  await clickReset(0); await p.waitForTimeout(120);
  ok((await btnText(0)) === 'Press again to confirm', 'first press only arms');
  await goto('#progress');
  ok((await doneCount()) > 0, 'arming alone does not reset');

  /* Reset Bookmarks keeps progress. An explicit step route is used because by
     this point B03 is complete, and a completed tutorial's bare route is its
     review overview rather than its first step. */
  await goto('#tutorial/B03/step/1'); await p.click('#lsn-fav'); await p.waitForTimeout(120);
  await goto('#settings');
  await clickReset(1); await p.waitForTimeout(110);
  await clickReset(1); await p.waitForTimeout(150);
  await goto('#bookmarks');
  ok((await p.textContent('#cat-body')).includes('Nothing bookmarked yet'), 'Reset Bookmarks clears bookmarks');
  await goto('#progress');
  ok((await doneCount()) > 0, 'Reset Bookmarks keeps progress');

  /* Reset Progress keeps bookmarks */
  await goto('#tutorial/B03/step/1'); await p.click('#lsn-fav'); await p.waitForTimeout(120);
  await goto('#settings');
  await clickReset(0); await p.waitForTimeout(110);
  await clickReset(0); await p.waitForTimeout(150);
  await goto('#progress');
  ok((await doneCount()) === 0, 'Reset Progress clears progress');
  await goto('#bookmarks');
  ok(!(await p.textContent('#cat-body')).includes('Nothing bookmarked yet'), 'Reset Progress keeps bookmarks');

  /* Reset Everything clears both */
  await goto('#settings');
  await clickReset(2); await p.waitForTimeout(110);
  await clickReset(2); await p.waitForTimeout(150);
  await goto('#bookmarks');
  ok((await p.textContent('#cat-body')).includes('Nothing bookmarked yet'), 'Reset Everything clears bookmarks');
  await goto('#progress');
  ok((await doneCount()) === 0, 'Reset Everything clears progress');

  /* --- fixtures must never touch learner state --- */
  await goto('#dev/lesson-renderer/step/1');
  ok(!(await p.isVisible('#lsn-fav')), 'no bookmark control on a development fixture');
  await goto('#progress');
  ok((await doneCount()) === 0, 'fixture did not become a resume point');
  await goto('#home');
  ok(await p.evaluate(() => document.getElementById('continue-card').hidden),
    'fixture did not become the Continue card');
  ok(await p.evaluate(() => {
    const sh = document.querySelector('.shell');
    return !sh.classList.contains('has-continue') &&
      getComputedStyle(document.querySelector('.footer-note')).display !== 'none' &&
      sh.scrollHeight <= sh.offsetHeight;
  }), 'with nothing to continue, Home returns to its five-band layout and its footer note');

  /* --- the lesson badge tells the three kinds apart --- */
  await goto('#tutorial/B03');
  ok((await p.textContent('#lsn-badge')) === 'BEGINNER • TUTORIAL 3',
    'a canonical tutorial is badged with its level and position');
  await goto('#specialty/vocoder');
  const spBadge = await p.textContent('#lsn-badge');
  ok(/SPECIALTY/.test(spBadge), 'a specialty lesson is badged as Specialty');
  /* Specialty is real learner content. Labelling it a development fixture,
     which is what treating "not canonical" as "fixture" did, is worse than
     no badge at all. */
  ok(!/FIXTURE/i.test(spBadge), 'a specialty lesson is NOT badged a development fixture');
  await goto('#dev/lesson-renderer/step/1');
  ok(/FIXTURE/i.test(await p.textContent('#lsn-badge')),
    'a development fixture keeps its warning badge');

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
