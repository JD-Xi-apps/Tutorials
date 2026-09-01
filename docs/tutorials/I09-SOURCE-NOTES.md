# I09 — Save and organize creations — source notes

Source reconciliation record for I09. Content lives in `js/tutorials.js`
(`window.JDXI_TUTORIALS.I09`).

| Field | Value |
|---|---|
| Tutorial | **I09 — Save and organize creations** (intermediate, order 9, 11 steps, ~13 min) |
| Short title | Save and organize |
| Prerequisites | `["I08"]` — advisory, not a gate |
| Kind | **Operating procedure.** Performs a real WRITE on the learner's own project. |
| Authored | 2026-08-31 |
| Reconciled | 2026-08-31, against `PRODUCT-CURRICULUM-MASTER-PLAN.md` §11 |

## Master-plan reconciliation (2026-08-31)

The brief says the previous I09 *directly violates v1 scope and must be rewritten*, and lists
ten things to remove entirely from guided v1. Seven of its thirteen steps were those things.

| Old step | What it was | Which exclusion |
|---|---|---|
| old S06–S08 | opening SYSTEM, finding `Start Prog`, changing it | Startup Program **and** SYSTEM parameter change |
| old S09 | connecting a computer by USB | USB/computer |
| old S10 | UTILITY → Backup, copying the JD-Xi folder | Backup |
| old S11 | Restore and what it replaces | Restore |
| old S12 | exporting a bank and loading into Extra Banks S–Z | Export/import **and** Extra Banks |

Beyond the exclusions there was a deeper problem: **the old I09 never saved the project.** It was
a library-management tutorial that assumed the work was already stored. The master plan's role
for it is *turn final groove setup into reusable personal Program*, and its owned list begins
with "safe Program save".

| Master-plan requirement | Before | Now |
|---|---|---|
| safe Program save | **absent** | `I09-S04`–`I09-S08` |
| meaningful name | **absent** as a decision | `I09-S03`, decided before typing |
| intentional overwrite destination | **absent** | `I09-S06`, `I09-S07` |
| verify save | **absent** | `I09-S09` |
| register as a hardware Favorite | yes | `I09-S10` |
| practical organization | banks, favourite banks, Start Prog, backup | `I09-S03`, `I09-S05`, `I09-S11` |

### How I09 differs from N09

Both save a program, and repeating N09 step for step would waste a tutorial. The difference is
where the depth goes. `N09` owns the *mechanics* — this is what WRITE is, this is what a
destination costs, never power off. I09 performs them on real work and spends its own depth on
the decisions around them: choosing a name before you start typing, understanding that names are
the only index the instrument has, and putting the result on a Favorite button because `I10`
will need to load it in one press.

The destination steps are **not** compressed, despite N09 having covered them. Overwriting is
more dangerous here than it was in N09, not less: by this point the learner may have several
programs of their own, and the slot that was empty then may be their bass from `I01` now.
`I09-S06` says exactly that.

<!-- removed-steps:begin -->

Ids that no longer exist in I09: `I09-S12`, `I09-S13`.

<!-- removed-steps:end -->

## Sources consulted

| Source | Where it is used |
|---|---|
| Owner's Manual `eng07` | **p.4** the program bank table (preset A–D, user E–H, 01–64); **p.5** *Choosing a Program*, *Using Favorite Sounds* — *Selecting a Favorite* and *Registering a Favorite* with its NOTE; **p.6** *Saving*; **p.9** *Saving a Sound (Program) (WRITE)*, all six steps including the overwrite warning and "NEVER turn the power off while you are saving settings"; **p.10** the MEMO that the JD-Xi cannot save sound settings as individual tones |
| `docs/ROLAND-SOURCE-MAP.md` | §7 rows 3–4 (program selection, banks), 33 (WRITE), 43 (Favorites); §8.1 overwriting a Program; §9 the I09 row |

## Per-step reconciliation

| Step | Targets | Mode | Learner-facing factual claims | Support |
|---|---|---|---|---|
| **I09-S01** Save anything you came here to save | `programValueButtons` | `full` | Saving keeps what is loaded; selecting a different program would discard it. | OM p.6 and p.9. The instruction not to change program from here on is the same discipline `N09` uses, for the same reason. |
| **I09-S02** One save keeps all of it | `partSelectGroup` | `full` | A save stores the whole program: four parts and their tones, effects, arpeggio, tempo and the pattern. There is no separate save for a sound or a pattern. | OM p.4 for the composition; OM p.9 for effects saved per program; OM p.6 MEMO for tempo; OM p.12 for the pattern living in the program; OM p.10 MEMO: "The JD-Xi cannot save sound settings as individual tones." |
| **I09-S03** Choose a name you will recognise later | `display` | `full` | The instrument offers a short name and no other way of finding things. | The name field is OM p.9 step 2. That there is no folder, tag or search facility is an absence in the documented feature set — nothing in the corpus describes one. Stated as "there are two hundred and fifty-six slots and whatever you called things", which is the bank table (OM p.4) plus that absence. |
| **I09-S04** Open WRITE and enter the name | `shiftButton`, `menuWriteButton`, `cursorButtons`, `display` | `display-focus` | `[Shift]` + `[Menu/Write]` opens the name input screen; Cursor moves and Value selects characters; nothing is written yet. | OM p.9 steps 1–2, verbatim in substance. Screen reproduced verbatim — see *Display provenance*. The recovery distinguishes the short press (Menu) and the long press (Portamento), both OM p.6/p.14, because both are easy to hit by mistake. |
| **I09-S05** Where your own programs live | `programValueButtons`, `display` | `full-plus-inset` | Enter accepts the name and moves on to the destination. Preset banks A–D, user banks E–H, sixty-four each. | OM p.9 steps 3–4; OM p.4 bank table and OM p.5's parenthesis "(preset banks A–D, user banks E–H)". The organisation advice is a suggestion and is written as one. |
| **I09-S06** What choosing a destination costs | `programValueButtons`, `display` | `full` | Saving to an occupied slot overwrites it and erases the previous data. Roland's only signal is that an occupied destination shows its program name on the lower line. There is no free-slot message. | OM p.9 step 4's note, quoted closely: "If you specify a number in which data is already saved, the program name is shown in the lower line. Saving to this number will overwrite the program, erasing the previous data." The absence of a free-slot message is an absence in the documented procedure. |
| **I09-S07** Choose where it goes | `programValueButtons`, `display` | `full-plus-inset` | A name on the lower line means the slot is occupied; `[Shift]` with Value jumps a bank; `[Exit]` abandons the save. | OM p.9 step 4 and its note; OM p.5 for the bank jump; OM p.9's "If you decide to cancel, press the [Exit] button." |
| **I09-S08** Confirm, and write it | `enterButton`, `display` | `full-plus-inset` | Enter brings a confirmation; Exit cancels there; Enter again writes and the screen shows Complete. Never turn the power off while saving. | OM p.9 steps 5–6 and the asterisked warning "NEVER turn the power off while you are saving settings." |
| **I09-S09** Prove it is really there | `programValueButtons`, `playStopButton` | `full-plus-inset` | Selecting a program loads it from storage, so leaving and returning shows the saved version. | OM p.5 *Choosing a Program* read with OM p.6 and p.9: a program change replaces what is loaded, and what an unsaved edit is lost *to* is the stored program — so a round trip necessarily yields storage. Same basis as `N09-S12`. |
| **I09-S10** Put it on a Favorite button | `favoriteButton`, `stepButtons` | `full-plus-inset` | Favorite lights and the numbered buttons recall registered programs; an unregistered slot reports "Not Registered!"; holding Favorite and pressing a number registers the current program, replacing whatever was there. | OM p.5 *Selecting a Favorite* and *Registering a Favorite*, including "The currently selected program is registered to that button" and the NOTE "If you've edited a program, save that program first before registering it as a favorite (p. 9)" — which is satisfied by this point, and is why the step sits here. |
| **I09-S11** Tidy what you have | `programValueButtons`, `display` | `full-plus-inset` | Renaming means saving again to the same slot. Stepping programs discards unsaved work. | OM p.9 WRITE; the discard is OM p.6/p.9, and the recovery notes that at this point everything of the learner's is saved, so nothing is at risk. |

## Display provenance

One screen, at `I09-S04`, reproduced verbatim from Roland's illustration at OM p.9:

```
Name:      [Ent]
Init Program
```

`syntheticDisplay: false`, with a `displayNote` naming the source and stating that the lower
line shows the learner's own program name rather than the example. Nothing is composed.

## Direct-entry safety

**`I09-S01` is the preflight**, and it is unusual in shape: rather than warning before a
destructive action the tutorial is about to take, it warns that the learner may already be
carrying something and must not lose it on the way in. That is correct for a tutorial whose
purpose is to rescue work.

`PREFLIGHT_EXEMPT` in `tools/validate-data.js` exempts `N09` on the grounds that it selects no
other program or tone. I09 has the same shape and the same discipline — the Value buttons are
used only inside the WRITE screen — but it is **not** exempted, because `I09-S09` and `I09-S11`
do step programs. Both are downstream of the save, at which point there is nothing left to lose,
and `I09-S09`'s recovery says exactly that.

## Destructive-risk handling

The overwrite at `I09-S07` is the single most destructive routine action in the course, and it
is handled the way `N09` established: the risk is stated before the choice, the only signal
Roland provides is given, no slot is ever nominated as safe or empty, and the learner is told to
pick one they are willing to overwrite.

`I09-S10` carries the same discipline to Favorite registration, using Roland's documented
"Not Registered!" response as the empty-slot check rather than asserting a button is free.

## Deliberate omissions

All ten of the brief's named exclusions, and why each is safe to drop:

- **USB / computer, Backup, Restore, Export/import, Extra Banks** — all documented (OM p.15,
  v1.10 p.1), all removed. They need hardware this course does not assume and a workflow v1 does
  not cover. `N10-S11`'s reference to keeping a backup was removed in the same pass, so nothing
  in the runtime advertises a capability the course never teaches.
- **Startup Program and SYSTEM parameter change** (v1.50 p.3) — removed. SYSTEM saves itself on
  exit with no confirmation and no undo, which makes it a poor place to send a learner for an
  optional convenience.
- **Tone-saving curriculum** — there is none to teach: OM p.10's MEMO says the JD-Xi cannot save
  sound settings as individual tones, and `I09-S02` states that as a fact rather than a workflow.
- **Pattern Copy and Program-copy curriculum** — excluded from v1.
- **Favorite banks** (16 banks of 16, OM p.6) are no longer taught. The old tutorial had a step
  on switching them; one Favorite button is what `I10` needs, and sixteen banks of them is
  library management for a learner who does not yet have sixteen programs.
