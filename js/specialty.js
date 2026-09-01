/*
 * JD-Xi Tutorial Hub - Specialty lessons.
 *
 * A SEPARATE data model, deliberately outside window.JDXI_TUTORIALS
 * (PRODUCT-CURRICULUM-MASTER-PLAN.md sec 21). Membership in JDXI_TUTORIALS is
 * canonical identity, and the canonical count is exactly 30; nothing here is
 * canonical, nothing here counts toward x/30, and nothing here is required to
 * complete the course.
 *
 * Specialty lessons use the SAME Step model and the SAME guided renderer as a
 * canonical tutorial. They differ in what they are, not in how they are built.
 *
 * Ids are deliberately not B##/N##/I## so they can never be confused with a
 * canonical tutorial, in a route, in stored learner state, or by eye.
 *
 * Scope: the INCLUDED MICROPHONE ONLY. External microphone setup, guitar
 * input and every other external-audio workflow are out of scope for v1 and
 * appear nowhere - see docs/tutorials/SPECIALTY-SOURCE-NOTES.md.
 *
 * Classic script on purpose - the app runs from file://; no modules, no fetch.
 */

window.JDXI_SPECIALTY = {
  order: ["vocoder", "auto-pitch", "auto-note"],

  lessons: {
    vocoder: {
      id: "vocoder",
      level: "specialty",
      title: "Use the Vocoder",
      shortTitle: "Vocoder",
      summary:
        "Sing into the included microphone and play the keyboard at the same time, and the JD-Xi turns your voice into a robotic, pitched sound you control from the keys.",
      estimatedMinutes: 9,
      prerequisites: ["B03"],
      learningGoals: [
        "Connect the included microphone and get a signal.",
        "Select a vocoder tone and hear your own voice through it.",
        "Play the pitch of your voice from the keyboard.",
        "Know the two limits Roland documents for this feature.",
      ],
      // Source record: docs/tutorials/SPECIALTY-SOURCE-NOTES.md
      steps: [
        {
          id: "SPEC-VOC-S01",
          title: "Connect the included microphone",
          instruction: "Plug the microphone that came with the JD-Xi into the MIC jack.",
          detail:
            "The jack is at the top left of the panel. Once it is connected, adjust the microphone's direction and angle so it points at you.",
          hardwareTargets: ["micJack"],
          visualMode: "full-plus-inset",
          whyItMatters:
            "Everything in this lesson runs on what the microphone hears. Nothing else on the instrument produces a vocoder sound.",
          checkpoint: "The microphone is connected and pointing at you.",
          recoveryHelp:
            "If you have no microphone to hand, this lesson cannot be completed — the vocoder has nothing to work with. Nothing else in the course depends on it.",
          nextHint: "One thing can stop the microphone working entirely.",
        },
        {
          id: "SPEC-VOC-S02",
          title: "Check nothing is plugged into the INPUT jack",
          instruction:
            "Look at the rear panel and unplug anything connected to the INPUT jack.",
          detail:
            "Roland documents this plainly: if something is connected to both the MIC jack and the INPUT jack, the JD-Xi gives priority to the INPUT jack, and the microphone becomes unavailable.",
          hardwareTargets: ["inputMonoJack"],
          visualMode: "full-plus-inset",
          whyItMatters:
            "This is the most likely reason a correctly connected microphone produces nothing at all, and there is no message on the display to tell you.",
          checkpoint: "The INPUT jack is empty and the microphone is the only input connected.",
          recoveryHelp:
            "The INPUT jack is on the rear panel. If it is empty and you still hear nothing from the microphone, the next step covers the input level.",
          nextHint: "Now make sure the JD-Xi can hear you.",
        },
        {
          id: "SPEC-VOC-S03",
          title: "Set the input level, if you need to",
          instruction:
            "If your voice is too quiet or too loud, press Menu/Write, select SYSTEM, press Enter, and find the INPUT group's Level parameter.",
          detail:
            "Roland also provides a Mic Sel setting. With the microphone that came with the instrument it should read Attached. Press Exit several times when you have finished.",
          hardwareTargets: ["menuWriteButton", "display"],
          visualMode: "full-plus-inset",
          whyItMatters:
            "These are system settings, and the JD-Xi saves them automatically as you leave the screen. There is no confirmation and no undo, so change only what you came in for.",
          checkpoint:
            "Your voice registers at a usable level, or you have decided the default was fine.",
          recoveryHelp:
            "N01 Learn the menu controls shows how to move around in SYSTEM safely. Note the value you find before you change it — because the screen saves itself, that note is the only way back.",
          nextHint: "Before you change sounds, one check.",
        },
        {
          id: "SPEC-VOC-S04",
          title: "Protect any work you want to keep",
          instruction: "Decide whether this program holds work you have not saved.",
          detail:
            "The next steps select a different tone, which throws away an edited sound that has not been saved.",
          hardwareTargets: ["toneButtons"],
          visualMode: "full",
          whyItMatters:
            "Vocoder and AutoPitch settings are themselves saved within each program, so this lesson both risks unsaved work and creates more of it.",
          checkpoint:
            "You have decided: either there is nothing here to keep, or you have saved it first.",
          recoveryHelp:
            "N09 Save your work teaches saving. This lesson is optional and nothing depends on completing it, so stopping here costs nothing.",
          nextHint: "Now find the vocoder sounds.",
        },
        {
          id: "SPEC-VOC-S05",
          title: "Select the Vocoder/AutoPitch category",
          instruction:
            "Press Digital Synth 1, then turn the Category dial to Vocoder/AutoPitch.",
          detail:
            "This is the dial position B03 pointed out and told you not to select. This is the lesson it was being saved for.",
          hardwareTargets: ["digitalSynth1Button", "categoryDial"],
          visualMode: "full-plus-inset",
          checkpoint: "The Vocoder/AutoPitch indicator is lit on the Category dial.",
          recoveryHelp:
            "Turn the dial to any other position to leave. If the Analog Synth part has gone silent, that is documented behaviour rather than a fault — the last step explains it.",
          nextHint: "Now choose one of them.",
        },
        {
          id: "SPEC-VOC-S06",
          title: "Choose a vocoder tone",
          instruction: "Use the Tone − and Tone + buttons to step through the tones.",
          detail:
            "This category holds both vocoder and AutoPitch tones. For this lesson you want a vocoder one — the next step will tell you which you have.",
          hardwareTargets: ["toneButtons"],
          visualMode: "full-plus-inset",
          checkpoint: "You have a tone selected in the Vocoder/AutoPitch category.",
          recoveryHelp:
            "Keep stepping with Tone + if the one you land on does not behave as the next step describes. The two kinds sit in the same category.",
          nextHint: "Now use it, which takes both hands and your voice.",
        },
        {
          id: "SPEC-VOC-S07",
          title: "Sing and play at the same time",
          instruction: "Hold a key down and speak or sing into the microphone.",
          detail:
            "The keyboard controls the pitch and your voice supplies the character. Try holding different keys while saying the same thing, and saying different things on the same key.",
          hardwareTargets: ["keys", "micJack"],
          visualMode: "full",
          expectedSound:
            "Your voice, given a toneless robotic quality, at the pitch of whichever key you are holding.",
          whyItMatters:
            "This is what makes a vocoder different from an effect: it is played, not applied. Without a key held there is nothing for your voice to be tuned to.",
          checkpoint:
            "You can hear your own voice coming back at the pitch of the key you are holding.",
          recoveryHelp:
            "Nothing at all? Check the INPUT jack is empty, the microphone is connected, and Master Volume is up. Roland also notes the effect may not work correctly with input that is not a human voice, or in a noisy room.",
          nextHint: "Two limits worth knowing before you build anything with this.",
        },
        {
          id: "SPEC-VOC-S08",
          title: "What it costs you",
          instruction: "Press Analog Synth and play a key.",
          detail:
            "Roland documents two limits. Vocoder and AutoPitch can be used on only one Digital Synth part. And while one is selected, the Analog Synth part produces no sound at all.",
          hardwareTargets: ["analogSynthButton"],
          visualMode: "full-plus-inset",
          expectedSound: "Silence from the Analog Synth part — which is expected, not a fault.",
          whyItMatters:
            "If you build a program around a vocoder, you are building it with three parts rather than four. That is worth knowing before you plan one rather than afterwards.",
          checkpoint:
            "You have heard the Analog Synth part stay silent, and you know why.",
          recoveryHelp:
            "Turn the Category dial away from Vocoder/AutoPitch on the digital part and the Analog Synth part comes back.",
          nextHint: "Last thing: keeping it.",
        },
        {
          id: "SPEC-VOC-S09",
          title: "Keeping a vocoder setup",
          instruction: "Save the program if you want this again.",
          detail:
            "Vocoder settings are saved individually for each program, so they are kept the same way everything else is — by saving the program. The Vocoder Edit screen in the Menu holds the detailed settings if you want to go further.",
          hardwareTargets: ["shiftButton", "menuWriteButton"],
          visualMode: "full-plus-inset",
          checkpoint:
            "You can use the vocoder, and you know its settings belong to the program.",
          recoveryHelp:
            "N09 Save your work has the saving procedure. If you do not save, the setup is lost when you change program or switch off.",
          nextHint: "The other half of this category works quite differently.",
        },
      ],
    },

    "auto-pitch": {
      id: "auto-pitch",
      level: "specialty",
      title: "Use AutoPitch",
      shortTitle: "AutoPitch",
      summary:
        "The other half of the Vocoder/AutoPitch category: sing into the microphone and the JD-Xi corrects your pitch in hard steps, giving the familiar mechanical vocal sound. No keyboard needed.",
      estimatedMinutes: 7,
      prerequisites: ["B03"],
      learningGoals: [
        "Select an AutoPitch tone and hear your corrected voice.",
        "Tell AutoPitch apart from the vocoder by how it behaves.",
        "Adjust it from the AutoPitch Edit screen.",
        "Know the limits it shares with the vocoder.",
      ],
      // Source record: docs/tutorials/SPECIALTY-SOURCE-NOTES.md
      steps: [
        {
          id: "SPEC-AP-S01",
          title: "Get the microphone working",
          instruction:
            "Connect the included microphone to the MIC jack, and make sure nothing is plugged into the rear INPUT jack.",
          detail:
            "If something is connected to both, the JD-Xi gives priority to the INPUT jack and the microphone is unavailable.",
          hardwareTargets: ["micJack"],
          visualMode: "full-plus-inset",
          checkpoint: "The microphone is connected and the INPUT jack is empty.",
          recoveryHelp:
            "The Vocoder lesson covers this in more detail, including where the input level lives if your voice is too quiet or too loud.",
          nextHint: "Before you change sounds, one check.",
        },
        {
          id: "SPEC-AP-S02",
          title: "Protect any work you want to keep",
          instruction: "Decide whether this program holds work you have not saved.",
          detail:
            "The next step selects a different tone, which throws away an edited sound that has not been saved.",
          hardwareTargets: ["toneButtons"],
          visualMode: "full",
          checkpoint:
            "You have decided: either there is nothing here to keep, or you have saved it first.",
          recoveryHelp:
            "N09 Save your work teaches saving. This lesson is optional and nothing depends on completing it.",
          nextHint: "Now find an AutoPitch tone.",
        },
        {
          id: "SPEC-AP-S03",
          title: "Select an AutoPitch tone",
          instruction:
            "Press Digital Synth 1, turn the Category dial to Vocoder/AutoPitch, and step through the tones with Tone +.",
          detail:
            "Vocoder and AutoPitch tones share this one dial position. The next step is how you tell which you have landed on.",
          hardwareTargets: ["digitalSynth1Button", "categoryDial", "toneButtons"],
          visualMode: "full-plus-inset",
          checkpoint: "You have a tone selected in the Vocoder/AutoPitch category.",
          recoveryHelp:
            "Turn the dial to any other position to leave the category entirely.",
          nextHint: "Now the test that tells the two apart.",
        },
        {
          id: "SPEC-AP-S04",
          title: "Sing without touching the keyboard",
          instruction: "Sing or speak into the microphone with your hands off the keys.",
          detail:
            "This is the difference. With an AutoPitch tone selected there is no need to play the keyboard at all — Roland says so directly. If you hear nothing until you hold a key, you have a vocoder tone; step on with Tone + and try again.",
          hardwareTargets: ["micJack", "keys"],
          visualMode: "full",
          expectedSound:
            "Your own voice coming back with its pitch pulled into hard steps — the familiar mechanical vocal effect.",
          whyItMatters:
            "It is the cleanest way to tell the two apart, and it explains what AutoPitch actually is: a correction applied to your voice, rather than an instrument you play with your voice as its raw material.",
          checkpoint:
            "You can hear your voice, pitch-corrected, without holding any keys.",
          recoveryHelp:
            "Nothing at all? Check the INPUT jack is empty and Master Volume is up. Roland notes the effect may not work correctly with input that is not a human voice, or in a noisy room.",
          nextHint: "Now hear what it is doing to you.",
        },
        {
          id: "SPEC-AP-S05",
          title: "Hear the stair-step",
          instruction: "Slide your voice slowly from a low note up to a high one.",
          detail:
            "Roland describes AutoPitch as suppressing pitch irregularity and applying a stair-step constraint to pitch change. A slow slide is the easiest way to hear that happening.",
          hardwareTargets: ["micJack"],
          visualMode: "full",
          expectedSound:
            "Your slide arriving as a series of steps rather than a smooth glide.",
          whyItMatters:
            "That stepping is the whole effect. Once you have heard it deliberately you will recognise it immediately on records, and you will know what you are asking for when you reach for it.",
          checkpoint: "You have heard your voice step rather than slide.",
          recoveryHelp:
            "Slide more slowly, and over a wider range. A quick slide can pass through the steps too fast to hear them individually.",
          nextHint: "Now adjust it.",
        },
        {
          id: "SPEC-AP-S06",
          title: "Adjust it",
          instruction:
            "Press Menu/Write, use Cursor to select AutoPitch Edit, and press Enter.",
          detail:
            "Cursor selects a parameter and Value changes it. Press Exit several times when you have finished. There is nothing you must change here — this step is so you know where the settings are.",
          hardwareTargets: ["menuWriteButton", "display"],
          visualMode: "full-plus-inset",
          checkpoint: "You have opened AutoPitch Edit and come back out.",
          recoveryHelp:
            "Press Exit until you reach the top screen. Unlike SYSTEM, this screen does not save itself — anything you changed is part of the loaded program until you save it.",
          nextHint: "Last thing: the limits, and keeping it.",
        },
        {
          id: "SPEC-AP-S07",
          title: "The limits, and keeping it",
          instruction: "Save the program if you want this setup again.",
          detail:
            "AutoPitch shares the vocoder's two documented limits: it can be used on only one Digital Synth part, and the Analog Synth part produces no sound while it is selected. Its settings are saved individually for each program.",
          hardwareTargets: ["shiftButton", "menuWriteButton"],
          visualMode: "full-plus-inset",
          checkpoint:
            "You can use AutoPitch, and you know what it costs and how to keep it.",
          recoveryHelp:
            "N09 Save your work has the saving procedure. Turning the Category dial away from Vocoder/AutoPitch brings the Analog Synth part back.",
          nextHint: "One more microphone feature, and it needs no tone at all.",
        },
      ],
    },

    "auto-note": {
      id: "auto-note",
      level: "specialty",
      title: "Use Auto Note",
      shortTitle: "Auto Note",
      summary:
        "Play the JD-Xi with your voice. Auto Note listens to the pitch you sing and plays that note, so you can use any sound on the instrument without touching the keys.",
      estimatedMinutes: 6,
      prerequisites: ["B03"],
      learningGoals: [
        "Turn Auto Note on and play a sound by singing.",
        "Tell Auto Note apart from the vocoder and AutoPitch.",
        "Turn it off cleanly.",
      ],
      // Source record: docs/tutorials/SPECIALTY-SOURCE-NOTES.md
      steps: [
        {
          id: "SPEC-AN-S01",
          title: "Get the microphone working",
          instruction:
            "Connect the included microphone to the MIC jack, and make sure nothing is plugged into the rear INPUT jack.",
          detail:
            "As with the other two microphone features: if something is connected to both, the INPUT jack takes priority and the microphone is unavailable.",
          hardwareTargets: ["micJack"],
          visualMode: "full-plus-inset",
          checkpoint: "The microphone is connected and the INPUT jack is empty.",
          recoveryHelp:
            "The Vocoder lesson covers the microphone setup in more detail, including the input level.",
          nextHint: "Now choose what your voice is going to play.",
        },
        {
          id: "SPEC-AN-S02",
          title: "Choose a sound to play",
          instruction:
            "Select any part and any tone you like, and play a few keys to hear it.",
          detail:
            "This is what makes Auto Note different from the other two: it needs no special category. Whatever sound the selected part is holding is what your voice will play.",
          hardwareTargets: ["partSelectGroup", "toneButtons"],
          visualMode: "full-plus-inset",
          expectedSound: "Any ordinary JD-Xi sound, played from the keys.",
          whyItMatters:
            "Vocoder and AutoPitch need tones from one particular category. Auto Note works with the whole instrument, which makes it the most generally useful of the three.",
          checkpoint: "You have a sound selected that you can hear from the keys.",
          recoveryHelp:
            "B03 covers finding sounds. Anything with a clear sustained tone will show this best.",
          nextHint: "Now hand it over to your voice.",
        },
        {
          id: "SPEC-AN-S03",
          title: "Turn Auto Note on",
          instruction: "Press the Auto Note button so it lights.",
          detail: "It sits at the top left of the panel, near the microphone jack.",
          hardwareTargets: ["autoNoteButton"],
          visualMode: "full-plus-inset",
          checkpoint: "The Auto Note button is lit.",
          recoveryHelp:
            "Press it again if you are not sure whether it is on — the light is the only indication.",
          nextHint: "Now play without touching anything.",
        },
        {
          id: "SPEC-AN-S04",
          title: "Play with your voice",
          instruction:
            "Sing a note into the microphone, with your hands off the keyboard.",
          detail:
            "Auto Note detects the pitch of your voice and plays that pitch. Try holding a note steadily, then moving up and down.",
          hardwareTargets: ["micJack"],
          visualMode: "full",
          expectedSound:
            "The sound you chose, playing the note you are singing, with nothing pressed on the keyboard.",
          whyItMatters:
            "This is a genuinely different way to play the instrument. If you can hum a line more easily than you can find it on the keys, this is how you get it out.",
          checkpoint:
            "You can play the selected sound by singing, without touching the keys.",
          recoveryHelp:
            "Nothing? Check the Auto Note button is lit, the INPUT jack is empty, and Master Volume is up. Sing steadily and clearly — Roland notes the microphone features are optimised for the human voice and may behave unexpectedly otherwise, including in a noisy room.",
          nextHint: "One note worth having if you ever record with it.",
        },
        {
          id: "SPEC-AN-S05",
          title: "One thing to know about recording",
          instruction: "Read this if you ever record a pattern using Auto Note.",
          detail:
            "Roland documents a specific consequence: a pattern recorded with Auto Note has its Pitch Bend Range fixed at 24. If you turn Auto Note off and play that pattern back, the pitch changes may not match what you recorded unless the Pitch Bend Range is also set to 24.",
          hardwareTargets: ["autoNoteButton"],
          visualMode: "full-plus-inset",
          whyItMatters:
            "It looks like the pattern has been recorded wrongly, and it has not. Knowing the cause saves you re-recording something that was fine.",
          checkpoint:
            "You know that Auto Note recordings carry a pitch-bend consequence, and what it is.",
          recoveryHelp:
            "Nothing to do here — this step only asks you to read. Playing live with Auto Note, which is what this lesson does, is unaffected.",
          nextHint: "Last step: put it back.",
        },
        {
          id: "SPEC-AN-S06",
          title: "Turn it off cleanly",
          instruction: "Press the Auto Note button so the light goes out, then play a key.",
          detail:
            "With it off, the keyboard behaves normally again and your voice does nothing.",
          hardwareTargets: ["autoNoteButton", "keys"],
          visualMode: "full-plus-inset",
          expectedSound: "An ordinary note from the keys, and silence when you sing.",
          whyItMatters:
            "Leaving Auto Note on means every sound near the microphone plays a note, which is a confusing thing to discover three tutorials later.",
          checkpoint: "The Auto Note button is dark and the keys play normally.",
          recoveryHelp:
            "If notes still appear when you speak, press Auto Note once more and watch the light rather than listening for the change.",
          nextHint:
            "That is all three microphone features. None of them counts toward course completion.",
        },
      ],
    },
  },
};
