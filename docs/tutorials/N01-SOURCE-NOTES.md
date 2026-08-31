# N01 — Learn the menu controls — source notes

Source reconciliation record for the first Novice tutorial, and the first one that
navigates the JD-Xi's real menus and states what the display should show. Content
lives in `js/tutorials.js` (`window.JDXI_TUTORIALS.N01`); this file records where every
learner-facing factual statement comes from, per the content-authority rule
(`TUTORIAL-ARCHITECTURE.md` §13, `ROLAND-SOURCE-MAP.md` §2).

| Field | Value |
|---|---|
| Tutorial | **N01 — Learn the menu controls** (novice, order 1, 15 steps, ~10 min) |
| Short title | Menu controls |
| Prerequisites | `["B02"]` — advisory, not a gate (`TUTORIAL-ARCHITECTURE.md` §6) |
| Kind | **Operating procedure.** Menu navigation, display states, Cursor / Enter / Exit, Shift, Program Value vs Tone, recovery. |
| Revision | v2, Phase 5C.1 — *Make N01 safe for direct entry*. See the correction record below. |
| Authored | 2026-08-30 |
| Persistent change to the instrument | **None.** No step selects a program or a tone, and no Value button is pressed anywhere. See *The no-change contract* below. |

Learning goals as authored:

1. Recognize the top screen and get back to it from anywhere.
2. Open the Menu, move through it, and open an item with Enter.
3. Tell the Program Value buttons and the Tone buttons apart.
4. Use Shift safely, and know which combinations to leave alone for now.

## Phase 5C.1 correction record

The first published version of N01 (`55346b7`, 18 steps) ended its Program-versus-Tone
section with three operating steps: press Program Value +, press Program Value − to
return, press Tone +. PM review rejected them, and the rejection is correct:

- **A canonical tutorial is directly enterable.** `TUTORIAL-ARCHITECTURE.md` §6 makes
  prerequisites advisory, so a learner can open N01 at any moment — including part-way
  through editing a sound they have not saved. Selecting another program or tone
  discards that work (OM p.6, OM p.9). The steps were safe only for a learner who had
  arrived through B02 with nothing in progress.
- **The old S14 said so out loud.** Its *why* read "You have changed nothing yet, so
  there is nothing to lose here" — a statement the tutorial had no way to know was
  true.
- **The Tone press was never undone in the normal path.** Only `recoveryHelp` offered
  Tone −, so a learner who followed the happy path finished on a different tone. The
  tutorial's own promise to leave the JD-Xi exactly as it was found did not hold.

The three steps were deleted rather than replaced. Nothing took their place, because
S13 already teaches the distinction the section exists for, and it teaches it by sight.
The surviving steps were renumbered (old S17 → **S14**, old S18 → **S15**) and N01 is
15 steps. Two over-broad recovery claims went with them, and two open hardware
questions were converted from assumptions into tolerated variation. The corrected
tutorial is a strict subset of what the owner ran on hardware: the Menu / Cursor /
Enter / Exit / SYSTEM / [Shift]+Cursor spine is byte-for-byte the sequence that passed.

`ROLAND-SOURCE-MAP.md` §9 calls N01 "the heaviest reconciliation" in the catalogue.
That is because the controls it teaches are described in one place, their *universal*
behaviour in a second, their *context-specific* behaviour in a third, and two whole
classes of behaviour only in supplements that neither shortcut list knows about. All
four layers are reconciled below.

## Sources consulted

| Source | Where it is used |
|---|---|
| Roland JD-Xi Owner's Manual, English edition `eng07` — <https://static.roland.com/assets/media/pdf/JD-Xi_eng07_W.pdf> (retrieved 2026-08-30; PDF page numbers = printed page numbers) | **p.2** item 2 Display, item 3 Operation (Cursor, Program (Pattern) Value, [Menu/Write], [Exit], [Enter], [Shift]); **p.5** Top screen and its four fields, Choosing a Program, the held-[Shift] program name, the missing tone number on an edited sound; **p.6** long-press [Menu/Write] → PORTAMENTO, and *Saving* (an edited sound is lost when you select another program or power off); **p.9** *Editing Program and Effect Settings* and *Saving a Sound (Program) (WRITE)* with its overwrite warning; **p.10** *Erasing an Entire Pattern* ([Shift] + [Erase]; Value chooses the part, [Enter] executes); **p.13** *Making System Settings (SYSTEM)*, [Shift] + Cursor group movement, automatic save on leaving the screen, the SYSTEM parameter table and its `Mic Sel` caution; **p.14** *Accessing the Menu Screens* and the Editable-items list; **p.15** the `Mic Sel` = Attached 5 V warning in full; **p.16** the Shortcut List |
| JD-Xi Parameter Guide, `e01` — <https://static.roland.com/assets/media/pdf/JD-Xi_ParameterGuide_e01_W.pdf> | **p.2** the Shortcut List (identical wording to OM p.16, used as the corroborating source); **p.5** Error Messages — `Now Playing!` and `Now Recording!` |
| JD-Xi Version 1.10 Supplementary Manual — <https://static.roland.com/assets/media/pdf/JD-Xi_v110_e01_W.pdf> | p.1 *Checking the Version* — the `VERSION INFO` screen |
| JD-Xi Version 1.50 Supplementary Manual — <https://static.roland.com/assets/media/pdf/JD-Xi_Leaflet_V150_e01_W.pdf> | p.1 *Checking the Version* — Cursor ► repeatedly to `Version Info`, then [Enter]; p.2 **Interactive Chord**, whose `Chord Edit` item the Owner's Manual's menu list predates; p.3 *Startup Program*, which restates the SYSTEM automatic save |
| `docs/ROLAND-SOURCE-MAP.md` | §4.7 the glyph-extraction table; §4.8 the owner's installed version **1.51**; §6.1 verified universal menu behaviour; §6.2 the context-specific table this tutorial is built around; §6.3 display behaviour; §7 procedure-matrix rows 11–17 and 46; §8.1–§8.3 destructive operations; §9 the N01 row; §11.2 shortcuts absent from both shortcut lists; §11.3 the stale menu list; Q4 (display grid unresolved) |
| `docs/HARDWARE-TARGETS.md` + `js/hardware-targets.js` | canonical target IDs, labels, panel legends and geometry. **Not modified by this phase** |
| `assets/images/JD-Xi.jpg` | layout observation only — where things are, never what they do |

Not consulted, by rule: any third-party tutorial, video, forum or wiki.

The MIDI Implementation was not needed. `ROLAND-SOURCE-MAP.md` §9 already records that
no tutorial in the canonical set requires it.

## The no-change contract

N01 is the tutorial most able to leave a beginner's instrument altered, so its scope is
drawn to make that impossible. **Every one of its fifteen steps is navigation or
looking. Not one selects a program or a tone, and no Value button is pressed
anywhere.**

| What the learner does | Steps | Why nothing changes |
|---|---|---|
| Moves between screens | S01, S04, S06, S07, S09, S12, S15 | [Menu/Write] opens the Menu, [Enter] opens the selected item, [Exit] returns to the previous screen (OM p.2 item 3, OM p.14). None of them writes. The one item N01 opens with [Enter] outside SYSTEM is VERSION INFO, which contains nothing to change |
| Moves the selection | S05, S08, S10, S11 | Cursor moves the cursor and nothing else (OM p.2 item 3); [Shift] + Cursor moves between menu groups (OM p.13 step 3). Both are pure navigation |
| Holds a modifier and looks | S03 | Held [Shift] shows the program name on the upper line and nothing more (OM p.5) |
| Reads the display, or finds a control | S02, S13, S14 | No press at all |

Two decisions carry that contract, and both are load-bearing.

**The Value buttons are never pressed inside a menu screen.** Roland states plainly
that SYSTEM parameters "are saved when you exit the system setting screen" (OM p.13
step 5; restated at v1.50 p.3), so a demonstration press inside SYSTEM would be written
to the instrument by the very act of leaving. S09's `detail` instructs the learner not
to press Value at all, and S09's `whyItMatters` explains the asymmetry that makes
SYSTEM special. S10 teaches what Value *would* do without pressing it.

**The Value buttons are never pressed outside a menu screen either** — which is the
Phase 5C.1 correction. On the top screen, Program (Pattern) Value selects a program and
Tone selects a tone (OM p.5). Neither writes anything, so the first version treated
them as safe practice. They are not, because **a canonical tutorial is directly
enterable** (`TUTORIAL-ARCHITECTURE.md` §6): the learner may be part-way through an
unsaved edit, and Roland is explicit that such an edit "will change if you move the
knobs or if you select a different tone or program" (OM p.9; OM p.6). A tutorial that
cannot know the instrument's state must not perform an action whose safety depends on
it. S13 therefore teaches the two pairs apart by sight and tells the learner, in the
`detail` itself, not to press either one.

That is also why **VERSION INFO is the item N01 opens first**. It is the only Menu
entry in OM p.14's list that contains nothing to change: Roland describes it as "View
the version of the JD-Xi system program", and both supplements use it purely as a
read-out (v1.10 p.1; v1.50 p.1). It gives a beginner a real, useful result from a first
[Enter] press with no way to alter anything.

## Per-step reconciliation

Every learner-facing factual claim, with its source. "Visual" = an observation from the
repository's own hardware image, not a Roland claim.

| Step | Targets | Mode | Learner-facing factual claims | Support |
|---|---|---|---|---|
| **N01-S01** Get back to the top screen | `exitButton`, `display` | `display-focus` | Press Exit several times. Exit steps back one screen each time. *Why:* Roland's own instruction for returning to the top screen from any menu is to press Exit several times. *Recovery:* Exit moves back one screen at a time, and in some screens also cancels what was in progress. | OM p.2 item 3: "[Exit] button — Returns you to the previous screen. In some screens, this cancels the operation currently being executed." OM p.14 step 4 and OM p.13 step 5: "Press the [Exit] button several times to return to the top screen." "Top screen" is Roland's own name (OM p.5). The recovery deliberately does **not** claim Exit never saves — that would be false for SYSTEM (OM p.13) |
| **N01-S02** What the top screen tells you | `display` | `display-focus` | The upper line carries program bank and number, measure–beat and tempo; the lower line carries tone number and tone name. *Recovery:* a sound that has been edited shows no tone number, and that missing number is Roland's signal that the sound has changed. | OM p.5 *Choosing a Sound (Program)*, whose labelled illustration names exactly those five fields, and its note: "Sounds that don't show a tone number are sounds that have been edited for an individual program" |
| **N01-S03** Hold Shift and watch the display | `shiftButton`, `display` | `full-plus-inset` | While Shift is held the upper line shows the program name; letting go restores it. *Why:* Shift is a modifier — it changes what another button does while held. | OM p.5 marginal note: "While you hold down the [Shift] button, the upper line shows the program name." OM p.16 / PG p.2: "[Shift] — Shows the program name in the top line of the display." OM p.2 item 3: "[Shift] button — Use this button in conjunction with other buttons or knobs to access edit screens for each function." That the effect ends when the button is released is the plain reading of "while you hold down" |
| **N01-S04** Open the Menu | `menuWriteButton`, `display` | `full-plus-inset` | A short press opens the Menu. *Recovery:* a long press opens the PORTAMENTO screen instead; press Exit once to leave it. *Visual:* Menu/Write is the leftmost button of the lower row of four. | OM p.2 item 3: "[Menu/Write] button — Accesses the Menu screen." OM p.14 step 1. OM p.6 *Shortcut to the Portamento Setting Screen*: "Long-press the [Menu/Write] button. The PORTAMENTO screen appears… Press the [Exit] button to exit this screen." OM p.16 lists the long press as a separate shortcut. The button's position in the lower row is **visual**, read from `assets/images/JD-Xi.jpg` and consistent with the registry geometry |
| **N01-S05** Move along the Menu | `cursorRightButton`, `display` | `full-plus-inset` | Press Cursor ► several times until VERSION INFO. The items are SYSTEM, Program Edit, Tone Edit, Effects Edit, Vocoder Edit, AutoPitch Edit, Arpeggio Edit, Pattern Length, Scale Setting, UTILITY and VERSION INFO; Cursor ◄ moves back; a JD-Xi at 1.50 or later also has Chord Edit. *Why:* Cursor only moves the selection. | OM p.14 step 2 and its *Editable items* list, reproduced in Roland's own order and wording. OM p.2 item 3: "Cursor [◄] [►] buttons — Move the cursor left/right." v1.50 p.1 step 2: "Press the cursor [►] button several times to select 'Version Info'" — Roland's own single step, which is why S05 combines the repeated presses. Chord Edit: v1.50 p.2, and `ROLAND-SOURCE-MAP.md` §11.3, which requires N01 to account for it |
| **N01-S06** Open an item with Enter | `enterButton`, `display` | `display-focus` | Enter opens the selected item. VERSION INFO only shows information. The lower line reads Version followed by your instrument's system version. | OM p.2 item 3: "[Enter] button — Press this to confirm a value or execute an operation." OM p.14 step 2. OM p.14 *Editable items*: "VERSION INFO — View the version of the JD-Xi system program." Screen text from v1.10 p.1 / v1.50 p.1. See *Display strings* below for the version number |
| **N01-S07** Exit goes back one screen | `exitButton`, `display` | `full-plus-inset` | One press returns to the Menu list, not out of the Menu. *Why:* Exit is one step backwards, which is why reaching the top screen takes several presses. | OM p.2 item 3 ("Returns you to the previous screen") read together with OM p.14 step 4 ("several times to return to the top screen"). The two sentences are the whole claim; nothing is added |
| **N01-S08** Select SYSTEM | `cursorLeftButton`, `display` | `full-plus-inset` | Press Cursor ◄ until SYSTEM. SYSTEM is the first item in the list. *Why:* SYSTEM holds settings that affect the whole instrument: display contrast, keyboard feel, tuning, the click, the microphone input, and the MIDI settings. | OM p.14 *Editable items* lists SYSTEM first, and describes it as "Make settings that affect the operating environment of the entire JD-Xi." OM p.13 step 2 is the same selection. The five areas named are Roland's own SYSTEM menu groups (OM p.13: GENERAL, KEY TOUCH, SOUND, CLICK, INPUT, MIDI), summarised in plain words. **Moving left is chosen deliberately**: the first item is reachable by going left whether or not the list wraps, and Roland states nothing about wrapping |
| **N01-S09** Open SYSTEM, and look before you press | `enterButton`, `display` | `display-focus` | Do not press the Value buttons. Anything changed in SYSTEM is saved automatically when you leave the screen. Whichever group and parameter the JD-Xi shows, the screen has the same two-line shape. *Why:* an edited sound is discarded unless you deliberately save it; SYSTEM is different and saves itself as you leave. *Recovery:* SYSTEM has no undo; `Mic Sel` set to Attached sends power to the MIC jack and Roland warns it can damage a microphone that did not come with the JD-Xi. | OM p.13 step 5: "The parameters you edit are saved when you exit the system setting screen", restated at v1.50 p.3. The contrast is OM p.6 and OM p.9: "A sound that you create will change if you move the knobs or if you select a different tone or program. It will also be lost if you power-off." OM p.15: "If this is set to 'Attached,' 5V of power is supplied from the MIC jack. If you use a commercially available microphone with the 'Attached' setting, the microphone may be damaged." That the JD-Xi has no undo is a **negative finding**, recorded at `ROLAND-SOURCE-MAP.md` Q10 after a full-corpus search |
| **N01-S10** Cursor picks the parameter | `cursorRightButton`, `display` | `full-plus-inset` | Cursor moves along the parameters of the group; Value would change the one you are looking at. *Why:* this pattern is the same in every edit screen. | OM p.13 step 4 and OM p.14 step 3, which are the same sentence for SYSTEM and for the Menu generally; OM p.9 repeats it for Program / Tone / Effects Edit; OM p.6 repeats it for Arpeggio Edit. PG pp.10–29 carry it as the column headers of every parameter table. **Value is described, not pressed** |
| **N01-S11** Shift and Cursor jump between groups | `shiftButton`, `cursorRightButton` | `full-plus-inset` | Shift with Cursor moves between the six groups GENERAL, KEY TOUCH, SOUND, CLICK, INPUT and MIDI. *Recovery:* if the group name does not change, you may already be at the last group — hold Shift and press Cursor ◄ instead. *Why:* Roland documents this for setting screens such as system or edit; while entering a name the same combination deletes a character instead. | OM p.13 step 3: "Hold down the [Shift] button and use the Cursor [◄] [►] buttons to select the menu item that you want to edit", with the group names taken from the `Menu` column of the OM p.13 table. OM p.16 / PG p.2: "[Shift] + CURSOR — In setting screens such as system or edit, moves between major menu items", and, separately, "When entering a name — [Shift] + [◄] Deletes the character at the cursor position." The universal/context split is `ROLAND-SOURCE-MAP.md` §6.2, which exists for this step |
| **N01-S12** Leave the Menu | `exitButton`, `display` | `full-plus-inset` | A few presses. Leaving SYSTEM saves its system settings. | OM p.13 step 5, both halves of the same instruction |
| **N01-S13** Two pairs that are not the same | `programValueButtons`, `toneButtons` | `full` | One pair has Value printed between − and +, with Program (Pattern) above it; the other has Tone printed between its − and +, to the right of the four Part Select buttons. **Find them, but do not press either one.** *Why:* Program Value chooses the whole setup; Tone changes the sound inside it, and either press would throw away an unsaved sound. | Naming and function: OM p.2 item 3 "Program (Pattern) Value [-] [+] buttons — Select a program"; OM p.5 *Choosing a Tone* "Tone [-] [+] buttons — Select a tone." Panel legends and relative position are **visual**, read from `assets/images/JD-Xi.jpg` and matching the registry's `panelLegend` fields (`Program (Pattern) − Value +`, `− Tone +`). `ROLAND-SOURCE-MAP.md` §5.1 records this as the likeliest beginner mix-up on the panel. The instruction not to press is the direct-entry rule: OM p.9 "A sound that you create will change if you move the knobs or if you select a different tone or program", read against `TUTORIAL-ARCHITECTURE.md` §6 |
| **N01-S14** Two combinations to leave alone for now | `shiftButton`, `menuWriteButton`, `eraseButton` | `full-plus-inset` | Shift with Menu/Write opens the WRITE screen, which can overwrite a program that is already stored. Shift with Erase opens the Pattern Erase screen. *Recovery:* neither screen does anything until you press Enter, so Exit leaves them alone. | OM p.9 *Saving a Sound (Program) (WRITE)*: "Hold down the [Shift] button and press the [Menu/Write] button", and its warning "If you specify a number in which data is already saved… Saving to this number will overwrite the program, erasing the previous data"; step 6 "If you decide to cancel, press the [Exit] button." OM p.10 *Erasing an Entire Pattern*: "[Shift] + [Erase]… Use the Value [-] [+] buttons to select the part… and then press the [Enter] button" — the erase happens on [Enter], which is what makes the Exit recovery correct. Both also appear in OM p.16 / PG p.2 |
| **N01-S15** When you are lost | `exitButton`, `display` | `display-focus` | Repeated Exit presses walk you back to the top screen; reach for it first, every time. *Why:* Exit backs you out of a menu. Two things it does not cover — SYSTEM saves what you changed as you leave, and repairing an edited sound has rules of its own that a later tutorial teaches. The JD-Xi has no general undo, and this tutorial does not promise one. *Recovery:* `Now Playing!` and `Now Recording!` mean the JD-Xi is refusing an operation until you stop with the ▶/■ button. | OM p.14 step 4 / OM p.13 step 5. The SYSTEM exception is OM p.13 step 5. The absence of a general undo is `ROLAND-SOURCE-MAP.md` Q10, a negative finding from a full-corpus search. **Deliberately narrowed in Phase 5C.1:** the first version also offered [Shift] + [Enter] (OM p.5) and "select another program and come back" (OM p.6, p.9) as general recovery moves. Both are real but conditional, and set beside Exit they read as a general undo the instrument does not have; the second is also itself a program change, which N01 no longer asks for. The broader recovery pattern belongs to N10 (§7 row 53). PG p.5: "Now Playing! — Since the JD-Xi is playing, this operation cannot be executed. Stop playback before you execute the operation", and the same for `Now Recording!`. That the transport button stops playback is OM p.10 |

## Display strings — the first canonical use of `expectedDisplay`

`ROLAND-SOURCE-MAP.md` **Q4 is still open**: Roland never states the display's character
dimensions, and B02 therefore authored no `expectedDisplay` at all. N01 cannot do the
same — a menu lesson without display states fails architecture invariant 6.

The rule adopted here, and proposed as the house rule for every later tutorial:

> **A step may show a display state only by reproducing a screen Roland illustrates,
> verbatim. It may never compose one.**

Q4 is untouched by that rule, because reproducing an illustration asserts nothing about
the grid. Every N01 screen and its provenance:

| Steps | `expectedDisplay` | Roland's illustration | What varies, and how the learner is told |
|---|---|---|---|
| S01, S02, S12, S15 | `A64   1-1    120` / `256:Synth Lead01` | OM p.5, the labelled *Top screen* figure, reproduced as the document renders it, spacing included | `displayNote`: "Roland's own example of the top screen. Your JD-Xi shows its own program, tempo and tone name." The checkpoints ask only for the *shape* of the screen, never for these values |
| S06 | `VERSION INFO` / `  Version 1.51` | v1.50 p.1, which renders `VERSION INFO` over `  Version 1.10`; v1.10 p.1 renders the same screen as `VERSION INFO` over ` Version 1.02` | The version number is the only field changed from Roland's copy. `displayNote`: "Roland's own screen. The number is whatever system version your own JD-Xi is running; 1.51 is shown here as an example." 1.51 is the owner-observed installed version (`ROLAND-SOURCE-MAP.md` §4.8) — hardware evidence, not a document claim, and labelled as an example rather than an expectation |
| S09 | `GENERAL` / `LCD Contrast 10` | OM p.13, the figure printed immediately after step 2 | `displayNote`: "Roland's own example. The upper line is the group you are in; the lower line is one parameter and its value. Your contrast number may differ." The checkpoint asks only that the upper line shows a group name and the lower line a parameter with a value |

Roland's own caveat is the reason each of these carries a note: OM p.2 item 2 states
that "your unit may incorporate a newer, enhanced version of the system… so what you
actually see in the display may not always match what appears in the manual."

**Spacing inside a line is reproduced, not asserted.** Each string is the document's own
rendering, extracted and carried across unchanged, and the renderer preserves it
(`white-space: pre`) rather than collapsing it. That is a faithful reproduction, not a
claim about which column a character occupies — and Roland's two supplements do not
even agree with each other on the point: the version screen is indented by two spaces
in v1.50 p.1 and by one in v1.10 p.1. Column positions remain unknown for the same
reason the grid does (Q4).

Three consequences were accepted deliberately:

- **No screen is shown for a state Roland does not illustrate.** The Menu list itself,
  the held-[Shift] program name (S03), the selected-but-unopened item (S05, S08) and
  the second SYSTEM parameter (S10) are all confirmed by prose `checkpoint` instead.
  Nine of the fifteen steps therefore carry neither `expectedDisplay` nor
  `expectedSound`; each states its confirmation in the checkpoint, which is what
  `TUTORIAL-ARCHITECTURE.md` §7 asks such a step to be examined for. **No N01 step
  carries `expectedSound` at all** since the Phase 5C.1 correction: the only two that
  did were the deleted Program and Tone presses, and a tutorial that changes no sound
  has nothing to listen for.
- **The `syntheticDisplay: false` + `displayNote` pair is mandatory together**, and the
  data QA enforces it: a real screen must say where it came from.
- **The 16-character bound is a guard, not a claim.** Every Roland illustration in the
  corpus fits two lines of sixteen; the data QA rejects a longer `expectedDisplay` line
  so that no future author can quietly invent a screen the hardware could not show.
  It does not assert that the grid *is* 16 × 2, and Q4 stays open.

## Version-dependent content — discharging §11.3

`ROLAND-SOURCE-MAP.md` §11.3 records that the Owner's Manual menu list (OM p.14) is
stale: Version 1.50 adds a `Chord Edit` item (v1.50 p.2) that the manual does not list,
and states that "N01… cannot be written correctly without knowing which case applies."

N01 handles it without a version precondition and without assuming the reader's
instrument matches the owner's:

- S05 lists Roland's eleven documented items, then adds one sentence: "If your JD-Xi
  has been updated to system version 1.50 or later, there is a Chord Edit item as
  well."
- S06 has the learner read their own version off the instrument, and its `nextHint`
  closes the loop: "If your number is 1.50 or higher, your Menu also has the Chord Edit
  item."

The tutorial is therefore correct on a baseline instrument and on a 1.50+ one, and the
learner establishes which they have as part of the lesson rather than being told.
Nothing else in N01 is firmware-gated: every control it teaches is in the baseline
Owner's Manual.

`ROLAND-SOURCE-MAP.md` §11.2 records that Version 1.50 also introduced **[Enter] as a
held modifier**, a role the Owner's Manual gives only to [Shift] — so "Shift is the
modifier button" is accurate for a baseline instrument and incomplete for a 1.50+ one.
N01 never says that. S03 says Shift "is a modifier", not *the* modifier, and S11's
`whyItMatters` makes the general point that what a combination does depends on the
screen you are in. No [Enter]-held combination is taught, so no incorrect
generalisation is available to contradict later.

## Deliberate omissions

- **No program and no tone is selected, anywhere.** The single biggest omission, and
  the Phase 5C.1 correction. Covered above under *The no-change contract*.
- **The Value buttons are never pressed inside a menu screen.** Covered above.
- **No SYSTEM parameter is changed, and none is taught.** S09 and S10 name what the
  groups contain, because a learner needs to know what SYSTEM is *for* before deciding
  not to touch it. `Local Switch` — Roland's documented cause of "no sound" (OM p.17),
  and the omission B02 recorded — is still not acted on here; it belongs to
  N10 *Getting unstuck* (`ROLAND-SOURCE-MAP.md` §7 row 53, §9).
- **WRITE is named, never performed.** S14 states what [Shift] + [Menu/Write] opens and
  what it can overwrite, and stops. The full sequence is N09's.
- **Nothing destructive is performed.** Pattern Erase, Pattern Copy, Factory Reset,
  Backup and Restore are all reachable from the controls this tutorial teaches; none is
  demonstrated. Only Pattern Erase is named, and only as something to avoid.
- **The boxed-legend hypothesis is still not taught.** `Write` and `Shift` are visibly
  boxed in S04's and S14's insets. `ROLAND-SOURCE-MAP.md` **Q3** remains open — Roland
  states no such convention and `Rest` under `Erase` looks like a counterexample — so
  no step tells the learner that a box means a Shift function.
- **No favourite, bank-switch, measure-switch or name-entry combination is taught.**
  Each is real (OM p.16) and each is context-specific; teaching them here would be
  exactly the "context-specific shortcut taught as universal" failure that
  `ROLAND-SOURCE-MAP.md` §6 separates its two tables to prevent.
- **Transpose is not taught**, although [Shift] + OCTAVE is a Shift combination on the
  owner's 1.51 instrument (v1.50 p.2). It is B05's material and is firmware-gated.
- **No key is played, and no sound is made.** N01 is silent from end to end. The two
  steps that asked the learner to press a key — to hear the program and the tone
  change — went with the presses that made them meaningful.
- **No note names, no music theory, no memorisation request.**

## Visual-mode choices

| Steps | Mode | Reason |
|---|---|---|
| S01, S02, S06, S09, S15 | `display-focus` | The steps whose whole point is a display state, plus S02 which is nothing but reading the display. Each shows the documented screen beside a magnified view of where to look on the instrument |
| S03–S05, S07, S08, S10–S12, S14 | `full-plus-inset` | Every button in the Operation cluster is small at full-instrument scale and four of them sit in one row. All of them share the display's canonical zoom, so the inset frames the display and the whole cluster together — the learner sees the button they are pressing and the screen it changes in one crop. **S12 additionally carries `expectedDisplay`**, which this mode renders as an *On the display* card rather than a preview |
| S13 | `full` | The only step whose subject is *relative position across the panel*: the two −/+ pairs are far apart with the Part Select column between them, and a crop of either one would destroy the comparison. The same choice as B01-S04, which pairs the Category dial with the Tone buttons |

`control-closeup` is not used. No N01 step needs a crop to dominate the frame; the
cluster inset at `full-plus-inset` is already legible, and losing the full instrument
would cost the learner their orientation in a tutorial that moves around the panel.

## Steps with more than two hardware targets

`TUTORIAL-ARCHITECTURE.md` §7 calls more than two targets "a signal the step is doing
too much". One N01 step has three, by record:

**N01-S14** highlights `shiftButton`, `menuWriteButton` and `eraseButton`. It is a
single *recognise-and-avoid* action, not three sequential hardware actions — the same
shape as B01-S05, which highlights four sections as one orientation action. Shift and
Menu/Write fall inside the shared cluster zoom and are magnified in the inset; Erase
lies outside it and is highlighted on the full instrument only, which is the containment
rule working as intended rather than an omission.

## Renderer work this tutorial required

Four changes, none tutorial-specific and none hardcoding an ID. All are recorded in
`docs/LESSON-RENDERER.md`.

1. **`expectedDisplay` no longer disappears outside `display-focus`.** It was rendered
   only by the display preview, so any other visual mode dropped the field silently. It
   now also renders as an **On the display** card in the instruction column, suppressed
   in `display-focus` where the preview already shows it. Mode-driven, never
   tutorial-driven. N01-S12 is the first step to use it.
2. **Documented spacing in a display string is preserved.** `.disp-line` had no
   `white-space` rule, so HTML collapsed runs of spaces — Roland's top screen would have
   rendered as `A64 1-1 120`. Both display surfaces now set `white-space: pre`. The
   existing fixture strings contain no repeated spaces and are unaffected.
3. **`displayNote` — provenance under a real screen.** A step showing a documented
   screen states where it came from and what varies. The renderer only places the text;
   it never composes a display state. Absent on the fixture, whose synthetic-placeholder
   badge is unchanged.
4. **`display-focus` crops now obey the containment rule.** The mode passed *every*
   measurable target to its crop, so a target outside the display's zoom produced a
   highlight positioned outside the frame and silently clipped. The containment filter
   the other modes already used is now shared by all of them (`containedIn`). No fixture
   step reaches the old path, so fixture rendering is unchanged.

One renderer wording change: the `display-focus` context caption reads **Where this
is** instead of *On the instrument*. Beside a preview of the screen the learner should
see, a photograph whose own display shows something else invites the reading "this is
what mine should look like". *Where this is* is already the caption `control-closeup`
uses for its context view, so this is a consistency fix as well as a clarity one. It is
the only intended pixel change to `#dev/lesson-renderer/step/4`.

**`js/hardware-targets.js` and both hardware images are byte-identical to `ed58c02`.**
N01 needed no new target and no re-measurement: every control it teaches was already
registered, and the Operation cluster's shared zoom already frames the display with all
eight buttons.

## Home-screen wiring

The Novice tile now carries `data-route="#tutorial/N01"` and the title *Start the
Novice path*, matching what the Beginner tile has done since B01. Only a `title`
attribute and a data attribute changed, so `#home` renders pixel-identically.

## Ambiguities and open items found while authoring

Two of these are open **hardware** questions. Phase 5C.1's ruling on both is the
same: N01 is made correct under either answer, and neither is treated as a blocker or
resolved by assumption. They stay recorded for an opportunistic hardware check.

1. **Roland does not say whether the Menu or the SYSTEM group list wraps.** Neither
   OM p.14, OM p.13 nor either supplement states what happens at the ends of a list.
   Three steps are written so the answer does not matter: S05 goes right to the last
   Menu item, S08 goes left to the first, and S11's `recoveryHelp` covers the learner
   already sitting on the last SYSTEM group — "you may already be at the last group.
   Keep holding Shift and press Cursor ◄ once instead" — without asserting either that
   the list wraps or that it does not. If a later tutorial needs to move between two
   items in the *middle* of a list, the wrap behaviour has to be observed first.
2. **Roland does not state whether SYSTEM remembers the group and parameter you last
   visited.** OM p.13's illustration shows `GENERAL` / `LCD Contrast 10` immediately
   after entering SYSTEM, but that is an example screen, not a claim that SYSTEM always
   opens there. N01 reproduces it under the display house rule and says so in three
   places: the `displayNote` reads "Roland's illustrated SYSTEM example. Your JD-Xi may
   open on a different SYSTEM group, or show a different value"; S09's `detail` adds
   that whichever group and parameter appear, the screen has the same two-line shape;
   and S09's `checkpoint` asks only for that shape — an upper-line group name and a
   lower-line parameter with a value. Nothing downstream depends on the answer, because
   S10 and S11 move *relative* to wherever the learner landed.
3. **`ROLAND-SOURCE-MAP.md` Q4 is still open and still binding.** The house rule above
   works around it; it does not resolve it. A future tutorial that needs a screen Roland
   never illustrates cannot be written until the real grid is known.
4. **Q3 (boxed panel legend = Shift function) is still open**, and N01 is the tutorial
   that would benefit most from resolving it: `Write` and `Shift` are both visibly boxed
   in the insets this lesson shows repeatedly, and one confirmed sentence would explain
   them. It is not taught.
5. **Part Select button illumination is still undocumented** (recorded by B02). N01 does
   not depend on it.
6. **Roland's own two supplements render the version screen differently.** v1.10 p.1
   shows `VERSION INFO` over ` Version 1.02`; v1.50 p.1 shows the same screen over
   `  Version 1.10`. One of the two indents is wrong, or neither is meaningful. It has
   no consequence for N01, which reproduces the newer document, but it is a small
   reminder that a printed screen is a typeset illustration and not a screenshot.
7. **`Illumination` in SYSTEM → GENERAL** — "Specifies whether the buttons illuminate
   when they are waiting for an operation" (OM p.13) — implies the JD-Xi lights buttons
   to guide a user through an operation. Roland documents the parameter but never which
   operations light which buttons. That could be a strong confirmation signal for menu
   lessons, and it is currently unusable. Worth a hardware observation.
