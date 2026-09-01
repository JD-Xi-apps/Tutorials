# I02 — Build a pad sound — source notes

Source reconciliation record for I02. Content lives in `js/tutorials.js`
(`window.JDXI_TUTORIALS.I02`).

| Field | Value |
|---|---|
| Tutorial | **I02 — Build a pad sound** (intermediate, order 2, 10 steps, ~12 min) |
| Short title | Pad sound |
| Prerequisites | `["I01"]` — advisory, and I02 explicitly does not depend on I01's bass existing |
| Kind | **Operating procedure.** Selects a tone and edits it with panel controls; opens no menu. |
| Authored | 2026-08-31 |
| Reconciled | 2026-08-31, against `PRODUCT-CURRICULUM-MASTER-PLAN.md` §10 |

## Master-plan reconciliation (2026-08-31)

The brief lists four exclusions for I02: *no partials curriculum, no chord theory, no
dependence on I01's unsaved bass, no save requirement.* The previous tutorial broke three of
them.

| Issue | Before | Now |
|---|---|---|
| partials curriculum | old S02 explained that a digital tone is three partials, each with its own oscillator, filter, amp and LFO | removed entirely; the word does not appear |
| chord language | old S02 said "hold a chord of two or three keys" | `I02-S08` says "two or three keys", the master plan's own phrasing (§3.3) |
| dependence on I01 | old S01 read "If your bass from I01 is loaded and saved, you can build the pad on another part of the same program" | `I02-S01` states the opposite: nothing here needs I01 |
| save requirement | old S10 instructed a save | `I02-S10` is an offer |

Two further changes brought I02 in line with the master plan's own list for it.

**The envelope work moved to the panel.** The old tutorial went into Tone Edit for Attack, then
Release, then the filter envelope's Depth and Attack — four menu steps. The master plan asks
for "longer attack/release" and "smoother/darker filter", and the panel `[Envelope]` knob does
exactly the first in one move: Roland's own description is that turning it right "makes the
attack softer and the release longer", which is a pad in a sentence. Per-stage envelope work is
`I04`'s comparative lab.

**Octave and register choice was added** (`I02-S05`). The master plan lists it and the old
tutorial had nothing on it, which is a real gap: the same pad is unusable low and thin high, and
moving the whole keyboard is faster than remembering to play somewhere else.

## Sources consulted

| Source | Where it is used |
|---|---|
| Owner's Manual `eng07` | **p.5** *Choosing a Part to Play*, *Choosing a Tone — Digital Synth 1/2 part* (Category dial then Tone `[-]` `[+]`); **p.6** *Saving*, and *Changing the Keyboard Range in Octave Units* (±3 octaves, lit when shifted, both together resets to 0, no effect on the Drums part, saved in the program); **p.8** FILTER and AMP/ENV, with Roland's left/right sentence for `[Envelope]`; **p.9** the LFO knobs, the effects knobs and `[Effects ON/OFF]`, and *Saving a Sound (Program) (WRITE)*; **p.10** the transport |
| Parameter Guide `e01` | **p.10** — consulted to confirm `Mono/Poly` exists as a part parameter, which is why the step about holding several keys is hedged rather than universal. No I02 claim rests on the Parameter Guide alone. |
| `docs/ROLAND-SOURCE-MAP.md` | §7 rows 11–14 (filter, amp/envelope, LFO, effects), 41 (Octave); §8.2 losing unsaved work; §9 the I02 row |

## Per-step reconciliation

| Step | Targets | Mode | Learner-facing factual claims | Support |
|---|---|---|---|---|
| **I02-S01** Protect any work you want to keep | `toneButtons` | `full` | Selecting a tone and editing it replace what is loaded. Nothing in I02 needs I01's bass. | OM p.9 for the discard. The independence claim is a property of this tutorial, verified by inspection: no step reads any state I01 leaves behind. |
| **I02-S02** Start from something sustained | `digitalSynth1Button`, `categoryDial`, `toneButtons` | `full-plus-inset` | On a digital part, the Category dial chooses the type of sound and Tone `[-]` `[+]` selects within it. | OM p.5 *Choosing a Tone — Digital Synth 1/2 part*, steps 1–3. **The three-partial structure is not mentioned** — see *Deliberate omissions*. |
| **I02-S03** Make it slow at both ends | `envelopeKnob` | `full-plus-inset` | Turning the Envelope knob right makes the attack softer and the release longer. | OM p.8, verbatim in substance: "turning the knob toward the right makes the attack softer and the release longer." The step's failure mode — short notes never sounding — follows from a long attack and is offered as a recovery, not asserted as documented behaviour. |
| **I02-S04** Make it smoother and darker | `cutoffKnob`, `resonanceKnob` | `full-plus-inset` | Cutoff sets brightness; Resonance adds emphasis and is left low here. | OM p.8 for both. "Brightness is what pulls a sound forward" is a listening principle rather than a Roland claim, and is written as one. |
| **I02-S05** Choose where it sits | `octaveButtons`, `keys` | `full-plus-inset` | The OCTAVE buttons shift the keyboard in octave steps; pressing both together resets to 0; the octave setting is saved in the program. | OM p.6, quoted closely: "These shift the keyboard in steps of one octave (maximum ±3 octaves)… Pressing the OCTAVE [Down][Up] buttons simultaneously resets the value to 0", and the MEMO "The octave setting can be made individually for each part, and is saved in the program." |
| **I02-S06** Add slow movement | `lfoRateKnob`, `lfoDepthKnob` | `full-plus-inset` | LFO Rate sets the speed of the movement and Depth sets how much. | OM p.9: "[Rate] knob — This determines the speed of the LFO. [Depth] knob — This specifies the depth of the LFO." No destination is named, so the step claims nothing about *what* moves. |
| **I02-S07** Push it back with reverb | `reverbKnob`, `delayKnob` | `full-plus-inset` | The Reverb and Delay knobs adjust the depth of each. Effect settings are shared by the whole program. | OM p.9 for both knobs; the shared-effects fact is OM p.8: "Although the settings of the effect section are shared by the entire program, effects can be turned on/off individually for each part." Stated here as a forward pointer to `I06` rather than developed. |
| **I02-S08** Hold several keys | `keys` | `full` | Several keys held together sound fuller than one. Keys close together tend to blend. | The polyphonic claim is PG p.10's `Mono/Poly` part parameter, as at `B05-S03`. "Keys close together tend to blend" is a listening observation, offered as a tendency and not as a rule — and deliberately carries **no chord, interval or note-name language**. |
| **I02-S09** Hear it behind a pattern | `playStopButton`, `keys` | `full` | No new claim. | OM p.10 for the transport; OM p.5 MEMO for playing one part over a pattern. |
| **I02-S10** Keep it, if you want it | `shiftButton`, `menuWriteButton` | `full-plus-inset` | The sound belongs to the program; saving the program keeps it. | OM p.9 WRITE. Framed as an offer — the master plan sets no save requirement. |

## Direct-entry safety

**I02 carries its preflight at `I02-S01`**, before the tone selection at `I02-S02`.

The tutorial is written to be entered directly from anywhere. It assumes nothing about I01
having been done, about a bass existing on any part, about which program is loaded, or about the
octave state — `I02-S05` sets the octave deliberately and its recovery gives Roland's documented
reset.

## Destructive-risk handling

No destructive action beyond the discard the preflight covers. The closing save is optional.

`I02-S05` changes the octave, which is saved in the program and is therefore an unsaved edit
like any other. The step's recovery gives the documented way back — both OCTAVE buttons together
— and describes it exactly as Roland does, as setting the value to 0 rather than as restoring
whatever the program had.

## Deliberate omissions

- **Partials.** A digital tone contains three of them (PG p.7) and the previous tutorial said so.
  The master plan rules out a partials curriculum for I02, and nothing in building a pad requires
  knowing the structure exists.
- **Tone Edit** is not opened. Per-stage envelope work and the filter's own envelope are `I04`'s.
- **Chord language.** `I02-S08` never uses the word, per master plan §3.3.
- **`Mono/Poly`** (PG p.10) is not taught; it is the reason the polyphony claim is hedged, not a
  setting the learner is sent to change.
- **LFO destination** is not mentioned here — `I05` is the movement lab.
