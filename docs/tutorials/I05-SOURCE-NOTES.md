# I05 — LFO and movement — source notes

Source reconciliation record for I05. Content lives in `js/tutorials.js`
(`window.JDXI_TUTORIALS.I05`).

| Field | Value |
|---|---|
| Tutorial | **I05 — LFO and movement** (intermediate, order 5, 10 steps, ~11 min) |
| Short title | LFO and movement |
| Prerequisites | `["I04"]` — advisory, not a gate |
| Kind | **Directed sound design.** The panel LFO, then the LFO group in Tone Edit. |
| Authored | 2026-08-31 |

## Sources consulted

| Source | Where it is used |
|---|---|
| Owner's Manual `eng07` | **p.6** the Mod control applying vibrato; **p.9** *Modulating the Sound (LFO)* — the waveform select knob and its six waveforms, Rate, Depth, the Destination knob and its table (pitch→vibrato, filter→wah, amp→tremolo), and "The LFO effect is not applied to the Drums part" |
| Parameter Guide `e01` | **p.14** the analog tone's LFO group in full — Shape, Rate, Tempo Sync, Sync Note, Fade Time, Key Trigger, Pitch/Filter/Amp Depth, and the Mod Pitch/Filter/Amp depths; **pp.18–19** the digital tone's LFO and MOD LFO groups |
| `docs/ROLAND-SOURCE-MAP.md` | §7 row 20 (LFO); §9 the I05 row |

## Per-step reconciliation

| Step | Targets | Mode | Learner-facing factual claims | Support |
|---|---|---|---|---|
| **I05-S01** Protect any work you want to keep | `display` | `full-plus-inset` | Editing replaces what is loaded; `[Shift]` + `[Enter]` returns to the original sound. | OM p.6, p.9; OM p.5. |
| **I05-S02** Choose a part the LFO can reach | `digitalSynth1Button` | `full-plus-inset` | The LFO effect is not applied to the Drums part. | OM p.9's NOTE, quoted. |
| **I05-S03** The waveform is the shape of the movement | `lfoWaveformControl`, `lfoDepthKnob` | `full-plus-inset` | Roland offers triangle, sine, sawtooth, square, sample-and-hold and random; the lit indicator shows which. | OM p.9: "Waveform select knob — This selects the waveform of the LFO. The waveform whose indicator is lit is selected", with the six-waveform list. The plain descriptions of each shape's motion (glide, jump, step) describe the waveforms Roland names. |
| **I05-S04** Lock the movement to the tempo | `menuWriteButton`, `programValueButtons` | `full-plus-inset` | Tempo Sync makes the rate a note value relative to the tempo; with it off, Rate sets the speed. | PG p.14: "Rate 0–127 — Specifies the LFO rate when LFO Tempo Sync Sw is OFF. Tempo Sync OFF, ON — If this is ON, the LFO rate can be specified as a note value relative to the tempo." The `recoveryHelp` point that Rate stops setting the speed once Tempo Sync is on is those two rows read together. |
| **I05-S05** Choose how fast, in beats | `cursorRightButton`, `programValueButtons` | `full-plus-inset` | Sync Note specifies the rate when Tempo Sync is on; the values are note lengths. | PG p.14: "Sync Note … Specifies the LFO rate when LFO Tempo Sync Sw is ON", with a list of note-value fractions. The specific values are not listed to the learner — see *Deliberate omissions*. |
| **I05-S06** Three destinations, separately | `cursorRightButton`, `programValueButtons` | `full-plus-inset` | Tone Edit has separate Pitch, Filter and Amp depths, so more than one can be used at once; pitch gives vibrato, filter a wah effect, amp tremolo; each runs both ways from zero. | PG p.14: "Pitch Depth −63–+63 — This allows the LFO to modulate the pitch, producing a vibrato effect. Filter Depth … producing a wah effect. Amp Depth … producing a tremolo effect." OM p.9's Destination table names the same three results. That the panel offers one destination and Tone Edit three depths is the two sources read together, and is the reason this tutorial exists. |
| **I05-S07** Fade the movement in | `cursorRightButton`, `programValueButtons` | `full-plus-inset` | Fade Time is the time from playing the tone until the LFO reaches maximum amplitude. | PG p.14, quoted closely. |
| **I05-S08** Restart the cycle on each note | `cursorRightButton`, `programValueButtons` | `full-plus-inset` | With Key Trigger on, the LFO cycle restarts when you press a key. | PG p.14: "Key Trigger OFF, ON — If this is ON, the LFO cycle will be restarted when you press a key." The consequence for repeated notes — identical with it on, caught at different points with it off — is that sentence's plain meaning. |
| **I05-S09** Give the Mod control something to do | `cursorRightButton`, `modControl` | `full-plus-inset` | Separate modulation depths decide how much modulation the Mod control can apply to pitch, filter or amp. | PG p.14: "Mod Pitch (Modulation Pitch Depth) −63–+63 — Specifies the depth to which the modulation wheel (CC01) can apply modulation to the pitch of the tone", and the Filter and Amp equivalents. |
| **I05-S10** Leave it under control | `exitButton`, `modControl` | `full-plus-inset` | With the Mod control fully toward you, no effect is applied. | OM p.6. |

## What this tutorial exists to teach

The panel LFO section has **one** Depth knob and **one** Destination knob, so the learner
can send the LFO to pitch, or the filter, or the amp — one at a time. The Tone Edit LFO
group has **three separate depths**, so all three can run at once, at different amounts
and in either direction.

That difference is the reason I05 goes into the menu at all, and I05-S06's `whyItMatters`
states it plainly: "The panel gives you one destination at a time. This is where you get
all three, which is the whole reason to come in here rather than use the knob."

I05-S09 is the second reason. `B05` taught the Mod control and could only say that it
applies vibrato; whether it does anything at all depends on the tone's modulation depths.
I05 is where the learner finds the setting that decides, which closes a loop opened five
tutorials earlier.

## Direct-entry safety

**I05-S01 is the protect-your-work preflight**, naming the documented revert alongside it
as `I04` does.

I05 assumes nothing about the current LFO settings, the tempo, whether a pattern is
playing (I05-S05 suggests it but does not require it), or where the Mod control is sitting
— and I05-S10 ends by having the learner put it back and hear the sound plain, which is
the same tidy-up `B05-S11` performs.

I05-S02's `recoveryHelp` covers the sound fading on its own, which would make movement
impossible to judge.

## Deliberate omissions

- **The Sync Note value list** (twenty values from 16 through 1/32) is not printed for the
  learner. They are note-value fractions, and reading them requires the note-value
  vocabulary this curriculum does not assume; the step has the learner step through and
  listen instead.
- **MOD LFO** (PG pp.18–19), the digital tone's second LFO, is not taught. One LFO with
  three destinations is already the most structure this level asks a learner to hold.
- **Aftertouch** as a modulation source (PG p.7's diagram) is out of scope; the JD-Xi's
  own keyboard is not documented as sending it.
- **The specific waveform abbreviations** (TRI, SIN, SAW, SQR, S&H, RND) are not listed;
  Roland's own panel shows waveform icons rather than these letters, and the source map
  records that machine-extracted glyphs must not be carried into content.
