# Hardware Explorer — source map

Auditable source mapping for `js/explorer.js`, required by the reconciliation brief §11.

| Field | Value |
|---|---|
| Targets described | **99 of 99** — every entry in the registry |
| Geometry | **None here.** All of it lives in `js/hardware-targets.js` |
| Enforced by | `tools/validate-data.js` — full coverage, no orphan descriptions, a Roland source on every one, major groups restricted to top-level targets, and every view's targets belonging to that view's image |
| Authored | 2026-08-31 |

## What this file adds, and what it must not

The Explorer's geometry comes entirely from the hardware registry, and its highlight drawing
comes entirely from `js/lesson-renderer.js` through the `buildPanel` method added for it. This
file adds only the two things a registry entry cannot carry: **what a control does**, in plain
language, and **where a caution is warranted**.

Three rules govern every description.

**1. Practical, never synthesis theory.** The master plan's own example is the standard —
*"Changes how bright or dull the sound is."* That is the entire description of `cutoffKnob`.
No frequency, no slope, no curve.

**2. Function is never inferred from an internal target name.** The brief says this outright,
and it is the failure mode this file is most exposed to: a target called `lfoDestinationKnob`
invites a confident guess. Every `what` traces to the Roland page in its `source`, and
`tools/validate-data.js` fails any description without one.

**3. Which tutorials teach a control is computed, never authored.** `app.js` derives it from
the catalogue and from Specialty at render time. An authored list would be a second copy of
membership and would go stale on the first renumbering — which is exactly what this
reconciliation did to dozens of steps.

## Source coverage

| Group | Roland source |
|---|---|
| Panel items 1–17 (top panel) | OM **p.2–p.3**, the numbered panel description |
| Part and tone selection | OM **p.5** — *Choosing a Program*, *Choosing a Part to Play*, *Choosing a Tone* for all three part types, *Using Favorite Sounds* |
| Analog oscillator controls | OM **p.5**, *Analog Synth part* — `[Oscillator]`, `[Sub OSC]`, pulse width |
| Performance controls | OM **p.6** — arpeggio, tempo, octave, pitch and mod wheels, portamento shortcut |
| FILTER and AMP/ENV | OM **p.8** |
| LFO and EFFECTS | OM **p.9**, including the effect chain order, the four Effect 1 types, the four Effect 2 types, and the NOTE that the LFO does not affect the Drums part |
| Pattern sequencer, step buttons, part mute, erase | OM **p.10**, **p.11**, **p.12** |
| Menu controls | OM **p.2**, **p.14**, **p.16** |
| Rear panel items 18–27 | OM **p.3**, *Rear Panel* |
| Power procedure caution | OM **p.4** |
| Microphone jack and Auto Note | OM **p.2**, **p.7** |

## The one shared description

`fallbacks` matches by id prefix, and there is exactly one entry: `stepButton`. The sixteen
individual step buttons are one control repeated sixteen times, and sixteen identical
descriptions would be worse than one — they would invite sixteen chances to drift apart. Their
parent `stepButtons` carries the fuller description, including the measure-switching gesture.

## Controls the guided course does not teach

The master plan (§35) wants omitted features to stay **visible**, so that the owner can notice
what v1 left out and say whether they want it later. The Explorer therefore shows every
control, and labels the ones no tutorial or Specialty lesson reaches as *Not covered in the
guided course*.

That set is computed, so it moves with the curriculum. As of this reconciliation it is:

- **`realTimeRecButton`, `lfoWaveformControl`, `pulseWidthKnob`, `levelKnob`,
  `effect2TypeButton`, `analogOscSection`** — controls the curriculum reconciliation
  deliberately removed from tutorials. Realtime Recording is excluded from v1 outright; the
  others were trimmed for scope. All are described here, which is where the brief sends
  material that is correct but out of a tutorial's scope.
- **The rear-panel connectors** — `usbComputerPort`, `midiPorts` and both its ports,
  `lineGuitarSwitch`, `inputMonoJack`, both OUTPUT jacks, `cordHook`, `groundTerminal`,
  `securitySlot`. v1 excludes USB, MIDI, DAW integration and external audio input, so no
  tutorial reaches them. They are documented here because a learner looking at the back of the
  instrument deserves an answer.
- **The individual step buttons** other than those a tutorial names, which are covered by their
  parent.

Two entries carry a caution worth naming, because they are the ones most likely to be met as a
mystery rather than a feature:

- **`inputMonoJack`** — anything connected here disables the MIC jack. This is the documented
  reason a correctly connected microphone produces nothing (OM p.7).
- **`groundTerminal`** — Roland names three places that must never be used as a ground: water
  pipes, gas pipes, and a telephone-line ground or lightning rod. That caution is reproduced
  because omitting it from a description of a grounding terminal would be irresponsible.

## Major groups, not 99 labels

The brief requires that the Explorer not display 99 simultaneous labels. Three things enforce
that:

- `majorGroups` lists only top-level targets — 26 on the top panel, 11 on the rear —
  and `tools/validate-data.js` fails any entry that is a child of another target, with the one
  deliberate exception of `rearPanel`'s children, which *are* the rear panel's major items.
- The panel views are rendered with `labels: false`. The instrument shows **where** things are;
  the list beside it says **what** they are.
- Finer targets are reached by opening their parent, which lists its children, or through the
  *Nearby controls* strip on any control page — so every one of the 99 is reachable without any
  view ever drawing more than its own major groups.
