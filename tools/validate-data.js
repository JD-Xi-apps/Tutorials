/*
 * JD-Xi Tutorial Hub - development-only data validation.
 *
 *   node tools/validate-data.js            structural checks
 *   node tools/validate-data.js --beta     additionally require the complete
 *                                          beta catalog (all 30 tutorials)
 *
 * Development tooling only. It is never loaded by index.html, needs no
 * install step, and has no dependencies - the app's no-build, no-server,
 * file:// runtime contract is untouched by it.
 *
 * Every check here exists because a defect in that class would reach a
 * learner: a step with no recovery, a highlight pointing at a target that
 * does not exist, a magnified view that silently renders nothing, an
 * invented display screen, a collection referencing a tutorial that was
 * renumbered. The renderer is deliberately generic and will not catch these
 * for us.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const { load, ROOT } = require('./load-catalog');

const LEVELS = ['beginner', 'novice', 'intermediate'];
const LEVEL_PREFIX = { beginner: 'B', novice: 'N', intermediate: 'I' };
const VISUAL_MODES = ['full', 'full-plus-inset', 'control-closeup', 'display-focus'];
const INSET_MODES = ['full-plus-inset', 'control-closeup'];
const DISPLAY_LINE_GUARD = 16;
const CANONICAL_TOTAL = 30;

const beta = process.argv.includes('--beta');

const errors = [];
const warnings = [];
let checks = 0;

function check(cond, msg) {
  checks++;
  if (!cond) errors.push(msg);
  return cond;
}
function warn(cond, msg) {
  checks++;
  if (!cond) warnings.push(msg);
  return cond;
}

const { registry, tutorials, fixtures, collections } = load();

/* ------------------------------------------------------------------ registry */

check(registry && registry.targets, 'hardware registry missing');
const targets = (registry && registry.targets) || {};
const images = (registry && registry.images) || {};

function targetImage(t) {
  return (t && t.imageId) || registry.defaultImageId;
}

Object.keys(targets).forEach((id) => {
  const t = targets[id];
  check(!!t.label, `target ${id}: no label`);
  const img = targetImage(t);
  check(!!images[img], `target ${id}: references unregistered image "${img}"`);
  if (t.region) {
    ['x', 'y', 'width', 'height'].forEach((k) => {
      const v = t.region[k];
      check(
        typeof v === 'number' && v >= 0 && v <= 1,
        `target ${id}: region.${k} not normalized 0..1 (${v})`
      );
    });
    check(
      t.region.x + t.region.width <= 1.0001 && t.region.y + t.region.height <= 1.0001,
      `target ${id}: region extends past the image`
    );
  }
  if (t.zoom) {
    check(
      t.zoom.x + t.zoom.width <= 1.0001 && t.zoom.y + t.zoom.height <= 1.0001,
      `target ${id}: zoom extends past the image`
    );
    /* A crop that does not contain its own target renders a magnified view of
       the wrong thing. The renderer applies the same containment rule when it
       decides which highlights a crop may carry. */
    if (t.region) {
      const z = t.zoom;
      const r = t.region;
      const E = 1e-4;
      check(
        r.x >= z.x - E &&
          r.y >= z.y - E &&
          r.x + r.width <= z.x + z.width + E &&
          r.y + r.height <= z.y + z.height + E,
        `target ${id}: zoom does not contain its own region`
      );
    }
  }
  if (t.group) check(!!targets[t.group], `target ${id}: unknown parent group "${t.group}"`);
});

/* ----------------------------------------------------------------- catalog */

check(tutorials && typeof tutorials === 'object', 'tutorial catalog missing');
const ids = Object.keys(tutorials || {});

if (beta) {
  check(
    ids.length === CANONICAL_TOTAL,
    `beta requires exactly ${CANONICAL_TOTAL} canonical tutorials; found ${ids.length}`
  );
}

/* Development fixtures must never leak into the canonical catalog, in either
   direction: a fixture picked up by the guided path would present engineering
   text as a lesson. */
Object.keys(fixtures || {}).forEach((fid) => {
  check(!Object.prototype.hasOwnProperty.call(tutorials, fid),
    `fixture "${fid}" also appears in the canonical catalog`);
  check(!/^[BNI]\d\d$/.test(fid), `fixture "${fid}" uses a canonical-looking id`);
});

const byLevel = { beginner: [], novice: [], intermediate: [] };
const seenObjects = new Set();

ids.forEach((id) => {
  const t = tutorials[id];
  const at = `tutorial ${id}`;

  check(t.id === id, `${at}: id field "${t.id}" does not match its key`);
  check(/^[BNI]\d\d$/.test(id), `${at}: id is not a canonical B##/N##/I## key`);
  check(LEVELS.includes(t.level), `${at}: invalid level "${t.level}"`);
  check(
    LEVEL_PREFIX[t.level] === id[0],
    `${at}: id prefix does not match level "${t.level}"`
  );
  check(Number.isInteger(t.order) && t.order >= 1 && t.order <= 10,
    `${at}: order must be an integer 1..10 (got ${t.order})`);
  check(!!t.title, `${at}: no title`);
  check(!!t.shortTitle, `${at}: no shortTitle`);
  check(!!t.summary, `${at}: no summary`);
  check(
    typeof t.estimatedMinutes === 'number' && t.estimatedMinutes > 0 && t.estimatedMinutes <= 60,
    `${at}: estimatedMinutes must be a sensible positive number (got ${t.estimatedMinutes})`
  );
  check(Array.isArray(t.prerequisites), `${at}: prerequisites must be an array`);
  check(Array.isArray(t.learningGoals) && t.learningGoals.length > 0,
    `${at}: needs at least one learningGoal`);
  /* topics[] is generated from collections at load time and must never be
     authored - two copies of membership drift (architecture §5). */
  check(!('topics' in t), `${at}: authored topics[] is forbidden; membership lives in collections`);

  (t.prerequisites || []).forEach((p) => {
    check(!!tutorials[p], `${at}: prerequisite "${p}" is not a canonical tutorial`);
    check(p !== id, `${at}: lists itself as a prerequisite`);
  });

  /* Two catalog keys pointing at one object would make a single edit change
     two tutorials silently. */
  check(!seenObjects.has(t), `${at}: shares its content object with another tutorial`);
  seenObjects.add(t);

  if (LEVELS.includes(t.level)) byLevel[t.level].push({ id, order: t.order });

  check(Array.isArray(t.steps) && t.steps.length > 0, `${at}: has no steps`);

  const stepIds = new Set();
  (t.steps || []).forEach((s, i) => {
    const sat = `${id} step ${i + 1} (${s.id || 'no id'})`;
    check(!!s.id, `${sat}: no step id`);
    check(!stepIds.has(s.id), `${sat}: duplicate step id within the tutorial`);
    stepIds.add(s.id);
    check(!!s.title, `${sat}: no title`);
    check(!!s.instruction, `${sat}: no instruction`);
    check(!!s.checkpoint, `${sat}: no checkpoint`);
    check(!!s.recoveryHelp, `${sat}: no recoveryHelp`);
    check(VISUAL_MODES.includes(s.visualMode), `${sat}: invalid visualMode "${s.visualMode}"`);
    check(Array.isArray(s.hardwareTargets), `${sat}: hardwareTargets must be an array`);

    /* Coordinates in content are the one thing the architecture forbids
       outright: a re-measured target must fix every tutorial at once. */
    const raw = JSON.stringify(s);
    ['region', 'zoom', 'imageId', '"x"', '"y"'].forEach((banned) => {
      check(raw.indexOf(banned) < 0, `${sat}: content carries "${banned}" - geometry belongs in the registry`);
    });

    const resolved = (s.hardwareTargets || []).map((tid) => ({ tid, t: targets[tid] }));
    resolved.forEach((r) => check(!!r.t, `${sat}: unknown hardware target "${r.tid}"`));

    const measurable = resolved.filter((r) => r.t && r.t.region);
    const imgs = Array.from(new Set(measurable.map((r) => targetImage(r.t))));
    check(imgs.length <= 1,
      `${sat}: mixes hardware images (${imgs.join(', ')}); one image per step`);

    /* An inset mode with no zoomable target renders the full view and silently
       drops the magnification the step asked for. */
    if (INSET_MODES.includes(s.visualMode)) {
      check(
        measurable.some((r) => r.t.zoom),
        `${sat}: visualMode "${s.visualMode}" but no target carries a zoom - the inset would not render`
      );
    }

    if (s.visualMode === 'display-focus') {
      check(
        (s.hardwareTargets || []).indexOf('display') >= 0,
        `${sat}: display-focus without the "display" target - no "Where this is" crop`
      );
      check(
        Array.isArray(s.expectedDisplay) && s.expectedDisplay.length > 0,
        `${sat}: display-focus with no expectedDisplay`
      );
    }

    if (s.expectedDisplay) {
      check(Array.isArray(s.expectedDisplay), `${sat}: expectedDisplay must be an array of lines`);
      (s.expectedDisplay || []).forEach((line, li) => {
        check(typeof line === 'string', `${sat}: expectedDisplay line ${li + 1} is not a string`);
        /* Guard only. This asserts nothing about the real character grid,
           which is undocumented (source-map Q4); it stops an author composing
           a screen the hardware could not show. */
        check(
          String(line).length <= DISPLAY_LINE_GUARD,
          `${sat}: expectedDisplay line ${li + 1} is ${String(line).length} chars, over the ${DISPLAY_LINE_GUARD}-char guard`
        );
      });
      /* A reproduced screen is a factual claim and states where it came from. */
      if (s.syntheticDisplay === false) {
        check(!!s.displayNote,
          `${sat}: reproduces a documented screen but carries no displayNote`);
      }
      check(s.syntheticDisplay === false,
        `${sat}: expectedDisplay must reproduce a documented screen (syntheticDisplay: false); screens may never be composed`);
    }

    /* A step with neither a display nor a sound gives the learner nothing to
       confirm against beyond the checkpoint prose. Advisory, per architecture §7. */
    warn(
      !!(s.expectedDisplay || s.expectedSound) || (s.hardwareTargets || []).length > 0,
      `${sat}: no expectedDisplay, no expectedSound and no hardware target`
    );
  });

  /* Source notes are the audit trail for every technical claim. */
  const notes = path.join(ROOT, 'docs', 'tutorials', `${id}-SOURCE-NOTES.md`);
  check(fs.existsSync(notes), `${at}: missing docs/tutorials/${id}-SOURCE-NOTES.md`);
});

/* Guided-path integrity: order must be contiguous from 1 within each level, or
   "the next tutorial is order+1" silently dead-ends. */
LEVELS.forEach((lvl) => {
  const list = byLevel[lvl].sort((a, b) => a.order - b.order);
  const orders = list.map((e) => e.order);
  check(new Set(orders).size === orders.length,
    `level ${lvl}: duplicate order values (${orders.join(', ')})`);
  orders.forEach((o, i) => {
    check(o === i + 1, `level ${lvl}: order is not contiguous from 1 (got ${orders.join(', ')})`);
  });
  if (beta) {
    check(list.length === 10, `level ${lvl}: beta requires 10 tutorials, found ${list.length}`);
  }
});

/* ------------------------------------------------- learner-facing references */

/*
 * Tutorials point at each other in learner-facing prose ("N09 Save your work is
 * the tutorial that teaches saving"). A reference to an id outside the canonical
 * thirty is a typo that would send a learner nowhere, and no route or render
 * check can catch it because it is prose. Before the catalog is complete a
 * reference to a real-but-unauthored id is expected and only warns; at --beta
 * every one of them must resolve.
 */
const CANONICAL_IDS = new Set();
['beginner', 'novice', 'intermediate'].forEach((lvl) => {
  for (let i = 1; i <= 10; i++) {
    CANONICAL_IDS.add(LEVEL_PREFIX[lvl] + String(i).padStart(2, '0'));
  }
});
const PROSE_FIELDS = [
  'summary', 'title', 'instruction', 'detail', 'expectedSound',
  'whyItMatters', 'checkpoint', 'recoveryHelp', 'nextHint',
];

ids.forEach((id) => {
  const t = tutorials[id];
  const scan = (text, where) => {
    (String(text || '').match(/\b([BNI]\d\d)\b/g) || []).forEach((ref) => {
      check(CANONICAL_IDS.has(ref),
        `${where}: references "${ref}", which is not a canonical tutorial id`);
      if (CANONICAL_IDS.has(ref)) {
        if (beta) {
          check(!!tutorials[ref], `${where}: references "${ref}", which does not exist`);
        } else {
          warn(!!tutorials[ref],
            `${where}: references "${ref}", not authored yet (expected until the catalog is complete)`);
        }
      }
    });
  };
  scan(t.summary, `tutorial ${id} summary`);
  (t.learningGoals || []).forEach((g, i) => scan(g, `tutorial ${id} learningGoal ${i + 1}`));
  (t.steps || []).forEach((s) => {
    PROSE_FIELDS.forEach((f) => scan(s[f], `${id} step ${s.id} ${f}`));
  });
});

/* ----------------------------------------------------- recovery house rules */

/*
 * Two content rules that no render or route check could ever see, both of
 * which would put a learner's work at risk if broken.
 *
 * Factory Reset initialises every user program and every system setting
 * (OM p.14). It is never a routine recovery, so it may not appear in any
 * step's recoveryHelp - the one tutorial that names it at all, N10, does so to
 * teach recognising the screen and pressing [Exit], in its detail rather than
 * as a suggested fix.
 *
 * "Select another program" IS a documented recovery, but it discards every
 * unsaved change - so wherever it is offered, the discard has to be stated in
 * the same breath.
 */
const DISCARD_OFFER =
  /(select|choos|switch)\w*\s+(to\s+)?(a\s+)?(different|another)\s+program/i;
const DISCARD_WARNING = /discard|throw(s|ing)? (it |them |that |everything )?away|lose|lost|gone/i;

ids.forEach((id) => {
  const t = tutorials[id];
  (t.steps || []).forEach((s) => {
    const recovery = String(s.recoveryHelp || '');
    check(!/factory reset/i.test(recovery),
      `${id} step ${s.id}: offers Factory Reset as recovery, which is never a routine fix`);
    if (DISCARD_OFFER.test(recovery)) {
      check(DISCARD_WARNING.test(recovery),
        `${id} step ${s.id}: offers selecting another program without saying it discards unsaved work`);
    }
  });
});

/* --------------------------------------------- source-note step references */

/*
 * A tutorial's source notes cite its steps by id, and those citations are the
 * audit trail for every technical claim. Splitting or reordering a step
 * renumbers everything after it, and a stale citation silently points the
 * reader at the wrong evidence - which is worse than no citation, and which
 * nothing else here would catch because the notes are prose.
 */
ids.forEach((id) => {
  const notes = path.join(ROOT, 'docs', 'tutorials', `${id}-SOURCE-NOTES.md`);
  if (!fs.existsSync(notes)) return;
  const text = fs.readFileSync(notes, 'utf8');
  const stepIds = new Set((tutorials[id].steps || []).map((s) => s.id));
  const cited = new Set(text.match(new RegExp(id + '-S\\d+', 'g')) || []);
  cited.forEach((ref) => {
    check(stepIds.has(ref),
      `tutorial ${id}: source notes cite step "${ref}", which does not exist`);
  });
});

/* ------------------------------------------------------- firmware caveats */

/*
 * A step that carries a version caveat must name ONE version. Firmware-gated
 * content is written so an older instrument can skip it, and the whole
 * mechanism depends on the learner being told the right number - a step that
 * says 1.50 in its detail and 1.10 in its recovery tells them to check for the
 * wrong thing, and no render or route check would ever see it.
 *
 * Only versions Roland documents as changing behaviour are valid: 1.10 and
 * 1.50. 1.51 is a bug fix and 1.52 an administrative renumber, so neither
 * gates a feature (ROLAND-SOURCE-MAP §11.1) - but 1.51 is allowed in prose
 * because it is the owner-observed installed version, and N01 reproduces a
 * screen showing it.
 */
const GATING_VERSIONS = new Set(['1.10', '1.50']);
const MENTIONABLE_VERSIONS = new Set(['1.10', '1.50', '1.51']);

ids.forEach((id) => {
  const t = tutorials[id];
  (t.steps || []).forEach((s) => {
    const text = PROSE_FIELDS.map((f) => s[f] || '').join(' ');
    const seen = new Set((text.match(/\b1\.\d\d\b/g) || []));
    seen.forEach((v) => {
      check(MENTIONABLE_VERSIONS.has(v),
        `${id} step ${s.id}: names system version "${v}", which Roland does not document as changing behaviour`);
    });
    const gating = Array.from(seen).filter((v) => GATING_VERSIONS.has(v));
    check(gating.length <= 1,
      `${id} step ${s.id}: names more than one gating version (${gating.join(', ')}) - a version caveat must be consistent within a step`);
  });
});

/* -------------------------------------------------------------- collections */

if (collections) {
  const seenIds = new Set();
  Object.keys(collections).forEach((cid) => {
    const c = collections[cid];
    const at = `collection ${cid}`;
    check(c.id === cid, `${at}: id field does not match its key`);
    check(!seenIds.has(cid), `${at}: duplicate collection id`);
    seenIds.add(cid);
    check(!!c.title, `${at}: no title`);
    check(!!c.description, `${at}: no description`);
    check(c.status === 'live' || c.status === 'planned', `${at}: invalid status "${c.status}"`);
    check(Array.isArray(c.tutorialIds), `${at}: tutorialIds must be an array`);
    const seen = new Set();
    (c.tutorialIds || []).forEach((tid) => {
      check(!!tutorials[tid], `${at}: references unknown tutorial "${tid}"`);
      check(!seen.has(tid), `${at}: lists "${tid}" twice`);
      seen.add(tid);
    });
    if (c.status === 'live') {
      check((c.tutorialIds || []).length > 0, `${at}: live collection is empty`);
    }
  });
} else if (beta) {
  errors.push('beta requires js/collections.js (topic membership source of truth)');
}

/* ------------------------------------------------------------------ report */

console.log(`checks run: ${checks}`);
console.log(`tutorials: ${ids.length}` +
  (ids.length ? ` (${LEVELS.map((l) => l[0].toUpperCase() + byLevel[l].length).join(' ')})` : ''));
if (collections) console.log(`collections: ${Object.keys(collections).length}`);
console.log(`hardware targets: ${Object.keys(targets).length}`);

if (warnings.length) {
  console.log(`\nWARNINGS (${warnings.length}):`);
  warnings.forEach((w) => console.log('  - ' + w));
}
if (errors.length) {
  console.log(`\nERRORS (${errors.length}):`);
  errors.forEach((e) => console.log('  - ' + e));
  process.exit(1);
}
console.log('\nDATA OK');
