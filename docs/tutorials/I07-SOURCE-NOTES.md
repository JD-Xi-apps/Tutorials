# I07 — Build a multi-part program — source notes

Source reconciliation record for I07. Content lives in `js/tutorials.js`
(`window.JDXI_TUTORIALS.I07`).

| Field | Value |
|---|---|
| Tutorial | **I07 — Build a multi-part program** (intermediate, order 7, 10 steps, ~13 min) |
| Short title | Multi-part program |
| Prerequisites | `["I06"]` — advisory, not a gate |
| Kind | **Arranging.** Program Edit across all four parts, including the OFFSET group. |
| Authored | 2026-08-31 |

## Sources consulted

| Source | Where it is used |
|---|---|
| Owner's Manual `eng07` | **p.4** a program consists of four parts; **p.5** *Choosing a Part to Play* and its MEMO (one playable part at a time); **p.9** the Menu route to Program Edit and the WRITE cross-reference; **p.10** part mute |
| Parameter Guide `e01` | **p.10** Program Edit COMMON (Tempo, ProgramLevel) and MAIN (the part indicator, Level, Sound Mute, Pan, Part Output, the send levels), with the illustrated screens; **p.11** the OFFSET group in full — Cutoff Ofst, Reso Offset, Attack Ofst, Decay Offset, Release Ofst, Vibrato Rate, Vibrato Depth, Vibrato Delay, with the illustrated screen |
| `docs/ROLAND-SOURCE-MAP.md` | §7 rows 5 (part selection), 32 (saving); §9 the I07 row; Q9 (the one-playable-part constraint) |

## Per-step reconciliation

| Step | Targets | Mode | Learner-facing factual claims | Support |
|---|---|---|---|---|
| **I07-S01** Protect any work you want to keep | `programValueButtons` | `full` | This changes settings across all four parts. | OM p.6, p.9. |
| **I07-S02** The program's own settings | `menuWriteButton`, `display` | `display-focus` | COMMON holds settings belonging to the whole program: its tempo and its level. | PG p.10's COMMON group: "Tempo … Tempo of the program" and "ProgramLevel 0–127 — Volume of the program." Screen from PG p.10 — see *Display provenance*. |
| **I07-S03** Set each part's level | `partSelectGroup`, `programValueButtons` | `full-plus-inset` | Part Select chooses which part is being edited; Level is the volume of each part. | PG p.10 MAIN: "Use the [Part Select] button to switch parts", "Level 0–127 — Volume of each part." |
| **I07-S04** Place them left and right | `cursorRightButton`, `programValueButtons` | `full-plus-inset` | Pan specifies the stereo position of each part's sound, from far left through centre to far right. | PG p.10: "Pan L64–63R … 'L64' is far left, '0' is center, and '63R' is far right." The advice to keep bass and drums central is craft, presented as advice. |
| **I07-S05** Route each part | `cursorRightButton`, `programValueButtons` | `full-plus-inset` | Part Output and the send levels are per part. | PG p.10; taught in detail in `I06`. |
| **I07-S06** Adjust a part's sound without leaving | `shiftButton`, `cursorRightButton`, `display` | `display-focus` | The OFFSET group adjusts the tone assigned to the part — cutoff, resonance, the envelope times and vibrato — rather than editing the tone. | PG p.11: "Cutoff Ofst (Cutoff Offset) −64–+63 — Adjusts the cutoff frequency for the tone/drum kit that's assigned to the part", and the same construction for resonance, attack, decay, release and the three vibrato parameters. Screen from PG p.11 — see *Display provenance*. |
| **I07-S07** Adjust the timing of a part | `cursorRightButton`, `programValueButtons` | `full-plus-inset` | The attack, decay and release offsets adjust those times for the assigned tone. | PG p.11, the three rows. That the offsets run both ways from zero is Roland's range. |
| **I07-S08** Four parts, one player | `partSelectGroup`, `keys` | `full` | The pattern plays all four parts; the keys play the selected one. | OM p.5 MEMO, both halves, as in `N06`. |
| **I07-S09** Check it as one thing | `shiftButton`, `partSelectGroup` | `full-plus-inset` | `[Shift]` + Part Select mutes and unmutes. Mute is a program setting. | OM p.10 *Part Mute*. That a muted part would be saved muted follows from PG p.10's `Sound Mute` being a Program Edit parameter — which is why the step's `recoveryHelp` says to unmute before saving. |
| **I07-S10** Save the arrangement | `shiftButton`, `menuWriteButton` | `full-plus-inset` | One save keeps all four parts and their tones, the balance, routing, offsets, effects, arpeggio, tempo and pattern. | OM p.4, p.6, p.9, p.12 and PG p.6 together — each element documented as belonging to the program. |

## Display provenance

Two screens, both reproduced verbatim.

| Step | Screen | Source |
|---|---|---|
| I07-S02 | `PROG: COMMON` / `Tempo 120` | PG p.10, Program Edit COMMON |
| I07-S06 | `PROG:OFFSET D1` / `Cutoff Ofst 0` | PG p.11, Program Edit OFFSET |

Both carry `syntheticDisplay: false` and a `displayNote` naming the source and the varying
fields. Note that Roland prints the OFFSET screen's upper line **without a space** after
the colon (`PROG:OFFSET D1`) where the COMMON and MAIN screens have one
(`PROG: COMMON`). Both are reproduced exactly as printed and neither is normalised to
match the other — the same discipline the mirrored confirmation prompts get in `N03` and
`N10`.

## Why the OFFSET group is the point of this tutorial

Without it, I07 would be `N06` with more steps. The OFFSET group is what makes a program
an arrangement rather than four loaded sounds: it adjusts the tone assigned to a part —
its brightness, its envelope times, its vibrato — **from inside Program Edit, without
editing the tone** (PG p.11).

That distinction is worth the two steps it gets. A tone stays reusable across programs
while each program bends it slightly to fit, which is the answer to a problem the learner
will have hit by now: the same pad being right in one program and too bright in another.

## Direct-entry safety

**I07-S01 is the protect-your-work preflight**, and it offers the "move somewhere
disposable" path, because I07 changes settings across every part of whatever program is
loaded.

I07 assumes nothing about the current levels, pans, routings or offsets — every step tells
the learner to note a value before changing it where that matters, and I07-S03's
`recoveryHelp` gives a way back by ear (mute and reintroduce parts one at a time) rather
than claiming a default.

One safety detail is specific to this tutorial: I07-S09's `recoveryHelp` tells the learner
to unmute everything **before** saving, because mute is a saved program setting and a
program saved with a part muted will load that way.

## Deliberate omissions

- **The PITCH group** (PG p.10's `PROG: PITCH D1` / `Octave Shift +1`) is not taught,
  although it is a real Program Edit group. Per-part octave and pitch belong with `B05`'s
  material and would add a fourth group to a tutorial already covering three.
- **`Sound Mute` as a parameter** is not taught; the panel gesture at I07-S09 does the job
  reversibly, as in `N06`.
- **The vibrato offsets** (PG p.11) are named in I07-S06's detail but not walked through;
  `I05` covers modulation properly.
- **No target value is given** for any level, pan or offset.
