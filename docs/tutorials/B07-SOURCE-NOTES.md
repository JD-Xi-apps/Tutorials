# B07 — Add effects — source notes

Source reconciliation record for B07. Content lives in `js/tutorials.js`
(`window.JDXI_TUTORIALS.B07`).

| Field | Value |
|---|---|
| Tutorial | **B07 — Add effects** (beginner, order 7, 7 steps, ~7 min) |
| Short title | Add effects |
| Prerequisites | `["B06"]` — advisory, not a gate |
| Kind | **Operating procedure.** Program-level effect settings, by ear. |
| Authored | 2026-08-30 |

Learning goals as authored:

1. Add space and echo to a sound.
2. Hear that the other two effect slots change the sound itself rather than where it sits.
3. Compare a sound with effects against the same sound without them, and choose by ear.

## Master-plan reconciliation (2026-08-31)

The master plan (§8) limits B07 to **Reverb, Delay, one simple Effect 1/2 example, a dry
versus effected comparison, and an ear-based choice.** It excludes effect algorithm
taxonomy, deep effect routing and detailed Effect 1/2 study. The brief adds that B07 must
not require memorising all the algorithms, the effect-chain taxonomy, the routing
architecture, or detailed troubleshooting.

Measured against that, the pre-reconciliation B07 was the furthest out of scope of any
Beginner tutorial: it named all eight effect algorithms, walked both slots separately, gave
a step to Roland's effects-troubleshooting list, and closed on the fixed signal chain.

Four steps became one, and two were removed.

| Removed | Old position | Was | Now owned by |
|---|---|---|---|
| Choose what Effect 1 does | 5 | Named Distortion, Fuzz, Compressor, Bit Crusher | folded into the new `B07-S05`; the type names go to the Hardware Explorer and `I06` |
| Turn Effect 1 up | 6 | The Effect 1 depth knob | folded into the new `B07-S05` |
| Try Effect 2 | 7 | Named Flanger, Phaser, Ring Mod, Slicer | folded into one sentence of the new `B07-S05`; `I06` owns using both slots deliberately |
| When an effect does nothing | 9 | Roland's four documented causes of a silent effect | **Hardware Explorer**, on the EFFECTS section, where a reference note is the right shape for it |
| The order, and what is kept | 10 | Effect 1 → Effect 2 → Delay → Reverb, fixed | **Hardware Explorer**, EFFECTS section |

**The new `B07-S05` is the master plan's "one simple Effect 1/2 example".** It presses the
type button once, turns the knob up, and says outright that the learner does not need to
know what the choices are called. Effect 2 is named as a second slot that works the same
way — that is panel orientation, not taxonomy.

**The new `B07-S07` is the dry-versus-effected comparison**, which the master plan lists as
B07's own and which the old tutorial only ever did incidentally. It closes on choosing by
ear and keeps the honest not-saved warning that used to end the tutorial.

Neither removed fact is lost or contradicted. The chain order and the effects-troubleshooting
list are both genuinely useful, both well sourced (OM p.9 and OM p.17 respectively), and
both reference material rather than beginner instruction — which is precisely the disposal
route §37 of the master plan prescribes.

<!-- removed-steps:begin -->

Ids that no longer exist in B07: `B07-S08`, `B07-S09`, `B07-S10`.

<!-- removed-steps:end -->

## Sources consulted

| Source | Where it is used |
|---|---|
| Owner's Manual `eng07` | **p.3** item 15 (EFFECTS); **p.8** *Audio Flow in a Program* — the effect chain diagram, the four units, and per-part effect on/off; **p.9** *Adding Power and Spaciousness (EFFECTS)* — the [Effects ON/OFF] button and its indicators, the fixed Effect 1 → Effect 2 → Delay → Reverb order, the type lists, the depth knobs, and "Effect settings are saved individually for each program"; **p.17** Troubleshooting, *Issues Related to Effects* |
| Parameter Guide `e01` | pp.8–9 — the effect block diagram, routing and send levels, which is what OM p.17's "send level… set to 0" refers to |
| `docs/ROLAND-SOURCE-MAP.md` | §7 row 21 (Effects); §8.2 losing unsaved work; §9 the B07 row; Q10 (no universal undo) |

## Per-step reconciliation

| Step | Targets | Mode | Learner-facing factual claims | Support |
|---|---|---|---|---|
| **B07-S01** Get a sound you can hear | `digitalSynth1Button` | `full-plus-inset` | Selecting a part decides what the keys play. | OM p.5 *Choosing a Part to Play*. |
| **B07-S02** Protect any work you want to keep | `effectsSection` | `full-plus-inset` | Effect settings belong to the program; these knobs change them; the changes are not saved until you save the program; there is no documented one-button way back from an effect change. | OM p.9: "Effect settings are saved individually for each program", with the cross-reference to *Saving a Sound (Program) (WRITE)*. OM p.6/p.9: unsaved changes are lost on program change or power-off. The absence of a documented revert for effects is exactly that — an absence — and is stated as "no documented one-button way back", not as a claim that none exists. See *Recovery scope*. |
| **B07-S03** Put the sound in a room | `reverbKnob` | `full-plus-inset` | The Reverb knob adjusts the depth of reverb; reverb adds reverberation. | OM p.9: "[Reverb] knob — This adjusts the depth of reverb", and the section preamble: "'Effects' allow you to modify or enhance the sound in various ways, such as by adding reverberation or delaying the sound." |
| **B07-S04** Add echoes | `delayKnob` | `full-plus-inset` | The Delay knob adjusts the depth of delay; delay repeats what you play. | OM p.9: "[Delay] knob — This adjusts the depth of delay", plus the same preamble ("delaying the sound"). |
| **B07-S05** Try one of the other effects | `effect1TypeButton`, `effect1Knob` | `full-plus-inset` | The Type button chooses what the effect is; the Effect 1 knob sets how much is applied; Effect 2 is a second slot that works the same way. | OM p.9: "[Effect 1/2] knob — Adjusts the depth of effect 1/2" and "[Type] button — Switches the type of effect 1/2." **Roland's eight type names are deliberately not listed** — see *Master-plan reconciliation*. The loudness caution in the recovery is not a Roland statement and is not written as one: it says "some choices get much louder", which is ordinary gain behaviour the learner will hear, and it directs them to Master Volume, which is documented at OM p.2 item 7. |
| **B07-S06** Switch effects in and out | `effectsOnOffButton` | `full-plus-inset` | The combination changes each time you press; the indicators at the upper left of each knob light to show the available effects; effects can be specified per part. | OM p.9, quoted closely: "You can specify the effects that are used by each part. The combination changes each time you press the [Effects ON/OFF] button. The indicators at the upper left of each knob light to indicate the available effects." OM p.8's footnote makes the per-part point too. **No cycle length or return-to-start is claimed** — see *Deliberate omissions*. |
| **B07-S07** Choose by ear, and leave it there | `effectsSection`, `effectsOnOffButton` | `full-plus-inset` | No new procedural claim: the learner sets the four knobs and uses the On/Off button to compare against no effects. Effect changes are not saved until the program is saved; there is no undo for them. | The comparison gesture is the same OM p.9 `[Effects ON/OFF]` behaviour cited on the previous row. The not-saved warning is OM p.6 and p.9, and the recovery repeats the discard consequence of selecting another program rather than offering it as a clean undo. "There is no correct amount" is a teaching stance, not a claim about the instrument. |

## Recovery scope — why B07 does not offer `[Shift] + [Enter]`

`B06` offers Roland's documented revert, because OM p.5 scopes it to "the original
sound after you've switched or edited the sound" and B06 edits tone parameters.

B07 edits **effect** settings, which Roland places outside that scope: "Effect settings
are saved individually for each program" (OM p.9), and OM p.8's audio-flow diagram
draws the effect section downstream of, and shared by, the four parts. Roland never
says whether the revert reaches them.

Offering `[Shift] + [Enter]` here would therefore be an unsourced claim about the scope
of a shortcut, which the recovery house rule forbids. The closing step's `recoveryHelp`
(now `B07-S07`) instead gives only what is documented and true:

- there is no undo, and no single button that puts effect settings back;
- turning the knobs back by ear is available, and is offered without any promise that it
  restores exact values;
- selecting a different program and returning yields the stored version — offered **only
  with the explicit discard warning** the house rule requires, because doing so discards
  every unsaved change on that program;
- `N09` is named as the way to keep changes instead of recovering from them.

## Direct-entry safety

B07 selects no program and no tone, but its knobs change program-level settings that a
learner may have arrived with unsaved. **B07-S02 is the protect-your-work preflight**,
placed before the first knob move at B07-S03. It names what can be lost, tells the
learner to save first if they have something to keep, names `N09`, and explicitly
declines to assume: "if you are not sure whether this program has been edited, assume
it has."

B07 assumes nothing about which effects are currently on, what types are selected, what
the knobs are set to, or whether the loaded part is routed to the effects at all.

That last one used to be handled by a step of its own, listing Roland's documented causes
of a silent effect. With that step moved to the Hardware Explorer, the assumption is
carried instead by the steps that remain: `B07-S05`'s recovery tells a learner who hears
nothing to turn the knob further and explains why the type button alone changes nothing, and
`B07-S06` has them press Effects On/Off, which is the one-press way to find out whether the
effects are reaching this part at all. Neither step promises that every knob will do
something.

## Deliberate omissions

- **The Effects On/Off cycle is not described beyond what Roland states.** Roland says
  the combination changes with each press and that indicators show what is available.
  It does not state how many combinations there are, their order, or that repeated
  presses return to the starting one — so B07 says none of those things, and its
  recovery is "keep pressing… until the indicators show the effects you want" rather
  than "press N times to get back".
- **Individual effect parameters** (PG pp.26–27) are not opened. B07 is four knobs and
  two type buttons, by ear; the parameters are `I06`.
- **The side-chain compressor** (v1.50 p.3) is omitted from B07 entirely. It is
  firmware-gated, lives inside Effects Edit rather than on the panel, and is mapped to
  `I06`.
- **Per-part Output Assign** is named only as one documented reason an effect may not
  apply (OM p.17). Setting it is Program Edit work and belongs to `I06`/`I07`.
- **No effect is called better or more professional**, and no type is presented as the
  correct choice.
