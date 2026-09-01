# I03 — Build a lead sound — source notes

Source reconciliation record for I03. Content lives in `js/tutorials.js`
(`window.JDXI_TUTORIALS.I03`).

| Field | Value |
|---|---|
| Tutorial | **I03 — Build a lead sound** (intermediate, order 3, 10 steps, ~12 min) |
| Short title | Lead sound |
| Prerequisites | `["I02"]` — advisory, not a gate |
| Kind | **Operating procedure.** Panel editing, plus one optional shortcut screen. |
| Authored | 2026-08-31 |
| Reconciled | 2026-08-31, against `PRODUCT-CURRICULUM-MASTER-PLAN.md` §10 |

## Master-plan reconciliation (2026-08-31)

The brief names three things not to make the lesson: **Analog Feel, Ring Mod, and required
Portamento.** The previous I03 made all three central — two full steps on Analog Feel and Ring
Switch inside Tone Edit's COMMON group, and two more on a mandatory portamento setup.

The master plan's own list for I03 is different and simpler: a suitable starting Tone, a
brighter and more focused filter, a faster envelope, Pitch and Mod, tasteful Delay and Reverb,
optional Portamento *via Quick Reference*, and a lead you can play live.

| Master-plan requirement | Before | Now |
|---|---|---|
| suitable existing Tone | yes | `I03-S02` |
| brighter/more focused filter | **absent** | `I03-S04` |
| faster envelope | Tone Edit Attack and Sustain | `I03-S03`, the panel Envelope knob |
| Pitch | one step combining both | `I03-S06` |
| Mod | one step combining both | `I03-S07` |
| tasteful Delay/Reverb | **absent** | `I03-S05` |
| Portamento **optional** | two steps, required | `I03-S08`, one step, optional |
| finish with a live-playing lead | partial | `I03-S09` |

**Analog Feel and Ring Switch were removed outright.** Both were accurately sourced and both
are real — but they are Tone Edit COMMON parameters, they are named exclusions, and neither is
needed to make a lead. Ring Switch in particular produces "something quite unmusical" by the old
step's own admission, which is a strange thing to put in the middle of building a sound the
learner is meant to perform on.

**Pitch and Mod were split into two steps.** The old tutorial gave them one step between them,
which under-served the master plan's listing of both and, more practically, hid the difference
that matters: Pitch springs back on its own and Mod does not. That distinction is a documented
Roland fact and the commonest cause of "everything is wobbling and I do not know why".

**Portamento is now one optional step** that names Quick Reference as the place to find the
procedure again, which is exactly what the master plan §12 prescribes for it.

## Sources consulted

| Source | Where it is used |
|---|---|
| Owner's Manual `eng07` | **p.5** *Choosing a Part to Play*, *Choosing a Tone — Digital Synth 1/2 part*; **p.6** *Saving*, *Applying Pitch Bend or Vibrato* (both wheels and their return behaviour), *Shortcut to the Portamento Setting Screen* (long-press `[Menu/Write]`; `[Tap]` on/off; `[Tempo]` knob sets time; `[Exit]` leaves); **p.8** FILTER and AMP/ENV with Roland's left/right sentence; **p.9** the effects knobs, `[Effects ON/OFF]`, and *Saving a Sound (Program) (WRITE)*; **p.10** the transport, *Muting a specific part* |
| `docs/ROLAND-SOURCE-MAP.md` | §7 rows 11–14 (filter, amp/envelope, effects), 42 (Pitch bend / modulation), 48 (Portamento); §8.2 losing unsaved work; §9 the I03 row; Q8 (Pitch/Mod wording) |

## Per-step reconciliation

| Step | Targets | Mode | Learner-facing factual claims | Support |
|---|---|---|---|---|
| **I03-S01** Protect any work you want to keep | `toneButtons` | `full` | Selecting a tone and editing it replace what is loaded. | OM p.9. |
| **I03-S02** Start from something bright | `digitalSynth2Button`, `categoryDial`, `toneButtons` | `full-plus-inset` | Part Select, Category dial and Tone `[-]` `[+]` choose a digital tone. | OM p.5 *Choosing a Tone — Digital Synth 1/2 part*. That a bright starting point leaves more room than a dull one is a design principle, written as such. |
| **I03-S03** Make it immediate | `envelopeKnob` | `full-plus-inset` | Turning the Envelope knob left produces a shorter sound with a stronger attack. | OM p.8, verbatim in substance. The step distinguishes a fast *start* from a short *note* in its recovery, which is the practical consequence of a control that moves both. |
| **I03-S04** Make it brighter and more focused | `cutoffKnob`, `resonanceKnob` | `full-plus-inset` | Cutoff sets brightness; Resonance emphasises the sound around the cutoff point. | OM p.8 for both. The loudness caution is gain behaviour, written as advice and paired with Master Volume. |
| **I03-S05** Add a little space | `delayKnob`, `reverbKnob` | `full-plus-inset` | The Delay and Reverb knobs adjust the depth of each. | OM p.9: "[Delay] knob — Adjusts the depth of delay", "[Reverb] knob — Adjusts the depth of reverb." That delay suits leads better than heavy reverb is a listening judgement, given as one. |
| **I03-S06** Bend into a note | `pitchControl` | `full-plus-inset` | Moving the Pitch control away raises the pitch and toward lowers it; it returns to the centre when released; it affects notes that are sounding. | OM p.6: "[Pitch] wheel — This varies the pitch. Moving the wheel toward yourself lowers the pitch. Moving it away from yourself raises the pitch. When you release your hand from the wheel, it returns to the center." |
| **I03-S07** Add vibrato to held notes | `modControl` | `full-plus-inset` | The Mod control applies vibrato; fully toward you applies none; moving it away increases it; it stays where you leave it. | OM p.6: "[Mod] wheel — This applies vibrato. When the wheel is all the way toward yourself, no effect is applied. Moving the wheel away from yourself increases the effect. The wheel does not move from its position when you release your hand." |
| **I03-S08** Optional: make notes slide into each other | `menuWriteButton`, `tapButton` | `full-plus-inset` | A long press on `[Menu/Write]` opens the PORTAMENTO screen; `[Tap]` turns portamento on and off; the tempo knob adjusts portamento time; `[Exit]` leaves. | OM p.6 *Shortcut to the Portamento Setting Screen*, all four facts: "Long-press the [Menu/Write] button. The PORTAMENTO screen appears. [Tap] button — Turns portamento on/off. [Tempo] knob — Adjusts the portamento time. Press the [Exit] button to exit this screen." Marked optional, and Quick Reference is named as the place the procedure lives on its own. |
| **I03-S09** Check it cuts through | `playStopButton`, `cutoffKnob` | `full` | No new claim. Muting a part is `[Shift]` + Part Select. | OM p.10 for the transport and for Part Mute. "Open Cutoff before you reach for the level" is a mixing principle, written as advice. |
| **I03-S10** Keep it, if you want it | `shiftButton`, `menuWriteButton` | `full-plus-inset` | The sound belongs to the program. | OM p.9 WRITE. An offer, not a requirement. |

## Direct-entry safety

**I03 carries its preflight at `I03-S01`**, before the tone selection at `I03-S02`.

I03 uses Digital Synth 2 partly so that a pad built in I02 on Digital Synth 1 survives — but
`I03-S01` is explicit that this does not make an unsaved pad safe, because the program is still
what a save keeps. The tutorial assumes nothing about I02 having been done.

## Destructive-risk handling

No destructive action beyond the discard the preflight covers.

`I03-S08` is the one step that changes a setting outside the sound, and it is optional. Its
recovery gives the documented way back — press `[Tap]` again, then `[Exit]` — and warns about
the gesture that most often goes wrong here, which is releasing `[Menu/Write]` too early and
getting the ordinary Menu instead. It also flags that the tempo knob is doing a different job on
that screen, which is a real trap: a learner who turns it expecting tempo gets portamento time.

## Deliberate omissions

- **Analog Feel and Ring Switch** are not taught. Named exclusions; see *Master-plan
  reconciliation*.
- **Tone Edit** is not opened at all.
- **Portamento parameters beyond the shortcut screen** (PG's per-tone `Porta Sw`, `Porta Time`
  and `Legato Sw`, PG p.12) are not mentioned. The shortcut screen is the whole of what a
  performing learner needs.
- **Roland's A/D/S/R diagram** (OM p.8) is not used; `I04` owns per-stage envelope work.
