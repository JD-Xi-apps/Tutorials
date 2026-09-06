/*
 * JD-Xi Tutorial Hub - development-only behaviour tests for the Hardware
 * Explorer.
 *
 *   node tools/test-explorer.js [chromium|firefox]
 *
 * Needs Playwright. Drives the real app from a real file:// URL and asserts
 * what the learner experiences on the three Explorer screens and the popup:
 *
 *   - Explorer home is exactly two panel choices, with no control inventory;
 *   - each overview lists every major area once, by name only, and fits the
 *     stage with nothing scrolling, clipped or hidden - at every supported
 *     window shape;
 *   - pointing at a name lights its box on the instrument and vice versa, for
 *     the pointer and for keyboard focus alike;
 *   - a box or a name opens the same popup; children step inside it, a parent
 *     step goes back, and there is never a second popup;
 *   - the popup behaves as a dialog: focus moves in, Tab stays in, Escape,
 *     the backdrop and Close all close it, and focus returns to what opened it;
 *   - every one of the registry's targets renders in the popup with what
 *     Roland says it does, and none of the curriculum-mapping or citation
 *     material the owner removed from the Explorer;
 *   - a control deep link and a search hit land on the right overview with
 *     the popup already open, closing leaves the learner on that overview,
 *     and browser Back and Forward behave.
 *
 * tools/qa-routes.js proves every Explorer route loads cleanly; this covers
 * what happens on them.
 */
'use strict';

const path = require('path');
const pw = require('playwright');

const repo = path.resolve(__dirname, '..');
const browserName = process.argv[2] || 'chromium';
const APP = 'file://' + repo + '/index.html';
let pass = 0; const fails = [];
const ok = (c, n) => c ? pass++ : fails.push(n);

/* Wording the owner removed from the Explorer. Asserted on rendered text,
   never on source files: the data keeps its provenance. */
const REMOVED = [
  'Where this is taught', 'Learn this in', 'Not covered', 'No tutorial teaches',
  'Nearby controls', 'Source:', 'Where this is', 'Close up', 'main areas',
  'All main controls',
];

const VIEWPORTS = [
  [800, 500], [1000, 700], [1280, 720], [1440, 900],
  [1600, 1000], [1920, 1080], [2560, 900],
];

(async () => {
  const b = await pw[browserName].launch();
  const ctx = await b.newContext({ viewport: { width: 1440, height: 900 } });
  const p = await ctx.newPage();
  const errs = [];
  p.on('pageerror', (e) => errs.push('pageerror ' + e.message));
  p.on('console', (m) => { if (m.type() === 'error') errs.push('console ' + m.text()); });

  /* Same-URL navigation is a no-op (see tools/README.md), so reload instead. */
  const goto = async (h) => {
    const target = APP + h;
    if (p.url() === target) await p.reload();
    else await p.goto(target);
    await p.waitForTimeout(300);
  };
  const setHash = async (h) => {
    await p.evaluate((x) => { window.location.hash = x; }, h);
    await p.waitForTimeout(220);
  };
  const hash = () => p.evaluate(() => window.location.hash);
  const modalOpen = () => p.evaluate(() => !document.getElementById('exp-modal').hidden);
  const modalTarget = () => p.evaluate(() => document.getElementById('exp-modal-dialog').getAttribute('data-target-id'));
  const bodyText = () => p.evaluate(() => document.getElementById('cat-body').textContent);
  const dialogText = () => p.evaluate(() => document.getElementById('exp-modal-dialog').textContent);
  const activeDesc = () => p.evaluate(() => {
    const a = document.activeElement;
    return a ? (a.id || a.className) + '|' + (a.getAttribute('data-target') || '') : '';
  });

  /*
   * Nothing on screen may scroll or spill: not the page, not the catalog
   * body, not a name, and nothing may sit outside the stage. Measured in
   * layout pixels, which the stage's transform does not touch, except the
   * containment test, which compares client rects on both sides.
   */
  const fit = () => p.evaluate(() => {
    const body = document.getElementById('cat-body');
    const stage = document.getElementById('stage').getBoundingClientRect();
    const inside = (el) => {
      const r = el.getBoundingClientRect();
      return r.left >= stage.left - 1 && r.right <= stage.right + 1 &&
        r.top >= stage.top - 1 && r.bottom <= stage.bottom + 1;
    };
    const items = [...document.querySelectorAll('.exp-item')];
    const mb = document.getElementById('exp-modal-body');
    const dlg = document.getElementById('exp-modal-dialog');
    const open = !document.getElementById('exp-modal').hidden;
    return {
      pageX: document.documentElement.scrollWidth > window.innerWidth + 1,
      pageY: document.documentElement.scrollHeight > window.innerHeight + 1,
      bodyOver: body.scrollHeight - body.clientHeight,
      stageFits: stage.width <= window.innerWidth + 1 && stage.height <= window.innerHeight + 1,
      truncated: items.filter((n) => n.scrollWidth > n.clientWidth + 1).map((n) => n.textContent),
      hidden: items.filter((n) => n.offsetParent === null).length,
      outside: items.filter((n) => !inside(n)).length + [...document.querySelectorAll('.exp-map, .exp-choice')].filter((n) => !inside(n)).length,
      modalOver: open ? mb.scrollHeight - mb.clientHeight : 0,
      dialogOver: open ? dlg.scrollHeight - dlg.clientHeight : 0,
      dialogInside: open ? inside(dlg) : true,
    };
  });
  const assertFit = async (label) => {
    const f = await fit();
    ok(!f.pageX && !f.pageY, `${label}: no page scrollbar`);
    ok(f.bodyOver <= 0, `${label}: catalog body does not scroll (overflow ${f.bodyOver}px)`);
    ok(f.stageFits, `${label}: stage fits the window`);
    ok(f.truncated.length === 0, `${label}: no name is truncated (${f.truncated.join(', ')})`);
    ok(f.hidden === 0, `${label}: no major area is hidden`);
    ok(f.outside === 0, `${label}: nothing sits outside the stage (${f.outside})`);
    ok(f.modalOver <= 0 && f.dialogOver <= 0, `${label}: popup does not scroll (body ${f.modalOver}px, dialog ${f.dialogOver}px)`);
    ok(f.dialogInside, `${label}: popup is entirely inside the stage`);
  };

  await goto('#home');
  const data = await p.evaluate(() => {
    const H = window.JDXI_HARDWARE_TARGETS, E = window.JDXI_EXPLORER;
    const describe = (id) => E.describe[id] || (E.fallbacks || []).filter((f) => id.indexOf(f.prefix) === 0)[0] || null;
    const targets = {};
    Object.keys(H.targets).forEach((id) => {
      const t = H.targets[id];
      const d = describe(id);
      targets[id] = {
        label: t.label, kind: t.kind, group: t.group || null, imageId: t.imageId || H.defaultImageId,
        legend: t.panelLegend || null, what: d ? d.what : null, safety: d && d.safety || null,
        trouble: d && d.troubleshooting || null, source: d && d.source || null,
        kids: Object.keys(H.targets).filter((k) => H.targets[k].group === id),
      };
    });
    return { views: E.views, majors: E.majorGroups, targets: targets };
  });
  const viewOf = (id) => data.targets[id].imageId;

  /* ------------------------------------------------------ Explorer home --- */
  await goto('#explorer');
  const home = await p.evaluate(() => ({
    choices: [...document.querySelectorAll('#cat-body button')].map((n) => ({
      cls: n.className, label: n.getAttribute('aria-label') || n.textContent,
      img: (n.querySelector('img') || {}).getAttribute ? n.querySelector('img').getAttribute('src') : null,
      loaded: !!(n.querySelector('img') && n.querySelector('img').naturalWidth > 0),
    })),
    text: document.getElementById('cat-body').textContent,
    rows: document.querySelectorAll('.exp-item, .ctl-row').length,
  }));
  ok(home.choices.length === 2, `explorer home offers exactly two choices (${home.choices.length})`);
  ok(home.choices.every((c) => /exp-choice/.test(c.cls)), 'both choices are the panel cards');
  ok(home.choices[0] && home.choices[0].img === 'assets/images/JD-Xi.jpg' && home.choices[0].loaded, 'top card shows the top-panel image');
  ok(home.choices[1] && home.choices[1].img === 'assets/images/JD-Xi_R.jpg' && home.choices[1].loaded, 'rear card shows the rear-panel image');
  ok(/Top panel/.test(home.text) && /Rear panel/.test(home.text), 'both cards are titled');
  ok(home.rows === 0, 'explorer home lists no controls');
  ok(!/All main controls/.test(home.text), 'explorer home has no "All main controls" section');
  ok(!/\d+ main areas/.test(home.text), 'explorer home shows no area counts');
  REMOVED.forEach((w) => ok(home.text.indexOf(w) < 0, `explorer home never says "${w}"`));
  await assertFit('explorer home');
  await p.click('.exp-choice.img-top'); await p.waitForTimeout(250);
  ok((await hash()) === '#explorer/view/top', 'the top card opens the top overview');
  await goto('#explorer');
  await p.click('.exp-choice.img-rear'); await p.waitForTimeout(250);
  ok((await hash()) === '#explorer/view/rear', 'the rear card opens the rear overview');

  /* --------------------------------------------------------- overviews --- */
  for (const v of data.views) {
    const ids = data.majors[v.id];
    await goto('#explorer/view/' + v.id);
    const ov = await p.evaluate(() => ({
      items: [...document.querySelectorAll('.exp-item')].map((n) => ({ id: n.getAttribute('data-target'), text: n.textContent.trim() })),
      boxes: [...document.querySelectorAll('.exp-map .hl[data-target]')].map((n) => n.getAttribute('data-target')),
      text: document.getElementById('cat-body').textContent,
      view: (document.querySelector('.exp-overview') || {}).getAttribute ? document.querySelector('.exp-overview').getAttribute('data-view') : null,
      h1: document.getElementById('cat-title').textContent,
    }));
    ok(ov.view === v.id, `${v.id}: overview is for ${v.id}`);
    ok(ov.h1 === v.title, `${v.id}: heading is the panel title`);
    ok(ov.items.length === ids.length && ids.every((id, i) => ov.items[i].id === id),
      `${v.id}: the name list is exactly the ${ids.length} major areas, once each, in order`);
    ok(ov.items.every((it) => it.text === data.targets[it.id].label),
      `${v.id}: each list entry is the name only (${ov.items.filter((it) => it.text !== data.targets[it.id].label).map((it) => it.text).slice(0, 2).join(' | ')})`);
    ok(ov.boxes.length === ids.length && ids.every((id) => ov.boxes.indexOf(id) >= 0) && new Set(ov.boxes).size === ov.boxes.length,
      `${v.id}: one image hotspot per major area`);
    ok(ids.every((id) => !data.targets[id].what || ov.text.indexOf(data.targets[id].what.slice(0, 40)) < 0),
      `${v.id}: no description text on the overview`);
    ok(ov.text.indexOf('NOT COVERED') < 0, `${v.id}: no coverage badges`);
    REMOVED.forEach((w) => ok(ov.text.indexOf(w) < 0, `${v.id}: overview never says "${w}"`));
    ok(!/(Owner's Manual|Parameter Guide) p\.\s*\d/.test(ov.text), `${v.id}: no source citations on the overview`);
    await assertFit(v.id + ' overview');

    /* hover linkage, both ways */
    const first = ids[0], second = ids[1];
    const hot = () => p.evaluate(() => ({
      items: [...document.querySelectorAll('.exp-item.is-hot')].map((n) => n.getAttribute('data-target')),
      boxes: [...document.querySelectorAll('.exp-map .hl.is-hot')].map((n) => n.getAttribute('data-target')),
      dimmed: document.querySelector('.exp-overview').classList.contains('has-hot'),
    }));
    await p.hover(`.exp-item[data-target="${second}"]`); await p.waitForTimeout(120);
    let h = await hot();
    ok(h.boxes.length === 1 && h.boxes[0] === second && h.items.length === 1 && h.items[0] === second && h.dimmed,
      `${v.id}: hovering a name lights that name and its box only (${JSON.stringify(h)})`);
    await p.hover('#cat-title'); await p.waitForTimeout(120);
    h = await hot();
    ok(h.boxes.length === 0 && h.items.length === 0 && !h.dimmed, `${v.id}: leaving the name clears the pair`);
    await p.hover(`.exp-map .hl[data-target="${first}"]`); await p.waitForTimeout(120);
    h = await hot();
    ok(h.items.length === 1 && h.items[0] === first && h.boxes.length === 1 && h.boxes[0] === first,
      `${v.id}: hovering a hotspot lights its name and itself only (${JSON.stringify(h)})`);
    await p.hover('#cat-title'); await p.waitForTimeout(120);

    /* keyboard focus is treated like hover - reached by Tab, not by .focus() */
    await p.focus(`.exp-item[data-target="${first}"]`);
    await p.keyboard.press('Tab'); await p.waitForTimeout(120);
    h = await hot();
    const active = await activeDesc();
    ok(/exp-item/.test(active) && active.split('|')[1] === second, `${v.id}: Tab reaches the next name (${active})`);
    ok(h.boxes.length === 1 && h.boxes[0] === second, `${v.id}: focusing a name lights its box`);
    ok((await p.evaluate(() => document.querySelectorAll('.exp-map .hl[tabindex]').length)) === 0,
      `${v.id}: hotspots add no second tab stop for the same area`);
    await p.evaluate(() => document.activeElement.blur());

    /* clicking either face opens the same popup */
    await p.click(`.exp-map .hl[data-target="${first}"]`); await p.waitForTimeout(260);
    ok((await modalOpen()) && (await modalTarget()) === first && (await hash()) === '#explorer/control/' + first,
      `${v.id}: clicking a hotspot opens that control's popup`);
    await p.keyboard.press('Escape'); await p.waitForTimeout(260);
    ok(!(await modalOpen()) && (await hash()) === '#explorer/view/' + v.id, `${v.id}: Escape closes it and leaves the overview`);
    await p.click(`.exp-item[data-target="${second}"]`); await p.waitForTimeout(260);
    ok((await modalOpen()) && (await modalTarget()) === second, `${v.id}: clicking a name opens that control's popup`);
    ok((await p.evaluate(() => document.querySelector('.exp-overview').getAttribute('data-view'))) === v.id,
      `${v.id}: the overview stays underneath the popup`);
    await p.click('#exp-modal-close'); await p.waitForTimeout(260);
    ok(!(await modalOpen()), `${v.id}: Close closes the popup`);
  }

  /* --------------------------------------------- every target's popup --- */
  await goto('#explorer/view/top');
  let renderedInModal = 0;
  for (const id of Object.keys(data.targets)) {
    const t = data.targets[id];
    await setHash('#explorer/control/' + id);
    const st = await p.evaluate(() => {
      const dlg = document.getElementById('exp-modal-dialog');
      return {
        open: !document.getElementById('exp-modal').hidden,
        target: dlg.getAttribute('data-target-id'),
        title: document.getElementById('exp-modal-title').textContent,
        kicker: document.getElementById('exp-modal-kicker').textContent,
        text: dlg.textContent,
        chips: [...dlg.querySelectorAll('.exp-chip')].map((n) => n.getAttribute('data-target')),
        dialogs: document.querySelectorAll('[role="dialog"]').length,
        view: document.querySelector('.exp-overview').getAttribute('data-view'),
        contexts: dlg.querySelectorAll('.jdxi-canvas').length,
        crops: dlg.querySelectorAll('.crop-frame').length,
      };
    });
    const bad = [];
    if (!st.open || st.target !== id) bad.push('not open');
    if (st.title !== t.label) bad.push('title');
    if (st.view !== viewOf(id)) bad.push('wrong overview ' + st.view);
    if (t.what && st.text.indexOf(t.what) < 0) bad.push('what missing');
    if (t.legend && st.text.indexOf('Printed on the panel: ' + t.legend) < 0) bad.push('legend missing');
    if (!t.legend && /Printed on the panel/.test(st.text)) bad.push('legend invented');
    if (t.safety && st.text.indexOf('Worth knowing: ' + t.safety) < 0) bad.push('safety missing');
    if (t.trouble && st.text.indexOf('If it seems to do nothing: ' + t.trouble) < 0) bad.push('troubleshooting missing');
    if (t.source && st.text.indexOf(t.source) >= 0) bad.push('source shown');
    REMOVED.forEach((w) => { if (st.text.indexOf(w) >= 0) bad.push('says "' + w + '"'); });
    /* A page citation, as the data records one. The MIC jack's printed
       legend really says "See Owner's Manual", and that is panel text. */
    if (/(Owner's Manual|Parameter Guide) p\.\s*\d/.test(st.text)) bad.push('citation shown');
    if (st.chips.length !== t.kids.length || t.kids.some((k) => st.chips.indexOf(k) < 0)) bad.push('children ' + st.chips.length + '/' + t.kids.length);
    if (st.dialogs !== 1) bad.push(st.dialogs + ' dialogs');
    if (st.contexts !== 0) bad.push('full-instrument context image inside the popup');
    if (st.crops > 1) bad.push(st.crops + ' crops');
    const f = await fit();
    if (f.pageY || f.pageX) bad.push('page scrollbar');
    if (f.modalOver > 0 || f.dialogOver > 0) bad.push(`popup scrolls (${f.modalOver}/${f.dialogOver}px)`);
    if (!f.dialogInside) bad.push('popup leaves the stage');
    if (bad.length) fails.push(`popup for ${id}: ${bad.join(', ')}`);
    else renderedInModal++;
  }
  ok(renderedInModal === Object.keys(data.targets).length,
    `every hardware target renders in the popup (${renderedInModal}/${Object.keys(data.targets).length})`);

  /* --------------------------------------- stepping inside the popup --- */
  await goto('#explorer/view/top');
  await p.click('.exp-item[data-target="filterSection"]'); await p.waitForTimeout(260);
  const lenBefore = await p.evaluate(() => history.length);
  ok((await p.evaluate(() => document.getElementById('exp-modal-back').hidden)), 'a major area offers no parent step');
  await p.click('.exp-chip[data-target="cutoffKnob"]'); await p.waitForTimeout(260);
  ok((await modalOpen()) && (await modalTarget()) === 'cutoffKnob', 'a child chip shows the child in the same popup');
  ok((await hash()) === '#explorer/control/cutoffKnob', 'the route follows the child');
  ok((await p.evaluate(() => history.length)) === lenBefore, 'stepping inside the popup adds no history entry');
  ok((await p.evaluate(() => document.querySelectorAll('[role="dialog"]').length)) === 1, 'no second popup is opened');
  const backLabel = await p.textContent('#exp-modal-back');
  ok(/FILTER section/.test(backLabel) && !(await p.evaluate(() => document.getElementById('exp-modal-back').hidden)),
    `the child offers a step back to its parent (${backLabel.trim()})`);
  ok((await activeDesc()).indexOf('exp-modal-title') === 0, 'focus moves to the new title on a step');
  await p.click('#exp-modal-back'); await p.waitForTimeout(260);
  ok((await modalTarget()) === 'filterSection' && (await hash()) === '#explorer/control/filterSection', 'the parent step returns to the group');
  /* three levels: row -> step buttons -> one step button */
  await setHash('#explorer/control/favoritePatternRow');
  await p.click('.exp-chip[data-target="stepButtons"]'); await p.waitForTimeout(260);
  await p.click('.exp-chip[data-target="stepButton03"]'); await p.waitForTimeout(260);
  ok((await modalTarget()) === 'stepButton03', 'a grandchild is reached inside the popup');
  await p.click('#exp-modal-back'); await p.waitForTimeout(220);
  ok((await modalTarget()) === 'stepButtons', 'stepping back climbs one level');
  await p.click('#exp-modal-back'); await p.waitForTimeout(220);
  ok((await modalTarget()) === 'favoritePatternRow', 'and again to the major area');
  /* the rear panel as a whole is the overview, never a step */
  await setHash('#explorer/control/powerSwitch');
  ok((await p.evaluate(() => document.getElementById('exp-modal-back').hidden)), 'a rear connector offers no step to "Rear panel" - the overview is behind it');
  await setHash('#explorer/control/midiInPort');
  ok(/MIDI ports/.test(await p.textContent('#exp-modal-back')), 'a MIDI port steps back to MIDI ports');
  await p.click('#exp-modal-back'); await p.waitForTimeout(220);
  ok((await p.evaluate(() => document.getElementById('exp-modal-back').hidden)), 'MIDI ports offers no further step');

  /* ------------------------------------------------- dialog behaviour --- */
  await goto('#explorer/view/top');
  await p.click('.exp-item[data-target="effectsSection"]'); await p.waitForTimeout(260);
  const dlg = await p.evaluate(() => {
    const d = document.getElementById('exp-modal-dialog');
    return {
      role: d.getAttribute('role'), modal: d.getAttribute('aria-modal'),
      labelledby: d.getAttribute('aria-labelledby'),
      titleId: document.getElementById('exp-modal-title').id,
      focusInside: d.contains(document.activeElement),
      closeName: document.getElementById('exp-modal-close').getAttribute('aria-label'),
      nested: d.querySelectorAll('[role="dialog"]').length,
    };
  });
  ok(dlg.role === 'dialog' && dlg.modal === 'true', 'the popup is a modal dialog');
  ok(dlg.labelledby === dlg.titleId, 'the dialog is labelled by its title');
  ok(dlg.focusInside, 'focus moves into the dialog on open');
  ok(!!dlg.closeName, 'the close control has an accessible name');
  ok(dlg.nested === 0, 'no nested dialogs');

  /* Tab stays inside, in both directions */
  let escaped = false;
  for (let i = 0; i < 14; i++) {
    await p.keyboard.press('Tab');
    if (!(await p.evaluate(() => document.getElementById('exp-modal-dialog').contains(document.activeElement)))) escaped = true;
  }
  for (let i = 0; i < 14; i++) {
    await p.keyboard.press('Shift+Tab');
    if (!(await p.evaluate(() => document.getElementById('exp-modal-dialog').contains(document.activeElement)))) escaped = true;
  }
  ok(!escaped, 'Tab and Shift+Tab never leave the dialog');
  ok((await p.evaluate(() => document.activeElement.tagName)) === 'BUTTON', 'tabbing lands on real buttons');

  /* Close returns focus to the name that opened it */
  await p.click('#exp-modal-close'); await p.waitForTimeout(260);
  ok(!(await modalOpen()), 'Close hides the dialog');
  ok((await hash()) === '#explorer/view/top', 'Close leaves the learner on the overview');
  ok((await activeDesc()) === 'exp-item tone-c is-hot|effectsSection' || /exp-item.*\|effectsSection$/.test(await activeDesc()),
    `Close returns focus to the name that opened it (${await activeDesc()})`);

  /* Escape */
  await p.click('.exp-item[data-target="lfoSection"]'); await p.waitForTimeout(260);
  await p.keyboard.press('Escape'); await p.waitForTimeout(260);
  ok(!(await modalOpen()) && /\|lfoSection$/.test(await activeDesc()), 'Escape closes and restores focus');

  /* Backdrop */
  await p.click('.exp-map .hl[data-target="tempoSection"]'); await p.waitForTimeout(260);
  ok((await modalOpen()), 'hotspot opened the popup for the backdrop test');
  const bd = await p.evaluate(() => {
    const r = document.getElementById('exp-modal-backdrop').getBoundingClientRect();
    const d = document.getElementById('exp-modal-dialog').getBoundingClientRect();
    return { x: r.left + 20, y: Math.min(r.top + 60, d.top - 10) };
  });
  await p.mouse.click(bd.x, bd.y); await p.waitForTimeout(260);
  ok(!(await modalOpen()), 'clicking the backdrop closes the popup');
  ok(/\|tempoSection$/.test(await activeDesc()), 'a hotspot-opened popup returns focus to the matching name');

  /* A deep-linked popup had no opener: focus lands on the area it belongs to */
  await goto('#explorer/control/resonanceKnob');
  ok((await modalOpen()) && (await modalTarget()) === 'resonanceKnob', 'a cold control deep link opens its popup');
  ok((await p.evaluate(() => document.querySelector('.exp-overview').getAttribute('data-view'))) === 'top', 'on the top overview');
  await p.click('#exp-modal-close'); await p.waitForTimeout(260);
  ok((await hash()) === '#explorer/view/top', 'closing a deep-linked popup lands on the top overview');
  ok(/\|filterSection$/.test(await activeDesc()), `focus lands on the control's major area (${await activeDesc()})`);
  await goto('#explorer/control/groundTerminal');
  ok((await modalOpen()) && (await p.evaluate(() => document.querySelector('.exp-overview').getAttribute('data-view'))) === 'rear',
    'a rear control deep link opens on the rear overview');
  await p.keyboard.press('Escape'); await p.waitForTimeout(260);
  ok((await hash()) === '#explorer/view/rear', 'closing it lands on the rear overview');
  await goto('#explorer/control/notARealControl');
  ok((await hash()) === '#explorer', 'an unknown control still degrades to #explorer');
  ok(!(await modalOpen()), 'and opens no popup');

  /* ------------------------------------------------------------ search --- */
  await goto('#explorer/view/rear');
  await p.click('#searchbtn'); await p.waitForTimeout(150);
  await p.fill('#searchinput', 'cutoff'); await p.waitForTimeout(250);
  const hitIndex = await p.evaluate(() => {
    const hits = [...document.querySelectorAll('#searchresults .search-hit')];
    return hits.findIndex((h) => h.querySelector('.sh-title').textContent === 'Cutoff');
  });
  ok(hitIndex >= 0, 'search still indexes controls');
  if (hitIndex >= 0) {
    await p.evaluate((i) => document.querySelectorAll('#searchresults .search-hit')[i].click(), hitIndex);
    await p.waitForTimeout(300);
    ok((await hash()) === '#explorer/control/cutoffKnob', 'a control search hit routes to the control');
    ok((await p.evaluate(() => document.getElementById('searchpanel').hidden)), 'search closes on the way');
    ok((await modalOpen()) && (await modalTarget()) === 'cutoffKnob', 'and lands with the popup open');
    ok((await p.evaluate(() => document.querySelector('.exp-overview').getAttribute('data-view'))) === 'top', 'on the overview the control belongs to');
    await p.click('#exp-modal-close'); await p.waitForTimeout(260);
    ok((await hash()) === '#explorer/view/top', 'closing after a search hit leaves the top overview');
  }

  /* ------------------------------------------------ Back and Forward --- */
  await goto('#explorer');
  await setHash('#explorer/view/top');
  await p.click('.exp-item[data-target="filterSection"]'); await p.waitForTimeout(260);
  await p.click('.exp-chip[data-target="cutoffKnob"]'); await p.waitForTimeout(260);
  await p.goBack(); await p.waitForTimeout(300);
  ok((await hash()) === '#explorer/view/top' && !(await modalOpen()), 'one Back closes the popup however far it was stepped');
  await p.goForward(); await p.waitForTimeout(300);
  ok((await hash()) === '#explorer/control/cutoffKnob' && (await modalOpen()) && (await modalTarget()) === 'cutoffKnob',
    'Forward reopens it where it was');
  await p.click('#exp-modal-close'); await p.waitForTimeout(260);
  await p.goBack(); await p.waitForTimeout(300);
  ok((await hash()) === '#explorer/control/cutoffKnob' && (await modalOpen()), 'Back after Close reopens the popup');
  await p.goBack(); await p.waitForTimeout(300);
  ok((await hash()) === '#explorer/view/top' && !(await modalOpen()), 'Back again returns to the overview');
  await p.goBack(); await p.waitForTimeout(300);
  ok((await hash()) === '#explorer', 'and once more to Explorer home');

  /* leaving the Explorer takes the popup with it */
  await setHash('#explorer/control/display');
  ok((await modalOpen()), 'popup open before leaving');
  await setHash('#home');
  ok(!(await modalOpen()) && !(await p.evaluate(() => document.getElementById('view-home').hidden)), 'leaving for Home hides the popup');
  await setHash('#explorer/view/top');
  ok(!(await modalOpen()), 'the overview comes back without it');

  /* ------------------------------------------------ every window shape --- */
  for (const [w, h] of VIEWPORTS) {
    await p.setViewportSize({ width: w, height: h });
    for (const r of ['#explorer', '#explorer/view/top', '#explorer/view/rear', '#explorer/control/effectsSection', '#explorer/control/stepButtons']) {
      await setHash(r);
      await assertFit(`${w}x${h} ${r}`);
    }
  }
  await p.setViewportSize({ width: 1440, height: 900 });

  await b.close();
  console.log(`${browserName}: explorer checks ${pass} passed, ${fails.length} failed`);
  fails.forEach((f) => console.log('  FAIL ' + f));
  if (errs.length) { console.log('PAGE ERRORS:'); errs.forEach((e) => console.log('  ' + e)); }
  if (fails.length || errs.length) process.exit(1);
  console.log('EXPLORER OK');
})();
