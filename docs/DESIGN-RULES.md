# JD-Xi Tutorial Hub — Design Rules

This file records the current owner-approved **presentation** decisions — visual baseline,
screen contract, and the interaction rules that protect the learner. Treat these as the
baseline unless a later owner decision explicitly changes them.

> **Product and curriculum scope now live elsewhere.**
> [`PRODUCT-CURRICULUM-MASTER-PLAN.md`](PRODUCT-CURRICULUM-MASTER-PLAN.md) is the
> owner-approved v1 baseline for what the product contains and what each tutorial teaches,
> and it outranks this file on those questions. This file keeps presentation, and it keeps
> §7a — the protect-your-work preflight — which the master plan restates as a requirement
> (§7) rather than replaces.

## 1. Audience and teaching approach

- The learner may have **no musical background, keyboard skill, or synthesizer experience**.
- Teach by **ear first**: press something, listen, compare, and learn what changes.
- Do not require music theory before the learner can make useful or enjoyable sounds.
- Keep wording plain and concrete. Define synth jargon when it first appears.
- Simple-looking screens can still contain deep instruction. Menu lessons, saving, pattern editing, and synthesis workflows should use as many small steps as needed.

## 2. Desktop-only screen contract

- No mobile design is required.
- Reference design canvas: **1440 × 900**.
- The complete app view must always fit inside the current browser window.
- **No page-level horizontal or vertical scrollbars.**
- Scale the full reference canvas proportionally.
- Height is the preferred stretch/fit dimension.
- Width limits the scale only when necessary to prevent clipping.
- Center the scaled canvas when unused space remains.
- Do not independently reflow or collapse the main desktop layout merely because the window is smaller; scale the reference experience instead.

## 3. Global navigation

- Use a compact dark top bar. It should consume roughly half the height of the original concept banner.
- Keep the JD-Xi logo (`assets/images/JD-Xi_logo.png`) and Home visible. The bar
  carries no Roland branding: this is a JD-Xi learning tool, not an official
  Roland application. The logo is placed with CSS sizing only; the source PNG
  is never resized, recolored, or recompressed.
- My Progress and Favorites may show icon + text.
- Settings is **gear icon only**. Use an accessible label and tooltip/title; no visible `Settings` text.

## 4. Main menu

The home screen must clearly offer both:

1. **Learn in order** — recommended connected curriculum.
2. **Learn a la carte** — direct access to individual topics/scenarios.

Learning levels are visually grouped (currently Beginner, Novice, Intermediate). Topic buttons are visually grouped separately.

Card padding should look balanced on every side. In particular, button rows must have bottom padding comparable to the top and side padding; controls should never appear to sit against the bottom edge of a card.

## 5. JD-Xi visual anchor

- The full Roland JD-Xi should usually remain on screen.
- Display it on a clean white or very light background with useful negative space for annotations.
- Use the tightly cropped 3153 × 1339 master image at `assets/images/JD-Xi.jpg`. This top view remains the normal visual anchor.
- Rear-panel instructions (POWER, DC IN) may use the authoritative rear-panel source `assets/images/JD-Xi_R.jpg` (2520 × 371) instead, shown as the full rear strip for context plus a zoomed inset. It is shown at its own aspect, never stretched to the top view's shape.
- Do **not** position annotations against arbitrary page coordinates.
- All control regions, highlights, callouts, and future zoom targets must be defined relative to the coordinate system of the hardware image they belong to (top view by default) so they scale with the instrument.
- Major home-screen regions currently include Sound Select, Knobs & Controls, Effects, Step Buttons, and Keys.
- When a procedure needs precision — especially menus, display states, closely packed controls, or Shift combinations — add a zoomed inset or temporary close-up while preserving the full keyboard as context whenever practical.

## 6. Tutorial screen pattern

A typical detailed lesson screen should provide:

- lesson/step title;
- one clear action at a time;
- exact control(s) highlighted on the JD-Xi;
- what the learner should see on the JD-Xi display when relevant;
- what the learner should listen for when relevant;
- a short explanation of why the action matters;
- Back / Next navigation;
- close-up hardware view when necessary.

For menu navigation, instructions should be explicit enough to reproduce the real hardware procedure (for example: Menu/Write, Cursor, Enter, Value -/+, Exit, Shift), not vague instructions like "open the settings."

## 7. Learning architecture

The guided path should build skills cumulatively. Current conceptual order:

1. Start here / meet the JD-Xi
2. Pick sounds
3. Play notes
4. Shape sound
5. Learn menus
6. Make a beat
7. Build a full patch

Future lessons can branch from those fundamentals into bass, pads, leads, effects/motion, saving, sequencing, performance techniques, and mini challenges.

A learner may always jump into any available topic from the home screen without following the recommended order.

## 7a. Protecting unsaved work — when the preflight applies

Prerequisites are advisory, so a learner may open any tutorial at any moment, on an
instrument in any state. A tutorial therefore may never assume there is no unsaved
work in front of it. The JD-Xi has no general undo, and it asks no confirmation before
a selection throws an edit away.

The **protect-your-work preflight** is the established answer: a step, placed
immediately before the first action that can lose work, that states plainly what kind
of work could be lost, tells the learner not to go on if they have changes they want to
keep, points at `N09` for saving, and never claims the instrument's state is clean.

**It appears where a tutorial can lose the learner's unsaved work, and nowhere else.**
Two cases qualify:

1. **Discarding** — selecting another Program or Tone, which replaces the edit buffer
   outright (OM p.6, p.9). This is the primary case.
2. **Overwriting** — turning a knob that edits the loaded sound or the program's own
   settings, which Roland lists alongside program selection as a way a created sound is
   lost.

A tutorial that only *selects a part*, *plays the keys*, *navigates a menu without
pressing Value*, or performs an action the same gesture reverses does not qualify, and
does not carry one. `B01`, `B02`, `B04`, `B05`, `N01` and `N10` deliberately have none.
`N10` is the case worth reading closely: its required recovery path changes nothing, so it
needs no preflight, and the optional `N10-S14` sound edit that follows is gated on its own
protect-your-work decision at `N10-S13` rather than on a whole-tutorial warning most
learners would meet without ever reaching the step it describes.

> **Updated by the master-plan reconciliation.** `N02` was on that list and no longer is.
> The reconciliation made it the practical Program lesson — it now selects programs, jumps
> banks and recalls a hardware Favorite, all of which discard — so it carries a preflight at
> `N02-S04`. `N03` likewise gained one, at `N03-S04`, when it started writing notes into the
> loaded pattern. Both are changes of what the tutorial *does*, not of this rule.

The rule matters in both directions. Omitting a preflight where work can be lost strands
a learner. Adding one everywhere turns it into wallpaper that stops being read, which
strands them just the same.

Where a tutorial creates an unsaved edit but cannot lose one, the honest handling is a
step that says what happened to the change and what will lose it — not a preflight.

### SYSTEM is a different risk and takes a different answer

The preflight protects the loaded **program**. SYSTEM settings are not in it: the JD-Xi
saves them automatically as the learner leaves the screen, with no confirmation and no
undo, so neither `N09` nor a preflight is any help. The deterministic way back is a value
the learner wrote down *before* changing it.

A step that has the learner change a SYSTEM value therefore has to say four things — note
the current value first, SYSTEM saves the change by itself on the way out, there is no
confirmation and no undo, and the noted value is the way back — and it has to say them in
`title`, `instruction` or `detail`. Those are the fields the lesson screen shows by
default. `whyItMatters` sits behind *Why?* and `recoveryHelp` behind *I'm lost*, so a
warning parked there reaches a learner following the primary procedure only after they have
already changed the value. That is the `I09` failure above, in a different screen.

`tools/validate-data.js` enforces it, in both directions: the four statements must be in
the visible fields, and when they are found only in the hidden ones the failure says so.

### It is enforced, not reviewed

`tools/validate-data.js` checks that any lesson reaching a step which can lose unsaved
work carries a preflight, at or before that step. This is a check rather than a review
item because a missing warning renders perfectly: nothing else in the QA suite can see it.

**The check covers the Specialty lessons as well as the canonical thirty**, and Specialty
has no exemption of its own. This rule is about the instrument, not about a lesson's
status: Specialty is presented by the same guided renderer, on the same JD-Xi, to a learner
who may have arrived directly with unsaved work in front of them. A third defect was found
by hand for exactly this reason — the **Auto Note** Specialty lesson told the learner to
"select any part and any tone you like" with no preflight in front of it, while the Vocoder
and AutoPitch lessons beside it both carried one. It now carries one too, and the check runs
over all three.

Two tutorials were written without one and both were found by hand during the clean-room
review, which is the argument for the check existing:

- **`B09`** turns the tempo knob, which overwrites a setting saved with the program. It
  was omitted by arguing that B09 had no *discarding* transition — true of the first half
  of the rule, and ignoring the second, while `B06` and `B07` carried one for exactly the
  same class of change. **This section already claimed B09 had one**, so the document and
  the content had quietly disagreed.
- **`I09`** browsed the program banks in its second step, which discards. The warning
  existed only in that step's `recoveryHelp`, which the lesson screen discloses behind the
  *I'm lost* button rather than showing by default — so a learner who arrived precisely
  because they had something to keep would not have seen it before acting.

**One tutorial is exempt, and the exemption is named in the checking code rather than
inferred**: `N09` selects no other program or tone — its Value presses name the program
and choose the save destination inside the WRITE screen — so it cannot discard the
learner's loaded work. It is the tutorial that rescues it. The risk it does carry runs the
other way, toward whatever occupies the destination slot, and it has a whole step of its
own.

### Recovery is context-specific

There is no universal undo, so no step may imply one. A recovery may only offer a move
Roland documents **for that context**, described with Roland's own scope. Worked
example: `[Shift] + [Enter]` is documented as returning to the original sound after you
have switched or edited it, so `B06` offers it for its filter, amp and LFO edits — and
`B07` does not offer it for effect settings, which Roland places outside that sentence.
Changing Program to get a stored version back may be offered only with an explicit
warning that it discards everything unsaved. Factory Reset is never a step-level
recovery.

## 8. Current implementation state

- Home screen, and a reusable lesson screen that renders every tutorial from data.
- Hash routing for tutorials and their steps, working from `file://`.
- **All thirty canonical tutorials are authored: B01–B10, N01–N10 and I01–I10.**
- Level, topic, Favorites, My Progress and Settings all route and render. **No
  placeholder controls remain on the home screen.**
- Local progress, resume and favourites persist in this browser. No accounts, no
  cloud, no audio, no MIDI.
- The baseline remains plain HTML/CSS/JavaScript with no build system, no modules and
  no runtime `fetch`; it opens by double-clicking `index.html`.
