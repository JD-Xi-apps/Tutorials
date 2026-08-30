/*
 * JD-Xi Tutorial Hub - canonical tutorial content.
 *
 * Every object in window.JDXI_TUTORIALS is a real, learner-facing tutorial.
 * Being present here IS canonical identity; there is no separate flag. The
 * keys are the permanent tutorial IDs from docs/TUTORIAL-ARCHITECTURE.md §4
 * (B##, N##, I##) and are never renumbered or reused.
 *
 * Shape: the Tutorial and Step models of TUTORIAL-ARCHITECTURE.md §6-§7.
 * hardwareTargets are IDs in window.JDXI_HARDWARE_TARGETS - never coordinates,
 * never image paths. Learner-facing factual statements are reconciled against
 * official Roland documentation; the per-step record for each tutorial lives
 * in docs/tutorials/<ID>-SOURCE-NOTES.md.
 *
 * Development fixtures live in js/tutorial-fixtures.js and are deliberately
 * NOT in this object.
 *
 * Classic script on purpose - the app runs from file://; no modules, no fetch.
 */

window.JDXI_TUTORIALS = {
  B01: {
    id: "B01",
    level: "beginner",
    order: 1,
    title: "Meet your JD-Xi",
    shortTitle: "Meet your JD-Xi",
    summary:
      "A quick visual tour of the JD-Xi. You will find the main areas of the instrument, one at a time. There is nothing to memorize, and no settings are changed yet.",
    estimatedMinutes: 6,
    prerequisites: [],
    learningGoals: [
      "Find the keys and the area where sounds are chosen.",
      "Find the main control sections, the pattern controls and the display.",
      "Find the rear panel and the power area.",
    ],
    // Source record: docs/tutorials/B01-SOURCE-NOTES.md
    // B01 is a silent orientation tour: steps intentionally carry no
    // expectedSound or expectedDisplay. Nothing here is an operating procedure.
    steps: [
      {
        id: "B01-S01",
        title: "The whole JD-Xi",
        instruction: "Look at the whole JD-Xi.",
        detail:
          "The keys run across the bottom, with the controls grouped above them. You do not need to memorize anything yet.",
        hardwareTargets: [],
        visualMode: "full",
        whyItMatters:
          "Seeing the whole layout first makes the close-up areas easier to place later.",
        checkpoint:
          "You can see the full row of keys and the control panel at the same time.",
        recoveryHelp:
          "If you only see part of the instrument, make sure the tutorial window itself is fully visible. The page fits itself to your browser window.",
        nextHint: "First, find the part your hands will use most.",
      },
      {
        id: "B01-S02",
        title: "Find the keys",
        instruction: "Find the keys along the bottom.",
        detail:
          "This is the row of black and white keys you will play in later tutorials.",
        hardwareTargets: ["keys"],
        visualMode: "full",
        checkpoint: "The highlight covers the full row of playable keys.",
        recoveryHelp: "Look along the bottom edge of the instrument.",
        nextHint:
          "Now find the four buttons that choose which part of the JD-Xi you are working with.",
      },
      {
        id: "B01-S03",
        title: "Find the four Part Select buttons",
        instruction: "Find the four Part Select buttons.",
        detail:
          "They are labeled Digital Synth 1, Digital Synth 2, Drums, and Analog Synth.",
        hardwareTargets: ["partSelectGroup"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "Later, these buttons let you choose which of the JD-Xi's four parts you are working with.",
        checkpoint: "You can see all four Part Select buttons together.",
        recoveryHelp:
          "Look in the left half of the control panel, to the right of the display. The magnified view shows the four buttons in a column.",
        nextHint: "Nearby are the controls for choosing sounds.",
      },
      {
        id: "B01-S04",
        title: "Find the sound-selection controls",
        instruction: "Locate the controls used to choose sounds.",
        detail:
          "You are looking for the Category dial and the Tone −/+ buttons.",
        hardwareTargets: ["categoryDial", "toneButtons"],
        visualMode: "full",
        checkpoint:
          "You can point to both the Category dial and the Tone buttons.",
        recoveryHelp:
          "Use the two highlight labels to match the dial and the −/+ button pair.",
        nextHint: "Next, the larger sections that change how a sound behaves.",
      },
      {
        id: "B01-S05",
        title: "Find the sound-shaping sections",
        instruction: "Locate the four main sound-shaping sections.",
        detail:
          "They are labeled FILTER, AMP/ENV, LFO, and EFFECTS. Later tutorials will let you hear what these controls change.",
        // Four targets on purpose: one visual-orientation action, not four
        // sequential hardware actions (see B01-SOURCE-NOTES.md).
        hardwareTargets: [
          "filterSection",
          "ampEnvSection",
          "lfoSection",
          "effectsSection",
        ],
        visualMode: "full",
        whyItMatters:
          "These are the main hands-on areas you will use when you start changing sounds.",
        checkpoint: "You can point to all four labeled sections.",
        recoveryHelp:
          "Look across the top-right half of the control panel. The four section names are printed above their knobs.",
        nextHint: "Below them is the area used for patterns.",
      },
      {
        id: "B01-S06",
        title: "Find the pattern controls",
        instruction: "Locate the pattern area.",
        detail:
          "Look for the Pattern Sequencer controls and the row of buttons numbered 01 through 16.",
        hardwareTargets: ["patternSequencerSection", "stepButtons"],
        visualMode: "full",
        whyItMatters: "Later lessons will use this area for patterns and beats.",
        checkpoint:
          "You can point to the Pattern Sequencer controls and the numbered button row.",
        recoveryHelp:
          "Look directly above the keys. The numbered buttons run in a line toward the right.",
        nextHint: "Now find where the JD-Xi shows you information.",
      },
      {
        id: "B01-S07",
        title: "Find the display",
        instruction: "Find the small display.",
        detail:
          "The display is where the JD-Xi shows information while you work.",
        hardwareTargets: ["display"],
        visualMode: "full-plus-inset",
        checkpoint: "The highlight is on the small rectangular display.",
        recoveryHelp:
          "Look above the left side of the keyboard, inside the control panel.",
        nextHint:
          "One more front-panel control is especially important before you make sound.",
      },
      {
        id: "B01-S08",
        title: "Find Master Volume",
        instruction: "Find the Master Volume knob.",
        detail:
          "You will use this in the next tutorial before making your first sound.",
        hardwareTargets: ["masterVolumeKnob"],
        visualMode: "full",
        checkpoint: "The highlight is on the Master Volume knob.",
        recoveryHelp: "Match the highlight to the knob labeled Master Volume.",
        nextHint: "Finally, turn your attention to the back of the instrument.",
      },
      {
        id: "B01-S09",
        title: "Look at the rear panel",
        instruction: "Find the rear connector panel.",
        detail:
          "This is where the JD-Xi's rear connections and power controls are located.",
        hardwareTargets: ["rearPanel"],
        visualMode: "full",
        checkpoint:
          "The highlight runs across the recessed connector strip on the back.",
        recoveryHelp:
          "This picture shows the back of the JD-Xi, not the top. The connector strip is the recessed band running along it.",
        nextHint:
          "For now, there are only two rear-panel items you need to recognize.",
      },
      {
        id: "B01-S10",
        title: "Find the power area",
        instruction: "Find the DC IN jack and POWER switch.",
        detail:
          "Do not switch or connect anything yet. The next tutorial will walk you through setup one action at a time.",
        hardwareTargets: ["dcInJack", "powerSwitch"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "Knowing where they are means the next tutorial can focus on one safe action at a time.",
        checkpoint: "You can point to both DC IN and POWER on the rear panel.",
        recoveryHelp:
          "Use the magnified view to match the DC IN and POWER labels.",
        nextHint: "Next up: get your first sound.",
      },
    ],
  },
};
