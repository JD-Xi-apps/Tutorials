# B10 — First 15-minute challenge — source notes

Source reconciliation record for B10. Content lives in `js/tutorials.js`
(`window.JDXI_TUTORIALS.B10`).

| Field | Value |
|---|---|
| Tutorial | **B10 — First 15-minute challenge** (beginner, order 10, 11 steps, ~15 min) |
| Short title | 15-minute challenge |
| Prerequisites | `["B09"]` — advisory, not a gate |
| Kind | **Challenge.** Composes `B02`–`B09`; introduces no new procedure and no new technical claim. |
| Authored | 2026-08-30 |

Learning goals as authored:

1. Do the whole Beginner sequence without being told which button to press.
2. Recognize which tutorial to go back to when something does not work.
3. Finish with a sound and a pattern you like the sound of.

## Master-plan reconciliation (2026-08-31)

The master plan (§8) sets out B10's challenge as a specific sequence: *pick Part → find
sound → play → alter → add effect → start pattern → change tempo/feel → **mute/unmute***.

The pre-reconciliation B10 performed every element of that except the last. It ended on
tempo and went straight to the closing step, so a learner finished the Beginner path without
once being asked to do the arranging move `B08` had taught them.

`B10-S10` closes that gap and introduces no new procedure, which is B10's governing
constraint. It asks for a mute and an unmute, gives the gesture in one sentence of `detail`
rather than as instruction, and points at `B08` in its recovery — the same shape as every
other step in this tutorial.

One firmware conditional was also removed, from `B10-S09`'s recovery: it recommended `B09`
"including the shuffle setting if your JD-Xi is at system version 1.50 or later". The course
targets 1.51, so the recommendation is now unconditional.

## Sources consulted

**B10 introduces no source of its own.** Every action it asks for was taught and
reconciled in an earlier Beginner tutorial, and this file records which one rather than
re-deriving the Roland page. That is deliberate: a challenge that re-argued its sources
would be a second place for the same claim to drift.

| Step | Action | Where it was taught and sourced |
|---|---|---|
| **B10-S01** Set yourself up | Listening path, power, part, Master Volume | `B02` — `docs/tutorials/B02-SOURCE-NOTES.md` (OM p.4 power-on order; OM p.2 item 7) |
| **B10-S02** Protect any work you want to keep | The preflight itself | `B03` — the same pattern and the same claims (OM p.6, p.9); the missing-tone-number signal is OM p.5 via `B06` |
| **B10-S03** Find a sound you like | Category dial, Tone [-] [+], and the Value/Tone distinction | `B03` — `docs/tutorials/B03-SOURCE-NOTES.md` (OM p.5) |
| **B10-S04** Try a different part | Part Select; the silent Drums high register | `B04` — `docs/tutorials/B04-SOURCE-NOTES.md` (OM p.5; OM p.17) |
| **B10-S05** Use the whole range | OCTAVE buttons, Pitch control, the both-buttons reset, Mod staying put | `B05` — `docs/tutorials/B05-SOURCE-NOTES.md` (OM p.6) |
| **B10-S06** Shape it | Cutoff, Envelope knob, and `[Shift] + [Enter]` as the documented revert | `B06` — `docs/tutorials/B06-SOURCE-NOTES.md` (OM p.8; OM p.5 for the revert and its scope) |
| **B10-S07** Put it in a space | Reverb, Delay, Effects On/Off as the "is anything happening" check | `B07` — `docs/tutorials/B07-SOURCE-NOTES.md` (OM p.9; OM p.17) |
| **B10-S08** Play along with a pattern | Play/Stop, part mute | `B08` — `docs/tutorials/B08-SOURCE-NOTES.md` (OM p.10) |
| **B10-S09** Change the feel | Tempo knob, [Tap], and shuffle's version caveat | `B09` — `docs/tutorials/B09-SOURCE-NOTES.md` (OM p.6; v1.50 p.2) |
| **B10-S10** Take a part out, then put it back | `shiftButton`, `partSelectGroup` | `full-plus-inset` | Hold [Shift] and press a Part Select button to mute that part; the same combination unmutes it. | OM p.10 *Muting a specific part (Part Mute)*: "Hold down the [Shift] button and press the Part Select button. The selected part is muted… To return to the original state, once again hold down the [Shift] button and press the Part Select button." No new procedure — `B08` taught this; B10 only asks for it without instructions. |
| **B10-S11** What you have, and what happens to it | Unsaved work is lost on program change or power-off | `B03`/`B06`/`B07`/`B09` (OM p.6, p.9) |

No claim in B10 goes beyond the tutorial it points at. Where a fact is repeated — the
Drums high register, the OCTAVE reset, the `[Shift] + [Enter]` scope, shuffle's version
requirement — it is repeated in the same words and with the same hedges as its source
tutorial, so the two cannot drift apart in meaning.

## Why the recoveries name tutorials

Every step's `recoveryHelp` names the tutorial that taught the action, because that is
the genuinely useful recovery for a challenge: the learner is not stuck on a new
procedure, they are stuck on one they have met. Each recovery also carries the single
most likely concrete cause from the source tutorial — silent keys high on the Drums
part, the Value/Tone mix-up, an effect knob that appears dead — so the step is still
actionable without leaving it.

This is the `recoveryHelp` contract met in the form the content calls for, not a
weakened version of it: every step has one, and every one is context-specific and
traceable, as the recovery house rule requires.

## A challenge, not an exam

`TUTORIAL-ARCHITECTURE.md` gives B10 the intent "demonstrate basic comfort", and the
production brief adds that B10 must let the learner demonstrate comfort **without
requiring theory vocabulary**. As authored:

- no step is scored, timed or gated, and no step can be failed;
- no step requires a term the app has not already taught by doing — there are no note
  names, no scales, no keys, no synthesis vocabulary beyond the panel legends;
- instructions name the outcome rather than the button ("make the sound darker or
  brighter"), which is what makes it a challenge rather than a re-run — but the target
  highlights still show the controls, so a learner who has forgotten is not stranded;
- B10-S03 says outright that there is no right answer, and B10-S06/S07 never call any
  result better, more professional or correct;
- the learner may stop at any point: nothing later depends on finishing.

The fifteen minutes are an expectation, not a limit. `estimatedMinutes` is **15**,
matching the tutorial's title and the architecture's framing of it as a 15-minute
challenge.

## Direct-entry safety

**B10-S02 is the protect-your-work preflight**, immediately before the first
discard-capable transition (the sound search at B10-S03). It is the `B03` pattern in the
same shape: what can be lost, do not go on if you have something to keep, `N09` is where
saving is taught, and no claim that the instrument's state is clean. It adds the
missing-tone-number signal from `B06` so the learner can check for themselves rather
than guess.

B10-S01 is deliberately written as an outcome ("get to a state where pressing a key
makes a sound you can hear comfortably") rather than a procedure, precisely so it makes
no assumption about how the learner's instrument is currently set up or connected.

Nothing in B10 assumes the learner arrived through `B09`, or through any prerequisite:
each step names the tutorial that covers it, so a learner entering B10 first has a route
into every action it asks for.

## The ending is deliberate

B10-S11 ends the Beginner path by telling the learner that nothing they made is stored
and that switching off loses it. That is not a downbeat note added for honesty's sake —
it is the accurate state of affairs (OM p.6, p.9), and it is the hand-off the guided
path needs: the first thing the Novice path can do for them is teach saving (`N09`).

Its `recoveryHelp` gives the learner the one action that actually preserves the work —
do not switch off, do not change programs, go to `N09` now with it still loaded — and
reassures them that if they do not mind losing it, nothing stored on the instrument has
been changed.

## Deliberate omissions

- **Nothing new is introduced.** Not one control, gesture, menu, or display state appears
  in B10 that `B02`–`B09` did not already teach.
- **Saving is not performed.** It is the one thing the challenge deliberately cannot do,
  and B10-S11 says so plainly rather than gesturing at it. WRITE is destructive-risk and
  belongs to `N09`, under the save-safety rules.
- **No recording** of any kind. B10-S08 plays along with a pattern; it does not record
  one.
- **No display state is reproduced.** B10 shows no `expectedDisplay` at all: every screen
  it might have shown belongs to a tutorial that already shows it with its provenance,
  and a challenge has no need to assert one.
