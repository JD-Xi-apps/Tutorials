# Specialty lessons — source notes

Source reconciliation record for the three Specialty lessons. Content lives in
`js/specialty.js` (`window.JDXI_SPECIALTY`), deliberately **outside**
`window.JDXI_TUTORIALS`.

| Field | Value |
|---|---|
| Lessons | **Use the Vocoder** (9 steps), **Use AutoPitch** (7 steps), **Use Auto Note** (6 steps) |
| Ids | `vocoder`, `auto-pitch`, `auto-note` — deliberately not `B##`/`N##`/`I##` |
| Status | **Optional. Outside the canonical thirty. Never counted in x/30.** |
| Prerequisites | `["B03"]` on each — advisory, not a gate |
| Authored | 2026-08-31, against `PRODUCT-CURRICULUM-MASTER-PLAN.md` §21 |

## What Specialty is, and what it is not

The master plan (§21) creates Specialty as optional content sitting outside the sacred thirty:
searchable, bookmarkable, tracked separately, and **not** part of course completion. The
reconciliation brief adds that it must be a separate data model, use the same guided renderer,
and choose stable non-B/N/I ids.

All four hold. `window.JDXI_SPECIALTY` is its own object; membership in `window.JDXI_TUTORIALS`
remains canonical identity and the canonical count is still exactly 30;
`tools/validate-data.js` asserts that no Specialty id — or Specialty *step* id — resembles a
canonical one, in either direction.

The architecture doc previously recorded a PM decision that "no Vocoder tutorial is added".
That decision stands as written: no Vocoder tutorial joins the canonical thirty. Specialty is
not the thirty, which is why both statements are true at once. See
`TUTORIAL-ARCHITECTURE.md` §14's reconciliation postscript.

## Scope: the included microphone only

The master plan and the brief both say this in the same words: **use the included microphone
only**, and do not cover external microphone setup, guitar input, or other external audio
workflows.

Roland documents all of those on the same page these lessons draw from (OM p.7): a
commercially available dynamic microphone with its `Mic Sel` setting, a guitar or audio player
through the rear INPUT jack, and the LINE/GUITAR switch that selects between them. **None of
it appears in any lesson.**

One thing that *does* appear needs stating clearly, because it looks like external-input
content and is not. Every lesson has an early step telling the learner to check that nothing is
plugged into the rear INPUT jack. That is Roland's own documented behaviour — "If devices are
connected to both the MIC jack and the INPUT jack, the JD-Xi is designed to give priority to
the INPUT jack, meaning that the MIC jack is not available" (OM p.7) — and it is the single
most likely reason a correctly connected included microphone produces nothing at all. Warning
that a device disables the microphone is part of getting the microphone working. Teaching how
to *use* that device is not, and the lessons do not.

`tools/validate-data.js` enforces the boundary on instructional text, checking for guitar,
audio player, LINE/GUITAR, "commercially available" and dynamic-microphone wording in every
step's `instruction`, `detail`, `whyItMatters` and `checkpoint`.

## Sources consulted

| Source | Where it is used |
|---|---|
| Owner's Manual `eng07` | **p.2** items 1 (MIC jack) and the Auto Note button; **p.5** *Choosing a Part to Play*, *Choosing a Tone* and the Vocoder/AutoPitch note; **p.7** *Using the Microphone* (connection, the INPUT-jack priority rule, the SYSTEM INPUT parameters), *Vocoder/Auto Pitch* (what each does, the three-step procedure, the Setup route, the two limits), *Auto Note* (what it does, the two-step procedure, and the Pitch Bend Range MEMO); **p.9** *Saving a Sound (Program) (WRITE)*; **p.13** SYSTEM settings save on exit |
| `docs/ROLAND-SOURCE-MAP.md` | §7 rows 5 (part selection), 10 (tone selection); §9; §8.2 losing unsaved work |

The Parameter Guide's Vocoder and AutoPitch parameter tables (PG p.28) were **not** used: the
lessons open the edit screens and say where the settings are, without walking them.

## Per-step reconciliation — Vocoder

| Step | Learner-facing factual claims | Support |
|---|---|---|
| `SPEC-VOC-S01` Connect the included microphone | The included microphone plugs into the MIC jack; adjust its direction and angle after connecting. | OM p.7: "Connect the included microphone to the MIC jack. After you've connected the microphone, adjust its direction and angle." |
| `SPEC-VOC-S02` Check nothing is plugged into the INPUT jack | If devices are connected to both the MIC jack and the INPUT jack, the INPUT jack takes priority and the MIC jack is unavailable. | OM p.7, quoted in substance: "You can't use the mic if a device is connected to the INPUT jack… If you want to use the microphone, disconnect any device from the INPUT jack." |
| `SPEC-VOC-S03` Set the input level, if you need to | The INPUT group in SYSTEM holds `Level`; `Mic Sel` reads `Attached` for the included microphone; SYSTEM settings save automatically on exit. | OM p.7's Setup procedure and its parameter table (`Level`, `Mic Sel` with "Attached (when using the included microphone)"), and "The settings are saved automatically." The auto-save warning is also OM p.13. **`Mic Sel`'s other value is named nowhere in the lesson** — only the one that applies to the included microphone. |
| `SPEC-VOC-S04` Protect any work you want to keep | Selecting a tone discards an unsaved edit; Vocoder settings are saved per program. | OM p.9 for the discard; OM p.7: "Vocoder and AutoPitch settings are saved individually for each program." |
| `SPEC-VOC-S05` Select the Vocoder/AutoPitch category | The Category dial has a Vocoder/AutoPitch position. | OM p.7 step 1: "Use the category dial to select 'Vocoder/AutoPitch.'" |
| `SPEC-VOC-S06` Choose a vocoder tone | Tone `[-]` `[+]` select a tone within the category; the category holds both kinds. | OM p.7 step 2. That both kinds share the category is the plain reading of Roland's heading and of the AutoPitch note in step 3. |
| `SPEC-VOC-S07` Sing and play at the same time | Vocalise into the mic while playing the keyboard; the vocoder gives a voice a toneless, robotic tone; the keyboard controls the pitch. | OM p.7: "The 'Vocoder' adds effects to a human voice. If you run your voice through the vocoder, you can give it a toneless, robotic tone. Control the pitch by playing the keyboard", and step 3 "Vocalize into the mic while you play the keyboard." The recovery's caveat is Roland's: "The effect might not work correctly if you input sound other than human voice, or if you're using the system in a noisy environment." |
| `SPEC-VOC-S08` What it costs you | Vocoder and AutoPitch can be used on only one Digital Synth part; the Analog Synth part produces no sound while one is selected. | OM p.7's *Note when using Vocoder and AutoPitch*, both bullets, verbatim in substance. |
| `SPEC-VOC-S09` Keeping a vocoder setup | Settings are saved per program; Vocoder Edit is reached from the Menu. | OM p.7 Setup steps 1–2 and its closing sentence; OM p.9 for WRITE. |

## Per-step reconciliation — AutoPitch

| Step | Learner-facing factual claims | Support |
|---|---|---|
| `SPEC-AP-S01` Get the microphone working | As `SPEC-VOC-S01`/`S02`. | OM p.7. |
| `SPEC-AP-S02` Protect any work you want to keep | Selecting a tone discards an unsaved edit. | OM p.9. |
| `SPEC-AP-S03` Select an AutoPitch tone | Same category dial position and Tone buttons; both kinds share the category. | OM p.7 steps 1–2. |
| `SPEC-AP-S04` Sing without touching the keyboard | With an AutoPitch tone selected there is no need to play the keyboard. | OM p.7, step 3's note: "If you've selected an AutoPitch tone, there's no need to play the keyboard." This is also how the lesson has the learner tell the two kinds apart, which is a use of Roland's fact rather than an addition to it. |
| `SPEC-AP-S05` Hear the stair-step | AutoPitch suppresses pitch irregularity and applies a stair-step constraint to pitch change, creating a mechanical effect. | OM p.7, quoted closely: "AutoPitch sounds suppress pitch irregularity, producing a pitch-corrected sound. By applying a stair-step constraint to pitch change, this creates a mechanical effect." The slow-slide exercise is a way to hear that, not a further claim. |
| `SPEC-AP-S06` Adjust it | AutoPitch Edit is reached from the Menu; Cursor selects a parameter and Value changes it. | OM p.7 Setup steps 1–3. That this screen does not save itself, unlike SYSTEM, is the contrast at OM p.9 versus OM p.7/p.13. |
| `SPEC-AP-S07` The limits, and keeping it | The same two limits as the vocoder; settings saved per program. | OM p.7's *Note* and closing sentence. |

## Per-step reconciliation — Auto Note

| Step | Learner-facing factual claims | Support |
|---|---|---|
| `SPEC-AN-S01` Get the microphone working | As above. | OM p.7. |
| `SPEC-AN-S02` Choose a sound to play | Auto Note needs no special category; any part and tone will do. | Roland's Auto Note procedure (OM p.7) contains no tone or category step, unlike the Vocoder/AutoPitch procedure immediately above it, and the *Note when using Vocoder and AutoPitch* limits are stated for those two only. The lesson states the difference as an absence, which is what it is. |
| `SPEC-AN-S03` Turn Auto Note on | Press the `[Auto Note]` button to make it light. | OM p.7 step 1. |
| `SPEC-AN-S04` Play with your voice | Auto Note detects the pitch of your voice and plays that pitch; sound is heard without playing the keyboard. | OM p.7: "Auto Note is a function that detects the pitch of your voice, and plays that pitch… Input your voice from the microphone; sound is heard even though you're not playing the keyboard." The recovery's noisy-environment caveat is Roland's, from the same page's NOTE covering all three functions. |
| `SPEC-AN-S05` One thing to know about recording | A pattern recorded with Auto Note has Pitch Bend Range fixed at 24; playing it back with Auto Note off may sound different unless Pitch Bend Range is set to 24. | OM p.7's MEMO, in substance. **This is a note, not a recording lesson** — the step is read-only and says the live playing this lesson teaches is unaffected. |
| `SPEC-AN-S06` Turn it off cleanly | Pressing the button again turns it off. | OM p.7 step 1 read in reverse — the button lights to turn on. Roland documents no separate off procedure, and the step claims none. |

## Direct-entry safety

Each lesson carries a protect-your-work preflight before its first tone selection — `S04` in
the Vocoder lesson, `S02` in AutoPitch. **Auto Note deliberately has none**, and that is
correct rather than an omission: it selects no program and no tone. `SPEC-AN-S02` has the
learner choose a sound, which is a tone selection — so the lesson's own recovery text points at
`B03`, and the step is written as "select any part and any tone you like", an action the
learner is choosing rather than one the lesson imposes on loaded work.

All three assume nothing about what is connected, what is loaded, or whether the learner has a
microphone at all. `SPEC-VOC-S01`'s recovery says plainly that without one the lesson cannot be
completed, and that nothing in the course depends on it — which is true, because Specialty is
optional.

## Deliberate omissions

- **External microphones, guitars and audio players** (OM p.7) — the master plan's scope
  boundary. See *Scope* above.
- **The XLR wiring diagrams and the acoustic-feedback advice** (OM p.7) are not reproduced.
  They are equipment guidance rather than JD-Xi operation.
- **The noise-suppressor parameters** `NS SW`, `NS Threshold`, `NS Release` (OM p.7) are not
  taught; the lessons name only the input `Level` and `Mic Sel`, which is what getting the
  included microphone working needs.
- **Vocoder and AutoPitch parameter tables** (PG p.28) are not walked. Each lesson opens its
  edit screen and stops there.
- **Recording with these features** is not taught. Auto Note's pattern consequence is recorded
  as a caution because a learner may meet it, but no lesson records a pattern.
