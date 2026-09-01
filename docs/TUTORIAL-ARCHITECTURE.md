# JD-Xi Tutorial Hub — Tutorial Architecture

This document is the authoritative design for the tutorial/lesson **structure** — models
and rules. It is **not** an implementation, and it deliberately contains **no JD-Xi
operating procedures**.

> **It is no longer the authority on what a tutorial is *about*.**
> [`PRODUCT-CURRICULUM-MASTER-PLAN.md`](PRODUCT-CURRICULUM-MASTER-PLAN.md) is the
> owner-approved v1 product and curriculum baseline, and it outranks this file on
> product scope, per-tutorial instructional ownership, exclusions, and which supporting
> surfaces v1 ships. Where this document's prose disagrees with it — §4's path sketch and
> §5's collection notes both predate it — **the master plan wins**. This file continues to
> govern the models those tutorials are expressed in.

Companion documents, in authority order:

1. [`PRODUCT-CURRICULUM-MASTER-PLAN.md`](PRODUCT-CURRICULUM-MASTER-PLAN.md) — v1 product
   scope, curriculum ownership, exclusions, supporting surfaces.
2. Official Roland documentation — factual behaviour and procedure. Nothing in the master
   plan overrides a Roland fact; the plan decides *what is taught*, Roland decides *what is
   true*.
3. [`ROLAND-SOURCE-MAP.md`](ROLAND-SOURCE-MAP.md) — which Roland page governs which
   procedure.
4. This file — architecture, where consistent with the master plan.
5. [`DESIGN-RULES.md`](DESIGN-RULES.md) — owner-approved visual and interaction baseline.
   Where it and this file overlap, DESIGN-RULES governs presentation and this file governs
   content structure.

## 1. Status and scope

The home-screen visual baseline is complete and frozen. This phase adds architecture
only. Nothing here changes `index.html`, `css/app.css`, `js/app.js`, or the master
image.

Deferred to later phases, by explicit decision: routing, lesson screens, progress
storage, and all tutorial content. Hardware-target coordinates, deferred by this
phase, have since been measured — the canonical registry is `js/hardware-targets.js`
(see §8).

## 2. The learner

Assume a person who:

- has never used a synthesizer;
- has no music-theory knowledge — no notes, scales, chords, or intervals;
- has no keyboard technique;
- learns by looking, touching, and listening.

They must be able to succeed without first learning terminology.

### Teaching loop

Every step follows the same shape:

> **Do something → see what changed → hear what changed → optionally learn why.**

Consequences that bind the rest of this document:

- Primary instructions use plain language. A step must be actionable by someone who
  does not yet know what the words on the panel mean.
- Terminology is introduced only *after* the learner has had a concrete experience to
  attach it to. Never before.
- "Why" is always secondary and always optional. It never blocks progress.
- Success is defined by what the learner sees and hears, not by whether they can name
  what happened.

## 3. Architecture invariants

These are the load-bearing rules. Changing any of them is a redesign, not a revision.

1. **One canonical tutorial content object; many ways to discover it.** Content exists
   exactly once. Guided levels, topic collections, Favorites, challenges, and
   recommended-next lists are all *references*, never copies.
2. **One reusable lesson renderer; tutorials are primarily data.** Adding a tutorial
   must not mean writing a new screen.
3. **One reusable hardware-target registry.** Tutorials reference target IDs. The
   registry may hold more than one hardware image (top view, rear panel); each target
   names the image it lives on.
4. **Hardware geometry is image-relative**, normalized within the coordinate system of
   the image the target references — the authoritative 3153 × 1339 top-view master by
   default. Never stage-space pixels.
5. **The full instrument is the normal visual anchor.** Zoomed views are the exception
   and must earn their place.
6. **Menu navigation is unusually explicit.** For beginners, "open the settings" is a
   failure; the exact controls and display states are the instruction.
7. **Hearing and doing come before theory.**
8. **"Why" content is secondary and optional.**
9. **No scrolling within the overall page.** The 1440 × 900 fixed stage scales to fit.
10. **Technical procedures require Roland-source verification** (see §13).

## 4. Canonical learning path

Three level groups, thirty canonical tutorials. IDs are stable and permanent; titles
below are **architectural working titles**, not final student-facing copy.

An ID, once assigned, is never reused for different content and never renumbered — it
is the key that collections, progress records, and deep links all resolve against.

### Beginner — Get comfortable with the JD-Xi

| ID | Working title | Intent |
|----|---------------|--------|
| B01 | Meet your JD-Xi | Identify the major areas; establish the visual map. |
| B02 | Get your first sound | Volume, choose a playable part/sound, press keys, immediate success. |
| B03 | Find sounds you like | Audition and select by ear, with no category or synthesis knowledge required. |
| B04 | Meet the four parts | Digital Synth 1, Digital Synth 2, Analog Synth, Drums as four sound-making sections. |
| B05 | Play with the keys | Lower/higher, short/long, repeated notes — listening, not theory. |
| B06 | Change the sound with knobs | First ear-driven manipulation of obvious realtime controls. |
| B07 | Add effects | Hear space and character change, without signal-processing theory first. |
| B08 | Play a pattern | Start and stop an existing pattern; experience the sequencer before creating one. |
| B09 | Change the feel | Basic tempo/groove experimentation, where technically appropriate. |
| B10 | First 15-minute challenge | Find sounds, play keys, alter controls, play a pattern; demonstrate basic comfort. |

### Novice — Start building things

| ID | Working title | Intent |
|----|---------------|--------|
| N01 | Learn the menu controls | Cursor, Value, Enter, Exit, Menu/Write, Shift, and display navigation. |
| N02 | Understand programs and parts | How the JD-Xi organizes a complete setup, without overwhelming terminology. |
| N03 | Sequencer basics | The step buttons and pattern structure. |
| N04 | Make a simple drum beat | First authored rhythmic content. |
| N05 | Make a simple bass line | First authored pitched content. |
| N06 | Combine parts in a pattern | Arranging multiple JD-Xi parts together through a pattern. Deliberately not "layer sounds": only one part is playable from the keys at a time (ROLAND-SOURCE-MAP Q9). |
| N07 | Try the arpeggiator | Automatic note generation as an ear-first experience. |
| N08 | Edit a sound more deliberately | Move from happy accidents to intent. |
| N09 | Save your work | Persistence; the first genuinely destructive-risk operation. |
| N10 | Getting unstuck | Recovery, backing out of menus, unexpected sound or state, beginner-safe troubleshooting. |

### Intermediate — Design and perform

| ID | Working title | Intent |
|----|---------------|--------|
| I01 | Build a bass sound | Directed sound design with a concrete target. |
| I02 | Build a pad sound | Sustained, evolving textures. |
| I03 | Build a lead sound | Foreground, expressive voicing. |
| I04 | Filter and envelope shaping | The two most transferable shaping tools, now named. |
| I05 | LFO and movement | Modulation as motion. |
| I06 | Effects and space | Effects revisited with intent rather than by ear alone. |
| I07 | Build a multi-part program | Assemble parts into one coherent setup. |
| I08 | Build a fuller pattern | Extend sequencing beyond a single line. |
| I09 | Save and organize creations | Managing a growing personal library. |
| I10 | Performance challenge | Assemble, save, and play a complete personalized setup. |

### Open question for the PM

Beginner and Intermediate each end in a challenge (B10, I10). Novice ends in N10
*Getting unstuck*, which is troubleshooting rather than a capstone. The guided path is
therefore asymmetric, and the "Mini challenges" collection has no Novice entry. This
is recorded as an observation, not resolved here — adding or renumbering a Novice
capstone is a product decision.

## 5. À-la-carte organization

A canonical tutorial may simultaneously belong to:

- exactly **one** guided level (its `level` + `order`);
- **any number** of topic collections;
- the learner's **Favorites**;
- one or more **challenge sequences**;
- one or more **recommended-next** lists.

None of these duplicate content. A collection is an ordered list of tutorial IDs plus
its own presentation metadata.

```
Collection
  id            slug used in routing, e.g. "making-beats"
  title         student-facing name
  description   one line explaining what the collection is for
  tutorialIds[] ordered references into the canonical set
  status        "live" | "planned"
```

### Topic membership has one source of truth

**`Collection.tutorialIds[]` is authoritative for topic membership and ordering.**

Collections are discovery and navigation structures: they need explicit, curated
ordering, which a flat per-tutorial list cannot express. Storing the same membership
independently on both the tutorial and the collection would create two copies that can
drift, and no defined winner when they disagree.

Therefore:

- authors edit collection membership **only** in `Collection.tutorialIds[]`;
- a tutorial-facing topic list may be **generated at load time** by inverting the
  collections, as a read-only index;
- content must **never** require maintaining both sides by hand.

This is the same rule as invariant 1 in §3, applied to collections: one canonical
record, many references.

### Collections mapped to the current home screen

These ten already exist as home-screen categories. The mapping below is the starting
proposal; membership is expected to be refined as content is authored.

| Collection | Tutorial IDs |
|---|---|
| Getting started | B01, B02, B03, B04, B05 |
| Navigating menus | N01, N02, N10 |
| Playing notes | B02, B04, B05 |
| Making beats | B08, B09, N03, N04, I08 |
| Bass sounds | N05, I01 |
| Pad sounds | I02 |
| Lead sounds | I03 |
| Effects & motion | B07, I05, I06 |
| Saving sounds | N09, I09 |
| Mini challenges | B10, I10 |

Note the thin collections: *Pad sounds* and *Lead sounds* resolved to a single tutorial
each in this proposal. That is acceptable at launch but was a content gap to track.

> **Refined in Phase 6D, when the content existed to refine against.** The authoritative
> membership now lives in `js/collections.js`. Changes from the proposal above, each made
> because the finished tutorials made it obvious:
>
> | Collection | Change | Why |
> |---|---|---|
> | Making beats | added `N06` | It is the tutorial about getting several parts into one pattern, which is the subject of the collection. |
> | Bass sounds | added `I04` | `I01` builds a bass out of the filter and envelope; the tutorial that teaches them belongs beside it. |
> | Pad sounds | added `I04`, `I05` | Resolves the thin-collection gap honestly: a pad is made of an envelope and slow movement, so those two tutorials are the rest of the answer. |
> | Lead sounds | added `B05`, `I04` | Same reasoning. A lead is a sound plus the Pitch and Mod controls that make it expressive, which is `B05`. |
>
> Four of the planned collections gained real membership and are **routable but
> deliberately not shown on the home screen**, since adding cards there would be a
> redesign of a frozen surface. They are reachable from the *Other topics* strip that
> every topic page carries, so nothing is orphaned: **all thirty tutorials appear in at
> least one collection**, and every collection with content has a route.
>
> The Vocoder collection remains empty and is therefore **not routable** — an empty topic
> page would be a placeholder. It is kept in the data so the content gap stays visible.

### Planned future collections

These require **no home-screen change** to define. They can be surfaced later without
disturbing the frozen baseline.

| Collection | Tutorial IDs | Note |
|---|---|---|
| Sound design | B06, N08, I01, I02, I03, I04, I05, I06 | The largest cross-level thread. |
| Arpeggiator | N07 | Needs more content before it earns a tile. |
| Troubleshooting | N10 | Likely grows from real learner failure modes. |
| Performance | I07, I10 | |
| Vocoder | *(none yet)* | The instrument has a vocoder; no canonical tutorial covers it. Content gap. |

## 6. Tutorial model

Conceptual shape. This phase defines meaning, not JavaScript.

```
Tutorial
  id                stable permanent key, e.g. "B02"
  level             "beginner" | "novice" | "intermediate"
  order             position within its level (drives the guided path)
  title             full student-facing title
  shortTitle        compact form for tiles, breadcrumbs, and progress lists
  summary           one or two plain sentences: what you will be able to do afterwards
  estimatedMinutes  honest expectation, used for planning and for challenge framing
  prerequisites[]   tutorial IDs assumed already done
  learningGoals[]   plain-language outcomes, learner-facing, not jargon
  steps[]           ordered Step objects
```

Field notes:

- **`prerequisites`** are advisory, not gates. The à-la-carte promise is that a learner
  may enter any tutorial directly; prerequisites let the UI *offer* a prior tutorial,
  never refuse entry.

  **This has a safety consequence, and it binds content.** Because entry is always
  direct, a tutorial may never assume the learner arrived through its prerequisites,
  and therefore may never assume anything about the state of the instrument in front
  of them — in particular, it may not assume there is no unsaved work. A step whose
  correctness depends on "you have not changed anything yet" is a defect, not a
  simplification. Where an action would discard a learner's unsaved work, the tutorial
  either does not ask for it, or is itself the tutorial that teaches saving first.
  N01 is the worked example: it teaches the Program Value and Tone button pairs apart
  by sight and deliberately presses neither, because either press would discard an
  unsaved sound (`docs/tutorials/N01-SOURCE-NOTES.md`).
- **`topics` is deliberately absent from the authored shape.** Topic membership lives
  in `Collection.tutorialIds[]` (§5) and nowhere else. A read-only `topics` index may
  be derived at load time for rendering — "which collections is this tutorial in?" —
  but it is generated, never authored, and never written back.
- **`learningGoals`** are written for the learner ("you'll be able to find a sound you
  like"), not for a curriculum document.

## 7. Step model

```
Step
  id                stable within its tutorial
  title             short label for the step
  instruction       THE primary action, in plain language. One action.
  detail            optional elaboration for a learner who needs more
  hardwareTargets[] target IDs to highlight (see §8)
  visualMode        how the instrument is presented (see §9)
  expectedDisplay   optional — what the display should show, as display lines
  syntheticDisplay  optional — false when expectedDisplay reproduces a real
                    documented screen rather than a placeholder
  displayNote       optional — provenance for expectedDisplay: which source the
                    screen comes from and what varies between instruments
  expectedSound     optional — what the learner should hear
  whyItMatters      optional — the explanation, always secondary
  checkpoint        how the learner confirms they succeeded
  recoveryHelp      what to do if it went wrong
  nextHint          optional bridge into the following step
```

Field meanings:

- **`instruction`** carries one action and one action only. If a step needs "and then",
  it is two steps. This is what makes the *do → see → hear* loop work.
- **`detail`** exists so `instruction` can stay short. Progressive disclosure, not a
  second instruction.
- **`hardwareTargets`** are IDs, never coordinates (§8). Usually one; more than two is a
  signal the step is doing too much.
- **`visualMode`** is chosen per step, not per tutorial — a single tutorial routinely
  moves between full view and a display close-up.
- **`expectedDisplay`** is optional because many steps do not change the display. When
  present it is a critical confirmation signal, especially in menu navigation.
- **`syntheticDisplay` and `displayNote`** exist because a display state is a factual
  claim about the instrument, and the content-authority rule (§13) applies to it like
  any other. The house rule established with N01: **a step may reproduce a screen the
  official documentation illustrates, and may never compose one.** A reproduced screen
  sets `syntheticDisplay: false` and must carry a `displayNote` saying where it came
  from and which fields differ between instruments. A placeholder keeps the default and
  is labelled synthetic. Neither field asks the renderer to judge the claim; both make
  the claim's provenance visible to the learner.
- **`expectedSound`** is optional because many steps are silent — navigating a menu,
  selecting without playing. When present it is written as a listening cue, not a
  technical description.
- **`whyItMatters`** must be optional and visually secondary in the eventual UI. It is
  the payload of the *optionally learn why* stage. A learner who ignores it entirely
  must still complete the tutorial successfully.
- **`checkpoint`** closes the loop: an observable condition the learner can verify
  themselves. Without it, a step cannot report success.
- **`recoveryHelp`** powers a future **I'm lost** action. Every step needs one, because
  the beginner failure mode is being stranded in an unexpected state with no idea how
  they got there.
- **`nextHint`** maintains narrative momentum. Optional.

At least one of `expectedDisplay` or `expectedSound` should normally be present; a step
with neither gives the learner nothing to confirm against, and should be examined.

## 8. Hardware-target model

A **hardware target** is a named, reusable reference to a physical area of the
instrument. Tutorials reference target IDs; they never embed coordinates.

**This is mandatory.** A corrected target position must fix every tutorial at once. If
coordinates were copied into steps, a single re-measurement would mean editing content
across the whole library — and would silently leave stale copies behind.

```
HardwareTarget
  id            stable permanent key
  label         preferred learner-facing wording; accurate to the hardware but not
                required to be identical to the printed legend
  panelLegend   exact wording/symbols physically printed on the instrument, if any
  kind          button | knob | control | section | group | keys | display | off-image
  imageId       optional ID of the hardware image the target lives on; omitted means
                the registry's default image (the top view)
  region        normalized geometry within the referenced image, or null for an
                off-image target
  zoom          optional normalized crop, within the same image, for magnified
                presentation
  group         optional parent target ID
  notes         concise implementation caveats; not lesson prose
```

`label` and `panelLegend` are deliberately distinct fields: `label` is what the
tutorial may call the thing for a beginner, `panelLegend` is what the learner
actually sees printed on the JD-Xi, and the two may legitimately differ. Established
examples: the playable keyboard is learner-facing **Keys** while the panel prints
only drum-instrument names above it; the Menu button is learner-facing **Menu/Write**
while the panel reads `Menu /` with `Write` boxed; the Pitch/Mod controls carry
neutral labels while their wording question remains unresolved despite Roland's
documented "wheel" terminology (ROLAND-SOURCE-MAP Q8).

### Canonical registry

The fourteen IDs this section originally sketched were proven too coarse by the
source reconciliation (ROLAND-SOURCE-MAP §5, Q5) and are **superseded**. The
canonical registry now lives in:

- **`js/hardware-targets.js`** — the registry itself: 99 targets plus the canonical
  image registry (`images`: `top` = 3153 × 1339 top view, `rear` = 2520 × 371 rear
  panel; `defaultImageId: "top"`), loaded by `index.html` as a plain classic script
  and consumed by the reusable lesson renderer; tutorials and steps go on
  referencing target IDs rather than coordinates or images;
- **`docs/HARDWARE-TARGETS.md`** — its human-readable reconciliation and the
  measurement record.

The canonical JS registry implements this full schema. Properties worth naming:

- **Group and individual targets coexist.** `partSelectGroup` and
  `digitalSynth1Button` are both real targets; a lesson highlights the group when
  introducing the panel and the single button when asking for a press. The same
  applies to Cursor, Program Value, Tone, Octave, the step buttons, FILTER,
  AMP/ENV, LFO and EFFECTS.
- **Multiple visual sources coexist in one registry.** Rear-panel controls
  (`powerSwitch`, `dcInJack`, grouped under `rearPanel`) are measured on the rear
  image and carry `imageId: "rear"`; every top-view target simply omits `imageId`.
  A step references IDs only and never says which image to show — the target does.
- **Off-image targets may exist without coordinates.** A target that no registered
  image can show is registered with `region: null` rather than fabricated geometry
  (none exist since the rear image was added).

### Geometry rules

- Geometry is expressed as **normalized image-relative values** — percentages of the
  image the target references, exactly as the five home-screen regions already are
  for the top view. It is never expressed in stage-space pixels, so a target stays
  attached at any rendered size. `region` and `zoom` are always in the same image.
- `zoom` metadata describes how to present the target magnified: which area to frame
  and how tightly. It is optional; targets that are always legible at full size do not
  need it.
- Targets are **finer-grained** than the five home-screen regions. Those five are a
  coarse orientation map; `enterButton` is a single control.
- Coordinates must be **derived by visual verification against the master image** and
  confirmed by overlay rendering before use — the same method that established the
  five home-screen regions. They are not to be estimated from the panel legend or from
  the instrument's physical dimensions.

## 9. Step visual modes

| Mode | Presentation |
|---|---|
| `full` | Full JD-Xi visible; target highlighted on the full instrument. |
| `full-plus-inset` | Full instrument remains visible; a magnified inset of the target is added alongside. |
| `control-closeup` | A larger control area dominates, for manipulation that would otherwise be unreadable. Context must still make clear where that area sits on the full instrument. |
| `display-focus` | The LCD is enlarged prominently; the hardware navigation controls remain visually represented so the learner can still act. |

`full` is the default and should remain the common case. Each departure from it should
be justified by a specific legibility problem — dense controls, small legends, or
display states that cannot be read at full-instrument scale.

> **Implemented — and worth reading the numbers honestly.** All four modes are rendered
> by `js/lesson-renderer.js`. Across the finished library of **320 steps**:
>
> | Mode | Steps | Share |
> |---|---|---|
> | `full-plus-inset` | 244 | 76.3% |
> | `full` | 51 | 15.9% |
> | `display-focus` | 25 | 7.8% |
> | `control-closeup` | 0 | — |
>
> The rule above says `full` "should remain the common case", and it is not: an inset
> alongside the full instrument is. That is a real departure from what this section
> anticipated, and it is deliberate rather than drift — the JD-Xi's panel legends are
> small enough that a learner asked to find a specific button usually needs the
> magnified view, and `full-plus-inset` keeps the whole instrument on screen while
> providing it. The invariant that actually matters — that the full instrument stays
> visible — holds in 92% of steps, and the remaining 8% are display reproductions,
> which draw the instrument underneath as well.
>
> `control-closeup` is implemented and exercised by the development fixture, but **no
> canonical tutorial uses it**. That is a finding rather than an omission: a mode that
> lets a crop dominate the view never turned out to be the better answer than an inset
> beside the full instrument, so it was never forced on a step to justify its existence.

## 10. Lesson-screen contract

One reusable screen renders every tutorial.

Regions:

- compact global top bar (the existing 36 px dark bar);
- tutorial title and progress;
- primary instruction panel;
- the JD-Xi visual stage:
  - full instrument by default — the top view for normal front-panel lessons; the
    renderer shows the rear-panel image instead when the step's target lives there
    (one image per step; see `LESSON-RENDERER.md`),
  - highlighted hardware target(s),
  - leader lines / callouts,
  - optional magnified inset for dense controls or menu navigation,
  - optional enlarged display close-up showing what the learner should see;
- short **What you should hear** guidance, when useful;
- optional **Why?** explanation, visually secondary;
- **I'm lost** recovery;
- **Back**;
- **Next**;
- tutorial progress.

The screen inherits the frozen stage philosophy without exception:

- 1440 × 900 reference canvas;
- whole stage scales proportionally to fit the desktop browser window;
- no page-level horizontal or vertical scrolling;
- desktop only; no mobile design requirement.

Full JD-Xi visibility is preferred. A temporary zoomed view is used only where it
materially improves the instruction.

The annotation mechanism is already established by the home screen and is reused
rather than reinvented: an annotation element spans, in image percentages, the gap
between its label and the hardware it points at, so attachment survives any resize.

## 11. Navigation architecture

A future hash-routing model, chosen because it works from `file://` with no server, no
build step, and no framework.

| Route | Meaning |
|---|---|
| `#home` | Home screen |
| `#level/beginner` | Guided level index |
| `#level/novice` | |
| `#level/intermediate` | |
| `#topic/making-beats` | Topic collection index |
| `#tutorial/B02` | Tutorial, at its first step |
| `#tutorial/N01/step/3` | Tutorial, at a specific step |
| `#favorites` | |
| `#progress` | |
| `#settings` | |

Requirements:

- browser Back and Forward must work;
- direct links must work, including deep links to a specific step;
- no web server required;
- no framework required.

Unknown or malformed routes resolve to `#home` rather than failing. A deep link to a
step that no longer exists resolves to the tutorial's first step — a consequence of IDs
being permanent but step lists being editable.

> **Implemented in Phase 6D.** Every route in the table above works, from `file://`,
> with browser Back and Forward. The router is generic: levels are derived from the
> catalog's own `level` and `order`, topics from `Collection.tutorialIds[]`, and
> Favorites, Progress and Settings share one catalog view — so a new tutorial or a new
> collection needs a data entry and no router change.
>
> Two resolution rules were added to the ones above, both following the same
> degrade-to-a-defined-destination principle:
>
> - an unknown **level** resolves to `#home`;
> - a collection that exists but has **no tutorials** is not routable and resolves to
>   `#home`, because an empty topic page would be a placeholder. Only the Vocoder
>   collection is in that state, and deliberately (see §5).

## 12. Progress model

The local-browser progress model. **Implemented in Phase 6D** as `js/progress.js`.

```
ProgressState
  schemaVersion          integer; the shape version of this stored record
  completedTutorialIds[] canonical tutorial IDs the learner has finished
  currentTutorialId      where the learner was last working
  currentStepId          which step within that tutorial
  favoriteTutorialIds[]  canonical tutorial IDs the learner has starred
  completionByTutorial{} optional cached per-tutorial percentage, keyed by tutorial ID
```

### Storage

- **Local browser storage only**, initially — consistent with a no-build, no-server page
  opened directly over `file://`.
- **No login, no account, no cloud synchronization.** None of these are in scope, and
  the model must not be shaped in anticipation of them.
- **One namespaced application record** is preferred over a scatter of unrelated loose
  keys: a single key holding the whole `ProgressState`. That keeps reads and writes
  coherent, makes migration tractable, and makes "reset my progress" one deletion
  rather than a hunt for stragglers.
- Storage can legitimately be **absent or unreadable** — a private window, cleared site
  data, storage disabled by policy. Every read must tolerate that and fall back to an
  empty state. Nothing may fail hard because progress could not be loaded.

### Field meanings

- **`schemaVersion`** exists so a future version can migrate stored state safely instead
  of misreading an older shape as a current one. A record whose version is *newer* than
  the running app understands must be treated as unreadable rather than guessed at.
- **`completedTutorialIds`** records canonical tutorial IDs (§4). Because those IDs are
  permanent and never renumbered, a completion record stays meaningful even as titles,
  ordering, and step lists evolve. This is a large part of why the IDs are permanent.
- **`currentTutorialId`** and **`currentStepId`** together allow resume.
- **`favoriteTutorialIds`** powers Favorites and the `#favorites` route.
- **`completionByTutorial`** is optional, derived, cached percentage information. It is
  a convenience for rendering and **must never become more authoritative than actual
  completion state**. Where the two disagree, `completedTutorialIds` and the real step
  records win, and the cache is recomputed from them.

### Stale references must fail safely

Content evolves; stored state does not. Every stored reference is therefore a hint, not
a guarantee:

- a `currentStepId` that no longer exists resolves to the **first valid step** of that
  tutorial;
- a `currentTutorialId` that no longer exists yields **no resume point**, and the
  learner is returned to `#home`;
- unknown IDs in `completedTutorialIds` or `favoriteTutorialIds` are **ignored on read**
  and dropped on the next write, rather than raising an error or rendering as broken
  entries.

This mirrors the routing rule in §11: an unresolvable reference degrades to a defined
safe destination instead of failing.

### Reset

Resetting progress must be possible later through Settings (`#settings`). With a single
namespaced record, reset is the deletion of that one key.

> **Implemented in Phase 6D.** Settings offers a reset that clears completion, the
> resume point and favourites in one action. It requires **two deliberate presses**: the
> first arms the control and relabels it, the second acts, and a Cancel appears alongside
> — a single click on a control that erases the learner's whole record is exactly the
> accident this guards against.

### How the implementation reads storage

`js/progress.js` probes storage by writing and removing a value rather than by checking
that `localStorage` exists, because on `file://` the object can be present and still
throw on use. Every access is wrapped; a failure degrades to an in-memory state for the
session and the application stays fully navigable. Only persistence is lost, never
function — and the affected surfaces say so rather than failing silently.

The rules above are enforced rather than assumed: `tools/test-progress.js` provokes each
failure mode — malformed JSON, wrong types, missing fields, stale tutorial and step ids,
a record written by a newer build, and storage that throws on read or on write.

> **Master-plan reconciliation postscript (schema 2).** Three things in this section
> changed, and all three are learner-visible:
>
> - **Completion is explicit.** Reaching the last step no longer completes a tutorial;
>   only pressing **Finish Tutorial** does, which is `JDXI_PROGRESS.finish()`. `noteVisit`
>   records position and nothing else. Master plan §22.
> - **`favoriteTutorialIds` became `bookmarkedIds`.** The app feature is **Bookmarked**;
>   *Favorite* is reserved for the JD-Xi's own hardware feature (master plan §16), and
>   `tools/validate-data.js` now fails the build if the shipped UI says otherwise — in
>   either direction, so the hardware feature cannot be renamed by accident either.
> - **Specialty completion is tracked separately**, in `completedSpecialtyIds`, and is
>   never counted in x/30. Bookmarks are shared between the two kinds, because a learner
>   bookmarks a lesson without caring which data model it lives in.
>
> Schema 1 records are **migrated, not discarded**. Existing completions are kept even
> though they were earned under the old reach-the-last-step rule: erasing someone's record
> because the rule changed underneath them would be the wrong trade.
>
> `resetProgress`, `resetBookmarks` and `resetEverything` replace the single reset, because
> they destroy different things and a learner may well want one without the other.

## 13. Content-authority rule

**No detailed JD-Xi technical procedure becomes authoritative merely because it sounds
plausible.**

Before any technical tutorial content is implemented, each of the following must be
reconciled against official Roland JD-Xi documentation:

- exact hardware operations;
- menu names;
- parameter names;
- button sequences;
- save procedures;
- sequencer behavior.

Beginner-friendly wording may simplify an explanation. It must never contradict the
official procedure.

This applies to the control names used in this document, including those in N01 and in
the §8 registry: they are recorded here as architectural placeholders and still require
source verification before they appear in learner-facing content.

A plausible-sounding sequence that has not been verified is a defect, not a draft.

## 14. What this phase does not decide

Recorded so later phases do not mistake silence for a decision:

- final student-facing tutorial titles and copy;
- step counts, or the actual steps of any tutorial;
- the Novice capstone question raised in §4;
- content for the Vocoder collection;
- visual design of the lesson screen beyond the region contract in §10.

> **Phase 6D postscript.** Of the items this section deferred, the routing model (§11)
> and the progress model (§12) are now implemented, and the collection memberships
> sketched in §5 have been refined against finished content. The Novice capstone question
> and the Vocoder content gap were both **decided by the PM to stay as they are**: N10
> remains the end of the Novice guided path, and no Vocoder tutorial is added. Both are
> recorded here as settled rather than open.
>
> **Master-plan reconciliation postscript.** One half of that is now superseded. N10 does
> remain the end of the Novice guided path. But the master plan (§21) **requires a Vocoder
> lesson**, together with AutoPitch and Auto Note, as *Specialty* content: a separate data
> model outside `window.JDXI_TUTORIALS`, optional, excluded from course completion, and
> never counted in the x/30. That is not a reversal of the decision recorded above — the
> decision was that no Vocoder tutorial joins the **canonical thirty**, and it does not.
> The canonical count stays exactly 30.
