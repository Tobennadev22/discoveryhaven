export const BRAND = {
  name: "Discovery Haven Kids Co.",
  tagline: "Where Intellectual Curiosity Meets Radical Confidence.",
  taglineShort: "Where Children Come Alive.",
  email: "info@discoveryhaven.org",
  website: "discoveryhaven.org",
};

export const COLORS = {
  aqua: "#05c3dd",
  yellow: "#ffec00",
  dark: "#1a1a1a",
  red: "#de2d10",
};

export const NAV_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Haven Academy", href: "/haven-academy" },
  { label: "Haven Tribe", href: "/haven-tribe" },
  { label: "Events", href: "/events" },
  { label: "Arts & Culture", href: "/arts-culture" },
  { label: "Impact", href: "/impact" },
];

export const COURSES = [
  {
    id: "creative-quest",
    title: "Creative Quest",
    subtitle: "Writing & Storytelling Studio",
    description:
      "A programme for young storytellers. Children write, edit, and publish creative fiction, non-fiction, and flash fiction pieces.",
    ages: "8–14",
    duration: "6 Weeks",
    format: "Virtual · Saturdays",
    color: "#05c3dd",
    icon: "😋",
    outcomes: [
      "Write creative fiction, non-fiction, and flash fiction pieces",
      "Edit their own work and give constructive feedback to peers",
      "Build and present a final story portfolio",
    ],
    bonus: "Top stories are published in the DH Youth Anthology.",
    price: 45000,
  },
  {
    id: "loud-fearless",
    title: "Loud & Fearless",
    subtitle: "Public Speaking & Debate",
    description:
      "A programme that transforms shy children into confident communicators. Voice modulation, debate, and public speaking.",
    ages: "9–15",
    duration: "6 Weeks",
    format: "Virtual · Saturdays",
    color: "#de2d10",
    icon: "🎤",
    outcomes: [
      "Voice modulation exercises and body language training",
      "Quick-thinking debate games and impromptu speaking challenges",
      "Build and deliver a final speech before a live guest panel",
    ],
    bonus:
      "Final speech delivered before a live audience of parents and guests.",
    price: 45000,
  },
  {
    id: "curiosity-box",
    title: "The Curiosity Box",
    subtitle: "Critical Thinking & Problem-Solving",
    description:
      "A programme built for young investigators. Children explore logic, deduction, and collaborative problem-solving.",
    ages: "7–13",
    duration: "6 Weeks",
    format: "Virtual · Saturdays",
    color: "#ffec00",
    icon: "🔍",
    outcomes: [
      "Explore data filtration and basic logic deduction",
      "Collaborate on gamified problem-solving challenges",
      "Build and present a step-by-step investigation report",
    ],
    bonus: "Children receive a personalised Investigator Certificate.",
    price: 45000,
  },
  {
    id: "eq-lab",
    title: "The EQ Lab",
    subtitle: "Emotional Intelligence & Leadership",
    description:
      "A programme that builds self-awareness, empathy, and peaceful communication for young leaders.",
    ages: "6–12",
    duration: "4 Weeks",
    format: "Virtual · Saturdays",
    color: "#7c3aed",
    icon: "💡",
    outcomes: [
      "Learn how the brain reacts to anger and fear",
      "Practice empathy mapping and understanding others' perspectives",
      "Learn peaceful diplomacy and leadership frameworks",
    ],
    bonus: "Children graduate as certified Young Diplomats.",
    price: 40000,
  },
];

export const EVENTS = [
  {
    id: "eq-lab-june-2026",
    title: "The EQ Lab — Emotional Intelligence & Leadership",
    date: "June 2026",
    duration: "4 Weeks",
    description:
      "A virtual Saturday programme for ages 6–12. Building self-awareness, empathy, and peaceful communication.",
    dateBarColor: "#ffec00",
    dateBarTextColor: "#1a1a1a",
    price: 40000,
    type: "cohort",
    gcalStart: "20260606",
    gcalEnd: "20260704",
    location: "Virtual (Zoom)",
  },
  {
    id: "creative-quest-aug-2026",
    title: "Creative Quest — Summer Writing Studio",
    date: "August 2026",
    duration: "6 Weeks",
    description:
      "Six weeks of story-building, character creation, and world-building. Final stories published in the DH Youth Anthology.",
    dateBarColor: "#ffec00",
    dateBarTextColor: "#1a1a1a",
    price: 45000,
    type: "cohort",
    gcalStart: "20260801",
    gcalEnd: "20260912",
    location: "Virtual (Zoom)",
  },
  {
    id: "summit-nov-2026",
    title: "Discovery Haven Children's Summit — The Confident Generation",
    date: "November 2026",
    duration: "Annual Flagship",
    description:
      "Our annual flagship summit. Virtual and Abuja. Performances, panels, awards, and the Little Voices book launch.",
    dateBarColor: "#de2d10",
    dateBarTextColor: "#ffffff",
    price: 15000,
    type: "summit",
    gcalStart: "20261101",
    gcalEnd: "20261102",
    location: "Virtual & Abuja, Nigeria",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "My daughter completed Creative Quest and came home asking to write every weekend. She published her first story at age 9. Discovery Haven gave her a voice I never knew she had.",
    name: "Adaeze O.",
    role: "Parent, Lagos",
  },
  {
    quote:
      "After Loud & Fearless, my son gave a speech at his school assembly without a single note. The confidence he built in just six weeks was extraordinary.",
    name: "Emeka T.",
    role: "Parent, Abuja",
  },
  {
    quote:
      "The Curiosity Box changed how my daughter approaches problems. She now asks 'why' and 'how' before reacting. That's the kind of thinking that will carry her through life.",
    name: "Fatima A.",
    role: "Parent, Kano",
  },
];

export const IMPACT_METRICS = [
  { number: "2,400+", label: "Children Reached" },
  { number: "18", label: "Programmes Delivered" },
  { number: "6", label: "Countries" },
  { number: "94%", label: "Parent Satisfaction" },
];

export const VALUES = [
  {
    title: "Autonomy",
    description:
      "We respect the independent voice, logic, and natural learning cadence of every child.",
    icon: "🌱",
  },
  {
    title: "Intellectual Integrity",
    description:
      "We train investigators to seek empirical evidence and verify truth over trends.",
    icon: "🔬",
  },
  {
    title: "Emotional Sovereignty",
    description:
      "We teach self-regulation, ensuring children choose their responses rather than reacting to pressure.",
    icon: "💎",
  },
];

export const FOOTER_LINKS = {
  programmes: [
    { label: "Haven Academy", href: "/haven-academy" },
    { label: "Haven Tribe", href: "/haven-tribe" },
    { label: "Events Calendar", href: "/events" },
    { label: "Arts & Culture", href: "/arts-culture" },
    { label: "Explorers", href: "/explorers" },
  ],
  organisation: [
    { label: "About Us", href: "/about" },
    { label: "Reports & Impact", href: "/impact" },
    { label: "Advocacy & SDGs", href: "/advocacy" },
    { label: "Little Voices Books", href: "/arts-culture" },
    { label: "Friends of Discovery Haven", href: "/friends" },
    { label: "Contact", href: "/contact" },
  ],
};
