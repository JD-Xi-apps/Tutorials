/*
 * JD-Xi Tutorial Hub - reusable lesson renderer.
 *
 * Renders one Step of one tutorial-shaped object into the lesson view. It is
 * data-driven: it knows nothing about any particular tutorial, and adding a
 * tutorial must never mean editing this file.
 *
 * Coordinate contract (non-negotiable):
 *   - all hardware geometry comes from window.JDXI_HARDWARE_TARGETS;
 *   - all hardware image metadata (path, natural size, alt) comes from
 *     window.JDXI_HARDWARE_TARGETS.images; the renderer never hardcodes an
 *     image path or a pixel dimension;
 *   - a target's region/zoom are normalized against the image it references
 *     (target.imageId, else the registry defaultImageId), so every crop and
 *     highlight is computed per image;
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

  function registry() {
    return window.JDXI_HARDWARE_TARGETS || { targets: {}, images: {} };
  }

  /* ----------------------------------------------------------------- images */

  /*
   * Resolve an image id to its registry metadata { id, src, width, height,
   * label, alt }, or null when the id is not registered. The id a target uses
   * is target.imageId when present, else the registry defaultImageId.
   */
  function imageIdFor(target) {
    return (target && target.imageId) || registry().defaultImageId || null;
  }

  function imageMeta(imageId) {
    var images = registry().images || {};
    var m = imageId ? images[imageId] : null;
    if (!m || !m.src || !(m.width > 0) || !(m.height > 0)) return null;
    return {
      id: imageId,
      src: m.src,
      width: m.width,
      height: m.height,
      label: m.label || imageId,
      alt: m.alt || "",
    };
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
   * Returns { id, target, imageId, image, state } where state is:
   *   "ok"            - measurable region on a registered image, safe to
   *                     highlight
   *   "off-image"     - real target with no region in any registered image;
   *                     the caller must present an alternate visual
   *   "unknown-image" - the target names an imageId the registry lacks
   *   "unknown"       - id not in the registry
   */
  function resolveTarget(id) {
    var t = registry().targets[id];
    if (!t) return { id: id, target: null, imageId: null, image: null, state: "unknown" };
    if (!t.region) return { id: id, target: t, imageId: null, image: null, state: "off-image" };
    var imageId = imageIdFor(t);
    var image = imageMeta(imageId);
    if (!image) return { id: id, target: t, imageId: imageId, image: null, state: "unknown-image" };
    return { id: id, target: t, imageId: imageId, image: image, state: "ok" };
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

  var EPS = 1e-6;
  function containsRect(outer, inner) {
    return (
      inner.x >= outer.x - EPS &&
      inner.y >= outer.y - EPS &&
      inner.x + inner.width <= outer.x + outer.width + EPS &&
      inner.y + inner.height <= outer.y + outer.height + EPS
    );
  }

  function overlaps(a, b) {
    return !(a.right <= b.left || a.left >= b.right || a.bottom <= b.top || a.top >= b.bottom);
  }

  /*
   * A label must never sit on top of a DIFFERENT highlighted target, nor on
   * another target's label - with targets close together (display +
   * cursorButtons on the top view; cord hook + DC IN + POWER on the narrow
   * rear strip) the default side can land one label straight across the
   * other's control or text. Measured after layout, because the label's
   * height depends on the rendered text.
   *
   * Deterministic, generic and image-independent: labels are processed in DOM
   * order; each successfully placed label becomes an occupied rectangle for
   * every later one. A label only ever chooses between the two sides of its
   * own target (above/below) - never a lateral offset, never a change to the
   * canonical box. If neither side is collision-free the better side is kept
   * (fewer collisions; the original side on a tie) and the case is reported
   * on the console for the fixture QA pass rather than hidden.
   */
  function resolveLabelCollisions(canvas) {
    var labels = [].slice.call(canvas.querySelectorAll(".hl-label"));
    var boxes = [].slice.call(canvas.querySelectorAll(".hl")).map(function (b) {
      return b.getBoundingClientRect();
    });
    var placed = []; // rects of labels already positioned, in DOM order
    labels.forEach(function (lab, i) {
      if (!lab._box) return;
      var hits = function () {
        var r = lab.getBoundingClientRect();
        var n = boxes.filter(function (b, j) {
          return j !== i && overlaps(r, b);
        }).length;
        n += placed.filter(function (p) {
          return overlaps(r, p);
        }).length;
        return n;
      };
      var before = hits();
      if (before) {
        var wasBelow = lab.classList.contains("below");
        placeLabel(lab, lab._box, !wasBelow);
        var after = hits();
        if (after >= before) placeLabel(lab, lab._box, wasBelow); // no better; keep original
        if (Math.min(before, after) > 0 && window.console) {
          console.warn(
            "JDXI renderer: label \"" + lab.textContent + "\" still collides on both sides."
          );
        }
      }
      placed.push(lab.getBoundingClientRect());
    });
  }

  /*
   * Renders the "this target has no measurable place" state instead of
   * inventing a region. No current fixture reaches this, but a step referencing
   * a target with region: null, or a bad imageId, must degrade, not crash.
   */
  function offImageNotice(res) {
    var n = el("div", "offimg");
    var label = res.target ? res.target.label : res.id;
    n.appendChild(el("b", null, label));
    var msg;
    if (res.state === "unknown") msg = "Unknown hardware target — nothing rendered.";
    else if (res.state === "unknown-image")
      msg = "References unregistered image \"" + res.imageId + "\" — nothing rendered.";
    else msg = "No measurable region in any registered hardware image. Needs an alternate visual.";
    n.appendChild(el("span", null, msg));
    return n;
  }

  /*
   * Development/error state for a Step whose measurable targets resolve to
   * more than one hardware image. The renderer neither picks one silently nor
   * crashes: it says so. Real lessons use one Step per image (see
   * docs/LESSON-RENDERER.md, same-image constraint).
   */
  function mixedImageNotice(measurable) {
    var n = el("div", "mixedimg");
    n.appendChild(el("b", null, "Mixed-image step — unsupported by the current renderer"));
    var parts = measurable.map(function (r) {
      return r.id + " → " + r.imageId;
    });
    n.appendChild(
      el(
        "span",
        null,
        "All measurable hardware targets in one Step must resolve to the same image. Got: " +
          parts.join(", ") +
          ". Split the instruction into one Step per image."
      )
    );
    return n;
  }

  /* --------------------------------------------------------- hardware image */

  /*
   * The full hardware image (top view, rear panel, ...) with highlights drawn
   * in that image's own normalized coordinate system. `image` is resolved
   * registry metadata; the canvas takes the image's true natural aspect so
   * nothing is ever stretched to another view's shape.
   */
  function buildHardwareImage(image, resolved, opts) {
    opts = opts || {};
    var canvas = el(
      "div",
      "jdxi-canvas img-" + image.id + (opts.small ? " small" : "")
    );
    canvas.style.aspectRatio = image.width + " / " + image.height;

    var img = new Image();
    img.className = "jdxi-img";
    img.src = image.src;
    img.alt = opts.decorative ? "" : image.alt;
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
   * Exact normalized crop, generated at runtime from the referenced hardware
   * image. No derivative image files are created or committed.
   *
   * The frame is given the crop's true pixel aspect ratio (using that image's
   * natural dimensions), then the full image is scaled so the crop exactly
   * fills the frame:
   *
   *   scaled image width  = frame width  / zoom.width
   *   scaled image height = frame height / zoom.height
   *   offset              = -zoom.x, -zoom.y in that scaled space
   *
   * Percentage left/top resolve against frame width/height respectively, so the
   * mapping stays exact at any rendered size.
   */
  function buildCrop(image, zoom, resolved, opts) {
    opts = opts || {};
    var frame = el("div", "crop-frame" + (opts.extraClass ? " " + opts.extraClass : ""));
    frame.style.aspectRatio = zoom.width * image.width + " / " + zoom.height * image.height;

    var inner = el("div", "crop-inner");
    var img = new Image();
    img.className = "crop-img";
    img.src = image.src;
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

    /*
     * Same-image rule: every measurable target in a Step must live on one
     * hardware image. Mixed steps get an explicit notice, never a guess.
     */
    var imageIds = [];
    measurable.forEach(function (r) {
      if (imageIds.indexOf(r.imageId) < 0) imageIds.push(r.imageId);
    });
    if (imageIds.length > 1) {
      host.classList.add("vis-mixed");
      host.appendChild(mixedImageNotice(measurable));
      problems.forEach(function (res) {
        host.appendChild(offImageNotice(res));
      });
      return host;
    }

    // With no measurable target the default image still provides the anchor.
    var image = measurable.length
      ? measurable[0].image
      : imageMeta(registry().defaultImageId);
    if (!image) {
      host.appendChild(offImageNotice({ id: "(default image)", target: null, imageId: registry().defaultImageId, state: "unknown-image" }));
      return host;
    }
    host.classList.add("vis-img-" + image.id);

    // Prefer the first measurable target's zoom for inset/close-up modes.
    var zoomSource = measurable.filter(function (r) {
      return r.target.zoom;
    })[0];
    /*
     * Every measurable Step target whose region lies fully inside the chosen
     * crop is highlighted in the crop - not only the target that supplied the
     * zoom. Containment in normalized image coordinates governs; targets need
     * not share a zoom object. Targets outside the crop stay on the full view
     * only. Tolerance covers 4-decimal registry rounding at the crop edge.
     */
    var cropTargets = zoomSource
      ? measurable.filter(function (r) {
          return containsRect(zoomSource.target.zoom, r.target.region);
        })
      : [];

    switch (step.visualMode) {
      case "full-plus-inset": {
        var stackA = el("div", "vis-stack");
        stackA.appendChild(buildHardwareImage(image, measurable));
        if (zoomSource) {
          var insetWrap = el("div", "inset-wrap");
          insetWrap.appendChild(el("div", "vis-cap", "Magnified"));
          insetWrap.appendChild(
            buildCrop(image, zoomSource.target.zoom, cropTargets, { extraClass: "inset" })
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
            buildCrop(image, zoomSource.target.zoom, cropTargets, { extraClass: "dominant" })
          );
          main.appendChild(framed);
          wrapB.appendChild(main);
        }
        var ctx = el("div", "closeup-ctx");
        ctx.appendChild(el("div", "vis-cap", "Where this is"));
        ctx.appendChild(
          buildHardwareImage(image, measurable, {
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
          dwrap.appendChild(buildCrop(image, dz.target.zoom, measurable, { extraClass: "inset" }));
          top.appendChild(dwrap);
        }
        stackC.appendChild(top);
        stackC.appendChild(buildHardwareImage(image, measurable));
        host.appendChild(stackC);
        break;
      }

      case "full":
      default:
        host.appendChild(buildHardwareImage(image, measurable));
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
    setBadge(!!ctx.canonical, tut);
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
    /*
     * The last step's forward button depends on whether the guided path
     * continues. The renderer does not look that up - the caller resolves it
     * (ctx.nextTutorial) so this file still knows nothing about any
     * particular tutorial, and a lesson with no follow-on simply finishes.
     * Either way the last step keeps the completion styling.
     */
    next.textContent =
      n === total ? (ctx.nextTutorial ? "Next tutorial ›" : "Return home") : "Next ›";
    next.classList.toggle("finish", n === total);
    document.getElementById("lsn-hint").textContent = step.nextHint || "";
  }

  /*
   * Lesson badge. The caller says whether it is rendering a canonical
   * tutorial (ctx.canonical) or a development fixture (default). A fixture
   * keeps the exact development-warning text and styling; a canonical
   * tutorial shows its level and guided-path position, derived from the
   * Tutorial object - nothing tutorial-specific lives here.
   */
  function setBadge(canonical, tut) {
    var badge = document.getElementById("lsn-badge");
    if (!badge) return;
    badge.classList.toggle("canonical", canonical);
    if (!canonical) {
      badge.textContent = "DEVELOPMENT FIXTURE — NOT A TUTORIAL";
      return;
    }
    var parts = [];
    if (tut.level) parts.push(String(tut.level).toUpperCase());
    if (tut.order != null) parts.push("TUTORIAL " + tut.order);
    badge.textContent = parts.join(" \u2022 ");
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
    resolveImage: imageMeta,
    _pct: pct,
  };
})();
