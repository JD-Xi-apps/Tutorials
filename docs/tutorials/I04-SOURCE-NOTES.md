# I04 — Filter and envelope shaping — source notes

Source reconciliation record for I04. Content lives in `js/tutorials.js`
(`window.JDXI_TUTORIALS.I04`).

| Field | Value |
|---|---|
| Tutorial | **I04 — Filter and envelope shaping** (intermediate, order 4, 10 steps, ~12 min) |
| Short title | Filter and envelope |
| Prerequisites | `["I03"]` — advisory, not a gate |
| Kind | **Conceptual, with hands on.** Names the two tools the learner has been using. |
| Authored | 2026-08-31 |

## Sources consulted

| Source | Where it is used |
|---|---|
| Owner's Manual `eng07` | **p.8** *Adjusting the Brightness and Thickness (FILTER)* — the four digital filter types, the analog restriction, the Cutoff and Resonance knobs and the Type button; *Adjusting the Loudness and Envelope (AMP/ENV)* — the envelope diagram and the A/D/S/R definitions; **p.5** the `[Shift]` + `[Enter]` revert |
| Parameter Guide `e01` | **pp.17–18** the digital tone's FILTER and AMP groups — the filter envelope's Depth ("Specifies the direction and depth"), the four amp envelope stages, and Level V-Sens; **pp.12–13** the analog equivalents; **pp.23–25** the Drum Kit's TVF and TVA |
| `docs/ROLAND-SOURCE-MAP.md` | §7 rows 18 (filter), 19 (AMP/ENV); §9 the I04 row |

## Per-step reconciliation

| Step | Targets | Mode | Learner-facing factual claims | Support |
|---|---|---|---|---|
| **I04-S01** Protect any work you want to keep | `display` | `full-plus-inset` | Editing replaces what is loaded; `[Shift]` + `[Enter]` returns to the original sound. | OM p.6, p.9; OM p.5 for the revert, in scope because these are sound edits. |
| **I04-S02** Get a bright, steady sound | `digitalSynth1Button`, `toneButtons` | `full-plus-inset` | A filter can only remove what is present. | The plain meaning of OM p.8's filter description and its diagrams, which draw cut regions rather than added content. |
| **I04-S03** The four filter types | `filterTypeButton`, `cutoffKnob` | `full-plus-inset` | Digital parts offer low-pass, high-pass, band-pass and peaking; the lit indicator shows which; the Analog Synth part has low-pass only. | OM p.8: "Digital Synth/Drums part — You can use Digital LPF (Low Pass Filter), HPF (High Pass Filter), BPF (Band Pass Filter), or PKG (Peaking Filter)", "The filter whose indicator is lit is selected", "Analog Synth part — Only Analog LPF is available." The plain-language gloss of what each removes follows OM p.8's own diagrams, which draw the cut region for each type. |
| **I04-S04** Depth decides direction as well as amount | `menuWriteButton`, `programValueButtons` | `full-plus-inset` | The filter envelope's Depth specifies the direction as well as the depth of the change; a negative value closes the filter as the envelope rises. | PG p.17: "Depth −63–+63 — Specifies the direction and depth to which the cutoff frequency will change." The sign convention is Roland's range; the audible consequence is stated as what the learner will hear, and the step has them try both. |
| **I04-S05** Attack and decay | `shiftButton`, `programValueButtons` | `full-plus-inset` | Attack is the time to reach maximum level; decay is the fall from maximum to the sustain level. | OM p.8's A and D definitions, quoted almost intact. |
| **I04-S06** Sustain is a level, not a time | `cursorRightButton`, `programValueButtons` | `full-plus-inset` | Sustain is the volume held while the key is down; the other three are times. | OM p.8: "S: Sustain time — Volume at which the sound will be sustained while you hold down the key." Roland's own label says *time* while its definition says *volume*; I04 follows the definition, and says plainly that sustain is a level. See *One place Roland's label and definition disagree*. |
| **I04-S07** Release is what happens after you | `cursorRightButton`, `programValueButtons` | `full-plus-inset` | Release is the time from releasing the key until the sound decays. | OM p.8's R definition. |
| **I04-S08** Two envelopes, one sound | `shiftButton`, `cursorRightButton` | `full-plus-inset` | The amp envelope shapes loudness and the filter envelope shapes brightness; they are separate. | PG pp.17–18: two separate envelopes in two separate groups. |
| **I04-S09** Make it respond to your hands | `cursorRightButton`, `programValueButtons` | `full-plus-inset` | Level velocity sensitivity decides how much the volume varies with playing strength, and runs both ways from zero. | PG p.18: "Level V-Sens (Amp Level Velocity Sense) −63–+63 — Specifies how the volume will vary according to the strength with which you play the keyboard." |
| **I04-S10** The same idea on the Drums part | `drumsButton` | `full-plus-inset` | The Drums part has the same tools under different names — TVF and TVA — and each instrument has its own set. | PG p.8: "TVF (Time Variant Filter) — This specifies how the frequency components of the sound change over time. TVA (Time Variant Amplifier) — This creates volume changes and specifies the pan." PG p.7: a kit contains 26 partials of WAVE, TVF and TVA. That the panel knobs act on the most recently played drum instrument follows OM p.11's TR-REC behaviour and OM p.8's note that the Drums part can be edited individually for each instrument. |

## One place Roland's label and definition disagree

Roland's envelope diagram at OM p.8 labels the third stage **"S: Sustain time"** and then
defines it as **"Volume at which the sound will be sustained while you hold down the
key"** — a level, not a time. The Parameter Guide's own parameter is a level too.

I04-S06 teaches the definition rather than the label, and makes the point explicitly
("Sustain is a level, not a time"), because the mismatch is exactly what makes sustain the
stage learners misunderstand. This is not a conflict between sources — both Roland
documents describe a level — so it is not an escalation; it is a label that reads as a
fourth time value when it is not, and the tutorial says so.

## Direct-entry safety

**I04-S01 is the protect-your-work preflight**, and it names the documented revert in the
same breath, because I04 is a tutorial of deliberate experiments and the learner will want
a way back repeatedly.

I04 assumes nothing about which filter type is currently selected, what any envelope stage
is set to, or which part was selected on entry. I04-S03's `recoveryHelp` covers the case
where the Type button offers only one type — the learner is on the analog part — and
I04-S05's covers hearing no decay because sustain is at maximum.

## Deliberate omissions

- **Filter slope** (OM p.8: "You can change the slope of the filter") is named nowhere.
  It is real and documented, but it is a refinement on a distinction the learner has only
  just met.
- **Key follow** (PG p.18's Level KF) is not taught, although it sits beside velocity
  sensitivity. One responsiveness parameter is enough for one step.
- **The filter envelope's own velocity sensitivity** is omitted for the same reason.
- **Drum TVF/TVA parameters** are named as existing (I04-S10) but not opened. Editing one
  instrument of a kit is a level of detail beyond this tutorial's purpose.
