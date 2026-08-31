# B09 — Change the feel — source notes

Source reconciliation record for B09. Content lives in `js/tutorials.js`
(`window.JDXI_TUTORIALS.B09`).

| Field | Value |
|---|---|
| Tutorial | **B09 — Change the feel** (beginner, order 9, 8 steps, ~8 min) |
| Short title | Change the feel |
| Prerequisites | `["B08"]` — advisory, not a gate |
| Kind | **Operating procedure**, split across two evidence classes: baseline tempo, and shuffle added at system version 1.50. |
| Authored | 2026-08-30 |

Learning goals as authored:

1. Change the tempo with the knob and by tapping.
2. Know that tempo belongs to the program and is shared with the pattern.
3. Add a shuffle feel, where your instrument supports it.

## Sources consulted

| Source | Where it is used |
|---|---|
| Owner's Manual `eng07` | **p.2** item 8 (TEMPO — tempo knob, [Tap]); **p.5** *Top screen* (the tempo field); **p.6** *Changing the Tempo*, including both MEMO points; **p.10** [▶/■]; **p.13** SYSTEM → GENERAL → Tempo Lock (referenced in *Deliberate omissions* only) |
| Version 1.50 Supplementary Manual | **p.2** *Shuffle* — the whole of B09-S05 to B09-S07: the 50% reference point, the bouncy feel, the [Enter] + Part Select and [Enter] + [LFO Depth] gestures, the 0%–50%–100% range, the illustrated screen, and "If you want to save the settings, you should save it as a program" |
| Parameter Guide `e01` | p.10 — Tempo as a Program Edit parameter, consulted to confirm tempo is program-scoped |
| `docs/ROLAND-SOURCE-MAP.md` | §7 rows 22 (Tempo), 50 (Shuffle, 1.50+); §9 the B09 row; §11.2 the 1.50 shortcuts absent from both published shortcut lists; §11.4 features that do not exist below their version; Q12 (B09 is firmware-split — resolved: both mechanisms are in scope) |

## Per-step reconciliation

| Step | Targets | Mode | Learner-facing factual claims | Support |
|---|---|---|---|---|
| **B09-S01** Get a pattern running | `playStopButton` | `full-plus-inset` | Play/Stop starts a pattern. | OM p.10: "[▶/■] button — Play or stop the pattern." The pointer back to `B08` covers the case where the loaded program has nothing recorded. |
| **B09-S02** Speed it up and slow it down | `tempoKnob` | `full-plus-inset` | Turning the tempo knob changes the tempo; the tempo number is at the right of the upper line. | OM p.6 *Changing the Tempo* step 1: "Turn the tempo knob." OM p.2 item 8 names the control. The tempo field's position is OM p.5's *Top screen* callout. The "follows an external device" note in the recovery is OM p.17's Sync Mode entry, referred to rather than repeated. |
| **B09-S03** Tap the tempo you want | `tapButton` | `full-plus-inset` | Pressing [Tap] three or more times at quarter-note intervals sets the tempo. | OM p.6: "Alternatively, you can set the tempo by pressing the [Tap] button three or more times at quarter-note intervals of the desired tempo." "At the speed you would count along" is a plain-language gloss of *quarter-note intervals*, offered because the audience has no theory (`DESIGN-RULES.md` §1); the Roland phrasing is kept in the same sentence so nothing is replaced. |
| **B09-S04** Whose tempo is it | `display` | `full-plus-inset` | The tempo is saved with each individual program and is shared with that program's pattern. Changing it is an unsaved edit. Switching programs loads that program's tempo. | OM p.6 MEMO, both bullets: "The tempo is saved for each individual program" and "The tempo setting is shared with the pattern", with the cross-reference to WRITE. That an unsaved change is lost on program change or power-off is OM p.6/p.9. PG p.10 confirms Tempo as a program parameter. |
| **B09-S05** About shuffle (1.50+) | `playStopButton` | `full` | Shuffle changes timing within the beat, not speed. 50% is notes at equal intervals; higher is increasingly bouncy. Added at system version 1.50. A pattern must be playing. | v1.50 p.2 *Shuffle*: "This setting lets you modify the note timing to create shuffle rhythms. With a setting of '50%' the notes are spaced at equal intervals. As you increase this setting, you'll get an increasingly 'bouncy' feel as though the notes were dotted." Its step 1 is "Play a pattern", which is why the requirement is stated. See *Version-dependent content*. |
| **B09-S06** Choose the shuffle part | `enterButton`, `partSelectGroup` | `full-plus-inset` | Holding Enter and pressing a Part Select button chooses the shuffle part. From 1.50, Enter also works as a held modifier. | v1.50 p.2 step 2: "Hold down the [Enter] button and press [Part Select] buttons to select the shuffle part." That 1.50 introduced [Enter] as a held modifier — a role the Owner's Manual gives only to [Shift] — is recorded at `ROLAND-SOURCE-MAP.md` §11.2, and is drawn from the v1.50 supplement's own set of [Enter] + combinations. The recovery's "if the part simply changed as it normally does, Enter was not held" follows from OM p.5's ordinary Part Select behaviour. |
| **B09-S07** Set the shuffle amount | `enterButton`, `lfoDepthKnob`, `display` | `display-focus` | Holding Enter and turning the LFO Depth knob sets the shuffle rate; the display shows 0%–50%–100%. | v1.50 p.2 step 3: "Hold down the [Enter] button and rotate [LFO Depth] knob to adjust the shuffle rate. The display shows the value (0%–50%–100%)." Screen reproduced verbatim — see *Display provenance*. |
| **B09-S08** Stop, and what is kept | `playStopButton` | `full-plus-inset` | Both tempo and shuffle are saved with the program if you save it; until then they are unsaved edits. There is no undo. | OM p.6 MEMO (tempo saved per program) and v1.50 p.2 ("If you want to save the settings, you should save it as a program"). The discard alternative is offered with its explicit warning, per the recovery house rule. No undo: `ROLAND-SOURCE-MAP.md` Q10. |

## Display provenance

One screen, at B09-S07, reproduced verbatim from Roland's illustration at v1.50 p.2:

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

B09 carries **two mechanisms of different evidence class**, and keeps them apart:

| Steps | Mechanism | Version | Source |
|---|---|---|---|
| B09-S01 – B09-S04 | Tempo knob and [Tap] | Baseline — every JD-Xi | OM p.6 |
| B09-S05 – B09-S07 | Shuffle | **1.50 and later only** | v1.50 p.2 |

**B09 has no version precondition and needs none.** B09-S05 states the requirement in
learner-facing text before anything is attempted, tells the learner to skip to the last
step if their instrument is older, and says explicitly that nothing else in the tutorial
is affected. B09-S07's `recoveryHelp` treats "nothing appears on the display" as the
expected symptom of a pre-1.50 instrument rather than a fault, after first ruling out
the two ordinary mistakes (pattern not playing, Enter not held). B09-S08's summary is
written so it reads correctly whether or not the shuffle steps were performed.

The owner's own instrument is at 1.51 (`ROLAND-SOURCE-MAP.md` §4.8), so shuffle is
available to them — but **B09 asserts nothing about what version any given JD-Xi runs**,
and the learner is pointed at `N01` to read their own.

A second consequence of §11.2 is honoured in B09-S06's `whyItMatters`: because both
published shortcut lists predate the supplements, a learner who has been told "[Shift]
is the modifier button" will find [Enter] behaving as one here. B09 meets that
deliberately rather than letting it surprise them.

## Direct-entry safety

B09 selects no program and no tone. Its changes — tempo and shuffle — edit the loaded
program, so B09-S04 and B09-S08 state plainly that they are unsaved edits, what loses
them, and that there is no undo. There is no discard-capable transition in B09, so it
carries **no protect-your-work preflight**; the honest handling of unsaved edits sits in
the two steps that create them.

B09 assumes nothing about the current tempo, the current shuffle value, which part is
selected (B09-S06 has the learner choose one), whether a pattern exists in the loaded
program (B09-S01 hands off to `B08`), or the instrument's system version.

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
