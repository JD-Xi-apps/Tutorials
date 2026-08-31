# N06 — Combine parts in a pattern — source notes

Source reconciliation record for N06. Content lives in `js/tutorials.js`
(`window.JDXI_TUTORIALS.N06`).

| Field | Value |
|---|---|
| Tutorial | **N06 — Combine parts in a pattern** (novice, order 6, 11 steps, ~11 min) |
| Short title | Combine parts |
| Prerequisites | `["N05"]` — advisory, not a gate |
| Kind | **Authoring and arranging.** Adds a part to the pattern, then balances the parts. |
| Authored | 2026-08-31 |

## The title is a resolved product decision

This tutorial's architectural working title was once *Layer sounds*, which overpromised:
the JD-Xi cannot play several parts from the keys at once. `ROLAND-SOURCE-MAP.md` Q9
records the PM decision that resolved it — the working title became **Combine parts in a
pattern**, with the tutorial ID N06 preserved, and the intended concept restated as
arranging multiple parts *through a pattern* rather than playing them together from the
keyboard.

N06 as authored is that tutorial. N06-S01 states the constraint and the way round it in
Roland's own terms, and every later step is about arranging rather than layering.

## Sources consulted

| Source | Where it is used |
|---|---|
| Owner's Manual `eng07` | **p.5** *Choosing a Part to Play* and its MEMO — the one-playable-part constraint and Roland's own answer to it; **p.9** the Menu route to Program Edit; **p.10** *Muting a specific part (Part Mute)*, and *Deleting All Notes at a Specific Step*; **p.12** *Recording Methods Other Than TR-REC, Step Recording, and Realtime Recording*, and *Saving a Pattern* |
| Parameter Guide `e01` | **p.3** the same fourth recording method, with the note that existing notes are not deleted; **p.10** Program Edit MAIN — the illustrated screen, the D1/D2/DR/AN indicator, Level, Sound Mute and Pan |
| `docs/ROLAND-SOURCE-MAP.md` | §7 rows 5 (part selection), 28 (the fourth recording method), 44 (part mute); §9 the N06 row; Q9 (the title decision) |

## Per-step reconciliation

| Step | Targets | Mode | Learner-facing factual claims | Support |
|---|---|---|---|---|
| **N06-S01** The constraint, and the way round it | `partSelectGroup` | `full-plus-inset` | The keys play one part at a time; multiple parts are heard together by recording them to a pattern. | OM p.5 MEMO, both halves: "You can't select and perform on multiple parts simultaneously. However you can make multiple parts be heard simultaneously by recording them to a pattern." |
| **N06-S02** Protect any work you want to keep | `programValueButtons` | `full` | Recording and level changes both change the loaded program. | OM p.6/p.9; OM p.12 *Saving a Pattern*. |
| **N06-S03** Choose a part that is not in use | `digitalSynth1Button`, `playStopButton` | `full-plus-inset` | Recording goes to the selected part; muting reveals whether a part has anything in the pattern. | OM p.10 (recording follows Part Select); OM p.10 *Part Mute*. |
| **N06-S04** Add a note without deleting anything | `stepButtons`, `keys` | `full-plus-inset` | Hold a numbered button, play a key, release: the note is added and existing notes are kept. | OM p.12, the fourth method, steps 1–4, and its note: "With this recording method, the originally existing notes are not deleted; the notes you enter are added to the recording." PG p.3 repeats it. The removal instruction in `recoveryHelp` is OM p.10's stop-and-hold-Erase gesture. |
| **N06-S05** Build it up and listen | `stepButtons`, `keys` | `full` | Same method, repeated. | As N06-S04. |
| **N06-S06** Listen to one part at a time | `shiftButton`, `partSelectGroup` | `full-plus-inset` | `[Shift]` + Part Select mutes; the same combination unmutes; several parts can be muted; nothing is changed by it. | OM p.10 *Part Mute*, including "You can select multiple parts if you like" and "To return to the original state, once again hold down the [Shift] button and press the Part Select button." |
| **N06-S07** Open Program Edit | `menuWriteButton`, `display` | `full-plus-inset` | Menu/Write → Cursor → Program Edit → Enter. | OM p.9 steps 1–2; OM p.14's Menu item list. |
| **N06-S08** Move to the part settings | `shiftButton`, `cursorRightButton`, `display` | `display-focus` | `[Shift]` + Cursor reaches the MAIN group; two letters at the right show the part. | PG p.10 MAIN, its `Menu [Shift]+Cursor` column and its part indicator. Screen from PG p.10 — see *Display provenance*. |
| **N06-S09** Set each part's level | `partSelectGroup`, `programValueButtons` | `full-plus-inset` | Part Select chooses the part being edited; Value changes its Level; this is a different control from the AMP/ENV Level knob and from Master Volume. | PG p.10: "Use the [Part Select] button to switch parts", and "Level 0–127 — Volume of each part". The distinction from the panel knob is OM p.8 ("[Level] knob — This sets the volume", within the tone's AMP section) and from Master Volume is OM p.2 item 7 (output level). Three different scopes, three Roland sentences. |
| **N06-S10** Give each part its own space | `cursorRightButton`, `programValueButtons` | `full-plus-inset` | Pan places a part in the stereo picture, from far left through centre to far right. | PG p.10: "Pan L64–63R — Specifies the stereo position of each part's sound. 'L64' is far left, '0' is center, and '63R' is far right." |
| **N06-S11** Come out and listen | `exitButton` | `full-plus-inset` | Exit returns to the top screen; nothing was written to storage. | OM p.9 step 4. Nothing written: a program edit requires WRITE (OM p.9). |

## Display provenance

One screen, at N06-S08, reproduced verbatim from PG p.10:

```
PROG: MAIN D1
Level 127
```

`syntheticDisplay: false`; the `displayNote` names the source and says the two letters
show the part and the value is the learner's own. It is the same screen `N02` tours,
used here for the work rather than the tour.

## Why the fourth recording method

N06 teaches the hold-a-step-and-play method rather than TR-REC or step recording, and
the reason is the same class of safety decision recorded in `N04`'s notes: it is the only
method Roland documents as **adding** notes without deleting what is already there
(OM p.12, PG p.3).

By the time a learner reaches N06 they have a beat from `N04` and a line from `N05` in
the same pattern. A method that overwrites silently would put both at risk while the
learner is deliberately adding a third part. This one cannot.

## Direct-entry safety

**N06-S02 is the protect-your-work preflight.** As in `N05` it names the "stay on this
program deliberately" path, because a learner following the guided sequence has work in
this program that N06 is meant to build on rather than replace.

N06 assumes nothing about which parts already have pattern data — N06-S03 tells the
learner how to find out by muting rather than asserting which are free, and offers
Digital Synth 2 as the alternative if Digital Synth 1 turns out to be busy. It assumes
nothing about the current Level or Pan values either: N06-S09's `recoveryHelp` tells the
learner to note the number before changing it, and explicitly declines to claim that 127
is what they will find, saying to check rather than assume because the program may have
been set up differently.

## Deliberate omissions

- **`Sound Mute`** (PG p.10) is not taught, although it sits beside Level and Pan in the
  same group. The panel gesture at N06-S06 does the same job reversibly and without
  entering a menu; a second, parameter-based mute would be two ways to do one thing.
- **`Part Output` and the send levels** are not opened. Routing parts to effects
  individually is `I06`/`I07` work.
- **Pattern Copy** (OM p.10) is omitted; it overwrites the destination part.
- **No balance is called correct.** N06-S09 offers one piece of craft advice — pull back
  what is too loud rather than pushing everything else up — as advice, not as a rule, and
  no target level is given.
