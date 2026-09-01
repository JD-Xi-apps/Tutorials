# I07 — Build a multi-part program — source notes

Source reconciliation record for I07. Content lives in `js/tutorials.js`
(`window.JDXI_TUTORIALS.I07`).

| Field | Value |
|---|---|
| Tutorial | **I07 — Build a multi-part program** (intermediate, order 7, 11 steps, ~15 min) |
| Short title | Multi-part program |
| Prerequisites | `["I06"]` — advisory, not a gate |
| Kind | **Operating procedure.** Starts the final course project; selects and shapes four tones. |
| Authored | 2026-08-31 |
| Reconciled | 2026-08-31, against `PRODUCT-CURRICULUM-MASTER-PLAN.md` §11 |

## Master-plan reconciliation (2026-08-31)

I07 starts the **fresh final project**, framed by the master plan as *build your performance
groove setup*. What it owns is choosing and shaping four sounds: a drum kit, a bass, a
pad-or-chord-like synth, a lead-or-arpeggio synth, sensible effects, auditioning the parts, and
assembling all four in one program.

The previous I07 did none of that. All ten of its steps were inside Program Edit — COMMON, then
per-part Level, then Pan, then Part Output and send levels, then the OFFSET group's cutoff and
envelope offsets — and it finished by saving. It never chose a sound.

The brief is explicit on both faults: *do not make OFFSET/Pan/routing architecture the main
lesson*, and *do not save final project here; I09 owns final save.*

| Master-plan requirement | Before | Now |
|---|---|---|
| choose/shape a Drum kit | **absent** | `I07-S03` |
| choose/shape a bass | **absent** | `I07-S04` |
| choose a pad/chord-like synth | **absent** | `I07-S05` |
| choose a lead/arpeggio synth | **absent** | `I07-S06` |
| sensible effects | **absent** | `I07-S08` |
| audition Parts | one step, by muting | `I07-S09`, one at a time |
| assemble all four in one Program | assumed | the whole tutorial |
| minimal test pattern **only if needed** | **absent** | `I07-S10`, optional |
| no save here | saved | `I07-S11`, a warning instead |

### The one Program Edit step, and why it stays

`I07-S07` opens Program Edit to set each part's Level, and that is a deliberate judgement rather
than an oversight. The master plan's list for I07 does not name Level — but four sounds chosen
separately do not arrive at usable relative volumes, and no amount of filtering fixes a part
that is simply too loud. The brief's wording is *do not make it the main lesson*, which permits
one step and forbids five.

What is **not** used: Pan, Part Output, the send levels, and the entire OFFSET group. Those were
the previous tutorial's subject and they are the architecture the brief rules out.

`N06`'s source notes say balancing "moves to I07"; this is where it landed, as a single step.

### Not saving, without stranding the learner

The brief forbids saving here, and that creates a real hazard: I07 produces the largest body of
unsaved work in the course, and I08 continues on it. `I07-S11` handles this by *naming* the
hazard rather than resolving it — it tells the learner that nothing is stored, that carrying
straight on to I08 is the intended route, and that if they are stopping they should save now
using N09's procedure. That is a safety notice, not a saving curriculum, and it leaves I09
owning the final save as the master plan requires.

## Sources consulted

| Source | Where it is used |
|---|---|
| Owner's Manual `eng07` | **p.4** a program consists of four parts; **p.5** *Choosing a Part to Play*, *Choosing a Tone* for all three part types; **p.6** *Saving*; **p.8** FILTER, AMP/ENV, and effect settings shared by the entire program; **p.9** the Reverb and Delay knobs, `[Effects ON/OFF]`, *Saving a Sound (Program) (WRITE)*; **p.9** *Editing Program and Effect Settings* — the Menu route to Program Edit; **p.10** the transport |
| Parameter Guide `e01` | **p.10** *Program Parameters* — the MAIN group, its `Level` parameter, and the D1/D2/DR/AN part indicator with "Use the [Part Select] button to switch parts" |
| `docs/ROLAND-SOURCE-MAP.md` | §7 rows 5–9 (parts), 11–14 (filter, amp, LFO, effects), 17 (menu navigation); §8.2 losing unsaved work; §9 the I07 row |

## Per-step reconciliation

| Step | Targets | Mode | Learner-facing factual claims | Support |
|---|---|---|---|---|
| **I07-S01** Protect your work, and choose somewhere to build | `programValueButtons` | `full` | Selecting a program discards anything unsaved on the one you leave. | OM p.6, p.9 and p.12 — the three sentences covering sounds, tones and patterns. |
| **I07-S02** What you are building | `partSelectGroup` | `full-plus-inset` | Every program has the same four parts. | OM p.4. The job assignment — rhythm, bottom, middle, top — is a musical convention offered as a suggestion, and the step says which part does which is "largely up to you". |
| **I07-S03** Choose and shape a drum kit | `drumsButton`, `toneButtons`, `cutoffKnob` | `full-plus-inset` | On the Drums part, Tone `[-]` `[+]` selects a drum kit; Cutoff works on that part. | OM p.5 *Choosing a Tone — Drums part*: "Use the Tone [-] [+] buttons to select a tone (drum kit)." OM p.8 heads the filter description *Digital Synth/Drums part*, and PG p.11's `Cutoff Ofst` is documented as adjusting "the tone/drum kit that's assigned to the part" — the same basis `N04-S10` rests on. |
| **I07-S04** Choose and shape a bass | `analogSynthButton`, `toneButtons`, `cutoffKnob`, `envelopeKnob` | `full-plus-inset` | Analog Synth part: Part Select then Tone `[-]` `[+]`. Cutoff and the Envelope knob shape it. | OM p.5 *Analog Synth part*; OM p.8 for both knobs, with Roland's left/right sentence for `[Envelope]`. The bass-versus-kick advice is a mixing judgement, written as one. |
| **I07-S05** Choose and shape something for the middle | `digitalSynth1Button`, `categoryDial`, `envelopeKnob` | `full-plus-inset` | Digital part: Category dial then Tone `[-]` `[+]`; the Envelope knob right gives a softer attack and longer release. | OM p.5 *Digital Synth 1/2 part*; OM p.8. |
| **I07-S06** Choose and shape something to play | `digitalSynth2Button`, `categoryDial`, `envelopeKnob` | `full-plus-inset` | Same procedure on the second digital part; the Envelope knob left gives a shorter sound with a stronger attack. | OM p.5, OM p.8. The arpeggiator suggestion points at `N07` and adds no new claim. |
| **I07-S07** Balance the four | `menuWriteButton`, `partSelectGroup`, `programValueButtons` | `full-plus-inset` | Program Edit is reached from the Menu; the MAIN group holds each part's Level; the two letters at the right of the upper line show the part; Part Select switches which part is being edited. | OM p.9 *Editing Program and Effect Settings* steps 1–3; PG p.10 MAIN: "The part that you're editing is shown in the right of the upper line. D1/D2 (Digital Synth 1/2), DR (Drums), AN (Analog Synth). Use the [Part Select] button to switch parts." That nothing in Program Edit is written to storage is OM p.9's WRITE requirement read against the absence of any auto-save for it — the contrast `N02-S09` draws with SYSTEM. |
| **I07-S08** Give the whole thing some space | `reverbKnob`, `delayKnob` | `full-plus-inset` | The Reverb and Delay knobs adjust depth; one set of effects serves the whole program. | OM p.9 for the knobs; OM p.8 for the shared-effects sentence. |
| **I07-S09** Audition the parts | `partSelectGroup`, `keys` | `full` | Part Select chooses which part the keys play. | OM p.5 *Choosing a Part to Play* and its MEMO. |
| **I07-S10** Optional: a minimal test pattern | `stepButtons`, `playStopButton` | `full-plus-inset` | Steps are lit to place notes; the transport plays the pattern. | OM p.11 TR-REC and OM p.10 for the transport. Marked optional and explicitly minimal, per the master plan's "only minimal test pattern if needed". |
| **I07-S11** None of this is saved yet | `display` | `full-plus-inset` | The program is not stored; changing program or switching off loses all four parts. | OM p.6, p.9, p.12. No save is performed — see *Master-plan reconciliation*. |

## Direct-entry safety

**I07 carries its preflight at `I07-S01`**, which is also the step that has the learner choose
a program they are willing to rebuild. Combining the two is deliberate and matches `I10`'s
shape: the warning and the choice are the same act.

I07 assumes nothing about I01–I06 having been done. It selects and shapes all four sounds from
whatever is loaded, and the four sound-design tutorials are referenced as further reading rather
than as prerequisites for any step.

## Destructive-risk handling

I07 writes nothing. Its risk is the discard at `I07-S01` and the accumulation of unsaved work
afterwards, which `I07-S11` addresses directly rather than leaving implicit.

`I07-S07` enters Program Edit. Its recovery states that nothing in that screen is written to
storage, which is true and is the contrast with SYSTEM that `N01` and `N02` establish.

## Deliberate omissions

- **Pan, Part Output and the send levels** (PG p.10) are not used. Named exclusions.
- **The OFFSET group** — `Cutoff Ofst`, `Reso Offset`, `Attack Ofst`, `Decay Offset`,
  `Release Ofst` (PG p.11) — is not opened. It was the previous tutorial's centre and it is
  exactly the architecture the brief rules out.
- **Saving.** `I09` owns the final save; `I07-S11` is a warning, not a procedure.
- **The COMMON group** beyond knowing it exists is not walked; `N02` already showed it.
