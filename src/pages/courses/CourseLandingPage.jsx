import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  ChevronDown,
  ChevronUp,
  X,
  Lightbulb,
  Sparkles,
} from "lucide-react";
import {
  motion,
  fadeUp,
  stagger,
  scaleIn,
  useViewport,
} from "../../components/ui/Motion";
import discoveryHavenLogo from "../../assets/dh.png";

const COUNTRY_CODES = [
  { code: "+234", label: "🇳🇬 Nigeria (+234)" },
  { code: "+233", label: "🇬🇭 Ghana (+233)" },
  { code: "+254", label: "🇰🇪 Kenya (+254)" },
  { code: "+27", label: "🇿🇦 South Africa (+27)" },
  { code: "+20", label: "🇪🇬 Egypt (+20)" },
  { code: "+237", label: "🇨🇲 Cameroon (+237)" },
  { code: "+228", label: "🇹🇬 Togo (+228)" },
  { code: "+229", label: "🇧🇯 Benin (+229)" },
  { code: "+256", label: "🇺🇬 Uganda (+256)" },
  { code: "+255", label: "🇹🇿 Tanzania (+255)" },
  { code: "+250", label: "🇷🇼 Rwanda (+250)" },
  { code: "+251", label: "🇪🇹 Ethiopia (+251)" },
  { code: "+221", label: "🇸🇳 Senegal (+221)" },
  { code: "+225", label: "🇨🇮 Côte d'Ivoire (+225)" },
  { code: "+260", label: "🇿🇲 Zambia (+260)" },
  { code: "+263", label: "🇿🇼 Zimbabwe (+263)" },
  { code: "+1", label: "🇺🇸 United States / Canada (+1)" },
  { code: "+44", label: "🇬🇧 United Kingdom (+44)" },
  { code: "+353", label: "🇮🇪 Ireland (+353)" },
  { code: "+49", label: "🇩🇪 Germany (+49)" },
  { code: "+33", label: "🇫🇷 France (+33)" },
  { code: "+34", label: "🇪🇸 Spain (+34)" },
  { code: "+39", label: "🇮🇹 Italy (+39)" },
  { code: "+31", label: "🇳🇱 Netherlands (+31)" },
  { code: "+61", label: "🇦🇺 Australia (+61)" },
  { code: "+971", label: "🇦🇪 United Arab Emirates (+971)" },
  { code: "+966", label: "🇸🇦 Saudi Arabia (+966)" },
  { code: "+91", label: "🇮🇳 India (+91)" },
  { code: "+86", label: "🇨🇳 China (+86)" },
];

function EnrolModal({ isOpen, onClose, course }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+234",
    phone: "",
    childName: "",
    childAge: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const updateField = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (window.fbq) {
      window.fbq("track", "InitiateCheckout", {
        value: Number(course.price),
        currency: "NGN",
        content_name: course.title,
        content_type: "product",
      });
    }

    try {
      const res = await fetch("/api/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, courseSlug: course.slug }),
      });
      const rawText = await res.text();
      let data;
      try {
        data = JSON.parse(rawText);
      } catch {
        console.error("[checkout] non-JSON response from /api/create-checkout:", res.status, rawText.slice(0, 500));
        throw new Error(`Server error (status ${res.status}). Please try again in a moment.`);
      }
      if (!res.ok || !data.authorizationUrl) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      window.location.href = data.authorizationUrl;
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto py-10">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 z-10 my-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-dark transition-colors"
        >
          <X size={24} />
        </button>
        <h3 className="font-cherry text-2xl text-slate-900 mb-1">
          {course.title}
        </h3>
        <p className="text-aqua font-bold font-body mb-6">
          ₦{course.price.toLocaleString()}
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-slate-900 font-body mb-1">
                First Name
              </label>
              <input
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-aqua"
                value={form.firstName}
                onChange={updateField("firstName")}
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-900 font-body mb-1">
                Last Name
              </label>
              <input
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-aqua"
                value={form.lastName}
                onChange={updateField("lastName")}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-900 font-body mb-1">
              Email Address
            </label>
            <input
              required
              type="email"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-aqua"
              value={form.email}
              onChange={updateField("email")}
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-900 font-body mb-1">
              Phone Number
            </label>
            <div className="flex gap-2">
              <select
                className="border border-gray-200 rounded-xl px-2 font-body text-sm text-gray-700 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-aqua"
                value={form.countryCode}
                onChange={updateField("countryCode")}
              >
                {COUNTRY_CODES.map(({ code, label }) => (
                  <option key={code} value={code}>
                    {label}
                  </option>
                ))}
              </select>
              <input
                required
                type="tel"
                placeholder="Phone number"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-aqua"
                value={form.phone}
                onChange={updateField("phone")}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-900 font-body mb-1">
              Child's Full Name
            </label>
            <input
              required
              className="w-full border border-gray-200 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-aqua"
              value={form.childName}
              onChange={updateField("childName")}
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-900 font-body mb-1">
              Child's Age
            </label>
            <input
              required
              type="number"
              min="4"
              max="18"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-aqua"
              value={form.childAge}
              onChange={updateField("childAge")}
            />
          </div>
          {error && (
            <p className="text-red-500 text-sm font-body">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full px-8 py-4 rounded-full font-cherry text-lg font-bold bg-aqua text-white hover:scale-105 active:scale-95 transition-all disabled:opacity-60"
          >
            {loading
              ? "Redirecting to secure checkout…"
              : `Continue to Payment — ₦${course.price.toLocaleString()}`}
          </button>
          <p className="text-center text-xs text-gray-400 font-body">
            Secured by Paystack · SSL Encrypted
          </p>
        </form>
      </div>
    </div>
  );
}

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      className="w-full text-left border border-gray-200 rounded-2xl p-5 hover:border-gray-300 transition-colors"
      onClick={() => setOpen((o) => !o)}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="font-bold font-body text-slate-900 text-sm">{q}</span>
        {open ? (
          <ChevronUp size={18} className="text-gray-400 flex-shrink-0" />
        ) : (
          <ChevronDown size={18} className="text-gray-400 flex-shrink-0" />
        )}
      </div>
      {open && (
        <p className="mt-3 font-body text-gray-600 text-sm leading-relaxed">
          {a}
        </p>
      )}
    </button>
  );
}

export default function CourseLandingPage({ course }) {
  const [modalOpen, setModalOpen] = useState(false);

  const enrolBtn = (variant = "yellow", label) => (
    <button
      onClick={() => setModalOpen(true)}
      className={`px-8 py-4 rounded-full font-cherry text-lg font-bold transition-all hover:scale-105 active:scale-95 ${
        variant === "yellow" ? "bg-yellow text-slate-900" : "bg-aqua text-white"
      }`}
    >
      {label || `Enrol My Child Now — ₦${course.price.toLocaleString()}`}
    </button>
  );

  return (
    <div className="min-h-screen font-body">
      {/* LOGO ONLY HEADER */}
      <header className="bg-white border-b border-gray-100 py-4 px-6">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2">
            <img
              src={discoveryHavenLogo}
              alt="Discovery Haven"
              className="w-9 h-9"
            />
            <span className="font-cherry text-xl text-slate-900">
              Discovery Haven
            </span>
          </Link>
        </div>
      </header>

      {/* S1 — HERO */}
      {course.heroImage ? (
        <section className="bg-[#0D1B2A] py-24 px-4 text-white">
          <motion.div
            className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center"
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            <div className="text-center lg:text-left">
              <span className="inline-block bg-yellow text-slate-900 font-bold font-body text-xs tracking-widest uppercase px-4 py-2 rounded-full mb-6">
                {course.tag}
              </span>
              <h1 className="font-cherry text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-amber-200 to-cyan-400 bg-clip-text text-transparent leading-tight mb-6">
                {course.headline}
              </h1>
              <p className="font-body text-white/90 text-lg sm:text-xl leading-relaxed mb-10">
                {course.subheadline}
              </p>
              {enrolBtn("yellow", course.heroCta)}
              <p className="mt-3 text-white/70 font-body text-xs">
                {course.smallText}
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <img
                  src={course.heroImage}
                  alt={course.title}
                  className="w-full rounded-3xl shadow-2xl"
                />
                {course.schedule?.investment && (
                  <motion.div
                    className="absolute -rotate-6 flex flex-col items-center justify-center bg-[#FDAE35] shadow-lg rounded-[60%_40%_55%_45%/55%_45%_60%_40%]"
                    style={{
                      left: "70%",
                      top: "32%",
                      width: "29%",
                      height: "17%",
                    }}
                    animate={{ scale: [1, 1.12, 1] }}
                    transition={{
                      duration: 1.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <span className="font-body font-bold text-white text-[9px] sm:text-[11px] tracking-widest uppercase">
                      Investment
                    </span>
                    <span className="font-cherry text-white text-base sm:text-xl leading-none">
                      {course.schedule.investment}
                    </span>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </section>
      ) : (
        <section className="bg-dark py-24 px-4 text-center text-white">
          <motion.div
            className="max-w-3xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            <span className="inline-block bg-yellow text-slate-900 font-bold font-body text-xs tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              {course.tag}
            </span>
            <h1 className="font-cherry text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-amber-200 to-cyan-400 bg-clip-text text-transparent leading-tight mb-6">
              {course.headline}
            </h1>
            <p className="font-body text-white/90 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              {course.subheadline}
            </p>
            {enrolBtn("yellow")}
            <p className="mt-3 text-white/70 font-body text-xs">
              {course.smallText}
            </p>
          </motion.div>
        </section>
      )}

      {/* S1.5 — CENTER STAGE */}
      {course.centerStageImage && (
        <section className="bg-white py-20 px-4 text-center overflow-hidden">
          <motion.div
            className="relative max-w-4xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            <motion.span
              aria-hidden="true"
              className="hidden md:inline-block absolute top-2 left-6 -rotate-12 font-cherry text-8xl text-aqua select-none"
              animate={{ scale: [1, 1.2, 1], opacity: [0.55, 1, 0.55] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            >
              ?
            </motion.span>
            <motion.span
              aria-hidden="true"
              className="hidden md:inline-block absolute bottom-16 left-10 rotate-6 font-cherry text-6xl text-crimson select-none"
              animate={{ scale: [1, 1.25, 1], opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              ?
            </motion.span>
            <motion.div
              aria-hidden="true"
              className="hidden md:block absolute top-8 right-8 rotate-12 text-yellow"
              animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3,
              }}
            >
              <Lightbulb size={72} strokeWidth={1.5} />
            </motion.div>
            <motion.div
              aria-hidden="true"
              className="hidden md:block absolute bottom-20 right-12 -rotate-6 text-aqua"
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 2.6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              }}
            >
              <Sparkles size={56} strokeWidth={1.5} />
            </motion.div>
            <motion.span
              aria-hidden="true"
              className="hidden lg:inline-block absolute top-1/2 left-0 -rotate-6 font-cherry text-5xl text-orange-400 select-none"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.1,
              }}
            >
              ?
            </motion.span>

            <div className="max-w-md mx-auto">
              <img
                src={course.centerStageImage}
                alt={course.title}
                className="w-full rounded-3xl shadow-2xl mb-8"
              />
              <p className="font-cherry text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight">
                {course.centerStageRemark}
              </p>
            </div>
          </motion.div>
        </section>
      )}

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
          <p className="font-body text-gray-600 text-lg leading-relaxed">
            {course.problemBody}
          </p>
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
          <p className="font-body text-gray-600 text-lg leading-relaxed">
            {course.whatItIsBody}
          </p>
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
                <CheckCircle
                  size={20}
                  className="text-aqua flex-shrink-0 mt-0.5"
                />
                <span className="font-body text-gray-700 text-sm leading-relaxed">
                  {o}
                </span>
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
          <p className="font-body text-white/85 text-lg leading-relaxed">
            {course.bonusBody}
          </p>
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
              <p className="font-cherry text-2xl text-white text-center">
                {course.schedule.course}
              </p>
            </div>
            <div className="divide-y divide-gray-100">
              {[
                { label: "Month", value: course.schedule.month },
                { label: "Duration", value: course.schedule.duration },
                { label: "Schedule", value: course.schedule.sessionSchedule },
                { label: "Ages", value: course.schedule.ages },
                { label: "Grouping", value: course.schedule.grouping },
                { label: "Format", value: course.schedule.format },
              ]
                .filter(Boolean)
                .map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex items-center justify-between px-6 py-4"
                  >
                    <span className="font-body text-sm font-bold text-gray-500 uppercase tracking-wide">
                      {label}
                    </span>
                    <span className="font-body text-sm font-bold text-slate-900">
                      {value}
                    </span>
                  </div>
                ))}
              <div className="flex items-center justify-between px-6 py-4 bg-gray-50">
                <span className="font-body text-sm font-bold text-gray-500 uppercase tracking-wide">
                  Investment
                </span>
                <span className="font-cherry text-2xl text-aqua">
                  {course.schedule.investment}
                </span>
              </div>
            </div>
            <div className="px-6 py-5">
              {enrolBtn("aqua", "Reserve My Child's Spot →")}
            </div>
          </div>
        </motion.div>
      </section>

      {/* S7 — TESTIMONIAL */}
      <section
        className="py-20 px-4 text-white"
        style={{ backgroundColor: "#1a1a1a" }}
      >
        <motion.div
          className="max-w-2xl mx-auto text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={useViewport}
        >
          <h2 className="font-cherry text-3xl text-white mb-10">
            What parents are saying
          </h2>
          <div className="bg-white rounded-3xl p-8 sm:p-10">
            <div className="flex gap-1 justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="#ffec00"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L9 13.27l-4.77 2.44.91-5.32L1.27 6.62l5.34-.78L9 1z" />
                </svg>
              ))}
            </div>
            <p className="font-body text-gray-700 text-lg leading-relaxed italic mb-6">
              {course.testimonial.quote}
            </p>
            <p className="font-body font-bold text-slate-900 text-sm">
              {course.testimonial.author}
            </p>
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
          <h2 className="font-cherry text-3xl text-slate-900 mb-10 text-center">
            Common questions
          </h2>
          <div className="flex flex-col gap-3">
            {[
              ...(Array.isArray(course.faqSpecific)
                ? course.faqSpecific
                : [course.faqSpecific]),
              ...course.faqCommon,
            ].map((faq, i) => (
              <FAQ key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* S9 — FINAL CTA */}
      <section className="py-24 px-4 text-center text-white bg-dark">
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
          {enrolBtn("yellow")}
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

      <EnrolModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        course={course}
      />
    </div>
  );
}
