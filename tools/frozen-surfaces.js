/*
 * JD-Xi Tutorial Hub - development-only frozen-surface regression QA.
 *
 *   node tools/frozen-surfaces.js --out <dir> [--browser chromium|firefox]
 *   node tools/frozen-surfaces.js --out <dir> --compare <baselineDir>
 *
 * The owner-approved surfaces - Home, the global topbar, and every step of
 * B01, B02 and N01 - must not drift when generic renderer, routing or CSS
 * work lands. This captures them from a real file:// load and, with
 * --compare, diffs each capture against a baseline taken at the batch parent.
 *
 * The diff is a real per-pixel count, not a file-hash equality test, so a
 * report can say how much moved and where rather than only that something
 * did. PNG decoding is done with node's own zlib - no dependencies, and no
 * effect on the shipped app, which never loads anything in tools/.
 */
'use strict';

const path = require('path');
const fs = require('fs');
const zlib = require('zlib');

const ROOT = path.resolve(__dirname, '..');
const APP = 'file://' + path.join(ROOT, 'index.html');

function arg(name, dflt) {
  const i = process.argv.indexOf(name);
  return i >= 0 && process.argv[i + 1] ? process.argv[i + 1] : dflt;
}
const outDir = arg('--out', null);
const compareDir = arg('--compare', null);
const browserName = arg('--browser', 'chromium');

if (!outDir) {
  console.error('usage: node tools/frozen-surfaces.js --out <dir> [--compare <baselineDir>]');
  process.exit(2);
}

/* The frozen set, by tutorial id. Every step of each is captured: the owner
   approved these screens as they stand, so "representative steps" would leave
   the rest unguarded. */
const FROZEN_TUTORIALS = ['B01', 'B02', 'N01'];

/* ------------------------------------------------------------- PNG decoding */

/* Minimal decoder for the 8-bit RGBA non-interlaced PNGs Playwright writes.
   Anything else is rejected rather than misread. */
function decodePng(buf) {
  if (buf.readUInt32BE(0) !== 0x89504e47) throw new Error('not a PNG');
  let pos = 8;
  let width = 0, height = 0, bitDepth = 0, colorType = 0, interlace = 0;
  const idat = [];
  while (pos < buf.length) {
    const len = buf.readUInt32BE(pos);
    const type = buf.toString('ascii', pos + 4, pos + 8);
    const data = buf.subarray(pos + 8, pos + 8 + len);
    if (type === 'IHDR') {
      width = data.readUInt32BE(0);
      height = data.readUInt32BE(4);
      bitDepth = data[8];
      colorType = data[9];
      interlace = data[12];
    } else if (type === 'IDAT') {
      idat.push(data);
    } else if (type === 'IEND') break;
    pos += 12 + len;
  }
  if (bitDepth !== 8 || interlace !== 0 || (colorType !== 6 && colorType !== 2)) {
    throw new Error(`unsupported PNG (depth ${bitDepth}, color ${colorType}, interlace ${interlace})`);
  }
  const channels = colorType === 6 ? 4 : 3;
  const raw = zlib.inflateSync(Buffer.concat(idat));
  const stride = width * channels;
  const out = Buffer.alloc(height * stride);
  let rp = 0;
  for (let y = 0; y < height; y++) {
    const filter = raw[rp++];
    const line = raw.subarray(rp, rp + stride);
    rp += stride;
    const cur = out.subarray(y * stride, (y + 1) * stride);
    const prev = y > 0 ? out.subarray((y - 1) * stride, y * stride) : null;
    for (let i = 0; i < stride; i++) {
      const a = i >= channels ? cur[i - channels] : 0;
      const b = prev ? prev[i] : 0;
      const c = prev && i >= channels ? prev[i - channels] : 0;
      const x = line[i];
      let v;
      switch (filter) {
        case 0: v = x; break;
        case 1: v = x + a; break;
        case 2: v = x + b; break;
        case 3: v = x + ((a + b) >> 1); break;
        case 4: {
          const p = a + b - c;
          const pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c);
          v = x + (pa <= pb && pa <= pc ? a : pb <= pc ? b : c);
          break;
        }
        default: throw new Error('bad PNG filter ' + filter);
      }
      cur[i] = v & 0xff;
    }
  }
  return { width, height, channels, data: out };
}

/* Per-pixel difference with a small tolerance for anti-aliasing jitter, plus
   the bounding box of everything that moved - a report needs to say where. */
function diffPng(aBuf, bBuf) {
  const a = decodePng(aBuf);
  const b = decodePng(bBuf);
  if (a.width !== b.width || a.height !== b.height) {
    return { sizeMismatch: true, a: `${a.width}x${a.height}`, b: `${b.width}x${b.height}` };
  }
  const TOL = 6;
  let differing = 0;
  let minX = Infinity, minY = Infinity, maxX = -1, maxY = -1;
  for (let y = 0; y < a.height; y++) {
    for (let x = 0; x < a.width; x++) {
      const ia = (y * a.width + x) * a.channels;
      const ib = (y * b.width + x) * b.channels;
      let moved = false;
      for (let c = 0; c < 3; c++) {
        if (Math.abs(a.data[ia + c] - b.data[ib + c]) > TOL) { moved = true; break; }
      }
      if (moved) {
        differing++;
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
      }
    }
  }
  const total = a.width * a.height;
  return {
    differing,
    total,
    pct: (differing / total) * 100,
    box: differing ? { x: minX, y: minY, w: maxX - minX + 1, h: maxY - minY + 1 } : null,
  };
}

/* ---------------------------------------------------------------- capture */

const pw = require('playwright');

(async () => {
  fs.mkdirSync(outDir, { recursive: true });
  const browser = await pw[browserName].launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const problems = [];
  page.on('console', (m) => { if (m.type() === 'error') problems.push('[console] ' + m.text()); });
  page.on('pageerror', (e) => problems.push('[pageerror] ' + e.message));
  page.on('requestfailed', (r) => problems.push('[requestfailed] ' + r.url()));

  await page.goto(APP + '#home');
  await page.waitForTimeout(400);

  const routes = await page.evaluate((frozen) => {
    const out = ['#home'];
    const all = window.JDXI_TUTORIALS || {};
    frozen.forEach((id) => {
      if (!all[id]) return;
      const n = all[id].steps.length;
      for (let i = 1; i <= n; i++) {
        out.push(i === 1 ? '#tutorial/' + id : '#tutorial/' + id + '/step/' + i);
      }
    });
    return out;
  }, FROZEN_TUTORIALS);

  /*
   * Long enough to outlast the step-transition cue (.hl-enter, 620ms - see
   * css/app.css section H) plus a rasterization margin. A frozen surface is
   * the screen at rest, and the routes below are walked in step order, so
   * every capture after the first is taken moments after a real step change.
   * At the previous 260ms the harness was photographing whatever frame the
   * ring happened to be on and calling the difference drift; it was racing an
   * animation it did not know about, in both engines.
   *
   * 900ms is measured, not guessed. The cue is fully finished at 620ms and
   * carries no fill mode, and a capture taken at the end of the run diffs to
   * zero pixels against one taken with the cue suppressed entirely - in
   * Chromium and in Firefox, on all 38 surfaces. The remaining 280ms is margin
   * for a slow raster, not for the animation.
   */
  const SETTLE_MS = 900;

  const names = [];
  for (const r of routes) {
    await page.evaluate((h) => { window.location.hash = h; }, r);
    await page.waitForTimeout(SETTLE_MS);
    const name = r.replace(/^#/, '').replace(/\//g, '_') + '.png';
    await page.screenshot({ path: path.join(outDir, name) });
    names.push(name);
  }

  /* The topbar is frozen independently of the view it sits above. */
  await page.evaluate(() => { window.location.hash = '#home'; });
  await page.waitForTimeout(220);
  const bar = await page.$('.topbar');
  if (bar) {
    await bar.screenshot({ path: path.join(outDir, 'topbar.png') });
    names.push('topbar.png');
  }

  await browser.close();
  console.log(`browser: ${browserName}`);
  console.log(`captured ${names.length} frozen surfaces to ${outDir}`);
  if (problems.length) {
    console.log('PROBLEMS during capture:');
    problems.forEach((p) => console.log('  ' + p));
  }

  if (!compareDir) return;

  let identical = 0;
  const drifted = [];
  const missing = [];
  for (const name of names) {
    const basePath = path.join(compareDir, name);
    if (!fs.existsSync(basePath)) { missing.push(name); continue; }
    const d = diffPng(fs.readFileSync(basePath), fs.readFileSync(path.join(outDir, name)));
    if (d.sizeMismatch) drifted.push({ name, note: `size ${d.a} -> ${d.b}` });
    else if (d.differing === 0) identical++;
    else drifted.push({
      name,
      note: `${d.differing} px (${d.pct.toFixed(4)}%) in box ` +
        `${d.box.x},${d.box.y} ${d.box.w}x${d.box.h}`,
    });
  }
  console.log(`\ncompared against ${compareDir}`);
  console.log(`identical: ${identical}/${names.length}`);
  if (missing.length) {
    console.log(`no baseline (new surface): ${missing.length}`);
    missing.forEach((m) => console.log('  ' + m));
  }
  if (drifted.length) {
    console.log(`DRIFTED: ${drifted.length}`);
    drifted.forEach((d) => console.log(`  ${d.name}: ${d.note}`));
    process.exit(1);
  }
  console.log('NO FROZEN-SURFACE DRIFT');
})();
