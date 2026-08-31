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
| `js/tutorials.js` | `window.JDXI_TUTORIALS` — canonical learner-facing tutorials (B01, B02, N01). Source record per tutorial in `docs/tutorials/`. |
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
launched from the home screen's Beginner tile; **`#tutorial/B02`** (B02 *Get your
first sound*, 11 steps) follows it. Tutorials use the same renderer and the same Step
shape as the fixtures; nothing tutorial-specific lives in `lesson-renderer.js`.

`#tutorial/N01` (N01 *Learn the menu controls*, 15 steps) is the first Novice
tutorial, launched from the home screen's Novice tile.

B01 is a silent orientation tour. **B02 is the first canonical tutorial that
describes real JD-Xi operation** — connections, Roland's power-on order, part
selection and listening level — and every claim in it is reconciled against official
documentation in `docs/tutorials/B02-SOURCE-NOTES.md`. **N01 is the first canonical
tutorial to navigate menus and to author `expectedDisplay`**; its record is
`docs/tutorials/N01-SOURCE-NOTES.md`. Neither changes anything in this file: the
renderer has no notion of whether a step is an operating procedure, and no notion of
where a display string came from.

Development fixtures remain the exception in the other direction. No fixture step
describes a real JD-Xi operation; the display preview text is synthetic and labelled
as such, and the rear fixture steps are location tests only — they never tell the
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
| `display-focus` | Display preview plus a "Where this is" crop, over the whole instrument with the display and the step's navigation controls highlighted. |

### The containment rule is shared by every crop

`containedIn(zoom, targets)` returns the Step targets whose canonical region lies
fully inside a crop, and **every mode that draws a crop uses it**. A crop can
therefore never carry a highlight for a control it does not contain: a target outside
the crop appears on the full view only.

`display-focus` was the exception until this phase — it handed *all* measurable
targets to the display crop, so an out-of-crop target produced a highlight positioned
outside the frame and silently clipped by `overflow: hidden`. No fixture step reached
that path, so fixture rendering is unchanged; N01 has steps that do.

The `display-focus` context caption reads **Where this is**, the same caption
`control-closeup` gives its context view. Both are location views, and beside a
preview of the screen the learner *should* see, a photograph whose own display shows
something else must not read as a second expectation.

## Display states

`expectedDisplay` is an array of display lines. Three Step fields govern how it is
presented; none of them is tutorial-specific, and the renderer never composes a
display state of its own.

| Field | Effect |
|---|---|
| `expectedDisplay` | The lines. Rendered as the preview in `display-focus`, and as an **On the display** card in the instruction column in every other visual mode. |
| `syntheticDisplay` | Defaults to true. A truthy value adds the **Synthetic placeholder — not real JD-Xi output** badge. Set `false` for a screen reproduced from Roland's own documentation. |
| `displayNote` | Optional caption stating where the screen came from and what varies between instruments. Shown under the preview, and under the card. |

Two rules this implements:

- **The field is never silently dropped.** It used to render only in `display-focus`;
  any other mode discarded it, which for a menu lesson loses the learner's only
  confirmation signal. The card is chosen by visual mode, never by tutorial.
- **Documented spacing survives.** Both display surfaces set `white-space: pre`.
  Without it HTML collapses runs of spaces, and Roland's top screen
  (`A64   1-1    120`) renders as `A64 1-1 120`. The fixture strings contain no
  repeated spaces and are unaffected.

Whether a screen may be shown at all is a **content** rule, not a renderer one:
a step may reproduce a screen Roland illustrates, and may never compose one. See
`docs/tutorials/N01-SOURCE-NOTES.md`, *Display strings*.

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

### Wide crops are clamped, not overflowed

A crop's natural size in an inset is *the mode's height times the crop's own aspect*.
Most canonical crops are near-square, so that is unremarkable — but some are extreme
strips. The Favorite and step-button row is **1630 × 200 source pixels, an aspect of
8.15:1**, which at the inset height of 196 px wants to be **1597 px wide** in a column
roughly 640 px across. Before this was handled, the three steps that magnify that row
(`B03-S11`, `B03-S12`, `B08-S08`) pushed the crop 320 px past each side of the card.

The fix is generic and lives in the stylesheet, not in the renderer's logic:

- `buildCrop()` publishes the crop's aspect as a custom property,
  `--crop-aspect`, alongside the `aspect-ratio` it already set. It is a **ratio, not a
  coordinate** — no geometry leaves the registry, and no step or stylesheet gains a
  measurement;
- the stacked `full-plus-inset` layout gives the inset wrapper a definite width, and
  sizes the crop `width: min(100%, calc(<mode height> * var(--crop-aspect)))` with
  `height: auto`, so height stays derived from `aspect-ratio` and the crop is never
  stretched. A crop that fits is unaffected; a crop that does not loses height instead
  of overflowing.

**Scope matters here.** The clamp is applied only to the stacked layout
(`.vis-stack > .inset-wrap > .crop-frame.inset`). In `display-focus` the inset sits in
a row beside the display preview, where the wrapper is shrink-to-fit and a percentage
width has nothing to resolve against — applying the clamp there collapsed the display
crop from 191 × 196 to 83 × 85. That was caught by the frozen-surface comparison, and
the rule was narrowed rather than the symptom patched.

One bounded consequence is recorded rather than hidden: because the clamped rule
derives height from `aspect-ratio` instead of taking it as a literal, an inset computes
**339.984 px where it previously computed 340 px** (measured against the parent commit).
That 0.016 px re-samples a thin band along one edge of the crop. Across the frozen
surfaces it accounts for every difference except the intended guided-next button:

| Engine | Affected frozen surfaces | Worst case |
|---|---|---|
| Chromium | `B02` step 2 | 988 px, 0.08% of the frame |
| Firefox | `B02` steps 2, 3, 7, 9 | 1187 px, 0.09%; the other three are **2 px each** |

The two engines round sub-pixel layout differently, which is why the affected set is not
identical; the cause is the same in both. It is invisible at any rendered size, and it is
the unavoidable cost of deriving the height — which is exactly what keeps a clamped crop
undistorted rather than stretched.

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
from a tutorial's step 1 goes to `#home`; Back from step 2 goes to `#tutorial/<id>`.

### Guided next tutorial

The last step's forward button depends on whether the guided path continues.
`js/app.js` resolves the follow-on generically — **the canonical tutorial in the same
`level` whose `order` is one greater** — and hands it to `render()` as
`ctx.nextTutorial`:

| Last step of | `ctx.nextTutorial` | Button | Destination |
|---|---|---|---|
| a tutorial with a same-level successor | that tutorial | **Next tutorial ›** | `#tutorial/<successor id>` |
| a tutorial with none | `null` | **Return home** | `#home` |
| a development fixture | `null` (fixtures have no guided position) | **Return home** | `#home` |

Either way the last step keeps the `.finish` completion styling.

Nothing is hardcoded per tutorial, in `app.js` or here.

**This has now been demonstrated.** The line that stood here predicted that adding B03
to `js/tutorials.js` would give B02 a **Next tutorial ›** button with no edit to B02
and no router change. Authoring B03–B10 did exactly that: B02's last step changed from
**Return home** to **Next tutorial ›** → B03, and the whole Beginner chain B01 → B10
resolved, with no change to `app.js`, to this renderer, or to any earlier tutorial's
data. It was the single intended difference the frozen-surface comparison reported.

B10's and N10's last steps offer **Return home**, because each is order 10 with no
successor. N01's changed to **Next tutorial ›** when N02 was authored, by the same
generic rule and with no edit to N01.

The renderer performs no catalog lookup of its own. It is told what follows; it does
not go and find out. That keeps the "adding a tutorial must not mean editing the
renderer" invariant intact.

Adding N01 exercised that: N01 is `novice` order 1 with no successor, so its last step
offers **Return home**, and B01's and B02's guided-path behaviour is untouched because
a novice tutorial is not a beginner successor. No router or renderer edit was needed
for the new tutorial itself — only the Novice tile gained `data-route="#tutorial/N01"`
in `index.html`.

## Deferred

- further tutorial content (I01 onward) — requires Roland-source verification first.
  **The Beginner and Novice paths are complete**: B01–B10 and N01–N10 are authored,
  each with source notes in `docs/tutorials/`;
- the rest of the production route catalog (levels, topics, favorites, progress);
- progress persistence;
- exact display character dimensions (source-map Q4) — hence a labelled preview, not an
  emulator. The preview is a presentation surface: it will render whatever lines a step
  supplies, and it is content review, not the renderer, that keeps invented screens out
  of it;
- Steps that mix hardware images (same-image constraint above);
- rear connectors beyond those a canonical tutorial has needed (B02 uses OUTPUT and
  PHONES; the rest of the OM p.3 strip is registered but unused by any tutorial);
- Favorites, My Progress, Settings views.
