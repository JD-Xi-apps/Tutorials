# N04 — Make a simple drum beat — source notes

Source reconciliation record for N04. Content lives in `js/tutorials.js`
(`window.JDXI_TUTORIALS.N04`).

| Field | Value |
|---|---|
| Tutorial | **N04 — Make a simple drum beat** (novice, order 4, 10 steps, ~12 min) |
| Short title | Drum beat |
| Prerequisites | `["N03"]` — advisory, not a gate |
| Kind | **First authoring tutorial.** Records into the pattern, using TR-REC only. |
| Authored | 2026-08-31 |

## Sources consulted

| Source | Where it is used |
|---|---|
| Owner's Manual `eng07` | **p.5** *Choosing a Tone* → Drums part; the drum instrument names printed above the keys and the `BD1` example; **p.10** *Deleting All Notes at a Specific Step*; **p.11** *What is TR-REC?*, the TR-REC procedure for drums, and the note that the [01]–[16] buttons light or go dark to show the played instrument's steps; **p.12** *Saving a Pattern*; **p.17** the Drums high-register entry |
| Parameter Guide `e01` | **p.3** the TR-REC notes, including that TR-REC will not re-input over an existing note without an explicit erase, and that step and realtime recording overwrite automatically; **p.7** the Drum Kit structure |
| `docs/ROLAND-SOURCE-MAP.md` | §7 rows 9 (Drums), 25 (TR-REC), 29 (drum-pattern creation), 33 (saving pattern work); §8.3 erasing pattern data; §9 the N04 row |

## Per-step reconciliation

| Step | Targets | Mode | Learner-facing factual claims | Support |
|---|---|---|---|---|
| **N04-S01** Protect any work you want to keep | `programValueButtons`, `stepButtons` | `full` | Recording changes the pattern in the loaded program; nothing is written until you save; there is no undo. | OM p.12 *Saving a Pattern*: "A pattern you create will disappear if you select a different program or if you power-off the JD-Xi." OM p.6/p.9 for unsaved work generally. No undo: `ROLAND-SOURCE-MAP.md` Q10. |
| **N04-S02** Select the Drums part | `drumsButton` | `full-plus-inset` | Recording goes to whichever part is selected. | OM p.10: "When you record, the part that's selected by Part Select is recorded." OM p.11 TR-REC step 1: "Press a Part Select button to select the part that you want to record." |
| **N04-S03** Choose a drum sound | `drumsButton`, `keys` | `full` | Every key is a different instrument, named above the keys; the key you press last is the instrument you are about to record. | OM p.11: "If the Drums part is selected, press a note on the keyboard to specify the instrument that you want to record." OM p.5: "The Drums part lets you play a different instrument on each key. The instrument name is printed above each key; for example 'BD1.'" The `BD1` reference in `recoveryHelp` is Roland's own example. The silent high register is OM p.17. |
| **N04-S04** Light your first steps | `stepButton01`, `stepButton05`, `stepButton09`, `stepButton13` | `full-plus-inset` | Pressing a numbered button lights it, meaning the instrument sounds at that step; pressing a lit one turns it off. | OM p.11 TR-REC step 2: "Press the [01]–[16] buttons to make the button light for each step at which you want the instrument to sound. To erase a note, press the corresponding [01]–[16] button to make it go dark." That 01/05/09/13 are evenly spaced across sixteen is arithmetic, and Roland's own figure shows a bass drum on exactly that spacing. |
| **N04-S05** Listen to your beat | `playStopButton` | `full-plus-inset` | Play/Stop plays the pattern; anything already in it plays too. | OM p.11 TR-REC step 3. |
| **N04-S06** Choose a second drum sound | `keys`, `stepButtons` | `full` | Playing a different key changes which instrument the row is showing; the row is a view of one instrument's steps. You can do this during playback. | OM p.11: "For the Drum part, playing an instrument on the keyboard makes the [01]–[16] buttons light or go dark to indicate the steps on which that instrument will sound", and "You can change the on/off status of the [01]–[16] buttons even during playback." Also OM p.11: "If you select the Drums part, you'll record separately for each instrument that's assigned to each note of the keyboard." |
| **N04-S07** Add the second sound | `stepButton05`, `stepButton13` | `full-plus-inset` | Steps can be added while the pattern plays. | OM p.11, same sentence about changing status during playback. The musical description ("lands between the pulses") is a listening cue, not a Roland claim. |
| **N04-S08** Silencing a step is not erasing it | `stepButtons` | `full-plus-inset` | Turning a lit button dark only mutes the note; turning it back on restores it. | OM p.10 *Deleting All Notes at a Specific Step*, quoted closely: "turning off a button that contains a note (making the button go dark) prevents that note from sounding. This only mutes the note and does not delete it; if you turn on the button once again (making the button light), its note resumes sounding." PG p.3 repeats it. |
| **N04-S09** Actually erasing a step | `eraseButton`, `stepButtons` | `full-plus-inset` | Hold Erase and press a step to completely erase its notes; the pattern must be stopped. Needed because TR-REC will not overwrite an existing note. | OM p.10: "If you want to completely erase the notes of a step, stop the pattern, hold down the [Erase] button, and press the button of the step that you want to erase." OM p.11 / PG p.3: "If you want to use TR-REC to re-input notes at a step in which you previously input a note… you must first delete the existing notes." |
| **N04-S10** Your beat is not saved yet | `display` | `full-plus-inset` | A pattern lives in the loaded program; changing program or powering off loses it; there is no separate pattern save. | OM p.12 *Saving a Pattern*, and its cross-reference to the program WRITE procedure. |

## Why TR-REC and nothing else

N04 uses exactly one recording method, and the choice is a safety decision rather than a
stylistic one.

Roland documents four ways to record (OM pp.11–12, PG p.3), and they differ in what they
do to notes that are already there:

| Method | Effect on existing notes |
|---|---|
| **TR-REC** (used here) | **Refuses** to re-input over a step that holds a note; an explicit erase is required first |
| Step recording | Deletes and replaces automatically |
| Realtime recording | Deletes and replaces automatically |
| Hold a step and play | Adds without deleting |

TR-REC is the only one whose failure mode is *nothing happens*. For a learner's first
authoring tutorial, on a program that may already contain a preset pattern, that is the
right property: a mistaken press cannot destroy anything, and the destructive gesture
(N04-S09) is separate, explicit, and requires the pattern to be stopped.

The hold-a-step-and-play method is the other safe one, and `N06` teaches it, where the
learner is deliberately adding to a pattern they have already built.

## Direct-entry safety

**N04-S01 is the protect-your-work preflight**, before any recording. It offers three
outcomes rather than two — nothing to keep, save it first, or step to a program you do
not mind changing — because "move somewhere disposable" is a genuine option here and
`N09` may not yet have been done.

N04 assumes nothing about the loaded program, whether it already contains a pattern
(N04-S05's `recoveryHelp` covers hearing more than expected), which part or instrument
was selected on entry, or which steps are already lit.

One deliberate wording choice: N04-S03's checkpoint says the numbered buttons **may**
have changed, not that they will. Whether any given instrument already has steps in this
program is unknowable, and Roland's sentence describes the buttons indicating that
instrument's steps — which for an untouched instrument means a dark row.

## Deliberate omissions

- **The metronome is omitted entirely.** Roland routes metronome settings through SYSTEM
  (OM p.11 steps 1–4, OM p.13 CLICK), and system parameters save themselves when you
  leave the screen (OM p.7, p.13, p.15). TR-REC involves no playing in time, so a click
  would add an auto-saving detour for no teaching gain. It is not mentioned to the
  learner at all, to avoid inviting the visit.
- **Realtime recording** (OM p.11) is left for `I08`. It overwrites automatically and
  records knob movements, and its knob movements *cannot be erased* (OM p.11, PG p.3) —
  which is the wrong first experience of recording.
- **Pattern Erase** (OM p.10, `[Shift]` + `[Erase]`) is not taught. Erasing one step is
  enough for N04's needs; erasing a whole part or all parts is a much larger operation.
- **Chords** (PG p.3: pressing step buttons while holding a chord) are omitted — no chord
  vocabulary is assumed anywhere in this curriculum.
- **No step is named as musically correct.** N04-S07's `recoveryHelp` says outright that
  there is no correct answer and to move things until you like it.
