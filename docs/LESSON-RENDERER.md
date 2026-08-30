# Lesson renderer — implementation note

Implementation detail for the reusable lesson renderer. The *design* lives in
[`TUTORIAL-ARCHITECTURE.md`](TUTORIAL-ARCHITECTURE.md); this file does not repeat it.

## Purpose

One renderer draws every tutorial. Tutorials are data: adding one must never mean
writing a screen. The renderer knows about the Step shape and the hardware-target
registry, and about nothing else.

## Files

| File | Role |
|---|---|
| `js/hardware-targets.js` | Canonical target registry. **Loaded, never edited by the renderer.** |
| `js/tutorial-fixtures.js` | Development fixture only. No canonical content. |
| `js/lesson-renderer.js` | `window.JDXI_LESSON_RENDERER` — builds the lesson view from a Step. |
| `js/app.js` | Stage fitting (unchanged) plus the hash router. |
| `index.html` | Both views inside the one stage; static lesson skeleton the renderer fills. |
| `css/app.css` | Lesson styles appended below a banner. Nothing above it was modified. |

Load order matters and is fixed in `index.html`: registry → fixtures → renderer → app.
Classic scripts only — no modules, no `fetch`, no bundler, no network. The app runs
from `file://`.

## Development fixture

Route: `#dev/lesson-renderer/step/1` … `/step/4`.

Id `renderer-demo` is deliberately outside the canonical `B##`/`N##`/`I##` scheme, so
it cannot be mistaken for a tutorial or picked up by the guided path or a collection.
The lesson view carries a permanent **DEVELOPMENT FIXTURE — NOT A TUTORIAL** badge.

Four steps, one per visual mode. No step describes a real JD-Xi operation; the display
preview text is synthetic and labelled as such.

## Data flow

```
Step.hardwareTargets: ["menuWriteButton"]
        |
        v
window.JDXI_HARDWARE_TARGETS.targets.menuWriteButton
        |  .region  { x, y, width, height }  normalized 0..1
        |  .zoom    { x, y, width, height }  normalized 0..1
        v
renderer converts normalized -> CSS percentage, once, in one place
        v
overlay positioned inside the image-relative coordinate container
```

`resolveTarget(id)` returns `{ id, target, state }` with state `ok`, `off-image`, or
`unknown`. Nothing else in the renderer touches the registry.

## Coordinate rules

- Normalized values become percentages **only** in `lesson-renderer.js`.
- No coordinate appears in a fixture, a step, or a stylesheet.
- A highlight is never nudged to look better. A wrong-looking box means the registry
  is wrong, and the registry is what gets corrected.
- Every overlay is a child of the image-relative container, so attachment survives any
  rendered size. Verified: highlight centre drifts `0.00002` normalized across a 1.92×
  canvas size range.

## Visual modes

| Mode | Composition |
|---|---|
| `full` | Whole instrument, target highlighted, label attached. |
| `full-plus-inset` | Whole instrument plus a runtime-generated magnified inset; the target is highlighted in both. |
| `control-closeup` | Crop dominates; a small context view of the whole instrument shows where the crop came from, outlined. |
| `display-focus` | Display preview plus an "on the instrument" crop, over the whole instrument with display and navigation controls highlighted. |

## Crop generation

Insets and close-ups are generated **at runtime from the master image**. No cropped
derivative files exist or are committed.

Given a normalized `zoom`, the frame takes the crop's true pixel aspect ratio and the
master is scaled so the crop exactly fills it:

```
frame aspect  = (zoom.width * 3153) / (zoom.height * 1339)
image width   = 100 / zoom.width   %      (of frame width)
image height  = 100 / zoom.height  %      (of frame height)
image left    = -(zoom.x / zoom.width)  * 100 %
image top     = -(zoom.y / zoom.height) * 100 %
```

A target highlighted inside a crop is converted to crop-relative coordinates:

```
cropX = (target.x - zoom.x) / zoom.width
cropY = (target.y - zoom.y) / zoom.height
cropW =  target.width  / zoom.width
cropH =  target.height / zoom.height
```

**The crop frame must not carry a real CSS border.** A border shrinks the content box,
so the crop would map onto `(W-2) x (H-2)` and be exact only to within a border width.
The hairline is drawn with an inset `box-shadow` instead, leaving the mapping exact —
measured scale ×1.0000, max positional delta `0.0001`.

## Highlights and labels

Border, translucent fill and a soft glow — the hardware underneath always stays
visible. The label is derived from the target's `label` and sits outside the box, so it
never covers the control it names.

Side is chosen automatically: above by default, below when the target sits too near the
top edge. After layout, `resolveLabelCollisions()` re-measures and flips any label that
landed across a *different* highlighted target — with two targets close together
(display and cursor buttons, say) the default side can otherwise put one label straight
over the other's control. A flip is kept only if it reduces collisions.

Labels are placed outside a dominant close-up crop as a caption, because a label
positioned inside the crop is clipped by the frame's `overflow: hidden`.

## Off-image targets

Some registry entries (`powerSwitch`, `dcInJack`) have `region: null` — they are not
visible in the top view. The renderer **never invents a region**. It resolves them to
state `off-image` and renders an explicit notice that an alternate visual is required.
Unknown ids resolve to `unknown` and render a notice rather than throwing. No current
fixture step reaches either path; both are covered by test.

## View switching

`.shell` and `.lesson` both set `display: grid`. An author class rule beats the UA
`[hidden]` rule at equal specificity, so hiding a view needs an explicit
higher-specificity rule:

```css
#view-home[hidden], #view-lesson[hidden] { display: none; }
```

Without it **both views render**, with the lesson clipped below the fold — which looks
correct on the home screen and is not.

## Routing

Hash routing, so direct links and Back/Forward work from `file://` with no server.

| Route | Result |
|---|---|
| *(empty)*, `#home` | Home |
| `#dev/lesson-renderer/step/1..4` | Fixture step |
| out-of-range step | replaced with step 1 |
| anything else | replaced with `#home` |

Fallbacks use `location.replace`, so a bad URL does not become a history entry. Next
and Back write the hash, so browser history follows step navigation naturally.

## Deferred

- real tutorial content (B/N/I) — requires Roland-source verification first;
- the production route catalog (levels, topics, canonical tutorials);
- progress persistence;
- exact display character dimensions (source-map Q4) — hence a labelled preview, not an
  emulator;
- a rear-panel visual for off-image targets;
- Favorites, My Progress, Settings views.
