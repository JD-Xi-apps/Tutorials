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
  N01: {
    id: "N01",
    level: "novice",
    order: 1,
    title: "Learn the menu controls",
    shortTitle: "Menu controls",
    summary:
      "Learn the small group of buttons next to the display: how to open the Menu, move through it, open an item, change a value, and get back out again. You will leave the JD-Xi exactly as you found it.",
    estimatedMinutes: 14,
    prerequisites: ["B02"],
    learningGoals: [
      "Recognize the top screen and get back to it from anywhere.",
      "Open the Menu, move through it, and open an item with Enter.",
      "Tell the Program Value buttons and the Tone buttons apart.",
      "Use Shift safely, and know which combinations to leave alone for now.",
    ],
    // Source record: docs/tutorials/N01-SOURCE-NOTES.md
    // N01 is the first tutorial that navigates real menus, so it is also the
    // first to author expectedDisplay. Every display string here is a Roland
    // illustration reproduced verbatim, and every step carrying one also
    // carries a displayNote saying so and naming what varies by instrument.
    // Nothing is invented: the character grid is still unresolved
    // (ROLAND-SOURCE-MAP Q4), so no screen is composed by us.
    //
    // The tutorial is deliberately non-destructive end to end. The only
    // values it asks the learner to change are program and tone selection,
    // both of which write nothing and are undone by one press. SYSTEM is
    // entered for navigation only, because Roland saves system parameters
    // automatically when you leave that screen (OM p.13).
    steps: [
      {
        id: "N01-S01",
        title: "Get back to the top screen",
        instruction: "Press Exit several times.",
        detail:
          "It does not matter where the JD-Xi is right now. Exit steps back one screen each time, so a few presses bring you out to the top screen.",
        hardwareTargets: ["exitButton", "display"],
        visualMode: "display-focus",
        expectedDisplay: ["A64   1-1    120", "256:Synth Lead01"],
        syntheticDisplay: false,
        displayNote:
          "Roland's own example of the top screen. Your JD-Xi shows its own program, tempo and tone name.",
        whyItMatters:
          "Exit is the button that gets you unstuck. Roland's own instruction for returning to the top screen, from any menu, is to press Exit several times.",
        checkpoint:
          "The display shows two lines: a program bank and number at the top left, and a tone name on the lower line.",
        recoveryHelp:
          "Press Exit a few more times. Exit moves back one screen at a time, and in some screens it also cancels whatever was in progress — either way it takes you toward the top screen, never further in.",
        nextHint: "Before opening any menu, get to know this screen.",
      },
      {
        id: "N01-S02",
        title: "What the top screen tells you",
        instruction: "Read the four things on the top screen.",
        detail:
          "Upper line: the program bank and number on the left, the measure and beat in the middle, the tempo on the right. Lower line: the tone number and the tone name.",
        hardwareTargets: ["display"],
        visualMode: "display-focus",
        expectedDisplay: ["A64   1-1    120", "256:Synth Lead01"],
        syntheticDisplay: false,
        displayNote:
          "Roland's own example of the top screen. Your JD-Xi shows its own program, tempo and tone name.",
        whyItMatters:
          "This screen is your home base. Once you can recognize it, you always know whether you are inside a menu or safely back out of it.",
        checkpoint:
          "You can point to the program number, the tempo and the tone name on the display.",
        recoveryHelp:
          "If your display does not look like this, press Exit a few times. One difference is normal: a sound that has been edited shows no tone number at all, and Roland uses that missing number as the signal that the sound has been changed.",
        nextHint: "Now meet the button that changes what the other buttons do.",
      },
      {
        id: "N01-S03",
        title: "Hold Shift and watch the display",
        instruction: "Hold down Shift and look at the display.",
        detail:
          "While Shift is held, the upper line shows the name of the current program. Let go, and the normal upper line comes back.",
        hardwareTargets: ["shiftButton", "display"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "Shift on its own changes nothing. It is a modifier: it changes what another button does while you hold it. Holding it, looking, and letting go is the safest way to meet it.",
        checkpoint:
          "The upper line changes while you hold Shift, and goes back when you let go.",
        recoveryHelp:
          "Make sure you are on the top screen first — press Exit a few times. While Shift is held, do not press anything else yet. Shift paired with other buttons does very different things, and this tutorial introduces them one at a time.",
        nextHint: "Next, open the Menu.",
      },
      {
        id: "N01-S04",
        title: "Open the Menu",
        instruction: "Press Menu/Write once, then release it.",
        detail:
          "A short press opens the Menu. Menu/Write is the leftmost button of the lower row of four, beside Exit.",
        hardwareTargets: ["menuWriteButton", "display"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "The Menu holds everything the JD-Xi does not give a knob or a button of its own: system settings, the editing screens, pattern length, and the version of your instrument.",
        checkpoint:
          "The display has changed away from the top screen and is showing a menu item.",
        recoveryHelp:
          "If you held the button down instead of pressing it, the PORTAMENTO screen appears instead of the Menu. Roland documents the long press as a separate shortcut, so this is easy to do by accident. Press Exit once to leave it, then try a short, definite press.",
        nextHint: "Now move along the list.",
      },
      {
        id: "N01-S05",
        title: "Move along the Menu",
        instruction:
          "Press Cursor ► several times, until the display reads VERSION INFO.",
        detail:
          "Each press moves to the next item: SYSTEM, Program Edit, Tone Edit, Effects Edit, Vocoder Edit, AutoPitch Edit, Arpeggio Edit, Pattern Length, Scale Setting, UTILITY and VERSION INFO. Cursor ◄ moves back the other way. If your JD-Xi has been updated to system version 1.50 or later, there is a Chord Edit item as well.",
        hardwareTargets: ["cursorRightButton", "display"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "Cursor only moves the selection. It never opens anything and never changes a value, so you can move around the Menu as much as you like without any risk.",
        checkpoint: "The display reads VERSION INFO.",
        recoveryHelp:
          "If you go past it, press Cursor ◄ to come back. If you pressed Enter by accident and the screen changed, press Exit once and you are back on the list.",
        nextHint:
          "This is the one Menu item with nothing inside it to change — a safe place to press Enter for the first time.",
      },
      {
        id: "N01-S06",
        title: "Open an item with Enter",
        instruction: "Press Enter.",
        detail:
          "Enter opens whichever item is currently selected. VERSION INFO only shows you information.",
        hardwareTargets: ["enterButton", "display"],
        visualMode: "display-focus",
        expectedDisplay: ["VERSION INFO", "  Version 1.51"],
        syntheticDisplay: false,
        displayNote:
          "Roland's own screen. The number is whatever system version your own JD-Xi is running; 1.51 is shown here as an example.",
        whyItMatters:
          "You have now done the whole menu pattern once: Menu/Write to open the Menu, Cursor to choose, Enter to open. Every other Menu item is reached in exactly the same way.",
        checkpoint:
          "The lower line reads Version followed by a number. Make a note of that number — it is your JD-Xi's system version.",
        recoveryHelp:
          "If the display shows something else, press Exit until you are back at the top screen, then start again from Menu/Write.",
        nextHint:
          "If your number is 1.50 or higher, your Menu also has the Chord Edit item. Now come back out.",
      },
      {
        id: "N01-S07",
        title: "Exit goes back one screen",
        instruction: "Press Exit once.",
        detail:
          "One press leaves VERSION INFO and puts you back on the Menu list — not all the way out.",
        hardwareTargets: ["exitButton", "display"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "Exit is one step backward, not a cancel-everything button. That is why getting back to the top screen takes several presses rather than one.",
        checkpoint: "The display is showing a menu item again.",
        recoveryHelp:
          "If you pressed Exit more than once you may already be back at the top screen. That is fine — press Menu/Write once to open the Menu again.",
        nextHint: "Stay in the Menu. There is one more item to visit.",
      },
      {
        id: "N01-S08",
        title: "Select SYSTEM",
        instruction: "Press Cursor ◄ until the display reads SYSTEM.",
        detail:
          "SYSTEM is the first item in the list, so moving left will always reach it.",
        hardwareTargets: ["cursorLeftButton", "display"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "SYSTEM holds the settings that affect the whole instrument rather than one sound: display contrast, keyboard feel, tuning, the click, the microphone input, and the MIDI settings.",
        checkpoint: "The display reads SYSTEM.",
        recoveryHelp:
          "Keep pressing Cursor ◄. If you overshoot in the other direction, Cursor ► brings you back.",
        nextHint:
          "This item behaves differently from VERSION INFO. Read the next step before you press anything.",
      },
      {
        id: "N01-S09",
        title: "Open SYSTEM, and look before you press",
        instruction: "Press Enter.",
        detail:
          "Important: from here on, do not press the Value buttons. Anything you change in SYSTEM is saved by the JD-Xi automatically when you leave the screen. You are here to look, and to learn how to move around.",
        hardwareTargets: ["enterButton", "display"],
        visualMode: "display-focus",
        expectedDisplay: ["GENERAL", "LCD Contrast 10"],
        syntheticDisplay: false,
        displayNote:
          "Roland's own example. The upper line is the group you are in; the lower line is one parameter and its value. Your contrast number may differ.",
        whyItMatters:
          "Most JD-Xi screens throw your changes away unless you deliberately save them. SYSTEM is the exception: it saves itself as you leave. That is why it is the one place to look before you touch.",
        checkpoint:
          "The upper line shows a group name and the lower line shows a parameter name with a value beside it.",
        recoveryHelp:
          "SYSTEM has no undo. If you did press Value and you know which parameter it was, use Cursor to go back to it and Value to set it back before you leave. One setting here is worth naming: Mic Sel sends power to the MIC jack when it is set to Attached, which Roland warns can damage a microphone that did not come with the JD-Xi. Leave that one alone.",
        nextHint: "Move along the parameters first.",
      },
      {
        id: "N01-S10",
        title: "Cursor picks the parameter",
        instruction: "Press Cursor ► once.",
        detail:
          "The lower line now shows a different parameter from the same group. Cursor moves along the parameters; the Value buttons would change whichever one you are looking at — and those are the buttons to leave alone in here.",
        hardwareTargets: ["cursorRightButton", "display"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "This is the second half of the menu pattern, and it is the same in every edit screen on the JD-Xi: Cursor picks what you are changing, Value changes it.",
        checkpoint:
          "The parameter name on the lower line has changed, and the group name on the upper line has not.",
        recoveryHelp:
          "Cursor cannot change a value, so nothing has been altered. Press Cursor ◄ to go back if you would rather.",
        nextHint: "There is a second, larger kind of move inside this screen.",
      },
      {
        id: "N01-S11",
        title: "Shift and Cursor jump between groups",
        instruction: "Hold down Shift and press Cursor ►.",
        detail:
          "The upper line jumps to the next group: GENERAL, KEY TOUCH, SOUND, CLICK, INPUT, MIDI. Cursor on its own walks through parameters; Shift with Cursor jumps between whole groups.",
        hardwareTargets: ["shiftButton", "cursorRightButton"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "Roland documents this as working in setting screens such as SYSTEM and the edit screens. It is not a universal shortcut: while you are typing a name, the same combination deletes a character instead. On this instrument, what a combination does depends on which screen you are in.",
        checkpoint: "The name on the upper line has changed to a different group.",
        recoveryHelp:
          "Hold Shift and press Cursor ◄ to jump back. If the upper line did not change, check that you are still inside SYSTEM and that Shift is held down before you press Cursor.",
        nextHint: "Now leave, without having changed anything.",
      },
      {
        id: "N01-S12",
        title: "Leave the Menu",
        instruction: "Press Exit until you are back at the top screen.",
        detail:
          "A few presses will do it. As you leave SYSTEM the JD-Xi saves its system settings — which is exactly why you did not press Value in there.",
        hardwareTargets: ["exitButton", "display"],
        visualMode: "full-plus-inset",
        expectedDisplay: ["A64   1-1    120", "256:Synth Lead01"],
        syntheticDisplay: false,
        displayNote:
          "Roland's own example of the top screen. Your JD-Xi shows its own program, tempo and tone name.",
        whyItMatters:
          "Roland's rule for the whole Menu is the same everywhere: press Exit several times to return to the top screen. Whenever you lose track of where you are, that is the move.",
        checkpoint: "The two-line screen from the start of this tutorial is back.",
        recoveryHelp:
          "Keep pressing Exit. If the screen still looks different, one more press will usually do it.",
        nextHint:
          "Two buttons left to sort out — the pair that gets mixed up most.",
      },
      {
        id: "N01-S13",
        title: "Two pairs that are not the same",
        instruction: "Find the two −/+ button pairs on the panel.",
        detail:
          "One has Value printed between its − and its +, with Program (Pattern) above it. The other has Tone printed between its − and its +, to the right of the four Part Select buttons. They look identical and they do different jobs.",
        hardwareTargets: ["programValueButtons", "toneButtons"],
        visualMode: "full",
        whyItMatters:
          "Program Value chooses which whole setup you are playing. Tone changes the sound inside the setup you already have. Reaching for the wrong pair is the most common way a beginner loses the sound they had.",
        checkpoint:
          "You can point to each pair and say which word is printed on it.",
        recoveryHelp:
          "Read the printed word rather than the − and the +. The pair nearer the display says Value; the pair further to the right says Tone.",
        nextHint: "Try the Program pair first.",
      },
      {
        id: "N01-S14",
        title: "Program Value changes the whole program",
        instruction: "Press Program Value + once.",
        detail:
          "Note the program number on the display before you press. You are on the top screen, so this selects the next program: a different complete setup.",
        hardwareTargets: ["programValuePlusButton", "display"],
        visualMode: "full-plus-inset",
        expectedSound:
          "Play a key and you will hear a different sound from before. The program the keys play has changed.",
        whyItMatters:
          "Selecting a program writes nothing. One caution though: if you had already changed a sound and not saved it, switching programs loses that change. You have changed nothing yet, so there is nothing to lose here.",
        checkpoint:
          "The program number on the upper line of the display has gone up by one.",
        recoveryHelp:
          "Press Program Value − once to come straight back.",
        nextHint: "Now put it back.",
      },
      {
        id: "N01-S15",
        title: "Put it back",
        instruction: "Press Program Value − once.",
        detail: "You are back on the program you started from.",
        hardwareTargets: ["programValueMinusButton", "display"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "Getting into the habit of putting things back is worth more than memorizing what every control does. Almost everything on the JD-Xi that is not a deliberate save can be undone by hand like this.",
        checkpoint:
          "The program number on the display is the one you noted a moment ago.",
        recoveryHelp:
          "If you have lost count, press Program Value − or + until the number matches the one you noted. Nothing has been saved either way.",
        nextHint: "Now the other pair.",
      },
      {
        id: "N01-S16",
        title: "Tone changes the sound inside the program",
        instruction: "Press Tone + once.",
        detail:
          "Note the tone number and name on the lower line before you press. This changes the tone of the part the keys are playing and leaves the rest of the program as it was.",
        hardwareTargets: ["tonePlusButton", "display"],
        visualMode: "full-plus-inset",
        expectedSound:
          "Play a key: the same program, but a different sound under your hands.",
        whyItMatters:
          "This is the difference between the two pairs, in one press. Program Value swapped the whole setup; Tone swapped only the sound of the part you are playing.",
        checkpoint:
          "The tone number and name on the lower line of the display have changed.",
        recoveryHelp:
          "Press Tone − once to come back. Roland also documents a revert: hold down Shift and press Enter to return to the original sound after you have switched or edited it.",
        nextHint: "One last thing, and it is about what not to press.",
      },
      {
        id: "N01-S17",
        title: "Two combinations to leave alone for now",
        instruction:
          "Do not press Shift with Menu/Write, or Shift with Erase, yet.",
        detail:
          "Shift with Menu/Write opens the WRITE screen — the JD-Xi's save, which can overwrite a program that is already stored. Shift with Erase opens the Pattern Erase screen. Both get a tutorial of their own; neither belongs in a first look at the menus.",
        // Three targets on purpose: one "recognize and avoid" action, not
        // three sequential hardware actions (see N01-SOURCE-NOTES.md).
        hardwareTargets: ["shiftButton", "menuWriteButton", "eraseButton"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "Shift is not dangerous by itself — you have already used it twice. What matters is that what a combination does depends on the screen you are in and on which button you pair it with. Meeting them a few at a time, with a tutorial for each, beats discovering them by accident.",
        checkpoint:
          "You can point to Shift, Menu/Write and Erase, and say what those two combinations open.",
        recoveryHelp:
          "If you have already landed on one of those screens, press Exit. Neither screen does anything until you press Enter, so leaving is safe.",
        nextHint: "Last step: what to do when you are lost.",
      },
      {
        id: "N01-S18",
        title: "When you are lost",
        instruction: "Press Exit several times.",
        detail:
          "That is the whole recovery procedure. However far into a menu you are, repeated Exit presses walk you back to the top screen.",
        hardwareTargets: ["exitButton", "display"],
        visualMode: "display-focus",
        expectedDisplay: ["A64   1-1    120", "256:Synth Lead01"],
        syntheticDisplay: false,
        displayNote:
          "Roland's own example of the top screen. Your JD-Xi shows its own program, tempo and tone name.",
        whyItMatters:
          "Three moves cover almost everything that goes wrong in the menus: Exit to back out, Shift with Enter to bring back the original sound after you have changed one, and — because nothing is written until you deliberately save — simply choosing another program and coming back. The JD-Xi has no undo, so these are the recovery tools you have.",
        checkpoint:
          "You are back at the top screen, and you know how to get here from anywhere.",
        recoveryHelp:
          "One thing Exit will not solve on its own: if the display reads Now Playing! or Now Recording!, the JD-Xi is refusing an operation until you stop. Press the ▶/■ button to stop playback or recording, then carry on.",
        nextHint:
          "You can now navigate the menus. Next, you will learn how the JD-Xi organizes programs and parts.",
      },
    ],
  },
};
