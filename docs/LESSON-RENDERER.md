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
| `js/tutorials.js` | `window.JDXI_TUTORIALS` — canonical learner-facing tutorials (currently B01). Source record per tutorial in `docs/tutorials/`. |
| `js/tutorial-fixtures.js` | Development fixture only. No canonical content. |
| `js/lesson-renderer.js` | `window.JDXI_LESSON_RENDERER` — builds the lesson view from a Step. |
| `js/app.js` | Stage fitting (unchanged) plus the hash router. |
| `index.html` | Both views inside the one stage; static lesson skeleton the renderer fills. |
| `css/app.css` | Lesson styles appended below a banner. Nothing above it was modified. |

Load order matters and is fixed in `index.html`: registry → tutorials → fixtures →
renderer → app.
Classic scripts only — no modules, no `fetch`, no bundler, no network. The app runs
from `file://`.

## Development fixtures

| Fixture id | Route | Purpose |
|---|---|---|
| `renderer-demo` | `#dev/lesson-renderer/step/1` … `/step/4` | Top-view suite: one step per visual mode. The regression baseline for the top image. |
| `rear-panel-demo` | `#dev/rear-panel/step/1` … `/step/6` | Complete rear-panel visual verification tour: orientation (`rearPanel`, `full`), then the power, computer/MIDI, input, output and utility clusters (`full-plus-inset`, several same-image targets per step). |

Both ids are deliberately outside the canonical `B##`/`N##`/`I##` scheme, so they
cannot be mistaken for a tutorial or picked up by the guided path or a collection.

## Lesson badge

The badge above the lesson title (`#lsn-badge`) is renderer-aware. The router tells
`render()` whether it is drawing a canonical tutorial (`canonical: true`) or a
development fixture (default). A fixture keeps the exact **DEVELOPMENT FIXTURE — NOT
A TUTORIAL** text and warning styling; a canonical tutorial shows its level and
guided-path position derived from the Tutorial object (B01 → **BEGINNER • TUTORIAL
1**) with the `.canonical` modifier. Fixture rendering is pixel-identical to before the
badge became dynamic.

## Canonical tutorials

`js/tutorials.js` holds the real tutorials, keyed by permanent ID. The first
production canonical route is **`#tutorial/B01`** (B01 *Meet your JD-Xi*, 10 steps),
launched from the home screen's Beginner tile. Tutorials use the same renderer and
the same Step shape as the fixtures; nothing tutorial-specific lives in
`lesson-renderer.js`.

No step describes a real JD-Xi operation; the display preview text is synthetic and
labelled as such, and the rear steps are location tests only — they never tell the
learner to power the instrument on or off, connect, ground, or set up anything.

## Data flow

```
Step.hardwareTargets: ["menuWriteButton"]
        |
        v
window.JDXI_HARDWARE_TARGETS.targets.menuWriteButton
        |  .imageId  (absent -> registry.defaultImageId, i.e. "top")
        |  .region   { x, y, width, height }  normalized 0..1 within that image
        |  .zoom     { x, y, width, height }  normalized 0..1 within that image
        v
window.JDXI_HARDWARE_TARGETS.images[imageId]
        |  .src .width .height .label .alt
        v
renderer converts normalized -> CSS percentage, once, in one place
        v
overlay positioned inside the image-relative coordinate container
```

`resolveTarget(id)` returns `{ id, target, imageId, image, state }` with state `ok`,
`off-image` (region null), `unknown-image` (imageId not in the registry), or `unknown`
(id not in the registry). `resolveImage(imageId)` returns the image metadata or null.
Nothing else in the renderer touches the registry.

## Image resolution

The renderer holds **no image path and no pixel dimension**. Every hardware image —
the top view and the rear panel alike — is described once in
`JDXI_HARDWARE_TARGETS.images` and resolved from there:

1. resolve every id in `hardwareTargets[]`;
2. each measurable target's image is `target.imageId`, else `defaultImageId`;
3. the image's `src`, `width`, `height` and `alt` come from `images[imageId]`;
4. the full view and every crop are drawn in that image's coordinate system.

The full-view canvas takes the image's own natural aspect (`width / height`), so the
2520 × 371 rear strip is never stretched to the top view's shape. The renderer tags the
visual host with `vis-img-<imageId>` and each canvas with `img-<imageId>`; CSS adapts
layout per image, never per target (for the rear strip: full column width, a taller
inset, wider stack gap).

Renderer output is a pure function of the registry: the Phase 5A re-measurement of four
section boxes and `masterVolumeKnob` (HARDWARE-TARGETS §8) changed
`#dev/lesson-renderer/step/3`, which renders `effectsSection` as a close-up. That is the
coordinate rule working as intended — a corrected box fixes every view at once — not a
renderer change. The other nine fixture steps stay byte-identical.

### Same-image constraint (current renderer)

All **measurable** targets in one Step must resolve to the same image id. That is a
constraint of this renderer, not of the registry. A Step mixing images (say
`powerSwitch` + `menuWriteButton`) does not crash and does not silently pick one image:
it renders an explicit *Mixed-image step — unsupported* notice listing each target and
its image. Real lessons use one Step per image, which is the better instruction anyway.

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
| `full-plus-inset` | Whole instrument plus a runtime-generated magnified inset; every Step target is highlighted on the full view, and every Step target whose region lies inside the crop is highlighted in the inset. |
| `control-closeup` | Crop dominates (highlighting every Step target inside it, as above); a small context view of the whole instrument shows where the crop came from, outlined. |
| `display-focus` | Display preview plus an "on the instrument" crop, over the whole instrument with display and navigation controls highlighted. |

## Crop generation

Insets and close-ups are generated **at runtime from the referenced hardware image**.
No cropped derivative files exist or are committed.

Given a normalized `zoom` and the resolved image's natural `image.width` /
`image.height`, the frame takes the crop's true pixel aspect ratio and the image is
scaled so the crop exactly fills it — the same formulas for every image:

```
frame aspect  = (zoom.width * image.width) / (zoom.height * image.height)
image width   = 100 / zoom.width   %      (of frame width)
image height  = 100 / zoom.height  %      (of frame height)
image left    = -(zoom.x / zoom.width)  * 100 %
image top     = -(zoom.y / zoom.height) * 100 %
```

The crop is the first measurable target's `zoom`. It highlights **all** measurable Step
targets whose regions are fully contained in that crop (normalized containment, 1e-6
tolerance) — not only the target that supplied the zoom — so a cluster step such as
cord hook + DC IN + POWER shows all three magnified. Targets outside the crop appear on
the full view only. Crops carry no labels; the full view is the labelled orientation
view. A target highlighted inside a crop is converted to crop-relative coordinates:

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
top edge. After layout, `resolveLabelCollisions()` re-measures every label in DOM order
and flips any that landed across a *different* highlighted target **or across an
already-placed label** — with targets close together (display and cursor buttons on
the top view; cord hook, DC IN and POWER on the narrow rear strip) the default side can
otherwise put one label straight over the other's control or text. Each placed label
becomes an occupied rectangle for the labels after it. A flip is kept only if it reduces
collisions; a label never moves laterally and never changes its target's box. If neither
side is clear, the better side is kept and a `console.warn` names the label so the
fixture QA pass sees it. Known residual cases on the rear strip: three adjacent labels
(step 2) leave *Cord hook* and *POWER switch* touching edge-to-edge, and *USB COMPUTER
port* (step 3) grazes the corner of the MIDI group box — both fully readable.

Labels are placed outside a dominant close-up crop as a caption, because a label
positioned inside the crop is clipped by the frame's `overflow: hidden`.

## Off-image, unknown and bad-image targets

The renderer **never invents a region**. A registry entry with `region: null` resolves
to state `off-image` and renders an explicit notice that an alternate visual is
required (no current target is in that state — `powerSwitch` and `dcInJack` moved to
the rear image in Phase 4C). Unknown ids resolve to `unknown`, and a target naming an
unregistered `imageId` resolves to `unknown-image`; each renders a notice rather than
throwing. No fixture step reaches these paths; all three are covered by test.

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
| `#tutorial/<id>` | Canonical tutorial `<id>` (resolved in `window.JDXI_TUTORIALS`), step 1 |
| `#tutorial/<id>/step/<n>` | Canonical tutorial, step *n* |
| `#dev/lesson-renderer/step/1..4` | Top-view fixture step |
| `#dev/rear-panel/step/1..6` | Rear-panel fixture step |
| out-of-range step (tutorial or fixture) | replaced with step 1 (`#tutorial/<id>` / fixture step 1) |
| unknown tutorial id, `#tutorial/<id>/anything-else`, anything else | replaced with `#home` |

The router is generic: a new canonical tutorial needs only an entry in
`js/tutorials.js`. Development fixture routes stay separate and unchanged.

Fallbacks use `location.replace`, so a bad URL does not become a history entry. Next
and Back write the hash, so browser history follows step navigation naturally. Back
from a tutorial's step 1 goes to `#home`; Back from step 2 goes to `#tutorial/<id>`;
the last step's Next returns home.

## Deferred

- further tutorial content (B02 onward) — requires Roland-source verification first;
- the rest of the production route catalog (levels, topics, favorites, progress);
- progress persistence;
- exact display character dimensions (source-map Q4) — hence a labelled preview, not an
  emulator;
- Steps that mix hardware images (same-image constraint above);
- rear connectors beyond POWER and DC IN — added to the registry only when a canonical
  tutorial needs them;
- Favorites, My Progress, Settings views.
