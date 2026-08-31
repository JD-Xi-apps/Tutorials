# JD-Xi Tutorial Hub

A desktop-first visual tutorial app for complete beginners learning the Roland JD-Xi synthesizer.

The product goal is not to reproduce a conventional manual. The app should keep the physical JD-Xi visible as the learner's visual anchor, explain one action at a time in plain language, highlight the exact hardware controls involved, and use close-up views when menu navigation or dense controls require them.

## What decides what

[`docs/PRODUCT-CURRICULUM-MASTER-PLAN.md`](docs/PRODUCT-CURRICULUM-MASTER-PLAN.md) is the
owner-approved v1 product and curriculum baseline. It defines the thirty canonical
tutorials, what each one owns, what v1 deliberately leaves out, and which supporting
surfaces ship. Read it before changing what a tutorial teaches.

Official Roland documentation remains the only authority for JD-Xi *procedure*; the master
plan decides what is taught, Roland decides what is true. See
[`docs/ROLAND-SOURCE-MAP.md`](docs/ROLAND-SOURCE-MAP.md).

## Current baseline

The home-screen visual baseline is complete and frozen.

**All thirty canonical tutorials are authored.** B01–B10 run as one guided sequence,
from *Meet your JD-Xi* through to the *First 15-minute challenge*; N01–N10 continue it
from *Learn the menu controls* through building patterns and sounds to *Save your work*
and *Getting unstuck*; I01–I10 go from *Build a bass sound* to a *Performance
challenge*.

Every control on the home screen now goes somewhere. The level tiles open guided level
pages, the topic cards open their collections, and My Progress, Favorites and Settings
are real surfaces. Anything can also be reached by direct link —
`index.html#level/novice`, `index.html#topic/making-beats`, `index.html#tutorial/B05`,
or `index.html#tutorial/B05/step/8` for a specific step.

Completed tutorials, where you had got to, and your favourites are kept in the browser's
own local storage and nowhere else. There is no account and nothing is sent anywhere. If
storage is unavailable the app stays fully usable and says so; only persistence is lost.

The home screen offers two ways in, and both now work:

- **Guided learning path** — Beginner, Novice and Intermediate, each a level page listing
  its ten tutorials in order with your progress against them.
- **A la carte** — ten topic collections, from *Getting started* to *Mini challenges*,
  each gathering tutorials from any level. Four further collections (*Sound design*,
  *Arpeggiator*, *Troubleshooting*, *Performance*) are reachable from the *Other topics*
  strip on any topic page.

Every tutorial belongs to exactly one guided level and to any number of topics. The
content itself exists once; levels, topics and Favorites are all references to it.

## Running it

Open `index.html` directly in a desktop browser by double-clicking it. There is no build
step, no install, no package manager and no server — the app is static HTML, CSS and
classic JavaScript, uses no modules and makes no network requests of any kind, so it
works from a `file://` URL exactly as it does from anywhere else.

Firefox is the primary target; it is also verified in Chromium.

## Checking it

Everything in [`tools/`](tools/) is development-only and is never loaded by the app.

```
node tools/validate-data.js --beta     # catalog, registry and collections (no dependencies)
node tools/test-progress.js            # local-state failure modes (no dependencies)
node tools/qa-runtime.js               # the runtime contract, statically and on file://
node tools/qa-routes.js --strict-routes --viewports
node tools/test-behaviour.js           # what the learner experiences, end to end
node tools/qa-accessibility.js
node tools/frozen-surfaces.js --out <dir> --compare <baseline>
```

The first two need nothing installed. The rest need Playwright, which the repository does
not depend on and does not install.

## Layout contract

The app uses a 1440 × 900 reference canvas and scales the entire canvas proportionally to fit the current desktop browser window. There should be no page-level horizontal or vertical scrollbars. Height is the preferred limiting dimension; width limits scale only when required to prevent clipping.

See [`docs/DESIGN-RULES.md`](docs/DESIGN-RULES.md) for the authoritative visual and interaction rules, and [`docs/TUTORIAL-ARCHITECTURE.md`](docs/TUTORIAL-ARCHITECTURE.md) for the authoritative design of the tutorial system. Every technical claim a tutorial makes is reconciled against official Roland documentation in [`docs/ROLAND-SOURCE-MAP.md`](docs/ROLAND-SOURCE-MAP.md) and, per tutorial, in [`docs/tutorials/`](docs/tutorials/).
