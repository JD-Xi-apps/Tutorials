/*
 * JD-Xi Tutorial Hub - stage fitting and hash routing.
 *
 * The 1440x900 stage-fit mechanism is unchanged from the frozen home baseline:
 * one fixed reference canvas, scaled proportionally to fit the window, height
 * preferred. Views live INSIDE that stage - there is deliberately no second
 * scaling system for lessons.
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

  /* ------------------------------------------------------------------ views */

  const viewHome = document.getElementById('view-home');
  const viewLesson = document.getElementById('view-lesson');

  function showView(name) {
    viewHome.hidden = name !== 'home';
    viewLesson.hidden = name !== 'lesson';
    document.body.classList.toggle('in-lesson', name === 'lesson');
  }

  /* ---------------------------------------------------------------- routing */

  /*
   * Two route families share one lesson view and one renderer:
   *
   *   development fixtures   #dev/<key>/step/<n>        js/tutorial-fixtures.js
   *   canonical tutorials    #tutorial/<id>             js/tutorials.js
   *                          #tutorial/<id>/step/<n>
   *
   * A canonical id resolves through window.JDXI_TUTORIALS, so a later
   * tutorial (B02, N01, ...) needs only a data entry - no router change. The
   * rest of the production catalog (levels, topics, favorites, progress,
   * settings) is deliberately not implemented yet.
   */
  const DEV_FIXTURES = {
    'lesson-renderer': 'renderer-demo',
    'rear-panel': 'rear-panel-demo',
  };
  const DEV_ROUTE = /^#dev\/(lesson-renderer|rear-panel)\/step\/(\d+)$/;
  const TUTORIAL_ROUTE = /^#tutorial\/([A-Za-z0-9]+)(?:\/step\/(\d+))?$/;

  function fixture(routeKey) {
    const all = window.JDXI_TUTORIAL_FIXTURES || {};
    return all[DEV_FIXTURES[routeKey]] || null;
  }

  function canonical(id) {
    const all = window.JDXI_TUTORIALS || {};
    return Object.prototype.hasOwnProperty.call(all, id) ? all[id] : null;
  }

  // Lesson descriptor: { kind, key, tutorial }. `kind` decides the hash shape
  // and how the renderer labels the lesson; `key` is the routing token.
  function lesson(kind, key) {
    const tut = kind === 'dev' ? fixture(key) : canonical(key);
    return tut ? { kind: kind, key: key, tutorial: tut } : null;
  }

  /*
   * Guided path: the tutorial that follows this one is simply the canonical
   * tutorial in the SAME level whose order is one greater. Nothing here is
   * hardcoded per tutorial - adding B03 gives B02 a Next tutorial destination
   * with no edit to either tutorial's data. Development fixtures have no
   * guided position, so they never gain one and keep their existing end
   * behaviour. Returns { id, tutorial } or null when this is the last
   * tutorial of its level.
   */
  function nextInLevel(lsn) {
    if (!lsn || lsn.kind !== 'tutorial') return null;
    const tut = lsn.tutorial;
    if (!tut.level || tut.order == null) return null;
    const all = window.JDXI_TUTORIALS || {};
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
   * failing: an out-of-range step falls back to step 1 of the same lesson,
   * an unknown tutorial id or any malformed route falls back to #home.
   */
  function parse(hash) {
    if (!hash || hash === '#' || hash === '#home') return { view: 'home' };

    let lsn = null;
    let asked = 1;
    let m = DEV_ROUTE.exec(hash);
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
