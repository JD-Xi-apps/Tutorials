# I04 — Filter and envelope shaping — source notes

Source reconciliation record for I04. Content lives in `js/tutorials.js`
(`window.JDXI_TUTORIALS.I04`).

| Field | Value |
|---|---|
| Tutorial | **I04 — Filter and envelope shaping** (intermediate, order 4, 10 steps, ~12 min) |
| Short title | Filter and envelope |
| Prerequisites | `["I03"]` — advisory, not a gate |
| Kind | **Comparative lab.** Edits one sound repeatedly, restoring between experiments. |
| Authored | 2026-08-31 |
| Reconciled | 2026-08-31, against `PRODUCT-CURRICULUM-MASTER-PLAN.md` §10 |

## Master-plan reconciliation (2026-08-31)

This is the largest single rewrite in the Intermediate path. The brief lists five exclusions
for I04 — *no ADSR diagram lesson, no filter-frequency theory, no velocity-sensitivity
curriculum, no drum TVF/TVA architecture, no taxonomy for its own sake* — and the previous
tutorial contained four of the five.

| Old step | What it was | Which exclusion |
|---|---|---|
| old S03 | Roland's four filter types, stepped through and named | taxonomy for its own sake |
| old S04–S08 | Attack, Decay, Sustain and Release set individually, then both envelopes compared | ADSR diagram lesson |
| old S09 | the amp's level velocity sensitivity | velocity-sensitivity curriculum |
| old S10 | the same envelope ideas applied to the Drums part | drum TVF/TVA architecture |

What the master plan actually asks for is a **comparative practical lab**: one existing sound,
roughly three contrasting versions, Cutoff / Resonance / Envelope, restoring or reselecting
between experiments, and choosing controls deliberately to solve a stated sound goal. None of
that requires a menu, and the reconciled tutorial opens none.

The new shape is three versions from one tone — soft, plucky, biting — with `[Shift]` +
`[Enter]` restoring between each, followed by a step that names which control did which job and
a step that sets a goal and makes the learner choose for themselves.

**The restore is taught before it is needed** (`I04-S03`), on a sound that has not been edited,
so the learner has pressed the combination once before it matters. That is the difference
between a lab that works and one where every version is built on the last.

<!-- removed-steps:begin -->

No id vanished — I04 still has ten steps — but eight of them are new content. The ids were
reused by the rewrite, so the old steps are named above by position rather than by id.

<!-- removed-steps:end -->

## Sources consulted

| Source | Where it is used |
|---|---|
| Owner's Manual `eng07` | **p.5** *Choosing a Tone*, and `[Shift]` + `[Enter]` returning to the original sound, with the tone-number signal; **p.6** *Saving*; **p.8** FILTER (`[Cutoff]`, `[Resonance]`) and AMP/ENV (`[Envelope]`, with Roland's left/right sentence); **p.9** *Saving a Sound (Program) (WRITE)*; **p.10** the transport |
| `docs/ROLAND-SOURCE-MAP.md` | §7 rows 11–12 (filter, amp/envelope), 34 (recovery scope); §8.2 losing unsaved work; §9 the I04 row; Q10 (no general undo) |

## Per-step reconciliation

| Step | Targets | Mode | Learner-facing factual claims | Support |
|---|---|---|---|---|
| **I04-S01** Protect any work you want to keep | `filterSection`, `ampEnvSection` | `full` | The tutorial edits one sound repeatedly and discards each version. | OM p.6 and p.9 for the discard. The unusual emphasis is a property of this tutorial, not a Roland claim. |
| **I04-S02** Choose one sound and stay with it | `digitalSynth1Button`, `toneButtons` | `full-plus-inset` | Part Select and Tone `[-]` `[+]` choose the sound. | OM p.5. "Bright and sustained gives you the most room" is a teaching judgement, written as one. |
| **I04-S03** Learn the way back first | `shiftButton`, `enterButton` | `full-plus-inset` | `[Shift]` + `[Enter]` returns the original sound after you have switched or edited it. It reaches the sound only. | OM p.5: "If you want to return to the original sound after you've switched or edited the sound, hold down the [Shift] button and press the [Enter] button." The scope limit — not effects, not pattern — is the absence of any Roland statement extending that sentence, and is the same boundary `B07` and `N08` observe. |
| **I04-S04** Version one: soft and distant | `cutoffKnob`, `resonanceKnob`, `envelopeKnob` | `full-plus-inset` | Cutoff down, Resonance low and the Envelope knob right give a soft, slow sound. | OM p.8 for all three controls, including "turning the knob toward the right makes the attack softer and the release longer". The combination is the tutorial's, the behaviour of each control is Roland's. |
| **I04-S05** Version two: short and plucky | `shiftButton`, `enterButton`, `envelopeKnob` | `full-plus-inset` | Restoring first returns the starting sound; the Envelope knob left gives a shorter sound with a stronger attack. | OM p.5 for the restore and OM p.8 for the knob, verbatim in substance. The recovery's test — that the tone number reappears — is OM p.5's tone-number signal used as confirmation that the restore took. |
| **I04-S06** Version three: bright and biting | `shiftButton`, `cutoffKnob`, `resonanceKnob` | `full-plus-inset` | Resonance emphasises the sound around the cutoff point and the peak follows Cutoff. | OM p.8. The loudness warning is gain behaviour, given as advice with Master Volume named. |
| **I04-S07** Which control did which job | `cutoffKnob`, `resonanceKnob`, `envelopeKnob` | `full` | Recap only: Cutoff decided brightness, Resonance decided edge, the Envelope knob decided the shape in time. | The three sentences are compressions of OM p.8's own descriptions. No new claim. |
| **I04-S08** Now solve a real goal | `cutoffKnob`, `resonanceKnob`, `envelopeKnob` | `full` | No new procedural claim — the learner chooses the controls. | Same three controls, same page. The step deliberately gives no settings, which is the master plan's "choose controls deliberately for a practical sound goal". |
| **I04-S09** Test it against the pattern | `playStopButton`, `keys` | `full` | No new claim. | OM p.10 for the transport. |
| **I04-S10** Keep it or put it back | `shiftButton`, `enterButton` | `full-plus-inset` | Saving keeps the version; `[Shift]` + `[Enter]` restores the original and discards it. | OM p.9 WRITE and OM p.5 for the restore. The recovery states plainly that a restored version cannot be recovered, which is true — no redo is documented anywhere. |

## Direct-entry safety

**I04 carries its preflight at `I04-S01`**, before the tone selection at `I04-S02`.

The preflight is worded more strongly here than in the other sound-design tutorials, and
deliberately: I04's *method* is to destroy edits repeatedly. Most tutorials risk the learner's
work by accident; this one restores over its own work three times as the exercise.

I04 assumes nothing about which program or tone is loaded or how the panel knobs are set.
`I04-S02` chooses the sound and `I04-S03` establishes the way back before anything is changed.

## Destructive-risk handling

`[Shift]` + `[Enter]` is used four times, and every use is on an edit the learner made moments
earlier as part of the exercise. That is the safest possible framing for a destructive move: the
thing destroyed is always the thing the tutorial just asked them to create.

The tutorial never claims the combination is a general undo. `I04-S03` states its scope up
front, and `I04-S10`'s recovery says that a restored version cannot be recovered — followed by
the honest and useful consolation that the learner knows exactly which three controls made it.

## Deliberate omissions

- **The four filter types.** Roland names Digital LPF, HPF, BPF and PKG and gives diagrams
  (OM p.8). Naming them is the taxonomy the brief excludes. `B06` already teaches the Type
  button as an ear-first control, and the Hardware Explorer carries the list.
- **A/D/S/R as stages.** OM p.8 prints a labelled diagram defining all four. It is not used, and
  the stage names appear nowhere in I04. This is the exclusion the previous tutorial most
  clearly broke.
- **Velocity sensitivity.** Excluded by name, and velocity/accent instruction is outside v1
  entirely (master plan §13).
- **Drum TVF/TVA architecture.** Excluded by name. `N04` teaches the one drum-sound edit v1
  wants, on the panel.
- **Filter-frequency theory.** No frequency, slope or curve is mentioned; every instruction is
  a direction and a listening test.
