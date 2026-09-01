# Quick Reference — source map

Auditable source mapping for `js/quick-reference.js`, required by the reconciliation brief
§10. Quick Reference may **condense** what a tutorial teaches; it may never assert anything a
tutorial could not.

| Field | Value |
|---|---|
| Entries | **21**, the exact set the master plan §20 requires |
| Enforced by | `tools/validate-data.js` — count, per-entry completeness, `learnIn` targets resolving to real tutorials, and the destructive-warning rule in both directions |
| Authored | 2026-08-31 |

## What Quick Reference is

Concise recall for someone who has already been taught something. An entry answers *how do I do
that again?* in a few lines. The teaching stays in the tutorial named by `learnIn`, and every
entry that has a home names it.

The master plan is explicit that Quick Reference "may intentionally condense knowledge also
taught in tutorials", and equally explicit that it must not be silently expanded into
encyclopedic scope. The count check exists because that erosion happens one helpful addition at
a time.

## The twenty-one entries and their sources

| # | Entry | Roland source | Taught in |
|---|---|---|---|
| 1 | Power on safely | OM p.4, *Turning On/Off the Power* — the four-step order, the protection-circuit wait, and the volume caution | `B02` |
| 2 | Power off safely | OM p.4, *Turning Off the Power* — including Roland's own "Have you saved any sounds or patterns that you created?" | `B02`, `N09` |
| 3 | Get back to the top screen | OM p.2 (`[Exit]` returns to the previous screen); p.14 step 4 | `N01`, `N10` |
| 4 | Select a Part | OM p.5 *Choosing a Part to Play* and its MEMO; p.10 (the selected part is what records) | `B04`, `N02` |
| 5 | Find and select a Tone | OM p.5 *Choosing a Tone*, all three part cases; p.5 tone-number signal; p.9 for the discard warning | `B03` |
| 6 | Understand Program vs Part | OM p.4 structure and bank table; p.5 *Choosing a Program* including the bank shortcut; p.10 MEMO (no individual tone saving) | `N02` |
| 7 | Play and stop a Pattern | OM p.10 transport; p.5 measure–beat field; **p.17** Troubleshooting *The pattern won't play* with the Sync Mode cause, setting at p.13 | `B08`, `N10` |
| 8 | Mute and unmute a Part | OM p.10 *Muting a specific part (Part Mute)* | `B08`, `N06` |
| 9 | Change the Tempo | OM p.6 *Changing the Tempo* and its MEMO (saved per program, shared with the pattern) | `B09` |
| 10 | Set the Tempo by tapping | OM p.6, same section — three or more presses | `B09` |
| 11 | Save a Program (WRITE) | OM p.9 *Saving a Sound (Program) (WRITE)*, all six steps, the overwrite note and the power warning; p.4 bank table | `N09`, `I09` |
| 12 | Register and recall a JD-Xi Favorite | OM p.5 *Using Favorite Sounds (Programs)* — *Selecting a Favorite*, *Registering a Favorite* and its NOTE; p.6 MEMO (a favorite remembers the selected part) | `N02`, `N09`, `I09` |
| 13 | Correct or erase a sequencer step | OM p.10 *Deleting All Notes at a Specific Step*; p.11's note that TR-REC will not re-input over an existing note | `N03`, `N04` |
| 14 | **Clear a part or a whole pattern** | OM p.10 *Erasing an Entire Pattern* | *(none — see below)* |
| 15 | Common menu controls | OM p.2 (the button roles), p.13 (SYSTEM auto-save; the grouped SYSTEM screen), p.14 *Accessing the Menu Screens*, p.16 (`[Shift]` + Cursor, scoped by Roland to "setting screens such as system or edit"); PG p.2, p.26 (the `Menu [Shift]+Cursor` column, present in the grouped edit screens and absent from the flat ones) | `N01` |
| 16 | Common useful shortcuts | OM p.16 *Shortcut List*; PG p.2 (the same list, with the per-screen menu columns that bound `[Shift]` + Cursor) | `N01`, `N10` |
| 17 | Portamento | OM p.6 *Shortcut to the Portamento Setting Screen* | `I03` |
| 18 | Transpose | Version 1.50 Supplementary Manual p.2 *Transpose* | `B05` |
| 19 | Arpeggiator | OM p.6 *Playing an Arpeggio*, *Using the Hold function*; PG p.29 (settings saved per program; no arpeggio-specific tempo) | `N07` |
| 20 | TR-REC | OM p.11 *What is TR-REC?* and the TR-REC procedures | `N03`, `N04`, `N05` |
| 21 | Step Recording | OM p.12 *Step Recording* | `N03`, `N05` |

## The destructive entry

**Entry 14, *Clear a part or a whole pattern*, is the only one flagged `destructive: true`.**

The master plan requires that destructive Quick Reference entries remain explicit, and the
brief adds that the warning must appear **before** the procedure. Both are structural rather
than editorial here:

- `app.js` builds the warning panel first, so a learner reading top to bottom meets the risk
  before the steps that cause it.
- `tools/validate-data.js` fails the build if an entry is `destructive` without a `warning`.
- The same check runs the other way: an entry whose own text describes erasing or clearing, but
  which is not flagged and carries no warning, also fails. That is the direction that catches
  drift, because a new entry is far more likely to be written without the flag than with the
  flag and no warning.

Entry 14 is also the only entry with an empty `learnIn`, and that is deliberate. No guided
tutorial teaches whole-pattern erase — `N03` and `I08` both explicitly decline to mention it —
because it destroys a part's entire pattern in one gesture. It is in Quick Reference precisely
because a learner may still need it, and a destructive procedure is safer written down with a
warning than guessed at. The entry says so, and points at the far smaller step erase as the
usual right answer.

Entry 13 carries a warning without being flagged destructive, which is the correct distinction:
one half of it (turning a step dark) is reversible and the other half (`[Erase]` plus a step) is
not, and the entry's whole point is telling them apart.

## Entries that condense a tutorial deliberately

Three entries carry material the tutorial that teaches them does **not**:

- **Entry 7** includes the Sync Mode cause of a pattern that will not play. `B08` had this and
  lost it in the Beginner reconciliation, because the brief rules deep Sync Mode troubleshooting
  out of the primary Beginner flow. `N10-S10` still teaches it, and this entry is the
  recall-shaped second home the brief nominates.
- **Entry 6** includes the bank structure (A–D preset, E–H user, 64 each) that `B03` lost when
  Program browsing moved to `N02`.
- **Entry 16** is Roland's shortcut list condensed to the combinations this course actually
  uses, plus the three caveats that matter: `[Shift]` + `[Enter]` reaches the sound only,
  `[Shift]` + Cursor is not universal (below), and the printed lists predate the 1.10 and 1.50
  updates.

## `[Shift]` + Cursor is scoped, in both entries

Entries 15 and 16 previously read *"move between the major groups of a settings screen"*, with
no qualifier. That is broader than the source. `ROLAND-SOURCE-MAP.md` §6.2 files this
combination under *context-specific behaviour — must never be taught as universal*: Roland
scopes it to "setting screens such as system or edit", it is confirmed in SYSTEM (OM p.13 step
3), Program Edit, Tone Edit and Effects Edit (the `Menu [Shift]+Cursor` column, PG pp.10–27,
and PG p.26 for moving between Effect 1 / Effect 2 / Delay / Reverb), and it is **absent** from
the AutoPitch and Vocoder tables (PG p.28) and the Arpeggio table (PG p.29), which are flat
parameter lists with no menu column at all.

A learner reading the old wording would try it in the Vocoder or Arpeggio screen, get nothing,
and have no way to tell a broken instrument from a shortcut that was never documented there.
Both entries now name the grouped screens the move belongs to, and both carry a note saying
that flat parameter lists have no groups to move between.

The scoping is stated as the limit of the documentation, which is what it is — the entries say
Roland documents the move for grouped screens, not that pressing it elsewhere does nothing.
That is the same treatment `N10-S03` gives `[Shift]` + `[Enter]`, and it does not weaken the
house rule that Quick Reference may condense a tutorial but never assert more than one could:
`N01-S11`, the tutorial that teaches this move, already teaches it inside SYSTEM and names
SYSTEM's six groups.

`tools/validate-data.js` now checks it. Any line that presents `[Shift]` + Cursor must scope it
**in that line** — by naming a grouped screen, or by saying "grouped setting/edit screens".
Checking the entry as a whole was tried first and is not enough: `menu-controls` names SYSTEM in
an unrelated note about auto-save, which let the unqualified step line pass. A learner reads the
line, not the entry.

## What Quick Reference deliberately does not carry

- **No Backup, Restore or firmware-update entry.** The brief forbids all three, and v1 teaches
  none of them.
- **No Realtime Recording, Pattern Copy or Scale Setting entry.** All are excluded from v1, and
  an entry would advertise a capability the course never covers.
- **No Interactive Chord or Side Chain Compressor entry** (master plan §28 defers both).
- **No entry invents a procedure.** Every `steps` array is Roland's own sequence, compressed to
  the wording this course uses elsewhere.
