# B06 — Change the sound with knobs — source notes

Source reconciliation record for B06. Content lives in `js/tutorials.js`
(`window.JDXI_TUTORIALS.B06`).

| Field | Value |
|---|---|
| Tutorial | **B06 — Change the sound with knobs** (beginner, order 6, 11 steps, ~10 min) |
| Short title | Sound knobs |
| Prerequisites | `["B05"]` — advisory, not a gate |
| Kind | **Operating procedure, and the first tutorial that edits a sound rather than choosing one.** |
| Authored | 2026-08-30 |

Learning goals as authored:

1. Change the brightness of a sound and hear it happen.
2. Change how a sound starts and how it fades.
3. Add movement with the LFO and take it away again.
4. Know what happens to these changes when you walk away.

## Sources consulted

| Source | Where it is used |
|---|---|
| Owner's Manual `eng07` | **p.2** items 12 (FILTER), 13 (AMP/ENV); **p.3** item 14 (LFO); **p.5** the missing-tone-number signal and the [Shift] + [Enter] revert; **p.6** *Saving* — knob moves change the sound and it is lost at power-off; **p.8** *Adjusting the Brightness and Thickness (FILTER)*, *Adjusting the Loudness and Envelope (AMP/ENV)*, the envelope diagram, "If you want to edit A/D/S/R separately, enter Tone Edit"; **p.9** *Modulating the Sound (LFO)* including the destination table and "The LFO effect is not applied to the Drums part" |
| Parameter Guide `e01` | pp.12–14 (analog tone: filter, amp, LFO), pp.17–19 (digital tone) — consulted to confirm that the panel knobs address per-part tone parameters, which is what makes the `[Shift] + [Enter]` scope argument below correct |
| `docs/ROLAND-SOURCE-MAP.md` | §7 rows 18 (Filter), 19 (AMP/ENV), 20 (LFO), 34 (backing out of an unwanted edit); §8.2 losing unsaved work; §9 the B06 row; Q10 (no universal undo) |

## Per-step reconciliation

| Step | Targets | Mode | Learner-facing factual claims | Support |
|---|---|---|---|---|
| **B06-S01** Pick a sound you can hear clearly | `digitalSynth1Button` | `full-plus-inset` | Selecting a part decides what the keys play. | OM p.5 *Choosing a Part to Play*. Preferring a sustained sound is pedagogy, not a claim. |
| **B06-S02** Protect any work you want to keep | `filterSection`, `ampEnvSection`, `lfoSection` | `full` | Moving the knobs changes the sound that is loaded; the change is not saved; there is no undo; selecting a different program or switching off loses it. A missing tone number on the display means the sound has been edited. | OM p.6 *Saving*: "The sound you create will change if you move a knob or select a different program, and will be lost when you switch off the JD-Xi's power." OM p.9 repeats it. The missing tone number is OM p.5's asterisk: "Sounds that don't show a tone number are sounds that have been edited for an individual program." No undo: `ROLAND-SOURCE-MAP.md` §7 row 34, Q10. |
| **B06-S03** Open and close the filter | `cutoffKnob` | `full-plus-inset` | Cutoff is in the FILTER section and sets the filter cutoff frequency; the filter determines the character of the sound. | OM p.8: "The FILTER section contains parameters that determine the character and distinctive features of the sound. [Cutoff] knob (Cutoff indicator) — This knob specifies the filter cutoff frequency." "Darker and more muffled" is a listening cue for a closing low-pass filter, and the step is written so the learner discovers the direction by turning rather than being promised one — see *Deliberate omissions*. |
| **B06-S04** Add emphasis | `resonanceKnob`, `cutoffKnob` | `full-plus-inset` | Resonance emphasizes the sound in the region of the cutoff frequency. | OM p.8: "[Resonance] knob — Resonance emphasizes the sound in the region of the filter cutoff frequency." That the peak follows Cutoff is that sentence plus OM p.8's own filter diagrams, which draw the resonance peak at the cutoff point. The loudness caution in the recovery is generic care, not a Roland claim. |
| **B06-S05** Change the filter type | `filterTypeButton` | `full-plus-inset` | The Type button switches the filter type; the lit indicator shows which is selected; the digital parts offer four types and the Analog Synth only a low-pass filter. | OM p.8: "[Type] button — This button switches the filter type (for Analog Synth, only LPF is available)", "The filter whose indicator is lit is selected", "Digital Synth/Drums part — You can use Digital LPF…, HPF…, BPF…, or PKG…", "Analog Synth part — Only Analog LPF is available." The example effect ("thinning it out from below instead of darkening it from above") describes a high-pass versus low-pass difference, which OM p.8's own diagrams show. |
| **B06-S06** Set the part's own level | `levelKnob` | `full-plus-inset` | The AMP/ENV Level knob sets the volume of the sound; Master Volume sets what goes to the outputs and headphones. | OM p.8: "The AMP section contains parameters that control the volume. [Level] knob — This sets the volume." OM p.2 item 7: "[Master Volume] knob — Adjusts the volume that is output from the OUTPUT jacks and PHONES jack." The distinction between them is those two sentences read together. That Level is per-part is PG p.10. |
| **B06-S07** Change the shape of the note | `envelopeKnob` | `full-plus-inset` | Turning left produces a shorter sound with a stronger attack; turning right makes the attack softer and the release longer. The knob adjusts A/D/S/R together. Editing them separately lives in Tone Edit. | OM p.8, quoted almost intact: "[Envelope] knob — Turning the knob toward the left produces a shorter sound with a stronger attack; turning the knob toward the right makes the attack softer and the release longer." and "The [Envelope] knob effectively adjusts the A/D/S/R parameters in a single operation. … If you want to edit A/D/S/R separately, enter 'Tone Edit'." The forward reference to `N08` matches the architecture's role for that tutorial. |
| **B06-S08** Make the sound move by itself | `lfoDepthKnob` | `full-plus-inset` | The LFO makes something about the sound change repeatedly on its own; Depth sets how much; the LFO is not applied to the Drums part. | OM p.9: "LFO stands for Low-Frequency Oscillator… By using the LFO to modulate various aspects of the audio signal, you can apply effects such as vibrato or tremolo." "[Depth] knob — This specifies the depth of the LFO." NOTE: "The LFO effect is not applied to the Drums part." The link back to B05's Mod control is sound: OM p.6 describes the Mod wheel as applying vibrato, and OM p.9 names vibrato as an LFO effect. |
| **B06-S09** Change the speed and the target | `lfoRateKnob`, `lfoDestinationKnob` | `full-plus-inset` | Rate is the speed of the LFO; Destination chooses what it affects and the lit indicator shows which; pitch gives vibrato, filter gives a wah effect, amp gives tremolo. | OM p.9: "[Rate] knob — This determines the speed of the LFO." "[Destination] knob — This specifies what the LFO will affect. The destination whose indicator is lit is selected." and the destination table: "Pitch — Applying LFO to the pitch produces vibrato. Filter — …produces a wah effect. Amp — …produces tremolo." That Depth at zero stops the effect regardless of Rate and Destination is the meaning of depth, and is offered as recovery rather than asserted as a Roland sentence. |
| **B06-S10** Where these changes went | `display` | `full-plus-inset` | A sound that has been edited shows no tone number. The changes live in a working area; selecting another tone or program replaces them; power-off loses them; the stored sound is undamaged. | OM p.5 asterisk (missing tone number); OM p.6 and p.9 (*Saving*). "Nothing you have done has damaged the stored sound" is the corollary Roland states by telling you to save if you want to keep an edit — the stored program is only changed by WRITE (OM p.9). |
| **B06-S11** Go back to the original sound | `shiftButton`, `enterButton` | `full-plus-inset` | Holding Shift and pressing Enter returns to the original sound after you have switched or edited it. It is not a general undo. Selecting another program gives you the stored version but discards every unsaved change. | OM p.5: "If you want to return to the original sound after you've switched or edited the sound, hold down the [Shift] button and press the [Enter] button." OM p.16 Shortcut List carries the same combination. The scope wording is deliberate — see *Recovery scope*. The alternative is offered only with its explicit discard warning, per the recovery house rule. |

## Recovery scope — why `[Shift] + [Enter]` is in scope here and not in B07

Roland documents `[Shift] + [Enter]` as returning "to the original sound after you've
switched or edited the sound" (OM p.5, repeated in the p.16 shortcut list). The
sentence sits in *Choosing a Sound (Program)*, immediately after the note that an
edited sound shows no tone number.

Everything B06 changes — FILTER, AMP/ENV and LFO — is documented under OM p.8–p.9
*Editing the Sound*, and the parameters those knobs address are tone parameters
(PG pp.12–14 analog, pp.17–19 digital). B06's edits are therefore sound edits, which is
exactly the case Roland's sentence names, and the shortcut is offered here.

**Effects are not.** Roland states "Effect settings are saved individually for each
program" (OM p.9) and the effect section sits outside the per-part tone structure in
OM p.8's own audio-flow diagram. Whether `[Shift] + [Enter]` restores effect settings
is something Roland never says, so `B07` does not offer it, and its recovery is written
without it. That asymmetry between the two tutorials is intentional and is recorded in
both files.

B06-S11's wording repeats Roland's scope ("after you have switched or edited the
sound") and states plainly that it is not a general undo and does not reach beyond the
sound, so no learner can read it as the universal reset the JD-Xi does not have
(`ROLAND-SOURCE-MAP.md` Q10).

## Direct-entry safety

B06 selects no program and no tone, but every knob it turns edits the sound that is
loaded — and Roland lists moving a knob alongside selecting a program as a way a
created sound is lost (OM p.6). A learner entering B06 directly may therefore be
carrying unsaved work that these steps would overwrite.

**B06-S02 is the protect-your-work preflight**, placed before the first knob move at
B06-S03. It states what can be lost, tells the learner to stop and save first if they
have something to keep, names `N09`, and — instead of asserting the instrument's state
— tells them how to read it for themselves from the missing tone number. It never
claims the loaded sound is unedited.

Nothing else in B06 assumes a starting state: it selects the part it needs, asks the
learner to turn each knob and listen rather than to reach a named value, and prescribes
no numeric setting anywhere.

## Deliberate omissions

- **No knob position, value or direction is prescribed as correct.** The panel knobs
  carry no printed scale, Roland gives no target values, and the tutorial is ear-first
  by design (`DESIGN-RULES.md` §1). Directions are given only where Roland states them
  (the Envelope knob's left/right behaviour, OM p.8).
- **Filter type names** (LPF, HPF, BPF, PKG) are documented at OM p.8 but are not put in
  front of the learner as vocabulary; the step teaches the button and the lit indicator.
  The named types belong to `I04`.
- **Separate A/D/S/R editing** is named only as existing, and located in Tone Edit
  (OM p.8), which is `N08`.
- **LFO waveform selection** (OM p.9) is left for `I05`: three LFO knobs are already the
  most B06 asks a beginner to hold at once.
- **Drums TVF/TVA** (PG pp.23–25) is not mentioned. B06 works on a digital part, where
  the LFO is applied and all four filter types exist.
