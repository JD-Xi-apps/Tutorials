# I05 — LFO and movement — source notes

Source reconciliation record for I05. Content lives in `js/tutorials.js`
(`window.JDXI_TUTORIALS.I05`).

| Field | Value |
|---|---|
| Tutorial | **I05 — LFO and movement** (intermediate, order 5, 10 steps, ~11 min) |
| Short title | LFO and movement |
| Prerequisites | `["I04"]` — advisory, not a gate |
| Kind | **Comparative lab.** Panel controls only; opens no menu. |
| Authored | 2026-08-31 |
| Reconciled | 2026-08-31, against `PRODUCT-CURRICULUM-MASTER-PLAN.md` §10 |

## Master-plan reconciliation (2026-08-31)

The brief for I05 names five parameters not to teach **merely because they exist**: Tempo Sync,
Sync Note, Fade Time, Key Trigger, and exhaustive destinations — plus note-value theory.

The previous tutorial taught all five. Five of its ten steps were inside Tone Edit's LFO group
setting exactly those parameters, and the Sync Note step described speeds in beats per bar,
which is the note-value theory the master plan excludes from learner text.

What the master plan asks for is smaller and harder: one sound, Rate and Depth, slow versus fast
movement, **using movement sparingly**, combining it with the Mod control, and finishing with one
moving texture.

| Master-plan requirement | Before | Now |
|---|---|---|
| LFO Rate | via Sync Note, in beats | `I05-S04`, the panel knob |
| LFO Depth | one step | `I05-S03` |
| slow vs fast movement | **absent as a comparison** | `I05-S05` |
| **use movement sparingly** | **absent** | `I05-S06` |
| combine with Mod where useful | modulation depth set in a menu | `I05-S08`, the actual Mod control |
| finish with one moving texture | **absent** | `I05-S09` |

**`I05-S06` is the step that makes this tutorial worth having.** Everything before it turns
movement up to hear what it does; that step turns it back down until it is barely audible and
has the learner check by removing it. Almost every good use of an LFO is a small one, and no
amount of parameter coverage teaches that.

**The destination knob is kept** (`I05-S07`). It is a panel control, it needs no theory, and
without it Depth can appear to do nothing depending on where the LFO is pointed. What is not
taught is the *exhaustive* destination set the brief excludes — the step uses Roland's three
panel positions and describes them by sound.

## Sources consulted

| Source | Where it is used |
|---|---|
| Owner's Manual `eng07` | **p.5** *Choosing a Tone*; **p.6** *Saving*, *Applying Pitch Bend or Vibrato* (the Mod wheel); **p.9** *Modulating the Sound (LFO)* — the waveform select knob, `[Rate]`, `[Depth]`, `[Destination]` and its three documented results, and the NOTE that the LFO effect is not applied to the Drums part; **p.10** the transport |
| `docs/ROLAND-SOURCE-MAP.md` | §7 rows 13 (LFO), 42 (modulation); §8.2 losing unsaved work; §9 the I05 row |

## Per-step reconciliation

| Step | Targets | Mode | Learner-facing factual claims | Support |
|---|---|---|---|---|
| **I05-S01** Protect any work you want to keep | `lfoSection` | `full` | Movement settings belong to the sound and are lost on program change. | OM p.6 *Saving*. |
| **I05-S02** Choose a sound that holds | `digitalSynth1Button`, `toneButtons` | `full-plus-inset` | Part Select and Tone `[-]` `[+]` choose the sound. **The LFO effect is not applied to the Drums part.** | OM p.5 for selection; the Drums exclusion is OM p.9's NOTE, quoted in the recovery because a learner who tries it there would otherwise conclude the tutorial is broken. |
| **I05-S03** How much movement | `lfoDepthKnob` | `full-plus-inset` | The Depth knob specifies the depth of the LFO. | OM p.9: "[Depth] knob — This specifies the depth of the LFO." |
| **I05-S04** How fast | `lfoRateKnob` | `full-plus-inset` | The Rate knob determines the speed of the LFO. | OM p.9: "[Rate] knob — This determines the speed of the LFO." |
| **I05-S05** What slow is for, and what fast is for | `lfoRateKnob` | `full-plus-inset` | Descriptive only: slow movement reads as a sound that never settles, fast movement as a texture within the sound. | No Roland claim is made. These are listening descriptions of the same documented control at two ends of its range, offered as usage guidance. **No note values or tempo relationships are mentioned** — Tempo Sync and Sync Note, which would make speed musical rather than continuous, are excluded. |
| **I05-S06** Now use far less | `lfoDepthKnob` | `full-plus-inset` | Same control as S03; the step is a method, not a new fact. | OM p.9 for the knob. The toggle-to-check technique is pedagogy. |
| **I05-S07** Change what moves | `lfoDestinationKnob` | `full-plus-inset` | The Destination knob specifies what the LFO affects; the lit indicator shows which; pitch gives vibrato, filter gives a wah effect, amp gives tremolo. | OM p.9, quoted closely: "[Destination] knob — This specifies what the LFO will affect. The destination whose indicator is lit is selected", with Roland's own three-row table. Exactly the three panel positions, no more. |
| **I05-S08** Put some of it under your hand | `modControl`, `lfoDepthKnob` | `full-plus-inset` | The Mod control applies vibrato; fully toward you applies none; it stays where you leave it. | OM p.6 *Applying Pitch Bend or Vibrato*. The combination — a little automatic movement plus hand control — is the master plan's "combine with Mod where useful", and neither half asserts anything Roland does not state. |
| **I05-S09** Make one moving texture | `lfoRateKnob`, `lfoDepthKnob`, `lfoDestinationKnob` | `full-plus-inset` | Recap of the three controls. | OM p.9 for all three. No new claim. |
| **I05-S10** Hear it in context, then decide | `playStopButton`, `lfoDepthKnob` | `full` | No new claim. Depth at zero removes the movement. | OM p.10 for the transport; OM p.9 for the knob. "A busy pattern hides small movement" is a listening observation, given as one. |

## Direct-entry safety

**I05 carries its preflight at `I05-S01`**, before the first knob move at `I05-S03`.

I05 assumes nothing about which program or tone is loaded, where the LFO knobs are set, or
whether the Mod control is up. `I05-S10`'s recovery gives the way to leave the sound still —
Depth to zero and the Mod control fully toward you — because the Mod control famously does not
return by itself.

## Destructive-risk handling

No destructive action beyond the discard the preflight covers, and nothing is written.

The one thing worth naming is that `I05-S08` leaves the Mod control raised, which persists and
will affect every sound played afterwards. The closing step's recovery says so explicitly and
gives the fix, which is the same handling `B05` and `I03` use for the same control.

## Deliberate omissions

- **Tempo Sync, Sync Note, Fade Time and Key Trigger** are all excluded by name in the brief and
  none is mentioned. The previous tutorial taught all four.
- **Note values.** Sync Note's whole purpose is to express LFO speed in musical divisions, which
  cannot be taught without the vocabulary master plan §3.3 forbids. Removing the parameter
  removes the problem.
- **Exhaustive destinations.** Roland's panel offers three and the tutorial uses three. The
  deeper per-partial modulation routing (PG p.7) is not mentioned.
- **The LFO waveform knob** is on the panel and is not taught here. It changes the *shape* of the
  movement, which is a fourth variable in a tutorial whose lesson is restraint; the Hardware
  Explorer describes it.
- **Tone Edit** is not opened.
