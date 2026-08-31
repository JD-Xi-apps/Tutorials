# N07 — Try the arpeggiator — source notes

Source reconciliation record for N07. Content lives in `js/tutorials.js`
(`window.JDXI_TUTORIALS.N07`).

| Field | Value |
|---|---|
| Tutorial | **N07 — Try the arpeggiator** (novice, order 7, 12 steps, ~12 min) |
| Short title | Arpeggiator |
| Prerequisites | `["N06"]` — advisory, not a gate |
| Kind | **Operating procedure.** Turns the arpeggiator on and edits its settings. |
| Authored | 2026-08-31 |

## Master-plan reconciliation (2026-08-31)

The master plan (§9) asks N07 for enough of the arpeggiator to **use it deliberately later**,
and lists what that means. Five items were missing, and one present item was out of scope.

| Master-plan requirement | Before | Now |
|---|---|---|
| choose a synth Part | **absent** | `N07-S02` |
| change **range** | **absent** | `N07-S09` (`Oct Range`) |
| change **tempo** | **absent** | `N07-S10` |
| **use it over a pattern** | **absent** | `N07-S11` |
| finish with a usable arpeggiated layer | **absent** | `N07-S11` |
| turn it off and confirm normal playing | implied only | `N07-S12` |

**The Grid step was removed** (old position 8, *Change how the notes are spaced*). The brief
is explicit — *do not spend the lesson on note-value/Grid taxonomy* — and Grid could not have
been taught here in any case. Roland's own values are `1/4`, `1/8`, `1/8L`, `1/16`, `1/24`
and so on, explained as note values and shuffle depths (PG p.29), which is precisely the
vocabulary master plan §3.3 forbids in learner text. `Oct Range` replaces it and is strictly
better for this tutorial: it is a single number, it needs no theory, and it changes something
a beginner can hear immediately.

The three additions around it — tempo, over a pattern, off cleanly — turn N07 from a
demonstration into something the learner leaves able to use. `I10`'s performance challenge
asks for the arpeggiator over a running groove, and before this reconciliation N07 never had
the learner do that once.

<!-- removed-steps:begin -->

No id vanished — N07 grew from 9 steps to 12 — but old position 8's content has no successor.

<!-- removed-steps:end -->

## Sources consulted

| Source | Where it is used |
|---|---|
| Owner's Manual `eng07` | **p.2** item 10 (ARPEGGIO [ON], [Key Hold]); **p.4** arpeggio settings saved within each program; **p.6** *Playing an Arpeggio*, *Selecting an Arpeggio Style*, *Using the Hold function* and its MEMO, *Editing the Arpeggio* and its illustrated screen; **p.16** the `[Shift]` + ARPEGGIO [ON] shortcut; **p.17** Troubleshooting, "When I play the keyboard, notes do not stop" |
| Parameter Guide `e01` | **p.29** *ARPEGGIO* — Style 001–128, Grid and its shuffle values, Duration, Motif, Velocity, Oct Range, Accent |
| Parameter Guide `e01` | **p.6** arpeggio settings saved within each program; **p.29** the ARPEGGIO parameter table — `Oct Range`, and the absence of any arpeggio-specific tempo |
| `docs/ROLAND-SOURCE-MAP.md` | §6.2 the `[Shift]` + ARPEGGIO [ON] shortcut and its documented scope; §7 row 31 (arpeggiator); §9 the N07 row |

## Per-step reconciliation

| Step | Targets | Mode | Learner-facing factual claims | Support |
|---|---|---|---|---|
| **N07-S01** Protect any work you want to keep | `arpeggioSection` | `full-plus-inset` | Arpeggio settings are saved within each program, so changing them changes the loaded program. | OM p.4 *Arpeggio*: "Arpeggio settings are saved within each program (p. 6)"; PG p.6 repeats it. |
| **N07-S02** Choose a synth part | `digitalSynth1Button` | `full-plus-inset` | The arpeggiator works on the selected part; on the Drums part each key is a different instrument. | OM p.5 *Choosing a Part to Play*; OM p.5 *Choosing a Tone — Drums part*: "The Drums part lets you play a different instrument on each key." Read together, an arpeggio on the Drums part steps between instruments rather than through pitches, which is what the step says. |
| **N07-S03** Turn the arpeggiator on | `arpeggioOnButton` | `full-plus-inset` | Pressing ARPEGGIO [ON] so it lights turns the function on. | OM p.6: "Press the ARPEGGIO [ON] button to make it light; the arpeggio function turns on", and step 1 "Press the ARPEGGIO [ON] button so it's lit." |
| **N07-S04** Hold some notes down | `keys` | `full` | Holding notes plays an arpeggio — the held notes sounded at different times rather than together. | OM p.6 step 2: "Hold down some notes. An arpeggio plays", and the definition: "An 'arpeggio' is a performance technique in which the notes of a chord are played at different times." |
| **N07-S05** Change the notes underneath it | `keys` | `full` | Playing a different group of keys changes what the arpeggio is built from. | OM p.6, *Using the Hold function* MEMO: "If you play a different chord while hold is turned on, the arpeggio also changes" — the behaviour is stated for the hold case and is the same gesture; N07 presents it as changing which notes are held, which is what the learner is doing either way. |
| **N07-S06** Key Hold, and the trap in it | `keyHoldButton` | `full-plus-inset` | [Key Hold] keeps the arpeggio running with your hands off the keys; pressing it again turns it off; with the arpeggiator off it sustains notes like a damper pedal; it is Roland's documented cause of notes that will not stop. | OM p.6: "Press the ARPEGGIO [Key Hold] button. The hold function turns on", and the MEMO: "When the arpeggio is off, pressing the ARPEGGIO [Key Hold] button turns Key Hold on. This lets you sustain the notes as if you were pressing the damper pedal." OM p.17: "Could the [Key Hold] button be on? If Key Hold is on, notes you play on the keyboard are sustained. Press the [Key Hold] button to turn it off." |
| **N07-S07** Open Arpeggio Edit | `shiftButton`, `arpeggioOnButton`, `display` | `display-focus` | `[Shift]` + ARPEGGIO [ON] opens Arpeggio Edit; the Menu reaches the same screen. | OM p.6 *Editing the Arpeggio* step 1 and its MEMO: "This screen also appears if you press the [Menu/Write] button and select 'Arpeggio Edit.'" OM p.16 lists the shortcut. Screen from OM p.6 — see *Display provenance*. |
| **N07-S08** Try different styles | `programValueButtons` | `full-plus-inset` | Value selects the arpeggio style. | OM p.6 *Selecting an Arpeggio Style* step 2: "Use the Value [-] [+] buttons to select an arpeggio style." PG p.29 gives the range as 001–128, which is why "a great many" is a fair description; the number itself is not asserted to the learner. |
| **N07-S09** Change how far it travels | `cursorRightButton`, `programValueButtons` | `full-plus-inset` | `Oct Range` shifts the arpeggio in octave units, up to three octaves up or down; 0 leaves it where the hands are. | PG p.29 ARPEGGIO: "Oct Range -3–+3. Specifies the range by which the arpeggio is shifted. This adds an effect that shifts arpeggios one cycle at a time in octave units (octave range). You can set the shift range upwards or downwards (up to three octaves up or down)." The parameter is reached with Cursor on the same screen, per PG p.29's `Cursor [◄] [►]` / `Value [-] [+]` column headers. |
| **N07-S10** Change the speed | `tempoKnob` | `full-plus-inset` | The arpeggiator runs at the program's tempo; there is no separate arpeggio speed. | OM p.6 *Changing the Tempo* ("Turn the tempo knob") and its MEMO ("The tempo is saved for each individual program. The tempo setting is shared with the pattern"). That there is no separate arpeggio tempo is the absence of any such parameter from PG p.29's ARPEGGIO table, which lists Style, Grid, Duration, Motif, Velocity, Oct Range and Accent and no tempo. |
| **N07-S11** Use it over a pattern | `playStopButton`, `keys` | `full` | The arpeggio plays alongside a running pattern, in the same tempo. | OM p.10 for the transport; the shared tempo is OM p.6's MEMO as above, which is what makes "in the same tempo" a documented consequence rather than an observation. No claim is made about how the arpeggio interacts with recorded pattern data — the learner plays live over it. |
| **N07-S12** Turn it off cleanly | `arpeggioOnButton`, `keyHoldButton` | `full-plus-inset` | Pressing ARPEGGIO [ON] turns the function off; Key Hold must be off too for keys to behave normally; both settings belong to the program. | OM p.6: "ARPEGGIO [ON] button — Turns the arpeggio function on/off"; "ARPEGGIO [Key Hold] button — Turns the hold function on/off", with its MEMO that Key Hold sustains notes even when the arpeggio is off. That the settings belong to the program is PG p.6: "Arpeggio settings are saved within each program." |

## Display provenance

One screen, at N07-S06, reproduced verbatim from OM p.6:

```
<ARPEGGIO> 001
Basic 1 (a)
```

`syntheticDisplay: false`; the `displayNote` names the source and says the number and
style name are whichever style the learner's program is using. Both lines are inside the
≤16-character guard.

## N07-S05 exists because of Roland's troubleshooting table

Teaching [Key Hold] without teaching its symptom would leave a learner stranded by the
feature this tutorial introduces. Roland lists "When I play the keyboard, notes do not
stop" in its troubleshooting table with Key Hold as the cause (OM p.17), and the MEMO at
OM p.6 makes it worse than it first appears: the button also works when the arpeggiator
is **off**, sustaining notes like a damper pedal. So a learner can meet the symptom with
no arpeggio running and no obvious connection to this tutorial.

N07-S05 therefore states both behaviours and puts the fix in its `recoveryHelp`. `N10`
carries the same fact from the troubleshooting side, deliberately — a learner whose
notes will not stop is far more likely to open the troubleshooting tutorial than the
arpeggiator one.

## Direct-entry safety

**N07-S01 is the protect-your-work preflight.** It is needed for a reason that is easy
to miss: nothing in N07 looks destructive, but the arpeggiator's on/off state and its
settings are part of the program (OM p.4), so switching it on is itself an unsaved edit
to the loaded program.

N07 assumes nothing about whether the arpeggiator is currently on, which style the
program uses (N07-S06's `displayNote` says the number shown is Roland's example and the
learner's will differ), which part is selected, or the current Grid value. N07-S09 ends
by having the learner check the state they are leaving behind rather than asserting it.

## Deliberate omissions

- **Motif** (PG p.29) is not taught. It governs what happens when more keys are held than
  the style has notes for, and its values are expressed in terms of lowest and highest
  pressed keys — vocabulary this curriculum has not established.
- **Accent, Velocity and Duration** are gestured at collectively in N07-S08 ("how long
  each note lasts, how loud, and how far it climbs") but not walked one at a time. Nine
  steps is already a full tutorial, and the parameters are self-describing once the
  learner knows Cursor and Value work here.
- **Grid's specific values** (1/4 through 1/24, with light and heavy shuffle variants) are
  not listed. The learner is told what Grid does and asked to listen; listing nine values
  with note-value names would require theory vocabulary.
- **The arpeggio's interaction with the pattern sequencer** is not explored. Roland notes
  the tempo is shared (OM p.6), which `B09` already covers.
