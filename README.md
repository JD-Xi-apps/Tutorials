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

**All thirty canonical tutorials are authored, and reconciled against the master plan.**
B01–B10 run as one guided sequence, from *Meet your JD-Xi* to a *First 15-minute
challenge*; N01–N10 continue from *Learn the menu controls* through building patterns and
sounds to *Save your work* and *Getting unstuck*; I01–I10 go from *Build a bass sound* to
a *Performance challenge* played on a groove you built and saved yourself.

The count is exactly thirty and the ids never move. Everything else is a reference to
them.

### The six ways in

- **Guided learning path** — Beginner, Novice and Intermediate, each a level page listing
  its ten tutorials in order with your progress against them.
- **Topics** — ten collections on the home screen, from *Getting started* to *Mini
  challenges*, each gathering tutorials from any level. Four more (*Sound design*,
  *Arpeggiator*, *Troubleshooting*, *Performance*) are reachable from the *Other topics*
  strip on any topic page.
- **Hardware Explorer** — every control on the instrument, top panel and rear, with what
  it does in plain language and which tutorial teaches it. Controls the course does not
  teach are shown too, marked *Not covered in the guided course*.
- **Quick Reference** — 21 short procedures for looking something up rather than learning
  it. Destructive ones carry their warning above the procedure.
- **Specialty** — three optional lessons for the microphone that came with the JD-Xi:
  Vocoder, AutoPitch and Auto Note. Optional throughout, and never counted toward the
  thirty.
- **Search** — one magnifying glass in the topbar, over everything above. Results are
  grouped, and a step-level hit links to that exact step.

Anything can also be reached by direct link — `index.html#level/novice`,
`index.html#topic/making-beats`, `index.html#tutorial/B05/step/8`,
`index.html#reference/save-program`, `index.html#explorer/control/cutoffKnob`.

### Progress, and what counts

A tutorial is complete when you press **Finish Tutorial** on its last step. Reaching the
last step, or deep-linking to it, does not complete anything.

Reopening a tutorial you were part-way through offers **Continue** or **Start over**
rather than choosing for you. Reopening a completed one gives you a review overview where
any step is one click away. Finishing B10, N10 and I10 closes the Beginner path, the
Novice path and the course.

Completions, your place, and your **Bookmarked** lessons are kept in this browser's local
storage and nowhere else. There is no account and nothing is sent anywhere. If storage is
unavailable the app stays fully usable and says so; only persistence is lost.

> **Bookmarked is the app feature. Favorite is the JD-Xi's.** The instrument has its own
> Favorite buttons, which several tutorials teach; the app never uses that word for
> itself, and `tools/validate-data.js` fails the build if it starts to.

## Running it

Open `index.html` directly in a desktop browser by double-clicking it. There is no build
step, no install, no package manager and no server — the app is static HTML, CSS and
classic JavaScript, uses no modules and makes no network requests of any kind, so it
works from a `file://` URL exactly as it does from anywhere else.

Firefox is the primary target; it is also verified in Chromium.

## Checking it

Everything in [`tools/`](tools/) is development-only and is never loaded by the app.

```
node tools/validate-data.js --beta     # catalog, registry, collections, Quick Reference,
                                       # Specialty and the Explorer (no dependencies)
node tools/test-progress.js            # local-state failure modes and the schema-1
                                       # migration (no dependencies)
node tools/qa-runtime.js               # the runtime contract, plus a cold file:// load of
                                       # every route family
node tools/qa-routes.js --strict-routes --viewports
node tools/test-behaviour.js           # what the learner experiences, end to end
node tools/qa-accessibility.js
node tools/frozen-surfaces.js --out <dir> --compare <baseline>
```

Add `--browser firefox` to `qa-routes.js`, or a `firefox` argument to `test-behaviour.js`
and `qa-accessibility.js`, to run the same suites in the owner's default browser.

The first two need nothing installed. The rest need Playwright, which the repository does
not depend on and does not install.

## Layout contract

The app uses a 1440 × 900 reference canvas and scales the entire canvas proportionally to fit the current desktop browser window. There should be no page-level horizontal or vertical scrollbars. Height is the preferred limiting dimension; width limits scale only when required to prevent clipping.

See [`docs/DESIGN-RULES.md`](docs/DESIGN-RULES.md) for the authoritative visual and
interaction rules, and [`docs/TUTORIAL-ARCHITECTURE.md`](docs/TUTORIAL-ARCHITECTURE.md)
for the authoritative design of the tutorial system.

Every technical claim traces to official Roland documentation:

| Where | What it records |
|---|---|
| [`docs/ROLAND-SOURCE-MAP.md`](docs/ROLAND-SOURCE-MAP.md) | which Roland document governs which procedure |
| [`docs/tutorials/`](docs/tutorials/) | a per-step evidence table for every tutorial, and for the Specialty lessons |
| [`docs/QUICK-REFERENCE-SOURCES.md`](docs/QUICK-REFERENCE-SOURCES.md) | the source behind each of the 21 procedures |
| [`docs/HARDWARE-EXPLORER-SOURCES.md`](docs/HARDWARE-EXPLORER-SOURCES.md) | the source behind every control description |
| [`docs/HARDWARE-TARGETS.md`](docs/HARDWARE-TARGETS.md) | the measured hardware registry |

No Roland PDF is committed to this repository — only links, page references and our own
reconciliation notes.
