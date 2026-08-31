# B09 — Change the feel — source notes

Source reconciliation record for B09. Content lives in `js/tutorials.js`
(`window.JDXI_TUTORIALS.B09`).

| Field | Value |
|---|---|
| Tutorial | **B09 — Change the feel** (beginner, order 9, 9 steps, ~8 min) |
| Short title | Change the feel |
| Prerequisites | `["B08"]` — advisory, not a gate |
| Kind | **Operating procedure**, drawing on two documents: baseline tempo (OM), and shuffle (v1.50 supplement). Both are taught unconditionally against system 1.51. |
| Authored | 2026-08-30 |

Learning goals as authored:

1. Change the tempo with the knob and by tapping.
2. Know that tempo belongs to the program and is shared with the pattern.
3. Add a shuffle feel, where your instrument supports it.

## Sources consulted

| Source | Where it is used |
|---|---|
| Owner's Manual `eng07` | **p.2** item 8 (TEMPO — tempo knob, [Tap]); **p.5** *Top screen* (the tempo field); **p.6** *Changing the Tempo*, including both MEMO points; **p.10** [▶/■]; **p.13** SYSTEM → GENERAL → Tempo Lock (referenced in *Deliberate omissions* only) |
| Version 1.50 Supplementary Manual | **p.2** *Shuffle* — the whole of B09-S06 to B09-S08: the 50% reference point, the bouncy feel, the [Enter] + Part Select and [Enter] + [LFO Depth] gestures, the 0%–50%–100% range, the illustrated screen, and "If you want to save the settings, you should save it as a program" |
| Parameter Guide `e01` | p.10 — Tempo as a Program Edit parameter, consulted to confirm tempo is program-scoped |
| `docs/ROLAND-SOURCE-MAP.md` | §7 rows 22 (Tempo), 50 (Shuffle, 1.50+); §9 the B09 row; §11.2 the 1.50 shortcuts absent from both published shortcut lists; §11.4 features that do not exist below their version; Q12 (B09 is firmware-split — resolved: both mechanisms are in scope) |

## Per-step reconciliation

| Step | Targets | Mode | Learner-facing factual claims | Support |
|---|---|---|---|---|
| **B09-S01** Protect any work you want to keep | `tempoSection` | `full-plus-inset` | The tempo and the shuffle setting belong to the program; changing them replaces what it is set to. | OM p.6 MEMO ("The tempo is saved for each individual program"); v1.50 p.2 ("If you want to save the settings, you should save it as a program"). |
| **B09-S02** Get a pattern running | `playStopButton` | `full-plus-inset` | Play/Stop starts a pattern. | OM p.10: "[▶/■] button — Play or stop the pattern." The pointer back to `B08` covers the case where the loaded program has nothing recorded. |
| **B09-S03** Speed it up and slow it down | `tempoKnob` | `full-plus-inset` | Turning the tempo knob changes the tempo; the tempo number is at the right of the upper line. | OM p.6 *Changing the Tempo* step 1: "Turn the tempo knob." OM p.2 item 8 names the control. The tempo field's position is OM p.5's *Top screen* callout. The "follows an external device" note in the recovery is OM p.17's Sync Mode entry, referred to rather than repeated. |
| **B09-S04** Tap the tempo you want | `tapButton` | `full-plus-inset` | Pressing [Tap] three or more times, steadily, sets the tempo. | OM p.6: "Alternatively, you can set the tempo by pressing the [Tap] button three or more times at quarter-note intervals of the desired tempo." **Roland's "quarter-note intervals" is deliberately not quoted to the learner.** The master plan (§3.3) forbids note-value language in learner text and supplies the substitute — "as though counting a song in". An earlier draft quoted the Roland phrase and then glossed it, which is worse than either: it introduces the notation term the course exists to avoid and then admits it needs translating. The three-press minimum is stated because it is a real requirement. |
| **B09-S05** Whose tempo is it | `display` | `full-plus-inset` | The tempo is saved with each individual program and is shared with that program's pattern. Changing it is an unsaved edit. Switching programs loads that program's tempo. | OM p.6 MEMO, both bullets: "The tempo is saved for each individual program" and "The tempo setting is shared with the pattern", with the cross-reference to WRITE. That an unsaved change is lost on program change or power-off is OM p.6/p.9. PG p.10 confirms Tempo as a program parameter. |
| **B09-S06** About shuffle | `playStopButton` | `full` | Shuffle changes timing within the beat, not speed. 50% is notes at equal intervals; higher is increasingly bouncy. A pattern must be playing. | v1.50 p.2 *Shuffle*: "This setting lets you modify the note timing to create shuffle rhythms. With a setting of '50%' the notes are spaced at equal intervals. As you increase this setting, you'll get an increasingly 'bouncy' feel as though the notes were dotted." Its step 1 is "Play a pattern", which is why the requirement is stated. See *Version-dependent content*. |
| **B09-S07** Choose the shuffle part | `enterButton`, `partSelectGroup` | `full-plus-inset` | Holding Enter and pressing a Part Select button chooses the shuffle part. From 1.50, Enter also works as a held modifier. | v1.50 p.2 step 2: "Hold down the [Enter] button and press [Part Select] buttons to select the shuffle part." That 1.50 introduced [Enter] as a held modifier — a role the Owner's Manual gives only to [Shift] — is recorded at `ROLAND-SOURCE-MAP.md` §11.2, and is drawn from the v1.50 supplement's own set of [Enter] + combinations. The recovery's "if the part simply changed as it normally does, Enter was not held" follows from OM p.5's ordinary Part Select behaviour. |
| **B09-S08** Set the shuffle amount | `enterButton`, `lfoDepthKnob`, `display` | `display-focus` | Holding Enter and turning the LFO Depth knob sets the shuffle rate; the display shows 0%–50%–100%. | v1.50 p.2 step 3: "Hold down the [Enter] button and rotate [LFO Depth] knob to adjust the shuffle rate. The display shows the value (0%–50%–100%)." Screen reproduced verbatim — see *Display provenance*. |
| **B09-S09** Stop, and what is kept | `playStopButton` | `full-plus-inset` | Both tempo and shuffle are saved with the program if you save it; until then they are unsaved edits. There is no undo. | OM p.6 MEMO (tempo saved per program) and v1.50 p.2 ("If you want to save the settings, you should save it as a program"). The discard alternative is offered with its explicit warning, per the recovery house rule. No undo: `ROLAND-SOURCE-MAP.md` Q10. |

## Display provenance

One screen, at B09-S08, reproduced verbatim from Roland's illustration at v1.50 p.2:

```
< SHUFFLE 50% >
D1:Ah Super Saw
```

`syntheticDisplay: false`; `displayNote` names the source and the varying fields — the
percentage is whatever the learner sets, and the lower line carries their own part and
tone name rather than Roland's example. Both lines are inside the data QA guard (15
characters each), which asserts nothing about the real character grid
(`ROLAND-SOURCE-MAP.md` Q4).

## Version-dependent content

B09 carries **two mechanisms of different evidence class**, and the record keeps them apart
even though the learner no longer sees the distinction:

| Steps | Mechanism | Introduced | Source |
|---|---|---|---|
| B09-S02 – B09-S05 | Tempo knob and [Tap] | Baseline — every JD-Xi | OM p.6 |
| B09-S06 – B09-S08 | Shuffle | System version **1.50** | v1.50 p.2 |

**Reconciled 2026-08-31: the version is no longer mentioned in learner-facing text.**
Previously the summary said "on a JD-Xi at system version 1.50 or later", a learning goal
said "where your instrument supports it", `B09-S06` was titled "About shuffle (version 1.50
or later)" and told the learner to skip ahead on an older instrument, and `B09-S08`'s
recovery ended by suggesting their JD-Xi was too old. All of that is gone.

The reason is the same one that applies to `B05`'s Transpose step: the master plan (§2) and
the brief (§5) fix the target as **the owner's instrument at system 1.51**
(`ROLAND-SOURCE-MAP.md` §4.8), on which every 1.50 addition is present. A conditional
written into a beginner's step costs comprehension and buys nothing.

Two things were deliberately preserved rather than deleted with the conditionals:

- **The provenance above.** Shuffle *is* a 1.50 feature, and this table plus
  `ROLAND-SOURCE-MAP.md` §11 remain the way to re-derive the feature set for a JD-Xi at
  another version. The brief permits exactly this — source notes may record a version fact
  that learner-facing content does not carry.
- **The three real checks in `B09-S08`'s recovery.** Removing the version sentence left the
  ordinary mistakes it used to trail: pattern not playing, `[Enter]` not held, wrong knob.
  Those are what actually goes wrong, and they now stand on their own rather than as a
  preamble to a firmware theory.

A second consequence of §11.2 is honoured in B09-S07's `whyItMatters`: because both
published shortcut lists predate the supplements, a learner who has been told "[Shift]
is the modifier button" will find [Enter] behaving as one here. B09 meets that
deliberately rather than letting it surprise them.

## Direct-entry safety

B09 selects no program and no tone, so it performs no discard-capable transition. It does
**overwrite** the loaded program's tempo and shuffle, which is the second case the
preflight rule covers (`DESIGN-RULES.md` §7a), so **B09-S01 is the protect-your-work
preflight** — placed before the first knob move, as in `B06` and `B07`.

It was added during the clean-room review. The first draft argued that B09 had no
discard-capable transition and therefore needed no preflight, which was true of the first
half of the rule and ignored the second: `B06` and `B07` carry one for exactly this class
of change, and B09 turning the tempo knob overwrites a setting the learner may have set
deliberately and not saved. Leaving it out was an inconsistency in applying the project's
own written rule, not a considered exception.

B09-S05 and B09-S09 still carry the honest handling of the resulting unsaved edits — what
they are, what loses them, and that there is no undo.

B09 assumes nothing about the current tempo, the current shuffle value, which part is
selected (B09-S07 has the learner choose one), whether a pattern exists in the loaded
program (B09-S02 hands off to `B08`), or the instrument's system version.

## Deliberate omissions

- **Tempo Lock** (OM p.13, SYSTEM → GENERAL) is directly relevant — it decides whether
  switching programs during playback keeps the previous tempo — and is deliberately not
  performed. It is a SYSTEM parameter, and system parameters are saved automatically
  when you leave the screen (OM p.7, p.13, p.15), so a beginner tutorial cannot set it
  and put it back. It is not mentioned to the learner at all, to avoid inviting a visit.
- **The tempo's numeric range** is not stated. Roland gives the knob and the parameter
  different ranges (OM p.6 with PG p.10), and a beginner setting tempo by ear and by tap
  needs neither.
- **Interactive Chord** (v1.50 p.2) is omitted although it shares the supplement and the
  [Enter]-modifier pattern. It changes pattern playback according to chords played, which
  needs chord vocabulary this audience does not have.
- **Shuffle is never called correct at any value.** Roland's 50% is described as evenly
  spaced, which is a description, not a recommendation.
