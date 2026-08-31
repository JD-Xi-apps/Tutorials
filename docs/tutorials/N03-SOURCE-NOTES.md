# N03 — Sequencer basics — source notes

Source reconciliation record for N03. Content lives in `js/tutorials.js`
(`window.JDXI_TUTORIALS.N03`).

| Field | Value |
|---|---|
| Tutorial | **N03 — Sequencer basics** (novice, order 3, 10 steps, ~10 min) |
| Short title | Sequencer basics |
| Prerequisites | `["N02"]` — advisory, not a gate |
| Kind | **Operating procedure.** Enters one note with TR-REC and erases it again; builds nothing. |
| Authored | 2026-08-31 |
| Reconciled | 2026-08-31, against `PRODUCT-CURRICULUM-MASTER-PLAN.md` §9 |

Learning goals as authored:

1. Say what a step is, and why the row shows one measure at a time.
2. Enter TR-REC and read which steps are lit.
3. Add one step and remove it again, cleanly.
4. Name the two ways of entering notes you will use later.

## Master-plan reconciliation (2026-08-31)

The brief called the previous N03 **"a major mismatch"**, and it was. The master plan (§9)
gives N03 a list of nine things to own, and the old tutorial did three of them. What it did
instead was Pattern Length — four of eleven steps — and a look at the Scale Setting, both of
which the plan places outside N03, one of them outside v1 entirely.

| Master-plan requirement | Before | Now |
|---|---|---|
| 16 numbered buttons operationally | yes | `N03-S02` |
| start/stop | yes | `N03-S01`, `N03-S08` |
| select Part | **absent** | `N03-S05` |
| enter TR-REC | **absent** — named once, in the last step, as a forward reference | `N03-S06` |
| lit/unlit steps | **absent** | `N03-S06` |
| add/remove one step | **absent** | `N03-S07`, `N03-S09` |
| correct/erase one step | **absent** | `N03-S09` |
| pattern length relationship to the row | yes | `N03-S03` |
| TR-REC and Step Recording as two methods | partial — TR-REC only | `N03-S10` |

So the reconciled N03 is close to a rewrite. Six of its ten steps are new, and the tutorial
now does what its title has always promised: it puts one note into a pattern and takes it
out again.

<!-- removed-steps:begin -->

`N03-S11` no longer exists. Four old steps have no successor, named by old position because
the surviving ids were reused:

- **old positions 5–8**, the Pattern Length sequence: the preflight before it, opening the
  Pattern Length screen, choosing a length and answering Roland's `With Copying ?` prompt,
  and backing out. The brief is explicit — *do not make Pattern Length change the central
  activity* — and it was four of eleven steps. It moves to **`I08`**, which extends a
  pattern toward four measures and is the first tutorial with a reason to lengthen one.
- **old position 4**, moving between measures with `[Shift]` + `[01]`–`[04]`, goes with it to
  `I08` for the same reason: it is only useful once a pattern is longer than one measure.
- **old position 9**, the look at Scale Setting, is **removed from v1 altogether**. The
  master plan excludes sequencer Scale and subdivision (§13), and the step could not have
  survived in any case without note-value language — Roland's three values are eighth-note
  triplets, sixteenth notes and thirty-second notes, and §3.3 forbids exactly that
  vocabulary in learner text.

<!-- removed-steps:end -->

**N03 changed safety class**, in the same way and for the same reason as `N02`. The old
tutorial's one destructive act was the length change; the new one writes a note into the
loaded pattern. Both need a preflight, and `N03-S04` is it.

**One fact was promoted rather than removed.** The old N03 never mentioned that turning a
step button dark only *mutes* its note. That distinction (OM p.10) is now a step of its own,
`N03-S09`, because it is the difference between a step that is empty and a step that merely
looks empty — and Roland warns that TR-REC will not overwrite a note that is still there.
Teaching the erase gesture without it would leave a learner with a pattern they cannot fix.

## Sources consulted

| Source | Where it is used |
|---|---|
| Owner's Manual `eng07` | **p.5** *Top screen* (the measure–beat field), *Choosing a Part to Play*; **p.10** *Basic Operation of the Pattern Sequencer* (the four transport buttons, and that the selected part is what gets recorded), *Deleting All Notes at a Specific Step*; **p.11** *What is TR-REC?* and the TR-REC procedure for drum and synth parts; **p.12** *Step Recording* and *Saving a Pattern* |
| Parameter Guide `e01` | **pp.3–4** *Additional Explanation of the Pattern Sequencer* |
| `docs/ROLAND-SOURCE-MAP.md` | §7 rows 24 (sequencer basics), 25 (TR-REC); §8.2 losing unsaved work; §8.3 erasing pattern data; §9 the N03 row |

The MIDI Implementation was not needed. No third-party source informed any procedure.

## Per-step reconciliation

| Step | Targets | Mode | Learner-facing factual claims | Support |
|---|---|---|---|---|
| **N03-S01** Watch a pattern run | `playStopButton`, `display` | `full-plus-inset` | Play/Stop plays the pattern; the two numbers are measure and beat. | OM p.10: "[▶/■] button — Play or stop the pattern"; OM p.5 *Top screen* callout "Measure–beat". The recovery's discard warning before stepping program is required by `DESIGN-RULES.md` §7a. |
| **N03-S02** Sixteen steps | `stepButtons` | `full-plus-inset` | Each numbered button is one step — one slice of time; a pattern is built by deciding what happens on each. | OM p.11 *What is TR-REC?*: "TR-REC is the method of using the [01]–[16] buttons to specify the timing at which each instrument will sound", with Roland's own step-number figure. |
| **N03-S03** The row shows one measure | `stepButtons` | `full` | A pattern can be up to four measures; the sixteen buttons show one measure at a time. | OM p.10: "You can create a pattern that's up to four measures long." That the row shows one measure at a time is the direct consequence of OM p.10's measure-switching procedure existing at all — Roland describes the numerals as indicating the measure number while `[Shift]` is held. The gesture itself is **not** taught here; the step points at `I08`. |
| **N03-S04** Protect any work you want to keep | `stepButtons`, `eraseButton` | `full` | Adding and erasing a note change the pattern in the loaded program. A pattern disappears if you select a different program or power off. | OM p.12 *Saving a Pattern*: "A pattern you create will disappear if you select a different program or if you power-off the JD-Xi." OM p.6 and p.9 for sounds and effects. The recovery's alternative — step to another program first — is offered with its discard warning stated as the decision being made. |
| **N03-S05** Choose the part you will record | `partSelectGroup` | `full-plus-inset` | The sequencer records into the selected part; choosing it is the first move of every recording procedure. | OM p.10: "When you record, the part that's selected by Part Select is recorded." Every one of Roland's three recording procedures opens with it (OM p.11 Realtime Rec step 1, OM p.11 TR-REC step 1, OM p.12 Step Recording step 1). |
| **N03-S06** Read the lit and unlit steps | `stepButtons`, `keys` | `full-plus-inset` | Holding a key shows, on the numbered buttons, the steps at which that note sounds: lit sounds, unlit does not. TR-REC works whether the pattern is playing or stopped. | OM p.11: "For the Drum part, playing an instrument on the keyboard makes the [01]–[16] buttons light or go dark to indicate the steps on which that instrument will sound", and "TR-REC is available any time the phrase is playing or stopped." **The generalisation is deliberate and is Roland's own**: p.11's *Digital Synth part/Analog Synth part* section says TR-REC is used "in the same way as for a drum part", opening with "Play the key that you want to record using TR-REC." |
| **N03-S07** Add one step | `stepButtons` | `full-plus-inset` | Pressing an unlit numbered button lights it and enters the note. On Drums the key chooses the instrument; on a synth part the held key is the note. | OM p.11 TR-REC step 2: "Press the [01]–[16] buttons to make the button light for each step at which you want the instrument to sound"; and "Pressing one of the [01]–[16] buttons switches it between lit and unlit, changing whether the instrument will or will not sound on that step." The Drums/synth distinction is OM p.11's two procedures, step 1 of each. |
| **N03-S08** Hear what you did | `playStopButton` | `full-plus-inset` | The note sounds once each time the pattern reaches that step. | OM p.11 TR-REC step 3: "Press the [▶/■] button to play the pattern." The looping behaviour is OM p.10's description of the sequencer as playing recorded material "back repeatedly". The recovery's mute suggestion is OM p.10 *Part Mute*. |
| **N03-S09** Erase that step | `eraseButton`, `stepButtons` | `full-plus-inset` | Turning a button dark only mutes its note and does not delete it; turning it back on restores it. To erase, stop the pattern, hold `[Erase]` and press the step. A note that still exists blocks re-entering one at that step. | OM p.10 *Deleting All Notes at a Specific Step*, quoted closely: "turning off a button that contains a note (making the button go dark) prevents that note from sounding. This only mutes the note and does not delete it; if you turn on the button once again (making the button light), its note resumes sounding… If you want to completely erase the notes of a step, stop the pattern, hold down the [Erase] button, and press the button of the step that you want to erase." The blocking consequence is OM p.11's note: "If you want to use TR-REC to re-input notes at a step in which you previously input a note… you must first delete the existing notes." The stopped-pattern precondition is Roland's own. |
| **N03-S10** Two ways in | `patternSequencerSection` | `full-plus-inset` | TR-REC picks a note and lights steps; Step Recording holds a position and advances one step per note played. Pressing `[Step Rec]` again stops recording. | OM p.12 *Step Recording* steps 2–5: "[Step Rec] button. The [01] button blinks… Play one note on the keyboard. That note is recorded at step 1. The position automatically advances to step 2… Press the [Step Rec] button to stop recording." The recovery's claim that nothing is added if no key was played follows from step 3 being the only thing that records. **Realtime Recording is not named** — see *Deliberate omissions*. |

## Direct-entry safety

**N03 carries a protect-your-work preflight at `N03-S04`**, immediately before the first
write to the pattern at `N03-S07`.

The tutorial's risk is unusual in one respect worth recording: it both adds and removes, and
the removal is genuine deletion (`[Erase]` + step), not a reversible toggle. A learner who
arrives with a pattern they care about and follows `N03-S09` on the wrong button has
destroyed a note with no undo. The preflight names patterns explicitly for that reason, and
`N03-S07` has the learner light a button **that was dark**, so the note erased at `N03-S09`
is always the one they themselves just entered.

N03 assumes nothing about which program is loaded, whether it has a pattern, which part was
selected on entry, how long the pattern is, which steps are already lit, or whether the
sequencer is running when the learner arrives.

## Destructive-risk handling

`[Erase]` + step is a real deletion, and it is taught rather than avoided because the master
plan requires *correct/erase one step* and because the alternative — leaving a learner
believing an unlit button is an empty one — is worse. Roland's own text is the argument: a
muted step blocks re-entry at that position, so a learner who never learns the difference
gets a pattern they cannot edit and no explanation.

The step is scoped as tightly as it can be: pattern stopped, one step, and that step is the
one the learner lit two steps earlier. **Whole-pattern erase** (`[Shift]` + `[Erase]`, OM
p.10) is not mentioned anywhere in N03 — it destroys a part's entire pattern in one gesture,
and it belongs in Quick Reference with an explicit warning, which is where the master plan
puts destructive clearing.

## Deliberate omissions

- **Pattern Length** (OM p.10) and **moving between measures** are not taught. Both move to
  `I08`. See *Master-plan reconciliation*.
- **Scale Setting** (OM p.10) is excluded from v1 entirely (master plan §13).
- **Realtime Recording** (OM p.11) is excluded from v1 and is **not named even in passing**.
  `N03-S10` says "two ways in", not three, because advertising a method the course never
  teaches would be a promise v1 does not keep. The brief is explicit about this for `N05`,
  and the same reasoning applies here.
- **The fourth recording method** — holding a step button and playing the keyboard (OM p.12)
  — is likewise not mentioned.
- **Velocity and Gate Time** (OM p.12's Step Rec parameters, and the fixed 80% gate of
  TR-REC) are omitted: velocity/accent instruction is excluded from v1 (master plan §13).
- **Chord entry via TR-REC** (OM p.11) is omitted; it needs chord language the course avoids.
- **Pattern Copy** (OM p.10) is excluded from v1.
