# I02 — Build a pad sound — source notes

Source reconciliation record for I02. Content lives in `js/tutorials.js`
(`window.JDXI_TUTORIALS.I02`).

| Field | Value |
|---|---|
| Tutorial | **I02 — Build a pad sound** (intermediate, order 2, 10 steps, ~12 min) |
| Short title | Pad sound |
| Prerequisites | `["I01"]` — advisory, not a gate |
| Kind | **Directed sound design.** Digital part; the envelope built as I01's opposite. |
| Authored | 2026-08-31 |

## Sources consulted

| Source | Where it is used |
|---|---|
| Owner's Manual `eng07` | **p.5** *Choosing a Tone* → Digital Synth 1/2, the category dial and Tone buttons; **p.8** the envelope and its A/D/S/R definitions; **p.9** LFO, and the Reverb knob |
| Parameter Guide `e01` | **p.7** *How a Tone Is Structured* — "A digital synth tone contains three sets (Partials 1–3) of OSC (oscillator), FILTER (filter), AMP (amp), and LFO"; **pp.17–18** the digital tone's FILTER and AMP groups, their envelope parameters and the filter envelope Depth; **p.10** per-part Level |
| `docs/ROLAND-SOURCE-MAP.md` | §7 rows 6–7 (Digital Synth 1 and 2), 19 (AMP/ENV), 20 (LFO), 21 (effects); §9 the I02 row |

## Per-step reconciliation

| Step | Targets | Mode | Learner-facing factual claims | Support |
|---|---|---|---|---|
| **I02-S01** Protect any work you want to keep | `programValueButtons`, `toneButtons` | `full` | Selecting a tone and editing replace what is loaded. | OM p.6, p.9. |
| **I02-S02** Choose a digital part | `digitalSynth1Button` | `full-plus-inset` | A digital synth tone is made of three layers Roland calls partials, each with its own oscillator, filter, amp and LFO. | PG p.7, quoted closely. The consequence drawn — that this is why digital parts can sound wide in a way the analog part cannot — follows from PG p.7's contrast between the two structures (three partials against one oscillator plus sub). |
| **I02-S03** Start from something sustained | `categoryDial`, `toneButtons` | `full-plus-inset` | The Category dial and Tone buttons select the tone. | OM p.5 *Choosing a Tone*. |
| **I02-S04** Make it arrive slowly | `menuWriteButton`, `programValueButtons` | `full-plus-inset` | Attack is the time from pressing the key until the sound reaches full volume. | OM p.8's A definition; PG p.18's Amp Envelope Attack Time. |
| **I02-S05** Let it hang on | `cursorRightButton`, `programValueButtons` | `full-plus-inset` | Release is the time from letting go until the sound disappears. | OM p.8's R definition; PG p.18's Amp Envelope Release Time. |
| **I02-S06** Open the filter slowly too | `shiftButton`, `cursorRightButton` | `full-plus-inset` | The filter envelope has its own Depth and Attack; with Depth at zero nothing in it has any effect. | PG p.17's FILTER group: the filter envelope's stages and its Depth parameter. |
| **I02-S07** Add slow movement | `lfoRateKnob`, `lfoDepthKnob` | `full-plus-inset` | Rate is the speed of the LFO and Depth is its amount. | OM p.9: "[Rate] knob — This determines the speed of the LFO", "[Depth] knob — This specifies the depth of the LFO." |
| **I02-S08** Push it back with reverb | `reverbKnob` | `full-plus-inset` | The Reverb knob adjusts the depth of reverb; effect settings belong to the program and are shared by everything in it. | OM p.9 for the knob and for "Effect settings are saved individually for each program"; PG p.8: "Each program contains a single set of effect type selection and settings." |
| **I02-S09** Hear it in context | `playStopButton`, `keys` | `full` | No new claim. Per-part level is named as the place to fix balance. | PG p.10's per-part Level; `N06` teaches it. |
| **I02-S10** Keep the pad | `shiftButton`, `menuWriteButton` | `full-plus-inset` | Saving the program keeps the sound. | OM p.9, p.10 MEMO. |

## The envelope taught as a contrast

I02 sets the same four parameters `I01` set, in the opposite direction, and says so at
I02-S04: "This is exactly the parameter I01 kept short. Same control, opposite direction,
completely different instrument."

That is a teaching decision rather than a source claim, and it is why the two tutorials
sit next to each other. `I04` then names the four stages formally, with the learner
having already built two sounds out of them.

## Direct-entry safety

**I02-S01 is the protect-your-work preflight.** It names the "build on this same program
deliberately" path, because a learner following the guided sequence has a bass from `I01`
that belongs in the same program as this pad — which is what `I07` is about.

I02 assumes nothing about which tone is loaded (I02-S03 has the learner choose one by
ear), which part was selected, or any parameter's current value. I02-S06's `recoveryHelp`
covers the case where the sound is already fully bright and the filter envelope has
nowhere to open to.

## Deliberate omissions

- **Partials are named but not edited.** PG p.7 and p.15 allow each of the three to be
  switched on and off and edited separately; I02 uses the fact to explain why a digital
  part suits a pad, and leaves per-partial editing alone. Three layers of six groups each
  is more structure than a first pad needs.
- **MOD LFO** (PG pp.18–19) is not mentioned; the digital tone has a second LFO, and
  `I05` is where modulation is treated properly.
- **Effect routing** is deliberately not solved here. I02-S08's `whyItMatters` notes that
  the reverb is shared with the other parts and points at `I06`, rather than teaching Part
  Output in a sound-design tutorial.
- **No target value is given for any parameter.**
