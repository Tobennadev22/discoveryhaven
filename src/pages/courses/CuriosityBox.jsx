import CourseLandingPage from "./CourseLandingPage";

const FAQ_COMMON = [
  {
    q: "Is this in-person or virtual?",
    a: "Fully virtual, live on Zoom — your child can join from anywhere in the world.",
  },
  {
    q: "What if my child misses a session?",
    a: "Session recordings are shared so your child never falls behind.",
  },
  {
    q: "What if I'm not sure this is the right fit?",
    a: "Book a free 15-minute call with our founder before enrolling — we'll help you decide.",
  },
];

const COURSE = {
  slug: "the-curiosity-box",
  title: "The Curiosity Box",
  cohort: "February 2026",
  price: 50000,
  tag: "Haven Academy · Science & Logic Lab",
  headline: "The Curiosity Box: Where Your Child Thinks Like a Detective.",
  subheadline:
    "A 4-week exploration lab for ages 7–16. Classes run in two tracks — Track 1 for ages 7 to 11 and Track 2 for ages 12 to 16 — so every investigation is pitched at the right level of complexity. Your child will discover that the most powerful ideas live at the intersection of science and art.",
  smallText: "Limited spots · February 2026 Cohort · Starts Soon",
  problemHeading:
    "Does your child say science is boring — or that they're just not good at it?",
  problemBody:
    "Most STEM education asks children to memorise facts and repeat them on a test. It rarely asks them to think. The Curiosity Box takes a completely different approach — treating every session like a mystery to solve, where your child is the lead investigator. When learning feels like play, children stop saying they can't and start asking why.",
  whatItIsHeading: "A mystery lab, not a science class.",
  whatItIsBody:
    "The Curiosity Box is a hands-on investigation lab where children play the role of real-world detectives. Using an interactive investigation board, the class works together each week to sift through clues, test hypotheses, and crack complex, gamified puzzles — exploring data filtration, basic logic deduction, and collaborative problem-solving in a way that feels nothing like school.",
  outcomesHeading: "By the end of 4 weeks, your child will have:",
  outcomes: [
    "Developed a structured approach to breaking down complex problems",
    "Practised forming and testing hypotheses through hands-on investigations",
    "Built collaborative problem-solving skills — working with peers to crack challenges",
    "Mastered a step-by-step logic model they can apply to any subject or challenge",
  ],
  bonusHeading: "A problem-solving model your child keeps forever.",
  bonusBody:
    "The biggest outcome of The Curiosity Box is not what your child learns about science — it's how they learn to think. Every scholar leaves with a practical, step-by-step problem-solving framework they can use to tackle tough school subjects, resolve everyday conflicts, and approach challenges with curiosity instead of fear.",
  schedule: {
    course: "The Curiosity Box",
    month: "February 2026",
    duration: "4 Weeks",
    sessionSchedule: "Saturdays · 1.5 hours per session",
    ages: "7–12",
    format: "Virtual — live Zoom sessions",
    investment: "₦50,000",
  },
  testimonial: {
    quote:
      "My daughter used to give up the moment something got hard. After The Curiosity Box, she started saying 'let me investigate this' when she hit a problem. That shift in mindset is everything.",
    author: "Parent, Discovery Haven",
  },
  faqSpecific: {
    q: "Does my child need to be good at science or maths?",
    a: "No prior science knowledge needed. The Curiosity Box is about thinking skills, not content recall. Children of all academic levels thrive in it.",
  },
  faqCommon: FAQ_COMMON,
  finalCTA:
    "February cohort spots are limited. Secure your child's place today.",
};

export default function CuriosityBox() {
  return <CourseLandingPage course={COURSE} />;
}
