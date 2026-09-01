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
const QUICK_REFERENCE_TOTAL = 21;
const SPECIALTY_TOTAL = 3;

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

const { registry, tutorials, fixtures, collections, reference, specialty, explorer } = load();

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

/* -------------------------------------------- protect-your-work preflight */

/*
 * DESIGN-RULES.md §7a: a tutorial carries the protect-your-work preflight when
 * it can lose the learner's unsaved work - by DISCARDING it (selecting another
 * Program or Tone) or by OVERWRITING it (a knob that edits the loaded program).
 * The preflight must come BEFORE the first such step.
 *
 * This is checked rather than reviewed because two tutorials were shipped
 * without one and both were found by hand: B09 turned the tempo knob, which
 * overwrites a program setting, and I09 browsed the banks in its second step,
 * which discards. Neither was caught by any other check, because a missing
 * warning renders perfectly.
 *
 * The one exemption is listed here rather than inferred, so that a tutorial
 * skipping the preflight has to be argued for in this file.
 */
const PREFLIGHT_EXEMPT = {
  /* N09 selects no other program or tone - its Value presses name the program
     and choose the save destination inside the WRITE screen. It cannot discard
     the learner's loaded work; it is the tutorial that rescues it, and its
     first step tells the learner not to change program from here on. The risk
     it does carry runs the other way, to whatever occupies the destination
     slot, and N09-S06 is a whole step devoted to it. */
  N09: 'selects no other program or tone; its destination risk has its own step',
};

/* Targets whose use replaces the loaded program or the sound in it. */
const DISCARDING = /programValue|toneButtons|toneMinusButton|tonePlusButton|favoriteButton/;
const OVERWRITING =
  /cutoffKnob|resonanceKnob|filterTypeButton|envelopeKnob|levelKnob|lfo\w*Knob|lfoWaveformControl|effect\d|reverbKnob|delayKnob|tempoKnob|tempoSection|oscillatorButton|subOscButton|pulseWidthKnob/;
/* An instruction that actually operates a control, rather than one that tells
   the learner to look at it, read about it or decide something. */
const OPERATES = /^(press|hold|use|select|turn|set|choose|with|start|add|light|play|give|make|note|raise|move|adjust|tap)\b/i;
const CONTEMPLATES = /^(decide|read|find|look|learn|leave|check|do not)\b/i;

ids.forEach((id) => {
  const t = tutorials[id];
  const steps = t.steps || [];
  const preflightAt = steps.findIndex((s) =>
    /protect|afford to lose|save anything you came here/i.test(s.title || '')
  );

  let riskAt = -1;
  steps.forEach((s, i) => {
    if (riskAt >= 0) return;
    const targets = (s.hardwareTargets || []).join(' ');
    const instr = String(s.instruction || '');
    if (!OPERATES.test(instr) || CONTEMPLATES.test(instr)) return;
    if (DISCARDING.test(targets) || OVERWRITING.test(targets)) riskAt = i;
  });

  if (riskAt < 0) return;
  if (PREFLIGHT_EXEMPT[id]) {
    warn(true, '');  // counts the check without reporting
    return;
  }
  check(
    preflightAt >= 0,
    `tutorial ${id}: reaches a step that can lose unsaved work (${steps[riskAt].id}) with no protect-your-work preflight`
  );
  if (preflightAt >= 0) {
    /* At or before the risk. Equal is legitimate: I10's preflight IS the step
       that has the learner choose a program they are willing to build over, so
       the warning and the choice are the same act. Later is not. */
    check(
      preflightAt <= riskAt,
      `tutorial ${id}: the preflight (${steps[preflightAt].id}) comes after the first step that can lose unsaved work (${steps[riskAt].id})`
    );
  }
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
 *
 * Curriculum reconciliation removes steps, and a note that records where the
 * removed material went is worth keeping - it is the only place a reader can
 * find out that B03's Favorite steps became N09's. Such a record has to name
 * ids that deliberately no longer exist, so it goes inside a marked region:
 *
 *   <!-- removed-steps:begin -->  ... <!-- removed-steps:end -->
 *
 * The exemption is narrow and polices itself in BOTH directions. Inside the
 * region an id must be genuinely gone; naming a live step there would let a
 * real stale citation hide behind the marker, so that is an error too.
 */
const REMOVED_REGION = /<!--\s*removed-steps:begin\s*-->([\s\S]*?)<!--\s*removed-steps:end\s*-->/g;

ids.forEach((id) => {
  const notes = path.join(ROOT, 'docs', 'tutorials', `${id}-SOURCE-NOTES.md`);
  if (!fs.existsSync(notes)) return;
  const text = fs.readFileSync(notes, 'utf8');
  const stepIds = new Set((tutorials[id].steps || []).map((s) => s.id));
  const pattern = new RegExp(id + '-S\\d+', 'g');

  const removedRegions = text.match(REMOVED_REGION) || [];
  const declaredRemoved = new Set();
  removedRegions.forEach((region) => {
    (region.match(pattern) || []).forEach((ref) => declaredRemoved.add(ref));
  });

  /* A marked region may only name steps that are actually gone. */
  declaredRemoved.forEach((ref) => {
    check(!stepIds.has(ref),
      `tutorial ${id}: source notes list step "${ref}" as removed, but it still exists`);
  });

  const live = text.replace(REMOVED_REGION, '');
  const cited = new Set(live.match(pattern) || []);
  cited.forEach((ref) => {
    check(stepIds.has(ref),
      `tutorial ${id}: source notes cite step "${ref}", which does not exist` +
        (declaredRemoved.has(ref)
          ? ' (it is listed as removed elsewhere, but this citation is outside that region)'
          : ''));
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


/* ================================================= master-plan surfaces === */

/* ------------------------------------------------------- quick reference */

/*
 * The master plan (sec 20) fixes twenty-one required Quick Reference entries.
 * The count is checked because "concise recall" is a shape that erodes one
 * helpful addition at a time, and because a missing entry is invisible.
 */
if (reference) {
  const order = reference.order || [];
  const entries = reference.entries || {};

  check(order.length === QUICK_REFERENCE_TOTAL,
    `quick reference: ${order.length} entries, master plan requires ${QUICK_REFERENCE_TOTAL}`);

  const seenQr = new Set();
  order.forEach((id) => {
    const at = `quick reference "${id}"`;
    check(!seenQr.has(id), `${at}: listed twice in order`);
    seenQr.add(id);
    const e = entries[id];
    check(!!e, `${at}: named in order but has no entry`);
    if (!e) return;
    check(e.id === id, `${at}: entry id "${e.id}" does not match its key`);
    check(!!e.title, `${at}: no title`);
    check(!!e.summary, `${at}: no summary`);
    check(Array.isArray(e.steps) && e.steps.length > 0, `${at}: no procedure steps`);
    check(!!e.source, `${at}: no Roland source recorded`);
    check(Array.isArray(e.learnIn), `${at}: learnIn must be an array (empty is allowed)`);

    /* Every learnIn target must be a real tutorial, or the entry sends the
       learner to a tutorial that does not exist. */
    (e.learnIn || []).forEach((tid) => {
      check(Object.prototype.hasOwnProperty.call(tutorials || {}, tid),
        `${at}: learnIn names unknown tutorial "${tid}"`);
    });

    /*
     * A destructive procedure MUST carry a warning, and the warning renders
     * above the procedure (app.js builds it first). This is the master plan's
     * "destructive Quick Reference entries remain explicit", enforced rather
     * than reviewed - a missing warning renders perfectly.
     */
    if (e.destructive) {
      check(!!e.warning, `${at}: marked destructive but carries no warning`);
    }

    /*
     * And the reverse, which is the one that actually catches drift: an entry
     * whose own text talks about erasing or overwriting, but which is not
     * flagged destructive, is either mislabelled or wrongly worded.
     */
    const body = [e.title, e.summary, (e.steps || []).join(' ')].join(' ');
    if (/\berase[sd]?\b|\bclear(s|ing)? (a|the|every)\b/i.test(body) && !e.destructive) {
      check(!!e.warning,
        `${at}: describes erasing but is neither flagged destructive nor warned`);
    }
  });

  Object.keys(entries).forEach((id) => {
    check(seenQr.has(id), `quick reference "${id}": entry exists but is not in order`);
  });
} else if (beta) {
  errors.push('beta requires js/quick-reference.js (master plan sec 20)');
}

/* -------------------------------------------------------------- specialty */

if (specialty) {
  const order = specialty.order || [];
  const lessons = specialty.lessons || {};

  check(order.length === SPECIALTY_TOTAL,
    `specialty: ${order.length} lessons, master plan requires ${SPECIALTY_TOTAL}`);

  order.forEach((id) => {
    const at = `specialty "${id}"`;
    const l = lessons[id];
    check(!!l, `${at}: named in order but has no lesson`);
    if (!l) return;

    /*
     * Specialty must never be mistakable for canonical content. Its ids stay
     * out of JDXI_TUTORIALS and out of the B##/N##/I## shape, so no route,
     * no stored learner record and no progress count can confuse the two.
     */
    check(!Object.prototype.hasOwnProperty.call(tutorials || {}, id),
      `${at}: id also exists in the canonical catalog`);
    check(!/^[BNI]\d\d$/i.test(id), `${at}: id looks like a canonical tutorial id`);

    check(!!l.title, `${at}: no title`);
    check(!!l.summary, `${at}: no summary`);
    check(Array.isArray(l.steps) && l.steps.length > 0, `${at}: no steps`);

    (l.steps || []).forEach((st, i) => {
      const sat = `${at} step ${i + 1}`;
      check(!!st.id, `${sat}: no id`);
      check(!/^[BNI]\d\d-/i.test(st.id || ''), `${sat}: step id looks canonical`);
      check(!!st.instruction, `${sat}: no instruction`);
      check(!!st.checkpoint, `${sat}: no checkpoint`);
      check(!!st.recoveryHelp, `${sat}: no recoveryHelp`);
      check(VISUAL_MODES.indexOf(st.visualMode) >= 0,
        `${sat}: unknown visualMode "${st.visualMode}"`);
      (st.hardwareTargets || []).forEach((tid) => {
        check(!!targets[tid], `${sat}: unknown hardware target "${tid}"`);
      });

      /*
       * The same silent-failure rules a canonical step gets. Specialty is
       * rendered by the same renderer and fails in the same ways, and this
       * check is here because it was missing: six specialty steps asked for
       * an inset on targets with no zoom, so the magnification silently did
       * not happen and nothing reported it.
       */
      const resolved = (st.hardwareTargets || []).map((tid) => targets[tid]).filter(Boolean);
      if (INSET_MODES.indexOf(st.visualMode) >= 0) {
        check(resolved.some((t) => t.zoom),
          `${sat}: visualMode "${st.visualMode}" but no target carries a zoom - the inset would not render`);
      }
      if (st.visualMode === 'display-focus') {
        check((st.hardwareTargets || []).indexOf('display') >= 0,
          `${sat}: display-focus without the "display" target`);
        check(Array.isArray(st.expectedDisplay) && st.expectedDisplay.length > 0,
          `${sat}: display-focus with no expectedDisplay`);
      }
    });
  });

  /*
   * Included microphone only (master plan sec 21). External microphone setup,
   * guitar input and other external-audio workflows are out of scope, and the
   * check is on INSTRUCTIONAL text: a step may warn that something plugged
   * into the INPUT jack disables the mic, because that is how you get the
   * included microphone working.
   */
  const EXTERNAL = /\bguitar\b|\bcommercially available\b|\baudio player\b|\bLINE\/GUITAR\b|\bdynamic microphone\b/i;
  order.forEach((id) => {
    (lessons[id].steps || []).forEach((st) => {
      ['instruction', 'detail', 'whyItMatters', 'checkpoint'].forEach((f) => {
        if (st[f] && EXTERNAL.test(st[f])) {
          check(false,
            `specialty "${id}" ${st.id}.${f}: mentions external audio input, which v1 excludes`);
        }
      });
    });
  });

  const notesFile = path.join(ROOT, 'docs', 'tutorials', 'SPECIALTY-SOURCE-NOTES.md');
  check(fs.existsSync(notesFile), 'specialty: no SPECIALTY-SOURCE-NOTES.md');
  if (fs.existsSync(notesFile)) {
    const text = fs.readFileSync(notesFile, 'utf8');
    order.forEach((id) => {
      (lessons[id].steps || []).forEach((st) => {
        check(text.indexOf(st.id) >= 0,
          `specialty "${id}": source notes never cite step "${st.id}"`);
      });
    });
  }
} else if (beta) {
  errors.push('beta requires js/specialty.js (master plan sec 21)');
}

/* ------------------------------------------------------- hardware explorer */

if (explorer) {
  const describe = explorer.describe || {};
  const fallbacks = explorer.fallbacks || [];
  const described = (id) =>
    !!describe[id] || fallbacks.some((f) => id.indexOf(f.prefix) === 0);

  /*
   * EVERY registry target is reachable from the Explorer - through a major
   * group, a parent's child list, or a sibling chip - so every one needs a
   * description. A target with none renders a blank page rather than failing.
   */
  Object.keys(targets).forEach((id) => {
    check(described(id), `explorer: hardware target "${id}" has no description`);
  });

  Object.keys(describe).forEach((id) => {
    check(!!targets[id], `explorer: describes "${id}", which is not a hardware target`);
    check(!!describe[id].what, `explorer "${id}": no plain-language description`);
    check(!!describe[id].source, `explorer "${id}": no Roland source recorded`);
  });

  (explorer.views || []).forEach((v) => {
    check(!!images[v.id], `explorer view "${v.id}": no such image in the registry`);
    const group = (explorer.majorGroups || {})[v.id] || [];
    check(group.length > 0, `explorer view "${v.id}": no major groups listed`);
    group.forEach((id) => {
      check(!!targets[id], `explorer view "${v.id}": unknown target "${id}"`);
      if (targets[id]) {
        const imageId = targets[id].imageId || registry.defaultImageId;
        check(imageId === v.id,
          `explorer view "${v.id}": target "${id}" belongs to image "${imageId}"`);
      }
    });
  });

  /*
   * Major groups are the landing view, and the master plan is explicit that
   * it must not be 99 simultaneous labels. Top-level targets only.
   */
  Object.keys(explorer.majorGroups || {}).forEach((viewId) => {
    (explorer.majorGroups[viewId] || []).forEach((id) => {
      const t = targets[id];
      if (!t) return;
      check(!t.group || t.group === 'rearPanel',
        `explorer view "${viewId}": "${id}" is a child of "${t.group}" and is not a major group`);
    });
  });
} else if (beta) {
  errors.push('beta requires js/explorer.js (master plan sec 19)');
}


/* --------------------------------------------------- Bookmarked vs Favorite */

/*
 * The app feature is "Bookmarked"; "Favorite" is reserved for the JD-Xi's own
 * hardware feature (master plan sec 16). The two are easy to conflate and the
 * consequence is a learner who thinks pressing a star on a web page did
 * something to their instrument.
 *
 * So the check is on the SHIPPED UI, not on tutorial prose: tutorial content
 * uses "Favorite" correctly and often, because it is teaching the hardware.
 */
{
  const uiFiles = ['index.html', 'js/app.js'];
  uiFiles.forEach((rel) => {
    const abs = path.join(ROOT, rel);
    if (!fs.existsSync(abs)) return;
    const text = fs.readFileSync(abs, 'utf8');
    /* "Favorites"/"Favorited" are app-feature wordings and have no hardware
       reading - Roland's feature is "Favorite", singular, and is registered
       or recalled rather than "Favorited". */
    ['Favorites', 'Favorited'].forEach((word) => {
      const at = text.indexOf(word);
      check(at < 0,
        `${rel}: uses the app wording "${word}"; the app feature is Bookmarked ` +
        `and "Favorite" is reserved for the JD-Xi hardware feature`);
    });
  });

  /* And the reverse, so the hardware feature is not renamed by accident: the
     tutorials that teach it must still call it a Favorite. */
  const favTeachers = ['N02', 'N09', 'I09'];
  favTeachers.forEach((id) => {
    const t = (tutorials || {})[id];
    if (!t) return;
    const prose = JSON.stringify(t);
    check(/Favorite/.test(prose),
      `tutorial ${id}: teaches the JD-Xi hardware Favorite but never names it`);
  });
}


/* ------------------------------------------------ excluded guided content */

/*
 * v1 excludes a specific list of subjects from the GUIDED course
 * (PRODUCT-CURRICULUM-MASTER-PLAN.md sec 27, and the reconciliation brief
 * sec 20). Several of them were taught by the pre-reconciliation candidate,
 * so this is a regression guard rather than a theoretical one.
 *
 * Three deliberate scoping decisions, because a crude version of this check
 * is worse than none:
 *
 * 1. It reads RUNTIME DATA ONLY - js/tutorials.js and js/specialty.js. Source
 *    notes discuss the exclusions at length, by design: recording why a thing
 *    was removed is the point of them. A check that failed because a document
 *    said "Realtime Recording is excluded" would be exactly the crude check
 *    the brief warns against.
 * 2. `displayNote` is exempt. It carries the provenance of a reproduced
 *    screen, and the display house rule REQUIRES it to name the Roland
 *    document - including a version supplement.
 * 3. B01, B02 and N01 are exempt. They are calibrated, owner-approved
 *    baselines, and N01's menu-item list legitimately names screens the
 *    course does not teach because it is teaching the Menu itself.
 */
{
  const EXEMPT_TUTORIALS = ['B01', 'B02', 'N01'];
  const EXEMPT_FIELDS = ['displayNote'];

  const EXCLUDED = {
    'Realtime Recording': /\breal\s?time rec\b|\brealtime record/i,
    'Pattern Copy': /\bpattern copy\b/i,
    'sequencer Scale': /\bscale setting\b|\bsequencer scale\b|\bsubdivision\b/i,
    'velocity/accent': /\bvelocity\b|\baccent\b/i,
    'USB/MIDI/DAW': /\bUSB\b|\bMIDI\b|\bDAW\b/i,
    'Backup/Restore': /\bbackup\b|\bUTILITY\b/i,
    'firmware update': /\bfirmware\b|\bsystem version\b/i,
    'Interactive Chord': /\binteractive chord\b|\bchord edit\b/i,
    'Side Chain Compressor': /\bside ?chain\b/i,
    'Extra Banks': /\bextra bank/i,
    'Startup Program': /\bstart prog\b|\bstartup program\b/i,
    'external audio input': /\bguitar\b|\baudio player\b|\bexternal mic/i,
    /* Music-theory vocabulary the master plan sec 3.3 rules out. "Scale
       setting" is excluded above as a feature; here "scale" is the musical
       one, so the negative lookahead keeps the two apart. */
    'music-theory vocabulary': /\bchords?\b|\bintervals?\b|\bscales?\b(?! setting)|\bsemitones?\b|\bkey signature\b/i,
  };

  const lessons = [];
  Object.keys(tutorials || {}).forEach((id) => {
    if (EXEMPT_TUTORIALS.indexOf(id) >= 0) return;
    lessons.push([id, tutorials[id].steps || []]);
  });
  if (specialty) {
    (specialty.order || []).forEach((id) => lessons.push([id, specialty.lessons[id].steps || []]));
  }

  lessons.forEach(([id, steps]) => {
    steps.forEach((st) => {
      Object.keys(st).forEach((field) => {
        if (typeof st[field] !== 'string') return;
        if (EXEMPT_FIELDS.indexOf(field) >= 0) return;
        Object.keys(EXCLUDED).forEach((subject) => {
          check(!EXCLUDED[subject].test(st[field]),
            `${id} ${st.id}.${field}: teaches "${subject}", which v1 excludes from the guided course`);
        });
      });
    });
  });
}

/* ------------------------------------------------------------------ report */

console.log(`checks run: ${checks}`);
console.log(`tutorials: ${ids.length}` +
  (ids.length ? ` (${LEVELS.map((l) => l[0].toUpperCase() + byLevel[l].length).join(' ')})` : ''));
if (collections) console.log(`collections: ${Object.keys(collections).length}`);
console.log(`hardware targets: ${Object.keys(targets).length}`);
if (reference) console.log(`quick reference: ${(reference.order || []).length}`);
if (specialty) console.log(`specialty lessons: ${(specialty.order || []).length}`);

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
