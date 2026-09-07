# Development tooling

Everything in this directory is **development-only**. `index.html` never loads
any of it, and it introduces no runtime dependency: the shipped app remains
static HTML/CSS/JavaScript that opens by double-clicking `index.html` from
`file://`, with no build step, no modules, no `fetch` and no server.

The validators deliberately read the *same* classic scripts the browser reads,
rather than a parallel description of the data, so a check can never pass
against a copy that has drifted from what ships.

## `load-catalog.js`

Not a check of its own — the **shared loader** the validators build on. It runs
the app's classic browser scripts (`js/hardware-targets.js`, `js/tutorials.js`,
`js/tutorial-fixtures.js`, and the optional `js/collections.js`,
`js/quick-reference.js`, `js/specialty.js`, `js/explorer.js`) inside a Node `vm`
context whose only host object is a bare `window`, then hands back what they
assigned: `{ root, registry, tutorials, fixtures, collections, reference,
specialty, explorer }`.

It exists so a check reads **the same bytes the browser reads**. The alternative
— a JSON export, or a second description of the catalog kept beside it — can
drift from what ships, and a validator passing against a drifted copy is worse
than no validator. Nothing in it is a user-facing or build dependency:
`index.html` never loads it, `require()` appears here and not in the shipped
app, and the runtime contract (no build, no modules, no server) is untouched.

The three registry scripts are required and a missing one throws by name; the
four catalog scripts are optional and simply come back `null`, so a caller can
run against a partial tree rather than crashing on it.

Currently consumed by `validate-data.js`. Any new dependency-free check should
use it rather than parsing `js/` again.

## `validate-data.js`

```
node tools/validate-data.js          # structural checks
node tools/validate-data.js --beta   # additionally require the full 30-tutorial catalog
```

No dependencies. Checks the canonical catalog, the hardware registry, the
collections, **Quick Reference, Specialty and the Hardware Explorer** against
the rules in `docs/TUTORIAL-ARCHITECTURE.md` and
`docs/PRODUCT-CURRICULUM-MASTER-PLAN.md`:
tutorial/step identity and uniqueness, level/order contiguity, prerequisite
resolution, hardware-target existence, the same-image-per-step rule, visual-mode
validity, the presence of `instruction` / `checkpoint` / `recoveryHelp` on every
step, display provenance, the ≤16-character `expectedDisplay` guard, collection
membership, per-tutorial source notes, and the prohibition on geometry in
content.

Two checks are worth naming because they catch silent failures rather than
crashes:

- a step in an inset visual mode whose targets carry no `zoom` renders the full
  view and drops the magnification without any error;
- a `zoom` that does not contain its own `region` magnifies the wrong area.

Three master-plan surfaces add their own checks, each for the same reason —
the defect renders perfectly and nothing else would see it:

- **Quick Reference** must hold exactly 21 entries, every `learnIn` must name a
  real tutorial, and a destructive entry must carry a warning. That last check
  runs *both* ways: an entry whose own text describes erasing but which is not
  flagged and carries no warning fails too, because that is the direction drift
  actually takes. A second rule guards scope: any line presenting `[Shift]` +
  Cursor must name the grouped setting or edit screen it belongs to *in that
  line*, because `ROLAND-SOURCE-MAP.md` §6.2 documents it only there. Checking
  the entry as a whole was tried and is not enough — `menu-controls` names
  SYSTEM in an unrelated note, which let the unqualified line back through, and
  a learner reads the line rather than the entry.
- **Specialty** must hold exactly 3 lessons whose ids — and step ids — cannot be
  mistaken for canonical ones, in either direction, and whose instructional text
  never strays into the external-audio input v1 excludes. Specialty is **also**
  checked for discard/overwrite risk by the protect-your-work preflight check
  below, with no exemption of its own: the risk is a property of the instrument,
  not of a lesson's status, and restricting that check to `B##`/`N##`/`I##` let a
  real defect ship.
- **The Hardware Explorer** must describe every registry target with a Roland
  source, describe nothing that is not a target, and list only top-level targets
  as major groups, so the landing view cannot become 99 simultaneous labels.

## `qa-routes.js`

```
node tools/qa-routes.js [--browser chromium|firefox] [--viewports]
                        [--strict-routes] [--shots <dir>] [--quiet]
```

Needs Playwright. Loads the app from a real `file://` URL — never a local
server, because "works on localhost" would not prove the runtime contract.
Route coverage is **generated from the catalog**, so new tutorials are covered
without editing this file. A route passes only with no console error, no page
error, no failed resource, no page-level scrollbar and a rendered view. Also
asserts the documented fallbacks (malformed route, unknown tutorial, invalid
step) and browser Back/Forward.

An Explorer control route (`#explorer/control/<id>`) renders its panel's
overview with the control's popup open, so it is covered here like any other
route, and the viewport sweep includes both overviews and one popup.

`--strict-routes` treats a generated route that does not stay where it was sent as
a failure. Every surface the catalog generates is now built, so a fallback means a
regression — a lost surface, a mis-parsed route, a renamed id — and not an
unfinished screen. Run with the flag; without it a redirect is only reported, and
a route that quietly lands on `#home` still renders a valid page and passes.

## `test-progress.js`

```
node tools/test-progress.js
```

No dependencies, no browser. Loads `js/progress.js` against a fake `localStorage` so
every failure mode can be provoked deliberately: malformed JSON, wrong stored types,
missing fields, stale tutorial and step ids, a record written by a newer build, and
storage that throws on read or on write.

The contract under test is that the app stays fully navigable when storage misbehaves —
only persistence may degrade.

Two sections are worth naming, because both guard defects that were invisible from the
outside — the app rendered correctly while the data underneath it was wrong:

- **future schema.** Rejecting a newer record on *read* is only half the guarantee; the
  next write put a v2 record over the top of it. Every write path is now asserted
  separately against a v99 record carrying a field this build cannot know about, because
  one unguarded path is enough to destroy it. The session still works entirely in memory,
  and `resetEverything` — which *deletes* rather than rewrites — is the one deliberate
  exception. Ordinary corruption is asserted **not** to trigger the lock: one bad byte
  must not leave a learner unable to save for the rest of the session.
- **step resolution.** A stored step id that no longer resolves still falls back to index
  0 so navigation works, but the result was indistinguishable from a learner genuinely on
  step 1 — which let the app claim it remembered a position it had invented. `resume()`
  now reports `stepResolved` / `stepStatus`, and the tests pin all three cases (`exact`,
  `stale`, `missing`) against a real catalog id rather than a spelled-out one.

## `test-behaviour.js`

```
node tools/test-behaviour.js [chromium|firefox]
```

Needs Playwright. Drives the real app from a real `file://` URL and asserts what the
learner experiences: bookmarking from a lesson and finding it on Bookmarked, persistence
across a reload, the resume point, completion counting, the two-press Settings resets and
their cancel path, and browser Back/Forward across the new surfaces.

It also covers what the learner is **told** about their stored progress, which is where
the same defect keeps reappearing in different clothes — the app stating something about
their data that is not true. A saved step that still resolves keeps its exact wording; a
saved step the curriculum no longer contains says "Resume from the beginning" on both
Home and My Progress, names no step number, draws no progress fraction, and goes where it
says it goes. A record written by a newer build produces its own notice, which must not
reuse the storage-unavailable wording, must not blame the browser and must not call the
record corrupt — and the record is asserted still present **byte for byte** at the end of
a session that rendered several surfaces and pressed a control that ordinarily writes.

It also asserts two things that must **not** happen: a development fixture touching
learner state, and an empty collection rendering a placeholder page. The first of those
caught a real defect — a class rule silently overriding the `hidden` attribute, leaving
the bookmark control visible on a fixture.

## `test-explorer.js`

```
node tools/test-explorer.js [chromium|firefox]
```

Needs Playwright. The Hardware Explorer is interaction-heavy, so it has its own
behaviour suite rather than a screenshot: Explorer home is exactly two panel
choices with no control inventory; each overview lists every major area once,
by name only, and fits the stage with nothing scrolling, clipped or hidden at
every supported window shape; pointing at a name lights its box on the
instrument and vice versa, for the pointer and for keyboard focus alike; a box
or a name opens the same popup, children step inside it, a parent step goes
back, and there is never a second popup; the popup behaves as a dialog (focus
in, Tab trapped, Escape, backdrop and Close all close it, focus returns to what
opened it); and a control deep link or a search hit lands on the right overview
with the popup already open, closing leaves the learner there, and browser
Back and Forward behave.

It also walks **every** registry target through the popup and asserts, on the
rendered text, that what Roland says it does is there and that none of the
curriculum-mapping or citation material the owner removed from the Explorer is
- *Where this is taught*, *Not covered*, *Nearby controls*, *Source:*. Those
words still appear in the data and the source notes, on purpose; the check is
on what the learner sees.

## `qa-runtime.js`

```
node tools/qa-runtime.js [chromium|firefox]
```

Checks the runtime contract two ways, because it is easy to break by accident and hard to
notice — a development machine often has a server running, and a cached asset makes a
remote reference look local.

Statically, over the shipped files only (`tools/` and `docs/` excluded): no `fetch`, no
`XMLHttpRequest`, no ES module syntax, no `type="module"`, no `require`, no WebSocket,
no service worker; every `src`/`href` in `index.html` a relative path that exists on disk;
no package manifest, lockfile or build config at the root; and the three canonical image
assets byte-identical to their recorded SHA-256 baselines.

Then dynamically: the app is opened cold on a **deep link** from a real `file://` URL, and
every request the browser makes is watched. A single non-`file://` request fails the run.
It also loads the app with `localStorage` rigged to throw on access and asserts that every
route still renders, that no error is logged, and that the learner is told persistence is
unavailable.

## `qa-accessibility.js`

```
node tools/qa-accessibility.js [chromium|firefox]
```

Needs Playwright. Not a broad audit and not trying to be — it asserts the specific
properties this app has to hold, on every route the catalog generates: every control is
a real `<button>` with an accessible name, icon-only controls carry explicit labels,
decorative glyphs are hidden so they do not pollute a control's spoken name, each surface
has exactly one `h1`, the bookmark toggle exposes `aria-pressed`, and the Settings reset
panel states its consequence — what it clears, and that it cannot be undone — before any
of its controls act.

The focus check tabs to a control rather than calling `.focus()`, because `:focus-visible`
is exactly the distinction between a keyboard user, who must see the ring, and a mouse
user, who should not — calling `.focus()` tests the wrong state.

Two integration checks live here because neither branch could see the other. The lesson
heading is focused on every arrival, including the mouse user's, so it must paint **no**
ring — asserted on computed style, together with its `.cat-title` twin, and paired with
the assertion that the footer buttons beside it still show theirs, so "remove an outline"
can never quietly become "remove the outlines". And the natively `disabled` Back from the
semantics work is checked against the unavailable styling from the CSS work: muted, no
pointer cursor, no lift on hover, and the same box as when it is available.

## `frozen-surfaces.js`

```
node tools/frozen-surfaces.js --out <dir> [--browser chromium|firefox]
node tools/frozen-surfaces.js --out <dir> --compare <baselineDir>
```

Needs Playwright. Captures the owner-approved surfaces — Home, the global
topbar, and **every** step of B01, B02 and N01 — and with `--compare` diffs them
per pixel against a baseline, reporting the number of differing pixels and the
bounding box of the change rather than a bare pass/fail.

Baselines are not committed; they are reproducible from any commit:

```
git worktree add /tmp/jdxi-base <sha>
node tools/frozen-surfaces.js --out /tmp/jdxi-baseline   # run inside the worktree
```

Then compare the working tree against that directory. Rendering is
deterministic for a given browser build, so an unchanged surface diffs to
exactly zero pixels; anything else needs an explanation.

## Protecting the learner's work

Two checks guard the same class of defect from opposite ends: a warning that is
absent, and a warning that is present but not where the learner will read it.
Neither is visible to any render or route check, because both failures render
perfectly.

**The protect-your-work preflight.** DESIGN-RULES.md §7a: a lesson that reaches a
step which can discard or overwrite unsaved work must carry the preflight, at or
before that step. It runs over the canonical catalog **and the Specialty
lessons** — Specialty uses the same renderer and the same instrument, so it
carries the same obligation, and the Auto Note lesson was found without one. The
single exemption, `N09`, is named in the code so that skipping the preflight has
to be argued for in the file rather than inferred. The detector is also asserted
non-vacuous: a title matcher that matched nothing would report every lesson safe.

**The SYSTEM auto-save warning.** SYSTEM is the one screen that saves itself, with
no confirmation and no undo, so the only deterministic way back is a value the
learner wrote down first. The lesson screen shows `title`, `instruction` and
`detail` by default and hides `whyItMatters` behind *Why?* and `recoveryHelp`
behind *I'm lost* — so a step that operates Value inside SYSTEM has to state all
four of *note it first*, *it saves itself*, *there is no undo* and *the noted
value is the way back* in the visible fields. When it states them only in the
hidden ones, the failure message says so, because that is the mistake worth
naming: the warning existed, and arrived too late.

## Excluded-content and terminology checks

`validate-data.js` also guards two things the master plan settles and that a
later edit could quietly undo.

**Excluded guided content.** v1 leaves a specific list of subjects out of the
guided course, and several of them were taught before the reconciliation, so
this is a regression guard rather than a theoretical one. It reads **runtime
data only** — `js/tutorials.js` and `js/specialty.js`. Source notes discuss the
exclusions at length by design, and a check that failed because a document
said "Realtime Recording is excluded" would be the crude check the brief warns
against. `displayNote` is exempt, because the display house rule requires it to
name its Roland source including a version supplement; B01, B02 and N01 are
exempt as calibrated baselines.

**Bookmarked versus Favorite.** The app feature is *Bookmarked*; *Favorite* is
the JD-Xi's own hardware feature. The check runs on the shipped UI in both
directions: `index.html` and `js/app.js` may not use the app wordings, and the
three tutorials that teach the hardware feature must still name it.

## A navigation trap worth knowing

`page.goto()` to the URL the page is **already** on is a same-document no-op:
no load, no `hashchange`, so the router never re-runs and the previous view
stays on screen. It looks exactly like a routing bug.

This bites hardest on the bare tutorial route, which is a decision point —
visit `#tutorial/B04`, mark it complete, visit `#tutorial/B04` again expecting
the review overview, and you get the lesson you were already looking at.
`test-behaviour.js`'s `goto` helper reloads when the target matches the current
URL, for exactly this reason.

## Playwright

Playwright is not a dependency of this repository and is not installed by it.
Where it is already available, both Chromium and Firefox are useful — Firefox is
the owner's primary browser. If neither is available the data validator still
runs, because it has no dependencies at all.
