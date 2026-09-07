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

## 2. Image registry and coordinate system

Since Phase 4C the registry documents the hardware from **two visual sources**, held
in one canonical image registry, `JDXI_HARDWARE_TARGETS.images`. Nothing else in the
application duplicates this metadata — the renderer reads path, size and alt text
from here.

| Image ID | Source | Natural size | Label | Role |
|---|---|---|---|---|
| `top` | `assets/images/JD-Xi.jpg` | **3153 × 1339** | Top view | default image (`defaultImageId: "top"`); the normal visual anchor |
| `rear` | `assets/images/JD-Xi_R.jpg` | **2520 × 371** | Rear panel | owner-supplied repository asset; connector strip, POWER switch, DC IN |

Every target references exactly one image: its optional `imageId`, or the registry
`defaultImageId` when absent/null. The 83 top-view targets carry **no** `imageId` —
the default exists precisely so their data stayed untouched.

All geometry is normalized 0..1 **against the natural dimensions of the image the
target references**, not against a global master:

- `region: { x, y, width, height }` — fractions of that image's width/height
- `zoom` — a crop in the same image's coordinate system
- never stage pixels, never browser pixels, never physical units
- values are stored at 4 decimal places (≈ 0.3 px of the top master, ≈ 0.25 px of the
  rear image at full size — well inside the blur radius of either photograph)

A target visible in no registered image would have `region: null`, and would be marked
`kind: "off-image"` by convention. **There are none, and there have been none since
Phase 4C** — all 99 targets carry a region and none carries that kind (§7, §8). Note
which of the two the renderer actually acts on: it degrades when `region` is absent,
not when `kind` says `off-image`.

The rear asset was validated read-only before use: 2520 × 371, 79,049 bytes, SHA-256
`c041233eb4c1f24f00dd176c621b6b719a0c572ad1a2983ab7e26136074fa868`, complete JPEG
(SOI/EOI intact). It is an owner-supplied repository visual asset; it has not been
established to be a photograph of the owner's own physical unit, and it is treated as
location evidence only — control identity and terminology still come from the Roland
source map.

## 3. Target schema

```
id           permanent internal identifier (never reused, never renumbered)
label        preferred learner-facing wording
panelLegend  what the learner physically sees printed on the instrument (null if nothing)
kind         button | knob | control | section | group | keys | display
             ("off-image" is retained as a legacy/reserved value — see §7 — and is
             used by no target)
imageId      optional image id (§2); absent/null = the registry default image (top)
region       normalized geometry within the referenced image. Every registered target
             has one; null is the reserved no-registered-image case, and null is what
             the renderer degrades on
group        optional parent target id (a child references the same image as its parent)
zoom         optional normalized crop, within the same image, for inset/close-up use
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

### Rear-panel measurement (Phase 4C)

The same method, applied to `assets/images/JD-Xi_R.jpg` at its native 2520 × 371:

1. Verified the asset's dimensions, byte size, hash and JPEG completeness (§2).
2. Rendered gridded, pixel-exact (`image-rendering: pixelated`) crops of the left
   connector area at 3× and 6× with labeled 10 px / 50 px source-pixel gridlines, and
   read the bounding boxes off the grid.
3. Converted to normalized values against 2520 / 371, 4 decimals.
4. Rendered an overlay page placing every rear box as a percent-positioned element over
   the full rear image and inspected it at magnification; the boxes sit on the physical
   slide switch and barrel jack, and the shared zoom frames both together with their
   printed `DC IN` / `POWER` legends.
5. Rendered the rear development fixture in the real application at 1440 × 900,
   1280 × 720, 1000 × 700 and 1920 × 1080 and confirmed the highlight and inset stay
   attached at every size.

Measured values (source px on the rear image → normalized):

| ID | Kind | Group | Panel legend | Source-pixel box (x0,y0 → x1,y1) | Normalized region (x, y, w, h) |
|---|---|---|---|---|---|
| `rearPanel` | section | — | — | 160,206 → 2356,350 | 0.0635, 0.5553, 0.8714, 0.3881 |
| `dcInJack` | control | `rearPanel` | DC IN | 372,254 → 420,312 | 0.1476, 0.6846, 0.0190, 0.1563 |
| `powerSwitch` | control | `rearPanel` | POWER | 476,264 → 532,302 | 0.1889, 0.7116, 0.0222, 0.1024 |

Shared zoom for `dcInJack` and `powerSwitch`: source 300,185 → 600,345 → normalized
`{ x: 0.1190, y: 0.4987, width: 0.1190, height: 0.4313 }` (crop aspect ≈ 1.87:1), framing
both connectors and the legends printed above them.

### Complete rear-panel map (Phase 4C.1)

The remaining rear-panel items documented on Owner's Manual p.3 (items 18–27 plus the
figure's *Cord hook*) were measured with the same gridded-crop method at 4× and
overlay-verified from the committed registry. Every documented rear-panel item now has
a stable target ID; the documented rear panel is **fully mapped visually**. The three
Phase 4C values above were not touched.

| ID | Kind | Group | Panel legend | Source-pixel box (x0,y0 → x1,y1) | Normalized region (x, y, w, h) |
|---|---|---|---|---|---|
| `cordHook` | control | `rearPanel` | — (figure label only) | 198,246 → 306,314 | 0.0786, 0.6631, 0.0429, 0.1833 |
| `usbComputerPort` | control | `rearPanel` | USB COMPUTER | 595,252 → 655,310 | 0.2361, 0.6792, 0.0238, 0.1563 |
| `midiPorts` | group | `rearPanel` | MIDI | 690,222 → 862,330 | 0.2738, 0.5984, 0.0683, 0.2911 |
| `midiOutPort` | control | `midiPorts` | OUT (left socket) | 696,226 → 774,308 | 0.2762, 0.6092, 0.0310, 0.2210 |
| `midiInPort` | control | `midiPorts` | IN (right socket) | 778,226 → 856,308 | 0.3087, 0.6092, 0.0310, 0.2210 |
| `lineGuitarSwitch` | control | `rearPanel` | LINE / GUITAR | 1718,268 → 1754,298 | 0.6817, 0.7224, 0.0143, 0.0809 |
| `inputMonoJack` | control | `rearPanel` | INPUT (MONO) | 1786,248 → 1842,304 | 0.7087, 0.6685, 0.0222, 0.1509 |
| `outputJacks` | group | `rearPanel` | OUTPUT | 1866,228 → 2013,310 | 0.7405, 0.6146, 0.0583, 0.2210 |
| `outputLMonoJack` | control | `outputJacks` | L/MONO | 1874,247 → 1930,304 | 0.7437, 0.6658, 0.0222, 0.1536 |
| `outputRClickOutJack` | control | `outputJacks` | R/CLICK OUT | 1949,247 → 2005,304 | 0.7734, 0.6658, 0.0222, 0.1536 |
| `phonesJack` | control | `rearPanel` | PHONES | 2037,247 → 2093,304 | 0.8083, 0.6658, 0.0222, 0.1536 |
| `groundTerminal` | control | `rearPanel` | ⏚ (ground symbol) | 2143,262 → 2183,304 | 0.8504, 0.7062, 0.0159, 0.1132 |
| `securitySlot` | control | `rearPanel` | — (symbol not legible) | 2258,260 → 2285,302 | 0.8960, 0.7008, 0.0107, 0.1132 |

MIDI OUT is the left-hand socket and IN the right-hand one, read from the `OUT` / `IN`
legends printed beneath them on the rear image.

**Zoom clusters.** Rear targets share contextual crops rather than one crop per port,
so a beginner keeps their bearings; each crop includes the printed legends around the
connectors (all 160 px tall, y 185 → 345):

| Cluster | Members | Source box | Normalized zoom (x, y, w, h) |
|---|---|---|---|
| Power | `cordHook` | 180,185 → 600,345 | 0.0714, 0.4987, 0.1667, 0.4313 |
| Power (Phase 4C, unchanged) | `dcInJack`, `powerSwitch` | 300,185 → 600,345 | 0.1190, 0.4987, 0.1190, 0.4313 |
| Computer / MIDI | `usbComputerPort`, `midiPorts`, `midiInPort`, `midiOutPort` | 570,185 → 890,345 | 0.2262, 0.4987, 0.1270, 0.4313 |
| Input | `lineGuitarSwitch`, `inputMonoJack` | 1660,185 → 1880,345 | 0.6587, 0.4987, 0.0873, 0.4313 |
| Output | `outputJacks`, `outputLMonoJack`, `outputRClickOutJack`, `phonesJack` | 1850,185 → 2110,345 | 0.7341, 0.4987, 0.1032, 0.4313 |
| Utility | `groundTerminal`, `securitySlot` | 2110,185 → 2330,345 | 0.8373, 0.4987, 0.0873, 0.4313 |

The cord hook's crop is the whole power cluster (it lies left of the Phase 4C crop);
`dcInJack`/`powerSwitch` keep their 4C crop unchanged, so a power-cluster step that
lists `cordHook` first frames all three.

`rearPanel` is the recessed connector strip only. The JPEG also shows the case top, the
knob silhouettes and white background at the lower corners; those are not panel
hardware, so the region was measured rather than set to the full image.

The top-view measurement record above was not touched: before and after Phase 4C the
ordered `region`/`zoom` data of all 83 top-view targets was extracted programmatically
and compared byte-for-byte — identical. No top-view control was remeasured.

Measurement/debug scripts and screenshots lived in the session scratchpad and are
**not** committed.

## 6. Registry inventory

99 targets. Hierarchy (children indented under their `group`):

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
                              Keys        Mic / voice      Rear panel (imageId "rear")
                                keys        micJack          rearPanel
                                            autoNoteButton     cordHook
                                                               dcInJack
                                                               powerSwitch
                                                               usbComputerPort
                                                               midiPorts
                                                                 midiOutPort
                                                                 midiInPort
                                                               lineGuitarSwitch
                                                               inputMonoJack
                                                               outputJacks
                                                                 outputLMonoJack
                                                                 outputRClickOutJack
                                                               phonesJack
                                                               groundTerminal
                                                               securitySlot
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
| `masterVolumeKnob` | knob | — | Master Volume | 136,600 → 246,710 | 0.0431, 0.4481, 0.0349, 0.0821 |
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
| `filterSection` | section | — | FILTER | 1443,70 → 1752,530 | 0.4577, 0.0523, 0.0980, 0.3435 |
| `cutoffKnob` | knob | `filterSection` | Cutoff | 1468,156 → 1577,266 | 0.4656, 0.1165, 0.0346, 0.0822 |
| `resonanceKnob` | knob | `filterSection` | Resonance | 1637,156 → 1746,266 | 0.5192, 0.1165, 0.0346, 0.0822 |
| `filterTypeButton` | button | `filterSection` | Type | 1648,419 → 1713,503 | 0.5227, 0.3129, 0.0206, 0.0627 |
| `ampEnvSection` | section | — | AMP/ENV | 1776,70 → 1985,530 | 0.5633, 0.0523, 0.0663, 0.3435 |
| `levelKnob` | knob | `ampEnvSection` | Level | 1830,158 → 1938,264 | 0.5804, 0.1180, 0.0343, 0.0792 |
| `envelopeKnob` | knob | `ampEnvSection` | Envelope | 1828,400 → 1938,513 | 0.5798, 0.2987, 0.0349, 0.0844 |
| `lfoSection` | section | — | LFO | 1998,70 → 2320,530 | 0.6337, 0.0523, 0.1021, 0.3435 |
| `lfoWaveformControl` | knob | `lfoSection` | waveform icons + RND | 2035,155 → 2143,268 | 0.6454, 0.1158, 0.0343, 0.0844 |
| `lfoRateKnob` | knob | `lfoSection` | Rate | 2204,155 → 2312,268 | 0.6990, 0.1158, 0.0343, 0.0844 |
| `lfoDepthKnob` | knob | `lfoSection` | Depth −/+ | 2039,400 → 2149,513 | 0.6467, 0.2987, 0.0349, 0.0844 |
| `lfoDestinationKnob` | knob | `lfoSection` | Destination | 2220,419 → 2313,509 | 0.7041, 0.3129, 0.0295, 0.0672 |
| `effectsSection` | section | — | EFFECTS | 2349,70 → 3040,530 | 0.7450, 0.0523, 0.2192, 0.3435 |
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
| `rearPanel` | section (rear) | — | — | rear 160,206 → 2356,350 | 0.0635, 0.5553, 0.8714, 0.3881 |
| `dcInJack` | control (rear) | `rearPanel` | DC IN | rear 372,254 → 420,312 | 0.1476, 0.6846, 0.0190, 0.1563 |
| `powerSwitch` | control (rear) | `rearPanel` | POWER | rear 476,264 → 532,302 | 0.1889, 0.7116, 0.0222, 0.1024 |

The rows marked *(rear)* are normalized against the 2520 × 371 rear image; every
other row is normalized against the 3153 × 1339 top view. The thirteen Phase 4C.1
rear rows are tabulated in §5 (*Complete rear-panel map*) rather than repeated here. Labels, zoom crops and
per-target notes live in the registry file itself.

## 7. Rear-panel targets (formerly off-image)

`powerSwitch` and `dcInJack` are on the rear panel (OM p.3 item 19 / p.3). Through
Phase 4B they were registered as `kind: "off-image"` with `region: null` because the
only image was a top view — no coordinates were ever fabricated, and their legends
faintly visible along the top edge of the top view were deliberately not used as
stand-ins for the controls.

Phase 4C added the rear image to the registry and measured both controls on it, so
they are now ordinary measurable `control` targets with `imageId: "rear"`, grouped
under the new `rearPanel` section target. Their IDs are unchanged, so any future step
referencing them needs no edit. **Rear-panel targeting is therefore the ordinary
mechanism** — a second registered image plus measured regions — and not a special case.

The `off-image` kind stays in the schema as a **legacy/reserved** value, for a future
target that no registered image can show. **No current target uses it, and no target
has a null region** (§8). It is worth being precise about what it never was: the kind
is a label, not a switch. The renderer's `resolveTarget` returns state `off-image`
when a target has no `region`, whatever its `kind` — so the defensive off-image
rendering path is driven by missing geometry, and it stays in the renderer whether or
not the kind is ever used again. Retiring the kind would not remove that path, and
removing that path is not what retiring the kind would mean.

Phase 4C.1 completed the rear map with the remaining OM p.3 items (§5). What the rear
image does **not** establish: power-on order, voltage/adapter requirements, connection
sequence, grounding practice, or any operating procedure. Those remain
official-document claims for the B01/B02 authoring phase (ROLAND-SOURCE-MAP Q6).

Rendering note: a Step whose measurable targets span both images is refused by the
current renderer with an explicit notice. That is a **renderer** constraint, not a
registry one — the registry happily holds both images, and a lesson simply uses one
Step per image (which is the better pedagogy anyway).

## 8. Verification results

Validated against the committed `js/hardware-targets.js` in a real browser context
(structural checks) and by rendered overlay inspection (visual checks):

| Check | Result |
|---|---|
| Total targets | 99 (83 top + 16 rear) |
| All measurable targets have regions | ✓ (99 regions; 0 off-image nulls) |
| Every region within 0..1, positive width/height, inside its image | ✓ |
| `defaultImageId` resolves; image IDs unique; every image has src/width/height | ✓ |
| Every target `imageId` (explicit or default) resolves | ✓ |
| Every child references the same image as its `group` | ✓ |
| Top-view `region`/`zoom` data numerically identical before/after Phase 4C | ✓ 83/83 |
| All 86 pre-4C.1 targets (top + `rearPanel`/`dcInJack`/`powerSwitch`) numerically identical after 4C.1 | ✓ 86/86 |
| Every rear child inside its group; `midiPorts` ⊃ both MIDI sockets; `outputJacks` ⊃ both outputs | ✓ |
| `powerSwitch`, `dcInJack` resolve to `rear`, no stale `off-image` kind | ✓ |
| Step buttons | ✓ 16/16 individually measured |
| Part Select buttons individually present | ✓ 4/4 |
| Tone vs Program Value distinct | ✓ |
| Rear-panel targets measured on the rear image, not guessed | ✓ |
| Target IDs unique | ✓ |
| All `group` references resolve | ✓ |
| Every child within (≤ 12 px overhang tolerance) its group's box | ✓ |
| Every zoom crop within 0..1 and containing its target's region | ✓ |
| Overlay alignment at 3153 / 1440 / 700 px render widths | ✓ scale-invariant |
| Sound-shaping section boxes contain their own title underline and all children, and do not overlap a neighbour (Phase 5A re-measure) | ✓ 4/4 |
| `masterVolumeKnob` box fully contains the illuminated ring | ✓ 3 px margin on all four sides |

### Phase 5A re-measurement (owner-reported highlight misfit)

Owner review of the first canonical tutorial reported highlight boxes that were
"not lined up" or "too small to envelop the thing". Re-measured against the master
image by column/row luminance profile; the red title underline Roland prints beneath
each section name is the authoritative horizontal delimiter.

| Target | Was | Now | Defect |
|---|---|---|---|
| `filterSection` | 1443,70 → 1830,530 | 1443,70 → **1752**,530 | Right edge ran ~85 px past its own content (ends 1733) and overlapped the AMP/ENV title, so AMP/ENV read as misaligned. |
| `ampEnvSection` | 1790,70 → 1980,530 | **1776**,70 → **1985**,530 | Left edge started 2 px *inside* its own underline (1788) and sat beneath the FILTER overshoot. Now padded 12 px both sides. |
| `lfoSection` | 1998,70 → 2368,**548** | 1998,70 → **2320**,**530** | Right edge ran 71 px past its content (ends 2297); bottom dipped 18 px below the other three sections, crossing the step-button strip. |
| `effectsSection` | **2365**,70 → 3040,530 | **2349**,70 → 3040,530 | Left edge clipped the first 4 px of its underline (starts 2361). The right edge was checked and is correct: it clears the Reverb knob (3028) and stops short of the case edge. |
| `masterVolumeKnob` | 136,596 → 236,712 (100 × 116) | 136,600 → 246,710 (**110 × 110**) | The illuminated ring is 105 × 105 at 139,603. The old box clipped the right of the ring and was not square. |

Each section's shared `zoom` crop was widened or narrowed with its region so the crop
still contains it. `effectsSection`'s right edge and every other B01 target
(`keys`, `partSelectGroup`, `categoryDial`, `toneButtons`, `display`,
`patternSequencerSection`, `stepButtons`, `rearPanel`, `dcInJack`, `powerSwitch`)
were audited by overlay in the same pass and needed no change.

### Phase 5B addition — `masterVolumeKnob` gains a canonical zoom

B02 *Get your first sound* asks the learner to turn Master Volume to a specific end
position (fully left at B02-S03) and then off it by a small amount (B02-S09). Both
are only checkable if the knob's pointer is legible, so the target — which carried
`zoom: null` through Phase 5A — was given a measured crop. **The Phase 5A `region`
above was not touched.**

| Field | Value |
|---|---|
| Source-pixel crop | 110,548 → 278,726 (**168 × 178**) |
| Normalized `zoom` | `0.0349, 0.4093, 0.0533, 0.1329` |
| Measured against | `assets/images/JD-Xi.jpg`, 3153 × 1339 |

What the crop is built around, read off the master image at 4×–5× with a 10 px grid:

| Feature | Source-pixel extent |
|---|---|
| Printed `Master Volume` legend | x 125–263, y 561–575 |
| Illuminated ring (the region's basis) | 105 × 105 at 139,603 |
| `masterVolumeKnob` region | 136,600 → 246,710 |
| Nearest neighbouring control (TEMPO knob ring) | begins at x 300 |

The crop clears the legend and the ring by roughly 15 px on every side and stops at
x 278, twenty-two pixels short of the TEMPO knob, so no neighbouring control is
swallowed. Legend and ring share a horizontal centre near x 194, which the crop's
centre (x 194) matches. Aspect is near-square (168 × 178), in family with the
`display` crop (400 × 410).

Containment check, as required by §8: region 0.0431–0.0780 x / 0.4481–0.5302 y lies
inside zoom 0.0349–0.0882 x / 0.4093–0.5422 y. ✓

B01-S08 keeps `visualMode: "full"` and is unaffected — a target gaining a zoom does
not change any step that does not ask for an inset, and B01's rendering was verified
pixel-identical after the change.

### Phase 6A addition — three control groups gain canonical zooms

`B05 Play with the keys` and `B09 Change the feel` ask the learner to find and use
controls that carried `zoom: null` through every earlier phase. Each is a small
button or lever whose printed legend is unreadable at full-instrument scale, so each
step that names one needs an inset. **No `region` was touched**; only `zoom` was added.

Measured on `assets/images/JD-Xi.jpg` (3153 × 1339) by the §5 method, then rendered as
crops and inspected against the real controls before adoption.

| Target(s) | Source-pixel crop | Normalized `zoom` | Needed by |
|---|---|---|---|
| `tempoSection`, `tempoKnob`, `tapButton` | 270,530 → 545,730 (**275 × 200**) | `0.0856, 0.3958, 0.0872, 0.1494` | B09-S02, B09-S03, B10-S09 |
| `octaveButtons`, `octaveDownButton`, `octaveUpButton` | 540,530 → 760,730 (**220 × 200**) | `0.1713, 0.3958, 0.0698, 0.1494` | B05-S05 – B05-S07, B05-S10, B05-S11, B10-S05 |
| `pitchControl`, `modControl` | 160,860 → 460,1150 (**300 × 290**) | `0.0507, 0.6423, 0.0952, 0.2166` | B05-S08, B05-S09, B05-S11, B10-S05 |

Each crop follows the established convention that **children share their parent
group's crop** (as `filterSection`/`cutoffKnob` and `partSelectGroup`/`drumsButton`
already do), so a step may highlight the group or one member and get the same framing.
`pitchControl` and `modControl` have no parent group but are a documented pair
(OM p.6 describes them together), and share one crop deliberately so a step naming
either shows both — which is what lets B05-S11 check them in one view.

Neighbour clearance, read off the master image, is what fixes each crop's edges:

| Crop | Left edge clears | Right edge clears |
|---|---|---|
| TEMPO | `masterVolumeKnob` region ends x 246; crop starts x 270 | `octaveButtons` region starts x 562; crop ends x 545 |
| OCTAVE | TEMPO section ends x 516; crop starts x 540 | `arpeggioSection` starts x 776; crop ends x 760 |
| Pitch/Mod | case edge; crop starts x 160, control starts x 188 | `keys` region starts x 545; crop ends x 460 |

Every crop contains its own region with margin, and the automated containment check in
`tools/validate-data.js` asserts that for all 99 targets on every run.

Vertically all three sit on the row y 530–730 (the two button/knob rows above the
keys), except Pitch/Mod at y 860–1150, and each includes its printed section legend and
Roland's red title underline — the same framing the FILTER/AMP-ENV/LFO/EFFECTS crops
use, so an inset always tells the learner which section they are looking at.

### Phase 6B addition — the ARPEGGIO section gains a canonical zoom

`N07 Try the arpeggiator` asks the learner to press ARPEGGIO [ON] and [Key Hold],
two small buttons whose printed legends are unreadable at full-instrument scale.
Measured and verified by the same method, in the same pass as the Phase 6A crops, and
adopted only when N07 needed it. **No `region` was touched.**

| Target(s) | Source-pixel crop | Normalized `zoom` | Needed by |
|---|---|---|---|
| `arpeggioSection`, `arpeggioOnButton`, `keyHoldButton` | 757,530 → 987,730 (**230 × 200**) | `0.2400, 0.3958, 0.0729, 0.1494` | N07-S01 – N07-S06, N10 |

Clearance, read off the master image: `octaveButtons` ends at x 742 (15 px left),
`patternSequencerSection` begins at x 1000 and `analogOscSection` at x 998 (13 px and
11 px right), and `analogSynthButton` bottoms out at y 526 against the crop's top edge
at y 530. The crop frames the `ARPEGGIO` legend, its red underline and both buttons,
matching the framing of the TEMPO and OCTAVE crops beside it.

`keys`, `micJack`, `autoNoteButton` and `rearPanel` still carry `zoom: null`. That is
deliberate: no tutorial has yet needed a magnified view of them, and geometry is not
added speculatively. `keys` in particular spans 77% of the image width, so a crop of the
whole row would barely magnify anything.

## 9. What this registry does not decide

- Highlight rendering, leader lines, and the zoom UI (lesson-screen phase).
- Learner-facing wording beyond the recorded `label` values; in particular the
  Pitch/Mod wording question (Q8) stays open and both targets carry neutral labels.
- The boxed-legend hypothesis (Q3) and display character dimensions (Q4).
- What any rear connector *does* or how it is used: the registry records location and
  OM p.3 naming only; USB/MIDI setup, input impedance, grounding cautions and output
  wiring remain source-verified lesson claims.
