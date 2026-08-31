# N10 — Getting unstuck — source notes

Source reconciliation record for N10. Content lives in `js/tutorials.js`
(`window.JDXI_TUTORIALS.N10`).

| Field | Value |
|---|---|
| Tutorial | **N10 — Getting unstuck** (novice, order 10, 12 steps, ~11 min) |
| Short title | Getting unstuck |
| Prerequisites | `["N09"]` — advisory, not a gate |
| Kind | **Recovery and recognition.** Performs no state-changing action. |
| Authored | 2026-08-31 |

## Sources consulted

| Source | Where it is used |
|---|---|
| Owner's Manual `eng07` | **p.2** [Exit] returning to the previous screen and cancelling in some screens; **p.5** the missing-tone-number signal and the `[Shift]` + `[Enter]` revert; **p.6** [Key Hold]; **p.7**/**p.13**/**p.15** system parameters saving automatically on exit; **p.13** Local Switch and Sync Mode; **p.14** ***Returning to the Factory Settings (FACTORY RESET)*** — the procedure, its confirmation screen and what it initialises; **p.17** the whole Troubleshooting table |
| Parameter Guide `e01` | **p.5** *Error Messages* — `Now Playing!`, `Now Recording!`, `Pattern Full!`, `INT Memory Full!` and their stated actions |
| `docs/ROLAND-SOURCE-MAP.md` | §6.1 (Exit behaviour), §6.2 (context-specific combinations); §7 rows 15 (Exit), 34 (backing out of an unwanted edit), 35 (factory reset), 52 (error messages), 53 (troubleshooting); §8.4 whole-instrument destruction; §8.6 states that block or fail; §9 the N10 row; **Q10** (the house recovery pattern this tutorial is the answer to); **Q13** (mirrored confirmation prompts) |

## Per-step reconciliation

| Step | Targets | Mode | Learner-facing factual claims | Support |
|---|---|---|---|---|
| **N10-S01** The first move, every time | `exitButton`, `display` | `display-focus` | Exit steps back one screen; several presses reach the top screen; it cannot make anything worse. | OM p.2 ("[Exit] button — returns you to the previous screen"); OM p.14 step 4. "Cannot make anything worse" rests on Exit appearing in no documented list of destructive or saving operations, and on OM p.2's description of it as returning or cancelling. |
| **N10-S02** Backing out is not undoing | `display` | `full-plus-inset` | Exit leaves a screen but does not restore a changed value; an edited sound shows no tone number. | OM p.2 (what Exit does) read against OM p.5's asterisk (what an edit looks like). The distinction is the absence of any documented value-restoring behaviour for Exit. |
| **N10-S03** Putting an edited sound back | `shiftButton`, `enterButton` | `full-plus-inset` | `[Shift]` + `[Enter]` returns to the original sound after switching or editing; it addresses the sound; it is not a general undo and is not documented as reaching effects, pattern or program settings. | OM p.5 and the OM p.16 shortcut list. The limits are stated as limits of the documentation — see *Recovery scope*. |
| **N10-S04** Starting over, and what it costs | `programValueButtons` | `full-plus-inset` | Selecting another program and returning reloads the stored version, and discards everything unsaved. | OM p.6, p.9 (unsaved work lost on program change); OM p.9 (only WRITE alters storage). Offered **with** the explicit discard warning the recovery house rule requires. |
| **N10-S05** The one screen that saves itself | `menuWriteButton` | `full-plus-inset` | System parameters are saved automatically when you leave the system setting screen; no confirmation and no undo. | OM p.7, p.13 and p.15 all state it: "The parameters you edit are saved when you exit the system setting screen." The absence of a confirmation is the absence of one in Roland's procedure. |
| **N10-S06** Messages that mean stop first | `playStopButton`, `display` | `full-plus-inset` | `Now Playing!` and `Now Recording!` mean an operation cannot run until playback or recording stops. | PG p.5: "Now Playing! — Since the JD-Xi is playing, this operation cannot be executed. Stop playback before you execute the operation", and the same for recording. |
| **N10-S07** Messages that mean something is full | `display` | `full` | `Pattern Full!` means the pattern cannot hold more and data must be deleted from it; `INT Memory Full!` means there is no room to save and space must be freed. | PG p.5, both rows, including the note that Pattern Full can appear after recording a lot of knob movement. |
| **N10-S08** No sound at all | `masterVolumeKnob`, `partSelectGroup` | `full-plus-inset` | Check volume, listening path and part first; the Drums part is silent high up by design; Local Switch turned off disconnects the keys from the sound generator. | OM p.17: "If you do not hear sound when you play the keyboard, check whether the Local Switch is turned OFF"; OM p.13's definition of Local Switch; OM p.17's Drums high-register row. Volume and connection are `B02`'s material, referenced rather than re-derived. |
| **N10-S09** Notes that will not stop | `keyHoldButton` | `full-plus-inset` | Key Hold on sustains notes; press it to turn it off; it works with the arpeggiator off too. | OM p.17's troubleshooting row, and OM p.6's MEMO about Key Hold with the arpeggio off. The release-time alternative is OM p.8 / `N08`. |
| **N10-S10** A pattern that will not play | `playStopButton`, `display` | `full-plus-inset` | Sync Mode set to Slave makes the JD-Xi wait for timing messages from another device; Master is the setting for using it alone. | OM p.17's row, quoted closely, with OM p.13's definitions of both values. |
| **N10-S11** The screen to back out of | `exitButton`, `display` | `display-focus` | Factory Reset initialises all user programs — with their arpeggios, patterns and effects — and all system settings; Exit answers no. | OM p.14: the confirmation screen, "If you decide to cancel, press the [Exit] button", and the *Items initialized by Factory Reset* list. See *Factory Reset handling*. |
| **N10-S12** There is no undo, and that is workable | `exitButton` | `full-plus-inset` | The JD-Xi has no undo and no single reset that puts things back; the recovery set is Exit, `[Shift]` + `[Enter]`, selecting another program, Play/Stop, and saving. | `ROLAND-SOURCE-MAP.md` §7 row 34 and Q10 record that this is the complete documented set. Each member is sourced in its own step above. |

## N10 performs no state-changing action

This is the load-bearing design decision, and it is deliberate.

A learner is most likely to open N10 **while something is already wrong** — and therefore
while carrying unsaved work they are trying to rescue. A troubleshooting tutorial that
demonstrated its own recovery moves would destroy that work in the course of teaching
them: `[Shift]` + `[Enter]` discards sound edits, and selecting another program discards
everything.

So N10 teaches by recognition. Its instructions are *find*, *read*, *recognize*, plus the
two genuinely safe actions — pressing Exit and pressing Play/Stop. N10-S03 says outright:
"Do not press it now unless you actually want to abandon the sound you have loaded."

Two consequences follow, and both are intended:

- **N10 needs no protect-your-work preflight**, because there is nothing in it that can
  lose the learner's work. It is safe to open at the worst possible moment, which is
  exactly when it will be opened.
- Every step still has an observable checkpoint, because recognising something *is*
  observable: the learner can point at the button, read the display, or say which message
  means what.

The precedent is `N01-S13`, which teaches the two −/+ pairs apart by sight and
deliberately presses neither.

## Recovery scope, and the house pattern

`ROLAND-SOURCE-MAP.md` Q10 asked for a consistent house recovery pattern built from the
four documented moves rather than per-step invention. N10-S12 is that pattern stated
explicitly for the learner, and the rest of the library follows it:

| Problem | Move | Where it is documented |
|---|---|---|
| Wrong screen | `[Exit]`, repeatedly | OM p.2, p.14 |
| Edited sound you do not want | `[Shift]` + `[Enter]` | OM p.5, p.16 |
| Want none of what you have | Select another program — **with** the discard warning | OM p.6, p.9 |
| "It refuses to do anything" | Stop playback or recording | PG p.5 |
| Want to keep it | Save the program | OM p.9 |

**No step in N10 presents any of these as universal.** N10-S03 states what
`[Shift]` + `[Enter]` does not reach; N10-S04 states what selecting a program costs;
N10-S05 states that the system settings behave the opposite way to everything else; and
N10-S12 opens by saying there is no undo and no single reset.

## Factory Reset handling

N10 **names** Factory Reset, states its full cost, reproduces its confirmation screen,
and **does not perform it**. The tutorial contains no route to it: N10-S11 gives no menu
path, and its instruction is to recognize the screen and press Exit.

Showing the screen is a protective decision rather than an invitation. A beginner
wandering the Menu can reach UTILITY, and the difference between recognising that prompt
and not recognising it is the difference between pressing Exit and losing every saved
program. The step says so in as many words: "The reason to show it here is so that you
recognize it and can press Exit, not so that you use it."

Factory Reset appears in no `recoveryHelp` anywhere in the library, in N10 or outside it.
It is never offered as a fix.

## Display provenance

Two screens, both reproduced verbatim.

| Step | Screen | Source |
|---|---|---|
| N10-S01 | `A64   1-1    120` / `256:Synth Lead01` | OM p.5, the top screen |
| N10-S11 | `Factory Reset ?` / `[Ent]:Y [Exit]:N` | OM p.14, the Factory Reset confirmation |

N10-S11's `displayNote` does something the others do not: it points out that this prompt
is **the opposite way round** from the Pattern Length prompt in `N03`, and that the keys
mean the same thing in both while not being printed in the same order.

That is `ROLAND-SOURCE-MAP.md` Q13 handled as the display-string house rule requires —
each prompt reproduced in its own documented order, neither normalised to match the
other, and the inconsistency surfaced to the learner as a reason to read the screen
rather than press from memory. It is arguably the single most useful thing N10 teaches
about confirmation prompts.

## Direct-entry safety

N10 assumes nothing whatsoever about the instrument's state — which is the point. It does
not assume a program is loaded, that anything is playing, that the sound is unedited,
that any setting holds its default, or that the learner has done `N09`.

Every step is written to be correct whether or not the learner currently has the problem
it describes. N10-S06 has them press Play/Stop to be sure nothing is running, which is
safe in either case.

## Deliberate omissions

- **Restore** (OM p.14) is not taught. It replaces the instrument's data with a backup
  file and requires a computer; it is `I09` material, and it is not a recovery a beginner
  should reach for.
- **The system-program update** (v1.10 p.1, v1.50 p.1) is not mentioned. Teaching a
  firmware update is out of scope entirely.
- **`Read Error!`, `Sys Mem Damaged!`, `MIDI Buff Full!`, `MIDI Offline!`,
  `Rec Overflow!`** (PG p.5) are omitted. They belong to backup/restore, MIDI setups and
  fault conditions a beginner working alone will not reach, and `Sys Mem Damaged!`'s
  documented action is a factory reset, which this tutorial will not send anyone toward.
- **The MIDI troubleshooting rows** (OM p.17) are omitted: correct, documented and
  irrelevant to a learner with no external gear.
- **Microphone troubleshooting** (OM p.17) is omitted; no canonical tutorial covers the
  microphone, and the `Mic Sel` hardware-damage warning is already carried in `N01`.
