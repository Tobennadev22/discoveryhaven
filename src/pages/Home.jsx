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
  Star,
  CheckCircle,
  Coffee,
  Globe,
} from "lucide-react";
import { Button } from "../components/ui/Button";
import { SectionLabel } from "../components/ui/SectionLabel";
import { Card } from "../components/ui/Card";
import { EnrollModal } from "../components/ui/EnrollModal";
import { COURSES, EVENTS, TESTIMONIALS, IMPACT_METRICS } from "../data/content";
import discoveryhavenHeroImg from "../assets/discoveryhaven-Hero1.jpg";
import discoveryhavenHeroImg1 from "../assets/discoveryhaven-haventribe.jpg";

export default function Home() {
  const [enrollEvent, setEnrollEvent] = useState(null);
  const [email, setEmail] = useState("");

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="bg-cream pt-12 pb-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* top label */}
          <motion.div
            className="flex justify-center mb-6"
            variants={fadeIn}
            initial="hidden"
            animate="show"
          >
            <span className="inline-flex items-center gap-2 bg-aqua/10 text-aqua text-xs font-bold font-body tracking-widest uppercase px-4 py-2 rounded-full">
              Where Children Come Alive
            </span>
          </motion.div>

          {/* heading */}
          <motion.h1
            className="font-cherry text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-slate-900 text-center leading-none mb-6"
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            Every Child Deserves
            <br />
            <span className="bg-gradient-to-r from-amber-200 to-cyan-400 bg-clip-text text-transparent">
              to Come Alive
            </span>
          </motion.h1>

          <motion.p
            className="text-gray-500 font-body text-lg sm:text-xl text-center max-w-2xl mx-auto mb-10 leading-relaxed"
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
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
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
              Explore Our Courses <ArrowRight size={18} />
            </Button>
            <Button
              size="lg"
              variant="outline-dark"
              onClick={() => (window.location.href = "/community-hour")}
            >
              Book a Free 15-Min Call
            </Button>
          </motion.div>

          {/* ── IMAGE COLLAGE ── */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            {/* LEFT — tall photo + bottom-left floating card */}
            <motion.div
              variants={slideLeft}
              className="relative rounded-3xl overflow-hidden h-[300px] md:h-[420px] lg:h-[500px]"
            >
              <img
                src={discoveryhavenHeroImg}
                alt="Child learning"
                className="w-full h-full object-cover"
              />
              {/* bottom-left white card — compact, speech-bubble style */}
              <div className="absolute bottom-5 left-5 bg-white rounded-2xl shadow-xl p-3.5 max-w-[200px]">
                <p className="font-bold font-body text-slate-900 text-xs leading-snug">
                  Learn anytime, anywhere with our online programmes
                </p>
                <div className="mt-2.5 flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-aqua flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-[8px] font-bold">DH</span>
                  </div>
                  <span className="font-body text-[10px] text-gray-400 font-semibold">
                    Discovery Haven
                  </span>
                </div>
              </div>
            </motion.div>

            {/* CENTER — two stacked colour cards, no photo */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-4 h-[420px] md:h-[420px] lg:h-[500px]"
            >
              {/* TOP — lime green card with avatar row */}
              <div
                className="rounded-3xl p-6 flex flex-col justify-between flex-1 bg-yellow text-slate-900"
                // style={{ backgroundColor: "#8bc34a" }}
              >
                <div>
                  {/* overlapping avatar circles */}
                  <div className="flex items-center mb-1">
                    <div className="flex -space-x-2.5">
                      {[
                        { bg: "#8b5cf6", letter: "B" },
                        { bg: "#ec4899", letter: "C" },
                        { bg: "#06b6d4", letter: "D" },
                      ].map((av, i) => (
                        <div
                          key={i}
                          className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                          // style={{ backgroundColor: av.bg }}
                        >
                          {av.letter}
                        </div>
                      ))}
                      <div className="w-9 h-9 rounded-full border-2 border-white bg-white/30 flex items-center justify-center text-white text-xs font-bold">
                        40+
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="font-cherry text-3xl  leading-tight">
                    Professional
                  </p>
                  <p className="font-cherry text-3xl leading-tight">
                    Educators
                  </p>
                  <p className="font-body text-slate-700 text-xs mt-1.5">
                    Trained · Vetted · Passionate
                  </p>
                </div>
              </div>

              {/* BOTTOM — lavender card */}
              <div
                className="rounded-3xl p-6 flex flex-col justify-between flex-1 bg-orange-200"
                // style={{ backgroundColor: "orange.300" }}
              >
                <p className="font-cherry text-2xl text-slate-900 leading-snug">
                  Every child deserves the chance to learn
                </p>
                <div className="flex items-end justify-between mt-4">
                  <div className="text-5xl leading-none">🌸</div>
                  <span className="font-body text-[10px] font-bold text-slate-900/50 uppercase tracking-widest">
                    Discovery Haven
                  </span>
                </div>
              </div>
            </motion.div>

            {/* RIGHT — tall photo + bottom floating card */}
            <motion.div
              variants={slideRight}
              className="relative rounded-3xl overflow-hidden h-[300px] md:h-[420px] lg:h-[500px]"
            >
              <img
                src={discoveryhavenHeroImg1}
                alt="Child reading"
                className="w-full h-full object-cover"
              />
              {/* bottom white card — course pill style */}
              <div className="absolute bottom-5 left-5 right-5 bg-white rounded-2xl shadow-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-cherry text-base text-slate-900 leading-tight">
                      Loud & Fearless
                    </p>
                    <p className="text-gray-400 font-body text-[11px] mt-0.5">
                      For Ages 9–15
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-center">
                      <p className="font-cherry text-2xl text-slate-900 leading-none">
                        6
                      </p>
                      <p className="font-body text-[10px] text-gray-400 leading-tight">
                        Weeks
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-dark flex items-center justify-center flex-shrink-0">
                      <ArrowRight size={14} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ── STATS STRIP ── */}
        <div className="mt-12 bg-white border-t border-b border-gray-100 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="items-center justify-between gap-4"
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={useViewport}
            >
              <p className="font-cherry text-2xl text-slate-900 text-center">
                2,400+ Childern Reached Since Launch
              </p>
              {/* <div className="flex items-center gap-6 flex-wrap justify-center">
                {[
                  "British Council",
                  "UNICEF",
                  "UNESCO",
                  "Ford Foundation",
                  "Oxford",
                ].map((logo) => (
                  <span
                    key={logo}
                    className="text-gray-300 font-body font-bold text-sm tracking-wide"
                  >
                    {logo}
                  </span>
                ))}
              </div> */}
            </motion.div>
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
            </motion.div>
            <motion.div variants={slideRight}>
              <video
                className="w-full rounded-3xl aspect-video object-cover bg-dark"
                controls
                poster=""
              >
                <source src="" type="video/mp4" />
              </video>
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
        <SectionLabel className="text-center">IMPACT METRICS</SectionLabel>
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
          <div className="flex justify-center mb-6"><Coffee size={48} className="text-slate-900/40" /></div>
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
          <div className="flex justify-center mb-4"><Globe size={40} className="text-white/60" /></div>
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
