# I03 — Build a lead sound — source notes

Source reconciliation record for I03. Content lives in `js/tutorials.js`
(`window.JDXI_TUTORIALS.I03`).

| Field | Value |
|---|---|
| Tutorial | **I03 — Build a lead sound** (intermediate, order 3, 10 steps, ~12 min) |
| Short title | Lead sound |
| Prerequisites | `["I02"]` — advisory, not a gate |
| Kind | **Directed sound design**, plus expressive performance controls. |
| Authored | 2026-08-31 |

## Sources consulted

| Source | Where it is used |
|---|---|
| Owner's Manual `eng07` | **p.5** *Choosing a Tone*; **p.6** *Applying Pitch Bend or Vibrato*, and *Shortcut to the Portamento Setting Screen* — the long press, [Tap] toggling portamento and the tempo knob setting portamento time; **p.8** the envelope; **p.16** the long-press shortcut in the shortcut list |
| Parameter Guide `e01` | **p.15** the digital tone's COMMON group — RING Switch and its documented consequences, Wave Shape, Analog Feel; **p.18** the AMP group's Attack and Sustain; **p.12** the analog tone's Porta Sw, Porta Time and Legato Sw (background for how portamento is expressed as parameters) |
| `docs/ROLAND-SOURCE-MAP.md` | §6.2 the long-press Portamento shortcut and its documented behaviour; §7 rows 42 (pitch bend/modulation), 13 (Menu/Write gestures); §9 the I03 row |

## Per-step reconciliation

| Step | Targets | Mode | Learner-facing factual claims | Support |
|---|---|---|---|---|
| **I03-S01** Protect any work you want to keep | `programValueButtons`, `toneButtons` | `full` | Selecting a tone and editing replace what is loaded. | OM p.6, p.9. |
| **I03-S02** Choose a part and a bright starting point | `digitalSynth2Button`, `categoryDial` | `full-plus-inset` | The Category dial and Tone buttons select the tone. | OM p.5. The rest is craft advice, not a Roland claim. |
| **I03-S03** Make it respond immediately | `menuWriteButton`, `programValueButtons` | `full-plus-inset` | A low Attack makes the sound start immediately; a high Sustain holds its level while the key is down. | OM p.8's A and S definitions; PG p.18's AMP group. |
| **I03-S04** Add instability on purpose | `shiftButton`, `cursorRightButton` | `full-plus-inset` | Analog Feel applies a kind of natural instability, producing the sort of unsteadiness characteristic of an analog synthesizer. | PG p.15, closely paraphrased: "Use this to apply '1/f fluctuation,' a type of randomness or instability that is present in many natural systems… By applying '1/f fluctuation' you can create the natural-sounding instability that is characteristic of an analog synthesizer." Roland's own term is deliberately not quoted — see *Deliberate omissions*. |
| **I03-S05** Try the metallic one | `cursorRightButton`, `programValueButtons` | `full-plus-inset` | Ring Switch multiplies two of the tone's layers, producing a complex metallic bell-like sound; the effect is more apparent when those layers are at different pitches; with it on, some pulse-width and detune settings cannot be used. | PG p.15: "By multiplying partial 1's OSC and partial 2's OSC, this creates a complex, metallic-sounding waveform like that of a bell", "Setting the partial 1 OSC and the partial 2 OSC to different pitches will make the ring modulator effect more apparent", and "If Ring Switch is turned on, the OSC Pulse Width Mod Depth, OSC Pulse Width, and SUPER SAW Detune of partial 1 and partial 2 cannot be used." The last is carried into `recoveryHelp` because it makes other parameters stop responding, which looks like a fault. |
| **I03-S06** Make notes slide into each other | `menuWriteButton`, `tapButton` | `full-plus-inset` | A long press of Menu/Write opens the PORTAMENTO screen, where [Tap] toggles portamento and the tempo knob sets portamento time. | OM p.6 *Shortcut to the Portamento Setting Screen*, including its button table, and OM p.16's shortcut list. |
| **I03-S07** Set the slide | `tapButton`, `tempoKnob` | `full-plus-inset` | On that screen the tempo knob adjusts portamento time rather than tempo. | OM p.6's table: "[Tempo] knob — Adjusts the portamento time." The point drawn about controls meaning different things in different screens is the same context-specificity `N01` teaches, recorded at `ROLAND-SOURCE-MAP.md` §6.2. |
| **I03-S08** Play it with both hands | `pitchControl`, `modControl` | `full-plus-inset` | Pitch bends and springs back; Mod applies vibrato and stays where it is left. | OM p.6 *Applying Pitch Bend or Vibrato*. |
| **I03-S09** Check it cuts through | `cutoffKnob` | `full-plus-inset` | Cutoff sets the filter cutoff frequency. | OM p.8. The advice to reach for brightness before volume is craft, and is presented as such. |
| **I03-S10** Keep the lead | `shiftButton`, `menuWriteButton` | `full-plus-inset` | Saving the program keeps the sound, portamento settings included. | OM p.9; portamento is a tone parameter (PG p.12), and tones are saved with the program (OM p.10 MEMO). |

## Why portamento is taught from the panel

The source map maps I03 to PG p.12's `Porta Sw`, `Porta Time` and `Legato Sw`, which are
**analog** tone parameters. I03 is built on a digital part, so teaching portamento from
that table would either force the tutorial onto the analog part or teach a parameter the
learner cannot find where they are.

Roland documents a panel route instead: a long press of `[Menu/Write]` opens the
PORTAMENTO screen, where `[Tap]` toggles portamento and the tempo knob sets the time
(OM p.6, listed again at OM p.16). That route is part-independent and needs no menu
navigation, so I03 uses it.

It also earns its place pedagogically: it is a second, vivid example of the
context-specific behaviour `N01` spends a tutorial on — the tempo knob is not the tempo
knob on that screen — and I03-S07's `whyItMatters` says so.

## Direct-entry safety

**I03-S01 is the protect-your-work preflight.** I03 assumes nothing about which part is
selected, which tone is loaded, whether portamento is currently on, or where the Pitch and
Mod controls are sitting.

I03-S08's `recoveryHelp` carries `B05`'s warning forward: the Mod control stays where it
is left, so a learner who walks away mid-tutorial would find every later sound wavering.

## Deliberate omissions

- **Roland's term "1/f fluctuation"** is not put in front of the learner. The parameter's
  effect is described in Roland's own words minus the term, which the audience has no use
  for; the term is recorded here so the claim remains traceable.
- **Wave Shape** (PG p.15) is passed over. It modulates partial 1 by the pitch of partial
  2 and has no effect on two of the waveforms — too many conditions for a step.
- **Legato and the analog `Porta Sw` parameters** (PG p.12) are omitted in favour of the
  panel route above.
- **Unison** (PG p.15) is not taught.
- **Pitch bend range** (PG p.12) is not set. It is per-tone, and `B05` already declines to
  state a fixed bend depth for the same reason.
