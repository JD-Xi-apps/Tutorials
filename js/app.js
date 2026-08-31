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
   *                          #favorites #progress #settings
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
  const PLAIN_ROUTES = ['#favorites', '#progress', '#settings'];

  function fixture(routeKey) {
    const all = window.JDXI_TUTORIAL_FIXTURES || {};
    return all[DEV_FIXTURES[routeKey]] || null;
  }

  function canonical(id) {
    const all = tutorials();
    return Object.prototype.hasOwnProperty.call(all, id) ? all[id] : null;
  }

  // Lesson descriptor: { kind, key, tutorial }.
  function lesson(kind, key) {
    const tut = kind === 'dev' ? fixture(key) : canonical(key);
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
    // #tutorial/<id> IS step 1; deeper steps carry the step segment.
    return n === 1 ? '#tutorial/' + lsn.key : '#tutorial/' + lsn.key + '/step/' + n;
  }

  /*
   * Every unresolvable route degrades to a defined destination rather than
   * failing: an out-of-range step falls back to step 1 of the same lesson, and
   * an unknown tutorial, level or collection - or any malformed route - falls
   * back to #home.
   */
  function parse(hash) {
    if (!hash || hash === '#' || hash === '#home') return { view: 'home' };

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

    let lsn = null;
    let asked = 1;
    m = DEV_ROUTE.exec(hash);
    if (m) {
      lsn = lesson('dev', m[1]);
      asked = parseInt(m[2], 10);
    } else if ((m = TUTORIAL_ROUTE.exec(hash))) {
      lsn = lesson('tutorial', m[1]);
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

  /* A rich card, for bounded lists: a level (10) or a topic (at most 8). */
  function tutorialCard(id, currentId) {
    const t = tutorials()[id];
    const P = progress();
    const done = P.isComplete(id);
    const card = el('button', 'tut-card' + (done ? ' done' : '') + (id === currentId ? ' here' : ''));
    card.type = 'button';

    const top = el('div', 'tc-top');
    top.appendChild(el('span', 'tc-id', id));
    const marks = el('span', 'tc-top');
    if (P.isFavorite(id)) {
      const star = el('span', 'tc-star', '★');
      star.setAttribute('aria-hidden', 'true');
      marks.appendChild(star);
    }
    marks.appendChild(el('span', 'tc-tick' + (done ? ' done' : ''), done ? '✓' : ''));
    top.appendChild(marks);
    card.appendChild(top);

    card.appendChild(el('div', 'tc-name', t.title));
    card.appendChild(el('div', 'tc-sum', t.summary));

    const meta = el('div', 'tc-meta');
    meta.appendChild(el('span', null, t.estimatedMinutes + ' min'));
    meta.appendChild(el('span', null, t.steps.length + ' steps'));
    card.appendChild(meta);

    /* One accessible name carrying everything the visual card conveys. */
    card.setAttribute(
      'aria-label',
      `${t.title}. ${id}, ${t.estimatedMinutes} minutes, ${t.steps.length} steps.` +
        (done ? ' Completed.' : '') + (P.isFavorite(id) ? ' Favorite.' : '')
    );
    card.addEventListener('click', () => go('#tutorial/' + id));
    return card;
  }

  /* A compact row, for unbounded lists: Favorites and Progress (up to 30). */
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

  function storageNotice() {
    if (progress().isAvailable()) return null;
    const p = el('div', 'cat-panel warn');
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

  function renderFavorites() {
    const P = progress();
    const favs = P.favorites();
    cat.eyebrow.textContent = 'Saved';
    cat.title.textContent = 'Favorites';

    if (!favs.length) {
      cat.desc.textContent = '';
      cat.body.appendChild(
        emptyState(
          'Nothing saved yet',
          'Open any tutorial and press Favorite next to its title to keep it here. ' +
            'Favorites are stored in this browser only — there is no account and nothing leaves your computer.',
          'Browse the Beginner path',
          '#level/beginner'
        )
      );
      cat.hint.textContent = '';
      return;
    }

    cat.desc.textContent =
      favs.length + (favs.length === 1 ? ' tutorial you have saved.' : ' tutorials you have saved.');
    const notice = storageNotice();
    if (notice) cat.body.appendChild(notice);

    const resume = P.resume();
    const currentId = resume ? resume.id : null;
    /* Compact rows: a learner may favourite all thirty, and the stage never
       scrolls, so this list has to stay inside a fixed height. */
    const cols = el('div', 'cat-cols');
    const per = Math.ceil(favs.length / 3);
    for (let c = 0; c < 3; c++) {
      const col = el('div', 'cat-col');
      favs.slice(c * per, (c + 1) * per).forEach((id) => col.appendChild(tutorialRow(id, currentId)));
      cols.appendChild(col);
    }
    cat.body.appendChild(cols);
    cat.hint.textContent = 'Press Favorite again on a tutorial to remove it from this list.';
  }

  function renderProgress() {
    const P = progress();
    const all = tutorials();
    const total = Object.keys(all).length;
    const done = P.completed().length;
    const resume = P.resume();
    const currentId = resume ? resume.id : null;

    cat.eyebrow.textContent = 'Your progress';
    cat.title.textContent = 'My Progress';
    cat.desc.textContent =
      'Every tutorial, in the order the guided path takes them. Kept in this browser only.';

    if (resume) {
      cat.actions.appendChild(
        actionButton(
          'Resume ' + resume.id + ' · step ' + (resume.stepIndex + 1),
          '#tutorial/' + resume.id + (resume.stepIndex ? '/step/' + (resume.stepIndex + 1) : '')
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
      ids.forEach((id) => col.appendChild(tutorialRow(id, currentId)));
      cols.appendChild(col);
    });
    cat.body.appendChild(cols);
    cat.hint.textContent = 'A tutorial counts as complete once you reach its last step.';
  }

  function renderSettings() {
    const P = progress();
    cat.eyebrow.textContent = 'Settings';
    cat.title.textContent = 'Settings';
    cat.desc.textContent = 'The few things there are to set. There is nothing else here.';

    const where = el('div', 'cat-panel');
    where.appendChild(el('h2', null, 'Where your progress is kept'));
    where.appendChild(el('p', null,
      'Your completed tutorials, where you had got to, and your favourites are stored ' +
      'in this browser on this computer, and nowhere else. There is no account, nothing ' +
      'is sent anywhere, and nothing is shared between browsers or devices.'));
    where.appendChild(el('p', null,
      'Opening the app in a different browser, or clearing this browser’s site data, ' +
      'means starting from an empty state.'));
    cat.body.appendChild(where);

    if (!P.isAvailable()) {
      const warn = storageNotice();
      if (warn) cat.body.appendChild(warn);
    }

    const reset = el('div', 'cat-panel');
    reset.appendChild(el('h2', null, 'Reset progress and favourites'));
    reset.appendChild(el('p', null,
      'This clears every completed tutorial, your resume point and all your favourites. ' +
      'It changes nothing about the tutorials themselves, and it cannot be undone.'));
    const row = el('div', 'row');
    const btn = el('button', 'cat-btn danger', 'Reset everything');
    btn.type = 'button';
    const status = el('span', null, '');
    status.style.fontSize = '12px';
    status.style.color = 'var(--muted)';

    /*
     * Two deliberate presses, never one. The first arms and relabels; the
     * second acts. A single click on a control that erases the learner's whole
     * record is exactly the accident this guards against.
     */
    let armed = false;
    btn.addEventListener('click', () => {
      if (!armed) {
        armed = true;
        btn.classList.add('armed');
        btn.textContent = 'Press again to reset';
        status.textContent = 'This will clear everything. Press Cancel to keep it.';
        cancel.hidden = false;
        return;
      }
      P.reset();
      armed = false;
      btn.classList.remove('armed');
      btn.textContent = 'Reset everything';
      cancel.hidden = true;
      status.textContent = 'Progress and favourites cleared.';
    });

    const cancel = el('button', 'cat-btn quiet', 'Cancel');
    cancel.type = 'button';
    cancel.hidden = true;
    cancel.addEventListener('click', () => {
      armed = false;
      btn.classList.remove('armed');
      btn.textContent = 'Reset everything';
      cancel.hidden = true;
      status.textContent = 'Nothing was changed.';
    });

    row.appendChild(btn);
    row.appendChild(cancel);
    row.appendChild(status);
    reset.appendChild(row);
    cat.body.appendChild(reset);
    cat.hint.textContent = '';
  }

  const SURFACES = {
    level: renderLevel,
    topic: renderTopic,
    favorites: renderFavorites,
    progress: renderProgress,
    settings: renderSettings,
  };

  function renderCatalog(route) {
    cat.actions.innerHTML = '';
    cat.body.innerHTML = '';
    cat.desc.textContent = '';
    cat.hint.textContent = '';
    SURFACES[route.surface](route);
    /* Focus the heading so keyboard and screen-reader users land on the new
       surface rather than staying where the old one was. */
    cat.title.setAttribute('tabindex', '-1');
    cat.title.focus({ preventScroll: true });
  }

  /* ------------------------------------------------------------- favourites */

  const favBtn = document.getElementById('lsn-fav');

  function paintFavButton(id) {
    if (!id) {
      favBtn.hidden = true;
      return;
    }
    const on = progress().isFavorite(id);
    favBtn.hidden = false;
    favBtn.setAttribute('aria-pressed', on ? 'true' : 'false');
    favBtn.querySelector('.favstar-ico').textContent = on ? '★' : '☆';
    favBtn.querySelector('.favstar-txt').textContent = on ? 'Favorited' : 'Favorite';
    favBtn.title = on ? 'Remove from Favorites' : 'Save to Favorites';
    favBtn.setAttribute(
      'aria-label',
      (on ? 'Remove ' : 'Save ') + id + (on ? ' from Favorites' : ' to Favorites')
    );
  }

  favBtn.addEventListener('click', () => {
    if (!currentLesson || currentLesson.kind !== 'tutorial') return;
    progress().toggleFavorite(currentLesson.key);
    paintFavButton(currentLesson.key);
  });

  /* ----------------------------------------------------------------- render */

  function applyRoute() {
    const route = parse(window.location.hash);

    if (route.redirect && window.location.hash !== route.redirect) {
      // replace, not push, so a bad URL does not become a history entry
      window.location.replace(route.redirect);
      return;
    }

    if (route.view === 'lesson') {
      showView('lesson');
      window.JDXI_LESSON_RENDERER.render({
        tutorial: route.lesson.tutorial,
        stepIndex: route.stepIndex,
        canonical: route.lesson.kind === 'tutorial',
        nextTutorial: nextInLevel(route.lesson),
      });
      current = route.stepIndex;
      currentLesson = route.lesson;
      /* Only canonical tutorials touch learner state. A development fixture is
         not a tutorial and must never appear in progress or favourites. */
      if (route.lesson.kind === 'tutorial') {
        progress().noteVisit(route.lesson.key, route.stepIndex);
        paintFavButton(route.lesson.key);
      } else {
        paintFavButton(null);
      }
    } else if (route.view === 'catalog') {
      showView('catalog');
      renderCatalog(route);
      current = null;
      currentLesson = null;
    } else {
      showView('home');
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

  backBtn.addEventListener('click', () => {
    if (current === null) return;
    go(current === 0 ? '#home' : stepHash(currentLesson, current));
  });

  nextBtn.addEventListener('click', () => {
    if (current === null) return;
    const last = current === currentLesson.tutorial.steps.length - 1;
    if (!last) {
      go(stepHash(currentLesson, current + 2));
      return;
    }
    const nxt = nextInLevel(currentLesson);
    go(nxt ? '#tutorial/' + nxt.id : '#home');
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
  why.btn.addEventListener('click', () => R.togglePanel(why.btn, why.panel, [lost]));
  lost.btn.addEventListener('click', () => R.togglePanel(lost.btn, lost.panel, [why]));

  window.addEventListener('hashchange', applyRoute);
  applyRoute();
})();
