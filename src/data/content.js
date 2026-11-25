import genesisReport from "../assets/20-Page Report Design Template.pdf";
import { SITE } from "./site";

export const BRAND = {
  name: "Discovery Haven Kids Co.",
  tagline: "Where Intellectual Curiosity Meets Radical Confidence.",
  taglineShort: "Big ideas. Brave voices.",
  legalName: "Discovery Haven Kids Co. Ltd",
  email: "info@discoveryhaven.org",
  website: "discoveryhaven.org",
  phoneNumber: "(+234) 0916-399-2614",
};

export const COLORS = {
  purple: "#6b2bd9",
  plum: "#2b1838",
  sunflower: "#ffc93c",
  cream: "#fbf6ee",
  mint: "#9be3c4",
  peach: "#ffb894",
  lilac: "#c8b5ff",
  sun: "#ffe14d",
};

// Main navigation. The same labels are used in the mobile menu.
// "Book a call" is a separate, secondary action (see BOOK_A_CALL).
export const NAV_LINKS = [
  { label: "Haven Academy", href: "/haven-academy" },
  { label: "Experiences", href: "/explore" },
  { label: "Our Story", href: "/about" },
  { label: "Parent Community", href: "/haven-tribe" },
];

// Every Book a call CTA goes straight to the Calendly profile.
export const BOOK_A_CALL = { label: "Book a call", href: SITE.calendlyUrl };

// The four Haven Academy tracks, always shown in this order.
// `activity` is the practical thing children do, shown first on cards.
// `color` is the track colour (one accent per card).
// `enrolment` drives the course CTA (see src/lib/enrolment.js):
//   status:      "between" | "open" | "full" | "finished"
//   campaignUrl: the campaign page with dates, fee and registration.
//                Required for "open". The built-in campaign page for a
//                track is `${href}/enrol` (existing Paystack checkout).
//   notifyUrl:   track-specific Systeme.io form, if one exists.
//   waitlistUrl: operational waitlist for a full group, if one exists.
// Dates in the course files are listings to verify. Only set "open"
// once the owner confirms the group and its campaign URL.
export const COURSES = [
  {
    id: "curiosity-box",
    activity:
      "Try a small experiment, compare what happens and explain what you would change next time.",
    href: "/courses/curiosity-box",
    cta: "Explore Curiosity Box",
    enrolment: { status: "between", campaignUrl: "", notifyUrl: "", waitlistUrl: "" },
    title: "The Curiosity Box",
    subtitle: "Science, Art & Critical Thinking",
    description:
      "A programme built for young investigators and creators. Where scientific thinking meets artistic expression, children explore logic, deduction, and problem-solving through the lens of art and design. Classes grouped by age: 7–11 and 12–16.",
    ages: "7 to 16",
    duration: "4 Weeks",
    format: "Virtual · Saturdays",
    color: "#9be3c4",
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
    activity:
      "Work through everyday situations, practise listening and take turns leading the group.",
    href: "/courses/eq-lab",
    cta: "Explore EQ Lab",
    enrolment: { status: "between", campaignUrl: "", notifyUrl: "", waitlistUrl: "" },
    title: "The EQ Lab",
    subtitle: "Emotional Intelligence & Leadership",
    description:
      "A programme that builds self-awareness, empathy, and peaceful communication for young leaders. Classes grouped by age: 7–11 and 12–16.",
    ages: "7 to 16",
    duration: "4 Weeks",
    format: "Virtual · Saturdays",
    color: "#ffb894",
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
    activity:
      "Create a character, draft a scene and use feedback to make your story stronger.",
    href: "/courses/creative-quest",
    cta: "Explore Creative Quest",
    enrolment: { status: "between", campaignUrl: "", notifyUrl: "", waitlistUrl: "" },
    title: "Creative Quest",
    subtitle: "Writing & Storytelling Studio",
    description:
      "A programme for young storytellers. Children write, edit, and publish creative fiction, non-fiction, and flash fiction pieces. Classes grouped by age: 7–11 and 12–16.",
    ages: "7 to 16",
    duration: "6 Weeks",
    format: "Virtual · Fridays",
    color: "#c8b5ff",
    icon: "PenLine",
    image: "",
    outcomes: [
      "Write creative fiction, non-fiction, and flash fiction pieces",
      "Edit their own work and give constructive feedback to peers",
      "Build and present a final story portfolio",
    ],
    bonus: "Top stories are published in the DH Youth Anthology.",
    price: 75000,
  },
  {
    id: "loud-fearless",
    activity:
      "Prepare a short speech, think on your feet in Table Topics and take a turn in a club role.",
    href: "/courses/loud-fearless",
    cta: "Explore Loud & Fearless",
    enrolment: { status: "between", campaignUrl: "", notifyUrl: "", waitlistUrl: "" },
    title: "Loud & Fearless",
    subtitle: "Public Speaking & Debate",
    description:
      "A programme that transforms shy children into confident communicators. Voice modulation, debate, and public speaking. Classes grouped by age: 7–11 and 12–16.",
    ages: "7 to 16",
    duration: "6 Weeks",
    format: "Virtual · Saturdays",
    color: "#ffe14d",
    icon: "Mic2",
    image: "",
    outcomes: [
      "Voice modulation exercises and body language training",
      "Quick-thinking debate games and impromptu speaking challenges",
      "Build and deliver a final speech before a live guest panel",
    ],
    bonus:
      "Final speech delivered before a live audience of parents and guests.",
    price: 80000,
  },
];

export const EVENTS = [
  {
    id: "creative-quest-aug-2026",
    title: "Creative Quest: Summer Writing Studio",
    date: "August 2026",
    duration: "6 Weeks",
    description:
      "Six weeks of story-building, character creation, and world-building. Final stories published in the DH Youth Anthology.",
    dateBarColor: "#c8b5ff",
    dateBarTextColor: "#2b1838",
    price: 45000,
    type: "cohort",
    gcalStart: "20260801",
    gcalEnd: "20260912",
    location: "Virtual (Zoom)",
  },
  {
    id: "loud-&-fearless-Oct-2026",
    title: "Loud & Fearless: Public Speaking & Debate",
    date: "Oct 2026",
    duration: "4 Weeks",
    description:
      "A programme that transforms shy children into confident communicators. Voice modulation, debate, and public speaking. Classes grouped by age: 7–11 and 12–16.",
    dateBarColor: "#ffe14d",
    dateBarTextColor: "#2b1838",
    price: 40000,
    type: "cohort",
    gcalStart: "20260606",
    gcalEnd: "20260704",
    location: "Virtual (Zoom)",
  },

  {
    id: "summit-nov-2026",
    title: "Discovery Haven Children's Summit: The Confident Generation",
    date: "November 2026",
    duration: "Annual Flagship",
    description:
      "Our annual flagship summit. Virtual and Abuja. Performances, panels, awards, and the Little Voices book launch.",
    dateBarColor: "#ffc93c",
    dateBarTextColor: "#2b1838",
    price: 15000,
    type: "summit",
    gcalStart: "20261101",
    gcalEnd: "20261102",
    location: "Virtual & Abuja, Nigeria",
  },
];

// Only events that haven't ended yet (by gcalEnd, YYYYMMDD) are shown as
// open for registration. When none are left, pages show the empty state.
export function getUpcomingEvents(today = new Date()) {
  const y = today.getFullYear();
  const m = String(today.getMonth() + 1).padStart(2, "0");
  const d = String(today.getDate()).padStart(2, "0");
  const todayKey = `${y}${m}${d}`;
  return EVENTS.filter((ev) => !ev.gcalEnd || ev.gcalEnd >= todayKey);
}

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

// Single source of truth for headline impact figures. Every page that
// shows these numbers reads them from here. Confirm with the owner before
// changing.
export const IMPACT_METRICS = [
  { number: "200+", label: "Children reached" },
  { number: "12+", label: "Programmes" },
  { number: "3+", label: "Countries" },
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

// The privacy link appears automatically once SITE.privacyUrl is set.
export const FOOTER_LINKS = {
  programmes: [
    { label: "Haven Academy", href: "/haven-academy" },
    { label: "Experiences", href: "/explore" },
    { label: "Parent Community", href: "/haven-tribe" },
  ],
  organisation: [
    { label: "Our Story", href: "/about" },
    { label: "Impact", href: "/impact" },
    { label: "Partnerships", href: "/partnership" },
    { label: "Contact", href: "/contact" },
    { label: "Book a call", href: SITE.calendlyUrl },
    ...(SITE.privacyUrl
      ? [{ label: "Privacy notice", href: SITE.privacyUrl }]
      : []),
  ],
};

// Impact reports listed on /impact/reports, newest first. Put the PDF in
// src/assets/ and import it above so Vite bundles it. A report without a
// `file` shows as "Coming Soon" instead of a broken download link.
export const REPORTS = [
  {
    title: "Discovery Haven - The Genesis Report (2025 - February 2026)",
    date: "2026-10-09",
    period: "2025 to February 2026",
    description:
      "Our first impact report, covering nine pilot programmes from Adventures in Amazonia to Clay & Culture Craft, our executive KPI dashboard across 62 families, and our operational readiness for what comes next.",
    file: genesisReport,
    downloadName: "Discovery Haven - The Genesis Report.pdf",
  },
];
