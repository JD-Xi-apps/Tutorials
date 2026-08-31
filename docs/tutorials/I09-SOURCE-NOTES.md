# I09 — Save and organize creations — source notes

Source reconciliation record for I09. Content lives in `js/tutorials.js`
(`window.JDXI_TUTORIALS.I09`).

> **Destructive-risk tutorial.** It performs Backup, which only reads. It deliberately
> does **not** perform Restore, which replaces the instrument's data, nor the Extra Bank
> import. It does change one SYSTEM parameter, which writes itself on exit.

| Field | Value |
|---|---|
| Tutorial | **I09 — Save and organize creations** (intermediate, order 9, 10 steps, ~13 min) |
| Short title | Save and organize |
| Prerequisites | `["I08"]` — advisory, not a gate |
| Kind | **Library management.** Banks, favourites, startup program, backup. |
| Authored | 2026-08-31 |

## Sources consulted

| Source | Where it is used |
|---|---|
| Owner's Manual `eng07` | **p.4** the bank table and user banks E–H; **p.5** *Using Favorite Sounds* — selecting, registering, the "Not Registered!" response, deleting, and the NOTE about saving an edited program first; **p.6** *Switching the Favorite Bank* — sixteen banks, the long press of Shift, and the MEMO that a favourite remembers the selected part; **p.9** WRITE; **p.13** SYSTEM auto-save; **p.14** *Backing Up and Restoring Data* — the Backup and Restore procedures, the illustrated UTILITY screen, and Roland's whole-folder instruction |
| Version 1.10 Supplementary Manual | **pp.1–2** export of up to one bank of 64 programs, the Extra Bank import into folders S–Z, the never-power-off warnings, and "Exporting user data does not make user data disappear from the JD-Xi itself" |
| Version 1.50 Supplementary Manual | **p.3** *Startup Program* — `Start Prog` under SYSTEM → GENERAL, its A01–H64 / S01–Z64 range, and the reminder that system parameters are saved on exit |
| `docs/ROLAND-SOURCE-MAP.md` | §7 rows 36 (backup/restore), 37 (export/Extra Bank), 43 (favorites), 51 (startup program); §8.4 whole-instrument destruction; §9 the I09 row |

## Per-step reconciliation

| Step | Targets | Mode | Learner-facing factual claims | Support |
|---|---|---|---|---|
| **I09-S01** Where your work lives | `shiftButton`, `programValueButtons` | `full-plus-inset` | `[Shift]` + Value switches banks; A–D are Roland's, E–H are yours, 64 each. | OM p.5 for the gesture; OM p.4 and PG p.6 for the bank table. |
| **I09-S02** Register a favourite | `favoriteButton`, `stepButtons` | `full-plus-inset` | Favorite makes the numbered buttons favourite slots; an unregistered one reports "Not Registered!"; holding Favorite and pressing a button registers the current program; registering replaces what was there; Erase deletes a registration; a favourite remembers the selected part; an edited program should be saved first. | OM p.5 *Selecting a Favorite*, *Registering a Favorite* and its NOTE, *Deleting a Favorite*; OM p.6's MEMO for the remembered part. Same treatment as `B03`. |
| **I09-S03** More than sixteen favourites | `favoriteButton`, `shiftButton` | `full-plus-inset` | Favourites are organized into sixteen banks of sixteen; long-press Shift until a numbered button blinks; the blinking one is the current bank; press a non-blinking one to switch. | OM p.6 *Switching the Favorite Bank*, steps 1–3, quoted closely including the long press. |
| **I09-S04** Choose the startup program (1.50+) | `menuWriteButton`, `display` | `full-plus-inset` | `Start Prog` sets the program selected at power-on; it is under SYSTEM → GENERAL; added at version 1.50. | v1.50 p.3, its procedure and its parameter table. See *Version-dependent content*. |
| **I09-S05** Change it deliberately | `programValueButtons`, `exitButton` | `full-plus-inset` | System settings are saved automatically as you leave the screen; there is no confirmation and no undo. | v1.50 p.3's own reminder ("The parameters you edit are saved when you exit the system setting screen"), and OM p.7, p.13, p.15. See *SYSTEM handling*. |
| **I09-S06** Connect a computer | `usbComputerPort` | `full-plus-inset` | Backing up needs a computer connected by USB. | OM p.14: "Connect the JD-Xi to your computer via USB before you back up or restore." |
| **I09-S07** Back up your data | `menuWriteButton`, `display` | `display-focus` | Menu → UTILITY → Backup; a folder opens on the computer; copy the whole JD-Xi folder, not just BACKUP or some files, or it will not restore correctly; do not rename the displayed file. | OM p.14 *Backing Up Data (Backup)*, steps 1–6 and its MEMO, quoted closely. Screen from OM p.14 — see *Display provenance*. That Backup only reads is the absence of any documented change to the instrument in that procedure, stated as "changes nothing on the JD-Xi". |
| **I09-S08** Restore replaces everything | `menuWriteButton` | `full-plus-inset` | Restore is under UTILITY; it puts a backup back onto the instrument, replacing what is there; it ends by asking you to turn the power off. | OM p.14 *Restoring Data (Restore)*, and "When it is complete, the display indicates 'Completed. Turn off power.'" **Described, never performed** — see *Destructive-risk handling*. |
| **I09-S09** Sharing single banks (1.10+) | `usbComputerPort` | `full-plus-inset` | From 1.10 the JD-Xi can export up to one bank of 64 programs as a file and load such files into extra banks S–Z; exporting does not remove anything; never power off during either. | v1.10 pp.1–2, including "You can export a maximum of 64 programs (one bank)", the S–Z folders, the TIPS note that exporting does not make user data disappear, and both never-power-off warnings. |
| **I09-S10** Name things so you can find them | `shiftButton`, `menuWriteButton` | `full-plus-inset` | Renaming means saving again to the same slot; saving to a slot replaces what is there. | OM p.9's WRITE sequence — the name is set at step 2 and the destination at step 4, so re-saving to the same slot with a new name is the documented route. The overwrite consequence is OM p.9's asterisk. |

## Display provenance

One screen, at I09-S07, reproduced verbatim from OM p.14:

```
UTILITY
Backup
```

`syntheticDisplay: false`, with a `displayNote` saying it is shown at the point where
Backup is selected. Both lines are inside the ≤16-character guard.

**Two screens are deliberately not reproduced.** The v1.10 supplement illustrates
`Export...` and `Extra Bank...` with a progress indicator on the second line that the
text extraction renders as bar characters. Reproducing a progress bar as literal text
would be composing a display state rather than reproducing one, so `I09-S09` describes
both operations in prose and shows neither. The `Completed. Turn off power.` screen is
likewise described rather than reproduced in `I09-S08`.

## Destructive-risk handling

I09 touches three operations of very different risk, and treats them differently:

| Operation | What I09 does | Why |
|---|---|---|
| **Backup** (OM p.14) | **Performed.** | It reads from the instrument and changes nothing on it. It is also the only protection against everything else in this table. |
| **Restore** (OM p.14) | **Described, not performed.** | It replaces the instrument's data. A learner has no reason to run it in a tutorial, and running it would destroy the work the rest of the level built. |
| **Extra Bank import** (v1.10 p.2) | **Described, not performed.** | It requires a file the learner does not have, a power cycle, and it writes to the instrument. |

`I09-S08`'s instruction is literally "Read this, and do not perform it now", and its
`recoveryHelp` carries the never-power-off warning and the advice to take a fresh backup
first if the instrument still holds anything wanted.

Favourite registration is handled exactly as `B03` handles it: the documented
"Not Registered!" response is the only way a free slot is identified, registering
replaces what was there without asking, and Roland's NOTE about saving an edited program
before registering it is carried into the `recoveryHelp`.

I09-S10's `recoveryHelp` carries the one risk in renaming: saving to the same slot is
correct and saving to the wrong one destroys a different program.

## Version-dependent content

Two steps are firmware-gated, and **I09 needs no version precondition**:

| Step | Feature | Version | Source |
|---|---|---|---|
| I09-S04, I09-S05 | Startup Program | **1.50+** | v1.50 p.3 |
| I09-S09 | Export and Extra Banks | **1.10+** | v1.10 pp.1–2 |

Each states its requirement in learner-facing text, is written to be skippable, and
treats a missing feature as the expected symptom of an earlier instrument rather than a
fault. Neither asserts anything about what version any particular JD-Xi runs; both point
at `N01` for reading it.

## SYSTEM handling

I09 is the **only** tutorial in the library that deliberately changes a SYSTEM parameter.
Everywhere else the auto-save behaviour is a reason to stay out (`B05`, `B08`, `B09`,
`N04`, `I08`).

Here it is unavoidable and appropriate: `Start Prog` is a SYSTEM parameter and there is
no other route to it, and the learner is choosing it on purpose rather than experimenting.
The requirements for changing a SYSTEM parameter are met:

- the behaviour is sourced (v1.50 p.3 states the auto-save in the procedure itself);
- the learner is told plainly that the change persists automatically, with no
  confirmation and no undo (I09-S05);
- the tutorial establishes the starting value before changing it — I09-S05's instruction
  begins "Note the value shown", and its `recoveryHelp` is to set it back to that value
  **before leaving the screen**, which is the only restore path SYSTEM offers.

## Direct-entry safety

I09 carries no protect-your-work preflight, for the same reason `N09` does not: it selects
no other tone and its own program changes are the subject rather than a side effect. What
it does instead is warn at the point of risk — I09-S01's `recoveryHelp` notes that
browsing banks discards anything unsaved on the program being left, and offers skipping
the step.

I09 assumes nothing about which favourite slots are occupied, what `Start Prog` is
currently set to, whether a computer is available (I09-S06's `recoveryHelp` says the
learner can stop there), or what system version the instrument runs.

## Deliberate omissions

- **The full export and import procedures** are not given step by step. Both need a
  computer, a file, and a power cycle, and both are described so the learner knows they
  exist and what they cost.
- **`INT Memory Full!`** (PG p.5) is not raised here; `N10` covers recognising it.
- **Renaming without re-saving** does not exist on this instrument and is not implied.
- **Axial**, Roland's sound library named in the v1.10 supplement, is referred to only
  obliquely ("sounds published for the instrument") rather than by name, since nothing in
  this curriculum verifies its current availability.
