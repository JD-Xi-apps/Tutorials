/*
 * JD-Xi Tutorial Hub - development-only route and viewport QA.
 *
 *   node tools/qa-routes.js [--browser chromium|firefox] [--viewports]
 *                           [--strict-routes] [--shots <dir>] [--quiet]
 *
 * Loads the real app from a real file:// URL - not a local server - and walks
 * every route the canonical data generates, plus the deliberate fallback
 * cases. A route passes only if it loads with no console error, no page
 * error, no failed local resource, and no page-level scrollbar.
 *
 * Route coverage is generated from the catalog rather than hand-listed, so a
 * tutorial added tomorrow is covered today.
 *
 * --strict-routes additionally fails any generated route that does not stay
 * where it was sent. Every surface the catalog generates is implemented, so
 * an unexpected fallback is a regression rather than an unfinished screen -
 * see the note on the flag below.
 *
 * Development tooling only; the shipped app has no dependency on it.
 */
'use strict';

const path = require('path');
const fs = require('fs');

const ROOT = path.resolve(__dirname, '..');
const APP = 'file://' + path.join(ROOT, 'index.html');

function arg(name, dflt) {
  const i = process.argv.indexOf(name);
  return i >= 0 && process.argv[i + 1] ? process.argv[i + 1] : dflt;
}
const browserName = arg('--browser', 'chromium');
const shotsDir = arg('--shots', null);
const doViewports = process.argv.includes('--viewports');
const quiet = process.argv.includes('--quiet');
/* A generated route that redirects is recorded either way, because a route
   which quietly lands somewhere else still renders a valid screen and would
   otherwise pass silently. --strict-routes turns that redirect into a failure.

   The flag dates from a time when a surface could legitimately fall back to
   #home because it had not been built yet. None are now: every route this file
   generates comes from shipped data and has a real destination, so a fallback
   is a REGRESSION - a lost surface, a mis-parsed route, a renamed id - and
   strict mode is the normal way to run this check, not an optional extra. */
const strictRoutes = process.argv.includes('--strict-routes');

/* Owner-facing desktop window shapes. The stage is a fixed 1440x900 reference
   that scales; these prove the scaling, they are not breakpoints. */
const VIEWPORTS = [
  [800, 500], [1000, 700], [1280, 720], [1440, 900],
  [1600, 1000], [1920, 1080], [2560, 900],
];

/* Routes that must degrade to a defined destination rather than fail. */
const FALLBACKS = [
  ['#not-a-route', '#home'],
  ['#tutorial/ZZ99', '#home'],
  ['#tutorial/B01/step/999', '#tutorial/B01'],
  ['#tutorial/B01/step/0', '#tutorial/B01'],
  ['#tutorial/B01/nonsense', '#home'],
  ['#level/nope', '#home'],
  ['#topic/nope', '#home'],
];

const pw = require('playwright');

(async () => {
  const browser = await pw[browserName].launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  let problems = [];
  const sink = (kind) => (x) => problems.push(`[${kind}] ${x}`);
  page.on('console', (m) => { if (m.type() === 'error') sink('console')(m.text()); });
  page.on('pageerror', (e) => sink('pageerror')(e.message));
  page.on('requestfailed', (r) => sink('requestfailed')(r.url()));

  await page.goto(APP + '#home');
  await page.waitForTimeout(400);

  const routes = await page.evaluate(() => {
    const out = [
      '#home', '#bookmarks', '#progress', '#settings',
      '#reference', '#specialty', '#explorer',
    ];
    const tut = window.JDXI_TUTORIALS || {};
    const cols = window.JDXI_COLLECTIONS || {};
    const qr = window.JDXI_QUICK_REFERENCE || { order: [] };
    const sp = window.JDXI_SPECIALTY || { order: [], lessons: {} };
    const exp = window.JDXI_EXPLORER || { views: [], majorGroups: {} };
    const hw = window.JDXI_HARDWARE_TARGETS || { targets: {} };

    ['beginner', 'novice', 'intermediate'].forEach((l) => out.push('#level/' + l));
    /* Every collection with content is routable, live or planned - a planned
       one is simply not surfaced on the home screen. An empty collection is
       deliberately not routable, so it is excluded here too. */
    Object.keys(cols).forEach((cid) => {
      if ((cols[cid].tutorialIds || []).length) out.push('#topic/' + cid);
    });
    Object.keys(tut).sort().forEach((id) => {
      const n = tut[id].steps.length;
      for (let i = 1; i <= n; i++) {
        out.push(i === 1 ? '#tutorial/' + id : '#tutorial/' + id + '/step/' + i);
      }
    });

    /* Every Quick Reference entry. */
    qr.order.forEach((qid) => out.push('#reference/' + qid));

    /* Every Specialty lesson, every step - the same coverage a canonical
       tutorial gets, because they are rendered by the same renderer and can
       fail in the same ways. */
    sp.order.forEach((sid) => {
      const n = sp.lessons[sid].steps.length;
      for (let i = 1; i <= n; i++) {
        out.push(i === 1 ? '#specialty/' + sid : '#specialty/' + sid + '/step/' + i);
      }
    });

    /* Every Explorer view, and EVERY hardware target - not only the major
       groups, because every control row and sibling chip links to one and a
       target that fails to render is invisible until someone clicks it. */
    (exp.views || []).forEach((v) => out.push('#explorer/view/' + v.id));
    Object.keys(hw.targets).forEach((tid) => out.push('#explorer/control/' + tid));

    /* Every completion surface. These are reachable only by pressing Finish,
       so nothing else in the suite would ever render them - and the level and
       course capstones each take a different shape. */
    Object.keys(tut).sort().forEach((id) => out.push('#complete/' + id));
    sp.order.forEach((sid) => out.push('#complete/' + sid));

    return out;
  });

  const results = { pass: 0, fail: 0, failures: [], redirects: [] };

  async function visit(hash, label) {
    problems = [];
    await page.evaluate((h) => { window.location.hash = h; }, hash);
    await page.waitForTimeout(180);
    const state = await page.evaluate(() => ({
      hash: window.location.hash,
      scrollX: document.documentElement.scrollWidth > window.innerWidth + 1,
      scrollY: document.documentElement.scrollHeight > window.innerHeight + 1,
      /* A route that renders neither view is a blank screen, which no error
         event would report. */
      rendered: !!document.querySelector('main:not([hidden])'),
    }));
    const bad = [];
    if (problems.length) bad.push(...problems);
    if (state.scrollX) bad.push('page has a horizontal scrollbar');
    if (state.scrollY) bad.push('page has a vertical scrollbar');
    if (!state.rendered) bad.push('no view rendered');
    if (bad.length) {
      results.fail++;
      results.failures.push({ route: label || hash, problems: bad });
    } else {
      results.pass++;
    }
    return state;
  }

  /* --- every generated route --- */
  for (const r of routes) {
    const st = await visit(r);
    if (st.hash !== r) {
      results.redirects.push(`${r} -> ${st.hash || '(empty)'}`);
      if (strictRoutes) {
        results.fail++;
        results.failures.push({
          route: r,
          problems: [`unexpected fallback to "${st.hash}" - this route should not redirect`],
        });
      }
    }
    if (shotsDir) {
      fs.mkdirSync(shotsDir, { recursive: true });
      await page.screenshot({
        path: path.join(shotsDir, r.replace(/^#/, '').replace(/\//g, '_') + '.png'),
      });
    }
    void st;
  }

  /* --- fallbacks resolve to a defined destination --- */
  for (const [from, want] of FALLBACKS) {
    await page.evaluate(() => { window.location.hash = '#home'; });
    await page.waitForTimeout(120);
    const st = await visit(from, `${from} -> ${want}`);
    if (st.hash !== want) {
      results.fail++;
      results.failures.push({
        route: `${from} -> ${want}`,
        problems: [`resolved to "${st.hash}" instead`],
      });
    } else {
      results.pass++;
    }
  }

  /* --- browser Back / Forward --- */
  await page.evaluate(() => { window.location.hash = '#home'; });
  await page.waitForTimeout(150);
  await page.evaluate(() => { window.location.hash = '#tutorial/B01'; });
  await page.waitForTimeout(150);
  await page.evaluate(() => { window.location.hash = '#tutorial/B01/step/2'; });
  await page.waitForTimeout(150);
  await page.goBack(); await page.waitForTimeout(200);
  const backHash = await page.evaluate(() => window.location.hash);
  await page.goForward(); await page.waitForTimeout(200);
  const fwdHash = await page.evaluate(() => window.location.hash);
  if (backHash === '#tutorial/B01' && fwdHash === '#tutorial/B01/step/2') results.pass++;
  else {
    results.fail++;
    results.failures.push({
      route: 'browser Back/Forward',
      problems: [`back gave "${backHash}", forward gave "${fwdHash}"`],
    });
  }

  /* --- viewport sweep --- */
  let viewportResults = null;
  let viewportSample = [];
  if (doViewports) {
    viewportResults = [];
    /* One of each kind of surface, so the viewport sweep covers the catalog
       layouts as well as the lesson and home views - plus, derived rather than
       named, the text-heaviest Quick Reference entry and the text-heaviest step
       of each Specialty lesson. Those two surfaces were missing here, and they
       are the ones that stretch: a Quick Reference entry grows by a note and a
       lesson step by a sentence, and either can start clipping at 800x500 long
       before anything else does. Deriving them means an edit that makes a
       surface longer moves the sweep onto it automatically. */
    const stressed = await page.evaluate(() => {
      const out = [];
      const len = (o, fields) =>
        fields.reduce((n, f) => n + String(o[f] || '').length, 0);

      const qr = window.JDXI_QUICK_REFERENCE || { order: [], entries: {} };
      let worstQr = null;
      qr.order.forEach((id) => {
        const e = qr.entries[id];
        if (!e) return;
        const n = len(e, ['title', 'summary', 'warning']) +
          (e.steps || []).join(' ').length + (e.notes || []).join(' ').length;
        if (!worstQr || n > worstQr.n) worstQr = { id, n };
      });
      if (worstQr) out.push('#reference/' + worstQr.id);

      const sp = window.JDXI_SPECIALTY || { order: [], lessons: {} };
      sp.order.forEach((sid) => {
        const steps = (sp.lessons[sid] || {}).steps || [];
        let worst = -1;
        let worstN = -1;
        steps.forEach((st, i) => {
          const n = len(st, ['title', 'instruction', 'detail', 'expectedSound', 'nextHint']);
          if (n > worstN) { worstN = n; worst = i; }
        });
        if (worst >= 0) {
          out.push(worst === 0 ? '#specialty/' + sid : '#specialty/' + sid + '/step/' + (worst + 1));
        }
      });
      return out;
    });
    /* The Explorer overviews are the two surfaces that must fit the stage
       with nothing scrolling - the instrument plus every major area at once -
       and a control route adds the popup over the fuller of them. */
    const sample = ['#home', '#tutorial/B01', '#level/beginner', '#topic/making-beats',
                    '#progress', '#settings', '#favorites', routes[routes.length - 1],
                    '#explorer/view/top', '#explorer/view/rear', '#explorer/control/effectsSection']
      .concat(stressed);
    viewportSample = sample;
    for (const [w, h] of VIEWPORTS) {
      await page.setViewportSize({ width: w, height: h });
      let bad = [];
      for (const r of sample) {
        problems = [];
        await page.evaluate((x) => { window.location.hash = x; }, r);
        await page.waitForTimeout(200);
        const st = await page.evaluate(() => ({
          sx: document.documentElement.scrollWidth > window.innerWidth + 1,
          sy: document.documentElement.scrollHeight > window.innerHeight + 1,
          /* The stage must stay inside the window at every size: it scales,
             it never reflows and never clips. */
          fits: (() => {
            const s = document.getElementById('stage').getBoundingClientRect();
            return s.width <= window.innerWidth + 1 && s.height <= window.innerHeight + 1;
          })(),
        }));
        if (st.sx) bad.push(`${r}: horizontal scrollbar`);
        if (st.sy) bad.push(`${r}: vertical scrollbar`);
        if (!st.fits) bad.push(`${r}: stage does not fit the window`);
        if (problems.length) bad.push(`${r}: ${problems.join('; ')}`);
      }
      viewportResults.push({ size: `${w}x${h}`, ok: bad.length === 0, problems: bad });
    }
    await page.setViewportSize({ width: 1440, height: 900 });
  }

  await browser.close();

  console.log(`browser: ${browserName}`);
  console.log(`routes generated: ${routes.length}`);
  console.log(`route checks: ${results.pass} passed, ${results.fail} failed`);
  if (results.redirects.length) {
    console.log(`routes that redirected (unexpected - every generated route has a` +
      ` destination): ${results.redirects.length}`);
    if (!quiet) results.redirects.forEach((r) => console.log('  ' + r));
  }
  if (viewportResults) {
    const okc = viewportResults.filter((v) => v.ok).length;
    console.log(`viewports: ${okc}/${viewportResults.length} clean` +
      ` (${viewportSample.length} routes each: ${viewportSample.join(' ')})`);
    viewportResults.filter((v) => !v.ok).forEach((v) => {
      console.log(`  ${v.size}:`);
      v.problems.forEach((p) => console.log('    - ' + p));
    });
  }
  if (results.failures.length) {
    console.log('\nFAILURES:');
    results.failures.forEach((f) => {
      console.log('  ' + f.route);
      f.problems.forEach((p) => console.log('    - ' + p));
    });
    process.exit(1);
  }
  if (!quiet) console.log('\nROUTES OK');
})();
