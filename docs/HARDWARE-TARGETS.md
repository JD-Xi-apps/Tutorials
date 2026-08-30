# JD-Xi Tutorial Hub — Hardware Target Registry

Human-readable reconciliation of the canonical hardware-target registry. The
machine-readable registry itself is [`js/hardware-targets.js`](../js/hardware-targets.js);
where the two disagree, the JS file is the registry and this document is the defect.

Companion documents:

- [`TUTORIAL-ARCHITECTURE.md`](TUTORIAL-ARCHITECTURE.md) §8 — the target model this
  registry implements.
- [`ROLAND-SOURCE-MAP.md`](ROLAND-SOURCE-MAP.md) §5 — the source reconciliation that
  established every control's existence and Roland name.
- [`DESIGN-RULES.md`](DESIGN-RULES.md) — visual baseline the eventual highlight
  rendering must honour.

## 1. Status

Defined and measured in Phase 4A; **wired in by Phase 4B**. `index.html` now loads
`js/hardware-targets.js`, and the reusable lesson renderer consumes it — normalized
regions become the instructional highlights, and `zoom` metadata drives the inset and
close-up crops generated at runtime from the master image.

This registry remains the canonical single source of hardware geometry: tutorials and
steps reference target IDs, never coordinates, so a corrected target fixes every
tutorial at once. The file is still a plain classic script assigning
`window.JDXI_HARDWARE_TARGETS` — no modules, no fetch, no network — because the
application runs directly from `file://`. It stays data-only; the renderer holds all
behaviour.

This registry supersedes the fourteen-ID placeholder list that architecture §8
carried; that list was proven too coarse by the source reconciliation
(ROLAND-SOURCE-MAP §5.2, Q5).

## 2. Coordinate system

All geometry is normalized 0..1 against the authoritative top-view master image:

- `assets/images/JD-Xi.jpg`, **3153 × 1339** (verified with `sips` before measuring)
- `region: { x, y, width, height }` — fractions of image width/height
- never stage pixels, never browser pixels, never physical units
- values are stored at 4 decimal places (≈ 0.3 px of the master at full size —
  well inside the blur radius of the photograph, so repeated rendering cannot drift)

A target that is not visible in the top-view master has `region: null` and
`kind: "off-image"` — see §7.

## 3. Target schema

```
id           permanent internal identifier (never reused, never renumbered)
label        preferred learner-facing wording
panelLegend  what the learner physically sees printed on the instrument (null if nothing)
kind         button | knob | control | section | group | keys | display | off-image
region       normalized geometry, or null for off-image targets
group        optional parent target id
zoom         optional normalized crop for later lesson inset use
notes        concise implementation information, not lesson prose
```

`section` is a labeled physical area of the panel (FILTER, ARPEGGIO…); `group` is a
set of like controls that share a legend (Cursor pair, the sixteen step buttons…).
Both are highlightable targets in their own right, distinct from their children: a
lesson highlights the group while introducing the panel, then one exact control when
asking for a press.

## 4. Precision policy

Regions are **instructional hit/highlight boxes, not forensic object-detection
boxes**:

- an individual button/knob region is tight enough that a beginner cannot mistake
  the target; a few pixels of padding around the physical control is acceptable;
- a region never includes a neighboring control unless the target is deliberately a
  group/section;
- section regions may encompass the whole labeled section, including its printed
  legends and indicator LEDs;
- no precision is claimed beyond what the photograph supports — knob rings glow and
  bleed, so edges are placed on the physical ring, not the glow.

## 5. Measurement method

Repeatable, and repeated until the overlay was clean:

1. Verified `assets/images/JD-Xi.jpg` natural dimensions = 3153 × 1339.
2. Generated grid-overlaid crops of the master (Python/Pillow script, scratch only):
   every panel area rendered at 2–3× with labeled source-pixel gridlines every 20 px,
   and pixel bounding boxes read off against the grid.
3. The sixteen step buttons were additionally located by a brightness-profile scan
   across the button row (columns y 630–680): the inter-button tray gaps produce a
   strictly periodic signal, and a linear fit gives centers at
   **x = 1613.6 + 91.2·(n−1)** px, matching the visually read boxes at both ends of
   the row. Each button box is that center ± 34 px, y 616–690.
4. Pixel boxes converted to normalized values (ratios of 3153 / 1339, 4 decimals).
5. A verification overlay page rendered every region as a percent-positioned box over
   the master image; screenshots at full size were inspected area-by-area at
   magnification against the real controls. Two systematic errors were found and
   fixed this way (the AMP/ENV knob column was ~60 px right of true; the EFFECTS
   knobs are larger than the FILTER knobs and their first-pass boxes clipped them).
6. Overlay re-rendered and inspected at 3153, 1440 and 700 px viewport widths to
   prove attachment is scale-invariant (all geometry is percentage-based, so a match
   at one size holds at all sizes; the multi-size renders demonstrate it).
7. A browser-side validation of the committed `js/hardware-targets.js` (loaded
   exactly as the app one day will, via a classic `<script src>` from `file://`)
   checked every structural invariant in §8.

Measurement/debug scripts and screenshots lived in the session scratchpad and are
**not** committed.

## 6. Registry inventory

85 targets. Hierarchy (children indented under their `group`):

```
Display / navigation          Sound shaping
  display                       filterSection
  menuWriteButton                 cutoffKnob
  cursorButtons                   resonanceKnob
    cursorLeftButton              filterTypeButton
    cursorRightButton           ampEnvSection
  programValueButtons             levelKnob
    programValueMinusButton       envelopeKnob
    programValuePlusButton      lfoSection
  enterButton                     lfoWaveformControl
  exitButton                      lfoRateKnob
  shiftButton                     lfoDepthKnob
                                  lfoDestinationKnob
Tone selection                  effectsSection
  toneButtons                     effectsOnOffButton
    toneMinusButton               effect1Knob
    tonePlusButton                effect1TypeButton
  categoryDial                    effect2Knob
                                  effect2TypeButton
Part Select                       delayKnob
  partSelectGroup                 reverbKnob
    digitalSynth1Button
    digitalSynth2Button         Analog Synth oscillator
    drumsButton                   analogOscSection
    analogSynthButton               oscillatorButton
                                    subOscButton
Performance                         pulseWidthKnob
  masterVolumeKnob
  tempoSection                Pattern sequencer (transport)
    tempoKnob                   patternSequencerSection
    tapButton                     realTimeRecButton
  octaveButtons                   stepRecButton
    octaveDownButton              eraseButton
    octaveUpButton                playStopButton
  pitchControl
  modControl                  Step / Favorite row
                                favoritePatternRow
Arpeggiator                       favoriteButton
  arpeggioSection                 stepButtons
    arpeggioOnButton                stepButton01 … stepButton16
    keyHoldButton
                              Keys        Mic / voice      Rear (off-image)
                                keys        micJack          powerSwitch
                                            autoNoteButton   dcInJack
```

Structural notes:

- **`patternSequencerSection` contains only the four transport/record buttons.** The
  [01]–[16] step buttons are deliberately *not* its children: on the panel they sit
  in the separate row Roland calls *Favorite/Pattern Sequencer* (OM p.3 item 16),
  modeled here as `favoritePatternRow` → `favoriteButton` + `stepButtons` →
  `stepButton01..16`. Grouping them under the labeled PATTERN SEQUENCER section
  would teach a beginner a location that is false on the hardware.
- Tone (−/+) and Program Value (−/+) are fully distinct targets; they are the
  likeliest beginner mix-up on the panel (source map §5.1).
- `categoryDial`'s region is the physical dial only; its zoom frames the whole
  category ring with its printed names, including the Keyboard position — see the
  terminology decision in ROLAND-SOURCE-MAP Q7.

### Measured values

| ID | Kind | Group | Panel legend | Source-pixel box (x0,y0 → x1,y1) | Normalized region (x, y, w, h) |
|---|---|---|---|---|---|
| `display` | display | — | — | 407,177 → 731,261 | 0.1291, 0.1322, 0.1028, 0.0627 |
| `menuWriteButton` | button | — | Menu / Write (Write boxed) | 402,470 → 452,522 | 0.1275, 0.3510, 0.0159, 0.0388 |
| `cursorButtons` | group | — | ◄ Cursor ► | 400,340 → 556,432 | 0.1269, 0.2539, 0.0495, 0.0687 |
| `cursorLeftButton` | button | `cursorButtons` | ◄ | 404,373 → 456,427 | 0.1281, 0.2786, 0.0165, 0.0403 |
| `cursorRightButton` | button | `cursorButtons` | ► | 498,373 → 550,427 | 0.1579, 0.2786, 0.0165, 0.0403 |
| `programValueButtons` | group | — | Program (Pattern) − Value + | 583,315 → 740,432 | 0.1849, 0.2353, 0.0498, 0.0874 |
| `programValueMinusButton` | button | `programValueButtons` | − | 586,373 → 638,427 | 0.1859, 0.2786, 0.0165, 0.0403 |
| `programValuePlusButton` | button | `programValueButtons` | + | 680,373 → 732,427 | 0.2157, 0.2786, 0.0165, 0.0403 |
| `enterButton` | button | — | Enter | 588,470 → 638,523 | 0.1865, 0.3510, 0.0159, 0.0396 |
| `exitButton` | button | — | Exit | 497,470 → 549,523 | 0.1576, 0.3510, 0.0165, 0.0396 |
| `shiftButton` | button | — | Shift (boxed) | 682,470 → 734,523 | 0.2163, 0.3510, 0.0165, 0.0396 |
| `toneButtons` | group | — | − Tone + | 970,292 → 1118,378 | 0.3076, 0.2181, 0.0469, 0.0642 |
| `toneMinusButton` | button | `toneButtons` | − | 975,322 → 1027,375 | 0.3092, 0.2405, 0.0165, 0.0396 |
| `tonePlusButton` | button | `toneButtons` | + | 1062,322 → 1114,375 | 0.3368, 0.2405, 0.0165, 0.0396 |
| `categoryDial` | knob | — | Strings/Pad, Brass, Lead, Seq, Bass, … | 1195,182 → 1320,310 | 0.3790, 0.1359, 0.0396, 0.0956 |
| `partSelectGroup` | group | — | Part Select (Mute boxed) | 800,95 → 970,535 | 0.2537, 0.0709, 0.0539, 0.3286 |
| `digitalSynth1Button` | button | `partSelectGroup` | Digital Synth 1 | 884,166 → 951,233 | 0.2804, 0.1240, 0.0212, 0.0500 |
| `digitalSynth2Button` | button | `partSelectGroup` | Digital Synth 2 | 884,257 → 951,323 | 0.2804, 0.1919, 0.0212, 0.0493 |
| `drumsButton` | button | `partSelectGroup` | Drums | 884,357 → 951,422 | 0.2804, 0.2666, 0.0212, 0.0485 |
| `analogSynthButton` | button | `partSelectGroup` | Analog Synth | 885,458 → 952,526 | 0.2807, 0.3420, 0.0212, 0.0508 |
| `masterVolumeKnob` | knob | — | Master Volume | 136,596 → 236,712 | 0.0431, 0.4451, 0.0317, 0.0866 |
| `tempoSection` | section | — | TEMPO | 293,548 → 516,714 | 0.0929, 0.4093, 0.0707, 0.1240 |
| `tempoKnob` | knob | `tempoSection` | — | 299,597 → 397,712 | 0.0948, 0.4459, 0.0311, 0.0859 |
| `tapButton` | button | `tempoSection` | Tap | 436,617 → 510,700 | 0.1383, 0.4608, 0.0235, 0.0620 |
| `octaveButtons` | group | — | OCTAVE Down / Up | 562,548 → 742,703 | 0.1782, 0.4093, 0.0571, 0.1158 |
| `octaveDownButton` | button | `octaveButtons` | Down | 577,617 → 649,697 | 0.1830, 0.4608, 0.0228, 0.0597 |
| `octaveUpButton` | button | `octaveButtons` | Up | 656,617 → 729,697 | 0.2081, 0.4608, 0.0232, 0.0597 |
| `pitchControl` | control | — | Pitch | 188,886 → 262,1122 | 0.0596, 0.6617, 0.0235, 0.1763 |
| `modControl` | control | — | Mod | 353,886 → 430,1122 | 0.1120, 0.6617, 0.0244, 0.1763 |
| `arpeggioSection` | section | — | ARPEGGIO | 776,548 → 962,703 | 0.2461, 0.4093, 0.0590, 0.1158 |
| `arpeggioOnButton` | button | `arpeggioSection` | ON | 794,617 → 867,698 | 0.2518, 0.4608, 0.0232, 0.0605 |
| `keyHoldButton` | button | `arpeggioSection` | Key Hold | 874,617 → 948,698 | 0.2772, 0.4608, 0.0235, 0.0605 |
| `patternSequencerSection` | section | — | PATTERN SEQUENCER (Rest boxed under E… | 1000,548 → 1425,726 | 0.3172, 0.4093, 0.1348, 0.1329 |
| `realTimeRecButton` | button | `patternSequencerSection` | Real Time Rec | 1037,613 → 1119,702 | 0.3289, 0.4578, 0.0260, 0.0665 |
| `stepRecButton` | button | `patternSequencerSection` | Step Rec | 1126,613 → 1210,702 | 0.3571, 0.4578, 0.0266, 0.0665 |
| `eraseButton` | button | `patternSequencerSection` | Erase (Rest boxed beneath) | 1238,616 → 1314,700 | 0.3926, 0.4600, 0.0241, 0.0627 |
| `playStopButton` | button | `patternSequencerSection` | ▶/■ | 1328,613 → 1408,702 | 0.4212, 0.4578, 0.0254, 0.0665 |
| `favoritePatternRow` | section | — | Favorite; 01-16; note-length markings | 1470,545 → 3028,708 | 0.4662, 0.4070, 0.4941, 0.1217 |
| `favoriteButton` | button | `favoritePatternRow` | Favorite | 1482,617 → 1549,696 | 0.4700, 0.4608, 0.0212, 0.0590 |
| `stepButtons` | group | `favoritePatternRow` | 01-16 | 1570,592 → 3024,700 | 0.4979, 0.4421, 0.4611, 0.0807 |
| `stepButton01` | button | `stepButtons` | 01 | 1580,616 → 1648,690 | 0.5011, 0.4600, 0.0216, 0.0553 |
| `stepButton02` | button | `stepButtons` | 02 | 1671,616 → 1739,690 | 0.5300, 0.4600, 0.0216, 0.0553 |
| `stepButton03` | button | `stepButtons` | 03 | 1762,616 → 1830,690 | 0.5588, 0.4600, 0.0216, 0.0553 |
| `stepButton04` | button | `stepButtons` | 04 | 1853,616 → 1921,690 | 0.5877, 0.4600, 0.0216, 0.0553 |
| `stepButton05` | button | `stepButtons` | 05 | 1944,616 → 2012,690 | 0.6166, 0.4600, 0.0216, 0.0553 |
| `stepButton06` | button | `stepButtons` | 06 | 2036,616 → 2104,690 | 0.6457, 0.4600, 0.0216, 0.0553 |
| `stepButton07` | button | `stepButtons` | 07 | 2127,616 → 2195,690 | 0.6746, 0.4600, 0.0216, 0.0553 |
| `stepButton08` | button | `stepButtons` | 08 | 2218,616 → 2286,690 | 0.7035, 0.4600, 0.0216, 0.0553 |
| `stepButton09` | button | `stepButtons` | 09 | 2309,616 → 2377,690 | 0.7323, 0.4600, 0.0216, 0.0553 |
| `stepButton10` | button | `stepButtons` | 10 | 2400,616 → 2468,690 | 0.7612, 0.4600, 0.0216, 0.0553 |
| `stepButton11` | button | `stepButtons` | 11 | 2492,616 → 2560,690 | 0.7904, 0.4600, 0.0216, 0.0553 |
| `stepButton12` | button | `stepButtons` | 12 | 2583,616 → 2651,690 | 0.8192, 0.4600, 0.0216, 0.0553 |
| `stepButton13` | button | `stepButtons` | 13 | 2674,616 → 2742,690 | 0.8481, 0.4600, 0.0216, 0.0553 |
| `stepButton14` | button | `stepButtons` | 14 | 2765,616 → 2833,690 | 0.8769, 0.4600, 0.0216, 0.0553 |
| `stepButton15` | button | `stepButtons` | 15 | 2856,616 → 2924,690 | 0.9058, 0.4600, 0.0216, 0.0553 |
| `stepButton16` | button | `stepButtons` | 16 | 2948,616 → 3016,690 | 0.9350, 0.4600, 0.0216, 0.0553 |
| `filterSection` | section | — | FILTER | 1443,70 → 1830,530 | 0.4577, 0.0523, 0.1227, 0.3435 |
| `cutoffKnob` | knob | `filterSection` | Cutoff | 1468,156 → 1577,266 | 0.4656, 0.1165, 0.0346, 0.0822 |
| `resonanceKnob` | knob | `filterSection` | Resonance | 1637,156 → 1746,266 | 0.5192, 0.1165, 0.0346, 0.0822 |
| `filterTypeButton` | button | `filterSection` | Type | 1648,419 → 1713,503 | 0.5227, 0.3129, 0.0206, 0.0627 |
| `ampEnvSection` | section | — | AMP/ENV | 1790,70 → 1980,530 | 0.5677, 0.0523, 0.0603, 0.3435 |
| `levelKnob` | knob | `ampEnvSection` | Level | 1830,158 → 1938,264 | 0.5804, 0.1180, 0.0343, 0.0792 |
| `envelopeKnob` | knob | `ampEnvSection` | Envelope | 1828,400 → 1938,513 | 0.5798, 0.2987, 0.0349, 0.0844 |
| `lfoSection` | section | — | LFO | 1998,70 → 2368,548 | 0.6337, 0.0523, 0.1173, 0.3570 |
| `lfoWaveformControl` | knob | `lfoSection` | waveform icons + RND | 2035,155 → 2143,268 | 0.6454, 0.1158, 0.0343, 0.0844 |
| `lfoRateKnob` | knob | `lfoSection` | Rate | 2204,155 → 2312,268 | 0.6990, 0.1158, 0.0343, 0.0844 |
| `lfoDepthKnob` | knob | `lfoSection` | Depth −/+ | 2039,400 → 2149,513 | 0.6467, 0.2987, 0.0349, 0.0844 |
| `lfoDestinationKnob` | knob | `lfoSection` | Destination | 2220,419 → 2313,509 | 0.7041, 0.3129, 0.0295, 0.0672 |
| `effectsSection` | section | — | EFFECTS | 2365,70 → 3040,530 | 0.7501, 0.0523, 0.2141, 0.3435 |
| `effectsOnOffButton` | button | `effectsSection` | Effects On/Off | 2368,268 → 2444,344 | 0.7510, 0.2001, 0.0241, 0.0568 |
| `effect1Knob` | knob | `effectsSection` | Effect 1 | 2480,150 → 2592,262 | 0.7866, 0.1120, 0.0355, 0.0836 |
| `effect1TypeButton` | button | `effectsSection` | Type | 2495,423 → 2568,503 | 0.7913, 0.3159, 0.0232, 0.0597 |
| `effect2Knob` | knob | `effectsSection` | Effect 2 | 2625,150 → 2735,262 | 0.8325, 0.1120, 0.0349, 0.0836 |
| `effect2TypeButton` | button | `effectsSection` | Type | 2636,423 → 2710,503 | 0.8360, 0.3159, 0.0235, 0.0597 |
| `delayKnob` | knob | `effectsSection` | Delay | 2762,150 → 2880,262 | 0.8760, 0.1120, 0.0374, 0.0836 |
| `reverbKnob` | knob | `effectsSection` | Reverb | 2902,150 → 3028,262 | 0.9204, 0.1120, 0.0400, 0.0836 |
| `analogOscSection` | section | — | Analog Synth ▷; Oscillator; Sub OSC; … | 998,388 → 1408,556 | 0.3165, 0.2898, 0.1300, 0.1255 |
| `oscillatorButton` | button | `analogOscSection` | Oscillator | 1126,455 → 1196,526 | 0.3571, 0.3398, 0.0222, 0.0530 |
| `subOscButton` | button | `analogOscSection` | Sub OSC | 1226,453 → 1298,529 | 0.3888, 0.3383, 0.0228, 0.0568 |
| `pulseWidthKnob` | knob | `analogOscSection` | square-wave icons (blue) | 1325,451 → 1402,532 | 0.4202, 0.3368, 0.0244, 0.0605 |
| `keys` | keys | — | drum instrument names BD1..OTHER2 pri… | 545,788 → 2965,1258 | 0.1729, 0.5885, 0.7675, 0.3510 |
| `micJack` | control | — | MIC (See Owner's Manual) | 118,132 → 262,298 | 0.0374, 0.0986, 0.0457, 0.1240 |
| `autoNoteButton` | button | — | Auto Note | 156,417 → 214,487 | 0.0495, 0.3114, 0.0184, 0.0523 |
| `powerSwitch` | off-image | — | POWER (rear legend printed on the top… | — | — (`region: null`) |
| `dcInJack` | off-image | — | DC IN (rear legend printed on the top… | — | — (`region: null`) |

Labels, zoom crops and per-target notes live in the registry file itself.

## 7. Off-image targets

`powerSwitch` and `dcInJack` are on the rear panel (OM p.3). The authoritative
current master image is a top view and physically cannot show them, so they carry
`kind: "off-image"` and `region: null` — **no coordinates were fabricated**. Their
rear-panel legends happen to be printed along the top edge of the instrument and are
faintly visible in the master, but a legend is not the control, and highlighting it
would point the learner at the wrong physical place.

Before these can be highlighted, a future phase needs a rear-panel photograph or a
dedicated illustrated inset — a product decision recorded as ROLAND-SOURCE-MAP Q6,
which this registry does not resolve. The top-view master image was not changed and
no artificial rear panel was generated.

## 8. Verification results

Validated against the committed `js/hardware-targets.js` in a real browser context
(structural checks) and by rendered overlay inspection (visual checks):

| Check | Result |
|---|---|
| Total targets | 85 |
| All measurable targets have regions | ✓ (83 regions; 2 off-image nulls) |
| Every region within 0..1, positive width/height, inside the image | ✓ |
| Step buttons | ✓ 16/16 individually measured |
| Part Select buttons individually present | ✓ 4/4 |
| Tone vs Program Value distinct | ✓ |
| Rear-panel targets have no fake coordinates | ✓ |
| Target IDs unique | ✓ |
| All `group` references resolve | ✓ |
| Every child within (≤ 12 px overhang tolerance) its group's box | ✓ |
| Every zoom crop within 0..1 and containing its target's region | ✓ |
| Overlay alignment at 3153 / 1440 / 700 px render widths | ✓ scale-invariant |

## 9. What this registry does not decide

- Highlight rendering, leader lines, and the zoom UI (lesson-screen phase).
- Learner-facing wording beyond the recorded `label` values; in particular the
  Pitch/Mod wording question (Q8) stays open and both targets carry neutral labels.
- The boxed-legend hypothesis (Q3), display character dimensions (Q4), and the
  rear-panel presentation (Q6).
