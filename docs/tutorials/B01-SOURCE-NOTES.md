# B01 — Meet your JD-Xi — source notes

Source reconciliation record for the first canonical tutorial. Content lives in
`js/tutorials.js` (`window.JDXI_TUTORIALS.B01`); this file records where every
learner-facing factual statement comes from, per the content-authority rule
(`TUTORIAL-ARCHITECTURE.md` §13, `ROLAND-SOURCE-MAP.md` §2).

| Field | Value |
|---|---|
| Tutorial | **B01 — Meet your JD-Xi** (beginner, order 1, 10 steps, ~6 min) |
| Kind | Silent visual orientation tour. **B01 contains no operating procedure.** |
| Authored | 2026-08-30 |

## Sources consulted

| Source | Where it is used |
|---|---|
| Roland JD-Xi Owner's Manual, English edition `eng07` — <https://static.roland.com/assets/media/pdf/JD-Xi_eng07_W.pdf> (retrieved 2026-08-30; PDF page numbers = printed page numbers) | OM pp.2–3 top-panel and rear-panel identification; OM p.4 program overview; OM p.5 Part Select and sound-selection terminology; OM pp.8–9 FILTER / AMP/ENV / LFO / EFFECTS; OM p.10 pattern sequencer |
| `docs/ROLAND-SOURCE-MAP.md` | §5 terminology reconciliation (keys vs Keyboard, display never LCD, two −/+ pairs), §7 procedure matrix rows 1, 2, 5, 10, 18–21, 24, Q4–Q7 |
| `docs/HARDWARE-TARGETS.md` + `js/hardware-targets.js` | canonical target IDs and labels; `patternSequencerSection` excludes the [01]–[16] row (OM p.3 item 16) |
| `assets/images/JD-Xi.jpg`, `assets/images/JD-Xi_R.jpg` | layout observation only — where things are, never what they do |

The Parameter Guide was not needed: no B01 statement depends on program or tone
structure beyond OM p.4.

Not consulted, by rule: any third-party tutorial, video, forum or wiki.

## Per-step reconciliation

"Visual" = an observation from a repository hardware image, not a Roland claim.
Statements about what a control *does* are all traced to an OM page.

| Step | Targets (image) | Learner-facing factual statements | Support |
|---|---|---|---|
| **B01-S01** The whole JD-Xi | — (top, default image) | Keys run across the bottom; controls are grouped above them. | Visual (top image); consistent with the OM p.2 top-panel diagram. Recovery help is about the app window, not the hardware. |
| **B01-S02** Find the keys | `keys` (top) | A row of black and white keys, to be played in later tutorials. | Visual; OM p.4 lists the keyboard as part of the controller section. Wording "the keys", never bare "Keyboard" (source-map Q7, PM decision recorded on the `keys` target). No note names, octaves or technique taught. |
| **B01-S03** Find the four Part Select buttons | `partSelectGroup` (top) | Four buttons labeled Digital Synth 1, Digital Synth 2, Drums, Analog Synth. *Why:* they choose which of the JD-Xi's four parts you are working with. | OM p.5 "Choosing a Part to Play" names the four Part Select buttons in that order; OM p.2 item 4 ("select the part that's played by the keyboard"); OM p.4 "A program consists of four parts: Digital Synth 1, Digital Synth 2, Drums, and Analog Synth." Part architecture is not taught further. |
| **B01-S04** Find the sound-selection controls | `categoryDial`, `toneButtons` (top) | These are the Category dial and the Tone −/+ buttons; they are used to choose sounds. | OM p.5 "Choosing a Tone": "Category dial (Category indicator)" and "Tone [-] [+] buttons — Select a tone." The selection procedure is **not** taught. The Program Value −/+ pair is deliberately not mentioned (source-map §5.1, the documented beginner mix-up). |
| **B01-S05** Find the sound-shaping sections | `filterSection`, `ampEnvSection`, `lfoSection`, `effectsSection` (top) | Labeled FILTER, AMP/ENV, LFO, EFFECTS; later tutorials let you hear what they change. *Why:* the main hands-on areas for changing sounds. | Section names: OM p.2 items 12–13, OM p.3 items 14–15. That they change the sound: OM p.8 "Editing the Sound" (FILTER, AMP/ENV), OM p.9 (LFO "modulate", EFFECTS "modify or enhance the sound"). No definition of filter, envelope, LFO or effect is given. |
| **B01-S06** Find the pattern controls | `patternSequencerSection`, `stepButtons` (top) | The Pattern Sequencer controls and the row of buttons numbered 01 through 16. *Why:* later lessons use this area for patterns and beats. | OM p.2 item 11 PATTERN SEQUENCER ("record your keyboard playing … and replay them repeatedly"); OM p.3 item 16 "Favorite/Pattern Sequencer" for the [01]–[16] row; OM p.10. "Beats" is plain-language framing of patterns of recorded playing, not a Roland term. No recording, TR-REC, erase or transport procedure. |
| **B01-S07** Find the display | `display` (top) | The display is where the JD-Xi shows information while you work. | OM p.2 item 2 "Display — Shows various information for the operation." Learner-facing word is "display" (source-map §5.1 `lcdDisplay` row). No menus taught. |
| **B01-S08** Find Master Volume | `masterVolumeKnob` (top) | The Master Volume knob; you will use it in the next tutorial before making your first sound. | OM p.2 item 7 "[Master Volume] knob"; OM p.4 power-on procedure step 2 uses it before power-on (that order is **deferred to B02** and not stated here). |
| **B01-S09** Look at the rear panel | `rearPanel` (rear) | The rear panel is where the rear connections and power controls are located. | OM p.3 "Rear Panel", items 18–27 (DC IN, POWER, USB COMPUTER, MIDI, LINE/GUITAR, INPUT, OUTPUT, PHONES, ground, security slot). No connection category is named individually and no connection procedure is taught. Recovery help notes that the picture shows the back, not the top — visual. |
| **B01-S10** Find the power area | `dcInJack`, `powerSwitch` (rear) | The DC IN jack and POWER switch are on the rear panel. Do not switch or connect anything yet. *Why:* knowing where they are lets B02 focus on one safe action at a time. | OM p.3 item 18 "DC IN jack — Connect the included AC adaptor here", item 19 "[POWER] switch — turns the power on/off (p. 4)". The power-on/off sequence (OM p.4) is **not** stated. |

## Deliberate omissions

- **No operating procedure anywhere in B01.** The learner is never told to press,
  turn, switch, connect or power anything.
- **Power-on order is deferred to B02** (OM p.4: volume fully left, then POWER, then
  connected equipment). B01-S08 and B01-S10 only locate the controls.
- **No `expectedSound` / `expectedDisplay`** on any step: B01 is intentionally a silent
  tour, and `TUTORIAL-ARCHITECTURE.md` §7 makes both optional. Populating them with
  invented cues would violate the content-authority rule.
- No menu navigation, no sound editing, no connections, no music theory, no
  memorisation request.

## Pedagogical exception — B01-S05 uses four hardware targets

`TUTORIAL-ARCHITECTURE.md` §7 says more than two targets is a signal a step is doing
too much. B01-S05 highlights four sections on purpose: the instruction is **one visual
locating action** ("locate the four main sound-shaping sections") whose learning goal
is grouping/orientation — not four sequential hardware actions. Splitting it into four
steps would teach the sections as isolated controls, which is the opposite of B01's
goal. The renderer handles four same-image targets without label collisions (verified
at 1440×900, 1600×1000, 1920×1080, 1280×720 and 1000×700).

## Visual-mode choices

| Step | Mode | Reason |
|---|---|---|
| S03, S07, S10 | `full-plus-inset` | The target carries a canonical zoom and is small at full-instrument scale (Part Select column, display, rear power cluster). |
| S08 | `full` | `masterVolumeKnob` has no canonical zoom; the knob is legible at full scale. |
| all others | `full` | The default; nothing needed magnifying. |

No coordinates, image paths or dimensions appear in the tutorial data.
