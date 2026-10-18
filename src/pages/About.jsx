import { useState } from "react";
import { Download, FileText } from "lucide-react";
import { Button } from "../components/ui/Button";
import { SectionLabel } from "../components/ui/SectionLabel";
import {
  motion,
  fadeUp,
  stagger,
  slideLeft,
  slideRight,
  scaleIn,
  useViewport,
} from "../components/ui/Motion";
import FounderImg from "../assets/stellaChibuikeEzike.jpg";
import FaithImg from "../assets/faithjosephutuat.jpg";
import ElizabethImg from "../assets/Elizabeth.jpeg";
import companyProfilePdf from "../assets/Discovery Haven — Company Profile.pdf";
import discoveryHavenLogo from "../assets/dh.png";

const VALUES = [
  {
    title: "Autonomy",
    desc: "We believe every child has a unique voice, a unique pace, and a unique way of making sense of the world. We do not mould children into a standard shape. We create the conditions for them to discover and develop their own.",
  },
  {
    title: "Intellectual Integrity",
    desc: "We train young thinkers to seek truth over trends, ask real questions, and build arguments on evidence rather than assumption. Thinking well is a skill. We teach it deliberately.",
  },
  {
    title: "Emotional Sovereignty",
    desc: "We believe that a child who knows how to manage their emotions, navigate conflict, and lead with empathy is better equipped for life than any exam result could ever make them. We teach self-regulation not as a soft skill but as a core life competency.",
  },
  {
    title: "Identity and Belonging",
    desc: "We create spaces where children know they are seen, valued, and celebrated, not for what they achieve but for who they are. Discovery Haven is a place where every child belongs.",
  },
];

const TEAM = [
  {
    name: "Faith Joseph Utuat",
    role: "Lead Researcher & Executive Assistant",
    image: FaithImg,
    bio: "Faith is a true scholar of human data, the kind of thinker who looks past raw numbers to find the real human stories hidden inside them. With a First-Class Honours in Medical Biochemistry and an MSc in Public Health, by all conventional metrics, Faith knows how to excel in the rigorous world of advanced statistics, epidemiology, and systems design. But like Discovery Haven, Faith holds a deep conviction that data and intelligence are meaningless if they are not anchored to a clear identity and a purpose that serves people. At Discovery Haven, Faith applies that exact scientific rigor to our curriculum design and organizational framework. She ensures that every program we build is not just creative, but deeply evidence-based and structured for true cognitive and emotional growth. As an author herself (Legacy of Loss, 2025), she understands how to translate complex, heavy ideas into clear narratives that children and families can connect with. Faith is driven by a single goal: building clean, honest systems and infrastructures where young thinkers can safely discover exactly who they were designed to be.",
  },
  {
    name: "Barimah Elizabeth",
    role: "Resident Facilitator",
    image: ElizabethImg,
    imagePosition: "center 15%",
    bio: "Barimah Elizabeth is an education professional, teacher, tutor, life coach, and advocate against gender-based violence. She holds a Diploma in Law, a Bachelor of Education (B.Ed.) in Early Childhood Education, and a Master's degree in Educational Administration and Planning. With extensive experience as a teacher, coordinator, and educational advisor, she is passionate about early childhood education, lifelong learning, and raising the total child. She facilitates impactful learning both physically and virtually.",
  },
];

function FounderStorySection() {
  const [expanded, setExpanded] = useState(false);
  return (
    <section id="founders-story" className="bg-dark py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            <SectionLabel className="text-yellow">Founder's story</SectionLabel>
            <h2 className="font-cherry text-h2 text-white mb-6 mt-2">
              The Story Behind Discovery Haven
            </h2>
            <p className="text-gray-300 font-body text-lead mb-5">
              Stella Chibuike-Ezike was the child who loved learning. She read voraciously, excelled academically, and was by every measure a true scholar. But as she grew, she recognised something that no grade had taught her, which is that knowing a lot of information is not the same as knowing yourself. That academic success, without identity, without voice, without emotional tools, leaves a child only partially prepared for the world they are walking into.
            </p>

            {expanded && (
              <>
                <p className="text-gray-300 font-body text-lead mb-5">
                  That recognition became a conviction. And that conviction became Discovery Haven.
                </p>
                <p className="text-gray-300 font-body text-lead mb-5">
                  Stella built Discovery Haven not just as an educator but as a mother. Her two daughters, Zika and Kaima, are living proof of her methodology because they are children who are growing up knowing who they are, using their voices, and already daring to make their mark. Every programme Discovery Haven builds is rooted in the belief that potential is not something a child develops later. It is something that must be nurtured now, in the early years, before the world tells them who they should be.
                </p>
                <p className="text-gray-300 font-body text-lead mb-8">
                  Stella is a family life educator, author of <span className="italic">Family Time Unplugged: Play, Connect, Explore</span>, and creator of the Shine Bright Affirmation Deck, which contains 150 identity-building cards for children aged 4 to 12. She has spent over a decade studying how children learn, grow, and discover themselves, and Discovery Haven is the fullest expression of that work.
                </p>
                <p className="text-aqua font-body text-sm italic mb-5">
                  Her story is not separate from her work. It is the reason for it.
                </p>
              </>
            )}

            <button
              onClick={() => setExpanded((e) => !e)}
              className="font-cherry text-aqua text-lg hover:text-aqua/70 transition-colors"
            >
              {expanded ? "See less ↑" : "See more ↓"}
            </button>
          </motion.div>
          <motion.div
            className="flex flex-col items-center text-center"
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            <img
              src={FounderImg}
              alt="Stella Chibuike-Ezike"
              loading="lazy"
              decoding="async"
              width="288"
              height="288"
              className="rounded-full w-72 h-72 object-cover mb-6 ring-4 ring-yellow/30"
            />
            <h3 className="font-cherry text-h3 text-white mb-1">Stella Chibuike-Ezike</h3>
            <p className="text-yellow font-bold font-body text-sm">
              Founder, Discovery Haven Kids Co. Ltd
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="bg-dark pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <motion.div
          className="max-w-4xl mx-auto px-4 text-center"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <SectionLabel className="text-aqua">
            Discovery Haven · Our Story, Mission &amp; People
          </SectionLabel>
          <h1 className="font-cherry text-h1 bg-gradient-to-r from-amber-200 to-cyan-400 bg-clip-text text-transparent mb-6">
            We Believe Every Child Carries Extraordinary Potential. Our Job Is to Help Them Find It.
          </h1>
          <p className="text-gray-300 font-body text-lead max-w-3xl mx-auto mb-10">
            Discovery Haven was born out of a personal conviction. Stella Chibuike-Ezike was a true scholar, the child who read every book, studied every subject, and excelled academically. But she carried a quiet awareness that something was missing. The classroom gave her knowledge. It did not give her herself. It did not teach her who she was, what she stood for, or how to use her intelligence to make real change in the world. Discovery Haven exists so that no child has to wait until adulthood to discover those things. Every child has potential that deserves to be nurtured early, not just academically but wholly, so they can know their identity, dare to become whoever they are designed to be, and make real, lasting impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => document.getElementById("founders-story").scrollIntoView({ behavior: "smooth" })}
            >
              Meet Our Founder →
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => (window.location.href = "/haven-academy")}
            >
              Explore Our Programmes →
            </Button>
          </div>
        </motion.div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              variants={slideLeft}
              initial="hidden"
              whileInView="show"
              viewport={useViewport}
            >
              <SectionLabel>Our mission</SectionLabel>
              <h2 className="font-cherry text-h2 text-slate-900 mb-6 mt-2">
                Why We Exist
              </h2>
              <p className="text-gray-600 font-body text-lead">
                To nurture the whole child, beyond academics and beyond the classroom. We exist to help children discover who they are, develop the skills to think clearly and lead boldly, and step into the world with the confidence to make real change and lasting impact.
              </p>
            </motion.div>
            <motion.div
              variants={slideRight}
              initial="hidden"
              whileInView="show"
              viewport={useViewport}
            >
              <SectionLabel>Our vision</SectionLabel>
              <h2 className="font-cherry text-h2 text-slate-900 mb-6 mt-2">
                Where We Are Going
              </h2>
              <p className="text-gray-600 font-body text-lead">
                A world where every child, regardless of where they are born or how they learn, knows their identity, owns their voice, and dares to become exactly who they were designed to be.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 md:py-28 bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            <SectionLabel>Our core values</SectionLabel>
            <h2 className="font-cherry text-h2 text-slate-900 mb-4 mt-2">
              What We Stand For
            </h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            {VALUES.map((v) => (
              <motion.div
                key={v.title}
                variants={scaleIn}
                className="bg-cream rounded-3xl p-8"
              >
                <h3 className="font-cherry text-h3 text-aqua mb-3">{v.title}</h3>
                <p className="text-gray-600 font-body text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* COMPANY PROFILE */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-14 lg:gap-20 items-center">
            <motion.div
              variants={slideLeft}
              initial="hidden"
              whileInView="show"
              viewport={useViewport}
            >
              <SectionLabel>Our company profile</SectionLabel>
              <h2 className="font-cherry text-h2 text-slate-900 mb-6 mt-2">
                Discovery Haven in One Document
              </h2>
              <p className="text-gray-600 font-body text-lead max-w-prose mb-9">
                Download our company profile for a complete picture of who we
                are, what we offer, and how we work with families, schools,
                and partners.
              </p>
              <a
                href={companyProfilePdf}
                download="Discovery Haven - Company Profile.pdf"
                className="inline-flex items-center gap-2 rounded-full border-2 border-dark bg-aqua px-7 py-3.5 font-body text-[1.0625rem] font-extrabold text-dark shadow-press transition-[transform,box-shadow] duration-150 hover:-translate-y-px active:translate-y-1 active:shadow-none"
              >
                <Download size={20} />
                Download company profile
              </a>
              <p className="mt-5 font-body text-sm font-semibold text-dark/50">
                PDF, 5.9 MB
              </p>
            </motion.div>

            <motion.a
              href={companyProfilePdf}
              download="Discovery Haven - Company Profile.pdf"
              aria-label="Download the Discovery Haven company profile"
              className="group relative mx-auto block w-[calc(100%-1rem)] max-w-[16rem] sm:max-w-sm"
              variants={slideRight}
              initial="hidden"
              whileInView="show"
              viewport={useViewport}
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-4 translate-y-4 rotate-3 rounded-4xl bg-yellow"
              />
              <div className="relative flex aspect-[3/4] flex-col justify-between rounded-4xl border-2 border-dark bg-cocoa p-8 text-white transition-transform duration-300 group-hover:-rotate-1">
                <img src={discoveryHavenLogo} alt="" className="h-14 w-14 object-contain" />
                <div>
                  <p className="font-body text-sm font-extrabold text-aqua mb-3">
                    Discovery Haven Kids Co. Ltd
                  </p>
                  <p className="font-cherry text-h2 leading-none">
                    Company Profile
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 font-body text-sm font-bold text-white/60">
                    <FileText size={16} /> PDF
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ember text-dark transition-transform group-hover:translate-y-0.5">
                    <Download size={20} />
                  </span>
                </div>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* FOUNDER'S STORY */}
      <FounderStorySection />

      {/* MEET THE TEAM */}
      <section className="py-20 md:py-28 bg-canvas">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            <SectionLabel>Meet the team</SectionLabel>
            <h2 className="font-cherry text-h2 text-slate-900 mb-4 mt-2">
              The People Behind the Haven
            </h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            {TEAM.map((member) => (
              <motion.div
                key={member.name}
                variants={scaleIn}
                className="bg-cream rounded-3xl p-8"
              >
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{ objectPosition: member.imagePosition || "center" }}
                    className="w-[200px] h-[200px] rounded-2xl object-cover mb-5"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-2xl bg-aqua/10 flex items-center justify-center mb-5">
                    <span className="font-cherry text-2xl text-aqua">{member.name[0]}</span>
                  </div>
                )}
                <h3 className="font-cherry text-h3 text-slate-900 mb-1">{member.name}</h3>
                <p className="font-body text-xs font-bold text-aqua mb-4">{member.role}</p>
                <p className="text-gray-600 font-body text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-20 md:py-28 bg-cream">
        <motion.div
          className="max-w-3xl mx-auto px-4 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={useViewport}
        >
          <SectionLabel>Who we serve</SectionLabel>
          <h2 className="font-cherry text-h2 text-slate-900 mb-6 mt-2">
            Built for Every Curious Child
          </h2>
          <p className="text-gray-600 font-body text-lead mb-5">
            Discovery Haven is for children aged 7 to 16 across Nigeria and the diaspora. We serve children in two tracks, Track 1 for ages 7 to 11 and Track 2 for ages 12 to 16, so every scholar is learning alongside peers at the same developmental stage.
          </p>
          <p className="text-gray-600 font-body text-lead mb-10">
            We serve the quiet child who has never been given the right space to speak. The creative child who has been told to focus on the serious subjects. The academic child who excels at school but does not yet know who they are beyond their grades. The bold child who needs a structured challenge worthy of their energy. Whether your child is shy or outspoken, analytical or imaginative, there is a track at Discovery Haven designed for exactly where they are and exactly where they are going.
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => (window.location.href = "/haven-academy")}
          >
            Find the Right Programme →
          </Button>
        </motion.div>
      </section>
    </>
  );
}
