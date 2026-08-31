# N08 — Edit a sound more deliberately — source notes

Source reconciliation record for N08. Content lives in `js/tutorials.js`
(`window.JDXI_TUTORIALS.N08`).

| Field | Value |
|---|---|
| Tutorial | **N08 — Edit a sound more deliberately** (novice, order 8, 11 steps, ~11 min) |
| Short title | Edit a sound |
| Prerequisites | `["N07"]` — advisory, not a gate |
| Kind | **Operating procedure.** Tone Edit, parameter by parameter. |
| Authored | 2026-08-31 |

## Sources consulted

| Source | Where it is used |
|---|---|
| Owner's Manual `eng07` | **p.5** the missing-tone-number signal and the `[Shift]` + `[Enter]` revert; **p.8** the envelope diagram and its A/D/S/R definitions, and "If you want to edit A/D/S/R separately, enter 'Tone Edit'"; **p.9** *Editing Program and Effect Settings* — the Menu route and the Cursor/Value pattern; **p.10** "The JD-Xi cannot save sound settings as individual tones"; **p.14** the Menu item list |
| Parameter Guide `e01` | **p.12** Analog Synth Tone Edit — the illustrated `TONE: COMMON` screen and the group structure; **pp.15–19** Digital Synth Tone Edit — the COMMON, OSC, PITCH, FILTER, AMP and LFO groups, the illustrated `TONE: AMP` screen, and the AMP group's Attack, Decay, Sustain and Release parameters; the filter envelope's own A/D/S/R and its Depth |
| `docs/ROLAND-SOURCE-MAP.md` | §6.2 `[Shift]` + Cursor group movement, confirmed present in Tone Edit; §7 rows 18–19 (filter, amp/env), 34 (backing out of an unwanted edit); §9 the N08 row |

## Per-step reconciliation

| Step | Targets | Mode | Learner-facing factual claims | Support |
|---|---|---|---|---|
| **N08-S01** Protect any work you want to keep | `display` | `full-plus-inset` | A missing tone number means the loaded sound has been edited. | OM p.5 asterisk. |
| **N08-S02** Choose the part to edit | `digitalSynth1Button` | `full-plus-inset` | Tone Edit edits the sound on the selected part. | OM p.5 (Part Select chooses the part) with OM p.9's editing procedure, which operates on the current sound; PG pp.15–19 are per-tone. |
| **N08-S03** Open Tone Edit | `menuWriteButton`, `display` | `full-plus-inset` | Menu/Write → Cursor → Tone Edit → Enter. | OM p.9 steps 1–2, which names Program Edit, Tone Edit and Effects Edit as the three reached this way; OM p.14's Menu list gives the order. |
| **N08-S04** Move between the groups | `shiftButton`, `cursorRightButton` | `full-plus-inset` | `[Shift]` + Cursor moves between groups; the groups cover common settings, oscillator, pitch, filter, amp and LFO; the upper line names the group. | PG pp.15–19's `Menu [Shift]+Cursor` column, whose group names are COMMON, OSC, PITCH, FILTER, AMP, LFO (and MOD LFO, MISC for the digital tone). `ROLAND-SOURCE-MAP.md` §6.2 confirms Tone Edit as a screen where this combination applies. |
| **N08-S05** Find the AMP group | `shiftButton`, `cursorRightButton`, `display` | `display-focus` | The AMP group exists and is reached this way. | PG p.18's illustrated `TONE: AMP` / `AMP Level 127` screen — see *Display provenance*. |
| **N08-S06** Set the attack on its own | `cursorRightButton`, `programValueButtons` | `full-plus-inset` | Attack is the time from pressing the key until the sound reaches full volume; raising it makes the sound fade in. | PG's AMP group: "Attack (Amp Envelope Attack Time) 0–127 — Specifies the attack time of the amp envelope. This specifies the time from the moment you press the key until the maximum volume is reached." OM p.8 defines A identically. The contrast with `B06` is OM p.8: "The [Envelope] knob effectively adjusts the A/D/S/R parameters in a single operation." |
| **N08-S07** Set the release on its own | `cursorRightButton`, `programValueButtons` | `full-plus-inset` | Release is the time from letting go until the sound disappears. | OM p.8: "R: Release time — Time over which the sound decays after you release the key." PG's AMP group carries the parameter. |
| **N08-S08** The two in the middle | `cursorRightButton`, `programValueButtons` | `full-plus-inset` | Decay is the fall from the loudest point to a held level; Sustain is the level held while the key is down. | OM p.8: "D: Decay time — Time over which the level decays from the maximum to the sustain level. S: Sustain time — Volume at which the sound will be sustained while you hold down the key." |
| **N08-S09** The filter has its own envelope | `shiftButton`, `cursorRightButton` | `full-plus-inset` | The filter has its own attack, decay, sustain and release, plus a depth that decides how far it moves. | PG's FILTER group: the four filter-envelope parameters, and "Depth −63–+63 — Specifies the direction and depth to which the cutoff frequency will change." The `recoveryHelp` claim that zero depth means nothing moves is that parameter's own definition. |
| **N08-S10** Undo the whole experiment | `shiftButton`, `enterButton` | `full-plus-inset` | `[Shift]` + `[Enter]` returns to the original sound after switching or editing; it is not a general undo and does not reach effects, patterns or program settings; the tone number reappears. | OM p.5, quoted in scope: "If you want to return to the original sound after you've switched or edited the sound, hold down the [Shift] button and press the [Enter] button", and the asterisk that ties the tone number to edited state. The limits are stated as limits of what Roland documents — see *Recovery scope*. |
| **N08-S11** Keeping an edit instead | `display` | `full-plus-inset` | A sound is kept only by saving the program; there is no way to save a sound by itself. | OM p.10 MEMO: "The JD-Xi cannot save sound settings as individual tones." PG p.12 adds, for the tone name: "Although you can edit the name and save, this is saved not for individual tones but for the program." |

## Display provenance

One screen, at N08-S05, reproduced verbatim from the Parameter Guide's Tone Edit AMP
group:

```
TONE: AMP
AMP Level 127
```

`syntheticDisplay: false`; the `displayNote` says the parameter shown and its value
depend on where the learner is in the group and on their own sound. Both lines are
inside the ≤16-character guard.

## Recovery scope

N08 offers `[Shift]` + `[Enter]` for the same reason `B06` does and `B07` does not:
Roland scopes it to "the original sound after you've switched or edited the sound"
(OM p.5), and everything N08 changes is a tone parameter (PG pp.12–19). This is the
tutorial where that shortcut is most valuable, because the learner is changing six
things one at a time and may want none of them.

N08-S10 states the scope in Roland's own terms and then states the limits explicitly:
not a general undo, and not documented as reaching effects, patterns or program
settings. That wording is careful — it says Roland does not document it reaching those
things, rather than asserting that it does not, which is the honest form of a claim about
an absence.

## Direct-entry safety

**N08-S01 is the protect-your-work preflight.** It is short, because N08's whole subject
is editing the loaded sound and the risk is obvious once named, and because the tutorial
ends with a genuine way back at N08-S10.

N08 assumes nothing about which part is selected (it selects one), which tone is loaded,
what any parameter's current value is, or which Tone Edit group opens first — N08-S05
has the learner navigate until the upper line reads what they want rather than assuming
a starting group, exactly as `N01` does for SYSTEM.

Two `recoveryHelp` entries are written for the learner who has gone too far to hear
anything: N08-S08 tells them to raise Sustain and AMP Level, and both S06 and S08 point
forward to N08-S10 as the way to put everything back at once.

## Deliberate omissions

- **Which tone structure they are editing.** The digital tone has three partials and the
  analog tone has one (PG p.7), and the group lists differ slightly between them. N08
  teaches the navigation and the envelope, which are common to both, and never claims a
  particular group list — N08-S04 describes the groups by what they cover rather than
  enumerating them.
- **Partials** (PG p.7, p.15) are not introduced. Selecting and switching partials is
  `I02`/`I03` material.
- **Ring Switch, Wave Shape, Analog Feel, Unison** (PG p.15) are omitted; they are named
  in the source map as `I03` material.
- **Tone Name** is not edited. It can be edited here (PG p.12) but is saved with the
  program, and naming belongs to the save procedure in `N09`.
- **No target value is given for any parameter.** The learner is asked to change it and
  listen.
