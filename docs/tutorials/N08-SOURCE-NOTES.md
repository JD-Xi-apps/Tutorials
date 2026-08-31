# N08 — Edit a sound more deliberately — source notes

Source reconciliation record for N08. Content lives in `js/tutorials.js`
(`window.JDXI_TUTORIALS.N08`).

| Field | Value |
|---|---|
| Tutorial | **N08 — Edit a sound more deliberately** (novice, order 8, 10 steps, ~11 min) |
| Short title | Deliberate editing |
| Prerequisites | `["N07"]` — advisory, not a gate |
| Kind | **Operating procedure.** Edits the loaded sound with panel controls; opens no menu. |
| Authored | 2026-08-31 |
| Reconciled | 2026-08-31, against `PRODUCT-CURRICULUM-MASTER-PLAN.md` §9 |

Learning goals as authored:

1. Say what you want a sound to do before you touch anything.
2. Change brightness, length, edge, movement and space on purpose.
3. Compare what you made against where you started.
4. Get back to the original sound when an experiment goes wrong.

## Master-plan reconciliation (2026-08-31)

The brief's verdict was that the previous N08 was **"too theoretical/deep"**, and the master
plan (§9) describes something quite different from what existed: N08 is *the practical
bridge* from random tweaking to intentional sound design, and its vocabulary is given as
pairs — brighter/darker, shorter/longer, smoother/sharper, still/moving, dry/spacious — plus
a before/after comparison and a safe way back. It explicitly does not own deep oscillator
architecture or synthesis theory.

The previous tutorial went into Tone Edit, walked its parameter groups, and set Attack,
Decay, Sustain and Release individually, then did the same for the filter's own envelope and
depth. That is a formal A/D/S/R curriculum — which the brief rules out by name — and it is
`I04`'s comparative lab, not the Novice bridge.

Measured against the master plan's own list, the old tutorial delivered one item of nine.

| Master-plan requirement | Before | Now |
|---|---|---|
| existing Tone | yes | `N08-S02` |
| brighter/darker | **absent** | `N08-S04` |
| shorter/longer | as Attack and Release parameters | `N08-S05`, one knob |
| smoother/sharper | **absent** | `N08-S06` |
| still/moving | **absent** | `N08-S07` |
| dry/spacious | **absent** | `N08-S08` |
| intentional LFO amount | **absent** | `N08-S07` |
| intentional effect amount | **absent** | `N08-S08` |
| before/after comparison | **absent** | `N08-S09` |
| safe revert/reselect | yes | `N08-S09` |

So N08 is a rewrite. Six steps are new, four are gone, and the tutorial no longer opens a
menu at all — every control it uses is one the learner already met in `B06` and `B07`.

**The new idea is `N08-S03`.** The master plan's word for this tutorial is *deliberately*,
and the thing that makes an edit deliberate is deciding the goal before touching a control.
That step has the learner finish the sentence "I want it to be more ______" out loud, and
every step after it is an attempt to get there. It is the only content in N08 that is not
already somewhere else in the course, and it is what makes N08 a bridge rather than a
repetition of `B06`.

**`N08-S09` merges the comparison and the revert, because on this instrument they are the
same action.** `[Shift]` + `[Enter]` returns the original sound (OM p.5), and there is no
documented way to hold an edited and an unedited version at once, and no redo. So hearing
where you started *costs* you what you made. The step says that plainly, puts the decision in
the learner's hands before they press anything, and uses the fact as the argument for `N09`.
Presenting the comparison as free would have been the easy version and a false one.

<!-- removed-steps:begin -->

Ids that no longer exist in N08: `N08-S11`.

<!-- removed-steps:end -->

The removed Tone Edit material is not lost. Individual envelope stages, the filter's own
envelope and depth, and the Tone Edit group structure are all `I04` and `I05` content, where
the master plan puts comparative filter/envelope and LFO labs.

## Sources consulted

| Source | Where it is used |
|---|---|
| Owner's Manual `eng07` | **p.5** *Top screen* — the tone-number signal, and `[Shift]` + `[Enter]` returning to the original sound; **p.6** *Saving* — a sound changes when you move a knob and is lost on power-off; **p.8** FILTER (`[Cutoff]`, `[Resonance]`) and AMP/ENV (`[Envelope]`, and Roland's own left/right description); **p.9** *Saving a Sound (Program) (WRITE)*, the effects knobs and `[Effects ON/OFF]` |
| Parameter Guide `e01` | **p.7** the LFO's place in a tone's structure — used only to confirm the LFO is per-tone, never to describe its architecture to the learner |
| `docs/ROLAND-SOURCE-MAP.md` | §7 rows 11–14 (filter, amp/envelope, LFO, effects), 34 (recovery scope); §8.2 losing unsaved work; §9 the N08 row; Q10 (no general undo) |

The MIDI Implementation was not needed. No third-party source informed any procedure.

## Per-step reconciliation

| Step | Targets | Mode | Learner-facing factual claims | Support |
|---|---|---|---|---|
| **N08-S01** Protect any work you want to keep | `filterSection`, `ampEnvSection` | `full` | Moving the knobs changes the loaded sound; an unsaved sound is lost on program change or power-off. | OM p.6 *Saving*: "The sound you create will change if you move a knob or select a different program, and will be lost when you switch off the JD-Xi's power." OM p.9 states the same for tone selection. |
| **N08-S02** Choose a sound worth changing | `digitalSynth1Button`, `toneButtons` | `full-plus-inset` | Part Select decides which part is edited; Tone `[-]` `[+]` step through sounds. | OM p.5 *Choosing a Part to Play* and *Choosing a Tone*. That a sustained sound makes changes easier to hear is listening advice, not a claim about the instrument. |
| **N08-S03** Decide what you want first | `filterSection`, `ampEnvSection`, `lfoSection`, `effectsSection` | `full` | **No factual claim about the instrument.** The step is a teaching move: name the goal before choosing a control. | Nothing to source — it asserts nothing about the JD-Xi. The vocabulary offered (darker, brighter, longer, shorter, sharper, smoother, stiller, more moving, more spacious) is taken from the master plan's own §9 list for this tutorial and its §3.3 permitted phrasing. The four highlighted sections are the ones the following five steps use. |
| **N08-S04** Brighter or darker | `cutoffKnob` | `full-plus-inset` | Cutoff sets how bright or dark the sound is. | OM p.8: "[Cutoff] knob — This knob specifies the filter cutoff frequency", with the section introduced as determining "the character and distinctive features of the sound". The step gives no frequency, curve or filter type — the practical framing is `DESIGN-RULES.md` §1's ear-first rule. "Small moves" is technique, not a documented constraint, and is written as advice. |
| **N08-S05** Shorter or longer | `envelopeKnob` | `full-plus-inset` | Turning left gives a shorter sound with a stronger attack; turning right gives a softer attack and longer release. | OM p.8, almost verbatim: "Turning the knob toward the left produces a shorter sound with a stronger attack; turning the knob toward the right makes the attack softer and the release longer." **Roland's A/D/S/R diagram on the same page is deliberately not used** — see *Deliberate omissions*. |
| **N08-S06** Smoother or sharper | `resonanceKnob`, `cutoffKnob` | `full-plus-inset` | Resonance emphasises the sound around where the filter is working; the peak follows Cutoff. | OM p.8: "Resonance emphasizes the sound in the region of the filter cutoff frequency." That the peak moves with Cutoff follows from that sentence plus Cutoff's own definition. The loudness caution in the recovery is ordinary gain behaviour, written as advice and paired with Master Volume (OM p.2 item 7), not asserted as a Roland statement. |
| **N08-S07** Still or moving | `lfoDepthKnob`, `lfoRateKnob` | `full-plus-inset` | LFO Depth sets how much movement is applied; Rate sets how fast. Zero Depth removes it. | OM p.9's LFO section — the `[Rate]` and `[Depth]` knobs. That Depth at zero applies nothing is the ordinary meaning of a depth control and is stated only in the recovery as a way back, not as a specification. **Destination is not mentioned**, so the step makes no claim about *what* moves. |
| **N08-S08** Dry or spacious | `reverbKnob`, `effectsOnOffButton` | `full-plus-inset` | The Reverb knob sets reverb depth; `[Effects ON/OFF]` changes which effects are in use, giving a with/without comparison. | OM p.9: "[Reverb] knob — Adjusts the depth of reverb"; "The combination changes each time you press the [Effects ON/OFF] button." The step claims no fixed number of presses or cycle length — the recovery says "keep pressing to step on through the combinations", which is what Roland's sentence supports. |
| **N08-S09** Compare with where you started | `shiftButton`, `enterButton` | `full-plus-inset` | `[Shift]` + `[Enter]` returns to the original sound after switching or editing. Doing so discards the edit. There is no redo. | OM p.5: "If you want to return to the original sound after you've switched or edited the sound, hold down the [Shift] button and press the [Enter] button." That this discards the edit is the plain meaning of returning to the original, and no restore-the-edit operation is documented anywhere. No general undo: `ROLAND-SOURCE-MAP.md` Q10. The step is scoped exactly to Roland's sentence — the sound — and its recovery repeats that it does not reach effects, pattern or saved data. |
| **N08-S10** Keeping an edit instead | `display` | `full-plus-inset` | A sound is kept only by saving the program; the JD-Xi cannot save sound settings as individual tones. | OM p.9 *Saving a Sound (Program) (WRITE)*, and OM p.10's MEMO: "The JD-Xi cannot save sound settings as individual tones." |

## Direct-entry safety

**N08 carries its preflight at `N08-S01`**, before the first knob move at `N08-S04`.

The tutorial's risk is the *overwriting* case of `DESIGN-RULES.md` §7a rather than the
discarding one: it selects no program, and it selects a tone only at `N08-S02`, where the
learner is deliberately choosing something to work on. Everything after that edits what is
loaded.

`N08-S09` is worth naming separately, because it is the one step in the Novice path that
**asks the learner to destroy their own work on purpose**. It is written as a decision rather
than an instruction — "Read this before you press anything. Then, if you want to" — states
the cost before the gesture, and its checkpoint accepts either outcome. A learner who keeps
their version has completed the step.

N08 assumes nothing about which program or tone is loaded, what the knobs are set to, whether
the sound has already been edited, or whether any effects are switched on.

## Destructive-risk handling

There is one destructive action, `[Shift]` + `[Enter]`, and it is offered rather than
required. The tutorial never claims it is an undo in general: `N08-S09`'s own text calls it
"your before-and-after — and your undo, which is the same thing", and the recovery lists
exactly what it does not reach.

The recovery also declines to offer false comfort. If a learner reverts and wishes they had
not, it says the version cannot be recovered — and then says something useful instead, which
is that they know which controls they moved and can make it again. That is true, and it is
the honest consequence of the method the tutorial has just taught.

## Deliberate omissions

- **Tone Edit is not opened.** The group structure, the per-parameter walk and the individual
  envelope stages all move to `I04`.
- **A/D/S/R as a curriculum.** OM p.8 prints a labelled envelope diagram with all four stages
  defined, directly beside the `[Envelope]` knob text this tutorial does quote. The diagram
  is not used, and the four stage names appear nowhere in N08. The brief rules out a "formal
  A/D/S/R curriculum", and `B06` already established the knob as one control that moves
  several things at once.
- **The filter's own envelope and depth** are not mentioned; `I04` owns them.
- **LFO Destination** is not mentioned, so `N08-S07` is about *how much* movement rather than
  *what* moves. `B06` covers destination as an ear-first discovery; `I05` is the movement lab.
- **Oscillator architecture** — partials, waveforms, Sub OSC, pulse width — appears nowhere,
  per the master plan's exclusion for this tutorial.
- **Numeric values.** No target number is given for any control. There is no correct value,
  and `N08-S03` makes the learner's own stated goal the measure instead.
