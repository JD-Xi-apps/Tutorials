# JD-Xi Tutorial Hub — Roland Source Map

Official-source reconciliation for the tutorial system. This document establishes **which
Roland document governs which procedure**, and records what still has to be resolved before
any technical tutorial content can be authored.

Companion documents:

- [`TUTORIAL-ARCHITECTURE.md`](TUTORIAL-ARCHITECTURE.md) — content structure. Its §13
  *Content-authority rule* is what this document discharges.
- [`DESIGN-RULES.md`](DESIGN-RULES.md) — visual and interaction baseline.

## 1. Status and scope

This is **research and documentation only**. It contains no lesson prose, no learner-facing
procedures, no hardware coordinates, and no runtime changes. Nothing in
`index.html`, `css/app.css`, `js/app.js`, or `assets/` was touched.

What this document is *not*: it is not a rewrite of the manuals, and it is not a
substitute for reading them. Its job is to tell a future author **exactly which page to
open** before writing a given step, and to record every place where the official record is
ambiguous, incomplete, or version-dependent.

All sources were retrieved on **2026-08-30**.

Per instruction, **no Roland PDF is committed to this repository.** Only links, document
identifiers, page references, and our own reconciliation notes appear here.

## 2. Source-quality rules

These govern every later authoring phase and are not negotiable per tutorial.

1. **Official Roland documentation is authoritative.** A technical claim in a tutorial must
   trace to a Roland document, by page or section.
2. **Third-party material cannot establish procedure.** Tutorials, videos, forum posts, and
   wikis may later be useful evidence of *where learners get confused* — a genuine input to
   pedagogy — but they may never be the source of a button sequence, a parameter name, a
   menu path, or a save behaviour.
3. **A YouTube video is not a substitute for the manual.** Not even a good one. Not even
   Roland's own, unless it is being cited as marketing copy rather than procedure.
4. **Architecture wording is not evidence.** The working titles in
   `TUTORIAL-ARCHITECTURE.md` §4 and the target IDs in its §8 are implementation
   placeholders chosen before this research. Where they disagree with Roland, Roland wins.
   Several already do — see §6.
5. **Our physical JD-Xi is the final hands-on verification layer, not the first.** It settles
   questions the documents leave open (§12). It does not override a document; if the
   instrument and the manual disagree, that is a finding for the PM, most likely a firmware
   difference.
6. **Plausibility is not verification.** A sequence that has not been traced to a page is a
   defect, not a draft.

## 3. Source precedence

Applied in this order:

1. **Newest applicable supplementary manual governs behaviour it changed.** For any feature
   introduced or altered by a system-program update, the supplementary manual for that
   version is authoritative over older documentation, which simply predates the change.
2. **Owner's Manual** governs basic operation and workflows.
3. **Parameter Guide** governs parameter definitions, deeper structure, detailed behaviour,
   and shortcuts.
4. **MIDI Implementation** governs MIDI-specific behaviour only. It is not a source for
   panel operation.
5. Where two sources cover the same ground and agree, cite the Owner's Manual for the
   workflow and the Parameter Guide for the detail.

**Conflicts are not to be resolved by invention.** Where the official sources genuinely
disagree, or are jointly silent, the item goes to §12 for PM decision. Three such items were
found and are recorded there.

A practical consequence of rule 1: because the Owner's Manual on Roland's site
(edition `eng07`, 2021) does **not** incorporate the Version 1.10 and Version 1.50 additions
(verified — see §11), the newest Owner's Manual is *not* the newest description of the
instrument. This is the single most important fact in this document.

## 4. Official source inventory

Landing page for all of the below:
<https://www.roland.com/us/support/by_product/jd-xi/owners_manuals/>

### 4.1 Owner's Manual

| Field | Value |
|---|---|
| Title | JD-Xi Owner's Manual (English) |
| URL | <https://static.roland.com/assets/media/pdf/JD-Xi_eng07_W.pdf> |
| Document identifier | `eng07` (seventh English edition), from the filename |
| Copyright | © 2015 Roland Corporation |
| PDF produced | 2021-03-30 (PDF metadata) |
| Length | 22 PDF pages; printed page numbers match PDF page numbers 1:1 |
| Applicable system version | Not stated. Content matches baseline (pre-1.10) behaviour — see §11 |
| Retrieved | 2026-08-30 |
| Purpose | Basic operation, panel description, core workflows |
| Scope | Panel/rear-panel legend, power, program & part & tone selection, favourites, arpeggio, mic/vocoder/AutoPitch/Auto Note, FILTER/AMP-ENV/LFO/EFFECTS panel controls, WRITE, pattern sequencer incl. TR-REC / realtime / step recording, SYSTEM settings, menu access, factory reset, backup/restore, shortcut list, troubleshooting, specifications |
| Supersedes / supplements | Superseded **only in part**, by the 1.10 and 1.50 supplements, for the behaviour those introduce |

### 4.2 Parameter Guide

| Field | Value |
|---|---|
| Title | JD-Xi Parameter Guide (English) |
| URL | <https://static.roland.com/assets/media/pdf/JD-Xi_ParameterGuide_e01_W.pdf> |
| Document identifier | `e01` / `01` (printed on the contents page) |
| Copyright | © 2015 Roland Corporation |
| PDF produced | 2015-03-18 (PDF metadata) |
| Length | 51 PDF pages; printed page numbers match PDF page numbers 1:1 |
| Applicable system version | Baseline (1.00/1.02). Predates 1.10 and 1.50 |
| Retrieved | 2026-08-30 |
| Purpose | Full parameter reference and structural explanation |
| Scope | Shortcut list, additional pattern-sequencer explanation, error messages, instrument/tone/effect structure, Program Edit, Analog & Digital tone edit, Drum Kit edit, Effects, AutoPitch/Vocoder, Arpeggio, preset program/tone/drum-kit lists, bank-select mapping |
| Supersedes / supplements | Supplements the Owner's Manual with detail. Does **not** cover 1.10 or 1.50 additions |

### 4.3 MIDI Implementation

| Field | Value |
|---|---|
| Title | JD-Xi MIDI Implementation (English) |
| URL | <https://static.roland.com/assets/media/pdf/JD-Xi_MIDI_Imple_e01_W.pdf> |
| Document identifier | `e01`; front page states **Model: JD-Xi, Date: May 1, 2015, Version: 1.00** |
| PDF produced | 2015-05-18 (PDF metadata) |
| Length | 18 pages |
| Retrieved | 2026-08-30 |
| Purpose | MIDI message reference |
| Scope | Reception/transmission for the sound-source and sequencer sections, control-change map, SysEx, bank-select → program mapping, MIDI implementation chart |
| Supersedes / supplements | Independent. MIDI-only |

Note: the document's own "Version: 1.00" is the **document** version, not a firmware
constraint. Its bank-select table on p.1 already lists Extra Bank programs S–Z, which are a
Version 1.10 feature — so this document is already partly ahead of the Owner's Manual.

### 4.4 Version 1.10 Supplementary Manual

| Field | Value |
|---|---|
| Title | JD-Xi Version 1.10 Supplementary Manual (English) |
| URL | <https://static.roland.com/assets/media/pdf/JD-Xi_v110_e01_W.pdf> |
| Document identifier | `e01`; Roland part number `5100047523-01` |
| Copyright | © 2015 Roland Corporation |
| PDF produced | 2015-04-28 (PDF metadata) |
| Length | 2 pages |
| Applicable system version | **1.10** |
| Retrieved | 2026-08-30 |
| Purpose | System-program update procedure + functions added in 1.10 |
| Scope | Version check, update procedure, export of user data to a computer, import via Extra Banks S–Z, erasing recorded knob/wheel movements, temporarily locking program changes |
| Supersedes / supplements | **Supplements and overrides** the Owner's Manual for the behaviour it introduces |

The download is served from a page carrying Roland's end-user licence text. The PDF itself
is publicly hosted at the URL above. It was inspected, not redistributed.

### 4.5 Version 1.50 Supplementary Manual

| Field | Value |
|---|---|
| Title | JD-Xi Version 1.50 Supplementary Manual (English) |
| URL | <https://static.roland.com/assets/media/pdf/JD-Xi_Leaflet_V150_e01_W.pdf> |
| Document identifier | `e01`; Roland part number `5100054910-01` |
| Copyright | © 2016 Roland Corporation |
| PDF produced | 2016-09-20 (PDF metadata) |
| Length | 4 pages |
| Applicable system version | **1.50** |
| Retrieved | 2026-08-30 |
| Purpose | System-program update procedure + functions added in 1.50 |
| Scope | Version check, update procedure, Interactive Chord (Chord Edit), Transpose, Shuffle, Side Chain Compressor, Startup Program |
| Supersedes / supplements | **Supplements and overrides** the Owner's Manual and Parameter Guide for the behaviour it introduces. Newest behaviour-changing document for this instrument |

### 4.6 Currently posted system-program version

Recorded separately, as instructed, because it is a property of Roland's download page and
**not** a property of any particular instrument.

| Field | Value |
|---|---|
| Posted version | **JD-Xi System Program Ver. 1.52** |
| Source | <https://www.roland.com/us/support/by_product/jd-xi/updates_drivers/> → *JD-Xi System Program (Ver.1.52)* |
| Retrieved | 2026-08-30 |
| Roland's stated history | **Ver. 1.52 (Nov 2021)** — version number updated for management-related reasons; **product specifications unaffected**. **Ver. 1.51 (Apr 2017)** — bug fix to the interactive chord function when the original key is set to something other than "C". **Ver. 1.50 (Oct 2016)** — added interactive chord, transpose, shuffle, side-chain compressor, startup program; plus bug fixes. **Ver. 1.10** — user data export/import, erasing recorded knob and wheel movements |

Two consequences:

- **There is no 1.51 or 1.52 supplementary manual, and there should not be.** 1.51 is a bug
  fix and 1.52 is an administrative renumber. The Version 1.50 Supplementary Manual remains
  the newest documentation of changed behaviour.
- **We must not assume the owner's instrument is at 1.52.** A JD-Xi that has never been
  updated is at its shipped version. See §11.

### 4.7 Notation note — do not quote these as Roland's names

Roland's PDFs draw several panel symbols as font glyphs. Machine text extraction renders
them as unrelated Latin letters. Anyone re-extracting these documents will see the same
artefacts, and must not carry them into content:

| Appears in extracted text as | Actually is | Roland's written form |
|---|---|---|
| `[K]` | ◄ | Cursor left button |
| `[J]` | ► | Cursor right button |
| `[s]` | ▶/■ | The play/stop button |
| `0` (mid-sentence) | → | "then" arrow in a procedure |
| `5` (line-leading) | • | bullet |
| `T` `S` `U` `R` `W` (in waveform lists) | waveform icons | sawtooth / triangle / square / sine / sample-and-hold |

Throughout this document the cursor buttons are written **Cursor [◄] [►]** and the transport
button **[▶/■]**.

### 4.8 Owner-observed installed system version

Recorded in its own evidence class: this is **owner-observed hardware evidence**, from
physically checking the instrument's VERSION INFO screen — not a Roland-document claim,
and not a property of Roland's download page (§4.6).

| Field | Value |
|---|---|
| Installed system version | **1.51** |
| Evidence class | Owner-observed on the instrument, 2026-08-30 |
| Consequences | All Version 1.10 additions are available. All Version 1.50 additions are available. The Version 1.51 Interactive Chord bug fix is present. 1.52 is **not** required for tutorial behaviour — Roland states 1.52 did not change specifications (§4.6) |

The tutorial system may therefore target **1.51 behaviour for this owner's
instrument**: every firmware-gated feature in §10–§11 is teachable, and the 1.50
additions need no version precondition *for this instrument*.

The general firmware-precedence rules (§3) and the per-feature version caveats
(§11) are **retained deliberately**: they document how to re-derive the applicable
behaviour set for anyone using another JD-Xi, whose version must still be checked
rather than assumed.

## 5. Hardware terminology reconciliation

The architecture's §8 registry names are checked below against Roland's documentation and
against the panel legend visible in this repository's own master image
(`assets/images/JD-Xi.jpg`).

> **Superseded in Phase 4A:** the fourteen-ID list examined here has been replaced by
> the canonical measured registry — `js/hardware-targets.js`, reconciled in
> [`HARDWARE-TARGETS.md`](HARDWARE-TARGETS.md) — which resolves every gap tabled in
> §5.2. The analysis below is retained as the evidence that drove that registry.

Two evidence classes are kept apart deliberately:

- **Documented** — Roland states the name in a manual. Authoritative.
- **Observed on the master image** — read off the instrument photograph. Good evidence of
  what a learner physically sees, but it is our observation, not a Roland statement. Where
  the two agree, the item is settled. Where only the observation exists, it is flagged.

**No coordinates are defined here.** That remains deferred, per architecture §8.

### 5.1 The fourteen registry IDs

| Internal ID | Exists? | Roland's name (documented) | Establishing source | Panel legend (observed) | Naming note |
|---|---|---|---|---|---|
| `menuWriteButton` | Yes | "[Menu/Write] button" | OM p.2 (Operation §3) | `Menu /` with `Write` in a box | **Roland uses two names for this one button.** The panel-description page says `[Menu/Write]`; the Shortcut List (OM p.16, PG p.2) says `[Shift] + [Menu]`. Both are Roland. Learner-facing copy must pick one and stay with it |
| `cursorButtons` | Yes — a **pair** | "Cursor [◄] [►] buttons — move the cursor left/right" | OM p.2 | `◄ Cursor ►` | Plural ID is correct. Steps will usually address one of the two |
| `valueButtons` | Yes — a **pair** | "Program (Pattern) Value [-] [+] buttons" | OM p.2, p.5 | `Program (Pattern)` over `− Value +` | **ID drops the qualifier the learner actually sees.** The panel says *Program (Pattern)* above these buttons. Worse, there is a **second** −/+ pair on the panel, legended `− Tone +`, which our registry has no target for at all — see 5.2 |
| `enterButton` | Yes | "[Enter] button — confirm a value or execute an operation" | OM p.2 | `Enter` | Matches |
| `exitButton` | Yes | "[Exit] button — returns you to the previous screen" | OM p.2 | `Exit` | Matches |
| `shiftButton` | Yes | "[Shift] button" | OM p.2 | `Shift` (boxed) | Matches |
| `lcdDisplay` | Yes | "**Display** — shows various information for the operation" | OM p.2 (panel item 2) | no legend | Roland calls it the *display* or *the screen*, never "the LCD" — the only "LCD" in the corpus is the SYSTEM parameter `LCD Contrast` (OM p.13). Internal ID is fine; **learner-facing label must be "display"** |
| `partSelect` | Yes — a **group of four buttons** | "Part Select buttons: [Digital Synth 1], [Digital Synth 2], [Drums], [Analog Synth]" | OM p.2 (item 4), p.5 | `Part Select` with `Mute` boxed | **One ID collapses four independently addressable buttons.** A step saying "press the Drums button" cannot highlight the right control. Needs per-button targets under a `partSelect` group |
| `filterSection` | Yes | "FILTER" — contains [Cutoff] knob (with Cutoff indicator), [Type] button, [Resonance] knob | OM p.2 (item 12), p.8 | `FILTER` | Matches |
| `ampEnvSection` | Yes | "AMP/ENV" — contains [Level] knob, [Envelope] knob | OM p.2 (item 13), p.8 | `AMP/ENV` | Roland's form is `AMP/ENV`; our ID reads `ampEnv`. Harmless internally; the learner-facing label is `AMP/ENV` |
| `lfoSection` | Yes | "LFO" — waveform select knob, [Rate], [Depth], [Destination] knobs | OM p.3 (item 14), p.9 | `LFO` | Matches |
| `effectsSection` | Yes | "EFFECTS" — [Effects On/Off] button, [Effect 1] and [Effect 2] knobs each with a [Type] button, [Delay] knob, [Reverb] knob | OM p.3 (item 15), p.9 | `EFFECTS` | Matches. Roland's own casing varies: `[Effects ON/OFF]` (OM p.9) vs `[Effects On/Off]` (PG p.9) |
| `patternSequencer` | Yes — but **narrower than assumed** | "PATTERN SEQUENCER" — [Real Time Rec], [Step Rec], [Erase], [▶/■] | OM p.2 (item 11), p.10 | `PATTERN SEQUENCER`, with `Rest` printed under `Erase` | **The [01]–[16] step buttons are not in this section.** On the panel they are a separate row next to `Favorite`, and OM p.3 calls that row **"Favorite/Pattern Sequencer"** (item 16). TR-REC is performed on buttons this target does not contain — see 5.2 |
| `keyboard` | Yes | 37 mini keys with velocity | OM p.17 (Specifications); drum instrument names printed above each key, OM p.5 | drum legends `BD1 … OTHER2` above the keys | No panel legend reads "keyboard". **Collision risk:** the category dial has a position legended `Keyboard`, which selects a *sound category*, not the keys. A beginner told to "use Keyboard" will look at the wrong thing |

### 5.2 Controls the architecture will need but the registry does not have

Each of these is required by a tutorial already in the canonical set (§7 shows which), and
none has a target ID. This is a registry gap, not a redesign request.

| Suggested ID | Roland's name | Source | Why it is needed |
|---|---|---|---|
| `masterVolumeKnob` | "[Master Volume] knob" | OM p.2 (item 7) | Power-on procedure requires turning it fully left (OM p.4); B02 cannot produce a first sound without it |
| `powerSwitch` | "[POWER] switch" | OM p.3 (item 19) | **Rear panel.** See §12 — the master image is a top view and physically cannot show it |
| `toneButtons` | "Tone [-] [+] buttons" | OM p.5 | The control that actually changes sounds. Sits beside the *Program* Value [-] [+] pair and is the most likely beginner mix-up on the instrument |
| `categoryDial` | "Category dial (Category indicator)" | OM p.5 | How Digital Synth tones are chosen; also the only route to Vocoder/AutoPitch tones |
| `stepButtons` | "[01]–[16] buttons" | OM p.10–p.12 | TR-REC, step recording, favourites, and four `[Menu/Write]`/`[Shift]` shortcuts all address these |
| `favoriteButton` | "[Favorite] button" | OM p.3 (item 16), p.5 | Favourites; also puts the [01]–[16] row into a different mode |
| `tempoSection` | "TEMPO — tempo knob, [Tap] button" | OM p.2 (item 8), p.6 | B09; also the portamento-time control on the Portamento screen (OM p.6) |
| `octaveButtons` | "OCTAVE [Down] [Up] buttons" | OM p.2 (item 9), p.6 | B05; and the Transpose shortcut added in 1.50 |
| `arpeggioButtons` | "ARPEGGIO [ON] button, ARPEGGIO [Key Hold] button" | OM p.2 (item 10), p.6 | N07; [Key Hold] is also the tie entry in step recording (OM p.12) and a documented cause of "notes won't stop" (OM p.17) |
| `pitchModWheels` | "[Pitch] wheel, [Mod] wheel" | OM p.3 (item 17), p.6 | Documented as *wheels*; the panel legends read only `Pitch` and `Mod`. Flagged in §12 |
| `analogOscControls` | "[Oscillator] button (waveform indicator), [Sub OSC] button, pulse width knob" | OM p.5 | Analog Synth tone selection and I01 |
| `micJack` / `autoNoteButton` | "MIC jack", "[Auto Note] button" | OM p.2 (item 1), p.7 | Vocoder / Auto Pitch / Auto Note content — currently an acknowledged content gap in the architecture |

### 5.3 One observation offered only as a hypothesis

On the master image, three legends are drawn inside a white box: `Write` (under `Menu /`),
`Mute` (under `Part Select`), and `Shift` itself. The first two are exactly the functions
Roland documents as `[Shift] +` combinations (OM p.9 WRITE; OM p.10 Part Mute). That is
consistent with boxing marking a Shift function.

**Roland does not state this convention anywhere in the five documents.** It would be a very
useful thing to teach a beginner, so it is worth confirming — but it must not be taught
until it is. `Rest`, printed under `Erase`, is a counterexample worth checking: it is a
step-recording function reached by pressing [Erase] alone (OM p.12), not a Shift function.
Filed in §12.

## 6. Menu navigation — verified behaviour

The owner has asked for unusually detailed menu help, and architecture invariant 6 makes
menu navigation explicit rather than gestural. The controlling risk is teaching a
context-specific shortcut as if it were universal. The two are therefore separated here.

**Not yet lesson prose.** This is the verified substrate a lesson will be written from.

### 6.1 Verified basic behaviour — stated by Roland in general terms

| Behaviour | Source |
|---|---|
| [Menu/Write] accesses the Menu screen | OM p.2, p.14 step 1 |
| On the Menu screen, Cursor [◄] [►] select the item; [Enter] opens its edit screen | OM p.14 steps 1–2 |
| Inside an edit screen, Cursor [◄] [►] select the parameter; Value [-] [+] change its value | OM p.14 step 3; the column headers of every parameter table in PG pp.10–29 |
| [Exit] returns to the previous screen; pressing it several times returns to the top screen | OM p.2; OM p.14 step 4 |
| [Exit] also cancels the operation in progress, in some screens | OM p.2 |
| [Enter] confirms a value or executes an operation | OM p.2 |
| [Shift] is a modifier, used together with other buttons or knobs to reach edit screens | OM p.2 |
| Holding one Value button and pressing the other changes the value rapidly | OM p.16; PG p.2 |
| SYSTEM parameters are saved automatically when you leave the system setting screen — there is no explicit save | OM p.7, p.13, p.15 |

The Menu screen's items, as listed by the Owner's Manual (OM p.14): SYSTEM, Program Edit,
Tone Edit, Effects Edit, Vocoder Edit, AutoPitch Edit, Arpeggio Edit, Pattern Length,
Scale Setting, UTILITY, VERSION INFO. **This list is incomplete on a Version 1.50 or later
instrument** — see §11.

### 6.2 Context-specific behaviour — must never be taught as universal

| Combination | Applies only… | Source |
|---|---|---|
| [Shift] + Cursor [◄] [►] — move between **major menu items** (menu groups) | "in setting screens such as system or edit". Confirmed present in SYSTEM (OM p.13 step 3), Program Edit, Tone Edit and Effects Edit (the `Menu [Shift]+Cursor` column, PG pp.10–27), and used in Effects to move between Effect 1 / Effect 2 / Delay / Reverb (PG p.26). **Absent** from the AutoPitch, Vocoder (PG p.28) and Arpeggio (PG p.29) tables, which are flat parameter lists with no menu column | OM p.16; PG p.2, p.13, p.26, p.28, p.29 |
| [Shift] + Cursor [◄] — delete the character at the cursor | **only when entering a name** | OM p.16; PG p.2 |
| [Shift] + Cursor [►] — insert a space at the cursor | **only when entering a name** | OM p.16; PG p.2 |
| [Shift] + [01]–[16] — switch the Favorite bank | **only in Favorite mode**. Roland's operational description differs slightly: OM p.6 says *long-press* [Shift] until one of [01]–[16] blinks, then press a non-blinking button | OM p.6, p.16; PG p.2 |
| [Shift] + [01]–[04] — switch which measure the [01]–[16] buttons show | **only during pattern playback or recording**; the range becomes [01]–[08] when Scale Setting is 32nd notes | OM p.10, p.16; PG p.2 |
| [Shift] + Value [-] [+] — switch the program bank | on the top screen, selecting programs | OM p.5, p.16 |
| [Shift] held — the top line shows the program name | while held | OM p.5, p.16 |
| [Shift] + [Enter] — switch sounds within a program, or revert to the original sound after editing | after a sound has been switched or edited | OM p.5, p.16 |
| [Shift] + Part Select — mute | while a pattern plays, or any time; repeat to unmute, and multiple parts may be muted at once | OM p.10, p.16 |
| [Shift] + [Erase] — jump to the Pattern Erase screen | anywhere; the screen it opens is destructive (§8.3) | OM p.10, p.16 |
| [Shift] + ARPEGGIO [ON] — jump to the Arpeggio Edit screen | anywhere; the Menu route reaches the same screen | OM p.6, p.16 |
| [Shift] + [Menu/Write] — jump to the WRITE screen | anywhere; this is the only save gesture | OM p.9, p.16 |
| **Long-press** [Menu/Write] — jump to the Portamento screen, where [Tap] toggles portamento and the tempo knob sets portamento time | a distinct gesture from a press, which opens the Menu instead | OM p.6, p.16 |
| [Menu/Write] + [10] — jump to the Pattern Copy screen | anywhere; overwrites on completion (§8.3) | OM p.10, p.16 |
| [Menu/Write] + [16] — send the click from the right side only | anywhere; temporary, cannot be saved, and toggles back with the same combination | OM p.15, p.16 |

Firmware-gated combinations are listed separately in §11.2 — they are not in the Shortcut
List and will not be found by an author who reads only the Owner's Manual.

### 6.3 Display behaviour

| Element | Roland's description | Source |
|---|---|---|
| Top screen | Four fields: program bank + program number; measure–beat; tempo; and `tone number:tone name` on the lower line | OM p.5 |
| Edited sounds | A sound edited for an individual program shows **no tone number** — that absence is the signal that the sound has been changed | OM p.5 |
| Setting screens | Upper line shows the menu group (e.g. `GENERAL`), lower line the parameter and value | OM p.13 |
| Program Edit MAIN | The part being edited is shown at the right of the upper line: `D1` / `D2` / `DR` / `AN` | PG p.10 |
| Name entry | `Name:      [Ent]` on the upper line, the name on the lower | OM p.9 |
| Version check | `VERSION INFO` / `Version 1.02` | v1.10 p.1 |
| Confirmation prompts | **The Yes/No key order is not consistent.** Factory Reset shows `[Ent]:Y [Exit]:N` (OM p.14); the Pattern Length copy prompt shows `[Exit]:N [Ent]:Y` (OM p.10). The keys mean the same thing in both; only the on-screen order differs | OM p.10, p.14 |
| Completion | `Complete !` after a write (OM p.9); `Completed. Turn off power.` after a restore (OM p.14) and after an Extra Bank load (v1.10 p.2) |  |

Roland does not state the display's character dimensions anywhere in the corpus. Every
screen example is two lines of no more than sixteen characters, which strongly suggests
16×2 — but that is our inference, not a Roland claim, and it is filed in §12 because the
`display-focus` visual mode (architecture §9) will need the real figure.

## 7. Procedure-source matrix

The operations the architecture is likely to teach, and the pages that must be read before
writing them. **This is not lesson text and must not be read as a procedure** — the
sequences below are locators, deliberately compressed.

Legend for **Status**: `VERIFIED` — fully documented, ready to author from.
`VERIFIED*` — documented, with a firmware caveat that must be honoured.
`GAP` — the documentation does not cover it. `HW` — needs hands-on confirmation.

| # | Operation | Primary source | Secondary | Firmware caveat | Candidate tutorials | Status | Notes |
|---|---|---|---|---|---|---|---|
| 1 | Power on / off, in order | OM p.4 | OM p.3 (rear panel) | — | B01, B02 | VERIFIED | Volume fully left *before* power-on; power-off asks whether work was saved |
| 2 | Master volume | OM p.2 (item 7), p.4 | — | — | B01, B02 | VERIFIED | No target ID yet (§5.2) |
| 3 | Selecting a Program | OM p.5 | PG p.6, p.43 | — | B03, N02 | VERIFIED | Value [-] [+]; [Shift]+Value switches bank |
| 4 | Program bank structure | OM p.4, p.5 | PG p.6 | 1.10 adds Extra banks S–Z | N02, I09 | VERIFIED* | Preset A–D, user E–H, 64 each. S–Z exist only after 1.10 + an import |
| 5 | Selecting a Part | OM p.5 | PG p.6 | — | B04, N02, N06 | VERIFIED | Four buttons; **only one part is playable at a time** (OM p.5) |
| 6 | Digital Synth 1 | OM p.5 | PG p.7, pp.15–19 | — | B04, N06, I01–I03 | VERIFIED | SuperNATURAL tone: 3 partials × OSC/FILTER/AMP/LFO |
| 7 | Digital Synth 2 | OM p.5 | PG p.7, pp.15–19 | — | B04, N06 | VERIFIED | Same engine as Digital Synth 1 |
| 8 | Analog Synth | OM p.5 | PG p.7, pp.12–14 | — | B04, I01 | VERIFIED | Analog OSC/Sub OSC/FILTER; digital AMP and LFO |
| 9 | Drums | OM p.5 | PG p.7, pp.20–25 | — | B04, N04 | VERIFIED | 26 instruments on keys C2–C♯4; names printed above the keys |
| 10 | Selecting / auditioning tones | OM p.5 | PG pp.44–47 (preset lists) | — | B03, B04 | VERIFIED | Digital: category dial then Tone [-] [+]. Drums and Analog: Tone [-] [+] only |
| 11 | Cursor controls | OM p.2, p.14 | PG p.2 | — | N01 | VERIFIED | See §6 |
| 12 | Value controls | OM p.2, p.5, p.14 | PG p.2 | — | N01 | VERIFIED | Two distinct −/+ pairs exist: Program (Pattern) Value, and Tone |
| 13 | Menu / Write | OM p.2, p.9, p.14 | PG p.2 | — | N01, N09 | VERIFIED | Press = Menu. [Shift]+ = WRITE. Long-press = Portamento |
| 14 | Enter | OM p.2, p.14 | — | 1.50 adds [Enter]-held combinations | N01 | VERIFIED* | |
| 15 | Exit | OM p.2, p.14 | — | — | N01, N10 | VERIFIED | Also the "back out" key for N10 |
| 16 | Shift | OM p.2, p.16 | PG p.2 | 1.50 adds [Shift]+OCTAVE | N01 | VERIFIED* | |
| 17 | Menu navigation | OM p.14 | OM p.13; PG pp.10–29 | 1.50 adds a Chord Edit item | N01 | VERIFIED* | The OM's menu list is incomplete post-1.50 — §11 |
| 18 | Filter controls | OM p.8 | PG p.12 (analog), p.17 (digital), pp.23–24 (drums) | — | B06, I04 | VERIFIED | Digital: LPF/HPF/BPF/PKG. **Analog: LPF only** |
| 19 | AMP / ENV | OM p.8 | PG p.13 (analog), p.18 (digital), pp.24–25 (drums) | — | B06, I04 | VERIFIED | The [Envelope] knob moves A/D/S/R together; separate A/D/S/R is in Tone Edit |
| 20 | LFO | OM p.9 | PG p.14 (analog), p.18–19 (digital) | — | I05 | VERIFIED | **LFO is not applied to the Drums part** (OM p.9) |
| 21 | Effects | OM p.9 | PG pp.8–9 (structure), pp.26–27 (parameters) | 1.50 adds side-chain to Compressor | B07, I06 | VERIFIED* | Fixed chain Effect 1 → Effect 2 → Delay → Reverb; one set of effects per program |
| 22 | Tempo | OM p.6 | PG p.10 (Tempo parameter) | — | B09 | VERIFIED | Knob range 60–240; parameter range 5–300. Tempo is per-program and shared with the pattern |
| 23 | Playing existing patterns | OM p.10 | — | — | B08 | VERIFIED | [▶/■] plays and stops |
| 24 | Pattern Sequencer basics | OM p.10 | PG pp.3–4 | — | B08, N03 | VERIFIED | Up to four measures; Pattern Length and Scale Setting are Menu items |
| 25 | TR-REC | OM p.11 | PG p.3 | — | N03, N04, I08 | VERIFIED | Drums: play a key to choose the instrument, then light steps. Digital/Analog: same method |
| 26 | Realtime recording | OM p.11 | PG p.3 | — | N04, N05, I08 | VERIFIED | Layers onto the existing pattern; knob and wheel moves are recorded; stops at pattern end unless `Loop Rec` is ON |
| 27 | Step recording | OM p.12 | PG p.3 | — | N05, I08 | VERIFIED — supported | [Erase] = rest, ARPEGGIO [Key Hold] = tie, Gate Time 5–100%, Velocity Real or 1–127 |
| 28 | Fourth recording method (hold a step + play) | OM p.12 | PG p.3 | — | N04, I08 | VERIFIED | The only method that **adds** without deleting existing notes |
| 29 | Drum-pattern creation | OM p.11 | PG p.7, pp.20–25 | — | N04 | VERIFIED | |
| 30 | Synth / bass-line creation | OM p.11–12 | PG p.3 | — | N05, I01 | VERIFIED | TR-REC gate time is fixed at 80% |
| 31 | Arpeggiator | OM p.6 | PG p.29 | — | N07 | VERIFIED | [Shift]+ARPEGGIO [ON] opens Arpeggio Edit, as does the Menu |
| 32 | Saving a Program (WRITE) | OM p.9 | PG p.10 | — | N09, I09 | VERIFIED | Full sequence in §8 |
| 33 | Saving pattern work | OM p.12 | OM p.9 | — | N09, I09 | VERIFIED | **A pattern is saved only by saving the program.** There is no separate pattern save |
| 34 | Backing out of an unwanted edit | OM p.5, p.16 | — | — | N10 | VERIFIED, thin | [Shift]+[Enter] reverts to the original sound; otherwise select another program without saving. There is **no undo** |
| 35 | Factory reset | OM p.14 | PG p.5 | — | N10 | VERIFIED | Menu → UTILITY → Factory Reset. Destroys all user programs and system settings |
| 36 | Backup / restore | OM p.14 | v1.10 p.1; v1.50 p.1 | — | I09 | VERIFIED | USB mass-storage style; copy the whole `JD-Xi` folder |
| 37 | Export / Extra Bank import | v1.10 pp.1–2 | MIDI Impl p.1 (bank map) | **1.10+ only** | I09 | VERIFIED* | Requires the instrument to be at 1.10 or later |
| 38 | Vocoder | OM p.7 | PG p.9, p.28 | — | *no tutorial* | VERIFIED | Content gap already noted in architecture §5. One Digital Synth part only; Analog Synth goes silent |
| 39 | AutoPitch | OM p.7 | PG p.9, p.28 | — | *no tutorial* | VERIFIED | Same category dial position as Vocoder |
| 40 | Auto Note | OM p.7 | PG p.4 | — | *no tutorial* | VERIFIED | Recording with Auto Note fixes Pitch Bend Range at 24 |
| 41 | Octave | OM p.6 | PG p.12 (Octave Shift) | 1.50 adds [Shift]+OCTAVE = Transpose | B05 | VERIFIED* | ±3 octaves; both buttons together resets. **No effect on the Drums part** |
| 42 | Pitch bend / modulation | OM p.6 | PG p.12 (Bend Range U/D) | — | B05 | VERIFIED | Pitch springs back to centre; Mod stays where you leave it |
| 43 | Favorites | OM p.5, p.6 | — | — | B03, I09 | VERIFIED | 16 banks × 16. A favourite also remembers which part was selected |
| 44 | Part mute | OM p.10 | PG p.10 (Sound Mute) | — | N06 | VERIFIED | |
| 45 | Pattern copy | OM p.10 | — | — | I08 | VERIFIED | Tones are copied; **program and effect settings are not** |
| 46 | Documented shortcuts | OM p.16 | PG p.2 | 1.10 and 1.50 add shortcuts absent from both lists | N01 | VERIFIED* | See §6.2 and §11.2 |
| 47 | Metronome / click | OM p.11, p.13, p.15 | — | — | N04 | VERIFIED | |
| 48 | Interactive Chord | v1.50 p.2 | — | **1.50+ only** | *no tutorial* | VERIFIED* | |
| 49 | Transpose | v1.50 p.2 | — | **1.50+ only** | B05? | VERIFIED* | Not saved; resets to 0 at power-off |
| 50 | Shuffle | v1.50 p.2 | — | **1.50+ only** | B09 | VERIFIED* | Directly relevant to B09 "Change the feel" |
| 51 | Startup Program | v1.50 p.3 | — | **1.50+ only** | I09 | VERIFIED* | |
| 52 | Error messages | PG p.5 | — | — | N10 | VERIFIED | `Pattern Full!`, `INT Memory Full!`, `Now Playing!`, `Now Recording!` are all reachable by a beginner |
| 53 | Troubleshooting | OM p.17 | PG pp.4–5 | — | N10 | VERIFIED | Roland's own list is the correct spine for N10 |
| 54 | Using a commercially available mic | OM p.15 | OM p.13 | — | *no tutorial* | VERIFIED | Carries a **hardware-damage** warning — §8 |
| 55 | Sync / DAW / USB driver | OM p.15 | MIDI Impl (whole) | — | *out of scope* | VERIFIED | Not in the canonical thirty |

## 8. Saving and destructive actions

Every operation below can destroy work. Warnings are paraphrased from Roland, not
reproduced. These will need stronger confirmation and recovery treatment in the tutorial UI
than an ordinary step.

### 8.1 Overwriting a Program

**WRITE — Menu/Write held with Shift** (OM p.9). Name the program, [Enter], choose the
destination with the Program Value [-] [+], [Enter], confirm with [Enter].

- Roland's warning: if the chosen destination already holds data, its name appears on the
  lower line, and saving **overwrites it, erasing the previous data**.
- Roland's warning: **never turn the power off while saving.**
- [Exit] cancels at the confirmation stage.
- Consequence for the UI: the destination-selection step is the dangerous one, and the
  program name on the lower line is the only warning the instrument gives.

### 8.2 Losing unsaved work by doing nothing

- An edited sound is lost when you select a different program or tone, or power off
  (OM p.6, p.9).
- A pattern is lost the same way, and **there is no separate pattern save** — the program
  save is the only persistence (OM p.12).
- A changed pattern length reverts if you select another program before saving (OM p.10).
- Power-off procedure explicitly asks whether you have saved (OM p.4).
- Transpose is not saved and returns to 0 at power-off (v1.50 p.2). The program-change lock
  (v1.10 p.2) and the click-out-right setting (OM p.15) are likewise temporary.

### 8.3 Erasing pattern data

| Operation | Effect | Source |
|---|---|---|
| [Shift] + [Erase] → Pattern Erase | Erases the pattern of a chosen part, or of **All** parts | OM p.10 |
| Pattern Erase with **All** | Additionally resets the length to 1 measure and the scale to 16th notes | PG p.3 |
| Hold [Erase] + a step button, stopped | Completely erases that step's notes — as distinct from switching a step dark, which only mutes | OM p.10, p.11 |
| Hold [Erase] during playback or recording | Erases the selected part for as long as it is held; for Drums, the most recently played instrument | OM p.11 |
| [Erase] during step recording | Erases the step's data, entering a rest | OM p.12 |
| Step or realtime recording over existing notes | **Automatically deletes and replaces** them. TR-REC does not — it requires an explicit erase first | OM p.11; PG p.3 |
| Effect knob movements | Belong to the program, not the pattern: **erasing the pattern does not erase them**, and they cannot be erased at all — they must be re-recorded | OM p.11; PG p.3 |
| Pattern Copy ([Menu/Write] + [10]) | Overwrites the destination part's pattern and/or sound | OM p.10 |
| [Erase] + [01]–[16] in Favorite mode | Deletes that favourite registration | OM p.5 |
| [Enter] + [Erase] during playback | *(1.10+)* Erases recorded knob and wheel movements for the selected part; for Drums, for **all** instruments at once | v1.10 p.2 |

### 8.4 Whole-instrument destruction

| Operation | Effect | Source |
|---|---|---|
| **Factory Reset** — Menu → UTILITY → Factory Reset → [Enter] | Initialises **all user programs**, including their arpeggios, patterns and effects, **and all system settings**. Requires a power cycle afterwards | OM p.14 |
| **Restore** — Menu → UTILITY → Restore | Replaces the instrument's data with a backup file. Ends with `Completed. Turn off power.` | OM p.14 |
| **System program update** | Roland states memory is not lost if the update completes correctly, but recommends backing up first as a safeguard; and warns that **turning the power off during the update may leave the system unable to start** | v1.10 p.1; v1.50 p.1 |
| **Export** | Never power off during export | v1.10 p.1 |
| **Extra Bank import** | Never power off during loading. Only one file per S–Z folder is loaded | v1.10 p.2 |

Roland also recommends, in general terms, backing up before sending the unit for repair,
and notes that stored data can be lost through equipment failure or incorrect operation
(OM p.18).

### 8.5 Physical-damage risk

Not data loss, but it belongs in the same confirmation tier:

- The `Mic Sel` SYSTEM parameter set to **Attached** supplies **5 V to the MIC jack**. Using
  a commercially available microphone with that setting **may damage the microphone**. It
  must be set to `Other` for any non-supplied mic, and only dynamic mics are supported
  (OM p.15, p.17).

### 8.6 States that block or fail

Reachable by a beginner, and therefore N10 material (PG p.5): `Now Playing!` and
`Now Recording!` refuse an operation until playback or recording is stopped; `Pattern Full!`
means no further pattern recording is possible; `INT Memory Full!` requires initialising
unneeded patterns before anything else can be saved.

## 9. Tutorial-to-source map

Every canonical ID from architecture §4, with the sources that must be reconciled before it
can be authored. **Authoring none of these is in scope here.**

### Beginner

| ID | Working title | Sources to reconcile first |
|---|---|---|
| B01 | Meet your JD-Xi | OM pp.2–3 (top panel, all 17 numbered areas), OM p.3 (rear panel), OM p.4 (controller vs sound generator), PG p.6. **Rear-panel problem** — §12 |
| B02 | Get your first sound | OM p.4 (power-on order, volume left first), OM p.2 item 7 (Master Volume), OM p.5 (Part Select, Choosing a Tone), OM p.17 (Local Switch as the documented no-sound cause) |
| B03 | Find sounds you like | OM p.5 (category dial, Tone [-] [+], program select), OM p.5–6 (Favorites, favourite banks), PG pp.44–47 (preset lists). Note the Vocoder/AutoPitch dial position surprises a beginner (OM p.5, p.7) |
| B04 | Meet the four parts | OM p.4 and PG p.6 (program = four parts), OM p.5 (all four selectors and their tone-selection differences), PG p.7 (three different tone structures) |
| B05 | Play with the keys | OM p.6 (OCTAVE, Pitch/Mod wheels), OM p.17 (37 mini keys, velocity), PG p.12 (Bend Range U/D). *If* transpose is taught: v1.50 p.2 — firmware-gated |
| B06 | Change the sound with knobs | OM p.8 (FILTER, AMP/ENV), OM p.9 (LFO). PG p.12–14 / p.17–18 for what the knobs actually address |
| B07 | Add effects | OM p.9 (four knobs, [Effects On/Off], [Type] buttons), PG p.8 (fixed chain), PG p.9 (send levels can be 0, making a knob do nothing), OM p.17 (Roland's own "effects not applied" list) |
| B08 | Play a pattern | OM p.10 ([▶/■], sequencer overview), OM p.17 (`Sync Mode` = SLAVE stops patterns playing — the documented trap) |
| B09 | Change the feel | OM p.6 (tempo knob, [Tap]), PG p.10 (Tempo parameter and its SLAVE restriction), OM p.13 (`Tempo Lock`). **Shuffle is 1.50-only** — v1.50 p.2 |
| B10 | First 15-minute challenge | No new sources; composes B02–B09 |

### Novice

| ID | Working title | Sources to reconcile first |
|---|---|---|
| N01 | Learn the menu controls | **The heaviest reconciliation.** OM p.2 (each button's stated purpose), OM p.14 (menu access and the item list), OM p.13 (SYSTEM, including [Shift]+Cursor group movement), OM p.16 + PG p.2 (the full shortcut lists), PG pp.10–29 (which screens have menu groups and which do not), v1.10 p.2 and v1.50 pp.2–3 (shortcuts in neither list). Plus §6 of this document, whose universal/context split exists precisely for this tutorial |
| N02 | Understand programs and parts | OM p.4 / PG p.6 (program, tone, part, system), OM p.4–5 (bank table), PG p.43 (bank/program numbering), PG p.10 (Program Edit COMMON and MAIN) |
| N03 | Sequencer basics | OM p.10 (length, scale, structure), OM p.11 (what TR-REC is), PG pp.3–4 |
| N04 | Make a simple drum beat | OM p.11 (TR-REC for drums, realtime recording), OM p.5 (drum instrument names above the keys), PG p.7 (26 partials, C2–C♯4), PG p.3, OM p.11/p.13 (metronome) |
| N05 | Make a simple bass line | OM p.11 (TR-REC for digital/analog parts), OM p.12 (step recording), PG p.3 (fixed 80% gate time in TR-REC) |
| N06 | Layer sounds | OM p.5 (**only one part is playable at a time** — the constraint this tutorial exists to work around), OM p.10 (part mute), PG p.10 (per-part Level) |
| N07 | Try the arpeggiator | OM p.6 (ON, Key Hold, editing, tempo interaction), PG p.29 (style, grid, duration, motif, velocity, octave range, accent) |
| N08 | Edit a sound more deliberately | OM p.9 (Menu → Tone Edit), PG pp.12–14 or pp.15–19 depending on the part; OM p.8 note that separate A/D/S/R lives in Tone Edit |
| N09 | Save your work | OM p.9 (the WRITE sequence and its overwrite warning), OM p.12 (patterns are saved only via the program), §8 of this document in full |
| N10 | Getting unstuck | OM p.17 (Roland's troubleshooting table — the correct spine), PG pp.4–5 (other notes, error messages), OM p.2 ([Exit] as the universal back-out), OM p.5 ([Shift]+[Enter] revert), OM p.14 (factory reset as the last resort) |

### Intermediate

| ID | Working title | Sources to reconcile first |
|---|---|---|
| I01 | Build a bass sound | PG pp.12–14 (analog tone edit in full) or pp.15–19 (digital), OM p.5 (analog oscillator, Sub OSC, pulse width), OM p.8 (analog LPF only), PG p.4 (analog square/SubOSC may not sound at the top of the keyboard) |
| I02 | Build a pad sound | PG pp.15–19 (digital tone edit: OSC, PITCH, FILTER, AMP, LFO, MOD LFO, MISC), PG p.7 (three partials) |
| I03 | Build a lead sound | As I02, plus PG p.15 (Ring Switch, Wave Shape, Analog Feel), PG p.12 (portamento and legato) |
| I04 | Filter and envelope shaping | OM p.8 (both panel sections, and the envelope diagram Roland already draws), PG p.12–13 (analog), p.17–18 (digital), pp.23–25 (drums TVF/TVA) |
| I05 | LFO and movement | OM p.9 (waveforms, Rate, Depth, Destination; **not applied to Drums**), PG p.14 (analog LFO), pp.18–19 (digital LFO and MOD LFO) |
| I06 | Effects and space | PG pp.8–9 (block diagram, routing, Part Output, send levels), PG pp.26–27 (every effect parameter), OM p.9. **Side-chain compressor is 1.50-only** — v1.50 p.3 |
| I07 | Build a multi-part program | PG p.10 (Program Edit COMMON/MAIN), PG p.11 (OFFSET), PG p.9 (per-part effect routing), OM p.5 (the one-playable-part constraint) |
| I08 | Build a fuller pattern | OM pp.10–12 (all four recording methods and their differing overwrite behaviour), OM p.10 (pattern copy, length), PG pp.3–4 |
| I09 | Save and organize creations | OM p.9 (WRITE), OM p.5–6 (favourites and their 16 banks), OM p.14 (backup/restore), v1.10 pp.1–2 (export and Extra Banks — **1.10+**), v1.50 p.3 (startup program — **1.50+**) |
| I10 | Performance challenge | No new sources; composes I01–I09 |

### Coverage

30 of 30 canonical IDs are mapped. Every one resolves to at least one Owner's Manual page;
24 additionally require the Parameter Guide; 5 touch firmware-gated material. **No tutorial
in the canonical set requires the MIDI Implementation** — it is the right document for the
JD-Xi, but the wrong document for this curriculum, and is retained for provenance rather
than for authoring.

Two mapped tutorials are thinner than their title implies and are flagged in §12: N06
*Layer sounds* and N10 *Getting unstuck*.

## 10. Version-1.10 and 1.50 detail

Recorded here so §11's caveats have something to point at.

**Added in 1.10** (v1.10 pp.1–2): export of up to one bank (64) of programs to a computer;
import into Extra Banks S–Z via eight folders named `S`–`Z`; erasing recorded knob and
wheel movements with [Enter] + [Erase] during playback; temporarily locking program changes
with [Menu/Write] + [01], indicated by the cursor underline under the program number
disappearing.

**Added in 1.50** (v1.50 pp.2–3): **Interactive Chord**, a new `Chord Edit` menu item whose
Switch, Original Key and Name parameters make pattern playback follow chords played on the
keyboard, with a `C` icon on the top screen when active; **Transpose** via [Shift] + OCTAVE
[Down]/[Up], or [Shift] + a key with middle C4 as zero, not saved and reset at power-off;
**Shuffle** via [Enter] + Part Select to choose the part and [Enter] + the [LFO Depth] knob
to set 0–100%, saved with the program; **Side Chain Compressor**, six new parameters on
Effect 1 type `03: Compressor`; **Startup Program**, a `Start Prog` parameter under
SYSTEM → GENERAL taking A01–H64 or S01–Z64.

Roland's own note in the 1.50 supplement: programs saved before the update, and programs
downloaded from Axial, default to Chord Switch OFF, Original Key C, Name C (root).

## 11. Firmware and version caveats

### 11.1 The core problem

The instrument documented by the Owner's Manual and Parameter Guide is **not** the
instrument Roland currently ships software for. Verified by full-text search of both
documents: neither contains the words *Transpose*, *Export*, *Extra Bank*, *Interactive*,
or *Start Prog*, and neither mentions shuffle in the sequencer sense. The Owner's Manual is
the 2021 `eng07` edition and still describes baseline behaviour.

Therefore:

- **Baseline behaviour** = Owner's Manual `eng07` + Parameter Guide `e01`.
- **Behaviour added at 1.10** = the 1.10 supplement, and nothing else.
- **Behaviour added at 1.50** = the 1.50 supplement, and nothing else.
- **1.51 and 1.52 changed nothing a tutorial can teach** — 1.51 is a bug fix to interactive
  chord with a non-C original key; 1.52 is an administrative renumber with specifications
  explicitly unaffected.

### 11.2 Shortcuts that appear in no Shortcut List

Both published shortcut lists (OM p.16, PG p.2) predate both supplements. An author
working only from them will silently omit all of the following:

| Combination | Effect | Version | Source |
|---|---|---|---|
| [Menu/Write] + [01] | Lock program changes; the cursor underline under the program number disappears. Temporary, cannot be saved | 1.10 | v1.10 p.2 |
| [Enter] + [Erase] during playback | Erase recorded knob/wheel movements for the selected part | 1.10 | v1.10 p.2 |
| [Shift] + OCTAVE [Down]/[Up] | Transpose in semitones | 1.50 | v1.50 p.2 |
| [Shift] + a key | Transpose, middle C4 = 0 | 1.50 | v1.50 p.2 |
| [Enter] + [Auto Note] | Toggle the Chord Edit Switch | 1.50 | v1.50 p.2 |
| [Enter] + Part Select | Choose the shuffle part (pattern must be playing) | 1.50 | v1.50 p.2 |
| [Enter] + [LFO Depth] knob | Set the shuffle rate 0–100% | 1.50 | v1.50 p.2 |
| [Enter] + keyboard | Enter a chord without producing sound | 1.50 | v1.50 p.2 |

Note the pattern: 1.50 introduced **[Enter] as a held modifier**, a role the Owner's Manual
gives only to [Shift]. A beginner-facing lesson that says "[Shift] is the modifier button"
is accurate for a baseline instrument and incomplete for a 1.50+ one.

### 11.3 Menu contents differ by version

The Owner's Manual's Menu item list (OM p.14) omits `Chord Edit`, which 1.50 adds
(v1.50 p.2). On a 1.50+ instrument the Menu screen therefore contains an item the manual
does not list — and N01, which teaches menu navigation by naming what the learner will see,
cannot be written correctly without knowing which case applies.

### 11.4 Features that simply do not exist below their version

Export, Extra Banks S–Z, Interactive Chord, Transpose, Shuffle, side-chain compression, and
Startup Program are absent on an un-updated instrument. Any tutorial teaching them needs a
version precondition, not a footnote.

### 11.5 Flag for the PM — resolved

> **Resolved 2026-08-30: the owner checked the instrument; installed version is 1.51**
> (owner-observed hardware evidence, §4.8).

Consequences: B05, B09, I06 and I09 may reference 1.50 features freely for this
instrument, and N01 **must** account for `Chord Edit` appearing in the Menu (§11.3).
The 1.51 Interactive Chord fix is present; 1.52 adds nothing teachable.

The check procedure is retained for any other instrument: [Menu/Write], then Cursor
[►] repeatedly to `Version Info`, then [Enter] (v1.10 p.1; v1.50 p.1 — the Menu item
appears as `VERSION INFO` in OM p.14's list). For an instrument whose version is
unknown, the safe default remains authoring to **baseline** with every 1.10/1.50
feature treated as optional enrichment.

## 12. Reconciliation queue

Open items for PM review. Nothing here is resolved by assumption.

**Q1 — What system version is the owner's JD-Xi running?** ✅ **RESOLVED 2026-08-30.**
The owner physically checked the JD-Xi: **installed version = 1.51** (owner-observed
hardware evidence, §4.8). All 1.10 additions available; all 1.50 additions available;
the 1.51 Interactive Chord bug fix present; 1.52 **not** treated as required, because
Roland states it did not change specifications. The tutorial system targets 1.51
behaviour for this owner's instrument. The firmware-precedence rules (§3, §11) are
preserved for anyone using another JD-Xi.

**Q2 — Which name do we use for the [Menu/Write] button?** ✅ **RESOLVED — PM decision.**
Learner-facing name: **Menu/Write**; exact button instructions are written **[Menu/Write]**.
Internal target ID: `menuWriteButton`. Applied in the canonical registry.

**Q3 — Does a boxed panel legend mean "Shift function"?** Consistent with `Write` and `Mute`,
apparently contradicted by `Rest`. Roland states no such convention. If true it is a single
sentence that unlocks a large part of the panel for a beginner; if false, teaching it would
strand learners. *Needs hardware, or a Roland source we have not found.*

**Q4 — What are the display's actual dimensions?** Every documented screen fits two lines of
sixteen characters, but Roland never states it. The `display-focus` visual mode
(architecture §9) needs the real figure to render `expectedDisplay` faithfully. *Needs
hardware.*

**Q5 — `partSelect` must become four targets.** ✅ **RESOLVED by the canonical registry**
(`js/hardware-targets.js`, reconciled in [`HARDWARE-TARGETS.md`](HARDWARE-TARGETS.md)).
`partSelectGroup` now has four individually measured child buttons; the [01]–[16] step
buttons are sixteen individual targets in a `favoritePatternRow` group that is
deliberately **not** a child of `patternSequencerSection`, matching the panel; and every
missing control tabled in §5.2 that is visible in the top view is defined and measured.
Rear-panel items are registered off-image without fabricated coordinates (Q6 remains
open for how to *show* them).

**Q6 — The rear panel cannot be shown.** The [POWER] switch and DC IN jack are on the rear
(OM p.3), and the master image is a top view. B01 and B02 both need them. Options include a
second image, an illustrated inset, or wording the step so it needs no highlight. All three
have baseline consequences (`DESIGN-RULES.md` §5), so this is not ours to decide. *Product
decision.*

**Q7 — "Keyboard" is ambiguous on this instrument.** ✅ **RESOLVED — PM decision.**
Learner-facing terminology for the playable keyboard: **the keys** (target label
**Keys**, id `keys`). Bare "Keyboard" is never used casually, because `Keyboard` is
also a sound category printed at the category dial; when the dial position is meant,
say **Keyboard category**. Applied in the canonical registry.

**Q8 — Are the Pitch and Mod controls "wheels"?** Roland's text says wheel (OM p.3 item 17,
p.6); the panel legend says only `Pitch` and `Mod`; the master image shows what read as
levers or paddles rather than classic wheels. Roland's word governs, but a learner looking
for a wheel may not find one. *Needs hardware confirmation of what the learner sees.*

**Q9 — N06 "Layer sounds" may be misnamed.** ✅ **RESOLVED — PM decision.** The working
title overpromised. N06's architectural working title is now **"Combine parts in a
pattern"** (tutorial ID N06 preserved). The intended concept: arranging multiple JD-Xi
parts together through a pattern — not simultaneously playing several parts from the
keys. Applied in TUTORIAL-ARCHITECTURE §4.

**Q10 — N10 "Getting unstuck" has thinner recovery material than it needs.** The instrument
has **no undo**. Recovery consists of [Exit], [Shift]+[Enter] to revert a sound, selecting
another program without saving, and — as a last resort — factory reset. That is the whole
documented set. Given that every Step carries a `recoveryHelp` field (architecture §7), the
library will need a consistent house recovery pattern built from these four moves rather
than per-step invention. *Product decision.*

**Q11 — Vocoder, AutoPitch and Auto Note have no canonical tutorial.** Fully documented
(OM p.7; PG p.9, p.28) and prominent on the panel — the category dial's top position and a
dedicated [Auto Note] button. The architecture already records the Vocoder collection as a
content gap (§5) and the question as undecided (§14). This phase confirms the sources are
ready whenever the PM wants it, and adds that Vocoder/AutoPitch **silences the Analog Synth
part**, which is exactly the kind of surprise a beginner needs warned about.

**Q12 — B09 "Change the feel" is firmware-split.** ✅ **RESOLVED by Q1.** The owner's
instrument is at 1.51, so shuffle exists on it: B09 has **two** mechanisms in scope,
tempo (baseline, OM p.6) and shuffle (v1.50 p.2).

**Q13 — Confirmation prompts disagree with each other.** Factory Reset renders
`[Ent]:Y [Exit]:N`; the Pattern Length prompt renders `[Exit]:N [Ent]:Y` (OM p.14, p.10).
Same meaning, mirrored layout. Our UI should not smooth this over — `expectedDisplay` is a
confirmation signal, and showing the learner a tidied-up prompt that does not match the
hardware would defeat its purpose. *Noted for the lesson-screen phase.*

**Q14 — No documentary conflict was found between the supplements and the base manuals.**
Recorded as a positive finding. The supplements add; they do not contradict. The three
tensions worth PM attention are all *silences* rather than conflicts: the Owner's Manual's
menu list and both shortcut lists are stale relative to 1.50 (§11.2, §11.3), and Roland
never states the boxed-legend convention (Q3).

## 13. What this phase does not decide

- Hardware-target coordinates — still deferred (architecture §8, §14).
- Any learner-facing wording, title, or step.
- Whether the missing targets in §5.2 are added, and how they are grouped.
- Any of the fourteen queue items in §12.

> **Phase 4A postscript:** coordinates have since been measured
> (`js/hardware-targets.js` + [`HARDWARE-TARGETS.md`](HARDWARE-TARGETS.md)), the §5.2
> targets are defined and grouped there, and Q1, Q2, Q5, Q7, Q9 and Q12 are resolved
> in §12 above. Q3, Q4, Q6, Q8, Q10, Q11 and Q13 remain open.
- Whether Vocoder/Auto Pitch gets canonical tutorials.
- The Novice capstone question (architecture §4).
