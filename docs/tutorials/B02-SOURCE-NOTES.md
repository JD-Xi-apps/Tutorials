# B02 — Get your first sound — source notes

Source reconciliation record for the second canonical tutorial, and the first one
that asks the learner to operate the physical JD-Xi and hear a result. Content lives
in `js/tutorials.js` (`window.JDXI_TUTORIALS.B02`); this file records where every
learner-facing factual statement comes from, per the content-authority rule
(`TUTORIAL-ARCHITECTURE.md` §13, `ROLAND-SOURCE-MAP.md` §2).

| Field | Value |
|---|---|
| Tutorial | **B02 — Get your first sound** (beginner, order 2, 11 steps, ~8 min) |
| Short title | First sound |
| Prerequisites | `["B01"]` — advisory, not a gate (`TUTORIAL-ARCHITECTURE.md` §6) |
| Kind | **Operating procedure.** Connections, power-on order, part selection, first sound, listening level. |
| Authored | 2026-08-30 |

Learning goals as authored:

1. Connect headphones or powered speakers safely.
2. Power the JD-Xi on in the documented order.
3. Choose a playable part and hear a sound from the keys.
4. Set a comfortable listening level.

`estimatedMinutes` is the number **8**, matching B01's numeric `6`. The phase brief
expressed it as "about 8"; the field is a plain minute count and the hedge lives in
how it is presented, not in the data type.

## Sources consulted

### Roland — governs everything the JD-Xi does

| Source | Where it is used |
|---|---|
| Roland JD-Xi Owner's Manual, English edition `eng07` — <https://static.roland.com/assets/media/pdf/JD-Xi_eng07_W.pdf> (retrieved 2026-08-30; PDF page numbers = printed page numbers) | **p.2** item 7 Master Volume, item 4 Part Select, item 2 Display; **p.3** rear-panel items 18 DC IN, 19 [POWER], 24 OUTPUT, 25 PHONES, and the connection-figure caution; **p.4** *Turning On/Off the Power* — the whole power-on order and the protection-circuit interval; **p.5** *Choosing a Part to Play* and the Top screen; **p.17** Troubleshooting, "There is no sound" |
| JD-Xi Version 1.50 Supplementary Manual — <https://static.roland.com/assets/media/pdf/JD-Xi_Leaflet_V150_e01_W.pdf> | p.3 **Startup Program** (`Start Prog`, SYSTEM → GENERAL). The reason B02 promises no particular program or tone |
| `docs/ROLAND-SOURCE-MAP.md` | §4.8 owner's installed system version **1.51**; §7 procedure matrix rows 1 (power on/off), 2 (master volume), 5 (selecting a part), 53 (troubleshooting); §9 the B02 row; Q4 (display dimensions unresolved) |
| `docs/HARDWARE-TARGETS.md` + `js/hardware-targets.js` | canonical target IDs, labels and geometry |
| `assets/images/JD-Xi.jpg`, `assets/images/JD-Xi_R.jpg` | layout observation only — where things are, never what they do |

The Parameter Guide was not needed: no B02 statement depends on program, tone or
effect structure.

### External devices — the owner's listening setup only

These govern **the owner's own equipment**, never JD-Xi behaviour. Each is used only
for what its own manufacturer documents.

| Source | Where it is used |
|---|---|
| Korg Nu:Tekt NTS-2 Owner's Manual — <https://cdn.korg.com/us/support/download/files/f5ddb3476dc7b90ddac5fb1013428a27.pdf> (retrieved 2026-08-30) | p.2 *Part names and functions*, items 5–7: the INPUT / THRU / OUTPUT distinction used in B02-S02's optional note |
| Korg NTS-2 official specifications — <https://www.korg.com/us/products/dj/nts_2/specifications.php> (retrieved 2026-08-30) | Connector sizes, checked only to confirm that **no cable can be prescribed** (see *Deliberate omissions*) |
| PreSonus Eris E5 BT product page — <https://intl.presonus.com/products/eris-e5-bt-studio-monitor> (retrieved 2026-08-30) | Confirms the owner's speakers are **powered** (100 W Class D on board) and take wired input. Used to validate the generic wording only; the model is never named to the learner |

Not consulted, by rule: any third-party tutorial, video, forum or wiki. Amazon and
other retail listings are not procedure authority and were not used.

## Per-step reconciliation

Every learner-facing factual claim, with its source. "Visual" = an observation from a
repository hardware image, not a Roland claim.

| Step | Targets (image) | Mode | Learner-facing factual claims | Support |
|---|---|---|---|---|
| **B02-S01** Start with everything off | `powerSwitch` (rear) | `full-plus-inset` | Turn the JD-Xi and any powered speakers off before connecting. *Detail:* "Roland asks you to turn the volume down and switch every unit off before making any connections." *Why:* "Roland's reason is direct: connecting while the units are powered up risks malfunction and equipment failure." *Recovery:* turn volume down first, then switch off. | OM p.3, caution beneath the connection figure: "To prevent malfunction and equipment failure, always turn down the volume, and turn off all the units before making any connections" — the *why* is that sentence's stated consequence, with no consequence added to it. OM p.4 repeats "Before turning the unit on/off, always be sure to turn the volume down." The volume-down-then-off ordering in the recovery is the same sentence read in order. |
| **B02-S02** Choose how you will listen | `outputJacks`, `phonesJack` (rear) | `full-plus-inset` | Connect one listening path while everything is off. Headphones → PHONES. Powered speakers → OUTPUT jacks. "Roland says to use the L/MONO jack by itself if you are outputting in mono." Optional NTS-2 routing (below). *Why:* connecting before power-up helps avoid unwanted noise and equipment problems. | OM p.3 item 25: "PHONES jack — You can connect a set of headphones here." OM p.3 item 24: "OUTPUT (L/MONO, R/CLICK OUT) jacks — Connect these jacks to your speakers. Use the L/MONO jack if you're outputting in monaural." Roland's own rear-panel figure labels the connected speakers **Amplified Speakers**, which is why "powered speakers" is safe generic wording. The *why* is the OM p.3 caution again. Both targets share the output-cluster zoom, so the inset shows OUTPUT and PHONES side by side and the learner can tell them apart. |
| **B02-S03** Master Volume fully left | `masterVolumeKnob` (top) | `full-plus-inset` | Turn Master Volume all the way to the left. *Why:* "Roland's power-on procedure has you turn Master Volume fully left before the power goes on, so nothing arrives loud." *Recovery:* turn counterclockwise until it stops; no force needed. | OM p.4, power-on step 2: "Turn the [Master Volume] knob on the top panel all the way to the left." Its position **before** step 3 (POWER on) is what makes "before the power goes on" a Roland claim rather than ours. That the control is a knob turned counterclockwise to reach its left end is the ordinary meaning of OM p.2 item 7 "[Master Volume] knob" plus the visible pointer; "it does not need force" is generic care wording, not a Roland claim about this knob's mechanism. |
| **B02-S04** Turn on the JD-Xi | `powerSwitch` (rear) | `full-plus-inset` | Turn on the POWER switch. *Detail:* leave powered speakers off for now — "they come on later, in that order." *Checkpoint:* the display lights up. *Recovery:* switch POWER back off and check the included AC adaptor is connected to the DC IN jack next to it, and to power. | OM p.4, power-on step 3: "Turn on the [POWER] switch located on the rear panel of the JD-Xi", with step 4 ("Switch on power to the connected equipment") after it — that ordering is the whole basis of the detail. OM p.3 item 19: "[POWER] switch — This turns the power on/off (p. 4)." OM p.3 item 18: "DC IN jack — Connect the included AC adaptor here." DC IN being immediately left of POWER is registry-measured and visible in the shared inset. **No adapter, voltage or fault diagnosis is invented** — the recovery only restates OM p.3 item 18. |
| **B02-S05** Wait for ready | `display` (top) | `full-plus-inset` | Wait a few seconds. *Detail:* "Roland states the JD-Xi has a protection circuit, and that a brief interval after switch-on is needed before it operates normally." *Checkpoint:* the display has settled on its normal top screen. | OM p.4, note under power-on step 3: "This unit is equipped with a protection circuit. A brief interval (a few seconds) after turning the unit on is required before it will operate normally." "Top screen" is Roland's own name for the normal screen (OM p.5, *Choosing a Sound (Program)* → "Top screen"). **Nothing is claimed about what the top screen contains** — see *Deliberate omissions*. |
| **B02-S06** Turn on listening equipment | `outputJacks`, `phonesJack` (rear) | `full` | If using powered speakers, turn them on now; with headphones there is nothing to power on. *Detail:* keep the speaker level low at first; anything else in the listening path, such as an NTS-2, counts as connected equipment. *Why:* "Roland's order is the JD-Xi first, then the connected equipment. Powering up in the wrong order risks malfunction or equipment failure." | OM p.4, power-on step 4: "Switch on power to the connected equipment, and raise the volume to an appropriate level" — after step 3. OM p.4 preamble: "If you turn on equipment in the wrong order, you risk causing malfunction or equipment failure." That headphones need no power is a property of headphones, not a Roland claim, and is stated as such. **No NTS-2-specific power order is invented**: the NTS-2 is simply named as connected equipment, which is what OM p.4 step 4 already covers. |
| **B02-S07** Choose Digital Synth 1 | `digitalSynth1Button` (top) | `full-plus-inset` | Press Digital Synth 1. *Detail:* this chooses Digital Synth 1 as the part the keys play. *Why:* the JD-Xi has four parts and the keys play one selected part at a time. *Recovery:* find the Part Select column; Digital Synth 1 is the top one of the four. | OM p.5 *Choosing a Part to Play*: "Press the Part Select button of the part that you want to play", listing [Digital Synth 1] first. OM p.2 item 4: "Part Select (Part Mute) — Here you can select the part that's played by the keyboard." OM p.5 MEMO: "You can't select and perform on multiple parts simultaneously." OM p.4: "A program consists of four parts: Digital Synth 1, Digital Synth 2, Drums, and Analog Synth." That Digital Synth 1 is the topmost of the four buttons is **visual** (registry-measured, and confirmed in the rendered inset). "Digital Synth 1 is a dependable place to start" is a pedagogical choice, not a Roland claim. |
| **B02-S08** Try one key quietly | `keys` (top) | `full` | Press one white key near the middle. *Detail:* you may hear nothing yet, because Master Volume is still all the way down; that is expected. *Recovery:* any white key near the middle is fine; no note names needed. | The silence follows from B02-S03 (OM p.4 step 2) not yet being undone — it is a consequence of the procedure, not an independent claim. "The keys", never bare "Keyboard" (source-map Q7). No note names, octaves or technique are taught (`DESIGN-RULES.md` §1). |
| **B02-S09** Bring the volume up slowly | `masterVolumeKnob` (top) | `full-plus-inset` | Turn Master Volume a little to the right; move it only a small amount for this first check. *Recovery:* if you moved it too far, turn it back left. | OM p.4, power-on step 4: "…and raise the volume to an appropriate level." **No clock position, marking or numeric value is prescribed** — Roland gives none, and the knob carries no printed scale. "A little" and "small amount" are the honest expression of "appropriate level" for a first check. |
| **B02-S10** Hear your first sound | `keys` (top) | `full` | Press the same key again. *Expected sound:* "A synthesizer sound, from your headphones or your speakers." *Recovery:* check the listening connection, speaker power, and that Master Volume is above zero; press Digital Synth 1 once more and try again; if still silent, stop rather than changing other settings. | That a selected Digital Synth part sounds when its keys are played is the plain consequence of OM p.5 *Choosing a Part to Play* plus OM p.4's sound-generator description. The recovery is a re-check of steps already performed in B02 (S02, S06, S09, S07) and introduces nothing new. **No timbre, patch or tone name is promised** — see *Deliberate omissions*. The stop-here instruction is deliberate: see *Local Switch* below. |
| **B02-S11** Comfortable level | `masterVolumeKnob` (top) | `full` | Adjust Master Volume until the sound is comfortable. *Expected sound:* the same sound gets quieter or louder as you move Master Volume. *Why:* "Master Volume sets the level going to both the OUTPUT jacks and the PHONES jack, so it controls what you hear either way." *Recovery:* if it is too loud, turn Master Volume to the left straight away. | OM p.2 item 7: "[Master Volume] knob — Adjusts the volume that is output from the OUTPUT jacks and PHONES jack." That sentence is the *why* almost verbatim, and it is what makes one instruction correct for both listening paths. |

## The two-listening-path exception (B02-S02, and its echo at B02-S06)

`TUTORIAL-ARCHITECTURE.md` §7 requires one action per `instruction`, and the phase
decision is that **B02 stays linear — no branching architecture is added.**

B02-S02 nonetheless presents two mutually exclusive alternatives (headphones *or*
powered speakers). This is recorded as a deliberate, bounded exception:

- both alternatives satisfy **one** goal — *establish one listening path while
  everything is off* — which is a single step of Roland's own procedure (OM p.4
  step 1, "Are your speakers or headphones connected correctly?" — Roland itself
  poses this as one question with two answers);
- the learner performs **only** the option they are using; there is no state to
  track and no path to rejoin;
- nothing downstream branches. B02-S03 through B02-S11 are identical whichever
  option was taken, and B02-S11's *why* (OM p.2 item 7) is what guarantees that:
  Master Volume feeds OUTPUT and PHONES alike.

**B02-S06 is the same exception, not a second one.** Its instruction is conditional
("if you are using powered speakers… if you are using headphones, there is nothing to
power on") because the one Roland step it implements — OM p.4 step 4, *switch on power
to the connected equipment* — is genuinely empty for one of the two paths. Stating
that plainly is safer than leaving a beginner wondering what they missed.

No route, no data field and no renderer behaviour branches. The exception is entirely
in the prose of two steps.

## Optional NTS-2 routing, and the Korg INPUT / THRU / OUTPUT distinction

The exact optional note, as authored inside B02-S02's `detail`:

> Optional: if you want to watch the signal on your NTS-2, put it between the JD-Xi
> and the speakers — JD-Xi audio → NTS-2 INPUT → matching THRU → speakers. Use THRU
> for this, not the NTS-2 function-generator OUTPUT.

Korg's own definitions (NTS-2 Owner's Manual p.2, *Part names and functions*):

| Jack | Korg's description | Consequence for B02 |
|---|---|---|
| **INPUT 1, 2** | "Connect a stereo (or mono) mini cable here to input the signal you wish to measure. This lets you monitor the audio output from your musical instrument or input a CV signal." | This is where the JD-Xi's audio arrives. |
| **THRU 1, 2** | "Used as a thru out for the signal input from the INPUT 1 and 2 jacks." | This is the only jack that passes the JD-Xi's audio onward to the speakers. |
| **OUTPUT 1, 2** | "Outputs the function generator signal. Connect these jacks to your device with monaural mini plugs." | **Not a passthrough.** It carries the NTS-2's own generated signal. Teaching it as the route to the speakers would send the learner's generator output to their monitors instead of their instrument. |

The note is optional in three ways, all deliberate: it is the last sentence of a
`detail` (progressive disclosure, never the `instruction`); it is prefixed
"Optional"; and the step's `checkpoint` and `recoveryHelp` never mention the NTS-2, so
a learner without one is never measured against it. B02-S06's `detail` mentions the
NTS-2 only to fold it into OM p.4's existing category of "connected equipment" — it
does **not** invent an NTS-2-versus-monitor power order, because no official source
establishes one.

## PreSonus — used only to validate generic wording

The owner's speakers are a PreSonus Eris E5 BT pair. The official product page
confirms they are **powered** (on-board "100W (50W/side) Class D amplification") and
that their wired inputs are "Two – Balanced ¼″ TRS", "Two – Unbalanced RCA" and "One –
Stereo 1/8″".

That fact is used for exactly one thing: confirming that **"powered speakers"** is
accurate generic wording for this owner's setup, and that connecting the JD-Xi's
OUTPUT jacks to them is a real wired path. The model is never named in learner copy,
no PreSonus control setting is prescribed, and the Bluetooth input is not taught —
B02's audio path is the JD-Xi's OUTPUT jacks, per OM p.3 item 24.

## Deliberate omissions

- **No exact startup program, tone or timbre is promised.** The owner's instrument is
  at system version **1.51** (source-map §4.8), which includes the 1.50 addition
  **Startup Program** (`Start Prog` under SYSTEM → GENERAL, v1.50 p.3). What the
  JD-Xi boots into is therefore a stored setting that can vary. B02's success
  condition is generic: *the selected Digital Synth 1 part produces an audible synth
  sound.* No step selects a named factory program or tone to make the result
  predictable — that would be B03's job, and doing it here would quietly turn B02
  into a sound-selection tutorial.
- **No display contents are claimed.** B02-S05 says only that the display "has settled
  on its normal top screen". No `expectedDisplay` is authored on any step: the real
  character grid is unresolved (source-map **Q4**), and Startup Program means the
  values shown cannot be predicted. `display-focus` is deliberately not used.
- **No LED or indicator state is claimed at B02-S07.** Roland documents lit indicators
  for the category dial and the Analog Synth oscillator (OM p.5) but states nothing
  about the Part Select buttons' own illumination, so the checkpoint is behavioural
  ("You have pressed Digital Synth 1"), not visual.
- **Local Switch is deliberately not troubleshot in B02.** OM p.17 lists it as *the*
  documented cause of "There is no sound", and it is recorded here so the omission is
  visible rather than accidental. Acting on it means entering SYSTEM settings, which
  a complete beginner at their first sound must not be sent into. B02-S10's recovery
  therefore re-checks only what B02 itself established and then **stops**, with a
  forward pointer ("a later tutorial covers what else can silence the keys"). The
  architecture assigns that work to **N10 *Getting unstuck*** (source-map §7 row 53,
  §9). The term "Local Switch" does not appear in learner copy.
- **No cable is mandated, and cable shopping is not part of the tutorial.** The
  Owner's Manual specification table (OM p.17) does not state the JD-Xi's connector
  sizes, and Korg's specifications give the NTS-2 as "Inputs: 3.5mm Stereo x2 …
  Through Output: 3.5mm Stereo x2". Since the two ends are not established as
  matching by any single authority, connector compatibility is **not** verified and
  no specific cable or adaptor is prescribed. B02 teaches routing — which jack to
  which jack — and stops there.
- **Bluetooth is never taught as the JD-Xi's audio-output path.** The owner's speakers
  have it; the JD-Xi's documented audio outputs are the OUTPUT jacks and the PHONES
  jack (OM p.3 items 24–25, OM p.2 item 7). Bluetooth is not mentioned at all.
- **Power-off is not taught.** OM p.4 documents *Turning Off the Power*, and its
  step 1 asks whether created sounds or patterns have been saved. B02 creates nothing
  and saves nothing, and a save-aware shutdown lesson belongs with saving (N09).
  B02 teaches power-on only.
- **No menu navigation, no sound editing, no music theory, no memorisation request.**

## Visual-mode choices

| Step | Mode | Reason |
|---|---|---|
| S01, S04 | `full-plus-inset` | `powerSwitch` is a small slide switch on a 2520 × 371 strip; the shared power-cluster zoom frames DC IN and POWER together, which S04's recovery help relies on. |
| S02 | `full-plus-inset` | `outputJacks` and `phonesJack` are three near-identical sockets in a row. Both targets fall inside the output-cluster zoom, so the inset shows them **both**, distinctly toned — the only reliable way a beginner tells OUTPUT from PHONES. |
| S03, S09 | `full-plus-inset` | Uses the Master Volume zoom added in this phase (below). The knob's pointer must be legible for "all the way to the left" and "a little to the right" to be checkable. |
| S05 | `full-plus-inset` | `display` carries a canonical zoom and is small at full-instrument scale. |
| S07 | `full-plus-inset` | The Part Select column is dense; the zoom frames all four buttons with their printed names, which is what the recovery help points at. |
| S06 | `full` | Locating action across the rear panel; the two jacks were already magnified at S02 and nothing new needs reading. |
| S08, S10, S11 | `full` | The keys are the largest region on the instrument, and S11's action repeats a knob the learner has already used twice with magnification. |

No coordinates, image paths or dimensions appear in the tutorial data.

## Registry change made for B02 — Master Volume zoom

`masterVolumeKnob` previously had `zoom: null`, so B01-S08 used `full`. B02 asks the
learner to turn the knob to a specific end position twice, which needs the pointer
legible, so a canonical zoom was measured and added to `js/hardware-targets.js`:

```
zoom: { x: 0.0349, y: 0.4093, width: 0.0533, height: 0.1329 }
```

= **168 × 178 px at (110, 548)** on the 3153 × 1339 top view. It frames the printed
`Master Volume` legend (measured at x 125–263, y 561–575) and the whole illuminated
ring (105 × 105 at 139,603) with roughly 15 px of padding, and stops at x 278 —
short of the TEMPO knob, whose ring begins at x 300. The measurement record is in
`HARDWARE-TARGETS.md`; the corrected Phase 5A `region` was **not** altered.

## Renderer and router work this tutorial required

Neither is B02-specific, and neither hardcodes a tutorial ID:

- **`js/app.js` — `nextInLevel()`.** The tutorial that follows one is the canonical
  tutorial in the same `level` whose `order` is one greater. Resolved from
  `window.JDXI_TUTORIALS` at render time. Development fixtures have no guided
  position and never resolve one.
- **`js/lesson-renderer.js` — final-button label.** The router passes the resolved
  follow-on as `ctx.nextTutorial`; the renderer shows **Next tutorial ›** when it is
  present and **Return home** when it is not. The renderer still performs no catalog
  lookup of its own.

Result today: B01's last step offers **Next tutorial ›** → B02; B02's last step
offers **Return home**, because B03 does not exist. Adding B03 will give B02 a
**Next tutorial ›** button with no edit to B02.

## Ambiguities and open items found while authoring

1. **Roland gives no target volume position.** OM p.4 step 4 says only "raise the
   volume to an appropriate level". B02-S09 and B02-S11 therefore prescribe no clock
   position, marking or number. If a future lesson wants one, it needs hardware
   observation, not a document.
2. **The JD-Xi's connector sizes are not in the Owner's Manual.** The p.17
   specification table lists keyboard, power supply, current draw, dimensions, weight
   and accessories — no I/O connector list. Anything a later tutorial says about
   plugs or cables needs a source this one did not find.
3. **Part Select button illumination is undocumented.** See *Deliberate omissions*.
   Worth confirming on hardware; it would make B02-S07's checkpoint observable rather
   than behavioural.
4. **Source-map Q4 (display character grid) still blocks `display-focus`.** B02-S05
   would be the natural first use of that mode and could not use it.
5. **Q3 (boxed panel legend = Shift function) is untouched by B02.** `Part Select`
   carries a boxed `Mute`, visible in B02-S07's inset, and is deliberately not
   explained.
