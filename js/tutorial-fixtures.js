/*
 * JD-Xi Tutorial Hub - development fixtures for the lesson renderer.
 *
 * THIS FILE CONTAINS NO CANONICAL TUTORIAL CONTENT.
 *
 * Everything here exists to exercise the renderer: one non-canonical fixture
 * whose id ("renderer-demo") deliberately does not match the canonical B##/N##/I##
 * scheme, so it can never be confused with a real tutorial, and can never be
 * picked up by the guided path or by a topic collection.
 *
 * No step below describes a real JD-Xi operation. Nothing here claims what the
 * instrument does, what its display shows, or what any control sounds like.
 * Real procedures require Roland-source verification first
 * (docs/TUTORIAL-ARCHITECTURE.md, content-authority rule).
 *
 * hardwareTargets reference ids in window.JDXI_HARDWARE_TARGETS. Geometry is
 * never copied here - the registry is the only source of coordinates.
 *
 * Classic script on purpose - the app runs from file://; no modules, no fetch.
 */

window.JDXI_TUTORIAL_FIXTURES = {
  "renderer-demo": {
    id: "renderer-demo",
    canonical: false,
    title: "Lesson renderer test fixture",
    shortTitle: "Renderer test",
    summary:
      "Engineering fixture that exercises every visual mode of the lesson renderer. Not a tutorial.",
    steps: [
      {
        id: "s1",
        title: "Visual mode: full",
        instruction: "Renderer test: locate the highlighted Keys area.",
        detail:
          "This step exercises the full visual mode. The whole instrument stays visible and one canonical target is highlighted from the registry.",
        hardwareTargets: ["keys"],
        visualMode: "full",
        expectedSound:
          "Renderer test: this card demonstrates where a listening cue will appear.",
        whyItMatters:
          "Renderer test: this panel demonstrates where optional secondary explanation appears. It never blocks progress.",
        checkpoint:
          "Renderer test: the highlight sits on the keyboard and its label is readable.",
        recoveryHelp:
          "Renderer test: confirm the highlighted area matches the label, then continue.",
        nextHint: "Next: the same instrument, plus a magnified inset.",
      },
      {
        id: "s2",
        title: "Visual mode: full-plus-inset",
        instruction:
          "Renderer test: locate Menu/Write in the full view and inset.",
        detail:
          "This step exercises full-plus-inset. The full instrument remains visible and a magnified inset is generated at runtime from the same master image using the target's canonical zoom crop.",
        hardwareTargets: ["menuWriteButton"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "Renderer test: an inset exists so a small control stays identifiable without losing the whole instrument as context.",
        checkpoint:
          "Renderer test: the same control is highlighted in both the full view and the inset.",
        recoveryHelp:
          "Renderer test: confirm the highlighted area matches the label, then continue.",
        nextHint: "Next: a dominant control close-up.",
      },
      {
        id: "s3",
        title: "Visual mode: control-closeup",
        instruction:
          "Renderer test: compare this control close-up with its location on the full JD-Xi.",
        detail:
          "This step exercises control-closeup. The crop dominates, and a smaller context view shows where on the instrument the crop was taken from.",
        hardwareTargets: ["effectsSection"],
        visualMode: "control-closeup",
        expectedSound:
          "Renderer test: this card demonstrates where a listening cue will appear.",
        checkpoint:
          "Renderer test: the close-up and the context view agree on where the area is.",
        recoveryHelp:
          "Renderer test: confirm the highlighted area matches the label, then continue.",
        nextHint: "Next: the display-focus layout.",
      },
      {
        id: "s4",
        title: "Visual mode: display-focus",
        instruction:
          "Renderer test: verify display-focus layout and navigation-control context.",
        detail:
          "This step exercises display-focus. The display preview is prominent while the real display and its navigation controls stay visible and highlighted on the instrument.",
        hardwareTargets: ["display", "cursorButtons"],
        visualMode: "display-focus",
        // Synthetic placeholder only. The real character grid of the JD-Xi
        // display is not authoritatively documented (source-map Q4), so this
        // is explicitly labelled as a preview and is NOT presented as
        // something the instrument would ever show.
        expectedDisplay: ["DISPLAY TEST", "STEP 4"],
        expectedSound:
          "Renderer test: this card demonstrates where a listening cue will appear.",
        whyItMatters:
          "Renderer test: verified display strings will be supplied by later content work, not invented by the renderer.",
        checkpoint:
          "Renderer test: the preview is clearly marked synthetic and both targets are highlighted.",
        recoveryHelp:
          "Renderer test: confirm the highlighted area matches the label, then continue.",
      },
    ],
  },
};
