# I08 — Build a fuller pattern — source notes

Source reconciliation record for I08. Content lives in `js/tutorials.js`
(`window.JDXI_TUTORIALS.I08`).

| Field | Value |
|---|---|
| Tutorial | **I08 — Build a fuller pattern** (intermediate, order 8, 11 steps, ~14 min) |
| Short title | Fuller pattern |
| Prerequisites | `["I07"]` — advisory, not a gate |
| Kind | **Authoring, with destructive risk.** All four recording methods; two overwrite. |
| Authored | 2026-08-31 |

## Sources consulted

| Source | Where it is used |
|---|---|
| Owner's Manual `eng07` | **p.10** *Changing the Number of Measures* and its prompt, measure switching, *Copying a Pattern*, *Deleting All Notes at a Specific Step*; **p.11** *Realtime Recording*, *Tips for Realtime Recording*, *Note When Recording Effect Knob Movements*, TR-REC and its re-input rule; **p.12** *Step Recording*, the fourth recording method, *Saving a Pattern*; **p.13** `Loop Rec`; **p.15** the click-out setting |
| Parameter Guide `e01` | **p.3** all of the above restated, including the four methods' overwrite behaviour and the note that recorded effect knob movements cannot be erased; **p.4** `Pattern Full!` after heavy knob recording, and that extreme knob movements may make playback struggle; **p.5** the `Pattern Full!` error row |
| Version 1.10 Supplementary Manual | **p.2** *Erasing Knob and Wheel Movements Recorded in a Pattern* — `[Enter]` + `[Erase]` during playback, for the selected part, and for all drum instruments at once |
| `docs/ROLAND-SOURCE-MAP.md` | §7 rows 25–28 (the four methods), 45 (pattern copy); §8.3 erasing pattern data; §9 the I08 row |

## Per-step reconciliation

| Step | Targets | Mode | Learner-facing factual claims | Support |
|---|---|---|---|---|
| **I08-S01** Protect any work you want to keep | `programValueButtons`, `stepButtons` | `full` | Two of the methods overwrite what is already there. | OM p.11 / PG p.3. |
| **I08-S02** The four ways in | `patternSequencerSection`, `stepButtons` | `full-plus-inset` | TR-REC refuses to record over an existing note; holding a step and playing adds without deleting; step and realtime recording delete and replace. | OM p.11 and PG p.3: "If you want to use TR-REC to re-input notes at a step in which you previously input a note… you must first delete the existing notes. When you use step recording or realtime recording, the original notes are automatically deleted and replaced (overwritten)." OM p.12 / PG p.3 for the fourth method: "the originally existing notes are not deleted; the notes you enter are added to the recording." |
| **I08-S03** Record in real time | `realTimeRecButton`, `playStopButton` | `full-plus-inset` | Select a part, press [Real Time Rec], press [▶/■], play; the performance is layered onto the pattern; knob and wheel movements are recorded too. | OM p.11 *Realtime Recording* steps 1–5, including "Your performance is recorded by layering it onto the selected pattern" and "Movements of the knobs and wheels are also recorded." |
| **I08-S04** It stops at the end of the pattern | `realTimeRecButton` | `full-plus-inset` | Recording while the pattern plays stops automatically when playback returns to the beginning; the `Loop Rec` system parameter changes that. | OM p.11 *Tips for Realtime Recording*, quoted closely, and OM p.13's `Loop Rec` definition. See *SYSTEM handling*. |
| **I08-S05** Give yourself more room | `menuWriteButton`, `display` | `display-focus` | Up to four measures; Enter copies from the existing pattern, Exit adds blank measures; neither cancels; the length reverts if you select another program before saving. | OM p.10 *Changing the Number of Measures*, its button table and its note. Screen from OM p.10 — see *Display provenance*. |
| **I08-S06** Work on a later measure | `shiftButton`, `stepButtons` | `full-plus-inset` | `[Shift]` + one of the first four numbered buttons chooses the displayed measure, during playback or recording; the current measure blinks; with a 32nd-note scale the range is the first eight. | OM p.10, as in `N03`. |
| **I08-S07** Record a knob movement | `realTimeRecButton`, `cutoffKnob` | `full-plus-inset` | Knob movements are recorded with the notes; recording a lot of movement can fill the pattern; extreme movements can make playback struggle. | OM p.11 for the recording; PG p.4: "If you record extreme knob movements, pattern playback might not keep up. If the storage capacity for knob movements reaches its limit, the display indicates 'Pattern Full!' and no further recording is possible." PG p.5's error row gives the documented action. |
| **I08-S08** Removing recorded movement | `enterButton`, `eraseButton` | `full-plus-inset` | `[Enter]` + `[Erase]` during playback erases the selected part's knob and wheel movements while held; on the Drums part it clears them for every instrument at once. | v1.10 p.2, quoted closely: "While a pattern plays back, you can hold down the [Enter] button and press the [Erase] button to erase only the knob and wheel movements from the currently selected part. Erasure occurs while you hold down the button. Note that in the case of a Drums part, this erases the recorded movements for all of the instruments." See *Version-dependent content*. |
| **I08-S09** Effect knob movements are different | `effectsSection` | `full-plus-inset` | Effect knob movements are saved for the whole program, so erasing the pattern does not erase them, and they cannot be erased at all — they must be re-recorded. | OM p.11 *Note When Recording Effect Knob Movements* and PG p.3, both stating it: "since effect knob movements are saved for the entire program, the effect knob movements are not erased even if you erase the entire pattern. Since effect knob movements that you record cannot be erased, you'll need to re-record." v1.10 p.2 repeats the point. |
| **I08-S10** Copying a pattern from elsewhere | `menuWriteButton`, `stepButton10` | `full-plus-inset` | `[Menu/Write]` + `[10]` opens Pattern Copy; it overwrites the destination part; you choose pattern, sound, or both; program and effect settings are not copied; the sound-only setting is how a tone is moved between programs. | OM p.10 *Copying a Pattern*, its tables, and its note: "The pattern data and tones are copied. Programs and effect settings are not copied", plus the MEMO: "The JD-Xi cannot save sound settings as individual tones. If you want to use a tone from another program, use the Pattern copy Sound Only setting to copy it." |
| **I08-S11** Save the pattern with its program | `shiftButton`, `menuWriteButton` | `full-plus-inset` | There is no separate save for a pattern. | OM p.12 *Saving a Pattern*. |

## Display provenance

One screen, at I08-S05, reproduced verbatim from OM p.10:

```
With Copying ?
[Exit]:N [Ent]:Y
```

`syntheticDisplay: false`, with the `displayNote` stating it is reproduced with its own
left-to-right order — the same wording `N03` uses for the same screen, and the counterpart
to `N10`'s mirrored Factory Reset prompt.

## Two traps that cost work

Both get their own step because both are irreversible in a way nothing else in the
sequencer is:

- **I08-S09 — effect knob movements cannot be erased.** This is the only recording on the
  instrument that cannot be taken back by any documented means. Roland states it twice, in
  two documents, and adds it a third time to the 1.10 supplement. The step is placed
  *before* the learner is likely to record one, and says so: "it is worth knowing before
  you make it rather than after."
- **I08-S10 — Pattern Copy overwrites the destination.** The step describes it rather than
  performing it, gives the cost, and notes that Exit leaves without copying.

## Version-dependent content

**I08-S08 is firmware-gated.** Erasing recorded knob and wheel movements with
`[Enter]` + `[Erase]` was added at system version **1.10** (v1.10 p.2), not 1.50 — it is
one of the two shortcuts that supplement introduced, alongside the program-change lock.
The step's `recoveryHelp` treats "nothing happens" as the expected symptom of an earlier
instrument rather than a fault, and points at `N01` for reading the version.

The first draft of this step named 1.50 in its `detail` while naming 1.10 in its
`recoveryHelp`. That was caught writing this file and corrected before the checkpoint;
it is recorded here because a version caveat that contradicts itself is exactly the kind
of defect these notes exist to catch.

## SYSTEM handling

`Loop Rec` is exactly the setting a learner will want after I08-S04, and I08
**deliberately does not go and change it.** It lives in SYSTEM (OM p.13), and system
parameters are saved automatically on leaving the screen (OM p.7, p.13, p.15).

I08-S04's `recoveryHelp` therefore names the setting, states the auto-save behaviour as
the reason the tutorial stays out, and tells the learner to change it only deliberately
and to note the value they found — which is the only restore path SYSTEM offers.

## Direct-entry safety

**I08-S01 is the protect-your-work preflight**, and I08-S02 immediately follows it with
the overwrite table, so the learner knows which method is safe before choosing one.

I08 assumes nothing about the pattern's current length, scale, contents, or which parts
already hold data. I08-S06's `recoveryHelp` covers the 32nd-note case where the measure
range is eight buttons rather than four.

## Deliberate omissions

- **Pattern Erase** (`[Shift]` + `[Erase]`, OM p.10) is not taught. It erases a part's
  pattern or every part's, and with All selected it also resets the length and scale
  (PG p.3). Nothing in I08 needs it, and `N04` already teaches the per-step erase.
- **Chord entry** during recording (OM p.11, p.12) is omitted; no chord vocabulary is
  assumed.
- **Auto Note's effect on Pitch Bend Range** (PG p.4) is out of scope.
- **`Rec Overflow!`** (PG p.5) is not raised; `Pattern Full!` is the one a learner
  recording knob movements will actually meet.
