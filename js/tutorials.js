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
      "Browse the JD-Xi's sounds by ear. You will change tones, change whole programs, and keep the ones you like so you can find them again.",
    estimatedMinutes: 9,
    prerequisites: ["B02"],
    learningGoals: [
      "Change the sound the keys play, and go back again.",
      "Use the Category dial to jump between different kinds of sound.",
      "Tell a whole program apart from the tone inside it.",
      "Keep a sound you like so you can recall it later.",
    ],
    // Source record: docs/tutorials/B03-SOURCE-NOTES.md
    // B03 is the first Beginner tutorial that selects another Program or
    // Tone, so it is the first to carry the protect-your-work preflight
    // (B03-S02) immediately before that first discard-capable transition.
    // The Favorite steps use Roland's own documented empty-slot signal --
    // pressing an unregistered Favorite button reports "Not Registered!"
    // (OM p.5) -- rather than asserting that any button is free.
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
          "From the next step onward you will select different tones and different programs. On the JD-Xi, doing that throws away an edited sound that has not been saved. This tutorial cannot tell what state your instrument is in, so the decision is yours: if there is unsaved work you want to keep, stop here and come back after you have learned to save it.",
        // The two -/+ pairs are the controls whose use from B03-S04 onward is
        // discard-capable, so the preflight highlights exactly them.
        hardwareTargets: ["programValueButtons", "toneButtons"],
        visualMode: "full",
        whyItMatters:
          "The JD-Xi holds the sound you are editing in a working area, not in permanent storage. Selecting another tone or another program replaces what is in that working area, and there is no undo. Nothing warns you first, which is why this step exists.",
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
        nextHint: "So far you have changed the tone. There is a bigger unit above it.",
      },
      {
        id: "B03-S09",
        title: "Change the whole program",
        instruction: "Press Value + once, then play a key.",
        detail:
          "This is the pair marked Value, with Program (Pattern) printed above it — not the Tone pair. It selects a whole program: all four parts, the effects, and the pattern together.",
        hardwareTargets: ["programValuePlusButton"],
        visualMode: "full-plus-inset",
        expectedSound: "A different sound, and possibly a very different character.",
        whyItMatters:
          "A program is the whole setup. A tone is one sound inside it. Reaching for Value when you meant Tone is the most common way a beginner loses the sound they had, because it replaces everything at once.",
        checkpoint:
          "The program number on the upper line of the display has changed.",
        recoveryHelp:
          "Press Value − to step back to the program number you were on. The program itself is unchanged — only anything you had edited and not saved is gone.",
        nextHint: "Programs are grouped into banks.",
      },
      {
        id: "B03-S10",
        title: "Move between banks",
        instruction: "Hold down Shift and press Value +.",
        detail:
          "This switches banks rather than stepping one program at a time. Roland's preset banks are A to D, and the user banks — where your own saved programs go — are E to H.",
        hardwareTargets: ["shiftButton", "programValuePlusButton"],
        visualMode: "full-plus-inset",
        checkpoint: "The letter in front of the program number has changed.",
        recoveryHelp:
          "Hold Shift and press Value − to go back. If the letter did not change, make sure Shift is held down before you press Value.",
        nextHint: "Now keep a sound you liked.",
      },
      {
        id: "B03-S11",
        title: "Find a free Favorite button",
        instruction: "Press Favorite, then press one of the buttons numbered 01 to 16.",
        detail:
          "With Favorite lit, the numbered buttons become favorite slots. If the one you press has nothing stored, the display reports “Not Registered!” — that is the JD-Xi telling you the slot is free. If instead a sound loads, that button is already in use, so try another one.",
        hardwareTargets: ["favoriteButton", "stepButtons"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "Registering a favorite replaces whatever was on that button, and the JD-Xi does not ask first. Checking for “Not Registered!” is the one way it will tell you a slot is free before you use it.",
        checkpoint:
          "You have found a numbered button that reports “Not Registered!”, and you have made a note of which one it is.",
        recoveryHelp:
          "If pressing a button loaded a different sound, that button was already registered — the sound you were auditioning has been replaced, and you can press Value − and + or step through tones again to find it. Try a different numbered button.",
        nextHint: "Now go back and get the sound you wanted to keep.",
      },
      {
        id: "B03-S12",
        title: "Register the sound you liked",
        instruction:
          "Select the program you want to keep, then hold down Favorite and press that free numbered button.",
        detail:
          "The program that is selected right now is the one that gets registered. Use the free button you found in the last step, not one that already had something on it.",
        hardwareTargets: ["favoriteButton", "stepButtons"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "A favorite also remembers which part was selected when you registered it, so recalling it brings back the part you were playing as well as the sound.",
        checkpoint:
          "Pressing that numbered button while Favorite is lit brings your sound back.",
        recoveryHelp:
          "If you registered it to the wrong button, register it again to the button you meant. To clear a registration, hold down Erase and press that numbered button while Favorite is lit. Note that registering stores the program as it is saved — if you have edited a sound and not saved it, save the program first, which is what N09 teaches.",
        nextHint: "Last step: back to where you started.",
      },
      {
        id: "B03-S13",
        title: "Back to the top screen",
        instruction: "Press Favorite to turn it off, then press Exit until you reach the top screen.",
        detail:
          "Turning Favorite off returns the numbered buttons to their normal job.",
        hardwareTargets: ["favoriteButton", "exitButton"],
        visualMode: "full",
        checkpoint: "Favorite is no longer lit, and the display is back on the top screen.",
        recoveryHelp:
          "If the numbered buttons still seem to be selecting sounds, Favorite is still lit — press it once more.",
        nextHint:
          "You can find and keep sounds now. Next, meet the four parts those sounds live in.",
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
      "Every JD-Xi program is made of four parts. You will hear each one from the keys and learn why only one of them plays at a time.",
    estimatedMinutes: 7,
    prerequisites: ["B03"],
    learningGoals: [
      "Name the four parts and find their buttons.",
      "Hear each part from the keys.",
      "Explain why the keys play only one part at a time.",
    ],
    // Source record: docs/tutorials/B04-SOURCE-NOTES.md
    // B04 deliberately performs NO Program or Tone selection: pressing a Part
    // Select button chooses which part the keys play and discards nothing, so
    // the tutorial needs no protect-your-work preflight. The differences in
    // how each part's tone is chosen are described, not performed -- B03
    // already taught the doing.
    steps: [
      {
        id: "B04-S01",
        title: "Four parts, one program",
        instruction: "Find the four Part Select buttons.",
        detail:
          "They read Digital Synth 1, Digital Synth 2, Drums and Analog Synth. Whichever program is loaded, it is made of these same four parts.",
        hardwareTargets: ["partSelectGroup"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "A program is not one sound. It is four sound-making sections plus the effects and the pattern that go with them. Everything else in this tutorial follows from that.",
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
        nextHint: "One part has controls of its own on the panel.",
      },
      {
        id: "B04-S07",
        title: "The Analog Synth's own controls",
        instruction: "Find the Oscillator and Sub OSC buttons and the pulse width knob.",
        detail:
          "Look, do not press. These three belong to the Analog Synth part only, and they choose the raw waveform its sound is built from. The other parts have no equivalent on the panel.",
        hardwareTargets: ["analogOscSection"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "The four parts are not four copies of the same thing. The two digital parts share one design, the Drums part gives each key its own instrument, and the Analog Synth has real analog circuits with their own front-panel controls. That is why the same knob can feel different depending on the part you have selected.",
        checkpoint: "You can point to the Oscillator button, the Sub OSC button and the pulse width knob.",
        recoveryHelp:
          "These sit to the left of the panel, below the sound-selection controls. If you pressed Oscillator, you changed the Analog Synth's waveform — press it again to step on through the waveforms until you are back where you started, or move on: nothing is saved unless you save the program.",
        nextHint: "Last step: what to remember.",
      },
      {
        id: "B04-S08",
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
      "Get comfortable with the keys themselves: high and low, soft and firm, short and long, and the two controls beside them that bend and shake the sound.",
    estimatedMinutes: 8,
    prerequisites: ["B04"],
    learningGoals: [
      "Hear how position, force and length change what you play.",
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
    // B05-S10 is firmware-gated: Transpose exists from system version 1.50.
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
        nextHint: "Now change how you press, not where.",
      },
      {
        id: "B05-S03",
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
        id: "B05-S04",
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
        id: "B05-S05",
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
        id: "B05-S06",
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
        id: "B05-S07",
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
        id: "B05-S08",
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
        id: "B05-S09",
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
          "One more, and whether you have it depends on your JD-Xi's system version.",
      },
      {
        id: "B05-S10",
        title: "Shift the whole instrument (version 1.50 or later)",
        instruction: "Hold down Shift and press Octave Up.",
        detail:
          "This is Transpose, and it shifts the pitch in semitone steps rather than whole octaves. It was added in JD-Xi system version 1.50. If your instrument is older it will not have this, and you can skip straight to the last step — nothing else in this tutorial depends on it.",
        hardwareTargets: ["shiftButton", "octaveUpButton", "display"],
        visualMode: "display-focus",
        expectedDisplay: ["< TRANSPOSE +1 >", "D1:Ah Super Saw"],
        syntheticDisplay: false,
        displayNote:
          "Roland's illustration from the Version 1.50 supplementary manual. The number is whatever you set, and the lower line shows your own part and tone name.",
        expectedSound:
          "Everything you play is a semitone higher than before, keys included.",
        whyItMatters:
          "Octave steps are big jumps. Transpose moves things by the smallest step there is, which is how you match a sound to a song without learning to play in a different key.",
        checkpoint:
          "The display briefly shows a TRANSPOSE value, and what you play sounds a semitone higher.",
        recoveryHelp:
          "Hold Shift and press Octave Down once to bring it back to 0. If nothing happened at all, your JD-Xi is very likely running a system version earlier than 1.50, which does not have Transpose — that is not a fault, and N01 shows you where to read your version. Transpose is never saved in any case, and returns to 0 when you switch the power off.",
        nextHint: "Last step: leave things tidy.",
      },
      {
        id: "B05-S11",
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
          "This switches which kind of filtering is applied, and the indicator that is lit shows the one selected. The digital parts offer four types; the Analog Synth part has only a low-pass filter.",
        hardwareTargets: ["filterTypeButton"],
        visualMode: "full-plus-inset",
        expectedSound:
          "Cutoff now removes a different part of the sound — for instance thinning it out from below instead of darkening it from above.",
        whyItMatters:
          "Same knob, different job. Knowing the type button exists explains why Cutoff sometimes seems to do the opposite of what you expected.",
        checkpoint: "A different filter indicator is lit and Cutoff behaves differently.",
        recoveryHelp:
          "Keep pressing the Type button to step on through the types until you find the one you like the sound of. If you have selected the Analog Synth part, only the low-pass filter is available and the button will not offer you the others.",
        nextHint: "Next section along: how loud, and how the sound moves through time.",
      },
      {
        id: "B06-S06",
        title: "Set the part's own level",
        instruction: "Play some keys and turn the AMP/ENV Level knob.",
        detail:
          "This sets the volume of the sound itself, which is not the same thing as Master Volume.",
        hardwareTargets: ["levelKnob"],
        visualMode: "full-plus-inset",
        expectedSound: "The part gets quieter or louder.",
        whyItMatters:
          "Master Volume controls everything going to your headphones and speakers. Level belongs to the sound. When you later put several parts together, Level is how you balance them against each other, and Master Volume is how loud the whole thing is in the room.",
        checkpoint: "You can change this part's loudness without touching Master Volume.",
        recoveryHelp:
          "If the sound has gone, turn Level back to the right. If it is uncomfortably loud, turn Master Volume down first and then set Level where you want it.",
        nextHint: "Now the knob that changes the shape of a note.",
      },
      {
        id: "B06-S07",
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
        id: "B06-S08",
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
        id: "B06-S09",
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
        id: "B06-S10",
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
        id: "B06-S11",
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
      "Put your sound in a room, add echoes, and give it some grit. Four knobs and two buttons, all by ear.",
    estimatedMinutes: 9,
    prerequisites: ["B06"],
    learningGoals: [
      "Add space and echo to a sound.",
      "Change the character of a sound with the two effect slots.",
      "Know the fixed order the effects run in.",
      "Know what to check when an effect seems to do nothing.",
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
        visualMode: "full-plus-inset",
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
        title: "Choose what Effect 1 does",
        instruction: "Press the Effect 1 Type button.",
        detail:
          "Effect 1 offers Distortion, Fuzz, Compressor and Bit Crusher. The button steps between them.",
        hardwareTargets: ["effect1TypeButton"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "These four are about grit and weight rather than space. They change what the sound is made of, not where it seems to be.",
        checkpoint: "You have stepped the Effect 1 type at least once.",
        recoveryHelp:
          "Keep pressing to step on to the next type. If nothing seems to change, that is expected until you turn the Effect 1 knob up in the next step — the type chooses what the effect is, and the knob decides how much of it you get.",
        nextHint: "Now turn it up.",
      },
      {
        id: "B07-S06",
        title: "Turn Effect 1 up",
        instruction: "Hold a key down and turn the Effect 1 knob up.",
        detail: "This knob sets how much of the chosen effect is applied.",
        hardwareTargets: ["effect1Knob"],
        visualMode: "full-plus-inset",
        expectedSound:
          "Depending on the type you chose: dirtier, harder, more compressed, or crunchy and digital.",
        checkpoint: "The character of the sound changes as you turn the knob.",
        recoveryHelp:
          "Turn Effect 1 back to the left to remove it. Distortion and Fuzz can get much louder as you turn them up — if it jumps in volume, turn Master Volume down first.",
        nextHint: "The second slot does different things again.",
      },
      {
        id: "B07-S07",
        title: "Try Effect 2",
        instruction: "Press the Effect 2 Type button, then turn the Effect 2 knob up.",
        detail:
          "Effect 2 offers Flanger, Phaser, Ring Mod and Slicer. As before, the button chooses which and the knob decides how much.",
        hardwareTargets: ["effect2TypeButton", "effect2Knob"],
        visualMode: "full-plus-inset",
        expectedSound:
          "Sweeping, swooshing, metallic or chopped, depending on which type is selected.",
        checkpoint: "You have heard at least one Effect 2 type change the sound.",
        recoveryHelp:
          "Turn the Effect 2 knob back to the left to remove it. Ring Mod in particular can make a sound unrecognizable — that is what it does, not a fault.",
        nextHint: "One button decides which of these are switched on at all.",
      },
      {
        id: "B07-S08",
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
        nextHint: "Two facts worth having before you go.",
      },
      {
        id: "B07-S09",
        title: "When an effect does nothing",
        instruction: "Read this before you decide an effect is broken.",
        detail:
          "Roland lists the usual causes: the effect switch may be off; the send level to that effect may be zero; the effect's own output level, or the delay or reverb level, may be zero; or the part may not be routed to that effect at all. Any one of them makes a knob look dead.",
        hardwareTargets: ["effectsSection"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "A knob that appears to do nothing is the most discouraging thing that can happen to a beginner, and on this instrument it usually has an ordinary explanation somewhere else in the settings rather than being a fault.",
        checkpoint: "You know there is a documented list to work through rather than guessing.",
        recoveryHelp:
          "The quickest check by ear is to press Effects On/Off and see whether anything changes at all. If the sound never changes, try a different program — programs carry their own effect settings, and a program routed away from the effects will not respond to these knobs.",
        nextHint: "Last thing: the order they run in, and where your changes went.",
      },
      {
        id: "B07-S10",
        title: "The order, and what is kept",
        instruction: "Turn Reverb up and Effect 1 up together, and listen to which happens first.",
        detail:
          "The audio always passes through Effect 1, then Effect 2, then Delay, then Reverb, in that order, and only the effects that are switched on apply. One set of effects serves the whole program.",
        hardwareTargets: ["effectsSection"],
        visualMode: "full-plus-inset",
        expectedSound:
          "The grit from Effect 1 is inside the space that Reverb puts around it — the room is around the dirty sound, not the other way round.",
        whyItMatters:
          "The order is fixed and you cannot change it. Knowing it explains why distortion after reverb is not something this instrument will do, and why turning up two effects can sound different from what you expected.",
        checkpoint:
          "You can describe the order the four effects run in without looking it up.",
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
      "Start and stop the JD-Xi's pattern sequencer, and listen inside a pattern by muting parts while it runs. You will not record anything.",
    estimatedMinutes: 8,
    prerequisites: ["B07"],
    learningGoals: [
      "Start and stop a pattern.",
      "Tell from the display that a pattern is running.",
      "Hear what one part is contributing by muting it.",
      "Know why a pattern might not play.",
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
        nextHint: "With a pattern running, you can take it apart by ear.",
      },
      {
        id: "B08-S06",
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
        id: "B08-S07",
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
        id: "B08-S08",
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
        id: "B08-S09",
        title: "If a pattern will not play",
        instruction: "Stop the pattern with Play/Stop.",
        detail:
          "Roland documents one specific cause worth knowing: if the system setting Sync Mode is set to SLAVE, the JD-Xi waits for timing messages from another device and patterns will not play on their own. Left as MASTER, which is the setting for using the JD-Xi by itself, they play normally.",
        hardwareTargets: ["playStopButton"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "It is a single setting with a big effect, and nothing on the front panel hints at it — so a pattern that will not start looks like a broken instrument rather than a setting.",
        checkpoint: "The pattern is stopped and you know what to check if one will not start.",
        recoveryHelp:
          "That setting lives in the JD-Xi's system settings, and this tutorial deliberately does not take you in there: anything you change in the system settings is saved automatically as you leave the screen, so it is not a place to poke around. N01 Learn the menu controls shows you how to move about in there safely, and N10 Getting unstuck works through problems like this one.",
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
      "Speed a pattern up, slow it down, set the tempo by tapping, and — on a JD-Xi at system version 1.50 or later — give it a bouncy shuffle.",
    estimatedMinutes: 8,
    prerequisites: ["B08"],
    learningGoals: [
      "Change the tempo with the knob and by tapping.",
      "Know that tempo belongs to the program and is shared with the pattern.",
      "Add a shuffle feel, where your instrument supports it.",
    ],
    // Source record: docs/tutorials/B09-SOURCE-NOTES.md
    // Two mechanisms, deliberately separated by evidence class: tempo is
    // baseline behaviour (OM p.6) and shuffle was added at system version
    // 1.50 (v1.50 p.2). The shuffle steps state that requirement in
    // learner-facing text and are written so an older instrument simply
    // skips them -- B09 needs no version precondition and makes no claim
    // about what version any particular JD-Xi is running. Tempo Lock is a
    // SYSTEM parameter and is deliberately not performed here.
    steps: [
      {
        id: "B09-S01",
        title: "Protect any work you want to keep",
        instruction:
          "Decide whether this program holds a tempo or a feel you have set and not saved.",
        detail:
          "The tempo belongs to the program, and so does the shuffle setting. Changing them here replaces whatever this program is currently set to. If you have been building something and have not saved it, save it first.",
        hardwareTargets: ["tempoSection"],
        visualMode: "full-plus-inset",
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
          "Tap at a steady pace, as though counting a song in. Roland's requirement is three presses or more, at quarter-note intervals — which is to say, at the speed you would count along.",
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
          "One more way to change the feel, and whether you have it depends on your JD-Xi.",
      },
      {
        id: "B09-S06",
        title: "About shuffle (version 1.50 or later)",
        instruction: "Keep the pattern playing and read this before the next two steps.",
        detail:
          "Shuffle changes the timing inside the beat rather than the speed of it. Roland describes 50% as notes spaced at equal intervals; raising it gives an increasingly bouncy feel. It was added in JD-Xi system version 1.50, so an older instrument will not have it — in that case skip to the last step, and nothing else here is affected.",
        hardwareTargets: ["playStopButton"],
        visualMode: "full",
        whyItMatters:
          "Tempo is how fast. Shuffle is how it swings. Two patterns at the same tempo can feel completely different, and this is the control that does it.",
        checkpoint: "The pattern is still playing and you know what you are about to change.",
        recoveryHelp:
          "Shuffle needs a pattern to be playing before it will respond. If you have stopped, press Play/Stop again. If you would rather check your system version first, N01 shows you where to read it.",
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
          "Enter is normally the button that confirms things. From system version 1.50 it also works as a held modifier, in the same way Shift does — which is a genuinely surprising thing about this instrument and worth meeting deliberately rather than by accident.",
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
          "Turn it back to 50% and the notes are evenly spaced again — that is Roland's own description of that value. If nothing appears on the display, check the pattern is playing, that Enter is held down while you turn, and that you are turning the Depth knob in the LFO section. If it still does nothing, your JD-Xi is very likely running a system version earlier than 1.50, which does not have shuffle.",
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
          "B09 Change the feel covers this, including the shuffle setting if your JD-Xi is at system version 1.50 or later.",
        nextHint: "One last thing, and it is the honest one.",
      },
      {
        id: "B10-S10",
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
      "Find out how the JD-Xi organizes everything: what a program holds, what a part is, and where the settings for each of them live. You will change nothing.",
    estimatedMinutes: 9,
    prerequisites: ["N01"],
    learningGoals: [
      "Say what a program contains and what a part contains.",
      "Open Program Edit and move around it safely.",
      "Tell which part you are looking at from the display.",
      "Know where your own saved programs go.",
    ],
    // Source record: docs/tutorials/N02-SOURCE-NOTES.md
    // N02 changes nothing on the instrument. It selects no program and no
    // tone, and presses no Value button anywhere -- the same discipline N01
    // uses, for the same reason (prerequisites are advisory, so the learner
    // may arrive with unsaved work). Part Select is used freely because it
    // only chooses what you are looking at or playing.
    //
    // The teaching contrast with N01 is deliberate: SYSTEM saves itself as
    // you leave it, and Program Edit does not. Both facts are Roland's.
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
        checkpoint: "You can read your JD-Xi's current bank letter and program number.",
        recoveryHelp:
          "Press Exit a few more times. Exit moves back one screen at a time, so it always takes you toward the top screen, never further in.",
        nextHint: "That one program contains more than you might expect.",
      },
      {
        id: "N02-S02",
        title: "A program holds four parts",
        instruction: "Find the four Part Select buttons.",
        detail:
          "Digital Synth 1, Digital Synth 2, Drums and Analog Synth. Every program has all four, always.",
        hardwareTargets: ["partSelectGroup"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "This is why switching program changes so much at once: you are not swapping one sound, you are swapping all four parts, their effects, their arpeggio and their pattern together.",
        checkpoint: "You can point to all four Part Select buttons.",
        recoveryHelp:
          "They are in the left half of the panel, to the right of the display, in a column of four.",
        nextHint: "Each of those parts holds exactly one sound.",
      },
      {
        id: "N02-S03",
        title: "Each part holds one tone",
        instruction: "Press Digital Synth 1, then press Drums, watching the lower line.",
        detail:
          "The lower line shows the tone belonging to whichever part you have selected. Pressing these buttons only changes which part you are looking at and playing — it selects no new sound and throws nothing away.",
        hardwareTargets: ["partSelectGroup", "display"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "A tone is one sound. A part holds one tone. A program holds four parts. Those three sentences are the whole structure, and almost every menu on this instrument sits at one of those three levels.",
        checkpoint:
          "The lower line of the display changes as you move between the two parts.",
        recoveryHelp:
          "If the lower line does not change, press each button firmly and give the display a moment. If it shows no tone number at all, that is Roland's signal that the sound has been edited and not saved — it is not a fault.",
        nextHint: "Now go and look at the program's own settings.",
      },
      {
        id: "N02-S04",
        title: "Open Program Edit",
        instruction:
          "Press Menu/Write, then use Cursor to select Program Edit and press Enter.",
        detail:
          "Program Edit is the second item in the Menu, just after SYSTEM. Use Cursor ► to reach it.",
        hardwareTargets: ["menuWriteButton", "display"],
        visualMode: "display-focus",
        expectedDisplay: ["PROG: COMMON", "Tempo 120"],
        syntheticDisplay: false,
        displayNote:
          "Roland's illustrated Program Edit COMMON screen. Your JD-Xi shows its own program's tempo.",
        whyItMatters:
          "These are the settings that belong to the whole program rather than to any one part — which is why the tempo you set in B09 lives here.",
        checkpoint:
          "The upper line reads PROG: COMMON and the lower line shows a parameter with a value.",
        recoveryHelp:
          "If you held Menu/Write down instead of pressing it, the PORTAMENTO screen appears instead — press Exit once and try a short press. If you opened the wrong Menu item, press Exit once to get back to the list.",
        nextHint: "Read the next step before pressing anything else.",
      },
      {
        id: "N02-S05",
        title: "Look, do not change",
        instruction: "Leave the Value buttons alone from here on.",
        detail:
          "You are in a screen where the Value buttons edit the program. This tutorial is a tour, not an edit, so Cursor and Shift are all you need. One difference from SYSTEM is worth knowing: the JD-Xi does not save what you do in here as you leave, so an accidental change is not written anywhere — but it does replace what is loaded until you switch program.",
        hardwareTargets: ["programValueButtons"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "N01 taught the opposite case: SYSTEM saves itself automatically as you leave the screen. Program Edit does not. Knowing which screens write and which do not is most of what makes the menus safe to explore.",
        checkpoint:
          "You know which two buttons to avoid in here, and why this screen behaves differently from SYSTEM.",
        recoveryHelp:
          "If you have already pressed Value, nothing has been written to storage. The change sits in the loaded program until you select another program, which discards it — and would discard anything else unsaved along with it.",
        nextHint: "Now move to the other group of settings.",
      },
      {
        id: "N02-S06",
        title: "Jump to the part settings",
        instruction: "Hold down Shift and press Cursor ►.",
        detail:
          "This moves between the groups of a settings screen, exactly as it did inside SYSTEM in N01. Program Edit has a COMMON group and a MAIN group.",
        hardwareTargets: ["shiftButton", "cursorRightButton", "display"],
        visualMode: "display-focus",
        expectedDisplay: ["PROG: MAIN D1", "Level 127"],
        syntheticDisplay: false,
        displayNote:
          "Roland's illustrated Program Edit MAIN screen. The two letters at the right show the part being edited, and the value is your own program's.",
        whyItMatters:
          "The same gesture works here as in SYSTEM because both are settings screens. That is what makes N01's menu pattern worth learning once rather than per screen.",
        checkpoint: "The upper line now reads PROG: MAIN, with two letters at its right.",
        recoveryHelp:
          "If the group did not change, you may already be at the last one — keep Shift held and press Cursor ◄ instead. Check Shift is held down before you press Cursor.",
        nextHint: "Those two letters are the useful part.",
      },
      {
        id: "N02-S07",
        title: "Which part you are editing",
        instruction: "Press Digital Synth 2, and watch the right of the upper line.",
        detail:
          "In this screen the two letters at the right show which part the settings belong to: D1 and D2 for the digital parts, DR for Drums, AN for Analog Synth. The Part Select buttons choose which one you are editing.",
        hardwareTargets: ["partSelectGroup", "display"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "This is the answer to the question that confuses people most in here: the screen looks identical for all four parts, and those two letters are the only thing telling you which one you are about to change.",
        checkpoint:
          "The letters at the right of the upper line changed from D1 to D2 when you pressed the button.",
        recoveryHelp:
          "Press each of the four Part Select buttons in turn and watch the letters follow. Nothing is being changed by doing this — you are only choosing what the screen is showing you.",
        nextHint: "Now see what settings a part actually has.",
      },
      {
        id: "N02-S08",
        title: "Walk along a part's settings",
        instruction: "Press Cursor ► several times, reading each parameter name.",
        detail:
          "You will pass things like the part's own level, whether it is muted, where it sits left to right, and how it is routed to the effects. Read them; change none of them.",
        hardwareTargets: ["cursorRightButton", "display"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "These are the controls you will reach for when you have several parts playing at once and need them to sit together — which is exactly what N06 is about.",
        checkpoint:
          "You have seen several different parameter names on the lower line, with the group name unchanged above.",
        recoveryHelp:
          "Cursor cannot change a value, so nothing has been altered no matter how far you walk. Press Cursor ◄ to come back.",
        nextHint: "Now come out again.",
      },
      {
        id: "N02-S09",
        title: "Leave without changing anything",
        instruction: "Press Exit until you are back at the top screen.",
        detail:
          "A few presses will do it. Nothing you did in here was written anywhere.",
        hardwareTargets: ["exitButton", "display"],
        visualMode: "full-plus-inset",
        checkpoint: "The two-line top screen is back.",
        recoveryHelp:
          "Keep pressing Exit. If the screen still looks unfamiliar, one more press usually does it.",
        nextHint: "One last thing: where your own work will live.",
      },
      {
        id: "N02-S10",
        title: "Where your programs go",
        instruction: "Look at the bank letter on the upper line.",
        detail:
          "Roland's programs are in banks A to D — sixty-four in each. Your own saved programs go in banks E to H, sixty-four in each of those too. So a full JD-Xi holds 256 sounds from Roland and room for 256 of yours.",
        hardwareTargets: ["display"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "When N09 asks you to choose somewhere to save, it will be one of the E to H slots. Knowing that now means the saving tutorial is about being careful rather than about being lost.",
        checkpoint:
          "You can say which banks hold Roland's sounds and which hold yours.",
        recoveryHelp:
          "To see a different bank, hold Shift and press a Value button — but be aware that changes program, which discards anything you have edited and not saved. This tutorial has changed nothing, so if you have not edited anything today it is safe to look.",
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
      "Learn how a JD-Xi pattern is built: steps, measures, and how long a step lasts. You will change the length of a pattern and see the JD-Xi ask you a question before it does it.",
    estimatedMinutes: 10,
    prerequisites: ["N02"],
    learningGoals: [
      "Say what a step and a measure are on this instrument.",
      "Move between the measures of a pattern.",
      "Change how many measures a pattern has.",
      "Know what a scale setting changes, and why it is left alone here.",
    ],
    // Source record: docs/tutorials/N03-SOURCE-NOTES.md
    // N03 records no notes. It changes one thing -- pattern length -- and
    // does so behind the protect-your-work preflight at N03-S05, because
    // changing it alters the loaded program's pattern. Scale Setting is
    // opened and read but deliberately not changed: see the source notes.
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
        checkpoint: "The two numbers are counting, and the second one cycles faster than the first.",
        recoveryHelp:
          "If nothing counts at all, B08 covers finding a program with a pattern in it, and the one system setting that stops patterns playing.",
        nextHint: "Now stop, and look at where those beats live.",
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
          "This is what makes a drum machine approachable: you are not playing in time, you are deciding in advance what lands where. N04 does exactly that.",
        checkpoint: "The pattern is stopped and you can point to all sixteen numbered buttons.",
        recoveryHelp:
          "The numbered row runs to the right of the Favorite button, above the keys. If pressing Play/Stop did not stop it, press it once more.",
        nextHint: "Sixteen steps is one measure. A pattern can be longer.",
      },
      {
        id: "N03-S03",
        title: "Up to four measures",
        instruction: "Read this before you change anything.",
        detail:
          "A JD-Xi pattern can be up to four measures long. The sixteen buttons show one measure at a time, so on a longer pattern they are showing you a window onto part of it.",
        hardwareTargets: ["stepButtons"],
        visualMode: "full",
        whyItMatters:
          "It explains something that otherwise looks broken: on a four-measure pattern, most of your pattern is not on the buttons in front of you at any moment.",
        checkpoint: "You know the buttons show one measure at a time.",
        recoveryHelp:
          "Nothing to recover from — this step changes nothing. The next step shows you how to move the window.",
        nextHint: "So there must be a way to move between measures.",
      },
      {
        id: "N03-S04",
        title: "Move between measures",
        instruction:
          "Start the pattern, then hold down Shift and press one of the buttons 01 to 04.",
        detail:
          "While a pattern is playing or recording, Shift with one of the first four numbered buttons chooses which measure the row is showing. Holding Shift lights those buttons, and the current measure blinks.",
        hardwareTargets: ["shiftButton", "stepButtons"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "Without this you can only ever edit the first measure, which is why a longer pattern feels impossible to work on until someone shows you this gesture.",
        checkpoint:
          "Holding Shift lights some of the first four buttons, and one of them blinks.",
        recoveryHelp:
          "This one only works while the pattern is playing or recording — if nothing lights, press Play/Stop first. If your JD-Xi's scale is set to 32nd notes, the range is the first eight buttons rather than the first four.",
        nextHint: "Now change the pattern itself. First, one thing to settle.",
      },
      {
        id: "N03-S05",
        title: "Protect any work you want to keep",
        instruction:
          "Stop the pattern, and decide whether this program holds work you have not saved.",
        detail:
          "The next steps change how many measures this pattern has. That alters the pattern in the loaded program. If there is a pattern or a sound here you have been building and have not saved, stop and save it first.",
        hardwareTargets: ["playStopButton", "programValueButtons"],
        visualMode: "full",
        whyItMatters:
          "The change is not written to storage, so it is not permanent — but it does replace what is loaded, and the only way back is to select another program, which throws away everything unsaved at once.",
        checkpoint:
          "The pattern is stopped, and you have decided: either there is nothing to keep, or you are going to save it first.",
        recoveryHelp:
          "N09 Save your work is the tutorial that teaches saving. If you would rather not risk this program at all, you can stop N03 here — the rest of the Novice path does not depend on having changed a pattern length.",
        nextHint: "Now open the setting.",
      },
      {
        id: "N03-S06",
        title: "Open Pattern Length",
        instruction:
          "Press Menu/Write, use Cursor to select Pattern Length, and press Enter.",
        detail:
          "It is one of the later items in the Menu list, after the various Edit screens.",
        hardwareTargets: ["menuWriteButton", "display"],
        visualMode: "full-plus-inset",
        checkpoint: "The display is showing the pattern length screen with a number of measures.",
        recoveryHelp:
          "If you overshoot in the Menu list, Cursor ◄ walks back. If you opened the wrong item, press Exit once to return to the list. A long press of Menu/Write opens PORTAMENTO instead of the Menu — press Exit and use a short press.",
        nextHint: "Now change it, and read what the JD-Xi asks you.",
      },
      {
        id: "N03-S07",
        title: "Choose a length, and answer the question",
        instruction: "Use Value to choose a number of measures, then press Enter.",
        detail:
          "The JD-Xi now asks a question rather than acting straight away. Enter fills the new measures by copying from the pattern you already have; Exit adds blank measures instead. Either one applies the change — this is not a cancel.",
        hardwareTargets: ["programValueButtons", "enterButton", "display"],
        visualMode: "display-focus",
        expectedDisplay: ["With Copying ?", "[Exit]:N [Ent]:Y"],
        syntheticDisplay: false,
        displayNote:
          "Roland's illustrated prompt from the Pattern Length procedure, reproduced with its own left-to-right order.",
        whyItMatters:
          "It is worth reading this screen carefully, because Exit here does not mean cancel — it means answer no and carry on. On this instrument the same button does not always do the same thing, which is exactly why N01 spent a whole tutorial on that idea.",
        checkpoint:
          "The pattern length has changed to the number you chose.",
        recoveryHelp:
          "If you did not want the change, set the length back the same way. Nothing has been written to storage: selecting another program without saving returns this one to its stored length — and discards everything else unsaved along with it.",
        nextHint: "One more Menu item decides what a step is worth.",
      },
      {
        id: "N03-S08",
        title: "Come back out",
        instruction: "Press Exit once.",
        detail:
          "That leaves the pattern length screen and puts you back on the Menu list, ready for the next item.",
        hardwareTargets: ["exitButton"],
        visualMode: "full-plus-inset",
        checkpoint: "The display is showing a menu item again rather than the length screen.",
        recoveryHelp:
          "If you pressed Exit more than once you may be back at the top screen — that is fine, press Menu/Write once to open the Menu again.",
        nextHint: "One more Menu item decides what a step is worth.",
      },
      {
        id: "N03-S09",
        title: "Look at the scale setting",
        instruction: "Use Cursor to select Scale Setting, and press Enter.",
        detail:
          "This decides how much time one step represents. Roland offers eighth-note triplets, sixteenth notes, or thirty-second notes. Read the value your JD-Xi is on — and this time, leave the Value buttons alone.",
        hardwareTargets: ["menuWriteButton", "display"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "Sixteen steps always means sixteen steps, but how long those sixteen steps last depends entirely on this setting. It is the difference between the row covering one measure and covering half of one.",
        checkpoint: "You can see which of the three scale values your JD-Xi is currently using.",
        recoveryHelp:
          "If you have already changed it, set it back to the value you read before you go on. If you did not read it first, the practical answer is to note what you have now and carry on — the setting affects timing rather than damaging anything.",
        nextHint: "Now come out.",
      },
      {
        id: "N03-S10",
        title: "Back to the top",
        instruction: "Press Exit until you reach the top screen.",
        hardwareTargets: ["exitButton", "display"],
        visualMode: "full-plus-inset",
        checkpoint: "The two-line top screen is back.",
        recoveryHelp: "Keep pressing Exit — it always takes you outward.",
        nextHint: "Last thing: how notes get into those steps.",
      },
      {
        id: "N03-S11",
        title: "How notes get in",
        instruction: "Look once more at the numbered row.",
        detail:
          "There are several ways to record on a JD-Xi, and the one the next tutorials use is the simplest: choose a sound, then press the numbered buttons to light the steps where you want it to happen. Roland calls it TR-REC.",
        hardwareTargets: ["stepButtons", "patternSequencerSection"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "You do not have to play in time to make a pattern on this instrument. You decide where things land, press play, and listen — which is why a complete beginner can build a working beat in a few minutes.",
        checkpoint:
          "You can describe a pattern as steps and measures, and you know what the numbered buttons are for.",
        recoveryHelp:
          "Nothing to recover from — this step changes nothing. If your pattern length or scale ended up somewhere you did not want, selecting another program without saving restores this program's stored version, and discards anything unsaved with it.",
        nextHint:
          "You know how a pattern is built. Next, build one.",
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
    estimatedMinutes: 12,
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
        nextHint: "Now pick which drum you are placing.",
      },
      {
        id: "N04-S03",
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
        id: "N04-S04",
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
        id: "N04-S05",
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
        id: "N04-S06",
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
        id: "N04-S07",
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
        nextHint: "Now the difference between quiet and gone.",
      },
      {
        id: "N04-S08",
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
        id: "N04-S09",
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
        id: "N04-S10",
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
      "Put pitched notes into a pattern, two different ways: lighting steps as you did for drums, and entering notes one at a time with the JD-Xi advancing for you.",
    estimatedMinutes: 12,
    prerequisites: ["N04"],
    learningGoals: [
      "Record a note onto chosen steps of a pitched part.",
      "Use step recording to enter notes one after another.",
      "Enter a rest and a tie.",
      "Know which recording methods overwrite what is already there.",
    ],
    // Source record: docs/tutorials/N05-SOURCE-NOTES.md
    // Teaches TR-REC on a pitched part and then step recording. The
    // difference between them is a safety fact, not a stylistic one: TR-REC
    // will not overwrite a step that already holds a note, while step and
    // realtime recording delete and replace automatically (OM p.11, PG p.3).
    // N05-S11 states that plainly rather than leaving the learner to find it.
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
        title: "Start step recording",
        instruction: "Press Play/Stop to stop, then press Step Rec.",
        detail:
          "The 01 button blinks, and the display changes to a recording screen that stays until you stop. Instead of choosing steps, you now play notes and the JD-Xi advances one step for each.",
        hardwareTargets: ["stepRecButton", "display"],
        visualMode: "display-focus",
        expectedDisplay: ["Step Rec", "Velocity:Real"],
        syntheticDisplay: false,
        displayNote:
          "Roland's illustrated step-recording screen. The value shown is the current velocity setting, which you can change on this screen.",
        whyItMatters:
          "Lighting steps is a good way to place a rhythm. Playing notes in order is a better way to enter a tune, because you can hear each note as you commit it.",
        checkpoint: "The 01 button is blinking and the display is showing the recording screen.",
        recoveryHelp:
          "If nothing blinks, press Step Rec again. Make sure the pattern is stopped first. To leave without recording anything, press Step Rec once more.",
        nextHint: "Now play, one note at a time.",
      },
      {
        id: "N05-S08",
        title: "Enter notes one at a time",
        instruction: "Play a key. Then play another.",
        detail:
          "Each key you press is recorded at the blinking step, and the blink moves on to the next one. You are not playing in time — take as long as you like between notes.",
        hardwareTargets: ["keys"],
        visualMode: "full",
        expectedSound: "Each note as you enter it.",
        whyItMatters:
          "This is why step recording suits a beginner: there is no timing to get wrong. The rhythm comes from which steps you fill, not from how fast you play.",
        checkpoint:
          "The blinking button has moved along as you played, and several steps now hold notes.",
        recoveryHelp:
          "To go back to a particular step, press its numbered button — the blink moves there and the next note you play lands on it. Be aware that step recording replaces whatever was already on a step, unlike lighting steps by hand.",
        nextHint: "Two things you will want that are not notes.",
      },
      {
        id: "N05-S09",
        title: "Rests and ties",
        instruction: "Press Erase to leave a gap, then press Key Hold to hold a note longer.",
        detail:
          "During step recording, Erase enters a rest — a step with nothing on it — and the ARPEGGIO Key Hold button enters a tie, which extends the note before it across another step.",
        hardwareTargets: ["eraseButton", "keyHoldButton"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "Without these, every note is the same length and there is no silence anywhere. Gaps and long notes are most of what makes a bass line sound like music rather than a list.",
        checkpoint:
          "The blinking step advanced when you pressed each of them, without a new note being added.",
        recoveryHelp:
          "Both simply move to the next step, so if you press one by mistake you can press that step's numbered button to go back and play a note over it.",
        nextHint: "Now stop recording and hear the result.",
      },
      {
        id: "N05-S10",
        title: "Stop and listen",
        instruction: "Press Step Rec to stop recording, then press Play/Stop.",
        hardwareTargets: ["stepRecButton", "playStopButton"],
        visualMode: "full-plus-inset",
        expectedSound: "Your line playing in time, with the rests and held notes you entered.",
        checkpoint: "The pattern plays back what you entered.",
        recoveryHelp:
          "If it plays back faster or slower than you expected, that is the tempo and the scale setting rather than anything you did wrong — B09 covers tempo and N03 covers the scale setting.",
        nextHint: "One difference between the two methods is worth knowing.",
      },
      {
        id: "N05-S11",
        title: "Which method overwrites",
        instruction: "Read this before you record over anything again.",
        detail:
          "The two methods behave differently, and Roland is explicit about it. Lighting steps by hand will not record over a step that already holds a note — you have to erase it first. Step recording and realtime recording delete what was there and replace it automatically.",
        hardwareTargets: ["stepRecButton", "stepButtons"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "It decides which method is safe on a pattern you care about. Lighting steps refuses to destroy anything. Step recording will quietly replace a note you spent time on, and there is no undo.",
        checkpoint:
          "You can say which of the two methods will overwrite an existing note.",
        recoveryHelp:
          "If you have already recorded over something, it is gone — the JD-Xi has no undo. Nothing is written to storage, so selecting another program without saving restores this program's stored pattern, at the cost of discarding everything else you have done to it.",
        nextHint: "Last step: the usual reminder, and it matters more now.",
      },
      {
        id: "N05-S12",
        title: "Still not saved",
        instruction: "Leave the JD-Xi on if you want to keep this.",
        detail:
          "Your beat and your bass line are both in the same pattern, in the same loaded program. One save keeps both. Switching off, or changing program, loses both.",
        hardwareTargets: ["display"],
        visualMode: "full-plus-inset",
        checkpoint: "You have a beat and a line, and you know neither is stored yet.",
        recoveryHelp:
          "Go to N09 Save your work with this still loaded. Do not change programs on the way there.",
        nextHint:
          "You can build rhythm and melody. Next, make several parts work together.",
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
      "The keys play one part at a time, but a pattern can play all four at once. Add a third part, then balance them so they sit together instead of fighting.",
    estimatedMinutes: 11,
    prerequisites: ["N05"],
    learningGoals: [
      "Add a part to a pattern without disturbing the others.",
      "Hear what each part is contributing, on its own.",
      "Balance the parts against each other.",
      "Place a part left or right in the stereo field.",
    ],
    // Source record: docs/tutorials/N06-SOURCE-NOTES.md
    // Architecturally this used to be called "Layer sounds", which
    // overpromised: only one part is playable from the keys at a time
    // (OM p.5, source-map Q9). N06 is about arranging parts THROUGH the
    // pattern, which is Roland's own documented answer to that constraint.
    // The recording gesture taught here is the hold-a-step-and-play method,
    // chosen deliberately because it is the only one Roland documents as
    // ADDING notes without deleting what is already there (OM p.12, PG p.3).
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
          "Roland states both halves of this: you cannot select and perform on multiple parts at the same time, and you can make multiple parts be heard together by recording them to a pattern. This tutorial is the second half.",
        checkpoint: "You can hear that the keys play one part at a time.",
        recoveryHelp:
          "The last button you press wins. If you are unsure which part is selected, press the one you want again.",
        nextHint: "Before adding anything, settle the usual question.",
      },
      {
        id: "N06-S02",
        title: "Protect any work you want to keep",
        instruction: "Decide whether this program holds work you have not saved.",
        detail:
          "This tutorial records another part into the pattern and changes the levels of the parts already in it. Both change the loaded program. If you want what is here, save it first.",
        hardwareTargets: ["programValueButtons"],
        visualMode: "full",
        checkpoint:
          "You have decided: either there is nothing to keep, or you have saved it, or you are deliberately building on this program.",
        recoveryHelp:
          "N09 Save your work teaches saving. If you have been following N04 and N05, stay on this program — everything you have made is in its pattern, and one save keeps all of it.",
        nextHint: "Now start the pattern and add to it.",
      },
      {
        id: "N06-S03",
        title: "Choose a part that is not in use",
        instruction: "Press Play/Stop to start the pattern, then press Digital Synth 1.",
        detail:
          "If you followed N04 and N05 your beat is on the Drums part and your line is on the Analog Synth, so this one is free. If it already has something in this pattern, use Digital Synth 2 instead.",
        hardwareTargets: ["digitalSynth1Button", "playStopButton"],
        visualMode: "full-plus-inset",
        expectedSound: "The pattern playing, with the keys now giving you a third sound.",
        checkpoint: "The pattern is running and the keys play a part that is not already busy.",
        recoveryHelp:
          "To hear whether a part already has something in the pattern, hold Shift and press its button to mute it and listen for what disappears — the same combination brings it back.",
        nextHint: "Now add notes without disturbing anything.",
      },
      {
        id: "N06-S04",
        title: "Add a note without deleting anything",
        instruction:
          "Hold down one of the numbered buttons, play a key while holding it, then let go.",
        detail:
          "This is a third way to record, and it is the gentle one: the notes you enter are added, and whatever was already there is kept.",
        hardwareTargets: ["stepButtons", "keys"],
        visualMode: "full-plus-inset",
        expectedSound: "Your new note joins the pattern at that step.",
        whyItMatters:
          "The other methods either refuse to overwrite or overwrite silently. This one adds. On a pattern you have already spent time on, that difference is the whole game.",
        checkpoint: "The pattern now has your new note in it, and everything that was there still is.",
        recoveryHelp:
          "If nothing was added, make sure you kept the numbered button held down while you played the key, and released it afterwards. To remove a note you added, stop the pattern, hold Erase and press that step.",
        nextHint: "Add two or three more, then listen to the whole thing.",
      },
      {
        id: "N06-S05",
        title: "Build it up and listen",
        instruction: "Add a few more notes the same way, then listen to the whole pattern.",
        detail: "Three or four notes is plenty. You are listening for whether it sits with the rest.",
        hardwareTargets: ["stepButtons", "keys"],
        visualMode: "full",
        expectedSound: "Three parts playing together: rhythm, a low line, and your new one.",
        checkpoint: "You can hear more than one part playing at the same time.",
        recoveryHelp:
          "If the new part is drowning everything else, leave it — the next steps are about exactly that. If a note sounds wrong, stop the pattern, hold Erase and press its step to remove it.",
        nextHint: "Now hear each part on its own.",
      },
      {
        id: "N06-S06",
        title: "Listen to one part at a time",
        instruction:
          "Hold Shift and press a Part Select button to mute that part; do it again to bring it back.",
        detail:
          "You can mute more than one at a time. Nothing is changed by this — it is a listening tool.",
        hardwareTargets: ["shiftButton", "partSelectGroup"],
        visualMode: "full-plus-inset",
        expectedSound: "Each part disappearing and returning as you mute and unmute it.",
        whyItMatters:
          "Muting is how you find out what is actually wrong when a pattern sounds muddy. Take one thing away at a time and the problem usually names itself.",
        checkpoint: "You have heard at least two parts on their own.",
        recoveryHelp:
          "If something is still missing at the end, hold Shift and press each of the four in turn until everything you expect is back.",
        nextHint: "Now fix the balance properly.",
      },
      {
        id: "N06-S07",
        title: "Open Program Edit",
        instruction:
          "Press Menu/Write, use Cursor to select Program Edit, and press Enter.",
        detail: "This is the screen N02 toured.",
        hardwareTargets: ["menuWriteButton", "display"],
        visualMode: "full-plus-inset",
        checkpoint: "The display is showing a Program Edit screen.",
        recoveryHelp:
          "A long press of Menu/Write opens PORTAMENTO instead of the Menu — press Exit and try a short press. If you opened the wrong item, press Exit once to get back to the list.",
        nextHint: "The part settings are in the other group.",
      },
      {
        id: "N06-S08",
        title: "Move to the part settings",
        instruction: "Hold down Shift and press Cursor ►.",
        detail:
          "This moves to the MAIN group, where each part has its own settings. The two letters at the right of the upper line tell you which part you are about to change.",
        hardwareTargets: ["shiftButton", "cursorRightButton", "display"],
        visualMode: "display-focus",
        expectedDisplay: ["PROG: MAIN D1", "Level 127"],
        syntheticDisplay: false,
        displayNote:
          "Roland's illustrated Program Edit MAIN screen. The two letters show the part, and the value is your own program's.",
        checkpoint:
          "The upper line reads PROG: MAIN with two letters at the right, and the lower line shows Level and a number.",
        recoveryHelp:
          "If the upper line still reads PROG: COMMON, hold Shift down and press Cursor ► again. If you are somewhere else entirely, press Exit until you reach the top screen and start from Menu/Write.",
        nextHint: "Now balance the parts.",
      },
      {
        id: "N06-S09",
        title: "Set each part's level",
        instruction:
          "Use Part Select to choose a part, then use Value to change its Level.",
        detail:
          "Do this while the pattern plays so you can hear the balance change. Pull back whatever is too loud rather than pushing everything else up.",
        hardwareTargets: ["partSelectGroup", "programValueButtons"],
        visualMode: "full-plus-inset",
        expectedSound: "One part moving forward or back in the mix while the others stay put.",
        whyItMatters:
          "This is a different control from the AMP/ENV Level knob you met in B06 and from Master Volume. This one is the part's place in the program, which is what you want when several parts are playing at once.",
        checkpoint: "You can make one part quieter and hear the others come forward.",
        recoveryHelp:
          "Note the number before you change it and you can always put it back. If you have lost track, 127 is the maximum and is what an untouched part is usually set to — but check rather than assume, because this program may have been set up differently.",
        nextHint: "One more setting makes a real difference.",
      },
      {
        id: "N06-S10",
        title: "Give each part its own space",
        instruction: "Press Cursor ► to reach Pan, and use Value to move a part left or right.",
        detail:
          "Pan places a part in the stereo picture: fully left, centre, or fully right, and everywhere in between. Headphones show this far more clearly than speakers.",
        hardwareTargets: ["cursorRightButton", "programValueButtons"],
        visualMode: "full-plus-inset",
        expectedSound: "The part you chose moves to one side, leaving the middle clearer.",
        whyItMatters:
          "Two sounds competing in the same place sound like a mess. Move one of them aside and both become audible without either getting louder.",
        checkpoint: "You can hear one part sitting to one side of the others.",
        recoveryHelp:
          "Centre is the middle of the range. If a part has vanished, you may have moved it fully to one side while listening on one speaker — bring it back toward the centre.",
        nextHint: "Now come out and hear what you have.",
      },
      {
        id: "N06-S11",
        title: "Come out and listen",
        instruction: "Press Exit until you reach the top screen, and listen to the whole pattern.",
        detail:
          "Nothing you did in Program Edit was written to storage. It is all in the loaded program, along with the pattern itself.",
        hardwareTargets: ["exitButton"],
        visualMode: "full-plus-inset",
        expectedSound: "Several parts, balanced, playing together as one thing.",
        whyItMatters:
          "You have now done the thing the keys cannot do: several JD-Xi parts sounding at once, arranged deliberately. That is what the pattern sequencer is for.",
        checkpoint: "You are back at the top screen with a multi-part pattern playing.",
        recoveryHelp:
          "If the balance is worse than when you started, go back into Program Edit MAIN and set the levels by ear until it sits right. There is no undo, but nothing here is written until you save.",
        nextHint:
          "Next, let the JD-Xi play notes you did not enter.",
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
      "Hold a few keys down and let the JD-Xi turn them into a moving part. Then change the pattern it plays and the speed it plays at.",
    estimatedMinutes: 9,
    prerequisites: ["N06"],
    learningGoals: [
      "Turn the arpeggiator on and hear it work.",
      "Use Key Hold, and know why it can look like a fault.",
      "Open Arpeggio Edit and change the style.",
      "Know that arpeggio settings belong to the program.",
    ],
    // Source record: docs/tutorials/N07-SOURCE-NOTES.md
    // N07-S05 exists because Roland's own troubleshooting table lists Key
    // Hold being on as the cause of "notes do not stop" (OM p.17). Teaching
    // the button without teaching that symptom would leave a learner
    // stranded by the very feature this tutorial introduces.
    steps: [
      {
        id: "N07-S01",
        title: "Protect any work you want to keep",
        instruction: "Decide whether this program holds work you have not saved.",
        detail:
          "Arpeggio settings are saved within each program, so changing them changes the loaded program. Turning the arpeggiator on and editing its style are both changes of that kind.",
        hardwareTargets: ["arpeggioSection"],
        visualMode: "full-plus-inset",
        checkpoint:
          "You have decided: either there is nothing to keep, or you have saved it first.",
        recoveryHelp:
          "N09 Save your work teaches saving. Nothing in this tutorial is written to storage, but it does change what is loaded, and there is no undo.",
        nextHint: "Now switch it on.",
      },
      {
        id: "N07-S02",
        title: "Turn the arpeggiator on",
        instruction: "Press the ARPEGGIO On button so it lights.",
        hardwareTargets: ["arpeggioOnButton"],
        visualMode: "full-plus-inset",
        checkpoint: "The ARPEGGIO On button is lit.",
        recoveryHelp:
          "If it does not light, press it once more. Nothing happens to the sound until you hold some keys down.",
        nextHint: "Now give it something to work with.",
      },
      {
        id: "N07-S03",
        title: "Hold some notes down",
        instruction: "Hold down two or three keys at once and keep holding.",
        detail:
          "An arpeggio plays the notes you are holding one after another instead of all together. You are not playing the rhythm — the JD-Xi is.",
        hardwareTargets: ["keys"],
        visualMode: "full",
        expectedSound:
          "The notes you are holding, played in turn, over and over, in a steady rhythm.",
        whyItMatters:
          "This is the fastest way on the whole instrument to make something that sounds deliberate. You hold; it performs.",
        checkpoint: "You can hear your held notes being played one at a time, repeatedly.",
        recoveryHelp:
          "If you hear only a chord, check the ARPEGGIO On button is lit. If you hear nothing, check which part is selected and that you can hear it when you play a single key.",
        nextHint: "Try changing which notes you hold.",
      },
      {
        id: "N07-S04",
        title: "Change the notes underneath it",
        instruction: "While it is running, move to a different group of keys.",
        hardwareTargets: ["keys"],
        visualMode: "full",
        expectedSound: "The same rhythm, now built from the new notes you are holding.",
        whyItMatters:
          "The arpeggiator keeps the movement and lets you change what it is made of. That split is what makes it useful rather than a novelty.",
        checkpoint: "The arpeggio followed your hands to the new notes.",
        recoveryHelp:
          "Let go completely and start again with a fresh set of keys if it gets confusing.",
        nextHint: "Now the button that stops you needing to hold on.",
      },
      {
        id: "N07-S05",
        title: "Key Hold, and the trap in it",
        instruction: "Press the ARPEGGIO Key Hold button, then take your hands off the keys.",
        detail:
          "The arpeggio keeps going without you. Play a different group of keys and it changes to those. Press Key Hold again to turn it off.",
        hardwareTargets: ["keyHoldButton"],
        visualMode: "full-plus-inset",
        expectedSound: "The arpeggio continuing with nothing held down.",
        whyItMatters:
          "This is worth meeting deliberately, because Roland lists it as a cause of a problem people report: if notes will not stop when you take your hands off the keys, Key Hold is on. Knowing that turns a frightening moment into a single button press.",
        checkpoint:
          "The arpeggio continued with your hands off the keys, and stopped when you pressed Key Hold again.",
        recoveryHelp:
          "If notes will not stop, press Key Hold to turn it off. Note that this button also works when the arpeggiator is off, where it sustains notes as if you were holding a damper pedal — so it can cause the same surprise with no arpeggio running at all.",
        nextHint: "Now change what it plays.",
      },
      {
        id: "N07-S06",
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
          "Make sure Shift is held down before you press the button — pressing it alone just switches the arpeggiator off. Press Exit to leave the screen at any point.",
        nextHint: "Now try some of the styles.",
      },
      {
        id: "N07-S07",
        title: "Try different styles",
        instruction: "Hold some keys down and use Value to step through the styles.",
        detail:
          "There are a great many, and they differ enormously. Keep the keys held so you can hear each one as it arrives.",
        hardwareTargets: ["programValueButtons"],
        visualMode: "full-plus-inset",
        expectedSound:
          "The rhythm and shape of the arpeggio changing completely from one style to the next.",
        checkpoint: "You have heard several styles and found one you like.",
        recoveryHelp:
          "The style number is on the upper line — note it before you wander so you can come back. If you cannot find your way back to one you liked, pick a new favourite; nothing is lost.",
        nextHint: "One more setting is worth knowing about.",
      },
      {
        id: "N07-S08",
        title: "Change how the notes are spaced",
        instruction: "Press Cursor ► to reach Grid, and use Value to change it.",
        detail:
          "Grid decides the note value each step of the arpeggio represents, and whether it swings. The other parameters along this screen set how long each note lasts, how loud, and how far it climbs.",
        hardwareTargets: ["cursorRightButton", "programValueButtons"],
        visualMode: "full-plus-inset",
        expectedSound:
          "The arpeggio getting faster or slower in relation to the beat, and sometimes lopsided rather than even.",
        whyItMatters:
          "Grid changes the feel without changing the tempo, which is a different lever from the tempo knob in B09 and often the one you actually want.",
        checkpoint: "You can hear the spacing of the notes change.",
        recoveryHelp:
          "Cursor ◄ walks back along the parameters if you want to return to the style. Nothing here is written to storage.",
        nextHint: "Now come out.",
      },
      {
        id: "N07-S09",
        title: "Leave, and what you are leaving with",
        instruction: "Press Exit until you reach the top screen.",
        detail:
          "The arpeggio settings, and whether the arpeggiator is on at all, belong to the program. They are part of what a save keeps — and part of what switching program throws away.",
        hardwareTargets: ["exitButton"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "It also means a program you load may arrive with the arpeggiator already on. If holding keys suddenly produces a rhythm you did not ask for, that is why.",
        checkpoint:
          "You are back at the top screen and you know whether your arpeggiator is still on.",
        recoveryHelp:
          "Press the ARPEGGIO On button to turn it off if you would rather it were. Check Key Hold is off too, or notes will keep sounding after you let go.",
        nextHint:
          "Next, take proper control of a sound rather than a rhythm.",
      },
    ],
  },
  N08: {
    id: "N08",
    level: "novice",
    order: 8,
    title: "Edit a sound more deliberately",
    shortTitle: "Edit a sound",
    summary:
      "The panel knobs move several things at once. Go into Tone Edit and change them one at a time, including the four separate stages of the envelope B06 could only move together.",
    estimatedMinutes: 11,
    prerequisites: ["N07"],
    learningGoals: [
      "Open Tone Edit and move between its groups.",
      "Change one parameter at a time instead of several at once.",
      "Set attack, decay, sustain and release separately.",
      "Get back to the original sound when an experiment goes wrong.",
    ],
    // Source record: docs/tutorials/N08-SOURCE-NOTES.md
    // The payoff B06 promised: OM p.8 states that the [Envelope] knob adjusts
    // A/D/S/R in a single operation and that editing them separately means
    // entering Tone Edit. N08 is that tutorial. [Shift] + [Enter] is offered
    // as the recovery here for the same reason it is offered in B06 and
    // withheld in B07 -- these are sound edits, which is the case Roland
    // scopes that shortcut to (OM p.5).
    steps: [
      {
        id: "N08-S01",
        title: "Protect any work you want to keep",
        instruction: "Decide whether the sound loaded right now is one you want to keep.",
        detail:
          "This tutorial edits the sound on the selected part, parameter by parameter. If it is one you have built and not saved, save it first — or accept that you are about to change it.",
        hardwareTargets: ["display"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "A missing tone number on the lower line of the display is Roland's signal that the loaded sound has already been edited and is not the stored one.",
        checkpoint:
          "You have decided: either there is nothing to keep, or you have saved it first.",
        recoveryHelp:
          "N09 Save your work teaches saving. Unlike most of this tutorial, that decision cannot be taken back later.",
        nextHint: "Now choose which sound you are working on.",
      },
      {
        id: "N08-S02",
        title: "Choose the part to edit",
        instruction: "Press Digital Synth 1, and hold a key to hear it.",
        detail:
          "Tone Edit always edits the sound on the selected part, so this is the step that decides what you are changing.",
        hardwareTargets: ["digitalSynth1Button"],
        visualMode: "full-plus-inset",
        expectedSound: "A sound you can hold on a key.",
        checkpoint: "You have a sustained sound you can hear clearly.",
        recoveryHelp:
          "If the sound stops the moment you let go, press Tone + to step to another — a sustained sound makes every change in this tutorial far easier to hear.",
        nextHint: "Now go in.",
      },
      {
        id: "N08-S03",
        title: "Open Tone Edit",
        instruction:
          "Press Menu/Write, use Cursor to select Tone Edit, and press Enter.",
        detail: "It is the third item in the Menu, after SYSTEM and Program Edit.",
        hardwareTargets: ["menuWriteButton", "display"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "Everything the FILTER, AMP/ENV and LFO knobs touch is in here, broken out into its individual parts. The knobs are the quick way; this is the precise way.",
        checkpoint: "The display is showing a Tone Edit screen, with a group name on the upper line.",
        recoveryHelp:
          "A long press of Menu/Write opens PORTAMENTO instead of the Menu — press Exit and try a short press. If you opened the wrong item, press Exit once to get back to the list.",
        nextHint: "Move between the groups the same way you did in SYSTEM.",
      },
      {
        id: "N08-S04",
        title: "Move between the groups",
        instruction: "Hold down Shift and press Cursor ► a few times.",
        detail:
          "The groups cover the parts a sound is built from: its common settings, its oscillator, its pitch, its filter, its amp and its LFO. The upper line names the one you are in.",
        hardwareTargets: ["shiftButton", "cursorRightButton"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "The names match the panel sections you already know. FILTER on the panel and the FILTER group in here are the same thing — one is three knobs, the other is every parameter behind them.",
        checkpoint: "The group name on the upper line changes as you press.",
        recoveryHelp:
          "If it does not change, you may be at the last group — keep Shift held and press Cursor ◄ instead. Check Shift is held down before you press.",
        nextHint: "Stop at the one that controls loudness over time.",
      },
      {
        id: "N08-S05",
        title: "Find the AMP group",
        instruction: "Use Shift and Cursor until the upper line reads TONE: AMP.",
        hardwareTargets: ["shiftButton", "cursorRightButton", "display"],
        visualMode: "display-focus",
        expectedDisplay: ["TONE: AMP", "AMP Level 127"],
        syntheticDisplay: false,
        displayNote:
          "Roland's illustrated Tone Edit AMP screen. The parameter shown and its value depend on where you are in the group and on your own sound.",
        checkpoint: "The upper line reads TONE: AMP.",
        recoveryHelp:
          "Keep holding Shift and pressing Cursor in either direction until you reach it. If you have left the screen entirely, press Exit to the top and start again from Menu/Write.",
        nextHint: "Now the four settings B06 could only move together.",
      },
      {
        id: "N08-S06",
        title: "Set the attack on its own",
        instruction:
          "Press Cursor ► until the lower line names Attack, then use Value to raise it, and play a key.",
        detail:
          "Attack is the time from pressing the key until the sound reaches full volume. Raise it and the sound fades in instead of arriving.",
        hardwareTargets: ["cursorRightButton", "programValueButtons"],
        visualMode: "full-plus-inset",
        expectedSound:
          "The note swells in gradually rather than starting immediately.",
        whyItMatters:
          "In B06 the Envelope knob moved all four of these together, so you could not have a slow start and a short ending. In here you can set each one independently.",
        checkpoint: "The note now takes a moment to arrive when you press a key.",
        recoveryHelp:
          "Use Value in the other direction to bring it back down. If you have lost track of the original value, that is exactly what the last step of this tutorial is for.",
        nextHint: "Now the one that decides how long it lasts.",
      },
      {
        id: "N08-S07",
        title: "Set the release on its own",
        instruction:
          "Press Cursor ► until the lower line names Release, raise it with Value, then play a key and let go.",
        detail:
          "Release is the time from letting go of the key until the sound disappears.",
        hardwareTargets: ["cursorRightButton", "programValueButtons"],
        visualMode: "full-plus-inset",
        expectedSound: "The sound carries on after you take your finger off, then fades away.",
        whyItMatters:
          "Attack and release are the two that change the character of a sound most, and they are at opposite ends of a note. Setting them independently is most of what makes a pad a pad and a stab a stab.",
        checkpoint: "The sound continues after you release the key.",
        recoveryHelp:
          "Lower it again with Value. A very long release can make it sound as though notes are not stopping — if that happens here, this is the cause rather than Key Hold.",
        nextHint: "Two more stages sit between those.",
      },
      {
        id: "N08-S08",
        title: "The two in the middle",
        instruction:
          "Use Cursor to find Decay and Sustain, and try changing each while playing a key.",
        detail:
          "Decay is how the sound falls from its loudest point down to a held level. Sustain is the level it holds at while your finger stays down.",
        hardwareTargets: ["cursorRightButton", "programValueButtons"],
        visualMode: "full-plus-inset",
        expectedSound:
          "With sustain low, the note drops away while you hold it. With sustain high, it stays put until you let go.",
        whyItMatters:
          "Attack, decay, sustain and release together describe the whole life of a note. Every sound you have liked so far was some combination of these four.",
        checkpoint:
          "You have changed at least one of them and heard the difference while holding a key.",
        recoveryHelp:
          "If the sound has become inaudible, raise Sustain and AMP Level. If it has become unpleasant, the last step of this tutorial puts everything back at once.",
        nextHint: "The same idea works on the filter.",
      },
      {
        id: "N08-S09",
        title: "The filter has its own envelope",
        instruction:
          "Hold Shift and press Cursor to reach the FILTER group, then walk its parameters with Cursor.",
        detail:
          "Alongside the cutoff and resonance you already know, the filter has its own attack, decay, sustain and release, and a depth setting that decides how far it moves.",
        hardwareTargets: ["shiftButton", "cursorRightButton"],
        visualMode: "full-plus-inset",
        expectedSound:
          "With depth up and a slow attack, the sound opens up over time instead of being bright from the start.",
        whyItMatters:
          "This is where the classic sweeping synthesizer sound comes from: not a hand on a knob, but the filter moving itself every time you press a key.",
        checkpoint: "You have found the filter's own envelope parameters.",
        recoveryHelp:
          "If nothing you change makes any difference, check the filter's depth setting — with depth at zero the filter envelope has nothing to move.",
        nextHint: "Now the way back.",
      },
      {
        id: "N08-S10",
        title: "Undo the whole experiment",
        instruction: "Press Exit to leave, then hold down Shift and press Enter.",
        detail:
          "Roland documents this as the way to return to the original sound after you have switched or edited it. It undoes the sound edits you have just made — not everything you have ever done, and not effects or pattern work.",
        hardwareTargets: ["shiftButton", "enterButton"],
        visualMode: "full-plus-inset",
        expectedSound: "The sound as it was before you opened Tone Edit.",
        whyItMatters:
          "This is what makes Tone Edit safe to explore. You can change six things, dislike all of them, and get back in one gesture — and the tone number reappearing on the display tells you it worked.",
        checkpoint:
          "The sound is back to how it started, and the display shows a tone number again.",
        recoveryHelp:
          "Make sure Shift is held down before you press Enter. Remember this is not a general undo — the JD-Xi does not have one — and it does not reach effects, patterns or program settings.",
        nextHint: "Last step: keeping an edit instead of undoing it.",
      },
      {
        id: "N08-S11",
        title: "Keeping an edit instead",
        instruction: "Decide whether you want to build a sound you keep.",
        detail:
          "If you do, edit it the way you just practised and then save the program — that is the only way a JD-Xi sound is kept. There is no way to save a sound by itself.",
        hardwareTargets: ["display"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "It is worth knowing before you spend an hour on a sound: the JD-Xi cannot store one on its own. A sound is kept by saving the whole program it lives in.",
        checkpoint:
          "You can edit a sound deliberately, and you know it stays only if you save the program.",
        recoveryHelp:
          "N09 Save your work is next, and it is the tutorial that keeps everything you have made in this level.",
        nextHint:
          "You can build a sound on purpose now. Next, stop losing your work.",
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
      "Write what you have made into the JD-Xi so it survives being switched off. This is the one operation in the Novice path that can destroy something, so it is worth doing slowly.",
    estimatedMinutes: 12,
    prerequisites: ["N08"],
    learningGoals: [
      "Say what a save keeps and what it cannot keep.",
      "Name a program and choose where it goes.",
      "Understand exactly what saving over a slot costs you.",
      "Complete a save, and know it cannot be undone.",
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
        id: "N09-S02",
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
        id: "N09-S03",
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
        id: "N09-S04",
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
        id: "N09-S05",
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
        id: "N09-S06",
        title: "What choosing a destination costs",
        instruction: "Read this before you choose where to save.",
        detail:
          "You are about to pick one of the JD-Xi's storage slots. If that slot already holds a program, saving replaces it and the previous data is erased. Roland gives one signal and only one: if the destination already holds data, its name appears on the lower line. There is no message that tells you a slot is free, and this tutorial cannot promise you one is. Choose a slot you are willing to overwrite.",
        hardwareTargets: ["programValueButtons", "display"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "This is the only step in the whole Novice path that can destroy something that was not yours to lose. If this JD-Xi is shared, or was bought second hand, one of those slots may hold work someone else cares about.",
        checkpoint:
          "You understand that saving replaces whatever is in the slot you choose, permanently.",
        recoveryHelp:
          "If you are not sure, press Exit now to leave without saving. Nothing has been written, and your work is still loaded — you can come back when you have decided where to put it.",
        nextHint: "Now choose, carefully.",
      },
      {
        id: "N09-S07",
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
        id: "N09-S08",
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
        id: "N09-S09",
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
        id: "N09-S10",
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
        id: "N09-S11",
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
    estimatedMinutes: 11,
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
        visualMode: "full-plus-inset",
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
          "Press Exit. If you have already answered yes, the saved programs are gone and there is nothing on the instrument that brings them back — which is the argument for keeping a backup on a computer, and for saving to slots you have chosen deliberately.",
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
          "Knowing there is no universal undo is what makes you save. Almost everything that goes badly wrong on this instrument is something unsaved being replaced by something else — and that is a habit problem rather than a knowledge problem.",
        checkpoint:
          "You can name which move fits which kind of problem, and you know none of them is a general undo.",
        recoveryHelp:
          "When something goes wrong and none of these fits, press Exit to get to the top screen and take stock from there. Nothing on this instrument is lost by pressing Exit.",
        nextHint:
          "That is the Novice path complete. Next comes designing sounds on purpose.",
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
      "Use the Analog Synth part and build a bass from its raw waveform up: pick the oscillator, add weight underneath it, then shape the attack with the filter and amp envelopes.",
    estimatedMinutes: 13,
    prerequisites: ["N09"],
    learningGoals: [
      "Choose the Analog Synth's oscillator waveform on purpose.",
      "Add weight with the sub-oscillator.",
      "Shape a bass with the filter and its envelope.",
      "Know the analog part's documented limits.",
    ],
    // Source record: docs/tutorials/I01-SOURCE-NOTES.md
    // The Analog Synth part is chosen deliberately: its oscillator, sub
    // oscillator and pulse width have real front-panel controls (OM p.5), so
    // the learner builds from the waveform up with their hands rather than
    // through a menu. Two documented limits are taught rather than left to be
    // discovered: analog offers LPF only (OM p.8), and the square wave and
    // Sub OSC may not sound in the upper range (PG p.4).
    steps: [
      {
        id: "I01-S01",
        title: "Protect any work you want to keep",
        instruction: "Decide whether this program holds work you have not saved.",
        detail:
          "You will select a tone and edit it. Both replace what is loaded. If you have something here you want, save it first.",
        hardwareTargets: ["programValueButtons", "toneButtons"],
        visualMode: "full",
        checkpoint: "You have decided: either there is nothing to keep, or you have saved it.",
        recoveryHelp:
          "N09 Save your work teaches saving. A missing tone number on the lower line of the display means the loaded sound has already been edited.",
        nextHint: "Now go to the part with its own oscillator controls.",
      },
      {
        id: "I01-S02",
        title: "Select the Analog Synth",
        instruction: "Press Analog Synth, and play a low key.",
        detail:
          "This part has real analog circuits for its oscillator, sub-oscillator and filter, and it is the only part with waveform controls on the panel.",
        hardwareTargets: ["analogSynthButton"],
        visualMode: "full-plus-inset",
        expectedSound: "A single synth sound, played low.",
        whyItMatters:
          "Building a bass here means you can reach for the waveform with your hand instead of walking a menu, which makes the effect of each choice immediate.",
        checkpoint: "The keys play the Analog Synth part.",
        recoveryHelp:
          "If it is silent, check the Category dial is not set to Vocoder/AutoPitch — Roland notes the Analog Synth part becomes unavailable while one of those is selected.",
        nextHint: "Start at the beginning of the signal: the raw waveform.",
      },
      {
        id: "I01-S03",
        title: "Choose the oscillator waveform",
        instruction: "Press the Oscillator button and listen to each waveform.",
        detail:
          "It steps between a sawtooth, a triangle and a square wave; the lit indicator shows which is selected. For a bass, the sawtooth is bright and full and the square is hollower.",
        hardwareTargets: ["oscillatorButton"],
        visualMode: "full-plus-inset",
        expectedSound:
          "Three clearly different raw tones — buzzy, soft and rounded, and hollow.",
        whyItMatters:
          "Everything downstream shapes this. Choosing the waveform first is choosing what the filter and envelope will have to work with.",
        checkpoint: "You have heard all three and chosen one.",
        recoveryHelp:
          "Keep pressing to step round to the one you want. Nothing here is written until you save the program.",
        nextHint: "Now add weight underneath it.",
      },
      {
        id: "I01-S04",
        title: "Add the sub-oscillator",
        instruction: "Press the Sub OSC button and play a low key again.",
        detail:
          "This layers an extra square wave below what you already have. Roland gives two settings — one octave down when the indicator is lit, and two octaves down when it blinks.",
        hardwareTargets: ["subOscButton"],
        visualMode: "full-plus-inset",
        expectedSound: "The same note, noticeably heavier and deeper underneath.",
        whyItMatters:
          "This is the fastest way to make a bass sound big. The sub does not change the note you are playing; it adds weight below it.",
        checkpoint: "The sound has more low end than it did.",
        recoveryHelp:
          "Press Sub OSC again to step through its settings and off. If a low note has gone strangely quiet, see the last step of this tutorial — Roland documents a real limit here.",
        nextHint: "If you chose the square wave, one knob is now live.",
      },
      {
        id: "I01-S05",
        title: "Shape the square wave",
        instruction:
          "With the square wave selected, turn the pulse width knob and listen.",
        detail:
          "This sets how wide the upper part of the wave is. Roland describes the effect directly: lower values narrow it toward a square wave, and raising it widens it into a more distinctive sound.",
        hardwareTargets: ["pulseWidthKnob"],
        visualMode: "full-plus-inset",
        expectedSound: "The tone thins and gets more nasal, then fills out again.",
        checkpoint: "You can hear the character of the square wave change as you turn.",
        recoveryHelp:
          "This knob does its job on the square wave. If nothing changes, press the Oscillator button until the square wave indicator is the one lit.",
        nextHint: "Now take the top off it.",
      },
      {
        id: "I01-S06",
        title: "Close the filter down",
        instruction: "Turn Cutoff to the left until the sound is dark, then back a little.",
        detail:
          "On the Analog Synth part only a low-pass filter is available, so Cutoff always works the same way here: turning left removes the top of the sound.",
        hardwareTargets: ["cutoffKnob"],
        visualMode: "full-plus-inset",
        expectedSound: "The buzz comes off and what is left is round and low.",
        whyItMatters:
          "A bass usually lives under everything else. Taking the top off is what stops it competing with the parts above it.",
        checkpoint: "The sound is dark and round rather than bright.",
        recoveryHelp:
          "If it disappeared, you have closed the filter completely — turn Cutoff back to the right. Pressing the FILTER Type button will not offer you other filter types on this part, and that is expected.",
        nextHint: "A little emphasis gives it an edge.",
      },
      {
        id: "I01-S07",
        title: "Add resonance carefully",
        instruction: "Turn Resonance up a small amount.",
        detail:
          "Resonance emphasizes the sound around the cutoff point. On a bass, a little adds bite; a lot starts to whistle and can get loud.",
        hardwareTargets: ["resonanceKnob"],
        visualMode: "full-plus-inset",
        expectedSound: "A bit of edge or growl appearing around the low end.",
        checkpoint: "The bass has more character without whistling.",
        recoveryHelp:
          "Turn Resonance back to the left if it becomes piercing, and turn Master Volume down first if it jumped in level.",
        nextHint: "Now make it behave like a plucked note.",
      },
      {
        id: "I01-S08",
        title: "Give the filter its own envelope",
        instruction:
          "Open Tone Edit from the Menu, reach the FILTER group, and set the filter envelope's Depth and Decay.",
        detail:
          "Raise Depth so the filter moves when you play, then set a short Decay. The filter now opens on each note and closes again immediately.",
        hardwareTargets: ["menuWriteButton", "shiftButton"],
        visualMode: "full-plus-inset",
        expectedSound:
          "Each note starts bright and closes down within a moment — the classic plucked synth bass.",
        whyItMatters:
          "This is the difference between a bass that sits still and one that speaks. The attack is where a bass is recognisable, and the filter envelope is what makes it.",
        checkpoint: "Each note has a bright front edge that closes quickly.",
        recoveryHelp:
          "If nothing moves, the envelope depth is probably still at zero — nothing else in the filter envelope has any effect until Depth is above zero. Hold Shift and press Cursor to move between the Tone Edit groups; N08 covers this navigation.",
        nextHint: "Now the note's overall shape.",
      },
      {
        id: "I01-S09",
        title: "Tighten the amp envelope",
        instruction:
          "Move to the AMP group and shorten the Decay and Release.",
        detail:
          "A bass usually wants to stop when you stop. Shortening these two keeps notes from running into each other.",
        hardwareTargets: ["shiftButton", "cursorRightButton"],
        visualMode: "full-plus-inset",
        expectedSound: "Notes end cleanly instead of overlapping into a blur.",
        checkpoint: "Playing several notes in a row gives you separate notes rather than a wash.",
        recoveryHelp:
          "If notes stop too abruptly, lengthen Release slightly. If the sound vanished, raise Sustain and AMP Level.",
        nextHint: "Two documented limits are worth knowing before you go.",
      },
      {
        id: "I01-S10",
        title: "What the analog part will and will not do",
        instruction: "Play your bass high up the keyboard, then low again.",
        detail:
          "Roland documents two things about this part. Only the low-pass filter is available, so the FILTER Type button offers nothing else. And because of the analog circuitry, the square wave and the sub-oscillator may not produce sound in the upper range of the keyboard.",
        hardwareTargets: ["analogOscSection"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "Both look like faults and neither is. Knowing them saves you hunting for a broken setting when your bass goes quiet at the top.",
        checkpoint:
          "You know why the top of the keyboard may behave differently on this part.",
        recoveryHelp:
          "Play in the range a bass actually lives in. If you need the sound high up, switch the oscillator away from the square wave, or use a digital part instead.",
        nextHint: "Last step: keep it.",
      },
      {
        id: "I01-S11",
        title: "Keep the bass you built",
        instruction: "Save the program if you want this sound again.",
        detail:
          "The sound belongs to the program, so saving the program is the only way to keep it. Give it a name you will recognize.",
        hardwareTargets: ["shiftButton", "menuWriteButton"],
        visualMode: "full-plus-inset",
        checkpoint: "Your bass is stored, or you have decided you do not need it.",
        recoveryHelp:
          "N09 Save your work has the full sequence, including choosing a destination you are willing to overwrite. If you would rather abandon the sound, hold Shift and press Enter to return to the original.",
        nextHint:
          "You can build a bass. Next, build something at the other end of the scale.",
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
      "Build a wide, slow, sustained sound on a digital part — the opposite of a bass in almost every setting, and the best way to learn what the envelope really does.",
    estimatedMinutes: 12,
    prerequisites: ["I01"],
    learningGoals: [
      "Use a digital part's layered structure.",
      "Build a slow attack and a long release deliberately.",
      "Add slow movement so the sound never sits still.",
      "Place a pad behind other sounds rather than in front of them.",
    ],
    // Source record: docs/tutorials/I02-SOURCE-NOTES.md
    // A digital synth tone contains three partials, each with its own OSC,
    // FILTER, AMP and LFO (PG p.7, p.15). I02 uses that structure as the
    // reason a digital part suits a pad, and teaches the envelope by building
    // the exact opposite of I01's bass -- the same four parameters, moved the
    // other way.
    steps: [
      {
        id: "I02-S01",
        title: "Protect any work you want to keep",
        instruction: "Decide whether this program holds work you have not saved.",
        detail:
          "If your bass from I01 is loaded and saved, you can build the pad on another part of the same program and keep them together. If it is loaded and not saved, save it first.",
        hardwareTargets: ["programValueButtons", "toneButtons"],
        visualMode: "full",
        checkpoint: "You have decided: nothing to keep, saved already, or deliberately building on this program.",
        recoveryHelp:
          "N09 Save your work teaches saving. Building both sounds into one program is the more useful outcome, and I07 is the tutorial about doing that deliberately.",
        nextHint: "Now choose a part built for layered sounds.",
      },
      {
        id: "I02-S02",
        title: "Choose a digital part",
        instruction: "Press Digital Synth 1, and hold a chord of two or three keys.",
        detail:
          "A digital synth tone is made of three layers that Roland calls partials, each with its own oscillator, filter, amp and LFO. That is why the digital parts can sound wide in a way the analog part cannot.",
        hardwareTargets: ["digitalSynth1Button"],
        visualMode: "full-plus-inset",
        expectedSound: "A sustained sound you can hold with several keys at once.",
        whyItMatters:
          "A pad is mostly width and time. Three layers gives you width for free, and the envelope gives you the time.",
        checkpoint: "You can hold several notes together and hear them sustain.",
        recoveryHelp:
          "If the sound stops as soon as you press, press Tone + to step to something that holds — a sustained starting point saves a lot of work here.",
        nextHint: "Now find something in the right family to start from.",
      },
      {
        id: "I02-S03",
        title: "Start from something sustained",
        instruction: "Use the Category dial and the Tone buttons to find a sustained sound.",
        detail:
          "You are looking for something that keeps going while you hold it, rather than something that plucks or decays away. It does not have to be a pad already.",
        hardwareTargets: ["categoryDial", "toneButtons"],
        visualMode: "full-plus-inset",
        expectedSound: "A sound that holds steadily for as long as you hold the keys.",
        checkpoint: "You have a starting sound that sustains.",
        recoveryHelp:
          "Starting from something that already sustains saves you fighting the envelope later. If everything you find plucks, pick the longest one and the next steps will stretch it.",
        nextHint: "Now stretch the front of the note.",
      },
      {
        id: "I02-S04",
        title: "Make it arrive slowly",
        instruction:
          "Open Tone Edit, reach the AMP group, and raise the Attack.",
        detail:
          "Attack is the time from pressing the key until the sound reaches full volume. For a pad, you want it long enough that the sound swells rather than lands.",
        hardwareTargets: ["menuWriteButton", "programValueButtons"],
        visualMode: "full-plus-inset",
        expectedSound: "The sound fades in over a moment instead of starting immediately.",
        whyItMatters:
          "This is exactly the parameter I01 kept short. Same control, opposite direction, completely different instrument — which is most of what sound design is.",
        checkpoint: "Pressing a key gives you a sound that swells in.",
        recoveryHelp:
          "If the attack is so long the note never really arrives, bring it back down. N08 covers moving around Tone Edit if you are unsure of the navigation.",
        nextHint: "Now stretch the back of it.",
      },
      {
        id: "I02-S05",
        title: "Let it hang on",
        instruction: "Raise the Release, then play a chord and let go.",
        detail:
          "Release is the time from letting go of the keys until the sound disappears. A pad usually keeps sounding well after your hands have left.",
        hardwareTargets: ["cursorRightButton", "programValueButtons"],
        visualMode: "full-plus-inset",
        expectedSound: "The chord carries on and fades away slowly after you release the keys.",
        whyItMatters:
          "A long release is what lets one chord blend into the next instead of stopping dead between them.",
        checkpoint: "The sound continues for a noticeable time after you let go.",
        recoveryHelp:
          "If notes pile up into mud, shorten the release. If you cannot tell whether the release is working, play one chord, let go, and count.",
        nextHint: "Now make the filter move as slowly as the amp does.",
      },
      {
        id: "I02-S06",
        title: "Open the filter slowly too",
        instruction:
          "Move to the FILTER group, raise the envelope Depth, and give it a long Attack.",
        detail:
          "The filter now opens over time rather than instantly, so the sound gets brighter as it swells.",
        hardwareTargets: ["shiftButton", "cursorRightButton"],
        visualMode: "full-plus-inset",
        expectedSound:
          "The sound arrives dark and gradually brightens while you hold it.",
        whyItMatters:
          "Two envelopes moving at once, on volume and on brightness, is what makes a pad feel like it is going somewhere rather than just being loud.",
        checkpoint: "The tone changes over the course of a held chord, not just its volume.",
        recoveryHelp:
          "If nothing happens, check the envelope Depth is above zero — nothing else in the filter envelope matters until it is. Lower Cutoff if the sound is already fully bright and has nowhere to open to.",
        nextHint: "One more layer of movement.",
      },
      {
        id: "I02-S07",
        title: "Add slow movement",
        instruction: "Turn the LFO Rate down low and the Depth up a little.",
        detail:
          "You want movement slow enough that you notice it only after a few seconds. Fast movement makes it a effect; slow movement makes it feel alive.",
        hardwareTargets: ["lfoRateKnob", "lfoDepthKnob"],
        visualMode: "full-plus-inset",
        expectedSound: "The held chord drifts gently rather than sitting perfectly still.",
        checkpoint: "The sound moves slowly while you hold it.",
        recoveryHelp:
          "Turn Depth back to zero to remove it entirely. If it sounds seasick rather than alive, the rate is too fast or the depth too high — I05 goes into the LFO properly.",
        nextHint: "Now put it in a space.",
      },
      {
        id: "I02-S08",
        title: "Push it back with reverb",
        instruction: "Turn Reverb up further than you would for a bass.",
        hardwareTargets: ["reverbKnob"],
        visualMode: "full-plus-inset",
        expectedSound: "The pad moves behind you rather than sitting in front of you.",
        whyItMatters:
          "A pad is a background. Reverb is what puts it there, which is why a pad usually takes more of it than any other sound in a program.",
        checkpoint: "The pad sounds further away than the other parts.",
        recoveryHelp:
          "Effect settings belong to the program and are shared by everything in it, so a lot of reverb here also affects your other parts. I06 covers routing effects per part.",
        nextHint: "Now check it against something else.",
      },
      {
        id: "I02-S09",
        title: "Hear it in context",
        instruction: "Start the pattern and hold your pad over the top of it.",
        detail:
          "A pad is judged by what it does behind other things, not on its own.",
        hardwareTargets: ["playStopButton", "keys"],
        visualMode: "full",
        expectedSound: "The pad filling the space behind the pattern.",
        checkpoint:
          "The pad supports what is already playing instead of covering it.",
        recoveryHelp:
          "If it swamps everything, lower its level in Program Edit rather than turning down the sound itself — N06 covers per-part levels.",
        nextHint: "Last step: keep it.",
      },
      {
        id: "I02-S10",
        title: "Keep the pad",
        instruction: "Save the program if you want this sound again.",
        hardwareTargets: ["shiftButton", "menuWriteButton"],
        visualMode: "full-plus-inset",
        checkpoint: "Your pad is stored, or you have decided you do not need it.",
        recoveryHelp:
          "N09 Save your work has the full sequence. To abandon the sound instead, hold Shift and press Enter to return to the original.",
        nextHint:
          "You have something underneath and something behind. Next, something in front.",
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
      "Build something that sits in front of everything else: bright, cutting, and expressive enough to be worth playing a line on. Then make it slide between notes.",
    estimatedMinutes: 12,
    prerequisites: ["I02"],
    learningGoals: [
      "Build a sound that cuts through a busy pattern.",
      "Use portamento so notes slide into each other.",
      "Use the JD-Xi's own character controls on a digital tone.",
      "Play a line expressively with the Pitch and Mod controls.",
    ],
    // Source record: docs/tutorials/I03-SOURCE-NOTES.md
    // Portamento is taught through the panel shortcut (long-press
    // [Menu/Write], where [Tap] toggles it and the tempo knob sets the time --
    // OM p.6) rather than through the analog tone's Porta Sw parameter, so
    // the step works whichever part the learner has chosen. Ring Switch, Wave
    // Shape and Analog Feel are digital-tone COMMON parameters (PG p.15).
    steps: [
      {
        id: "I03-S01",
        title: "Protect any work you want to keep",
        instruction: "Decide whether this program holds work you have not saved.",
        detail:
          "As before: selecting a tone and editing it replaces what is loaded. If your pad from I02 is here and unsaved, save it first.",
        hardwareTargets: ["programValueButtons", "toneButtons"],
        visualMode: "full",
        checkpoint: "You have decided: nothing to keep, saved already, or deliberately building on this program.",
        recoveryHelp: "N09 Save your work teaches saving.",
        nextHint: "Choose a part with room to be bright.",
      },
      {
        id: "I03-S02",
        title: "Choose a part and a bright starting point",
        instruction:
          "Press Digital Synth 2, then use the Category dial and Tone buttons to find something bright.",
        detail:
          "Using the second digital part leaves Digital Synth 1 free if your pad is there. You want a starting sound with plenty of top end — a lead has to be heard over everything else.",
        hardwareTargets: ["digitalSynth2Button", "categoryDial"],
        visualMode: "full-plus-inset",
        expectedSound: "A bright, forward sound rather than a soft one.",
        whyItMatters:
          "A lead is defined by being audible above a full arrangement. Starting bright is much easier than trying to make a dull sound cut through later.",
        checkpoint: "You have a bright sound on a part that is not already busy.",
        recoveryHelp:
          "If everything sounds dull, open Cutoff up — a preset may simply have its filter closed down.",
        nextHint: "Now tighten its shape.",
      },
      {
        id: "I03-S03",
        title: "Make it respond immediately",
        instruction:
          "Open Tone Edit, reach the AMP group, and set the Attack low and Sustain high.",
        detail:
          "A lead should arrive the moment you press a key and hold its level while you keep the key down. This is the pad's envelope in reverse at the front, and the same at the back.",
        hardwareTargets: ["menuWriteButton", "programValueButtons"],
        visualMode: "full-plus-inset",
        expectedSound: "Notes that start instantly and hold steady while you hold the key.",
        whyItMatters:
          "A slow attack makes a lead feel late, and it will always sound behind the beat no matter how well you play.",
        checkpoint: "Notes start immediately and hold at a constant level.",
        recoveryHelp:
          "If the sound dies while you hold a key, raise Sustain. N08 covers moving around Tone Edit if the navigation is unfamiliar.",
        nextHint: "Now the JD-Xi's own character controls.",
      },
      {
        id: "I03-S04",
        title: "Add instability on purpose",
        instruction:
          "Reach the COMMON group and raise Analog Feel.",
        detail:
          "Roland describes this as applying a kind of natural instability found in many natural systems, to create the sort of slight unsteadiness an analog synthesizer has.",
        hardwareTargets: ["shiftButton", "cursorRightButton"],
        visualMode: "full-plus-inset",
        expectedSound: "The sound stops being perfectly steady and gains a slight life to it.",
        whyItMatters:
          "A digital sound that is too perfect can sound lifeless as a lead. This is Roland's own control for exactly that problem.",
        checkpoint: "The sound is a little less mechanical than it was.",
        recoveryHelp:
          "Turn it back down if it becomes unsteady rather than alive. Nothing here is written until you save the program.",
        nextHint: "Two more character controls sit beside it.",
      },
      {
        id: "I03-S05",
        title: "Try the metallic one",
        instruction: "Find Ring Switch in the same group and turn it on.",
        detail:
          "This multiplies two of the tone's layers together, producing a complex, bell-like, metallic sound. Roland notes the effect is more obvious when those two layers are set to different pitches.",
        hardwareTargets: ["cursorRightButton", "programValueButtons"],
        visualMode: "full-plus-inset",
        expectedSound: "A hard, metallic, bell-like edge — or something quite unmusical.",
        whyItMatters:
          "It is the most extreme character control on the digital tone, and it is worth meeting deliberately so you recognize the sound when you meet it in a preset.",
        checkpoint: "You have heard what Ring Switch does and decided whether you want it.",
        recoveryHelp:
          "Turn it back off if it is not what you want. Roland notes that with it on, some of the pulse-width and detune settings of those two layers cannot be used, so other parameters may stop responding while it is on.",
        nextHint: "Now make the notes join up.",
      },
      {
        id: "I03-S06",
        title: "Make notes slide into each other",
        instruction: "Press and hold Menu/Write until the PORTAMENTO screen appears.",
        detail:
          "A long press opens this screen, which is a different gesture from the short press that opens the Menu. On this screen the Tap button turns portamento on and off, and the tempo knob sets how long the slide takes.",
        hardwareTargets: ["menuWriteButton", "tapButton"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "Portamento is the sound of a note sliding into the next instead of jumping. On a lead it is the single most recognisable expressive device there is.",
        checkpoint: "The display is showing the PORTAMENTO screen.",
        recoveryHelp:
          "If the Menu opened instead, your press was too short — hold it down longer. Press Exit to leave this screen.",
        nextHint: "Now switch it on and hear it.",
      },
      {
        id: "I03-S07",
        title: "Set the slide",
        instruction:
          "Press Tap to turn portamento on, turn the tempo knob a little, then play two notes one after the other.",
        detail:
          "The tempo knob is doing a different job on this screen: it is setting the portamento time rather than the tempo. A short time gives a quick scoop; a long one glides.",
        hardwareTargets: ["tapButton", "tempoKnob"],
        visualMode: "full-plus-inset",
        expectedSound: "The second note slides up or down from the first instead of jumping to it.",
        whyItMatters:
          "It is also a good example of something N01 warned about: what a control does depends on the screen you are in. The tempo knob is not the tempo knob here.",
        checkpoint: "Notes slide into each other rather than stepping.",
        recoveryHelp:
          "Press Tap again to turn portamento off. If the slide is so long that notes never arrive, turn the tempo knob back down while you are still on this screen.",
        nextHint: "Now come out and play it properly.",
      },
      {
        id: "I03-S08",
        title: "Play it with both hands",
        instruction:
          "Press Exit, start the pattern, and play a line using the Pitch and Mod controls.",
        detail:
          "Bend into a note with Pitch. Add vibrato with Mod on the long notes. This is what the lead was built for.",
        hardwareTargets: ["pitchControl", "modControl"],
        visualMode: "full-plus-inset",
        expectedSound: "A line that bends and wavers rather than sitting still.",
        whyItMatters:
          "A lead sound is only half the job. The other half is the two controls beside the keys, and they are the reason a lead can sound played rather than programmed.",
        checkpoint: "You have played a line with at least one bend and some vibrato.",
        recoveryHelp:
          "Remember the Mod control stays where you leave it — move it fully toward you when you are done, or every later sound will waver. B05 covers both controls.",
        nextHint: "Check it does the job it was built for.",
      },
      {
        id: "I03-S09",
        title: "Check it cuts through",
        instruction: "Play your line over the full pattern and listen for whether you can hear it.",
        detail:
          "If it disappears, the answer is usually brightness rather than volume — open Cutoff before you reach for the level.",
        hardwareTargets: ["cutoffKnob"],
        visualMode: "full-plus-inset",
        expectedSound: "The lead sitting clearly on top of everything else.",
        whyItMatters:
          "Turning a dull sound up makes the whole arrangement louder without making the lead any clearer. Brightness is what separates it.",
        checkpoint: "You can hear the lead over the pattern without it being uncomfortably loud.",
        recoveryHelp:
          "If it still hides, try panning it slightly to one side so it is not competing with the pad in the middle — N06 covers pan.",
        nextHint: "Last step: keep it.",
      },
      {
        id: "I03-S10",
        title: "Keep the lead",
        instruction: "Save the program if you want this sound again.",
        hardwareTargets: ["shiftButton", "menuWriteButton"],
        visualMode: "full-plus-inset",
        checkpoint: "Your lead is stored, or you have decided you do not need it.",
        recoveryHelp:
          "N09 Save your work has the full sequence. Note that portamento settings belong to the sound and are kept by the same save.",
        nextHint:
          "You have built three sounds. Next, the two tools they all had in common.",
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
      "The two tools you used in every sound so far, now on their own terms: what the filter types actually do, and how an envelope's four stages combine into a shape.",
    estimatedMinutes: 12,
    prerequisites: ["I03"],
    learningGoals: [
      "Choose a filter type for a reason.",
      "Use the filter envelope's depth and direction deliberately.",
      "Read a sound as a shape in time.",
      "Make a sound respond to how hard you play.",
    ],
    // Source record: docs/tutorials/I04-SOURCE-NOTES.md
    // The transferable pair, now named. Everything here was used by ear in
    // B06 and reached one parameter at a time in N08; I04's job is to make
    // the vocabulary earned rather than assumed. The Drums part's TVF and TVA
    // are named as the same idea under different letters (PG pp.23-25).
    steps: [
      {
        id: "I04-S01",
        title: "Protect any work you want to keep",
        instruction: "Decide whether this program holds work you have not saved.",
        detail: "This tutorial edits the loaded sound throughout.",
        hardwareTargets: ["display"],
        visualMode: "full-plus-inset",
        checkpoint: "You have decided: nothing to keep, or you have saved it.",
        recoveryHelp:
          "N09 Save your work teaches saving. Hold Shift and press Enter at any point to return to the original sound.",
        nextHint: "Start with something plain to work on.",
      },
      {
        id: "I04-S02",
        title: "Get a bright, steady sound",
        instruction: "Press Digital Synth 1 and find a bright sound that holds.",
        detail:
          "A filter can only remove what is there. Starting bright gives you something to work with.",
        hardwareTargets: ["digitalSynth1Button", "toneButtons"],
        visualMode: "full-plus-inset",
        expectedSound: "A sustained sound with plenty of top end.",
        checkpoint: "You have a bright sustained sound.",
        recoveryHelp: "Open Cutoff fully to the right if the sound seems dull to start with.",
        nextHint: "Now hear what each filter type removes.",
      },
      {
        id: "I04-S03",
        title: "The four filter types",
        instruction:
          "Hold a key, press the FILTER Type button, and move Cutoff after each press.",
        detail:
          "On a digital part Roland offers four: a low-pass filter cuts the highs, a high-pass filter cuts the lows, a band-pass filter keeps a band and removes both ends, and a peaking filter emphasizes a band. The lit indicator shows which is selected.",
        hardwareTargets: ["filterTypeButton", "cutoffKnob"],
        visualMode: "full-plus-inset",
        expectedSound:
          "Cutoff removing a different part of the sound each time — darkening it, thinning it, narrowing it to a band, or emphasizing one.",
        whyItMatters:
          "Most synthesizer sounds you know are a low-pass filter. The other three are what you reach for when low-pass is not the shape you want.",
        checkpoint: "You have heard Cutoff behave differently under at least three types.",
        recoveryHelp:
          "If the button offers you only one type, you are on the Analog Synth part, which has a low-pass filter only. Press a digital part to hear the rest.",
        nextHint: "Now let the filter move on its own, in either direction.",
      },
      {
        id: "I04-S04",
        title: "Depth decides direction as well as amount",
        instruction:
          "In Tone Edit's FILTER group, set the envelope Depth positive, then set it negative.",
        detail:
          "Roland's Depth parameter runs both ways from zero, and specifies the direction as well as the depth of the change. Positive opens the filter as the envelope rises; negative closes it.",
        hardwareTargets: ["menuWriteButton", "programValueButtons"],
        visualMode: "full-plus-inset",
        expectedSound:
          "With positive depth the note brightens as it starts; with negative depth it darkens instead.",
        whyItMatters:
          "A negative filter envelope is how you get a sound that starts bright and dulls, which is a different instrument from one that opens up. Most people never find it because they assume depth only means amount.",
        checkpoint: "You have heard the envelope move the filter in both directions.",
        recoveryHelp:
          "At zero depth nothing in the filter envelope has any effect, which is the usual reason it seems broken. Set Depth away from zero first, then adjust the stages.",
        nextHint: "Now the four stages, as one shape.",
      },
      {
        id: "I04-S05",
        title: "Attack and decay: the front of the note",
        instruction: "Set a slow Attack and a long Decay in the AMP group, and play one key.",
        hardwareTargets: ["shiftButton", "programValueButtons"],
        visualMode: "full-plus-inset",
        expectedSound: "The note swells in, reaches a peak, and settles down to a lower level.",
        whyItMatters:
          "Attack is how long it takes to arrive; decay is the fall from that peak to wherever it settles. Together they are the front of every note you have ever heard.",
        checkpoint: "You can hear a rise and then a fall while still holding the key.",
        recoveryHelp:
          "If you hear no fall, sustain is probably at maximum — the note has nowhere to decay to. Lower Sustain and try again.",
        nextHint: "Now the part you hold.",
      },
      {
        id: "I04-S06",
        title: "Sustain is a level, not a time",
        instruction: "Move Sustain from high to low while holding a key.",
        detail:
          "The other three stages are times. Sustain is the level the sound holds at once the decay has finished, for as long as you keep the key down.",
        hardwareTargets: ["cursorRightButton", "programValueButtons"],
        visualMode: "full-plus-inset",
        expectedSound:
          "With sustain high the note holds strongly; with it low the note fades to something quiet and stays there.",
        whyItMatters:
          "This is the one people get wrong, and it explains a lot: a sound that dies while you hold it does not have a short decay problem, it has a low sustain.",
        checkpoint: "You can describe what sustain does differently from the other three.",
        recoveryHelp:
          "Set Sustain to maximum and the note holds at full level; set it to zero and the note always fades away even while held.",
        nextHint: "And the part after you let go.",
      },
      {
        id: "I04-S07",
        title: "Release is what happens after you",
        instruction: "Set a long Release, play a chord, and take your hands away.",
        hardwareTargets: ["cursorRightButton", "programValueButtons"],
        visualMode: "full-plus-inset",
        expectedSound: "The chord continues and fades after your hands have left the keys.",
        whyItMatters:
          "Release is the only stage that happens when you are not touching the instrument, which makes it the one that decides how a passage joins up.",
        checkpoint: "The sound outlasts your hands.",
        recoveryHelp:
          "If notes pile into mud, shorten it. A very long release is also the usual innocent explanation for notes that seem not to stop.",
        nextHint: "Both envelopes at once is where this gets useful.",
      },
      {
        id: "I04-S08",
        title: "Two envelopes, one sound",
        instruction:
          "Give the amp a slow attack and the filter a fast one, then swap them.",
        detail:
          "The amp envelope shapes loudness; the filter envelope shapes brightness. They are separate, and they do not have to agree.",
        hardwareTargets: ["shiftButton", "cursorRightButton"],
        visualMode: "full-plus-inset",
        expectedSound:
          "One way round, the sound arrives bright and gets louder. The other way, it arrives loud and gets brighter.",
        whyItMatters:
          "Almost every interesting synth sound is these two envelopes disagreeing with each other in a controlled way.",
        checkpoint: "You have heard the same two settings produce two different instruments.",
        recoveryHelp:
          "If the two are hard to tell apart, exaggerate: put one attack at its shortest and the other near its longest.",
        nextHint: "One more thing decides how the envelope behaves.",
      },
      {
        id: "I04-S09",
        title: "Make it respond to your hands",
        instruction: "Find the amp's level velocity sensitivity and raise it.",
        detail:
          "This decides how much the volume varies with how hard you play. Roland's parameter runs both ways from zero, so it can also be set to work in reverse.",
        hardwareTargets: ["cursorRightButton", "programValueButtons"],
        visualMode: "full-plus-inset",
        expectedSound:
          "A gentle press is now much quieter than a firm one, instead of the two being similar.",
        whyItMatters:
          "This is what makes a sound feel played. B05 showed you the keys sense how hard you press; this is the setting that decides whether the sound cares.",
        checkpoint: "Soft and firm presses now sound clearly different.",
        recoveryHelp:
          "Set it back toward zero if the sound becomes hard to control. If firm presses are now too loud overall, lower AMP Level rather than undoing the sensitivity.",
        nextHint: "One note about the drums.",
      },
      {
        id: "I04-S10",
        title: "The same idea on the Drums part",
        instruction: "Press Drums and play a few keys.",
        detail:
          "The Drums part has the same two shaping tools under different names — Roland calls them TVF and TVA, a time-variant filter and a time-variant amplifier — and each of its instruments has its own set.",
        hardwareTargets: ["drumsButton"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "It means everything you just learned transfers to the drums, one instrument at a time. Shortening a snare's decay is the same operation as shortening a bass's.",
        checkpoint: "You know the drum equivalents exist and what they are called.",
        recoveryHelp:
          "The panel knobs work on the drum instrument you played most recently, so play the instrument you want to change before you turn anything.",
        nextHint:
          "You can shape a sound in time now. Next, make it move by itself.",
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
      "Modulation as motion: choose the shape of the movement, lock it to the tempo, decide what it moves, and put some of it under your own hand.",
    estimatedMinutes: 11,
    prerequisites: ["I04"],
    learningGoals: [
      "Choose an LFO waveform for the movement you want.",
      "Lock the LFO to the tempo so it stays in time.",
      "Send the LFO to pitch, filter or amp deliberately.",
      "Put modulation under the Mod control instead of always on.",
    ],
    // Source record: docs/tutorials/I05-SOURCE-NOTES.md
    // The panel LFO has one Depth and one Destination; the Tone Edit LFO
    // group has separate Pitch, Filter and Amp depths (PG p.14, pp.18-19),
    // which is the difference this tutorial exists to teach. The Mod depths
    // in the same group are the payoff for B05's Mod control: they are what
    // decides whether it does anything at all.
    steps: [
      {
        id: "I05-S01",
        title: "Protect any work you want to keep",
        instruction: "Decide whether this program holds work you have not saved.",
        hardwareTargets: ["display"],
        visualMode: "full-plus-inset",
        detail: "This tutorial edits the loaded sound throughout.",
        checkpoint: "You have decided: nothing to keep, or you have saved it.",
        recoveryHelp:
          "N09 Save your work teaches saving. Hold Shift and press Enter at any point to return to the original sound.",
        nextHint: "Choose a part where the LFO applies.",
      },
      {
        id: "I05-S02",
        title: "Choose a part the LFO can reach",
        instruction: "Press Digital Synth 1 and hold a sustained note.",
        detail:
          "Roland is explicit that the LFO effect is not applied to the Drums part, so start on one where it is.",
        hardwareTargets: ["digitalSynth1Button"],
        visualMode: "full-plus-inset",
        expectedSound: "A note you can hold steadily.",
        checkpoint: "You have a held note that sits still.",
        recoveryHelp:
          "If the sound fades on its own, raise Sustain in Tone Edit's AMP group, or pick a tone that holds — you need something steady to hear movement against.",
        nextHint: "Now choose the shape of the movement.",
      },
      {
        id: "I05-S03",
        title: "The waveform is the shape of the movement",
        instruction:
          "Turn the LFO Depth up, then turn the waveform knob through its positions.",
        detail:
          "Roland offers a triangle, a sine, a sawtooth, a square, a sample-and-hold and a random wave, and the lit indicator shows which is selected. A triangle glides up and down; a square jumps between two values; sample-and-hold steps to a new value at each cycle.",
        hardwareTargets: ["lfoWaveformControl", "lfoDepthKnob"],
        visualMode: "full-plus-inset",
        expectedSound:
          "Smooth wavering, then hard jumping between two states, then random stepping.",
        whyItMatters:
          "Depth and rate decide how much and how fast. The waveform decides what kind of movement it is, and it is the one that changes the character rather than the amount.",
        checkpoint: "You have heard at least a smooth shape and a jumping one.",
        recoveryHelp:
          "If you hear nothing at all, Depth is still at zero, or you are on the Drums part where the LFO is not applied.",
        nextHint: "Now stop it drifting out of time.",
      },
      {
        id: "I05-S04",
        title: "Lock the movement to the tempo",
        instruction:
          "Open Tone Edit, reach the LFO group, and turn Tempo Sync on.",
        detail:
          "With it off, the LFO runs at whatever rate you set and drifts against the music. With it on, the rate becomes a note value relative to the tempo, set by a separate Sync Note parameter.",
        hardwareTargets: ["menuWriteButton", "programValueButtons"],
        visualMode: "full-plus-inset",
        expectedSound: "The movement lands in time with the pattern rather than sliding against it.",
        whyItMatters:
          "This is the difference between movement that sounds deliberate and movement that sounds like a wobble. Almost every rhythmic synth part you have heard uses it.",
        checkpoint: "Tempo Sync is on and a Sync Note value is available.",
        recoveryHelp:
          "With Tempo Sync on, the plain Rate parameter no longer sets the speed — Sync Note does. If the speed will not change, check which of the two you are editing.",
        nextHint: "Now choose a note value.",
      },
      {
        id: "I05-S05",
        title: "Choose how fast, in beats",
        instruction: "Find Sync Note and step through some values while the pattern plays.",
        detail:
          "The values are note lengths rather than numbers, so the movement stays locked however you change the tempo.",
        hardwareTargets: ["cursorRightButton", "programValueButtons"],
        visualMode: "full-plus-inset",
        expectedSound:
          "The movement changing speed in musical steps — once a bar, twice a bar, four times — rather than sliding continuously.",
        checkpoint: "The movement is in time with the pattern at more than one speed.",
        recoveryHelp:
          "If it is hard to hear against everything else, hold Shift and press Part Select buttons to mute the other parts while you listen.",
        nextHint: "Now decide what it moves.",
      },
      {
        id: "I05-S06",
        title: "Three destinations, separately",
        instruction:
          "In the same group, find the Pitch, Filter and Amp depths and raise them one at a time.",
        detail:
          "Roland names the results: to pitch gives vibrato, to the filter gives a wah effect, and to the amp gives tremolo. In Tone Edit they are three separate depths rather than one destination, so you can use more than one at once.",
        hardwareTargets: ["cursorRightButton", "programValueButtons"],
        visualMode: "full-plus-inset",
        expectedSound: "The same movement wavering the pitch, sweeping the tone, or pulsing the volume.",
        whyItMatters:
          "The panel gives you one destination at a time. This is where you get all three, which is the whole reason to come in here rather than use the knob.",
        checkpoint: "You have heard the same LFO produce vibrato, wah and tremolo.",
        recoveryHelp:
          "Set each back to zero when you have heard it, so the next one is not masked by the last. Each of these runs both ways from zero, so a negative value moves it the other way.",
        nextHint: "Two settings decide how the movement starts.",
      },
      {
        id: "I05-S07",
        title: "Fade the movement in",
        instruction: "Find Fade Time and raise it.",
        detail:
          "This is the time from playing the note until the LFO reaches its full amount. The movement now grows in rather than being there from the first instant.",
        hardwareTargets: ["cursorRightButton", "programValueButtons"],
        visualMode: "full-plus-inset",
        expectedSound: "A note that starts steady and begins to waver only after a moment.",
        whyItMatters:
          "This is how a real player uses vibrato — not from the start of the note, but once it is established. One parameter buys you that.",
        checkpoint: "The movement arrives after the note rather than with it.",
        recoveryHelp: "Set Fade Time back to zero for movement that is present immediately.",
        nextHint: "And whether every note starts the same way.",
      },
      {
        id: "I05-S08",
        title: "Restart the cycle on each note",
        instruction: "Find Key Trigger and turn it on.",
        detail:
          "With it on, the LFO cycle restarts each time you press a key, so every note begins at the same point in the movement. With it off, the LFO runs continuously underneath and notes catch it wherever it happens to be.",
        hardwareTargets: ["cursorRightButton", "programValueButtons"],
        visualMode: "full-plus-inset",
        expectedSound:
          "With it on, repeated notes sound identical. With it off, each one is caught at a slightly different point.",
        whyItMatters:
          "It decides whether a part sounds tight and repeatable or loose and organic, and it is the setting to reach for when a rhythmic sound will not sit still.",
        checkpoint: "You can hear the difference between repeated notes with it on and off.",
        recoveryHelp:
          "The difference is clearest with a fast, deep, obvious movement — exaggerate the settings while you compare, then put them back.",
        nextHint: "Last: put some of it under your hand.",
      },
      {
        id: "I05-S09",
        title: "Give the Mod control something to do",
        instruction:
          "Find the modulation depths in the same group and raise the one for pitch.",
        detail:
          "These are separate from the LFO depths above. They decide how much modulation the Mod control beside the keys can apply — to the pitch, the filter or the amp.",
        hardwareTargets: ["cursorRightButton", "modControl"],
        visualMode: "full-plus-inset",
        expectedSound:
          "Nothing changes until you move the Mod control, and then the note begins to waver.",
        whyItMatters:
          "This answers something B05 left open: whether the Mod control does anything depends on the sound. Now you know which setting decides, and you can build a sound where it does exactly what you want.",
        checkpoint:
          "Moving the Mod control adds movement, and leaving it toward you removes it.",
        recoveryHelp:
          "If nothing happens, check the Mod control is not already fully toward you, and that you raised the modulation depth rather than the LFO depth — they sit near each other and do different jobs.",
        nextHint: "Now leave it somewhere sensible.",
      },
      {
        id: "I05-S10",
        title: "Leave it under control",
        instruction:
          "Press Exit, move the Mod control fully toward you, and listen to the sound plain.",
        detail:
          "Movement is easy to overuse. A sound that wavers constantly is exhausting to listen to over several minutes.",
        hardwareTargets: ["exitButton", "modControl"],
        visualMode: "full-plus-inset",
        checkpoint: "The sound is steady again, and you can add movement when you want it.",
        recoveryHelp:
          "If it still wavers with the Mod control toward you, an LFO depth is set rather than a modulation depth — go back and set that one to zero.",
        nextHint:
          "Your sounds can move now. Next, the space they sit in.",
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
      "Effects with intent rather than by ear: choose types deliberately, understand the one set of effects a program has, and route each part to the effects you want it to have.",
    estimatedMinutes: 13,
    prerequisites: ["I05"],
    learningGoals: [
      "Edit an effect's own parameters rather than only its depth.",
      "Understand why a program has one set of effects.",
      "Route individual parts to different effects.",
      "Use the send levels to control how much of each part is affected.",
    ],
    // Source record: docs/tutorials/I06-SOURCE-NOTES.md
    // The constraint that makes this tutorial necessary is PG p.8: a program
    // contains a single set of effect type selections and settings, so two
    // parts cannot have different Effect 1 types -- but Part Output and the
    // send levels let each part use a different subset of the chain. I06-S09
    // is firmware-gated (side chain, v1.50) and written to be skippable.
    steps: [
      {
        id: "I06-S01",
        title: "Protect any work you want to keep",
        instruction: "Decide whether this program holds effect settings you have not saved.",
        detail:
          "Effect settings belong to the program, and this tutorial changes several of them.",
        hardwareTargets: ["effectsSection"],
        visualMode: "full-plus-inset",
        checkpoint: "You have decided: nothing to keep, or you have saved it.",
        recoveryHelp:
          "N09 Save your work teaches saving. Unlike a sound edit, there is no documented one-button way back from an effect change.",
        nextHint: "Now open the effects properly.",
      },
      {
        id: "I06-S02",
        title: "Open Effects Edit",
        instruction: "Press Menu/Write, use Cursor to select Effects Edit, and press Enter.",
        detail:
          "The four panel knobs set depth. This screen is where the effects themselves are configured.",
        hardwareTargets: ["menuWriteButton", "display"],
        visualMode: "full-plus-inset",
        checkpoint: "The display is showing an Effects Edit screen.",
        recoveryHelp:
          "A long press of Menu/Write opens PORTAMENTO instead — press Exit and use a short press. Press Exit once to get back to the Menu list if you opened the wrong item.",
        nextHint: "Move between the four effects.",
      },
      {
        id: "I06-S03",
        title: "Move between the four effects",
        instruction: "Hold down Shift and press Cursor ► to step through the groups.",
        detail:
          "Roland's own instruction for this screen: to move between Effect 1, Effect 2, Delay and Reverb, hold Shift and use the cursor buttons.",
        hardwareTargets: ["shiftButton", "cursorRightButton"],
        visualMode: "full-plus-inset",
        checkpoint: "The group name on the upper line changes between the four effects.",
        recoveryHelp:
          "If the group does not change, keep Shift held and press Cursor ◄ instead — you may be at the end of the list.",
        nextHint: "Each one has a type, including an off setting.",
      },
      {
        id: "I06-S04",
        title: "Type includes Thru",
        instruction: "In the EFFECT1 group, find Type and step through its values.",
        detail:
          "Alongside Distortion, Fuzz, Compressor and Bit Crusher there is a Thru setting, which passes the sound through untouched. That is how an effect is switched out from in here.",
        hardwareTargets: ["programValueButtons"],
        visualMode: "full-plus-inset",
        expectedSound: "The character of the sound changing with each type, and going plain on Thru.",
        whyItMatters:
          "Thru is the setting that answers a question B07 could not: what to do when you want Effect 1 to do nothing at all rather than a very small amount of something.",
        checkpoint: "You have found Thru and heard the effect drop out on it.",
        recoveryHelp:
          "Keep stepping to come back round to the type you want. Each type has its own parameters, which appear after Type on the same screen.",
        nextHint: "Now the parameters behind the depth knob.",
      },
      {
        id: "I06-S05",
        title: "Edit the effect itself",
        instruction: "Press Cursor ► to walk through the selected effect's own parameters.",
        detail:
          "Each type brings its own set. This is where an effect stops being one knob and becomes something you can shape.",
        hardwareTargets: ["cursorRightButton", "programValueButtons"],
        visualMode: "full-plus-inset",
        expectedSound: "The chosen effect changing in ways the panel knob alone cannot produce.",
        whyItMatters:
          "One documented example is worth knowing: with the Flanger selected as Effect 2, setting its Feedback to zero turns it into a chorus. The type list is shorter than the range of sounds it can make.",
        checkpoint: "You have changed at least one parameter that is not the depth.",
        recoveryHelp:
          "Note a value before you change it if you want to come back to it. There is no undo for effect settings.",
        nextHint: "Now the constraint that shapes everything else here.",
      },
      {
        id: "I06-S06",
        title: "One set of effects per program",
        instruction: "Read this before you try to give two parts different effects.",
        detail:
          "Roland states it plainly: each program contains a single set of effect type selections and settings. One part cannot have Effect 1 set to Distortion while another has it set to Fuzz. There is one Effect 1, one Effect 2, one Delay and one Reverb for the whole program.",
        hardwareTargets: ["effectsSection"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "This is a hard limit, and knowing it early saves you looking for a per-part effect type setting that does not exist. What you can change per part is which of those effects each part goes through.",
        checkpoint: "You can say what is shared across the program and what is not.",
        recoveryHelp:
          "Nothing to recover from — this step changes nothing. The next two steps are how you work within the constraint.",
        nextHint: "Now route the parts.",
      },
      {
        id: "I06-S07",
        title: "Send each part where you want it",
        instruction:
          "Press Exit, open Program Edit, reach the MAIN group, and find Part Output.",
        detail:
          "This chooses which effects a part passes through. Roland's settings run from everything, through progressively fewer, to a direct output with no effects at all — and there is a setting specific to the Drums part that uses each drum instrument's own routing.",
        hardwareTargets: ["menuWriteButton", "display"],
        visualMode: "display-focus",
        expectedDisplay: ["PROG: MAIN D1", "Level 127"],
        syntheticDisplay: false,
        displayNote:
          "Roland's illustrated Program Edit MAIN screen. Part Output is one of the parameters along this group; the two letters at the right show which part you are routing.",
        whyItMatters:
          "This is the answer to the shared-effects constraint. Your bass can go straight out while your pad goes through everything, using the same one set of effects.",
        checkpoint: "You can see Part Output and change it for the selected part.",
        recoveryHelp:
          "Use Part Select to change which part you are routing — the two letters at the right of the upper line tell you which one that is. N02 covers this screen.",
        nextHint: "Then decide how much of it arrives.",
      },
      {
        id: "I06-S08",
        title: "Set the sends by part",
        instruction: "Find the delay and reverb send levels and set them per part.",
        detail:
          "These decide how much of each part is sent to the delay and the reverb. A pad might be sent heavily; a bass usually is not sent at all.",
        hardwareTargets: ["cursorRightButton", "programValueButtons"],
        visualMode: "full-plus-inset",
        expectedSound: "One part sitting in a large space while another stays dry and close.",
        whyItMatters:
          "Space is a relative thing. A pad only sounds distant if something else is near, so the sends matter more than the reverb amount does.",
        checkpoint: "Two parts have audibly different amounts of space around them.",
        recoveryHelp:
          "A send at zero means that effect does nothing for that part no matter what the panel knob is set to — that is one of the documented reasons an effect appears not to work, which B07 lists in full.",
        nextHint: "One more effect, and whether you have it depends on your JD-Xi.",
      },
      {
        id: "I06-S09",
        title: "Duck the synths under the drums (version 1.50 or later)",
        instruction:
          "Set Effect 1's type to Compressor, then look for its side-chain parameters.",
        detail:
          "From system version 1.50, the Compressor gained a side chain that reduces the volume of the digital and analog parts while the drum part is sounding. If your instrument is older it will not have these parameters, and you can skip this step — nothing else here depends on it.",
        hardwareTargets: ["menuWriteButton", "programValueButtons"],
        visualMode: "full-plus-inset",
        expectedSound:
          "With a pattern playing, the synth parts dip slightly on every drum hit and recover between them.",
        whyItMatters:
          "It is the sound of a mix breathing with the beat, and on this instrument it is done for you rather than by hand.",
        checkpoint:
          "Either you have found the side-chain parameters, or you have established your JD-Xi does not have them.",
        recoveryHelp:
          "If the parameters are not there after Type is set to Compressor, your JD-Xi is very likely running a system version earlier than 1.50 — that is not a fault, and N01 shows you where to read your version. Turn the side chain switch off to remove the effect.",
        nextHint: "Now come out and listen to the whole thing.",
      },
      {
        id: "I06-S10",
        title: "Listen to the whole program",
        instruction: "Press Exit to the top screen and play the pattern.",
        detail:
          "Everything you changed belongs to this program and is lost if you switch program or power off without saving.",
        hardwareTargets: ["exitButton", "playStopButton"],
        visualMode: "full-plus-inset",
        expectedSound: "Parts sitting at different distances rather than all in the same place.",
        checkpoint: "The parts occupy different amounts of space.",
        recoveryHelp:
          "There is no undo for effect settings and no single button that puts them back. Setting the types to Thru and the sends to zero gives you a clean starting point to rebuild from.",
        nextHint:
          "Next, put four parts together into one deliberate program.",
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
      "Assemble four parts into one coherent setup: balance, position, routing, and the per-part adjustments that let one program hold four sounds that belong together.",
    estimatedMinutes: 13,
    prerequisites: ["I06"],
    learningGoals: [
      "Set up all four parts of one program deliberately.",
      "Use the program-wide settings as well as the per-part ones.",
      "Adjust a part's sound without leaving Program Edit.",
      "Save the whole arrangement as one program.",
    ],
    // Source record: docs/tutorials/I07-SOURCE-NOTES.md
    // The OFFSET group (PG p.11) is the reason this tutorial is not just N06
    // again: it adjusts the tone assigned to a part -- cutoff, resonance and
    // the envelope times -- from inside Program Edit, without editing the
    // tone itself. That is how one program holds four sounds that fit each
    // other rather than four sounds that happen to be loaded together.
    steps: [
      {
        id: "I07-S01",
        title: "Protect any work you want to keep",
        instruction: "Decide whether this program holds work you have not saved.",
        detail:
          "This tutorial changes settings across all four parts. If the program you are on has work you want, save it first, or move to one you are happy to rebuild.",
        hardwareTargets: ["programValueButtons"],
        visualMode: "full",
        checkpoint: "You have decided: nothing to keep, saved already, or moved somewhere disposable.",
        recoveryHelp: "N09 Save your work teaches saving.",
        nextHint: "Start with the whole program rather than one part.",
      },
      {
        id: "I07-S02",
        title: "The program's own settings",
        instruction:
          "Open Program Edit from the Menu and read the COMMON group.",
        detail:
          "These belong to the program as a whole rather than any part: its tempo, and the level of the program itself.",
        hardwareTargets: ["menuWriteButton", "display"],
        visualMode: "display-focus",
        expectedDisplay: ["PROG: COMMON", "Tempo 120"],
        syntheticDisplay: false,
        displayNote:
          "Roland's illustrated Program Edit COMMON screen. Your JD-Xi shows its own program's tempo.",
        whyItMatters:
          "Program level is the one that sets how loud this whole program is against your other programs — useful when you have built several and one of them jumps out.",
        checkpoint: "You can see the program-wide settings.",
        recoveryHelp:
          "Hold Shift and press Cursor to move between COMMON and the other groups. N02 covers this screen.",
        nextHint: "Now go part by part.",
      },
      {
        id: "I07-S03",
        title: "Set each part's level",
        instruction:
          "Reach the MAIN group and set the Level of each of the four parts in turn.",
        detail:
          "Use Part Select to move between them; the two letters at the right of the upper line tell you which one you are on. Do this with the pattern playing.",
        hardwareTargets: ["partSelectGroup", "programValueButtons"],
        visualMode: "full-plus-inset",
        expectedSound: "The four parts settling into a balance rather than competing.",
        checkpoint: "No part is drowning the others.",
        recoveryHelp:
          "Note each number before you change it. If you lose the balance completely, mute parts with Shift and Part Select and bring them back one at a time.",
        nextHint: "Now give them room across the stereo picture.",
      },
      {
        id: "I07-S04",
        title: "Place them left and right",
        instruction: "Set Pan for each part.",
        detail:
          "Keep the bass and the drums near the centre and move the others out. Headphones show this most clearly.",
        hardwareTargets: ["cursorRightButton", "programValueButtons"],
        visualMode: "full-plus-inset",
        expectedSound: "Parts occupying different positions rather than stacking in the middle.",
        whyItMatters:
          "Low sounds carry no directional information worth much, so they belong in the middle. Everything else gains clarity by moving out of the way.",
        checkpoint: "You can hear parts in different places.",
        recoveryHelp:
          "Centre is the middle of the range. If a part has vanished, you may have moved it fully to one side while listening on one speaker.",
        nextHint: "Now route them to the effects you set up.",
      },
      {
        id: "I07-S05",
        title: "Route each part",
        instruction: "Set Part Output and the send levels for each part.",
        detail:
          "This is where I06's work pays off: one set of effects, but each part passing through only what suits it.",
        hardwareTargets: ["cursorRightButton", "programValueButtons"],
        visualMode: "full-plus-inset",
        expectedSound: "Some parts dry and close, others sitting in a space.",
        checkpoint: "The parts are not all in the same acoustic place.",
        recoveryHelp:
          "A send at zero means that effect does nothing for that part regardless of the panel knob. I06 covers the routing in detail.",
        nextHint: "Now the group that adjusts a sound from out here.",
      },
      {
        id: "I07-S06",
        title: "Adjust a part's sound without leaving",
        instruction:
          "Hold Shift and press Cursor until the upper line reads PROG:OFFSET, then change Cutoff Ofst.",
        detail:
          "These adjust the tone assigned to the part rather than editing the tone itself. Roland provides offsets for cutoff and resonance, for the attack, decay and release times, and for vibrato.",
        hardwareTargets: ["shiftButton", "cursorRightButton", "display"],
        visualMode: "display-focus",
        expectedDisplay: ["PROG:OFFSET D1", "Cutoff Ofst 0"],
        syntheticDisplay: false,
        displayNote:
          "Roland's illustrated Program Edit OFFSET screen. The two letters show the part, and the value is your own program's.",
        whyItMatters:
          "This is the difference between four sounds that happen to be loaded together and four that fit each other. You can darken a preset slightly for this program without changing the preset.",
        checkpoint: "You can hear a part's brightness change from inside Program Edit.",
        recoveryHelp:
          "These offsets run both ways from zero, so setting one back to zero removes the adjustment. If the part has gone silent, the cutoff offset is probably far negative.",
        nextHint: "There are more offsets than brightness.",
      },
      {
        id: "I07-S07",
        title: "Adjust the timing of a part",
        instruction: "Press Cursor ► to reach the attack, decay and release offsets.",
        detail:
          "The same idea applied to the envelope: shorten a pad's release for this program without editing the pad.",
        hardwareTargets: ["cursorRightButton", "programValueButtons"],
        visualMode: "full-plus-inset",
        expectedSound: "A part arriving or ending differently, without its tone being edited.",
        whyItMatters:
          "It keeps a sound reusable. The tone stays as you built it, and each program bends it a little to fit.",
        checkpoint: "You have changed how a part behaves in time without opening Tone Edit.",
        recoveryHelp: "Set any offset back to zero to remove its adjustment.",
        nextHint: "One structural fact worth restating here.",
      },
      {
        id: "I07-S08",
        title: "Four parts, one player",
        instruction: "Press Exit, and play the keys while the pattern runs.",
        detail:
          "The program holds four parts and the pattern plays all of them, but the keys still play only the one you have selected. That is the shape of every JD-Xi performance: the sequencer covers the arrangement and your hands cover one part of it.",
        hardwareTargets: ["partSelectGroup", "keys"],
        visualMode: "full",
        expectedSound: "The full arrangement playing, with your one part on top of it.",
        whyItMatters:
          "It is worth deciding in advance which part you want to play live, because that is the one the arrangement should leave room for.",
        checkpoint: "You know which part you are playing and which the sequencer is covering.",
        recoveryHelp:
          "Press the Part Select button of whichever part you want under your hands; the pattern keeps playing the rest.",
        nextHint: "Now check the whole thing hangs together.",
      },
      {
        id: "I07-S09",
        title: "Check it as one thing",
        instruction: "Mute each part in turn and decide whether it is earning its place.",
        detail:
          "Hold Shift and press a Part Select button. If a part disappears and nothing is worse, it may not need to be there.",
        hardwareTargets: ["shiftButton", "partSelectGroup"],
        visualMode: "full-plus-inset",
        expectedSound: "Each part revealing what it contributes by being taken away.",
        checkpoint: "You can say what each of the four parts is doing for the program.",
        recoveryHelp:
          "Unmute everything before you save — a muted part is a program setting and would be saved muted.",
        nextHint: "Last step: keep the whole arrangement.",
      },
      {
        id: "I07-S10",
        title: "Save the arrangement",
        instruction: "Save the program.",
        detail:
          "One save keeps all four parts and their tones, the balance, the routing, the offsets, the effects, the arpeggio, the tempo and the pattern. That is what a program is.",
        hardwareTargets: ["shiftButton", "menuWriteButton"],
        visualMode: "full-plus-inset",
        checkpoint: "The whole arrangement is stored under a name you chose.",
        recoveryHelp:
          "N09 Save your work has the full sequence, including choosing a destination you are willing to overwrite.",
        nextHint:
          "The sounds are arranged. Next, make the pattern worth arranging.",
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
      "Take a pattern beyond one measure of one part: all four recording methods and what each does to what is already there, longer patterns, recorded knob movements, and how to take things back out.",
    estimatedMinutes: 14,
    prerequisites: ["I07"],
    learningGoals: [
      "Choose a recording method for what it does to existing notes.",
      "Record a performance in real time.",
      "Work across more than one measure.",
      "Take out what you no longer want, and know what cannot be taken out.",
    ],
    // Source record: docs/tutorials/I08-SOURCE-NOTES.md
    // The four methods and their differing overwrite behaviour are the spine
    // (OM pp.11-12, PG p.3). Two documented traps get their own steps because
    // both cost work: recorded effect-knob movements cannot be erased at all
    // and must be re-recorded, and Pattern Copy overwrites the destination.
    // Loop Rec is described rather than performed -- it is a SYSTEM parameter
    // and SYSTEM writes itself on exit.
    steps: [
      {
        id: "I08-S01",
        title: "Protect any work you want to keep",
        instruction: "Decide whether this program's pattern holds work you have not saved.",
        detail:
          "Everything here records into the pattern, and two of the methods overwrite what is already there.",
        hardwareTargets: ["programValueButtons", "stepButtons"],
        visualMode: "full",
        checkpoint: "You have decided: nothing to keep, saved already, or working somewhere disposable.",
        recoveryHelp: "N09 Save your work teaches saving.",
        nextHint: "Start with the method that adds without destroying.",
      },
      {
        id: "I08-S02",
        title: "The four ways in",
        instruction: "Read this before you record anything.",
        detail:
          "There are four recording methods and they behave differently. Lighting steps by hand refuses to record over a step that already holds a note. Holding a step and playing adds notes without deleting anything. Step recording and realtime recording both delete what was there and replace it.",
        hardwareTargets: ["patternSequencerSection", "stepButtons"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "On an empty pattern the choice barely matters. On a pattern you have spent an hour on, it is the difference between adding a part and losing one.",
        checkpoint: "You can say which two methods overwrite and which two do not.",
        recoveryHelp:
          "Nothing to recover from — this step changes nothing. When in doubt, hold a step and play: it is the one that never deletes.",
        nextHint: "Now record a performance rather than placing notes.",
      },
      {
        id: "I08-S03",
        title: "Arm the recording",
        instruction: "Select the part you want to record on, then press Real Time Rec.",
        detail:
          "Recording always goes to the selected part, so choose it before you arm anything.",
        hardwareTargets: ["partSelectGroup", "realTimeRecButton"],
        visualMode: "full-plus-inset",
        checkpoint: "The part you want is selected and Real Time Rec is armed.",
        recoveryHelp:
          "Press Real Time Rec again to disarm without recording anything. Nothing has been changed yet.",
        nextHint: "Now start it and play.",
      },
      {
        id: "I08-S04",
        title: "Record in real time",
        instruction: "Press Play/Stop, and play along.",
        detail:
          "Your performance is layered onto the pattern as it runs. Knob and wheel movements are recorded as well as notes.",
        hardwareTargets: ["playStopButton", "keys"],
        visualMode: "full",
        expectedSound: "What you play appearing in the pattern as it comes round again.",
        whyItMatters:
          "This is the first method where timing is yours rather than the grid's, which is what makes a part sound played rather than placed.",
        checkpoint: "Something you played in real time is now repeating in the pattern.",
        recoveryHelp:
          "Press Real Time Rec again to stop recording. Note that this method replaces existing notes as it goes — if you have covered something you wanted, there is no undo.",
        nextHint: "One behaviour of this method surprises people.",
      },
      {
        id: "I08-S05",
        title: "It stops at the end of the pattern",
        instruction: "Keep recording and let the pattern come round to its start.",
        detail:
          "Roland documents this: if you record while the pattern is playing, recording stops automatically the moment playback returns to the beginning. A system setting called Loop Rec changes that so recording continues until you stop it yourself.",
        hardwareTargets: ["realTimeRecButton"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "Without knowing this, it looks as though recording failed. It did not — it finished, exactly once round.",
        checkpoint: "You have seen recording end by itself at the end of the pattern.",
        recoveryHelp:
          "To record over several passes, that Loop Rec setting has to be turned on — and it lives in the system settings, which save themselves as you leave the screen. This tutorial does not go in there; change it only deliberately, and note the value you found.",
        nextHint: "Now use more than one measure.",
      },
      {
        id: "I08-S06",
        title: "Give yourself more room",
        instruction: "Set the pattern to more measures from the Menu.",
        detail:
          "Up to four. Answering the copy question with Enter fills the new measures from what you already have; Exit leaves them blank.",
        hardwareTargets: ["menuWriteButton", "display"],
        visualMode: "display-focus",
        expectedDisplay: ["With Copying ?", "[Exit]:N [Ent]:Y"],
        syntheticDisplay: false,
        displayNote:
          "Roland's illustrated prompt from the Pattern Length procedure, reproduced with its own left-to-right order.",
        whyItMatters:
          "Copying is usually what you want when extending something that already works — you get a second measure to vary rather than an empty one to fill.",
        checkpoint: "The pattern is longer than it was.",
        recoveryHelp:
          "Neither answer cancels; both apply the change — N03 covers this screen. If you want the original length back, set it again the same way. Roland notes the length also reverts if you select another program before saving, but reach for that only if you want none of what you have: it discards every unsaved change on this program, your pattern and sounds included.",
        nextHint: "Now move around the measures you have.",
      },
      {
        id: "I08-S07",
        title: "Work on a later measure",
        instruction:
          "With the pattern playing, hold Shift and press one of the first four numbered buttons.",
        detail:
          "That chooses which measure the sixteen buttons are showing. The current measure blinks while Shift is held.",
        hardwareTargets: ["shiftButton", "stepButtons"],
        visualMode: "full-plus-inset",
        checkpoint: "You can edit a measure other than the first.",
        recoveryHelp:
          "This only works while the pattern is playing or recording. With a 32nd-note scale the range is the first eight buttons instead of the first four.",
        nextHint: "Now add movement that is not notes.",
      },
      {
        id: "I08-S08",
        title: "Record a knob movement",
        instruction:
          "Start realtime recording again and sweep the Cutoff knob while the pattern runs.",
        detail:
          "Knob and wheel movements are recorded alongside notes, so a filter sweep becomes part of the pattern.",
        hardwareTargets: ["realTimeRecButton", "cutoffKnob"],
        visualMode: "full-plus-inset",
        expectedSound: "The filter sweeping by itself each time the pattern comes round.",
        whyItMatters:
          "This is how a pattern stops being static without you touching anything. It is also the fastest way to fill a pattern's capacity, so use it deliberately.",
        checkpoint: "The pattern now moves on its own.",
        recoveryHelp:
          "If the display reports the pattern is full, you have recorded more movement than it can hold — Roland's advice is to remove unneeded data from the pattern. Recording extreme movements can also make playback struggle to keep up.",
        nextHint: "Taking movement back out is not like taking notes out.",
      },
      {
        id: "I08-S09",
        title: "Removing recorded movement",
        instruction:
          "While the pattern plays, hold Enter and press Erase to clear the selected part's knob and wheel movements.",
        detail:
          "This erases only the recorded movements, for as long as you hold the buttons, and only for the selected part. On the Drums part it clears them for every instrument at once. It was added in system version 1.10 — earlier instruments do not have it.",
        hardwareTargets: ["enterButton", "eraseButton"],
        visualMode: "full-plus-inset",
        checkpoint: "The recorded movement is gone and the notes are still there.",
        recoveryHelp:
          "If nothing happens, your JD-Xi may be running a system version earlier than 1.10, which does not have this. Note that this is a documented erase with no undo — the movement has to be re-recorded.",
        nextHint: "One kind of movement cannot be removed at all.",
      },
      {
        id: "I08-S10",
        title: "Effect knob movements are different",
        instruction: "Read this before you record an effect sweep.",
        detail:
          "Roland is explicit: because effect knob movements are saved for the whole program rather than the pattern, erasing the pattern does not erase them — and they cannot be erased at all. If you record one and change your mind, the only route is to re-record it.",
        hardwareTargets: ["effectsSection"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "It is the one recording on this instrument that cannot be taken back, so it is worth knowing before you make it rather than after.",
        checkpoint: "You know which knob movements can be erased and which cannot.",
        recoveryHelp:
          "If you have recorded an effect movement you do not want, re-record it holding the knob still. Nothing else removes it.",
        nextHint: "One more tool, and it overwrites.",
      },
      {
        id: "I08-S11",
        title: "Copying a pattern from elsewhere",
        instruction: "Read this before using it.",
        detail:
          "Holding Menu/Write and pressing button 10 opens Pattern Copy, which brings a pattern in from another program. It overwrites the destination part, and you choose whether to copy the pattern, the sound, or both. Roland notes that program and effect settings are not copied.",
        hardwareTargets: ["menuWriteButton", "stepButton10"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "It is the only documented way to move a tone from one program into another, using its sound-only setting — which is useful, because the JD-Xi cannot save a tone on its own.",
        checkpoint: "You know what Pattern Copy does and what it replaces.",
        recoveryHelp:
          "It overwrites the destination part with no undo, so be sure which part you are copying into before you confirm. Press Exit to leave the screen without copying.",
        nextHint: "Last step: keep the pattern.",
      },
      {
        id: "I08-S12",
        title: "Save the pattern with its program",
        instruction: "Save the program.",
        detail:
          "The pattern, the recorded movements, the length and the parts all go together. There is still no separate save for a pattern.",
        hardwareTargets: ["shiftButton", "menuWriteButton"],
        visualMode: "full-plus-inset",
        checkpoint: "Your fuller pattern is stored.",
        recoveryHelp:
          "N09 Save your work has the full sequence. If you do not save, selecting another program or powering off loses the pattern and everything in it.",
        nextHint:
          "You can build a full pattern now. Next, keep and organize what you have made.",
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
      "Manage a growing library: where your programs live, how to recall them instantly, how to choose what the JD-Xi starts on, and how to get a copy of everything onto a computer.",
    estimatedMinutes: 13,
    prerequisites: ["I08"],
    learningGoals: [
      "Organize your own programs across the user banks.",
      "Register and recall favourites, across more than one bank.",
      "Choose which program the JD-Xi starts on.",
      "Get a copy of your work onto a computer.",
    ],
    // Source record: docs/tutorials/I09-SOURCE-NOTES.md
    //
    // DESTRUCTIVE-RISK TUTORIAL. It performs Backup, which only reads, and
    // deliberately does NOT perform Restore, which replaces the instrument's
    // data. Restore and the Extra Bank import are described so the learner
    // knows they exist and what they cost; neither is carried out.
    //
    // Startup Program is a SYSTEM parameter, so it writes itself on exit
    // (OM p.13). That is stated to the learner, and the step has them read
    // the current value before changing it -- the only restore path SYSTEM
    // offers. It is firmware-gated at 1.50.
    steps: [
      {
        id: "I09-S01",
        title: "Save anything you came here to save",
        instruction:
          "Decide whether the program loaded right now holds work you have not saved.",
        detail:
          "The very next step steps through programs to show you what is in the user banks — and selecting another program throws away anything unsaved on the one you leave. If you have arrived here with work still loaded, save it before you go any further.",
        hardwareTargets: ["programValueButtons"],
        visualMode: "full",
        whyItMatters:
          "This tutorial is about keeping and organizing what you have made, so losing something in its first minute would be a poor start. It is also the one place where the risk arrives immediately rather than several steps in.",
        checkpoint:
          "You have decided: either there is nothing loaded that you need, or you have saved it.",
        recoveryHelp:
          "N09 Save your work has the full save sequence. If you are not sure whether the loaded program has been edited, look at the lower line of the display — a sound with no tone number showing has been changed and not saved.",
        nextHint: "Now go and look at what you already have.",
      },
      {
        id: "I09-S02",
        title: "Where your work lives",
        instruction: "Hold Shift and press a Value button to look through the banks.",
        detail:
          "Roland's programs are in banks A to D and yours go in E to H, sixty-four in each. Stepping through the user banks shows you what you have built so far.",
        hardwareTargets: ["shiftButton", "programValueButtons"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "Two hundred and fifty-six slots sounds like plenty until they are full of programs called Init Program. How you organize them now decides whether you can find anything later.",
        checkpoint: "You can move between banks and see what is in the user banks.",
        recoveryHelp:
          "Changing program discards anything unsaved on the one you are leaving, which the previous step asked you to settle. If you would rather not browse at all, skip to the next step — nothing later depends on having looked.",
        nextHint: "Now a faster way back to the ones you use.",
      },
      {
        id: "I09-S03",
        title: "Find a free favourite slot",
        instruction: "Press Favorite, then press one of the numbered buttons.",
        detail:
          "With Favorite lit, the numbered buttons become favourite slots. A button with nothing stored reports Not Registered, which is the JD-Xi telling you it is free. If a sound loads instead, that slot is in use — try another.",
        hardwareTargets: ["favoriteButton", "stepButtons"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "Registering replaces whatever was on a button and the JD-Xi does not ask first. Checking for Not Registered is the only way it will tell you a slot is free beforehand.",
        checkpoint:
          "You have found a numbered button that reports Not Registered, and noted which one it is.",
        recoveryHelp:
          "If pressing a button loaded a different sound, that slot was already registered and the program you were on has been replaced — anything unsaved on it is gone. Try a different button. B03 covers this in full.",
        nextHint: "Now put something in it.",
      },
      {
        id: "I09-S04",
        title: "Register a favourite",
        instruction:
          "Select the program you want, then hold Favorite and press that free button.",
        detail:
          "The program selected right now is the one that gets registered. Use the free button you just found, not one that already held something.",
        hardwareTargets: ["favoriteButton", "stepButtons"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "A favourite also remembers which part was selected when you registered it, so recalling one brings back the part you were playing as well as the program.",
        checkpoint: "Pressing that numbered button while Favorite is lit recalls your program.",
        recoveryHelp:
          "To clear a registration, hold Erase and press that button while Favorite is lit. If the program you are registering has been edited and not saved, save it first — a favourite recalls the stored program, not your unsaved edits.",
        nextHint: "Sixteen is not the limit.",
      },
      {
        id: "I09-S05",
        title: "More than sixteen favourites",
        instruction:
          "With Favorite lit, press and hold Shift until one of the numbered buttons blinks, then press a different one.",
        detail:
          "Favourites are organized into sixteen banks of sixteen. The blinking button is the bank you are on; pressing a non-blinking one switches to that bank.",
        hardwareTargets: ["favoriteButton", "shiftButton"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "It is a long press rather than a normal Shift combination, which is why most people never find it and assume there are only sixteen favourites.",
        checkpoint: "You have switched to a different favourite bank.",
        recoveryHelp:
          "If nothing blinks, hold Shift longer — this one needs a long press. Switch back the same way; the bank you were on is whichever button blinks.",
        nextHint: "Now decide what the JD-Xi wakes up on.",
      },
      {
        id: "I09-S06",
        title: "Open the system settings (version 1.50 or later)",
        instruction: "Open the Menu, select SYSTEM, and press Enter.",
        detail:
          "This sets which program is selected when the JD-Xi powers on. It was added in system version 1.50; if your instrument is older it will not be there, and you can skip this step.",
        hardwareTargets: ["menuWriteButton", "display"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "It means the instrument can start on your own work rather than on whatever it happened to be showing.",
        checkpoint: "You are inside the system settings.",
        recoveryHelp:
          "Anything you change in here is written as you leave, so touch nothing on the way. Press Exit to come straight back out if you would rather not continue.",
        nextHint: "Now find the one parameter this tutorial wants.",
      },
      {
        id: "I09-S07",
        title: "Find Start Prog",
        instruction: "Hold Shift and press Cursor until the upper line reads GENERAL, then use Cursor to find Start Prog.",
        detail:
          "Shift with Cursor moves between the SYSTEM groups; Cursor on its own walks the parameters inside one.",
        hardwareTargets: ["shiftButton", "cursorRightButton"],
        visualMode: "full-plus-inset",
        checkpoint:
          "Either you have found Start Prog, or you have established your JD-Xi does not have it.",
        recoveryHelp:
          "If Start Prog is not in the GENERAL group at all, your JD-Xi is very likely running a system version earlier than 1.50 — N01 shows you where to read your version. Cursor cannot change a value, so walking the list alters nothing.",
        nextHint: "Read the current value before you change it.",
      },
      {
        id: "I09-S08",
        title: "Change it deliberately",
        instruction:
          "Note the value shown, then use Value to choose one of your own programs.",
        detail:
          "This is one of the system settings, and those behave differently from everything else: the JD-Xi saves them automatically as you leave the screen. There is no confirmation and no undo, which is why you note the old value first.",
        hardwareTargets: ["programValueButtons", "exitButton"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "N10 makes the general point; this is the one place in the Intermediate path where you deliberately use that behaviour rather than avoid it.",
        checkpoint:
          "Start Prog names a program of yours, and you wrote down what it said before.",
        recoveryHelp:
          "If you changed it by accident, set it back to the value you noted before leaving the screen. Once you leave, it is written.",
        nextHint: "Now get a copy of everything off the instrument.",
      },
      {
        id: "I09-S09",
        title: "Connect a computer",
        instruction: "Connect the JD-Xi to a computer with a USB cable.",
        detail:
          "Backing up needs a computer. Nothing is transferred until you ask for it.",
        hardwareTargets: ["usbComputerPort"],
        visualMode: "full-plus-inset",
        checkpoint: "The JD-Xi is connected to a computer by USB.",
        recoveryHelp:
          "If you have no computer to hand, you can stop here — the rest of this tutorial is about backing up, and nothing later depends on having done it.",
        nextHint: "Now take a copy.",
      },
      {
        id: "I09-S10",
        title: "Back up your data",
        instruction:
          "Open the Menu, select UTILITY, press Enter, then select Backup and press Enter.",
        detail:
          "A folder opens on the computer showing the file to be backed up. Roland's instruction is specific: copy the whole JD-Xi folder, not just the BACKUP folder inside it or some of the files, or the backup will not restore correctly. Do not rename the file that is shown.",
        hardwareTargets: ["menuWriteButton", "display"],
        visualMode: "display-focus",
        expectedDisplay: ["UTILITY", "Backup"],
        syntheticDisplay: false,
        displayNote:
          "Roland's illustrated UTILITY screen, shown at the point where Backup is selected.",
        whyItMatters:
          "This is the only thing that survives a factory reset, a failure, or a mistake with the WRITE destination. Everything else in this level is work you would have to do again.",
        checkpoint: "The whole JD-Xi folder is copied to your computer.",
        recoveryHelp:
          "Backup only reads from the instrument — it changes nothing on the JD-Xi. When you have finished, disconnect the JD-Xi on the computer; if the JD-Xi does not return to its normal screen, press Exit.",
        nextHint: "The opposite operation is not one to try casually.",
      },
      {
        id: "I09-S11",
        title: "Restore replaces everything",
        instruction: "Read this, and do not perform it now.",
        detail:
          "Restore is also under UTILITY, and it puts a backup file back onto the JD-Xi — replacing what is on the instrument. When it finishes the display asks you to turn the power off. This tutorial does not carry it out.",
        hardwareTargets: ["menuWriteButton"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "It is the counterpart to Backup and the reason Backup is worth doing, but it is a replace rather than a merge: anything on the instrument that is not in the backup file goes.",
        checkpoint: "You know Restore exists, what it costs, and where it lives.",
        recoveryHelp:
          "Never turn the power off while a restore is running. If you ever need one, take a fresh backup first if the instrument still holds anything you want.",
        nextHint: "One more way to move programs about.",
      },
      {
        id: "I09-S12",
        title: "Sharing single banks (version 1.10 or later)",
        instruction: "Read this if you want to move programs between instruments.",
        detail:
          "From system version 1.10 the JD-Xi can export up to one bank of sixty-four programs to a computer as a file, and load such files back into extra banks named S to Z. Exporting does not remove anything from the instrument. Both operations warn against switching the power off while they run.",
        hardwareTargets: ["usbComputerPort"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "It is how a set of programs travels — to another JD-Xi, or from sounds published for the instrument — without disturbing what you already have in banks E to H.",
        checkpoint:
          "You know the difference between a backup, which is everything, and an export, which is one bank.",
        recoveryHelp:
          "If your JD-Xi has no export option, it is very likely running a system version earlier than 1.10. Note that extra banks only appear after data has been loaded into them.",
        nextHint: "Last step: a habit worth having.",
      },
      {
        id: "I09-S13",
        title: "Name things so you can find them",
        instruction: "Look through your user banks and rename anything called Init Program.",
        detail:
          "Renaming means saving the program again with a better name, to the same slot. You already know the sequence.",
        hardwareTargets: ["shiftButton", "menuWriteButton"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "The JD-Xi gives you no folders, no search and no dates. The name and the slot number are the entire filing system, which makes them worth a minute each.",
        checkpoint: "You can find a program you made without playing every slot to identify it.",
        recoveryHelp:
          "Saving to the same slot replaces what is there, which is what you want when renaming — but check the slot number carefully, because saving to the wrong one destroys a different program. N09 covers the sequence.",
        nextHint:
          "Your library is in order. Last of all: put everything together.",
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
      "No new controls. Build a complete program of your own from nothing — sounds, arrangement, pattern, effects — save it, and play it.",
    estimatedMinutes: 20,
    prerequisites: ["I09"],
    learningGoals: [
      "Build a complete program without being told which button to press.",
      "Make the arrangement leave room for the part you will play.",
      "Save your work before you perform it.",
      "Perform with the JD-Xi rather than only programming it.",
    ],
    // Source record: docs/tutorials/I10-SOURCE-NOTES.md
    // Introduces no new technical claim and teaches no new procedure: every
    // action was taught and source-verified in I01-I09 or earlier, and each
    // step's recoveryHelp names the tutorial that taught it. Like B10 it is a
    // challenge rather than an exam -- nothing is scored and the learner may
    // stop at any point.
    steps: [
      {
        id: "I10-S01",
        title: "Start somewhere you can afford to lose",
        instruction: "Choose a program slot you are happy to build over.",
        detail:
          "You are going to change everything about this program. Pick one of your own that you do not need, or save whatever is loaded before you start.",
        hardwareTargets: ["programValueButtons"],
        visualMode: "full",
        checkpoint: "You are on a program you are willing to rebuild.",
        recoveryHelp:
          "N09 Save your work teaches saving, and I09 covers finding your way around the user banks.",
        nextHint: "Now the foundation.",
      },
      {
        id: "I10-S02",
        title: "Build a bass",
        instruction: "Build a bass sound on the Analog Synth part.",
        detail: "Waveform, sub-oscillator, filter, and a short envelope.",
        hardwareTargets: ["analogSynthButton", "analogOscSection"],
        visualMode: "full-plus-inset",
        expectedSound: "A low sound with a defined attack that stops when you stop.",
        checkpoint: "You have a bass you are happy with.",
        recoveryHelp:
          "I01 Build a bass sound covers this. Remember the analog part offers a low-pass filter only, and its square wave may not sound high up the keyboard.",
        nextHint: "Now something behind it.",
      },
      {
        id: "I10-S03",
        title: "Build a pad",
        instruction: "Build a sustained sound on one of the digital parts.",
        detail: "Slow attack, long release, some slow movement.",
        hardwareTargets: ["digitalSynth1Button"],
        visualMode: "full-plus-inset",
        expectedSound: "A wide sound that swells in and hangs on after you let go.",
        checkpoint: "You have a pad that fills space behind everything else.",
        recoveryHelp:
          "I02 Build a pad sound covers this. If the envelope will not stretch far enough, check you are editing the AMP group rather than the filter.",
        nextHint: "Now something in front.",
      },
      {
        id: "I10-S04",
        title: "Build a lead",
        instruction: "Build a bright, immediate sound on the other digital part.",
        hardwareTargets: ["digitalSynth2Button"],
        visualMode: "full-plus-inset",
        expectedSound: "A sound that cuts through without being the loudest thing.",
        checkpoint: "You have a lead you can hear over everything.",
        recoveryHelp:
          "I03 Build a lead sound covers this. If it disappears in the mix, reach for brightness before volume.",
        nextHint: "Now a rhythm to sit them on.",
      },
      {
        id: "I10-S05",
        title: "Make a pattern",
        instruction: "Build a pattern with drums and at least one other part in it.",
        detail: "Use whichever recording method suits what you are adding.",
        hardwareTargets: ["stepButtons", "playStopButton"],
        visualMode: "full-plus-inset",
        expectedSound: "A repeating pattern with more than one part in it.",
        checkpoint: "A pattern is running with drums and at least one pitched part.",
        recoveryHelp:
          "N04 and N05 cover building beats and lines; I08 covers the longer, fuller version and which methods overwrite.",
        nextHint: "Now make the four parts fit together.",
      },
      {
        id: "I10-S06",
        title: "Balance and place the parts",
        instruction: "Set the level and pan of each part so they sit together.",
        hardwareTargets: ["menuWriteButton", "partSelectGroup"],
        visualMode: "full-plus-inset",
        expectedSound: "Four parts audible at once, none of them fighting.",
        checkpoint: "You can hear every part without any of them dominating.",
        recoveryHelp:
          "N06 covers levels and pan; I07 covers the whole arrangement, including the offsets that let you adjust a part without editing its sound.",
        nextHint: "Now give them somewhere to be.",
      },
      {
        id: "I10-S07",
        title: "Set up the effects",
        instruction: "Choose effect types and route each part to what suits it.",
        detail: "Remember the program has one set of effects, shared by everything in it.",
        hardwareTargets: ["effectsSection"],
        visualMode: "full-plus-inset",
        expectedSound: "Parts at different distances rather than all in the same place.",
        checkpoint: "The parts do not all sit in the same acoustic space.",
        recoveryHelp:
          "I06 Effects and space covers this, including Part Output and the send levels. If an effect appears to do nothing, B07 lists Roland's documented causes.",
        nextHint: "Now save it, before you play it.",
      },
      {
        id: "I10-S08",
        title: "Save it before you perform",
        instruction: "Save the program to a slot you chose deliberately.",
        detail:
          "Everything so far is unsaved and one program change from gone. Save now, while it is worth saving.",
        hardwareTargets: ["shiftButton", "menuWriteButton"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "Performing means pressing things, and pressing things is how unsaved work disappears. Saving first turns a mistake into an annoyance instead of a loss.",
        checkpoint: "The whole program is stored under a name you chose.",
        recoveryHelp:
          "N09 Save your work has the sequence, including choosing a destination you are willing to overwrite.",
        nextHint: "Now play it.",
      },
      {
        id: "I10-S09",
        title: "Perform it",
        instruction:
          "Start the pattern, choose the part you want under your hands, and play.",
        detail:
          "Mute and unmute parts as you go. Use the Pitch and Mod controls. Move a knob and hear the whole thing change.",
        hardwareTargets: ["playStopButton", "keys"],
        visualMode: "full",
        expectedSound: "An arrangement running, with you playing on top of it.",
        whyItMatters:
          "This is what the instrument is for. Everything in these thirty tutorials was in service of being able to do this without having to think about which button does what.",
        checkpoint: "You have performed with your own program for a few minutes.",
        recoveryHelp:
          "Hold Shift and a Part Select button to mute a part; the same combination brings it back. B08 and N06 cover muting; B05 covers the Pitch and Mod controls.",
        nextHint: "One last thing.",
      },
      {
        id: "I10-S10",
        title: "Keep it, and keep a copy",
        instruction: "Save the program again if you changed anything while performing.",
        detail:
          "Then, if you have a computer to hand, take a backup. A saved program lives on the instrument; a backup lives somewhere a factory reset cannot reach.",
        hardwareTargets: ["usbComputerPort"],
        visualMode: "full-plus-inset",
        whyItMatters:
          "You have now built something you would be sorry to lose, which is the first point at which backing up stops being an abstract idea.",
        checkpoint:
          "Your program is saved, and you know how to get a copy of it off the instrument.",
        recoveryHelp:
          "I09 Save and organize creations covers backing up, including Roland's instruction to copy the whole folder rather than part of it.",
        nextHint:
          "That is the whole guided path. Everything from here is your own.",
      },
    ],
  },

};
