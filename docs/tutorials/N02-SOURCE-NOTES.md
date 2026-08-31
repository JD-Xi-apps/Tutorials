# N02 — Understand programs and parts — source notes

Source reconciliation record for N02. Content lives in `js/tutorials.js`
(`window.JDXI_TUTORIALS.N02`).

| Field | Value |
|---|---|
| Tutorial | **N02 — Understand programs and parts** (novice, order 2, 10 steps, ~9 min) |
| Short title | Programs and parts |
| Prerequisites | `["N01"]` — advisory, not a gate |
| Kind | **Structural orientation.** Navigates Program Edit; **changes nothing.** |
| Authored | 2026-08-31 |

## Sources consulted

| Source | Where it is used |
|---|---|
| Owner's Manual `eng07` | **p.4** *Getting Acquainted with the JD-Xi* — program, tone, part, effects, arpeggio, pattern sequencer, system; the bank table; **p.5** *Top screen* and *Choosing a Part to Play*; **p.9** the Menu route to Program Edit; **p.13** SYSTEM auto-save (as the contrast); **p.14** the Menu item list and its order |
| Parameter Guide `e01` | **p.6** *How the JD-Xi Is Structured* and the bank table; **p.10** *Program Parameters* — the COMMON and MAIN groups, the illustrated screens, the D1/D2/DR/AN part indicator, and the per-part parameters (Level, Sound Mute, Pan, Part Output, send levels) |
| `docs/ROLAND-SOURCE-MAP.md` | §6.1 menu navigation; §6.2 `[Shift]` + Cursor group movement and its documented scope; §7 rows 4 (bank structure), 5 (part selection), 17 (menu navigation); §9 the N02 row |

## Per-step reconciliation

| Step | Targets | Mode | Learner-facing factual claims | Support |
|---|---|---|---|---|
| **N02-S01** Which program you are on | `exitButton`, `display` | `display-focus` | Exit several times reaches the top screen; the letter is the bank and the number is the program. | OM p.14 step 4; OM p.5 *Top screen* callouts ("Program bank", "Program number"); OM p.4 bank table. |
| **N02-S02** A program holds four parts | `partSelectGroup` | `full-plus-inset` | Every program has the same four parts; switching program swaps all four plus effects, arpeggio and pattern. | OM p.4 / PG p.6: "A program consists of four parts…"; effects, arpeggio and pattern all documented as saved within the program (OM p.4, p.9, p.12; PG p.6). |
| **N02-S03** Each part holds one tone | `partSelectGroup`, `display` | `full-plus-inset` | The lower line shows the selected part's tone. Pressing Part Select selects no new sound and discards nothing. | OM p.4 *Tone*: "You can select one tone for each part." OM p.5 *Top screen* (tone number: tone name on the lower line) and *Choosing a Part to Play*. That Part Select is non-destructive is the absence of any documented state change: OM p.2 item 4 describes it as selecting the part played by the keyboard, and it appears in none of Roland's lists of ways work is lost (OM p.6, p.9). |
| **N02-S04** Open Program Edit | `menuWriteButton`, `display` | `display-focus` | Menu/Write → Cursor → Program Edit → Enter; the screen shows PROG: COMMON with a program-wide setting. | OM p.9 *Editing Program and Effect Settings* steps 1–2; OM p.14 *Accessing the Menu Screens* and its item list, in which Program Edit follows SYSTEM. Screen from PG p.10 — see *Display provenance*. The long-press caveat is OM p.6/p.16. |
| **N02-S05** Look, do not change | `programValueButtons` | `full-plus-inset` | Value edits the program here. Program Edit is **not** saved on exit, unlike SYSTEM. An accidental change is not written, but does replace what is loaded. | PG p.10's column headers make Value the editing control. The contrast is two Roland statements read together: system parameters "are saved when you exit the system setting screen" (OM p.7, p.13, p.15), while a program must be written deliberately (OM p.9 WRITE) and an unsaved program edit is lost on program change or power-off (OM p.6, p.9). |
| **N02-S06** Jump to the part settings | `shiftButton`, `cursorRightButton`, `display` | `display-focus` | `[Shift]` + Cursor moves between the groups of a settings screen; Program Edit has COMMON and MAIN. | OM p.16 shortcut list and PG p.2; PG p.10's `Menu [Shift]+Cursor` column, which lists COMMON and MAIN for Program Edit. This is within the documented scope recorded at `ROLAND-SOURCE-MAP.md` §6.2 — Program Edit is one of the screens explicitly confirmed to have menu groups. |
| **N02-S07** Which part you are editing | `partSelectGroup`, `display` | `full-plus-inset` | Two letters at the right of the upper line show the part: D1, D2, DR, AN. Part Select switches which part is being edited. | PG p.10 MAIN: "The part that you're editing is shown in the right of the upper line. D1/D2 (Digital Synth 1/2), DR (Drums), AN (Analog Synth). Use the [Part Select] button to switch parts." |
| **N02-S08** Walk along a part's settings | `cursorRightButton`, `display` | `full-plus-inset` | Cursor selects the parameter; the group name stays put. Parameters include the part's level, mute, stereo position and effect routing. | OM p.9 step 3 / OM p.14 step 3; PG p.10's MAIN parameter list (Level, Sound Mute, Pan, Part Output, Dly Send Lev, Rev Send Lev). Parameters are described in plain terms rather than named, deliberately — see *Deliberate omissions*. |
| **N02-S09** Leave without changing anything | `exitButton`, `display` | `full-plus-inset` | Exit returns to the top screen; nothing was written. | OM p.9 step 4 / OM p.14 step 4. "Nothing written" follows from N02 having pressed no Value button and from Program Edit having no auto-save. |
| **N02-S10** Where your programs go | `display` | `full-plus-inset` | Preset banks A–D and user banks E–H, 64 programs each; 256 of Roland's and room for 256 of yours. | OM p.4 and PG p.6 bank tables: "Preset program A–D 01–64 / User program E–H 01–64", and OM p.4 "A program you edited can be saved as a user program (64 programs in each bank E–H)." 4 × 64 = 256 is arithmetic on Roland's own table. |

## Display provenance

Three screens, all reproduced verbatim from Roland illustrations:

| Step | Screen | Source |
|---|---|---|
| N02-S01 | `A64   1-1    120` / `256:Synth Lead01` | OM p.5, the top screen |
| N02-S04 | `PROG: COMMON` / `Tempo 120` | PG p.10, Program Edit COMMON |
| N02-S06 | `PROG: MAIN D1` / `Level 127` | PG p.10, Program Edit MAIN |

Each carries `syntheticDisplay: false` and a `displayNote` naming the source and the
fields that vary by instrument. All six lines are inside the ≤16-character data guard,
which asserts nothing about the real character grid (`ROLAND-SOURCE-MAP.md` Q4).

## Direct-entry safety

**N02 changes nothing on the instrument and therefore carries no protect-your-work
preflight.** It selects no program and no tone, and presses no Value button anywhere —
the same discipline `N01` adopted, for the same reason: prerequisites are advisory, so
a learner may open N02 at any moment, carrying unsaved work.

Part Select is used freely, at N02-S03 and N02-S07, because it only chooses what the
keys play and what the screen is showing. It appears in none of Roland's lists of ways
unsaved work is lost.

N02-S05 is the step that makes this explicit to the learner rather than only to the
author: it names the two buttons to avoid and explains why. Its `recoveryHelp` handles
the case where the learner has already pressed one, and does so accurately — nothing
has been written to storage, but the change sits in the loaded program until a program
change discards it.

N02 assumes nothing about which program is loaded, which tones the parts hold, which
part was selected on entry, which SYSTEM group opens first, or which bank is in view.
N02-S10's `recoveryHelp` is careful on the last point: it offers `[Shift]` + Value to
look at another bank **with** the discard warning attached, and notes that the tutorial
itself has changed nothing.

## The SYSTEM contrast is the teaching point

N01 established that SYSTEM writes itself as you leave. N02 establishes that Program
Edit does not. Both are Roland's statements, and the pair is more useful than either
alone: it is the beginning of an answer to "which screens are safe to explore?" —
which is the question a beginner actually has when facing a menu.

That is why N02-S05 spends a step on it rather than a clause.

## Deliberate omissions

- **No parameter is named in learner-facing copy** at N02-S08, and none is changed. The
  MAIN group's parameters are `N06`'s subject, where the learner has several parts
  playing and a reason to balance them.
- **PITCH and OFFSET groups** (PG pp.10–11) are not mentioned. Program Edit has more
  groups than COMMON and MAIN, but two are enough to teach the group idea, and the
  others belong to `I07`.
- **Extra Banks S–Z** (v1.10) are omitted from the bank explanation. They exist only
  after a firmware update *and* an import, so including them in "where your programs go"
  would be wrong for most instruments.
- **Part Output and the send levels** are described only as "how it is routed to the
  effects". The routing detail is `I06`/`I07` material.
