# B04 — Meet the four parts — source notes

Source reconciliation record for B04. Content lives in `js/tutorials.js`
(`window.JDXI_TUTORIALS.B04`).

| Field | Value |
|---|---|
| Tutorial | **B04 — Meet the four parts** (beginner, order 4, 8 steps, ~7 min) |
| Short title | The four parts |
| Prerequisites | `["B03"]` — advisory, not a gate |
| Kind | **Orientation with listening.** Selects parts and plays keys; changes no Program and no Tone. |
| Authored | 2026-08-30 |

Learning goals as authored:

1. Name the four parts and find their buttons.
2. Hear each part from the keys.
3. Explain why the keys play only one part at a time.

## Sources consulted

| Source | Where it is used |
|---|---|
| Owner's Manual `eng07` | **p.2** items 4 (Part Select), 5 (Analog oscillator controls); **p.4** *Getting Acquainted with the JD-Xi* — Program, Tone, the four parts, controller vs sound generator; **p.5** *Choosing a Part to Play* and its MEMO, *Choosing a Tone* for all three part types, the Analog Synth's [Oscillator] / [Sub OSC] / pulse width controls, the drum instrument names printed above the keys; **p.7** Vocoder/AutoPitch silencing the Analog Synth part; **p.17** Troubleshooting, "Specific pitch ranges do not sound" |
| Parameter Guide `e01` | p.7 — the three different tone structures (Digital SuperNATURAL, Analog, Drum Kit) behind the claim that the parts are not four copies of one design |
| `docs/ROLAND-SOURCE-MAP.md` | §7 rows 5–9 (part selection; the four part types); §9 the B04 row; Q9 (the one-playable-part constraint, and why `N06` is "Combine parts in a pattern") |
| `docs/HARDWARE-TARGETS.md` + `js/hardware-targets.js` | canonical target IDs, labels and geometry |

## Per-step reconciliation

| Step | Targets | Mode | Learner-facing factual claims | Support |
|---|---|---|---|---|
| **B04-S01** Four parts, one program | `partSelectGroup` | `full-plus-inset` | The four Part Select buttons read Digital Synth 1, Digital Synth 2, Drums and Analog Synth. Whichever program is loaded is made of these same four parts. A program is four sound-making sections plus effects and a pattern. | OM p.4: "A program consists of four parts: Digital Synth 1, Digital Synth 2, Drums, and Analog Synth." OM p.2 item 4 and OM p.5 list the four buttons by those names. Effects saved within each program and the pattern saved in a program: OM p.4, p.9, p.12. |
| **B04-S02** Listen to Digital Synth 1 | `digitalSynth1Button` | `full-plus-inset` | Pressing the button makes that part the one the keys play. | OM p.5 *Choosing a Part to Play*. The recovery's "its level in this particular program may simply be low" rests on PG p.10 (Program Edit provides a per-part Level), stated as a possibility rather than a diagnosis. |
| **B04-S03** Listen to Digital Synth 2 | `digitalSynth2Button` | `full-plus-inset` | The two digital parts hold their own tones and are built the same way; having two is what lets one program hold two different synth sounds. | OM p.5 *Choosing a Tone* treats "Digital Synth 1/2 part" as one procedure for both, which is what makes "built the same way" a Roland claim; PG p.7 describes one SuperNATURAL structure for both. "One tone for each part": OM p.4, *Tone*. |
| **B04-S04** Listen to the Drums | `drumsButton` | `full-plus-inset` | The Drums part gives every key a different instrument rather than a pitch; the instrument names are printed above the keys. Keys near the top of the keyboard can be silent. | OM p.5: "The Drums part lets you play a different instrument on each key. The instrument name is printed above each key; for example 'BD1.'" The silent high register is Roland's own troubleshooting entry, OM p.17: "The Drums part does not sound in the high register where no instruments (sounds) are assigned." Presenting that as normal rather than a fault is exactly how Roland presents it. |
| **B04-S05** Listen to the Analog Synth | `analogSynthButton` | `full-plus-inset` | The Analog Synth is a fourth, different-sounding part. If it is silent while others sound, check whether the Category dial is on Vocoder/AutoPitch. | OM p.5 *Analog Synth part*; OM p.5 note and OM p.7: the Analog Synth part becomes unavailable if Vocoder/AutoPitch is selected. **"Usually thicker or more direct"** is a listening cue, not a specification claim — it is hedged with "usually" and asserts nothing Roland does not. |
| **B04-S06** The keys play one part at a time | `partSelectGroup` | `full-plus-inset` | You cannot select and play several parts from the keys at once; the last part selected is the one the keys play. Several parts sound together by recording them into a pattern. | OM p.5 MEMO, quoted almost intact: "You can't select and perform on multiple parts simultaneously. However you can make multiple parts be heard simultaneously by recording them to a pattern." This is the constraint recorded at `ROLAND-SOURCE-MAP.md` Q9, and the forward reference to `N06` matches the architecture's resolved working title. |
| **B04-S07** The Analog Synth's own controls | `analogOscSection` | `full-plus-inset` | The Oscillator button, Sub OSC button and pulse width knob belong to the Analog Synth part; they choose the waveform its sound is built from; the other parts have no panel equivalent. Pressing Oscillator steps through waveforms. | OM p.5 *Analog Synth part*: "[Oscillator] button (waveform indicator) — This selects the waveform that is the basis of the Analog Synth part's sound", "[Sub OSC] button", "Pulse width knob". OM p.2 item 5 places them on the panel. That no equivalent exists for the other parts is the absence of any such control in OM pp.2–3's numbered panel list — stated as a panel fact, which it is. PG p.7's three structures support "the four parts are not four copies of the same thing". |
| **B04-S08** What you can now say | `partSelectGroup` | `full` | Recap only; the four names. | OM p.4, p.5 as above. No new claim. |

## Direct-entry safety

**B04 carries no protect-your-work preflight, and that is deliberate.** The tutorial
performs exactly two kinds of action: pressing a Part Select button, and playing keys.
Neither is documented anywhere as selecting a program or a tone, and neither is listed
among the ways unsaved work is lost (OM p.6, p.9). B04 therefore has no
discard-capable transition to guard, and inserting the preflight anyway would dilute
it where it does matter (`B03`, `B06`–`B10`).

B04 assumes nothing about which program is loaded, which tones the four parts hold,
which part was selected on entry (it selects one at B04-S02), or the octave or
transpose state.

One residual edit is possible and is stated rather than hidden: a learner who presses
the [Oscillator] button at B04-S07 despite being told to look rather than press has
changed the Analog Synth's waveform. B04-S07's `recoveryHelp` says so plainly, offers
stepping on through the waveforms, and notes that nothing is saved unless the program
is saved. It does **not** claim the original waveform can be restored, because Roland
documents no way to know which one it was.

## Deliberate omissions

- **Tone selection is described, never performed.** The three parts choose tones
  differently (Digital: category dial then Tone [-] [+]; Drums and Analog: Tone [-]
  [+] alone — OM p.5), but performing it would make B04 discard-capable for no
  teaching gain. `B03` already taught the doing.
- **Part mute** (OM p.10) is not taught here; it needs a running pattern, and `B08`
  introduces it where it has something to reveal.
- **Per-part parameters** (Level, pan, octave — PG p.10) are not opened. Program Edit
  is `N08`/`I07` material.
- **MIDI channels per part** (OM p.17) are omitted entirely: correct, documented, and
  irrelevant to a beginner meeting the parts by ear.
