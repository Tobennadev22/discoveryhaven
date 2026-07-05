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
  slug: "creative-quest",
  title: "Creative Quest",
  cohort: "August 2026",
  price: 75000,
  tag: "Haven Academy · Writing Studio",
  headline: "Creative Quest: Where Your Child Becomes a Published Author.",
  subheadline:
    " A 6-week writing studio for ages 7–16. Classes run in two tracks — Track 1 for ages 7 to 11 and Track 2 for ages 12 to 16 — so your child learns alongside peers at the same developmental stage. They will write real stories, think like a storyteller, and see their work published in our Youth Literary Anthology.",
  smallText: "Limited spots · August 2026 Cohort · Starts Soon",
  problemHeading: "Does your child struggle to put their thoughts into words?",
  problemBody:
    'Most children are taught grammar rules and told to "write an essay." Few are ever taught how to actually think like a writer — how to build a world, create a character worth rooting for, and structure a story that keeps people reading. That\'s the gap Creative Quest closes.',
  whatItIsHeading: "A writing studio, not a writing class.",
  whatItIsBody:
    "Creative Quest is a hands-on storytelling lab. Instead of drills and worksheets, your child dives into the real mechanics of fiction and non-fiction writing — building fictional worlds, narrating real events, creating memorable characters, and mapping out exciting plots, guided by instructors who make every session feel like an adventure.",
  outcomesHeading: "By the end of 6 weeks, your child will have:",
  outcomes: [
    "Written original creative fiction, non-fiction, and flash fiction pieces",
    "Learned to edit their own work and give thoughtful feedback to peers",
    "Built a complete story from idea to final draft",
    "Discovered their own voice as a writer — not just followed a formula",
  ],
  bonusHeading: "Your child's story will be published. For real.",
  bonusBody:
    "At the end of the course, your child's final story will be officially published in the Discovery Haven Youth Literary Anthology — a permanent book in The Discovery Haven Book Series. Not a certificate. Not a printout. A real published book with their name in it, something they will treasure for the rest of their life.",
  schedule: {
    course: "Creative Quest",
    month: "August 2026",
    duration: "6 Weeks",
    sessionSchedule: "Saturdays · 2 hours per session",
    ages: "7–12",
    format: "Virtual — live Zoom sessions",
    investment: "₦75,000",
  },
  testimonial: {
    quote:
      "My daughter has always loved stories but never thought she could write her own. After Discovery Haven, she has written three more stories on her own at home. She calls herself an author now.",
    author: "Parent, Discovery Haven",
  },
  faqSpecific: {
    q: "Does my child need to already be a good writer?",
    a: "Not at all. Creative Quest is built for beginners and confident writers alike. Every child grows at their own pace.",
  },
  faqCommon: FAQ_COMMON,
  finalCTA: "Spots for August are limited. Secure your child's place today.",
};

export default function CreativeQuest() {
  return <CourseLandingPage course={COURSE} />;
}
