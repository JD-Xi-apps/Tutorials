/*
 * JD-Xi Tutorial Hub - canonical topic collections.
 *
 * A collection is a discovery surface: an ordered list of references into the
 * canonical tutorial set, plus its own presentation metadata. It never holds
 * tutorial content.
 *
 * `tutorialIds` is the SINGLE source of truth for topic membership
 * (docs/TUTORIAL-ARCHITECTURE.md §5). Tutorials carry no authored `topics`
 * field, because two copies of the same membership would drift and neither
 * would win. A read-only reverse index may be derived at load time; it is
 * generated, never authored, and never written back.
 *
 *   status "live"     surfaced on the home screen and routable
 *   status "planned"  routable when it has content, deliberately not on the
 *                     home screen (adding cards there would be a redesign of a
 *                     frozen surface); a planned collection with no tutorials
 *                     is a documented content gap and is not routable
 *
 * Classic script on purpose - the app runs from file://; no modules, no fetch.
 */

window.JDXI_COLLECTIONS = {
  /* ---- the ten collections the home screen already shows ---- */

  "getting-started": {
    id: "getting-started",
    title: "Getting started",
    description: "From opening the box to playing your first sounds.",
    status: "live",
    tutorialIds: ["B01", "B02", "B03", "B04", "B05"],
  },
  "navigating-menus": {
    id: "navigating-menus",
    title: "Navigating menus",
    description: "Find your way around the display, and back out again.",
    status: "live",
    tutorialIds: ["N01", "N02", "N10"],
  },
  "playing-notes": {
    id: "playing-notes",
    title: "Playing notes",
    description: "The keys themselves, and the parts they play.",
    status: "live",
    tutorialIds: ["B02", "B04", "B05"],
  },
  "making-beats": {
    id: "making-beats",
    title: "Making beats",
    description: "Patterns, from pressing play to building your own.",
    status: "live",
    tutorialIds: ["B08", "B09", "N03", "N04", "N06", "I08"],
  },
  "bass-sounds": {
    id: "bass-sounds",
    title: "Bass sounds",
    description: "Low end, played and built from scratch.",
    status: "live",
    tutorialIds: ["N05", "I01", "I04"],
  },
  "pad-sounds": {
    id: "pad-sounds",
    title: "Pad sounds",
    description: "Wide, slow, sustained sounds and the tools that shape them.",
    status: "live",
    tutorialIds: ["I02", "I04", "I05"],
  },
  "lead-sounds": {
    id: "lead-sounds",
    title: "Lead sounds",
    description: "Sounds that sit in front, and how to play them expressively.",
    status: "live",
    tutorialIds: ["B05", "I03", "I04"],
  },
  "effects-and-motion": {
    id: "effects-and-motion",
    title: "Effects & motion",
    description: "Space, echo, character, and sounds that move by themselves.",
    status: "live",
    tutorialIds: ["B07", "I05", "I06"],
  },
  "saving-sounds": {
    id: "saving-sounds",
    title: "Saving sounds",
    description: "Keep what you make, and find it again later.",
    status: "live",
    tutorialIds: ["N09", "I09"],
  },
  "mini-challenges": {
    id: "mini-challenges",
    title: "Mini challenges",
    description: "Put everything together, with nobody telling you which button to press.",
    status: "live",
    tutorialIds: ["B10", "I10"],
  },

  /* ---- documented, routable, deliberately not on the home screen ---- */

  "sound-design": {
    id: "sound-design",
    title: "Sound design",
    description: "The whole thread, from turning a knob by ear to building a sound on purpose.",
    status: "planned",
    tutorialIds: ["B06", "N08", "I01", "I02", "I03", "I04", "I05", "I06"],
  },
  arpeggiator: {
    id: "arpeggiator",
    title: "Arpeggiator",
    description: "Hold a few notes and let the JD-Xi play them for you.",
    status: "planned",
    tutorialIds: ["N07"],
  },
  troubleshooting: {
    id: "troubleshooting",
    title: "Troubleshooting",
    description: "When the JD-Xi does something you did not expect.",
    status: "planned",
    tutorialIds: ["N01", "N10"],
  },
  performance: {
    id: "performance",
    title: "Performance",
    description: "Assembling a complete setup and playing it.",
    status: "planned",
    tutorialIds: ["I07", "I10"],
  },

  /*
   * A documented content gap, not an oversight. The JD-Xi has a vocoder and an
   * AutoPitch function, both fully documented by Roland, and no canonical
   * tutorial covers either - so this collection has nothing to reference. It is
   * kept here so the gap is visible rather than forgotten. Being empty, it is
   * not routable: an empty topic page would be a placeholder.
   */
  vocoder: {
    id: "vocoder",
    title: "Vocoder",
    description: "Not yet covered by any tutorial. Recorded as a content gap.",
    status: "planned",
    tutorialIds: [],
  },
};
