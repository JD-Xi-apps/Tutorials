# N02 — Understand programs and parts — source notes

Source reconciliation record for N02. Content lives in `js/tutorials.js`
(`window.JDXI_TUTORIALS.N02`).

| Field | Value |
|---|---|
| Tutorial | **N02 — Understand programs and parts** (novice, order 2, 10 steps, ~10 min) |
| Short title | Programs and parts |
| Prerequisites | `["N01"]` — advisory, not a gate |
| Kind | **Operating procedure.** Selects Programs and recalls a Favorite; both discard unsaved work, so N02 carries a preflight. |
| Authored | 2026-08-31 |
| Reconciled | 2026-08-31, against `PRODUCT-CURRICULUM-MASTER-PLAN.md` §9 |

Learning goals as authored:

1. Say what a program contains and what a part contains.
2. Switch between programs and hear that everything changes together.
3. Tell the Program buttons apart from the Tone buttons, and know why it matters.
4. Recall a program instantly from a Favorite button.

## Master-plan reconciliation (2026-08-31)

The brief's verdict on the previous N02 was that it was **"too read-only and
Program-Edit-centered"**, and that was accurate: six of its ten steps were inside Program
Edit, and the tutorial changed nothing at all.

The master plan (§9) asks N02 for a *practical* mental model. Measured against its list, the
old tutorial was missing four of the things it names outright:

| Master-plan requirement | Before | Now |
|---|---|---|
| Program Value changes the complete Program | absent — it had been authored in B03 | `N02-S05` |
| Physically switch among several Programs and compare | absent | `N02-S06`, with `N02-S07` for banks |
| Explicit unsaved-work warning before Program changes | absent — N02 changed nothing, so it carried no preflight | `N02-S04` |
| Recall a JD-Xi hardware Favorite | absent | `N02-S10` |
| Program Edit is *optional, not the centre* | 6 of 10 steps | 2 steps: open and look, then leave |

Three of those four arrive from `B03`, which the master plan strips back to Tone browsing.
This is the other half of that move, and it is the reason the reconciliation is coherent
rather than merely subtractive: Program browsing, bank switching and Favorite recall were
not deleted from the course, they were relocated to the tutorial whose subject they actually
are.

**N02 changed safety class.** The old tutorial pressed no Value button anywhere and needed no
preflight, exactly like `N01`. The new one selects programs, which is the most destructive
ordinary action on this instrument, so `N02-S04` is now a full protect-your-work preflight
sitting immediately before the first program change. `DESIGN-RULES.md` §7a lists N02 among
the tutorials that deliberately carry none; **that list is now out of date and is corrected
in the same commit.**

What was dropped from Program Edit, and where it went:

No id vanished — N02 still has ten steps — but four of the old ones have no successor.
They are named here by old position, because every id was reused by the rewrite:

- **old positions 5 and 8**, the *look, do not change* Value warning and the walk along a
  part's parameters, are gone. The look-only instruction survives inside the new
  Program Edit step's `detail`.
- **old positions 6 and 7**, `[Shift]` + Cursor group movement and the D1/D2/DR/AN part
  indicator, are **deep Program Edit** by the master plan's reckoning. The group-movement
  gesture is already taught generically by `N01` inside SYSTEM, which is where it belongs;
  the part-indicator letters move to `I07`, which assembles four parts and is the first
  tutorial that genuinely needs to know which part a screen is editing.

The SYSTEM-versus-Program-Edit save contrast — the best idea in the old tutorial — is
**kept**, compressed into `N02-S09`'s `whyItMatters`.

## Sources consulted

| Source | Where it is used |
|---|---|
| Owner's Manual `eng07` | **p.4** *Getting Acquainted with the JD-Xi* — program, tone, part, effects, pattern; the bank table; **p.5** *Top screen*, *Choosing a Program*, *Choosing a Part to Play*, *Using Favorite Sounds (Selecting a Favorite)*; **p.6** losing unsaved work; **p.9** the Menu route to Program Edit, and that a tone/program change discards an edit; **p.13** SYSTEM auto-save (as the contrast); **p.14** the Menu item list and its order |
| Parameter Guide `e01` | **p.6** *How the JD-Xi Is Structured* and the bank table; **p.10** *Program Parameters* — the COMMON group and its illustrated screen |
| `docs/ROLAND-SOURCE-MAP.md` | §6.1 menu navigation; §7 rows 3 (selecting a Program), 4 (bank structure), 5 (part selection), 17 (menu navigation), 43 (Favorites); §8.2 losing unsaved work; §9 the N02 row |

The MIDI Implementation was not needed. No third-party source informed any procedure.

## Per-step reconciliation

| Step | Targets | Mode | Learner-facing factual claims | Support |
|---|---|---|---|---|
| **N02-S01** Which program you are on | `exitButton`, `display` | `display-focus` | Exit several times reaches the top screen; the letter is the bank and the number is the program. | OM p.14 step 4; OM p.5 *Top screen* callouts ("Program bank", "Program number"); OM p.4 bank table. Screen reproduced verbatim — see *Display provenance*. |
| **N02-S02** A program holds four parts | `partSelectGroup` | `full-plus-inset` | Every program has the same four parts, plus shared effects and a pattern; switching program swaps all of it. | OM p.4 / PG p.6: "A program consists of four parts…"; effects shared by the program (OM p.8, p.9); pattern saved in the program (OM p.12: "A pattern you create will disappear if you select a different program"). |
| **N02-S03** Each part holds one tone | `partSelectGroup`, `display` | `full-plus-inset` | The lower line shows the selected part's tone. Part Select selects no new sound and discards nothing. The keys play one part at a time. | OM p.4 *Tone*: "You can select one tone for each part." OM p.5 *Top screen* and *Choosing a Part to Play*, whose MEMO gives the one-at-a-time rule: "You can't select and perform on multiple parts simultaneously." That Part Select is non-destructive is the absence of any documented state change — it appears in none of Roland's lists of ways work is lost (OM p.6, p.9). |
| **N02-S04** Protect any work you want to keep | `programValueButtons` | `full` | Selecting another program throws away an edited sound, effect setting or pattern that has not been saved. There is no undo, and nothing warns you first. | OM p.6 *Saving*: "The sound you create will change if you move a knob or select a different program, and will be lost when you switch off the JD-Xi's power." OM p.9 states the same for tones. OM p.12 extends it to patterns: "A pattern you create will disappear if you select a different program or if you power-off the JD-Xi." No undo: `ROLAND-SOURCE-MAP.md` Q10. "Nothing warns you first" is the absence of any documented confirmation for program selection at OM p.5. |
| **N02-S05** Change the whole program | `programValuePlusButton` | `full-plus-inset` | The Value pair, marked Program (Pattern), selects a whole program: four parts, effects and pattern. The program number on the upper line changes. Value − steps back, and the stored program is unaltered. | OM p.5 *Choosing a Program* step 1: "Use the Program (Pattern) Value [-] [+] buttons to select a program." Composition of a program: OM p.4. "The stored program is unchanged — only anything you had edited and not saved is gone" is OM p.6/p.9 again: selection discards the edit buffer, it does not write to storage. |
| **N02-S06** Compare several programs | `programValueButtons`, `playStopButton` | `full-plus-inset` | Stepping through programs changes the sound of every part, the effects, and in most cases the pattern. Some programs have no pattern recorded. | The composition claim is OM p.4 as above. That a program may have no pattern is the plain consequence of OM p.12's pattern-per-program model plus OM p.10's recording procedures — a program's pattern is whatever was recorded into it, and Roland asserts no preset minimum. The step is worded as "in most cases" and the recovery says plainly that some programs simply have none, so no claim is made about which presets carry patterns. |
| **N02-S07** Move between banks | `shiftButton`, `programValuePlusButton` | `full-plus-inset` | `[Shift]` + Value switches banks. Preset banks A–D, user banks E–H, sixty-four programs each. | OM p.5: "To switch banks, hold down the [Shift] button and use the Value [-][+] buttons (preset banks A–D, user banks E–H)." OM p.4 bank table for the sixty-four. Extra Banks S–Z are deliberately not mentioned — see *Deliberate omissions*. |
| **N02-S08** A look inside Program Edit | `menuWriteButton`, `display` | `display-focus` | Menu/Write → Cursor → Program Edit → Enter; the screen shows PROG: COMMON with a program-wide setting; the tempo lives here. | OM p.9 *Editing Program and Effect Settings* steps 1–2; OM p.14 *Accessing the Menu Screens* and its item list, in which Program Edit follows SYSTEM. That the tempo is a program setting is OM p.6's MEMO ("The tempo is saved for each individual program"), and PG p.10 shows Tempo in the COMMON group. Screen from PG p.10 — see *Display provenance*. |
| **N02-S09** Leave without changing anything | `exitButton`, `display` | `full-plus-inset` | Exit returns to the top screen. Program Edit is **not** saved on exit, unlike SYSTEM. An accidental change is not written to storage but is part of what is loaded. | OM p.14 step 4 for Exit. The contrast is two Roland statements read together: system parameters "are saved when you exit the system setting screen" (OM p.13, restated v1.50 p.3), while a program must be written deliberately (OM p.9 WRITE) and an unsaved program edit is lost on program change or power-off (OM p.6, p.9). The recovery's discard warning is required by `DESIGN-RULES.md` §7a and is given in full. |
| **N02-S10** Recall a program from a Favorite button | `favoriteButton`, `stepButtons` | `full-plus-inset` | Pressing Favorite lights it and makes the numbered buttons recall registered programs; an unregistered slot reports "Not Registered!"; pressing Favorite again leaves the mode. | OM p.5 *Selecting a Favorite*: "Press the [Favorite] button to make it light. The number buttons become the Favorite select buttons… Press one of the [01]–[16] buttons to select a favorite sound. If you press a button in which nothing is registered, the screen indicates 'Not Registered!'" That recalling a favorite selects a program — and therefore discards — follows from Roland's own framing of favorites as program recall (OM p.5 heading: *Using Favorite Sounds (Programs)*); the step's recovery says so and refers back to the S04 preflight. |

## Display provenance

Two screens, both reproduced verbatim from Roland illustrations and neither composed.

`N02-S01`, the top screen, from OM p.5:

```
A64   1-1    120
256:Synth Lead01
```

`N02-S08`, the Program Edit COMMON screen, from PG p.10:

```
PROG: COMMON
Tempo 120
```

Both carry `syntheticDisplay: false` and a `displayNote` naming the source and the fields
that vary. The house rule under `ROLAND-SOURCE-MAP.md` Q4 is that a step may reproduce a
screen Roland illustrates and may never compose one; Q4 itself stays untouched.

**"Not Registered!" is deliberately not rendered as a display state.** Roland states the
string (OM p.5) but does not illustrate the two-line screen carrying it, so it appears only
as quoted prose inside `detail`. Putting it in `expectedDisplay` would mean composing the
rest of the screen.

## Direct-entry safety

**N02 now carries a protect-your-work preflight, at `N02-S04`.** It sits immediately before
the first discard-capable action, the program change at `N02-S05`, and it covers the two
later ones as well: the bank jump at `N02-S07` and the Favorite recall at `N02-S10`, both of
which are program selections by another route.

The preflight meets each requirement of the pattern: it names what can be lost (a sound, an
effect setting, a pattern — Roland's own three categories), it tells the learner to stop if
they have something to keep, it names `N09`, and it explicitly declines to assume the
instrument is clean.

N02 assumes nothing about which program is loaded, which bank is in view, which part was
selected on entry, whether any Favorite slot is occupied, or whether the loaded program has
a pattern at all.

## Destructive-risk handling

N02 selects programs but **registers nothing and saves nothing**, which keeps its risk to the
single discard the preflight covers.

The Favorite step is recall-only, and that boundary is deliberate. Registration overwrites
whatever occupies a numbered button, with no documented confirmation, and the master plan
places it in `N09` and `I09`. `N02-S10` therefore never asks the learner to hold Favorite
while pressing a number — the gesture that registers — and its recovery points at `N09` for
putting programs onto those buttons.

Where a slot turns out to be empty, the step treats Roland's "Not Registered!" response as
the ordinary and expected outcome rather than as a failure, so a learner with no favorites
registered still completes the step.

## Deliberate omissions

- **Deep Program Edit.** The COMMON/MAIN group split, the `[Shift]` + Cursor gesture inside
  it, the D1/D2/DR/AN part indicator and the per-part parameters (Level, Sound Mute, Pan,
  Part Output, send levels — PG p.10) are all correct and all documented. The master plan
  makes Program Edit optional here, so they are not taught. `I07` needs them.
- **Saving.** `N09` owns WRITE. N02 names it and stops there.
- **Favorite registration, deletion and banks** (OM p.5, p.6) are not performed. Recall only.
- **Extra Banks S–Z** (v1.10) are not mentioned. They exist only after a firmware update
  *and* an import, so naming them here would be misleading on most instruments.
- **The Pattern Copy route to reusing a tone** (OM p.10) is not mentioned, although it is the
  only way this instrument reuses a sound between programs. Pattern Copy is excluded from v1.
