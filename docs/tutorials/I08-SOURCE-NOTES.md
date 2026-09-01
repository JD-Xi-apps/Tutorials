# I08 — Build a fuller pattern — source notes

Source reconciliation record for I08. Content lives in `js/tutorials.js`
(`window.JDXI_TUTORIALS.I08`).

| Field | Value |
|---|---|
| Tutorial | **I08 — Build a fuller pattern** (intermediate, order 8, 12 steps, ~16 min) |
| Short title | Fuller pattern |
| Prerequisites | `["I07"]` — advisory; I08 works on any program if the I07 setup is gone |
| Kind | **Operating procedure.** The deepest sequencer lesson; records into the loaded pattern. |
| Authored | 2026-08-31 |
| Reconciled | 2026-08-31, against `PRODUCT-CURRICULUM-MASTER-PLAN.md` §11 |

## Master-plan reconciliation (2026-08-31)

The brief says the previous I08 *contains explicit v1 exclusions and must be rewritten*, and
lists five things to remove by name. Four of them were the tutorial's subject.

| Old step | What it was | Which exclusion |
|---|---|---|
| old S02 | "the four ways in", naming realtime recording as one | Realtime Recording |
| old S03–S05 | arming `[Real Time Rec]`, recording a live performance, and the automatic stop at the loop point | Realtime Recording |
| old S08 | recording a Cutoff sweep into the pattern | recorded knob/wheel automation |
| old S09 | `[Enter]` + `[Erase]` to clear recorded knob and wheel movements | recorded knob/wheel automation |
| old S10 | effect knob movements being saved per program and unerasable | recorded knob/wheel automation |
| old S11 | `[Menu/Write]` + `[10]` opening Pattern Copy | Pattern Copy |

That is six of twelve steps removed. What replaces them is what the master plan actually asks
for: a fuller drum groove, deeper drum editing than `N04`, bass, a synth part, an optional
fourth, extending the pattern gradually toward four measures, a fill made by changing the final
steps, Part Mute for auditioning, correcting steps, and Step Recording where it helps.

**Two procedures arrive here from `N03`**, which is where the reconciliation moved them:

- **Pattern Length** (`I08-S08`), including Roland's `With Copying ?` prompt.
- **Measure navigation**, `[Shift]` + `[01]`–`[04]` (`I08-S09`).

Both were four of eleven steps in `N03`, a tutorial whose pattern is one measure long and which
therefore had no use for either. Here they are the answer to a problem the learner now has.

**Four measures is stated as a goal, not a requirement** (`I08-S12`), which the master plan asks
for in those words. The closing step says outright that a two-measure loop with a fill beats
four measures of something abandoned halfway.

## Sources consulted

| Source | Where it is used |
|---|---|
| Owner's Manual `eng07` | **p.5** *Choosing a Part to Play*, *Choosing a Tone — Drums part* and the printed instrument names; **p.8** FILTER and AMP/ENV applying to the Drums part; **p.10** *Muting a specific part*, *Basic Operation of the Pattern Sequencer*, *Changing the Number of Measures* and its `With Copying ?` prompt, *Switching the Number of Measures Shown by the [01]–[16] Buttons*, *Deleting All Notes at a Specific Step*; **p.11** *What is TR-REC?* and the TR-REC procedures; **p.12** *Step Recording*, *Saving a Pattern* |
| Parameter Guide `e01` | **p.11** `Cutoff Ofst` — the basis for Cutoff acting on the whole drum kit |
| `docs/ROLAND-SOURCE-MAP.md` | §7 rows 24–26 (sequencer, TR-REC, part mute); §8.2 losing unsaved work; §8.3 erasing pattern data; §9 the I08 row |

## Per-step reconciliation

| Step | Targets | Mode | Learner-facing factual claims | Support |
|---|---|---|---|---|
| **I08-S01** Protect any work you want to keep | `stepButtons`, `eraseButton` | `full` | Recording changes the loaded pattern; a pattern disappears on program change or power-off. | OM p.12 *Saving a Pattern*. |
| **I08-S02** Start from your setup | `partSelectGroup` | `full-plus-inset` | Part Select chooses which part the keys play. | OM p.5. The step is explicitly written so that the I07 setup is convenient but not required. |
| **I08-S03** Build a fuller drum groove | `drumsButton`, `stepButtons` | `full-plus-inset` | On the Drums part, playing a key chooses the instrument and the numbered buttons set the steps it sounds on; a step that already holds a note must be erased first. | OM p.11 TR-REC step 1 and the drum case; the occupied-step constraint is OM p.11's own note, and the erase gesture in the recovery is OM p.10. Instrument names are printed above the keys (OM p.5). **No key numbers are given** — instrument placement varies by kit. |
| **I08-S04** Shape the kit further | `cutoffKnob`, `envelopeKnob` | `full-plus-inset` | Cutoff and the Envelope knob act on the Drums part, adjusting the kit assigned to it. | OM p.8 heads the filter and amp descriptions *Digital Synth/Drums part*; PG p.11's `Cutoff Ofst` is documented as adjusting "the tone/drum kit that's assigned to the part". The overlap advice is a listening judgement. |
| **I08-S05** Add the bass | `analogSynthButton`, `stepButtons` | `full-plus-inset` | TR-REC on a pitched part: play the key, light the steps. | OM p.11 *Digital Synth part/Analog Synth part*, steps 1–2. |
| **I08-S06** Add a synth part | `digitalSynth1Button`, `stepButtons` | `full-plus-inset` | Same procedure. Muting a part is `[Shift]` + Part Select. | OM p.11 for TR-REC, OM p.10 for Part Mute in the recovery. |
| **I08-S07** A fourth part, if it earns a place | `digitalSynth2Button`, `shiftButton` | `full-plus-inset` | Same procedure; muting is reversible and changes nothing. | OM p.11 and OM p.10 ("To return to the original state, once again hold down the [Shift] button and press the Part Select button"). Optional, per the master plan's fourth-part-optional framing carried forward from `N06`. |
| **I08-S08** Make the pattern longer | `menuWriteButton`, `programValueButtons`, `display` | `display-focus` | Menu → Pattern Length → Enter; Value chooses measures; Enter confirms; the JD-Xi then asks `With Copying ?`, where Enter copies from the existing pattern and Exit adds blank measures. **Either answer applies the change.** A length change reverts if you select another program before saving. | OM p.10 *Changing the Number of Measures*, steps 1–4 and the button table: "[Enter] button — If the number of measures is being increased, measures are copied from the original pattern. [Exit] button — Blank measures are added", then "Press the [Enter] or [Exit] button to change the number of measures." The revert warning is Roland's own note on the same page. Screen reproduced verbatim — see *Display provenance*. |
| **I08-S09** Work on a later measure | `shiftButton`, `stepButtons` | `full-plus-inset` | `[Shift]` + one of `[01]`–`[04]` chooses the displayed measure during playback or recording; holding Shift lights those buttons and the current measure blinks. | OM p.10, quoted closely. **The 32nd-note variant is deliberately not given** — see *Deliberate omissions*. |
| **I08-S10** Add a fill at the end | `stepButtons`, `drumsButton` | `full-plus-inset` | Steps in the last measure are lit and unlit like any others. | OM p.11 TR-REC. The definition of a fill offered here — the end of the loop doing something different — is the master plan's own framing ("changing final steps so the loop turns around differently") and is a musical description rather than a claim about the instrument. |
| **I08-S11** Audition and correct | `shiftButton`, `eraseButton`, `stepRecButton` | `full-plus-inset` | Part Mute for auditioning; `[Erase]` plus a step erases with the pattern stopped; turning a button dark only mutes its note. Step recording is available as an alternative. | OM p.10 *Muting a specific part* and *Deleting All Notes at a Specific Step*, both quoted in substance; OM p.12 *Step Recording* for the alternative. |
| **I08-S12** Four measures is a goal, not a rule | `playStopButton`, `display` | `full` | A pattern can be up to four measures. The pattern is not saved. | OM p.10 ("You can create a pattern that's up to four measures long") and OM p.12 *Saving a Pattern*. |

## Display provenance

One screen, at `I08-S08`, reproduced verbatim from Roland's illustration at OM p.10:

```
With Copying ?
[Exit]:N [Ent]:Y
```

`syntheticDisplay: false`, with a `displayNote` naming the source and flagging that the
left-to-right order is Roland's own. That order matters: it is the **opposite** of the Factory
Reset prompt shown in `N10-S11`, where `[Ent]` comes first. Both are reproduced as printed, and
`N10`'s note draws attention to the difference.

## Direct-entry safety

**I08 carries its preflight at `I08-S01`**, before any recording.

I08 is written to work whether or not the I07 setup survived: `I08-S02` checks what is there
rather than assuming, and its recovery says plainly that a lost setup is rebuildable and points
at I07. No step reads any state I07 leaves behind beyond "there are four sounds".

## Destructive-risk handling

Three genuinely destructive operations appear, and each is scoped.

1. **`[Erase]` plus a step** erases a note permanently. Taught at `N03` and used here on steps
   the learner is deliberately correcting, always with the stopped-pattern precondition stated.
2. **Reducing the pattern length** loses what was in the removed measures. `I08-S08`'s recovery
   says so, and recommends the copying answer as the safer choice.
3. **Recording over an occupied step** cannot happen with TR-REC — Roland prevents it — which is
   why the tutorial uses TR-REC throughout and treats a refusing step as a prompt to erase
   rather than as a fault.

**Whole-pattern erase** (`[Shift]` + `[Erase]`, OM p.10) is not mentioned anywhere in I08. It
destroys a part's entire pattern in one gesture and belongs in Quick Reference with an explicit
warning.

## Deliberate omissions

- **Realtime Recording** (OM p.11) is excluded from v1 and is not named, not even as one of the
  ways in. `I08-S11` offers Step Recording as the alternative to TR-REC, which are v1's two.
- **Recorded knob and wheel automation**, its `[Enter]` + `[Erase]` removal (v1.10), and the
  unerasable effect-knob case (OM p.11) are all excluded. Removing the recording removes the
  need for the removal procedure and the caveat.
- **Pattern Copy** (OM p.10) is excluded from v1.
- **Scale Setting** (OM p.10) is excluded from v1, which is also why `I08-S09` does not give
  Roland's 32nd-note variant of the measure-switching gesture: stating it would require naming
  the scale setting it depends on.
- **Velocity and Gate Time** (OM p.12) are excluded; velocity/accent instruction is outside v1.
- **`Loop Rec`** (OM p.11) is a SYSTEM parameter that only matters for realtime recording, and
  goes with it.
