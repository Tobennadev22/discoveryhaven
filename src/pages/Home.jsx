import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  fadeUp,
  fadeIn,
  stagger,
  slideLeft,
  slideRight,
  scaleIn,
  useViewport,
} from "../components/ui/Motion";
import {
  ArrowRight,
  Calendar,
  Users,
  BookOpen,
  Star,
  CheckCircle,
  SearchAlert,
} from "lucide-react";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { SectionLabel } from "../components/ui/SectionLabel";
import { Card } from "../components/ui/Card";
import { EnrollModal } from "../components/ui/EnrollModal";
import { COURSES, EVENTS, TESTIMONIALS, IMPACT_METRICS } from "../data/content";

const HERO_IMAGES = {
  left: "https://images.unsplash.com/photo-1497375638960-ca368c7231e4?w=600&q=80",
  center:
    "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&q=80",
  right:
    "https://images.unsplash.com/photo-1503676382389-4809596d5290?w=600&q=80",
};

const TRUST_LOGOS = [
  "British Council",
  "UNICEF",
  "UNESCO",
  "Ford Foundation",
  "Oxford",
];

export default function Home() {
  const [enrollEvent, setEnrollEvent] = useState(null);
  const [email, setEmail] = useState("");

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-dark">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=80')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/50 to-dark/80" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-20">
          <Badge color="aqua" className="mb-6">
            Where Intellectual Curiosity Meets Radical Confidence
          </Badge>
          <h1 className="font-cherry text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-6 text-shadow">
            Every Child Deserves
            <br />
            to Come Alive
          </h1>
          <p className="text-white/80 font-body text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Discovery Haven builds confident thinkers, fearless storytellers,
            and curious leaders through transformative after-school programmes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="primary"
              onClick={() => (window.location.href = "/haven-academy")}
            >
              Explore Our Courses <ArrowRight size={18} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => (window.location.href = "/haven-tribe")}
            >
              Join the Haven Tribe
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${i === 0 ? "bg-aqua" : "bg-white/30"}`}
            />
          ))}
        </div>
      </section>

      {/* POSITIONING STRIP */}
      <section className="bg-orange-700 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-cherry text-4xl lg:text-5xl text-white mb-6 leading-tight">
            We Don't Just Teach.
            <br />
            We Transform.
          </h2>
          <p className="text-gray-300 font-body text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
            Discovery Haven runs virtual and in-person learning programmes that
            build the skills children need most — not just for school, but for
            life. Confidence, communication, critical thinking, and emotional
            intelligence.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Badge color="dark">SDG 4 — Quality Education</Badge>
            <Badge color="dark">SDG 17 — Partnerships for the Goals</Badge>
          </div>
        </div>
      </section>

      {/* ─── POSITIONING ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid lg:grid-cols-2 gap-16 items-center"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            <motion.div variants={slideLeft}>
              <SectionLabel>OUR APPROACH</SectionLabel>
              <h2 className="font-cherry text-4xl lg:text-5xl text-slate-900 mb-6 leading-tight">
                Skills That Shape Tomorrow
              </h2>
              <p className="text-gray-500 font-body text-lg leading-relaxed mb-8">
                We don't just teach — we transform. Discovery Haven runs virtual
                and in-person programmes that build the skills children need
                most. Not just for school, but for life.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge color="yellow">SDG 4 — Quality Education</Badge>
                <Badge color="yellow">SDG 17 — Partnerships</Badge>
              </div>
            </motion.div>
            <motion.div
              variants={slideRight}
              className="grid grid-cols-1 gap-4"
            >
              {[
                {
                  title: "Join My EdSkills To Activate Your Learning",
                  bg: "bg-aqua",
                  text: "text-white",
                  icon: "✍️",
                },
                {
                  title: "Join Haven Academy to Activate Your Teaching",
                  bg: "bg-yellow",
                  text: "text-slate-900",
                  icon: "🎤",
                },
                {
                  title:
                    "Support Your Child's Learning Through Discovery Haven",
                  bg: "bg-aqua",
                  text: "text-white",
                  icon: "🪄",
                },
              ].map((c, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className={`${c.bg} ${c.text} rounded-2xl p-6 flex items-center justify-between group cursor-pointer hover:scale-[1.02] transition-transform`}
                  onClick={() =>
                    (window.location.href =
                      i === 0
                        ? "/haven-academy"
                        : i === 1
                          ? "/haven-tribe"
                          : "/contact")
                  }
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{c.icon}</span>
                    <p className="font-cherry text-lg leading-tight max-w-xs">
                      {c.title}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                    <ArrowRight size={18} />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── FOUR TRACKS ─── */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            <SectionLabel>OUR FOUR STUDIO TRACKS</SectionLabel>
            <h2 className="font-cherry text-4xl lg:text-5xl text-slate-900 mb-4">
              Haven Academy
            </h2>
            <p className="text-gray-600 font-body text-lg max-w-2xl mx-auto">
              Four carefully designed learning tracks that give your child the
              tools to think clearly, speak confidently, and lead with empathy.
            </p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {COURSES.map((course) => (
              <Card
                key={course.id}
                className="group hover:shadow-lg transition-all duration-300"
              >
                {/* <div
                  className="h-3 w-full"
                  style={{ backgroundColor: course.color }}
                /> */}
                <div className="p-8">
                  <div className="text-4xl mb-4">{course.icon}</div>
                  <h3 className="font-cherry text-2xl text-slate-900 mb-1">
                    {course.title}
                  </h3>
                  <p className="text-aqua font-bold font-body text-sm uppercase tracking-wide mb-3">
                    {course.subtitle}
                  </p>
                  <p className="text-gray-600 font-body text-sm leading-relaxed mb-4">
                    {course.description}
                  </p>
                  <div className="flex gap-3 flex-wrap mb-5">
                    <span className="bg-gray-100 rounded-full px-3 py-1 text-xs font-bold font-body text-gray-600">
                      Ages {course.ages}
                    </span>
                    <span className="bg-gray-100 rounded-full px-3 py-1 text-xs font-bold font-body text-gray-600">
                      {course.duration}
                    </span>
                    <span className="bg-gray-100 rounded-full px-3 py-1 text-xs font-bold font-body text-gray-600">
                      {course.format}
                    </span>
                  </div>
                  <Link
                    to="/haven-academy"
                    className="inline-flex items-center gap-1 text-aqua font-bold font-body text-sm hover:gap-2 transition-all"
                  >
                    Learn More <ArrowRight size={15} />
                  </Link>
                </div>
              </Card>
            ))}
          </motion.div>

          <div className="text-center">
            <Button
              variant="dark"
              size="lg"
              onClick={() => (window.location.href = "/haven-academy")}
            >
              View All Courses & Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* IMPACT METRICS */}
      <section className="bg-slate-50 py-16">
        <h4 className="text-center font-bold">IMPACT METRICS</h4>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {IMPACT_METRICS.map((m) => (
              <div key={m.label} className="text-center">
                <div className="font-cherry text-5xl lg:text-6xl text-slate-900 mb-2">
                  {m.number}
                </div>
                <div className="font-body text-slate-900/80 font-semibold text-sm uppercase tracking-wide">
                  {m.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-aqua">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-cherry text-4xl lg:text-5xl text-white mb-4">
              Parents Are Talking
            </h2>
            <p className="text-white/80 font-body text-lg">
              Real results from real families across Nigeria.
            </p>
          </div>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={16}
                      className="fill-yellow text-yellow"
                    />
                  ))}
                </div>
                <p className="text-gray-700 font-body text-base leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
                <div>
                  <p className="font-bold font-body text-slate-900">{t.name}</p>
                  <p className="text-gray-400 font-body text-sm">{t.role}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── EVENTS ─── */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            <SectionLabel>UPCOMING EVENTS</SectionLabel>
            <h2 className="font-cherry text-4xl lg:text-5xl text-slate-900 mb-4">
              Don't Miss What's Coming
            </h2>
            <p className="text-gray-500 font-body text-lg max-w-xl mx-auto">
              Cohorts fill fast. Secure your child's spot before registration
              closes.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            {EVENTS.map((ev) => (
              <motion.div key={ev.id} variants={scaleIn}>
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div
                    className="px-6 py-3 font-bold font-body text-sm flex justify-between items-center"
                    style={{
                      backgroundColor: ev.dateBarColor,
                      color: ev.dateBarTextColor,
                    }}
                  >
                    <span>{ev.date}</span>
                    <span>{ev.duration}</span>
                  </div>
                  <div className="p-7">
                    <h3 className="font-cherry text-xl text-slate-900 mb-3 leading-snug">
                      {ev.title}
                    </h3>
                    <p className="text-gray-500 font-body text-sm leading-relaxed mb-5">
                      {ev.description}
                    </p>
                    {ev.price && (
                      <p className="text-aqua font-bold font-body text-sm mb-5">
                        ₦{ev.price.toLocaleString()}
                      </p>
                    )}
                    <div className="flex flex-col gap-2">
                      <Button
                        variant="primary"
                        size="sm"
                        className="w-full"
                        onClick={() => setEnrollEvent(ev)}
                      >
                        {ev.type === "summit"
                          ? "Register Interest"
                          : "Register"}
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full text-gray-400 hover:text-slate-900"
                      >
                        <Calendar size={14} /> Add to Calendar
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
        className="py-24 bg-white"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={useViewport}
      >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="text-5xl mb-6">☕</div>
          <h2 className="font-cherry text-4xl lg:text-5xl text-slate-900 mb-4">
            Not Sure Yet? Let's Talk.
          </h2>
          <p className="text-gray-600 font-body text-lg leading-relaxed mb-4">
            Book a free 15-minute conversation with our founder. No pitch, no
            pressure — just an honest conversation about your child's learning
            journey.
          </p>
          <p className="text-gray-400 font-body text-sm mb-8">
            15-Minute Sprint · Zoom or Phone · No obligation
          </p>
          <Button
            variant="yellow"
            size="lg"
            onClick={() => (window.location.href = "/community-hour")}
          >
            Book Your Free 15-Minute Call →
          </Button>
        </div>
      </motion.section>

      {/* ─── JOIN COMMUNITY BANNER ─── */}
      <section className="py-16 bg-slate-800 mx-4 sm:mx-8 lg:mx-16 rounded-3xl mb-16 overflow-hidden relative">
        <div className="absolute top-4 left-8 w-16 h-16 rounded-full border-2 border-white/10" />
        <div className="absolute bottom-4 right-12 w-8 h-8 rounded-full border-2 border-yellow/30" />
        <div className="absolute top-1/2 right-8 -translate-y-1/2 w-12 h-12 rounded-full bg-aqua/20" />
        <motion.div
          className="text-center px-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={useViewport}
        >
          <div className="text-4xl mb-4">🌍</div>
          <h2 className="font-cherry text-4xl text-white mb-3">
            Join Our Community
          </h2>
          <p className="text-gray-400 font-body mb-8 max-w-md mx-auto">
            Get early access to new cohorts, the Discovery Letter, and community
            events — all free.
          </p>
          <Button
            variant="yellow"
            size="lg"
            onClick={() => (window.location.href = "/haven-tribe")}
          >
            Join Now →
          </Button>
        </motion.div>
      </section>

      {/* ─── NEWSLETTER ─── */}
      <section className="py-20 bg-slate-200">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-cherry text-4xl text-slate-900 mb-3">
            Stay in the Loop
          </h2>
          <p className="text-slate-900/70 font-body text-lg mb-8">
            Get the Discovery Letter — weekly insights on child development,
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
            <input
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-4 rounded-full font-body text-slate-900 bg-white border-0 focus:outline-none focus:ring-2 focus:ring-dark"
            />
            <Button type="submit" variant="dark" size="lg">
              Join the Dispatch
            </Button>
          </form>
          <p className="text-slate-900/50 font-body text-xs mt-4">
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
