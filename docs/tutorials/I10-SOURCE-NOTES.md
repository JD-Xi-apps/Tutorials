# I10 — Performance challenge — source notes

Source reconciliation record for I10. Content lives in `js/tutorials.js`
(`window.JDXI_TUTORIALS.I10`).

| Field | Value |
|---|---|
| Tutorial | **I10 — Performance challenge** (intermediate, order 10, 11 steps, ~18 min) |
| Short title | Performance challenge |
| Prerequisites | `["I09"]` — advisory; I10 works with any program that has a pattern |
| Kind | **Course capstone.** Performs an existing saved program; builds and writes nothing. |
| Authored | 2026-08-31 |
| Reconciled | 2026-08-31, against `PRODUCT-CURRICULUM-MASTER-PLAN.md` §11 |

## Master-plan reconciliation (2026-08-31)

The brief's verdict: *current candidate wrongly rebuilds the project and backs it up.* Both are
accurate, and both are gone.

The previous I10 spent six of its ten steps rebuilding a bass, a pad, a lead, a pattern, a
balance and an effects setup from nothing — repeating `I01`–`I08` in miniature — then saved, then
performed for one step, then took a backup. The master plan's role for I10 is the opposite:
**use the saved I07–I09 creation.** No rebuilding, no Backup.

| Master-plan requirement | Before | Now |
|---|---|---|
| **load** the saved creation | rebuilt it instead | `I10-S01` |
| start pattern | yes | `I10-S02` |
| mute/unmute Parts | one step, among others | `I10-S03` |
| Tempo / Tap Tempo | **absent** | `I10-S04` |
| play one selected Part over the pattern | yes | `I10-S05` |
| Pitch | **absent** | `I10-S06` |
| Mod | **absent** | `I10-S06` |
| Octave/Transpose where useful | **absent** | `I10-S07` |
| Arpeggiator if suitable | **absent** | `I10-S08` |
| adjust an effect live | **absent** | `I10-S09` |
| use several tools, **not every control** | **absent** | `I10-S10` |
| stop cleanly | **absent** | `I10-S11` |

So nine of the eleven performance behaviours the master plan lists were missing from the
tutorial named *Performance challenge*, because its time went on construction.

**`I10-S10` deserves naming.** The master plan says "use several appropriate performance tools,
not every control regardless of fit", which is a judgement rather than a procedure. The step
makes it explicit: play the groove once more using only the two or three controls that actually
suited it. Without it, a capstone that walks through eight controls in order teaches the
opposite of what the plan asks.

**Transpose is offered only where useful.** `I10-S07` covers register with the OCTAVE buttons and
does not reach for Transpose, which shifts in semitones and is rarely what a performance needs
mid-loop. The master plan's wording is "Octave/Transpose where suitable", and octave is the one
that suits.

## Sources consulted

| Source | Where it is used |
|---|---|
| Owner's Manual `eng07` | **p.5** *Choosing a Program*, *Choosing a Part to Play* and its MEMO, *Selecting a Favorite*; **p.6** *Changing the Tempo* and its MEMO, *Changing the Keyboard Range in Octave Units*, *Applying Pitch Bend or Vibrato*, *Playing an Arpeggio* and *Using the Hold function*; **p.8** FILTER; **p.9** the Reverb knob; **p.10** *Basic Operation of the Pattern Sequencer*, *Muting a specific part (Part Mute)* |
| Parameter Guide `e01` | **p.6** arpeggio settings saved within each program |
| `docs/ROLAND-SOURCE-MAP.md` | §7 rows 3 (program selection), 5 (parts), 22 (tempo), 26 (part mute), 41–43 (octave, pitch/mod, favorites); §9 the I10 row |

## Per-step reconciliation

| Step | Targets | Mode | Learner-facing factual claims | Support |
|---|---|---|---|---|
| **I10-S01** Protect anything unsaved, and load your groove | `favoriteButton`, `programValueButtons` | `full-plus-inset` | A Favorite button or the Value buttons recall a stored program; loading discards whatever is loaded and unsaved. | OM p.5 *Selecting a Favorite* and *Choosing a Program*; OM p.6/p.9/p.12 for the discard. The recovery gives the bank walk (`[Shift]` + Value, OM p.5) and says the tutorial works on any program with a pattern. |
| **I10-S02** Start the pattern | `playStopButton` | `full-plus-inset` | The transport plays the pattern. Muted parts stay muted. | OM p.10 for both. |
| **I10-S03** Take parts out and bring them back | `shiftButton`, `partSelectGroup` | `full-plus-inset` | `[Shift]` + Part Select mutes; the same combination unmutes; several parts can be muted; nothing stored changes. | OM p.10 *Muting a specific part*, quoted in substance. That the stored program is untouched is the absence of any documented write for muting. |
| **I10-S04** Push the tempo | `tempoKnob`, `tapButton` | `full-plus-inset` | The tempo knob sets the tempo; `[Tap]` pressed three or more times sets it by tapping; the tempo is saved per program and shared with the pattern. | OM p.6 *Changing the Tempo* and its MEMO. **Roland's "at quarter-note intervals" is not quoted** — the step says "at the speed you want", per master plan §3.3, the same handling `B09-S04` uses. |
| **I10-S05** Play a part over the top | `partSelectGroup`, `keys` | `full` | The keys play one selected part while the pattern sounds the rest. | OM p.5 *Choosing a Part to Play* and its MEMO: "you can make multiple parts be heard simultaneously by recording them to a pattern." |
| **I10-S06** Bend and shake what you play | `pitchControl`, `modControl` | `full-plus-inset` | Pitch returns to the centre on release; Mod stays where it is left and applies nothing when fully toward you. | OM p.6 *Applying Pitch Bend or Vibrato*, both wheels. |
| **I10-S07** Move the keyboard to suit the part | `octaveButtons` | `full-plus-inset` | The OCTAVE buttons shift the keyboard in octave steps; both together reset to 0; they have no effect on the Drums part. | OM p.6, all three facts, including "The OCTAVE [Down][Up] buttons don't affect the Drums part." |
| **I10-S08** Let the arpeggiator play, if it suits | `arpeggioOnButton`, `keys` | `full-plus-inset` | ARPEGGIO `[ON]` turns the function on; holding notes plays an arpeggio; it runs at the program's tempo; `[Key Hold]` can leave notes sounding. | OM p.6 *Playing an Arpeggio* steps 1–2 and *Using the Hold function*; the shared tempo follows from OM p.6's tempo MEMO and the absence of any arpeggio tempo in PG p.29's parameter table. Marked as suiting some grooves and not others, per "Arpeggiator if suitable". |
| **I10-S09** Move something while it plays | `cutoffKnob`, `reverbKnob` | `full-plus-inset` | Cutoff and Reverb change the sound while the pattern runs; none of it is written unless you save. | OM p.8 and p.9 for the controls; OM p.6/p.9 for the not-written-unless-saved fact, which is what makes this step safe on a program the learner has just stored. |
| **I10-S10** Use what fits, not everything | `partSelectGroup`, `tempoSection`, `pitchControl` | `full` | No new claim. | A judgement step; every control referenced is documented above. |
| **I10-S11** Stop cleanly | `playStopButton`, `modControl` | `full-plus-inset` | The transport stops the pattern; the Mod control stays where left; the arpeggiator and Key Hold stay on until switched off. | OM p.10 for the transport; OM p.6 for the Mod wheel and the arpeggio buttons. That the saved program is untouched by the session is the absence of any write in the whole tutorial. |

## Direct-entry safety

**`I10-S01` is the preflight and the load, combined.** That is deliberate and is the shape
`tools/validate-data.js` explicitly permits — the comment in its preflight check names I10 as
the case where "the preflight IS the step that has the learner choose a program", so the warning
and the choice are one act.

The tutorial is written to work for a learner who never completed `I07`–`I09`: `I10-S01`'s
recovery says that if no saved groove exists, any preset program with a good pattern will do, and
no later step reads anything specific to the learner's own program.

## Destructive-risk handling

**I10 writes nothing and destroys nothing** beyond the discard at `I10-S01`, which is unavoidable
in a step whose purpose is to load a program.

That is the source of the tutorial's unusual freedom, and it is stated to the learner at
`I10-S09` and again at `I10-S11`: because the groove is already saved, every knob sweep, mute and
tempo change during the performance is free, and the stored program is exactly as I09 left it.
This is the first time in the course a learner can experiment with nothing at stake, and the
capstone says so.

## Deliberate omissions

- **Rebuilding anything.** Excluded by the brief. I10 is a performance, not a construction.
- **Backup** (OM p.15). Excluded from v1, and removed from the previous closing step along with
  the USB connection it needed.
- **Transpose.** Available and documented (v1.50 p.2), and not used — see *Master-plan
  reconciliation*. The master plan's wording permits either.
- **Recording the performance.** Realtime Recording is excluded from v1, so a performance here
  is played and not captured. The tutorial does not suggest otherwise.
- **New procedure of any kind.** Every control I10 uses was taught by an earlier tutorial, which
  is what makes it a challenge rather than a lesson.
