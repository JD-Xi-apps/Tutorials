# N09 — Save your work — source notes

Source reconciliation record for N09. Content lives in `js/tutorials.js`
(`window.JDXI_TUTORIALS.N09`).

> **Destructive-risk tutorial.** Saving overwrites the destination slot, and Roland
> documents no undo and no rollback. This file is the audit record for that operation
> and is written to be checked line by line against the Owner's Manual.

| Field | Value |
|---|---|
| Tutorial | **N09 — Save your work** (novice, order 9, 14 steps, ~15 min) |
| Short title | Save your work |
| Prerequisites | `["N08"]` — advisory, not a gate |
| Kind | **Destructive-risk operating procedure.** The WRITE sequence, in full. |
| Authored | 2026-08-31 |

## Master-plan reconciliation (2026-08-31)

The master plan (§9) keeps everything the previous N09 did — the brief's instruction was to
*preserve the strong current WRITE safety* — and adds three things it did not do.

| Master-plan requirement | Before | Now |
|---|---|---|
| create a small **disposable practice edit inside N09** | **absent** — N09 assumed the learner arrived with work to save | `N09-S01` |
| switch away and return to verify persistence | **absent** | `N09-S12` |
| optional hardware Favorite registration at the end | **absent** | `N09-S13` |

The practice edit is the most important of the three, and it fixes a real direct-entry
problem rather than a compliance gap. The old first step read "Check that the sound or
pattern you want to keep is the one playing now" — which assumes the learner has something.
A learner opening N09 from the home screen to *learn saving* had nothing to save, and the
tutorial had no answer for them. `N09-S01` gives them something deliberately disposable, and
says outright that anyone who does already have work should skip it and save that instead.

It also improves the safety story. The first time a learner performs an operation that can
overwrite a stored program is now a rehearsal on a thirty-second-old knob move, not on
something they care about.

`N09-S12` closes the one gap in the old tutorial's otherwise careful chain: it ended at
"Complete !" and asked the learner to believe it. Stepping away and back is the only check
that distinguishes a written program from one that merely still looks right on screen.

`N09-S13` is the home for the Favorite registration removed from `B03`, and it arrives with
Roland's own precondition satisfied — the NOTE at OM p.5 says to save the program first,
which the learner has just done. It carries the empty-slot technique from B03 unchanged.

## Sources consulted

| Source | Where it is used |
|---|---|
| Owner's Manual `eng07` | **p.4** the bank table and "A program you edited can be saved as a user program (64 programs in each bank E–H)"; **p.4** *Turning Off the Power* ("Have you saved any sounds or patterns that you created?"); **p.6** *Saving*; **p.9** ***Saving a Sound (Program) (WRITE)*** — the whole six-step sequence, the overwrite warning, the cancel, and the power-off warning; **p.10** "The JD-Xi cannot save sound settings as individual tones"; **p.12** *Saving a Pattern*; **p.13** SYSTEM auto-save; **p.15** the click-out-right setting being temporary |
| Version 1.10 Supplementary Manual | **p.2** the program-change lock being temporary and not saveable |
| Version 1.50 Supplementary Manual | **p.2** Transpose is not saved and returns to 0 at power-off |
| Parameter Guide `e01` | **p.12** the tone name is saved for the program, not for individual tones |
| `docs/ROLAND-SOURCE-MAP.md` | §7 rows 32 (saving a program), 33 (saving pattern work); **§8.1** overwriting a program; §8.2 losing unsaved work by doing nothing; §9 the N09 row |

## The WRITE sequence, step for step

Roland's procedure (OM p.9) against N09's steps. Nothing is added, reordered or omitted.

| Roland (OM p.9) | N09 |
|---|---|
| 1. "Hold down the [Shift] button and press the [Menu/Write] button. The name input screen appears." | **N09-S04**, with the illustrated screen |
| 2. "Use the Cursor [◄] [►] buttons to move the cursor, and use the Value [-] [+] buttons to select characters." | **N09-S05** |
| 3. "When you've specified the name, press the [Enter] button." | **N09-S06** |
| 4. "Use the Program (Pattern) Value [-] [+] buttons to select the save-destination." | **N09-S08**, preceded by **N09-S07** |
| * "If you specify a number in which data is already saved, the program name is shown in the lower line. Saving to this number will overwrite the program, erasing the previous data." | **N09-S07** in full, and repeated in N09-S08's instruction |
| 5. "Press the [Enter] button. A confirmation message appears." | **N09-S09** |
| 6. "Press the [Enter] button. A screen indicating Complete ! appears, and the data is saved. If you decide to cancel, press the [Exit] button." | **N09-S10**, with the cancel stated at **N09-S09** where it applies |
| * "NEVER turn the power off while you are saving settings." | **N09-S10**, in the instruction itself |

Two steps have no Roland counterpart because they are framing rather than procedure:
**N09-S02** (make sure the right thing is loaded) and **N09-S03** (what a save keeps).
Both are built from OM p.6, p.9, p.10 and p.12 and add no new operation. **N09-S11** and
**N09-S14** follow the write.

## Per-step reconciliation

| Step | Targets | Mode | Learner-facing factual claims | Support |
|---|---|---|---|---|
| **N09-S01** Make a small change you will not miss | `cutoffKnob` | `full-plus-inset` | Turning Cutoff edits the loaded sound. | OM p.8 for the knob; OM p.6 for the consequence ("The sound you create will change if you move a knob"). The step creates the thing the tutorial then saves, so N09 needs the learner to arrive with nothing. |
| **N09-S02** Make sure the right thing is loaded | `programValueButtons`, `toneButtons` | `full` | Saving keeps what is loaded now; selecting another program or tone from here would discard it. | OM p.6, p.9: an edited sound is lost when you select a different program or tone. |
| **N09-S03** What a save keeps | `partSelectGroup` | `full` | A save stores the whole program — four parts and their tones, effects, arpeggio, tempo, pattern. There is no way to save a sound by itself and no separate pattern save. | OM p.4 (program = four parts; effects, arpeggio and pattern saved within it); OM p.6 (tempo saved per program); OM p.10 MEMO ("The JD-Xi cannot save sound settings as individual tones"); OM p.12 (*Saving a Pattern* points at the program WRITE); PG p.12 (tone name saved for the program). |
| **N09-S04** Open the WRITE screen | `shiftButton`, `menuWriteButton`, `display` | `display-focus` | `[Shift]` + `[Menu/Write]` is the save gesture and the only one; the name screen appears; nothing is written yet; Exit leaves. | OM p.9 step 1; OM p.16's shortcut list gives the same combination and no other write gesture exists in it. That nothing is written until step 6 is Roland's own sequence. |
| **N09-S05** Name it | `cursorButtons`, `programValueButtons` | `full-plus-inset` | Cursor moves along the name, Value chooses characters. | OM p.9 step 2. The `recoveryHelp` note that Cursor and Value do not select a program *at this screen* follows from step 2 assigning them to name entry and step 4 assigning Value to the destination — two different stages. |
| **N09-S06** Accept the name | `enterButton` | `full-plus-inset` | Enter confirms the name and moves on to the destination. | OM p.9 steps 3–4. |
| **N09-S07** What choosing a destination costs | `programValueButtons`, `display` | `full-plus-inset` | Saving replaces whatever is in the chosen slot and erases the previous data; the only signal is that an occupied destination shows its name on the lower line; **there is no message that tells you a slot is free**. | OM p.9's asterisk, quoted almost intact. The second half is an explicit statement of an absence — see *Destructive-risk handling*. |
| **N09-S08** Choose where it goes | `programValueButtons`, `display` | `full-plus-inset` | Value selects the destination; user programs belong in banks E–H, 64 slots each; a name on the lower line means the slot is occupied. | OM p.9 step 4; OM p.4 and PG p.6 for the user banks. |
| **N09-S09** Enter, and the last chance to stop | `enterButton`, `exitButton` | `full-plus-inset` | Enter brings up a confirmation; Exit cancels; nothing has happened yet. | OM p.9 step 5, and step 6's "If you decide to cancel, press the [Exit] button." |
| **N09-S10** Write it | `enterButton`, `display` | `full-plus-inset` | Enter writes it; the display reports completion; never turn the power off while saving. | OM p.9 step 6 and its asterisk. |
| **N09-S11** It is saved, and it cannot be undone | `exitButton`, `display` | `full-plus-inset` | The top screen shows the slot and name; if that slot held another program it does not now; there is no undo and nothing to roll back to. | OM p.5 *Top screen*; OM p.9's asterisk ("erasing the previous data"). The absence of an undo is `ROLAND-SOURCE-MAP.md` §7 row 34 and Q10. |
| **N09-S12** Prove it is really there | `programValueButtons`, `display` | `full-plus-inset` | Selecting a program loads it from storage, so leaving your program and returning shows the saved version. | OM p.5 *Choosing a Program*, read with OM p.6 and p.9: a program change replaces what is loaded, and what an unsaved edit is lost *to* is the stored program. So a round trip necessarily yields storage. This is the master plan's "switch away and return if source-supported" — and it is supported, by those two facts together rather than by any single sentence, which is why the claim is limited to what returns rather than to any refresh mechanism. |
| **N09-S13** Put it on a Favorite button, if you want to | `favoriteButton`, `stepButtons` | `full-plus-inset` | Favorite lights and the numbered buttons become favorite slots; an unregistered slot reports "Not Registered!"; holding Favorite and pressing a numbered button registers the current program; Roland asks that the program be saved first. | OM p.5 *Selecting a Favorite* and *Registering a Favorite*: "Hold down the [Favorite] button and press the [01]–[16] button to which you want to register the selected program. The currently selected program is registered to that button", with the NOTE "If you've edited a program, save that program first before registering it as a favorite (p. 9)." That NOTE is why this step comes after the save rather than anywhere else. See *Destructive-risk handling*. |
| **N09-S14** What a save does not cover | `display` | `full` | System settings save themselves separately; Transpose, the program-change lock and the click-out-right setting are never saved. | OM p.7/p.13/p.15 (SYSTEM auto-save); v1.50 p.2 (Transpose not saved, returns to 0 at power-off); v1.10 p.2 (program-change lock temporary, cannot be saved); OM p.15 (click out right is temporary). |

## Display provenance

One screen, at N09-S04, reproduced verbatim from OM p.9:

```
Name:      [Ent]
Init Program
```

`syntheticDisplay: false`; the `displayNote` states that the lower line shows the current
program's name and will be the learner's own rather than Roland's `Init Program`
example. The upper line is exactly 16 characters, inside the guard.

**Two later screens are deliberately not reproduced.** Roland writes "A confirmation
message appears" (step 5) and "A screen indicating Complete ! appears" (step 6) without
illustrating either as a two-line screen. N09 therefore describes both in prose — "a
confirmation message appears", "the display reports that it is complete" — and shows
neither in `expectedDisplay`. Reproducing them would mean composing the lines Roland did
not print, which the display-string house rule forbids and which `ROLAND-SOURCE-MAP.md`
Q4 is the reason for.

## Destructive-risk handling

Checked against the save-safety requirements one by one.

| Requirement | How N09 meets it |
|---|---|
| Verify the complete save procedure against Roland | The step-for-step table above. Every stage of OM p.9 is present and in order. |
| Distinguish Program saving from Tone-only assumptions | **N09-S03** states that the JD-Xi cannot store sound settings as individual tones (OM p.10), and **N09-S14** in `N08` points here for the same reason. A learner is never left thinking they saved "a sound". |
| Remember the Pattern is saved by saving the Program | **N09-S03**, and every recording tutorial (`N04-S10`, `N05-S12`, `N06`) ends by pointing here. |
| Do not name a destination as empty or safe | **No slot is ever called empty or free.** N09-S07 states the one signal Roland documents — an occupied destination shows its name — and then says plainly that there is no message telling you a slot is free and that *this tutorial cannot promise you one is*. |
| Require the learner to choose a destination they are willing to overwrite | N09-S07's instruction is exactly that sentence, and it is the step's checkpoint. |
| Make overwrite consequences explicit before the committing action | N09-S07 is a whole step whose only job is that, placed before the destination is chosen — two steps before the commit. |
| Reproduce confirmation displays only when Roland illustrates them | One screen reproduced; two described in prose. See *Display provenance*. |
| Distinguish `[Enter]` confirmation from `[Exit]` cancellation exactly as documented | N09-S09 names both at the stage Roland documents them. N09-S04, S04, S06 and S07 each state that Exit leaves without saving, because at those stages it does. |
| Explicitly warn not to power off during writing | In N09-S10's **instruction**, not buried in a note. |
| Do not teach a fake rollback after a completed write | N09-S11's title is "It is saved, and it cannot be undone", and its detail says there is no undo and nothing to roll back to. No step suggests recovering an overwritten program. |
| Do not perform Factory Reset, Restore, firmware update or unrelated destructive maintenance | None appears in N09. |

### Why N09 carries no protect-your-work preflight

Every other risky tutorial in this level opens with one. N09 does not, deliberately.

The preflight exists to stop a tutorial destroying the learner's **loaded** work. N09
selects no other program and no other tone, so it cannot do that — it is the tutorial
that rescues loaded work. N09-S02 does the opposite job: it tells the learner *not* to
change program from here on, and explains that doing so would destroy the very thing
they came to save.

The risk in N09 runs the other way, toward whatever already occupies the destination
slot, and it has its own dedicated step (N09-S07) rather than being folded into a
preflight aimed at a different danger.

### The shared-instrument case

N09-S07's `whyItMatters` names it explicitly: if the JD-Xi is shared or was bought
second hand, one of those slots may hold work someone else cares about. That is the case
where "choose a slot you are willing to overwrite" is not enough on its own, and the
learner is told to press Exit and come back if they are unsure.

## Direct-entry safety

N09 assumes nothing about the loaded program, whether it has been edited, which slots
are occupied, or what the current program is called. N09-S02's `recoveryHelp` handles the
learner who arrives having already lost the work they came to save, and says so plainly
rather than implying it can be recovered.

The tutorial can be abandoned at every stage before N09-S10, and each of N09-S04, S04,
S06, S07 and S08 says so in its `recoveryHelp`.

## Deliberate omissions

- **Backup and Restore** (OM p.14) are not taught. Restore replaces the instrument's
  data, and backup requires a computer and a USB connection. `I09` is the mapped home for
  them.
- **Export and Extra Banks S–Z** (v1.10) are omitted: firmware-gated, computer-dependent,
  and `I09` material.
- **Favorites** are not mentioned as a way of keeping work, because they are not one — a
  favourite registers a program, and OM p.5's NOTE requires the program to be saved
  first. `B03` teaches favourites with that note attached.
- **`INT Memory Full!`** (PG p.5) is not raised here. It is a real save-time failure, but
  handling it means initialising unneeded programs, which is a destructive operation of
  its own; `N10` covers recognising the message.
- **No slot number is ever suggested**, not even as an example.
