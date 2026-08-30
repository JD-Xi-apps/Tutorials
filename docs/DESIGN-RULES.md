# JD-Xi Tutorial Hub — Design Rules

This file records the current owner-approved product and layout decisions. Treat these as the baseline unless a later owner decision explicitly changes them.

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
- Keep Roland branding and Home visible.
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
- Use the tightly cropped 3153 × 1339 master image at `assets/images/JD-Xi.jpg`.
- Do **not** position annotations against arbitrary page coordinates.
- All control regions, highlights, callouts, and future zoom targets must be defined relative to the master keyboard image coordinate system so they scale with the instrument.
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

## 8. Current implementation state

- Main-menu UI only.
- Navigation and cards are placeholders.
- No persistence, accounts, audio, MIDI, or lesson routing yet.
- The current baseline is intentionally simple HTML/CSS/JavaScript with no build system.
