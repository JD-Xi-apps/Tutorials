# Development tooling

Everything in this directory is **development-only**. `index.html` never loads
any of it, and it introduces no runtime dependency: the shipped app remains
static HTML/CSS/JavaScript that opens by double-clicking `index.html` from
`file://`, with no build step, no modules, no `fetch` and no server.

The validators deliberately read the *same* classic scripts the browser reads,
rather than a parallel description of the data, so a check can never pass
against a copy that has drifted from what ships.

## `validate-data.js`

```
node tools/validate-data.js          # structural checks
node tools/validate-data.js --beta   # additionally require the full 30-tutorial catalog
```

No dependencies. Checks the canonical catalog, the hardware registry and the
collections against the rules in `docs/TUTORIAL-ARCHITECTURE.md`:
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

`--strict-routes` treats a route that falls back to `#home` as a failure. Use it
once a surface is implemented; without it an unimplemented route passes silently
because falling back *is* its correct behaviour.

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

## Playwright

Playwright is not a dependency of this repository and is not installed by it.
Where it is already available, both Chromium and Firefox are useful — Firefox is
the owner's primary browser. If neither is available the data validator still
runs, because it has no dependencies at all.
