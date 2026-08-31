# N05 — Make a simple bass line — source notes

Source reconciliation record for N05. Content lives in `js/tutorials.js`
(`window.JDXI_TUTORIALS.N05`).

| Field | Value |
|---|---|
| Tutorial | **N05 — Make a simple bass line** (novice, order 5, 12 steps, ~12 min) |
| Short title | Bass line |
| Prerequisites | `["N04"]` — advisory, not a gate |
| Kind | **Authoring.** TR-REC on a pitched part, then step recording. |
| Authored | 2026-08-31 |

## Sources consulted

| Source | Where it is used |
|---|---|
| Owner's Manual `eng07` | **p.5** *Choosing a Tone* → Analog Synth part, and the Vocoder/AutoPitch note; **p.6** OCTAVE; **p.10** part mute, and *Deleting All Notes at a Specific Step*; **p.11** the TR-REC procedure for digital and analog parts; **p.12** *Step Recording* in full — the blinking [01] button, the recording screen, Velocity and Gate Time, rests via [Erase], ties via ARPEGGIO [Key Hold], changing the recording step, and stopping; **p.12** *Saving a Pattern* |
| Parameter Guide `e01` | **p.3** TR-REC for pitched parts, the fixed 80% gate time, and the overwrite difference between the methods; **p.4** the note that the analog square wave and Sub OSC may not sound in the upper range of the keyboard |
| `docs/ROLAND-SOURCE-MAP.md` | §7 rows 25 (TR-REC), 27 (step recording), 30 (synth/bass-line creation); §9 the N05 row |

## Per-step reconciliation

| Step | Targets | Mode | Learner-facing factual claims | Support |
|---|---|---|---|---|
| **N05-S01** Protect any work you want to keep | `programValueButtons`, `toneButtons` | `full` | Recording and tone selection both replace what is loaded; parts share one pattern, so one save keeps both. | OM p.6/p.9 (unsaved work); OM p.12 (*Saving a Pattern*). That the drum part and this part are in the same pattern follows from OM p.10's pattern-erase list, which enumerates the parts within one pattern. |
| **N05-S02** Choose a pitched part | `analogSynthButton` | `full-plus-inset` | Recording goes to the selected part; each part keeps its own pattern, so this cannot disturb the Drums part. | OM p.10 ("the part that's selected by Part Select is recorded"); OM p.10's Pattern Erase screen lets you erase Digital 1, Digital 2, Drum, Analog or All separately, which is what establishes per-part pattern data. The Vocoder/AutoPitch caveat in `recoveryHelp` is OM p.5 / p.7. |
| **N05-S03** Find a sound low enough | `toneButtons` | `full-plus-inset` | Tone −/+ selects a tone for the Analog Synth part. | OM p.5 *Analog Synth part* steps 1–2. The `recoveryHelp` caveat is PG p.4: "Due to the characteristics of the analog circuitry, the Square wave and SubOSC of the analog part might not produce sound in the upper range of the keyboard." OCTAVE is OM p.6. |
| **N05-S04** Play the note you want to record | `keys` | `full` | On a pitched part the numbered buttons record whichever note you played last. | OM p.11 / PG p.3, TR-REC for a digital or analog part, step 1: "Play the key that you want to record using TR-REC." Roland introduces this as working "in the same way as for a drum part", which is what licenses the parallel N05 draws. |
| **N05-S05** Light the steps for that note | `stepButton01`, `stepButton09` | `full-plus-inset` | Light the steps where you want the note; a step that already holds a note must be erased first. | OM p.11 / PG p.3 step 2, and the re-input note: "you must first delete the existing notes. With pattern playback stopped, hold down the [Erase] button and press the button of the step number that you want to erase." |
| **N05-S06** Listen to it in place | `playStopButton` | `full-plus-inset` | Play/Stop plays it back; `[Shift]` + Part Select mutes a part and the same combination unmutes. | OM p.11 step 3; OM p.10 *Muting a specific part*. |
| **N05-S07** Start step recording | `stepRecButton`, `display` | `display-focus` | Press [Step Rec]; the [01] button blinks; a recording screen is shown until you stop. | OM p.12 *Step Recording* steps 1–2, quoted closely: "Press the [Step Rec] button. The [01] button blinks. The following screen is shown until you stop recording." Screen from OM p.12 — see *Display provenance*. |
| **N05-S08** Enter notes one at a time | `keys` | `full` | Each key is recorded at the blinking step and the position advances; you are not playing in time; pressing a numbered button moves to that step; step recording replaces what was on a step. | OM p.12 steps 3–4: "That note is recorded at step 1. The position automatically advances to step 2, and the [02] button blinks." MEMO: "To change the step that you're recording, press one of the [01]–[16] buttons." The overwrite behaviour is OM p.11 / PG p.3. |
| **N05-S09** Rests and ties | `eraseButton`, `keyHoldButton` | `full-plus-inset` | During step recording, [Erase] enters a rest and ARPEGGIO [Key Hold] enters a tie. | OM p.12 MEMO, both bullets: "To erase the data at a step (or to enter a rest), press the [Erase] button. To enter a tie, press the ARPEGGIO [Key Hold] button." |
| **N05-S10** Stop and listen | `stepRecButton`, `playStopButton` | `full-plus-inset` | Press [Step Rec] again to stop recording. | OM p.12 step 5. The tempo/scale note in `recoveryHelp` points at `B09` and `N03` rather than repeating their claims. |
| **N05-S11** Which method overwrites | `stepRecButton`, `stepButtons` | `full-plus-inset` | TR-REC will not record over an existing note; step and realtime recording delete and replace automatically. | OM p.11 and PG p.3, the same sentence: "When you use step recording or realtime recording, the original notes are automatically deleted and replaced (overwritten) by the newly entered notes." |
| **N05-S12** Still not saved | `display` | `full-plus-inset` | Both parts are in one pattern in one program; one save keeps both. | OM p.12 *Saving a Pattern*. |

## Display provenance

One screen, at N05-S07, reproduced verbatim from OM p.12:

```
Step Rec
Velocity:Real
```

`syntheticDisplay: false`; the `displayNote` says the value shown is the current
velocity setting and that it can be changed on that screen — both from OM p.12's
parameter table (Velocity: Real, or 1–127 fixed; Gate Time 5–100%). Both lines are
inside the ≤16-character guard.

## The overwrite difference is a safety fact

N05-S11 exists as its own step because the two methods it teaches behave differently in
a way that costs the learner work:

- **TR-REC** refuses to record over a step that already holds a note, and requires an
  explicit erase first (OM p.11, PG p.3);
- **step recording** deletes and replaces automatically, with no prompt.

A learner who has just built something with TR-REC and then tries step recording on the
same pattern will silently lose notes if they do not know this. Roland states it plainly
in both documents; N05 states it plainly too, rather than leaving it to be discovered.

The step's `recoveryHelp` is honest about the consequence: an overwritten note is gone,
because the JD-Xi has no undo, and the only route back is selecting another program
without saving — offered with its full discard warning, per the recovery house rule.

## Direct-entry safety

**N05-S01 is the protect-your-work preflight.** It differs from the others in offering
a third path that is specific to this point in the guided sequence: stay on the same
program deliberately, because the beat from `N04` and the line from N05 live in the same
pattern and one save keeps both. That is the behaviour a learner following the path
actually wants, and saying so prevents them "protecting" their beat by moving programs
and thereby destroying it.

N05 assumes nothing about which part was selected on entry (it selects one), which tone
is loaded (it chooses one by ear), whether any steps already hold notes (N05-S05's
`recoveryHelp` covers a step that will not light), or the pattern's tempo and scale.

## Deliberate omissions

- **Velocity and Gate Time are named but not prescribed.** OM p.12 documents both on the
  step-recording screen, and N05-S07's `displayNote` says the value can be changed there,
  but no target value is given — there is no correct one.
- **TR-REC's fixed 80% gate time** (PG p.3) is not stated to the learner. It is true and
  it explains why TR-REC notes all sound the same length, but it is a detail a first
  bass line does not need; `I08` is the place for it.
- **Realtime recording** is named only in N05-S11, as the other method that overwrites.
  It is taught in `I08`.
- **Chord entry** (OM p.12: "You can record a chord by selecting multiple notes") is
  omitted, as chord vocabulary is not assumed anywhere in this curriculum.
- **Auto Note** (PG p.4, which fixes Pitch Bend Range at 24 when recording) is out of
  scope; no canonical tutorial covers Auto Note.
