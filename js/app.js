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

  // Phase 4B routes only: the home screen and the development fixture. The
  // production route catalog (levels, topics, canonical tutorials, favorites,
  // progress, settings) is deliberately not implemented yet.
  const DEV_FIXTURE_ID = 'renderer-demo';
  const DEV_ROUTE = /^#dev\/lesson-renderer\/step\/(\d+)$/;

  function fixture() {
    const all = window.JDXI_TUTORIAL_FIXTURES || {};
    return all[DEV_FIXTURE_ID] || null;
  }

  /*
   * Every unresolvable route degrades to a defined destination rather than
   * failing: an out-of-range step falls back to step 1 of the same fixture,
   * and anything else falls back to #home.
   */
  function parse(hash) {
    if (!hash || hash === '#' || hash === '#home') return { view: 'home' };

    const m = DEV_ROUTE.exec(hash);
    if (m) {
      const tut = fixture();
      if (!tut) return { view: 'home', redirect: '#home' };
      const asked = parseInt(m[1], 10);
      const total = tut.steps.length;
      if (!(asked >= 1 && asked <= total)) {
        return { view: 'lesson', stepIndex: 0, redirect: '#dev/lesson-renderer/step/1' };
      }
      return { view: 'lesson', stepIndex: asked - 1 };
    }
    return { view: 'home', redirect: '#home' };
  }

  function stepHash(n) {
    return '#dev/lesson-renderer/step/' + n;
  }

  function applyRoute() {
    const route = parse(window.location.hash);

    if (route.redirect && window.location.hash !== route.redirect) {
      // replace, not push, so a bad URL does not become a history entry
      window.location.replace(route.redirect);
      return;
    }

    if (route.view === 'lesson') {
      const tut = fixture();
      showView('lesson');
      window.JDXI_LESSON_RENDERER.render({ tutorial: tut, stepIndex: route.stepIndex });
      current = route.stepIndex;
    } else {
      showView('home');
      current = null;
    }
  }

  let current = null;

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
    go(current === 0 ? '#home' : stepHash(current));
  });

  nextBtn.addEventListener('click', () => {
    if (current === null) return;
    const tut = fixture();
    const last = current === tut.steps.length - 1;
    go(last ? '#home' : stepHash(current + 2));
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
