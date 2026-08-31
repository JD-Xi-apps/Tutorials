# N05 — Make a simple bass line — source notes

Source reconciliation record for N05. Content lives in `js/tutorials.js`
(`window.JDXI_TUTORIALS.N05`).

| Field | Value |
|---|---|
| Tutorial | **N05 — Make a simple bass line** (novice, order 5, 11 steps, ~12 min) |
| Short title | Bass line |
| Prerequisites | `["N04"]` — advisory, not a gate |
| Kind | **Authoring.** TR-REC on a pitched part, then step recording. |
| Authored | 2026-08-31 |

## Master-plan reconciliation (2026-08-31)

The master plan (§9) makes **TR-REC the main method** in N05 and demotes step recording to a
*brief alternate one-note-at-a-time method*. The brief adds two instructions: trim the
rests, ties and long step-recording detail, and do not teach or advertise Realtime Recording,
which is outside v1.

The previous N05 had it the other way round. Four of its twelve steps were step recording,
including a whole step on rests and ties, and its closing explanation named realtime
recording as a method that overwrites — advertising, to a learner who would never be taught
it, a capability the course does not cover.

| Change | Why |
|---|---|
| Step recording compressed from four steps to one (`N05-S09`) | master plan: "brief alternate" |
| Rests and ties removed | brief: "trim rests/ties/long Step Recording detail" |
| Realtime Recording no longer named anywhere | brief: "do not teach or advertise it as later guided content" |
| **Added** `N05-S07`, a second nearby note | master plan lists "alternate nearby key on selected steps"; the old tutorial recorded one note and never moved off it |
| **Added** `N05-S08`, erasing a note | master plan lists "correct/remove note"; the old tutorial had no way to take anything out |

The two additions matter musically as well as for compliance. A bass line of one repeated
note is a pulse, and the old tutorial never got past it; and a first attempt at a line is
almost always improved by removing something, which the learner previously had no way to do.

<!-- removed-steps:begin -->

Ids that no longer exist in N05: `N05-S12`.

<!-- removed-steps:end -->

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
| **N05-S07** Bring in a second note | `keys`, `stepButtons` | `full-plus-inset` | Playing a different key and lighting dark steps records that second note. TR-REC will not record over a step that already holds a note. | OM p.11 *Digital Synth part/Analog Synth part*: "Play the key that you want to record using TR-REC. Use the [01]–[16] buttons to illuminate each step at which you want a note to sound." The occupied-step constraint is Roland's own: "If you want to use TR-REC to re-input notes at a step in which you previously input a note… you must first delete the existing notes" (OM p.11), which is why the step directs the learner to dark buttons. **"A key a little way from your first one" carries no interval claim** — no note name, scale or interval appears, per master plan §3.3. |
| **N05-S08** Remove a note you did not want | `eraseButton`, `stepButtons` | `full-plus-inset` | Holding `[Erase]` and pressing a step, with the pattern stopped, erases that step's notes and frees it. | OM p.10 *Deleting All Notes at a Specific Step*: "If you want to completely erase the notes of a step, stop the pattern, hold down the [Erase] button, and press the button of the step that you want to erase." The stopped-pattern precondition is Roland's. |
| **N05-S09** The other way in: step recording | `stepRecButton`, `display` | `display-focus` | `[Step Rec]` starts step recording; the [01] button blinks; each key played is recorded at the blinking step and the position advances; `[Step Rec]` again stops. | OM p.12 *Step Recording* steps 2–5: "Press the [Step Rec] button. The [01] button blinks… Play one note on the keyboard. That note is recorded at step 1. The position automatically advances to step 2, and the [02] button blinks… Press the [Step Rec] button to stop recording." Screen reproduced verbatim — see *Display provenance*. **Velocity and Gate Time are visible on that screen but are not taught** — see *Deliberate omissions*. |
| **N05-S10** Which method overwrites | `stepRecButton`, `stepButtons` | `full-plus-inset` | TR-REC will not write over a step that already holds a note; step recording deletes and replaces automatically. | OM p.11, one sentence covering both: "If you want to use TR-REC to re-input notes at a step in which you previously input a note, or which contains notes of a preset pattern, you must first delete the existing notes… When you use step recording or realtime recording, the original notes are automatically deleted and replaced (overwritten) by the newly entered notes." **The clause naming realtime recording is deliberately not carried into learner text** — see *Deliberate omissions*. |
| **N05-S11** Still not saved | `display` | `full-plus-inset` | Both parts are in one pattern in one program; one save keeps both. | OM p.12 *Saving a Pattern*. |

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

- **Rests and ties.** OM p.12 documents both — `[Erase]` enters a rest, ARPEGGIO
  `[Key Hold]` enters a tie — and the previous N05 taught them in a step of their own. The
  brief directs that this detail be trimmed, and it is the right call: they are only usable
  once step recording is the method you are working in, and here it is a one-step aside.
- **Velocity and Gate Time.** Both are visible on the step-recording screen (OM p.12) and
  the reproduced display shows `Velocity:Real`. Neither is explained or prescribed:
  velocity/accent instruction is excluded from v1 (master plan §13), and `displayNote` says
  only what the screen shows, not what to do with it.
- **TR-REC's fixed 80% gate time** (OM p.11) is not stated. It is true, and it explains why
  TR-REC notes all sound the same length — but it is note-duration detail a first bass line
  does not need.
- **Realtime Recording is not named anywhere in N05**, including in `N05-S10`, which is the
  step that discusses overwriting. Roland's sentence there covers step *and* realtime
  recording in one breath (OM p.11); the learner-facing text quotes only the half that
  applies to a method this course teaches. Realtime Recording is excluded from v1 entirely,
  and mentioning it would promise a lesson that never arrives.
- **Chord entry** (OM p.11: "By pressing the [01]–[16] buttons while you hold down a chord
  on the keyboard, you can enter chords") is omitted, as chord vocabulary is not assumed
  anywhere in this curriculum.
- **The fourth recording method** — holding a step button while playing the keyboard (OM
  p.12) — is not mentioned. v1's sequencer scope names two entry methods, and `N03`
  establishes exactly those two; a third would contradict it.
