import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Star,
  Coffee,
  Globe,
  PenLine,
  Mic2,
  SearchCheck,
  Brain,
} from "lucide-react";
import havenVideoLp from "../assets/discoveryhaven-LP-video.mp4";
import {
  fadeUp,
  fadeIn,
  stagger,
  slideLeft,
  slideRight,
  scaleIn,
  useViewport,
} from "../components/ui/Motion";
import { Button } from "../components/ui/Button";
import { SectionLabel } from "../components/ui/SectionLabel";
import { Card } from "../components/ui/Card";
import { EnrollModal } from "../components/ui/EnrollModal";
import { COURSES, EVENTS, TESTIMONIALS, IMPACT_METRICS } from "../data/content";
import discoveryhavenHeroImg from "../assets/discoveryhaven-Hero1.jpg";
import discoveryhavenHeroImg1 from "../assets/discoveryhaven-haventribe.jpg";

function TypingText({ text, className }) {
  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const [displayed, setDisplayed] = useState(reduceMotion ? text : "");
  const [done, setDone] = useState(reduceMotion);

  useEffect(() => {
    if (reduceMotion) return;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(id);
        setDone(true);
      }
    }, 60);
    return () => clearInterval(id);
  }, [text, reduceMotion]);

  return (
    <span className={className} aria-label={text}>
      <span aria-hidden="true">
        {displayed}
        {!done && <span className="animate-pulse">|</span>}
      </span>
    </span>
  );
}

const COURSE_ICONS = { PenLine, Mic2, SearchCheck, Brain };
const COURSE_ROUTES = {
  "creative-quest": "/courses/creative-quest",
  "loud-fearless": "/courses/loud-fearless",
  "curiosity-box": "/courses/curiosity-box",
  "eq-lab": "/courses/eq-lab",
};

const SDG_CARDS = [
  {
    number: "SDG 4",
    title: "Quality Education",
    desc: "We ensure inclusive and equitable quality education by providing creative, skills-based learning programmes that go beyond the traditional classroom.",
    card: "bg-aqua text-dark",
    chip: "bg-white/40",
    body: "text-dark/80",
    link: "decoration-white",
  },
  {
    number: "SDG 17",
    title: "Partnerships for the Goals",
    desc: "We build purposeful relationships with schools, publishers, institutional partners, and the broader community to amplify our impact across Africa.",
    card: "bg-cocoa text-white",
    chip: "bg-white/10",
    body: "text-white/75",
    link: "text-ember decoration-ember",
  },
];

export default function Home() {
  const [enrollEvent, setEnrollEvent] = useState(null);
  const [email, setEmail] = useState("");

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="bg-cream pt-32 lg:pt-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div
            className="text-center"
            variants={fadeIn}
            initial="hidden"
            animate="show"
          >
            <SectionLabel>Where children come alive</SectionLabel>
          </motion.div>

          <motion.h1
            className="font-cherry text-h1 text-dark text-center mt-2 mb-7"
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            Every Child Deserves
            <br />
            <TypingText
              text="to Come Alive"
              className="bg-gradient-to-r from-amber-300 to-cyan-400 bg-clip-text text-transparent"
            />
          </motion.h1>

          <motion.p
            className="font-body text-lead text-dark/70 text-center max-w-prose mx-auto mb-10"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.15 }}
          >
            Discovery Haven builds confident thinkers, fearless storytellers,
            and curious leaders through transformative after-school programmes
            designed for children aged 4–15.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16 lg:mb-20"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.25 }}
          >
            <Button
              size="lg"
              variant="primary"
              onClick={() => (window.location.href = "/haven-academy")}
            >
              Explore our courses <ArrowRight size={18} />
            </Button>
            <Button
              size="lg"
              variant="outline-dark"
              onClick={() => (window.location.href = "/community-hour")}
            >
              Book a free 20-min call
            </Button>
          </motion.div>

          {/* ── IMAGE COLLAGE ── */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 items-stretch"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <motion.div
              variants={slideLeft}
              className="relative rounded-4xl overflow-hidden h-[340px] md:h-[440px] lg:h-[520px]"
            >
              <img
                src={discoveryhavenHeroImg}
                alt="Children smiling on a Discovery Haven outing"
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-[240px] bg-white rounded-2xl shadow-lift p-4">
                <p className="font-body font-extrabold text-dark text-[0.9375rem] leading-snug">
                  Learn anytime, anywhere with our online programmes
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-4 lg:gap-5 md:h-[440px] lg:h-[520px]"
            >
              <div className="rounded-4xl p-7 flex flex-col justify-between gap-8 flex-1 bg-yellow text-dark">
                <div className="flex -space-x-2.5" aria-hidden="true">
                  {["bg-aqua", "bg-crimson", "bg-dark"].map((bg) => (
                    <span
                      key={bg}
                      className={`w-10 h-10 rounded-full border-[3px] border-yellow ${bg}`}
                    />
                  ))}
                  <span className="w-10 h-10 rounded-full border-[3px] border-yellow bg-white flex items-center justify-center font-body font-extrabold text-xs text-dark">
                    40+
                  </span>
                </div>
                <div>
                  <p className="font-cherry text-h2">Professional Educators</p>
                  <p className="font-body font-bold text-dark/70 text-[0.9375rem] mt-2">
                    Trained, vetted, and passionate
                  </p>
                </div>
              </div>

              <div className="rounded-4xl p-7 flex flex-col justify-between gap-6 flex-1 bg-cocoa text-white">
                <p className="font-cherry text-h3">
                  Every child deserves the chance to learn
                </p>
                <p className="font-body font-bold text-white/60 text-sm">
                  Virtual studios for ages 7 to 16
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={slideRight}
              className="relative rounded-4xl overflow-hidden h-[340px] md:h-[440px] lg:h-[520px]"
            >
              <img
                src={discoveryhavenHeroImg1}
                alt="A Discovery Haven group of children and educators"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <Link
                to="/courses/loud-fearless"
                className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl shadow-lift p-4 flex items-center justify-between gap-3 group"
              >
                <div>
                  <p className="font-body font-extrabold text-h5 text-dark">
                    Loud & Fearless
                  </p>
                  <p className="text-dark/60 font-body font-semibold text-sm">
                    Public speaking · 6 weeks
                  </p>
                </div>
                <span className="w-10 h-10 rounded-full bg-dark flex items-center justify-center flex-shrink-0 transition-transform group-hover:translate-x-0.5">
                  <ArrowRight size={16} className="text-white" />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* ── REACH STRIP ── */}
        <div className="marquee mt-16 lg:mt-20 bg-dark py-7 overflow-hidden">
          <p className="sr-only">2,400+ children reached since launch</p>
          {/* Two identical halves: the track slides left by exactly one half,
              so the loop is seamless. */}
          <div className="marquee-track flex w-max" aria-hidden="true">
            {[0, 1].map((half) => (
              <div key={half} className="flex shrink-0">
                {Array.from({ length: 4 }).map((_, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-8 pr-8 font-cherry text-h3 whitespace-nowrap text-white"
                  >
                    <span>
                      <span className="text-yellow">2,400+</span> children
                      reached since launch
                    </span>
                    <span className="text-aqua">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── POSITIONING ─── */}
      <section className="py-20 md:py-28 bg-canvas">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div
            className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            <motion.div variants={slideLeft}>
              <SectionLabel>Our approach</SectionLabel>
              <h2 className="font-cherry text-h2 text-dark mb-6">
                Skills That Shape Tomorrow
              </h2>
              <p className="font-body text-lead text-dark/70 max-w-prose mb-8">
                We don't just teach, we transform. Discovery Haven runs virtual
                and in-person programmes that build the skills children need
                most. Not just for school, but for life.
              </p>
              <Button
                variant="outline-dark"
                onClick={() => (window.location.href = "/about")}
              >
                Meet Discovery Haven
              </Button>
            </motion.div>
            <motion.div variants={slideRight} className="flex justify-center">
              {/* Source footage is portrait (shot vertically) - aspect-video
                  (16:9) here would force a landscape crop that cuts off
                  faces, so this matches the actual 9:16 content instead. */}
              <div className="relative w-[calc(100%-1rem)] max-w-sm">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 translate-x-4 translate-y-4 rounded-4xl bg-yellow"
                />
                <video
                  className="relative w-full rounded-4xl aspect-[9/16] object-cover bg-dark border-2 border-dark"
                  controls
                  preload="metadata"
                >
                  <source src={havenVideoLp} type="video/mp4" />
                </video>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── FOUR TRACKS ─── */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div
            className="text-center mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            <SectionLabel>Our four studio tracks</SectionLabel>
            <h2 className="font-cherry text-h2 text-dark mb-5">
              Haven Academy
            </h2>
            <p className="font-body text-lead text-dark/70 max-w-prose mx-auto">
              Four carefully designed learning tracks that give your child the
              tools to think clearly, speak confidently, and lead with empathy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {COURSES.map((course) => {
              const Icon = COURSE_ICONS[course.icon];
              return (
                <Card key={course.id} className="flex flex-col p-7">
                  {Icon && (
                    <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-aqua/15 text-dark">
                      <Icon size={24} />
                    </span>
                  )}
                  <h3 className="font-cherry text-h3 text-dark mb-2">
                    {course.title}
                  </h3>
                  <p className="font-body font-bold text-dark/55 text-sm mb-4">
                    {course.subtitle}
                  </p>
                  <p className="font-body text-dark/70 text-[0.9375rem] leading-relaxed mb-6">
                    {course.description}
                  </p>
                  <div className="flex gap-2 flex-wrap mb-7 mt-auto">
                    {[`Ages ${course.ages}`, course.duration, course.format].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="bg-cream rounded-full px-3 py-1 text-xs font-bold font-body text-dark/70"
                        >
                          {tag}
                        </span>
                      ),
                    )}
                  </div>
                  <Link
                    to={COURSE_ROUTES[course.id] || "/haven-academy"}
                    className="inline-flex w-fit items-center gap-1.5 font-body font-extrabold text-dark text-[0.9375rem] underline decoration-aqua decoration-[3px] underline-offset-[6px] hover:gap-2.5 transition-all"
                  >
                    See the course <ArrowRight size={16} />
                  </Link>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <Button
              variant="dark"
              size="lg"
              onClick={() => (window.location.href = "/haven-academy")}
            >
              View all courses and pricing
            </Button>
          </div>
        </div>
      </section>

      {/* ─── IMPACT METRICS ─── */}
      <section className="bg-canvas py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center">
          <SectionLabel>Impact so far</SectionLabel>
          <dl className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-y-10 md:divide-x md:divide-dark/10">
            {IMPACT_METRICS.map((m) => (
              <div key={m.label} className="px-4 flex flex-col">
                <dt className="font-body font-bold text-dark/60 text-sm mt-2">
                  {m.label}
                </dt>
                <dd className="order-first font-cherry text-h1 text-dark">{m.number}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ─── SDG ALIGNMENT ─── */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div
            className="text-center mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            <SectionLabel>Global alignment</SectionLabel>
            <h2 className="font-cherry text-h2 text-dark mb-5 max-w-3xl mx-auto">
              Aligned to the UN Sustainable Development Goals
            </h2>
            <p className="font-body text-lead text-dark/70 max-w-prose mx-auto">
              Every programme we run is purposefully designed around two global
              frameworks for change.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            {SDG_CARDS.map((sdg) => (
              <motion.div
                key={sdg.number}
                variants={scaleIn}
                className={`${sdg.card} rounded-4xl p-8 lg:p-10 flex flex-col gap-5`}
              >
                <span
                  className={`${sdg.chip} rounded-full px-4 py-1.5 w-fit font-body font-extrabold text-sm`}
                >
                  {sdg.number}
                </span>
                <div>
                  <h3 className="font-cherry text-h3 mb-3">{sdg.title}</h3>
                  <p className={`font-body leading-relaxed ${sdg.body}`}>
                    {sdg.desc}
                  </p>
                </div>
                <Link
                  to="/advocacy"
                  className={`mt-auto inline-flex w-fit items-center gap-2 font-body font-extrabold underline decoration-[3px] underline-offset-[6px] ${sdg.link} hover:gap-3 transition-all`}
                >
                  How we work towards {sdg.number} <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-20 md:py-28 bg-aqua">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <h2 className="font-cherry text-h2 text-dark mb-4">
              Parents Are Talking
            </h2>
            <p className="font-body text-lead text-dark/75">
              Real results from real families across Nigeria.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.name}
                className="bg-white rounded-4xl p-8 flex flex-col border-2 border-dark shadow-press"
              >
                <div className="flex gap-1 mb-5" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={18}
                      className="fill-yellow text-dark"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>
                <blockquote className="font-body text-[1.0625rem] leading-relaxed text-dark/80 mb-8">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-auto">
                  <p className="font-body font-extrabold text-dark">{t.name}</p>
                  <p className="font-body text-sm text-dark/55">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EVENTS ─── */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div
            className="text-center mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            <SectionLabel>Upcoming events</SectionLabel>
            <h2 className="font-cherry text-h2 text-dark mb-5">
              Don't Miss What's Coming
            </h2>
            <p className="font-body text-lead text-dark/70 max-w-prose mx-auto">
              Cohorts fill fast. Secure your child's spot before registration
              closes.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            {EVENTS.map((ev) => (
              <motion.div key={ev.id} variants={scaleIn}>
                <Card className="h-full flex flex-col">
                  <div
                    className="px-7 py-3.5 font-extrabold font-body text-sm flex justify-between items-center"
                    style={{
                      backgroundColor: ev.dateBarColor,
                      color: ev.dateBarTextColor,
                    }}
                  >
                    <span>{ev.date}</span>
                    <span>{ev.duration}</span>
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <h3 className="font-cherry text-h3 text-dark mb-3">
                      {ev.title}
                    </h3>
                    <p className="text-dark/65 font-body text-[0.9375rem] leading-relaxed mb-6">
                      {ev.description}
                    </p>
                    {ev.price && (
                      <p className="font-cherry text-h3 text-dark mb-6 mt-auto">
                        ₦{ev.price.toLocaleString()}
                      </p>
                    )}
                    <div className="flex flex-col gap-2">
                      <Button
                        variant="primary"
                        className="w-full"
                        onClick={() => setEnrollEvent(ev)}
                      >
                        {ev.type === "summit" ? "Register interest" : "Register"}
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full text-dark/60 hover:text-dark"
                      >
                        <Calendar size={14} /> Add to calendar
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── COMMUNITY HOUR CTA ─── */}
      <motion.section
        className="py-20 md:py-28 bg-canvas"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={useViewport}
      >
        <div className="max-w-3xl mx-auto px-5 text-center">
          <span className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-full bg-yellow">
            <Coffee size={30} className="text-dark" />
          </span>
          <h2 className="font-cherry text-h2 text-dark mb-5">
            Not Sure Yet? Let's Talk.
          </h2>
          <p className="font-body text-lead text-dark/70 max-w-prose mx-auto mb-4">
            Book a free 20-minute conversation with our founder. No pitch, no
            pressure, just an honest conversation about your child's learning
            journey.
          </p>
          <p className="text-dark/50 font-body font-semibold text-sm mb-9">
            20 minutes on Zoom or phone, with no obligation
          </p>
          <Button
            variant="yellow"
            size="lg"
            onClick={() => (window.location.href = "/community-hour")}
          >
            Book your free 20-minute call
          </Button>
        </div>
      </motion.section>

      {/* ─── JOIN COMMUNITY BANNER ─── */}
      <section className="px-4 sm:px-8 pb-20 md:pb-28 bg-canvas">
        <motion.div
          className="relative max-w-7xl mx-auto overflow-hidden rounded-4xl bg-cocoa px-6 py-16 md:py-20 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={useViewport}
        >
          <div aria-hidden="true" className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-aqua/15" />
          <div aria-hidden="true" className="absolute -bottom-12 -right-6 w-48 h-48 rounded-full bg-yellow/10" />
          <div className="relative">
            <Globe size={40} className="text-aqua mx-auto mb-6" />
            <h2 className="font-cherry text-h2 text-white mb-4">
              Join Our Community
            </h2>
            <p className="font-body text-lead text-white/65 max-w-md mx-auto mb-9">
              Get early access to new cohorts, the Discovery Letter, and
              community events, and it's all free.
            </p>
            <Button
              variant="ember"
              size="lg"
              onClick={() => (window.location.href = "/haven-tribe")}
            >
              Join the Haven Tribe
            </Button>
          </div>
        </motion.div>
      </section>

      {/* ─── NEWSLETTER ─── */}
      <section className="py-20 md:py-24 bg-yellow">
        <div className="max-w-2xl mx-auto px-5 text-center">
          <h2 className="font-cherry text-h2 text-dark mb-4">
            Stay in the Loop
          </h2>
          <p className="font-body text-lead text-dark/75 mb-9">
            Get the Discovery Letter for weekly insights on child development,
            creative learning, and early programme access.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              setEmail("");
              alert("You're on the list!");
            }}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-3.5 rounded-full font-body text-dark bg-white border-2 border-dark placeholder:text-dark/40 focus:outline-none focus-visible:ring-4 focus-visible:ring-aqua/60"
            />
            <Button type="submit" variant="dark" size="lg">
              Subscribe
            </Button>
          </form>
          <p className="text-dark/60 font-body font-semibold text-sm mt-5">
            We respect your privacy and your child's.
          </p>
        </div>
      </section>

      <EnrollModal
        isOpen={!!enrollEvent}
        onClose={() => setEnrollEvent(null)}
        event={enrollEvent}
      />
    </>
  );
}
