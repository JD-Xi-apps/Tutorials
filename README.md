# JD-Xi Tutorial Hub

A desktop-first visual tutorial app for complete beginners learning the Roland JD-Xi synthesizer.

The product goal is not to reproduce a conventional manual. The app should keep the physical JD-Xi visible as the learner's visual anchor, explain one action at a time in plain language, highlight the exact hardware controls involved, and use close-up views when menu navigation or dense controls require them.

## Current baseline

The home-screen visual baseline is complete and frozen.

**The Beginner and Novice paths are complete.** B01–B10 run as one guided sequence,
from *Meet your JD-Xi* through to the *First 15-minute challenge*; N01–N10 continue it
from *Learn the menu controls* through building patterns and sounds to *Save your work*
and *Getting unstuck*. The Intermediate path is not authored yet.

Tutorials are reached from the home screen's level tiles and by direct link —
`index.html#tutorial/B05`, or `index.html#tutorial/B05/step/8` for a specific step.
The remaining home-screen buttons (topic cards, My Progress, Favorites, Settings) are
still placeholders and intentionally do not navigate.

The home screen supports two learning modes:

- **Guided learning path** — connected lessons in a recommended order.
- **A la carte** — jump directly to a skill, sound type, or challenge (not yet routed).

Initial categories include Beginner, Novice, Intermediate, Getting Started, Navigating Menus, Playing Notes, Making Beats, Bass Sounds, Pad Sounds, Lead Sounds, Effects & Motion, Saving Sounds, and Mini Challenges.

## Running it

Open `index.html` directly in a desktop browser. No build step or local server is currently required.

## Layout contract

The app uses a 1440 × 900 reference canvas and scales the entire canvas proportionally to fit the current desktop browser window. There should be no page-level horizontal or vertical scrollbars. Height is the preferred limiting dimension; width limits scale only when required to prevent clipping.

See [`docs/DESIGN-RULES.md`](docs/DESIGN-RULES.md) for the authoritative visual and interaction rules, and [`docs/TUTORIAL-ARCHITECTURE.md`](docs/TUTORIAL-ARCHITECTURE.md) for the authoritative design of the tutorial system. Every technical claim a tutorial makes is reconciled against official Roland documentation in [`docs/ROLAND-SOURCE-MAP.md`](docs/ROLAND-SOURCE-MAP.md) and, per tutorial, in [`docs/tutorials/`](docs/tutorials/).
