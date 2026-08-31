# B04 — Meet the four parts — source notes

Source reconciliation record for B04. Content lives in `js/tutorials.js`
(`window.JDXI_TUTORIALS.B04`).

| Field | Value |
|---|---|
| Tutorial | **B04 — Meet the four parts** (beginner, order 4, 7 steps, ~6 min) |
| Short title | The four parts |
| Prerequisites | `["B03"]` — advisory, not a gate |
| Kind | **Orientation with listening.** Selects parts and plays keys; changes no Program and no Tone. |
| Authored | 2026-08-30 |
| Reconciled | 2026-08-31, against `PRODUCT-CURRICULUM-MASTER-PLAN.md` §8 |

Learning goals as authored:

1. Name the four parts and find their buttons.
2. Hear each part from the keys, and hear how they differ.
3. Explain why the keys play only one part at a time.

## Master-plan reconciliation (2026-08-31)

The master plan (§8) gives B04 one job: **make all four Parts concrete through sound.** It
explicitly excludes *Program architecture*, *synth-engine theory*, sequencing and detailed
drum programming.

Two changes followed.

**The Analog oscillator step was removed** (old position 7, *The Analog Synth's own
controls*). The reconciliation prompt is direct about this — do not make the Analog
oscillator controls a separate mini-lesson unless they are essential to the four-Part
experience — and they are not. Hearing the Analog Synth part is what B04 owes the learner,
and `B04-S05` already does that. The step's `whyItMatters` was also the most
engine-theoretical prose in the Beginner path ("real analog circuits", three different tone
structures), which is `I01`–`I03` territory.

Removing it has a safety dividend. It was the only step in B04 that could change anything
at all: a learner who pressed `[Oscillator]` despite being told to look rather than press
altered the Analog Synth's waveform, with no documented way to know which waveform had been
there before. **B04 now cannot change the instrument's sound at any step.**

**Two pieces of Program-architecture framing were rewritten.** The old opening step was
titled *Four parts, one program* and asserted that "a program is not one sound — it is four
sound-making sections plus the effects and the pattern that go with them". That is a
correct and well-sourced sentence (OM p.4), and it is exactly the definition the master plan
assigns to **N02**. The step is now *Find the four parts*, and its framing is about hearing
rather than architecture. The tutorial summary lost the same claim.

Steps are numbered by position, so the removal closed the numbering up: the closing recap
moved from position 8 to position 7, and the id that vanished is the last one.

<!-- removed-steps:begin -->

Ids that no longer exist in B04: `B04-S08`.

<!-- removed-steps:end -->

## Sources consulted

| Source | Where it is used |
|---|---|
| Owner's Manual `eng07` | **p.2** item 4 (Part Select); **p.4** *Getting Acquainted with the JD-Xi* — the four parts; **p.5** *Choosing a Part to Play* and its MEMO, *Choosing a Tone* for all three part types, the drum instrument names printed above the keys; **p.7** Vocoder/AutoPitch silencing the Analog Synth part; **p.17** Troubleshooting, "Specific pitch ranges do not sound" |
| Parameter Guide `e01` | Not needed after reconciliation. p.7's three tone structures supported the removed Analog-oscillator step; the claim they backed is now `I01`–`I03` material. |
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
| **B04-S07** What you can now say | `partSelectGroup` | `full` | Recap only; the four names. | OM p.4, p.5 as above. No new claim. |

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

**After reconciliation there is no residual edit either.** The pre-reconciliation B04
carried one — a learner who pressed `[Oscillator]` during the Analog-oscillator step
changed the Analog Synth's waveform, irreversibly in the sense that Roland documents no way
to discover which waveform had been selected before. That step is gone, and with it the
only way B04 could alter the instrument at all.

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
- **The Analog Synth's [Oscillator], [Sub OSC] and pulse width controls** (OM p.5) are no
  longer shown. They are correct and on the panel, but they are one part's private
  architecture, not part of meeting four parts by ear. `I01` reaches for them when a bass
  sound actually needs them, and the Hardware Explorer describes them on demand.
