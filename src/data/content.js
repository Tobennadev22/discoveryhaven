export const BRAND = {
  name: "Discovery Haven Kids Co.",
  tagline: "Where Intellectual Curiosity Meets Radical Confidence.",
  taglineShort: "Where Children Come Alive.",
  email: " info@discoveryhaven.org ",
  website: "discoveryhaven.org",
  phoneNumber: "(+234) 0916-399-2614",
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
  { label: "Explore", href: "/explore" },
  { label: "Haven Tribe", href: "/haven-tribe" },
  { label: "Partnerships", href: "/partnership" },
  { label: "Impact", href: "/impact" },
];

export const COURSES = [
  {
    id: "curiosity-box",
    title: "The Curiosity Box",
    subtitle: "Science, Art & Critical Thinking",
    description:
      "A programme built for young investigators and creators. Where scientific thinking meets artistic expression — children explore logic, deduction, and problem-solving through the lens of art and design. Classes grouped by age: 7–11 and 12–16.",
    ages: "7–11 & 12–16",
    duration: "4 Weeks",
    format: "Virtual · Saturdays",
    color: "#05c3dd",
    icon: "SearchCheck",
    image: "",
    outcomes: [
      "Explore data filtration and basic logic deduction",
      "Collaborate on gamified problem-solving challenges",
      "Build and present a step-by-step investigation report",
    ],
    bonus: "Children receive a personalised Investigator Certificate.",
    price: 50000,
  },
  {
    id: "eq-lab",
    title: "The EQ Lab",
    subtitle: "Emotional Intelligence & Leadership",
    description:
      "A programme that builds self-awareness, empathy, and peaceful communication for young leaders. Classes grouped by age: 7–11 and 12–16.",
    ages: "7–11 & 12–16",
    duration: "4 Weeks",
    format: "Virtual · Saturdays",
    color: "#05c3dd",
    icon: "Brain",
    image: "",
    outcomes: [
      "Learn how the brain reacts to anger and fear",
      "Practice empathy mapping and understanding others' perspectives",
      "Learn peaceful diplomacy and leadership frameworks",
    ],
    bonus: "Children graduate as certified Young Diplomats.",
    price: 50000,
  },

  {
    id: "creative-quest",
    title: "Creative Quest",
    subtitle: "Writing & Storytelling Studio",
    description:
      "A programme for young storytellers. Children write, edit, and publish creative fiction, non-fiction, and flash fiction pieces. Classes grouped by age: 7–11 and 12–16.",
    ages: "7–11 & 12–16",
    duration: "6 Weeks",
    format: "Virtual · Fridays",
    color: "#05c3dd",
    icon: "PenLine",
    image: "",
    outcomes: [
      "Write creative fiction, non-fiction, and flash fiction pieces",
      "Edit their own work and give constructive feedback to peers",
      "Build and present a final story portfolio",
    ],
    bonus: "Top stories are published in the DH Youth Anthology.",
    price: 200,
  },
  {
    id: "loud-fearless",
    title: "Loud & Fearless",
    subtitle: "Public Speaking & Debate",
    description:
      "A programme that transforms shy children into confident communicators. Voice modulation, debate, and public speaking. Classes grouped by age: 7–11 and 12–16.",
    ages: "7–11 & 12–16",
    duration: "6 Weeks",
    format: "Virtual · Saturdays",
    color: "#05c3dd",
    icon: "Mic2",
    image: "",
    outcomes: [
      "Voice modulation exercises and body language training",
      "Quick-thinking debate games and impromptu speaking challenges",
      "Build and deliver a final speech before a live guest panel",
    ],
    bonus:
      "Final speech delivered before a live audience of parents and guests.",
    price: 75000,
  },
];

export const EVENTS = [
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
    id: "loud-&-fearless-Oct-2026",
    title: "Loud & Fearless — Public Speaking & Debate",
    date: "Oct 2026",
    duration: "4 Weeks",
    description:
      "A programme that transforms shy children into confident communicators. Voice modulation, debate, and public speaking. Classes grouped by age: 7–11 and 12–16.",
    dateBarColor: "#de2d10",
    dateBarTextColor: "#1a1a1a",
    price: 40000,
    type: "cohort",
    gcalStart: "20260606",
    gcalEnd: "20260704",
    location: "Virtual (Zoom)",
  },

  {
    id: "summit-nov-2026",
    title: "Discovery Haven Children's Summit — The Confident Generation",
    date: "November 2026",
    duration: "Annual Flagship",
    description:
      "Our annual flagship summit. Virtual and Abuja. Performances, panels, awards, and the Little Voices book launch.",
    dateBarColor: "#ffec00",
    dateBarTextColor: "#1a1a1a",
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
  { number: "200+", label: "Children Reached" },
  { number: "12+", label: "Programmes Delivered" },
  { number: "4", label: "Studio Tracks" },
  { number: "3+", label: "Countries Represented" },
  { number: "2", label: "Years of Measurable Impact" },
];

export const VALUES = [
  {
    title: "Autonomy",
    description:
      "We respect the independent voice, logic, and natural learning cadence of every child.",
    icon: "Sprout",
  },
  {
    title: "Intellectual Integrity",
    description:
      "We train investigators to seek empirical evidence and verify truth over trends.",
    icon: "FlaskConical",
  },
  {
    title: "Emotional Sovereignty",
    description:
      "We teach self-regulation, ensuring children choose their responses rather than reacting to pressure.",
    icon: "Heart",
  },
];

export const FOOTER_LINKS = {
  programmes: [
    { label: "Haven Academy", href: "/haven-academy" },
    { label: "Haven Tribe", href: "/haven-tribe" },
    // { label: "Events", href: "/events" },
    { label: "Explore", href: "/explore" },
  ],
  organisation: [
    { label: "About Us", href: "/about" },
    { label: "Partnerships", href: "/friends" },
    { label: "Impact", href: "/impact" },
    { label: "Contact", href: "/contact" },
  ],
};
