# N06 — Combine parts in a pattern — source notes

Source reconciliation record for N06. Content lives in `js/tutorials.js`
(`window.JDXI_TUTORIALS.N06`).

| Field | Value |
|---|---|
| Tutorial | **N06 — Combine parts in a pattern** (novice, order 6, 10 steps, ~11 min) |
| Short title | Combine parts |
| Prerequisites | `["N05"]` — advisory, not a gate, and N06 explicitly does not rely on N05's output surviving |
| Kind | **Operating procedure.** Records into the loaded pattern on up to four parts. |
| Authored | 2026-08-31 |
| Reconciled | 2026-08-31, against `PRODUCT-CURRICULUM-MASTER-PLAN.md` §9 |

Learning goals as authored:

1. Get three parts playing together in one pattern.
2. Hear what each part is contributing, on its own.
3. Use muting to decide what a loop needs and what it does not.
4. Finish with a simple loop you made.

## Master-plan reconciliation (2026-08-31)

The brief's verdict was that the previous N06 was **"too Program-Edit-heavy"**, with the
instruction *do not make Level/Pan/Program Edit the lesson.* Four of its eleven steps were
inside Program Edit setting Level and Pan.

It also broke the direct-entry contract in a way nothing else in the course did. Its third
step read "If you followed N04 and N05 your beat is on the Drums part and your line is on
the Analog Synth, so this one is free" — an assumption about the instrument's state, drawn
from the prerequisite list, which `TUTORIAL-ARCHITECTURE.md` §6 says is exactly what a
tutorial may never do. The brief calls this out directly: *do not assume N04/N05 state
survives merely because prerequisites list them.*

| Master-plan requirement | Before | Now |
|---|---|---|
| safely recreate/establish a drum + bass foundation | **absent** — it was assumed | `N06-S03` |
| add Digital Synth 1 | yes | `N06-S04`, `N06-S05` |
| add Digital Synth 2 or Analog where useful | **absent** | `N06-S06`, explicitly optional |
| Part Mute to audition combinations | yes | `N06-S07` |
| muting/unmuting **as an arranging tool** | listening only | `N06-S08` |
| minimum 3 parts with pattern content | assumed, not established | established by S03–S05 |
| Level / Pan / Program Edit | 4 of 11 steps | **none** |

Balancing parts against each other is not lost — it moves to `I07`, where four parts are
assembled deliberately and a balance is something the learner actually needs. The `Level`
and `Pan` parameters are also described on demand in the Hardware Explorer.

The old `N06-S04` used Roland's fourth recording method — holding a step button while playing
the keyboard (OM p.12), which adds notes without deleting. It is a genuinely gentle method
and it was well chosen for a step that adds to an existing pattern. It has been replaced with
ordinary TR-REC anyway, because **v1's sequencer scope names two entry methods** and `N03`
now teaches exactly those two; introducing a third here would contradict the tutorial three
places earlier. The step adds to a part with nothing in it, so TR-REC's refusal to overwrite
never arises.

<!-- removed-steps:begin -->

Ids that no longer exist in N06: `N06-S11`.

<!-- removed-steps:end -->

## Sources consulted

| Source | Where it is used |
|---|---|
| Owner's Manual `eng07` | **p.5** *Choosing a Part to Play* and its MEMO (one part at a time; several parts heard together by recording them to a pattern); **p.10** *Muting a specific part (Part Mute)*, *Basic Operation of the Pattern Sequencer*; **p.11** *What is TR-REC?* and the TR-REC procedures; **p.12** *Saving a Pattern* |
| `docs/ROLAND-SOURCE-MAP.md` | §7 rows 5 (part selection), 24–25 (sequencer, TR-REC), 26 (Part Mute); §8.2 losing unsaved work; §9 the N06 row; Q9 (the one-playable-part constraint) |

The Parameter Guide and MIDI Implementation were not needed. No third-party source informed
any procedure.

## Per-step reconciliation

| Step | Targets | Mode | Learner-facing factual claims | Support |
|---|---|---|---|---|
| **N06-S01** The constraint, and the way round it | `partSelectGroup` | `full-plus-inset` | The keys play one part at a time, never two. The pattern sequencer is how several parts are heard together. | OM p.5 MEMO, both halves in one sentence: "You can't select and perform on multiple parts simultaneously. However you can make multiple parts be heard simultaneously by recording them to a pattern." |
| **N06-S02** Protect any work you want to keep | `programValueButtons`, `stepButtons` | `full` | Recording changes the pattern in the loaded program; a pattern disappears when you select another program or power off. | OM p.12 *Saving a Pattern*: "A pattern you create will disappear if you select a different program or if you power-off the JD-Xi." The recovery's offer to step away is given with its discard consequence stated. |
| **N06-S03** Get drums and a bass line going | `drumsButton`, `stepButtons` | `full-plus-inset` | Selecting a part, playing a key and lighting steps records into that part. | OM p.10 ("When you record, the part that's selected by Part Select is recorded") and OM p.11's TR-REC procedures for the drum and synth cases. **No claim is made about what is already loaded**: the step works whether or not N04/N05 output survives, and says so. |
| **N06-S04** Choose a part that is not in use | `digitalSynth1Button`, `playStopButton` | `full-plus-inset` | Part Select chooses which part records; holding a key shows that note's steps on the numbered row. | OM p.10 as above; the lit-step display is OM p.11 ("playing an instrument on the keyboard makes the [01]–[16] buttons light or go dark"), generalised to synth parts by OM p.11's own "in the same way as for a drum part". |
| **N06-S05** Add the third part | `stepButtons`, `keys` | `full-plus-inset` | Playing a key then lighting steps records that note. A step that already holds a note will not take a new one until erased. | OM p.11 TR-REC for a synth part, steps 1–2; the occupied-step constraint is OM p.11's own note, and the recovery gives Roland's erase gesture (OM p.10). |
| **N06-S06** A fourth part, if you want one | `partSelectGroup`, `stepButtons` | `full-plus-inset` | The same procedure works on the remaining part; four parts is the most a program has. | OM p.4 (a program consists of four parts); procedure as above. The step is written as genuinely optional, per the master plan's "minimum 3 Parts; fourth optional". |
| **N06-S07** Listen to one part at a time | `shiftButton`, `partSelectGroup` | `full-plus-inset` | `[Shift]` + Part Select mutes a part; the same combination unmutes; several parts can be muted at once; muting changes nothing. | OM p.10 *Muting a specific part*, quoted closely: "Hold down the [Shift] button and press the Part Select button. The selected part is muted. You can select multiple parts if you like. To return to the original state, once again hold down the [Shift] button and press the Part Select button." That it changes nothing is the absence of any documented write — mute appears in none of Roland's lists of ways work is lost. |
| **N06-S08** Decide what the loop needs | `shiftButton`, `partSelectGroup` | `full-plus-inset` | Same gesture; nothing is permanent; a muted part can be left muted. | Same source. This step adds **no new procedure** — it is the master plan's "muting/unmuting as arranging tool", which is a use of the gesture rather than a further fact about it. |
| **N06-S09** Listen to what you made | `playStopButton`, `partSelectGroup` | `full` | Recap; several parts play together from the pattern. | OM p.5 MEMO and OM p.10 as above. No new claim. |
| **N06-S10** None of it is saved | `display` | `full-plus-inset` | The whole loop lives in the loaded program and is lost on program change or power-off. | OM p.12 *Saving a Pattern*, and OM p.6 / p.9 for the sounds and effects that go with it. |

## Direct-entry safety

**N06 carries its preflight at `N06-S02`**, before the first recording at `N06-S03`.

The more interesting safety property of this tutorial is the one the reconciliation fixed:
N06 now assumes **nothing** about what N04 and N05 left behind. `N06-S03` establishes its own
foundation from whatever is loaded, tells the learner they can reuse an existing beat if one
happens to be there, and gives a one-minute recipe if it is not. A learner arriving directly
at N06 from the home screen gets the same tutorial as one arriving from N05.

N06 assumes nothing about which program is loaded, which parts already hold pattern content,
which part was selected on entry, whether anything is muted, or whether the sequencer is
running.

## Destructive-risk handling

N06 records but does not erase. The only destructive gesture it names is Roland's
`[Erase]` + step, and only in `N06-S05`'s `recoveryHelp`, as the documented way past a step
that refuses a new note — with the pattern stopped, on a step the learner is deliberately
targeting.

Part Mute is not destructive and the tutorial says so twice, because a learner who believes
muting deletes something will not use it freely, and using it freely is the whole point of
`N06-S08`.

## Deliberate omissions

- **Level and Pan** (PG p.10) are not taught. See *Master-plan reconciliation*.
- **Program Edit** is not opened at all.
- **Keyboard layering** is not attempted, and could not be: Roland states the keys play one
  part at a time. The master plan lists it as deferred, and the instrument agrees.
- **Roland's fourth recording method** (OM p.12) is not used. See above.
- **Realtime Recording** and **Pattern Copy** are excluded from v1 and are not named.
- **Part Output routing and send levels** (PG p.10) are Explorer and `I06` material.
