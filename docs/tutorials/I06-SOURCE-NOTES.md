# I06 — Effects and space — source notes

Source reconciliation record for I06. Content lives in `js/tutorials.js`
(`window.JDXI_TUTORIALS.I06`).

| Field | Value |
|---|---|
| Tutorial | **I06 — Effects and space** (intermediate, order 6, 10 steps, ~13 min) |
| Short title | Effects and space |
| Prerequisites | `["I05"]` — advisory, not a gate |
| Kind | **Operating procedure.** Effects Edit and per-part routing. One firmware-gated step. |
| Authored | 2026-08-31 |

## Sources consulted

| Source | Where it is used |
|---|---|
| Owner's Manual `eng07` | **p.8** *Audio Flow in a Program* — the effect section shared by the program with per-part on/off; **p.9** *Adding Power and Spaciousness (EFFECTS)* and *Editing Program and Effect Settings* — the Menu route to Effects Edit; **p.17** the documented reasons effects are not applied |
| Parameter Guide `e01` | **p.8** *How the Effects Are Structured* — the type lists, "Each program contains a single set of effect type selection and settings", the worked example of what that forbids, the block diagram, and the Flanger-as-Chorus note; **p.10** Program Edit MAIN — Part Output and its values including KIT, and the delay and reverb send levels; **p.26** *Effect Edit* — the `[Shift]` + Cursor instruction, the Type lists including `00: Thru`, Output Assign (DIR/EFX2), and the per-effect send levels |
| Version 1.50 Supplementary Manual | **p.3** *Side Chain Compressor* — the six parameters added to Effect 1 type `03: Compressor`, and what the side chain does |
| `docs/ROLAND-SOURCE-MAP.md` | §7 row 21 (effects, with its 1.50 caveat); §9 the I06 row |

## Per-step reconciliation

| Step | Targets | Mode | Learner-facing factual claims | Support |
|---|---|---|---|---|
| **I06-S01** Protect any work you want to keep | `effectsSection` | `full-plus-inset` | Effect settings belong to the program; there is no documented one-button way back. | OM p.9; the absence recorded in `B07`'s notes. |
| **I06-S02** Open Effects Edit | `menuWriteButton`, `display` | `full-plus-inset` | Menu/Write → Cursor → Effects Edit → Enter. | OM p.9 *Editing Program and Effect Settings* steps 1–2. |
| **I06-S03** Move between the four effects | `shiftButton`, `cursorRightButton` | `full-plus-inset` | `[Shift]` + Cursor steps between Effect 1, Effect 2, Delay and Reverb. | PG p.26's own opening instruction: "To move between Effect1, Effect2, Delay, and Reverb, hold down the [Shift] button and use the cursor [◄] [►] buttons." |
| **I06-S04** Type includes Thru | `programValueButtons` | `full-plus-inset` | Effect 1's types are Thru, Distortion, Fuzz, Compressor and Bit Crusher; Thru passes the sound through untouched. | PG p.26's Type list, which begins `00: Thru`. That Thru means untouched is the ordinary meaning of the term and of its position as the zero entry; the tutorial says it "passes the sound through untouched" rather than claiming any processing. |
| **I06-S05** Edit the effect itself | `cursorRightButton`, `programValueButtons` | `full-plus-inset` | Each type brings its own parameters; with the Flanger selected, setting Feedback to zero gives a chorus. | PG p.26: "Parameters for each effect type — Edit the parameters for the selected effect type." PG p.8's note: "If the Flanger is selected, you can set the Feedback value to 0 and use it as a Chorus." |
| **I06-S06** One set of effects per program | `effectsSection` | `full-plus-inset` | A program contains a single set of effect type selections and settings; one part cannot have Effect 1 set to Distortion while another has Fuzz. | PG p.8, quoted almost intact including Roland's own worked example. |
| **I06-S07** Send each part where you want it | `menuWriteButton`, `display` | `display-focus` | Part Output chooses which effects a part passes through, from everything down to a direct output with none, plus a Drums-only setting that uses each instrument's own routing. | PG p.10's Part Output row: EFX1, EFX2, DLY, REV, DIR, KIT, with "DIR: Output without applying any effect" and "KIT: Use the settings of each Partial… KIT can be selected only if the Drum part is selected." Screen from PG p.10 — see *Display provenance*. |
| **I06-S08** Set the sends by part | `cursorRightButton`, `programValueButtons` | `full-plus-inset` | The delay and reverb send levels decide how much of each part reaches those effects; a send at zero means that effect does nothing for that part. | PG p.10: "Dly Send Lev … Specifies the amount of delay applied to each part. Set this to 0 if you don't want to apply delay", and the reverb equivalent. OM p.17 lists a zero send as a documented reason an effect is not applied. |
| **I06-S09** Duck the synths under the drums (1.50+) | `menuWriteButton`, `programValueButtons` | `full-plus-inset` | From version 1.50, Effect 1's Compressor has a side chain that reduces the volume of the digital and analog parts while the drum part sounds. | v1.50 p.3: "'03: Compressor' of Effect 1 now provides a side chain function. This reduces the volume of the digital/analog part during moments that the drum part is producing sound", with its six parameters. See *Version-dependent content*. |
| **I06-S10** Listen to the whole program | `exitButton`, `playStopButton` | `full-plus-inset` | Effect changes are lost on program change or power-off without saving; there is no undo and no single button that restores them. | OM p.6, p.9; `ROLAND-SOURCE-MAP.md` Q10. |

## Display provenance

One screen, at I06-S07, reproduced verbatim from PG p.10:

```
PROG: MAIN D1
Level 127
```

`syntheticDisplay: false`. The `displayNote` is written for this tutorial's use of the
screen: it says Part Output is one of the parameters along this group and that the two
letters show which part is being routed. The screen itself is the same one `N02` and `N06`
reproduce, from the same illustration.

## The constraint is the tutorial

I06 exists because of one sentence in PG p.8: a program contains a single set of effect
type selections and settings. That means the obvious approach — give the bass a distortion
and the pad a flanger — is simply not available.

The tutorial therefore teaches the constraint (I06-S06) before the workaround (I06-S07 and
I06-S08), rather than letting a learner discover it by failing. What *is* per-part is
which of the shared effects a part passes through, and how much of it is sent to the delay
and reverb, and those two steps are where the tutorial's real work is.

## Version-dependent content

**I06-S09 is the only firmware-gated step, and I06 needs no version precondition.**

The side-chain compressor was added at system version 1.50 (v1.50 p.3). The step states
the requirement in learner-facing text before anything is attempted, says the step may be
skipped, and states that nothing else in the tutorial depends on it. Its `recoveryHelp`
treats missing parameters as the expected symptom of an older instrument rather than a
fault, and points at `N01` for reading the version.

The owner's own instrument is at 1.51 (`ROLAND-SOURCE-MAP.md` §4.8), so the step is live
for them — but I06 asserts nothing about what version any particular JD-Xi runs.

## Direct-entry safety

**I06-S01 is the protect-your-work preflight.** It repeats `B07`'s point that effects have
no documented one-button revert, which is what makes the preflight matter more here than
in a tone-editing tutorial.

I06 assumes nothing about which effect types are selected, what the sends are set to, how
any part is routed, or whether a pattern exists. I06-S10's `recoveryHelp` offers a
constructive rebuild — types to Thru and sends to zero — rather than pretending a restore
exists.

## Deliberate omissions

- **The full parameter list for each effect type** (PG pp.26–27) is not enumerated. The
  tutorial teaches that the parameters exist and how to reach them; listing four types'
  worth for each of two slots would be a reference table, not a lesson.
- **Effect 1's Output Assign** (PG p.26: DIR or EFX2) is not taught as a step, although it
  is what allows EFX1 and EFX2 to be used separately per part. It is a second routing
  concept on top of Part Output, and one is enough.
- **The click-out and USB audio paths** in PG p.8's block diagram are out of scope.
- **Vocoder and AutoPitch routing** (PG p.28) is omitted; no canonical tutorial covers
  either.
