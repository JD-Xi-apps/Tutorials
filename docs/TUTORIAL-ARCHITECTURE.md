# JD-Xi Tutorial Hub — Tutorial Architecture

This document is the authoritative design for the tutorial/lesson system. It defines
structure, models, and rules. It is **not** an implementation, and it deliberately
contains **no JD-Xi operating procedures**.

Companion documents:

- [`DESIGN-RULES.md`](DESIGN-RULES.md) — owner-approved visual and interaction baseline.
  Where the two overlap, DESIGN-RULES governs presentation and this file governs
  content structure.

## 1. Status and scope

The home-screen visual baseline is complete and frozen. This phase adds architecture
only. Nothing here changes `index.html`, `css/app.css`, `js/app.js`, or the master
image.

Deferred to later phases, by explicit decision: routing, lesson screens, progress
storage, hardware-target coordinates, and all tutorial content.

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
3. **One reusable hardware-target registry.** Tutorials reference target IDs.
4. **Hardware geometry is image-relative**, in the authoritative 3153 × 1339 master
   image coordinate system. Never stage-space pixels.
5. **The full instrument is the normal visual anchor.** Zoomed views are the exception
   and must earn their place.
6. **Menu navigation is unusually explicit.** For beginners, "open the settings" is a
   failure; the exact controls and display states are the instruction.
7. **Hearing and doing come before theory.**
8. **"Why" content is secondary and optional.**
9. **No scrolling within the overall page.** The 1440 × 900 fixed stage scales to fit.
10. **Technical procedures require Roland-source verification** (see §12).

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
| N06 | Layer sounds | Combining parts deliberately. |
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

Note the thin collections: *Pad sounds* and *Lead sounds* currently resolve to a single
tutorial each. That is acceptable at launch but is a content gap to track.

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
  topics[]          collection IDs this tutorial appears in
  learningGoals[]   plain-language outcomes, learner-facing, not jargon
  steps[]           ordered Step objects
```

Field notes:

- **`prerequisites`** are advisory, not gates. The à-la-carte promise is that a learner
  may enter any tutorial directly; prerequisites let the UI *offer* a prior tutorial,
  never refuse entry.
- **`topics`** is the tutorial's own view of its membership. It must stay consistent
  with the collections in §5; one of the two is generated from the other at build or
  load time rather than maintained twice.
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
  expectedDisplay   optional — what the LCD should show
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
- **`expectedDisplay`** is optional because many steps do not change the LCD. When
  present it is a critical confirmation signal, especially in menu navigation.
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
  id            stable key, e.g. "menuWriteButton"
  label         student-facing name matching the panel legend
  region        image-relative geometry in the 3153x1339 master coordinate system
  zoom          optional metadata for magnified presentation
  group         optional parent area, for "where is this on the instrument" context
```

### Initial registry

Coordinates are **deliberately not defined in this phase**.

```
menuWriteButton     cursorButtons       valueButtons
enterButton         exitButton          shiftButton
lcdDisplay          partSelect          filterSection
ampEnvSection       lfoSection          effectsSection
patternSequencer    keyboard
```

### Geometry rules

- Geometry is expressed as **normalized image-relative values** — percentages of the
  master image, exactly as the five home-screen regions already are. It is never
  expressed in stage-space pixels, so a target stays attached at any rendered size.
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

Not implemented in this phase.

## 10. Lesson-screen contract

One reusable screen renders every tutorial.

Regions:

- compact global top bar (the existing 36 px dark bar);
- tutorial title and progress;
- primary instruction panel;
- the JD-Xi visual stage:
  - full instrument by default,
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

Not implemented in this phase.

## 12. Content-authority rule

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

## 13. What this phase does not decide

Recorded so later phases do not mistake silence for a decision:

- final student-facing tutorial titles and copy;
- hardware-target coordinates;
- step counts, or the actual steps of any tutorial;
- the Novice capstone question raised in §4;
- content for the Vocoder collection;
- whether topic membership is authored on the tutorial or on the collection;
- visual design of the lesson screen beyond the region contract in §10.
