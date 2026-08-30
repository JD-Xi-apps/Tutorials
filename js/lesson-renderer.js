/*
 * JD-Xi Tutorial Hub - reusable lesson renderer.
 *
 * Renders one Step of one tutorial-shaped object into the lesson view. It is
 * data-driven: it knows nothing about any particular tutorial, and adding a
 * tutorial must never mean editing this file.
 *
 * Coordinate contract (non-negotiable):
 *   - all hardware geometry comes from window.JDXI_HARDWARE_TARGETS;
 *   - normalized 0..1 values are converted to CSS percentages here and nowhere
 *     else;
 *   - no step, fixture, or stylesheet may carry coordinates;
 *   - a highlight is never nudged to "look better". If a registry box looks
 *     wrong, the registry is corrected - not this renderer.
 *
 * Classic script on purpose - the app runs from file://; no modules, no fetch.
 */

window.JDXI_LESSON_RENDERER = (function () {
  "use strict";

  var IMG_SRC = "assets/images/JD-Xi.jpg";
  var IMG_ALT =
    "Roland JD-Xi synthesizer viewed from above, showing the control panel and keyboard";
  var IMG_W = 3153;
  var IMG_H = 1339;

  function registry() {
    return window.JDXI_HARDWARE_TARGETS || { targets: {} };
  }

  function pct(v) {
    return v * 100 + "%";
  }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  /* ---------------------------------------------------------------- targets */

  /*
   * Resolve a target id into a render-ready descriptor. Never invents geometry.
   * Returns { id, target, state } where state is:
   *   "ok"        - measurable region, safe to highlight
   *   "off-image" - real target with no region in the top-view master; the
   *                 caller must present an alternate visual (deferred)
   *   "unknown"   - id not in the registry
   */
  function resolveTarget(id) {
    var t = registry().targets[id];
    if (!t) return { id: id, target: null, state: "unknown" };
    if (!t.region) return { id: id, target: t, state: "off-image" };
    return { id: id, target: t, state: "ok" };
  }

  function resolveAll(ids) {
    return (ids || []).map(resolveTarget);
  }

  /* ------------------------------------------------------------- highlights */

  /*
   * A highlight box drawn directly from the canonical region. The hardware
   * underneath stays visible: border plus translucent fill plus glow, never an
   * opaque cover.
   *
   * `frame` maps a full-image normalized rect into the coordinate space of
   * whatever container we are drawing into (identity for the full instrument,
   * crop-relative for an inset).
   */
  function addHighlight(host, res, frame, tone, opts) {
    opts = opts || {};
    var r = res.target.region;
    var box = frame ? frame(r) : { x: r.x, y: r.y, width: r.width, height: r.height };

    var hl = el("div", "hl hl-" + tone);
    hl.setAttribute("aria-hidden", "true"); // decorative; the label carries the text
    hl.style.left = pct(box.x);
    hl.style.top = pct(box.y);
    hl.style.width = pct(box.width);
    hl.style.height = pct(box.height);
    host.appendChild(hl);

    if (opts.label === false) return hl;

    /*
     * Label sits outside the box so it never covers the control it names.
     * Above by default; below when the target is too near the top edge for a
     * label to fit above it.
     */
    var below = box.y < 0.12;
    var lab = el("span", "hl-label hl-" + tone + (below ? " below" : " above"));
    lab.textContent = res.target.label;
    lab.style.left = pct(box.x + box.width / 2);
    placeLabel(lab, box, below);
    lab._box = box; // kept for post-layout collision resolution
    host.appendChild(lab);
    return hl;
  }

  function placeLabel(lab, box, below) {
    lab.classList.toggle("below", below);
    lab.classList.toggle("above", !below);
    if (below) {
      lab.style.bottom = "";
      lab.style.top = pct(box.y + box.height);
    } else {
      lab.style.top = "";
      lab.style.bottom = pct(1 - box.y);
    }
  }

  function overlaps(a, b) {
    return !(a.right <= b.left || a.left >= b.right || a.bottom <= b.top || a.top >= b.bottom);
  }

  /*
   * A label must never sit on top of a DIFFERENT highlighted target - with two
   * targets close together (display + cursorButtons, say) the default side can
   * land one label straight across the other's control. Measured after layout,
   * because the label's height depends on the rendered text.
   */
  function resolveLabelCollisions(canvas) {
    var labels = [].slice.call(canvas.querySelectorAll(".hl-label"));
    var boxes = [].slice.call(canvas.querySelectorAll(".hl")).map(function (b) {
      return b.getBoundingClientRect();
    });
    labels.forEach(function (lab, i) {
      if (!lab._box) return;
      var hits = function () {
        var r = lab.getBoundingClientRect();
        return boxes.filter(function (b, j) {
          return j !== i && overlaps(r, b);
        }).length;
      };
      var before = hits();
      if (!before) return;
      var wasBelow = lab.classList.contains("below");
      placeLabel(lab, lab._box, !wasBelow);
      if (hits() >= before) placeLabel(lab, lab._box, wasBelow); // no better; keep original
    });
  }

  /*
   * Renders the "this target has no place on the top view" state instead of
   * inventing a region. Nothing in the current fixture reaches this, but a
   * future step referencing e.g. powerSwitch must degrade, not crash.
   */
  function offImageNotice(res) {
    var n = el("div", "offimg");
    var label = res.target ? res.target.label : res.id;
    n.appendChild(el("b", null, label));
    n.appendChild(
      el(
        "span",
        null,
        res.state === "unknown"
          ? "Unknown hardware target — nothing rendered."
          : "Not visible on the top view. Needs an alternate visual (deferred)."
      )
    );
    return n;
  }

  /* ------------------------------------------------------- full instrument */

  function buildFullInstrument(resolved, opts) {
    opts = opts || {};
    var canvas = el("div", "jdxi-canvas" + (opts.small ? " small" : ""));
    canvas.style.aspectRatio = IMG_W + " / " + IMG_H;

    var img = new Image();
    img.className = "jdxi-img";
    img.src = IMG_SRC;
    img.alt = opts.decorative ? "" : IMG_ALT;
    if (opts.decorative) img.setAttribute("aria-hidden", "true");
    canvas.appendChild(img);

    resolved.forEach(function (res, i) {
      if (res.state !== "ok") return;
      addHighlight(canvas, res, null, tone(i), { label: opts.labels !== false });
    });

    canvas._resolveLabels = true;

    if (opts.cropOutline) {
      var z = opts.cropOutline;
      var o = el("div", "crop-outline");
      o.setAttribute("aria-hidden", "true");
      o.style.left = pct(z.x);
      o.style.top = pct(z.y);
      o.style.width = pct(z.width);
      o.style.height = pct(z.height);
      canvas.appendChild(o);
    }
    return canvas;
  }

  function tone(i) {
    return ["a", "b", "c"][i % 3];
  }

  /* -------------------------------------------------------------- crop view */

  /*
   * Exact normalized crop, generated at runtime from the master image. No
   * derivative image files are created or committed.
   *
   * The frame is given the crop's true pixel aspect ratio, then the full master
   * is scaled so the crop exactly fills the frame:
   *
   *   scaled image width  = frame width  / zoom.width
   *   scaled image height = frame height / zoom.height
   *   offset              = -zoom.x, -zoom.y in that scaled space
   *
   * Percentage left/top resolve against frame width/height respectively, so the
   * mapping stays exact at any rendered size.
   */
  function buildCrop(zoom, resolved, opts) {
    opts = opts || {};
    var frame = el("div", "crop-frame" + (opts.extraClass ? " " + opts.extraClass : ""));
    frame.style.aspectRatio = zoom.width * IMG_W + " / " + zoom.height * IMG_H;

    var inner = el("div", "crop-inner");
    var img = new Image();
    img.className = "crop-img";
    img.src = IMG_SRC;
    img.alt = "";
    img.setAttribute("aria-hidden", "true"); // the full view carries the description
    img.style.width = 100 / zoom.width + "%";
    img.style.height = 100 / zoom.height + "%";
    img.style.left = -(zoom.x / zoom.width) * 100 + "%";
    img.style.top = -(zoom.y / zoom.height) * 100 + "%";
    inner.appendChild(img);

    // full-image rect -> crop-relative rect
    var toCrop = function (r) {
      return {
        x: (r.x - zoom.x) / zoom.width,
        y: (r.y - zoom.y) / zoom.height,
        width: r.width / zoom.width,
        height: r.height / zoom.height,
      };
    };

    resolved.forEach(function (res, i) {
      if (res.state !== "ok") return;
      addHighlight(inner, res, toCrop, tone(i), { label: opts.labels === true });
    });

    frame.appendChild(inner);
    return frame;
  }

  /* --------------------------------------------------------- display preview */

  /*
   * NOT an emulator. The true character grid of the JD-Xi display is not
   * authoritatively documented (source-map Q4), so this is a clearly labelled
   * preview surface that later verified expectedDisplay content can fill.
   */
  function buildDisplayPreview(lines, synthetic) {
    var wrap = el("div", "disp-preview");
    wrap.appendChild(el("div", "disp-cap", "Display preview"));
    var screen = el("div", "disp-screen");
    (lines || []).forEach(function (line) {
      screen.appendChild(el("div", "disp-line", line));
    });
    wrap.appendChild(screen);
    if (synthetic) {
      wrap.appendChild(
        el("div", "disp-note", "Synthetic placeholder — not real JD-Xi output.")
      );
    }
    return wrap;
  }

  /* ------------------------------------------------------------ visual modes */

  function buildVisual(step) {
    var host = el("div", "vis vis-" + step.visualMode);
    var resolved = resolveAll(step.hardwareTargets);

    var problems = resolved.filter(function (r) {
      return r.state !== "ok";
    });
    var measurable = resolved.filter(function (r) {
      return r.state === "ok";
    });

    // Prefer the first measurable target's zoom for inset/close-up modes.
    var zoomSource = measurable.filter(function (r) {
      return r.target.zoom;
    })[0];

    switch (step.visualMode) {
      case "full-plus-inset": {
        var stackA = el("div", "vis-stack");
        stackA.appendChild(buildFullInstrument(measurable));
        if (zoomSource) {
          var insetWrap = el("div", "inset-wrap");
          insetWrap.appendChild(el("div", "vis-cap", "Magnified"));
          insetWrap.appendChild(
            buildCrop(zoomSource.target.zoom, [zoomSource], { extraClass: "inset" })
          );
          stackA.appendChild(insetWrap);
        }
        host.appendChild(stackA);
        break;
      }

      case "control-closeup": {
        var wrapB = el("div", "vis-closeup");
        if (zoomSource) {
          var main = el("div", "closeup-main");
          var framed = el("div", "closeup-framed");
          // Caption sits outside the crop: a label placed inside a dominant
          // crop gets clipped by the frame's overflow.
          framed.appendChild(el("div", "vis-cap", zoomSource.target.label));
          framed.appendChild(
            buildCrop(zoomSource.target.zoom, [zoomSource], { extraClass: "dominant" })
          );
          main.appendChild(framed);
          wrapB.appendChild(main);
        }
        var ctx = el("div", "closeup-ctx");
        ctx.appendChild(el("div", "vis-cap", "Where this is"));
        ctx.appendChild(
          buildFullInstrument(measurable, {
            small: true,
            labels: false,
            decorative: true,
            cropOutline: zoomSource ? zoomSource.target.zoom : null,
          })
        );
        wrapB.appendChild(ctx);
        host.appendChild(wrapB);
        break;
      }

      case "display-focus": {
        var stackC = el("div", "vis-stack");
        var top = el("div", "disp-row");
        top.appendChild(
          buildDisplayPreview(step.expectedDisplay, step.syntheticDisplay !== false)
        );
        var dz = measurable.filter(function (r) {
          return r.id === "display" && r.target.zoom;
        })[0];
        if (dz) {
          var dwrap = el("div", "inset-wrap");
          dwrap.appendChild(el("div", "vis-cap", "On the instrument"));
          dwrap.appendChild(buildCrop(dz.target.zoom, measurable, { extraClass: "inset" }));
          top.appendChild(dwrap);
        }
        stackC.appendChild(top);
        stackC.appendChild(buildFullInstrument(measurable));
        host.appendChild(stackC);
        break;
      }

      case "full":
      default:
        host.appendChild(buildFullInstrument(measurable));
        break;
    }

    problems.forEach(function (res) {
      host.appendChild(offImageNotice(res));
    });
    return host;
  }

  /* ----------------------------------------------------------------- render */

  function setCard(cardEl, bodyEl, value) {
    var has = value != null && value !== "";
    cardEl.hidden = !has;
    if (has) bodyEl.textContent = value;
  }

  function render(ctx) {
    var tut = ctx.tutorial;
    var step = tut.steps[ctx.stepIndex];
    var total = tut.steps.length;
    var n = ctx.stepIndex + 1;

    document.getElementById("lsn-title").textContent = tut.title;
    document.getElementById("lsn-steptitle").textContent = step.title || "";
    document.getElementById("lsn-instruction").textContent = step.instruction || "";

    var detail = document.getElementById("lsn-detail");
    detail.textContent = step.detail || "";
    detail.hidden = !step.detail;

    document.getElementById("lsn-progress").textContent =
      "Step " + n + " of " + total;
    var track = document.getElementById("lsn-progtrack");
    track.innerHTML = "";
    for (var i = 0; i < total; i++) {
      var pipCls = "pip" + (i < n ? " done" : "") + (i === ctx.stepIndex ? " here" : "");
      track.appendChild(el("span", pipCls));
    }

    setCard(
      document.getElementById("lsn-hear-card"),
      document.getElementById("lsn-hear-body"),
      step.expectedSound
    );
    setCard(
      document.getElementById("lsn-check-card"),
      document.getElementById("lsn-check-body"),
      step.checkpoint
    );

    // visual
    var vhost = document.getElementById("lsn-visual");
    vhost.innerHTML = "";
    vhost.appendChild(buildVisual(step));
    // must run after insertion: label geometry is only measurable once laid out
    [].slice.call(vhost.querySelectorAll(".jdxi-canvas")).forEach(function (c) {
      if (c._resolveLabels) resolveLabelCollisions(c);
    });

    // progressive disclosure - both start closed on every step change
    var whyBtn = document.getElementById("lsn-why-btn");
    var whyPanel = document.getElementById("lsn-why-panel");
    whyPanel.textContent = step.whyItMatters || "";
    whyBtn.hidden = !step.whyItMatters;
    closePanel(whyBtn, whyPanel);

    var lostBtn = document.getElementById("lsn-lost-btn");
    var lostPanel = document.getElementById("lsn-lost-panel");
    lostPanel.textContent = step.recoveryHelp || "";
    lostBtn.hidden = !step.recoveryHelp;
    closePanel(lostBtn, lostPanel);

    // navigation
    var back = document.getElementById("lsn-back");
    var next = document.getElementById("lsn-next");
    back.textContent = n === 1 ? "‹ Home" : "‹ Back";
    next.textContent = n === total ? "Return home" : "Next ›";
    next.classList.toggle("finish", n === total);
    document.getElementById("lsn-hint").textContent = step.nextHint || "";
  }

  function closePanel(btn, panel) {
    panel.hidden = true;
    if (btn) btn.setAttribute("aria-expanded", "false");
  }

  function togglePanel(btn, panel, others) {
    var open = panel.hidden;
    (others || []).forEach(function (o) {
      closePanel(o.btn, o.panel);
    });
    panel.hidden = !open;
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  }

  return {
    render: render,
    togglePanel: togglePanel,
    closePanel: closePanel,
    resolveTarget: resolveTarget,
    _pct: pct,
  };
})();
