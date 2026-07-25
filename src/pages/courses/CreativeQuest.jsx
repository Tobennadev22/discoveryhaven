import CourseLandingPage from "./CourseLandingPage";
import heroImg from "../../assets/CreativeQuest1.jpg";
import centerStageImg from "../../assets/CreativeQuest2.jpg";
import splitLeftImg from "../../assets/CreativeQuest3.jpg";
import splitRightImg from "../../assets/CreativeQuest4.jpg";
import showcaseImg from "../../assets/CreativeQuest5.jpg";
import journeyLeftImg from "../../assets/CreativeQuest6.jpg";
import journeyRightImg from "../../assets/CreativeQuest7.jpg";

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
  paymentUrl: "https://paystack.com/pay/dh-creative-quest-2026",
  tag: "Haven Academy · Writing & Storytelling Studio",
  headline: "ChatGPT can write an essay. It cannot invent a universe.",
  subheadline: "This August, your child becomes a published author.",
  heroImage: heroImg,
  heroCta: "Secure Your Child's Spot — ₦75,000",
  smallText: "Limited spots · August 2026 Cohort · Starts Soon",
  centerStageImage: centerStageImg,
  centerStageRemark: "The blank page stops here!",
  splitLeftImage: splitLeftImg,
  splitLeftAlt: "What is Creative Quest?",
  splitRightImage: splitRightImg,
  splitRightAlt: "They do not lack talent. They just lack the map.",
  splitCta: "Reserve a Seat Today",
  showcaseHeadline: "Real Books. Real Young Authors.",
  showcaseImage: showcaseImg,
  showcaseBooks: [
    {
      title: "The F3 Time Travel Adventure",
      author: "by Zika",
      gradient: "from-aqua to-cyan-600",
    },
    {
      title: "Bark and Whisker's Great Contest",
      author: "",
      gradient: "from-amber-400 to-orange-500",
    },
    {
      title: "The Hardest Choice",
      author: "",
      gradient: "from-crimson to-rose-700",
    },
    {
      title: "The Girl Who Found the Flying Book",
      author: "by Sochikaima",
      gradient: "from-violet-500 to-fuchsia-600",
    },
  ],
  showcaseRemark: "Your child's name belongs on a cover this August!",
  journeyLeftImage: journeyLeftImg,
  journeyLeftAlt: "The 6-Week Journey",
  journeyRightImage: journeyRightImg,
  journeyRightAlt: "What Your Child Gains",
  problemHeading: "Does your child struggle to put their thoughts into words?",
  problemBody:
    'Most children are taught grammar rules and told to "write an essay." Few are ever taught how to actually think like a writer — how to build a world, create a character worth rooting for, and structure a story that keeps people reading. That\'s the gap Creative Quest closes.',
  whatItIsHeading: "A writing studio, not a writing class.",
  whatItIsBody:
    "Creative Quest is a hands-on storytelling lab. Instead of drills and worksheets, your child dives into the real mechanics of fiction and non-fiction writing — building fictional worlds, narrating real events, creating memorable characters, and mapping out exciting plots, guided by instructors who make the process feel like play.",
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
    sessionSchedule: "Fridays · 2 hours per session",
    ages: "7–16",
    grouping: "Classes grouped by age: 7–11 and 12–16",
    format: "Virtual — live Zoom sessions",
    investment: "₦75,000",
  },
  testimonial: {
    quote:
      "My daughter has always loved stories but never thought she could write her own. After Discovery Haven, she has written three more stories on her own at home. She calls herself an author now.",
    author: "Parent, Discovery Haven",
  },
  faqSpecific: [
    {
      q: "Does my child need to already be a good writer?",
      a: "Not at all. Creative Quest is built for beginners and confident writers alike. Every child grows at their own pace.",
    },
    {
      q: "How are the age groups structured?",
      a: "Classes are split into two batches — ages 7 to 11 and ages 12 to 16. Your child will be placed in the right group after enrolment.",
    },
  ],
  faqCommon: FAQ_COMMON,
  finalCTA: "Spots for August are limited. Secure your child's place today.",
};

export default function CreativeQuest() {
  return <CourseLandingPage course={COURSE} />;
}
