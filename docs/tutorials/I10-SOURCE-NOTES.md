# I10 — Performance challenge — source notes

Source reconciliation record for I10. Content lives in `js/tutorials.js`
(`window.JDXI_TUTORIALS.I10`).

| Field | Value |
|---|---|
| Tutorial | **I10 — Performance challenge** (intermediate, order 10, 10 steps, ~20 min) |
| Short title | Performance challenge |
| Prerequisites | `["I09"]` — advisory, not a gate |
| Kind | **Challenge.** Composes `I01`–`I09` and the levels below; introduces no new procedure. |
| Authored | 2026-08-31 |

## Sources consulted

**I10 introduces no source of its own**, on the same principle as `B10`: a challenge that
re-argued its sources would be a second place for the same claim to drift. Every action it
asks for was taught and reconciled earlier, and this table records where.

| Step | Action | Where it was taught and sourced |
|---|---|---|
| **I10-S01** Start somewhere you can afford to lose | Choosing a program slot; the user banks | `I09` — `docs/tutorials/I09-SOURCE-NOTES.md` (OM p.4); `N09` for saving |
| **I10-S02** Build a bass | Analog oscillator, Sub OSC, filter, short envelope | `I01` — `docs/tutorials/I01-SOURCE-NOTES.md` (OM p.5, p.8; PG p.4 for the upper-range caveat) |
| **I10-S03** Build a pad | Digital part, slow attack and long release, slow movement | `I02` — `docs/tutorials/I02-SOURCE-NOTES.md` (PG p.7, pp.17–18) |
| **I10-S04** Build a lead | Bright starting point, immediate envelope | `I03` — `docs/tutorials/I03-SOURCE-NOTES.md` (OM p.8; PG p.15, p.18) |
| **I10-S05** Make a pattern | The recording methods and their overwrite behaviour | `N04`, `N05` and `I08` (OM pp.11–12; PG p.3) |
| **I10-S06** Balance and place the parts | Per-part Level and Pan; the OFFSET group | `N06` and `I07` (PG p.10, p.11) |
| **I10-S07** Set up the effects | Effect types, Part Output, send levels; the shared-effects constraint | `I06` — `docs/tutorials/I06-SOURCE-NOTES.md` (PG p.8, p.10, p.26); `B07` for the not-applied list (OM p.17) |
| **I10-S08** Save it before you perform | The WRITE sequence and choosing a destination | `N09` — `docs/tutorials/N09-SOURCE-NOTES.md` (OM p.9) |
| **I10-S09** Perform it | Part mute; the Pitch and Mod controls; one playable part at a time | `B08`, `N06` (OM p.10) and `B05` (OM p.6) |
| **I10-S10** Keep it, and keep a copy | Saving again; Backup and Roland's whole-folder instruction | `N09` and `I09` (OM p.9, p.14) |

No claim in I10 goes beyond the tutorial it points at. Where a fact is repeated — the
analog part's upper-range limit, the shared set of effects, brightness before volume — it
is repeated with the same hedges as its source tutorial.

## A challenge, not an exam

The architecture gives I10 the intent "assemble, save, and play a complete personalized
setup", and the production brief adds that it should integrate skills without creating a
new hidden curriculum. As authored:

- **nothing new is introduced.** Not one control, gesture, menu or display state appears
  that `B01`–`I09` did not already teach, and I10 shows no `expectedDisplay` at all;
- no step is scored, timed or gated, and none can be failed;
- instructions name the outcome rather than the button ("build a bright, immediate sound
  on the other digital part"), which is what makes it a challenge — but the target
  highlights still show the controls, so a learner who has forgotten is not stranded;
- every `recoveryHelp` names the tutorial that taught the action, plus the single most
  likely concrete stumble from it;
- no result is called better, correct or professional;
- the twenty minutes are an expectation, not a limit, and the learner may stop at any
  point.

## The order is the argument

I10's steps are deliberately in build order rather than tutorial order: foundation
(bass), background (pad), foreground (lead), rhythm, balance, space, save, perform. That
is the order the Intermediate tutorials teach in, and it is also the order the work
actually has to happen in — you cannot balance parts that do not exist, and you cannot
route effects for parts you have not placed.

**Saving comes before performing, not after**, and I10-S08 says why in its
`whyItMatters`: performing means pressing things, and pressing things is how unsaved work
disappears. That is a deliberate inversion of the obvious order, and it is the single most
useful habit this level can leave a learner with.

## Direct-entry safety

**I10-S01 is the protect-your-work step**, and it takes a different shape from the usual
preflight because I10's whole premise is building over a program. Rather than asking the
learner to protect the loaded program, it asks them to *choose* one they are willing to
rebuild — which is the honest framing when the tutorial's first action is to replace all
four parts.

Nothing in I10 assumes the learner arrived through `I09` or through any prerequisite: each
step names the tutorial that covers it, so a learner entering I10 first has a route into
every action it asks for.

## Deliberate omissions

- **Saving is performed, and Restore is not.** I10-S10 points at `I09` for backing up and
  never suggests restoring.
- **No display state is reproduced.** Every screen I10 might have shown belongs to a
  tutorial that already shows it with its provenance.
- **No firmware-gated feature is required.** Shuffle, Transpose, the side-chain
  compressor, Startup Program and the export features are all absent from I10, so the
  challenge is completable on a baseline instrument.
