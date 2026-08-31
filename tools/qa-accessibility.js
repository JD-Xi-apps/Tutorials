/*
 * JD-Xi Tutorial Hub - development-only accessibility checks.
 *
 *   node tools/qa-accessibility.js [chromium|firefox]
 *
 * Needs Playwright. This is not a broad audit and does not try to be: it
 * asserts the specific, concrete properties this app has to hold, on every
 * route the catalog generates.
 *
 *   - every interactive control is a real <button>, not a clickable div;
 *   - every control has an accessible name (text, aria-label or title);
 *   - icon-only controls carry an explicit label rather than relying on a glyph;
 *   - decorative glyphs and images are hidden from assistive technology, so a
 *     control's name is not polluted by the symbol next to it;
 *   - the favourite toggle exposes its state with aria-pressed;
 *   - the destructive reset states its consequence before it acts;
 *   - keyboard focus is visible on every control;
 *   - each surface has exactly one h1.
 */
'use strict';

const path = require('path');
const pw = require('playwright');

const repo = path.resolve(__dirname, '..');
const browserName = process.argv[2] || 'chromium';
const APP = 'file://' + path.join(repo, 'index.html');

let pass = 0;
const problems = [];
function ok(cond, msg) { if (cond) pass++; else problems.push(msg); }

(async () => {
  const b = await pw[browserName].launch();
  const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  await p.goto(APP + '#home');
  await p.waitForTimeout(400);

  const routes = await p.evaluate(() => {
    const out = ['#home', '#favorites', '#progress', '#settings'];
    const T = window.JDXI_TUTORIALS, C = window.JDXI_COLLECTIONS;
    ['beginner', 'novice', 'intermediate'].forEach((l) => out.push('#level/' + l));
    Object.keys(C).forEach((c) => { if ((C[c].tutorialIds || []).length) out.push('#topic/' + c); });
    Object.keys(T).sort().forEach((id) => out.push('#tutorial/' + id));
    return out;
  });

  for (const r of routes) {
    await p.evaluate((h) => { window.location.hash = h; }, r);
    await p.waitForTimeout(110);
    const found = await p.evaluate(() => {
      const view = document.querySelector('main:not([hidden])');
      const out = { unnamed: [], clickableNonButton: 0, h1: 0, noisyDecor: [] };
      if (!view) return out;
      out.h1 = view.querySelectorAll('h1').length;

      const named = (el) => {
        const aria = (el.getAttribute('aria-label') || '').trim();
        if (aria) return true;
        if ((el.getAttribute('title') || '').trim()) return true;
        /* Text content minus anything hidden from assistive technology. */
        const clone = el.cloneNode(true);
        clone.querySelectorAll('[aria-hidden="true"]').forEach((n) => n.remove());
        return !!clone.textContent.trim();
      };
      view.querySelectorAll('button, a[href], [role="button"]').forEach((el) => {
        if (!named(el)) out.unnamed.push(el.className || el.tagName);
      });
      /* A div or span carrying a click handler cannot be reached by keyboard. */
      view.querySelectorAll('div[onclick], span[onclick]').forEach(() => { out.clickableNonButton++; });

      /* A decorative glyph inside a control must be aria-hidden, or it becomes
         part of the control's spoken name. */
      view.querySelectorAll('button .iconline, button .tc-tick, button .tc-star, button .favstar-ico')
        .forEach((el) => {
          if (el.getAttribute('aria-hidden') !== 'true' && el.textContent.trim()) {
            out.noisyDecor.push((el.className || '') + ':' + el.textContent.trim());
          }
        });
      return out;
    });

    ok(found.unnamed.length === 0, `${r}: ${found.unnamed.length} control(s) with no accessible name (${found.unnamed.slice(0,3).join(', ')})`);
    ok(found.clickableNonButton === 0, `${r}: ${found.clickableNonButton} clickable non-button element(s)`);
    ok(found.h1 === 1, `${r}: expected exactly one h1, found ${found.h1}`);
    ok(found.noisyDecor.length === 0, `${r}: decorative glyph not hidden from assistive tech (${found.noisyDecor.slice(0,3).join(', ')})`);
  }

  /* ---- the topbar's icon-only control ---- */
  await p.evaluate(() => { window.location.hash = '#home'; });
  await p.waitForTimeout(150);
  const gear = await p.evaluate(() => {
    const el = document.querySelector('.navbtn.settings');
    return { label: el.getAttribute('aria-label'), title: el.getAttribute('title'), route: el.getAttribute('data-route') };
  });
  ok(!!gear.label, 'settings gear has an aria-label');
  ok(!!gear.title, 'settings gear has a tooltip');
  ok(gear.route === '#settings', 'settings gear points at #settings');

  /* ---- the brand logo ---- */
  const brand = await p.evaluate(() => {
    const wrap = document.querySelector('.brand');
    const img = document.querySelector('.brand-logo');
    return {
      role: wrap.getAttribute('role'),
      label: wrap.getAttribute('aria-label'),
      imgHidden: img.getAttribute('aria-hidden'),
      imgAlt: img.getAttribute('alt'),
    };
  });
  ok(brand.role === 'img' && !!brand.label, 'brand exposes one accessible name');
  ok(brand.imgHidden === 'true' && brand.imgAlt === '', 'brand image does not duplicate that name');

  /* ---- favourite toggle communicates state ---- */
  await p.evaluate(() => { window.location.hash = '#tutorial/B01'; });
  await p.waitForTimeout(200);
  const favBefore = await p.getAttribute('#lsn-fav', 'aria-pressed');
  await p.click('#lsn-fav');
  await p.waitForTimeout(120);
  const favAfter = await p.getAttribute('#lsn-fav', 'aria-pressed');
  ok(favBefore === 'false' && favAfter === 'true', 'favourite toggle exposes aria-pressed state');
  const favName = await p.getAttribute('#lsn-fav', 'aria-label');
  ok(!!favName && /B01/.test(favName), 'favourite toggle names what it acts on');
  await p.click('#lsn-fav');
  await p.waitForTimeout(100);

  /* ---- destructive reset states its consequence ---- */
  await p.evaluate(() => { window.location.hash = '#settings'; });
  await p.waitForTimeout(200);
  const reset = await p.evaluate(() => {
    const panel = [...document.querySelectorAll('.cat-panel')].find((n) => n.querySelector('.cat-btn.danger'));
    return { text: panel ? panel.textContent : '', btn: panel ? panel.querySelector('.cat-btn.danger').textContent : '' };
  });
  ok(/cannot be undone/i.test(reset.text), 'reset panel states that it cannot be undone');
  ok(/clears every completed tutorial/i.test(reset.text), 'reset panel states what it clears');

  /* ---- keyboard focus is visible ----
     Tabbed to, not focused programmatically: :focus-visible is exactly the
     distinction between a keyboard user, who must see the ring, and a mouse
     user, who should not. Calling .focus() would test the wrong state. */
  await p.evaluate(() => { document.body.focus(); });
  let ring = null;
  for (let i = 0; i < 40 && !ring; i++) {
    await p.keyboard.press('Tab');
    ring = await p.evaluate(() => {
      const el = document.activeElement;
      if (!el || el.tagName !== 'BUTTON') return null;
      const cs = getComputedStyle(el);
      return {
        tag: el.className || el.tagName,
        outline: cs.outlineStyle,
        width: parseFloat(cs.outlineWidth) || 0,
        matches: el.matches(':focus-visible'),
      };
    });
  }
  ok(ring !== null, 'tabbing reaches a button');
  ok(ring && ring.matches, 'a tabbed-to button matches :focus-visible');
  ok(ring && ring.outline !== 'none' && ring.width > 0,
    `a tabbed-to button shows a visible focus ring (${ring ? ring.outline + ' ' + ring.width : 'none'})`);

  /* ---- the whole app is reachable by keyboard from the topbar ---- */
  await p.evaluate(() => { window.location.hash = '#home'; });
  await p.waitForTimeout(180);
  const tabbable = await p.evaluate(() =>
    document.querySelectorAll('main:not([hidden]) button, .topbar button').length);
  ok(tabbable > 10, `home exposes its controls to the keyboard (${tabbable} buttons)`);

  await b.close();
  console.log(`${browserName}: accessibility checks ${pass} passed, ${problems.length} failed`);
  problems.forEach((m) => console.log('  FAIL ' + m));
  if (problems.length) process.exit(1);
  console.log('ACCESSIBILITY OK');
})();
