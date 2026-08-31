# N03 — Sequencer basics — source notes

Source reconciliation record for N03. Content lives in `js/tutorials.js`
(`window.JDXI_TUTORIALS.N03`).

| Field | Value |
|---|---|
| Tutorial | **N03 — Sequencer basics** (novice, order 3, 10 steps, ~10 min) |
| Short title | Sequencer basics |
| Prerequisites | `["N02"]` — advisory, not a gate |
| Kind | **Structural, with one change.** Records no notes; changes pattern length only. |
| Authored | 2026-08-31 |

## Sources consulted

| Source | Where it is used |
|---|---|
| Owner's Manual `eng07` | **p.5** *Top screen* (the measure–beat field); **p.10** *Basic Operation of the Pattern Sequencer*, *Changing the Number of Measures* and its prompt, *Switching the Number of Measures Shown by the [01]–[16] Buttons*, *Changing the Scale*; **p.11** *What is TR-REC?*; **p.14** the Menu item list |
| Parameter Guide `e01` | **pp.3–4** *Additional Explanation of the Pattern Sequencer*; **p.3** the note that erasing All resets the length to 1 measure and the scale to sixteenth notes |
| `docs/ROLAND-SOURCE-MAP.md` | §7 rows 24 (sequencer basics), 25 (TR-REC); §8.2 (a changed pattern length reverts if you select another program before saving); §9 the N03 row; Q13 (mirrored confirmation prompts) |

## Per-step reconciliation

| Step | Targets | Mode | Learner-facing factual claims | Support |
|---|---|---|---|---|
| **N03-S01** Watch a pattern run | `playStopButton`, `display` | `full-plus-inset` | Play/Stop plays the pattern; the two numbers are measure and beat. | OM p.10 ("[▶/■] button — Play or stop the pattern"); OM p.5 *Top screen* callout "Measure–beat". |
| **N03-S02** Sixteen steps | `stepButtons` | `full-plus-inset` | Each numbered button is one step — one slice of time; a pattern is built by deciding what happens on each. | OM p.11 *What is TR-REC?*: "TR-REC is the method of using the [01]–[16] buttons to specify the timing at which each instrument will sound", with Roland's own step-number figure. |
| **N03-S03** Up to four measures | `stepButtons` | `full` | A pattern can be up to four measures; the sixteen buttons show one measure at a time. | OM p.10: "You can create a pattern that's up to four measures long." That the row shows one measure at a time is the direct consequence of OM p.10's measure-switching procedure existing at all — Roland describes the buttons' numerals as indicating the measure number when Shift is held. |
| **N03-S04** Move between measures | `shiftButton`, `stepButtons` | `full-plus-inset` | `[Shift]` + one of [01]–[04] chooses the displayed measure, during playback or recording; holding Shift lights those buttons and the current measure blinks; with a 32nd-note scale the range is [01]–[08]. | OM p.10, quoted closely: "Hold down the [Shift] button and press one of the [01]–[04] buttons (if the scale setting is 32nd notes, press one of the [01]–[08] buttons)… If the setting is four measures of 16th notes, pressing the [Shift] button makes the [01]–[04] buttons light; the current measure blinks." The playback/recording precondition is Roland's own heading for the procedure. |
| **N03-S05** Protect any work you want to keep | `playStopButton`, `programValueButtons` | `full` | Changing the length alters the pattern in the loaded program; it is not written to storage; the way back is selecting another program, which discards everything unsaved. | OM p.10's note: "Even if you change the number of measures in the pattern, it will revert to the original number if you select another program before saving the modified program." OM p.6/p.9 for the discard. |
| **N03-S06** Open Pattern Length | `menuWriteButton`, `display` | `full-plus-inset` | Menu/Write → Cursor → Pattern Length → Enter. | OM p.10 *Changing the Number of Measures* steps 1–2; OM p.14's Menu item list places Pattern Length after the Edit screens. |
| **N03-S07** Choose a length, and answer the question | `programValueButtons`, `enterButton`, `display` | `display-focus` | Value chooses the number of measures, Enter confirms; the JD-Xi then asks a question; Enter copies from the existing pattern, Exit adds blank measures; **either answer applies the change**. | OM p.10 steps 3–4 and the button table: "[Enter] button — If the number of measures is being increased, measures are copied from the original pattern. [Exit] button — Blank measures are added." Roland's step 4 is "Press the [Enter] or [Exit] button to change the number of measures", which is what makes "this is not a cancel" a Roland claim rather than an inference. Screen from OM p.10 — see *Display provenance*. |
| **N03-S08** Look at the scale setting | `menuWriteButton`, `display` | `full-plus-inset` | Scale Setting decides the note value of each step; Roland offers eighth-note triplets, sixteenth notes and thirty-second notes. | OM p.10 *Changing the Scale* steps 1–3, and OM p.14's Menu list entry ("In the pattern sequencer, access the screen where you specify the note value of each step"). **The value is read, not changed** — see *Deliberate omissions*. |
| **N03-S09** Back to the top | `exitButton`, `display` | `full-plus-inset` | Exit returns to the top screen. | OM p.10 step 4 / OM p.14 step 4. |
| **N03-S10** How notes get in | `stepButtons`, `patternSequencerSection` | `full-plus-inset` | The next tutorials use TR-REC: choose a sound, light the steps where you want it. | OM p.11 *What is TR-REC?* and *TR-REC* procedure. No recording is performed here. |

## Display provenance

One screen, at N03-S07, reproduced verbatim from OM p.10:

```
With Copying ?
[Exit]:N [Ent]:Y
```

`syntheticDisplay: false`, with a `displayNote` that states it is reproduced **with its
own left-to-right order**. That wording is deliberate. `ROLAND-SOURCE-MAP.md` Q13
records that Roland's two confirmation prompts are mirrored — this one reads
`[Exit]:N [Ent]:Y`, while the Factory Reset prompt reads `[Ent]:Y [Exit]:N` — and the
house rule is that neither may be tidied to match the other. `N10` reproduces the other
one, in its own order, and says so in the same terms.

## Direct-entry safety

**N03-S05 is the protect-your-work preflight**, immediately before the one change the
tutorial makes (the pattern length, at N03-S06 and N03-S07). It also asks the learner to
stop the pattern first, so the change is not made mid-playback.

It offers a third option the other preflights do not: stop N03 here, because nothing
later in the Novice path depends on having changed a pattern length. That is true, and
it is the honest option for a learner who has a pattern they care about and has not yet
reached `N09`.

N03 assumes nothing about the loaded program, whether it contains a pattern (N03-S01
hands off to `B08` when nothing counts), the current pattern length, the current scale
setting, or which part is selected.

## Why Scale Setting is opened but not changed

N03-S08 has the learner open Scale Setting, **read** the value, and leave the Value
buttons alone. The reason is a gap in the documentation rather than caution for its own
sake: Roland documents how to change the scale (OM p.10) but does not document what
happens to notes already recorded when the scale changes underneath them. The only
related statement is that erasing a pattern with **All** selected resets the scale to
sixteenth notes (PG p.3), which is a different operation.

Changing it on a pattern the learner has just built — in a tutorial that sits between
`N02` and `N04` — would therefore be asking them to perform an operation whose effect
on their work is not documented. Reading the value teaches the concept, which is what
"basics" needs, and `I08` can revisit it with a pattern built for the purpose.

The step's `recoveryHelp` is written for the learner who changed it anyway: set it back
to the value you read, and if you did not read it first, note what you have and carry on
— the setting affects timing rather than damaging anything.

## Deliberate omissions

- **No recording of any kind.** N03 is the structure; `N04` and `N05` are the doing.
- **Pattern Erase, Pattern Copy, and the erase-a-step gesture** (OM p.10) are all
  omitted. Every one destroys pattern data, and none is needed to understand steps and
  measures. The erase gesture appears in `N04`, where the learner has notes of their own
  to erase and a documented reason to need it.
- **`Loop Rec`** (OM p.13) is not mentioned; it belongs with realtime recording.
- **The [01]–[16] buttons are not claimed to light during ordinary playback.** Roland
  documents them lighting in TR-REC and blinking in step recording, neither of which N03
  enters.
