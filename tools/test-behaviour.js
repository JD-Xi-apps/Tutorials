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
 * It also covers moving around inside a lesson: the footer Back and Next, the
 * keyboard path they share, which surface owns Escape when more than one could
 * answer it, and what the last step's action is allowed to look like.
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
  /* The row is read by id rather than by wording. Compact rows show the
     authored `shortTitle`, so asserting the full title here would have been
     asserting a layout decision under the guise of asserting presence. */
  const b03Row = await p.evaluate(() => {
    const r = [...document.querySelectorAll('#cat-body .tut-row')]
      .find((x) => x.querySelector('.tr-id').textContent === 'B03');
    return r ? { name: r.querySelector('.tr-name').textContent, label: r.getAttribute('aria-label') } : null;
  });
  ok(!!b03Row, 'bookmark listed on #bookmarks');
  ok(b03Row && b03Row.name === (await p.evaluate(() => window.JDXI_TUTORIALS.B03.shortTitle)),
    'and the row carries the authored short title');
  ok(b03Row && b03Row.label.indexOf(await p.evaluate(() => window.JDXI_TUTORIALS.B03.title)) === 0,
    'while its accessible name still leads with the full title');

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
  await goto('#tutorial/B04');
  await p.evaluate(() => document.querySelector('#cat-actions .cat-btn').click());
  await p.waitForTimeout(250);
  ok((await hash()) === '#tutorial/B04/step/1', 'Start from step 1 leaves the review overview');
  ok(!(await p.evaluate(() => document.getElementById('view-lesson').hidden)),
    'Start from step 1 lands in the lesson');

  /* --- an unfinished tutorial offers Continue / Start over --- */
  await goto('#tutorial/B05/step/4');
  await goto('#tutorial/B05');
  const choice = await p.textContent('#cat-body');
  ok(choice.includes('Continue at step 4'), 'reopening offers Continue at the saved step');
  ok(choice.includes('Start over'), 'reopening also offers Start over');
  /*
   * Start over asks for a STEP. It used to ask for the bare route, which is the
   * decision point it was pressed on, so the surface re-rendered and the button
   * was dead - it looked like nothing happened because nothing did.
   */
  await p.evaluate(() => document.querySelectorAll('#cat-body .cat-btn')[1].click());
  await p.waitForTimeout(250);
  ok((await hash()) === '#tutorial/B05/step/1', 'Start over goes to step 1 as a step');
  ok(!(await p.evaluate(() => document.getElementById('view-lesson').hidden)),
    'Start over lands in the lesson, not back on the choice it was pressed on');

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

  /* =====================================================================
     Lesson navigation: the footer controls, the keyboard, and who owns a key.

     These are checked on state that has been deliberately dirtied, because
     the defect they guard only appears once the learner has a stored place in
     the tutorial: Back from step 2 asked for the bare route, and the bare
     route of a part-finished tutorial is the Continue / Start over choice. So
     pressing Back inside a lesson threw the learner out of it and onto a
     question about the lesson they were standing in.
     ===================================================================== */

  const inLesson = () => p.evaluate(() => !document.getElementById('view-lesson').hidden);
  const backState = () => p.evaluate(() => {
    const b = document.getElementById('lsn-back');
    return { text: b.textContent.trim(), disabled: b.disabled };
  });

  /* B07 is used by nothing above, so its stored state is only what is set here. */
  await goto('#tutorial/B07/step/3');   // records a resume point at step 3
  await goto('#tutorial/B07/step/2');
  ok(await inLesson(), 'step 2 of a part-finished tutorial is the lesson');
  await p.click('#lsn-back'); await p.waitForTimeout(280);
  ok((await hash()) === '#tutorial/B07/step/1',
    'Back from step 2 goes to step 1 as an explicit step');
  ok(await inLesson(), 'Back from step 2 stays in the lesson');
  ok(await p.evaluate(() => document.getElementById('view-catalog').hidden),
    'Back from step 2 raises no resume choice for the lesson being read');

  /* --- step 1 Back is genuinely unavailable, and is not a second Home --- */
  const b1 = await backState();
  ok(b1.disabled === true, 'Back is disabled on step 1');
  ok(b1.text === '\u2039 Back', `Back never relabels itself Home on step 1 (was "${b1.text}")`);
  await p.evaluate(() => document.getElementById('lsn-back').click());
  await p.waitForTimeout(250);
  ok((await hash()) === '#tutorial/B07/step/1', 'a disabled Back navigates nowhere');
  ok(await inLesson(), 'a disabled Back does not fall through to Home');
  await goto('#tutorial/B07/step/2');
  ok((await backState()).disabled === false, 'Back is available again from step 2');

  /* --- the bare route is still the decision point it is meant to be --- */
  await goto('#tutorial/B07');
  ok(!(await inLesson()) && (await p.textContent('#cat-eyebrow')).includes('part-way through'),
    'direct entry on the bare route still offers Continue / Start over');

  /* --- ArrowRight and ArrowLeft --- */
  await goto('#tutorial/B07/step/2');
  await p.keyboard.press('ArrowRight'); await p.waitForTimeout(280);
  ok((await hash()) === '#tutorial/B07/step/3', 'ArrowRight moves forward a step');
  await p.keyboard.press('ArrowLeft'); await p.waitForTimeout(280);
  ok((await hash()) === '#tutorial/B07/step/2', 'ArrowLeft moves back a step');
  await p.keyboard.press('ArrowLeft'); await p.waitForTimeout(280);
  await p.keyboard.press('ArrowLeft'); await p.waitForTimeout(280);
  ok((await hash()) === '#tutorial/B07/step/1', 'ArrowLeft on step 1 does nothing');
  ok(await inLesson(), 'ArrowLeft on step 1 does not leave the lesson either');

  /* Arrows are a LESSON key. Off the lesson they belong to the page. */
  await goto('#level/beginner');
  await p.keyboard.press('ArrowRight'); await p.waitForTimeout(200);
  ok((await hash()) === '#level/beginner', 'arrow keys do nothing outside a lesson');

  /* --- a text-entry context keeps its own arrows --- */
  await goto('#tutorial/B07/step/2');
  await p.click('#searchbtn'); await p.waitForTimeout(220);
  await p.fill('#searchinput', 'tempo'); await p.waitForTimeout(200);
  await p.keyboard.press('ArrowLeft'); await p.waitForTimeout(220);
  await p.keyboard.press('ArrowRight'); await p.waitForTimeout(220);
  ok((await hash()) === '#tutorial/B07/step/2', 'arrows typed into search never move the lesson');
  ok((await p.inputValue('#searchinput')) === 'tempo', 'the search query survives its own arrow keys');
  ok(!(await p.evaluate(() => document.getElementById('searchpanel').hidden)),
    'search stays open while its arrows are used');

  /* --- Escape: search owns it while search is open --- */
  await p.keyboard.press('Escape'); await p.waitForTimeout(280);
  ok(await p.evaluate(() => document.getElementById('searchpanel').hidden),
    'Escape closes search first');
  ok((await hash()) === '#tutorial/B07/step/2' && await inLesson(),
    'closing search with Escape does not also exit the lesson');

  /*
   * Search owns Escape from ANY focus inside the panel, not just the input.
   * The input case passes for the wrong reason - a text-entry target is
   * skipped by the lesson handler regardless - so the close button and a
   * result are the cases that actually test ownership. Both once closed the
   * search AND exited the lesson underneath.
   */
  const searchHidden = () => p.evaluate(() => document.getElementById('searchpanel').hidden);
  const openHits = async () => {
    await p.click('#searchbtn'); await p.waitForTimeout(220);
    await p.fill('#searchinput', 'tempo'); await p.waitForTimeout(220);
  };

  await goto('#tutorial/B02/step/2');
  await openHits();
  await p.focus('#searchinput'); await p.waitForTimeout(120);
  await p.keyboard.press('Escape'); await p.waitForTimeout(300);
  ok(await searchHidden(), 'Escape from the search input closes search');
  ok((await hash()) === '#tutorial/B02/step/2' && await inLesson(),
    'Escape from the search input leaves the lesson open');

  await openHits();
  await p.focus('#searchclose'); await p.waitForTimeout(120);
  await p.keyboard.press('Escape'); await p.waitForTimeout(300);
  ok(await searchHidden(), 'Escape from the search Close button closes search');
  ok((await hash()) === '#tutorial/B02/step/2' && await inLesson(),
    'Escape from the search Close button does not also exit the lesson');

  await openHits();
  const focusedHit = await p.evaluate(() => {
    const hit = document.querySelector('#searchresults .search-hit');
    if (!hit) return false;
    hit.focus();
    return document.activeElement === hit;
  });
  ok(focusedHit, 'a search result can take focus');
  await p.keyboard.press('Escape'); await p.waitForTimeout(300);
  ok(await searchHidden(), 'Escape from a search result closes search');
  ok((await hash()) === '#tutorial/B02/step/2' && await inLesson(),
    'Escape from a search result does not also exit the lesson');

  /* Search having eaten one Escape must not eat the next one too. */
  await p.keyboard.press('Escape'); await p.waitForTimeout(300);
  ok((await hash()) === '#level/beginner',
    'the Escape after search has closed exits the lesson as usual');

  /* --- Escape: the Explorer popup owns it while the popup is open --- */
  await goto('#explorer/control/filterSection');
  ok(!(await p.evaluate(() => document.getElementById('exp-modal').hidden)),
    'the Explorer popup is open on a control route');
  await p.keyboard.press('Escape'); await p.waitForTimeout(320);
  ok(await p.evaluate(() => document.getElementById('exp-modal').hidden),
    'Escape closes the Explorer popup');
  ok((await hash()) === '#explorer/view/top',
    'Escape in the Explorer leaves the learner on the overview, not somewhere else');

  /* --- Escape from a lesson exits to where that lesson is found --- */
  await goto('#tutorial/B07/step/2');
  await p.keyboard.press('Escape'); await p.waitForTimeout(300);
  ok((await hash()) === '#level/beginner', 'Escape leaves a guided tutorial for its level path');
  await goto('#specialty/vocoder/step/2');
  await p.keyboard.press('Escape'); await p.waitForTimeout(300);
  ok((await hash()) === '#specialty', 'Escape leaves a Specialty lesson for Specialty');
  await goto('#dev/lesson-renderer/step/2');
  await p.keyboard.press('Escape'); await p.waitForTimeout(300);
  ok((await hash()) === '#home', 'Escape leaves a development fixture for Home');

  /* --- an open disclosure panel keeps its own arrows --- */
  const whyStep = await p.evaluate(() => {
    const T = window.JDXI_TUTORIALS;
    for (const id of Object.keys(T).sort()) {
      const st = T[id].steps;
      for (let i = 1; i < st.length - 1; i++) {
        if (st[i].whyItMatters) return '#tutorial/' + id + '/step/' + (i + 1);
      }
    }
    return null;
  });
  ok(!!whyStep, 'the catalog has a mid-lesson step with a Why? panel to test against');
  if (whyStep) {
    await goto(whyStep);
    await p.click('#lsn-why-btn'); await p.waitForTimeout(220);
    /* Focused as a scroll container would be: the panel can be taller than its
       box, and arrows there belong to whatever is being read. */
    await p.evaluate(() => {
      const el = document.getElementById('lsn-why-panel');
      el.setAttribute('tabindex', '-1');
      el.focus();
    });
    await p.keyboard.press('ArrowRight'); await p.waitForTimeout(260);
    ok((await hash()) === whyStep, 'arrows inside an open disclosure panel do not move the lesson');
  }

  /* =====================================================================
     Last-step semantics. The completion styling is the caller's decision and
     only the caller's: a duplicate unconditional toggle used to override it,
     which dressed a development fixture's "Return home" as a finished course.
     ===================================================================== */

  const footState = () => p.evaluate(() => {
    const n = document.getElementById('lsn-next');
    return { text: n.textContent.trim(), finish: n.classList.contains('finish') };
  });

  await goto(await lastStepHash('B07'));
  const canonicalFoot = await footState();
  ok(canonicalFoot.text === 'Finish Tutorial ✓',
    `a canonical tutorial finishes a Tutorial (was "${canonicalFoot.text}")`);
  ok(canonicalFoot.finish === true, 'a canonical last step is styled as the completion action');

  const vocLast = await p.evaluate(() => window.JDXI_SPECIALTY.lessons.vocoder.steps.length);
  await goto('#specialty/vocoder/step/' + vocLast);
  const spFoot = await footState();
  ok(spFoot.text === 'Finish lesson ✓',
    `a Specialty lesson finishes a lesson, not a Tutorial (was "${spFoot.text}")`);
  ok(spFoot.finish === true, 'a Specialty last step is styled as the completion action');

  /* A fixture completes nothing, so its last step is not an achievement. */
  const devLast = await p.evaluate(() =>
    window.JDXI_TUTORIAL_FIXTURES['renderer-demo'].steps.length);
  await goto('#dev/lesson-renderer/step/' + devLast);
  const devFoot = await footState();
  ok(devFoot.text === 'Return home', `a fixture's last action returns home (was "${devFoot.text}")`);
  ok(devFoot.finish === false, 'a fixture that completes nothing is not styled as a completion');

  /* Not one step earlier, either. */
  await goto('#tutorial/B07/step/2');
  ok((await footState()).finish === false, 'an ordinary Next is never a completion action');

  /* --- browser history stays sane across in-lesson navigation --- */
  await goto('#tutorial/B08/step/1');
  await p.click('#lsn-next'); await p.waitForTimeout(280);
  await p.click('#lsn-next'); await p.waitForTimeout(280);
  ok((await hash()) === '#tutorial/B08/step/3', 'Next builds a step trail');
  await p.goBack(); await p.waitForTimeout(300);
  ok((await hash()) === '#tutorial/B08/step/2', 'browser Back retraces one step');
  await p.goBack(); await p.waitForTimeout(300);
  ok((await hash()) === '#tutorial/B08/step/1' && await inLesson(),
    'browser Back reaches step 1 as a step, not the resume choice');
  await p.goForward(); await p.waitForTimeout(300);
  ok((await hash()) === '#tutorial/B08/step/2', 'browser Forward still works');

  /* =====================================================================
     INTEGRATION: what the learner is TOLD about their stored progress.

     The progress layer learned two things during this pass that no surface
     was yet reading. Both are the same defect in different clothes - the app
     stating something about the learner's data that is not true - and both
     are invisible from the outside, because the wrong wording renders exactly
     as beautifully as the right one.
     ===================================================================== */

  const PKEY = 'jdxi.tutorial-hub.progress';

  /* The progress module reads storage once and caches it, so seeding has to be
     followed by a real reload; setting the hash alone would test the record
     that was already in memory. */
  const seedAt = async (record, h) => {
    await p.evaluate((x) => { window.location.hash = x; }, h);
    await p.waitForTimeout(140);
    await p.evaluate(
      (a) => window.localStorage.setItem(a[0], a[1]),
      [PKEY, JSON.stringify(record)]
    );
    await p.reload();
    await p.waitForTimeout(340);
  };

  const record = (over) => Object.assign({
    schemaVersion: 2,
    completedTutorialIds: [],
    currentTutorialId: 'B06',
    currentStepId: null,
    bookmarkedIds: [],
    completedSpecialtyIds: [],
  }, over);

  /* --- a saved step that still resolves keeps the exact wording --- */
  const realStep = await p.evaluate(() => window.JDXI_TUTORIALS.B06.steps[4].id);
  const b06len = await p.evaluate(() => window.JDXI_TUTORIALS.B06.steps.length);
  await seedAt(record({ currentStepId: realStep }), '#home');
  const exactCard = await p.evaluate(() => ({
    hidden: document.getElementById('continue-card').hidden,
    step: document.getElementById('continue-step').textContent,
    stepTitle: document.getElementById('continue-step-title').textContent,
    label: document.getElementById('continue-card').getAttribute('aria-label'),
    bar: document.getElementById('continue-bar').style.width,
  }));
  ok(exactCard.hidden === false, 'a resolvable saved step still shows the Continue card');
  ok(exactCard.step === 'Step 5 of ' + b06len,
    `an exact saved step keeps its exact wording (was "${exactCard.step}")`);
  ok(exactCard.stepTitle.length > 0, 'an exact saved step still names the step');
  ok(/step 5 of /i.test(exactCard.label), 'an exact saved step keeps its accessible label');
  ok(exactCard.bar !== '0%' && exactCard.bar.length > 0, 'an exact saved step still draws its fraction');

  await p.evaluate(() => { window.location.hash = '#progress'; });
  await p.waitForTimeout(260);
  const exactProg = await p.textContent('#cat-actions');
  ok(exactProg.includes('Continue B06') && exactProg.includes('step 5'),
    `My Progress keeps the exact resume wording (was "${exactProg.trim()}")`);

  /* --- a saved step the curriculum no longer contains says so --- *
     resume() falls back to index 0 so navigation still works. The old wording
     presented that fallback as "Step 1 of 12", which is the app claiming to
     remember a position it invented. */
  await seedAt(record({ currentStepId: 'B06-STEP-REMOVED-IN-A-LATER-EDIT' }), '#home');
  const staleCard = await p.evaluate(() => ({
    hidden: document.getElementById('continue-card').hidden,
    step: document.getElementById('continue-step').textContent,
    stepTitle: document.getElementById('continue-step-title').textContent,
    label: document.getElementById('continue-card').getAttribute('aria-label'),
    bar: document.getElementById('continue-bar').style.width,
  }));
  ok(staleCard.hidden === false, 'a stale saved step still offers the tutorial');
  ok(staleCard.step === 'Resume from the beginning',
    `a stale saved step says so on Home (was "${staleCard.step}")`);
  ok(!/step \d/i.test(staleCard.step), 'a stale saved step claims no step number');
  ok(staleCard.stepTitle === '', 'a stale saved step names no step title');
  ok(staleCard.bar === '0%', 'a stale saved step draws no progress fraction');
  ok(staleCard.label === 'Resume B06 · ' + (await p.evaluate(() => window.JDXI_TUTORIALS.B06.title)) +
      ' from the beginning',
    `the stale accessible label is honest (was "${staleCard.label}")`);

  /* And it goes where it says it goes: the beginning, as a step, not the bare
     route's Continue / Start over choice. */
  await p.click('#continue-card'); await p.waitForTimeout(300);
  ok((await hash()) === '#tutorial/B06/step/1',
    `Resume from the beginning enters step 1 explicitly (went to ${await hash()})`);
  ok(await inLesson(), 'Resume from the beginning lands in the lesson, not on the choice');

  await seedAt(record({ currentStepId: 'B06-STEP-REMOVED-IN-A-LATER-EDIT' }), '#progress');
  const staleProg = await p.textContent('#cat-actions');
  ok(staleProg.includes('Resume B06 from beginning'),
    `My Progress states a stale step honestly (was "${staleProg.trim()}")`);
  ok(!/step \d/i.test(staleProg), 'My Progress claims no step number for a stale step');
  await p.click('#cat-actions button'); await p.waitForTimeout(300);
  ok((await hash()) === '#tutorial/B06/step/1', 'the My Progress stale action reaches step 1');

  /* A record that never named a step at all is the same promise, not a crash. */
  await seedAt(record({ currentStepId: null }), '#home');
  ok((await p.textContent('#continue-step')) === 'Resume from the beginning',
    'a record with no saved step also resumes from the beginning');

  /* =====================================================================
     INTEGRATION: a record written by a NEWER build.

     progress.js refuses to read it and refuses to overwrite it, which is
     correct and was completely silent - the learner saw an app that simply
     forgot everything they did. The notice has to say that without blaming the
     browser (it is working), without calling the data corrupt (it is not), and
     without deleting or migrating anything.
     ===================================================================== */

  const future = {
    schemaVersion: 99,
    completedTutorialIds: ['B01', 'B02'],
    currentTutorialId: 'B06',
    currentStepId: 'B06-S03',
    bookmarkedIds: ['N04'],
    completedSpecialtyIds: [],
    somethingThisBuildCannotKnowAbout: { kept: true },
  };
  const futureRaw = JSON.stringify(future);

  await seedAt(future, '#progress');
  const fProgBody = await p.textContent('#cat-body');
  ok(/newer version of JD-Xi Tutorial Hub/i.test(fProgBody),
    'My Progress tells the learner a newer version wrote what is stored');
  ok(/won.t be saved|will not be saved/i.test(fProgBody),
    'the notice says this session will not be remembered');
  /* The way out must be the control that actually IS the way out. Reset
     Progress goes through `persist` and so cannot clear a locked record;
     only Reset Everything deletes the key and releases the lock. */
  ok(/reset everything/i.test(fProgBody), 'the notice names Reset Everything as the way out');
  ok(!/reset progress/i.test(fProgBody),
    'the notice does not point at Reset Progress, which cannot release the lock');

  /* The three things it must not say. Each of these would send a learner to
     clear site data and destroy the record we just protected. */
  ok(!/cannot be saved in this browser/i.test(fProgBody),
    'the future-schema notice does not reuse the storage-unavailable wording');
  ok(!/not letting the page store|private window|block site data/i.test(fProgBody),
    'the future-schema notice does not blame the browser');
  ok(!/corrupt|damaged|invalid|unreadable/i.test(fProgBody),
    'the future-schema notice does not call the learner\'s data corrupt');

  await p.evaluate(() => { window.location.hash = '#settings'; });
  await p.waitForTimeout(260);
  ok(/newer version of JD-Xi Tutorial Hub/i.test(await p.textContent('#cat-body')),
    'Settings carries the notice too, beside the reset it points at');

  /* --- and the record itself is still there, byte for byte --- *
     Read once at the end, after a session that has rendered several surfaces
     and pressed a control that ordinarily writes. One unguarded write path is
     enough to lose it. */
  await p.evaluate(() => { window.location.hash = '#tutorial/B03'; });
  await p.waitForTimeout(280);
  if (await p.isVisible('#lsn-fav')) { await p.click('#lsn-fav'); await p.waitForTimeout(160); }
  await p.evaluate(() => { window.location.hash = '#tutorial/B03/step/2'; });
  await p.waitForTimeout(260);
  await p.evaluate(() => { window.location.hash = '#home'; });
  await p.waitForTimeout(240);
  const stillThere = await p.evaluate((k) => window.localStorage.getItem(k), PKEY);
  ok(stillThere === futureRaw,
    'the newer record is preserved byte for byte while the notice is shown');

  /* --- the ordinary notice belongs to the ordinary case only --- */
  await seedAt(record({ currentStepId: realStep }), '#progress');
  const healthyBody = await p.textContent('#cat-body');
  ok(!/cannot be saved in this browser/i.test(healthyBody),
    'a working session shows no storage warning at all');
  ok(!/newer version of JD-Xi Tutorial Hub/i.test(healthyBody),
    'a working session shows no future-schema warning either');
  await p.evaluate(() => { window.location.hash = '#settings'; });
  await p.waitForTimeout(240);
  ok(!/cannot be saved|newer version of JD-Xi Tutorial Hub/i.test(await p.textContent('#cat-body')),
    'Settings shows no warning when this session can save');

  /* ================================================================
     Advisory prerequisites on the discovery surfaces.

     Every canonical tutorial and Specialty lesson has carried validated
     prerequisite data since the catalog was written, and the runtime never
     showed any of it. It does now, and the whole point of these checks is
     that showing it changed nothing else: the advice is a sentence on a
     card, and a card that is advising is still a card that opens.
     ================================================================ */

  const blank = () => record({
    completedTutorialIds: [], currentTutorialId: null, currentStepId: null,
    bookmarkedIds: [], completedSpecialtyIds: [],
  });

  /* Read the cards as a learner meets them, keyed by the id printed on each.
     Nothing here is hard-coded from the catalog: the expectations come from
     the same data the card was built from, so a curriculum edit cannot leave
     this asserting a prerequisite the tutorial no longer has. */
  const readCards = () => p.evaluate(() => {
    const out = {};
    document.querySelectorAll('#cat-body .tut-card').forEach((c) => {
      const line = c.querySelector('.tc-prereq');
      out[c.querySelector('.tc-id').textContent] = {
        advice: line ? line.textContent : null,
        label: c.getAttribute('aria-label') || '',
        name: (c.querySelector('.tc-name') || {}).textContent || '',
        disabled: c.disabled === true,
        ariaDisabled: c.getAttribute('aria-disabled'),
        tabindex: c.getAttribute('tabindex'),
        pointer: getComputedStyle(c).pointerEvents,
        opacity: parseFloat(getComputedStyle(c).opacity),
        nested: line ? line.querySelectorAll('a,button,[tabindex]').length : 0,
        done: c.classList.contains('done'),
        here: c.classList.contains('here'),
      };
    });
    return out;
  });

  await seedAt(blank(), '#level/beginner');
  const fresh = await readCards();
  const beginnerIds = await p.evaluate(() =>
    Object.keys(window.JDXI_TUTORIALS).filter((k) => window.JDXI_TUTORIALS[k].level === 'beginner'));
  const prereqOf = await p.evaluate(() => {
    const m = {};
    Object.keys(window.JDXI_TUTORIALS).forEach((k) => { m[k] = window.JDXI_TUTORIALS[k].prerequisites || []; });
    return m;
  });

  ok(Object.keys(fresh).length === beginnerIds.length, 'the level page still draws every card');
  ok(beginnerIds.every((id) => (prereqOf[id].length ? fresh[id].advice === 'Recommended first: ' + prereqOf[id].join(', ') : fresh[id].advice === null)),
    'each card advises exactly the prerequisites its own data names, and no card without them says anything');
  ok(beginnerIds.some((id) => fresh[id].advice), 'at least one outstanding prerequisite is actually shown');
  ok(beginnerIds.some((id) => fresh[id].advice === null), 'a tutorial with no prerequisites renders no advisory line at all');
  ok(beginnerIds.every((id) => !fresh[id].advice || fresh[id].label.indexOf(fresh[id].advice) >= 0),
    'the advisory is carried in the accessible name, not only in the pixels');
  ok(beginnerIds.every((id) => fresh[id].nested === 0),
    'the advisory is plain text: no nested control inside a card that is itself the control');

  /* --- and none of it gates anything --- */
  ok(beginnerIds.every((id) => !fresh[id].disabled), 'no card is disabled by an outstanding prerequisite');
  ok(beginnerIds.every((id) => fresh[id].ariaDisabled === null), 'no card claims aria-disabled either');
  ok(beginnerIds.every((id) => fresh[id].tabindex === null), 'every card keeps its place in the tab order');
  ok(beginnerIds.every((id) => fresh[id].pointer !== 'none' && fresh[id].opacity === 1),
    'no card is dimmed or made unclickable');
  ok(!/required|must complete|locked|unlock/i.test(await p.textContent('#cat-body')),
    'nothing on the surface tells the learner a tutorial is required or locked');
  const order = await p.evaluate(() =>
    [...document.querySelectorAll('#cat-body .tut-card .tc-id')].map((e) => e.textContent));
  ok(order.join(',') === beginnerIds.join(','), 'prerequisites do not reorder the guided path');

  /* Direct entry into the LAST tutorial of the path, from an empty record -
     the case every prerequisite in the level is outstanding for. */
  const lastOfLevel = beginnerIds[beginnerIds.length - 1];
  await goto('#tutorial/' + lastOfLevel);
  ok(!(await p.evaluate(() => document.getElementById('view-lesson').hidden)),
    'a tutorial with every prerequisite outstanding still opens directly');
  ok((await hash()) === '#tutorial/' + lastOfLevel,
    'the bare route keeps its direct-entry meaning, unchanged');
  ok(/\b1\b/.test(await p.textContent('#lsn-progress')),
    'and lands on its first step like any other');

  /* --- completing the prerequisite retires the advice --- */
  const withPrereq = beginnerIds.filter((id) => prereqOf[id].length)[0];
  await seedAt(record({
    completedTutorialIds: prereqOf[withPrereq].slice(),
    currentTutorialId: null, currentStepId: null,
    bookmarkedIds: [], completedSpecialtyIds: [],
  }), '#level/beginner');
  const settled = await readCards();
  ok(settled[withPrereq].advice === null,
    `${withPrereq} stops advising once ${prereqOf[withPrereq].join(', ')} is complete`);
  ok(settled[withPrereq].label.indexOf('Recommended first') < 0,
    'and the accessible name stops saying it too');

  /* --- a completed tutorial says nothing, even out of order --- */
  await seedAt(record({
    completedTutorialIds: [withPrereq], currentTutorialId: null, currentStepId: null,
    bookmarkedIds: [], completedSpecialtyIds: [],
  }), '#level/beginner');
  const outOfOrder = await readCards();
  ok(outOfOrder[withPrereq].done, 'a tutorial finished out of order is still marked complete');
  ok(outOfOrder[withPrereq].advice === null,
    'a completed tutorial does not advise an order that no longer applies');

  /*
   * More than one outstanding prerequisite. No tutorial in the catalog has
   * two today, and the presentation must not assume that - a curriculum edit
   * is a data change, not a code change. The catalog is amended in the page
   * for this one assertion and the reload afterwards puts it back.
   */
  await seedAt(blank(), '#level/beginner');
  const pair = await p.evaluate((id) => {
    window.JDXI_TUTORIALS[id].prerequisites = ['B01', 'B03'];
    window.location.hash = '#home';
    return id;
  }, withPrereq);
  await p.waitForTimeout(160);
  await p.evaluate(() => { window.location.hash = '#level/beginner'; });
  await p.waitForTimeout(260);
  const multi = await readCards();
  ok(multi[pair].advice === 'Recommended first: B01, B03',
    'two outstanding prerequisites are listed together, honestly and on one line');
  ok(multi[pair].label.indexOf('Recommended first: B01, B03') >= 0,
    'and both reach the accessible name');
  await p.reload();
  await p.waitForTimeout(300);
  ok((await p.evaluate((id) => window.JDXI_TUTORIALS[id].prerequisites.length, pair)) === 1,
    'the amended catalog was a fixture and did not survive the reload');

  /* --- Specialty carries the same advisory --- */
  await seedAt(blank(), '#specialty');
  /* Every Specialty card prints the same badge, so these are read in order
     rather than keyed by it. */
  const spPrereq = await p.evaluate(() => {
    const S = window.JDXI_SPECIALTY;
    return S.order.map((id) => (S.lessons[id].prerequisites || []).join(', '));
  });
  const spNames = await p.evaluate(() =>
    [...document.querySelectorAll('#cat-body .tut-card')].map((c) => ({
      advice: (c.querySelector('.tc-prereq') || {}).textContent || null,
      label: c.getAttribute('aria-label') || '',
      nested: c.querySelectorAll('.tc-prereq a, .tc-prereq button').length,
    })));
  ok(spNames.length === spPrereq.length, 'Specialty still draws a card per lesson');
  ok(spNames.every((c) => c.nested === 0), 'a Specialty advisory is plain text too');
  ok(spNames.every((c, i) => (spPrereq[i] ? c.advice === 'Recommended first: ' + spPrereq[i] : c.advice === null)),
    'a Specialty card advises the canonical tutorial its own data names');
  ok(spNames.every((c, i) => !spPrereq[i] || c.label.indexOf('Recommended first: ' + spPrereq[i]) >= 0),
    'and the Specialty accessible name carries it');

  const spAll = await p.evaluate(() => window.JDXI_SPECIALTY.order.reduce((acc, id) => {
    (window.JDXI_SPECIALTY.lessons[id].prerequisites || []).forEach((x) => { if (acc.indexOf(x) < 0) acc.push(x); });
    return acc;
  }, []));
  await seedAt(record({
    completedTutorialIds: spAll, currentTutorialId: null, currentStepId: null,
    bookmarkedIds: [], completedSpecialtyIds: [],
  }), '#specialty');
  ok((await p.evaluate(() => document.querySelectorAll('#cat-body .tc-prereq').length)) === 0,
    'Specialty stops advising once the tutorials it points at are complete');
  await goto('#specialty/' + (await p.evaluate(() => window.JDXI_SPECIALTY.order[0])));
  ok(!(await p.evaluate(() => document.getElementById('view-lesson').hidden)),
    'a Specialty lesson opens directly regardless of its prerequisites');

  /* ================================================================
     Compact rows carry the authored shortTitle; rich cards and lesson
     headings keep the full title.
     ================================================================ */

  const everything = await p.evaluate(() =>
    Object.keys(window.JDXI_TUTORIALS).concat(window.JDXI_SPECIALTY.order));
  await seedAt(record({
    completedTutorialIds: [], currentTutorialId: 'B04', currentStepId: null,
    bookmarkedIds: everything, completedSpecialtyIds: [],
  }), '#progress');

  const readRows = () => p.evaluate(() => {
    const T = window.JDXI_TUTORIALS, S = window.JDXI_SPECIALTY;
    return [...document.querySelectorAll('#cat-body .tut-row')].map((r) => {
      const id = r.querySelector('.tr-id').textContent;
      const lesson = T[id] || S.lessons[[...S.order].find((k) =>
        (r.getAttribute('aria-label') || '').indexOf(S.lessons[k].title) === 0)];
      return {
        id: id,
        name: r.querySelector('.tr-name').textContent,
        shortTitle: lesson ? lesson.shortTitle : null,
        fullTitle: lesson ? lesson.title : null,
        label: r.getAttribute('aria-label') || '',
        tip: r.getAttribute('title') || '',
        clipped: r.querySelector('.tr-name').scrollWidth > r.querySelector('.tr-name').clientWidth + 0.5,
      };
    });
  });

  const fullTitles = await p.evaluate(() => {
    const m = {};
    Object.keys(window.JDXI_TUTORIALS).forEach((k) => { m[k] = window.JDXI_TUTORIALS[k].title; });
    return m;
  });

  const progRows = await readRows();
  ok(progRows.length === Object.keys(await p.evaluate(() => window.JDXI_TUTORIALS)).length,
    'My Progress still lists every tutorial as a row');
  ok(progRows.every((r) => r.shortTitle && r.name === r.shortTitle),
    'every My Progress row shows the authored short title');
  ok(progRows.some((r) => r.shortTitle !== r.fullTitle),
    'and at least one of those is genuinely shorter than the full title');
  ok(progRows.every((r) => r.label.indexOf(r.fullTitle) === 0),
    'the accessible name still leads with the full title, so the row is identifiable');
  ok(progRows.every((r) => r.tip === r.fullTitle),
    'and the full title is still available on hover');
  ok(progRows.every((r) => !r.clipped), 'no My Progress row ellipsises its name');

  await p.evaluate(() => { window.location.hash = '#bookmarks'; });
  await p.waitForTimeout(280);
  const markRows = await readRows();
  ok(markRows.length === everything.length, 'Bookmarked lists tutorials and Specialty lessons together');
  ok(markRows.every((r) => r.shortTitle && r.name === r.shortTitle),
    'Bookmarked rows show the short title too, Specialty included');
  ok(markRows.every((r) => r.tip === r.fullTitle && r.label.indexOf(r.fullTitle) === 0),
    'and keep the full title in the tooltip and the accessible name');
  ok(markRows.every((r) => !r.clipped), 'no Bookmarked row ellipsises its name');

  /* --- rich cards are NOT compact and keep the full title --- */
  await p.evaluate(() => { window.location.hash = '#level/beginner'; });
  await p.waitForTimeout(280);
  const cardNames = await p.evaluate(() =>
    [...document.querySelectorAll('#cat-body .tut-card')].map((c) => ({
      id: c.querySelector('.tc-id').textContent,
      name: c.querySelector('.tc-name').textContent,
    })));
  ok(cardNames.every((c) => c.name === (fullTitles[c.id] || c.name)) && cardNames.length > 0,
    'a rich card on the level page still shows the full title');
  await p.evaluate(() => { window.location.hash = '#specialty'; });
  await p.waitForTimeout(280);
  const spCardNames = await p.evaluate(() => {
    const S = window.JDXI_SPECIALTY;
    return [...document.querySelectorAll('#cat-body .tut-card .tc-name')]
      .map((e, i) => [e.textContent, S.lessons[S.order[i]].title]);
  });
  ok(spCardNames.every(([shown, full]) => shown === full),
    'a Specialty card shows the full title as well');

  /* --- and so does the lesson heading it opens --- */
  await goto('#tutorial/B06/step/1');
  ok((await p.textContent('#lsn-title')) === (await p.evaluate(() => window.JDXI_TUTORIALS.B06.title)),
    'the lesson heading is the full title, never the short one');

  /* ================================================================
     Completed / current / not started, told apart at a glance.
     ================================================================ */

  await seedAt(record({
    completedTutorialIds: ['B01', 'B02'], currentTutorialId: 'B04', currentStepId: null,
    bookmarkedIds: [], completedSpecialtyIds: [],
  }), '#level/beginner');

  const states = () => p.evaluate(() => {
    const out = {};
    document.querySelectorAll('#cat-body .tut-card').forEach((c) => {
      const tick = c.querySelector('.tc-tick');
      const now = c.querySelector('.tc-now');
      const ts = tick ? getComputedStyle(tick) : null;
      out[c.querySelector('.tc-id').textContent] = {
        done: c.classList.contains('done'),
        here: c.classList.contains('here'),
        badge: now ? now.textContent : null,
        label: c.getAttribute('aria-label') || '',
        tickText: tick ? tick.textContent : '',
        tickBg: ts ? ts.backgroundColor : '',
        tickBorder: ts ? ts.borderTopWidth : '',
        tickW: tick ? tick.getBoundingClientRect().width : 0,
        topH: c.querySelector('.tc-top').getBoundingClientRect().height,
        cardH: c.getBoundingClientRect().height,
      };
    });
    return out;
  });

  const three = await states();
  ok(three.B01.done && three.B01.tickText === '✓', 'a completed card still carries its tick');
  ok(/Completed\./.test(three.B01.label), 'and still says so in its accessible name');
  ok(three.B04.here && three.B04.badge === 'Current',
    'the current unfinished tutorial says Current, not only a border');
  ok(/ Current\./.test(three.B04.label), 'and says it in the accessible name too');
  ok(three.B05.badge === null && !three.B05.here, 'no other card claims to be current');
  ok(Object.keys(three).filter((k) => three[k].badge).length === 1,
    'exactly one card is current, because the model stores exactly one');

  /* --- the not-started mark no longer reads as a control --- */
  const transparent = (c) => /rgba\(0, 0, 0, 0\)|transparent/.test(c);
  ok(transparent(three.B05.tickBg),
    'a not-started card draws no filled disc that could be read as a radio control');
  ok(three.B05.tickBorder === '0px', 'and no ring around the empty space either');
  ok(three.B05.tickText === '', 'and no glyph in it');
  ok(three.B01.tickBg !== three.B05.tickBg && !transparent(three.B01.tickBg),
    'while the completed mark is still drawn');

  /* Alignment survives the suppression: the box is kept, only the fill is
     dropped, so completing a tutorial must not move anything. */
  ok(three.B05.tickW === three.B01.tickW && three.B05.tickW > 0,
    'the mark keeps its footprint whether or not it is filled');
  const heights = Object.keys(three).map((k) => Math.round(three[k].topH));
  ok(Math.max(...heights) === Math.min(...heights),
    'every card header is the same height, Current badge or not');

  /* Card sizing stays deterministic across the three states within a row. */
  const rowOne = ['B01', 'B02', 'B03', 'B04', 'B05'].map((k) => Math.round(three[k].cardH));
  ok(Math.max(...rowOne) === Math.min(...rowOne),
    'the cards in a row are the same height across done, current and not started');

  /* --- no per-card progress fraction crept in --- */
  const cardText = await p.evaluate(() =>
    [...document.querySelectorAll('#cat-body .tut-card')].map((c) => c.textContent).join(' | '));
  ok(!/\d+\s*(of|\/)\s*\d+/.test(cardText.replace(/\d+ min|\d+ steps/g, '')),
    'no card carries a per-tutorial progress fraction');
  ok(!/%/.test(cardText), 'and no card carries a percentage');

  /* --- finishing the current tutorial retires the Current cue --- */
  await seedAt(record({
    completedTutorialIds: ['B01', 'B02', 'B04'], currentTutorialId: 'B04', currentStepId: null,
    bookmarkedIds: [], completedSpecialtyIds: [],
  }), '#level/beginner');
  const settledStates = await states();
  ok(settledStates.B04.done, 'a finished tutorial is marked complete');
  ok(settledStates.B04.badge === null && !settledStates.B04.here,
    'and stops calling itself current: finishing it is not continuing it');
  ok(!/ Current\./.test(settledStates.B04.label),
    'the accessible name drops it as well');
  ok(!/Continue B04/.test(await p.textContent('#cat-actions')),
    'and the action beside the heading stops offering to continue something finished');

  /* --- the same three states on the compact rows --- */
  await seedAt(record({
    completedTutorialIds: ['B01', 'B02'], currentTutorialId: 'B04', currentStepId: null,
    bookmarkedIds: [], completedSpecialtyIds: [],
  }), '#progress');
  const rowStates = await p.evaluate(() => {
    const out = {};
    document.querySelectorAll('#cat-body .tut-row').forEach((r) => {
      const tick = r.querySelector('.tc-tick');
      const now = r.querySelector('.tr-now');
      out[r.querySelector('.tr-id').textContent] = {
        done: r.classList.contains('done'),
        here: r.classList.contains('here'),
        badge: now ? now.textContent : null,
        tickBg: getComputedStyle(tick).backgroundColor,
        h: Math.round(r.getBoundingClientRect().height),
      };
    });
    return out;
  });
  ok(rowStates.B04.badge === 'Current', 'the current row says Current as well');
  ok(rowStates.B01.done && rowStates.B05.badge === null, 'and the other two states read as before');
  ok(transparent(rowStates.B05.tickBg), 'a not-started row draws no empty disc either');
  const rowH = Object.keys(rowStates).map((k) => rowStates[k].h);
  ok(Math.max(...rowH) === Math.min(...rowH), 'every row is the same height whatever its state');

  /*
   * And none of it is clipped. `.cat-body` hides its overflow rather than
   * scrolling, so a surface that outgrew the stage would quietly lose its
   * bottom row instead of reporting anything - which is what an extra line on
   * every card is capable of causing. Measured on the body, not on `.catalog`:
   * the catalog is a fixed-height grid, so it can never report the overflow.
   * The dense surfaces are excluded because scrolling INSIDE the body is what
   * they are for.
   */
  await seedAt(record({
    completedTutorialIds: ['B01', 'B02'], currentTutorialId: 'B04', currentStepId: null,
    bookmarkedIds: everything, completedSpecialtyIds: [],
  }), '#level/beginner');
  for (const surface of ['#level/beginner', '#level/novice', '#level/intermediate',
                         '#topic/getting-started', '#topic/sound-design',
                         '#topic/troubleshooting', '#bookmarks', '#progress', '#specialty']) {
    await p.evaluate((h) => { window.location.hash = h; }, surface);
    await p.waitForTimeout(240);
    const over = await p.evaluate(() => {
      const b = document.getElementById('cat-body');
      return { clip: b.scrollHeight - b.clientHeight, dense: b.classList.contains('dense') };
    });
    ok(!over.dense && over.clip <= 0,
      `${surface} still fits the stage without clipping (overflow ${over.clip}px)`);

    /* And no card cuts its own summary off mid-sentence. The line clamp is
       what keeps a row of cards one height, so it stays - but it was set
       four lines short of the longest summary in the catalog while the body
       under the grid went unused. */
    const cut = await p.evaluate(() =>
      [...document.querySelectorAll('#cat-body .tc-sum')]
        .filter((e) => e.scrollHeight > e.clientHeight + 1)
        .map((e) => e.textContent.slice(0, 40)));
    ok(cut.length === 0, `${surface} clips no card summary (${cut.length} clipped)`);
  }

  /* ================================================================
     Bookmarks terminology, and the version the learner is told they have.
     ================================================================ */

  /*
   * The app feature is Bookmarked. "Favorite" belongs to the JD-Xi, and a
   * learner who reads the app calling its own list of saved lessons
   * "favourites" has been told the web page did something to their
   * instrument. This checks the rendered surfaces rather than the source,
   * because the source is what tools/validate-data.js checks.
   */
  const savedSurfaces = ['#bookmarks', '#progress', '#settings', '#level/beginner'];
  for (const surface of savedSurfaces) {
    await p.evaluate((h) => { window.location.hash = h; }, surface);
    await p.waitForTimeout(240);
    const shown = (await p.textContent('#view-catalog')) + ' ' + (await p.textContent('.topbar'));
    ok(!/favourit/i.test(shown), `${surface} never says favourite in any spelling`);
    ok(!/\bfavorites\b|\bfavorited\b|\bfavoriting\b/i.test(shown),
      `${surface} never uses an app-feature Favorite wording either`);
  }

  /* The storage notice was the live defect: it promised the learner their
     "favourites" would be forgotten. It is only reachable with storage
     denied, so it is read where it renders rather than assumed. */
  const denied = await ctx.browser().newContext({
    viewport: { width: 1440, height: 900 }, storageState: undefined,
  });
  const dp = await denied.newPage();
  await dp.addInitScript(() => {
    const boom = () => { throw new Error('denied'); };
    try {
      Object.defineProperty(window, 'localStorage', {
        configurable: true,
        get: () => ({ getItem: boom, setItem: boom, removeItem: boom, clear: boom }),
      });
    } catch (e) { /* a browser that will not let us fake it fails the assert below */ }
  });
  await dp.goto(APP + '#settings');
  await dp.waitForTimeout(360);
  const noticeText = await dp.textContent('#cat-body');
  ok(/cannot be saved in this browser/i.test(noticeText),
    'the storage-denied notice is on screen to be read');
  ok(!/favourit|\bfavorites\b/i.test(noticeText),
    'and no longer calls the learner\'s bookmarks favourites');
  ok(/bookmarks? will be forgotten|and bookmarks will be/i.test(noticeText),
    'it names them as bookmarks instead');

  await denied.close();

  /*
   * Settings > About states the released version.
   *
   * Read from the element rather than from the surface's text: textContent
   * runs the version straight into the sentence after it ("v1.030 guided
   * tutorials"), and a substring assertion on that passes on anything that
   * merely starts the same way.
   */
  await p.evaluate(() => { window.location.hash = '#settings'; });
  await p.waitForTimeout(280);
  const versionLine = await p.evaluate(() => {
    const b = [...document.querySelectorAll('#cat-body .setting-value b')]
      .find((e) => e.textContent.indexOf('JD-Xi Tutorial Hub') === 0);
    return b ? b.textContent : null;
  });
  ok(versionLine === 'JD-Xi Tutorial Hub · v1.0',
    `Settings says exactly v1.0 (found "${versionLine}")`);
  ok(!/beta|alpha|\brc\b|release candidate|preview/i.test(await p.textContent('#cat-body')),
    'and nothing else on Settings still calls the released version a pre-release');

  /* Leave storage as we found it rather than as the last fixture left it. */
  await p.evaluate((k) => window.localStorage.removeItem(k), PKEY);

  await b.close();
  console.log(`${browserName}: behaviour checks ${pass} passed, ${fails.length} failed`);
  fails.forEach(f => console.log('  FAIL ' + f));
  if (errs.length) { console.log('PAGE ERRORS:'); errs.forEach(e => console.log('  ' + e)); }
  if (fails.length || errs.length) process.exit(1);
  console.log('BEHAVIOUR OK');
})();
