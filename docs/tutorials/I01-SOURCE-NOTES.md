# I01 — Build a bass sound — source notes

Source reconciliation record for I01. Content lives in `js/tutorials.js`
(`window.JDXI_TUTORIALS.I01`).

| Field | Value |
|---|---|
| Tutorial | **I01 — Build a bass sound** (intermediate, order 1, 10 steps, ~12 min) |
| Short title | Bass sound |
| Prerequisites | `["N09"]` — advisory, not a gate |
| Kind | **Operating procedure.** Selects a tone and edits it with panel controls; opens no menu. |
| Authored | 2026-08-31 |
| Reconciled | 2026-08-31, against `PRODUCT-CURRICULUM-MASTER-PLAN.md` §10 |

## Master-plan reconciliation (2026-08-31)

The brief's instruction for I01 is one sentence: **start from an appropriate existing bass
Tone and reshape it.** It then rules out three things by name — *no oscillator-up/init-patch
engineering exercise, no exact recipe, no save requirement.*

The previous I01 was an oscillator-up build. Its own summary said "build a bass from its raw
waveform up", and it never selected a bass tone at all: it picked the Analog Synth part, chose
a waveform, added the sub-oscillator, set the pulse width, and only then reached a filter.
Three of its eleven steps were oscillator architecture, two more were inside Tone Edit setting
filter and amp envelope parameters individually, and the last step required a save.

| Master-plan requirement | Before | Now |
|---|---|---|
| start from an appropriate existing bass Tone | **absent** | `I01-S02` |
| Cutoff / Resonance | yes | `I01-S03`, `I01-S04` |
| practical amp/envelope | Tone Edit, per stage | `I01-S05`, the panel Envelope knob |
| oscillator/waveform **only as needed** | three steps, mandatory | `I01-S07`, optional and last |
| optional Sub/Analog control **if useful** | mandatory | `I01-S06`, optional |
| finish with a usable bass | implied | `I01-S09`, tested against a pattern |
| no save requirement | save required | `I01-S10`, an offer |

**Pulse width was removed outright.** It is a genuine Analog Synth control (OM p.5) and it was
correctly described, but the master plan defers Pulse Width by name for the Beginner path and
lists only "optional sub/analog control if useful" here. One optional analog control is what
the plan allows, and the sub-oscillator is the one that is actually about being a bass.

**The two optional steps are placed last on purpose.** Changing the waveform usually means
redoing the filter, so a tutorial that starts there makes the learner do the shaping work
twice. `I01-S07` says so.

<!-- removed-steps:begin -->

Ids that no longer exist in I01: `I01-S11`.

<!-- removed-steps:end -->

## Sources consulted

| Source | Where it is used |
|---|---|
| Owner's Manual `eng07` | **p.5** *Choosing a Part to Play*, *Choosing a Tone — Analog Synth part* (Part Select then Tone `[-]` `[+]`; the `[Oscillator]` and `[Sub OSC]` buttons), the tone-number signal; **p.6** *Saving*; **p.8** FILTER (`[Cutoff]`, `[Resonance]`, and that only LPF is available for Analog Synth) and AMP/ENV (`[Envelope]`, with Roland's left/right sentence); **p.9** *Saving a Sound (Program) (WRITE)*; **p.10** the transport; **p.17** Troubleshooting |
| `docs/ROLAND-SOURCE-MAP.md` | §7 rows 11–12 (filter, amp/envelope); §8.2 losing unsaved work; §9 the I01 row |

The Parameter Guide and MIDI Implementation were not needed. No third-party source informed
any procedure.

## Per-step reconciliation

| Step | Targets | Mode | Learner-facing factual claims | Support |
|---|---|---|---|---|
| **I01-S01** Protect any work you want to keep | `toneButtons` | `full` | Selecting a tone and editing it both replace what is loaded. | OM p.9: "A sound that you create will change if you move the knobs or if you select a different tone or program." |
| **I01-S02** Start from a bass the JD-Xi already has | `analogSynthButton`, `toneButtons` | `full-plus-inset` | On the Analog Synth part, Part Select then Tone `[-]` `[+]` chooses a tone. There is no Category dial for this part. | OM p.5 *Analog Synth part*: "Use the Part Select button to choose a Analog Synth. Use the Tone [-] [+] buttons to select a tone." The absence of a Category dial is Roland's own structure: the dial appears under *Digital Synth 1/2 part* and in neither the Drums nor the Analog procedure. **No claim is made about how many analog tones there are** — the recovery says "there are not many", which is an observation about stepping through them rather than a count. |
| **I01-S03** Take the top off | `cutoffKnob` | `full-plus-inset` | Turning Cutoff left removes the bright part of the sound. | OM p.8: "[Cutoff] knob — This knob specifies the filter cutoff frequency", within a section described as determining "the character and distinctive features of the sound". On this part the filter is a low-pass, which is what makes "turning left removes the top" exact rather than approximate — OM p.8: "Analog Synth part — Only Analog LPF is available." |
| **I01-S04** Add growl, carefully | `resonanceKnob`, `cutoffKnob` | `full-plus-inset` | Resonance emphasises the sound around the cutoff point and follows Cutoff. | OM p.8: "Resonance emphasizes the sound in the region of the filter cutoff frequency." The loudness caution is ordinary gain behaviour written as advice, paired with Master Volume (OM p.2 item 7). |
| **I01-S05** Make it start and stop cleanly | `envelopeKnob` | `full-plus-inset` | Turning the Envelope knob left produces a shorter sound with a stronger attack. | OM p.8, almost verbatim: "Turning the knob toward the left produces a shorter sound with a stronger attack." Roland's A/D/S/R diagram on the same page is not used — see *Deliberate omissions*. |
| **I01-S06** Optional: add weight underneath | `subOscButton` | `full-plus-inset` | Sub OSC layers an additional sound an octave below (indicator lit) or two octaves below (blinking); the sub-oscillator is square wave only. | OM p.5: "[Sub OSC] button — This layers an additional sound onto the Oscillator. You can choose 1 octave down (lit) or 2 octaves down (blinking). The sub-oscillator is square wave only." The step gives the two settings and the stepping behaviour, and does not mention the square-wave detail, which is architecture the learner does not need. |
| **I01-S07** Optional: change the raw waveform | `oscillatorButton` | `full-plus-inset` | The Oscillator button selects the waveform the sound is built from; the lit indicator shows which. There are three. | OM p.5: "[Oscillator] button (waveform indicator) — This selects the waveform that is the basis of the Analog Synth part's sound. The waveform whose indicator is lit is selected", followed by three named waveforms. **The three names are deliberately not given** — the step describes them by sound ("buzzy and full", "soft and rounded", "hollow") and says outright that the learner does not need to know which is which. |
| **I01-S08** What this part will and will not do | `analogSynthButton`, `keys` | `full-plus-inset` | Only one filter type is available on this part. The square wave and sub-oscillator may not sound in the upper range of the keyboard. | OM p.8: "Analog Synth part — Only Analog LPF is available." The upper-range behaviour is OM p.17's Troubleshooting entry. Both are stated as documented behaviour rather than as faults, which is Roland's own framing. |
| **I01-S09** Hear it under a pattern | `playStopButton`, `keys` | `full` | No new claim: the transport plays the pattern while the learner plays the part. | OM p.10 for the transport; OM p.5 MEMO for the keys playing one part while a pattern sounds the rest. The listening advice is pedagogy, not a claim about the instrument. |
| **I01-S10** Keep it, if you want it | `shiftButton`, `menuWriteButton` | `full-plus-inset` | The sound belongs to the program; saving the program is the only way to keep it. | OM p.9 *Saving a Sound (Program) (WRITE)*, and OM p.10's MEMO that the JD-Xi cannot save sound settings as individual tones. Framed as an offer — the master plan sets no save requirement for I01. |

## Direct-entry safety

**I01 carries its preflight at `I01-S01`**, before the tone selection at `I01-S02`.

I01 assumes nothing about which program is loaded, which tone the Analog Synth part holds,
what the panel knobs are set to, or whether the sequencer has a pattern. `I01-S09` uses a
pattern if one exists and is written so the step still works if it does not — the learner
plays the bass either way.

## Destructive-risk handling

I01 performs no destructive action beyond the discard its preflight covers. It writes nothing:
the closing save is optional and, if taken, is N09's procedure performed on the learner's own
initiative.

One honest limitation is recorded rather than hidden. `I01-S07`'s recovery offers stepping on
through the waveforms to return to the original, which works because the control cycles — but
the tutorial does **not** claim the learner can know which waveform was originally selected on
a tone they did not build. Roland documents no readout for it beyond the lit indicator, which
tells you where you are and not where you were.

## Deliberate omissions

- **Pulse width** (OM p.5) is not used. See *Master-plan reconciliation*.
- **Tone Edit** is not opened. Per-stage envelope and filter-envelope work is `I04`'s.
- **Roland's A/D/S/R diagram** (OM p.8) is not used, and the four stage names appear nowhere.
- **The three waveform names** are not given, only their sounds.
- **The square-wave-only detail of the sub-oscillator** is omitted as architecture.
- **Analog Feel and Ring Switch** (PG) are not mentioned; the brief rules out making either a
  lesson, and neither belongs in a bass.
