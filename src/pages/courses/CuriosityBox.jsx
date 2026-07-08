import CourseLandingPage from "./CourseLandingPage";

const FAQ_COMMON = [
  { q: "Is this in-person or virtual?", a: "Fully virtual, live on Zoom — your child can join from anywhere in the world." },
  { q: "What if my child misses a session?", a: "Session recordings are shared so your child never falls behind." },
  { q: "What if I'm not sure this is the right fit?", a: "Book a free 20-minute call with our founder before enrolling — we will help you decide." },
];

const COURSE = {
  slug: "curiosity-box",
  title: "The Curiosity Box",
  cohort: "February 2027",
  price: 50000,
  tag: "Haven Academy · Science, Art & Critical Thinking",
  headline: "The Curiosity Box: Where Your Child Thinks Like a Detective and Creates Like an Artist.",
  subheadline: "A 4-week exploration lab for ages 7–16. Classes run in two tracks — Track 1 for ages 7 to 11 and Track 2 for ages 12 to 16 — so every investigation is pitched at the right level of complexity. Your child will discover that the most powerful ideas live at the intersection of science and art.",
  smallText: "Limited spots · February 2027 Cohort · Starts Soon",
  problemHeading: "Does your child think science is boring — or that creativity and logic don't belong together?",
  problemBody: "Most children are taught to keep science and art in separate boxes. Science is facts, formulas, and right answers. Art is feelings, colours, and free expression. They are never shown what happens when the two collide. The Curiosity Box tears down that wall. Here, a child who loves drawing becomes a better logical thinker. A child who loves maths becomes a more expressive creator. Because the truth is — the greatest scientists were artists, and the greatest artists were scientists.",
  whatItIsHeading: "A virtual investigation lab where logic meets imagination.",
  whatItIsBody: "The Curiosity Box is a hands-on virtual exploration lab built on one powerful idea — the Science of Arts. Each session your child works as both a detective and a creator. They investigate real-world mysteries using logic, deduction, and scientific questioning. They analyse iconic works of art through a scientific lens and explore how the world's greatest creators were also its greatest thinkers. Every week your child leaves with sharper thinking, a broader perspective, and documented evidence of what they discovered.",
  outcomesHeading: "By the end of 4 weeks, your child will have:",
  outcomes: [
    "Investigated real-world mysteries using logic, deduction, and scientific reasoning",
    "Analysed iconic artworks and creative works through a scientific and critical lens",
    "Collaborated with peers to crack complex, gamified thinking challenges",
    "Discovered the powerful connection between scientific thinking and artistic expression",
    "Built a digital thinking portfolio documenting their investigations and discoveries",
  ],
  bonusHeading: "A digital portfolio that proves how they think.",
  bonusBody: "Every Curiosity Box scholar leaves with a digital portfolio documenting their 4-week journey — investigation notes, art analysis pieces, creative thinking maps, and ideas inspired by what they discovered. Not just a certificate. A real record of how their mind works — something they can look back on, build from, and be proud of.",
  schedule: {
    course: "The Curiosity Box",
    month: "February 2027",
    duration: "4 Weeks",
    sessionSchedule: "Saturdays · 1.5 hours per session",
    ages: "7–16",
    tracks: "Track 1 (ages 7–11) · Track 2 (ages 12–16)",
    format: "Virtual — live Zoom sessions",
    investment: "₦50,000",
  },
  testimonial: {
    quote: "I honestly didn't expect my son to connect with this programme the way he did. He's always been the artsy one in the family — we never thought of him as a science kid. After The Curiosity Box he told me science and art are the same thing. I didn't even know how to respond to that. He was absolutely right.",
    author: "Parent, Discovery Haven",
  },
  faqSpecific: [
    { q: "Does my child need to be good at science?", a: "Not at all. The Curiosity Box is designed for curious minds, not science experts. Children who love art often thrive here because they bring a creative perspective that makes their investigations richer and more original." },
    { q: "Does my child need to be good at art?", a: "No. Art in The Curiosity Box is a tool for analysis and expression, not a performance. There are no grades on how well they draw — only on how boldly they explore and express their thinking." },
    { q: "How are the tracks structured?", a: "Each course runs in two tracks. Track 1 is for children aged 7 to 11 and Track 2 is for children aged 12 to 16. After enrolment we will confirm which track your child is placed in based on their age." },
  ],
  faqCommon: FAQ_COMMON,
  finalCTA: "February spots are limited. Give your child the tools to think and create like no one else.",
};

export default function CuriosityBox() {
  return <CourseLandingPage course={COURSE} />;
}
