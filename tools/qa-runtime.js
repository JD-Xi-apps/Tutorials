/*
 * JD-Xi Tutorial Hub - development-only runtime-contract checks.
 *
 *   node tools/qa-runtime.js [chromium|firefox]
 *
 * The shipped app must stay static HTML, CSS and JavaScript that opens by
 * double-clicking index.html: no build step, no modules, no runtime fetch, no
 * server, no framework, no network. Those are easy to break by accident and
 * hard to notice, because a development machine often has a server running and
 * a cached asset makes a remote reference look local.
 *
 * This checks the contract two ways: statically over the shipped files, and
 * then by loading the real app from a real file:// URL and watching every
 * request the browser actually makes.
 *
 * Anything under tools/ is excluded - it is development tooling and is never
 * loaded by the app.
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const browserName = process.argv[2] || 'chromium';

let pass = 0;
const problems = [];
function ok(cond, msg) { if (cond) pass++; else problems.push(msg); }

/* -------------------------------------------------------- shipped files */

function shippedFiles() {
  const out = [];
  (function walk(dir) {
    fs.readdirSync(dir, { withFileTypes: true }).forEach((e) => {
      if (e.name.startsWith('.') || e.name === 'tools' || e.name === 'docs') return;
      const abs = path.join(dir, e.name);
      if (e.isDirectory()) walk(abs);
      else if (/\.(html|css|js)$/.test(e.name)) out.push(abs);
    });
  })(ROOT);
  return out;
}

const files = shippedFiles();
ok(files.length > 0, 'found shipped files to check');

const BANNED = [
  [/\bfetch\s*\(/, 'runtime fetch()'],
  [/\bXMLHttpRequest\b/, 'XMLHttpRequest'],
  [/\bimport\s+[\w{*]/, 'ES module import'],
  [/\bexport\s+(default|const|function|class|\{)/, 'ES module export'],
  [/type\s*=\s*["']module["']/, 'type="module" script'],
  [/\brequire\s*\(/, 'CommonJS require()'],
  [/\bnew\s+WebSocket\b/, 'WebSocket'],
  [/\bnavigator\.serviceWorker\b/, 'service worker'],
  [/\bEventSource\b/, 'EventSource'],
];

files.forEach((abs) => {
  const rel = path.relative(ROOT, abs);
  const src = fs.readFileSync(abs, 'utf8');
  /* Strip comments so prose about the contract does not trip its own check. */
  const code = src
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/(^|[^:])\/\/.*$/gm, '$1')
    .replace(/<!--[\s\S]*?-->/g, '');
  BANNED.forEach(([re, name]) => {
    ok(!re.test(code), `${rel}: contains ${name}, which the runtime contract forbids`);
  });
});

/* Every src/href in the HTML must be a relative local path. */
{
  const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  const refs = [...html.matchAll(/\b(?:src|href)\s*=\s*"([^"]+)"/g)].map((m) => m[1]);
  ok(refs.length > 0, 'index.html references local assets');
  refs.forEach((r) => {
    ok(!/^(https?:)?\/\//.test(r) && !/^data:/.test(r),
      `index.html references "${r}", which is not a relative local path`);
    ok(fs.existsSync(path.join(ROOT, r.split('#')[0])),
      `index.html references "${r}", which does not exist on disk`);
  });
}

/* No package manifest, lockfile or build config may appear at the root. */
['package.json', 'package-lock.json', 'yarn.lock', 'webpack.config.js',
 'vite.config.js', 'rollup.config.js', 'tsconfig.json', 'Makefile'].forEach((f) => {
  ok(!fs.existsSync(path.join(ROOT, f)), `${f} exists, implying a build or install step`);
});

/* Canonical assets must be byte-identical to their recorded baselines. */
const crypto = require('crypto');
const ASSET_BASELINES = {
  'assets/images/JD-Xi.jpg': '28bda73cc8201d3f0907c57c64e4b2e57af644fb11df8858ad1a64e2291f77fc',
  'assets/images/JD-Xi_R.jpg': 'c041233eb4c1f24f00dd176c621b6b719a0c572ad1a2983ab7e26136074fa868',
  'assets/images/JD-Xi_logo.png': '2192e75eadf02f384c23b3150e958b15a9d8661c0d4559ba9693131ecfcebda1',
};
Object.keys(ASSET_BASELINES).forEach((rel) => {
  const abs = path.join(ROOT, rel);
  if (!fs.existsSync(abs)) { problems.push(`${rel} is missing`); return; }
  const got = crypto.createHash('sha256').update(fs.readFileSync(abs)).digest('hex');
  ok(got === ASSET_BASELINES[rel], `${rel}: SHA-256 is ${got}, expected ${ASSET_BASELINES[rel]}`);
});

/* -------------------------------------------------- the app on file:// */

(async () => {
  let pw;
  try {
    pw = require('playwright');
  } catch (e) {
    console.log('static checks only: Playwright not available');
    report();
    return;
  }

  const APP = 'file://' + path.join(ROOT, 'index.html');
  const b = await pw[browserName].launch();
  const p = await b.newPage({ viewport: { width: 1440, height: 900 } });

  const requests = [];
  const failed = [];
  const errors = [];
  p.on('request', (r) => requests.push(r.url()));
  p.on('requestfailed', (r) => failed.push(r.url()));
  p.on('pageerror', (e) => errors.push('pageerror ' + e.message));
  p.on('console', (m) => { if (m.type() === 'error') errors.push('console ' + m.text()); });

  /* A direct deep link, opened cold - not navigated to from the home screen. */
  await p.goto(APP + '#tutorial/N09/step/6');
  await p.waitForTimeout(600);

  ok(APP.startsWith('file://'), 'the app is loaded from a real file:// URL');

  const state = await p.evaluate(() => ({
    protocol: window.location.protocol,
    hash: window.location.hash,
    rendered: !!document.querySelector('main:not([hidden])'),
    step: (document.getElementById('lsn-progress') || {}).textContent,
    scripts: [...document.querySelectorAll('script')].map((s) => ({ src: s.getAttribute('src'), type: s.getAttribute('type') })),
    catalogs: {
      tutorials: Object.keys(window.JDXI_TUTORIALS || {}).length,
      collections: Object.keys(window.JDXI_COLLECTIONS || {}).length,
      targets: Object.keys((window.JDXI_HARDWARE_TARGETS || {}).targets || {}).length,
      progress: !!window.JDXI_PROGRESS,
      renderer: !!window.JDXI_LESSON_RENDERER,
    },
    imagesLoaded: [...document.images].every((i) => i.complete && i.naturalWidth > 0),
  }));

  ok(state.protocol === 'file:', 'the page is running on the file: protocol');
  ok(state.rendered, 'deep link rendered a view');
  ok(/Step 6 of/.test(state.step || ''), `deep link landed on the requested step (got "${state.step}")`);
  ok(state.catalogs.tutorials === 30, `all 30 tutorials loaded (got ${state.catalogs.tutorials})`);
  ok(state.catalogs.collections === 15, `all collections loaded (got ${state.catalogs.collections})`);
  ok(state.catalogs.targets === 99, `all hardware targets loaded (got ${state.catalogs.targets})`);
  ok(state.catalogs.progress && state.catalogs.renderer, 'progress and renderer modules loaded');
  ok(state.imagesLoaded, 'every image on the page loaded');
  state.scripts.forEach((s) => {
    ok(!s.type || s.type === 'text/javascript', `script ${s.src} is a classic script (type="${s.type}")`);
    ok(s.src && !/^(https?:)?\/\//.test(s.src), `script ${s.src} is local`);
  });

  /* Hash routing, from a cold deep link onward. */
  await p.evaluate(() => { window.location.hash = '#topic/sound-design'; });
  await p.waitForTimeout(250);
  ok((await p.evaluate(() => window.location.hash)) === '#topic/sound-design',
    'hash routing works from file://');

  /* Every request must be a local file. */
  const remote = requests.filter((u) => !u.startsWith('file://'));
  ok(remote.length === 0, `no network requests (saw ${remote.slice(0, 3).join(', ')})`);
  ok(failed.length === 0, `no failed resource requests (saw ${failed.slice(0, 3).join(', ')})`);
  ok(errors.length === 0, `no console or page errors (saw ${errors.slice(0, 2).join(' | ')})`);

  /* The app must survive storage being unavailable entirely. */
  const ctx2 = await b.newContext({ viewport: { width: 1440, height: 900 } });
  await ctx2.addInitScript(() => {
    Object.defineProperty(window, 'localStorage', {
      get() { throw new Error('storage blocked by policy'); },
    });
  });
  const p2 = await ctx2.newPage();
  const errors2 = [];
  p2.on('pageerror', (e) => errors2.push(e.message));
  p2.on('console', (m) => { if (m.type() === 'error') errors2.push(m.text()); });
  await p2.goto(APP + '#progress');
  await p2.waitForTimeout(400);
  const blocked = await p2.evaluate(() => ({
    rendered: !!document.querySelector('main:not([hidden])'),
    body: (document.getElementById('cat-body') || {}).textContent || '',
  }));
  ok(blocked.rendered, 'the app still renders when localStorage throws on access');
  ok(/cannot be saved/i.test(blocked.body), 'the app tells the learner progress cannot be saved');
  ok(errors2.length === 0, `no errors when storage is blocked (saw ${errors2.slice(0, 2).join(' | ')})`);

  /* And that every route still works without storage. */
  for (const h of ['#home', '#level/novice', '#favorites', '#settings', '#tutorial/B01/step/3']) {
    await p2.evaluate((x) => { window.location.hash = x; }, h);
    await p2.waitForTimeout(120);
    const r = await p2.evaluate(() => !!document.querySelector('main:not([hidden])'));
    ok(r, `${h} still renders with storage blocked`);
  }
  ok(errors2.length === 0, 'still no errors after navigating without storage');

  await b.close();
  report();
})();

function report() {
  console.log(`runtime-contract checks: ${pass} passed, ${problems.length} failed`);
  problems.forEach((m) => console.log('  FAIL ' + m));
  if (problems.length) process.exit(1);
  console.log('RUNTIME CONTRACT OK');
}
