import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { usePaystack } from "../../hooks/usePaystack";
import { motion, fadeUp, stagger, scaleIn, useViewport } from "../../components/ui/Motion";
import discoveryHavenLogo from "../../assets/dh.png";

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      className="w-full text-left border border-gray-200 rounded-2xl p-5 hover:border-gray-300 transition-colors"
      onClick={() => setOpen((o) => !o)}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="font-bold font-body text-slate-900 text-sm">{q}</span>
        {open ? <ChevronUp size={18} className="text-gray-400 flex-shrink-0" /> : <ChevronDown size={18} className="text-gray-400 flex-shrink-0" />}
      </div>
      {open && <p className="mt-3 font-body text-gray-600 text-sm leading-relaxed">{a}</p>}
    </button>
  );
}

export default function CourseLandingPage({ course }) {
  const { pay } = usePaystack();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleEnrol = () => {
    if (!showForm) { setShowForm(true); return; }
    if (!email || !name) return;
    if (window.fbq) window.fbq("track", "InitiateCheckout", { content_name: course.title, value: course.price, currency: "NGN" });
    pay({
      email,
      amount: course.price,
      name,
      metadata: { course: course.title, cohort: course.cohort },
      onSuccess: () => {
        if (window.fbq) window.fbq("track", "Purchase", { content_name: course.title, value: course.price, currency: "NGN" });
        navigate(`/thank-you/${course.slug}`);
      },
    });
  };

  const EnrolButton = ({ variant = "yellow", label, className = "" }) => (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      {showForm && (
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
          <input
            type="text"
            placeholder="Parent's name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 px-4 py-3 rounded-full font-body text-slate-900 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-aqua text-sm"
          />
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-full font-body text-slate-900 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-aqua text-sm"
          />
        </div>
      )}
      <button
        onClick={handleEnrol}
        className={`px-8 py-4 rounded-full font-cherry text-lg font-bold transition-all hover:scale-105 active:scale-95 ${
          variant === "yellow" ? "bg-yellow text-dark" : "bg-aqua text-white"
        }`}
      >
        {showForm ? `Pay ₦${course.price.toLocaleString()} & Secure My Spot` : label || `Enrol My Child Now — ₦${course.price.toLocaleString()}`}
      </button>
    </div>
  );

  return (
    <div className="min-h-screen font-body">
      {/* LOGO ONLY HEADER */}
      <header className="bg-white border-b border-gray-100 py-4 px-6">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2">
            <img src={discoveryHavenLogo} alt="Discovery Haven" className="w-9 h-9" />
            <span className="font-cherry text-xl text-slate-900">Discovery Haven</span>
          </Link>
        </div>
      </header>

      {/* S1 — HERO */}
      <section className="bg-aqua py-24 px-4 text-center text-white">
        <motion.div
          className="max-w-3xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <span className="inline-block bg-yellow text-dark font-bold font-body text-xs tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            {course.tag}
          </span>
          <h1 className="font-cherry text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
            {course.headline}
          </h1>
          <p className="font-body text-white/90 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            {course.subheadline}
          </p>
          <EnrolButton variant="yellow" />
          <p className="mt-3 text-white/70 font-body text-xs">{course.smallText}</p>
        </motion.div>
      </section>

      {/* S2 — THE PROBLEM */}
      <section className="bg-white py-20 px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={useViewport}
        >
          <h2 className="font-cherry text-3xl lg:text-4xl text-slate-900 mb-6 leading-tight">
            {course.problemHeading}
          </h2>
          <p className="font-body text-gray-600 text-lg leading-relaxed">{course.problemBody}</p>
        </motion.div>
      </section>

      {/* S3 — WHAT IT IS */}
      <section className="bg-gray-50 py-20 px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={useViewport}
        >
          <h2 className="font-cherry text-3xl lg:text-4xl text-slate-900 mb-6 leading-tight">
            {course.whatItIsHeading}
          </h2>
          <p className="font-body text-gray-600 text-lg leading-relaxed">{course.whatItIsBody}</p>
        </motion.div>
      </section>

      {/* S4 — OUTCOMES */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            className="font-cherry text-3xl lg:text-4xl text-slate-900 mb-10 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            {course.outcomesHeading}
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            {course.outcomes.map((o, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                className="flex gap-3 items-start bg-gray-50 rounded-2xl p-5"
              >
                <CheckCircle size={20} className="text-aqua flex-shrink-0 mt-0.5" />
                <span className="font-body text-gray-700 text-sm leading-relaxed">{o}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* S5 — BONUS */}
      <section className="bg-aqua py-20 px-4 text-center text-white">
        <motion.div
          className="max-w-3xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={useViewport}
        >
          <span className="inline-block bg-white/20 text-white font-bold font-body text-xs tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            Bonus Outcome
          </span>
          <h2 className="font-cherry text-3xl lg:text-4xl text-white mb-6 leading-tight">
            {course.bonusHeading}
          </h2>
          <p className="font-body text-white/85 text-lg leading-relaxed">{course.bonusBody}</p>
        </motion.div>
      </section>

      {/* S6 — SCHEDULE & PRICING */}
      <section className="bg-white py-20 px-4">
        <motion.div
          className="max-w-lg mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={useViewport}
        >
          <h2 className="font-cherry text-3xl text-slate-900 mb-8 text-center">
            Schedule & Investment
          </h2>
          <div className="border-2 border-aqua rounded-2xl overflow-hidden">
            <div className="bg-aqua px-6 py-4">
              <p className="font-cherry text-2xl text-white text-center">{course.schedule.course}</p>
            </div>
            <div className="divide-y divide-gray-100">
              {[
                { label: "Month", value: course.schedule.month },
                { label: "Duration", value: course.schedule.duration },
                { label: "Schedule", value: course.schedule.sessionSchedule },
                { label: "Ages", value: course.schedule.ages },
                { label: "Format", value: course.schedule.format },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center justify-between px-6 py-4">
                  <span className="font-body text-sm font-bold text-gray-500 uppercase tracking-wide">{label}</span>
                  <span className="font-body text-sm font-bold text-slate-900">{value}</span>
                </div>
              ))}
              <div className="flex items-center justify-between px-6 py-4 bg-gray-50">
                <span className="font-body text-sm font-bold text-gray-500 uppercase tracking-wide">Investment</span>
                <span className="font-cherry text-2xl text-aqua">{course.schedule.investment}</span>
              </div>
            </div>
            <div className="px-6 py-5">
              <EnrolButton variant="aqua" label="Reserve My Child's Spot →" className="w-full" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* S7 — TESTIMONIAL */}
      <section className="bg-dark py-20 px-4">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={useViewport}
        >
          <h2 className="font-cherry text-3xl text-white mb-10">What parents are saying</h2>
          <div className="bg-white rounded-3xl p-8 sm:p-10">
            <div className="flex gap-1 justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 18 18" fill="#ffec00" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L9 13.27l-4.77 2.44.91-5.32L1.27 6.62l5.34-.78L9 1z" />
                </svg>
              ))}
            </div>
            <p className="font-body text-gray-700 text-lg leading-relaxed italic mb-6">
              {course.testimonial.quote}
            </p>
            <p className="font-body font-bold text-slate-900 text-sm">{course.testimonial.author}</p>
          </div>
        </motion.div>
      </section>

      {/* S8 — FAQ */}
      <section className="bg-gray-50 py-20 px-4">
        <motion.div
          className="max-w-2xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={useViewport}
        >
          <h2 className="font-cherry text-3xl text-slate-900 mb-10 text-center">Common questions</h2>
          <div className="flex flex-col gap-3">
            {[course.faqSpecific, ...course.faqCommon].map((faq, i) => (
              <FAQ key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* S9 — FINAL CTA */}
      <section className="bg-crimson py-24 px-4 text-center text-white">
        <motion.div
          className="max-w-2xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={useViewport}
        >
          <h2 className="font-cherry text-4xl lg:text-5xl text-white mb-10 leading-tight">
            {course.finalCTA}
          </h2>
          <EnrolButton variant="yellow" />
          <div className="mt-6">
            <Link
              to="/community-hour"
              className="font-body text-white/70 hover:text-white text-sm underline transition-colors"
            >
              Not sure yet? Book a free 15-minute call with our founder first →
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
