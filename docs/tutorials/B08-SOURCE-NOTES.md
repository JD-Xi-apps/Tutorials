# B08 — Play a pattern — source notes

Source reconciliation record for B08. Content lives in `js/tutorials.js`
(`window.JDXI_TUTORIALS.B08`).

| Field | Value |
|---|---|
| Tutorial | **B08 — Play a pattern** (beginner, order 8, 10 steps, ~8 min) |
| Short title | Play a pattern |
| Prerequisites | `["B07"]` — advisory, not a gate |
| Kind | **Operating procedure.** Playback and part mute only; **records nothing.** |
| Authored | 2026-08-30 |

Learning goals as authored:

1. Start and stop a pattern.
2. Tell from the display that a pattern is running.
3. Move between the parts of a pattern while it plays.
4. Hear what one part is contributing by muting it.

## Master-plan reconciliation (2026-08-31)

The master plan (§8) gives B08 start/stop, recognising the 01–16 row, **switching Part
Select while playing to hear and inspect the Parts**, Part Mute as an early arranging idea,
and Program changes where useful to reach a preset pattern. The brief adds one explicit
exclusion: *keep deep Sync Mode troubleshooting out of the primary Beginner flow.*

**A step was added.** Switching Part Select during playback is in the master plan's list for
this tutorial and the pre-reconciliation B08 did not do it — it went straight from finding a
pattern to muting one. The new `B08-S06` *Look inside the pattern* fills that gap, and it
earns its place beyond compliance: it is the move every sequencer tutorial from `N03` onward
opens with, and it is the one that makes "a pattern is several parts at once" audible rather
than asserted.

**A step was removed.** Old position 9, *If a pattern will not play*, taught Roland's
documented Sync Mode cause: with the system setting at SLAVE the JD-Xi waits for MIDI clock
from another device and patterns do not start (OM p.17, setting at OM p.13). The fact is
correct and worth knowing. It is also MIDI-shaped troubleshooting, reached through the
system settings, sitting in the eighth tutorial of a beginner course — and the brief names
it specifically.

It is not homeless. **`N10-S10` already teaches exactly this**, from the same page, under the
heading *A pattern that will not play* — so the Beginner step was a duplicate of Novice
content two levels early, which is a fair description of why it felt out of place. It is also
added to **Quick Reference** entry 7, *Play/stop a Pattern*, the recall-shaped home the brief
nominates. The fact is now in the two places the master plan would put it and in neither
place too soon.

The closing step was rewritten in its place. It now does what the old one only did
incidentally — stop cleanly, confirm every part is audible again, and say plainly that
nothing in the tutorial wrote anything — and its recovery still points a genuinely stuck
learner at `N10`.

No B08 id vanished: the tutorial removed one step and added one, so it still ends at ten.
Old positions 6–9 each moved down one id, and the last id now carries the rewritten closing
step rather than the Sync Mode step.

## Sources consulted

| Source | Where it is used |
|---|---|
| Owner's Manual `eng07` | **p.2** item 11 (PATTERN SEQUENCER); **p.3** item 16 (Favorite / Pattern Sequencer row); **p.4** *Pattern sequencer* — patterns are saved in a program; **p.5** *Top screen* — the measure–beat field, and program selection; **p.10** *Basic Operation of the Pattern Sequencer* ([▶/■] plays and stops), *Muting a specific part (Part Mute)*, *Changing the Number of Measures* (up to four measures); **p.13** SYSTEM → MIDI → Sync Mode; **p.17** Troubleshooting, "The pattern won't play" |
| Parameter Guide `e01` | pp.3–4 — pattern-sequencer structure; consulted for background only, no B08 claim rests on it alone |
| `docs/ROLAND-SOURCE-MAP.md` | §7 rows 23 (playing existing patterns), 24 (sequencer basics), 44 (part mute); §8.2 losing unsaved work; §9 the B08 row |

## Per-step reconciliation

| Step | Targets | Mode | Learner-facing factual claims | Support |
|---|---|---|---|---|
| **B08-S01** Start from the top screen | `exitButton`, `display` | `display-focus` | Exit several times reaches the top screen; the measure and beat sit in the middle of the upper line, program on the left, tempo on the right. | OM p.14 step 4 (Exit several times); OM p.5 *Top screen*, whose callouts name Program number, Measure–beat, Tempo and Tone number: Tone name. Screen reproduced verbatim — see *Display provenance*. |
| **B08-S02** Start the pattern | `playStopButton`, `display` | `full-plus-inset` | The Play/Stop button plays the pattern. Some programs have nothing recorded, in which case you hear nothing. The counting measure–beat numbers mean the sequencer is running. | OM p.10: "[▶/■] button — Play or stop the pattern." The measure–beat field is OM p.5. **That some programs may contain no pattern is stated as a possibility, never as a fact about any particular program** — see *What B08 refuses to assume*. |
| **B08-S03** Stop the pattern | `playStopButton` | `full-plus-inset` | The same button starts and stops. Pressing it repeatedly is harmless. | OM p.10, same sentence. "Harmless" is accurate because B08 has entered no recording mode: recording requires [Real Time Rec], [Step Rec] or a held step button (OM pp.11–12), none of which B08 touches. |
| **B08-S04** Protect any work you want to keep | `programValueButtons` | `full` | Selecting a different program discards anything edited and not saved on this one. There is no way to ask the JD-Xi which programs contain patterns. | OM p.6 and p.9 (*Saving*) for the discard. The absence of a "which programs have patterns" query is an absence in the documented feature set — OM p.10 and PG pp.3–4 describe playing and recording patterns but document no browse or search. Stated as "there is no way to ask", which is what an author can honestly say about a documented instrument. |
| **B08-S05** Find a program with a pattern | `programValuePlusButton`, `playStopButton` | `full-plus-inset` | Value + selects the next program; preset programs are in banks A–D; holding Shift while pressing Value jumps a bank. | OM p.5 *Choosing a Program*, including "To switch banks, hold down the [Shift] button and use the Value [-][+] buttons (preset banks A–D, user banks E–H)"; OM p.4 bank table. |
| **B08-S06** Look inside the pattern | `partSelectGroup`, `keys` | `full-plus-inset` | Selecting a part while a pattern runs does not change the pattern; it changes which part the keys play. | OM p.5 *Choosing a Part to Play*: "Press the Part Select button of the part that you want to play", and its MEMO — the keys play one part at a time, while "you can make multiple parts be heard simultaneously by recording them to a pattern". Read together those two sentences are exactly this step: the pattern keeps sounding every recorded part, and the Part Select buttons re-point the **keys**. Roland documents no interaction between Part Select and transport state, and this step claims none beyond the pattern continuing. |
| **B08-S07** Mute a part while it plays | `shiftButton`, `drumsButton` | `full-plus-inset` | Holding Shift and pressing a Part Select button mutes that part; the pattern keeps running. | OM p.10 *Muting a specific part (Part Mute)*: "Hold down the [Shift] button and press the Part Select button. The selected part is muted." Its position in the *Playing and Recording Patterns* chapter, and Roland's framing ("convenient when you want to mute a specific part while a pattern is playing"), support doing it during playback. |
| **B08-S08** Bring it back | `shiftButton`, `partSelectGroup` | `full-plus-inset` | The same combination unmutes; several parts can be muted at once. Muting changes nothing stored. | OM p.10: "You can select multiple parts if you like. To return to the original state, once again hold down the [Shift] button and press the Part Select button." That it changes nothing stored follows from its absence from every list of destructive or saved operations (OM p.9 WRITE, OM p.10 erase operations, §8 of the source map) — it is a live performance control that the same gesture reverses. |
| **B08-S09** Where a pattern lives | `stepButtons` | `full-plus-inset` | A pattern is up to four measures long; the numbered row is where notes are laid into it. | OM p.10 *Changing the Number of Measures*: "You can create a pattern that's up to four measures long." OM p.11 *What is TR-REC?*: "TR-REC is the method of using the [01]–[16] buttons to specify the timing at which each instrument will sound." **No claim is made about the buttons lighting during ordinary playback** — see *Deliberate omissions*. |
| **B08-S10** Stop where you are | `playStopButton` | `full-plus-inset` | The same button stops the pattern. Starting, stopping and muting change nothing that is stored. | OM p.10 for the transport and for Part Mute's reversibility ("To return to the original state, once again hold down the [Shift] button and press the Part Select button"). That none of it is stored is the absence of any documented write: OM p.10's recording procedures are what write a pattern, and B08 performs none of them. |

## Display provenance

One screen, at B08-S01, reproduced verbatim from Roland's illustration of the top
screen at OM p.5:

```
A64   1-1    120
256:Synth Lead01
```

`syntheticDisplay: false`; `displayNote` names the source and the varying fields. B08
uses this screen because the measure–beat field is its checkpoint for "the sequencer is
running", and OM p.5's callouts are what identify that field. Nothing is composed, and
`ROLAND-SOURCE-MAP.md` Q4 is untouched.

## What B08 refuses to assume

Direct entry means B08 cannot know which program is loaded, and Roland documents no way
to know in advance whether a given program contains a pattern. B08 is written around
that rather than through it:

- the **checkpoint at B08-S02 is the measure–beat field counting**, not "you hear a
  pattern". The counter proves the sequencer is running whether or not the loaded
  program has anything recorded;
- `expectedSound` is conditional and says so: "If this program has a pattern recorded,
  you hear it start. Some programs have nothing recorded, in which case you hear
  nothing";
- B08-S04 and B08-S05 exist to give the learner a documented way forward if they heard
  nothing, and are explicitly skippable if they did;
- no preset program number is ever named as one that has a pattern.

B08 also assumes nothing about which parts are currently muted (B08-S08's recovery
covers losing track), what the pattern length is, or what Sync Mode is set to.

## Direct-entry safety

**B08-S04 is the protect-your-work preflight**, and it sits immediately before the one
discard-capable action in the tutorial — the program change at B08-S05. It states what
can be lost, tells the learner to save first if they have something to keep, names
`N09`, and adds a genuine third option: leave B08 here, because nothing later in the
Beginner path depends on having heard a pattern.

The preflight is placed at S04 rather than at the top of the tutorial on purpose. B08-S01
to B08-S03 change nothing at all, so a learner who hears a pattern immediately never
needs to consider the question — and the warning arrives exactly where the risk does.

## SYSTEM handling

B08-S10 names Sync Mode as the documented cause of a pattern that will not play, and
**deliberately does not take the learner into SYSTEM to check or change it.**

System parameters are saved automatically when you leave the system setting screen
(OM p.7, p.13, p.15). A beginner sent into SYSTEM to look at Sync Mode could change
something on the way and have it written without confirmation, and B08 could not
restore it, because it cannot know what the value was. The step therefore states the
fact, states the auto-save behaviour as the reason for not going in, and hands off to
`N01` (which visits SYSTEM for navigation only and presses no Value button) and `N10`
(troubleshooting).

## Deliberate omissions

- **All four recording methods** (OM pp.11–12) are omitted. B08 records nothing, which
  is what keeps it free of the overwrite behaviour that TR-REC, step and realtime
  recording each have. Recording is `N03`–`N05` and `I08`.
- **The [01]–[16] buttons are not claimed to light during playback.** Roland describes
  them lighting to show steps in TR-REC (OM p.11) and blinking during step recording
  (OM p.12), neither of which B08 enters. B08-S09 treats the row as a location to
  recognise, not a display to read.
- **Pattern Erase, Pattern Copy and the erase-a-step gestures** (OM p.10) are not
  mentioned. Every one of them destroys pattern data, and none is needed to press play.
- **Pattern Length and Scale Setting** (OM p.10) are named only through the "up to four
  measures" fact; changing them is Menu work and belongs to `N03`.
- **`Loop Rec`, `Tempo Lock` and the other SYSTEM parameters** are not discussed.
