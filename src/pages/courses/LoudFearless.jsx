import CourseLandingPage from "./CourseLandingPage";

const FAQ_COMMON = [
  {
    q: "Is this in-person or virtual?",
    a: "Fully virtual, live on Zoom. The final showcase may have an in-person option for families in Abuja.",
  },
  {
    q: "What if my child misses a session?",
    a: "Session recordings are shared so your child never falls behind.",
  },
  {
    q: "What if I'm not sure this is the right fit?",
    a: "Book a free 20-minute call with our founder before enrolling — we'll help you decide.",
  },
];

const COURSE = {
  slug: "loud-fearless",
  title: "Loud & Fearless",
  cohort: "October 2026",
  price: 75000,
  tag: "Haven Academy · Public Speaking Lab",
  headline: "Loud & Fearless: Where Quiet Children Find Their Roar.",
  subheadline:
    " A 6-week public speaking and debate lab for ages 7–16. Classes run in two tracks — Track 1 for ages 7 to 11 and Track 2 for ages 12 to 16 — so every child is challenged at the right level. They will overcome stage fright, master debate, and graduate with a live performance before a real audience.",
  smallText: "Limited spots · October 2026 Cohort · Starts Soon",
  problemHeading: "Does your child go silent when it's time to speak up?",
  problemBody:
    "Stage fright is not a personality trait — it's a skill gap. Most children are never taught how to organise their thoughts under pressure, project their voice with confidence, or hold a room's attention. They freeze, rush, or go quiet. Loud & Fearless changes that, permanently.",
  whatItIsHeading: "A confidence lab, not a drama class.",
  whatItIsBody:
    "Loud & Fearless is a structured public speaking and debate lab. Using friendly debate formats, voice modulation exercises, and quick-thinking challenges, children learn how to back up their opinions with facts, spot weak arguments, deliver powerful speeches, and command a room — all in a safe, encouraging environment built for growth.",
  outcomesHeading: "By the end of 6 weeks, your child will have:",
  outcomes: [
    "Overcome stage fright through progressive, low-pressure speaking challenges",
    "Mastered voice modulation, body language, and confident eye contact",
    "Learned to structure arguments and debate respectfully with evidence",
    "Delivered a final speech confidently before a live guest panel",
  ],
  bonusHeading: "A live graduation showcase — parents are invited.",
  bonusBody:
    "The final session is a live graduation showcase where your child performs before a friendly guest panel — and you get to watch. Parents see the transformation in real time. Your child walks away with a confidence they carry into every classroom, every interview, and every room they enter for the rest of their life.",
  schedule: {
    course: "Loud & Fearless",
    month: "October 2026",
    duration: "6 Weeks",
    sessionSchedule: "Saturdays · 2 hours per session",
    ages: "7–12",
    format: "Virtual — live Zoom sessions",
    investment: "₦75,000",
  },
  testimonial: {
    quote:
      "My son used to hide behind me at family events. After Loud & Fearless, he asked to give a speech at his cousin's birthday party. I could not believe what I was watching. He was magnetic.",
    author: "Parent, Discovery Haven",
  },
  faqSpecific: {
    q: "Is this suitable for very shy children?",
    a: "Especially for shy children. The programme is built to be progressive — no child is put on the spot before they're ready. Confidence is built step by step.",
  },
  faqCommon: FAQ_COMMON,
  finalCTA: "October cohort spots are filling. Reserve your child's place now.",
};

export default function LoudFearless() {
  return <CourseLandingPage course={COURSE} />;
}
