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
  B02: {
    id: "B02",
    level: "beginner",
    order: 2,
    title: "Get your first sound",
    shortTitle: "First sound",
    summary:
      "Connect one way to listen, power the JD-Xi on in the order Roland documents, choose a playable part, and hear your first sound.",
    estimatedMinutes: 8,
    prerequisites: ["B01"],
    learningGoals: [
      "Connect headphones or powered speakers safely.",
      "Power the JD-Xi on in the documented order.",
      "Choose a playable part and hear a sound from the keys.",
      "Set a comfortable listening level.",
    ],
    // Source record: docs/tutorials/B02-SOURCE-NOTES.md
    // The power-on order is Roland's, not ours (OM p.4). B02-S02 is the one
    // step that offers two mutually exclusive listening options; the learner
    // performs only the one they are using. B02 deliberately promises no
    // particular program or tone: the instrument supports a Startup Program
    // (v1.50 p.3), so what it boots into can vary.
    steps: [
      {
        id: "B02-S01",
        title: "Start with everything off",
        instruction: "Make sure the JD-Xi and any powered speakers are off.",
        detail:
          "Roland asks you to turn the volume down and switch every unit off before making any connections.",
        hardwareTargets: ["powerSwitch"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "Roland's reason is direct: connecting while the units are powered up risks malfunction and equipment failure.",
        checkpoint:
          "The JD-Xi is off, and any powered speakers you plan to use are off.",
        recoveryHelp:
          "If something is already on, turn its volume down first, then switch it off before you connect any cables.",
        nextHint: "Now decide how you are going to listen.",
      },
      {
        id: "B02-S02",
        title: "Choose how you will listen",
        instruction: "Connect one listening path while everything is off.",
        detail:
          "Headphones: connect them to the PHONES jack. Powered speakers: connect the JD-Xi OUTPUT jacks to your speakers — Roland says to use the L/MONO jack by itself if you are outputting in mono. Optional: if you want to watch the signal on your NTS-2, put it between the JD-Xi and the speakers — JD-Xi audio → NTS-2 INPUT → matching THRU → speakers. Use THRU for this, not the NTS-2 function-generator OUTPUT.",
        hardwareTargets: ["outputJacks", "phonesJack"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "Connecting before anything is powered up helps avoid unwanted noise and equipment problems.",
        checkpoint:
          "One listening path is connected, and any powered equipment is still off.",
        recoveryHelp:
          "PHONES is for headphones. OUTPUT is for powered speakers. You only need one of the two.",
        nextHint: "Before any power goes on, turn the volume down.",
      },
      {
        id: "B02-S03",
        title: "Master Volume fully left",
        instruction: "Turn Master Volume all the way to the left.",
        detail:
          "Use the magnified view to check the pointer on the knob.",
        hardwareTargets: ["masterVolumeKnob"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "Roland's power-on procedure has you turn Master Volume fully left before the power goes on, so nothing arrives loud.",
        checkpoint: "Master Volume is at its far-left position.",
        recoveryHelp:
          "Gently turn the highlighted knob counterclockwise until it stops. It does not need force.",
        nextHint: "Now the JD-Xi can be switched on.",
      },
      {
        id: "B02-S04",
        title: "Turn on the JD-Xi",
        instruction: "Turn on the POWER switch.",
        detail:
          "Leave any powered speakers off for the moment — they come on later, in that order.",
        hardwareTargets: ["powerSwitch"],
        visualMode: "full-plus-inset",
        checkpoint: "The JD-Xi's display lights up.",
        recoveryHelp:
          "If nothing lights up, switch POWER back off and check that the included AC adaptor is connected to the DC IN jack next to it, and to power.",
        nextHint: "Give it a moment before you expect it to respond.",
      },
      {
        id: "B02-S05",
        title: "Wait for ready",
        instruction: "Wait a few seconds.",
        detail:
          "Roland states the JD-Xi has a protection circuit, and that a brief interval after switch-on is needed before it operates normally.",
        hardwareTargets: ["display"],
        visualMode: "full-plus-inset",
        checkpoint:
          "The display has settled on its normal top screen and is no longer changing.",
        recoveryHelp:
          "If the display is still changing, give it another moment before going on.",
        nextHint: "Now the rest of your listening setup can be powered.",
      },
      {
        id: "B02-S06",
        title: "Turn on listening equipment",
        instruction:
          "If you are using powered speakers, turn them on now. If you are using headphones, there is nothing to power on.",
        detail:
          "Keep the speaker level low to start with. Anything else in your listening path, such as an NTS-2, counts as connected equipment too.",
        hardwareTargets: ["outputJacks", "phonesJack"],
        visualMode: "full",
        whyItMatters:
          "Roland's order is the JD-Xi first, then the connected equipment. Powering up in the wrong order risks malfunction or equipment failure.",
        checkpoint:
          "Your listening path is ready, with the speaker level low if you are using speakers.",
        recoveryHelp:
          "With headphones there is nothing to switch on here — go straight on to the next step.",
        nextHint: "Next, choose which part of the JD-Xi the keys will play.",
      },
      {
        id: "B02-S07",
        title: "Choose Digital Synth 1",
        instruction: "Press Digital Synth 1.",
        detail:
          "This chooses Digital Synth 1 as the part that the keys play.",
        hardwareTargets: ["digitalSynth1Button"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "The JD-Xi has four parts, and the keys play one selected part at a time. Digital Synth 1 is a dependable place to start.",
        checkpoint: "You have pressed Digital Synth 1.",
        recoveryHelp:
          "Find the Part Select column and press the button labeled Digital Synth 1 — it is the top one of the four.",
        nextHint: "Now try a key, while everything is still quiet.",
      },
      {
        id: "B02-S08",
        title: "Try one key quietly",
        instruction: "Press one white key near the middle.",
        detail:
          "You may hear nothing yet — Master Volume is still all the way down. That is expected.",
        hardwareTargets: ["keys"],
        visualMode: "full",
        checkpoint:
          "You have pressed a key and are ready to bring the listening level up gradually.",
        recoveryHelp:
          "Any white key near the middle is fine. You do not need to know note names.",
        nextHint: "Now bring the level up, a little at a time.",
      },
      {
        id: "B02-S09",
        title: "Bring the volume up slowly",
        instruction: "Turn Master Volume a little to the right.",
        detail:
          "Move it only a small amount for this first check. You can always come back for more.",
        hardwareTargets: ["masterVolumeKnob"],
        visualMode: "full-plus-inset",
        checkpoint: "Master Volume is no longer at zero, but is still low.",
        recoveryHelp:
          "If you moved it too far, turn it back to the left before you go on.",
        nextHint: "Now press that key again.",
      },
      {
        id: "B02-S10",
        title: "Hear your first sound",
        instruction: "Press the same key again.",
        hardwareTargets: ["keys"],
        visualMode: "full",
        expectedSound:
          "A synthesizer sound, from your headphones or your speakers.",
        checkpoint: "You hear a sound when you press the key.",
        recoveryHelp:
          "Check the listening connection, check that your speakers are on if you are using them, and check that Master Volume is above zero. Press Digital Synth 1 once more and try again. If it is still silent, stop here rather than changing other settings — a later tutorial covers what else can silence the keys.",
        nextHint: "Last step: set a level you actually want to play at.",
      },
      {
        id: "B02-S11",
        title: "Comfortable level",
        instruction: "Adjust Master Volume until the sound is comfortable.",
        hardwareTargets: ["masterVolumeKnob"],
        visualMode: "full",
        expectedSound:
          "The same sound gets quieter or louder as you move Master Volume.",
        whyItMatters:
          "Master Volume sets the level going to both the OUTPUT jacks and the PHONES jack, so it controls what you hear either way.",
        checkpoint:
          "You can press a few keys and hear them clearly at a level that is comfortable.",
        recoveryHelp:
          "If it is too loud, turn Master Volume to the left straight away.",
        nextHint:
          "You have your first sound. Next, you will learn how to find sounds you like.",
      },
    ],
  },
};
