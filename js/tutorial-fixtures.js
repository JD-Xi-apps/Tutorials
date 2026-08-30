/*
 * JD-Xi Tutorial Hub - development fixtures for the lesson renderer.
 *
 * THIS FILE CONTAINS NO CANONICAL TUTORIAL CONTENT.
 *
 * Everything here exists to exercise the renderer: non-canonical fixtures
 * whose ids ("renderer-demo", "rear-panel-demo") deliberately do not match the
 * canonical B##/N##/I## scheme, so they can never be confused with a real
 * tutorial, and can never be picked up by the guided path or by a topic
 * collection.
 *
 *   renderer-demo    top-view regression suite: one step per visual mode
 *   rear-panel-demo  rear-image verification tour of every documented rear-panel
 *                    target, location only - no power, connection, grounding or
 *                    setup procedure
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

  "rear-panel-demo": {
    id: "rear-panel-demo",
    canonical: false,
    title: "Rear-panel renderer test fixture",
    shortTitle: "Rear panel test",
    summary:
      "Engineering fixture: a visual verification tour of every documented rear-panel target on the rear hardware image. Not a tutorial.",
    steps: [
      {
        id: "r1",
        title: "Rear image: full",
        instruction: "Renderer test: identify the full rear connector panel.",
        detail:
          "This step exercises the rearPanel section target: the whole rear strip is shown at its natural aspect with the connector recess outlined.",
        hardwareTargets: ["rearPanel"],
        visualMode: "full",
        checkpoint:
          "Renderer test: one outline covers the recessed connector strip and nothing above it.",
        recoveryHelp:
          "Renderer test: confirm the highlighted area matches the label, then continue.",
        nextHint: "Next: the power-connection cluster.",
      },
      {
        id: "r2",
        title: "Rear image: power cluster",
        instruction: "Renderer test: locate the rear power-connection area.",
        detail:
          "Three same-image targets: the cord hook, the DC IN jack and the POWER switch. The inset uses the cord hook's cluster zoom. Location test only.",
        hardwareTargets: ["cordHook", "dcInJack", "powerSwitch"],
        visualMode: "full-plus-inset",
        checkpoint:
          "Renderer test: three highlights sit on the leftmost three items of the strip, and the inset frames all three.",
        recoveryHelp:
          "Renderer test: confirm the highlighted areas match their labels, then continue.",
        nextHint: "Next: the USB COMPUTER and MIDI area.",
      },
      {
        id: "r3",
        title: "Rear image: computer and MIDI",
        instruction: "Renderer test: locate the USB COMPUTER and MIDI connection area.",
        detail:
          "The USB COMPUTER port plus the MIDI group target. The inset frames the square USB socket and both DIN sockets together. Location test only.",
        hardwareTargets: ["usbComputerPort", "midiPorts"],
        visualMode: "full-plus-inset",
        checkpoint:
          "Renderer test: the USB box is on the square socket and the MIDI box encloses both round sockets and their legend.",
        recoveryHelp:
          "Renderer test: confirm the highlighted areas match their labels, then continue.",
        nextHint: "Next: the external-input controls.",
      },
      {
        id: "r4",
        title: "Rear image: external input",
        instruction: "Renderer test: locate the external-input controls.",
        detail:
          "The LINE/GUITAR switch and the INPUT (MONO) jack, right of centre on the strip. Location test only.",
        hardwareTargets: ["lineGuitarSwitch", "inputMonoJack"],
        visualMode: "full-plus-inset",
        checkpoint:
          "Renderer test: one box on the small slide switch, one on the round jack beside it.",
        recoveryHelp:
          "Renderer test: confirm the highlighted areas match their labels, then continue.",
        nextHint: "Next: the audio-output area.",
      },
      {
        id: "r5",
        title: "Rear image: audio outputs",
        instruction: "Renderer test: locate the rear audio-output area.",
        detail:
          "The OUTPUT group (L/MONO and R/CLICK OUT) and the PHONES jack. Location test only.",
        hardwareTargets: ["outputJacks", "phonesJack"],
        visualMode: "full-plus-inset",
        checkpoint:
          "Renderer test: the OUTPUT box encloses the two left jacks and their legend; the PHONES box is on the third jack only.",
        recoveryHelp:
          "Renderer test: confirm the highlighted areas match their labels, then continue.",
        nextHint: "Next: the remaining utility hardware.",
      },
      {
        id: "r6",
        title: "Rear image: utility hardware",
        instruction: "Renderer test: locate the remaining rear-panel utility hardware.",
        detail:
          "The ground terminal and the security slot at the right end of the strip. Location test only; no grounding guidance is given here.",
        hardwareTargets: ["groundTerminal", "securitySlot"],
        visualMode: "full-plus-inset",
        checkpoint:
          "Renderer test: one box on the bright screw terminal, one on the narrow slot to its right.",
        recoveryHelp:
          "Renderer test: confirm the highlighted areas match their labels, then continue.",
      },
    ],
  },
};
