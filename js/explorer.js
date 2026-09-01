/*
 * JD-Xi Tutorial Hub - Hardware Explorer content.
 *
 * The Explorer's GEOMETRY comes entirely from js/hardware-targets.js. This
 * file adds only what a registry entry cannot carry: a practical,
 * plain-language description of what each control DOES, and where a caution
 * is warranted (PRODUCT-CURRICULUM-MASTER-PLAN.md sec 19).
 *
 * Rules this file obeys:
 *
 * - Descriptions are practical, not synthesis theory. "Changes how bright or
 *   dull the sound is", not a filter-frequency explanation.
 * - Function is NEVER inferred from an internal target name. Every `what`
 *   traces to the Roland page in `source`, reconciled in
 *   docs/HARDWARE-EXPLORER-SOURCES.md.
 * - Which tutorials teach a control is COMPUTED from the catalogue, never
 *   authored here, so it cannot go stale.
 * - A control no tutorial reaches is not hidden. It is shown and labelled
 *   "Not covered in the guided course", which is how the master plan (sec 35)
 *   wants omitted features to stay visible.
 *
 * `majorGroups` is what the landing view shows: the top-level controls and
 * sections only, so the learner meets a readable panel rather than 99
 * simultaneous labels. Drilling into a group reveals its children.
 *
 * Classic script on purpose - the app runs from file://; no modules, no fetch.
 */

window.JDXI_EXPLORER = {
  /* Which view each image is presented as, in order. */
  views: [
    {
      id: "top",
      title: "Top panel",
      blurb:
        "The playing surface: the keys, the controls that choose sounds, and the sections that shape them.",
    },
    {
      id: "rear",
      title: "Rear panel",
      blurb:
        "Power and connections. Most of this is set up once and then left alone.",
    },
  ],

  /* Major groups first. Children are reached by opening their parent. */
  majorGroups: {
    top: [
      "keys",
      "partSelectGroup",
      "categoryDial",
      "toneButtons",
      "programValueButtons",
      "display",
      "menuWriteButton",
      "cursorButtons",
      "enterButton",
      "exitButton",
      "shiftButton",
      "filterSection",
      "ampEnvSection",
      "lfoSection",
      "effectsSection",
      "analogOscSection",
      "arpeggioSection",
      "patternSequencerSection",
      "favoritePatternRow",
      "tempoSection",
      "octaveButtons",
      "pitchControl",
      "modControl",
      "masterVolumeKnob",
      "micJack",
      "autoNoteButton",
    ],
    rear: [
      "powerSwitch",
      "dcInJack",
      "phonesJack",
      "outputJacks",
      "inputMonoJack",
      "lineGuitarSwitch",
      "usbComputerPort",
      "midiPorts",
      "cordHook",
      "groundTerminal",
      "securitySlot",
    ],
  },

  /*
   * Fallback for a family of identical controls. The sixteen step buttons are
   * one control repeated, and sixteen identical descriptions would be worse
   * than one: `fallback` matches by id prefix.
   */
  fallbacks: [
    {
      prefix: "stepButton",
      what:
        "One step of the pattern. Lit means the selected part's note sounds at that point; dark means it does not. Pressing the button switches it between the two.",
      safety:
        "Turning a button dark only silences its note — the note is still there. To remove it, stop the pattern, hold Erase and press the button.",
      source: "Owner's Manual p.10, p.11",
    },
  ],

  describe: {
    /* ---------------------------------------------------------- top panel */

    keys: {
      what:
        "The 37 keys you play. They sense how hard you press. On the Drums part each key is a different drum or percussion instrument, and the instrument names are printed above the keys.",
      source: "Owner's Manual p.5, p.17",
    },
    partSelectGroup: {
      what:
        "Chooses which of the four parts the keys play, and which part the sequencer records into. The four are Digital Synth 1, Digital Synth 2, Drums and Analog Synth.",
      safety:
        "The keys play one part at a time. Several parts are heard together only by recording them into a pattern.",
      source: "Owner's Manual p.2 item 4, p.5, p.10",
    },
    digitalSynth1Button: {
      what: "Selects the first of the two digital synth parts.",
      source: "Owner's Manual p.5",
    },
    digitalSynth2Button: {
      what:
        "Selects the second digital synth part. It is built the same way as the first, which is what lets one program hold two different synth sounds.",
      source: "Owner's Manual p.5",
    },
    drumsButton: {
      what:
        "Selects the Drums part, where every key plays a different instrument instead of a pitch.",
      source: "Owner's Manual p.5",
    },
    analogSynthButton: {
      what:
        "Selects the Analog Synth part, which has its own waveform controls on the panel and only one kind of filter.",
      safety:
        "This part produces no sound while a Vocoder or AutoPitch tone is selected on a digital part.",
      source: "Owner's Manual p.5, p.7, p.8",
    },
    categoryDial: {
      what:
        "Chooses the basic type of sound on a digital part — the category whose indicator is lit is the one selected. The Drums and Analog Synth parts do not use it.",
      safety:
        "One position, Vocoder/AutoPitch, changes what the rest of the instrument can do: it works on only one digital part, and the Analog Synth part goes silent while it is selected.",
      source: "Owner's Manual p.5, p.7",
    },
    toneButtons: {
      what:
        "Steps through the sounds available to the selected part, one at a time. On the Drums part they step through whole drum kits.",
      safety:
        "Selecting another tone throws away an edited sound that has not been saved. These sit beside the Program Value pair and look similar — Value changes everything, Tone changes one part.",
      source: "Owner's Manual p.5, p.9",
    },
    toneMinusButton: { what: "Steps back to the previous tone.", source: "Owner's Manual p.5" },
    tonePlusButton: { what: "Steps on to the next tone.", source: "Owner's Manual p.5" },
    programValueButtons: {
      what:
        "Selects a whole program — all four parts, the effects and the pattern together. Inside a settings screen the same pair changes the value of the selected parameter.",
      safety:
        "Changing program discards everything edited and not saved, all at once. Hold Shift and press one of these to switch bank instead of stepping one program at a time.",
      source: "Owner's Manual p.5, p.14",
    },
    programValueMinusButton: {
      what: "Steps back to the previous program, or lowers the value in a settings screen.",
      source: "Owner's Manual p.5, p.14",
    },
    programValuePlusButton: {
      what: "Steps on to the next program, or raises the value in a settings screen.",
      source: "Owner's Manual p.5, p.14",
    },
    display: {
      what:
        "Shows what the JD-Xi is doing. On the top screen the upper line carries the program bank and number, the measure and beat, and the tempo; the lower line carries the tone number and name.",
      safety:
        "A sound with no tone number on the lower line has been edited and not saved.",
      source: "Owner's Manual p.2 item 2, p.5",
    },
    menuWriteButton: {
      what:
        "A short press opens the Menu. Holding Shift and pressing it opens the WRITE screen, which is how a program is saved. A long press on its own opens the Portamento screen.",
      source: "Owner's Manual p.2, p.6, p.9, p.14",
    },
    cursorButtons: {
      what:
        "Move the cursor. On the Menu they select which item to open; inside a screen they select which parameter you are changing. Holding Shift moves between the major groups of a settings screen.",
      source: "Owner's Manual p.2, p.14, p.16",
    },
    cursorLeftButton: { what: "Moves the cursor left.", source: "Owner's Manual p.2" },
    cursorRightButton: { what: "Moves the cursor right.", source: "Owner's Manual p.2" },
    enterButton: {
      what: "Confirms a value or carries out an operation.",
      source: "Owner's Manual p.2",
    },
    exitButton: {
      what:
        "Returns to the previous screen. Press it several times to reach the top screen. In some screens it also cancels the operation in progress.",
      safety:
        "Exit leaves a screen. It does not undo a value you changed while you were in it, and on some confirmation screens it means 'no' rather than 'cancel' — read the screen.",
      source: "Owner's Manual p.2, p.10, p.14",
    },
    shiftButton: {
      what:
        "Held down together with another button or knob to reach a second function. Most of the instrument's shortcuts start here.",
      source: "Owner's Manual p.2, p.16",
    },
    filterSection: {
      what:
        "Sets how bright or dull the sound is, and how much emphasis it has. The single most recognisable synthesizer control group.",
      source: "Owner's Manual p.2 item 12, p.8",
    },
    cutoffKnob: {
      what: "Changes how bright or dull the sound is.",
      source: "Owner's Manual p.8",
    },
    resonanceKnob: {
      what:
        "Emphasises the sound around the point where the filter is working. A little adds edge; a lot produces a whistle that follows Cutoff.",
      safety: "High settings can get loud suddenly. Keep Master Volume down while exploring.",
      source: "Owner's Manual p.8",
    },
    filterTypeButton: {
      what:
        "Changes what Cutoff takes away, so the same knob behaves differently. The lit indicator shows which is selected. On a digital or drums part there are four choices — a low-pass, a high-pass, a band-pass and a peaking filter. The Analog Synth part offers only the low-pass.",
      source: "Owner's Manual p.8",
    },
    ampEnvSection: {
      what:
        "Sets how loud the part is, and the shape of a note over time — how fast it arrives, and how long it takes to disappear.",
      source: "Owner's Manual p.2 item 13, p.8",
    },
    levelKnob: {
      what:
        "Sets the volume of the sound itself. This is not Master Volume: Level belongs to the part, and Master Volume sets what leaves the outputs and headphones.",
      source: "Owner's Manual p.2 item 7, p.8",
    },
    envelopeKnob: {
      what:
        "Turning it left produces a shorter sound with a stronger attack. Turning it right makes the attack softer and the release longer. One knob, adjusting several things at once.",
      source: "Owner's Manual p.8",
    },
    lfoSection: {
      what:
        "Makes something about the sound change over and over on its own, without you doing anything.",
      safety: "The LFO effect is not applied to the Drums part.",
      source: "Owner's Manual p.3 item 14, p.9",
    },
    lfoWaveformControl: {
      what:
        "Selects the shape of the movement — smooth, stepped, jumping between two states, or random. The waveform whose indicator is lit is selected.",
      source: "Owner's Manual p.9",
    },
    lfoRateKnob: { what: "Sets how fast the movement is.", source: "Owner's Manual p.9" },
    lfoDepthKnob: { what: "Sets how much movement is applied.", source: "Owner's Manual p.9" },
    lfoDestinationKnob: {
      what:
        "Chooses what the movement is applied to. Applied to pitch it produces vibrato; to the filter, a wah effect; to the amp, tremolo. The destination whose indicator is lit is selected.",
      source: "Owner's Manual p.9",
    },
    effectsSection: {
      what:
        "Four effects, shared by the whole program: two slots that change what the sound is made of, plus delay and reverb, which change where it seems to be.",
      safety:
        "The audio always passes through Effect 1, then Effect 2, then Delay, then Reverb, and only the effects that are switched on apply. That order is fixed and cannot be changed. The settings belong to the whole program, though effects can be turned on and off for each part.",
      source: "Owner's Manual p.3 item 15, p.8, p.9",
    },
    effectsOnOffButton: {
      what:
        "Changes which combination of effects is in use. Each press moves to the next combination, and the indicators at the upper left of each knob show which are available.",
      source: "Owner's Manual p.9",
    },
    effect1Knob: { what: "Sets how much of Effect 1 is applied.", source: "Owner's Manual p.9" },
    effect1TypeButton: {
      what:
        "Chooses what Effect 1 does. The four choices are Distortion, Fuzz, Compressor and Bit Crusher — all of them about grit and weight rather than space.",
      source: "Owner's Manual p.9",
    },
    effect2Knob: { what: "Sets how much of Effect 2 is applied.", source: "Owner's Manual p.9" },
    effect2TypeButton: {
      what:
        "Chooses what Effect 2 does. The four choices are Flanger, Phaser, Ring Mod and Slicer — sweeping, swooshing, metallic and chopped.",
      source: "Owner's Manual p.9",
    },
    delayKnob: {
      what: "Sets how much delay is applied — how strongly what you play is repeated.",
      source: "Owner's Manual p.9",
    },
    reverbKnob: {
      what: "Sets how much reverb is applied — how large a space the sound seems to be in.",
      source: "Owner's Manual p.9",
    },
    analogOscSection: {
      what:
        "The Analog Synth part's own controls, which choose the raw waveform its sound is built from. No other part has an equivalent on the panel.",
      source: "Owner's Manual p.2 item 5, p.5",
    },
    oscillatorButton: {
      what:
        "Selects the waveform the Analog Synth part's sound is built from — a sawtooth, a triangle or a square wave. The waveform whose indicator is lit is selected.",
      source: "Owner's Manual p.5",
    },
    subOscButton: {
      what:
        "Layers an extra sound below what the oscillator is producing, which is how a bass gains weight. One octave down when the indicator is lit, two octaves down when it blinks.",
      source: "Owner's Manual p.5",
    },
    pulseWidthKnob: {
      what:
        "With the square wave selected, changes the character of the raw tone from hollow and nasal to broader and more distinctive.",
      source: "Owner's Manual p.5",
    },
    arpeggioSection: {
      what:
        "Plays the notes you hold down one after another, in time, instead of all together.",
      source: "Owner's Manual p.2 item 10, p.6",
    },
    arpeggioOnButton: {
      what:
        "Turns the arpeggiator on and off. Holding Shift and pressing it opens the Arpeggio Edit screen.",
      source: "Owner's Manual p.6, p.16",
    },
    keyHoldButton: {
      what:
        "Keeps the arpeggio running with your hands off the keys. With the arpeggiator off it sustains notes instead, like a damper pedal.",
      safety:
        "This is the documented first thing to check when notes will not stop sounding.",
      source: "Owner's Manual p.6, p.17",
    },
    patternSequencerSection: {
      what:
        "Records what you play and plays it back repeatedly. Recording always goes to whichever part is selected.",
      source: "Owner's Manual p.2 item 11, p.10",
    },
    realTimeRecButton: {
      what:
        "Records a keyboard performance in real time, layering it onto the selected pattern. Knob and wheel movements are recorded too.",
      safety: "This method replaces notes that were already at a step, rather than refusing them.",
      source: "Owner's Manual p.10, p.11",
    },
    stepRecButton: {
      what:
        "Records one note at a time, advancing the position for you after each. The blinking numbered button shows which step you are writing to.",
      source: "Owner's Manual p.10, p.12",
    },
    eraseButton: {
      what:
        "Erases recorded pattern data. Held down with a numbered button it removes that step's notes; held with Shift it opens the Pattern Erase screen.",
      safety:
        "Erasing cannot be undone. The step erase needs the pattern stopped. Pattern Erase can clear every part at once if you choose All.",
      source: "Owner's Manual p.10",
    },
    playStopButton: {
      what: "Starts and stops the pattern. The same button does both.",
      source: "Owner's Manual p.10",
    },
    favoritePatternRow: {
      what:
        "A row that does two jobs. Normally the sixteen numbered buttons are the sequencer's steps; with Favorite lit they become buttons that recall stored programs.",
      source: "Owner's Manual p.3 item 16, p.5, p.10",
    },
    favoriteButton: {
      what:
        "Switches the numbered buttons into favorite mode, where each one recalls a stored program. Press it again to give them their normal job back.",
      safety:
        "Holding Favorite and pressing a numbered button registers the current program there, replacing whatever was on it, without asking. A button with nothing on it reports 'Not Registered!' — that is the only signal the JD-Xi gives that a slot is free.",
      source: "Owner's Manual p.5, p.6",
    },
    stepButtons: {
      what:
        "Sixteen steps, showing one measure of the pattern at a time. Lit means the selected part's note sounds there. Holding Shift and pressing one of the first four switches which measure the row is showing.",
      safety:
        "Turning a button dark only silences its note; the note remains and will block a new one. To remove it, stop the pattern, hold Erase and press the button.",
      source: "Owner's Manual p.10, p.11",
    },
    tempoSection: {
      what:
        "Sets the speed of the pattern and the arpeggiator together. The tempo is saved with each program.",
      source: "Owner's Manual p.2 item 8, p.6",
    },
    tempoKnob: {
      what:
        "Sets the tempo. On the Portamento screen this same knob sets the portamento time instead.",
      source: "Owner's Manual p.6",
    },
    tapButton: {
      what:
        "Sets the tempo by tapping — press it three or more times, steadily, at the speed you want. On the Portamento screen it turns portamento on and off instead.",
      source: "Owner's Manual p.6",
    },
    octaveButtons: {
      what:
        "Shift the whole keyboard up or down in octave steps, up to three either way, so you can reach sounds that would otherwise be off the end of 37 keys. They light while the keyboard is shifted, and pressing both together returns the value to 0.",
      safety:
        "They have no effect on the Drums part. The octave setting is saved with the program. Holding Shift while pressing them is Transpose instead, which shifts by semitones and is never saved.",
      source: "Owner's Manual p.2 item 9, p.6; Version 1.50 Supplementary Manual p.2",
    },
    octaveDownButton: { what: "Shifts the keyboard down one octave.", source: "Owner's Manual p.6" },
    octaveUpButton: { what: "Shifts the keyboard up one octave.", source: "Owner's Manual p.6" },
    pitchControl: {
      what:
        "Bends the pitch of notes that are already sounding. Away from you raises it, toward you lowers it, and it returns to the centre by itself when you let go.",
      source: "Owner's Manual p.3 item 17, p.6",
    },
    modControl: {
      what:
        "Applies vibrato. Fully toward you applies none, and moving it away increases it.",
      safety:
        "Unlike Pitch, it stays exactly where you leave it. Leaving it part-way up is the usual reason every sound wavers for the rest of a session.",
      source: "Owner's Manual p.3 item 17, p.6",
    },
    masterVolumeKnob: {
      what:
        "Sets the volume leaving the OUTPUT jacks and the headphone jack. This is the whole instrument, not one part.",
      safety:
        "Turn it fully left before switching the power on or off.",
      source: "Owner's Manual p.2 item 7, p.4",
    },
    micJack: {
      what:
        "Where the included microphone plugs in, for the Vocoder, AutoPitch and Auto Note features.",
      safety:
        "If something is connected to the rear INPUT jack, that takes priority and this jack becomes unavailable.",
      source: "Owner's Manual p.2 item 1, p.7",
    },
    autoNoteButton: {
      what:
        "Turns Auto Note on and off. With it lit, the JD-Xi detects the pitch of your voice through the microphone and plays that note, so you can play a sound without touching the keys.",
      source: "Owner's Manual p.2, p.7",
    },

    /* --------------------------------------------------------- rear panel */

    rearPanel: {
      what:
        "Power and connections. Most of this is set up once and then left alone.",
      source: "Owner's Manual p.3",
    },
    powerSwitch: {
      what: "Turns the power on and off.",
      safety:
        "Turn Master Volume fully left first, and switch connected equipment on after the JD-Xi and off before it. Never switch the power off while the instrument is saving.",
      source: "Owner's Manual p.3 item 19, p.4, p.9",
    },
    dcInJack: {
      what: "Where the included AC adaptor connects.",
      safety:
        "Anchor the power cord using the cord hook, so the plug cannot be pulled out accidentally and the jack is not put under strain.",
      source: "Owner's Manual p.3 item 18",
    },
    cordHook: {
      what:
        "Anchors the AC adaptor's cord so the plug cannot be pulled out by accident and the DC IN jack is not strained.",
      source: "Owner's Manual p.3 item 18",
    },
    phonesJack: {
      what: "Where headphones connect.",
      source: "Owner's Manual p.3 item 25",
    },
    outputJacks: {
      what:
        "Where speakers connect. Use the L/MONO jack alone if you are working in mono.",
      source: "Owner's Manual p.3 item 24",
    },
    outputLMonoJack: {
      what: "The left output, and the one to use on its own for mono.",
      source: "Owner's Manual p.3 item 24",
    },
    outputRClickOutJack: {
      what:
        "The right output. It can also be set to carry only the metronome click, separately from the music.",
      source: "Owner's Manual p.3 item 24",
    },
    inputMonoJack: {
      what:
        "An input for an external device, used instead of the microphone.",
      safety:
        "Anything connected here takes priority over the MIC jack and disables it. If the included microphone has stopped working, this is the first thing to check.",
      source: "Owner's Manual p.3 item 23, p.7",
    },
    lineGuitarSwitch: {
      what:
        "Sets the INPUT jack to suit whichever kind of device is connected to it.",
      source: "Owner's Manual p.3 item 22",
    },
    usbComputerPort: {
      what:
        "Connects the JD-Xi to a computer, for synchronising with music software or recording its sound into one.",
      source: "Owner's Manual p.3 item 20",
    },
    midiPorts: {
      what:
        "Connect to other MIDI instruments, to send and receive performance information between them.",
      source: "Owner's Manual p.3 item 21",
    },
    midiInPort: {
      what: "Receives MIDI messages from another device.",
      source: "Owner's Manual p.3 item 21",
    },
    midiOutPort: {
      what: "Sends MIDI messages to another device.",
      source: "Owner's Manual p.3 item 21",
    },
    groundTerminal: {
      what:
        "An optional connection to an external ground, for the case where the instrument or a connected microphone feels faintly gritty to the touch.",
      safety:
        "Roland names three places that must never be used: water pipes, gas pipes, and a telephone-line ground or lightning rod. If you are unsure how to connect it, ask a Roland service centre.",
      source: "Owner's Manual p.3 item 26",
    },
    securitySlot: {
      what: "A standard slot for a security cable.",
      source: "Owner's Manual p.3 item 27",
    },
  },
};
