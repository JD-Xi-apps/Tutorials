# B05 — Play with the keys — source notes

Source reconciliation record for B05. Content lives in `js/tutorials.js`
(`window.JDXI_TUTORIALS.B05`).

| Field | Value |
|---|---|
| Tutorial | **B05 — Play with the keys** (beginner, order 5, 12 steps, ~9 min) |
| Short title | Play the keys |
| Prerequisites | `["B04"]` — advisory, not a gate |
| Kind | **Operating procedure.** Playing technique by ear, octave shifting, Pitch and Mod, and one firmware-gated step. |
| Authored | 2026-08-30 |

Learning goals as authored:

1. Hear how position, force and length change what you play.
2. Move the keyboard up and down in octaves, and put it back.
3. Use the Pitch and Mod controls, and leave them somewhere safe.

## Sources consulted

| Source | Where it is used |
|---|---|
| Owner's Manual `eng07` | **p.2** items 9 (OCTAVE), 4 (Part Select); **p.3** item 17 ([Pitch] wheel, [Mod] wheel); **p.6** *Changing the Keyboard Range in Octave Units* and *Applying Pitch Bend or Vibrato*; **p.8** the envelope explanation (A/D/S/R) behind the short/long step; **p.13** KEY TOUCH (Velo Curv) — referenced only as "adjustable in the system settings"; **p.17** Specifications (37 mini keys, with velocity) and the Drums high-register entry |
| Version 1.50 Supplementary Manual — <https://static.roland.com/assets/media/pdf/JD-Xi_Leaflet_V150_e01_W.pdf> | **p.2** *Transpose* — the whole of B05-S11, including the illustrated screen, the semitone step, the middle-C4 note and "will not be saved… return to 0 if you turn off the power" |
| Parameter Guide `e01` | p.12 — Bend Range U/D exists as a per-tone parameter; used only to keep B05 from claiming a fixed bend depth |
| Parameter Guide `e01` | **p.10** Program Edit part parameters — `Mono/Poly (for the Analog part, Mono only)`, the only statement in the corpus about how many notes a part sounds at once |
| `docs/ROLAND-SOURCE-MAP.md` | §7 rows 41 (Octave), 42 (Pitch bend / modulation), 49 (Transpose, 1.50+); §9 the B05 row; §11.2 the shortcut lists' staleness; Q8 (Pitch/Mod wording, open) |

## Per-step reconciliation

| Step | Targets | Mode | Learner-facing factual claims | Support |
|---|---|---|---|---|
| **B05-S01** Choose something to play | `digitalSynth1Button` | `full-plus-inset` | Selecting a part decides what the keys play. | OM p.5 *Choosing a Part to Play*. |
| **B05-S02** Low keys and high keys | `keys` | `full` | Left is lower, right is higher. Some keys can be silent on the Drums part. | The keyboard layout claim is the ordinary meaning of a keyboard and is taught by listening, not asserted as a Roland specification. The Drums caveat is OM p.17's documented entry. |
| **B05-S03** One key, then several | `keys` | `full` | Several keys held together sound thicker than one alone. Some tones play only one note at a time. On the Drums part each key is a separate instrument. | That the JD-Xi can sound several notes at once is Roland's `Mono/Poly` part parameter, PG **p.10**: "choose 'POLY' if you want it to play polyphonically." The same row is the support for the monophonic caveat, and it is unusually exact — Roland heads it `Mono/Poly (for the Analog part, Mono only)`, so at least one part is monophonic by design and any part can be set to MONO. The step therefore says "some sounds" and names none. The Drums claim is OM p.5: "The Drums part lets you play a different instrument on each key." No chord, interval or note-name language appears — the step says "two or three keys", the master plan's own phrasing (§3.3). |
| **B05-S04** Soft and firm | `keys` | `full` | The keys sense how hard you play. Some sounds ignore it. Keyboard feel is adjustable in the system settings. | OM p.17 Specifications: "Keyboard 37 mini keys (with velocity)". That some tones are made to ignore velocity is hedged ("some sounds are deliberately made to…") and is supported by PG's per-tone velocity handling rather than asserted as universal. Keyboard feel: OM p.13 KEY TOUCH (Velo Curv, Curve Offset, Velocity). B05 does **not** take the learner into SYSTEM — see *SYSTEM handling*. |
| **B05-S05** Short and long | `keys` | `full` | Some sounds keep going while you hold and stop when you release; others fade by themselves. This is the envelope. | OM p.8: the envelope diagram and its A/D/S/R definitions — "S: Sustain time — Volume at which the sound will be sustained while you hold down the key", "R: Release time — Time over which the sound decays after you release the key", and decay from maximum to sustain level, which is exactly the "fades even while you hold" case. |
| **B05-S06** Drop an octave | `octaveDownButton` | `full-plus-inset` | Shifts the keyboard down one octave; the button lights while shifted; no effect on the Drums part. | OM p.6: "OCTAVE [Down] [Up] buttons — These shift the keyboard in steps of one octave (maximum ±3 octaves). If the octave is shifted, the OCTAVE [Down][Up] buttons are lit." and "The OCTAVE [Down][Up] buttons don't affect the Drums part." "The JD-Xi has 37 small keys" is OM p.17 Specifications. |
| **B05-S07** Climb back up | `octaveUpButton` | `full-plus-inset` | Up to three octaves in either direction. | OM p.6, "maximum ±3 octaves". "If pressing does nothing you are already at the end of the range" is that maximum, restated. |
| **B05-S08** Reset the octave | `octaveButtons` | `full-plus-inset` | Pressing both together sets the value back to 0. The octave is set per part and is saved in the program. | OM p.6: "Pressing the OCTAVE [Down][Up] buttons simultaneously resets the value to 0." and its MEMO: "The octave setting can be made individually for each part, and is saved in the program." **The wording is deliberately Roland's — "sets the octave to 0", not "puts it back how it was".** See *Recovery scope*. |
| **B05-S09** Bend the pitch | `pitchControl` | `full-plus-inset` | Away from you raises the pitch, toward you lowers it; it returns to centre when released; it affects notes that are sounding. | OM p.6: "[Pitch] wheel — This varies the pitch. Moving the wheel toward yourself lowers the pitch. Moving it away from yourself raises the pitch. When you release your hand from the wheel, it returns to the center." That it acts on sounding notes is the plain meaning of pitch bend and is expressed as an instruction ("hold a key down"), not as a specification. No bend depth is stated — see *Deliberate omissions*. |
| **B05-S10** Add movement, then take it away | `modControl` | `full-plus-inset` | Applies vibrato; fully toward you, no effect is applied; further away increases the effect; it stays where you leave it. | OM p.6: "[Mod] wheel — This applies vibrato. When the wheel is all the way toward yourself, no effect is applied. Moving the wheel away from yourself increases the effect. The wheel does not move from its position when you release your hand." |
| **B05-S11** Shift the whole instrument | `shiftButton`, `octaveUpButton`, `display` | `display-focus` | Shift + OCTAVE transposes in semitone steps. Not saved; returns to 0 at power-off. | v1.50 p.2 *Transpose*: "Shifts the overall pitch of the JD-Xi in semitone steps. 1. Hold down the [Shift] button and press the OCTAVE [Down] [Up] buttons." and "The transpose setting will not be saved. It will return to 0 if you turn off the power." Screen reproduced verbatim — see *Display provenance*. See *Version-dependent content*. |
| **B05-S12** Leave the keyboard where you found it | `octaveButtons`, `modControl` | `full` | Octave and Mod stay where you put them; both have a documented way back. | OM p.6 for both, as above. |

## Display provenance

One screen, at B05-S11, reproduced verbatim from Roland's illustration at v1.50 p.2:

```
< TRANSPOSE +1 >
D1:Ah Super Saw
```

`syntheticDisplay: false`; `displayNote` names the source and the varying fields (the
transpose value, and the part and tone name on the lower line, which are Roland's
example program). The upper line is 16 characters and the lower 15, both inside the
data QA guard. That guard is a guard only and asserts nothing about the display's real
character grid, which remains open (`ROLAND-SOURCE-MAP.md` Q4).

## Version-dependent content

**B05 targets system 1.51 directly, and no step is written as conditional.**

Transpose was added at system version 1.50 (v1.50 p.2), and the pre-reconciliation
`B05-S11` was written defensively around that: its title carried "(version 1.50 or later)",
its `detail` told the learner to skip ahead if their instrument was older, and its
`recoveryHelp` read "nothing happened" as the symptom of an old instrument rather than as a
mistake.

All three are now gone. The master plan (§2) and the reconciliation brief (§5) both settle
the question the old wording was hedging: **this course is built for one known instrument,
the owner's JD-Xi, observed at system 1.51** (`ROLAND-SOURCE-MAP.md` §4.8). Every 1.10 and
1.50 addition is simply present, so a learner-facing firmware branch buys nothing and costs
a beginner a paragraph of doubt in the middle of a step about pitch.

What the reconciliation deliberately did **not** do is delete the evidence. The source
record still says Transpose is a 1.50 addition — that is exactly the sort of fact the brief
says source notes may keep — and `ROLAND-SOURCE-MAP.md` §11 still documents how to
re-derive the applicable feature set for a JD-Xi at another version. The change is to
learner-facing text only.

The step's recovery no longer mentions versions. It offers the two real ways back from a
transpose the learner has lost track of: the opposite OCTAVE button, and switching the
power off, which Roland states returns Transpose to 0.

## Direct-entry safety

**B05 carries no protect-your-work preflight.** It selects no program and no tone, so
it performs no discard-capable transition. Nothing in B05 assumes a particular program,
tone, octave, transpose value or Mod position on entry — B05-S01 selects a part rather
than assuming one, and B05-S12 is written as a check rather than as an undo of a known
starting state.

## Recovery scope

Three things B05 changes persist after the step that changed them, and each is handled
with the documented move and no more:

| What | Documented way back | What B05 does **not** claim |
|---|---|---|
| Octave | Both OCTAVE buttons together → value 0 (OM p.6) | That this restores the program's stored octave. B05 says "sets the octave to 0", which is Roland's own wording. The octave is saved in the program, so its stored value could be anything, and Roland documents no way to read it. |
| Mod | Fully toward you → no effect applied (OM p.6) | That the control is "off" or reset — only that Roland describes that position as applying no effect. |
| Transpose | Shift + the opposite OCTAVE button; and power-off returns it to 0 (v1.50 p.2) | That it is saved anywhere, because Roland states it is not. |

B05-S08's `recoveryHelp` states outright that this does not undo anything else and that
the JD-Xi has no general undo, so no step here can be read as promising one.

## SYSTEM handling

B05-S04 mentions that overall keyboard feel is adjustable, and **deliberately does not
go there**. The KEY TOUCH parameters live in SYSTEM (OM p.13), and system parameters
are saved automatically when you leave the system setting screen (OM p.7, p.13, p.15).
Sending a beginner into SYSTEM to demonstrate keyboard feel would write a setting the
tutorial cannot reliably restore. The learner is pointed at `N01` instead, which visits
SYSTEM for navigation only and presses no Value button.

## Deliberate omissions

- **Bend range** is never stated. It is a per-tone parameter (PG p.12, Bend Range U/D),
  so no fixed semitone figure would be true of every sound.
- **Roland's word "wheel"** is not used in learner-facing copy. Roland's text says wheel
  (OM p.3 item 17, p.6) but the panel legend reads only `Pitch` and `Mod`, and what the
  learner physically sees is unresolved (`ROLAND-SOURCE-MAP.md` Q8). B05 uses the panel
  names, so it is correct whichever way Q8 resolves; the registry labels are neutral for
  the same reason.
- **Polyphony as a number.** B05-S03 has the learner hear that several keys sound together
  and never states a voice count. **None is available to state**: no maximum-polyphony
  figure appears anywhere in the five Roland documents, the Specifications page included.
  An early draft of this row cited "128 voices, OM p.17" — a plausible number for this
  instrument and a fabrication, caught by checking the page. It is recorded here because
  the failure mode is the one this project exists to prevent: a specification that *sounds*
  like it must be in the manual is exactly the kind of claim that gets waved through.
- **`Mono/Poly` as a setting** is not taught. B05 has the learner *hear* that some sounds
  take one note at a time; changing that is a Program Edit parameter (PG p.10) and belongs
  with deliberate sound editing, not with getting comfortable at the keys.
- **Shift + a key** as an alternative transpose gesture (v1.50 p.2, middle C4 = 0) is
  omitted. One gesture is enough for a beginner, and the OCTAVE form is the one that
  reuses buttons B05 has already taught.
- **Note names, scales and keys** are not introduced anywhere, per `DESIGN-RULES.md` §1.
