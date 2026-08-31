# I01 — Build a bass sound — source notes

Source reconciliation record for I01. Content lives in `js/tutorials.js`
(`window.JDXI_TUTORIALS.I01`).

| Field | Value |
|---|---|
| Tutorial | **I01 — Build a bass sound** (intermediate, order 1, 11 steps, ~13 min) |
| Short title | Bass sound |
| Prerequisites | `["N09"]` — advisory, not a gate |
| Kind | **Directed sound design.** Analog Synth part, from the waveform up. |
| Authored | 2026-08-31 |

## Sources consulted

| Source | Where it is used |
|---|---|
| Owner's Manual `eng07` | **p.2** item 5 (the analog oscillator controls); **p.5** *Analog Synth part* — the [Oscillator] button and its three waveforms, [Sub OSC] and its two settings, the pulse width knob and Roland's description of it; the Vocoder/AutoPitch note; **p.8** FILTER, and "Analog Synth part — Only Analog LPF is available"; **p.9** the WRITE cross-reference |
| Parameter Guide `e01` | **p.4** the note that the analog square wave and Sub OSC may not sound in the upper range; **p.7** the analog tone's structure — analog OSC, Sub OSC and filter with digitally controlled amp and LFO, each with its own envelope; **pp.12–13** the analog tone's FILTER and AMP groups and their envelope parameters |
| `docs/ROLAND-SOURCE-MAP.md` | §7 rows 8 (Analog Synth), 18 (filter), 19 (AMP/ENV), 30 (bass-line creation); §9 the I01 row |

## Per-step reconciliation

| Step | Targets | Mode | Learner-facing factual claims | Support |
|---|---|---|---|---|
| **I01-S01** Protect any work you want to keep | `programValueButtons`, `toneButtons` | `full` | Selecting a tone and editing replace what is loaded. | OM p.6, p.9. |
| **I01-S02** Select the Analog Synth | `analogSynthButton` | `full-plus-inset` | The part has analog circuits for oscillator, sub-oscillator and filter, and is the only part with waveform controls on the panel. | OM p.4 / PG p.7: "For an analog synth tone, the oscillator, sub-oscillator, and filter sections consist of analog circuits." That no other part has panel waveform controls is the panel itself (OM pp.2–3's numbered list), where these appear only under the Analog Synth heading. The Vocoder/AutoPitch caveat is OM p.5 / p.7. |
| **I01-S03** Choose the oscillator waveform | `oscillatorButton` | `full-plus-inset` | The button selects the waveform the sound is built from; the lit indicator shows which; Roland offers sawtooth, triangle and square. | OM p.5: "[Oscillator] button (waveform indicator) — This selects the waveform that is the basis of the Analog Synth part's sound. The waveform whose indicator is lit is selected." The three waveforms are Roland's list. The characterisations ("buzzy", "hollow") are listening cues. |
| **I01-S04** Add the sub-oscillator | `subOscButton` | `full-plus-inset` | Sub OSC layers an additional sound; one octave down when lit, two when blinking; it is square wave only. | OM p.5: "[Sub OSC] button — This layers an additional sound onto the Oscillator. You can choose 1 octave down (lit) or 2 octaves down (blinking). The sub-oscillator is square wave only." |
| **I01-S05** Shape the square wave | `pulseWidthKnob` | `full-plus-inset` | The knob sets the pulse width when the square wave is selected; lower values narrow it toward a square wave, higher values widen it into a more distinctive sound. | OM p.5, closely paraphrased: "If Oscillator is set to [square wave], this knob specifies the width of the upper portion of the pulse wave… Lowering the value makes the pulse width narrower until it approaches a square wave (pulse width = 50%). Raising the value makes the pulse width wider, producing a more distinctive sound." |
| **I01-S06** Close the filter down | `cutoffKnob` | `full-plus-inset` | On the Analog Synth part only a low-pass filter is available. | OM p.8: "Analog Synth part — Only Analog LPF is available." The `recoveryHelp` states the Type button will not offer other types here, which is the same sentence read from the panel's side. |
| **I01-S07** Add resonance carefully | `resonanceKnob` | `full-plus-inset` | Resonance emphasizes the sound around the cutoff frequency. | OM p.8. The loudness caution is generic care wording. |
| **I01-S08** Give the filter its own envelope | `menuWriteButton`, `shiftButton` | `full-plus-inset` | The filter envelope has a Depth and its own stages; with Depth at zero the filter envelope does nothing. | PG p.13's analog FILTER group: the envelope's Attack, Decay, Sustain and Release, and "Depth −63–+63 — Specifies the direction and depth to which the cutoff frequency will change." That zero depth means no movement is that parameter's own definition. |
| **I01-S09** Tighten the amp envelope | `shiftButton`, `cursorRightButton` | `full-plus-inset` | The amp envelope's Decay and Release control how a note ends. | OM p.8's A/D/S/R definitions; PG p.13's analog AMP group. |
| **I01-S10** What the analog part will and will not do | `analogOscSection` | `full-plus-inset` | Only the low-pass filter is available; the square wave and Sub OSC may not produce sound in the upper range. | OM p.8 for the first; PG p.4 for the second, quoted closely: "Due to the characteristics of the analog circuitry, the Square wave and SubOSC of the analog part might not produce sound in the upper range of the keyboard." |
| **I01-S11** Keep the bass you built | `shiftButton`, `menuWriteButton` | `full-plus-inset` | The sound belongs to the program; saving the program is the only way to keep it. | OM p.9, p.10 MEMO. |

## Direct-entry safety

**I01-S01 is the protect-your-work preflight.** I01 assumes nothing about which part was
selected on entry, which tone the analog part holds, or where any knob currently sits —
every step asks the learner to turn a control and listen rather than to reach a value.

I01-S02's `recoveryHelp` covers the one documented reason the whole part can be silent
(Vocoder/AutoPitch selected on the Category dial), which a learner arriving directly could
easily be in.

## Two documented limits are taught, not discovered

Both of the Analog Synth part's documented restrictions get explicit treatment rather
than being left as surprises, because both look exactly like faults:

- **Low-pass only** (OM p.8). Pressing the FILTER Type button on this part does not
  offer the four types `B06` and `I04` describe. I01-S06's `recoveryHelp` says so.
- **The square wave and Sub OSC may not sound high up** (PG p.4). This is the more
  alarming one — a bass that works and then goes silent when played an octave up. It gets
  its own step (I01-S10), with the reason and the practical answer.

## Deliberate omissions

- **Analog tone parameters beyond the filter and amp envelopes** (PG pp.12–14) are not
  walked through. Portamento and legato appear in `I03`; the LFO group is `I05`.
- **The pitch envelope** (PG p.7 shows the analog tone has one) is not taught. It is a
  third envelope on top of two the learner has only just met separately.
- **No target value is given for any parameter.** Directions are given only where Roland
  states them.
