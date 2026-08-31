# B03 — Find sounds you like — source notes

Source reconciliation record for B03. Content lives in `js/tutorials.js`
(`window.JDXI_TUTORIALS.B03`); this file records where every learner-facing factual
statement comes from, per the content-authority rule (`TUTORIAL-ARCHITECTURE.md` §13,
`ROLAND-SOURCE-MAP.md` §2).

| Field | Value |
|---|---|
| Tutorial | **B03 — Find sounds you like** (beginner, order 3, 13 steps, ~9 min) |
| Short title | Find sounds |
| Prerequisites | `["B02"]` — advisory, not a gate (`TUTORIAL-ARCHITECTURE.md` §6) |
| Kind | **Operating procedure**, and the first Beginner tutorial that selects another Program or Tone |
| Authored | 2026-08-30 |

Learning goals as authored:

1. Change the sound the keys play, and go back again.
2. Use the Category dial to jump between different kinds of sound.
3. Tell a whole program apart from the tone inside it.
4. Keep a sound you like so you can recall it later.

## Sources consulted

| Source | Where it is used |
|---|---|
| Owner's Manual `eng07` — <https://static.roland.com/assets/media/pdf/JD-Xi_eng07_W.pdf> | **p.2** items 2 (Display), 4 (Part Select), 6 (Category dial / Tone), 16 (Favorite and [01]–[16]); **p.4** program bank table (preset A–D, user E–H, 01–64); **p.5** *Choosing a Sound (Program)*, *Choosing a Part to Play*, *Choosing a Tone*, *Using Favorite Sounds*; **p.6** *Switching the Favorite Bank*; **p.7** *Vocoder/Auto Pitch* |
| Parameter Guide `e01` — <https://static.roland.com/assets/media/pdf/JD-Xi_ParameterGuide_e01_W.pdf> | pp.44–47 Preset Tone List — used only to confirm that Roland's own tone list is organised by a Category column, never to name categories to the learner |
| `docs/ROLAND-SOURCE-MAP.md` | §7 rows 3 (selecting a Program), 4 (bank structure), 5 (selecting a Part), 10 (selecting/auditioning tones), 43 (Favorites); §9 the B03 row; §8.2 losing unsaved work; Q4 (display dimensions) |
| `docs/HARDWARE-TARGETS.md` + `js/hardware-targets.js` | canonical target IDs, labels and geometry |

The MIDI Implementation was not needed. No third-party source informed any procedure.

## Per-step reconciliation

| Step | Targets | Mode | Learner-facing factual claims | Support |
|---|---|---|---|---|
| **B03-S01** Start from the top screen | `exitButton`, `display` | `display-focus` | Pressing Exit several times reaches the top screen. Upper line carries bank + program number, lower line the tone name. | OM p.14 step 4: "press the [Exit] button several times to return to the top screen." OM p.2: "[Exit] button — returns you to the previous screen." Display fields named at OM p.5, *Top screen*. Screen reproduced verbatim — see *Display provenance*. |
| **B03-S02** Protect any work you want to keep | `programValueButtons`, `toneButtons` | `full` | Selecting another tone or program throws away an edited sound that has not been saved. There is no undo. Nothing warns you first. | OM p.6 *Saving*: "The sound you create will change if you move a knob or select a different program, and will be lost when you switch off the JD-Xi's power." OM p.9 repeats it for tones: "A sound that you create will change if you move the knobs or if you select a different tone or program." That the JD-Xi offers no general undo is recorded at `ROLAND-SOURCE-MAP.md` §7 row 34 and Q10 — the documented recovery set contains no undo. "Nothing warns you first" is the absence of any documented confirmation prompt for program/tone selection anywhere in OM pp.5–6. |
| **B03-S03** Choose the part you will listen to | `digitalSynth1Button` | `full-plus-inset` | Pressing a Part Select button makes that part the one the keys play; the keys play one part at a time. | OM p.5 *Choosing a Part to Play*, and its MEMO: "You can't select and perform on multiple parts simultaneously." OM p.2 item 4. |
| **B03-S04** Step to the next tone | `tonePlusButton` | `full-plus-inset` | Tone + / Tone − step through the sounds available to the part, one at a time. The tone name on the lower line changes. | OM p.5 *Choosing a Tone*, Digital Synth 1/2 part, step 3: "Use the Tone [-] [+] buttons to select a tone." Tone number and name on the lower line: OM p.5 *Top screen*. The recovery's warning that the Value pair looks the same and sits close is **visual** (registry-measured positions) plus the naming reconciliation at `ROLAND-SOURCE-MAP.md` §5.1. |
| **B03-S05** Step back again | `toneMinusButton` | `full-plus-inset` | Tone − walks back to the previous sound. | Same source; the pair is documented as `[-] [+]`. "Nothing has been overwritten" is true because tone selection reads stored tones — no write operation is documented anywhere in OM p.5. |
| **B03-S06** Jump to a different kind of sound | `categoryDial` | `full-plus-inset` | The Category dial chooses the basic type of sound; the category whose indicator is lit is selected. Turning it alone changes no sound. | OM p.5: "Category dial (Category indicator) — Here's how to select the category that specifies the basic type of sound. The category whose indicator is lit is selected." That the dial alone does not change the sound follows from Roland's own three-step order (select part → turn dial → **then** use Tone [-] [+]). |
| **B03-S07** Audition inside the category | `tonePlusButton` | `full-plus-inset` | Stepping Tone + inside a category gives a run of related sounds. | OM p.5 step 3 following step 2; PG pp.44–47 show the preset list grouped by Category, which is what makes "related" accurate rather than a guess. "Some sounds start quietly and grow" is the envelope behaviour Roland describes at OM p.8 (attack time), phrased as listening advice. |
| **B03-S08** One category to know about | `categoryDial` | `full-plus-inset` | Vocoder/AutoPitch is a Category dial position; it can be used on only one part; the Analog Synth part becomes unavailable while one is selected. | OM p.7 *Vocoder/Auto Pitch* step 1: "Use the category dial to select 'Vocoder/AutoPitch.'" OM p.5, note under *Choosing a Tone*: "Vocoder/AutoPitch can be used for only one part. Also, the Analog Synth part becomes unavailable if you select Vocoder/AutoPitch." Both sentences are Roland's, compressed but not extended. |
| **B03-S09** Change the whole program | `programValuePlusButton` | `full-plus-inset` | The Value pair (marked Program (Pattern)) selects a whole program; a program is all four parts, the effects and the pattern together. The program number on the upper line changes. | OM p.5 *Choosing a Program* step 1: "Use the Program (Pattern) Value [-] [+] buttons to select a program." OM p.4: "A program consists of four parts…"; effects saved within each program (OM p.4, p.9); pattern saved in a program (OM p.4, p.12). "The program itself is unchanged — only anything you had edited and not saved is gone" is OM p.6/p.9 again: selection discards the edit, it does not alter storage. |
| **B03-S10** Move between banks | `shiftButton`, `programValuePlusButton` | `full-plus-inset` | Shift + Value switches banks. Preset banks A–D, user banks E–H. | OM p.5: "To switch banks, hold down the [Shift] button and use the Value [-][+] buttons (preset banks A–D, user banks E–H)." OM p.4 bank table. Extra Banks S–Z are deliberately not mentioned — see *Deliberate omissions*. |
| **B03-S11** Find a free Favorite button | `favoriteButton`, `stepButtons` | `full-plus-inset` | Pressing Favorite makes the numbered buttons favorite slots. Pressing one with nothing registered reports "Not Registered!". Registering replaces what is on a button, and the JD-Xi does not ask first. | OM p.5 *Selecting a Favorite*: "Press the [Favorite] button to make it light. The number buttons become the Favorite select buttons… If you press a button in which nothing is registered, the screen indicates 'Not Registered!'" That registering overwrites is the plain reading of *Registering a Favorite* — "The currently selected program is registered to that button" — with no confirmation step documented. See *Destructive-risk handling*. |
| **B03-S12** Register the sound you liked | `favoriteButton`, `stepButtons` | `full-plus-inset` | Hold Favorite and press a numbered button to register the currently selected program. A favorite remembers the part that was selected. Clearing: hold Erase and press the button while Favorite is lit. If you have edited a program, save it first. | OM p.5 *Registering a Favorite* steps 1–2 and its NOTE ("If you've edited a program, save that program first before registering it as a favorite (p. 9)"); OM p.5 *Deleting a Favorite*; OM p.6 MEMO: "A favorite remembers the part that had been selected when you registered the favorite." |
| **B03-S13** Back to the top screen | `favoriteButton`, `exitButton` | `full` | Pressing Favorite again returns the numbered buttons to their normal job; Exit reaches the top screen. | OM p.5 (Favorite lights to put the row into favorite mode — leaving the mode returns it); OM p.14 step 4 for Exit. |

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

**"Not Registered!" is deliberately not rendered as a display state.** Roland states
the string (OM p.5) but does not illustrate the two-line screen that carries it, so it
appears in B03 only as quoted prose inside `detail` and `checkpoint`. Putting it in
`expectedDisplay` would mean composing the rest of the screen.

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

B03 assumes nothing about the loaded program, the selected tone, the selected part
(it selects one at B03-S03 rather than assuming), the bank in view, or whether any
Favorite slot is free.

## Destructive-risk handling

Registering a Favorite overwrites whatever was on that button, and Roland documents no
confirmation for it. B03 therefore never asserts that a slot is safe. Instead it uses
the one check the instrument itself provides — Roland's documented "Not Registered!"
response to pressing an unregistered slot (OM p.5) — and has the learner find a free
button before registering anything.

This satisfies the rule that a destination may not be called empty or safe unless the
instrument provides a documented reliable way to know it. Here it does, and B03 uses
exactly that and nothing more.

One residual risk is stated rather than hidden: pressing a numbered button that *is*
registered selects that program, which discards unsaved work. That action is
downstream of the B03-S02 preflight, and B03-S11's `recoveryHelp` says plainly what
has happened if it occurs.

## Deliberate omissions

- **Category names are never listed.** Roland groups the preset tone list by a Category
  column (PG pp.44–47) but the Owner's Manual does not print the dial's positions as a
  list, and the panel legend is repository-image observation rather than a Roland
  statement. B03 teaches the dial by use — turn it, listen — which needs no list.
- **Extra Banks S–Z** (v1.10) are not mentioned. They exist only after a firmware update
  *and* an import, so naming them to a beginner selecting preset sounds would be
  misleading on most instruments.
- **Favorite banks** (16 banks of 16, OM p.6) are not taught. Switching banks needs a
  long-press of Shift and adds a mode a beginner does not need in order to keep one
  sound. It belongs with `I09`.
- **The tone-number-missing signal** (OM p.5) is not taught here; it is introduced in
  `B06`, where the learner has actually edited something and the signal has meaning.
