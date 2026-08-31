# B07 — Add effects — source notes

Source reconciliation record for B07. Content lives in `js/tutorials.js`
(`window.JDXI_TUTORIALS.B07`).

| Field | Value |
|---|---|
| Tutorial | **B07 — Add effects** (beginner, order 7, 10 steps, ~9 min) |
| Short title | Add effects |
| Prerequisites | `["B06"]` — advisory, not a gate |
| Kind | **Operating procedure.** Program-level effect settings, by ear. |
| Authored | 2026-08-30 |

Learning goals as authored:

1. Add space and echo to a sound.
2. Change the character of a sound with the two effect slots.
3. Know the fixed order the effects run in.
4. Know what to check when an effect seems to do nothing.

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
| **B07-S05** Choose what Effect 1 does | `effect1TypeButton` | `full-plus-inset` | Effect 1 offers Distortion, Fuzz, Compressor and Bit Crusher; the Type button selects the type. | OM p.9: "Effect 1/2 [Type] button — These select the type of effect. Effect 1: Distortion, Fuzz, Compressor, Bit Crusher." The list is also drawn in OM p.8's audio-flow diagram. |
| **B07-S06** Turn Effect 1 up | `effect1Knob` | `full-plus-inset` | The Effect 1 knob adjusts the depth of the effect. | OM p.9: "[Effect 1/2] knob — These adjust the depth of the effect." The volume caution in the recovery is generic care wording. |
| **B07-S07** Try Effect 2 | `effect2TypeButton`, `effect2Knob` | `full-plus-inset` | Effect 2 offers Flanger, Phaser, Ring Mod and Slicer. | OM p.9, the Effect 2 list, and OM p.8's diagram. |
| **B07-S08** Switch effects in and out | `effectsOnOffButton` | `full-plus-inset` | The combination changes each time you press; the indicators at the upper left of each knob light to show the available effects; effects can be specified per part. | OM p.9, quoted closely: "You can specify the effects that are used by each part. The combination changes each time you press the [Effects ON/OFF] button. The indicators at the upper left of each knob light to indicate the available effects." OM p.8's footnote makes the per-part point too. **No cycle length or return-to-start is claimed** — see *Deliberate omissions*. |
| **B07-S09** When an effect does nothing | `effectsSection` | `full-plus-inset` | Documented causes: the effect switch may be off; the send level to that effect may be zero; the effect output level, delay level or reverb level may be zero; the part may not be routed to that effect. | OM p.17 *Issues Related to Effects*, "Effects not applied", listing exactly these: the effect on/off setting of each effect; whether each part's Output Assign is set to Effect 1/Effect 2/Delay/Reverb; "Effects do not apply if the send level to each effect is set to 0"; and "even if the send level… is above 0, effects do not apply if the effect output level, delay level, or reverb level are set to 0." PG pp.8–9 is where those levels live. |
| **B07-S10** The order, and what is kept | `effectsSection` | `full-plus-inset` | Audio passes through Effect 1, then Effect 2, then Delay, then Reverb; only effects that are on apply; one set of effects serves the whole program; the order cannot be changed. | OM p.9: "The audio passes through 'Effect 1' → 'Effect 2' → 'Delay' → 'Reverb' in that order, and only the effects that are turned on will apply." OM p.8's diagram draws the same chain. "One set of effects per program" is OM p.8: "Although the settings of the effect section are shared by the entire program, effects can be turned on/off individually for each part." That the order cannot be changed is the absence of any documented routing control on the panel or in OM p.9 — stated as "the order is fixed and you cannot change it", which is what the fixed chain means. |

## Recovery scope — why B07 does not offer `[Shift] + [Enter]`

`B06` offers Roland's documented revert, because OM p.5 scopes it to "the original
sound after you've switched or edited the sound" and B06 edits tone parameters.

B07 edits **effect** settings, which Roland places outside that scope: "Effect settings
are saved individually for each program" (OM p.9), and OM p.8's audio-flow diagram
draws the effect section downstream of, and shared by, the four parts. Roland never
says whether the revert reaches them.

Offering `[Shift] + [Enter]` here would therefore be an unsourced claim about the scope
of a shortcut, which the recovery house rule forbids. B07-S10's `recoveryHelp` instead
gives only what is documented and true:

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
the knobs are set to, or whether the loaded part is routed to the effects at all —
which is why B07-S09 exists as a documented list to work through rather than a promise
that every knob will do something.

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
