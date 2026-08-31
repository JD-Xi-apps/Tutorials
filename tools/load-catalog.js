/*
 * JD-Xi Tutorial Hub - development-only catalog loader.
 *
 * Loads the app's classic browser scripts into a plain Node context so the
 * validators can inspect exactly the data the browser would see. It does not
 * modify the app, is never referenced by index.html, and is not part of the
 * shipped product: the runtime contract (no build, no modules, no server)
 * is unaffected by anything in tools/.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');

/* The classic scripts assign onto `window`; nothing else of the DOM is used at
   load time, so a bare object is a faithful enough host to read the data. */
function load() {
  const sandbox = { window: {}, console };
  sandbox.globalThis = sandbox;
  vm.createContext(sandbox);

  const files = [
    'js/hardware-targets.js',
    'js/tutorials.js',
    'js/tutorial-fixtures.js',
  ];
  const optional = ['js/collections.js'];

  for (const rel of files.concat(optional)) {
    const abs = path.join(ROOT, rel);
    if (!fs.existsSync(abs)) {
      if (optional.includes(rel)) continue;
      throw new Error('missing required script: ' + rel);
    }
    vm.runInContext(fs.readFileSync(abs, 'utf8'), sandbox, { filename: rel });
  }

  return {
    root: ROOT,
    registry: sandbox.window.JDXI_HARDWARE_TARGETS || null,
    tutorials: sandbox.window.JDXI_TUTORIALS || null,
    fixtures: sandbox.window.JDXI_TUTORIAL_FIXTURES || null,
    collections: sandbox.window.JDXI_COLLECTIONS || null,
  };
}

module.exports = { load, ROOT };
