# B03 — Find sounds you like — source notes

Source reconciliation record for B03. Content lives in `js/tutorials.js`
(`window.JDXI_TUTORIALS.B03`); this file records where every learner-facing factual
statement comes from, per the content-authority rule (`TUTORIAL-ARCHITECTURE.md` §13,
`ROLAND-SOURCE-MAP.md` §2).

| Field | Value |
|---|---|
| Tutorial | **B03 — Find sounds you like** (beginner, order 3, 10 steps, ~8 min) |
| Short title | Find sounds |
| Prerequisites | `["B02"]` — advisory, not a gate (`TUTORIAL-ARCHITECTURE.md` §6) |
| Kind | **Operating procedure**, and the first Beginner tutorial that selects another Tone |
| Authored | 2026-08-30 |
| Reconciled | 2026-08-31, against `PRODUCT-CURRICULUM-MASTER-PLAN.md` §8 |

Learning goals as authored:

1. Change the sound the keys play, and go back again.
2. Use the Category dial to jump between different kinds of sound.
3. Compare several sounds and choose one by ear.

## Master-plan reconciliation (2026-08-31)

The master plan (§8) narrows B03 to **Tone browsing: the Category dial, Tone −/+, and
choosing by ear, comparing several Tones within one Part.** It explicitly defers *Program
browsing as a complete-setup concept*, *Program architecture*, and *saving*.

Four steps were removed because they taught ground B03 no longer owns. **None of the
material is lost** — each has a defined new home, and the removal is a scope correction,
not a deletion of teaching:

Steps are numbered by position, so removing four of them closed the numbering up. The
table below therefore names the removed steps by their **old position and title**, not by
id: old positions 9 and 10 are gone as *content*, but the ids `B03-S09` and `B03-S10` are
live again on the two replacement steps described further down. Only the last three ids
vanished outright.

| Removed | Old position | Was | Now owned by |
|---|---|---|---|
| Change the whole program | 9 | Program (Pattern) Value [-] [+] selects a whole program | **N02** — practical Program definition and Program switching |
| Move between banks | 10 | `[Shift]` + Value switches banks A–D / E–H | **N02** for switching among Programs; the bank *structure* is Quick Reference (*Understand Program vs Part*) |
| Find a free Favorite button | 11 | Favorite mode, the "Not Registered!" empty-slot signal | **N09** (optional registration) and **I09** (long-term use); recall is **N02** |
| Register the sound you liked | 12 | Hold Favorite + [01]–[16] to register | **N09** / **I09** |
| Back to the top screen (old form) | 13 | Turned Favorite mode off, then Exit | replaced in place by the new `B03-S10` |

<!-- removed-steps:begin -->

Ids that no longer exist in B03 at all: `B03-S11`, `B03-S12`, `B03-S13`.

<!-- removed-steps:end -->

Two steps replaced them:

- **`B03-S09` Compare two sounds** is new, and discharges the one master-plan requirement
  the old B03 never explicitly met: *comparing several Tones within a Part*. The old
  tutorial browsed forward continuously and never had the learner put two candidates side
  by side.
- **`B03-S10` Back to the top screen** replaces the old S13, which existed mainly to turn
  Favorite mode off — a mode B03 no longer enters. It now closes honestly on the fact that
  a selected tone is **not** a saved one, and names `N09`.

The step count falls 13 → 10 and the estimate 9 → 8 minutes.

**The preflight stays, and is not weakened.** Tone selection alone still discards an
unsaved edit (OM p.9), so `B03-S02` remains, immediately before the first Tone change at
`B03-S04`. Its wording no longer says "and different programs", and its target narrowed
from both −/+ pairs to `toneButtons`, because the Program pair is no longer pressed here.

## Sources consulted

| Source | Where it is used |
|---|---|
| Owner's Manual `eng07` — <https://static.roland.com/assets/media/pdf/JD-Xi_eng07_W.pdf> | **p.2** items 2 (Display), 4 (Part Select), 6 (Category dial / Tone); **p.5** *Choosing a Part to Play*, *Choosing a Tone*, *Top screen*; **p.6** losing unsaved work; **p.9** tone/program selection discards an edit; **p.14** step 4 (Exit to the top screen) |
| Parameter Guide `e01` — <https://static.roland.com/assets/media/pdf/JD-Xi_ParameterGuide_e01_W.pdf> | pp.44–47 Preset Tone List — used only to confirm that Roland's own tone list is organised by a Category column, never to name categories to the learner |
| `docs/ROLAND-SOURCE-MAP.md` | §7 rows 5 (selecting a Part), 10 (selecting/auditioning tones); §8.2 losing unsaved work; Q4 (display dimensions) |
| `docs/HARDWARE-TARGETS.md` + `js/hardware-targets.js` | canonical target IDs, labels and geometry |

The MIDI Implementation was not needed. No third-party source informed any procedure.

The **p.4 bank table** and the **p.5 Favorite** sections are no longer cited by B03,
because the steps that used them have moved. They remain correct, and are cited by the
tutorials that now own them.

## Per-step reconciliation

| Step | Targets | Mode | Learner-facing factual claims | Support |
|---|---|---|---|---|
| **B03-S01** Start from the top screen | `exitButton`, `display` | `display-focus` | Pressing Exit several times reaches the top screen. Upper line carries bank + program number, lower line the tone name. | OM p.14 step 4: "press the [Exit] button several times to return to the top screen." OM p.2: "[Exit] button — returns you to the previous screen." Display fields named at OM p.5, *Top screen*. Screen reproduced verbatim — see *Display provenance*. |
| **B03-S02** Protect any work you want to keep | `toneButtons` | `full` | Selecting another tone throws away an edited sound that has not been saved. There is no undo. Nothing warns you first. | OM p.9: "A sound that you create will change if you move the knobs or if you select a different tone or program." The tone half of that sentence is the whole basis for the preflight now that B03 selects no programs; OM p.6 states the same for programs and is no longer needed here. That the JD-Xi offers no general undo is recorded at `ROLAND-SOURCE-MAP.md` §7 row 34 and Q10 — the documented recovery set contains no undo. "Nothing warns you first" is the absence of any documented confirmation prompt for tone selection anywhere in OM p.5. |
| **B03-S03** Choose the part you will listen to | `digitalSynth1Button` | `full-plus-inset` | Pressing a Part Select button makes that part the one the keys play; the keys play one part at a time. | OM p.5 *Choosing a Part to Play*, and its MEMO: "You can't select and perform on multiple parts simultaneously." OM p.2 item 4. |
| **B03-S04** Step to the next tone | `tonePlusButton` | `full-plus-inset` | Tone + / Tone − step through the sounds available to the part, one at a time. The tone name on the lower line changes. | OM p.5 *Choosing a Tone*, Digital Synth 1/2 part, step 3: "Use the Tone [-] [+] buttons to select a tone." Tone number and name on the lower line: OM p.5 *Top screen*. The recovery's warning that the Value pair looks the same and sits close is **visual** (registry-measured positions) plus the naming reconciliation at `ROLAND-SOURCE-MAP.md` §5.1. |
| **B03-S05** Step back again | `toneMinusButton` | `full-plus-inset` | Tone − walks back to the previous sound. | Same source; the pair is documented as `[-] [+]`. "Nothing has been overwritten" is true because tone selection reads stored tones — no write operation is documented anywhere in OM p.5. |
| **B03-S06** Jump to a different kind of sound | `categoryDial` | `full-plus-inset` | The Category dial chooses the basic type of sound; the category whose indicator is lit is selected. Turning it alone changes no sound. | OM p.5: "Category dial (Category indicator) — Here's how to select the category that specifies the basic type of sound. The category whose indicator is lit is selected." That the dial alone does not change the sound follows from Roland's own three-step order (select part → turn dial → **then** use Tone [-] [+]). |
| **B03-S07** Audition inside the category | `tonePlusButton` | `full-plus-inset` | Stepping Tone + inside a category gives a run of related sounds. | OM p.5 step 3 following step 2; PG pp.44–47 show the preset list grouped by Category, which is what makes "related" accurate rather than a guess. "Some sounds start quietly and grow" is the envelope behaviour Roland describes at OM p.8 (attack time), phrased as listening advice. |
| **B03-S08** One category to know about | `categoryDial` | `full-plus-inset` | Vocoder/AutoPitch is a Category dial position; it can be used on only one part; the Analog Synth part becomes unavailable while one is selected. | OM p.7 *Vocoder/Auto Pitch* step 1: "Use the category dial to select 'Vocoder/AutoPitch.'" OM p.5, note under *Choosing a Tone*: "Vocoder/AutoPitch can be used for only one part. Also, the Analog Synth part becomes unavailable if you select Vocoder/AutoPitch." Both sentences are Roland's, compressed but not extended. **Recognition only** — the step says outright "You do not need to select it", and operating the Vocoder is Specialty content, outside the canonical thirty. |
| **B03-S09** Compare two sounds | `toneButtons` | `full-plus-inset` | Stepping Tone − then Tone + the same number of times returns to the same tone, so two sounds can be alternated. Nothing is changed or overwritten by doing so. | OM p.5 *Choosing a Tone* step 3 — the pair is documented as stepping selection `[-] [+]`, so equal presses in each direction land where they started. That comparing overwrites nothing is the same fact as at B03-S05: tone selection *reads* a stored tone, and no write operation appears anywhere in OM p.5. No claim is made about the tone list wrapping at its ends; the step only ever returns the way it came. |
| **B03-S10** Back to the top screen | `exitButton` | `full` | Exit reaches the top screen. A selected tone is not a saved one: a later program change replaces it, without asking. | OM p.14 step 4: "press the [Exit] button several times to return to the top screen." The not-saved warning is OM p.6 and p.9, the same pair of sentences the S02 preflight rests on, stated here as a closing fact rather than as a preflight — B03 performs no further discard after this point. `N09` is named as the place saving is taught. |

## Display provenance

One screen, used once (B03-S01), reproduced verbatim from Roland's illustration of the
top screen at OM p.5:

```
A64   1-1    120
256:Synth Lead01
```

`syntheticDisplay: false`; `displayNote` names the source and the varying fields
(program, tempo, tone name). This is the same screen N01 uses, from the same
illustration. Nothing is composed — the house rule under `ROLAND-SOURCE-MAP.md` Q4 is
that a step may reproduce a screen Roland illustrates and may never compose one, and
Q4 itself stays untouched.

## Direct-entry safety

B03 is the first Beginner tutorial to perform a discard-capable transition, and it
carries the protect-your-work preflight at **B03-S02**, immediately before the first
one (B03-S04 Tone +). The preflight meets each requirement of the pattern:

- it states what kind of work can be lost (an edited sound that has not been saved);
- it tells the learner not to go on if they have changes they want to keep;
- it names `N09` as the place to learn saving;
- it never claims the instrument's state is clean — the wording is explicit that the
  tutorial cannot tell what state the JD-Xi is in;
- it makes no discard silently: every later discard-capable step is downstream of it.

B03 assumes nothing about the loaded program, the selected tone, the selected part (it
selects one at B03-S03 rather than assuming), or the category the dial starts on.

## Destructive-risk handling

**After reconciliation B03 performs no destructive action at all.** The only risk it
carries is the discard covered by the S02 preflight, and every step downstream of S02 is
either a tone selection or a screen change.

This is a real reduction in the tutorial's risk surface, and it is worth naming why. The
removed Favorite steps were *safe as written* — they used Roland's own documented
"Not Registered!" empty-slot signal (OM p.5) rather than asserting a slot was free, which
is exactly what the no-nominated-safe-destination rule requires. They were removed for
scope, not for safety. **That technique is not lost**: it is the correct way to teach
Favorite registration, and it moves with the material to `N09` and `I09`, which now have
to honour it.

## Deliberate omissions

- **Category names are never listed.** Roland groups the preset tone list by a Category
  column (PG pp.44–47) but the Owner's Manual does not print the dial's positions as a
  list, and the panel legend is repository-image observation rather than a Roland
  statement. B03 teaches the dial by use — turn it, listen — which needs no list.
- **Programs, program banks and Favorites** are not taught here at all. This is the
  master-plan boundary rather than a source limitation — every one of these procedures is
  documented at OM pp.4–6 and was previously authored in B03. See *Master-plan
  reconciliation* for where each went.
- **Extra Banks S–Z** (v1.10) are not mentioned. They exist only after a firmware update
  *and* an import, so naming them to a beginner selecting preset sounds would be
  misleading on most instruments.
- **Favorite banks** (16 banks of 16, OM p.6) are not taught. Switching banks needs a
  long-press of Shift and adds a mode a beginner does not need. It belongs with `I09`.
- **The tone-number-missing signal** (OM p.5) is not taught here; it is introduced in
  `B06`, where the learner has actually edited something and the signal has meaning.
- **Operating the Vocoder** is not taught. B03-S08 is recognition only. Vocoder,
  AutoPitch and Auto Note are Specialty lessons, optional and outside the canonical thirty
  (master plan §21).
