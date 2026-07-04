import CourseLandingPage from "./CourseLandingPage";

const FAQ_COMMON = [
  { q: "Is this in-person or virtual?", a: "Fully virtual, live on Zoom — your child can join from anywhere in the world." },
  { q: "What if my child misses a session?", a: "Session recordings are shared so your child never falls behind." },
  { q: "What if I'm not sure this is the right fit?", a: "Book a free 15-minute call with our founder before enrolling — we'll help you decide." },
];

const COURSE = {
  slug: "the-eq-lab",
  title: "The EQ Lab",
  cohort: "June 2026",
  price: 50000,
  tag: "Haven Academy · Emotional Intelligence & Leadership",
  headline: "The EQ Lab: Where Your Child Learns to Lead from the Inside Out.",
  subheadline: "A 4-week emotional intelligence course for ages 6–12. Your child will learn to understand their emotions, manage pressure, and build the relationship skills that open every door.",
  smallText: "Limited spots · June 2026 Cohort · Starts Soon",
  problemHeading: "Does your child struggle with big emotions, peer conflict, or giving up under pressure?",
  problemBody: "High grades will take a child far. But emotional intelligence will take them further. Most schools teach children what to know — very few teach them how to feel, how to respond, and how to lead. Children who cannot regulate their emotions, navigate conflict, or empathise with others will struggle no matter how smart they are. The EQ Lab gives them the missing half.",
  whatItIsHeading: "An intelligence lab for the skills schools don't teach.",
  whatItIsBody: "The EQ Lab is a warm, interactive course focused on emotional intelligence, self-regulation, and leadership. Through fun team simulations, empathy mapping exercises, and real-world leadership scenarios, children learn how to understand what they're feeling, why they're feeling it, how to respond instead of react, and how to lead others with clarity and kindness.",
  outcomesHeading: "By the end of 4 weeks, your child will have:",
  outcomes: [
    "Learned how the brain processes emotions like anger, fear, and excitement",
    "Practised empathy mapping — understanding how others think and feel",
    "Built tools for staying calm under pressure and managing big emotions",
    "Developed peaceful conflict resolution and leadership communication skills",
  ],
  bonusHeading: "Practical tools your child uses for the rest of their life.",
  bonusBody: "The EQ Lab does not just teach emotional intelligence as a concept — it gives children a concrete toolkit of behavioural strategies they can use immediately. Staying calm when frustrated. Resolving arguments with peers without adult intervention. Leading a group project with clarity and kindness. These tools compound over a lifetime.",
  schedule: {
    course: "The EQ Lab",
    month: "June 2026",
    duration: "4 Weeks",
    sessionSchedule: "Saturdays · 1.5 hours per session",
    ages: "6–12",
    format: "Virtual — live Zoom sessions",
    investment: "₦50,000",
  },
  testimonial: {
    quote: "The EQ Lab changed how my child handles conflict at home and at school. The tools she learned are things I wish I had been taught as a child. She now mediates disagreements between her siblings. I watch in amazement.",
    author: "Parent, EQ Lab Cohort 2025",
  },
  faqSpecific: { q: "Is this suitable for younger children in the 6–8 age range?", a: "Yes. The EQ Lab is designed to be age-inclusive — the content and facilitation adapts to where each child is developmentally. Younger children thrive in it." },
  faqCommon: FAQ_COMMON,
  finalCTA: "June cohort spots are limited. Give your child the skills that last a lifetime.",
};

export default function EQLab() {
  return <CourseLandingPage course={COURSE} />;
}
