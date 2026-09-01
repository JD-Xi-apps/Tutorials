# I06 — Effects and space — source notes

Source reconciliation record for I06. Content lives in `js/tutorials.js`
(`window.JDXI_TUTORIALS.I06`).

| Field | Value |
|---|---|
| Tutorial | **I06 — Effects and space** (intermediate, order 6, 10 steps, ~13 min) |
| Short title | Effects and space |
| Prerequisites | `["I05"]` — advisory, not a gate |
| Kind | **Comparative lab in groove context.** Panel controls only; opens no menu. |
| Authored | 2026-08-31 |
| Reconciled | 2026-08-31, against `PRODUCT-CURRICULUM-MASTER-PLAN.md` §10 |

## Master-plan reconciliation (2026-08-31)

The brief excludes three things from I06: *algorithm taxonomy, a deep routing curriculum, and
the Side Chain Compressor.* The previous tutorial contained all three, and little else.

| Old step | What it was | Which exclusion |
|---|---|---|
| old S02–S03 | opening Effects Edit and stepping its four groups | deep routing curriculum |
| old S04 | Effect 1's Type parameter stepped through its values | algorithm taxonomy |
| old S05 | walking the selected effect's own parameters | deep effect study |
| old S07–S08 | Part Output and per-part delay and reverb send levels | deep routing curriculum |
| old S09 | Effect 1 set to Compressor, then its side-chain parameters | **Side Chain Compressor, excluded by name** |

What the master plan asks for instead is a **judgement**: Reverb, Delay, Effect 1 and Effect 2,
the line between *too dry, useful and too much*, comparing how a bass, a pad and a lead each
want different amounts, and backing effects down when the groove loses clarity. That is a
listening exercise with four knobs, and the reconciled tutorial opens no menu at all.

The one structural fact retained is that **a program has a single set of effects shared by
everything in it** (`I06-S08`). It is kept because it is what makes the balancing problem real:
without it, the obvious answer to "the bass wants less reverb than the pad" would be to give
them different settings, and on this instrument you cannot. Roland states it in one sentence and
the step goes no further than that sentence — no Part Output, no send levels.

**`I06-S03` is new and load-bearing.** The tutorial now starts by switching the effects out and
listening to the groove bare, so every later judgement is a comparison against a known
reference rather than a guess.

## Sources consulted

| Source | Where it is used |
|---|---|
| Owner's Manual `eng07` | **p.6** *Saving*; **p.8** the effect section's settings being shared by the entire program while on/off is per part; **p.9** *Adding Power and Spaciousness (EFFECTS)* — `[Effects ON/OFF]` and its combination behaviour, the indicators, and the `[Effect 1/2]`, `[Delay]` and `[Reverb]` depth knobs and `[Type]` buttons; *Saving a Sound (Program) (WRITE)*; **p.10** the transport |
| `docs/ROLAND-SOURCE-MAP.md` | §7 row 14 (effects); §8.2 losing unsaved work; §9 the I06 row |

## Per-step reconciliation

| Step | Targets | Mode | Learner-facing factual claims | Support |
|---|---|---|---|---|
| **I06-S01** Protect any work you want to keep | `effectsSection` | `full-plus-inset` | Effect settings belong to the program; there is no documented one-button way back from an effect change. | OM p.9: "Effect settings are saved individually for each program." The absence of a revert is the same finding `B07` records: `[Shift]` + `[Enter]` is documented for the *sound* (OM p.5) and Roland never extends it to effects. |
| **I06-S02** Get a groove going | `playStopButton`, `programValueButtons` | `full-plus-inset` | The transport plays the pattern; stepping programs discards unsaved work. | OM p.10 for the transport; OM p.6 and p.9 for the discard, restated in the recovery as required. |
| **I06-S03** Hear it completely dry | `effectsOnOffButton` | `full-plus-inset` | The combination of effects in use changes each time you press `[Effects ON/OFF]`; the indicators at the upper left of each knob show which are available; switching effects out deletes no settings. | OM p.9, quoted closely: "You can specify the effects that are used by each part. The combination changes each time you press the [Effects ON/OFF] button. The indicators at the upper left of each knob light to indicate the available effects." That nothing is deleted is the absence of any documented write — the button changes which effects apply, not their settings. **No cycle length is claimed** — the step says "press until as little as possible is switched on". |
| **I06-S04** Reverb: too little, useful, too much | `reverbKnob` | `full-plus-inset` | The Reverb knob adjusts the depth of reverb. | OM p.9: "[Reverb] knob — Adjusts the depth of reverb." Everything else in the step is a listening judgement about where that depth stops helping, and is written as one. |
| **I06-S05** Delay: the same test | `delayKnob` | `full-plus-inset` | The Delay knob adjusts the depth of delay. | OM p.9: "[Delay] knob — Adjusts the depth of delay." That delay repeats rather than blurs is what Roland's own introduction describes — "delaying the sound" — and the rest is listening guidance. |
| **I06-S06** A little character from the other two | `effect1Knob`, `effect2Knob` | `full-plus-inset` | The Type button switches the type of effect 1/2; the knob adjusts its depth. | OM p.9: "[Effect 1/2] knob — Adjusts the depth of effect 1/2", "[Type] button — Switches the type of effect 1/2." **Roland's eight type names are deliberately not listed** — see *Deliberate omissions*. |
| **I06-S07** Different sounds want different amounts | `keys`, `reverbKnob` | `full-plus-inset` | No new claim about the instrument. | The step is entirely a listening comparison using the same documented Reverb knob on three kinds of sound. That low sounds muddy faster than high ones is a mixing observation, given as advice rather than as a Roland statement. |
| **I06-S08** One set of effects, shared by everything | `effectsSection` | `full` | The effect settings belong to the whole program, not to a part; every part switched through to them gets the same settings. | OM p.8, verbatim in substance: "Although the settings of the effect section are shared by the entire program, effects can be turned on/off individually for each part." The step gives both halves — shared settings, per-part on/off — and stops there. |
| **I06-S09** Back it down until the groove is clear | `reverbKnob`, `delayKnob`, `effect1Knob`, `effect2Knob` | `full-plus-inset` | No new claim. | The four documented depth knobs from OM p.9. The instruction to subtract is the master plan's "reduce effects when groove clarity suffers". |
| **I06-S10** Keep it, if you want it | `shiftButton`, `menuWriteButton` | `full-plus-inset` | Effect settings are saved with the program. There is no one-button way back from an effect change. | OM p.9 for both. The recovery offers the program-reload route with its explicit discard warning, as the recovery house rule requires. |

## Direct-entry safety

**I06 carries its preflight at `I06-S01`**, before the first knob move at `I06-S04`.

`I06-S02` steps programs to find a groove, which discards — that action is downstream of the
preflight and its recovery says so.

I06 assumes nothing about which effects are currently on, which types are selected, where the
four knobs sit, or whether the loaded program has a pattern at all.

## Destructive-risk handling

I06 changes effect settings extensively and has no undo for them, which is why its preflight is
worded more firmly than the sound-design tutorials' and says so in `whyItMatters`.

The tutorial never offers `[Shift]` + `[Enter]` as a way back, because Roland documents that
combination for the sound and places effect settings outside it. Where a way back is needed,
`I06-S10` gives the only honest one — reload the program — together with the warning that doing
so discards everything else unsaved. That is the same boundary `B07` established and it is
observed here without exception.

## Deliberate omissions

- **The eight effect type names.** Roland lists Distortion, Fuzz, Compressor and Bit Crusher for
  Effect 1, and Flanger, Phaser, Ring Mod and Slicer for Effect 2 (OM p.9). Naming them is the
  algorithm taxonomy the brief excludes. They go to the Hardware Explorer.
- **The fixed signal chain** — Effect 1 → Effect 2 → Delay → Reverb (OM p.9) — is not taught.
  It is genuinely useful and it is reference material; the Hardware Explorer carries it, as it
  does for `B07`, from which it was also removed.
- **Effects Edit** is not opened, so no effect's own parameters are touched.
- **Part Output and the delay/reverb send levels** (PG pp.9–10) are not used. That is the deep
  routing curriculum the brief excludes.
- **The Side Chain Compressor** (v1.50 p.3) is excluded by name in both the master plan (§28)
  and the brief, and appears nowhere.
