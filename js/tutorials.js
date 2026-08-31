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
        id: "B09-S02",
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
        id: "B09-S03",
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
        id: "B09-S04",
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
        id: "B09-S05",
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
        id: "B09-S06",
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
        id: "B09-S07",
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
        id: "B09-S08",
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
  },
};
