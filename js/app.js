/*
 * JD-Xi Tutorial Hub - stage fitting, hash routing and the discovery surfaces.
 *
 * The 1440x900 stage-fit mechanism is unchanged from the frozen home baseline:
 * one fixed reference canvas, scaled proportionally to fit the window, height
 * preferred. Every view lives INSIDE that stage - there is deliberately no
 * second scaling system.
 *
 * Routing is hash-based so the app keeps working from file:// with no server,
 * no build step and no framework.
 *
 * Classic script on purpose - no modules, no fetch.
 */
(() => {
  const stage = document.getElementById('stage');
  const BASE_W = 1440;
  const BASE_H = 900;

  function fitStage() {
    const widthScale = window.innerWidth / BASE_W;
    const heightScale = window.innerHeight / BASE_H;
    const scale = Math.min(heightScale, widthScale);
    const left = (window.innerWidth - BASE_W * scale) / 2;
    const top = (window.innerHeight - BASE_H * scale) / 2;

    stage.style.transform = `translate(${left}px, ${top}px) scale(${scale})`;
  }

  window.addEventListener('resize', fitStage, { passive: true });
  fitStage();

  /* ------------------------------------------------------------------ data */

  /* Shown in Settings > About. Bumped deliberately, not derived. */
  const APP_VERSION = 'v1.0 beta';

  const LEVELS = ['beginner', 'novice', 'intermediate'];
  const LEVEL_LABEL = {
    beginner: 'Beginner',
    novice: 'Novice',
    intermediate: 'Intermediate',
  };
  const LEVEL_BLURB = {
    beginner: 'Get comfortable with the JD-Xi. First sounds, the keys, the knobs, and a pattern playing.',
    novice: 'Start building things. Menus, the sequencer, your own beats and lines, and how to keep them.',
    intermediate: 'Design and perform. Build sounds on purpose, arrange them, and play a program of your own.',
  };

  const tutorials = () => window.JDXI_TUTORIALS || {};
  const collections = () => window.JDXI_COLLECTIONS || {};
  const progress = () => window.JDXI_PROGRESS;
  const reference = () => window.JDXI_QUICK_REFERENCE || { order: [], entries: {} };
  const specialty = () => window.JDXI_SPECIALTY || { order: [], lessons: {} };
  const explorer = () => window.JDXI_EXPLORER || { views: [], majorGroups: {}, describe: {}, fallbacks: [] };
  const hardware = () => window.JDXI_HARDWARE_TARGETS || { images: {}, targets: {} };
  const renderer = () => window.JDXI_LESSON_RENDERER;

  /*
   * Explorer description lookup. A family of identical controls (the sixteen
   * step buttons) is described once by prefix rather than sixteen times.
   */
  function describeTarget(id) {
    const E = explorer();
    if (E.describe[id]) return E.describe[id];
    const fb = (E.fallbacks || []).filter((f) => id.indexOf(f.prefix) === 0)[0];
    return fb || null;
  }

  function tutorialsInLevel(level) {
    const all = tutorials();
    return Object.keys(all)
      .filter((id) => all[id].level === level)
      .sort((a, b) => all[a].order - all[b].order);
  }

  /* A collection is reachable when it exists and has something to show. An
     empty one would render a placeholder page, so it degrades to #home. */
  function routableCollection(id) {
    const c = collections()[id];
    return c && Array.isArray(c.tutorialIds) && c.tutorialIds.length ? c : null;
  }

  /* ------------------------------------------------------------------ views */

  const views = {
    home: document.getElementById('view-home'),
    lesson: document.getElementById('view-lesson'),
    catalog: document.getElementById('view-catalog'),
  };

  function showView(name) {
    Object.keys(views).forEach((k) => { views[k].hidden = k !== name; });
    document.body.classList.toggle('in-lesson', name === 'lesson');
    /*
     * Leaving the lesson view is the one fact the renderer's step-transition
     * cue needs and cannot observe for itself: it only ever sees renders, and
     * two renders either side of a trip to Home look exactly like two steps in
     * a row. Reported here because this is the only place that knows a view
     * changed; what to do about it is the renderer's business, not this file's.
     */
    if (name !== 'lesson' && renderer() && renderer().noteLessonLeft) renderer().noteLessonLeft();
    /* The Explorer popup belongs to its overview; leaving the catalog view
       leaves both behind. */
    if (name !== 'catalog') {
      explorerShown = null;
      hideModal();
    }
  }

  function el(tag, cls, text) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  /* ---------------------------------------------------------------- routing */

  /*
   * Route families, all sharing one router:
   *
   *   development fixtures   #dev/<key>/step/<n>        js/tutorial-fixtures.js
   *   canonical tutorials    #tutorial/<id>             js/tutorials.js
   *                          #tutorial/<id>/step/<n>
   *   discovery surfaces     #level/<level>             derived from the catalog
   *                          #topic/<collection-id>     js/collections.js
   *                          #bookmarks #progress #settings
   *   hardware explorer      #explorer                  js/explorer.js
   *                          #explorer/view/<view>
   *                          #explorer/control/<id>     the view the control is
   *                                                     on, with its popup open
   *
   * Nothing is hardcoded per tutorial or per collection: adding either needs
   * only a data entry.
   */
  const DEV_FIXTURES = {
    'lesson-renderer': 'renderer-demo',
    'rear-panel': 'rear-panel-demo',
  };
  const DEV_ROUTE = /^#dev\/(lesson-renderer|rear-panel)\/step\/(\d+)$/;
  const TUTORIAL_ROUTE = /^#tutorial\/([A-Za-z0-9]+)(?:\/step\/(\d+))?$/;
  const LEVEL_ROUTE = /^#level\/([a-z]+)$/;
  const TOPIC_ROUTE = /^#topic\/([a-z0-9-]+)$/;
  const SPECIALTY_ROUTE = /^#specialty\/([a-z0-9-]+)(?:\/step\/(\d+))?$/;
  const REFERENCE_ROUTE = /^#reference\/([a-z0-9-]+)$/;
  const COMPLETE_ROUTE = /^#complete\/([A-Za-z0-9-]+)$/;
  const EXPLORER_VIEW_ROUTE = /^#explorer\/view\/([a-z0-9-]+)$/;
  const EXPLORER_CONTROL_ROUTE = /^#explorer\/control\/([A-Za-z0-9]+)$/;
  const PLAIN_ROUTES = ['#bookmarks', '#progress', '#settings', '#reference', '#specialty', '#explorer'];
  /* The app feature was renamed Bookmarked; the old hash still resolves so a
     link someone saved before the rename does not dead-end. */
  const LEGACY_ROUTES = { '#favorites': '#bookmarks' };

  function fixture(routeKey) {
    const all = window.JDXI_TUTORIAL_FIXTURES || {};
    return all[DEV_FIXTURES[routeKey]] || null;
  }

  function canonical(id) {
    const all = tutorials();
    return Object.prototype.hasOwnProperty.call(all, id) ? all[id] : null;
  }

  function specialtyLesson(id) {
    const all = specialty().lessons;
    return Object.prototype.hasOwnProperty.call(all, id) ? all[id] : null;
  }

  /*
   * Lesson descriptor: { kind, key, tutorial }.
   *
   * A specialty lesson is rendered by the same renderer from the same Step
   * model, so it is a lesson here - but its `kind` keeps it out of canonical
   * progress, out of the guided path, and out of x/30.
   */
  function lesson(kind, key) {
    const tut =
      kind === 'dev' ? fixture(key) : kind === 'specialty' ? specialtyLesson(key) : canonical(key);
    return tut ? { kind: kind, key: key, tutorial: tut } : null;
  }

  /*
   * Guided path: the tutorial that follows this one is simply the canonical
   * tutorial in the SAME level whose order is one greater. Nothing here is
   * hardcoded per tutorial. Development fixtures have no guided position, so
   * they never gain one. Returns { id, tutorial } or null at the end of a level.
   */
  function nextInLevel(lsn) {
    if (!lsn || lsn.kind !== 'tutorial') return null;
    const tut = lsn.tutorial;
    if (!tut.level || tut.order == null) return null;
    const all = tutorials();
    // sorted so a malformed catalog with a duplicate (level, order) still
    // resolves to one defined destination rather than a load-order accident
    const id = Object.keys(all)
      .sort()
      .filter((k) => {
        const t = all[k];
        return t && t.level === tut.level && t.order === tut.order + 1;
      })[0];
    return id ? { id: id, tutorial: all[id] } : null;
  }

  function stepHash(lsn, n) {
    if (lsn.kind === 'dev') return '#dev/' + lsn.key + '/step/' + n;
    const base = lsn.kind === 'specialty' ? '#specialty/' : '#tutorial/';
    // the bare route IS step 1; deeper steps carry the step segment.
    return n === 1 ? base + lsn.key : base + lsn.key + '/step/' + n;
  }

  /*
   * The same step, addressed as a step and nothing else.
   *
   * stepHash() collapses step 1 to the bare route on purpose, because that is
   * the address a learner shares, bookmarks and arrives at - and the bare route
   * is a DECISION point: for a part-finished tutorial it offers Continue or
   * Start over, and for a completed one it offers the review overview. That is
   * right for arriving, and wrong for every control that means "step 1" after
   * the learner has already decided. Back from step 2 sent them to the choice
   * for the lesson they were standing in; Start over and Start from step 1
   * re-rendered the very surface they were pressed on, so both were dead.
   *
   * So this is deliberately NOT a change to stepHash(): the bare route keeps
   * its meaning for direct entry, and the controls that mean a step ask for one.
   */
  function explicitStepHash(lsn, n) {
    if (lsn.kind === 'dev') return '#dev/' + lsn.key + '/step/' + n;
    return (lsn.kind === 'specialty' ? '#specialty/' : '#tutorial/') + lsn.key + '/step/' + n;
  }

  /*
   * Every unresolvable route degrades to a defined destination rather than
   * failing: an out-of-range step falls back to step 1 of the same lesson, and
   * an unknown tutorial, level or collection - or any malformed route - falls
   * back to #home.
   */
  function parse(hash) {
    if (!hash || hash === '#' || hash === '#home') return { view: 'home' };

    if (LEGACY_ROUTES[hash]) return { view: 'home', redirect: LEGACY_ROUTES[hash] };
    if (PLAIN_ROUTES.indexOf(hash) >= 0) {
      return { view: 'catalog', surface: hash.slice(1) };
    }

    let m = LEVEL_ROUTE.exec(hash);
    if (m) {
      return LEVELS.indexOf(m[1]) >= 0
        ? { view: 'catalog', surface: 'level', level: m[1] }
        : { view: 'home', redirect: '#home' };
    }

    m = TOPIC_ROUTE.exec(hash);
    if (m) {
      const c = routableCollection(m[1]);
      return c
        ? { view: 'catalog', surface: 'topic', collection: c }
        : { view: 'home', redirect: '#home' };
    }

    m = COMPLETE_ROUTE.exec(hash);
    if (m) {
      const lsn = canonical(m[1])
        ? lesson('tutorial', m[1])
        : specialtyLesson(m[1])
        ? lesson('specialty', m[1])
        : null;
      return lsn
        ? { view: 'catalog', surface: 'complete', lesson: lsn }
        : { view: 'home', redirect: '#home' };
    }

    m = REFERENCE_ROUTE.exec(hash);
    if (m) {
      const e = reference().entries[m[1]];
      return e
        ? { view: 'catalog', surface: 'reference-entry', entry: e }
        : { view: 'home', redirect: '#reference' };
    }

    m = EXPLORER_VIEW_ROUTE.exec(hash);
    if (m) {
      const known = explorer().views.filter((v) => v.id === m[1])[0];
      return known
        ? { view: 'catalog', surface: 'explorer-view', explorerView: known }
        : { view: 'home', redirect: '#explorer' };
    }

    /* A control route is its panel's overview with the control's popup open:
       the same surface, carrying a target. */
    m = EXPLORER_CONTROL_ROUTE.exec(hash);
    if (m) {
      const view = viewForTarget(m[1]);
      return view
        ? { view: 'catalog', surface: 'explorer-view', explorerView: view, targetId: m[1] }
        : { view: 'home', redirect: '#explorer' };
    }

    let lsn = null;
    let asked = 1;
    m = SPECIALTY_ROUTE.exec(hash);
    if (m) {
      lsn = lesson('specialty', m[1]);
      asked = m[2] === undefined ? 1 : parseInt(m[2], 10);
      if (!lsn) return { view: 'home', redirect: '#specialty' };
      const totalS = lsn.tutorial.steps.length;
      if (!(asked >= 1 && asked <= totalS)) {
        return { view: 'lesson', lesson: lsn, stepIndex: 0, redirect: stepHash(lsn, 1) };
      }
      return { view: 'lesson', lesson: lsn, stepIndex: asked - 1 };
    }

    m = DEV_ROUTE.exec(hash);
    if (m) {
      lsn = lesson('dev', m[1]);
      asked = parseInt(m[2], 10);
    } else if ((m = TUTORIAL_ROUTE.exec(hash))) {
      lsn = lesson('tutorial', m[1]);
      if (!lsn) return { view: 'home', redirect: '#home' };
      /*
       * The BARE tutorial route is a decision point rather than a step.
       *
       *   completed          -> the review overview, where steps may be
       *                         jumped freely (master plan sec 23)
       *   part-way through   -> Continue / Start over, never chosen silently
       *   otherwise          -> step 1, exactly as before
       *
       * An explicit /step/N always goes straight there, so every deep link in
       * the app, in search results and in Quick Reference still lands on the
       * step it names.
       */
      if (m[2] === undefined) {
        const P = progress();
        if (P.isComplete(m[1])) {
          return { view: 'catalog', surface: 'review', lesson: lsn };
        }
        const at = P.stepIndexFor(m[1]);
        if (at !== null && at > 0) {
          return { view: 'catalog', surface: 'resume-choice', lesson: lsn, stepIndex: at };
        }
      }
      asked = m[2] === undefined ? 1 : parseInt(m[2], 10);
    } else {
      return { view: 'home', redirect: '#home' };
    }

    if (!lsn) return { view: 'home', redirect: '#home' };
    const total = lsn.tutorial.steps.length;
    if (!(asked >= 1 && asked <= total)) {
      return { view: 'lesson', lesson: lsn, stepIndex: 0, redirect: stepHash(lsn, 1) };
    }
    return { view: 'lesson', lesson: lsn, stepIndex: asked - 1 };
  }

  /* ------------------------------------------------------- catalog rendering */

  const cat = {
    eyebrow: document.getElementById('cat-eyebrow'),
    title: document.getElementById('cat-title'),
    desc: document.getElementById('cat-desc'),
    actions: document.getElementById('cat-actions'),
    body: document.getElementById('cat-body'),
    hint: document.getElementById('cat-hint'),
    back: document.getElementById('cat-back'),
  };

  function actionButton(label, hash, cls) {
    const b = el('button', 'cat-btn' + (cls ? ' ' + cls : ''), label);
    b.type = 'button';
    b.addEventListener('click', () => go(hash));
    return b;
  }

  /*
   * One rich card, drawn the same way for both discovery grids.
   *
   * The canonical levels/topics and Specialty used to build this markup twice,
   * side by side, and had already drifted: only one of them guarded
   * `isBookmarked` before calling it. Anything that changes how a card reads -
   * a new state, a new line of metadata - now lands on both grids or on
   * neither, which is the only version of that change that can be reviewed.
   *
   * The caller supplies the wording. Deciding here what a card is CALLED would
   * put "Specialty lesson" and "B04" in the same function, and those two
   * belong to their surfaces, not to the card.
   */
  function richCard(spec) {
    const card = el(
      'button',
      'tut-card' + (spec.cls ? ' ' + spec.cls : '') +
        (spec.done ? ' done' : '') + (spec.current ? ' here' : '')
    );
    card.type = 'button';

    const top = el('div', 'tc-top');
    top.appendChild(el('span', 'tc-id', spec.badge));
    const marks = el('span', 'tc-top');
    if (spec.bookmarked) {
      const star = el('span', 'tc-star', '★');
      star.setAttribute('aria-hidden', 'true');
      marks.appendChild(star);
    }
    marks.appendChild(el('span', 'tc-tick' + (spec.done ? ' done' : ''), spec.done ? '✓' : ''));
    top.appendChild(marks);
    card.appendChild(top);

    card.appendChild(el('div', 'tc-name', spec.title));
    card.appendChild(el('div', 'tc-sum', spec.summary));

    const meta = el('div', 'tc-meta');
    meta.appendChild(el('span', null, spec.minutes + ' min'));
    meta.appendChild(el('span', null, spec.steps + ' steps'));
    card.appendChild(meta);

    /* One accessible name carrying everything the visual card conveys. */
    card.setAttribute('aria-label', spec.ariaLabel);
    card.addEventListener('click', () => go(spec.hash));
    return card;
  }

  /* A rich card, for bounded lists: a level (10) or a topic (at most 8). */
  function tutorialCard(id, currentId) {
    const t = tutorials()[id];
    const P = progress();
    const done = P.isComplete(id);
    const marked = P.isBookmarked(id);
    return richCard({
      badge: id,
      title: t.title,
      summary: t.summary,
      minutes: t.estimatedMinutes,
      steps: t.steps.length,
      done: done,
      bookmarked: marked,
      current: id === currentId,
      ariaLabel:
        `${t.title}. ${id}, ${t.estimatedMinutes} minutes, ${t.steps.length} steps.` +
        (done ? ' Completed.' : '') + (marked ? ' Bookmarked.' : ''),
      hash: '#tutorial/' + id,
    });
  }

  /* The same card for a Specialty lesson. Specialty is never the guided
     path's current tutorial, so it never carries the current state. */
  function specialtyCard(id) {
    const l = specialty().lessons[id];
    const P = progress();
    const done = P.isSpecialtyComplete ? P.isSpecialtyComplete(id) : false;
    return richCard({
      cls: 'specialty',
      badge: 'Specialty',
      title: l.title,
      summary: l.summary,
      minutes: l.estimatedMinutes,
      steps: l.steps.length,
      done: done,
      bookmarked: !!(P.isBookmarked && P.isBookmarked(id)),
      current: false,
      ariaLabel:
        l.title + '. Specialty lesson, ' + l.estimatedMinutes + ' minutes, ' +
        l.steps.length + ' steps. Optional.',
      hash: '#specialty/' + id,
    });
  }

  /* A compact row, for unbounded lists: Bookmarked and Progress (up to 30). */
  function tutorialRow(id, currentId) {
    const t = tutorials()[id];
    const P = progress();
    const done = P.isComplete(id);
    const row = el('button', 'tut-row' + (done ? ' done' : '') + (id === currentId ? ' here' : ''));
    row.type = 'button';
    row.appendChild(el('span', 'tr-id', id));
    row.appendChild(el('span', 'tr-name', t.title));
    row.appendChild(el('span', 'tc-tick' + (done ? ' done' : ''), done ? '✓' : ''));
    row.setAttribute('aria-label', `${t.title}. ${id}.` + (done ? ' Completed.' : ''));
    row.addEventListener('click', () => go('#tutorial/' + id));
    return row;
  }

  function grid(ids, currentId) {
    const cols = ids.length <= 6 ? (ids.length <= 3 ? 3 : 4) : 5;
    const g = el('div', 'tut-grid' + (cols === 5 ? '' : ' cols-' + cols));
    ids.forEach((id) => g.appendChild(tutorialCard(id, currentId)));
    return g;
  }

  function emptyState(title, body, actionLabel, actionHash) {
    const wrap = el('div', 'cat-empty');
    const inner = el('div', 'inner');
    inner.appendChild(el('h2', null, title));
    inner.appendChild(el('p', null, body));
    if (actionLabel) inner.appendChild(actionButton(actionLabel, actionHash));
    wrap.appendChild(inner);
    return wrap;
  }

  function meterRow(done, total) {
    const s = el('div', 'cat-summary');
    const b = el('b', null, `${done} of ${total}`);
    s.appendChild(b);
    s.appendChild(el('span', null, 'complete'));
    const m = el('div', 'meter');
    const i = el('i');
    i.style.width = (total ? (done / total) * 100 : 0) + '%';
    m.appendChild(i);
    s.appendChild(m);
    return s;
  }

  /* Sibling topics, so every collection - including the ones deliberately not
     on the home screen - is reachable from any other. */
  function topicStrip(currentId) {
    const all = collections();
    const others = Object.keys(all).filter(
      (id) => id !== currentId && routableCollection(id)
    );
    if (!others.length) return null;
    const wrap = el('div', 'topic-strip');
    wrap.appendChild(el('div', 'ts-cap', 'Other topics'));
    const list = el('div', 'ts-list');
    others.forEach((id) => {
      const chip = el('button', 'ts-chip', all[id].title);
      chip.type = 'button';
      chip.addEventListener('click', () => go('#topic/' + id));
      list.appendChild(chip);
    });
    wrap.appendChild(list);
    return wrap;
  }

  /*
   * Why this asks `persistence()` and not `isAvailable()`: there are two
   * different reasons this session cannot save, and only one of them is the
   * browser's doing.
   *
   *   "unavailable"   - the browser gives us no storage. Its wording is
   *                     unchanged, because that case has not changed.
   *   "future-schema" - storage works perfectly; it already holds a record
   *                     written by a NEWER build of this app. progress.js
   *                     deliberately refuses to read or overwrite it, so this
   *                     session runs in memory. Telling the learner their
   *                     browser is at fault, or that their data is corrupt,
   *                     would both be false, and either invites them to clear
   *                     site data and destroy the very record we protected.
   *
   * The honest statement is that something newer is being kept safe and that
   * this session will not be remembered. Reset Everything still deletes it -
   * that is the progress module's one sanctioned exception - so the way out is
   * named rather than performed for them.
   */
  function storageNotice() {
    const state = progress().persistence();
    if (state.writable) return null;
    const p = el('div', 'cat-panel warn');

    if (state.reason === 'future-schema') {
      p.appendChild(el('h2', null, 'Newer progress is stored in this browser'));
      p.appendChild(el('p', null,
        'Progress from a newer version of JD-Xi Tutorial Hub is stored in this browser. ' +
        'This version won’t overwrite it, so changes you make here won’t be saved ' +
        'unless you use Reset Everything.'));
      p.appendChild(el('p', null,
        'Everything here still works, and you can use every tutorial as normal. Opening ' +
        'the newer version again will find that progress exactly as it was.'));
      return p;
    }

    p.appendChild(el('h2', null, 'Progress cannot be saved in this browser'));
    p.appendChild(el('p', null,
      'Everything here still works, and you can use every tutorial as normal — but ' +
      'this browser is not letting the page store anything, so completions and ' +
      'favourites will be forgotten when you close the tab. A private window, or a ' +
      'browser set to block site data, is the usual reason.'));
    return p;
  }

  /* ----- the surfaces ----- */

  function renderLevel(route) {
    const level = route.level;
    const ids = tutorialsInLevel(level);
    const P = progress();
    const counts = P.levelCounts(level);
    const resume = P.resume();
    const currentId = resume && resume.tutorial.level === level ? resume.id : null;

    cat.eyebrow.textContent = 'Guided path';
    cat.title.textContent = LEVEL_LABEL[level];
    cat.desc.textContent = LEVEL_BLURB[level];

    /* Continue where they were if that is in this level; otherwise start at the
       first tutorial they have not finished; otherwise the first. */
    let startId = currentId;
    if (!startId) startId = ids.filter((id) => !P.isComplete(id))[0] || ids[0];
    const label = currentId
      ? 'Continue ' + currentId
      : counts.done
      ? 'Continue at ' + startId
      : 'Start at ' + startId;
    cat.actions.appendChild(actionButton(label, '#tutorial/' + startId));

    const notice = storageNotice();
    if (notice) cat.body.appendChild(notice);
    cat.body.appendChild(meterRow(counts.done, counts.total));
    cat.body.appendChild(grid(ids, currentId));
    cat.hint.textContent = 'Tutorials run in this order, but you can open any of them directly.';
  }

  function renderTopic(route) {
    const c = route.collection;
    const P = progress();
    const resume = P.resume();
    const currentId = resume ? resume.id : null;
    const done = c.tutorialIds.filter((id) => P.isComplete(id)).length;

    cat.eyebrow.textContent = 'Topic';
    cat.title.textContent = c.title;
    cat.desc.textContent = c.description;
    cat.actions.appendChild(actionButton('Open ' + c.tutorialIds[0], '#tutorial/' + c.tutorialIds[0], 'quiet'));

    cat.body.appendChild(meterRow(done, c.tutorialIds.length));
    cat.body.appendChild(grid(c.tutorialIds, currentId));
    const strip = topicStrip(c.id);
    if (strip) cat.body.appendChild(strip);
    cat.hint.textContent =
      'A topic gathers tutorials from any level. Each one lives in exactly one place.';
  }

  /* A compact row for a Specialty lesson, so Bookmarked can hold both kinds. */
  function specialtyRow(id) {
    const l = specialty().lessons[id];
    const P = progress();
    const done = P.isSpecialtyComplete(id);
    const row = el('button', 'tut-row specialty' + (done ? ' done' : ''));
    row.type = 'button';
    row.appendChild(el('span', 'tr-id', 'SP'));
    row.appendChild(el('span', 'tr-name', l.title));
    row.appendChild(el('span', 'tc-tick' + (done ? ' done' : ''), done ? '✓' : ''));
    row.setAttribute('aria-label', l.title + '. Specialty lesson.' + (done ? ' Completed.' : ''));
    row.addEventListener('click', () => go('#specialty/' + id));
    return row;
  }

  function bookmarkRow(id, currentId) {
    return specialty().lessons[id] ? specialtyRow(id) : tutorialRow(id, currentId);
  }

  function renderBookmarks() {
    const P = progress();
    const marks = P.bookmarks();
    cat.eyebrow.textContent = 'Saved';
    cat.title.textContent = 'Bookmarked';

    if (!marks.length) {
      cat.desc.textContent = '';
      cat.body.appendChild(
        emptyState(
          'Nothing bookmarked yet',
          'Open any tutorial or specialty lesson and press Bookmark next to its title to keep it here. ' +
            'Bookmarks are stored in this browser only — there is no account and nothing leaves your computer.',
          'Browse the Beginner path',
          '#level/beginner'
        )
      );
      cat.hint.textContent = '';
      return;
    }

    cat.desc.textContent =
      marks.length + (marks.length === 1 ? ' lesson you have bookmarked.' : ' lessons you have bookmarked.');
    const notice = storageNotice();
    if (notice) cat.body.appendChild(notice);

    const resume = P.resume();
    const currentId = resume ? resume.id : null;
    /* Compact rows: a learner may bookmark all thirty and the three specialty
       lessons, and the stage never scrolls, so this list stays inside a fixed
       height. */
    const cols = el('div', 'cat-cols');
    const per = Math.ceil(marks.length / 3);
    for (let c = 0; c < 3; c++) {
      const col = el('div', 'cat-col');
      marks.slice(c * per, (c + 1) * per).forEach((id) => col.appendChild(bookmarkRow(id, currentId)));
      cols.appendChild(col);
    }
    cat.body.appendChild(cols);
    cat.hint.textContent = 'Press Bookmark again on a lesson to remove it from this list.';
  }

  function renderProgress() {
    const P = progress();
    const all = tutorials();
    const total = Object.keys(all).length;
    const done = P.completed().length;
    const resume = P.unfinishedResume();
    const currentId = resume ? resume.id : null;

    cat.eyebrow.textContent = 'Your progress';
    cat.title.textContent = 'My Progress';
    cat.desc.textContent =
      'Every tutorial, in the order the guided path takes them. Kept in this browser only.';

    /* Same rule as the Home card: a step number is only claimed when resume()
       says the stored step actually resolved. */
    if (resume && resume.stepResolved) {
      cat.actions.appendChild(
        actionButton(
          'Continue ' + resume.id + ' · step ' + (resume.stepIndex + 1),
          '#tutorial/' + resume.id + (resume.stepIndex ? '/step/' + (resume.stepIndex + 1) : '')
        )
      );
    } else if (resume) {
      cat.actions.appendChild(
        actionButton(
          'Resume ' + resume.id + ' from beginning',
          explicitStepHash({ kind: 'tutorial', key: resume.id }, 1)
        )
      );
    }

    const notice = storageNotice();
    if (notice) cat.body.appendChild(notice);
    cat.body.appendChild(meterRow(done, total));

    const cols = el('div', 'cat-cols');
    LEVELS.forEach((level) => {
      const ids = tutorialsInLevel(level);
      const counts = P.levelCounts(level);
      const col = el('div', 'cat-col');
      const h = el('h2', null, LEVEL_LABEL[level]);
      h.appendChild(el('span', null, counts.done + '/' + counts.total));
      col.appendChild(h);
      /* A bar per level as well as the overall one, so a learner can see
         which path they are in the middle of. */
      const m = el('div', 'meter small');
      const i = el('i');
      i.style.width = (counts.total ? (counts.done / counts.total) * 100 : 0) + '%';
      m.appendChild(i);
      col.appendChild(m);
      ids.forEach((id) => col.appendChild(tutorialRow(id, currentId)));
      cols.appendChild(col);
    });
    cat.body.appendChild(cols);

    /*
     * Specialty is reported SEPARATELY and never folded into x/30
     * (master plan sec 22). It gets its own line rather than its own column,
     * so the three guided levels keep the visual weight.
     */
    const S = specialty();
    if (S.order.length) {
      const spDone = P.specialtyCompleted().length;
      const strip = el('div', 'topic-strip');
      const cap = el('div', 'ts-cap', 'Specialty — optional, not counted above');
      strip.appendChild(cap);
      const list = el('div', 'ts-list');
      S.order.forEach((id) => {
        const chip = el('button', 'ts-chip' + (P.isSpecialtyComplete(id) ? ' done' : ''), 
          S.lessons[id].title + (P.isSpecialtyComplete(id) ? ' ✓' : ''));
        chip.type = 'button';
        chip.addEventListener('click', () => go('#specialty/' + id));
        list.appendChild(chip);
      });
      strip.appendChild(list);
      const line = el('div', 'sp-count', spDone + ' of ' + S.order.length + ' specialty lessons complete');
      strip.appendChild(line);
      cat.body.appendChild(strip);
    }

    cat.hint.textContent =
      'A tutorial counts as complete when you press Finish Tutorial on its last step.';
  }

  /*
   * A reset control that needs two deliberate presses. The first arms and
   * relabels; the second acts. A single click on a control that erases part of
   * the learner's record is exactly the accident this guards against, and
   * there are now three such controls rather than one.
   */
  function resetControl(label, warning, doneText, act) {
    const wrap = el('div', 'row');
    const btn = el('button', 'cat-btn danger', label);
    btn.type = 'button';
    const status = el('span', 'reset-status', '');
    const cancel = el('button', 'cat-btn quiet', 'Cancel');
    cancel.type = 'button';
    cancel.hidden = true;

    let armed = false;
    const disarm = (msg) => {
      armed = false;
      btn.classList.remove('armed');
      btn.textContent = label;
      cancel.hidden = true;
      status.textContent = msg || '';
    };

    btn.addEventListener('click', () => {
      if (!armed) {
        armed = true;
        btn.classList.add('armed');
        btn.textContent = 'Press again to confirm';
        status.textContent = warning;
        cancel.hidden = false;
        return;
      }
      act();
      disarm(doneText);
    });
    cancel.addEventListener('click', () => disarm('Nothing was changed.'));

    wrap.appendChild(btn);
    wrap.appendChild(cancel);
    wrap.appendChild(status);
    return wrap;
  }

  function renderSettings() {
    const P = progress();
    cat.eyebrow.textContent = 'Settings';
    cat.title.textContent = 'Settings';
    cat.desc.textContent = 'The few things there are to set. There is nothing else here.';

    /* Which instrument this course is written for. */
    const target = el('div', 'cat-panel');
    target.appendChild(el('h2', null, 'Tutorial target'));
    const t = el('p', 'setting-value');
    t.appendChild(el('b', null, 'JD-Xi System 1.51'));
    target.appendChild(t);
    target.appendChild(el('p', null,
      'Every procedure in this course is written for a JD-Xi running system program 1.51. ' +
      'Features added in versions 1.10 and 1.50 are simply present, so no tutorial asks you to check your version first.'));
    cat.body.appendChild(target);

    const where = el('div', 'cat-panel');
    where.appendChild(el('h2', null, 'Where your progress is kept'));
    where.appendChild(el('p', null,
      'Your completed tutorials, where you had got to, and your bookmarks are stored ' +
      'in this browser on this computer, and nowhere else. There is no account, nothing ' +
      'is sent anywhere, and nothing is shared between browsers or devices.'));
    where.appendChild(el('p', null,
      'Opening the app in a different browser, or clearing this browser’s site data, ' +
      'means starting from an empty state.'));
    cat.body.appendChild(where);

    /* Unconditional: storageNotice() returns null when this session can save,
       and gating on isAvailable() here would have hidden the future-schema
       branch on the one surface that offers the reset it points at. */
    const warn = storageNotice();
    if (warn) cat.body.appendChild(warn);

    /*
     * Three separate resets. They destroy different things, and a learner may
     * well want one without the other - clearing a stale resume point is not
     * the same decision as throwing away thirty bookmarks.
     */
    const reset = el('div', 'cat-panel');
    reset.appendChild(el('h2', null, 'Reset'));
    reset.appendChild(el('p', null,
      'Each of these is separate, needs two presses, and cannot be undone. None of them changes anything on your JD-Xi.'));

    reset.appendChild(el('h3', 'reset-head', 'Reset Progress'));
    reset.appendChild(el('p', null,
      'Clears every completed tutorial, your specialty completions and your resume point. Bookmarks are kept.'));
    reset.appendChild(resetControl(
      'Reset Progress',
      'This clears all completions and your place. Bookmarks are kept.',
      'Progress cleared.',
      () => P.resetProgress()
    ));

    reset.appendChild(el('h3', 'reset-head', 'Reset Bookmarks'));
    reset.appendChild(el('p', null,
      'Clears everything you have bookmarked. Your progress is kept.'));
    reset.appendChild(resetControl(
      'Reset Bookmarks',
      'This clears every bookmark. Progress is kept.',
      'Bookmarks cleared.',
      () => P.resetBookmarks()
    ));

    reset.appendChild(el('h3', 'reset-head', 'Reset Everything'));
    reset.appendChild(el('p', null,
      'Clears progress and bookmarks together, returning the app to how it was the first time you opened it.'));
    reset.appendChild(resetControl(
      'Reset Everything',
      'This clears progress AND bookmarks. It cannot be undone.',
      'Everything cleared.',
      () => P.resetEverything()
    ));
    cat.body.appendChild(reset);

    const about = el('div', 'cat-panel');
    about.appendChild(el('h2', null, 'About'));
    const v = el('p', 'setting-value');
    v.appendChild(el('b', null, 'JD-Xi Tutorial Hub · ' + APP_VERSION));
    about.appendChild(v);
    about.appendChild(el('p', null,
      '30 guided tutorials, ' + (reference().order || []).length + ' quick-reference procedures, ' +
      (specialty().order || []).length + ' optional specialty lessons, and every control on the instrument. ' +
      'Runs from a file on this computer with no installation and no internet connection.'));
    about.appendChild(el('p', null,
      'Technical procedure follows Roland\u2019s official JD-Xi documentation. This is a learning tool and is not affiliated with Roland.'));
    cat.body.appendChild(about);

    cat.hint.textContent = '';
  }

  /* ----------------------------------------------- Quick Reference surface */

  function referenceCard(id) {
    const e = reference().entries[id];
    const card = el('button', 'ref-card' + (e.destructive ? ' destructive' : ''));
    card.type = 'button';
    const top = el('div', 'rc-top');
    top.appendChild(el('span', 'rc-title', e.title));
    if (e.destructive) top.appendChild(el('span', 'rc-flag', 'destructive'));
    card.appendChild(top);
    card.appendChild(el('div', 'rc-sum', e.summary));
    card.setAttribute(
      'aria-label',
      e.title + '. ' + e.summary + (e.destructive ? ' This procedure is destructive.' : '')
    );
    card.addEventListener('click', () => go('#reference/' + id));
    return card;
  }

  function renderReference() {
    const Q = reference();
    cat.eyebrow.textContent = 'Reference';
    cat.title.textContent = 'Quick Reference';
    cat.desc.textContent =
      'How to do it again, in a few lines. These are reminders rather than lessons — each one names the tutorial that teaches it properly.';

    const grid = el('div', 'ref-grid');
    Q.order.forEach((id) => grid.appendChild(referenceCard(id)));
    cat.body.appendChild(grid);
    cat.hint.textContent = Q.order.length + ' procedures. Anything marked destructive cannot be undone.';
  }

  function renderReferenceEntry(route) {
    const e = route.entry;
    cat.eyebrow.textContent = 'Quick Reference';
    cat.title.textContent = e.title;
    cat.desc.textContent = e.summary;
    cat.actions.appendChild(actionButton('‹ All procedures', '#reference', 'quiet'));

    /* The warning renders ABOVE the procedure, always. A learner who reads
       top to bottom must meet the risk before the steps that cause it. */
    if (e.warning) {
      const w = el('div', 'cat-panel ' + (e.destructive ? 'danger' : 'warn'));
      w.appendChild(el('h2', null, e.destructive ? 'This destroys data' : 'Before you start'));
      w.appendChild(el('p', null, e.warning));
      cat.body.appendChild(w);
    }

    const proc = el('div', 'cat-panel');
    proc.appendChild(el('h2', null, 'How to do it'));
    const ol = el('ol', 'ref-steps');
    e.steps.forEach((line) => ol.appendChild(el('li', null, line)));
    proc.appendChild(ol);
    cat.body.appendChild(proc);

    if (e.notes && e.notes.length) {
      const n = el('div', 'cat-panel');
      n.appendChild(el('h2', null, 'Worth knowing'));
      const ul = el('ul', 'ref-notes');
      e.notes.forEach((line) => ul.appendChild(el('li', null, line)));
      n.appendChild(ul);
      cat.body.appendChild(n);
    }

    const foot = el('div', 'cat-panel');
    foot.appendChild(el('h2', null, 'Where this is taught'));
    if (e.learnIn && e.learnIn.length) {
      const row = el('div', 'row');
      e.learnIn.forEach((tid) => {
        const t = tutorials()[tid];
        if (!t) return;
        row.appendChild(actionButton('Learn this in ' + tid + ' · ' + t.title, '#tutorial/' + tid, 'quiet'));
      });
      foot.appendChild(row);
    } else {
      foot.appendChild(el('p', null,
        'No guided tutorial covers this one. It is here because you may still need it, and because a destructive procedure is safer written down than guessed at.'));
    }
    foot.appendChild(el('p', 'ref-source', 'Source: ' + e.source));
    cat.body.appendChild(foot);
    cat.hint.textContent = '';
  }

  /* ---------------------------------------------------- Specialty surface */

  function renderSpecialty() {
    const S = specialty();
    cat.eyebrow.textContent = 'Optional — not part of course completion';
    cat.title.textContent = 'Specialty';
    cat.desc.textContent =
      "Three things the JD-Xi does with the microphone that came with it. None of these counts toward the thirty guided tutorials, and nothing in the course depends on them.";

    const grid = el('div', 'tut-grid cols-3');
    S.order.forEach((id) => grid.appendChild(specialtyCard(id)));
    cat.body.appendChild(grid);

    const note = el('div', 'cat-panel');
    note.appendChild(el('h2', null, 'What Specialty is'));
    note.appendChild(el('p', null,
      'These use the microphone supplied with the JD-Xi. External microphones, guitars and other outside sources are not covered.'));
    note.appendChild(el('p', null,
      'Specialty lessons are searchable and can be bookmarked like any tutorial, and they are tracked separately from your course progress. They never count toward the thirty.'));
    cat.body.appendChild(note);
    cat.hint.textContent = 'Optional throughout. The course is complete without them.';
  }

  /* ----------------------------------------------- Hardware Explorer surface */

  /*
   * The Explorer is two screens and one popup:
   *
   *   #explorer                a two-way choice: Top panel or Rear panel
   *   #explorer/view/<view>    the instrument with its major areas boxed, and
   *                            the same areas as a list of names. Pointing at
   *                            either face of an area lights the other.
   *   #explorer/control/<id>   the SAME overview for the panel the control
   *                            lives on, with that control's detail open in a
   *                            popup - so a search hit or a saved link lands
   *                            on the popup, and closing it leaves the learner
   *                            on the overview rather than sending them home.
   *
   * Detail is about the hardware only: what a control does, what is printed
   * beside it, and what is worth knowing. Which tutorial teaches it, whether
   * the course covers it, and the Roland page it was reconciled against are
   * deliberately not shown here; the source stays in js/explorer.js as
   * provenance for the data checks.
   */

  const KIND_LABEL = {
    button: 'Button',
    knob: 'Knob',
    control: 'Control',
    section: 'Section',
    group: 'Group of controls',
    keys: 'Keys',
    display: 'Display',
  };

  const targetsOf = () => hardware().targets;
  const majorIds = (viewId) => explorer().majorGroups[viewId] || [];
  const childrenOf = (id) => Object.keys(targetsOf()).filter((k) => targetsOf()[k].group === id);

  /* Which overview a target belongs on: the view whose image it is drawn in. */
  function viewForTarget(id) {
    const t = targetsOf()[id];
    if (!t) return null;
    const imageId = t.imageId || hardware().defaultImageId;
    return explorer().views.filter((v) => v.id === imageId)[0] || null;
  }

  /* The major area a target sits under on its overview: itself, or the
     nearest ancestor that is one. */
  function majorAncestor(id) {
    const view = viewForTarget(id);
    if (!view) return null;
    const majors = majorIds(view.id);
    let cur = id;
    while (cur && targetsOf()[cur]) {
      if (majors.indexOf(cur) >= 0) return cur;
      cur = targetsOf()[cur].group;
    }
    return null;
  }

  /* The parent the popup can step back to. A parent that is neither a major
     area nor a child of one - the rear panel as a whole - IS the overview
     behind the popup, so it is not offered as a step. */
  function navigableParent(id) {
    const t = targetsOf()[id];
    const pid = t && t.group;
    const p = pid ? targetsOf()[pid] : null;
    if (!p) return null;
    const view = viewForTarget(pid);
    const isMajor = !!view && majorIds(view.id).indexOf(pid) >= 0;
    return isMajor || p.group ? pid : null;
  }

  /*
   * Two-way hover and focus linkage. Everything inside `scope` carrying
   * data-target is a face of the same control - a box on the image, a name in
   * the list, a chip in the popup - and pointing at any face lights all of
   * them. Keyboard focus is treated exactly like the pointer. One delegated
   * listener set per scope, so rebuilt contents need no rewiring.
   */
  function linkTargets(scope) {
    const faces = (id) => scope.querySelectorAll('[data-target="' + id + '"]');
    const set = (node, on) => {
      if (!node) return;
      faces(node.getAttribute('data-target')).forEach((n) => n.classList.toggle('is-hot', on));
      scope.classList.toggle('has-hot', !!scope.querySelector('.is-hot'));
    };
    const face = (e) => {
      const n = e.target && e.target.closest ? e.target.closest('[data-target]') : null;
      return n && scope.contains(n) ? n : null;
    };
    /* Moving between children of one face is not leaving it. */
    const within = (e, n) => !!e.relatedTarget && n.contains(e.relatedTarget);
    scope.addEventListener('mouseover', (e) => { const n = face(e); if (n && !within(e, n)) set(n, true); });
    scope.addEventListener('mouseout', (e) => { const n = face(e); if (n && !within(e, n)) set(n, false); });
    scope.addEventListener('focusin', (e) => set(face(e), true));
    scope.addEventListener('focusout', (e) => set(face(e), false));
  }

  /* The highlight tone the renderer gave each box, so a name or chip can wear
     the same colour as its box. Read back rather than recomputed: the renderer
     owns that sequence. */
  function tonesIn(host) {
    const out = {};
    host.querySelectorAll('.hl[data-target]').forEach((h) => {
      const m = /\bhl-([abc])\b/.exec(h.className);
      out[h.getAttribute('data-target')] = m ? m[1] : 'a';
    });
    return out;
  }

  function targetFace(id, cls, tone) {
    const b = el('button', cls + ' tone-' + (tone || 'a'));
    b.type = 'button';
    b.setAttribute('data-target', id);
    const dot = el('i', 'exp-dot');
    dot.setAttribute('aria-hidden', 'true');
    b.appendChild(dot);
    b.appendChild(el('span', 'exp-face-name', targetsOf()[id].label));
    return b;
  }

  /* ----- Explorer home: which side of the instrument ----- */

  function renderExplorer() {
    cat.eyebrow.textContent = 'Reference';
    cat.title.textContent = 'Hardware Explorer';
    cat.desc.textContent = 'Which side of the JD-Xi do you want to explore?';

    const row = el('div', 'exp-choices');
    explorer().views.forEach((v) => {
      const img = renderer().resolveImage(v.id);
      if (!img) return;
      const card = el('button', 'exp-choice img-' + v.id);
      card.type = 'button';
      const fig = el('span', 'exp-choice-fig');
      const pic = new Image();
      pic.className = 'exp-choice-img';
      pic.src = img.src;
      pic.alt = '';
      pic.setAttribute('aria-hidden', 'true');
      fig.appendChild(pic);
      card.appendChild(fig);
      card.appendChild(el('b', null, v.title));
      card.appendChild(el('span', 'exp-choice-sub', v.blurb));
      card.setAttribute('aria-label', v.title + '. ' + v.blurb);
      card.addEventListener('click', () => go('#explorer/view/' + v.id));
      row.appendChild(card);
    });
    cat.body.appendChild(row);
    cat.hint.textContent = 'Pick a side, then point at anything on it to find out what it is.';
  }

  /* ----- Panel overview: the instrument and its major areas ----- */

  /* The overview on screen, kept while its popup opens, steps and closes. */
  let explorerShown = null;

  function renderExplorerView(route) {
    const v = route.explorerView;
    const ids = majorIds(v.id);
    cat.eyebrow.textContent = 'Hardware Explorer';
    cat.title.textContent = v.title;
    cat.desc.textContent = v.blurb;
    cat.actions.appendChild(actionButton('‹ Explorer', '#explorer', 'quiet'));

    /*
     * Labels are OFF on the panel: even the major areas would cover the
     * instrument in text. The panel shows where things are; the names below
     * say what they are; hovering either lights the other.
     */
    const scope = el('div', 'exp-overview');
    scope.setAttribute('data-view', v.id);
    const map = el('div', 'exp-map');
    const canvas = renderer().buildPanel(v.id, ids, { labels: false, tagTargets: true });
    map.appendChild(canvas);
    scope.appendChild(map);

    const tones = tonesIn(canvas);
    const names = el('div', 'exp-names cols-' + (ids.length <= 12 ? 6 : 5));
    ids.forEach((id) => names.appendChild(targetFace(id, 'exp-item', tones[id])));
    scope.appendChild(names);

    linkTargets(scope);
    scope.addEventListener('click', (e) => {
      const n = e.target.closest ? e.target.closest('[data-target]') : null;
      if (!n || !scope.contains(n)) return;
      const id = n.getAttribute('data-target');
      /* Box or name, focus comes back to the name: the boxes are pointer-only
         so the keyboard meets each area exactly once. */
      openControl(id, names.querySelector('[data-target="' + id + '"]') || n);
    });
    cat.body.appendChild(scope);
    cat.hint.textContent = 'Point at a name to see where it is, or at the instrument to see what it is. Select either to learn more.';
    explorerShown = { viewId: v.id, scope: scope };
  }

  /* ----- The popup ----- */

  const modal = {
    root: document.getElementById('exp-modal'),
    backdrop: document.getElementById('exp-modal-backdrop'),
    dialog: document.getElementById('exp-modal-dialog'),
    back: document.getElementById('exp-modal-back'),
    kicker: document.getElementById('exp-modal-kicker'),
    title: document.getElementById('exp-modal-title'),
    close: document.getElementById('exp-modal-close'),
    body: document.getElementById('exp-modal-body'),
  };
  let modalId = null;      // the control on show, or null while hidden
  let modalOpener = null;  // where focus returns when the popup closes

  /* Opening pushes the control route: one history entry for the popup. */
  function openControl(id, opener) {
    modalOpener = opener || null;
    go('#explorer/control/' + id);
  }

  /* Stepping to a child or parent INSIDE the popup replaces the entry rather
     than pushing one, so the hash always names what is on show - a reload or a
     copied link lands here - while browser Back still closes the popup in one
     press however far the learner wandered inside it. */
  function stepControl(id) {
    window.location.replace('#explorer/control/' + id);
  }

  function closeControl() {
    if (!explorerShown) return;
    const wasShowing = modalId;
    hideModal();
    go('#explorer/view/' + explorerShown.viewId);
    /* Back to the name that opened it. A popup opened by a link or a search
       hit had no opener, so focus lands on the area it belongs to. */
    let dest = modalOpener && document.contains(modalOpener) ? modalOpener : null;
    if (!dest && wasShowing) {
      const major = majorAncestor(wasShowing);
      dest = major ? explorerShown.scope.querySelector('.exp-item[data-target="' + major + '"]') : null;
    }
    modalOpener = null;
    if (dest) dest.focus({ preventScroll: true });
  }

  function hideModal() {
    modal.root.hidden = true;
    modalId = null;
  }

  function syncModal(id) {
    if (!id || !targetsOf()[id]) {
      hideModal();
      return;
    }
    paintModal(id);
    modal.root.hidden = false;
    renderer().settlePanels(modal.body);
    /* The title takes focus on every change of control, so a screen reader
       announces what the popup now shows and keyboard focus is inside it. */
    modal.title.focus({ preventScroll: true });
  }

  /*
   * A picture only where it explains something the overview behind the popup
   * does not: how a group's children sit together, the display, a control
   * that shares its close-up with neighbours - where the crop is what tells
   * them apart - or a dial whose printed legend is a list. An isolated single
   * control is already pointed out on the overview, so it gets text alone.
   */
  function modalFigure(id, kids) {
    const T = targetsOf();
    const t = T[id];
    if (!t.zoom) return null;
    const image = renderer().resolveImage(t.imageId || hardware().defaultImageId);
    if (!image) return null;

    const ancestors = [];
    for (let cur = t.group; cur && T[cur] && ancestors.indexOf(cur) < 0; cur = T[cur].group) ancestors.push(cur);
    const z = t.zoom;
    const eps = 1e-4;
    const sharesCrop = (k) => {
      const o = T[k];
      if (!o.region || (o.imageId || hardware().defaultImageId) !== image.id) return false;
      if (ancestors.indexOf(k) >= 0) return false;
      const r = o.region;
      return r.x >= z.x - eps && r.y >= z.y - eps &&
        r.x + r.width <= z.x + z.width + eps && r.y + r.height <= z.y + z.height + eps;
    };
    const crowded = !kids.length && Object.keys(T).some((k) => k !== id && sharesCrop(k));
    const listLegend = /[,;]/.test(t.panelLegend || '');
    if (!(kids.length || t.kind === 'display' || crowded || listLegend)) return null;

    const frame = renderer().buildPanel(image.id, kids.length ? kids : [id], {
      crop: true,
      zoomFrom: id,
      labels: false,
      tagTargets: true,
      extraClass: 'exp-mcrop',
    });
    const aspect = (z.width * image.width) / (z.height * image.height);
    const fig = el('div', 'exp-mfigure');
    fig.appendChild(frame);
    /* A strip goes across the top; anything squarer sits beside the text. */
    return { node: fig, placement: aspect > 2 ? 'top' : 'side' };
  }

  /*
   * The legend as the popup shows it. The registry records what is printed,
   * and the MIC jack's printed legend is literally "MIC (See Owner's Manual)".
   * The owner asked for no citation-style wording in the Explorer, so a
   * parenthetical that only points at the manual is dropped here, at
   * presentation. Nothing else is touched: every other legend, parentheses
   * included ("Menu / Write (Write boxed)"), is shown as printed.
   */
  function shownLegend(legend) {
    return legend ? legend.replace(/\s*\((?:see )?(?:the )?owner'?s manual\)/i, '').trim() : legend;
  }

  function fact(host, cap, text, cls) {
    if (!text) return;
    const p = el('p', 'exp-mfact ' + cls);
    p.appendChild(el('b', null, cap + ': '));
    p.appendChild(document.createTextNode(text));
    host.appendChild(p);
  }

  function paintModal(id) {
    const t = targetsOf()[id];
    const d = describeTarget(id);
    const view = viewForTarget(id);
    const parent = navigableParent(id);
    const kids = childrenOf(id);
    modalId = id;
    modal.dialog.setAttribute('data-target-id', id);

    modal.kicker.textContent = (view ? view.title : 'Hardware') + ' · ' + (KIND_LABEL[t.kind] || 'Control');
    modal.title.textContent = t.label;
    modal.back.hidden = !parent;
    modal.back.textContent = parent ? '‹ ' + targetsOf()[parent].label : '';
    modal.back.setAttribute('aria-label', parent ? 'Back to ' + targetsOf()[parent].label : 'Back');
    if (parent) modal.back.setAttribute('data-parent', parent);
    else modal.back.removeAttribute('data-parent');

    modal.body.innerHTML = '';
    const figure = modalFigure(id, kids);
    modal.body.className = 'exp-mbody ' + (figure ? figure.placement : 'text-only');

    const text = el('div', 'exp-mtext');
    if (d && d.what) text.appendChild(el('p', 'exp-mwhat', d.what));
    const facts = el('div', 'exp-mfacts');
    fact(facts, 'Printed on the panel', shownLegend(t.panelLegend), 'legend');
    fact(facts, 'Worth knowing', d && d.safety, 'safety');
    fact(facts, 'If it seems to do nothing', d && d.troubleshooting, 'trouble');
    if (facts.childNodes.length) text.appendChild(facts);

    if (kids.length) {
      const tones = figure ? tonesIn(figure.node) : {};
      const kp = el('div', 'exp-mkids');
      kp.appendChild(el('div', 'exp-mkids-cap', 'Controls in this area'));
      const chips = el('div', 'exp-chips');
      kids.forEach((k) => chips.appendChild(targetFace(k, 'exp-chip', tones[k])));
      kp.appendChild(chips);
      text.appendChild(kp);
    }

    if (figure && figure.placement === 'top') modal.body.appendChild(figure.node);
    modal.body.appendChild(text);
    if (figure && figure.placement === 'side') modal.body.appendChild(figure.node);
  }

  modal.close.addEventListener('click', closeControl);
  modal.backdrop.addEventListener('click', closeControl);
  modal.back.addEventListener('click', () => {
    const p = modal.back.getAttribute('data-parent');
    if (p) stepControl(p);
  });
  /* A chip, or the box in the crop that a chip names, steps into that child.
     The same popup, its contents replaced - never a second popup. */
  modal.body.addEventListener('click', (e) => {
    const n = e.target.closest ? e.target.closest('[data-target]') : null;
    if (!n) return;
    const id = n.getAttribute('data-target');
    if (id !== modalId && modal.body.querySelector('.exp-chip[data-target="' + id + '"]')) stepControl(id);
  });
  linkTargets(modal.body);

  /* Escape closes; Tab stays inside. Focus that has somehow left the dialog
     is pulled back in rather than allowed to wander the page underneath. */
  document.addEventListener('keydown', (e) => {
    if (modal.root.hidden) return;
    if (e.key === 'Escape') {
      e.preventDefault();
      closeControl();
      return;
    }
    if (e.key !== 'Tab') return;
    const stops = [].slice.call(modal.dialog.querySelectorAll('button')).filter((b) => !b.hidden && !b.disabled && b.offsetParent !== null);
    if (!stops.length) return;
    const at = stops.indexOf(document.activeElement);
    if (e.shiftKey) {
      if (at <= 0) { e.preventDefault(); stops[stops.length - 1].focus(); }
    } else if (at === stops.length - 1 || at < 0) {
      e.preventDefault();
      stops[0].focus();
    }
  });

  /* ---------------------------------- completion, review and resume choice */

  /*
   * What finishing a tutorial means depends on where it sits. The three level
   * capstones close a level; I10 closes the course. Everything else simply
   * hands over to the next guided tutorial.
   *
   * Derived from level and order, never from a hardcoded list of ids, so a
   * renumbering cannot leave a stale celebration behind.
   */
  const LEVEL_AFTER = { beginner: 'novice', novice: 'intermediate', intermediate: null };

  function completionShape(lsn) {
    if (lsn.kind === 'specialty') {
      return { kind: 'specialty', title: 'Specialty lesson complete' };
    }
    const t = lsn.tutorial;
    const nxt = nextInLevel(lsn);
    if (nxt) return { kind: 'tutorial', title: 'Tutorial complete', next: nxt };
    const after = LEVEL_AFTER[t.level];
    if (after) {
      return {
        kind: 'level',
        title: LEVEL_LABEL[t.level] + ' complete',
        nextLevel: after,
      };
    }
    return { kind: 'course', title: 'Course complete' };
  }

  function renderComplete(route) {
    const lsn = route.lesson;
    const P = progress();
    const shape = completionShape(lsn);
    const t = lsn.tutorial;

    cat.eyebrow.textContent = shape.kind === 'course' ? 'That is the whole course' : 'Finished';
    cat.title.textContent = shape.title;

    if (shape.kind === 'course') {
      cat.desc.textContent =
        'You can build a groove of your own on the JD-Xi, save it, and perform it. That was the whole point of the thirty.';
    } else if (shape.kind === 'level') {
      cat.desc.textContent =
        'You have finished every tutorial in the ' + LEVEL_LABEL[t.level] + ' path.';
    } else if (shape.kind === 'specialty') {
      cat.desc.textContent =
        t.title + ' is done. Specialty lessons are optional and do not count toward the thirty.';
    } else {
      cat.desc.textContent = t.title + ' is marked complete.';
    }

    /* The dominant action is always the obvious next thing to do. */
    if (shape.kind === 'tutorial') {
      cat.actions.appendChild(
        actionButton('Next: ' + shape.next.id + ' · ' + shape.next.tutorial.title, '#tutorial/' + shape.next.id)
      );
    } else if (shape.kind === 'level') {
      const firstOfNext = tutorialsInLevel(shape.nextLevel)[0];
      cat.actions.appendChild(
        actionButton('Next: ' + LEVEL_LABEL[shape.nextLevel], firstOfNext ? '#tutorial/' + firstOfNext : '#level/' + shape.nextLevel)
      );
    } else if (shape.kind === 'specialty') {
      cat.actions.appendChild(actionButton('More Specialty', '#specialty', 'quiet'));
    }

    /* Where you are, overall. */
    const total = Object.keys(tutorials()).length;
    const done = P.completed().length;
    cat.body.appendChild(meterRow(done, total));

    if (shape.kind === 'course') {
      const panel = el('div', 'cat-panel');
      panel.appendChild(el('h2', null, 'Where to go from here'));
      panel.appendChild(el('p', null,
        'Nothing here expires. Every tutorial can be run again, and the reference surfaces are there whenever you need to look something up.'));
      const row = el('div', 'row');
      row.appendChild(actionButton('Hardware Explorer', '#explorer', 'quiet'));
      row.appendChild(actionButton('Quick Reference', '#reference', 'quiet'));
      row.appendChild(actionButton('Specialty', '#specialty', 'quiet'));
      row.appendChild(actionButton('Replay a tutorial', '#progress', 'quiet'));
      panel.appendChild(row);
      cat.body.appendChild(panel);
    } else {
      const panel = el('div', 'cat-panel');
      panel.appendChild(el('h2', null, 'Or go somewhere else'));
      const row = el('div', 'row');
      row.appendChild(actionButton('Review ' + (lsn.kind === 'specialty' ? t.title : lsn.key), (lsn.kind === 'specialty' ? '#specialty/' : '#tutorial/') + lsn.key, 'quiet'));
      if (lsn.kind === 'tutorial') {
        row.appendChild(actionButton(LEVEL_LABEL[t.level] + ' path', '#level/' + t.level, 'quiet'));
      }
      row.appendChild(actionButton('My Progress', '#progress', 'quiet'));
      panel.appendChild(row);
      cat.body.appendChild(panel);
    }

    cat.hint.textContent =
      shape.kind === 'course'
        ? 'Completed tutorials stay completed. Run any of them again whenever you like.'
        : 'You can re-run a completed tutorial at any time.';
  }

  /*
   * The review overview, shown when a COMPLETED tutorial is opened. Before
   * completion the path is strictly sequential; after it, every step is one
   * click away (master plan sec 23).
   */
  function renderReview(route) {
    const lsn = route.lesson;
    const t = lsn.tutorial;
    cat.eyebrow.textContent = 'Completed · review';
    cat.title.textContent = t.title;
    cat.desc.textContent =
      'You have finished this one. Jump straight to any step, or run it again from the beginning.';
    cat.actions.appendChild(actionButton('Start from step 1', explicitStepHash(lsn, 1)));

    const grid = el('div', 'step-grid');
    t.steps.forEach((st, i) => {
      const b = el('button', 'step-chip');
      b.type = 'button';
      b.appendChild(el('span', 'sc-n', String(i + 1)));
      b.appendChild(el('span', 'sc-t', st.title || 'Step ' + (i + 1)));
      b.setAttribute('aria-label', 'Step ' + (i + 1) + ': ' + (st.title || ''));
      b.addEventListener('click', () => go(stepHash(lsn, i + 1)));
      grid.appendChild(b);
    });
    cat.body.appendChild(grid);
    cat.hint.textContent = t.steps.length + ' steps. Free jumping is available because you have completed this tutorial.';
  }

  /*
   * Continue / Start over. The master plan is explicit that this must not be
   * chosen silently, so the bare tutorial route stops here rather than
   * guessing which the learner meant.
   */
  function renderResumeChoice(route) {
    const lsn = route.lesson;
    const t = lsn.tutorial;
    const at = route.stepIndex;
    const step = t.steps[at];

    cat.eyebrow.textContent = 'You were part-way through';
    cat.title.textContent = t.title;
    cat.desc.textContent =
      'You left off at step ' + (at + 1) + ' of ' + t.steps.length +
      (step && step.title ? ' — ' + step.title : '') + '.';

    const panel = el('div', 'cat-panel');
    panel.appendChild(el('h2', null, 'Where would you like to start?'));
    panel.appendChild(el('p', null,
      'Continuing picks up where you were. Starting over goes back to step 1 — which changes nothing on the JD-Xi, and nothing about what you have already completed.'));
    const row = el('div', 'row');
    row.appendChild(actionButton('Continue at step ' + (at + 1), stepHash(lsn, at + 1)));
    row.appendChild(actionButton('Start over', explicitStepHash(lsn, 1), 'quiet'));
    panel.appendChild(row);
    cat.body.appendChild(panel);
    cat.hint.textContent = 'Your place is kept in this browser only.';
  }

  const SURFACES = {
    level: renderLevel,
    topic: renderTopic,
    bookmarks: renderBookmarks,
    progress: renderProgress,
    settings: renderSettings,
    reference: renderReference,
    'reference-entry': renderReferenceEntry,
    specialty: renderSpecialty,
    explorer: renderExplorer,
    'explorer-view': renderExplorerView,
    complete: renderComplete,
    review: renderReview,
    'resume-choice': renderResumeChoice,
  };

  /*
   * The catalog body centres its content and clips overflow, which suits a
   * grid of ten tutorial cards. The reference surfaces are denser and can
   * legitimately be taller than the stage, so they top-align and scroll
   * INSIDE the body - the page itself still never scrolls.
   */
  const DENSE_SURFACES = [
    'reference', 'reference-entry',
    'settings', 'review',
  ];

  function renderCatalog(route) {
    /*
     * The Explorer overview is kept, not rebuilt, while its popup opens,
     * steps between controls and closes: the route changes underneath and the
     * screen stays put, so hover state, scroll-free layout and the element
     * focus returns to all survive.
     */
    if (
      route.surface === 'explorer-view' && explorerShown &&
      explorerShown.viewId === route.explorerView.id && cat.body.contains(explorerShown.scope)
    ) {
      syncModal(route.targetId || null);
      return;
    }
    explorerShown = null;
    hideModal();
    cat.actions.innerHTML = '';
    cat.body.innerHTML = '';
    cat.desc.textContent = '';
    cat.hint.textContent = '';
    cat.body.classList.toggle('dense', DENSE_SURFACES.indexOf(route.surface) >= 0);
    SURFACES[route.surface](route);
    /* Highlight labels can only be measured once the nodes are in the
       document, so the Explorer's panels settle after insertion. */
    renderer().settlePanels(cat.body);
    /* A control deep link opens its popup, which takes the focus instead. */
    if (route.surface === 'explorer-view' && route.targetId) {
      syncModal(route.targetId);
      return;
    }
    /* Focus the heading so keyboard and screen-reader users land on the new
       surface rather than staying where the old one was. */
    cat.title.setAttribute('tabindex', '-1');
    cat.title.focus({ preventScroll: true });
  }

  /* ----------------------------------------------------------------- search */

  /*
   * Universal search over one in-memory index, built once from the same data
   * the app renders. No fetch, no server, no second description of the
   * content that could drift from it.
   *
   * A tutorial contributes TWO kinds of entry: one for the tutorial, and one
   * per step. Step entries carry an exact deep link, which is the difference
   * between "B06 is about knobs somewhere" and landing on the step that
   * answers the question.
   */
  const SYNONYMS = {
    volume: 'level master volume loud quiet',
    brightness: 'cutoff filter bright dark dull',
    bright: 'cutoff filter',
    dark: 'cutoff filter muffled',
    wobble: 'lfo vibrato modulation mod',
    vibrato: 'lfo mod modulation wobble',
    echo: 'delay repeat',
    reverb: 'space room hall',
    space: 'reverb delay',
    beat: 'pattern drums sequencer rhythm groove',
    rhythm: 'pattern beat drums groove',
    groove: 'pattern beat rhythm',
    drum: 'drums kit percussion beat',
    save: 'write store keep persist',
    write: 'save store',
    load: 'recall select program favorite',
    recall: 'favorite load select',
    undo: 'revert restore recovery unstuck original',
    stuck: 'unstuck recovery help problem',
    broken: 'unstuck recovery troubleshooting problem',
    slide: 'portamento glide',
    swing: 'shuffle feel bounce',
    tempo: 'speed bpm fast slow tap',
    speed: 'tempo rate fast slow',
    arpeggio: 'arpeggiator arp',
    chord: 'several keys hold notes together',
    mic: 'microphone vocoder autopitch auto note',
    microphone: 'mic vocoder autopitch auto note',
    robot: 'vocoder voice',
    voice: 'vocoder autopitch auto note microphone',
    record: 'sequencer tr-rec step recording pattern',
    erase: 'delete remove clear step',
    delete: 'erase remove clear',
    bass: 'low deep sub analog',
    pad: 'sustained slow strings',
    lead: 'bright cutting solo',
    power: 'on off switch start',
  };

  function expand(query) {
    const words = query.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
    const extra = [];
    words.forEach((w) => {
      Object.keys(SYNONYMS).forEach((k) => {
        if (k === w || k.indexOf(w) === 0) extra.push(SYNONYMS[k]);
      });
    });
    return { words: words, haystackExtra: extra.join(' ') };
  }

  let INDEX = null;

  function buildIndex() {
    if (INDEX) return INDEX;
    const out = [];

    const all = tutorials();
    Object.keys(all).sort().forEach((id) => {
      const t = all[id];
      out.push({
        group: 'Tutorials',
        title: id + ' · ' + t.title,
        sub: t.summary,
        hash: '#tutorial/' + id,
        text: [id, t.title, t.summary, (t.learningGoals || []).join(' '), t.level].join(' '),
      });
      t.steps.forEach((st, i) => {
        out.push({
          group: 'Tutorials',
          title: t.title + ' — ' + (st.title || 'step ' + (i + 1)),
          sub: st.instruction || '',
          hash: '#tutorial/' + id + (i ? '/step/' + (i + 1) : ''),
          text: [id, st.title, st.instruction, st.detail, st.whyItMatters, st.checkpoint, st.recoveryHelp].join(' '),
          step: true,
        });
      });
    });

    const cols = collections();
    Object.keys(cols).forEach((cid) => {
      const c = cols[cid];
      if (!routableCollection(cid)) return;
      out.push({
        group: 'Tutorials',
        title: c.title,
        sub: c.description,
        hash: '#topic/' + cid,
        text: [c.title, c.description, 'topic collection'].join(' '),
      });
    });

    const Q = reference();
    Q.order.forEach((qid) => {
      const e = Q.entries[qid];
      out.push({
        group: 'Quick Reference',
        title: e.title,
        sub: e.summary,
        hash: '#reference/' + qid,
        text: [e.title, e.summary, (e.steps || []).join(' '), (e.notes || []).join(' '), e.warning || ''].join(' '),
      });
    });

    const H = hardware().targets;
    Object.keys(H).forEach((tid) => {
      const t = H[tid];
      const d = describeTarget(tid);
      out.push({
        group: 'Controls',
        title: t.label,
        sub: d ? d.what : '',
        hash: '#explorer/control/' + tid,
        text: [t.label, t.panelLegend || '', d ? d.what : '', d && d.safety ? d.safety : '', t.kind].join(' '),
      });
    });

    const S = specialty();
    S.order.forEach((sid) => {
      const l = S.lessons[sid];
      out.push({
        group: 'Specialty',
        title: l.title,
        sub: l.summary,
        hash: '#specialty/' + sid,
        text: [l.title, l.summary, (l.learningGoals || []).join(' '), 'specialty optional microphone'].join(' '),
      });
      l.steps.forEach((st, i) => {
        out.push({
          group: 'Specialty',
          title: l.title + ' — ' + (st.title || 'step ' + (i + 1)),
          sub: st.instruction || '',
          hash: '#specialty/' + sid + (i ? '/step/' + (i + 1) : ''),
          text: [st.title, st.instruction, st.detail, st.whyItMatters, st.recoveryHelp].join(' '),
          step: true,
        });
      });
    });

    out.forEach((r) => { r.hay = (r.text + ' ' + r.title).toLowerCase(); });
    INDEX = out;
    return INDEX;
  }

  const GROUP_ORDER = ['Tutorials', 'Controls', 'Quick Reference', 'Specialty'];

  function searchFor(query) {
    const q = String(query || '').trim();
    if (q.length < 2) return [];
    const ex = expand(q);
    const scored = [];
    buildIndex().forEach((r) => {
      let score = 0;
      const titleLc = r.title.toLowerCase();
      ex.words.forEach((w) => {
        if (!w) return;
        if (titleLc.indexOf(w) >= 0) score += 8;
        if (r.hay.indexOf(w) >= 0) score += 3;
        if (ex.haystackExtra && ex.haystackExtra.indexOf(w) >= 0 && r.hay.indexOf(w) >= 0) score += 1;
      });
      /* Synonym expansion: a hit through a synonym counts, but less than a
         literal one, so "wobble" finds the LFO without outranking "LFO". */
      if (!score && ex.haystackExtra) {
        ex.haystackExtra.split(/\s+/).forEach((w) => {
          if (w.length > 2 && r.hay.indexOf(w) >= 0) score += 1;
        });
      }
      if (!score) return;
      /* A whole tutorial outranks one of its steps at equal relevance. */
      if (!r.step) score += 2;
      scored.push({ r: r, score: score });
    });
    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, 40).map((x) => x.r);
  }

  const search = {
    btn: document.getElementById('searchbtn'),
    panel: document.getElementById('searchpanel'),
    input: document.getElementById('searchinput'),
    close: document.getElementById('searchclose'),
    results: document.getElementById('searchresults'),
    count: document.getElementById('searchcount'),
  };

  function paintSearch() {
    const q = search.input.value;
    search.results.innerHTML = '';
    const hits = searchFor(q);

    if (q.trim().length < 2) {
      search.count.textContent = 'Type at least two letters.';
      return;
    }
    if (!hits.length) {
      search.count.textContent = 'Nothing found for “' + q.trim() + '”.';
      const empty = el('div', 'search-empty');
      empty.appendChild(el('p', null,
        'Try a plainer word — what the thing does rather than what it is called. “bright”, “echo”, “save”, “stuck” and “beat” all find something.'));
      search.results.appendChild(empty);
      return;
    }

    search.count.textContent =
      hits.length + (hits.length === 1 ? ' result' : ' results') + ' for “' + q.trim() + '”.';

    GROUP_ORDER.forEach((g) => {
      const inGroup = hits.filter((h) => h.group === g);
      if (!inGroup.length) return;
      const sec = el('div', 'search-group');
      sec.appendChild(el('h3', null, g));
      inGroup.forEach((h) => {
        const b = el('button', 'search-hit' + (h.step ? ' step' : ''));
        b.type = 'button';
        b.appendChild(el('span', 'sh-title', h.title));
        if (h.sub) b.appendChild(el('span', 'sh-sub', h.sub));
        b.setAttribute('aria-label', h.title + (h.sub ? '. ' + h.sub : ''));
        b.addEventListener('click', () => {
          closeSearch();
          go(h.hash);
        });
        sec.appendChild(b);
      });
      search.results.appendChild(sec);
    });
  }

  function openSearch() {
    search.panel.hidden = false;
    search.btn.setAttribute('aria-expanded', 'true');
    document.body.classList.add('searching');
    search.input.focus();
    search.input.select();
    paintSearch();
  }

  function closeSearch() {
    search.panel.hidden = true;
    search.btn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('searching');
  }

  search.btn.addEventListener('click', () => {
    if (search.panel.hidden) openSearch();
    else closeSearch();
  });
  search.close.addEventListener('click', () => {
    closeSearch();
    search.btn.focus();
  });
  search.input.addEventListener('input', paintSearch);
  /* Search owns Escape, so it marks the event handled on the way out. Without
     this the lesson's document handler sees an already-hidden panel and an
     unclaimed Escape, and exits the lesson underneath the closing search. */
  search.panel.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      closeSearch();
      search.btn.focus();
    }
  });

  /* ------------------------------------------------------------- favourites */

  const bookmarkBtn = document.getElementById('lsn-fav');

  /*
   * "Bookmarked" is the app feature; "Favorite" is the JD-Xi's own hardware
   * feature and the word is reserved for it (master plan sec 16). The star
   * icon stays, because the icon was never the confusing part.
   */
  function paintBookmarkButton(id) {
    if (!id) {
      bookmarkBtn.hidden = true;
      return;
    }
    const on = progress().isBookmarked(id);
    bookmarkBtn.hidden = false;
    bookmarkBtn.setAttribute('aria-pressed', on ? 'true' : 'false');
    bookmarkBtn.querySelector('.favstar-ico').textContent = on ? '★' : '☆';
    bookmarkBtn.querySelector('.favstar-txt').textContent = on ? 'Bookmarked' : 'Bookmark';
    bookmarkBtn.title = on ? 'Remove from Bookmarked' : 'Save to Bookmarked';
    bookmarkBtn.setAttribute(
      'aria-label',
      (on ? 'Remove ' : 'Save ') + id + (on ? ' from Bookmarked' : ' to Bookmarked')
    );
  }

  bookmarkBtn.addEventListener('click', () => {
    /* Both kinds of lesson can be bookmarked; only a development fixture cannot. */
    if (!currentLesson || currentLesson.kind === 'dev') return;
    progress().toggleBookmark(currentLesson.key);
    paintBookmarkButton(currentLesson.key);
  });

  /* ----------------------------------------------------------------- render */

  /*
   * Home's Continue card. Canonical work only, and only when it is unfinished
   * - a completed tutorial is not something to continue, and a specialty
   * lesson is optional and never claims the guided path's prime position.
   */
  const continueCard = {
    root: document.getElementById('continue-card'),
    shell: document.querySelector('.shell'),
    title: document.getElementById('continue-title'),
    step: document.getElementById('continue-step'),
    stepTitle: document.getElementById('continue-step-title'),
    bar: document.getElementById('continue-bar'),
  };

  function paintContinueCard() {
    if (!continueCard.root) return;
    const r = progress().unfinishedResume();
    /* Home is laid out in one band fewer when there is nothing to continue.
       The class carries that, rather than the CSS guessing from [hidden] -
       :has() would work in both browsers we test but not in every one the
       owner might open a file:// page in, and this cannot silently half-apply. */
    if (continueCard.shell) continueCard.shell.classList.toggle('has-continue', !!r);
    if (!r) {
      continueCard.root.hidden = true;
      return;
    }
    const total = r.tutorial.steps.length;
    const n = r.stepIndex + 1;
    const step = r.tutorial.steps[r.stepIndex];
    continueCard.root.hidden = false;
    continueCard.title.textContent = r.id + ' · ' + r.tutorial.title;

    /*
     * resume() hands back a usable stepIndex either way, but says whether it
     * is the learner's recorded position or a fallback. Only the recorded one
     * may be worded as a position: a stored step id the curriculum no longer
     * contains falls back to index 0, and calling that "Step 1 of 12" tells a
     * learner we remember a place we in fact invented.
     */
    if (r.stepResolved) {
      continueCard.step.textContent = 'Step ' + n + ' of ' + total;
      continueCard.stepTitle.textContent = (step && step.title) || '';
      /* The bar draws the fraction the line beside it already states - reached,
         not scored, which is why the step they are on counts. It is decoration
         for that sentence and carries no number of its own. */
      continueCard.bar.style.width = (n / total) * 100 + '%';
      continueCard.root.setAttribute(
        'aria-label',
        'Continue ' + r.tutorial.title + ', step ' + n + ' of ' + total +
          (step && step.title ? ': ' + step.title : '')
      );
      continueCard.root.onclick = () => go(stepHash({ kind: 'tutorial', key: r.id }, n));
      return;
    }

    continueCard.step.textContent = 'Resume from the beginning';
    /* No step is named, so no step title is named either - the fallback step's
       own title would read as the remembered one. */
    continueCard.stepTitle.textContent = '';
    /* And no fraction: the bar is decoration for a sentence that no longer
       states one, and 1/12 of a rail is a position claim of its own. */
    continueCard.bar.style.width = '0%';
    continueCard.root.setAttribute(
      'aria-label',
      'Resume ' + r.id + ' · ' + r.tutorial.title + ' from the beginning'
    );
    /* The control says the beginning, so it goes to the beginning. That is
       explicitStepHash's case exactly - a control meaning step 1 after the
       learner has decided - and it leaves the bare route's direct-entry
       meaning untouched. */
    continueCard.root.onclick = () =>
      go(explicitStepHash({ kind: 'tutorial', key: r.id }, 1));
  }

  /* ------------------------------------------------- lesson focus and speech */

  const lessonTitle = document.getElementById('lsn-title');
  const lessonLive = document.getElementById('lsn-live');

  /*
   * Moving between steps rewrites the instruction in place. Sighted learners
   * see that; nobody else is told anything, because no navigation happened as
   * far as the page is concerned. So a step change writes one polite sentence
   * carrying what actually changed - which step, and what it now asks for.
   *
   * Only a step change inside a lesson writes it. Arriving at a lesson moves
   * focus to the heading instead, and doing both would announce the same
   * lesson twice; re-rendering the step already on screen changes nothing and
   * so says nothing.
   */
  function announceStep(route, stepChanged) {
    if (!lessonLive) return;
    if (!stepChanged) {
      /* Cleared rather than left standing, so a later return to this step is
         a change to the region and gets announced. Emptying it announces
         nothing itself. */
      lessonLive.textContent = '';
      return;
    }
    const steps = route.lesson.tutorial.steps;
    const step = steps[route.stepIndex] || {};
    lessonLive.textContent =
      'Step ' + (route.stepIndex + 1) + ' of ' + steps.length + '. ' +
      (step.title ? step.title + '. ' : '') + (step.instruction || '');
  }

  function applyRoute() {
    const route = parse(window.location.hash);

    if (route.redirect && window.location.hash !== route.redirect) {
      // replace, not push, so a bad URL does not become a history entry
      window.location.replace(route.redirect);
      return;
    }

    if (route.view === 'lesson') {
      /*
       * Arriving at a lesson and moving inside one are different events and
       * need different treatment, so both are decided BEFORE currentLesson is
       * overwritten. Arriving moves focus; moving a step must not, or every
       * press of Next would throw the keyboard user back to the top of the
       * screen and the button under their finger would stop responding.
       */
      const arrived =
        !currentLesson ||
        currentLesson.kind !== route.lesson.kind ||
        currentLesson.key !== route.lesson.key;
      const stepChanged = !arrived && current !== route.stepIndex;

      showView('lesson');
      const onLast = route.stepIndex === route.lesson.tutorial.steps.length - 1;
      window.JDXI_LESSON_RENDERER.render({
        tutorial: route.lesson.tutorial,
        stepIndex: route.stepIndex,
        canonical: route.lesson.kind === 'tutorial',
        kind: route.lesson.kind === 'dev' ? 'fixture' : route.lesson.kind,
        nextTutorial: nextInLevel(route.lesson),
        /* Reaching the last step is not finishing it. The label makes the
           final action a deliberate one the learner takes - and it names what
           is actually being finished. A Specialty lesson is optional content
           outside the guided thirty, so calling it a Tutorial overstates it.
           A development fixture finishes nothing and so is given no label,
           which is also what keeps its "Return home" out of the completion
           styling. */
        finishLabel: !onLast || route.lesson.kind === 'dev'
          ? null
          : route.lesson.kind === 'specialty'
          ? 'Finish lesson ✓'
          : 'Finish Tutorial ✓',
        /* Resolve the step's Quick Reference ids into titles here, so the
           renderer stays ignorant of both the catalogue and the router. */
        quickReference: (route.lesson.tutorial.steps[route.stepIndex].quickReference || [])
          .map((qid) => reference().entries[qid])
          .filter(Boolean)
          .map((e) => ({ id: e.id, title: e.title })),
      });
      current = route.stepIndex;
      currentLesson = route.lesson;
      /* Only canonical tutorials touch learner state. A development fixture is
         not a tutorial and must never appear in progress or favourites. */
      if (route.lesson.kind === 'tutorial') {
        progress().noteVisit(route.lesson.key, route.stepIndex);
        paintBookmarkButton(route.lesson.key);
      } else if (route.lesson.kind === 'specialty') {
        /* Bookmarkable, but never a resume point: Specialty is optional and
           outside the guided path, so it must not become the Continue card. */
        paintBookmarkButton(route.lesson.key);
      } else {
        paintBookmarkButton(null);
      }
      announceStep(route, stepChanged);
      if (arrived) {
        /* The same landing the catalog surfaces make: focus the heading so a
           keyboard or screen-reader user lands on the lesson they asked for
           rather than staying wherever the previous surface left them. */
        lessonTitle.setAttribute('tabindex', '-1');
        lessonTitle.focus({ preventScroll: true });
      }
    } else if (route.view === 'catalog') {
      showView('catalog');
      renderCatalog(route);
      current = null;
      currentLesson = null;
    } else {
      showView('home');
      paintContinueCard();
      current = null;
      currentLesson = null;
    }
  }

  let current = null;
  let currentLesson = null;

  function go(hash) {
    if (window.location.hash === hash) applyRoute();
    else window.location.hash = hash;
  }

  /* ----------------------------------------------------------- interactions */

  document.querySelectorAll('[data-route]').forEach((btn) => {
    btn.addEventListener('click', () => go(btn.getAttribute('data-route')));
  });

  cat.back.addEventListener('click', () => go('#home'));

  const backBtn = document.getElementById('lsn-back');
  const nextBtn = document.getElementById('lsn-next');

  /*
   * Back and forward are one path each, shared by the button and by the
   * keyboard, so the two can never drift into meaning different things.
   */

  /* Step 1 has nothing behind it: the control is disabled and this is inert,
     which is also the state the keyboard path honours. */
  function lessonBack() {
    if (current === null || current === 0) return;
    /* An explicit step, never the bare route - the bare route is the
       Continue / Start over decision point for the lesson the learner is
       already standing in, which is not what Back means. */
    go(explicitStepHash(currentLesson, current));
  }

  function lessonNext() {
    if (current === null) return;
    const last = current === currentLesson.tutorial.steps.length - 1;
    if (!last) {
      go(explicitStepHash(currentLesson, current + 2));
      return;
    }
    /*
     * The last step's action FINISHES. This is the only thing that marks a
     * canonical tutorial complete - not arriving here, and not deep-linking
     * here (master plan sec 22).
     */
    if (currentLesson.kind === 'tutorial') {
      progress().finish(currentLesson.key);
      go('#complete/' + currentLesson.key);
      return;
    }
    if (currentLesson.kind === 'specialty') {
      progress().finishSpecialty(currentLesson.key);
      go('#complete/' + currentLesson.key);
      return;
    }
    /* A development fixture completes nothing and celebrates nothing. */
    go('#home');
  }

  /*
   * Leaving a lesson goes to the discovery surface that lesson belongs to,
   * which is where the learner would look for something else to do: a guided
   * tutorial to its level path, a Specialty lesson to Specialty. A development
   * fixture belongs to no course, so it leaves to Home.
   */
  function lessonExitHash() {
    if (!currentLesson) return '#home';
    if (currentLesson.kind === 'specialty') return '#specialty';
    const level = currentLesson.kind === 'tutorial' && currentLesson.tutorial.level;
    return level ? '#level/' + level : '#home';
  }

  backBtn.addEventListener('click', lessonBack);
  nextBtn.addEventListener('click', lessonNext);

  /*
   * Keyboard navigation for the lesson, as ONE guarded listener rather than a
   * handler per surface - a second listener is how two features end up both
   * answering the same Escape.
   *
   * Precedence, by key rather than by surface - not every one of these owns
   * every key:
   *   - the Explorer popup is a modal dialog and owns Escape and Tab;
   *   - the search overlay owns Escape, from any focus inside it;
   *   - a text-entry target owns the arrow keys, because moving the caret in
   *     a text field is what arrows are FOR, and never navigates the lesson;
   *   - an open disclosure panel owns the ARROWS, since it may scroll and must
   *     stay scrollable - but NOT Escape, which still exits the lesson once
   *     search and the Explorer have had their turn.
   */
  function isTextEntry(node) {
    if (!node || !node.tagName) return false;
    if (node.isContentEditable) return true;
    const tag = node.tagName.toLowerCase();
    return tag === 'input' || tag === 'textarea' || tag === 'select';
  }

  function inDisclosurePanel(node) {
    for (let n = node; n && n !== document.body; n = n.parentElement) {
      if (n.classList && n.classList.contains('disc-panel')) return true;
    }
    return false;
  }

  document.addEventListener('keydown', (e) => {
    if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey) return;
    if (!modal.root.hidden) return;          // Explorer popup first
    if (!search.panel.hidden) return;        // then search
    if (isTextEntry(e.target)) return;
    if (views.lesson.hidden || current === null) return;

    if (e.key === 'Escape') {
      e.preventDefault();
      go(lessonExitHash());
      return;
    }
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    /* "Why?" and "I'm lost" open a panel that can be taller than its box.
       Arrows belong to whatever the learner is reading inside it. */
    if (inDisclosurePanel(e.target)) return;
    e.preventDefault();
    if (e.key === 'ArrowRight') lessonNext();
    else lessonBack();
  });

  const R = window.JDXI_LESSON_RENDERER;
  const why = {
    btn: document.getElementById('lsn-why-btn'),
    panel: document.getElementById('lsn-why-panel'),
  };
  const lost = {
    btn: document.getElementById('lsn-lost-btn'),
    panel: document.getElementById('lsn-lost-panel'),
  };
  /* Delegated, because the panel's contents are rebuilt on every step. */
  lost.panel.addEventListener('click', (e) => {
    const link = e.target.closest ? e.target.closest('.qr-link') : null;
    if (!link) return;
    go('#reference/' + link.getAttribute('data-qr'));
  });

  why.btn.addEventListener('click', () => R.togglePanel(why.btn, why.panel, [lost]));
  lost.btn.addEventListener('click', () => R.togglePanel(lost.btn, lost.panel, [why]));

  window.addEventListener('hashchange', applyRoute);
  applyRoute();
})();
