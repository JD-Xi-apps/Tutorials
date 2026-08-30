# JD-Xi Tutorial Hub

A desktop-first visual tutorial app for complete beginners learning the Roland JD-Xi synthesizer.

The product goal is not to reproduce a conventional manual. The app should keep the physical JD-Xi visible as the learner's visual anchor, explain one action at a time in plain language, highlight the exact hardware controls involved, and use close-up views when menu navigation or dense controls require them.

## Current baseline

The repository begins with a working main-menu visual demo. All buttons are placeholders; they intentionally do not navigate yet.

The home screen supports two future learning modes:

- **Guided learning path** — connected lessons in a recommended order.
- **A la carte** — jump directly to a skill, sound type, or challenge.

Initial categories include Beginner, Novice, Intermediate, Getting Started, Navigating Menus, Playing Notes, Making Beats, Bass Sounds, Pad Sounds, Lead Sounds, Effects & Motion, Saving Sounds, and Mini Challenges.

## Running it

Open `index.html` directly in a desktop browser. No build step or local server is currently required.

## Layout contract

The app uses a 1440 × 900 reference canvas and scales the entire canvas proportionally to fit the current desktop browser window. There should be no page-level horizontal or vertical scrollbars. Height is the preferred limiting dimension; width limits scale only when required to prevent clipping.

See [`docs/DESIGN-RULES.md`](docs/DESIGN-RULES.md) for the authoritative visual and interaction rules.
