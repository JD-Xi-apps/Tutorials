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
 *   - a lesson lands focus on its heading and announces its step changes;
 *   - the lesson Back control is honestly unavailable on step 1;
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
    const out = [
      '#home', '#bookmarks', '#progress', '#settings',
      '#reference', '#specialty', '#explorer',
    ];
    const T = window.JDXI_TUTORIALS, C = window.JDXI_COLLECTIONS;
    const QR = window.JDXI_QUICK_REFERENCE || { order: [] };
    const SP = window.JDXI_SPECIALTY || { order: [] };
    const EX = window.JDXI_EXPLORER || { views: [] };
    const HW = window.JDXI_HARDWARE_TARGETS || { targets: {} };
    ['beginner', 'novice', 'intermediate'].forEach((l) => out.push('#level/' + l));
    Object.keys(C).forEach((c) => { if ((C[c].tutorialIds || []).length) out.push('#topic/' + c); });
    Object.keys(T).sort().forEach((id) => out.push('#tutorial/' + id));
    /* Every new surface family, so none of them can ship an unnamed control. */
    QR.order.forEach((id) => out.push('#reference/' + id));
    SP.order.forEach((id) => out.push('#specialty/' + id));
    (EX.views || []).forEach((v) => out.push('#explorer/view/' + v.id));
    Object.keys(HW.targets).forEach((id) => out.push('#explorer/control/' + id));
    /* Completion surfaces, including the two level capstones and the course
       capstone, which each render differently. */
    Object.keys(T).sort().forEach((id) => out.push('#complete/' + id));
    SP.order.forEach((id) => out.push('#complete/' + id));
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

  /* ---- universal search ---- */
  await p.evaluate(() => { window.location.hash = '#home'; });
  await p.waitForTimeout(150);
  {
    const btn = await p.$('#searchbtn');
    ok(!!btn, 'topbar carries a search control');
    if (btn) {
      const label = await p.evaluate((el) => (el.getAttribute('aria-label') || '').trim(), btn);
      ok(!!label, 'search control has an accessible name');
      ok(
        (await p.getAttribute('#searchbtn', 'aria-expanded')) === 'false',
        'search control reports itself collapsed when closed'
      );
      ok(
        (await p.getAttribute('#searchbtn', 'aria-controls')) === 'searchpanel',
        'search control points at the panel it opens'
      );

      await p.click('#searchbtn');
      await p.waitForTimeout(150);
      ok(
        (await p.getAttribute('#searchbtn', 'aria-expanded')) === 'true',
        'search control reports itself expanded when open'
      );
      ok(
        (await p.evaluate(() => document.activeElement && document.activeElement.id)) === 'searchinput',
        'opening search moves focus into the input'
      );
      ok(
        !!(await p.evaluate(() => (document.getElementById('searchinput').getAttribute('aria-label') || '').trim())),
        'search input has an accessible name'
      );
      ok(
        (await p.evaluate(() => document.getElementById('searchcount').getAttribute('aria-live'))) === 'polite',
        'search result count is announced politely'
      );

      await p.fill('#searchinput', 'tempo');
      await p.waitForTimeout(200);
      const hits = await p.evaluate(() => {
        const out = { unnamed: 0, headings: 0 };
        document.querySelectorAll('#searchresults button').forEach((el) => {
          const aria = (el.getAttribute('aria-label') || '').trim();
          if (!aria && !el.textContent.trim()) out.unnamed++;
        });
        out.headings = document.querySelectorAll('#searchresults .search-group h3').length;
        return out;
      });
      ok(hits.unnamed === 0, `search results: ${hits.unnamed} hit(s) with no accessible name`);
      ok(hits.headings > 0, 'search results are grouped under headings');

      await p.keyboard.press('Escape');
      await p.waitForTimeout(150);
      ok(
        await p.evaluate(() => document.getElementById('searchpanel').hidden),
        'Escape closes the search panel'
      );
      ok(
        (await p.getAttribute('#searchbtn', 'aria-expanded')) === 'false',
        'search control reports itself collapsed again after Escape'
      );
    }
  }

  /* ---- the Explorer popup is a dialog ----
     Semantics and focus only; tools/test-explorer.js covers its behaviour. */
  await p.evaluate(() => { window.location.hash = '#explorer/control/filterSection'; });
  await p.waitForTimeout(300);
  {
    const d = await p.evaluate(() => {
      const dlg = document.getElementById('exp-modal-dialog');
      const title = document.getElementById('exp-modal-title');
      return {
        open: !document.getElementById('exp-modal').hidden,
        role: dlg.getAttribute('role'),
        modal: dlg.getAttribute('aria-modal'),
        labelled: dlg.getAttribute('aria-labelledby') === title.id && !!title.textContent.trim(),
        focusInside: dlg.contains(document.activeElement),
        unnamed: [...dlg.querySelectorAll('button')].filter((b) => {
          if ((b.getAttribute('aria-label') || '').trim()) return false;
          const c = b.cloneNode(true);
          c.querySelectorAll('[aria-hidden="true"]').forEach((n) => n.remove());
          return !c.textContent.trim();
        }).length,
        h1: document.querySelectorAll('main:not([hidden]) h1').length,
      };
    });
    ok(d.open, 'a control route opens the Explorer popup');
    ok(d.role === 'dialog' && d.modal === 'true', 'the Explorer popup is role=dialog with aria-modal');
    ok(d.labelled, 'the Explorer popup is labelled by its visible title');
    ok(d.focusInside, 'opening the Explorer popup moves focus into it');
    ok(d.unnamed === 0, `every control in the Explorer popup has an accessible name (${d.unnamed} without)`);
    ok(d.h1 === 1, 'the popup adds no second h1 to the surface');
    await p.keyboard.press('Tab');
    const inRing = await p.evaluate(() => {
      const el = document.activeElement;
      const dlg = document.getElementById('exp-modal-dialog');
      return el && el.tagName === 'BUTTON' && dlg.contains(el) && el.matches(':focus-visible');
    });
    ok(inRing, 'Tab inside the Explorer popup reaches a button with a visible focus ring');
    await p.keyboard.press('Escape');
    await p.waitForTimeout(250);
    const after = await p.evaluate(() => ({
      open: !document.getElementById('exp-modal').hidden,
      hash: window.location.hash,
      focusOnName: !!document.activeElement && document.activeElement.classList.contains('exp-item'),
    }));
    ok(!after.open && after.hash === '#explorer/view/top', 'Escape closes the Explorer popup onto its overview');
    ok(after.focusOnName, 'closing the Explorer popup puts focus on the area it belonged to');
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

  /* ---- the lesson lands focus and announces its steps ----
     A lesson replaces its instruction in place. Nothing is navigated to as far
     as the page is concerned, so without these two a screen-reader user is
     moved to a new step and told nothing at all. The heading landing mirrors
     what the catalog surfaces already do rather than inventing a pattern. */
  await p.evaluate(() => { window.location.hash = '#home'; });
  await p.waitForTimeout(180);
  await p.evaluate(() => { window.location.hash = '#tutorial/B02/step/2'; });
  await p.waitForTimeout(260);
  const landing = await p.evaluate(() => {
    const live = document.getElementById('lsn-live');
    return {
      focused: document.activeElement && document.activeElement.id,
      tabindex: document.getElementById('lsn-title').getAttribute('tabindex'),
      exists: !!live,
      liveAttr: live && live.getAttribute('aria-live'),
      liveRole: live && live.getAttribute('role'),
      liveText: live ? live.textContent : null,
      /* Hidden from sight but NOT from assistive technology: display:none or
         the hidden attribute would drop it out of the accessibility tree and
         it would announce nothing at all. */
      shown: !!live && getComputedStyle(live).display !== 'none' && !live.hidden,
    };
  });
  ok(landing.exists, 'the lesson has a live region to announce into');
  ok(landing.focused === 'lsn-title', `arriving at a lesson focuses its heading (focus was on ${landing.focused})`);
  ok(landing.tabindex === '-1', 'the lesson heading is a focus target, not a tab stop');
  ok(landing.liveRole === 'status' && landing.liveAttr === 'polite',
    'the lesson carries one polite live region');
  ok(landing.shown, 'the live region stays in the accessibility tree');
  ok(landing.liveText === '',
    'arriving at a lesson does not also announce the step, which would say it twice');

  /* A step change announces what changed; it must NOT drag focus back to the
     heading, or pressing Next would move the keyboard user off the button. */
  await p.click('#lsn-next');
  await p.waitForTimeout(280);
  const stepped = await p.evaluate(() => ({
    focused: document.activeElement && document.activeElement.id,
    liveText: document.getElementById('lsn-live').textContent,
    instruction: document.getElementById('lsn-instruction').textContent,
    n: document.getElementById('lsn-progress').textContent,
  }));
  ok(/^Step 3 of /.test(stepped.liveText), `a step change announces which step (announced "${stepped.liveText.slice(0, 40)}")`);
  ok(stepped.liveText.indexOf(stepped.instruction) >= 0,
    'the announcement carries the instruction that actually changed');
  ok(stepped.focused !== 'lsn-title', 'a step change does not yank focus back to the heading');

  /* ---- Back is honestly unavailable on step 1, not a second Home ---- */
  await p.evaluate(() => { window.location.hash = '#tutorial/B02/step/1'; });
  await p.waitForTimeout(240);
  const back1 = await p.evaluate(() => {
    const b = document.getElementById('lsn-back');
    return { disabled: b.disabled, text: b.textContent.trim(), present: !b.hidden };
  });
  ok(back1.present, 'the Back control stays in the footer on step 1');
  ok(back1.disabled === true, 'the Back control exposes a disabled state on step 1');
  ok(back1.text === '\u2039 Back', `the Back control does not misrepresent itself as Home (was "${back1.text}")`);
  await p.evaluate(() => { window.location.hash = '#tutorial/B02/step/2'; });
  await p.waitForTimeout(240);
  ok((await p.evaluate(() => document.getElementById('lsn-back').disabled)) === false,
    'the Back control is available again once there is a step behind it');

  /* ---- integration: the route's programmatic focus paints no ring ----
     The heading is focused on arrival so a screen-reader user lands on the
     lesson they asked for. That focus is given to EVERY arrival, including the
     mouse user who clicked to get here, so a ring on it would show a keyboard
     affordance to someone who used no keyboard and points at something they
     cannot act on. The treatment moved out of an inline style and into
     css/app.css during integration; asserted on computed style so it holds
     wherever the rule lives. */
  await p.evaluate(() => { window.location.hash = '#home'; });
  await p.waitForTimeout(180);
  await p.evaluate(() => { window.location.hash = '#tutorial/B02/step/2'; });
  await p.waitForTimeout(260);
  const headRing = await p.evaluate(() => {
    const h = document.getElementById('lsn-title');
    const cs = getComputedStyle(h);
    return {
      focused: document.activeElement === h,
      style: cs.outlineStyle,
      width: parseFloat(cs.outlineWidth) || 0,
      inline: h.getAttribute('style'),
    };
  });
  ok(headRing.focused, 'the lesson heading still holds route focus');
  ok(headRing.style === 'none' || headRing.width === 0,
    `route focus paints no outline on the lesson heading (${headRing.style} ${headRing.width}px)`);
  ok(!headRing.inline || headRing.inline.indexOf('outline') < 0,
    'the lesson heading carries no inline outline override');

  /* The same for the catalog heading it was modelled on, so the pair cannot
     drift apart unnoticed. */
  await p.evaluate(() => { window.location.hash = '#level/beginner'; });
  await p.waitForTimeout(240);
  const catRing = await p.evaluate(() => {
    const h = document.getElementById('cat-title');
    const cs = getComputedStyle(h);
    return { focused: document.activeElement === h, style: cs.outlineStyle, width: parseFloat(cs.outlineWidth) || 0 };
  });
  ok(catRing.style === 'none' || catRing.width === 0,
    'route focus paints no outline on the catalog heading either');

  /* ---- integration: the disabled Back reads as unavailable ----
     Two branches wrote these: one made the control natively disabled, the
     other styled whatever said it was unavailable. Neither could see the
     other, so this asserts the pair actually met - on computed style, which is
     the only place that is true or false. */
  await p.evaluate(() => { window.location.hash = '#tutorial/B02/step/2'; });
  await p.waitForTimeout(240);
  const liveBack = await p.evaluate(() => {
    const b = document.getElementById('lsn-back');
    const cs = getComputedStyle(b);
    const r = b.getBoundingClientRect();
    return { color: cs.color, cursor: cs.cursor, box: [Math.round(r.x), Math.round(r.y), Math.round(r.width), Math.round(r.height)] };
  });
  await p.evaluate(() => { window.location.hash = '#tutorial/B02/step/1'; });
  await p.waitForTimeout(240);
  const deadBack = await p.evaluate(() => {
    const b = document.getElementById('lsn-back');
    const cs = getComputedStyle(b);
    const r = b.getBoundingClientRect();
    return {
      disabled: b.disabled,
      color: cs.color, cursor: cs.cursor,
      box: [Math.round(r.x), Math.round(r.y), Math.round(r.width), Math.round(r.height)],
    };
  });
  ok(deadBack.disabled === true, 'Back is natively disabled on step 1');
  ok(deadBack.cursor !== 'pointer',
    `a disabled Back offers no pointer cursor (was ${deadBack.cursor})`);
  ok(deadBack.color !== liveBack.color,
    'a disabled Back is muted rather than looking exactly like an available control');
  ok(deadBack.box.join() === liveBack.box.join(),
    `a disabled Back holds the same box, so Next does not move between steps (${deadBack.box} vs ${liveBack.box})`);

  /* Hovering it must not lift it: a control that answers the pointer is a
     control that says it can be pressed. */
  await p.hover('#lsn-back');
  await p.waitForTimeout(160);
  const hovered = await p.evaluate(() => {
    const b = document.getElementById('lsn-back');
    const r = b.getBoundingClientRect();
    return { transform: getComputedStyle(b).transform, box: [Math.round(r.x), Math.round(r.y)] };
  });
  ok(hovered.transform === 'none' || hovered.transform === 'matrix(1, 0, 0, 1, 0, 0)',
    `a disabled Back does not lift on hover (transform ${hovered.transform})`);
  ok(hovered.box.join() === deadBack.box.slice(0, 2).join(),
    'a disabled Back does not move on hover');

  /* ---- integration: real controls keep their ring ----
     The heading rule above removes an outline. This is the assertion that it
     removed only that one: the button beside it, tabbed to, still shows a
     keyboard user where they are. */
  await p.evaluate(() => { window.location.hash = '#tutorial/B02/step/2'; });
  await p.waitForTimeout(260);
  await p.evaluate(() => { document.getElementById('lsn-next').blur(); document.body.focus(); });
  let lsnRing = null;
  for (let i = 0; i < 40 && !lsnRing; i++) {
    await p.keyboard.press('Tab');
    lsnRing = await p.evaluate(() => {
      const el = document.activeElement;
      if (!el || !el.classList || !el.classList.contains('lsn-nav')) return null;
      const cs = getComputedStyle(el);
      return { id: el.id, style: cs.outlineStyle, width: parseFloat(cs.outlineWidth) || 0, vis: el.matches(':focus-visible') };
    });
  }
  ok(lsnRing !== null, 'a lesson footer control is reachable by Tab');
  ok(lsnRing && lsnRing.vis, 'a tabbed-to lesson footer control matches :focus-visible');
  ok(lsnRing && lsnRing.style !== 'none' && lsnRing.width > 0,
    `a tabbed-to lesson footer control still shows its ring (${lsnRing ? lsnRing.style + ' ' + lsnRing.width : 'none'})`);

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
