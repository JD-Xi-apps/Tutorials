/*
 * JD-Xi Tutorial Hub - Quick Reference.
 *
 * Concise procedures for recall, NOT mini-tutorials
 * (PRODUCT-CURRICULUM-MASTER-PLAN.md sec 20). An entry answers "how do I do
 * that again?" for someone who has already been taught it; the teaching lives
 * in the tutorial named by `learnIn`.
 *
 * Every technical claim here traces to an official Roland page, recorded in
 * `source` and reconciled in docs/QUICK-REFERENCE-SOURCES.md. Quick Reference
 * may condense what a tutorial teaches; it may never assert anything the
 * tutorial could not.
 *
 * `warning` renders ABOVE the procedure, never below it. A destructive entry
 * must set `destructive: true` and carry a warning - tools/validate-data.js
 * enforces both, and enforces that no entry is destructive silently.
 *
 * Classic script on purpose - the app runs from file://; no modules, no fetch.
 */

window.JDXI_QUICK_REFERENCE = {
  order: [
    "power-on",
    "power-off",
    "top-screen",
    "select-part",
    "select-tone",
    "program-vs-part",
    "play-stop-pattern",
    "mute-part",
    "change-tempo",
    "tap-tempo",
    "save-program",
    "favorites",
    "correct-step",
    "clear-pattern",
    "menu-controls",
    "shortcuts",
    "portamento",
    "transpose",
    "arpeggiator",
    "tr-rec",
    "step-recording",
  ],

  entries: {
    "power-on": {
      id: "power-on",
      title: "Power on safely",
      summary: "The order matters. Wrong order risks damage to the equipment.",
      warning:
        "Turn the volume down before switching anything on or off. You may still hear a small sound as it switches; that is normal.",
      destructive: false,
      steps: [
        "Check your speakers or headphones are connected, and that the connected equipment is switched off.",
        "Turn the Master Volume knob all the way to the left.",
        "Turn on the POWER switch on the rear panel.",
        "Wait a few seconds — the JD-Xi needs a moment before it operates normally.",
        "Switch on the connected equipment, then raise the volume to a comfortable level.",
      ],
      notes: [
        "Roland is explicit that turning equipment on in the wrong order risks malfunction or failure.",
      ],
      source: "Owner's Manual p.4, Turning On/Off the Power",
      learnIn: ["B02"],
    },

    "power-off": {
      id: "power-off",
      title: "Power off safely",
      summary: "The reverse order, and one question to ask yourself first.",
      warning:
        "Anything you have made and not saved is lost when the power goes off. Save first if you want to keep it.",
      destructive: false,
      steps: [
        "Turn the volume of the connected equipment down.",
        "Ask whether you have saved any sounds or patterns you created.",
        "Turn off the power for all connected audio devices.",
        "Turn off the POWER switch on the JD-Xi.",
      ],
      notes: [
        "Roland puts the save question into the power-off procedure itself, which is worth taking literally.",
      ],
      source: "Owner's Manual p.4, Turning Off the Power",
      learnIn: ["B02", "N09"],
    },

    "top-screen": {
      id: "top-screen",
      title: "Get back to the top screen",
      summary: "The move to reach for when you do not know where you are.",
      destructive: false,
      steps: [
        "Press Exit.",
        "Keep pressing it. Each press steps back one screen.",
        "You are at the top screen when the upper line shows a program bank and number, and the lower line shows a tone name.",
      ],
      notes: [
        "Exit only ever moves back toward the top screen, so you cannot overshoot.",
        "Exit leaves a screen. It does not undo a value you changed while you were in it.",
      ],
      source: "Owner's Manual p.2 (Exit), p.14 step 4",
      learnIn: ["N01", "N10"],
    },

    "select-part": {
      id: "select-part",
      title: "Select a Part",
      summary: "Chooses which of the four parts the keys play and the sequencer records.",
      destructive: false,
      steps: [
        "Press one of the four Part Select buttons: Digital Synth 1, Digital Synth 2, Drums or Analog Synth.",
      ],
      notes: [
        "The keys play one part at a time. Several parts are heard together only by recording them into a pattern.",
        "Recording always goes to the selected part, so choose it before you record anything.",
        "Selecting a part changes nothing and discards nothing.",
      ],
      source: "Owner's Manual p.5, Choosing a Part to Play; p.10",
      learnIn: ["B04", "N02"],
    },

    "select-tone": {
      id: "select-tone",
      title: "Find and select a Tone",
      summary: "Changes the sound the selected part plays.",
      warning:
        "Selecting another tone throws away an edited sound that has not been saved. There is no undo and no confirmation.",
      destructive: false,
      steps: [
        "Select the part you want to change.",
        "On a digital part, turn the Category dial to choose the basic type of sound.",
        "Use the Tone − and Tone + buttons to step through the tones.",
        "On the Drums part, Tone − and + step through whole drum kits. On the Analog Synth part there is no Category dial — use Tone − and + alone.",
      ],
      notes: [
        "The Tone pair sits beside the Program (Pattern) Value pair and looks similar. Value changes the whole program; Tone changes one part's sound.",
        "A sound with no tone number on the lower line has been edited.",
      ],
      source: "Owner's Manual p.5, Choosing a Tone",
      learnIn: ["B03"],
    },

    "program-vs-part": {
      id: "program-vs-part",
      title: "Understand Program vs Part",
      summary: "The two levels almost every JD-Xi menu sits at.",
      destructive: false,
      steps: [
        "A program is the whole setup: four parts and their tones, the effects, the arpeggio settings, the tempo, and the pattern.",
        "A part is one of those four sound-making sections. Each part holds one tone.",
        "The Program (Pattern) Value − + buttons change the whole program at once.",
        "The Part Select buttons change which part you are playing or editing.",
      ],
      notes: [
        "Programs are numbered 01–64 within a bank. Banks A to D hold Roland's programs; banks E to H hold yours.",
        "Hold Shift and press Value to switch bank rather than stepping one program at a time.",
        "One save stores the whole program. There is no way to save a sound or a pattern on its own.",
      ],
      source: "Owner's Manual p.4 (structure and bank table), p.5",
      learnIn: ["N02"],
    },

    "play-stop-pattern": {
      id: "play-stop-pattern",
      title: "Play and stop a Pattern",
      summary: "One button does both.",
      destructive: false,
      steps: [
        "Press the Play/Stop button in the PATTERN SEQUENCER section.",
        "Press it again to stop.",
      ],
      notes: [
        "The two numbers in the middle of the upper line count the measure and beat while the sequencer runs.",
        "A program with nothing recorded plays nothing. That is not a fault.",
        "If a pattern will not play at all, check the system setting Sync Mode. Set to SLAVE the JD-Xi waits for timing messages from another device; MASTER is the setting for using it on its own. Note that system settings save themselves when you leave the screen.",
      ],
      source:
        "Owner's Manual p.10 (transport); p.17 Troubleshooting, The pattern won't play; setting at p.13",
      learnIn: ["B08", "N10"],
    },

    "mute-part": {
      id: "mute-part",
      title: "Mute and unmute a Part",
      summary: "Take a part out of a running pattern without changing anything.",
      destructive: false,
      steps: [
        "Hold down Shift and press the Part Select button of the part you want to mute.",
        "Hold Shift and press the same button again to bring it back.",
      ],
      notes: [
        "You can mute several parts at once.",
        "Muting changes nothing that is stored. It is a listening and arranging tool, not an edit.",
      ],
      source: "Owner's Manual p.10, Muting a specific part (Part Mute)",
      learnIn: ["B08", "N06"],
    },

    "change-tempo": {
      id: "change-tempo",
      title: "Change the Tempo",
      summary: "Sets the speed of the pattern and the arpeggiator together.",
      destructive: false,
      steps: ["Turn the tempo knob in the TEMPO section."],
      notes: [
        "The tempo is saved with each individual program, and is shared with that program's pattern.",
        "Changing it is an unsaved edit to the program, like a knob move.",
      ],
      source: "Owner's Manual p.6, Changing the Tempo",
      learnIn: ["B09"],
    },

    "tap-tempo": {
      id: "tap-tempo",
      title: "Set the Tempo by tapping",
      summary: "Tap the speed you want instead of hunting for a number.",
      destructive: false,
      steps: [
        "Press the Tap button three or more times, steadily, at the speed you want.",
      ],
      notes: [
        "Three presses is the minimum. Steadier is better than faster.",
        "Tap sets the same tempo the knob does, so the same saving rules apply.",
      ],
      source: "Owner's Manual p.6, Changing the Tempo",
      learnIn: ["B09"],
    },

    "save-program": {
      id: "save-program",
      title: "Save a Program (WRITE)",
      summary: "The only way to keep anything you have made.",
      warning:
        "Saving to a slot that already holds a program replaces it and erases the previous data. Choose a destination you are willing to overwrite. Never turn the power off while saving.",
      destructive: false,
      steps: [
        "Hold down Shift and press Menu/Write. The name input screen appears.",
        "Use the Cursor buttons to move along the name and the Value buttons to choose each character.",
        "Press Enter to accept the name.",
        "Use the Program (Pattern) Value − + buttons to choose the destination. If a name appears on the lower line, that slot is already in use.",
        "Press Enter. A confirmation appears.",
        "Press Enter again to save, or Exit to cancel.",
        "Wait for Complete.",
      ],
      notes: [
        "Your own programs belong in the user banks, E to H.",
        "One save stores all four parts, the effects, the arpeggio, the tempo and the pattern together.",
        "To check it really persisted, step to another program and come back.",
      ],
      source: "Owner's Manual p.9, Saving a Sound (Program) (WRITE)",
      learnIn: ["N09", "I09"],
    },

    favorites: {
      id: "favorites",
      title: "Register and recall a JD-Xi Favorite",
      summary: "Puts a program on a numbered button so one press recalls it.",
      warning:
        "Registering replaces whatever was on that button, and the JD-Xi does not ask first. Find a free one before you register.",
      destructive: false,
      steps: [
        "To recall: press Favorite so it lights, then press one of the buttons 01 to 16.",
        "A button with nothing on it reports “Not Registered!” — that is the only signal the JD-Xi gives that a slot is free.",
        "To register: select the program you want, then hold down Favorite and press a free numbered button.",
        "Press Favorite again to give the numbered buttons their normal job back.",
      ],
      notes: [
        "Save an edited program before registering it — Roland's own note.",
        "Recalling a favorite selects a program, so it discards unsaved work like any other program change.",
        "A favorite remembers which part was selected when you registered it.",
      ],
      source: "Owner's Manual p.5, Using Favorite Sounds (Programs)",
      learnIn: ["N02", "N09", "I09"],
    },

    "correct-step": {
      id: "correct-step",
      title: "Correct or erase a sequencer step",
      summary:
        "Two different things: turning a step off, and actually removing its note.",
      warning:
        "Erasing a step's notes cannot be undone. Turning a step button dark is reversible; holding Erase and pressing it is not.",
      destructive: false,
      steps: [
        "To silence a step: press its lit numbered button so it goes dark. The note is still there and comes back if you press it again.",
        "To erase a step properly: stop the pattern, hold down Erase, and press that numbered button.",
      ],
      notes: [
        "This distinction matters. TR-REC will not record a new note onto a step that still holds one, so a step that looks empty but is only muted will refuse new input.",
        "The pattern must be stopped for the erase.",
      ],
      source: "Owner's Manual p.10, Deleting All Notes at a Specific Step; p.11",
      learnIn: ["N03", "N04"],
    },

    "clear-pattern": {
      id: "clear-pattern",
      title: "Clear a part or a whole pattern",
      summary: "Erases recorded pattern data. Read the warning first.",
      warning:
        "This destroys pattern data and cannot be undone. Choosing “All” erases the patterns of every part at once. There is no confirmation beyond the one described here, and nothing puts the data back. Do not use this to tidy up — erase individual steps instead unless you genuinely want the whole thing gone.",
      destructive: true,
      steps: [
        "Hold down Shift and press Erase. The Pattern Erase screen appears.",
        "Use the Value buttons to select which part to erase: Digital 1, Digital 2, Drum, Analog, SysEx, or All.",
        "Press Enter.",
      ],
      notes: [
        "Selecting All erases the patterns of all parts.",
        "If you only want one wrong note gone, use the step erase instead — it is a far smaller operation.",
      ],
      source: "Owner's Manual p.10, Erasing an Entire Pattern",
      learnIn: [],
    },

    "menu-controls": {
      id: "menu-controls",
      title: "Common menu controls",
      summary: "The same five controls work in almost every settings screen.",
      destructive: false,
      steps: [
        "Menu/Write opens the Menu.",
        "Cursor ◄ and ► select the item, then Enter opens it.",
        "Inside a screen, Cursor selects the parameter and Value − + change it.",
        "In a settings screen built from groups — SYSTEM, Program Edit, Tone Edit, Effects Edit — Shift with Cursor moves between the groups.",
        "Exit returns to the previous screen; press it several times to reach the top screen.",
      ],
      notes: [
        "Enter confirms a value or executes an operation. Exit also cancels an operation in progress in some screens — read the screen rather than assuming.",
        "SYSTEM is the exception to everything else: the JD-Xi saves system parameters automatically when you leave that screen, with no confirmation and no undo.",
        "Not every settings screen has groups. Roland documents the Shift with Cursor move for grouped setting and edit screens only, and the Vocoder, AutoPitch and Arpeggio screens are flat parameter lists it is not documented for.",
      ],
      source: "Owner's Manual p.2, p.13, p.14, p.16; Parameter Guide p.2, p.26",
      learnIn: ["N01"],
    },

    shortcuts: {
      id: "shortcuts",
      title: "Common useful shortcuts",
      summary: "The combinations worth knowing, from Roland's own list.",
      destructive: false,
      steps: [
        "Shift + Value − + — switch the program bank.",
        "Shift + Menu/Write — jump straight to the WRITE screen.",
        "Shift + Part Select — mute that part; the same again unmutes it.",
        "Shift + Enter — return to the original sound after editing it.",
        "Shift + ARPEGGIO ON — jump to the Arpeggio Edit screen.",
        "Shift + Cursor — move between the major groups, in a grouped setting or edit screen such as SYSTEM, Program Edit, Tone Edit or Effects Edit.",
        "Shift + 01–04 — switch which measure the numbered buttons show, during playback or recording.",
        "Long-press Menu/Write — jump to the Portamento screen.",
        "Hold Shift on its own — show the program name on the upper line.",
      ],
      notes: [
        "Shift + Enter reaches the sound. It is not a general undo, and Roland does not extend it to effect settings or pattern data.",
        "These combinations are not all universal. Shift + Cursor is documented for grouped setting and edit screens, not for flat parameter lists such as Vocoder, AutoPitch and Arpeggio; Shift + Value works on the top screen; Shift + 01–04 works while a pattern is playing or recording.",
        "Roland's printed shortcut lists predate the 1.10 and 1.50 updates, so some later combinations appear in no list.",
      ],
      source: "Owner's Manual p.16, Shortcut List; Parameter Guide p.2",
      learnIn: ["N01", "N10"],
    },

    portamento: {
      id: "portamento",
      title: "Portamento",
      summary: "Makes notes slide into each other instead of jumping.",
      destructive: false,
      steps: [
        "Press and hold Menu/Write until the PORTAMENTO screen appears. This is a long press — a short one opens the ordinary Menu.",
        "Press the Tap button to turn portamento on or off.",
        "Turn the tempo knob to adjust how long the slide takes.",
        "Press Exit to leave the screen.",
      ],
      notes: [
        "On this screen the tempo knob is setting portamento time, not tempo.",
      ],
      source: "Owner's Manual p.6, Shortcut to the Portamento Setting Screen",
      learnIn: ["I03"],
    },

    transpose: {
      id: "transpose",
      title: "Transpose",
      summary: "Shifts the pitch of the whole instrument in semitone steps.",
      destructive: false,
      steps: [
        "Hold down Shift and press one of the OCTAVE Down or Up buttons.",
        "The display shows the transpose value as you change it.",
        "Hold Shift and press the opposite button to bring it back toward 0.",
      ],
      notes: [
        "Transpose is never saved. It returns to 0 when you switch the power off.",
        "This is different from the OCTAVE buttons on their own, which shift the keyboard by whole octaves and are saved with the program.",
      ],
      source: "Version 1.50 Supplementary Manual p.2, Transpose",
      learnIn: ["B05"],
    },

    arpeggiator: {
      id: "arpeggiator",
      title: "Arpeggiator",
      summary: "Plays the notes you hold, one after another, in time.",
      destructive: false,
      steps: [
        "Press ARPEGGIO ON so it lights.",
        "Hold down two or three keys. The arpeggio plays.",
        "Hold Shift and press ARPEGGIO ON to reach the Arpeggio Edit screen, where Value changes the style.",
        "Press ARPEGGIO ON again to turn it off.",
      ],
      notes: [
        "It runs at the program's tempo. There is no separate arpeggio speed.",
        "ARPEGGIO Key Hold keeps the arpeggio going with your hands off the keys. If notes will not stop, this is the first thing to check.",
        "Arpeggio settings are saved within each program.",
      ],
      source: "Owner's Manual p.6, Playing an Arpeggio; Parameter Guide p.29",
      learnIn: ["N07"],
    },

    "tr-rec": {
      id: "tr-rec",
      title: "TR-REC",
      summary:
        "Choose a note, then light the steps where you want it to sound.",
      destructive: false,
      steps: [
        "Press a Part Select button to choose the part you are recording.",
        "On the Drums part, press a key to choose which instrument. On a synth part, play the key you want to record.",
        "Press the numbered buttons 01 to 16 so they light at each step where the note should sound.",
        "Press Play/Stop to hear it.",
      ],
      notes: [
        "The lit buttons show the steps at which the note you are holding will sound. Pressing a button switches it between lit and unlit.",
        "TR-REC works whether the pattern is playing or stopped.",
        "It will not record over a step that already holds a note. Erase that step first — hold Erase and press it, with the pattern stopped.",
      ],
      source: "Owner's Manual p.11, What is TR-REC? and TR-REC",
      learnIn: ["N03", "N04", "N05"],
    },

    "step-recording": {
      id: "step-recording",
      title: "Step Recording",
      summary:
        "Play notes one at a time and let the JD-Xi advance the position for you.",
      destructive: false,
      steps: [
        "Press a Part Select button to choose the part.",
        "Press Step Rec. The 01 button blinks.",
        "Play one note. It is recorded at the blinking step and the position advances to the next.",
        "Repeat for each step.",
        "Press Step Rec again to stop recording.",
      ],
      notes: [
        "The blinking button always shows which step you are writing to.",
        "Unlike TR-REC, step recording replaces what was already at a step rather than refusing it.",
        "Press one of the numbered buttons to jump to a different step.",
      ],
      source: "Owner's Manual p.12, Step Recording",
      learnIn: ["N03", "N05"],
    },
  },
};
