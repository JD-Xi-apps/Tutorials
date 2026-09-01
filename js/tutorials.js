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
  B03: {
    id: "B03",
    level: "beginner",
    order: 3,
    title: "Find sounds you like",
    shortTitle: "Find sounds",
    summary:
      "Browse the JD-Xi's sounds by ear. You will step through tones one at a time, jump between different kinds of sound, and compare a few until you find one you like.",
    estimatedMinutes: 8,
    prerequisites: ["B02"],
    learningGoals: [
      "Change the sound the keys play, and go back again.",
      "Use the Category dial to jump between different kinds of sound.",
      "Compare several sounds and choose one by ear.",
    ],
    // Source record: docs/tutorials/B03-SOURCE-NOTES.md
    // B03 owns Tone browsing only: the Category dial, Tone -/+, and choosing
    // by ear (PRODUCT-CURRICULUM-MASTER-PLAN.md sec 8). Program browsing and
    // hardware-Favorite recall belong to N02; Favorite registration to N09
    // and I09. Selecting a Tone still discards an unsaved edit (OM p.9), so
    // the protect-your-work preflight stays at B03-S02, immediately before
    // the first Tone change.
    steps: [
      {
        id: "B03-S01",
        title: "Start from the top screen",
        instruction: "Press Exit several times.",
        detail:
          "It does not matter where your JD-Xi is right now. Exit steps back one screen each time, so a few presses bring you out to the top screen.",
        hardwareTargets: ["exitButton", "display"],
        visualMode: "display-focus",
        expectedDisplay: ["A64   1-1    120", "256:Synth Lead01"],
        syntheticDisplay: false,
        displayNote:
          "Roland's own example of the top screen. Your JD-Xi shows its own program, tempo and tone name.",
        checkpoint:
          "The display shows two lines: a program bank and number on the upper line, and a tone name on the lower line.",
        recoveryHelp:
          "Press Exit a few more times. Exit moves back one screen at a time, so it always takes you toward the top screen, never further in.",
        nextHint: "Before you change anything, one thing is worth checking.",
      },
      {
        id: "B03-S02",
        title: "Protect any work you want to keep",
        instruction:
          "Decide whether there is a sound on this JD-Xi you have been working on and have not saved.",
        detail:
          "From the next step onward you will select different tones. On the JD-Xi, doing that throws away an edited sound that has not been saved. This tutorial cannot tell what state your instrument is in, so the decision is yours: if there is unsaved work you want to keep, stop here and come back after you have learned to save it.",
        // The Tone -/+ pair is the only discard-capable control B03 now uses.
        hardwareTargets: ["toneButtons"],
        visualMode: "full",
        whyItMatters:
          "The JD-Xi holds the sound you are editing in a working area, not in permanent storage. Selecting another tone replaces what is in that working area, and there is no undo. Nothing warns you first, which is why this step exists.",
        checkpoint:
          "You have decided: either there is nothing you need to keep, or you are going to save it first.",
        recoveryHelp:
          "If you do have unsaved work you care about, the tutorial that teaches saving is N09 Save your work. Go there first and come back to B03 afterwards. If you are not sure, assume there is something worth keeping and go and save it — you cannot get it back afterwards.",
        nextHint: "Now choose which part of the JD-Xi you are auditioning.",
      },
      {
        id: "B03-S03",
        title: "Choose the part you will listen to",
        instruction: "Press Digital Synth 1.",
        detail:
          "This makes Digital Synth 1 the part the keys play, so you are always hearing the sound you are about to change.",
        hardwareTargets: ["digitalSynth1Button"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "The JD-Xi has four parts and the keys play one of them at a time. Choosing the part first means the Tone buttons and the Category dial change the sound you can actually hear.",
        checkpoint: "You have pressed Digital Synth 1, and pressing a key makes a sound.",
        recoveryHelp:
          "If you hear nothing, check that Master Volume is up and that your headphones or speakers are connected and switched on — B02 walks through that setup.",
        nextHint: "Now change the sound.",
      },
      {
        id: "B03-S04",
        title: "Step to the next tone",
        instruction: "Press Tone + once, then play a key.",
        detail:
          "Tone + and Tone − step through the sounds available to this part, one at a time.",
        hardwareTargets: ["tonePlusButton"],
        visualMode: "full-plus-inset",
        expectedSound:
          "A different sound from the one you had a moment ago. It may be close, or completely unlike it.",
        checkpoint:
          "The tone name on the lower line of the display has changed, and the keys sound different.",
        recoveryHelp:
          "If nothing changed, check you pressed the pair marked Tone rather than the pair marked Value — they look the same and sit close together. The Tone pair is to the right of the four Part Select buttons.",
        nextHint: "Now go back the other way.",
      },
      {
        id: "B03-S05",
        title: "Step back again",
        instruction: "Press Tone − once, then play a key.",
        detail: "This walks back to the sound you had before.",
        hardwareTargets: ["toneMinusButton"],
        visualMode: "full-plus-inset",
        expectedSound: "The sound you heard two steps ago.",
        whyItMatters:
          "Auditioning is just stepping backward and forward until something catches your ear. You do not have to know what any of the sounds are called.",
        checkpoint: "The tone name is back to the one you started with.",
        recoveryHelp:
          "If you have lost your place, it does not matter — nothing is broken and nothing has been overwritten. Keep pressing Tone − or Tone + until you find something you like.",
        nextHint:
          "Stepping one at a time is slow when you want a completely different kind of sound.",
      },
      {
        id: "B03-S06",
        title: "Jump to a different kind of sound",
        instruction: "Turn the Category dial one position.",
        detail:
          "The Category dial chooses the basic type of sound. The category whose indicator is lit is the one selected.",
        hardwareTargets: ["categoryDial"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "Rather than stepping through every sound in order, the Category dial takes you straight to a family of them — so you can go looking for a bass, or strings, or a lead, without knowing any tone names.",
        checkpoint: "A different category indicator is lit than before.",
        recoveryHelp:
          "The dial does not change the sound on its own. If you turned it and heard nothing change, that is expected — use Tone + or Tone − next to hear what is in the new category.",
        nextHint: "Now listen to what is in that category.",
      },
      {
        id: "B03-S07",
        title: "Audition inside the category",
        instruction: "Press Tone + a few times, playing a key after each press.",
        detail:
          "Take your time. The only question worth asking is whether you like what you hear.",
        hardwareTargets: ["tonePlusButton"],
        visualMode: "full-plus-inset",
        expectedSound:
          "A run of related sounds — all roughly the same family, each a little different.",
        checkpoint: "You have heard several sounds and found one you like better than the others.",
        recoveryHelp:
          "If every sound seems silent, play a key firmly and check Master Volume. Some sounds also start quietly and grow — hold a key down for a second or two before deciding it is silent.",
        nextHint: "One position on the dial behaves differently from the rest.",
      },
      {
        id: "B03-S08",
        title: "One category to know about",
        instruction: "Find the Vocoder/AutoPitch position on the Category dial.",
        detail:
          "You do not need to select it. Vocoder and AutoPitch work with the microphone rather than being ordinary keyboard sounds, and Roland notes two consequences: they can be used on only one part, and the Analog Synth part becomes unavailable while one is selected.",
        hardwareTargets: ["categoryDial"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "It is the one dial position that changes what the rest of the instrument can do, so it is worth recognizing before you land on it by accident and wonder why the Analog Synth has gone quiet.",
        checkpoint: "You can point to the Vocoder/AutoPitch position on the dial.",
        recoveryHelp:
          "If you did select it and the Analog Synth part has stopped responding, turn the Category dial to any other position.",
        nextHint: "Now put two sounds side by side and pick between them.",
      },
      {
        id: "B03-S09",
        title: "Compare two sounds",
        instruction:
          "Find a sound you like, then press Tone − a few times and Tone + the same number of times, playing a key at each end.",
        detail:
          "Going back and forth between two sounds is how you tell them apart. On its own a sound is just a sound; next to another one you can hear which you actually prefer.",
        hardwareTargets: ["toneButtons"],
        visualMode: "full-plus-inset",
        expectedSound:
          "The same two sounds alternating, so the difference between them becomes obvious.",
        whyItMatters:
          "Choosing by ear is the whole skill here. You never need to know what a sound is called, or how it is built, to know whether you want it.",
        checkpoint:
          "You have gone back and forth between two sounds and decided which of the two you prefer.",
        recoveryHelp:
          "If you have lost count and cannot find the first sound again, nothing is broken — no sound has been changed or overwritten. Pick any two neighbouring tones and compare those instead.",
        nextHint: "Last step: back to where you started.",
      },
      {
        id: "B03-S10",
        title: "Back to the top screen",
        instruction: "Press Exit until you reach the top screen.",
        detail:
          "Leave the tone you chose selected. It is the sound this part will play until you or a program change replaces it.",
        hardwareTargets: ["exitButton"],
        visualMode: "full",
        whyItMatters:
          "The tone you picked is selected, not saved. Switching the program later replaces it, and the JD-Xi does not ask first. Keeping a sound for good is what N09 Save your work teaches.",
        checkpoint: "The display is back on the top screen.",
        recoveryHelp:
          "Press Exit a few more times. Exit only ever moves back toward the top screen, so you cannot overshoot it.",
        nextHint:
          "You can find sounds now. Next, meet the four parts those sounds live in.",
      },
    ],
  },
  B04: {
    id: "B04",
    level: "beginner",
    order: 4,
    title: "Meet the four parts",
    shortTitle: "The four parts",
    summary:
      "The JD-Xi has four parts, and they do not sound alike. You will select each one and hear it from the keys, including the drum part that puts a different instrument on every key.",
    estimatedMinutes: 6,
    prerequisites: ["B03"],
    learningGoals: [
      "Name the four parts and find their buttons.",
      "Hear each part from the keys, and hear how they differ.",
      "Explain why the keys play only one part at a time.",
    ],
    // Source record: docs/tutorials/B04-SOURCE-NOTES.md
    // B04 makes the four parts concrete THROUGH SOUND
    // (PRODUCT-CURRICULUM-MASTER-PLAN.md sec 8). It is deliberately not the
    // Program-architecture lesson -- N02 owns what a Program is -- and it
    // teaches no synth-engine theory.
    // It performs NO Program or Tone selection: pressing a Part Select button
    // chooses which part the keys play and discards nothing, so the tutorial
    // needs no protect-your-work preflight.
    steps: [
      {
        id: "B04-S01",
        title: "Find the four parts",
        instruction: "Find the four Part Select buttons.",
        detail:
          "They read Digital Synth 1, Digital Synth 2, Drums and Analog Synth. Whatever your JD-Xi is loaded with right now, these same four parts are in it.",
        hardwareTargets: ["partSelectGroup"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "The JD-Xi is not one sound-maker but four, side by side. This tutorial is about hearing what each of them sounds like, so the names on these buttons start to mean something.",
        checkpoint: "You can see all four Part Select buttons together.",
        recoveryHelp:
          "Look in the left half of the control panel, to the right of the display. The magnified view shows the four buttons in a column.",
        nextHint: "Nothing in this tutorial changes a sound — you are only choosing what to listen to.",
      },
      {
        id: "B04-S02",
        title: "Listen to Digital Synth 1",
        instruction: "Press Digital Synth 1, then play a few keys.",
        hardwareTargets: ["digitalSynth1Button"],
        visualMode: "full-plus-inset",
        expectedSound: "Whatever tone this program has on its first digital part.",
        checkpoint: "You hear a sound, and it does not change when you press keys further along.",
        recoveryHelp:
          "If you hear nothing, check Master Volume and your listening connection first — that is B02. If other parts sound and this one does not, its level in this particular program may simply be low; try another program.",
        nextHint: "Now the second digital part.",
      },
      {
        id: "B04-S03",
        title: "Listen to Digital Synth 2",
        instruction: "Press Digital Synth 2, then play the same keys again.",
        detail: "Same keys, different part, so almost certainly a different sound.",
        hardwareTargets: ["digitalSynth2Button"],
        visualMode: "full-plus-inset",
        expectedSound:
          "A different sound from Digital Synth 1 — the two parts hold their own tones.",
        whyItMatters:
          "Digital Synth 1 and Digital Synth 2 are built the same way. Having two of them is what lets one program hold two different synth sounds at once.",
        checkpoint: "The same keys now produce a different sound.",
        recoveryHelp:
          "If it sounds identical, this program may happen to use similar tones on both parts. Press Digital Synth 1 and Digital Synth 2 back and forth and listen again.",
        nextHint: "The third part works differently.",
      },
      {
        id: "B04-S04",
        title: "Listen to the Drums",
        instruction: "Press Drums, then play several keys across the keyboard.",
        detail:
          "This part gives every key a different drum or percussion instrument instead of a pitch. On your JD-Xi the instrument names are printed above the keys.",
        hardwareTargets: ["drumsButton"],
        visualMode: "full-plus-inset",
        expectedSound:
          "Drums and percussion — a different instrument on each key rather than the same sound higher or lower.",
        whyItMatters:
          "The Drums part is why one JD-Xi program can hold a whole kit as well as synth sounds. Later tutorials build beats on exactly this part.",
        checkpoint: "Different keys give you clearly different drum sounds.",
        recoveryHelp:
          "If the keys near the top of the keyboard are silent, that is normal and documented: the Drums part has no instruments assigned up there, so nothing sounds. Play in the middle and lower part of the keyboard instead.",
        nextHint: "One part left, and it is the odd one out.",
      },
      {
        id: "B04-S05",
        title: "Listen to the Analog Synth",
        instruction: "Press Analog Synth, then play a few keys.",
        hardwareTargets: ["analogSynthButton"],
        visualMode: "full-plus-inset",
        expectedSound:
          "A single synth sound again, usually thicker or more direct than the digital parts.",
        checkpoint: "You hear a sound that is different again from the two digital parts.",
        recoveryHelp:
          "If this part is silent while the others sound, check whether the Category dial is set to Vocoder/AutoPitch — Roland notes the Analog Synth part becomes unavailable while one of those is selected. Turning the dial to any other position frees it.",
        nextHint: "Now the rule that explains why you kept pressing buttons.",
      },
      {
        id: "B04-S06",
        title: "The keys play one part at a time",
        instruction: "Press two Part Select buttons in turn and notice you cannot have both.",
        detail:
          "The JD-Xi does not let you select and play several parts from the keys at once. The part you last selected is the one the keys play.",
        hardwareTargets: ["partSelectGroup"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "This is a real limit of the instrument, not something you are doing wrong — and it is the reason the pattern sequencer matters. Roland's own answer is that you make several parts sound together by recording them into a pattern, which is what N06 is about.",
        checkpoint:
          "You can say which part the keys are playing right now, and how to change it.",
        recoveryHelp:
          "If you are unsure which part is selected, press the one you want again — the last button you press wins.",
        nextHint: "Last step: what to remember.",
      },
      {
        id: "B04-S07",
        title: "What you can now say",
        instruction: "Press each of the four buttons once more, naming each part as you go.",
        detail:
          "Digital Synth 1, Digital Synth 2, Drums, Analog Synth. That is the whole set.",
        hardwareTargets: ["partSelectGroup"],
        visualMode: "full",
        whyItMatters:
          "Almost everything later in these tutorials starts with choosing a part. Knowing the four by name and by sound is what makes the rest of the instrument approachable.",
        checkpoint:
          "You can name all four parts and select any of them without hunting for the button.",
        recoveryHelp:
          "If a name will not stick, go by sound instead: two synth parts, a drum part, and the analog one with its own waveform controls.",
        nextHint:
          "You know what the parts are. Next, get properly acquainted with the keys.",
      },
    ],
  },
  B05: {
    id: "B05",
    level: "beginner",
    order: 5,
    title: "Play with the keys",
    shortTitle: "Play the keys",
    summary:
      "Get comfortable with the keys themselves: high and low, one at a time or several together, soft and firm, short and long — and the two controls beside them that bend and shake the sound.",
    estimatedMinutes: 9,
    prerequisites: ["B04"],
    learningGoals: [
      "Hear how position, force and length change what you play.",
      "Play one key and hold several together.",
      "Move the keyboard up and down in octaves, and put it back.",
      "Use the Pitch and Mod controls, and leave them somewhere safe.",
    ],
    // Source record: docs/tutorials/B05-SOURCE-NOTES.md
    // No Program or Tone is selected anywhere in B05, so there is no
    // discard-capable transition and no protect-your-work preflight. The
    // octave setting is part of the program (OM p.6) and is therefore handled
    // as an unsaved edit, with Roland's documented reset -- both OCTAVE
    // buttons together return the value to 0 -- stated exactly as Roland
    // states it, without claiming it restores a program's stored value.
    // Transpose (B05-S11) is taught directly rather than conditionally: this
    // course targets the owner's instrument at system 1.51, so the 1.50
    // feature set is simply present (PRODUCT-CURRICULUM-MASTER-PLAN.md sec 2).
    steps: [
      {
        id: "B05-S01",
        title: "Choose something to play",
        instruction: "Press Digital Synth 1.",
        detail:
          "Any part will do, but a synth part shows pitch changes more clearly than the drums.",
        hardwareTargets: ["digitalSynth1Button"],
        visualMode: "full-plus-inset",
        checkpoint: "Pressing a key makes a sound.",
        recoveryHelp:
          "No sound at all? Check Master Volume and your headphones or speakers — B02 covers that setup step by step.",
        nextHint: "Now use the whole width of the keyboard.",
      },
      {
        id: "B05-S02",
        title: "Low keys and high keys",
        instruction: "Play a key at the far left, then a key at the far right.",
        detail: "Work across the keyboard slowly and listen to what changes.",
        hardwareTargets: ["keys"],
        visualMode: "full",
        expectedSound:
          "The same sound, deep and heavy on the left and thin and bright on the right.",
        whyItMatters:
          "Left is lower, right is higher. That is the only thing you need to know about the layout to start playing — no note names required.",
        checkpoint: "You can hear the sound getting higher as you move right.",
        recoveryHelp:
          "If some keys are silent, check which part is selected. On the Drums part the top of the keyboard has no instruments assigned and stays quiet — press Digital Synth 1 and try again.",
        nextHint: "Now try more than one key at a time.",
      },
      {
        id: "B05-S03",
        title: "One key, then several",
        instruction:
          "Play one key on its own. Then hold two or three keys down together.",
        detail:
          "Pick keys that are close to each other to start with, then try ones further apart. There is no right answer — you are listening for how a handful of keys together sounds against a single one.",
        hardwareTargets: ["keys"],
        visualMode: "full",
        expectedSound:
          "One key gives you a single clear note. Several held together give you a thicker, fuller sound.",
        whyItMatters:
          "Holding several keys at once is worth being comfortable with early, because two later tutorials ask for it: the arpeggiator in N07 needs two or three keys held down, and a pad in I02 is only really audible that way.",
        checkpoint:
          "You have held two or three keys down at the same time and heard them sound together.",
        recoveryHelp:
          "If holding several keys gives you no more sound than one key did, try a different tone with Tone + — some sounds play only one note at a time. On the Drums part each key is a separate instrument, so several keys give you several drums rather than a thicker note.",
        nextHint: "Now change how you press, not where.",
      },
      {
        id: "B05-S04",
        title: "Soft and firm",
        instruction: "Play one key gently, then play the same key firmly.",
        hardwareTargets: ["keys"],
        visualMode: "full",
        expectedSound:
          "With most sounds, a firmer press is louder and often brighter or more aggressive.",
        whyItMatters:
          "The JD-Xi's keys sense how hard you play. That is what lets a performance have shape rather than every note landing the same.",
        checkpoint: "You can hear a difference between a gentle press and a firm one.",
        recoveryHelp:
          "Some sounds are deliberately made to ignore how hard you play, so if you hear no difference, step to another tone with Tone + and try again. If the keyboard feels too heavy or too light overall, that is adjustable in the JD-Xi's system settings — N01 shows you around them.",
        nextHint: "Now change how long you hold.",
      },
      {
        id: "B05-S05",
        title: "Short and long",
        instruction: "Tap a key and let go, then press the same key and hold it down.",
        hardwareTargets: ["keys"],
        visualMode: "full",
        expectedSound:
          "Some sounds keep going for as long as you hold and stop when you let go; others fade away by themselves even while you hold.",
        whyItMatters:
          "How a sound starts, holds and fades is its envelope, and it is a big part of what makes one sound feel different from another. B06 puts that under a knob you can turn.",
        checkpoint: "You have heard one sound that holds and, ideally, one that fades on its own.",
        recoveryHelp:
          "If everything you try behaves the same way, use Tone + to step to a different sound and compare again — sustained and short sounds are both common.",
        nextHint: "Now move the whole keyboard.",
      },
      {
        id: "B05-S06",
        title: "Drop an octave",
        instruction: "Press Octave Down once, then play the same key as before.",
        detail:
          "This shifts the whole keyboard down by one octave. The button lights while the keyboard is shifted.",
        hardwareTargets: ["octaveDownButton"],
        visualMode: "full-plus-inset",
        expectedSound: "The same sound as before, but noticeably deeper.",
        whyItMatters:
          "The JD-Xi has 37 small keys, which is not many. Shifting in octaves is how you reach the very low and very high sounds that would otherwise be off the end of the keyboard.",
        checkpoint: "The Octave Down button is lit, and the keys sound lower than they did.",
        recoveryHelp:
          "If nothing changed, check which part is selected: the OCTAVE buttons have no effect on the Drums part.",
        nextHint: "Now go the other way.",
      },
      {
        id: "B05-S07",
        title: "Climb back up",
        instruction: "Press Octave Up twice, then play the same key.",
        detail:
          "The keyboard shifts by up to three octaves in either direction.",
        hardwareTargets: ["octaveUpButton"],
        visualMode: "full-plus-inset",
        expectedSound: "Higher than where you started, by one octave.",
        checkpoint: "The keys sound higher than they did at the start of the tutorial.",
        recoveryHelp:
          "You cannot go past three octaves in either direction, so if pressing does nothing you are already at the end of the range. Press the other button to come back.",
        nextHint: "There is a quick way back to the middle.",
      },
      {
        id: "B05-S08",
        title: "Reset the octave",
        instruction: "Press Octave Down and Octave Up together.",
        detail:
          "Pressing both at once sets the octave value back to 0. Both buttons go out when the keyboard is no longer shifted.",
        hardwareTargets: ["octaveButtons"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "The octave is remembered separately for each part and belongs to the program, so it is worth knowing how to put it back to 0 rather than leaving the keyboard shifted and wondering later why everything sounds wrong.",
        checkpoint: "Neither OCTAVE button is lit.",
        recoveryHelp:
          "Press them together again, firmly and at the same moment. Note that this sets the octave to 0 — that is Roland's own description of it. It does not undo anything else, and the JD-Xi has no general undo.",
        nextHint: "Two controls to the left of the keys are still untouched.",
      },
      {
        id: "B05-S09",
        title: "Bend the pitch",
        instruction: "Hold a key down and move the Pitch control away from you, then release it.",
        detail:
          "Moving it away from you raises the pitch and moving it toward you lowers it. Let go and it returns to the centre by itself.",
        hardwareTargets: ["pitchControl"],
        visualMode: "full-plus-inset",
        expectedSound: "The held note slides up in pitch, then slides back when you let go.",
        whyItMatters:
          "This is how a synthesizer note is bent the way a guitarist bends a string. It springs back on its own, so it is the safest of all the controls to experiment with.",
        checkpoint: "You can bend a held note up and down and hear it return to normal.",
        recoveryHelp:
          "If the pitch does not move, make sure you are holding a key down at the same time — the control only affects notes that are sounding.",
        nextHint: "The one beside it behaves differently, and that matters.",
      },
      {
        id: "B05-S10",
        title: "Add movement, then take it away",
        instruction:
          "Hold a key and move the Mod control away from you, then move it back toward you.",
        detail:
          "This adds vibrato — a wobble in the sound. With it all the way toward you, no effect is applied; the further away you move it, the stronger the effect.",
        hardwareTargets: ["modControl"],
        visualMode: "full-plus-inset",
        expectedSound:
          "The held note starts to waver, and steadies again as you bring the control back toward you.",
        whyItMatters:
          "Unlike Pitch, this one stays exactly where you leave it. Leaving it part-way is the reason a beginner sometimes finds every sound wobbling for the rest of the session and cannot work out why.",
        checkpoint:
          "The wobble is gone and the Mod control is all the way toward you.",
        recoveryHelp:
          "If everything is still wobbling, move the Mod control fully toward yourself — Roland's description is that no effect is applied in that position.",
        nextHint:
          "One more control, and it moves everything at once.",
      },
      {
        id: "B05-S11",
        title: "Shift the whole instrument",
        instruction: "Hold down Shift and press Octave Up.",
        detail:
          "This is Transpose. It shifts the pitch of the whole instrument by the smallest step there is, rather than by whole octaves.",
        hardwareTargets: ["shiftButton", "octaveUpButton", "display"],
        visualMode: "display-focus",
        expectedDisplay: ["< TRANSPOSE +1 >", "D1:Ah Super Saw"],
        syntheticDisplay: false,
        displayNote:
          "Roland's illustration from the Version 1.50 supplementary manual. The number is whatever you set, and the lower line shows your own part and tone name.",
        expectedSound:
          "Everything you play is very slightly higher than before, keys included — a much smaller move than the OCTAVE buttons make.",
        whyItMatters:
          "Octave steps are big jumps. Transpose moves things by the smallest step there is, which is how you match a sound to a song without learning to play in a different key.",
        checkpoint:
          "The display briefly shows a TRANSPOSE value, and what you play sounds slightly higher than it did.",
        quickReference: ["transpose"],
        recoveryHelp:
          "Hold Shift and press Octave Down once to bring it back to 0. If you have lost track of how far you have shifted, switching the power off and on clears it: Transpose is never saved, and always returns to 0 with the power.",
        nextHint: "Last step: leave things tidy.",
      },
      {
        id: "B05-S12",
        title: "Leave the keyboard where you found it",
        instruction:
          "Check that neither OCTAVE button is lit and that the Mod control is all the way toward you.",
        detail:
          "Two of the things you have used stay where you put them. Putting them back now saves confusion in the next tutorial.",
        hardwareTargets: ["octaveButtons", "modControl"],
        visualMode: "full",
        checkpoint:
          "Both OCTAVE buttons are dark, the Mod control is fully toward you, and a key plays a plain, steady note.",
        recoveryHelp:
          "Press both OCTAVE buttons together to set the octave back to 0, and move the Mod control fully toward yourself. If you also used Transpose, hold Shift and use the OCTAVE buttons to bring it back to 0.",
        nextHint:
          "You can play now. Next, start changing how the sound itself behaves.",
      },
    ],
  },
  B06: {
    id: "B06",
    level: "beginner",
    order: 6,
    title: "Change the sound with knobs",
    shortTitle: "Sound knobs",
    summary:
      "Turn the FILTER, AMP/ENV and LFO knobs and hear exactly what each one does. This is the first tutorial that changes a sound rather than just choosing one.",
    estimatedMinutes: 10,
    prerequisites: ["B05"],
    learningGoals: [
      "Change the brightness of a sound and hear it happen.",
      "Change how a sound starts and how it fades.",
      "Add movement with the LFO and take it away again.",
      "Know what happens to these changes when you walk away.",
    ],
    // Source record: docs/tutorials/B06-SOURCE-NOTES.md
    // B06 does not select another Program or Tone, but every knob it turns
    // edits the sound that is currently loaded, so it carries the
    // protect-your-work preflight at B06-S02 before the first knob move.
    // The documented revert -- [Shift] + [Enter] to return to the original
    // sound after you have switched or edited it (OM p.5) -- is in scope
    // here because FILTER, AMP/ENV and LFO are sound edits. It is stated
    // with Roland's own scope and never as a general undo.
    steps: [
      {
        id: "B06-S01",
        title: "Pick a sound you can hear clearly",
        instruction: "Press Digital Synth 1 and hold down a key.",
        detail:
          "A sound you can hold is much easier to work with here, because you will be listening for changes while a note is sounding.",
        hardwareTargets: ["digitalSynth1Button"],
        visualMode: "full-plus-inset",
        expectedSound: "A note that keeps sounding while you hold the key.",
        checkpoint: "You have a sound that holds steady while you hold a key.",
        recoveryHelp:
          "If the sound fades away immediately, press Tone + to step to another one and hold a key again. A sustained sound makes every knob in this tutorial easier to hear.",
        nextHint: "One thing to settle before you turn anything.",
      },
      {
        id: "B06-S02",
        title: "Protect any work you want to keep",
        instruction:
          "Decide whether the sound loaded right now is one you have been working on and have not saved.",
        detail:
          "Every knob from here on changes the sound that is loaded. Those changes are not saved anywhere, and there is no undo — but they do replace what is there while you work. If this is a sound you have been building and have not saved yet, stop and save it first.",
        hardwareTargets: ["filterSection", "ampEnvSection", "lfoSection"],
        visualMode: "full",
        whyItMatters:
          "Roland is explicit that a sound you create changes when you move the knobs, and is lost if you select a different program or switch off. This tutorial cannot see what state your JD-Xi is in, so it asks rather than assumes.",
        checkpoint:
          "You have decided: either there is nothing here you need to keep, or you are going to save it first.",
        recoveryHelp:
          "N09 Save your work is the tutorial that teaches saving. If you are unsure whether the loaded sound is edited, look at the display: Roland uses a missing tone number on the lower line as the signal that a sound has been changed.",
        nextHint: "Now the knob with the most obvious effect.",
      },
      {
        id: "B06-S03",
        title: "Open and close the filter",
        instruction: "Hold a key down and turn the Cutoff knob slowly to the left.",
        detail:
          "Cutoff is in the FILTER section. Turn it slowly — the interesting part is in the middle of its travel, not at the ends.",
        hardwareTargets: ["cutoffKnob"],
        visualMode: "full-plus-inset",
        expectedSound:
          "The sound gets darker and more muffled as you turn left, as though a blanket were being put over it.",
        whyItMatters:
          "The filter decides how bright or dark a sound is. It is the single most recognizable synthesizer control, and it is the one you will reach for most often.",
        checkpoint: "You can make the held note clearly duller and brighter again.",
        recoveryHelp:
          "If nothing changes, the filter may already be wide open — turn Cutoff well to the left first, then back to the right, and listen on the way. If the sound disappears entirely, you have closed the filter all the way; turn back to the right.",
        nextHint: "There is a second knob in that section.",
      },
      {
        id: "B06-S04",
        title: "Add emphasis",
        instruction: "Hold a key down, turn Resonance up a little, then move Cutoff again.",
        detail:
          "Resonance emphasizes the sound right around the point where the filter is cutting.",
        hardwareTargets: ["resonanceKnob", "cutoffKnob"],
        visualMode: "full-plus-inset",
        expectedSound:
          "A whistle or peak that follows Cutoff as you turn it — the classic sweeping synth sound.",
        checkpoint: "Moving Cutoff now produces an audible peak that moves with it.",
        recoveryHelp:
          "High resonance can get piercing. Turn Resonance back to the left and it settles down. If it became very loud, turn Master Volume down first, then Resonance.",
        nextHint: "The third control in that section is a button.",
      },
      {
        id: "B06-S05",
        title: "Change the filter type",
        instruction: "Press the FILTER Type button, then move Cutoff again.",
        detail:
          "This changes what Cutoff takes away. Press it once, move Cutoff, and listen to how the knob behaves differently.",
        hardwareTargets: ["filterTypeButton"],
        visualMode: "full-plus-inset",
        expectedSound:
          "Cutoff now removes a different part of the sound — for instance thinning it out from below instead of darkening it from above.",
        whyItMatters:
          "Same knob, different job. Knowing this button exists explains why Cutoff sometimes seems to do the opposite of what you expected.",
        checkpoint: "A different filter indicator is lit and Cutoff behaves differently.",
        recoveryHelp:
          "Keep pressing the Type button to step on through the choices until you find the one you like the sound of. If you have the Analog Synth part selected, this button has fewer options to offer you than it does on a digital part.",
        nextHint: "Now the knob that changes the shape of a note.",
      },
      {
        id: "B06-S06",
        title: "Change the shape of the note",
        instruction: "Turn the Envelope knob to the left, then play a key.",
        detail:
          "Roland describes this exactly: turning it left produces a shorter sound with a stronger attack; turning it right makes the attack softer and the release longer.",
        hardwareTargets: ["envelopeKnob"],
        visualMode: "full-plus-inset",
        expectedSound:
          "To the left, notes snap and stop quickly. To the right, they swell in gently and hang on after you let go.",
        whyItMatters:
          "This one knob is moving several things at once — how fast a note arrives, how it decays, how long it holds, and how long it takes to disappear. That is the envelope you heard in B05, now under your hand.",
        checkpoint: "You can make the same sound snappy and then make it soft and slow.",
        recoveryHelp:
          "Set the Envelope knob back to roughly the middle to get a normal-feeling note. If you want to adjust those stages one at a time rather than together, that lives in Tone Edit, which is N08's subject.",
        nextHint: "One section left, and it makes things move on their own.",
      },
      {
        id: "B06-S07",
        title: "Make the sound move by itself",
        instruction: "Hold a key down and turn the LFO Depth knob up from zero.",
        detail:
          "The LFO section makes something about the sound change over and over without you doing anything. Depth sets how much.",
        hardwareTargets: ["lfoDepthKnob"],
        visualMode: "full-plus-inset",
        expectedSound: "The held note starts moving on its own rather than sitting still.",
        whyItMatters:
          "This is the same idea as the Mod control from B05, except the instrument is doing it for you and you decide how strong it is.",
        checkpoint: "The held note is clearly moving without you touching anything.",
        recoveryHelp:
          "If nothing moves, turn Depth further up, and check which part is selected: the LFO is not applied to the Drums part. Turn Depth back to zero to stop the movement.",
        nextHint: "Two more knobs decide how fast, and what it moves.",
      },
      {
        id: "B06-S08",
        title: "Change the speed and the target",
        instruction: "With Depth still up, turn the LFO Rate knob, then turn Destination.",
        detail:
          "Rate is how fast the movement is. Destination chooses what gets moved, and the indicator that is lit shows which: applying it to pitch gives vibrato, to the filter gives a wah effect, and to the amp gives tremolo.",
        hardwareTargets: ["lfoRateKnob", "lfoDestinationKnob"],
        visualMode: "full-plus-inset",
        expectedSound:
          "The movement speeds up and slows down, and changes character completely depending on what it is applied to — wobbling in pitch, sweeping in brightness, or pulsing in volume.",
        checkpoint:
          "You have heard the same LFO produce at least two clearly different effects.",
        recoveryHelp:
          "Turn Depth back to zero and everything the LFO was doing stops, whatever Rate and Destination are set to. That is the quickest way out if the sound has become seasick.",
        nextHint: "Now the important part: what happens to all of this.",
      },
      {
        id: "B06-S09",
        title: "Where these changes went",
        instruction: "Look at the lower line of the display.",
        detail:
          "A sound that has been edited shows no tone number there. That missing number is the JD-Xi telling you the sound is no longer the stored one.",
        hardwareTargets: ["display"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "Everything you just did lives in a working area, not in storage. Selecting another tone or program replaces it, and switching the power off loses it. Nothing you have done has damaged the stored sound — but nothing has been kept, either.",
        checkpoint:
          "You can tell from the display whether the sound you are hearing has been edited.",
        recoveryHelp:
          "If the display still shows a tone number, nothing you turned registered as an edit — try moving Cutoff further and look again.",
        nextHint: "There is one documented way back.",
      },
      {
        id: "B06-S10",
        title: "Go back to the original sound",
        instruction: "Hold down Shift and press Enter.",
        detail:
          "Roland documents this as the way to return to the original sound after you have switched or edited it. It is not a general undo — the JD-Xi does not have one — and it does not reach beyond the sound.",
        hardwareTargets: ["shiftButton", "enterButton"],
        visualMode: "full-plus-inset",
        expectedSound: "The sound as it was before you started turning knobs.",
        whyItMatters:
          "This is the one recovery move that belongs to editing a sound. Knowing it exists is what makes the knobs safe to explore: you can go too far and still get back.",
        checkpoint:
          "The sound is back to how it started, and the tone number is showing on the display again.",
        recoveryHelp:
          "If the sound did not come back, make sure Shift is held down before you press Enter. If you would rather start completely fresh, selecting another program and coming back gives you the stored version — but be aware that doing so discards every unsaved change on this program, including any you did want to keep.",
        nextHint:
          "You can shape a sound now. Next, put it in a space.",
      },
    ],
  },
  B07: {
    id: "B07",
    level: "beginner",
    order: 7,
    title: "Add effects",
    shortTitle: "Add effects",
    summary:
      "Put your sound in a room, add echoes, and give it some grit — then take it all away again and decide which you preferred. All by ear.",
    estimatedMinutes: 9,
    prerequisites: ["B06"],
    learningGoals: [
      "Add space and echo to a sound.",
      "Hear that the other two effect slots change the sound itself rather than where it sits.",
      "Compare a sound with effects against the same sound without them, and choose by ear.",
    ],
    // Source record: docs/tutorials/B07-SOURCE-NOTES.md
    // Effects belong to the program, not to the tone (OM p.9), so B07 does
    // NOT offer [Shift] + [Enter] as its recovery: Roland documents that
    // shortcut as returning to the original sound, and extending it to
    // effect settings would be a claim Roland does not make. B07-S02 is the
    // protect-your-work preflight; the honest way back is stated at B07-S10.
    steps: [
      {
        id: "B07-S01",
        title: "Get a sound you can hear",
        instruction: "Press Digital Synth 1 and play a few keys.",
        detail:
          "Effects are much easier to hear on a sound that holds rather than one that stops immediately.",
        hardwareTargets: ["digitalSynth1Button"],
        visualMode: "full-plus-inset",
        expectedSound: "A sound you can hold on a key.",
        checkpoint: "You have a clear sound to work with.",
        recoveryHelp:
          "No sound? Check Master Volume and your listening connection — B02 covers that. If the sound stops the instant you let go, step to another tone with Tone +.",
        nextHint: "One thing to settle before you turn anything.",
      },
      {
        id: "B07-S02",
        title: "Protect any work you want to keep",
        instruction:
          "Decide whether this program holds effect settings you have made and not saved.",
        detail:
          "Effect settings belong to the program. The knobs in this tutorial change them, and those changes are not saved until you deliberately save the program. If you have been building something on this program and have not saved it, stop and save it first.",
        hardwareTargets: ["effectsSection"],
        visualMode: "full",
        whyItMatters:
          "Unlike the sound edits in B06, there is no documented one-button way back from an effect change. That makes it worth pausing here rather than afterwards.",
        checkpoint:
          "You have decided: either there is nothing here you need to keep, or you are going to save it first.",
        recoveryHelp:
          "N09 Save your work is the tutorial that teaches saving. If you are not sure whether this program has been edited, assume it has — you cannot get it back afterwards.",
        nextHint: "Start with the effect that is easiest to hear.",
      },
      {
        id: "B07-S03",
        title: "Put the sound in a room",
        instruction: "Hold a key down and turn the Reverb knob up slowly.",
        detail: "Reverb is the sound of a space around what you play.",
        hardwareTargets: ["reverbKnob"],
        visualMode: "full-plus-inset",
        expectedSound:
          "The note stops feeling like it is happening inside the box and starts sounding like it is in a room, then a hall.",
        whyItMatters:
          "Almost every sound you have ever heard on a record has some of this. It is the quickest way to make a bare synth sound finished.",
        checkpoint: "You can hear the sound continue for a moment after you let the key go.",
        recoveryHelp:
          "Turn Reverb back to the left to remove it. If you hear no difference at all, work through B07-S09 — Roland lists several settings that stop effects being applied.",
        nextHint: "Now add repeats.",
      },
      {
        id: "B07-S04",
        title: "Add echoes",
        instruction: "Play a short note and turn the Delay knob up.",
        detail:
          "Delay repeats what you play. Short notes show it far better than held ones.",
        hardwareTargets: ["delayKnob"],
        visualMode: "full-plus-inset",
        expectedSound: "Your note comes back once, then again more quietly, fading away.",
        checkpoint: "A single key press produces audible repeats.",
        recoveryHelp:
          "Turn Delay back to the left to remove it. If the repeats pile up into a mess, that is normal at high settings — turn it down.",
        nextHint: "Two more slots, and these change the character of the sound itself.",
      },
      {
        id: "B07-S05",
        title: "Try one of the other effects",
        instruction:
          "Press the Effect 1 Type button once, then hold a key down and turn the Effect 1 knob up.",
        detail:
          "The button chooses what the effect is; the knob decides how much of it you get. There is a second slot beside it, Effect 2, which works exactly the same way. You do not need to learn what any of the choices are called — press, turn, and listen.",
        hardwareTargets: ["effect1TypeButton", "effect1Knob"],
        visualMode: "full-plus-inset",
        expectedSound:
          "Something rougher or more processed than Reverb and Delay gave you — these change what the sound is made of rather than where it seems to be.",
        whyItMatters:
          "Reverb and Delay put a sound somewhere. These two slots change the sound itself. That is the whole distinction worth having at this stage.",
        checkpoint:
          "You have heard the Effect 1 knob change the character of the sound.",
        recoveryHelp:
          "Turn Effect 1 back to the left to remove it. If nothing changed at all, turn the knob further — the type chooses what the effect is, and until the knob is up you get none of it. Some choices get much louder as you turn them up, so if the sound jumps, turn Master Volume down first.",
        nextHint: "One button decides which effects are switched on at all.",
      },
      {
        id: "B07-S06",
        title: "Switch effects in and out",
        instruction: "Press the Effects On/Off button and listen.",
        detail:
          "Each press changes which combination of effects is in use. The indicators at the upper left of each knob light to show which effects are available.",
        hardwareTargets: ["effectsOnOffButton"],
        visualMode: "full-plus-inset",
        expectedSound: "Effects drop out and come back as you press.",
        whyItMatters:
          "This is the quickest way to hear what your effects are actually contributing: switch them out, and the difference is the effect.",
        checkpoint:
          "You can hear the sound change as you press, and the lit indicators change with it.",
        recoveryHelp:
          "Keep pressing to step on through the combinations until the indicators show the effects you want. Nothing here is destructive — you are switching effects in and out, not deleting their settings.",
        nextHint: "Last step: decide what you actually want to keep on.",
      },
      {
        id: "B07-S07",
        title: "Choose by ear, and leave it there",
        instruction:
          "Set the four knobs where you like the sound, comparing against no effects at all with the Effects On/Off button.",
        detail:
          "There is no correct amount. The only test is whether you prefer it with or without, and the On/Off button gives you that comparison in one press.",
        hardwareTargets: ["effectsSection", "effectsOnOffButton"],
        visualMode: "full-plus-inset",
        expectedSound:
          "Your sound with effects, then bare, then with effects again — and a clear preference between them.",
        whyItMatters:
          "Effects are easy to overdo, because each one sounds better on its own than it does in a mix. Getting used to switching them out and asking whether you miss them is the habit that keeps a sound usable later.",
        checkpoint:
          "You have settled the four knobs somewhere you like, and you can say what the effects are adding.",
        recoveryHelp:
          "Everything you changed here belongs to this program and none of it is saved yet. There is no undo for effect settings, and no single button that puts them back. Turning the knobs back by ear is one way. Selecting a different program and returning gives you the stored version — but be clear that doing so discards every unsaved change on this program, effects and sound alike. N09 is where you learn to keep them instead.",
        nextHint:
          "Your sound has character now. Next, let the JD-Xi play something for you.",
      },
    ],
  },
  B08: {
    id: "B08",
    level: "beginner",
    order: 8,
    title: "Play a pattern",
    shortTitle: "Play a pattern",
    summary:
      "Start and stop the JD-Xi's pattern sequencer, then listen inside a running pattern — moving between its parts, and muting one to hear what it was doing. You will not record anything.",
    estimatedMinutes: 8,
    prerequisites: ["B07"],
    learningGoals: [
      "Start and stop a pattern.",
      "Tell from the display that a pattern is running.",
      "Move between the parts of a pattern while it plays.",
      "Hear what one part is contributing by muting it.",
    ],
    // Source record: docs/tutorials/B08-SOURCE-NOTES.md
    // B08 records nothing. Part Mute (OM p.10) is used deliberately because
    // it is reversible by the same gesture that applied it. The tutorial
    // cannot assume the loaded program contains a pattern -- Roland
    // documents no way to know in advance -- so the checkpoint is the
    // measure-beat field advancing rather than a promise of sound, and the
    // protect-your-work preflight at B08-S04 sits immediately before the
    // optional program change.
    steps: [
      {
        id: "B08-S01",
        title: "Start from the top screen",
        instruction: "Press Exit several times.",
        detail:
          "The measure and beat counter you are about to watch lives on the top screen, in the middle of the upper line.",
        hardwareTargets: ["exitButton", "display"],
        visualMode: "display-focus",
        expectedDisplay: ["A64   1-1    120", "256:Synth Lead01"],
        syntheticDisplay: false,
        displayNote:
          "Roland's own example of the top screen. Your JD-Xi shows its own program, tempo and tone name.",
        checkpoint:
          "The display shows the program on the left, a pair of numbers in the middle, and the tempo on the right.",
        recoveryHelp: "Press Exit a few more times until the two-line screen appears.",
        nextHint: "Now start the sequencer.",
      },
      {
        id: "B08-S02",
        title: "Start the pattern",
        instruction: "Press the Play/Stop button once.",
        detail:
          "This is the button marked with a play and stop symbol, in the PATTERN SEQUENCER section.",
        hardwareTargets: ["playStopButton", "display"],
        visualMode: "full-plus-inset",
        expectedSound:
          "If this program has a pattern recorded, you hear it start. Some programs have nothing recorded, in which case you hear nothing — the next steps deal with that.",
        whyItMatters:
          "The pattern sequencer plays a short piece of music over and over so you can perform on top of it. Everything in the Novice sequencer tutorials starts from this one button.",
        checkpoint:
          "The pair of numbers in the middle of the upper line is counting — that is the measure and the beat, and it means the sequencer is running.",
        recoveryHelp:
          "If the numbers do not move at all, see the last step of this tutorial: Roland documents one system setting that stops patterns from playing.",
        nextHint: "Now stop it again.",
      },
      {
        id: "B08-S03",
        title: "Stop the pattern",
        instruction: "Press the Play/Stop button again.",
        detail: "The same button starts and stops.",
        hardwareTargets: ["playStopButton"],
        visualMode: "full-plus-inset",
        checkpoint: "The counting stops, and any sound the pattern was making stops with it.",
        recoveryHelp:
          "If it keeps going, press the button once more, firmly. Nothing is being recorded, so pressing it repeatedly is harmless.",
        nextHint:
          "If you heard nothing at all, the next two steps find you a program that has something in it.",
      },
      {
        id: "B08-S04",
        title: "Protect any work you want to keep",
        instruction:
          "If you heard a pattern, skip to the step after next. If you heard nothing, decide whether there is unsaved work on this program.",
        detail:
          "Finding a program that has a pattern in it means selecting a different program, and doing that throws away anything on this one you have edited and not saved — a sound from B06, effects from B07, anything.",
        hardwareTargets: ["programValueButtons"],
        visualMode: "full",
        whyItMatters:
          "There is no way to ask the JD-Xi which programs contain patterns, so finding one means trying them. That is a search, and a search means changing programs repeatedly — which is exactly the action that discards unsaved work.",
        checkpoint:
          "You have decided: either you already heard a pattern and can move on, or there is nothing here you need to keep, or you are going to save it first.",
        recoveryHelp:
          "N09 Save your work is the tutorial that teaches saving. If you would rather not risk it at all, you can leave B08 here and come back — nothing later in the Beginner path depends on having heard a pattern.",
        nextHint: "Now go looking.",
      },
      {
        id: "B08-S05",
        title: "Find a program with a pattern",
        instruction: "Press Value + to select the next program, then press Play/Stop.",
        detail:
          "Repeat as needed. Preset programs are in banks A to D, and stepping through them is the way to find one with a pattern you like.",
        hardwareTargets: ["programValuePlusButton", "playStopButton"],
        visualMode: "full-plus-inset",
        expectedSound: "A repeating musical pattern, once you land on a program that has one.",
        checkpoint: "You have a pattern playing that you can hear.",
        recoveryHelp:
          "Remember to stop the pattern with Play/Stop before stepping to the next program, so you are always listening to one thing at a time. If several programs in a row give you nothing, keep going — you are stepping one program at a time, and holding Shift while pressing Value jumps a whole bank.",
        nextHint: "With a pattern running, you can look inside it.",
      },
      {
        id: "B08-S06",
        title: "Look inside the pattern",
        instruction:
          "While the pattern plays, press each Part Select button in turn and play a few keys after each one.",
        detail:
          "Selecting a part while a pattern runs does not change the pattern. It changes which part the keys play, so you can hear each part's own sound against everything else that is going on.",
        hardwareTargets: ["partSelectGroup", "keys"],
        visualMode: "full-plus-inset",
        expectedSound:
          "The pattern carries on unchanged, and what you play on the keys changes character with each part you select.",
        whyItMatters:
          "A pattern is several parts at once. Being able to move between them while it runs is how you work out which part is making which sound — and it is the same move every sequencer tutorial from N03 onward starts with.",
        checkpoint:
          "The pattern kept playing throughout, and the keys sounded different on at least two of the parts.",
        recoveryHelp:
          "If the pattern stopped, you pressed Play/Stop rather than a Part Select button — press it again to restart. If the keys make no sound on a particular part, that part may have nothing but a low level in this program; move on to the next one.",
        nextHint: "Now take a part out and hear what it was doing.",
      },
      {
        id: "B08-S07",
        title: "Mute a part while it plays",
        instruction: "With the pattern running, hold down Shift and press Drums.",
        detail:
          "This mutes that part. The pattern keeps running, but you stop hearing what the Drums part was contributing.",
        hardwareTargets: ["shiftButton", "drumsButton"],
        visualMode: "full-plus-inset",
        expectedSound: "The drums drop out and everything else carries on.",
        whyItMatters:
          "This is the fastest way to hear what is actually in a pattern. Take one part away and what you stop hearing is that part's contribution.",
        checkpoint: "Part of the sound has disappeared and the rest is still playing.",
        recoveryHelp:
          "If nothing changed, this program's pattern may have nothing on the Drums part — try Shift with one of the other three Part Select buttons instead. Make sure Shift is held down before you press.",
        nextHint: "The same gesture puts it back.",
      },
      {
        id: "B08-S08",
        title: "Bring it back",
        instruction: "Hold down Shift and press Drums again.",
        detail:
          "The same combination unmutes. You can mute several parts at once and bring each back the same way.",
        hardwareTargets: ["shiftButton", "partSelectGroup"],
        visualMode: "full-plus-inset",
        expectedSound: "The drums come back in.",
        whyItMatters:
          "Muting is completely reversible and changes nothing that is stored, which makes it one of the few things on this instrument you can experiment with freely.",
        checkpoint: "Everything you muted is audible again.",
        recoveryHelp:
          "If a part is still missing, hold Shift and press that part's button once more. If you have lost track of which are muted, hold Shift and press each of the four in turn, listening after each one.",
        nextHint: "Now look at where the pattern lives.",
      },
      {
        id: "B08-S09",
        title: "Where a pattern lives",
        instruction: "Look at the row of buttons numbered 01 to 16.",
        detail:
          "A JD-Xi pattern is up to four measures long, and this row is how you will lay notes into it. You are not recording anything today — this is just so you know where the Novice tutorials are heading.",
        hardwareTargets: ["stepButtons"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "Patterns are not recorded by playing along and hoping. Each of those buttons is a step in time, and switching one on decides that something happens at that moment.",
        checkpoint: "You can point to the numbered button row and to the PATTERN SEQUENCER controls.",
        recoveryHelp:
          "The numbered row runs to the right of the Favorite button, above the keys. The PATTERN SEQUENCER section with Play/Stop is to its left.",
        nextHint: "One last thing, in case a pattern ever refuses to play.",
      },
      {
        id: "B08-S10",
        title: "Stop where you are",
        instruction: "Press Play/Stop to stop the pattern.",
        detail:
          "Leave the parts you muted unmuted. Nothing you did here was recorded or saved — starting, stopping and muting change nothing that is stored.",
        hardwareTargets: ["playStopButton"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "Muting is the one arranging move you already have. Taking a part out and hearing what the rest sounds like without it is how you decide, later, what a pattern actually needs.",
        checkpoint:
          "The pattern is stopped, the counting has stopped, and every part is audible again.",
        recoveryHelp:
          "If a part is still silent after you stop, hold Shift and press its Part Select button once to unmute it. If a pattern would not start at all in this tutorial, N10 Getting unstuck is where that is worked through.",
        nextHint:
          "You can start, stop and listen inside a pattern. Next, change how it feels.",
      },
    ],
  },
  B09: {
    id: "B09",
    level: "beginner",
    order: 9,
    title: "Change the feel",
    shortTitle: "Change the feel",
    summary:
      "Speed a pattern up, slow it down, set the tempo by tapping, and give the whole thing a bouncy shuffle.",
    estimatedMinutes: 8,
    prerequisites: ["B08"],
    learningGoals: [
      "Change the tempo with the knob and by tapping.",
      "Know that tempo belongs to the program and is shared with the pattern.",
      "Add a shuffle feel, and hear a pattern go from straight to swinging.",
    ],
    // Source record: docs/tutorials/B09-SOURCE-NOTES.md
    // Two mechanisms from two documents: tempo is baseline behaviour
    // (OM p.6) and shuffle was added at system version 1.50 (v1.50 p.2).
    // Both are taught unconditionally, because this course targets the
    // owner's instrument at 1.51 (PRODUCT-CURRICULUM-MASTER-PLAN.md sec 2);
    // the version provenance stays in the source notes, not in learner text.
    // No sequencer Scale or note-value language appears anywhere: B09 owns
    // faster/slower and straighter/swingier, and nothing more.
    // Tempo Lock is a SYSTEM parameter and is deliberately not performed.
    steps: [
      {
        id: "B09-S01",
        title: "Protect any work you want to keep",
        instruction:
          "Decide whether this program holds a tempo or a feel you have set and not saved.",
        detail:
          "The tempo belongs to the program, and so does the shuffle setting. Changing them here replaces whatever this program is currently set to. If you have been building something and have not saved it, save it first.",
        hardwareTargets: ["tempoSection"],
        visualMode: "full",
        whyItMatters:
          "It is a smaller loss than a sound or a pattern, but it is the same kind of loss, and it happens the moment you turn the knob rather than at some later point you could stop at.",
        checkpoint:
          "You have decided: either there is nothing here to keep, or you have saved it first.",
        recoveryHelp:
          "N09 Save your work teaches saving. If you only want to hear what the controls do without changing this program, step to a program you do not mind altering first — remembering that changing program discards anything unsaved on the one you leave.",
        nextHint: "Now get something playing to hear the changes against.",
      },
      {
        id: "B09-S02",
        title: "Get a pattern running",
        instruction: "Press Play/Stop to start a pattern.",
        detail:
          "Tempo and feel are things you hear in something that is already playing, so start there. B08 covers finding a program that has a pattern in it.",
        hardwareTargets: ["playStopButton"],
        visualMode: "full-plus-inset",
        expectedSound: "A repeating pattern.",
        checkpoint: "A pattern is playing and the measure and beat numbers are counting.",
        recoveryHelp:
          "If nothing plays, this program may have no pattern recorded — B08 walks through finding one, and through the Sync Mode setting that stops patterns playing.",
        nextHint: "Now change how fast it goes.",
      },
      {
        id: "B09-S03",
        title: "Speed it up and slow it down",
        instruction: "Turn the tempo knob while the pattern plays.",
        detail: "It is in the TEMPO section, at the left of the panel.",
        hardwareTargets: ["tempoKnob"],
        visualMode: "full-plus-inset",
        expectedSound: "The pattern speeds up or slows down as you turn.",
        checkpoint:
          "The tempo number at the right of the upper line of the display changes as you turn.",
        recoveryHelp:
          "If nothing changes, check the pattern is actually running. If the tempo number moves but the pattern does not follow, the JD-Xi may be set to follow an external device — B08's last step covers that setting.",
        nextHint: "There is another way to set it, and it is often the better one.",
      },
      {
        id: "B09-S04",
        title: "Tap the tempo you want",
        instruction: "Press the Tap button three or more times, evenly, at the speed you want.",
        detail:
          "Tap at a steady pace, as though counting a song in. Three presses is the minimum; more is fine, and steadier is better than faster.",
        hardwareTargets: ["tapButton"],
        visualMode: "full-plus-inset",
        expectedSound: "The pattern settles to roughly the speed you tapped.",
        whyItMatters:
          "You almost never know that a song is 118 beats per minute. You do know how fast it feels. Tapping turns that into a number without you having to.",
        checkpoint: "The tempo number has changed to something near the speed you tapped.",
        recoveryHelp:
          "If the tempo came out wrong, just tap again — three or more even presses replace it. Tapping unevenly gives an uneven result, so count yourself in before you start.",
        nextHint: "Worth knowing where that tempo setting actually lives.",
      },
      {
        id: "B09-S05",
        title: "Whose tempo is it",
        instruction: "Look at the tempo number on the display.",
        detail:
          "The tempo is saved with each individual program, and the same setting is shared with that program's pattern. Changing it is an edit to the program, like a knob move — it is not kept unless you save the program.",
        hardwareTargets: ["display"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "This explains something that otherwise looks like a fault: select a different program and the tempo changes, because you have loaded that program's tempo along with everything else.",
        checkpoint:
          "You can find the tempo on the display and say what happens to it when you switch programs.",
        recoveryHelp:
          "If you want a particular tempo back, set it again with the knob or the Tap button — the JD-Xi has no undo, and tempo is easy to reset by ear against the pattern.",
        nextHint:
          "One more way to change the feel, and it is about swing rather than speed.",
      },
      {
        id: "B09-S06",
        title: "About shuffle",
        instruction: "Keep the pattern playing and read this before the next two steps.",
        detail:
          "Shuffle changes the timing inside the beat rather than the speed of it. Roland describes 50% as notes spaced evenly; raising it gives an increasingly bouncy feel.",
        hardwareTargets: ["playStopButton"],
        visualMode: "full",
        whyItMatters:
          "Tempo is how fast. Shuffle is how it swings. Two patterns at the same tempo can feel completely different, and this is the control that does it.",
        checkpoint: "The pattern is still playing and you know what you are about to change.",
        recoveryHelp:
          "Shuffle needs a pattern to be playing before it will respond. If you have stopped, press Play/Stop again.",
        nextHint: "First choose which part gets the shuffle.",
      },
      {
        id: "B09-S07",
        title: "Choose the shuffle part",
        instruction: "With the pattern playing, hold down Enter and press a Part Select button.",
        detail:
          "This chooses which part the shuffle setting will apply to. Hold Enter down first, then press the part you want.",
        hardwareTargets: ["enterButton", "partSelectGroup"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "Enter is normally the button that confirms things. Here it works as a held modifier instead, in the same way Shift does. That is worth knowing because the shortcut lists printed in Roland's manuals do not include this combination, so it is not one you could find by reading them.",
        checkpoint: "You have chosen a part while holding Enter, and the pattern is still playing.",
        recoveryHelp:
          "If nothing seems to happen, that is expected at this step — choosing the part is silent, and you will see the value in the next step. Make sure the pattern is playing and that Enter is held down before you press the part button. If the part simply changed as it normally does, Enter was not held.",
        nextHint: "Now set how much shuffle.",
      },
      {
        id: "B09-S08",
        title: "Set the shuffle amount",
        instruction: "Hold down Enter and turn the LFO Depth knob.",
        detail:
          "The display shows the value as you turn it, from 0% through 50% to 100%. At 50% the notes are evenly spaced; higher values bounce.",
        hardwareTargets: ["enterButton", "lfoDepthKnob", "display"],
        visualMode: "display-focus",
        expectedDisplay: ["< SHUFFLE 50% >", "D1:Ah Super Saw"],
        syntheticDisplay: false,
        displayNote:
          "Roland's illustration from the Version 1.50 supplementary manual. The percentage is whatever you set, and the lower line shows your own part and tone name.",
        expectedSound:
          "The pattern stops marching evenly and starts to swing, more strongly the further you go above 50%.",
        checkpoint:
          "The display shows a SHUFFLE percentage, and you can hear the feel of the pattern change as you turn.",
        recoveryHelp:
          "Turn it back to 50% and the notes are evenly spaced again — that is Roland's own description of that value. If nothing appears on the display, check three things: the pattern is playing, Enter is held down while you turn, and the knob you are turning is Depth in the LFO section.",
        nextHint: "Last step: stop, and know what you are leaving behind.",
      },
      {
        id: "B09-S09",
        title: "Stop, and what is kept",
        instruction: "Press Play/Stop to stop the pattern.",
        detail:
          "Both tempo and shuffle are saved with the program — if you save it. Until then they are unsaved edits like any other, and selecting a different program or switching off loses them.",
        hardwareTargets: ["playStopButton"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "You now have four kinds of change that live in the same temporary place: the sound from B06, the effects from B07, and the tempo and feel from here. One save keeps all of them, because they all belong to the program.",
        checkpoint: "The pattern is stopped and you know none of your changes are stored yet.",
        recoveryHelp:
          "There is no undo. If you want the program back exactly as it was, selecting a different program and returning gives you the stored version — and discards everything you have changed on this one. If you want to keep what you have instead, N09 Save your work is the tutorial for that.",
        nextHint:
          "That is everything the Beginner path teaches. Next, put it all together.",
      },
    ],
  },
  B10: {
    id: "B10",
    level: "beginner",
    order: 10,
    title: "First 15-minute challenge",
    shortTitle: "15-minute challenge",
    summary:
      "No new buttons. Fifteen minutes to use everything you have learned: find a sound, shape it, put it in a space, and play along with a pattern.",
    estimatedMinutes: 15,
    prerequisites: ["B09"],
    learningGoals: [
      "Do the whole Beginner sequence without being told which button to press.",
      "Recognize which tutorial to go back to when something does not work.",
      "Finish with a sound and a pattern you like the sound of.",
    ],
    // Source record: docs/tutorials/B10-SOURCE-NOTES.md
    // B10 introduces no new technical claim and teaches no new procedure --
    // every action it asks for was taught and source-verified in B02-B09,
    // and each step's recoveryHelp names the tutorial that taught it. It is
    // a challenge rather than an exam: nothing is scored, no step requires
    // vocabulary, and the learner may stop at any point. The
    // protect-your-work preflight at B10-S02 sits before the first
    // discard-capable transition, as in B03.
    steps: [
      {
        id: "B10-S01",
        title: "Set yourself up",
        instruction: "Get to a state where pressing a key makes a sound you can hear comfortably.",
        detail:
          "Listening connected, JD-Xi on, a part selected, Master Volume somewhere sensible. However you get there is fine.",
        hardwareTargets: ["masterVolumeKnob"],
        visualMode: "full-plus-inset",
        expectedSound: "Any sound at all, at a comfortable level.",
        checkpoint: "You press a key and hear it clearly, without it being too loud.",
        recoveryHelp:
          "B02 Get your first sound walks through this one action at a time, including the order to switch things on in.",
        nextHint: "You are going to change sounds, so settle this first.",
      },
      {
        id: "B10-S02",
        title: "Protect any work you want to keep",
        instruction: "Decide whether there is unsaved work on this JD-Xi you want to keep.",
        detail:
          "This challenge selects programs and tones and turns knobs. All of that replaces whatever is loaded and unsaved. If there is something you want to keep, save it before you start.",
        hardwareTargets: ["programValueButtons", "toneButtons"],
        visualMode: "full",
        checkpoint:
          "You have decided: either there is nothing to keep, or you have saved it first.",
        recoveryHelp:
          "N09 Save your work teaches saving. If you are not sure whether something is unsaved, look at the lower line of the display: a sound with no tone number showing has been edited.",
        nextHint: "Now go and find something you like.",
      },
      {
        id: "B10-S03",
        title: "Find a sound you like",
        instruction: "Using the Category dial and the Tone buttons, find a sound you enjoy.",
        detail:
          "There is no right answer. Spend a minute or two and stop when something makes you want to keep playing it.",
        hardwareTargets: ["categoryDial", "toneButtons"],
        visualMode: "full-plus-inset",
        expectedSound: "A sound you have chosen on purpose rather than the one that happened to be loaded.",
        checkpoint: "You have a sound you actually like.",
        recoveryHelp:
          "B03 Find sounds you like covers this. Remember the Tone pair changes the sound and the Value pair changes the whole program — they look the same and sit near each other.",
        nextHint: "Now try it on another part.",
      },
      {
        id: "B10-S04",
        title: "Try a different part",
        instruction: "Switch to a different part and play the same keys.",
        detail: "Any of the four. Notice how different the same keys feel.",
        hardwareTargets: ["partSelectGroup"],
        visualMode: "full-plus-inset",
        expectedSound: "A different sound from the same keys.",
        checkpoint: "You have heard at least two of the four parts, and you know which one you are on.",
        recoveryHelp:
          "B04 Meet the four parts covers this. If some keys are silent, you are probably on the Drums part high up the keyboard, where nothing is assigned.",
        nextHint: "Now stretch out.",
      },
      {
        id: "B10-S05",
        title: "Use the whole range",
        instruction: "Shift the keyboard an octave and bend a note.",
        detail: "Use the OCTAVE buttons and the Pitch control.",
        hardwareTargets: ["octaveButtons", "pitchControl"],
        visualMode: "full-plus-inset",
        expectedSound: "The same sound much lower or higher, and a note that slides and springs back.",
        checkpoint: "You have played outside the range the keys started in, and bent a note.",
        recoveryHelp:
          "B05 Play with the keys covers this. Press both OCTAVE buttons together to set the octave back to 0, and remember the Mod control stays where you leave it.",
        nextHint: "Now change the sound rather than just choosing it.",
      },
      {
        id: "B10-S06",
        title: "Shape it",
        instruction: "Make the sound darker or brighter, and change how it starts.",
        detail: "Cutoff in the FILTER section, and the Envelope knob in AMP/ENV.",
        hardwareTargets: ["cutoffKnob", "envelopeKnob"],
        visualMode: "full-plus-inset",
        expectedSound: "A sound that is recognizably yours rather than the preset you started from.",
        checkpoint: "The sound has changed in a way you chose, and you can hear it.",
        recoveryHelp:
          "B06 Change the sound with knobs covers this. If you have gone too far, hold Shift and press Enter to return to the original sound.",
        nextHint: "Now give it somewhere to be.",
      },
      {
        id: "B10-S07",
        title: "Put it in a space",
        instruction: "Add some reverb, or some delay, or both.",
        hardwareTargets: ["reverbKnob", "delayKnob"],
        visualMode: "full-plus-inset",
        expectedSound: "The same sound, but in a room, or repeating.",
        checkpoint: "You can hear the difference when you turn the effect down and up again.",
        recoveryHelp:
          "B07 Add effects covers this. If a knob seems to do nothing, press Effects On/Off and listen for whether anything changes at all.",
        nextHint: "Now let the JD-Xi play with you.",
      },
      {
        id: "B10-S08",
        title: "Play along with a pattern",
        instruction: "Start a pattern, then play over the top of it.",
        detail:
          "Do not try to be impressive. Hold single notes that sound good against what is playing.",
        hardwareTargets: ["playStopButton", "keys"],
        visualMode: "full",
        expectedSound: "A pattern running, with what you play on top of it.",
        checkpoint: "You have played along with a running pattern for a little while.",
        recoveryHelp:
          "B08 Play a pattern covers this, including what to do when nothing plays. If the pattern is drowning you out, hold Shift and press a Part Select button to mute a part.",
        nextHint: "Now change how it feels.",
      },
      {
        id: "B10-S09",
        title: "Change the feel",
        instruction: "Take the tempo somewhere you like better.",
        detail: "The tempo knob, or the Tap button at the speed you want.",
        hardwareTargets: ["tempoSection"],
        visualMode: "full-plus-inset",
        expectedSound: "The same pattern at a speed you chose.",
        checkpoint: "The pattern is running at a tempo you set.",
        recoveryHelp:
          "B09 Change the feel covers this, including the shuffle setting if you want the pattern to swing rather than just run faster.",
        nextHint: "Now take something out of it.",
      },
      {
        id: "B10-S10",
        title: "Take a part out, then put it back",
        instruction:
          "With the pattern running, mute one part, listen for a few bars, then unmute it.",
        detail:
          "Hold Shift and press a Part Select button to mute that part; the same combination brings it back.",
        hardwareTargets: ["shiftButton", "partSelectGroup"],
        visualMode: "full-plus-inset",
        expectedSound:
          "The pattern carries on with a piece missing, then sounds fuller again when you bring the part back.",
        whyItMatters:
          "This is the first arranging decision you will ever make on this instrument: does the pattern need that part or not? You can only answer it by taking the part away and listening.",
        checkpoint:
          "You have heard the pattern with a part missing and with it back again, and you have an opinion about which you preferred.",
        recoveryHelp:
          "If a part will not come back, hold Shift and press its Part Select button once more — it is the same combination both ways, and it is easy to press one time too many. B08 Play a pattern covers this step by step.",
        nextHint: "One last thing, and it is the honest one.",
      },
      {
        id: "B10-S11",
        title: "What you have, and what happens to it",
        instruction: "Stop the pattern and look at what you have made.",
        detail:
          "You chose a sound, shaped it, put it in a space, set a tempo, and played along. None of it is stored. Selecting another program or switching the power off loses all of it at once.",
        hardwareTargets: ["display"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "This is the honest end of the Beginner path, and it is deliberate: you can now use the JD-Xi, and the one thing you cannot yet do is keep what you make. That is the first thing the Novice path fixes.",
        checkpoint:
          "You have played something you liked, and you know it will not survive switching off.",
        recoveryHelp:
          "If you want to keep what you have made, do not switch the JD-Xi off and do not change programs — go to N09 Save your work now, with it still loaded. If you do not mind losing it, there is nothing to do: nothing you have done has changed anything stored on the instrument.",
        nextHint:
          "That is the Beginner path complete. The Novice path starts with the menus, and then teaches you to save.",
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
      "Learn the small group of buttons next to the display: how to open the Menu, move through it, open an item, understand where the Value buttons are used, and get back out again. You will leave the JD-Xi exactly as you found it.",
    estimatedMinutes: 10,
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
    // The tutorial changes nothing on the instrument. Not one step selects
    // another program or another tone, and no Value button is pressed
    // anywhere. That is a direct consequence of prerequisites being advisory
    // (TUTORIAL-ARCHITECTURE §6): a learner can open N01 at any moment, so
    // N01 cannot assume they have no unsaved work, and switching program or
    // tone would discard it (OM p.6, p.9). N01-S13 teaches the two -/+ pairs
    // apart by sight instead. SYSTEM is entered for navigation only, because
    // Roland saves system parameters automatically when you leave that
    // screen (OM p.13).
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
          "Cursor only moves the selection. It never opens anything and never changes a value, so you can move up and down the Menu list as much as you like.",
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
          "Important: from here on, do not press the Value buttons. Anything you change in SYSTEM is saved by the JD-Xi automatically when you leave the screen. You are here to look, and to learn how to move around. Whichever group and parameter your JD-Xi shows you, the screen has the same two-line shape.",
        hardwareTargets: ["enterButton", "display"],
        visualMode: "display-focus",
        expectedDisplay: ["GENERAL", "LCD Contrast 10"],
        syntheticDisplay: false,
        displayNote:
          "Roland's illustrated SYSTEM example. Your JD-Xi may open on a different SYSTEM group, or show a different value.",
        whyItMatters:
          "When you edit a sound, the JD-Xi discards that change unless you deliberately save it. SYSTEM is different: it saves itself as you leave the screen. That difference is why this is the one screen to look at before you touch anything.",
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
          "The upper line changes to a neighbouring group. SYSTEM has six of them: GENERAL, KEY TOUCH, SOUND, CLICK, INPUT and MIDI. Cursor on its own walks through parameters; Shift with Cursor moves between whole groups.",
        hardwareTargets: ["shiftButton", "cursorRightButton"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "Roland documents this as working in setting screens such as SYSTEM and the edit screens. It is not a universal shortcut: while you are typing a name, the same combination deletes a character instead. On this instrument, what a combination does depends on which screen you are in.",
        checkpoint: "The name on the upper line has changed to a different group.",
        recoveryHelp:
          "If the group name does not change, you may already be at the last group. Keep holding Shift and press Cursor ◄ once instead. If it still does not change, check that you are inside SYSTEM and that Shift is held down before you press Cursor.",
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
          "Two more sets of buttons to sort out — the ones that get mixed up most.",
      },
      {
        id: "N01-S13",
        title: "Two pairs that are not the same",
        instruction: "Find the two −/+ button pairs on the panel.",
        detail:
          "One has Value printed between its − and its +, with Program (Pattern) above it. The other has Tone printed between its − and its +, to the right of the four Part Select buttons. They look identical and they do different jobs. Find them, but do not press either one.",
        hardwareTargets: ["programValueButtons", "toneButtons"],
        visualMode: "full",
        whyItMatters:
          "Program Value chooses which whole setup you are playing. Tone changes the sound inside the setup you already have. Reaching for the wrong pair is the most common way a beginner loses the sound they had — and that is exactly why this tutorial has you find them rather than press them. If you had been part-way through changing a sound and had not saved it, either pair would throw that work away.",
        checkpoint:
          "You can point to each pair and say which word is printed on it.",
        recoveryHelp:
          "Read the printed word rather than the − and the +. The pair nearer the display says Value; the pair further to the right says Tone.",
        nextHint: "One last thing, and it is about what not to press.",
      },
      {
        id: "N01-S14",
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
        id: "N01-S15",
        title: "When you are lost",
        instruction: "Press Exit several times.",
        detail:
          "However far into a menu you are, repeated Exit presses walk you back to the top screen. That is the move to reach for first, every time.",
        hardwareTargets: ["exitButton", "display"],
        visualMode: "display-focus",
        expectedDisplay: ["A64   1-1    120", "256:Synth Lead01"],
        syntheticDisplay: false,
        displayNote:
          "Roland's own example of the top screen. Your JD-Xi shows its own program, tempo and tone name.",
        whyItMatters:
          "Exit is how you back out of a menu, and pressing it several times is how you get all the way home. Two things it does not cover: SYSTEM saves what you changed in it as you leave, and repairing a sound you have edited has rules of its own that a later tutorial teaches. The JD-Xi has no general undo, so this tutorial does not promise you one.",
        checkpoint:
          "You are back at the top screen, and you know how to get here from anywhere.",
        recoveryHelp:
          "One thing Exit will not solve on its own: if the display reads Now Playing! or Now Recording!, the JD-Xi is refusing an operation until you stop. Press the ▶/■ button to stop playback or recording, then carry on.",
        nextHint:
          "You can now navigate the menus. Next, you will learn how the JD-Xi organizes programs and parts.",
      },
    ],
  },  N02: {
    id: "N02",
    level: "novice",
    order: 2,
    title: "Understand programs and parts",
    shortTitle: "Programs and parts",
    summary:
      "A program is the whole setup: four parts, their effects and their pattern, all at once. You will switch between programs and hear how much changes, then recall one instantly from a Favorite button.",
    estimatedMinutes: 10,
    prerequisites: ["N01"],
    learningGoals: [
      "Say what a program contains and what a part contains.",
      "Switch between programs and hear that everything changes together.",
      "Tell the Program buttons apart from the Tone buttons, and know why it matters.",
      "Recall a program instantly from a Favorite button.",
    ],
    // Source record: docs/tutorials/N02-SOURCE-NOTES.md
    // N02 is the practical Program lesson (PRODUCT-CURRICULUM-MASTER-PLAN.md
    // sec 9): what a Program is, that it holds four Parts plus pattern and
    // effect state, that Program Value changes all of it at once, and that
    // a hardware Favorite recalls one instantly.
    //
    // It selects Programs, so unlike N01 it IS discard-capable, and carries
    // the protect-your-work preflight at N02-S04 -- immediately before the
    // first Program change at N02-S05.
    //
    // Program Edit is deliberately ONE look-only step, not the lesson's
    // centre. Saving and Favorite REGISTRATION are not taught here; N09
    // owns both.
    steps: [
      {
        id: "N02-S01",
        title: "Which program you are on",
        instruction: "Press Exit several times, then read the upper line.",
        detail:
          "A letter and a number, together, name the program you are playing — the letter is the bank and the number is the program inside it.",
        hardwareTargets: ["exitButton", "display"],
        visualMode: "display-focus",
        expectedDisplay: ["A64   1-1    120", "256:Synth Lead01"],
        syntheticDisplay: false,
        displayNote:
          "Roland's own example of the top screen. Your JD-Xi shows its own program, tempo and tone name.",
        whyItMatters:
          "Everything in this tutorial hangs off that one label. When you save your own work later, you will be choosing one of these slots to put it in.",
        checkpoint:
          "You can read your JD-Xi's current bank letter and program number.",
        recoveryHelp:
          "Press Exit a few more times. Exit only ever moves back toward the top screen, so you cannot overshoot it.",
        nextHint: "Now what that label actually stands for.",
      },
      {
        id: "N02-S02",
        title: "A program holds four parts",
        instruction: "Find the four Part Select buttons.",
        detail:
          "Digital Synth 1, Digital Synth 2, Drums and Analog Synth. Every program has all four, always — along with the effects they share and the pattern they play.",
        hardwareTargets: ["partSelectGroup"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "This is why switching program changes so much at once. You are not swapping one sound; you are swapping all four parts, their effects and their pattern together.",
        checkpoint: "You can point to all four Part Select buttons.",
        recoveryHelp:
          "Look in the left half of the control panel, to the right of the display. The magnified view shows the four buttons in a column.",
        nextHint: "Now the layer below a part.",
      },
      {
        id: "N02-S03",
        title: "Each part holds one tone",
        instruction: "Press Digital Synth 1, then press Drums, watching the lower line.",
        detail:
          "The lower line shows the tone belonging to whichever part you have selected. Pressing these buttons only changes which part you are looking at and playing — it selects no new sound and throws nothing away. The keys play one part at a time, and this is how you choose which.",
        hardwareTargets: ["partSelectGroup", "display"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "A tone is one sound. A part holds one tone. A program holds four parts. Those three sentences are the whole structure, and almost every menu on this instrument sits at one of those three levels.",
        checkpoint:
          "The lower line of the display changes as you move between the two parts.",
        recoveryHelp:
          "If the lower line looks the same on both, this program may use similarly-named tones. Press Digital Synth 1 and Drums back and forth and watch closely — the Drums part names a drum kit rather than a synth sound.",
        nextHint: "Before you change program, one thing is worth checking.",
      },
      {
        id: "N02-S04",
        title: "Protect any work you want to keep",
        instruction:
          "Decide whether there is a sound or a pattern on this JD-Xi you have been working on and have not saved.",
        detail:
          "From the next step onward you will select different programs. On the JD-Xi, doing that throws away anything edited and not saved — a sound, an effect setting, a pattern, all of it at once. This tutorial cannot tell what state your instrument is in, so the decision is yours.",
        hardwareTargets: ["programValueButtons"],
        visualMode: "full",
        whyItMatters:
          "Selecting a program is the single most destructive ordinary action on this instrument, precisely because it replaces so much at once. Nothing warns you first, which is why this step exists.",
        checkpoint:
          "You have decided: either there is nothing you need to keep, or you are going to save it first.",
        recoveryHelp:
          "If you do have unsaved work you care about, the tutorial that teaches saving is N09 Save your work. Go there first and come back to N02 afterwards. If you are not sure, assume there is something worth keeping — you cannot get it back afterwards.",
        nextHint: "Now change the whole thing at once.",
      },
      {
        id: "N02-S05",
        title: "Change the whole program",
        instruction: "Press Value + once, then play a key.",
        detail:
          "This is the pair marked Value, with Program (Pattern) printed above it — not the Tone pair beside it. It selects a whole program: all four parts, the effects and the pattern together.",
        hardwareTargets: ["programValuePlusButton"],
        visualMode: "full-plus-inset",
        expectedSound:
          "A different sound, and possibly a completely different character.",
        whyItMatters:
          "Reaching for Value when you meant Tone is the most common way a beginner loses the sound they had, because it replaces everything at once rather than just the one part you were listening to.",
        checkpoint:
          "The program number on the upper line has changed, and the keys sound different.",
        recoveryHelp:
          "Press Value − to step back to the program number you were on. The stored program is unchanged — only anything you had edited and not saved is gone.",
        nextHint: "Now do it a few more times and listen to how much moves.",
      },
      {
        id: "N02-S06",
        title: "Compare several programs",
        instruction:
          "Step through four or five programs with Value +, playing a few keys on each and pressing Play/Stop to hear its pattern.",
        detail:
          "Try each of the Part Select buttons on one or two of them. You are listening for how much is different each time, not for a sound you like.",
        hardwareTargets: ["programValueButtons", "playStopButton"],
        visualMode: "full-plus-inset",
        expectedSound:
          "Four or five completely different setups — different sounds on every part, different effects, and in most cases a different pattern.",
        whyItMatters:
          "Reading that a program contains four parts and their pattern is not the same as hearing it. Stepping through a handful is what makes the word 'program' mean something concrete.",
        checkpoint:
          "You have heard several programs and can say what changed between them beyond just the sound the keys play.",
        recoveryHelp:
          "Stop the pattern with Play/Stop before stepping to the next program, so you are listening to one thing at a time. If a program plays no pattern, that program simply has none recorded — step on to the next.",
        nextHint: "Programs are grouped into banks.",
      },
      {
        id: "N02-S07",
        title: "Move between banks",
        instruction: "Hold down Shift and press Value +.",
        detail:
          "This switches banks rather than stepping one program at a time. Roland's own programs are in banks A to D, and the user banks — where your saved programs will go — are E to H.",
        hardwareTargets: ["shiftButton", "programValuePlusButton"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "Sixty-four programs to a bank means stepping one at a time is a slow way to travel. This is how you cover ground.",
        checkpoint: "The letter in front of the program number has changed.",
        recoveryHelp:
          "Hold Shift and press Value − to go back. If the letter did not change, make sure Shift is held down before you press Value.",
        nextHint: "One quick look at where a program's own settings live.",
      },
      {
        id: "N02-S08",
        title: "A look inside Program Edit",
        instruction: "Press Menu/Write, use Cursor to select Program Edit, and press Enter.",
        detail:
          "Look only — leave the Value buttons alone. These are the settings that belong to the whole program rather than to any one part, which is why the tempo you set in B09 lives in here.",
        hardwareTargets: ["menuWriteButton", "display"],
        visualMode: "display-focus",
        expectedDisplay: ["PROG: COMMON", "Tempo 120"],
        syntheticDisplay: false,
        displayNote:
          "Roland's illustrated Program Edit COMMON screen. Your JD-Xi shows its own program's tempo.",
        whyItMatters:
          "You do not need this screen yet, and later tutorials reach it when they need something specific from it. Knowing it exists is enough for now — and knowing that, unlike SYSTEM, it does not save itself as you leave.",
        checkpoint:
          "The upper line reads PROG: COMMON and the lower line shows a parameter with a value.",
        recoveryHelp:
          "If you cannot find Program Edit, it is the second item in the Menu, just after SYSTEM — press Cursor ► once from the top of the list. If you have gone somewhere else entirely, press Exit until you are back at the top screen and try again.",
        nextHint: "Come straight back out.",
      },
      {
        id: "N02-S09",
        title: "Leave without changing anything",
        instruction: "Press Exit until you are back at the top screen.",
        detail:
          "A few presses will do it. Nothing you did in there was written anywhere.",
        hardwareTargets: ["exitButton", "display"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "N01 taught the opposite case: SYSTEM saves itself automatically as you leave the screen. Program Edit does not. Knowing which screens write and which do not is most of what makes the menus safe to explore.",
        checkpoint: "The two-line top screen is back.",
        recoveryHelp:
          "Keep pressing Exit. If you did move a Value button in there, the change is not written to storage, so the stored program is untouched — but it is part of what is loaded now, and it stays that way until the program is reloaded. Selecting another program clears it, at the cost of discarding every other unsaved change on this program too.",
        nextHint: "Last thing: the fastest way back to a program you like.",
      },
      {
        id: "N02-S10",
        title: "Recall a program from a Favorite button",
        instruction:
          "Press Favorite so it lights, then press one of the buttons numbered 01 to 16.",
        detail:
          "With Favorite lit, the numbered buttons recall programs that have been registered to them. If the one you press has nothing on it, the display says “Not Registered!” — try another. Press Favorite again when you have finished, to give the numbered buttons their normal job back.",
        hardwareTargets: ["favoriteButton", "stepButtons"],
        visualMode: "full-plus-inset",
        expectedSound:
          "Whatever program was registered to that button, loaded instantly — or nothing at all, if the slot is empty.",
        whyItMatters:
          "This is program selection without the stepping. Once you have saved programs of your own, a Favorite button is how you get to one in a single press while you are playing.",
        checkpoint:
          "Either a program loaded when you pressed a numbered button, or the display told you the slot was not registered.",
        recoveryHelp:
          "Recalling a favorite selects a program, so it discards unsaved work exactly as Value does — you decided about that at N02-S04. If the numbered buttons still seem to be selecting sounds afterwards, Favorite is still lit; press it once more. Putting your own programs onto these buttons is part of N09.",
        nextHint:
          "You know how the JD-Xi is organized. Next, meet the part of it that plays without you.",
      },
    ],
  },
  N03: {
    id: "N03",
    level: "novice",
    order: 3,
    title: "Sequencer basics",
    shortTitle: "Sequencer basics",
    summary:
      "Meet the sixteen numbered buttons and put a single note into a pattern with them — then take it out again. One note, done properly, is all this tutorial is for.",
    estimatedMinutes: 10,
    prerequisites: ["N02"],
    learningGoals: [
      "Say what a step is, and why the row shows one measure at a time.",
      "Enter TR-REC and read which steps are lit.",
      "Add one step and remove it again, cleanly.",
      "Name the two ways of entering notes you will use later.",
    ],
    // Source record: docs/tutorials/N03-SOURCE-NOTES.md
    // N03 establishes the two note-entry methods operationally without
    // building anything (PRODUCT-CURRICULUM-MASTER-PLAN.md sec 9): the
    // 01-16 row, TR-REC, lit/unlit steps, add one, erase one. N04 makes the
    // first real beat.
    //
    // It writes into the loaded pattern, so it carries the protect-your-work
    // preflight at N03-S04, before the first step is lit at N03-S07.
    //
    // Deliberately absent: Pattern Length editing (I08 extends patterns),
    // Scale Setting (excluded from v1 entirely), Realtime Recording
    // (excluded from v1), and any complete beat.
    //
    // The unlit-is-not-erased distinction (OM p.10) is load-bearing and is
    // taught explicitly at N03-S09 rather than glossed.
    steps: [
      {
        id: "N03-S01",
        title: "Watch a pattern run",
        instruction: "Press Play/Stop, and watch the middle of the upper line.",
        detail:
          "Two numbers separated by a dash. The first is the measure, the second is the beat.",
        hardwareTargets: ["playStopButton", "display"],
        visualMode: "full-plus-inset",
        expectedSound: "If this program has a pattern recorded, you hear it.",
        checkpoint:
          "The two numbers are counting, and the second one cycles faster than the first.",
        recoveryHelp:
          "If nothing happens at all, this program may have no pattern recorded. Press Play/Stop again to stop, then use Value + to step to another program — but note that doing so discards anything unsaved on this one. B08 covers finding a program with a pattern in it.",
        nextHint: "Now the row of buttons that pattern is made of.",
      },
      {
        id: "N03-S02",
        title: "Sixteen steps",
        instruction: "Press Play/Stop to stop, then look at the buttons numbered 01 to 16.",
        detail:
          "Each of those buttons is one step — one slice of time. A pattern is made by deciding what happens on each step.",
        hardwareTargets: ["stepButtons"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "This is what makes a drum machine approachable: you are not playing in time, you are deciding in advance what lands where.",
        checkpoint:
          "The pattern is stopped and you can point to all sixteen numbered buttons.",
        recoveryHelp:
          "The row sits to the right of the panel, below the display and above the keys. It is the row with Favorite at its left-hand end.",
        nextHint: "Sixteen buttons, but a pattern can be longer than that.",
      },
      {
        id: "N03-S03",
        title: "The row shows one measure",
        instruction: "Read this before you change anything.",
        detail:
          "A JD-Xi pattern can be up to four measures long, and the sixteen buttons show one measure at a time. On a longer pattern the row is a window onto part of it rather than the whole thing.",
        hardwareTargets: ["stepButtons"],
        visualMode: "full",
        whyItMatters:
          "It explains something that otherwise looks broken: on a four-measure pattern, most of what you can hear is not on the buttons in front of you at any moment. I08 is where you work on longer patterns and need to move between the measures.",
        checkpoint: "You know the buttons show one measure at a time.",
        recoveryHelp:
          "Nothing to do here — this is the one step in the tutorial that only asks you to read. If you would rather see it than read it, come back after N04, when there is a beat on the buttons to look at.",
        nextHint: "Before you put anything in, one thing is worth checking.",
      },
      {
        id: "N03-S04",
        title: "Protect any work you want to keep",
        instruction:
          "Decide whether the pattern loaded right now is one you have been working on and have not saved.",
        detail:
          "In a moment you will add a note to this pattern and then erase it again. Both change the pattern that is loaded. If there is a pattern or a sound here you have been building and have not saved, stop and save it first.",
        hardwareTargets: ["stepButtons", "eraseButton"],
        visualMode: "full",
        whyItMatters:
          "Roland is explicit that a pattern you create disappears if you select a different program or switch the power off. This tutorial cannot see what state your JD-Xi is in, so it asks rather than assumes.",
        checkpoint:
          "You have decided: either there is nothing here you need to keep, or you are going to save it first.",
        recoveryHelp:
          "N09 Save your work is the tutorial that teaches saving. Go there first and come back afterwards. If you would rather not touch this program at all, step to another one with Value + before you carry on — that discards anything unsaved on this program, which is the decision you are making here.",
        nextHint: "Now choose which part you are going to work on.",
      },
      {
        id: "N03-S05",
        title: "Choose the part you will record",
        instruction: "Press a Part Select button — Digital Synth 1 is a good choice.",
        detail:
          "The sequencer records into whichever part is selected. Choosing it first is the first move of every recording procedure on this instrument.",
        hardwareTargets: ["partSelectGroup"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "Every note you enter goes into the selected part and no other. Getting into the habit of choosing it deliberately saves a lot of confusion later, when four parts have patterns of their own.",
        checkpoint:
          "One Part Select button is selected, and pressing a key plays that part's sound.",
        recoveryHelp:
          "If you are not sure which part is selected, press the one you want again — the last button you press wins.",
        nextHint: "Now switch the numbered buttons into recording mode.",
      },
      {
        id: "N03-S06",
        title: "Read the lit and unlit steps",
        instruction:
          "Play and hold a key, and look at the row of numbered buttons.",
        detail:
          "With a part selected, the numbered buttons show you the steps on which the note you are holding will sound: lit means it sounds there, unlit means it does not. This is TR-REC, and it is available whether the pattern is playing or stopped.",
        hardwareTargets: ["stepButtons", "keys"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "The row stops being sixteen anonymous buttons the moment you realise it is a picture of when one note happens. Reading it is most of the skill; pressing the buttons is the easy part.",
        checkpoint:
          "You can see which of the sixteen buttons are lit and which are dark.",
        recoveryHelp:
          "If none are lit, this part has nothing recorded on the note you are holding — which is fine, and makes the next step easier to see. If the Favorite button is lit, the row is in favorite mode instead; press Favorite once to leave it.",
        nextHint: "Now put a note in.",
      },
      {
        id: "N03-S07",
        title: "Add one step",
        instruction:
          "Hold the key you want, and press one of the unlit numbered buttons so it lights.",
        detail:
          "That is a note entered. On the Drums part you would press a key first to choose which drum you are entering; on a synth part the key you hold is the note.",
        hardwareTargets: ["stepButtons"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "This is the whole of TR-REC. Everything N04 and N05 do is this one action, repeated on different steps and different parts.",
        checkpoint: "A button that was dark is now lit.",
        recoveryHelp:
          "If the button will not light, check that Favorite is not lit — that puts the row into a different mode. If the pattern is running and you cannot tell what changed, press Play/Stop and try again while it is stopped.",
        nextHint: "Now hear it.",
      },
      {
        id: "N03-S08",
        title: "Hear what you did",
        instruction: "Press Play/Stop and listen.",
        detail:
          "Your note now sounds once each time the pattern comes round to that step.",
        hardwareTargets: ["playStopButton"],
        visualMode: "full-plus-inset",
        expectedSound:
          "The pattern as it was, plus your single note landing in the same place each time round.",
        checkpoint:
          "You can hear your note repeating in time with everything else.",
        recoveryHelp:
          "If you cannot pick your note out, mute the other parts for a moment — hold Shift and press their Part Select buttons, as B08 showed. If you hear nothing new at all, the step you lit may be on a part you are not listening to; check which part is selected.",
        nextHint: "Now take it out again, properly.",
      },
      {
        id: "N03-S09",
        title: "Erase that step",
        instruction:
          "Press Play/Stop to stop, then hold down Erase and press the numbered button you lit.",
        detail:
          "This is worth doing exactly this way. Pressing the button on its own turns it dark, which stops the note sounding — but Roland is explicit that this only mutes it and does not delete it, and turning the button back on brings the note back. Holding Erase and pressing the step is what actually removes it.",
        hardwareTargets: ["eraseButton", "stepButtons"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "The difference matters later. If you try to enter a new note on a step that still holds an old one, TR-REC will not let you until the old one is genuinely erased — so a step that looks empty but is only muted becomes a problem you cannot see.",
        checkpoint: "The button is dark, and the note is gone rather than muted.",
        recoveryHelp:
          "The pattern must be stopped for this. If nothing happened, check that you held Erase down first and kept it held while pressing the numbered button. Erase is in the PATTERN SEQUENCER section, with Rest printed under it.",
        nextHint: "One last thing: the other way notes get in.",
      },
      {
        id: "N03-S10",
        title: "Two ways in",
        instruction: "Find the Step Rec button in the PATTERN SEQUENCER section.",
        detail:
          "Look, do not press. You have just used TR-REC: pick a note, then light the steps where it should happen. Step Recording works the other way round — it holds a position in the pattern and advances one step each time you play a note. Both build the same kind of pattern.",
        hardwareTargets: ["patternSequencerSection"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "TR-REC is easier when you know the rhythm you want, which is why N04 and N05 use it. Step Recording is easier when you want to enter a run of notes one after another, and N05 shows it briefly.",
        checkpoint:
          "You can point to both the numbered row and the Step Rec button, and say what each method is for.",
        recoveryHelp:
          "If you did press Step Rec, the [01] button will be blinking and the display will show a Step Rec screen. Press Step Rec again to stop recording, and nothing will have been added as long as you played no key.",
        nextHint:
          "You can put a note in and take it out. Next, use that to build a real drum beat.",
      },
    ],
  },
  N04: {
    id: "N04",
    level: "novice",
    order: 4,
    title: "Make a simple drum beat",
    shortTitle: "Drum beat",
    summary:
      "Build a beat one step at a time. Choose a drum sound, light the steps where you want it, and listen. This is the first thing you will make yourself.",
    estimatedMinutes: 14,
    prerequisites: ["N03"],
    learningGoals: [
      "Put a drum sound on the steps you choose.",
      "Build up a beat from more than one drum sound.",
      "Tell the difference between silencing a step and erasing it.",
      "Know that your beat is not saved until you save the program.",
    ],
    // Source record: docs/tutorials/N04-SOURCE-NOTES.md
    // First authoring tutorial. Uses TR-REC only, which is the one recording
    // method that does NOT automatically overwrite existing notes (OM p.11,
    // PG p.3) -- so an accidental press adds rather than destroys, and the
    // documented erase is an explicit, separate gesture. The metronome is
    // deliberately omitted: it lives in SYSTEM, which saves itself on exit,
    // and TR-REC needs no click because nothing is played in time.
    steps: [
      {
        id: "N04-S01",
        title: "Protect any work you want to keep",
        instruction: "Decide whether this program holds work you have not saved.",
        detail:
          "You are about to record into this program's pattern. If there is a pattern or a sound here you have been building and have not saved, stop and save it first — or step to a program you do not mind changing.",
        hardwareTargets: ["programValueButtons", "stepButtons"],
        visualMode: "full",
        whyItMatters:
          "Recording changes the pattern in the loaded program. Nothing is written to storage until you save, but the loaded version is what you are working on, and there is no undo.",
        checkpoint:
          "You have decided: either there is nothing here to keep, or you have saved it, or you have moved to a program you are happy to change.",
        recoveryHelp:
          "N09 Save your work teaches saving. To move to a different program, press Value + — remembering that doing so discards anything unsaved on the one you are leaving.",
        nextHint: "Now choose the part that makes drum sounds.",
      },
      {
        id: "N04-S02",
        title: "Select the Drums part",
        instruction: "Press Drums.",
        detail:
          "Recording always goes to whichever part is selected, so this is the step that decides you are making a drum pattern.",
        hardwareTargets: ["drumsButton"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "Get this wrong and everything else still works — you will simply have recorded your beat onto a synth part instead, and it will sound like notes rather than drums.",
        checkpoint: "Drums is selected, and pressing keys gives you drum sounds.",
        recoveryHelp:
          "If the keys still play a synth sound, press Drums again. If some keys are silent, play lower down the keyboard — the Drums part has no instruments assigned high up.",
        nextHint: "Now pick a kit you like the sound of.",
      },
      {
        id: "N04-S03",
        title: "Choose a drum kit",
        instruction:
          "Press Tone + a few times, playing a low key after each press, until you find a kit you like.",
        detail:
          "On the Drums part the Tone buttons step through whole kits rather than single sounds. Every kit has a bass drum, a snare and hi-hats — they just sound different from kit to kit.",
        hardwareTargets: ["toneButtons"],
        visualMode: "full-plus-inset",
        expectedSound:
          "The same key giving you a different bass drum each time — deeper, tighter, more electronic, depending on the kit.",
        whyItMatters:
          "The kit decides what your beat will sound like before you have placed a single hit. Choosing one you actually like now is much easier than trying to rescue a beat you have already built on a kit you do not.",
        checkpoint:
          "You have stepped through several kits and settled on one whose bass drum you like.",
        recoveryHelp:
          "Use Tone − to step back if you have gone past one you liked. If the sounds are not changing, check that Drums is still the selected part, and that you are pressing the pair marked Tone rather than the pair marked Value.",
        nextHint: "Now pick which drum you are placing.",
      },
      {
        id: "N04-S04",
        title: "Choose a drum sound",
        instruction: "Press a key low on the keyboard, and listen for a bass drum.",
        detail:
          "On the Drums part every key is a different instrument, and their names are printed above the keys on your JD-Xi. The key you press last is the instrument you are about to record.",
        hardwareTargets: ["drumsButton", "keys"],
        visualMode: "full",
        expectedSound: "A single drum hit — a low thud if you have found a bass drum.",
        whyItMatters:
          "This is the step people miss. The numbered buttons do not record a generic drum: they record the one instrument whose key you pressed most recently.",
        checkpoint:
          "You have pressed a key, heard a drum sound, and the numbered buttons may have changed to show that instrument's steps.",
        recoveryHelp:
          "Try neighbouring keys until you find a sound you want. Roland prints the instrument names above the keys — the bass drum is marked BD1. Nothing is recorded by pressing keys here; you are only choosing.",
        nextHint: "Now decide where it happens.",
      },
      {
        id: "N04-S05",
        title: "Light your first steps",
        instruction: "Press buttons 01, 05, 09 and 13.",
        detail:
          "Each one you press lights up, meaning that instrument will sound at that step. Pressing a lit one again turns it off.",
        hardwareTargets: ["stepButton01", "stepButton05", "stepButton09", "stepButton13"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "Those four are evenly spaced across the sixteen, so they land on the four beats of a measure. That steady pulse is the foundation of an enormous amount of music.",
        checkpoint: "Buttons 01, 05, 09 and 13 are lit.",
        recoveryHelp:
          "If a button will not light, check the Drums part is still selected. If you lit the wrong one, press it again to turn it off — with this recording method that is all it takes.",
        nextHint: "Now hear it.",
      },
      {
        id: "N04-S06",
        title: "Listen to your beat",
        instruction: "Press Play/Stop.",
        hardwareTargets: ["playStopButton"],
        visualMode: "full-plus-inset",
        expectedSound:
          "A steady, even pulse — four hits, over and over. Whatever else was already in this pattern plays along with it.",
        whyItMatters:
          "You have just made something. Everything from here is adding to it.",
        checkpoint: "You can hear your four hits repeating in time.",
        recoveryHelp:
          "If you hear nothing new, check that Drums is selected and that the four buttons are lit. If you hear a lot more than you expected, this program already had a pattern in it — yours is playing on top.",
        nextHint: "Leave it running and add a second sound.",
      },
      {
        id: "N04-S07",
        title: "Choose a second drum sound",
        instruction: "With the pattern still playing, press a different key.",
        detail:
          "Try a key a little higher up for a snare. Watch the numbered buttons as you do it: they change to show the steps of the new instrument, not the one you just finished.",
        hardwareTargets: ["keys", "stepButtons"],
        visualMode: "full",
        expectedSound: "A different drum — brighter and sharper if you have found a snare.",
        whyItMatters:
          "This is the single most confusing moment in TR-REC, and it is worth naming: the sixteen buttons are not the pattern. They are a view of one instrument's steps within it. Change the instrument and the whole row changes with it.",
        checkpoint:
          "The lit buttons changed when you pressed the new key, and your first four hits are still playing.",
        recoveryHelp:
          "If the row went dark, that is correct — this instrument has no steps yet. Your bass drum is untouched; press its key again to see its steps come back.",
        nextHint: "Now place the second sound.",
      },
      {
        id: "N04-S08",
        title: "Add the second sound",
        instruction: "Press buttons 05 and 13.",
        detail: "You can do this while the pattern plays and hear each one arrive.",
        hardwareTargets: ["stepButton05", "stepButton13"],
        visualMode: "full-plus-inset",
        expectedSound:
          "A backbeat: the new sound lands between the pulses, on the second and fourth beats.",
        whyItMatters:
          "Two instruments on different steps is already a beat rather than a metronome. Almost every drum pattern you know is this, with more on top.",
        checkpoint: "You can hear two different drum sounds in a repeating pattern.",
        recoveryHelp:
          "If it sounds wrong rather than different, press 05 and 13 again to remove them, and try other steps. There is no correct answer here — move things until you like it.",
        nextHint: "One more drum, and it goes everywhere.",
      },
      {
        id: "N04-S09",
        title: "Add a closed hi-hat",
        instruction:
          "Press a key higher up until you find a short, tight metallic sound, then light buttons 03, 07, 11 and 15.",
        detail:
          "That short metallic sound is a closed hi-hat. Putting it between everything else is what turns two drums into a beat that moves.",
        hardwareTargets: ["keys", "stepButtons"],
        visualMode: "full-plus-inset",
        expectedSound:
          "A light tick running between your bass drum and snare, filling the gaps and pushing the pattern along.",
        whyItMatters:
          "Bass drum, snare and closed hi-hat are the three sounds nearly every drum pattern is built from. With those three placed you have made a real beat, not an exercise.",
        checkpoint:
          "Three different drum sounds are playing in one repeating pattern.",
        recoveryHelp:
          "Hi-hats usually sit above the snare on the keyboard, and there are often two of them — a short closed one and a longer open one. If yours rings on rather than stopping, try the next key along. The names are printed above the keys on your JD-Xi.",
        nextHint: "Now change how the whole kit sounds.",
      },
      {
        id: "N04-S10",
        title: "Change the sound of the kit",
        instruction: "With the pattern playing, turn the Cutoff knob slowly to the left and back.",
        detail:
          "Cutoff works on the Drums part just as it did on a synth in B06. It adjusts the kit loaded into this part, so the whole beat changes together.",
        hardwareTargets: ["cutoffKnob"],
        visualMode: "full-plus-inset",
        expectedSound:
          "The whole kit going duller and more muffled as you turn left, and opening back up as you return.",
        whyItMatters:
          "A drum kit is not fixed. The same pattern on the same kit can sound sharp and modern or soft and distant, and one knob gets you a long way toward either.",
        checkpoint:
          "You can hear the whole beat get darker and brighter as you turn the knob.",
        recoveryHelp:
          "Turn Cutoff back toward the right to undo it by ear. If nothing changes, check that Drums is still the selected part — the knob works on whichever part is selected, so it may be editing a synth part instead. There is no undo for this, but nothing is saved until you save the program.",
        nextHint: "Now the difference between quiet and gone.",
      },
      {
        id: "N04-S11",
        title: "Silencing a step is not erasing it",
        instruction: "Press one of your lit buttons to turn it dark, then press it again.",
        detail:
          "Turning a lit button dark stops that note sounding, but the note is still there — turning the button back on brings it back exactly as it was.",
        hardwareTargets: ["stepButtons"],
        visualMode: "full-plus-inset",
        expectedSound: "A hit disappears from the pattern, then returns.",
        whyItMatters:
          "It means you can try a beat with and without something and change your mind freely. This is the safest experiment on the whole instrument.",
        checkpoint: "You have removed a hit and brought it back without losing anything.",
        recoveryHelp:
          "If the hit did not come back, make sure you pressed the same button, and that the same instrument is still selected — remember the row follows the instrument.",
        nextHint: "There is a separate gesture for actually erasing.",
      },
      {
        id: "N04-S12",
        title: "Actually erasing a step",
        instruction:
          "Press Play/Stop to stop, then hold down Erase and press one of your lit buttons.",
        detail:
          "This completely erases that step's notes, rather than silencing them. Roland's procedure requires the pattern to be stopped.",
        hardwareTargets: ["eraseButton", "stepButtons"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "You need this one because of how TR-REC works: it will not overwrite a step that already has a note on it. To put something different on that step, the old note has to go first.",
        checkpoint: "The step you chose is dark, and its note is gone rather than muted.",
        recoveryHelp:
          "This one cannot be undone — there is no undo on the JD-Xi. If you erased something you wanted, press the button to light it again and re-record it, which takes a moment because you built it yourself. Make sure the pattern is stopped before you use this gesture.",
        nextHint: "Last step, and it is the one that matters most.",
      },
      {
        id: "N04-S13",
        title: "Your beat is not saved yet",
        instruction: "Do not switch the JD-Xi off yet.",
        detail:
          "A pattern lives in the loaded program. Selecting a different program, or switching the power off, loses it. There is no separate save for patterns — you save a pattern by saving the program it belongs to.",
        hardwareTargets: ["display"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "This catches people out precisely because the beat feels like it is in the buttons in front of them. It is not: it is in the loaded program, and the loaded program is temporary until you write it somewhere.",
        checkpoint:
          "You have a beat you made, and you know it will not survive switching off.",
        recoveryHelp:
          "If you want to keep it, go to N09 Save your work now, with the beat still loaded, and do not change programs on the way. If you do not mind losing it, there is nothing to do — nothing stored on the instrument has been changed.",
        nextHint:
          "You can make a beat. Next, put a bass line under it.",
      },
    ],
  },
  N05: {
    id: "N05",
    level: "novice",
    order: 5,
    title: "Make a simple bass line",
    shortTitle: "Bass line",
    summary:
      "Put a bass line under your beat: pick a low sound, place one note on the steps you want, then bring in a second note nearby so the line moves.",
    estimatedMinutes: 12,
    prerequisites: ["N04"],
    learningGoals: [
      "Record a note onto chosen steps of a pitched part.",
      "Use a second, nearby key so the line is not all one note.",
      "Remove a note you did not want.",
      "Recognise step recording as a second way in, and know which method overwrites.",
    ],
    // Source record: docs/tutorials/N05-SOURCE-NOTES.md
    // TR-REC is the main method here (PRODUCT-CURRICULUM-MASTER-PLAN.md
    // sec 9); step recording appears only as a brief alternate.
    //
    // The difference between them is a safety fact, not a stylistic one:
    // TR-REC will not overwrite a step that already holds a note, while step
    // recording deletes and replaces automatically (OM p.11).
    //
    // Realtime Recording is excluded from v1 and is not named anywhere, not
    // even as later guided content. Rests, ties, Velocity and Gate Time are
    // likewise out: they are step-recording detail the master plan trims.
    steps: [
      {
        id: "N05-S01",
        title: "Protect any work you want to keep",
        instruction: "Decide whether this program holds work you have not saved.",
        detail:
          "This tutorial records into the pattern and may have you choose a different sound. Both replace what is loaded. If you built a beat in N04 that you want to keep, save it first — or keep working on this same program and save everything together at the end.",
        hardwareTargets: ["programValueButtons", "toneButtons"],
        visualMode: "full",
        checkpoint:
          "You have decided: either there is nothing to lose, or you have saved it, or you are deliberately building on the same program.",
        recoveryHelp:
          "N09 Save your work teaches saving. If you made a beat in N04 and want a bass line under it, stay on this same program — the two parts live in the same pattern, and one save keeps both.",
        nextHint: "Now choose a part that plays notes rather than drums.",
      },
      {
        id: "N05-S02",
        title: "Choose a pitched part",
        instruction: "Press Analog Synth.",
        detail:
          "Any of the three non-drum parts will do. The Analog Synth is a good choice for a bass line, and using it leaves your Drums part untouched.",
        hardwareTargets: ["analogSynthButton"],
        visualMode: "full-plus-inset",
        expectedSound: "A pitched synth sound rather than a drum.",
        whyItMatters:
          "Each part keeps its own pattern. Recording on the Analog Synth cannot disturb the beat you made on the Drums part.",
        checkpoint: "Pressing keys gives you a pitched sound that changes as you move along the keyboard.",
        recoveryHelp:
          "If it is silent, check Master Volume, and check the Category dial is not on Vocoder/AutoPitch — Roland notes the Analog Synth part is unavailable while one of those is selected.",
        nextHint: "A bass line wants a bass sound.",
      },
      {
        id: "N05-S03",
        title: "Find a sound low enough",
        instruction:
          "Use Tone − and Tone + until you find something that sounds good low down.",
        detail:
          "Play a key near the left end after each change. You are listening for something solid rather than thin.",
        hardwareTargets: ["toneButtons"],
        visualMode: "full-plus-inset",
        expectedSound: "A low, weighty sound when you play near the left of the keyboard.",
        checkpoint: "You have a sound you would be happy to hear underneath a beat.",
        recoveryHelp:
          "If everything sounds thin, press Octave Down once and try again. Roland also notes that the analog square wave and Sub OSC may not sound in the upper range of the keyboard, so stay low.",
        nextHint: "Now put it into the pattern, the way you did the drums.",
      },
      {
        id: "N05-S04",
        title: "Play the note you want to record",
        instruction: "Press and hold the key you want, then let go.",
        detail:
          "On a pitched part the numbered buttons record whichever note you played last — exactly as they recorded whichever drum you played last.",
        hardwareTargets: ["keys"],
        visualMode: "full",
        expectedSound: "The note you are about to record.",
        whyItMatters:
          "The method is identical to the drum one. The only difference is that the thing you chose is a pitch rather than an instrument.",
        checkpoint: "You have chosen and heard the note you want in the pattern.",
        recoveryHelp:
          "Playing keys here records nothing on its own — you are only choosing. Try several until one sounds right against whatever else is in the pattern.",
        nextHint: "Now light the steps.",
      },
      {
        id: "N05-S05",
        title: "Light the steps for that note",
        instruction: "Press buttons 01 and 09.",
        detail:
          "Two hits in a measure is enough for a bass line to work. You can add more later.",
        hardwareTargets: ["stepButton01", "stepButton09"],
        visualMode: "full-plus-inset",
        checkpoint: "Buttons 01 and 09 are lit.",
        recoveryHelp:
          "If a step will not light, it may already hold a note — this method will not record over an existing one. Stop the pattern, hold Erase and press that step to clear it first.",
        nextHint: "Hear it against everything else.",
      },
      {
        id: "N05-S06",
        title: "Listen to it in place",
        instruction: "Press Play/Stop.",
        hardwareTargets: ["playStopButton"],
        visualMode: "full-plus-inset",
        expectedSound:
          "Your note landing twice a measure, underneath whatever else the pattern holds.",
        checkpoint: "You can hear the bass note in time with the rest of the pattern.",
        recoveryHelp:
          "If you cannot pick it out, hold Shift and press Drums to mute the drums for a moment — the same combination brings them back.",
        nextHint:
          "That is one way in. There is a second, and it suits melodies better.",
      },
      {
        id: "N05-S07",
        title: "Bring in a second note",
        instruction:
          "Play a key a little way from your first one, then light two steps that are still dark — try 05 and 13.",
        detail:
          "Pick a key near the one you used, not at the other end of the keyboard. Use steps that are dark: TR-REC will not record over a step that already holds a note.",
        hardwareTargets: ["keys", "stepButtons"],
        visualMode: "full-plus-inset",
        expectedSound:
          "A line that moves between two notes instead of repeating the same one.",
        whyItMatters:
          "One note repeating is a pulse. Two notes is a bass line. You do not need to know what either note is called — you only need to like how they sound one after the other.",
        checkpoint:
          "Four steps are lit in total, and you can hear the line move between two different notes.",
        recoveryHelp:
          "If the new key sounds wrong against the beat, erase those two steps and try a different one — hold Erase and press the step, with the pattern stopped. Keys close together usually sit together more easily than keys far apart.",
        nextHint: "Now take one back out.",
      },
      {
        id: "N05-S08",
        title: "Remove a note you did not want",
        instruction:
          "Press Play/Stop to stop, then hold down Erase and press one of your lit steps.",
        detail:
          "Same gesture as the drums, and for the same reason: this erases the note rather than just silencing it, so that step is genuinely free again.",
        hardwareTargets: ["eraseButton", "stepButtons"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "Getting a line right is mostly taking things out. A bass line with too many notes in it is the commonest way a first attempt sounds cluttered.",
        checkpoint: "The step is dark, and the note is gone rather than muted.",
        recoveryHelp:
          "The pattern has to be stopped for this. If nothing happened, check that Erase was held down before and during the press. If you erased one you wanted, play the key again and light that step once more — it is free now.",
        nextHint: "There is a second way to get notes in.",
      },
      {
        id: "N05-S09",
        title: "The other way in: step recording",
        instruction:
          "Press Step Rec, play three or four keys one after another, then press Step Rec again to stop.",
        detail:
          "The 01 button blinks to show which step you are on. Each key you play is recorded there, and the blink moves along by itself. You are not playing in time — take as long as you like between notes.",
        hardwareTargets: ["stepRecButton", "display"],
        visualMode: "display-focus",
        expectedDisplay: ["Step Rec", "Velocity:Real"],
        syntheticDisplay: false,
        displayNote:
          "Roland's illustrated step-recording screen. Your JD-Xi shows its own current setting on the lower line.",
        expectedSound: "Each note as you enter it, one at a time.",
        whyItMatters:
          "TR-REC is easier when you already know the rhythm you want. Step recording is easier when you know the run of notes and not the timing. Neither is better; they suit different moments.",
        checkpoint:
          "The blinking button moved along as you played, and pressing Step Rec again returned the JD-Xi to normal.",
        recoveryHelp:
          "If you are stuck in the recording screen, press Step Rec once to leave it. If you entered notes you did not want, stop the pattern and erase those steps with Erase — the blinking button told you which ones you were writing to.",
        nextHint: "One difference between the two methods matters.",
      },
      {
        id: "N05-S10",
        title: "Which method overwrites",
        instruction: "Press Play/Stop and listen to what you have.",
        detail:
          "The two methods treat an occupied step differently, and Roland is explicit about it. Lighting steps by hand will not record over a step that already holds a note — you have to erase it first. Step recording replaces what was there automatically.",
        hardwareTargets: ["stepRecButton", "stepButtons"],
        visualMode: "full-plus-inset",
        expectedSound: "Your bass line, with whatever else the pattern holds.",
        whyItMatters:
          "This is why a step can seem to ignore you. It is not a fault: TR-REC is refusing to write over something, and the fix is to erase that step first.",
        checkpoint:
          "You can say which of the two methods will overwrite an existing note.",
        recoveryHelp:
          "If a step will not take a new note however hard you press, that step still holds one. Stop the pattern, hold Erase, press that step, and try again.",
        nextHint: "Last thing, and it is the same warning as last time.",
      },
      {
        id: "N05-S11",
        title: "Still not saved",
        instruction: "Leave the JD-Xi on if you want to keep this.",
        detail:
          "Your beat and your bass line are both in the same pattern, in the same loaded program. One save keeps both. Switching off, or changing program, loses both.",
        hardwareTargets: ["display"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "Two tutorials of work now live in one place that forgets. N09 is the tutorial that fixes that, and it is four tutorials away — so if this is something you want to keep, it is worth going there next rather than in order.",
        checkpoint:
          "You have a beat and a line, and you know neither is stored yet.",
        recoveryHelp:
          "Nothing here to recover from — this step asks you to do nothing. If you want to keep what you have made, go to N09 Save your work now and come back afterwards.",
        nextHint:
          "You can put drums and a line into a pattern. Next, get more parts playing together.",
      },
    ],
  },
  N06: {
    id: "N06",
    level: "novice",
    order: 6,
    title: "Combine parts in a pattern",
    shortTitle: "Combine parts",
    summary:
      "The keys play one part at a time, but a pattern can play all four at once. Get three parts going together, then use mute to decide what the loop actually needs.",
    estimatedMinutes: 11,
    prerequisites: ["N05"],
    learningGoals: [
      "Get three parts playing together in one pattern.",
      "Hear what each part is contributing, on its own.",
      "Use muting to decide what a loop needs and what it does not.",
      "Finish with a simple loop you made.",
    ],
    // Source record: docs/tutorials/N06-SOURCE-NOTES.md
    // N06 is the first multi-Part groove (PRODUCT-CURRICULUM-MASTER-PLAN.md
    // sec 9): minimum three parts with pattern content, a fourth optional,
    // and Part Mute used as an arranging tool rather than just a listening
    // one.
    //
    // It does NOT assume N04/N05 state survives. Prerequisites are advisory,
    // so N06-S03 has the learner establish a drum-and-bass foundation from
    // whatever is in front of them, and says how to do it quickly.
    //
    // Level, Pan and Program Edit are deliberately NOT the lesson. Balancing
    // parts is I07's, where four parts are assembled on purpose.
    steps: [
      {
        id: "N06-S01",
        title: "The constraint, and the way round it",
        instruction: "Press two Part Select buttons in turn and listen.",
        detail:
          "The keys play whichever part you selected last, and never two at once. That is a real limit of the instrument. The pattern sequencer is how several parts are heard together.",
        hardwareTargets: ["partSelectGroup"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "Roland's own answer to the one-part limit is to record parts into a pattern, which is exactly what this tutorial does. Everything here follows from that.",
        checkpoint: "You can hear that the keys play one part at a time.",
        recoveryHelp:
          "If you are not sure which part is selected, press the one you want again — the last button you press wins.",
        nextHint: "Before you record anything, one thing is worth checking.",
      },
      {
        id: "N06-S02",
        title: "Protect any work you want to keep",
        instruction: "Decide whether this program holds work you have not saved.",
        detail:
          "This tutorial records into the pattern of whatever program is loaded. If there is a pattern or a sound here you want, save it first — or step to a program you do not mind changing.",
        hardwareTargets: ["programValueButtons", "stepButtons"],
        visualMode: "full",
        whyItMatters:
          "A pattern lives in its program and disappears when you select another one. That is true of your work and of anything already here, so the decision is worth making before you start rather than after.",
        checkpoint:
          "You have decided: either there is nothing to keep, or you have saved it, or you are deliberately building on this program.",
        recoveryHelp:
          "N09 Save your work teaches saving. If you would rather start somewhere disposable, press Value + to move to another program — that discards anything unsaved here, which is the choice you are making.",
        nextHint: "Now get a foundation going, however you like.",
      },
      {
        id: "N06-S03",
        title: "Get drums and a bass line going",
        instruction:
          "Put a few drum hits on the Drums part and a couple of low notes on a synth part, the way N04 and N05 showed.",
        detail:
          "If the beat you made in N04 and N05 is still loaded, use it — nothing here needs you to start again. If it is not, this takes a minute: select Drums, play a key, light a few steps; then select Analog Synth, play a low key, light a couple more.",
        hardwareTargets: ["drumsButton", "stepButtons"],
        visualMode: "full-plus-inset",
        expectedSound: "A simple beat with a low note or two underneath it.",
        whyItMatters:
          "This tutorial is about what happens when parts play together, so it needs two of them before it can start. Being able to throw a foundation down in a minute is a real skill in itself — you will do it every time you start something new.",
        checkpoint: "Two parts have something in the pattern, and you can hear both.",
        recoveryHelp:
          "Nothing here has to be good. Four bass-drum hits and two low notes are enough to work with. N04 and N05 have the step-by-step if you want it.",
        nextHint: "Now add a third part on top.",
      },
      {
        id: "N06-S04",
        title: "Choose a part that is not in use",
        instruction:
          "Press Play/Stop to start the pattern, then press Digital Synth 1.",
        detail:
          "You want a part with nothing in this pattern yet. If Digital Synth 1 already has something, use Digital Synth 2 instead.",
        hardwareTargets: ["digitalSynth1Button", "playStopButton"],
        visualMode: "full-plus-inset",
        expectedSound: "The pattern playing, with the keys now giving you a third sound.",
        whyItMatters:
          "Recording into a part that is already busy means dealing with what is there first. Starting on an empty one keeps this simple.",
        checkpoint:
          "The pattern is running and the keys play a part that is not already busy.",
        recoveryHelp:
          "To find out whether a part is busy, select it and hold a key — the numbered buttons show that note's steps. If several are lit, try the other digital part.",
        nextHint: "Now put something on it.",
      },
      {
        id: "N06-S05",
        title: "Add the third part",
        instruction:
          "Play a key you like against the pattern, then light three or four steps for it.",
        detail:
          "Same TR-REC gesture as before: hold or play the note, then press the numbered buttons where you want it. Long, sparse notes sit over a beat more easily than busy ones.",
        hardwareTargets: ["stepButtons", "keys"],
        visualMode: "full-plus-inset",
        expectedSound:
          "Three parts playing together: a rhythm, a low line, and your new one over the top.",
        whyItMatters:
          "This is the first time the JD-Xi is playing something you built that it could not play from the keys at all. Three parts at once is beyond what your hands can select.",
        checkpoint:
          "Three parts have content in the pattern and you can hear all of them.",
        recoveryHelp:
          "If a step will not take your note, that step already holds one — stop the pattern, hold Erase and press it, then try again. If your new part is drowning everything, use fewer steps rather than more.",
        nextHint: "A fourth is optional, and worth trying.",
      },
      {
        id: "N06-S06",
        title: "A fourth part, if you want one",
        instruction:
          "If you would like a fourth, select the part you have not used and add a couple of notes. Otherwise move on.",
        detail:
          "Three parts is a complete loop and this tutorial is finished either way. A fourth is worth trying so you have heard what a full JD-Xi program sounds like.",
        hardwareTargets: ["partSelectGroup", "stepButtons"],
        visualMode: "full-plus-inset",
        expectedSound:
          "If you added one: all four parts of the program playing at once.",
        whyItMatters:
          "Four parts is the most this instrument has. Hearing it now means the four-part program you build in I07 is something you have already experienced rather than a new idea.",
        checkpoint:
          "You have either three or four parts playing, and you chose which.",
        recoveryHelp:
          "If the fourth part makes it worse, erase its steps or simply mute it in the next step — deciding a part is not needed is a real answer, not a failure.",
        nextHint: "Now use mute to decide what the loop actually needs.",
      },
      {
        id: "N06-S07",
        title: "Listen to one part at a time",
        instruction:
          "Hold Shift and press a Part Select button to mute that part; do it again to bring it back.",
        detail:
          "Work through them one at a time. You can mute more than one at once. Nothing is changed by this — muting is a listening tool, not an edit.",
        hardwareTargets: ["shiftButton", "partSelectGroup"],
        visualMode: "full-plus-inset",
        expectedSound: "Each part disappearing and returning as you mute and unmute it.",
        whyItMatters:
          "It is genuinely hard to hear what one part is doing inside a loop until the others stop. Muting is how you find out, and it costs nothing.",
        checkpoint: "You have heard at least two parts on their own.",
        recoveryHelp:
          "If a part will not come back, hold Shift and press its Part Select button once more — the same combination works both ways, and it is easy to press one time too many.",
        nextHint: "Now use the same trick to make a decision.",
      },
      {
        id: "N06-S08",
        title: "Decide what the loop needs",
        instruction:
          "Mute each part in turn and ask whether you miss it. Leave anything you do not miss muted.",
        detail:
          "If the loop sounds better without a part, that is worth knowing. Leave it muted and listen to the rest for a while.",
        hardwareTargets: ["shiftButton", "partSelectGroup"],
        visualMode: "full-plus-inset",
        expectedSound: "The loop with fewer parts in it, and more room in what remains.",
        whyItMatters:
          "This is arranging, and it is the same move whether you have three parts or thirty: take something away, and find out whether the thing was helping. Muting makes that question free to ask.",
        checkpoint:
          "You have made a decision about at least one part on the basis of hearing the loop without it.",
        recoveryHelp:
          "Nothing here is permanent — unmute anything you want back. If you decide a part really is not wanted, you can erase its steps, but muting is enough for now.",
        nextHint: "Last step: hear the whole thing.",
      },
      {
        id: "N06-S09",
        title: "Listen to what you made",
        instruction: "Unmute anything you want back, and let the loop run.",
        detail:
          "This is a multi-part pattern you built: several parts, playing together, repeating. It is the thing the whole Novice path has been heading toward.",
        hardwareTargets: ["playStopButton", "partSelectGroup"],
        visualMode: "full",
        expectedSound: "Several parts, playing together as one loop.",
        whyItMatters:
          "Everything from here is a bigger version of this. I07 and I08 build a four-part program and a longer pattern, but the thing you are listening to now is the same idea at a smaller size.",
        checkpoint: "You have a loop of your own with at least three parts in it.",
        recoveryHelp:
          "If a part is missing, it is probably still muted — hold Shift and press its Part Select button. Nothing you did in this tutorial deleted a part's content except an explicit Erase.",
        nextHint:
          "You can build a loop from several parts. Next, let the JD-Xi play a part for you.",
      },
      {
        id: "N06-S10",
        title: "None of it is saved",
        instruction: "Leave the JD-Xi on if you want to keep this.",
        detail:
          "The whole loop lives in the loaded program. Selecting another program, or switching the power off, loses all of it — every part at once.",
        hardwareTargets: ["display"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "There is more to lose now than there was after N04. If this loop is one you would be sorry to lose, N09 is three tutorials away and there is nothing stopping you going there first.",
        checkpoint: "You know the loop is not stored yet.",
        recoveryHelp:
          "Nothing to recover from — this step asks you to do nothing. N09 Save your work is where keeping it is taught.",
        nextHint:
          "You can build a loop from several parts. Next, let the JD-Xi play a part for you.",
      },
    ],
  },
  N07: {
    id: "N07",
    level: "novice",
    order: 7,
    title: "Try the arpeggiator",
    shortTitle: "Arpeggiator",
    summary:
      "Hold a few keys down and let the JD-Xi turn them into a moving part. Change what it plays, how far it travels and how fast, then use it over a pattern and switch it off cleanly.",
    estimatedMinutes: 12,
    prerequisites: ["N06"],
    learningGoals: [
      "Turn the arpeggiator on and hear it work.",
      "Change the style, the range and the speed.",
      "Use it as a layer over a running pattern.",
      "Turn it off and confirm the keys play normally again.",
    ],
    // Source record: docs/tutorials/N07-SOURCE-NOTES.md
    // N07 teaches the arpeggiator well enough to use deliberately later
    // (PRODUCT-CURRICULUM-MASTER-PLAN.md sec 9): on, hold 2-3 keys, change
    // keys, style, range, tempo, over a pattern, then off cleanly.
    //
    // Grid is deliberately NOT taught. Roland's own values are note-value
    // and shuffle names (PG p.29), which is exactly the vocabulary sec 3.3
    // forbids in learner text. Oct Range gives the same "change the feel of
    // it" outcome with no theory at all.
    steps: [
      {
        id: "N07-S01",
        title: "Protect any work you want to keep",
        instruction: "Decide whether this program holds work you have not saved.",
        detail:
          "Arpeggio settings are saved within each program, so changing them changes the loaded program. Turning the arpeggiator on and editing its style are both changes of that kind.",
        hardwareTargets: ["arpeggioSection"],
        visualMode: "full",
        whyItMatters:
          "Roland states plainly that arpeggio settings belong to the program. That puts them in the same category as a knob move: not written anywhere, but replacing what is loaded until you save or switch away.",
        checkpoint:
          "You have decided: either there is nothing to keep, or you have saved it first.",
        recoveryHelp:
          "N09 Save your work teaches saving. If you would rather not change this program, press Value + to move to another one first — that discards anything unsaved here, which is the choice you are making.",
        nextHint: "Now choose a part worth arpeggiating.",
      },
      {
        id: "N07-S02",
        title: "Choose a synth part",
        instruction: "Press Digital Synth 1, and play a key to hear it.",
        detail:
          "Any of the three pitched parts will do. The arpeggiator works on the selected part, and a synth sound shows what it is doing far more clearly than a drum kit would.",
        hardwareTargets: ["digitalSynth1Button"],
        visualMode: "full-plus-inset",
        expectedSound: "A pitched sound that changes as you move along the keys.",
        whyItMatters:
          "On the Drums part each key is a different instrument, so an arpeggio there jumps between drums rather than climbing through notes. It works, but it teaches you nothing about what an arpeggio is.",
        checkpoint: "A pitched part is selected and you can hear it from the keys.",
        recoveryHelp:
          "If you hear drums, press Digital Synth 1 again. If you hear nothing, check Master Volume and your listening connection — B02 covers that.",
        nextHint: "Now switch it on.",
      },
      {
        id: "N07-S03",
        title: "Turn the arpeggiator on",
        instruction: "Press the ARPEGGIO On button so it lights.",
        detail: "Nothing happens yet — it needs notes to work with.",
        hardwareTargets: ["arpeggioOnButton"],
        visualMode: "full-plus-inset",
        checkpoint: "The ARPEGGIO On button is lit.",
        recoveryHelp:
          "If pressing it does nothing visible, press again and watch the button rather than the display — this control lights rather than showing a screen.",
        nextHint: "Now give it something to work with.",
      },
      {
        id: "N07-S04",
        title: "Hold some notes down",
        instruction: "Hold down two or three keys at once and keep holding.",
        detail:
          "An arpeggio plays the notes you are holding one after another instead of all together. You are not playing the rhythm — the JD-Xi is.",
        hardwareTargets: ["keys"],
        visualMode: "full",
        expectedSound:
          "The notes you are holding, played in turn, over and over, in a steady rhythm.",
        whyItMatters:
          "This is the whole idea. You supply which notes; the instrument supplies the timing, so you get a moving part without having to play one.",
        checkpoint:
          "You can hear your held notes being played one at a time, repeatedly.",
        recoveryHelp:
          "Nothing happening? Check the ARPEGGIO On button is lit, and hold the keys down rather than tapping them — it plays only while notes are held. Keys near each other tend to sound better together than keys far apart.",
        nextHint: "Now move your hands.",
      },
      {
        id: "N07-S05",
        title: "Change the notes underneath it",
        instruction: "While it is running, move to a different group of keys.",
        detail: "Try two or three keys somewhere else and hold them the same way.",
        hardwareTargets: ["keys"],
        visualMode: "full",
        expectedSound: "The same rhythm, now built from the new notes you are holding.",
        whyItMatters:
          "The style stays put and the notes change. That split — the JD-Xi keeps the pattern, you choose the pitches — is what makes the arpeggiator usable while you are playing.",
        checkpoint: "The arpeggio followed your hands to the new notes.",
        recoveryHelp:
          "If it stopped instead of changing, you let go of every key for a moment. Hold the new group down before releasing the old one, or simply hold the new group and wait.",
        nextHint: "There is a way to keep it going with your hands free.",
      },
      {
        id: "N07-S06",
        title: "Key Hold, and the trap in it",
        instruction:
          "Press the ARPEGGIO Key Hold button, then take your hands off the keys.",
        detail:
          "The arpeggio keeps going without you. Play a different group of keys and it changes to those. Press Key Hold again to turn it off.",
        hardwareTargets: ["keyHoldButton"],
        visualMode: "full-plus-inset",
        expectedSound: "The arpeggio continuing with nothing held down.",
        whyItMatters:
          "This is worth recognising because it is a documented cause of notes that will not stop. If your JD-Xi ever keeps playing after you let go, Key Hold is the first thing to check.",
        checkpoint:
          "The arpeggio continued with your hands off the keys, and stopped when you pressed Key Hold again.",
        recoveryHelp:
          "If the sound will not stop, press ARPEGGIO Key Hold once. If it still will not, press ARPEGGIO On to switch the arpeggiator off entirely.",
        nextHint: "Now change what it plays.",
      },
      {
        id: "N07-S07",
        title: "Open Arpeggio Edit",
        instruction: "Hold down Shift and press the ARPEGGIO On button.",
        detail:
          "This is a shortcut straight to the Arpeggio Edit screen. The same screen is in the Menu, under Arpeggio Edit, if you would rather go the long way.",
        hardwareTargets: ["shiftButton", "arpeggioOnButton", "display"],
        visualMode: "display-focus",
        expectedDisplay: ["<ARPEGGIO> 001", "Basic 1 (a)"],
        syntheticDisplay: false,
        displayNote:
          "Roland's illustrated Arpeggio Edit screen. The number and the style name are whichever style your program is using.",
        checkpoint:
          "The upper line reads ARPEGGIO with a number, and the lower line names a style.",
        recoveryHelp:
          "Hold Shift down first, then press ARPEGGIO On. If you end up somewhere else, press Exit until you reach the top screen and try again, or use Menu/Write and pick Arpeggio Edit from the list.",
        nextHint: "Now hear how different the styles are.",
      },
      {
        id: "N07-S08",
        title: "Try different styles",
        instruction: "Hold some keys down and use Value to step through the styles.",
        detail:
          "There are a great many, and they differ enormously. Keep the keys held so you can hear each one as it arrives.",
        hardwareTargets: ["programValueButtons"],
        visualMode: "full-plus-inset",
        expectedSound:
          "The rhythm and shape of the arpeggio changing completely from one style to the next.",
        whyItMatters:
          "The style is the biggest single decision here. Stepping through a dozen tells you more about what the arpeggiator can do than any description would.",
        checkpoint: "You have heard several styles and found one you like.",
        recoveryHelp:
          "Use Value − to go back if you have passed one you liked. If nothing is changing, make sure you are still holding keys down — the style only shows itself while notes are sounding.",
        nextHint: "Now change how far it travels.",
      },
      {
        id: "N07-S09",
        title: "Change how far it travels",
        instruction:
          "Press Cursor ► until the lower line names Oct Range, then change it with Value while holding keys.",
        detail:
          "This shifts the arpeggio up or down by whole octaves as it repeats, up to three either way. At zero it stays where your hands are; higher and it climbs away from them each time round.",
        hardwareTargets: ["cursorRightButton", "programValueButtons"],
        visualMode: "full-plus-inset",
        expectedSound:
          "The arpeggio spreading out over a wider range — climbing up past your hands, or dropping below them — instead of circling the same few notes.",
        whyItMatters:
          "This is the difference between an arpeggio that sits politely under everything and one that sweeps across the whole instrument. It is the one arpeggio setting that changes the size of the part rather than its rhythm.",
        checkpoint:
          "You can hear the arpeggio covering more ground than it did at the start.",
        recoveryHelp:
          "Set it back to 0 with Value to return to where you were. If you cannot find Oct Range, keep pressing Cursor ► — it is one of several parameters along this screen, and Cursor ◄ walks back.",
        nextHint: "Now change how fast it goes.",
      },
      {
        id: "N07-S10",
        title: "Change the speed",
        instruction: "Keep some keys held and turn the tempo knob.",
        detail:
          "The arpeggiator runs at the program's tempo, the same one you set in B09. There is no separate arpeggio speed.",
        hardwareTargets: ["tempoKnob"],
        visualMode: "full-plus-inset",
        expectedSound: "The arpeggio speeding up and slowing down as you turn.",
        whyItMatters:
          "Because it shares the tempo with everything else, an arpeggio always stays in step with a pattern. That is what makes it usable as a layer rather than something running alongside.",
        checkpoint:
          "The arpeggio changed speed, and the tempo number on the display changed with it.",
        recoveryHelp:
          "Turn the knob back, or use Tap at the speed you want. Remember the tempo belongs to the program, so this is another unsaved change to it.",
        nextHint: "Now put it over a pattern.",
      },
      {
        id: "N07-S11",
        title: "Use it over a pattern",
        instruction:
          "Press Exit to leave the edit screen, press Play/Stop to start the pattern, and hold some keys.",
        detail:
          "The arpeggio plays along with the pattern rather than instead of it. Try holding a group of keys, changing them every few times round, and listening to how it sits.",
        hardwareTargets: ["playStopButton", "keys"],
        visualMode: "full",
        expectedSound:
          "Your pattern running, with an arpeggiated part moving over the top of it in the same tempo.",
        whyItMatters:
          "This is what the arpeggiator is actually for. It gives you a moving part to play over a loop without needing the hands to play it, which is exactly what the performance challenge in I10 asks for.",
        checkpoint:
          "A pattern is playing and your arpeggio is running over it, in time.",
        recoveryHelp:
          "If the arpeggio is fighting the pattern, try fewer keys, or a lower Oct Range. If you cannot hear it, the part it is on may be quiet in this program — mute the other parts for a moment with Shift and Part Select to find it.",
        nextHint: "Last step: put things back.",
      },
      {
        id: "N07-S12",
        title: "Turn it off cleanly",
        instruction:
          "Press ARPEGGIO On so it goes dark, then play a key and check that Key Hold is off too.",
        detail:
          "With both off, the keys play normally again: one note per key, for as long as you hold it.",
        hardwareTargets: ["arpeggioOnButton", "keyHoldButton"],
        visualMode: "full-plus-inset",
        expectedSound: "An ordinary note when you press a key, and silence when you let go.",
        whyItMatters:
          "Leaving the arpeggiator on is the commonest way a later tutorial goes strangely, because every key press turns into a run of notes. Switching it off deliberately is part of finishing.",
        checkpoint:
          "Neither ARPEGGIO button is lit, and one key gives you one note.",
        recoveryHelp:
          "If notes keep repeating, ARPEGGIO On is still lit. If a note carries on after you let go, Key Hold is still on — press it once. Both settings belong to the program, so switching program also clears them, at the cost of everything else unsaved.",
        nextHint:
          "You can add a moving part. Next, change a sound on purpose rather than by accident.",
      },
    ],
  },
  N08: {
    id: "N08",
    level: "novice",
    order: 8,
    title: "Edit a sound more deliberately",
    shortTitle: "Deliberate editing",
    summary:
      "Stop turning knobs to see what happens. Decide what you want the sound to be — darker, longer, more spacious — and then reach for the control that does that one thing.",
    estimatedMinutes: 11,
    prerequisites: ["N07"],
    learningGoals: [
      "Say what you want a sound to do before you touch anything.",
      "Change brightness, length, edge, movement and space on purpose.",
      "Compare what you made against where you started.",
      "Get back to the original sound when an experiment goes wrong.",
    ],
    // Source record: docs/tutorials/N08-SOURCE-NOTES.md
    // N08 is the BRIDGE from random tweaking to intent
    // (PRODUCT-CURRICULUM-MASTER-PLAN.md sec 9), not a synthesis lesson. It
    // uses controls the learner already has from B06 and B07 and adds one
    // new idea: decide the goal first, then pick the control.
    //
    // Deliberately absent: Tone Edit menu diving, oscillator architecture,
    // and any formal A/D/S/R curriculum. The four envelope stages are I04's
    // comparative lab, not this tutorial's.
    //
    // The before/after comparison and the revert are the SAME action --
    // [Shift] + [Enter] returns the original sound and discards the edit --
    // so N08-S09 presents them together and says plainly what it costs.
    steps: [
      {
        id: "N08-S01",
        title: "Protect any work you want to keep",
        instruction:
          "Decide whether the sound loaded right now is one you want to keep.",
        detail:
          "This tutorial changes the sound on the selected part. If it is one you have built and not saved, save it first — or accept that you are about to change it.",
        hardwareTargets: ["filterSection", "ampEnvSection"],
        visualMode: "full",
        whyItMatters:
          "Roland is explicit that a sound you create changes when you move the knobs. This tutorial cannot see what state your JD-Xi is in, so it asks rather than assumes.",
        checkpoint:
          "You have decided: either there is nothing to keep, or you have saved it first.",
        recoveryHelp:
          "N09 Save your work teaches saving. If you would rather work on something disposable, step to another program with Value + first — that discards anything unsaved here, which is the choice you are making.",
        nextHint: "Now pick something to work on.",
      },
      {
        id: "N08-S02",
        title: "Choose a sound worth changing",
        instruction:
          "Press Digital Synth 1 and use Tone + until you find a sound you can hold on a key.",
        detail:
          "You want something that keeps sounding while you hold, rather than a short stab. Every change in this tutorial is easier to hear on a sound that lasts.",
        hardwareTargets: ["digitalSynth1Button", "toneButtons"],
        visualMode: "full-plus-inset",
        expectedSound: "A note that keeps going for as long as you hold the key.",
        checkpoint: "You have a sustained sound you can hear clearly.",
        recoveryHelp:
          "If everything you find stops immediately, step on with Tone + — sustained sounds are common, and pads and strings are the easiest to hold.",
        nextHint: "Now the step that makes this different from B06.",
      },
      {
        id: "N08-S03",
        title: "Decide what you want first",
        instruction:
          "Listen to your sound and finish this sentence out loud: I want it to be more ______.",
        detail:
          "Darker. Brighter. Longer. Shorter. Sharper. Smoother. Stiller. More moving. More spacious. Pick one, and remember it — everything after this is you trying to get there.",
        hardwareTargets: ["filterSection", "ampEnvSection", "lfoSection", "effectsSection"],
        visualMode: "full",
        whyItMatters:
          "This is the whole difference between B06 and this tutorial. In B06 you turned a knob to find out what it did. Here you know what you want, and the question is which knob gets you there. That is what sound design actually is.",
        checkpoint: "You have said out loud what you want this sound to become.",
        recoveryHelp:
          "If nothing suggests itself, use the sound's worst feature: is it too bright, too dull, too short, too flat, too dry? Fixing something you dislike is as good a goal as any.",
        nextHint: "Brightness first.",
      },
      {
        id: "N08-S04",
        title: "Brighter or darker",
        instruction:
          "Hold a key and move Cutoff a small amount in the direction you want.",
        detail:
          "Small. In B06 you swept it end to end to hear what it did; now you are aiming. Move it a little, let go, listen, and move it again if you need to.",
        hardwareTargets: ["cutoffKnob"],
        visualMode: "full-plus-inset",
        expectedSound:
          "The same sound, a little duller or a little brighter — not transformed.",
        whyItMatters:
          "Most real sound design happens in small moves. The big sweeps are for finding out what a control does; once you know, you use it in inches.",
        checkpoint:
          "The sound has moved toward what you wanted without becoming something else.",
        recoveryHelp:
          "Gone too far? Move it back by ear. There is no numeric readout for this knob, so the only guide is whether you prefer what you hear.",
        nextHint: "Now how long it lasts.",
      },
      {
        id: "N08-S05",
        title: "Shorter or longer",
        instruction:
          "Turn the AMP/ENV Envelope knob a little, then play a key and let go.",
        detail:
          "Left gives you a shorter sound with a stronger attack; right makes the attack softer and the release longer. One knob, two ends.",
        hardwareTargets: ["envelopeKnob"],
        visualMode: "full-plus-inset",
        expectedSound:
          "To the left, notes that snap and stop. To the right, notes that swell in and hang on after you let go.",
        whyItMatters:
          "How long a sound lasts changes its job more than what it is made of does. The same tone, made short, becomes something you play rhythmically; made long, it becomes something you hold underneath.",
        checkpoint: "You can hear the note starting or ending differently than it did.",
        recoveryHelp:
          "Turn the knob back toward the middle. If a long release is making everything blur together, that is the setting doing its job — shorten it if you do not want it.",
        nextHint: "Now the edge of it.",
      },
      {
        id: "N08-S06",
        title: "Smoother or sharper",
        instruction:
          "Hold a key, turn Resonance up a little, and move Cutoff again.",
        detail:
          "Resonance emphasises the sound right where the filter is working. A little adds an edge; a lot adds a whistle that follows Cutoff around.",
        hardwareTargets: ["resonanceKnob", "cutoffKnob"],
        visualMode: "full-plus-inset",
        expectedSound:
          "A sharper, more focused character, with a peak that moves when you move Cutoff.",
        whyItMatters:
          "Brightness and edge are different things, and they are the two halves of the filter. Knowing which one you actually want stops you from turning Cutoff up when what you meant was sharper.",
        checkpoint:
          "You can hear the difference between moving Cutoff and moving Resonance.",
        recoveryHelp:
          "Turn Resonance back down if it has become a whistle you do not want. High resonance can also get loud — turn Master Volume down before you explore the top of its range.",
        nextHint: "Now whether it sits still.",
      },
      {
        id: "N08-S07",
        title: "Still or moving",
        instruction:
          "Hold a key and turn LFO Depth up just far enough to notice it, then stop.",
        detail:
          "Just far enough. In B06 you turned it up until it was obvious; here the target is the smallest amount that makes the sound feel alive rather than the largest amount you can stand.",
        hardwareTargets: ["lfoDepthKnob", "lfoRateKnob"],
        visualMode: "full-plus-inset",
        expectedSound:
          "A sound that breathes slightly rather than sitting perfectly still — or wobbles obviously, if you went too far.",
        whyItMatters:
          "A little movement makes a sound feel real. A lot makes it sound like an effect. The difference is entirely in how far you turn this knob, which is why deciding first matters.",
        checkpoint:
          "There is movement in the sound that you chose the amount of.",
        recoveryHelp:
          "Turn Depth back to zero to remove it completely. If the movement is too fast or too slow to be pleasant, use LFO Rate to change its speed rather than turning Depth further.",
        nextHint: "Last one: how much room it is in.",
      },
      {
        id: "N08-S08",
        title: "Dry or spacious",
        instruction:
          "Turn Reverb up to where you like it, then press Effects On/Off to hear the sound without it.",
        detail:
          "The On/Off button gives you the comparison for free. Ask whether you miss the reverb when it goes — if you do not, you had too much.",
        hardwareTargets: ["reverbKnob", "effectsOnOffButton"],
        visualMode: "full-plus-inset",
        expectedSound:
          "Your sound in a space, then bare, then in a space again.",
        whyItMatters:
          "Reverb is the easiest thing on this instrument to overdo, because more of it always sounds better on a single sound played alone. Switching it out is the only honest test.",
        checkpoint:
          "You have set an amount of reverb you chose, having heard the sound without it.",
        recoveryHelp:
          "Keep pressing Effects On/Off to step on through the combinations until the effects you want are back. Turning the Reverb knob down is the other way to get less.",
        nextHint: "Now hear how far you have come — and what it costs to find out.",
      },
      {
        id: "N08-S09",
        title: "Compare with where you started",
        instruction:
          "Read this before you press anything. Then, if you want to, hold Shift and press Enter.",
        detail:
          "Roland documents that combination as the way back to the original sound after you have edited it. That makes it your before-and-after — and your undo for this sound, which is the same thing. It reaches nothing else. Pressing it plays you exactly what you started from, and throws away everything you just did.",
        hardwareTargets: ["shiftButton", "enterButton"],
        visualMode: "full-plus-inset",
        expectedSound:
          "If you press it: the sound as it was before you started, with your version gone.",
        whyItMatters:
          "There is no way to hold both versions at once on this instrument, and no redo. So the comparison and the undo are one button, and choosing to press it is choosing to start again. That is the strongest argument there is for learning to save, which is the next tutorial.",
        checkpoint:
          "You either kept your version, or you heard the original and know your version is gone.",
        recoveryHelp:
          "If you pressed it and wanted your version back, it cannot be recovered — but you know exactly which controls you moved, so making it again takes a minute rather than a discovery. Next time, save before you compare.",
        nextHint: "Last thing: how to keep one of these.",
      },
      {
        id: "N08-S10",
        title: "Keeping an edit instead",
        instruction: "Decide whether you want to build a sound you keep.",
        detail:
          "If you do, edit it the way you just practised and then save the program — that is the only way a JD-Xi sound is kept. There is no way to save a sound by itself.",
        hardwareTargets: ["display"],
        visualMode: "full",
        whyItMatters:
          "You now have a method: name what you want, then move one control at a time toward it. What you do not have yet is anywhere to put the result. That is the whole of N09.",
        checkpoint:
          "You can edit a sound deliberately, and you know it stays only if you save the program.",
        recoveryHelp:
          "Nothing to recover from — this step asks you to do nothing. If you have a sound here you want to keep, go to N09 Save your work now rather than switching off.",
        nextHint:
          "You can shape a sound on purpose. Next, learn how to keep one.",
      },
    ],
  },
  N09: {
    id: "N09",
    level: "novice",
    order: 9,
    title: "Save your work",
    shortTitle: "Save your work",
    summary:
      "Write what you have made into the JD-Xi so it survives being switched off — then prove it is really there. This is the one operation in the Novice path that can destroy something, so it is worth doing slowly.",
    estimatedMinutes: 15,
    prerequisites: ["N08"],
    learningGoals: [
      "Say what a save keeps and what it cannot keep.",
      "Name a program and choose where it goes.",
      "Understand exactly what saving over a slot costs you.",
      "Complete a save, and check that it really persisted.",
    ],
    // Source record: docs/tutorials/N09-SOURCE-NOTES.md
    //
    // DESTRUCTIVE-RISK TUTORIAL. Saving overwrites the destination and Roland
    // documents no undo and no rollback. The sequence follows OM p.9 exactly,
    // including which button confirms and which cancels at which stage.
    //
    // N09 carries no protect-your-work preflight, and that is deliberate: it
    // selects no other program or tone, so it cannot discard the learner's
    // loaded work -- it is the tutorial that rescues it. The risk here runs
    // the other way, to whatever already occupies the destination, and it is
    // handled by its own dedicated step (N09-S06) before the destination is
    // chosen.
    //
    // No slot is ever described as empty or safe. Roland documents only the
    // positive signal (an occupied destination shows its name on the lower
    // line), so the instruction is to choose a slot the learner is willing to
    // overwrite, and the tutorial says outright that it cannot promise any
    // slot is free.
    steps: [
      {
        id: "N09-S01",
        title: "Make a small change you will not miss",
        instruction:
          "Hold a key and turn the Cutoff knob a little, so the sound is audibly different from how it started.",
        detail:
          "This tutorial needs something to save, and it is much safer to practise on a change you invented thirty seconds ago than on work you care about. If you already have something you want to keep, skip this step and save that instead.",
        hardwareTargets: ["cutoffKnob"],
        visualMode: "full-plus-inset",
        expectedSound:
          "The loaded sound, duller or brighter than it was — a change you would recognise if it came back.",
        whyItMatters:
          "Saving is the one operation in the Novice path that can destroy something, so the first time you do it should not be the time it matters. A deliberately disposable edit means every step after this is practice rather than risk.",
        checkpoint:
          "The sound has changed in a way you could recognise, and you do not mind whether it survives.",
        recoveryHelp:
          "Turn Cutoff back by ear if you would rather start from the untouched sound — or hold Shift and press Enter to return to the original, which also works. Neither matters much here: the point of this step is to have something to save, not to have something good.",
        nextHint: "Now make sure it is what gets saved.",
      },
      {
        id: "N09-S02",
        title: "Make sure the right thing is loaded",
        instruction: "Check that the sound or pattern you want to keep is the one playing now.",
        detail:
          "Saving keeps what is loaded at this moment. From here to the end of this tutorial, do not select another program or another tone — either would throw away the very thing you are trying to rescue.",
        hardwareTargets: ["programValueButtons", "toneButtons"],
        visualMode: "full",
        whyItMatters:
          "This is the one tutorial where changing program is worse than usual: it would discard the work and you would arrive at the save screen with nothing worth saving.",
        checkpoint:
          "The thing you want to keep is loaded, and you have not touched the Value or Tone buttons.",
        recoveryHelp:
          "If you have already changed program and lost the work, it is gone — the JD-Xi has no undo. Make something you want to keep again, then come back and start from here.",
        nextHint: "Now, what a save actually keeps.",
      },
      {
        id: "N09-S03",
        title: "What a save keeps",
        instruction: "Read this before you start.",
        detail:
          "Saving stores a whole program: all four parts and their tones, the effects, the arpeggio settings, the tempo, and the pattern. It is all one thing. There is no way to save a sound by itself — the JD-Xi cannot store sound settings as individual tones — and there is no separate save for a pattern.",
        hardwareTargets: ["partSelectGroup"],
        visualMode: "full",
        whyItMatters:
          "It is good news and a warning at once. One save keeps everything you built across N04 to N08. It also means you cannot keep just the bit you like — the program goes as a whole.",
        checkpoint:
          "You can say what one save covers, and that patterns and sounds are not saved separately.",
        recoveryHelp:
          "Nothing to recover from — this step changes nothing. If you are not ready, press nothing and come back; your work stays loaded until you change program or switch off.",
        nextHint: "Now open the save screen.",
      },
      {
        id: "N09-S04",
        title: "Open the WRITE screen",
        instruction: "Hold down Shift and press Menu/Write.",
        detail:
          "This is the JD-Xi's save gesture, and the only one. The name input screen appears.",
        hardwareTargets: ["shiftButton", "menuWriteButton", "display"],
        visualMode: "display-focus",
        expectedDisplay: ["Name:      [Ent]", "Init Program"],
        syntheticDisplay: false,
        displayNote:
          "Roland's illustrated name input screen. The lower line shows the current program's name, which will be whatever your own program is called rather than the example.",
        whyItMatters:
          "Nothing is written yet. Opening this screen is safe — the save happens several steps from now, and you can leave at any point before then.",
        checkpoint: "The display shows a name on the lower line and Ent on the upper line.",
        recoveryHelp:
          "If the Menu appeared instead, Shift was not held down — press Exit and try again, holding Shift first. Pressing Exit at this point leaves the save screen without saving anything.",
        nextHint: "Give it a name you will recognize.",
      },
      {
        id: "N09-S05",
        title: "Name it",
        instruction: "Use Cursor to move along the name and Value to choose each character.",
        detail:
          "Cursor picks which character you are on; Value changes that character. Take your time — a name you recognize is worth more than a fast one.",
        hardwareTargets: ["cursorButtons", "programValueButtons"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "You are going to have up to 256 of these. In a month, the difference between a name you chose and Init Program is whether you can ever find this again.",
        checkpoint: "The lower line shows a name you chose.",
        recoveryHelp:
          "Cursor and Value only edit the name here — neither selects a program at this screen. If the name is a mess, keep editing until it is not; nothing is committed yet. Press Exit to abandon the whole save.",
        nextHint: "Now accept the name.",
      },
      {
        id: "N09-S06",
        title: "Accept the name",
        instruction: "Press Enter.",
        detail:
          "This confirms the name and moves you on to choosing where the program will be stored. Still nothing has been written.",
        hardwareTargets: ["enterButton"],
        visualMode: "full-plus-inset",
        checkpoint: "The screen has moved on from naming.",
        recoveryHelp:
          "If you want to change the name after all, press Exit to leave the save and start again with Shift and Menu/Write.",
        nextHint: "Stop here and read the next step in full before pressing anything.",
      },
      {
        id: "N09-S07",
        title: "What choosing a destination costs",
        instruction: "Read this before you choose where to save.",
        detail:
          "You are about to pick one of the JD-Xi's storage slots. If that slot already holds a program, saving replaces it and the previous data is erased. Roland gives one signal and only one: if the destination already holds data, its name appears on the lower line. There is no message that tells you a slot is free, and this tutorial cannot promise you one is. Choose a slot you are willing to overwrite.",
        hardwareTargets: ["programValueButtons", "display"],
        visualMode: "full",
        whyItMatters:
          "This is the only step in the whole Novice path that can destroy something that was not yours to lose. If this JD-Xi is shared, or was bought second hand, one of those slots may hold work someone else cares about.",
        checkpoint:
          "You understand that saving replaces whatever is in the slot you choose, permanently.",
        recoveryHelp:
          "If you are not sure, press Exit now to leave without saving. Nothing has been written, and your work is still loaded — you can come back when you have decided where to put it.",
        nextHint: "Now choose, carefully.",
      },
      {
        id: "N09-S08",
        title: "Choose where it goes",
        instruction:
          "Use the Value buttons to choose a destination, watching the lower line as you go.",
        detail:
          "Your own programs belong in the user banks — E, F, G and H — with sixty-four slots in each. As you step through them, a name on the lower line means that slot is occupied by the program with that name.",
        hardwareTargets: ["programValueButtons", "display"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "Banks A to D are Roland's own programs. E to H are where your work is meant to live, which is why they are the ones to look through here.",
        checkpoint:
          "You have a destination selected and you have read what the lower line says about it.",
        recoveryHelp:
          "Keep stepping with Value until you find a slot you are happy to use. Press Exit at any time to leave without saving anything.",
        nextHint: "One more press before the point of no return.",
      },
      {
        id: "N09-S09",
        title: "Enter, and the last chance to stop",
        instruction: "Press Enter.",
        detail:
          "A confirmation message appears. This is the last moment at which nothing has happened. Exit cancels here; Enter goes ahead.",
        hardwareTargets: ["enterButton", "exitButton"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "Roland puts a confirmation here for the same reason this tutorial spends three steps on it: the next press cannot be taken back.",
        checkpoint:
          "A confirmation message is showing, and you know which button does which.",
        recoveryHelp:
          "Press Exit to cancel. Nothing will have been written, your work is still loaded, and you can start the save again whenever you are ready.",
        nextHint: "If you are sure, go ahead.",
      },
      {
        id: "N09-S10",
        title: "Write it",
        instruction: "Press Enter, and do not touch the power switch.",
        detail:
          "The JD-Xi writes the program and shows Complete when it has finished. Roland's warning here is blunt and worth repeating: never turn the power off while saving.",
        hardwareTargets: ["enterButton", "display"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "Interrupting a write is the one way to turn a save into a problem bigger than the thing you were saving.",
        checkpoint: "The display reports that it is complete.",
        recoveryHelp:
          "If nothing seems to happen, wait rather than pressing anything else. Do not switch the power off to find out what is going on.",
        nextHint: "It is done. Here is what that means.",
      },
      {
        id: "N09-S11",
        title: "It is saved, and it cannot be undone",
        instruction: "Press Exit until you reach the top screen, and read the display.",
        detail:
          "The upper line now shows the bank and number you chose, and the name you gave it. If that slot held another program, it does not any more — there is no undo and nothing to roll back to.",
        hardwareTargets: ["exitButton", "display"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "Your work now survives being switched off. That is the thing the whole Beginner path could not do for you.",
        checkpoint:
          "The top screen shows your program in the slot you chose.",
        recoveryHelp:
          "To prove it is really stored, change to another program and come back to yours — it should return exactly as you left it. Do that only now that it is saved; before saving, the same action would have destroyed it.",
        nextHint: "One last thing, about what a save does not cover.",
      },
      {
        id: "N09-S12",
        title: "Prove it is really there",
        instruction:
          "Press Value + to step to another program, then Value − to come back to yours.",
        detail:
          "Selecting a program loads it from storage, so coming back gives you the saved version rather than what was in front of you a moment ago. If your change is still there, it is genuinely written.",
        hardwareTargets: ["programValueButtons", "display"],
        visualMode: "full-plus-inset",
        expectedSound:
          "Your program, with the change you made at the start of this tutorial still in it.",
        whyItMatters:
          "Until you have done this once, you are taking the word Complete on trust. Stepping away and back is the only check that distinguishes a program that was written from one that merely looks right because it never left the screen.",
        checkpoint:
          "You left your program, came back to it, and the change you saved is still there.",
        recoveryHelp:
          "This move is safe now, and only now — the thing that made it dangerous throughout this course is unsaved work, and you have just saved yours. If your change is missing, the save did not take: go back to N09-S04 and work through it again, watching for the Complete message.",
        nextHint: "One optional extra, now that it is safe to do.",
      },
      {
        id: "N09-S13",
        title: "Put it on a Favorite button, if you want to",
        instruction:
          "Press Favorite so it lights, press numbered buttons until one says “Not Registered!”, then hold Favorite and press that button.",
        detail:
          "This is optional. Registering puts your saved program on a numbered button so one press recalls it. Roland asks you to save the program first, which you have just done — that is why this step is here rather than earlier.",
        hardwareTargets: ["favoriteButton", "stepButtons"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "Registering replaces whatever was on that button, and the JD-Xi does not ask first. The “Not Registered!” message is the only signal it gives that a slot is free, which is why this step has you go looking for one rather than picking a number.",
        checkpoint:
          "Either you found a free button and registered your program to it, or you decided to skip this step.",
        recoveryHelp:
          "If pressing a numbered button loaded a different program instead of reporting “Not Registered!”, that button was already in use — and you have just switched away from your program. Step back to it with Value, and try a different number. Press Favorite once more when you are done, to give the numbered buttons their normal job back.",
        nextHint: "Last thing: what a save leaves behind.",
      },
      {
        id: "N09-S14",
        title: "What a save does not cover",
        instruction: "Read this last part.",
        detail:
          "A few things sit outside the program and are not kept by saving it. The JD-Xi's system settings save themselves separately, as you leave the system screen. Transpose is never saved and returns to zero when you switch off. So does the temporary program-change lock, and the setting that sends the click to one side only.",
        hardwareTargets: ["display"],
        visualMode: "full",
        whyItMatters:
          "It explains a small mystery in advance: some things come back after a power cycle and some do not, and now you know which are which.",
        checkpoint:
          "You can save your work, and you know what a save covers and what it does not.",
        recoveryHelp:
          "If something you expected did not come back after switching off, check this list first — it is probably one of the settings that was never saved rather than a failed save.",
        nextHint:
          "Your work is safe. Last in this level: what to do when things go wrong.",
      },
    ],
  },
  N10: {
    id: "N10",
    level: "novice",
    order: 10,
    title: "Getting unstuck",
    shortTitle: "Getting unstuck",
    summary:
      "What to do when the JD-Xi does something you did not expect. There is no undo button, so this is about knowing which move fits which problem — and recognizing the screens you should back out of.",
    estimatedMinutes: 13,
    prerequisites: ["N09"],
    learningGoals: [
      "Back out of any screen you did not mean to open.",
      "Tell backing out apart from throwing an edit away.",
      "Recognize the JD-Xi's common messages and know what each one wants.",
      "Work through no sound, notes that will not stop, and a pattern that will not play.",
    ],
    // Source record: docs/tutorials/N10-SOURCE-NOTES.md
    //
    // N10 deliberately performs NO state-changing action. Every recovery move
    // it teaches is taught by recognition -- find it, read what it does, know
    // when it applies -- because performing them means destroying something,
    // and a learner is most likely to open this tutorial while something is
    // wrong and unsaved. That is also why N10 needs no protect-your-work
    // preflight: there is nothing here that can lose their work.
    //
    // Roland's own troubleshooting table (OM p.17) and error-message list
    // (PG p.5) are the spine. Factory Reset is named, its cost stated, and
    // its confirmation screen shown so the learner can recognize it and press
    // [Exit] -- it is never performed, and never offered as a routine fix.
    steps: [
      {
        id: "N10-S01",
        title: "The first move, every time",
        instruction: "Press Exit.",
        detail:
          "Whatever screen you are on, Exit steps back one. Press it several times and you arrive at the top screen. It is the move to reach for before you try to work out what happened.",
        hardwareTargets: ["exitButton", "display"],
        visualMode: "display-focus",
        expectedDisplay: ["A64   1-1    120", "256:Synth Lead01"],
        syntheticDisplay: false,
        displayNote:
          "Roland's own example of the top screen. Your JD-Xi shows its own program, tempo and tone name.",
        whyItMatters:
          "Most of being stuck on this instrument is being in a screen you did not mean to open. Exit solves that class of problem completely, and it cannot make anything worse.",
        checkpoint: "You are at the top screen.",
        quickReference: ["top-screen", "menu-controls"],
        recoveryHelp:
          "Keep pressing. Exit always moves outward, never further in. If the screen will not change at all, see the step about messages later in this tutorial — the JD-Xi may be refusing until you stop playback.",
        nextHint: "But Exit does not do everything, and that matters.",
      },
      {
        id: "N10-S02",
        title: "Backing out is not undoing",
        instruction: "Look at the lower line of the display.",
        detail:
          "Exit leaves a screen. It does not put back a value you changed while you were in it. If a sound has been edited, the tone number disappears from the lower line — and pressing Exit does not bring it back.",
        hardwareTargets: ["display"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "This is the single most useful distinction on the instrument. Being in the wrong screen and having changed the wrong thing are different problems, and only one of them is solved by Exit.",
        checkpoint:
          "You can tell from the display whether the loaded sound has been edited.",
        recoveryHelp:
          "If the tone number is missing and you did not mean to edit anything, the next step is the move that fits.",
        nextHint: "For an edited sound, there is one documented way back.",
      },
      {
        id: "N10-S03",
        title: "Putting an edited sound back",
        instruction: "Find the Shift and Enter buttons, and read what they do together.",
        detail:
          "Holding Shift and pressing Enter returns to the original sound after you have switched or edited it. Do not press it now unless you actually want to abandon the sound you have loaded — it throws those edits away, which is the whole point of it.",
        hardwareTargets: ["shiftButton", "enterButton"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "It is the closest thing the JD-Xi has to an undo, and it is worth being precise about its limits: it addresses the sound. It is not a general undo, and Roland does not document it as reaching your effects, your pattern or your program settings.",
        checkpoint:
          "You can point to both buttons and say what the combination does and what it does not reach.",
        quickReference: ["shortcuts"],
        recoveryHelp:
          "If you have already pressed it and lost an edit you wanted, it is gone. Nothing stored has changed, so the program on the instrument is intact — it is only the unsaved edit that has been discarded.",
        nextHint: "There is a bigger version of the same move, with a bigger cost.",
      },
      {
        id: "N10-S04",
        title: "Starting over, and what it costs",
        instruction: "Find the Value buttons, and read this before you use them.",
        detail:
          "Selecting a different program and coming back reloads this program exactly as it is stored — which is a genuine way out of a mess. It also discards everything unsaved, all at once: your sound edits, your effects, your pattern, your tempo. Use it when you want none of what you have.",
        hardwareTargets: ["programValueButtons"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "It is a real recovery, not a trick — but it is the largest possible one. Reaching for it to fix one bad filter setting costs you everything else you did.",
        checkpoint:
          "You can say what this move restores and what it destroys.",
        quickReference: ["program-vs-part"],
        recoveryHelp:
          "If you have work you want to keep, save it first: N09 covers that. If you have already lost something this way, it cannot be recovered.",
        nextHint: "One area of the instrument behaves the opposite way.",
      },
      {
        id: "N10-S05",
        title: "The one screen that saves itself",
        instruction: "Read this before you go into the system settings to fix something.",
        detail:
          "Everything else on this instrument holds your changes loosely, and loses them when you switch program or power off. The system settings are the exception: the JD-Xi saves them automatically as you leave that screen. There is no confirmation and no undo.",
        hardwareTargets: ["menuWriteButton"],
        visualMode: "full",
        whyItMatters:
          "It reverses the usual advice. Everywhere else, experimenting is cheap because nothing is written. In the system settings, experimenting is written the moment you walk out.",
        checkpoint:
          "You know that the system settings save themselves and that nothing else does.",
        recoveryHelp:
          "If you need to change something in there, read the value before you change it and write it down. That is the only way back, because the JD-Xi will not offer you one.",
        nextHint: "Now the messages you are most likely to meet.",
      },
      {
        id: "N10-S06",
        title: "Messages that mean stop first",
        instruction: "Press Play/Stop to make sure nothing is running.",
        detail:
          "Two of the JD-Xi's messages simply mean it is busy. Now Playing and Now Recording both mean an operation cannot happen until you stop playback or recording. Neither is an error you have caused.",
        hardwareTargets: ["playStopButton", "display"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "They look alarming and they are not. Pressing Play/Stop clears both, and the thing you were trying to do will then work.",
        checkpoint: "Nothing is playing, and you know what those two messages want.",
        recoveryHelp:
          "If a message will not clear, press Play/Stop once more. If you were recording, press whichever record button you started with to stop it.",
        nextHint: "Two more messages mean something different.",
      },
      {
        id: "N10-S07",
        title: "Messages that mean something is full",
        instruction: "Read these two so you recognize them.",
        detail:
          "Pattern Full means the pattern cannot hold any more — often after recording a lot of knob movement — and you need to delete something from it before recording more. Internal Memory Full means there is no room to save, and space has to be freed before saving will work.",
        hardwareTargets: ["display"],
        visualMode: "full",
        whyItMatters:
          "Both are the instrument being honest about a limit rather than a fault. Knowing that saves you looking for a broken thing that is not there.",
        checkpoint: "You can tell those two messages apart and say what each one is asking for.",
        recoveryHelp:
          "Neither can be pressed away. Pattern Full needs unwanted data removed from the pattern you are recording; memory full needs unneeded programs cleared before saving again.",
        nextHint: "Now the most common complaint of all.",
      },
      {
        id: "N10-S08",
        title: "No sound at all",
        instruction: "Work down this list rather than changing settings at random.",
        detail:
          "Check the obvious first: Master Volume up, headphones or speakers connected and switched on, and a part selected. Then the ones people miss. On the Drums part, the top of the keyboard has no instruments assigned and is silent by design. And Roland names one setting specifically: if the keys make no sound, check whether the system setting Local Switch has been turned off, because that disconnects the keys from the sound generator.",
        hardwareTargets: ["masterVolumeKnob", "partSelectGroup"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "Local Switch off is the one cause that looks exactly like a broken instrument, because every light works and nothing makes a sound.",
        checkpoint: "You have a list to work through rather than a mystery.",
        quickReference: ["select-part", "power-on"],
        recoveryHelp:
          "If it is Local Switch, correcting it means going into the system settings — and remember those save themselves as you leave, so change only that one thing.",
        nextHint: "The opposite problem has a simpler answer.",
      },
      {
        id: "N10-S09",
        title: "Notes that will not stop",
        instruction: "Find the ARPEGGIO Key Hold button.",
        detail:
          "If notes keep sounding after you take your hands off the keys, Roland's own answer is to check whether Key Hold is on, and press it to turn it off. It does this whether the arpeggiator is running or not.",
        hardwareTargets: ["keyHoldButton"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "It is the classic beginner scare on this instrument, and the fix is one button. Worth knowing before it happens rather than during.",
        checkpoint: "You can find Key Hold without hunting for it.",
        quickReference: ["arpeggiator"],
        recoveryHelp:
          "If notes still will not stop with Key Hold off, check the sound's release setting — a very long release keeps a note sounding long after you let go, which N08 covers.",
        nextHint: "And one for the sequencer.",
      },
      {
        id: "N10-S10",
        title: "A pattern that will not play",
        instruction: "Press Play/Stop and watch the measure and beat numbers.",
        detail:
          "If the numbers do not move at all, the JD-Xi may be waiting for another device. Roland documents the cause: the system setting Sync Mode set to Slave means the JD-Xi expects timing messages from elsewhere. Left as Master, which is the setting for using it on its own, patterns play normally.",
        hardwareTargets: ["playStopButton", "display"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "Nothing on the front panel hints at this, so a pattern that will not start looks like a broken sequencer rather than one setting in a menu.",
        checkpoint:
          "You can tell whether the sequencer is running by watching the display, and you know what to check when it is not.",
        quickReference: ["play-stop-pattern"],
        recoveryHelp:
          "If the numbers do move but you hear nothing, the pattern is running and empty — that program may simply have nothing recorded on the part you are listening to.",
        nextHint: "One last thing, and it is the one to be careful about.",
      },
      {
        id: "N10-S11",
        title: "The screen to back out of",
        instruction: "Learn to recognize this screen, and press Exit if you ever see it.",
        detail:
          "This is the Factory Reset confirmation. Answering yes initialises every user program you have saved — with their arpeggios, patterns and effects — and every system setting. This tutorial does not perform it, and you should not go looking for it. If you land on it by accident, Exit is no.",
        hardwareTargets: ["exitButton", "display"],
        visualMode: "display-focus",
        expectedDisplay: ["Factory Reset ?", "[Ent]:Y [Exit]:N"],
        syntheticDisplay: false,
        displayNote:
          "Roland's illustrated Factory Reset confirmation, reproduced with its own left-to-right order. Note that it is the opposite way round from the Pattern Length prompt in N03 — the keys mean the same thing in both, but they are not printed in the same order.",
        whyItMatters:
          "A factory reset is not a way of getting unstuck. It is the largest destructive operation on the instrument and it takes everything you have ever saved. The reason to show it here is so that you recognize it and can press Exit, not so that you use it.",
        checkpoint:
          "You would recognize that screen and know which button answers no.",
        recoveryHelp:
          "Press Exit. If you have already answered yes, the saved programs are gone and there is nothing on the instrument that brings them back. That is the whole argument for saving deliberately, to slots you chose, and for never pressing Enter on a screen you do not recognise.",
        nextHint: "Last step: the honest summary.",
      },
      {
        id: "N10-S12",
        title: "There is no undo, and that is workable",
        instruction: "Press Exit until you reach the top screen.",
        detail:
          "The JD-Xi has no undo button, and no single reset that puts things back. What it has is a small set of moves that each fit a particular problem: Exit for the wrong screen, Shift and Enter for an edited sound, selecting another program for starting over, Play/Stop for a message that says it is busy, and saving for anything you want to survive.",
        hardwareTargets: ["exitButton"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "Knowing there is no general undo is more useful than hoping there is one. It turns every risky moment into a question with an answer — what exactly do I want back, and which of these five moves returns it?",
        checkpoint:
          "You can name which move fits which kind of problem, and you know none of them is a general undo.",
        quickReference: ["menu-controls", "shortcuts", "save-program"],
        recoveryHelp:
          "Keep pressing Exit. This is the last step you have to do — the two that follow are optional practice, and you can stop here.",
        nextHint:
          "The toolkit is complete. What follows is optional practice, and it changes a sound.",
      },
      {
        id: "N10-S13",
        title: "Optional practice: decide whether to try it",
        instruction:
          "Decide whether the sound loaded right now contains edits you want to keep.",
        detail:
          "The last two steps are an optional exercise: make a small change to a sound, then use Shift and Enter to put it back. It is the one move in this toolkit that is worth having actually done rather than only read about. But it edits whatever is loaded, and the revert throws that edit away — so if there is anything here you want, skip these two steps. N10 is complete either way.",
        hardwareTargets: ["cutoffKnob"],
        visualMode: "full",
        whyItMatters:
          "You may well have opened this tutorial because something went wrong, with unsaved work still in front of you. That is exactly the situation in which a practice exercise must not be forced on you, which is why this step asks before the next one acts.",
        checkpoint:
          "You have decided: either you are going to try the exercise, or you are skipping it and finishing here.",
        recoveryHelp:
          "If you are not sure, skip it. Nothing else depends on this exercise, and you can come back to N10 at any time on a sound you do not mind losing. If you want to keep what is loaded, N09 Save your work is the tutorial that keeps it.",
        nextHint: "If you are trying it, one small change is enough.",
      },
      {
        id: "N10-S14",
        title: "Optional practice: change it, then put it back",
        instruction:
          "If you decided to try it: hold a key, turn Cutoff a little, then hold Shift and press Enter. If you decided to skip, read this and finish.",
        detail:
          "Turning the knob edits the loaded sound, and the tone number disappears from the lower line to tell you so. Holding Shift and pressing Enter returns the original sound, and the tone number comes back. That pair of signals — number gone, number back — is what you were reading about at the start of this tutorial, now happening in front of you.",
        hardwareTargets: ["shiftButton", "enterButton", "display"],
        visualMode: "full-plus-inset",
        expectedSound:
          "The sound changing when you turn the knob, then returning exactly to what it was.",
        whyItMatters:
          "Having done it once, you will reach for it without hesitating the next time an experiment goes somewhere you did not want. Reading about a recovery move and using one are different kinds of knowing.",
        checkpoint:
          "Either you changed a sound and put it back, watching the tone number leave and return — or you skipped the exercise, which is equally a finish.",
        recoveryHelp:
          "If the sound did not return, check that Shift was held down before Enter was pressed. Remember this move reaches the sound only: it does not undo effect settings, pattern edits or anything saved. If it did not work and you want the stored program back, selecting another program and returning gives you that — but be clear that doing so discards every other unsaved change on this program, and they are gone for good.",
        nextHint:
          "That is the Novice path complete. Next, start building sounds of your own.",
      },
    ],
  },
  I01: {
    id: "I01",
    level: "intermediate",
    order: 1,
    title: "Build a bass sound",
    shortTitle: "Bass sound",
    summary:
      "Start from a bass the JD-Xi already has and make it yours: darker, tighter, with more or less growl. The aim is a solid low sound you would actually use, not a recipe.",
    estimatedMinutes: 12,
    prerequisites: ["N09"],
    learningGoals: [
      "Start from an existing bass tone and reshape it.",
      "Use Cutoff and Resonance to set weight and growl.",
      "Shape how each note starts and stops.",
      "Judge a bass by how it sits under a pattern.",
    ],
    // Source record: docs/tutorials/I01-SOURCE-NOTES.md
    // I01 RESHAPES AN EXISTING TONE (PRODUCT-CURRICULUM-MASTER-PLAN.md
    // sec 10). It is deliberately not an oscillator-up build: waveform
    // controls appear only as an optional step, "only as needed".
    //
    // Every shaping control is on the panel. Tone Edit is not opened -- the
    // per-stage envelope work belongs to I04's comparative lab.
    //
    // There is no save requirement. The closing step is an offer.
    steps: [
      {
        id: "I01-S01",
        title: "Protect any work you want to keep",
        instruction: "Decide whether this program holds work you have not saved.",
        detail:
          "You will select a tone and then edit it. Both replace what is loaded. If you have something here you want, save it first.",
        hardwareTargets: ["toneButtons"],
        visualMode: "full",
        whyItMatters:
          "Selecting a tone discards an unsaved edit, and this tutorial starts by selecting one. That makes the first step of the sound-design path the same as every other risky moment on this instrument.",
        checkpoint:
          "You have decided: either there is nothing here to keep, or you have saved it first.",
        recoveryHelp:
          "N09 Save your work teaches saving. If you would rather work somewhere disposable, step to another program with Value + first — that discards anything unsaved here, which is the choice you are making.",
        nextHint: "Now find a bass to start from.",
      },
      {
        id: "I01-S02",
        title: "Start from a bass the JD-Xi already has",
        instruction:
          "Press Analog Synth, then use Tone − and Tone + until you find something low and solid.",
        detail:
          "Play a key near the left end after each change. You are not looking for the finished sound — you are looking for a reasonable starting point with weight to it.",
        hardwareTargets: ["analogSynthButton", "toneButtons"],
        visualMode: "full-plus-inset",
        expectedSound:
          "A low, weighty synth sound. Some will be buzzy, some rounder; any of them will do.",
        whyItMatters:
          "Starting from a tone that already works is faster and more useful than starting from nothing. Roland's own bass sounds have had decisions made about them that you can then disagree with, which is a much better way to learn than an empty patch.",
        checkpoint: "You have a low sound you would be happy to work on.",
        recoveryHelp:
          "The Analog Synth part has no Category dial — Tone − and + are the only way through its sounds, and there are not many, so you can step through the lot in a minute. If you hear nothing, check Master Volume and that Analog Synth is selected.",
        nextHint: "Now take the top off it.",
      },
      {
        id: "I01-S03",
        title: "Take the top off",
        instruction:
          "Hold a low key and turn Cutoff to the left until the buzz goes, then back a little.",
        detail:
          "You are looking for the point where it stops being bright and starts being weight. Go too far first so you know where too far is, then come back.",
        hardwareTargets: ["cutoffKnob"],
        visualMode: "full-plus-inset",
        expectedSound:
          "The fizz and buzz coming off the top, leaving something round and low.",
        whyItMatters:
          "Almost every bass sound on any synthesizer is a bright sound with the top taken off. This one knob does most of the work, and doing it by ear beats any number you could be given.",
        checkpoint: "The sound is round and low rather than buzzy.",
        recoveryHelp:
          "Turn Cutoff back to the right to reverse it by ear. If the sound disappears entirely you have closed the filter all the way — come back right until it returns.",
        nextHint: "Now decide how much growl you want.",
      },
      {
        id: "I01-S04",
        title: "Add growl, carefully",
        instruction: "Turn Resonance up a small amount, then move Cutoff again.",
        detail:
          "A little adds bite around the low end. A lot starts to whistle, and it can get loud — turn Master Volume down before you explore the top of this knob.",
        hardwareTargets: ["resonanceKnob", "cutoffKnob"],
        visualMode: "full-plus-inset",
        expectedSound:
          "An edge or growl appearing around the bottom of the sound, following Cutoff as you move it.",
        whyItMatters:
          "Brightness and bite are different things. A bass usually wants little of the first and some of the second, which is why these two knobs are worth separating in your head.",
        checkpoint:
          "There is some character around the low end that was not there before.",
        recoveryHelp:
          "Turn Resonance back down if it has become a whistle. Bass sounds usually want less of this than you first think.",
        nextHint: "Now how each note starts and stops.",
      },
      {
        id: "I01-S05",
        title: "Make it start and stop cleanly",
        instruction:
          "Turn the AMP/ENV Envelope knob to the left, then play two notes one after the other.",
        detail:
          "Left gives a shorter sound with a stronger attack. A bass usually wants to arrive the instant you press and get out of the way before the next note, rather than running into it.",
        hardwareTargets: ["envelopeKnob"],
        visualMode: "full-plus-inset",
        expectedSound:
          "Notes that land immediately and end cleanly, instead of blurring into each other.",
        whyItMatters:
          "This is what separates a bass that works under a beat from one that turns into mud. Two notes close together is the test — if you cannot hear the gap, the envelope is too long.",
        checkpoint:
          "You can play two notes in a row and hear both of them distinctly.",
        recoveryHelp:
          "Turn the knob back toward the middle if it has become too clipped to hear properly. There is no correct setting — the test is whether two quick notes stay separate.",
        nextHint: "One optional extra, if it needs more weight.",
      },
      {
        id: "I01-S06",
        title: "Optional: add weight underneath",
        instruction:
          "If the sound is not heavy enough, press the Sub OSC button and play a low key again.",
        detail:
          "This layers an extra square wave below what you already have. Roland gives two settings: one octave down when the indicator is lit, and two octaves down when it blinks. Press again to step between them and off.",
        hardwareTargets: ["subOscButton"],
        visualMode: "full-plus-inset",
        expectedSound: "The same note, noticeably heavier and deeper underneath.",
        whyItMatters:
          "This is the one control on the Analog Synth part that is genuinely about being a bass. If a sound is nearly right but feels thin, this is usually the fastest fix.",
        checkpoint:
          "You have either added weight underneath the sound, or decided it did not need any.",
        recoveryHelp:
          "Keep pressing Sub OSC to step through the settings until the indicator is off again. There is no separate off switch.",
        nextHint: "Another optional one, if you want more or less buzz.",
      },
      {
        id: "I01-S07",
        title: "Optional: change the raw waveform",
        instruction:
          "If you want a different character underneath everything, press the Oscillator button and listen.",
        detail:
          "It steps between three raw waveforms and the lit indicator shows which is selected. Broadly: one is buzzy and full, one is soft and rounded, one is hollow. You do not need to know which is which — press and listen.",
        hardwareTargets: ["oscillatorButton"],
        visualMode: "full-plus-inset",
        expectedSound:
          "Three clearly different raw tones underneath the shaping you have already done.",
        whyItMatters:
          "This is the deepest control on this part, and it is last on purpose. Changing it usually means redoing the filter, which is why reshaping an existing sound gets you further than starting from a waveform.",
        checkpoint:
          "You have either settled on a waveform you prefer, or left it where it was.",
        recoveryHelp:
          "Keep pressing to step on round to where you started. If the sound has stopped working, go back to Cutoff — a different waveform usually needs the filter set differently.",
        nextHint: "Two documented limits worth knowing about this part.",
      },
      {
        id: "I01-S08",
        title: "What this part will and will not do",
        instruction: "Play your bass high up the keyboard, then low again.",
        detail:
          "Roland documents two things about the Analog Synth part. Only one kind of filter is available, so the FILTER Type button has almost nothing to offer here. And because of the analog circuitry, the square wave and the sub-oscillator may not produce sound in the upper range of the keyboard.",
        hardwareTargets: ["analogSynthButton", "keys"],
        visualMode: "full-plus-inset",
        expectedSound:
          "Your bass working well low down, and possibly thinning out or dropping away high up.",
        whyItMatters:
          "Both of these look like faults and are not. Knowing them means you will not spend twenty minutes trying to fix silence at the top of the keyboard on a sound that was only ever meant to live at the bottom.",
        checkpoint:
          "You know where on the keyboard this sound is meant to be played.",
        recoveryHelp:
          "If the top of the keyboard is silent, play lower — that is the documented behaviour, not a fault. If you need a bass that plays high as well, build it on a digital part instead, where these limits do not apply.",
        nextHint: "Now the only test that matters.",
      },
      {
        id: "I01-S09",
        title: "Hear it under a pattern",
        instruction: "Press Play/Stop and play your bass along with the pattern.",
        detail:
          "A bass is judged underneath other things, never on its own. Listen for whether it holds the bottom without covering everything else up.",
        hardwareTargets: ["playStopButton", "keys"],
        visualMode: "full",
        expectedSound:
          "Your bass sitting under the pattern — present and solid, but not swamping the drums.",
        whyItMatters:
          "A bass that sounds enormous on its own is usually too much in context, and one that sounds thin alone is often exactly right. Only this test tells you which you have.",
        checkpoint:
          "You have heard your bass against a pattern and know whether it needs more or less of anything.",
        recoveryHelp:
          "Too muddy: close Cutoff further, or shorten the envelope. Too thin: turn Sub OSC on, or open Cutoff a little. Lost entirely: check the pattern is not simply louder than you are playing.",
        nextHint: "Last step, and it is an offer rather than an instruction.",
      },
      {
        id: "I01-S10",
        title: "Keep it, if you want it",
        instruction: "If you want this bass again, save the program.",
        detail:
          "The sound belongs to the program, so saving the program is the only way to keep it. If you were only practising, there is nothing to do — this tutorial does not need you to save anything.",
        hardwareTargets: ["shiftButton", "menuWriteButton"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "I07 builds a four-part program from scratch and does not depend on this bass existing. Saving here is for you, not for the course.",
        checkpoint:
          "You have a bass sound you made, and you have decided whether to keep it.",
        recoveryHelp:
          "N09 Save your work has the full procedure, including choosing a destination you are willing to overwrite. If you do not save, the sound is lost when you change program or switch off — which is fine if you were practising.",
        nextHint:
          "You can build a bass. Next, the opposite: something wide and slow.",
      },
    ],
  },
  I02: {
    id: "I02",
    level: "intermediate",
    order: 2,
    title: "Build a pad sound",
    shortTitle: "Pad sound",
    summary:
      "Build something wide and slow that sits behind everything else. A pad is the opposite of a bass in almost every setting, and it is the easiest way to hear what the envelope really does.",
    estimatedMinutes: 12,
    prerequisites: ["I01"],
    learningGoals: [
      "Start from a sustained tone and make it slower and softer.",
      "Choose where a pad sits on the keyboard.",
      "Add movement and space so it never sits still.",
      "Judge a pad by what it does behind other sounds.",
    ],
    // Source record: docs/tutorials/I02-SOURCE-NOTES.md
    // I02 starts INDEPENDENTLY from a suitable existing Digital tone
    // (PRODUCT-CURRICULUM-MASTER-PLAN.md sec 10). It does not depend on
    // I01's bass surviving, saved or otherwise.
    //
    // No partials curriculum: the three-partial structure of a digital tone
    // is never mentioned. No chord language -- "hold several keys".
    // No save requirement.
    steps: [
      {
        id: "I02-S01",
        title: "Protect any work you want to keep",
        instruction: "Decide whether this program holds work you have not saved.",
        detail:
          "You will select a tone and edit it, and both replace what is loaded. If you built a bass in I01 and want it, save it before you carry on — this tutorial does not need it and will change whatever part you point it at.",
        hardwareTargets: ["toneButtons"],
        visualMode: "full",
        whyItMatters:
          "This tutorial starts from scratch on purpose. Nothing here depends on I01, so there is no reason to be carrying an unsaved bass into it.",
        checkpoint:
          "You have decided: either there is nothing here to keep, or you have saved it first.",
        recoveryHelp:
          "N09 Save your work teaches saving. If you would rather build the pad somewhere else entirely, step to another program with Value + first — that discards anything unsaved here, which is the choice you are making.",
        nextHint: "Now find something that holds.",
      },
      {
        id: "I02-S02",
        title: "Start from something sustained",
        instruction:
          "Press Digital Synth 1, then use the Category dial and Tone buttons to find a sound that keeps going while you hold it.",
        detail:
          "You are looking for something that holds steadily rather than plucking and dying away. It does not have to be a pad already — anything sustained will do.",
        hardwareTargets: ["digitalSynth1Button", "categoryDial", "toneButtons"],
        visualMode: "full-plus-inset",
        expectedSound:
          "A sound that keeps sounding for as long as you hold the key down.",
        whyItMatters:
          "Everything in this tutorial makes a sound slower and softer. Starting from something that already sustains means you are refining rather than fighting the tone you picked.",
        checkpoint: "You have a sustained sound you can hold and hear clearly.",
        recoveryHelp:
          "If everything you find stops immediately, turn the Category dial to a different position and try again — strings and pad-like categories are the easiest place to find something that holds.",
        nextHint: "Now make it arrive slowly and leave slowly.",
      },
      {
        id: "I02-S03",
        title: "Make it slow at both ends",
        instruction:
          "Turn the AMP/ENV Envelope knob to the right, then play a key and let go.",
        detail:
          "Right makes the attack softer and the release longer — both of the things a pad wants, from one knob. Go far enough that the sound swells in rather than landing, and carries on after you let go.",
        hardwareTargets: ["envelopeKnob"],
        visualMode: "full-plus-inset",
        expectedSound:
          "The sound fading in over a moment, then carrying on and fading away after your hands have left.",
        whyItMatters:
          "This is the single biggest difference between a pad and everything else, and it is the same knob you turned the other way for the bass in I01. One control, two opposite sounds.",
        checkpoint:
          "The sound arrives gradually and continues after you release the key.",
        recoveryHelp:
          "Turn the knob back toward the middle if the attack has become so slow that short notes never sound at all. That is the usual sign of going too far.",
        nextHint: "Now soften the tone itself.",
      },
      {
        id: "I02-S04",
        title: "Make it smoother and darker",
        instruction:
          "Hold some keys and turn Cutoff down until the sound stops being bright, keeping Resonance low.",
        detail:
          "A pad wants to be felt rather than noticed. Take enough top off that it stops competing for attention, and leave Resonance alone — edge is the last thing this sound needs.",
        hardwareTargets: ["cutoffKnob", "resonanceKnob"],
        visualMode: "full-plus-inset",
        expectedSound:
          "Something softer and further away, without the bright edge it had.",
        whyItMatters:
          "The reason pads sit behind other things is mostly that they are darker than them. Brightness is what pulls a sound forward, so taking it away is what pushes a sound back.",
        checkpoint:
          "The sound is noticeably softer and less bright than the tone you started from.",
        recoveryHelp:
          "Open Cutoff back up if it has gone so dark that it disappears. If it sounds hollow or whistly rather than soft, Resonance is too high — turn it down.",
        nextHint: "Now decide where on the keyboard it lives.",
      },
      {
        id: "I02-S05",
        title: "Choose where it sits",
        instruction:
          "Play your pad low, then high, then use the OCTAVE buttons to move the keyboard to wherever it sounds best.",
        detail:
          "Pads usually work in the middle and upper middle. Too low and they turn to mud; too high and they thin out. Move the keyboard rather than your hands.",
        hardwareTargets: ["octaveButtons", "keys"],
        visualMode: "full-plus-inset",
        expectedSound:
          "The same pad sounding muddy low down, thin high up, and full somewhere in between.",
        whyItMatters:
          "Register is a sound-design decision, not just a playing one. The same tone can be unusable in one octave and exactly right in another, and moving the whole keyboard is quicker than remembering to play somewhere else.",
        checkpoint:
          "You have found a register where the pad sounds full rather than muddy or thin.",
        recoveryHelp:
          "Press both OCTAVE buttons together to return the keyboard to 0 if you have lost track. The octave setting belongs to the program, so it is part of what a save keeps.",
        nextHint: "Now stop it sitting perfectly still.",
      },
      {
        id: "I02-S06",
        title: "Add slow movement",
        instruction:
          "Hold some keys, turn the LFO Rate down low, then bring Depth up a small amount.",
        detail:
          "You want movement slow enough that you notice it only after a few seconds. Fast movement makes it an effect; slow movement makes it feel alive.",
        hardwareTargets: ["lfoRateKnob", "lfoDepthKnob"],
        visualMode: "full-plus-inset",
        expectedSound:
          "The held sound drifting gently rather than sitting perfectly still.",
        whyItMatters:
          "A completely static sound gets boring within seconds when it is held for a long time — which is exactly what a pad is for. A small amount of slow movement is what stops that happening.",
        checkpoint:
          "There is movement in the sound that takes a few seconds to notice.",
        recoveryHelp:
          "Turn Depth back to zero to remove it entirely. If it wobbles obviously rather than drifting, either Depth is too high or Rate is too fast — try Rate first.",
        nextHint: "Now put it in a big space.",
      },
      {
        id: "I02-S07",
        title: "Push it back with reverb",
        instruction:
          "Turn Reverb up further than you would for a bass, and add a little Delay if you like it.",
        detail:
          "This is the one sound where a lot of reverb is usually right. It is what puts the pad behind everything else rather than beside it.",
        hardwareTargets: ["reverbKnob", "delayKnob"],
        visualMode: "full-plus-inset",
        expectedSound:
          "The pad moving away from you into a larger space, its edges blurring.",
        whyItMatters:
          "Effects settings are shared by the whole program, so a lot of reverb here affects everything. That is worth knowing now, because it is exactly the conflict I06 is about.",
        checkpoint: "The pad sounds further away than it did.",
        recoveryHelp:
          "Press Effects On/Off to hear it without any effects and check you have not overdone it. Turning the Reverb knob down is the other way back.",
        nextHint: "Now hear what it does with several keys.",
      },
      {
        id: "I02-S08",
        title: "Hold several keys",
        instruction: "Hold two or three keys down together and let them ring.",
        detail:
          "A pad is usually played this way rather than one note at a time. Keys close to each other tend to blend; keys far apart tend to sound like two separate things.",
        hardwareTargets: ["keys"],
        visualMode: "full",
        expectedSound:
          "A wide, sustained wash that fills out considerably compared with a single note.",
        whyItMatters:
          "Most of a pad's width comes from holding several keys, not from the sound itself. Judging one from a single note will always undersell it.",
        checkpoint:
          "You have held several keys and heard the sound fill out.",
        recoveryHelp:
          "If it turns muddy with several keys down, that usually means the register is too low or the filter is too open — go back a couple of steps and adjust either.",
        nextHint: "Now the test that matters.",
      },
      {
        id: "I02-S09",
        title: "Hear it behind a pattern",
        instruction: "Press Play/Stop and hold your pad over the top of the pattern.",
        detail:
          "A pad is judged by what it does behind other things, not on its own. Listen for whether it fills the space without getting in the way.",
        hardwareTargets: ["playStopButton", "keys"],
        visualMode: "full",
        expectedSound:
          "The pattern with a bed of sound behind it — noticeably fuller, without the pad drawing attention.",
        whyItMatters:
          "If you can pick the pad out easily it is probably too bright or too loud. A good one is most obvious when you take it away, which is worth trying.",
        checkpoint:
          "You have heard the pad behind a pattern, and can say whether it needs more or less of anything.",
        recoveryHelp:
          "Too obvious: close Cutoff further, or turn its Level down in the mix. Inaudible: open Cutoff a little, or check the pad's part is not muted — hold Shift and press its Part Select button.",
        nextHint: "Last step, and it is an offer rather than an instruction.",
      },
      {
        id: "I02-S10",
        title: "Keep it, if you want it",
        instruction: "If you want this pad again, save the program.",
        detail:
          "The sound belongs to the program, so saving the program is the only way to keep it. If you were only practising, there is nothing to do.",
        hardwareTargets: ["shiftButton", "menuWriteButton"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "I07 builds its own program from scratch and does not depend on this pad existing. Saving here is for you, not for the course.",
        checkpoint:
          "You have a pad you made, and you have decided whether to keep it.",
        recoveryHelp:
          "N09 Save your work has the full procedure. If you do not save, the sound is lost when you change program or switch off — which is fine if you were practising.",
        nextHint:
          "You can build something that sits behind. Next, something that sits in front.",
      },
    ],
  },
  I03: {
    id: "I03",
    level: "intermediate",
    order: 3,
    title: "Build a lead sound",
    shortTitle: "Lead sound",
    summary:
      "Build something that sits in front of everything else — bright, immediate, and worth playing a line on. Then play it, with the Pitch and Mod controls doing the expression.",
    estimatedMinutes: 12,
    prerequisites: ["I02"],
    learningGoals: [
      "Start from a bright tone and make it more focused.",
      "Make notes arrive the instant you press a key.",
      "Play a line expressively with the Pitch and Mod controls.",
      "Check that a lead cuts through a busy pattern.",
    ],
    // Source record: docs/tutorials/I03-SOURCE-NOTES.md
    // I03 reshapes an existing bright Tone (PRODUCT-CURRICULUM-MASTER-PLAN.md
    // sec 10): brighter/focused filter, faster envelope, Pitch/Mod, tasteful
    // Delay/Reverb, and a playable result.
    //
    // Portamento is ONE optional step pointing at Quick Reference, per the
    // master plan sec 12. Analog Feel and Ring Mod are deliberately absent --
    // the brief rules out making either the lesson, and neither is needed for
    // a lead.
    //
    // No save requirement.
    steps: [
      {
        id: "I03-S01",
        title: "Protect any work you want to keep",
        instruction: "Decide whether this program holds work you have not saved.",
        detail:
          "As before: selecting a tone and editing it replaces what is loaded. If your pad from I02 is here and unsaved, save it first.",
        hardwareTargets: ["toneButtons"],
        visualMode: "full",
        whyItMatters:
          "This tutorial uses the second digital part, so a pad on the first one survives — but the program as a whole is still what a save keeps, and an unsaved pad is still an unsaved pad.",
        checkpoint:
          "You have decided: either there is nothing here to keep, or you have saved it first.",
        recoveryHelp:
          "N09 Save your work teaches saving. Nothing in this tutorial needs your pad to exist, so you can also simply move to another program with Value + — which discards anything unsaved here.",
        nextHint: "Now find something bright to start from.",
      },
      {
        id: "I03-S02",
        title: "Start from something bright",
        instruction:
          "Press Digital Synth 2, then use the Category dial and Tone buttons to find a forward, bright sound.",
        detail:
          "Using the second digital part leaves the first one free, in case your pad is there. You want a starting sound with plenty of top end — a lead has to be heard over everything else.",
        hardwareTargets: ["digitalSynth2Button", "categoryDial", "toneButtons"],
        visualMode: "full-plus-inset",
        expectedSound: "A bright, forward sound rather than a soft or distant one.",
        whyItMatters:
          "You can make a bright sound duller far more easily than you can make a dull one cut through. Starting bright leaves you room to move in the direction that works.",
        checkpoint: "You have a bright sound you would be happy to play a line on.",
        recoveryHelp:
          "Turn the Category dial to another position if everything in this one is soft. Lead and synth categories are the obvious places to look.",
        nextHint: "Now make it respond the instant you play.",
      },
      {
        id: "I03-S03",
        title: "Make it immediate",
        instruction:
          "Turn the AMP/ENV Envelope knob to the left, then play a short line.",
        detail:
          "Left gives a shorter sound with a stronger attack. A lead has to arrive the moment your finger lands — any delay and the line stops feeling like playing.",
        hardwareTargets: ["envelopeKnob"],
        visualMode: "full-plus-inset",
        expectedSound:
          "Notes that start the instant you press, with no swell at the front.",
        whyItMatters:
          "This is the same knob that made the pad slow in I02, turned the other way. Attack time is most of what decides whether a sound feels like an instrument you are playing or a texture you are holding.",
        checkpoint: "Notes arrive immediately when you press a key.",
        recoveryHelp:
          "If notes have become so short that a held key does not sustain, come back toward the middle — you want a fast start, not necessarily a short note.",
        nextHint: "Now sharpen it up.",
      },
      {
        id: "I03-S04",
        title: "Make it brighter and more focused",
        instruction:
          "Open Cutoff up, then add a small amount of Resonance and move Cutoff again.",
        detail:
          "Brightness gets it heard; a little resonance gives it a focus point so it sounds like one thing rather than a wash. A little goes a long way here.",
        hardwareTargets: ["cutoffKnob", "resonanceKnob"],
        visualMode: "full-plus-inset",
        expectedSound:
          "A sharper, more pointed sound with a clear character to it.",
        whyItMatters:
          "A lead competes with everything else for the same attention. Brightness and focus are what win that competition — turning it up louder mostly just makes everything worse.",
        checkpoint:
          "The sound has an edge to it that it did not have when you started.",
        recoveryHelp:
          "Back Resonance off if it has started to whistle, and watch the volume — high resonance with an open filter can get loud suddenly. Turn Master Volume down before exploring the top of either knob.",
        nextHint: "Now give it somewhere to be.",
      },
      {
        id: "I03-S05",
        title: "Add a little space",
        instruction:
          "Turn Delay up a little, and add just enough Reverb to stop it sounding bare.",
        detail:
          "Less than you gave the pad. A lead wants to stay in front, and both of these push a sound backward if you use too much.",
        hardwareTargets: ["delayKnob", "reverbKnob"],
        visualMode: "full-plus-inset",
        expectedSound:
          "Your line with repeats trailing behind it, sitting in a space rather than in a vacuum.",
        whyItMatters:
          "Delay suits leads better than heavy reverb does: it fills space between notes without blurring the note you are playing now. That distinction is most of what I06 is about.",
        checkpoint:
          "There is some space around the sound and it is still clearly in front.",
        recoveryHelp:
          "Press Effects On/Off to compare with none at all. If the line has started to smear, it is usually reverb rather than delay — turn Reverb down first.",
        nextHint: "Now play it properly.",
      },
      {
        id: "I03-S06",
        title: "Bend into a note",
        instruction:
          "Hold a note and move the Pitch control away from you and back, then let it go.",
        detail:
          "Bend up into a note, or bend one you are already holding. The control springs back to the centre on its own, so it is safe to be bold with.",
        hardwareTargets: ["pitchControl"],
        visualMode: "full-plus-inset",
        expectedSound: "The note sliding in pitch and returning when you let go.",
        whyItMatters:
          "This is the single most expressive thing on the instrument, and it costs nothing to try because it puts itself back. A lead line without any of it sounds typed rather than played.",
        checkpoint: "You can bend a note deliberately, into and out of pitch.",
        recoveryHelp:
          "If the pitch does not move, make sure a key is held down at the same time — the control only affects notes that are already sounding.",
        nextHint: "Now add movement to the long notes.",
      },
      {
        id: "I03-S07",
        title: "Add vibrato to held notes",
        instruction:
          "Hold a long note and move the Mod control away from you, then bring it back before you let go.",
        detail:
          "Unlike Pitch, this one stays where you leave it. Use it on the long notes and bring it back afterwards, or everything you play from then on will waver.",
        hardwareTargets: ["modControl"],
        visualMode: "full-plus-inset",
        expectedSound:
          "A held note that starts steady and begins to waver as you move the control.",
        whyItMatters:
          "Held notes are where a lead sounds most artificial, because nothing is changing. Vibrato is the standard answer, and doing it by hand means you choose which notes get it.",
        checkpoint:
          "You can add a waver to a held note and take it away again.",
        recoveryHelp:
          "If everything is wobbling, the Mod control is still part-way up — move it fully toward yourself, which Roland describes as applying no effect.",
        nextHint: "One optional extra, if you want notes to slide.",
      },
      {
        id: "I03-S08",
        title: "Optional: make notes slide into each other",
        instruction:
          "If you want a sliding lead, press and hold Menu/Write until the PORTAMENTO screen appears.",
        detail:
          "A long press opens this screen — a different gesture from the short press that opens the Menu. On it, the Tap button turns portamento on and off, and the tempo knob sets how long the slide takes. Press Exit to leave. This step is optional and nothing later depends on it.",
        hardwareTargets: ["menuWriteButton", "tapButton"],
        visualMode: "full-plus-inset",
        expectedSound:
          "If you turn it on: the second note sliding up or down from the first instead of jumping to it.",
        whyItMatters:
          "It is a strong effect that suits some leads and ruins others, which is why it is offered rather than built in. Quick Reference has the procedure on its own if you want it again later without coming back here.",
        checkpoint:
          "Either you have heard notes slide into each other, or you skipped this step.",
        quickReference: ["portamento"],
        recoveryHelp:
          "Press Tap again on that screen to turn portamento off, then Exit. If a long press opened the ordinary Menu instead, you released too early — hold it down longer. Note that the tempo knob is setting portamento time on this screen, not tempo.",
        nextHint: "Now the test that matters.",
      },
      {
        id: "I03-S09",
        title: "Check it cuts through",
        instruction:
          "Press Play/Stop and play your line over the full pattern.",
        detail:
          "Listen for whether you can hear every note, including the quiet ones. If it disappears, the answer is usually brightness rather than volume.",
        hardwareTargets: ["playStopButton", "cutoffKnob"],
        visualMode: "full",
        expectedSound:
          "Your lead sitting clearly on top of the pattern rather than getting lost inside it.",
        whyItMatters:
          "Reaching for volume when a sound is buried is the commonest mistake there is, and it usually makes the problem worse. Open Cutoff first and see whether the sound simply needed to be brighter.",
        checkpoint:
          "You can hear your line clearly against everything else that is playing.",
        recoveryHelp:
          "Buried: open Cutoff, or add a little more Resonance for focus. Harsh: close Cutoff slightly. Still lost: mute the other parts one at a time with Shift and Part Select to find out what is covering it.",
        nextHint: "Last step, and it is an offer rather than an instruction.",
      },
      {
        id: "I03-S10",
        title: "Keep it, if you want it",
        instruction: "If you want this lead again, save the program.",
        detail:
          "The sound belongs to the program, so saving the program is the only way to keep it. If you were only practising, there is nothing to do.",
        hardwareTargets: ["shiftButton", "menuWriteButton"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "That is a bass, a pad and a lead — the three sounds nearly every piece of music needs. I07 builds a program with all three kinds in it, and does not depend on any of these surviving.",
        checkpoint:
          "You have a lead you made, and you have decided whether to keep it.",
        recoveryHelp:
          "N09 Save your work has the full procedure. If you do not save, the sound is lost when you change program or switch off — which is fine if you were practising.",
        nextHint:
          "You have built three sounds. Next, compare filter and envelope settings side by side.",
      },
    ],
  },
  I04: {
    id: "I04",
    level: "intermediate",
    order: 4,
    title: "Filter and envelope shaping",
    shortTitle: "Filter and envelope",
    summary:
      "One sound, three versions. Make the same tone soft, then plucky, then biting, restoring it between each — and end up knowing which control to reach for when you want a particular result.",
    estimatedMinutes: 12,
    prerequisites: ["I03"],
    learningGoals: [
      "Make three clearly different versions of one sound.",
      "Restore a sound cleanly between experiments.",
      "Say which control did which job in each version.",
      "Choose controls deliberately to solve a stated sound goal.",
    ],
    // Source record: docs/tutorials/I04-SOURCE-NOTES.md
    // I04 is a COMPARATIVE LAB (PRODUCT-CURRICULUM-MASTER-PLAN.md sec 10):
    // one existing sound, roughly three contrasting versions, Cutoff /
    // Resonance / Envelope, restoring between experiments, then choosing
    // controls for a practical goal.
    //
    // Explicitly NOT here: an ADSR diagram lesson, filter-frequency theory,
    // a velocity-sensitivity curriculum, drum TVF/TVA architecture, or any
    // taxonomy for its own sake. Roland's four filter type names are never
    // listed. Every control used is on the panel.
    steps: [
      {
        id: "I04-S01",
        title: "Protect any work you want to keep",
        instruction: "Decide whether this program holds work you have not saved.",
        detail:
          "This tutorial edits one sound repeatedly and throws each version away. If there is something here you want, save it first — you will be deliberately destroying edits for the next half hour.",
        hardwareTargets: ["filterSection", "ampEnvSection"],
        visualMode: "full",
        whyItMatters:
          "Most tutorials risk your work by accident. This one does it on purpose, several times, as the method. That makes the preflight more important here than almost anywhere else.",
        checkpoint:
          "You have decided: either there is nothing here to keep, or you have saved it first.",
        recoveryHelp:
          "N09 Save your work teaches saving. If you would rather experiment somewhere disposable, step to another program with Value + first — that discards anything unsaved here, which is the choice you are making.",
        nextHint: "Now pick one sound and stay with it.",
      },
      {
        id: "I04-S02",
        title: "Choose one sound and stay with it",
        instruction:
          "Press Digital Synth 1 and find a bright sound that holds while you press a key.",
        detail:
          "One sound, for the whole tutorial. The point is to hear what the controls do, and that only works if the thing underneath them stops changing.",
        hardwareTargets: ["digitalSynth1Button", "toneButtons"],
        visualMode: "full-plus-inset",
        expectedSound: "A sustained sound with plenty of top end.",
        whyItMatters:
          "Bright and sustained gives you the most room to work: you can always take brightness away and shorten a note, but you cannot add either to a sound that never had it.",
        checkpoint:
          "You have one sustained, bright sound and you are going to leave the Tone buttons alone from here.",
        recoveryHelp:
          "If everything is short or dull, keep stepping with Tone + or turn the Category dial. This choice matters more than usual — a bad starting sound makes every experiment below harder to hear.",
        nextHint: "Before you change anything, learn the way back.",
      },
      {
        id: "I04-S03",
        title: "Learn the way back first",
        instruction: "Hold down Shift and press Enter.",
        detail:
          "That returns the original sound after you have edited it. Nothing has changed yet, so this does nothing right now — which is exactly why it is worth doing once, before it matters.",
        hardwareTargets: ["shiftButton", "enterButton"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "You are about to make three versions of this sound, and each one has to start from the same place or the comparison is worthless. This is the button that gets you back to that place.",
        checkpoint:
          "You have pressed the combination once and know where both buttons are without looking.",
        recoveryHelp:
          "Hold Shift down first, then press Enter. If a menu opened instead, you pressed Menu/Write — press Exit and try again. Remember this reaches the sound only: it does not undo effect settings or pattern work.",
        nextHint: "Version one: make it soft.",
      },
      {
        id: "I04-S04",
        title: "Version one: soft and distant",
        instruction:
          "Turn Cutoff well down, keep Resonance low, and turn the Envelope knob to the right. Then hold a key.",
        detail:
          "Three moves, all in the same direction: less top, no edge, slow at both ends. Listen to the result for a few seconds before moving on.",
        hardwareTargets: ["cutoffKnob", "resonanceKnob", "envelopeKnob"],
        visualMode: "full-plus-inset",
        expectedSound:
          "Something soft and unhurried that swells in, sits behind you, and fades out after you let go.",
        whyItMatters:
          "This is the pad shape from I02, arrived at deliberately rather than by following steps. Naming the result — soft, distant, slow — is what lets you ask for it again later.",
        checkpoint:
          "You have a version you would describe as soft, and you could say which three controls made it so.",
        recoveryHelp:
          "If it has disappeared, Cutoff is too far down — bring it back until the sound returns. If short notes never sound at all, the Envelope knob is too far right.",
        nextHint: "Now put it back and go the other way.",
      },
      {
        id: "I04-S05",
        title: "Version two: short and plucky",
        instruction:
          "Hold Shift and press Enter to restore, then turn the Envelope knob well to the left and set Cutoff about halfway.",
        detail:
          "Restore first — otherwise you are editing version one rather than starting again. Then go to the opposite end of the same knob.",
        hardwareTargets: ["shiftButton", "enterButton", "envelopeKnob"],
        visualMode: "full-plus-inset",
        expectedSound:
          "Notes that land hard and stop quickly, with a definite point to each one.",
        whyItMatters:
          "Same sound, same knob, opposite end, completely different instrument. That is the thing worth taking away from this tutorial: a small number of controls covers an enormous range if you know which direction you want.",
        checkpoint:
          "You have a version you would describe as plucky, and it started from the same tone as version one.",
        recoveryHelp:
          "If it still sounds like version one, the restore did not take — hold Shift down first, then press Enter, and check the tone number reappears on the lower line of the display.",
        nextHint: "Put it back once more, and go somewhere sharper.",
      },
      {
        id: "I04-S06",
        title: "Version three: bright and biting",
        instruction:
          "Restore again with Shift and Enter, then open Cutoff up, turn Resonance up a fair way, and move Cutoff slowly.",
        detail:
          "This is the one that can get loud, so turn Master Volume down before you start. Move Cutoff slowly and listen to the peak following it.",
        hardwareTargets: ["shiftButton", "cutoffKnob", "resonanceKnob"],
        visualMode: "full-plus-inset",
        expectedSound:
          "A sharp, vocal, whistling character with a peak that sweeps as you move Cutoff.",
        whyItMatters:
          "Resonance is the control the other two versions barely used, and this is what it is for. Hearing it on its own terms is why the lab makes three versions rather than two.",
        checkpoint:
          "You have a version you would describe as biting, and you know which knob is responsible.",
        recoveryHelp:
          "Turn Resonance down if it becomes painful or uncontrollably loud, and keep Master Volume low while you explore. Shift and Enter restores if you want to start over.",
        nextHint: "Now line the three of them up.",
      },
      {
        id: "I04-S07",
        title: "Which control did which job",
        instruction:
          "Without touching anything, say what each of the three controls actually changed.",
        detail:
          "Cutoff decided how bright. Resonance decided how much edge. The Envelope knob decided how the note started and ended. Three versions, three controls, and every version was a different combination of the same three decisions.",
        hardwareTargets: ["cutoffKnob", "resonanceKnob", "envelopeKnob"],
        visualMode: "full",
        whyItMatters:
          "Sound design stops being guesswork at the moment you can name the control that fixes a specific complaint. Too dull is Cutoff. Too bland is Resonance. Too slow is the Envelope knob.",
        checkpoint:
          "You can match each of the three complaints — too dull, too bland, too slow — to the control that fixes it.",
        recoveryHelp:
          "If any of them is not clear, go back and make that version again. Two passes over the same three controls is worth more than reading about a fourth.",
        nextHint: "Now use that to solve something.",
      },
      {
        id: "I04-S08",
        title: "Now solve a real goal",
        instruction:
          "Restore the sound, then make it into something that could sit underneath a beat without covering it up.",
        detail:
          "No instructions this time. You know what that needs: less brightness, a short envelope so notes get out of the way, and only as much edge as keeps it interesting.",
        hardwareTargets: ["cutoffKnob", "resonanceKnob", "envelopeKnob"],
        visualMode: "full",
        expectedSound:
          "Something darker and shorter than you started with, that leaves room above it.",
        whyItMatters:
          "This is the difference between knowing what a control does and knowing when to use it. The three versions were exercises; this one has a purpose, and the purpose decides the settings.",
        checkpoint:
          "You have made a sound to a stated brief, choosing the controls yourself.",
        recoveryHelp:
          "Stuck? Work backwards from what is wrong with it. If it covers everything up, it is too bright or too long. If you cannot hear it at all, it is too dark or too short. Shift and Enter restores if you want a clean start.",
        nextHint: "Now find out whether it worked.",
      },
      {
        id: "I04-S09",
        title: "Test it against the pattern",
        instruction: "Press Play/Stop and play your sound along with the pattern.",
        detail:
          "This is the only opinion that counts. A sound that seemed right on its own often turns out to be too much or too little in company.",
        hardwareTargets: ["playStopButton", "keys"],
        visualMode: "full",
        expectedSound:
          "Your sound sitting with the pattern rather than fighting it or vanishing into it.",
        whyItMatters:
          "Judging a sound in isolation is how everything ends up too bright and too long. Context is the test, and it is available in one button press.",
        checkpoint:
          "You have heard your sound in context and know whether it needs another adjustment.",
        recoveryHelp:
          "Adjust and listen again — that loop is the whole method. If it is buried, open Cutoff a little rather than reaching for volume.",
        nextHint: "Last step: decide what happens to it.",
      },
      {
        id: "I04-S10",
        title: "Keep it or put it back",
        instruction:
          "Either save the program to keep this version, or hold Shift and press Enter to restore the original and leave nothing behind.",
        detail:
          "Both are reasonable endings. If you were practising, restoring is tidy; if you made something you like, saving keeps it.",
        hardwareTargets: ["shiftButton", "enterButton"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "Knowing you can walk away cleanly is what makes a lab like this safe to run. Nothing here has to be kept, and nothing here has to be lost.",
        checkpoint:
          "You have either saved your version or restored the original, on purpose.",
        recoveryHelp:
          "N09 Save your work has the full saving procedure. If you restore and then wish you had kept it, the version cannot be recovered — but you know exactly which three controls made it.",
        nextHint:
          "You can shape a sound to a brief. Next, make one move on its own.",
      },
    ],
  },
  I05: {
    id: "I05",
    level: "intermediate",
    order: 5,
    title: "LFO and movement",
    shortTitle: "LFO and movement",
    summary:
      "Make a sound move on its own. Slow movement, fast movement, and the amount that is just enough — then put some of it under your own hand instead of leaving it always on.",
    estimatedMinutes: 11,
    prerequisites: ["I04"],
    learningGoals: [
      "Set how much movement a sound has, and how fast.",
      "Tell what slow movement is for and what fast movement is for.",
      "Use movement sparingly rather than as an effect.",
      "Combine automatic movement with the Mod control.",
    ],
    // Source record: docs/tutorials/I05-SOURCE-NOTES.md
    // I05 is a MOVEMENT LAB (PRODUCT-CURRICULUM-MASTER-PLAN.md sec 10): one
    // sound, Rate and Depth, slow versus fast, sparing use, combined with
    // Mod, finishing with one moving texture.
    //
    // The brief names five things not to teach merely because the parameters
    // exist -- exhaustive destinations, Tempo Sync, Sync Note, Fade Time and
    // Key Trigger -- and none of them appears. Tone Edit is never opened;
    // every control is on the panel.
    //
    // Roland's note that the LFO does not affect the Drums part is taught,
    // because a learner who tries it there will otherwise assume it is broken.
    steps: [
      {
        id: "I05-S01",
        title: "Protect any work you want to keep",
        instruction: "Decide whether this program holds work you have not saved.",
        detail:
          "This tutorial edits the loaded sound. If there is something here you want, save it first.",
        hardwareTargets: ["lfoSection"],
        visualMode: "full",
        whyItMatters:
          "Movement settings belong to the sound, so they are unsaved edits like any other and are lost the moment you change program.",
        checkpoint:
          "You have decided: either there is nothing here to keep, or you have saved it first.",
        recoveryHelp:
          "N09 Save your work teaches saving. If you would rather experiment somewhere disposable, step to another program with Value + first — that discards anything unsaved here, which is the choice you are making.",
        nextHint: "Now pick a sound that will show movement.",
      },
      {
        id: "I05-S02",
        title: "Choose a sound that holds",
        instruction:
          "Press Digital Synth 1 and find a sound you can hold steadily on a key.",
        detail:
          "Movement needs something to happen to. A note that stops after half a second gives the LFO nothing to work with.",
        hardwareTargets: ["digitalSynth1Button", "toneButtons"],
        visualMode: "full-plus-inset",
        expectedSound: "A note you can hold that stays steady while you hold it.",
        whyItMatters:
          "Every judgement in this tutorial is about a sound that is already going. The longer it holds, the easier every comparison below becomes.",
        checkpoint: "You have a sustained sound and can hold it for several seconds.",
        recoveryHelp:
          "If nothing holds, turn the Category dial to another position. Note that this tutorial will not work on the Drums part — Roland states the LFO effect is not applied there.",
        nextHint: "Now turn the movement on.",
      },
      {
        id: "I05-S03",
        title: "How much movement",
        instruction:
          "Hold a key and turn the LFO Depth knob up from zero until the movement is obvious.",
        detail:
          "Go too far deliberately. You are finding the top of the range so that you know where the useful part of it is.",
        hardwareTargets: ["lfoDepthKnob"],
        visualMode: "full-plus-inset",
        expectedSound:
          "The held note going from perfectly still to obviously moving, and then to overdone.",
        whyItMatters:
          "Depth is the control that decides whether movement is a texture or an effect. Hearing the extreme first makes the small settings meaningful rather than arbitrary.",
        checkpoint: "You have heard the sound with far too much movement.",
        recoveryHelp:
          "Turn Depth back to zero to stop it entirely. If nothing happens at any setting, check that Drums is not the selected part — the LFO does not affect it.",
        nextHint: "Now change how fast it happens.",
      },
      {
        id: "I05-S04",
        title: "How fast",
        instruction:
          "With Depth still up, turn the LFO Rate knob slowly from one end to the other.",
        detail:
          "Listen to the whole range. At one end the sound barely drifts; at the other it flutters.",
        hardwareTargets: ["lfoRateKnob"],
        visualMode: "full-plus-inset",
        expectedSound:
          "The same amount of movement, happening slowly and then very fast.",
        whyItMatters:
          "Rate and Depth are easy to confuse because turning either one up makes a sound more obviously modulated. They do different jobs, and hearing them separately is what keeps them apart.",
        checkpoint:
          "You can hear the difference between changing Rate and changing Depth.",
        recoveryHelp:
          "If it all sounds the same, turn Depth up further while you move Rate — with very little depth, speed is hard to hear.",
        nextHint: "Now decide what each speed is for.",
      },
      {
        id: "I05-S05",
        title: "What slow is for, and what fast is for",
        instruction:
          "Set Rate slow and listen for a few seconds. Then set it fast and listen again.",
        detail:
          "Slow movement takes several seconds to come round, and mostly makes a sound feel unfixed and alive. Fast movement is heard as a character of the sound itself — a wobble or a shimmer that is part of what it is.",
        hardwareTargets: ["lfoRateKnob"],
        visualMode: "full-plus-inset",
        expectedSound:
          "Slow: a sound that never quite settles. Fast: a sound with a texture built into it.",
        whyItMatters:
          "These are two different tools that happen to share a knob. A pad usually wants the first; a lead or a special effect usually wants the second.",
        checkpoint:
          "You can say which speed you would use to make a held sound feel alive.",
        recoveryHelp:
          "If the difference is not obvious, hold the note longer at the slow setting — slow movement by definition takes time to reveal itself.",
        nextHint: "Now use much less of it.",
      },
      {
        id: "I05-S06",
        title: "Now use far less",
        instruction:
          "Turn Depth down until you can only just tell the movement is there, then stop.",
        detail:
          "The target is the smallest amount that makes a difference. If you are not sure whether it is on, turn it to zero and back and listen for what you lost.",
        hardwareTargets: ["lfoDepthKnob"],
        visualMode: "full-plus-inset",
        expectedSound:
          "A sound that seems steady until you remove the movement and notice it go flat.",
        whyItMatters:
          "This is the whole lesson. Almost every good use of an LFO is a small one, and almost every beginner's use is a large one. The way to find the right amount is to approach it from below rather than from above.",
        checkpoint:
          "The movement is barely noticeable on its own but clearly missed when you remove it.",
        recoveryHelp:
          "Toggle Depth between zero and your setting a few times. If you cannot hear a difference, you have gone too small — come up a little.",
        nextHint: "Now change what is moving.",
      },
      {
        id: "I05-S07",
        title: "Change what moves",
        instruction:
          "Turn the LFO Destination knob to each position in turn, holding a key each time.",
        detail:
          "The lit indicator shows which is selected. The same movement applied to different things gives you a waver in pitch, a sweep in tone, or a pulse in volume.",
        hardwareTargets: ["lfoDestinationKnob"],
        visualMode: "full-plus-inset",
        expectedSound:
          "Three quite different results from the same Rate and Depth: wavering, sweeping, or pulsing.",
        whyItMatters:
          "Depth and Rate decide how much and how fast; this decides what. It is the difference between a sound that shimmers and one that throbs, and it costs one knob turn to try all three.",
        checkpoint:
          "You have heard the same movement produce at least two clearly different effects.",
        recoveryHelp:
          "Turn Depth up temporarily if the differences are hard to hear, then bring it back down once you have chosen. Nothing here is destructive.",
        nextHint: "Now put some of it under your own hand.",
      },
      {
        id: "I05-S08",
        title: "Put some of it under your hand",
        instruction:
          "Leave a small amount of automatic movement, then hold a long note and bring the Mod control up.",
        detail:
          "The LFO gives you movement that is always there. The Mod control gives you movement you ask for. Using both means the sound is quietly alive all the time and can be pushed further when you want it.",
        hardwareTargets: ["modControl", "lfoDepthKnob"],
        visualMode: "full-plus-inset",
        expectedSound:
          "A sound that drifts gently on its own, and wavers much more strongly while you hold the Mod control up.",
        whyItMatters:
          "Movement that is always at full strength stops being expressive within seconds. Keeping most of it on a control you operate means you decide which notes deserve it.",
        checkpoint:
          "You can hear a small constant movement, and a larger one you control by hand.",
        recoveryHelp:
          "Bring the Mod control fully toward yourself when you have finished — it stays where you leave it, and everything you play afterwards will waver otherwise.",
        nextHint: "Now commit to one setting.",
      },
      {
        id: "I05-S09",
        title: "Make one moving texture",
        instruction:
          "Settle Rate, Depth and Destination where you actually like them, and hold a long note.",
        detail:
          "One sound, one set of decisions. This is the thing you are taking away from the tutorial, so it is worth spending a minute on rather than accepting wherever the knobs happen to be.",
        hardwareTargets: ["lfoRateKnob", "lfoDepthKnob", "lfoDestinationKnob"],
        visualMode: "full-plus-inset",
        expectedSound:
          "A sustained sound with movement you chose deliberately — enough to be interesting, not so much that it distracts.",
        whyItMatters:
          "Three knobs, set on purpose, is what separates a moving texture from a sound that is merely wobbling. Being able to make one is the point of this tutorial.",
        checkpoint:
          "You have a moving sound you would be happy to use, and you chose all three settings.",
        recoveryHelp:
          "If it will not settle, turn Depth to zero and build up again from nothing — that is usually faster than adjusting from too much.",
        nextHint: "Last step: hear it where it will live.",
      },
      {
        id: "I05-S10",
        title: "Hear it in context, then decide",
        instruction:
          "Press Play/Stop, hold your texture over the pattern, then either save the program or turn Depth back to zero.",
        detail:
          "Movement that was subtle on its own often disappears entirely in company, and movement that seemed right can turn out to be far too much. Adjust, then decide whether to keep it.",
        hardwareTargets: ["playStopButton", "lfoDepthKnob"],
        visualMode: "full",
        expectedSound:
          "Your moving texture against a pattern, either sitting nicely or asking to be adjusted.",
        whyItMatters:
          "A busy pattern hides small movement and exaggerates large movement, so the setting that works alone is rarely the setting that works in a track. This is the check that catches it.",
        checkpoint:
          "You have heard your texture in context and decided whether to keep it.",
        recoveryHelp:
          "N09 Save your work has the saving procedure. To leave nothing behind, turn Depth to zero and move the Mod control fully toward yourself — that puts the sound back to still.",
        nextHint:
          "You can make a sound move. Next, put the whole program in a space.",
      },
    ],
  },
  I06: {
    id: "I06",
    level: "intermediate",
    order: 6,
    title: "Effects and space",
    shortTitle: "Effects and space",
    summary:
      "Effects judged in company rather than alone. Find the point where each one stops helping, hear why a bass and a pad want completely different amounts, and back the whole lot down until the groove is clear again.",
    estimatedMinutes: 13,
    prerequisites: ["I05"],
    learningGoals: [
      "Find the line between too dry, useful and too much.",
      "Hear why different sounds want different amounts of the same effect.",
      "Understand that one set of effects serves the whole program.",
      "Reduce effects when they start costing you clarity.",
    ],
    // Source record: docs/tutorials/I06-SOURCE-NOTES.md
    // I06 is PRACTICAL BALANCING IN GROOVE CONTEXT
    // (PRODUCT-CURRICULUM-MASTER-PLAN.md sec 10): Reverb, Delay, Effect 1,
    // Effect 2, the too dry / useful / too much judgement, comparing across
    // bass, pad and lead, and backing effects down for clarity.
    //
    // Explicitly NOT here: algorithm taxonomy, a deep routing curriculum, or
    // the Side Chain Compressor. Effects Edit is never opened and no send
    // level or Part Output parameter is touched -- every control is on the
    // panel. The shared-effects fact IS taught, because it is what makes the
    // balancing problem real.
    steps: [
      {
        id: "I06-S01",
        title: "Protect any work you want to keep",
        instruction:
          "Decide whether this program holds effect settings you have not saved.",
        detail:
          "Effect settings belong to the program, and this tutorial will move all four knobs repeatedly. If you have been building something here, save it first.",
        hardwareTargets: ["effectsSection"],
        visualMode: "full",
        whyItMatters:
          "Unlike sound edits, there is no documented one-button way back from an effect change. That makes the decision to go on worth making before you start rather than after.",
        checkpoint:
          "You have decided: either there is nothing here to keep, or you have saved it first.",
        recoveryHelp:
          "N09 Save your work teaches saving. If you would rather work somewhere disposable, step to another program with Value + first — that discards anything unsaved here, which is the choice you are making.",
        nextHint: "Now get something playing with more than one part in it.",
      },
      {
        id: "I06-S02",
        title: "Get a groove going",
        instruction:
          "Press Play/Stop and find a program whose pattern has several parts playing.",
        detail:
          "Everything in this tutorial is a judgement about how sounds fit together, so a single sound on its own will not do. Any preset program with a busy pattern works.",
        hardwareTargets: ["playStopButton", "programValueButtons"],
        visualMode: "full-plus-inset",
        expectedSound: "A pattern with drums and at least one or two other parts.",
        whyItMatters:
          "Effects sound better on a single sound played alone, always. That is exactly why they have to be judged in company — the solo impression is the one that misleads you.",
        checkpoint: "A pattern with several parts is playing.",
        recoveryHelp:
          "B08 covers finding a program with a pattern. Remember that stepping programs discards anything unsaved, which you decided about in the last step.",
        nextHint: "First, hear it with nothing at all.",
      },
      {
        id: "I06-S03",
        title: "Hear it completely dry",
        instruction:
          "Press the Effects On/Off button until as little as possible is switched on, and listen.",
        detail:
          "This is your reference point. Bare, close, and probably a bit unglamorous — but every part is clearly separate and you can hear exactly what is playing.",
        hardwareTargets: ["effectsOnOffButton"],
        visualMode: "full-plus-inset",
        expectedSound:
          "The groove sounding flat and close, with every part distinct and nothing blurred.",
        whyItMatters:
          "You cannot tell whether an effect is helping unless you know what the sound is without it. Starting dry means every later decision is a comparison rather than a guess.",
        checkpoint:
          "You have heard the groove with the effects out, and can hear each part separately.",
        recoveryHelp:
          "Keep pressing to step on through the combinations — the indicators at the upper left of each knob show which effects are available. Nothing here is destructive; you are switching effects in and out, not deleting their settings.",
        nextHint: "Now bring one back, and find where it stops helping.",
      },
      {
        id: "I06-S04",
        title: "Reverb: too little, useful, too much",
        instruction:
          "Bring the effects back, then turn Reverb up slowly from nothing to fully up, listening the whole way.",
        detail:
          "Somewhere in that travel it goes from adding nothing to making the groove sound finished, and then to washing it out. Find both of those points before you settle anywhere.",
        hardwareTargets: ["reverbKnob"],
        visualMode: "full-plus-inset",
        expectedSound:
          "The groove gaining depth, then losing definition as the drums smear and the parts run together.",
        whyItMatters:
          "The useful range of this knob is much smaller than its travel, and the top half is almost never right in a mix. Finding where it stops helping is more useful than being told a number.",
        checkpoint:
          "You have heard the point at which more reverb starts making the groove worse.",
        recoveryHelp:
          "Turn it back down to where the drums are crisp again. If you cannot hear any change, the reverb may not be switched on — press Effects On/Off until its indicator lights.",
        nextHint: "Now the same test on delay.",
      },
      {
        id: "I06-S05",
        title: "Delay: the same test",
        instruction: "Turn Delay up slowly through its whole range, then back.",
        detail:
          "Delay fills space differently from reverb: it repeats things rather than blurring them, so it goes wrong in a different way — as clutter rather than as fog.",
        hardwareTargets: ["delayKnob"],
        visualMode: "full-plus-inset",
        expectedSound:
          "Repeats appearing behind the groove, then multiplying until they compete with the parts that are actually playing.",
        whyItMatters:
          "Because delay repeats in time, a little of it makes a groove feel bigger without losing definition — which is often what you want when reverb would have smeared it.",
        checkpoint:
          "You can describe how too much delay goes wrong differently from too much reverb.",
        recoveryHelp:
          "Turn it back down until the repeats support the groove rather than crowding it. Short notes show delay much more clearly than held ones.",
        nextHint: "Now the two that change the sound itself.",
      },
      {
        id: "I06-S06",
        title: "A little character from the other two",
        instruction:
          "Press the Effect 1 Type button, turn its knob up a little, then do the same with Effect 2.",
        detail:
          "These change what the sound is made of rather than where it seems to be. In a groove they are best used in small amounts — a bit of grit or a bit of sweep, not a transformation.",
        hardwareTargets: ["effect1Knob", "effect2Knob"],
        visualMode: "full-plus-inset",
        expectedSound:
          "The groove gaining some roughness or motion without losing its shape.",
        whyItMatters:
          "These two are the most tempting to overdo because they are the most dramatic. In context, a setting that sounded exciting on a single held note usually turns the whole groove to mush.",
        checkpoint:
          "You have added a small amount from at least one of the two slots and the groove still works.",
        recoveryHelp:
          "Turn either knob back to the left to remove it. Some types get much louder as you turn them up — keep Master Volume down while you explore. Press the Type button again to step on to a different one.",
        nextHint: "Now the thing that makes this a balancing problem.",
      },
      {
        id: "I06-S07",
        title: "Different sounds want different amounts",
        instruction:
          "Play a low note, then hold two or three keys high up, then a single bright note, against the same effect settings.",
        detail:
          "Listen to how the same reverb sounds on each. A bass usually wants almost none of it — reverb on low sounds turns to mud faster than anything. A pad usually wants a lot. A lead wants somewhere in between, and often prefers delay.",
        hardwareTargets: ["keys", "reverbKnob"],
        visualMode: "full-plus-inset",
        expectedSound:
          "The same amount of reverb sounding right on a held high sound and wrong on a low one.",
        whyItMatters:
          "This is why effects are hard. The correct amount is not a property of the effect; it is a property of the sound you are putting it on, and one setting has to serve all of them.",
        checkpoint:
          "You can say which of the three kinds of sound wants the least reverb, and why.",
        recoveryHelp:
          "If the difference is hard to hear, turn Reverb up further than you would use, listen to the low and high sounds again, then bring it back — exaggerating makes the comparison obvious.",
        nextHint: "And here is why that is a problem.",
      },
      {
        id: "I06-S08",
        title: "One set of effects, shared by everything",
        instruction: "Read this before you try to give two parts different settings.",
        detail:
          "The effect settings belong to the whole program, not to a part. There is one reverb, one delay, and one of each effect slot, and every part that is switched through to them gets the same one. You cannot turn the reverb up for the pad and down for the bass.",
        hardwareTargets: ["effectsSection"],
        visualMode: "full",
        whyItMatters:
          "This is the constraint that makes the previous step matter. Since one setting has to serve a bass, a pad and a lead at once, the right answer is usually less than any of them would want on its own.",
        checkpoint:
          "You can explain why the reverb setting is a compromise rather than a choice.",
        recoveryHelp:
          "Nothing to do here — this step only asks you to read. The Effects On/Off button does let you take a part out of the effects entirely, which is the blunt version of the control this constraint denies you.",
        nextHint: "So the last move is usually downward.",
      },
      {
        id: "I06-S09",
        title: "Back it down until the groove is clear",
        instruction:
          "With the pattern playing, reduce every effect until you can hear each part distinctly again — then stop.",
        detail:
          "Take a little off each one rather than turning any of them off. You are looking for the most effect you can have while still being able to pick out the drums.",
        hardwareTargets: ["reverbKnob", "delayKnob", "effect1Knob", "effect2Knob"],
        visualMode: "full-plus-inset",
        expectedSound:
          "The groove tightening up: still in a space, but with the drums crisp and every part findable again.",
        whyItMatters:
          "Almost every mix problem a beginner has is too much effect, and almost every fix is subtraction. Doing it as the last deliberate move — rather than never doing it — is the habit worth taking away.",
        checkpoint:
          "You can hear every part clearly and the groove still sounds finished rather than bare.",
        recoveryHelp:
          "If you are not sure whether you have gone too far, press Effects On/Off to compare with none at all. If the difference between your setting and nothing is very small, you have overcorrected.",
        nextHint: "Last step: decide what happens to it.",
      },
      {
        id: "I06-S10",
        title: "Keep it, if you want it",
        instruction:
          "If you like where the effects have ended up, save the program.",
        detail:
          "Effect settings are saved with the program, along with everything else in it. If you were only practising, there is nothing to do.",
        hardwareTargets: ["shiftButton", "menuWriteButton"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "I07 starts a fresh program and sets its own effects, so nothing later depends on this one. Saving here is for you.",
        checkpoint:
          "You have balanced a set of effects in context, and decided whether to keep them.",
        recoveryHelp:
          "N09 Save your work has the full procedure. There is no one-button way back from effect changes, so if you want the stored settings, selecting another program and returning gives you them — but that discards every other unsaved change on this program too.",
        nextHint:
          "You can balance a groove. Next, build the whole thing from scratch.",
      },
    ],
  },
  I07: {
    id: "I07",
    level: "intermediate",
    order: 7,
    title: "Build a multi-part program",
    shortTitle: "Multi-part program",
    summary:
      "Build your performance groove setup. Choose and shape a drum kit, a bass, something to fill the middle and something to play on top — four parts in one program, chosen to belong together.",
    estimatedMinutes: 15,
    prerequisites: ["I06"],
    learningGoals: [
      "Choose and shape a sound for each of the four parts.",
      "Pick sounds that leave room for each other rather than competing.",
      "Balance the four so all of them can be heard.",
      "Finish with one program holding a complete setup.",
    ],
    // Source record: docs/tutorials/I07-SOURCE-NOTES.md
    // I07 STARTS THE FRESH FINAL PROJECT
    // (PRODUCT-CURRICULUM-MASTER-PLAN.md sec 11). Its subject is CHOOSING
    // AND SHAPING four sounds, not Program Edit architecture: the brief
    // rules out making OFFSET, Pan or routing the main lesson.
    //
    // Program Edit is opened once, for per-part Level, because four parts
    // cannot coexist without it. Pan, Part Output, send levels and the
    // OFFSET group are NOT used.
    //
    // I07 does not save the project -- I09 owns the final save. The closing
    // step says plainly that nothing is stored yet and what to do if the
    // learner is stopping here.
    steps: [
      {
        id: "I07-S01",
        title: "Protect your work, and choose somewhere to build",
        instruction:
          "Decide whether this program holds work you have not saved, then pick a program you are happy to rebuild.",
        detail:
          "This is the start of the final project, and it changes all four parts. Save anything here you want first, or step to a program you do not mind overwriting entirely.",
        hardwareTargets: ["programValueButtons"],
        visualMode: "full",
        whyItMatters:
          "You are about to spend three tutorials on one program. Starting on something you are willing to lose means you can work freely, and starting on something you care about means you cannot.",
        checkpoint:
          "You are on a program you are happy to rebuild, and anything you wanted from before is saved.",
        recoveryHelp:
          "N09 Save your work teaches saving. Stepping to another program with Value + discards anything unsaved on this one, which is the choice this step is asking you to make deliberately.",
        nextHint: "Now the shape of what you are building.",
      },
      {
        id: "I07-S02",
        title: "What you are building",
        instruction: "Read this before you choose any sounds.",
        detail:
          "Four parts, chosen to work together: drums to carry the rhythm, a bass to hold the bottom, something in the middle to fill it out, and something on top to play. That set covers most of what music needs, and the JD-Xi gives you exactly four.",
        hardwareTargets: ["partSelectGroup"],
        visualMode: "full",
        whyItMatters:
          "Choosing four sounds you like separately usually produces four sounds that fight. Choosing them for the job each has to do is what makes a program sound like one thing.",
        checkpoint: "You know which of the four parts is going to do which job.",
        recoveryHelp:
          "Nothing to do here — this step only asks you to read. The parts are Digital Synth 1, Digital Synth 2, Drums and Analog Synth; which job goes on which is largely up to you.",
        nextHint: "Start at the bottom, with the drums.",
      },
      {
        id: "I07-S03",
        title: "Choose and shape a drum kit",
        instruction:
          "Press Drums, step through kits with Tone + until one fits, then adjust Cutoff to taste.",
        detail:
          "Pick a kit whose bass drum and snare you like the sound of. Then use Cutoff the way N04 showed — darker for something softer and further back, brighter for something sharp and modern.",
        hardwareTargets: ["drumsButton", "toneButtons", "cutoffKnob"],
        visualMode: "full-plus-inset",
        expectedSound: "A kit you have chosen, adjusted to the character you want.",
        whyItMatters:
          "Drums set the character of everything else. A soft kit and a hard kit lead you toward completely different choices for the other three parts, so this decision is worth making first.",
        checkpoint: "You have a drum kit you chose and shaped.",
        recoveryHelp:
          "Tone − steps back if you have gone past one you liked. If Cutoff seems to do nothing, check that Drums is still the selected part.",
        nextHint: "Now the bottom end.",
      },
      {
        id: "I07-S04",
        title: "Choose and shape a bass",
        instruction:
          "Press Analog Synth, find a low sound with Tone −/+, then shape it the way I01 showed.",
        detail:
          "Take the top off with Cutoff, add a little Resonance if it wants growl, and keep the envelope short so notes get out of each other's way.",
        hardwareTargets: ["analogSynthButton", "toneButtons", "cutoffKnob", "envelopeKnob"],
        visualMode: "full-plus-inset",
        expectedSound: "A solid low sound that stops cleanly between notes.",
        whyItMatters:
          "The bass and the bass drum occupy the same territory, and this is the moment to make sure they are not both trying to fill it. If your kit has a big deep kick, keep the bass tighter and shorter.",
        checkpoint: "You have a bass that sits under your drum kit without swamping it.",
        recoveryHelp:
          "Play the bass and press a bass-drum key alternately. If you cannot tell them apart, take more top off one of them or shorten the bass. I01 has the full procedure.",
        nextHint: "Now something to fill the middle.",
      },
      {
        id: "I07-S05",
        title: "Choose and shape something for the middle",
        instruction:
          "Press Digital Synth 1, use the Category dial and Tone buttons to find something sustained, and soften it the way I02 showed.",
        detail:
          "This is the part that fills space behind everything else — a pad, strings, anything that holds. Turn the Envelope knob right so it swells and hangs on, and take enough brightness off that it stays behind.",
        hardwareTargets: ["digitalSynth1Button", "categoryDial", "envelopeKnob"],
        visualMode: "full-plus-inset",
        expectedSound: "A sustained sound sitting behind the drums and bass.",
        whyItMatters:
          "Without something holding in the middle, a groove is just rhythm and bottom end with a hole above it. This is the part that makes the other three sound like they are in the same room.",
        checkpoint:
          "You have a sustained sound that fills space without drawing attention.",
        recoveryHelp:
          "If it keeps pulling focus, close Cutoff further — brightness is what makes a sound come forward. I02 has the full procedure.",
        nextHint: "Now something to play on top.",
      },
      {
        id: "I07-S06",
        title: "Choose and shape something to play",
        instruction:
          "Press Digital Synth 2, find something bright, and make it immediate the way I03 showed.",
        detail:
          "This is the part your hands will use in I10. It needs to arrive the instant you press and be bright enough to be heard over the other three. If you would rather have an arpeggiated layer than a played one, this is the part to put the arpeggiator on.",
        hardwareTargets: ["digitalSynth2Button", "categoryDial", "envelopeKnob"],
        visualMode: "full-plus-inset",
        expectedSound: "A bright, immediate sound that cuts through the other three.",
        whyItMatters:
          "Everything so far has been foundation. This is the part you actually perform on, so it is the one that has to respond the way you expect when you play it live.",
        checkpoint:
          "You have a sound you would be happy to play a line on over the other three.",
        recoveryHelp:
          "If it disappears under everything else, open Cutoff before reaching for level. N07 covers putting the arpeggiator on this part if you would rather it played itself.",
        nextHint: "Now make sure you can hear all four.",
      },
      {
        id: "I07-S07",
        title: "Balance the four",
        instruction:
          "Open Program Edit, reach the MAIN group, and set each part's Level so all four can be heard.",
        detail:
          "Use Part Select to move between the parts — the two letters at the right of the upper line tell you which one you are on. Pull back whatever is too loud rather than pushing everything else up.",
        hardwareTargets: ["menuWriteButton", "partSelectGroup", "programValueButtons"],
        visualMode: "full-plus-inset",
        expectedSound: "Four parts audible at once, none of them drowning the others.",
        whyItMatters:
          "This is the one Program Edit setting the project genuinely needs. Four sounds chosen separately almost never arrive at usable relative volumes, and no amount of filtering fixes a part that is simply too loud.",
        checkpoint: "You can hear all four parts, and none of them dominates.",
        recoveryHelp:
          "If you get lost, press Exit until you are back at the top screen and open Program Edit again. Nothing in here is written to storage — it is part of the loaded program until you save it.",
        nextHint: "Now one pass of effects over the whole thing.",
      },
      {
        id: "I07-S08",
        title: "Give the whole thing some space",
        instruction:
          "Press Exit, then set Reverb and Delay to suit the setup as a whole.",
        detail:
          "Remember from I06 that there is one set of effects for the entire program, so this is a compromise across all four parts rather than a choice for any one of them. Less than any single sound would want.",
        hardwareTargets: ["reverbKnob", "delayKnob"],
        visualMode: "full-plus-inset",
        expectedSound: "The four parts sounding like they are in the same space.",
        whyItMatters:
          "Shared effects are what make four separate sounds feel like one program. It is also the last thing you can do to tie them together before you start putting notes in.",
        checkpoint:
          "The four parts sound like they belong in the same place.",
        recoveryHelp:
          "Press Effects On/Off to compare with none at all. If the bass has gone muddy, that is usually reverb — it hurts low sounds first, which is why I06 spends a step on it.",
        nextHint: "Now listen to each one on its own.",
      },
      {
        id: "I07-S09",
        title: "Audition the parts",
        instruction:
          "Press each Part Select button in turn and play a few keys on each.",
        detail:
          "Four sounds, one after another. Ask whether each one is doing a job the others are not, and whether any two are trying to do the same job.",
        hardwareTargets: ["partSelectGroup", "keys"],
        visualMode: "full",
        expectedSound: "Four clearly different sounds, each with an obvious purpose.",
        whyItMatters:
          "Two parts doing the same job is the commonest problem with a four-part setup, and it is much easier to hear now — one at a time, with nothing recorded — than it will be once there is a pattern covering everything.",
        checkpoint:
          "You can say what each of the four parts is for, and no two are doing the same thing.",
        recoveryHelp:
          "If two parts are too similar, change one of them now: a different tone, or a much darker or brighter setting. Fixing it here costs a minute; fixing it in I08 means re-recording.",
        nextHint: "One optional extra before you finish.",
      },
      {
        id: "I07-S10",
        title: "Optional: a minimal test pattern",
        instruction:
          "If you want to hear the four together, put a few drum hits and a couple of bass notes in — no more.",
        detail:
          "Just enough to check the setup works as a whole. I08 is where the real pattern gets built, so anything elaborate here is work you will do again.",
        hardwareTargets: ["stepButtons", "playStopButton"],
        visualMode: "full-plus-inset",
        expectedSound:
          "A rough sketch — a few hits and notes — with all four sounds present.",
        whyItMatters:
          "Sounds chosen in silence sometimes fall apart the moment they play together. A rough sketch catches that while it is still cheap to fix.",
        checkpoint:
          "Either you have heard the four parts together, or you have decided to go straight on to I08.",
        recoveryHelp:
          "N04 and N05 cover placing drum hits and notes. Keep it small — this is a test, not the pattern.",
        nextHint: "Last step, and it is a warning rather than an instruction.",
      },
      {
        id: "I07-S11",
        title: "None of this is saved yet",
        instruction:
          "If you are carrying straight on to I08, leave the JD-Xi as it is. If you are stopping, save the program now.",
        detail:
          "Everything you have just chosen and shaped lives in the loaded program and nowhere else. Changing program or switching off loses all four parts at once. I09 is where the finished project gets saved properly, but that is two tutorials away.",
        hardwareTargets: ["display"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "This is the largest amount of unsaved work the course has ever asked you to hold. I08 continues on this setup, so going straight on is the intended route — but a break in between is exactly when it would be lost.",
        checkpoint:
          "You have a four-part setup, and you know it is not stored yet.",
        recoveryHelp:
          "N09 Save your work has the procedure if you are stopping. Saving now costs nothing — I09 saves again at the end, and saving twice to the same slot is harmless.",
        nextHint:
          "The setup is built. Next, give it a pattern worth performing.",
      },
    ],
  },
  I08: {
    id: "I08",
    level: "intermediate",
    order: 8,
    title: "Build a fuller pattern",
    shortTitle: "Fuller pattern",
    summary:
      "Give your setup a pattern worth performing: a real drum groove, parts underneath and over it, more than one measure of room, and a fill at the end so the loop turns around instead of just repeating.",
    estimatedMinutes: 16,
    prerequisites: ["I07"],
    learningGoals: [
      "Build a drum groove with more in it than a first beat.",
      "Get all four parts contributing to one pattern.",
      "Extend a pattern beyond one measure and work on a later one.",
      "Add a fill so the loop turns around differently.",
    ],
    // Source record: docs/tutorials/I08-SOURCE-NOTES.md
    // I08 is the DEEPEST SEQUENCER LESSON and the final groove build
    // (PRODUCT-CURRICULUM-MASTER-PLAN.md sec 11).
    //
    // The brief lists five things to remove explicitly, and none appears:
    // Realtime Recording, recorded knob/wheel automation, Pattern Copy,
    // Scale/subdivision, velocity/accent.
    //
    // Pattern Length and measure navigation arrive here from N03, which is
    // the right home: they are only useful once a pattern outgrows one
    // measure, which is exactly what this tutorial does.
    //
    // Four measures is stated as a GOAL, never a requirement.
    steps: [
      {
        id: "I08-S01",
        title: "Protect any work you want to keep",
        instruction:
          "Decide whether this program's pattern holds work you have not saved.",
        detail:
          "Everything here records into the pattern of the loaded program. If you built the setup in I07 and it is still loaded, this is the tutorial that fills it in — carry on. If there is something else here you want, save it first.",
        hardwareTargets: ["stepButtons", "eraseButton"],
        visualMode: "full",
        whyItMatters:
          "A pattern disappears if you select a different program or switch off, and by the end of this tutorial there will be a great deal of it. That makes the decision worth making now.",
        checkpoint:
          "You have decided: either there is nothing here to keep, or you have saved it, or you are deliberately building on your I07 setup.",
        recoveryHelp:
          "N09 Save your work teaches saving. If your I07 setup is gone, that is recoverable — this tutorial works on any program, and you can rebuild a rough setup in a few minutes with I07's steps.",
        nextHint: "Now start where the groove starts.",
      },
      {
        id: "I08-S02",
        title: "Start from your setup",
        instruction:
          "Press each Part Select button and check you have four sounds you want to work with.",
        detail:
          "If your I07 program is loaded, this is a quick check. If it is not, any program with four sounds you like will do — nothing below depends on the specific tones.",
        hardwareTargets: ["partSelectGroup"],
        visualMode: "full-plus-inset",
        expectedSound: "Four different sounds, one on each part.",
        whyItMatters:
          "The pattern you are about to build takes a while, so it is worth thirty seconds now confirming you want to build it on these sounds rather than discovering halfway through that you do not.",
        checkpoint: "You have four sounds you are happy to build a pattern on.",
        recoveryHelp:
          "If a part has a sound you do not want, change it now with Tone −/+ before you record anything. I07 covers choosing sounds for the four jobs.",
        nextHint: "Now build a groove worth the name.",
      },
      {
        id: "I08-S03",
        title: "Build a fuller drum groove",
        instruction:
          "Select Drums, and place a bass drum, a snare and a closed hi-hat — then add at least one more instrument.",
        detail:
          "Start the way N04 did, then go further: an open hi-hat, a clap, a tom, a rim. Play a key to choose the instrument, then light the steps you want it on.",
        hardwareTargets: ["drumsButton", "stepButtons"],
        visualMode: "full-plus-inset",
        expectedSound:
          "A groove with more going on than a first beat — four or more instruments, interlocking.",
        whyItMatters:
          "The difference between a beat and a groove is mostly the number of things happening between the main hits. This is where a pattern starts sounding like music rather than a demonstration.",
        checkpoint:
          "At least four different drum instruments are playing in the pattern.",
        recoveryHelp:
          "If a step will not take a note, it already holds one — stop the pattern, hold Erase and press it. If the groove has become cluttered, take instruments out: erasing is as much a part of this as adding.",
        nextHint: "Now shape the kit to suit it.",
      },
      {
        id: "I08-S04",
        title: "Shape the kit further",
        instruction:
          "With the groove running, adjust Cutoff and the Envelope knob on the Drums part.",
        detail:
          "Cutoff sets how bright the kit is; the Envelope knob turned left shortens the hits. A busy groove usually wants shorter, tighter drums than a sparse one.",
        hardwareTargets: ["cutoffKnob", "envelopeKnob"],
        visualMode: "full-plus-inset",
        expectedSound:
          "The same groove sounding tighter and more controlled, or softer and further back.",
        whyItMatters:
          "This is deeper drum work than N04 asked for, and it matters more now: with four instruments interlocking, long ringing hits run into each other in a way one bass drum never did.",
        checkpoint:
          "The kit sounds like it suits the groove you built rather than fighting it.",
        recoveryHelp:
          "Turn either knob back by ear. If the groove has gone muddy, shorten the envelope before you reach for Cutoff — overlap is usually the problem in a busy pattern.",
        nextHint: "Now the bottom end.",
      },
      {
        id: "I08-S05",
        title: "Add the bass",
        instruction:
          "Select your bass part, play a low key, and light the steps where you want it.",
        detail:
          "Fewer notes than you think. A bass that plays on every step leaves the drums nowhere to go, and a bass that plays on two or three carries the whole thing.",
        hardwareTargets: ["analogSynthButton", "stepButtons"],
        visualMode: "full-plus-inset",
        expectedSound: "Your groove with a low line underneath holding it down.",
        whyItMatters:
          "The relationship between the bass and the bass drum is what makes a groove feel solid or wobbly. Try putting bass notes on the same steps as the kick, then on different ones, and hear which you prefer.",
        checkpoint: "A bass line is playing along with the drum groove.",
        recoveryHelp:
          "N05 has the full procedure, including using a second nearby key so the line moves. Erase with Erase plus a step if you have put in too many notes.",
        nextHint: "Now something in the middle.",
      },
      {
        id: "I08-S06",
        title: "Add a synth part",
        instruction:
          "Select your middle part, hold a key, and light a few steps — long, sparse notes work best here.",
        detail:
          "Try holding one note across most of the pattern rather than playing a line. This part is filling space, not competing for attention.",
        hardwareTargets: ["digitalSynth1Button", "stepButtons"],
        visualMode: "full-plus-inset",
        expectedSound: "The groove filling out, with something sustaining behind it.",
        whyItMatters:
          "Three parts is where a pattern stops sounding sparse. It is also where the choices you made in I07 start paying off — a part chosen to sit behind will sit behind without further work.",
        checkpoint: "Three parts have content in the pattern.",
        recoveryHelp:
          "If this part is drawing too much attention, use fewer steps rather than turning it down. If it is inaudible, check that it is not muted — hold Shift and press its Part Select button.",
        nextHint: "A fourth, if it earns a place.",
      },
      {
        id: "I08-S07",
        title: "A fourth part, if it earns a place",
        instruction:
          "Add a few notes on the remaining part, then mute it and decide whether the pattern is better with or without.",
        detail:
          "This one is genuinely optional. Three parts that work beat four parts where one is in the way, and you now have the muting habit to find out which you have.",
        hardwareTargets: ["digitalSynth2Button", "shiftButton"],
        visualMode: "full-plus-inset",
        expectedSound:
          "The pattern with a fourth part, then without it — and a clear preference between them.",
        whyItMatters:
          "The instinct is always to add. Building the habit of adding something and then checking whether it helped is what stops a pattern turning into a pile.",
        checkpoint:
          "You have made a decision about the fourth part on the basis of hearing the loop both ways.",
        recoveryHelp:
          "Leave it muted if you do not want it, or erase its steps. Neither is wrong, and muting is reversible.",
        nextHint: "Now give the pattern more room.",
      },
      {
        id: "I08-S08",
        title: "Make the pattern longer",
        instruction:
          "Press Menu/Write, select Pattern Length, press Enter, choose more measures with Value, then press Enter.",
        detail:
          "The JD-Xi now asks a question rather than acting. Enter fills the new measures by copying what you already have; Exit adds blank ones. Either answer applies the change — this is not a cancel.",
        hardwareTargets: ["menuWriteButton", "programValueButtons", "display"],
        visualMode: "display-focus",
        expectedDisplay: ["With Copying ?", "[Exit]:N [Ent]:Y"],
        syntheticDisplay: false,
        displayNote:
          "Roland's illustrated prompt from the Pattern Length procedure, reproduced with its own left-to-right order.",
        whyItMatters:
          "Read this screen carefully, because Exit here does not mean cancel — it means answer no and carry on. On this instrument the same button does not always do the same thing.",
        checkpoint: "The pattern is longer than one measure.",
        recoveryHelp:
          "Answering with Enter and copying is the safer choice: you get what you already had, twice, and can change the second half. If you go back to fewer measures later, you lose what was in the ones you removed. Note that a length change is not written to storage — selecting another program before saving reverts it.",
        nextHint: "Now go and work on a later measure.",
      },
      {
        id: "I08-S09",
        title: "Work on a later measure",
        instruction:
          "With the pattern playing, hold Shift and press one of the buttons 01 to 04.",
        detail:
          "That chooses which measure the sixteen buttons are showing. Holding Shift lights those buttons and the current measure blinks, so you can always see where you are.",
        hardwareTargets: ["shiftButton", "stepButtons"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "Without this you can only ever edit the first measure, which is why a longer pattern feels impossible to work on until someone shows you the gesture. This is the answer to the window problem N03 described.",
        checkpoint:
          "Holding Shift lights some of the first four buttons, one of them blinks, and the row is showing a different measure.",
        recoveryHelp:
          "Hold Shift down before pressing the numbered button. If nothing lights, the pattern may still be one measure long — go back and lengthen it first.",
        nextHint: "Now make the end of the loop different.",
      },
      {
        id: "I08-S10",
        title: "Add a fill at the end",
        instruction:
          "Move to the last measure and change its final few steps — add drum hits, or take some out.",
        detail:
          "A fill is nothing more complicated than that: the last part of the loop does something different, so the loop turns around instead of simply starting again. A run of hi-hats, an extra snare, or a gap all work.",
        hardwareTargets: ["stepButtons", "drumsButton"],
        visualMode: "full-plus-inset",
        expectedSound:
          "The loop building to something slightly different at the end, then coming round again.",
        whyItMatters:
          "This is the difference between a loop you can listen to for a minute and one you can listen to for five. It costs a handful of steps and it is the single most effective thing in this tutorial.",
        checkpoint:
          "The end of the loop is audibly different from the rest of it.",
        recoveryHelp:
          "If the fill draws too much attention, use fewer extra hits — a gap where something usually happens is often more effective than adding anything. Erase with Erase plus a step to take a hit back out.",
        nextHint: "Now check the whole thing, and fix what is wrong.",
      },
      {
        id: "I08-S11",
        title: "Audition and correct",
        instruction:
          "Mute each part in turn to check it, then stop the pattern and erase any step that is in the wrong place.",
        detail:
          "Muting tells you what each part is contributing; stopping and using Erase with a step button takes out anything you do not want. Step recording is available too if you would rather enter a run of notes than pick steps.",
        hardwareTargets: ["shiftButton", "eraseButton", "stepRecButton"],
        visualMode: "full-plus-inset",
        expectedSound: "Each part on its own, then the pattern with the mistakes gone.",
        whyItMatters:
          "A pattern this size always has something in it you did not mean. Being able to find it by muting and remove it cleanly is what makes a long pattern workable rather than something you start again.",
        checkpoint:
          "You have listened to each part on its own and removed anything you did not want.",
        recoveryHelp:
          "The pattern must be stopped before Erase plus a step will remove a note. Remember that turning a button dark only mutes its note — it stays there and will block a new one until it is erased properly.",
        nextHint: "Last step: how far you got, and what happens to it.",
      },
      {
        id: "I08-S12",
        title: "Four measures is a goal, not a rule",
        instruction: "Let the whole pattern play round a few times and listen.",
        detail:
          "Four measures is the most the JD-Xi will hold, and it is worth working toward — but a two-measure loop with a fill is better than four measures of something you stopped caring about halfway through. Stop where it sounds good.",
        hardwareTargets: ["playStopButton", "display"],
        visualMode: "full",
        expectedSound: "Your finished groove, several parts, looping with a turnaround.",
        whyItMatters:
          "This is the thing you will perform in I10. It does not have to be long or clever; it has to be something you are happy to hear repeatedly, because that is exactly what is going to happen to it.",
        checkpoint:
          "You have a multi-part loop you would be happy to play over, and you know it is not saved yet.",
        recoveryHelp:
          "Nothing here needs recovering — this step asks you to listen. The pattern, its length and all four parts are still only in the loaded program. I09 is the next tutorial and it is where all of this gets saved.",
        nextHint:
          "The groove is built. Next, keep it — properly, and for good.",
      },
    ],
  },
  I09: {
    id: "I09",
    level: "intermediate",
    order: 9,
    title: "Save and organize creations",
    shortTitle: "Save and organize",
    summary:
      "Turn the groove you have built into a program you own: named so you will recognise it, saved somewhere you chose, checked that it really persisted, and put on a button so one press brings it back.",
    estimatedMinutes: 13,
    prerequisites: ["I08"],
    learningGoals: [
      "Save a finished program safely, to a destination you chose.",
      "Give it a name you will still understand later.",
      "Check that the save really persisted.",
      "Register it as a Favorite so one press recalls it.",
    ],
    // Source record: docs/tutorials/I09-SOURCE-NOTES.md
    // I09 turns the final groove into a reusable personal Program
    // (PRODUCT-CURRICULUM-MASTER-PLAN.md sec 11): safe save, meaningful
    // name, intentional overwrite destination, verify, register as a
    // hardware Favorite, practical organisation.
    //
    // The brief lists ten things to remove entirely from guided v1 and none
    // appears: USB/computer, Backup, Restore, Export/import, Extra Banks,
    // Startup Program, SYSTEM parameter change, Tone-saving curriculum,
    // Pattern Copy, Program-copy curriculum.
    //
    // The WRITE mechanics are N09's; I09 performs them on the real project
    // and spends its extra depth on naming, destination and recall instead.
    steps: [
      {
        id: "I09-S01",
        title: "Save anything you came here to save",
        instruction:
          "Check that the program loaded right now is the one you want to keep, and do not change program from here on.",
        detail:
          "If your groove from I08 is loaded, that is what you are saving. If you arrived here with something else you want, this is the moment — selecting a different program would throw it away.",
        hardwareTargets: ["programValueButtons"],
        visualMode: "full",
        whyItMatters:
          "This tutorial exists to rescue work, so the one thing it must not do is lose some on the way in. From here to the end, the Value buttons are only used inside the WRITE screen.",
        checkpoint:
          "The thing you want to keep is loaded, and you have not changed program.",
        recoveryHelp:
          "If you have already lost it, it cannot be recovered — but I07 and I08 will rebuild a setup and a groove faster the second time. If you are unsure whether this is the right program, look at the tone names on each part before you go on.",
        nextHint: "Now what a save actually covers.",
      },
      {
        id: "I09-S02",
        title: "One save keeps all of it",
        instruction: "Read this before you start.",
        detail:
          "Saving stores the whole program: all four parts and their tones, everything you shaped, the balance, the effects, the arpeggio settings, the tempo, and the pattern with its length and its fill. Three tutorials of work, in one operation.",
        hardwareTargets: ["partSelectGroup"],
        visualMode: "full",
        whyItMatters:
          "There is no separate save for a sound or for a pattern — the JD-Xi cannot store sound settings as individual tones. The program is the unit, which is why everything you have built since I07 lives or dies together.",
        checkpoint:
          "You know that one save covers all four parts, the effects and the pattern.",
        recoveryHelp:
          "Nothing to do here — this step only asks you to read. N09 Save your work has the same fact in more detail if you want it.",
        nextHint: "Now decide what to call it.",
      },
      {
        id: "I09-S03",
        title: "Choose a name you will recognise later",
        instruction:
          "Before you touch anything, decide what this program should be called.",
        detail:
          "You will have room for a short name. Something about what it sounds like beats something about when you made it — you will not remember which one was Monday, but you will remember which one was the dark one.",
        hardwareTargets: ["display"],
        visualMode: "full",
        whyItMatters:
          "This is the whole of organisation on this instrument. There are no folders, no tags and no search: there are two hundred and fifty-six slots and whatever you called things. A name you understand in six months is the only index you get.",
        checkpoint: "You know what you are going to call it before you start typing.",
        recoveryHelp:
          "Stuck? Describe the sound rather than the occasion — dark, bright, slow, hard. If you make a lot of these, a short prefix for a family of related grooves is worth more than a clever name for one.",
        nextHint: "Now open the save screen and type it.",
      },
      {
        id: "I09-S04",
        title: "Open WRITE and enter the name",
        instruction:
          "Hold Shift and press Menu/Write, then use Cursor to move along the name and Value to choose each character.",
        detail:
          "Cursor picks which character you are on; Value changes that character. Nothing has been written yet — this screen is only asking what to call it.",
        hardwareTargets: ["shiftButton", "menuWriteButton", "cursorButtons", "display"],
        visualMode: "display-focus",
        expectedDisplay: ["Name:      [Ent]", "Init Program"],
        syntheticDisplay: false,
        displayNote:
          "Roland's illustrated name input screen. The lower line shows the current program's name, which will be whatever yours is called rather than the example.",
        checkpoint: "The lower line shows the name you chose.",
        recoveryHelp:
          "Hold Shift down first, then press Menu/Write — a short press on its own opens the ordinary Menu, and a long press opens the portamento screen. Press Exit to leave without saving if you need to start again. N09 has this in more detail.",
        nextHint: "Now where it is going to live.",
      },
      {
        id: "I09-S05",
        title: "Where your own programs live",
        instruction: "Press Enter to accept the name.",
        detail:
          "You are now choosing a destination. Roland's own programs fill banks A to D; yours go in banks E, F, G and H, with sixty-four slots in each. That is two hundred and fifty-six slots of your own.",
        hardwareTargets: ["programValueButtons", "display"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "Keeping related work near each other is the only organisation the instrument supports. Grooves in one bank and single sounds in another, or one bank per project, will save you a lot of stepping later.",
        checkpoint: "The screen has moved on from naming to choosing where it goes.",
        recoveryHelp:
          "Press Exit if you want to go back and change the name. Nothing is written until several steps from now.",
        nextHint: "Now the part that can destroy something.",
      },
      {
        id: "I09-S06",
        title: "What choosing a destination costs",
        instruction: "Read this before you choose where to save.",
        detail:
          "If the slot you pick already holds a program, saving replaces it and the previous data is erased. Roland gives one signal and only one: if the destination already holds data, its name appears on the lower line. There is no message that tells you a slot is free, and this tutorial cannot promise you one is.",
        hardwareTargets: ["programValueButtons", "display"],
        visualMode: "full",
        whyItMatters:
          "By now you may have several programs of your own, which makes this more dangerous than it was in N09, not less. The slot that was empty then may be your bass from I01 now.",
        checkpoint:
          "You understand that saving replaces whatever is in the slot you choose, permanently.",
        recoveryHelp:
          "There is no undo for an overwrite. If you are not certain a slot is spare, step through a few more and read the lower line each time — an empty one shows no name.",
        nextHint: "Now choose one, reading as you go.",
      },
      {
        id: "I09-S07",
        title: "Choose where it goes",
        instruction:
          "Use the Value buttons to choose a destination, watching the lower line as you step.",
        detail:
          "A name on the lower line means that slot is occupied by the program with that name. Pick one you are willing to overwrite — ideally one showing nothing at all.",
        hardwareTargets: ["programValueButtons", "display"],
        visualMode: "full-plus-inset",
        checkpoint:
          "You have a destination selected and you have read what the lower line says about it.",
        recoveryHelp:
          "Keep stepping if everything you land on is occupied — there are sixty-four slots in each of four user banks, and hold Shift with Value to jump a bank. Press Exit to abandon the save entirely without writing anything.",
        nextHint: "Now the last moment before anything happens.",
      },
      {
        id: "I09-S08",
        title: "Confirm, and write it",
        instruction:
          "Press Enter, read the confirmation, then press Enter again — and do not touch the power switch.",
        detail:
          "The first Enter brings up a confirmation; Exit cancels there and Enter goes ahead. The JD-Xi then writes the program and shows Complete when it has finished. Roland's warning is blunt: never turn the power off while saving.",
        hardwareTargets: ["enterButton", "display"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "This is the only moment in the whole course where switching the power off could damage more than the thing you are working on. It takes a second, and then it is done.",
        checkpoint: "The display reports that it is complete.",
        recoveryHelp:
          "If you pressed Exit at the confirmation, nothing was written — start again from the WRITE screen. If it completed to a slot you did not mean, the previous occupant is gone and cannot be recovered; save again to the slot you intended.",
        nextHint: "Now prove it worked.",
      },
      {
        id: "I09-S09",
        title: "Prove it is really there",
        instruction:
          "Press Exit to the top screen, step to another program with Value +, then come back to yours.",
        detail:
          "Selecting a program loads it from storage, so coming back gives you the saved version. If your groove is still there, complete with its pattern, it is genuinely written.",
        hardwareTargets: ["programValueButtons", "playStopButton"],
        visualMode: "full-plus-inset",
        expectedSound:
          "Your groove, loading complete with all four parts and its pattern, after you had left it entirely.",
        whyItMatters:
          "This is also the first time you have been able to leave this program safely since I07. Everything before this step risked three tutorials of work; from here it is stored.",
        checkpoint:
          "You left your program, came back, and everything is still there.",
        recoveryHelp:
          "If it is missing or incomplete, the save did not take — go back to the WRITE screen and work through it again, watching for the Complete message. Do not switch off until it has worked.",
        nextHint: "Now make it quick to reach.",
      },
      {
        id: "I09-S10",
        title: "Put it on a Favorite button",
        instruction:
          "Press Favorite so it lights, find a button that reports “Not Registered!”, then hold Favorite and press it.",
        detail:
          "With Favorite lit the numbered buttons recall registered programs. A button with nothing on it reports “Not Registered!”, which is the JD-Xi telling you it is free. Registering replaces whatever was there, and it does not ask first.",
        hardwareTargets: ["favoriteButton", "stepButtons"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "I10 asks you to load this program and perform it. Doing that from a Favorite button is one press; doing it by stepping through banks is not something you want to be doing in front of anyone.",
        checkpoint:
          "Pressing that numbered button while Favorite is lit brings your groove back.",
        recoveryHelp:
          "If pressing a numbered button loaded something else, that slot was in use — step back to your program with Value and try a different number. Your work is saved now, so this is safe. Press Favorite again when you are done to give the numbered buttons their normal job back.",
        nextHint: "Last step: what to do with everything else.",
      },
      {
        id: "I09-S11",
        title: "Tidy what you have",
        instruction:
          "Step through your user banks and note anything still called Init Program.",
        detail:
          "Renaming means saving that program again, with a better name, to the same slot — the sequence you have just done. It is worth doing while you still remember what each one was.",
        hardwareTargets: ["programValueButtons", "display"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "Programs called Init Program are the ones you will never open again, because you have no way of knowing what is in them without loading each in turn. Ten minutes of naming now is worth an hour of hunting later.",
        checkpoint:
          "You have a saved, named groove on a Favorite button, and you know how to name the rest.",
        recoveryHelp:
          "Renaming overwrites the same slot, so the risk is only to that program — but the same rules apply, and stepping to another program on the way discards anything unsaved. Everything of yours is saved at this point, so there is nothing to lose.",
        nextHint:
          "Your groove is saved and one press away. Next, perform it.",
      },
    ],
  },
  I10: {
    id: "I10",
    level: "intermediate",
    order: 10,
    title: "Performance challenge",
    shortTitle: "Performance challenge",
    summary:
      "No new controls, and nothing to build. Load the groove you saved, start it, and play it — taking parts out, pushing the tempo, bending notes, moving an effect while it runs. Then stop it cleanly.",
    estimatedMinutes: 18,
    prerequisites: ["I09"],
    learningGoals: [
      "Load your own saved program and perform with it.",
      "Change a running groove without stopping it.",
      "Play a part over your own pattern, expressively.",
      "Choose the performance controls that suit the moment.",
    ],
    // Source record: docs/tutorials/I10-SOURCE-NOTES.md
    // I10 is the COURSE CAPSTONE and uses the SAVED I07-I09 creation
    // (PRODUCT-CURRICULUM-MASTER-PLAN.md sec 11). It builds nothing: the
    // brief is explicit that the previous version wrongly rebuilt the
    // project and backed it up, and both are gone.
    //
    // No Backup, no USB, no rebuilding, no new procedure. Every control used
    // is one an earlier tutorial taught.
    //
    // The closing step frames Finish Tutorial as Course Complete.
    steps: [
      {
        id: "I10-S01",
        title: "Protect anything unsaved, and load your groove",
        instruction:
          "Save anything loaded that you still want, then recall your saved groove — from its Favorite button, or by its bank and number.",
        detail:
          "Loading a program discards whatever is loaded and unsaved, as always. Your groove from I09 is already stored, so recalling it costs nothing except whatever else is in front of you now.",
        hardwareTargets: ["favoriteButton", "programValueButtons"],
        visualMode: "full-plus-inset",
        expectedSound: "Your own program, loading complete with all four parts.",
        whyItMatters:
          "This is the first tutorial in the course whose starting point is something you made. Everything from here is performance rather than construction.",
        checkpoint: "Your saved groove is loaded and you can hear all of its parts.",
        recoveryHelp:
          "If you cannot find it, step through the user banks E to H with Shift and Value and read the names. If you never saved one, I09 is where that happens — or use any preset program with a good pattern, and everything below still works.",
        nextHint: "Now start it.",
      },
      {
        id: "I10-S02",
        title: "Start the pattern",
        instruction: "Press Play/Stop and let it run for a while.",
        detail:
          "Listen to the whole loop round several times before you touch anything. You are about to change it while it plays, so it is worth knowing what it does on its own first.",
        hardwareTargets: ["playStopButton"],
        visualMode: "full-plus-inset",
        expectedSound: "Your groove, looping, with its fill coming round at the end.",
        whyItMatters:
          "Performing is reacting to what you hear. Sitting with the loop for thirty seconds first is what gives you something to react to.",
        checkpoint: "Your pattern is running and you have listened to it a few times.",
        recoveryHelp:
          "If nothing plays, check the pattern is in this program — B08 covers finding one. If parts are missing, they may be muted: hold Shift and press their Part Select buttons.",
        nextHint: "Now take something out of it.",
      },
      {
        id: "I10-S03",
        title: "Take parts out and bring them back",
        instruction:
          "Hold Shift and press Part Select buttons to mute parts while it runs, then bring them back.",
        detail:
          "Drop the pad and let the drums and bass carry it. Drop the drums entirely for a few bars. Bring things back one at a time and let the groove build.",
        hardwareTargets: ["shiftButton", "partSelectGroup"],
        visualMode: "full-plus-inset",
        expectedSound:
          "The groove thinning out and filling back up as you take parts away and return them.",
        whyItMatters:
          "This is the single most effective performance move on this instrument, and it needs no preparation. A loop that never changes gets old in a minute; the same loop with parts coming and going holds up for far longer.",
        checkpoint:
          "You have taken at least two parts out and brought them back while the pattern kept running.",
        recoveryHelp:
          "If something will not come back, press the same combination once more — it is the same gesture both ways. Nothing you do here changes the stored program.",
        nextHint: "Now change how fast it goes.",
      },
      {
        id: "I10-S04",
        title: "Push the tempo",
        instruction:
          "Turn the tempo knob while it plays, or press Tap three or more times at the speed you want.",
        detail:
          "Try it noticeably faster and noticeably slower than you built it. A groove often has a speed that suits it better than the one it was made at.",
        hardwareTargets: ["tempoKnob", "tapButton"],
        visualMode: "full-plus-inset",
        expectedSound: "The whole groove speeding up or slowing down together.",
        whyItMatters:
          "Everything follows the tempo — the pattern, the arpeggiator, the delay. Changing it changes the feel of the entire program at once, which makes it a big lever for one knob.",
        checkpoint: "You have heard your groove at more than one speed.",
        recoveryHelp:
          "Tap at the speed you want if the knob overshoots. Remember the tempo belongs to the program, so if you want to keep a new one you would have to save again.",
        nextHint: "Now put your hands on it.",
      },
      {
        id: "I10-S05",
        title: "Play a part over the top",
        instruction:
          "Choose the part you built to play on, and play over the running pattern.",
        detail:
          "Long notes that suit what is playing beat fast ones that do not. You are adding to a groove that already works, not competing with it.",
        hardwareTargets: ["partSelectGroup", "keys"],
        visualMode: "full",
        expectedSound: "Your groove with a live part played over it by you.",
        whyItMatters:
          "This is what the whole course has been for. The sequencer covers the arrangement and your hands cover one part of it — which is the shape of every JD-Xi performance there is.",
        checkpoint:
          "You have played over your own pattern for a little while and it sounded like one thing.",
        recoveryHelp:
          "If your part is buried, open Cutoff on it rather than reaching for level. If the part you want is not what the keys are playing, press its Part Select button — the last one pressed wins.",
        nextHint: "Now make what you play more expressive.",
      },
      {
        id: "I10-S06",
        title: "Bend and shake what you play",
        instruction:
          "Use the Pitch control to bend into notes and the Mod control on the long ones.",
        detail:
          "Pitch springs back on its own, so be bold with it. Mod stays where you leave it, so bring it back down when the long note has finished.",
        hardwareTargets: ["pitchControl", "modControl"],
        visualMode: "full-plus-inset",
        expectedSound:
          "Notes sliding into pitch and long notes wavering, over a groove that carries on regardless.",
        whyItMatters:
          "These two are what separate playing from pressing keys. They are also the only controls on the instrument that respond continuously to your hand rather than in steps.",
        checkpoint:
          "You have bent at least one note and added movement to a held one.",
        recoveryHelp:
          "If everything wavers after you stop, the Mod control is still up — move it fully toward yourself. If Pitch does nothing, hold a key down at the same time.",
        nextHint: "Move the keyboard if you need to.",
      },
      {
        id: "I10-S07",
        title: "Move the keyboard to suit the part",
        instruction:
          "Use the OCTAVE buttons if what you are playing sits in the wrong place.",
        detail:
          "Down for something that needs weight, up for something that needs to be heard over the pattern. Press both together to get back to where you started.",
        hardwareTargets: ["octaveButtons"],
        visualMode: "full-plus-inset",
        expectedSound: "The same part, playing in a register that suits it better.",
        whyItMatters:
          "Thirty-seven keys is not many, and the range you need while performing is not always the range the program was built in. This is one button press rather than a rethink.",
        checkpoint:
          "You have moved the keyboard while performing, or decided it was already right.",
        recoveryHelp:
          "Press both OCTAVE buttons together to return to 0. Note that they have no effect on the Drums part, so if nothing happens, check which part is selected.",
        nextHint: "Let the instrument play a part, if it suits.",
      },
      {
        id: "I10-S08",
        title: "Let the arpeggiator play, if it suits",
        instruction:
          "If your groove has room for it, press ARPEGGIO On and hold two or three keys over the pattern.",
        detail:
          "It runs at the program's tempo, so it stays in time by itself. Turn it off again if it crowds the loop rather than adding to it — that is a real answer.",
        hardwareTargets: ["arpeggioOnButton", "keys"],
        visualMode: "full-plus-inset",
        expectedSound:
          "A moving arpeggiated layer over your groove, in time with it.",
        whyItMatters:
          "This is the one performance tool that plays a part for you, which frees your attention for everything else. It suits some grooves and ruins others, and knowing which is the skill.",
        checkpoint:
          "You have either added an arpeggiated layer or decided your groove is better without one.",
        recoveryHelp:
          "Press ARPEGGIO On again to turn it off. If notes keep sounding after you let go, ARPEGGIO Key Hold is on — press it once. N07 covers all of this.",
        nextHint: "Now change the sound while it runs.",
      },
      {
        id: "I10-S09",
        title: "Move something while it plays",
        instruction:
          "With the pattern running, sweep Cutoff on one part, or bring an effect up and back down.",
        detail:
          "Slowly. A filter opening over eight bars is a performance; the same move in one second is a noise. Pick one control and commit to it.",
        hardwareTargets: ["cutoffKnob", "reverbKnob"],
        visualMode: "full-plus-inset",
        expectedSound:
          "The groove changing character underneath you while it keeps running.",
        whyItMatters:
          "Everything so far has been arranging what plays. This changes what things sound like while they play, which is the last kind of control the instrument offers you.",
        checkpoint:
          "You have changed the sound of the running groove with a knob and brought it back.",
        recoveryHelp:
          "Turn the knob back by ear. None of this is written anywhere unless you save, so the stored version of your program is untouched whatever you do here.",
        nextHint: "One thought before you finish.",
      },
      {
        id: "I10-S10",
        title: "Use what fits, not everything",
        instruction:
          "Play the groove once more, using only the two or three controls that actually suited it.",
        detail:
          "You have eight or nine tools available. A good performance uses a few of them well rather than all of them in turn. Decide which ones this groove wants and leave the rest alone.",
        hardwareTargets: ["partSelectGroup", "tempoSection", "pitchControl"],
        visualMode: "full",
        expectedSound:
          "Your groove, performed with a few deliberate moves rather than a demonstration of every control.",
        whyItMatters:
          "Working through a list of controls is how you learn them. Choosing between them is how you use them, and it is the difference between a demonstration and a performance.",
        checkpoint:
          "You have performed your groove using a few controls you chose deliberately.",
        recoveryHelp:
          "If you are not sure which fit, take one away and see whether the performance is worse. It is the same question as muting a part, asked about your own playing.",
        nextHint: "Last step: stop it properly.",
      },
      {
        id: "I10-S11",
        title: "Stop cleanly",
        instruction:
          "Bring the parts back in, let the loop finish, and press Play/Stop.",
        detail:
          "Unmute what you muted, put the Mod control back toward you, turn the arpeggiator off if you used it, and stop at the end of a loop rather than in the middle of one.",
        hardwareTargets: ["playStopButton", "modControl"],
        visualMode: "full-plus-inset",
        expectedSound: "The groove ending where it was meant to, rather than being cut off.",
        whyItMatters:
          "Your saved program is untouched by everything you just did, so there is nothing to lose — but leaving the instrument as you found it is what makes the next session start well rather than with a mystery.",
        checkpoint:
          "The pattern is stopped, nothing is left muted or held, and your saved program is intact.",
        recoveryHelp:
          "If anything is still sounding, check ARPEGGIO Key Hold and the Mod control. If you changed something you want to keep, save the program again — otherwise the stored version is exactly as you left it in I09.",
        nextHint:
          "That is the course. You can build a groove, save it, and play it.",
      },
    ],
  },
};
