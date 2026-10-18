import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Check,
  Plus,
  Minus,
  X,
  Lock,
  Lightbulb,
  Sparkles,
  BookOpen,
} from "lucide-react";
import {
  motion,
  fadeUp,
  stagger,
  scaleIn,
  useViewport,
} from "../../components/ui/Motion";
import discoveryHavenLogo from "../../assets/dh.png";
import { Button } from "../../components/ui/Button";
import { SectionLabel } from "../../components/ui/SectionLabel";

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

const INPUT =
  "w-full rounded-2xl border-2 border-dark/10 bg-canvas px-4 py-3 font-body text-[0.9375rem] text-dark placeholder:text-dark/35 focus:border-aqua focus:outline-none focus:ring-4 focus:ring-aqua/20";
const LABEL = "block font-body text-sm font-extrabold text-dark mb-1.5";

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
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="enrol-title"
        className="relative bg-white rounded-4xl border-2 border-dark shadow-[0_8px_0_0_#1a1a1a] w-full max-w-md p-7 sm:p-8 z-10 my-auto"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full text-dark/50 hover:bg-dark/5 hover:text-dark transition-colors"
        >
          <X size={22} />
        </button>
        <p className="font-body text-sm font-extrabold text-dark/55 mb-1">
          Enrol your child
        </p>
        <h3 id="enrol-title" className="font-cherry text-h3 text-dark mb-1 pr-10">
          {course.title}
        </h3>
        <p className="font-body font-extrabold text-dark mb-7">
          ₦{course.price.toLocaleString()}
          <span className="font-semibold text-dark/55"> per child</span>
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="enrol-firstName" className={LABEL}>
                First Name
              </label>
              <input
                required
                className={INPUT}
                value={form.firstName}
                onChange={updateField("firstName")}
                id="enrol-firstName"
              />
            </div>
            <div>
              <label htmlFor="enrol-lastName" className={LABEL}>
                Last Name
              </label>
              <input
                required
                className={INPUT}
                value={form.lastName}
                onChange={updateField("lastName")}
                id="enrol-lastName"
              />
            </div>
          </div>
          <div>
            <label htmlFor="enrol-email" className={LABEL}>
              Email Address
            </label>
            <input
              required
              type="email"
              className={INPUT}
              value={form.email}
              onChange={updateField("email")}
                id="enrol-email"
            />
          </div>
          <div>
            <label htmlFor="enrol-phone" className={LABEL}>
              Phone Number
            </label>
            <div className="flex gap-2">
              <select
                className="w-[9.75rem] shrink-0 rounded-2xl border-2 border-dark/10 bg-canvas px-2 font-body text-sm font-semibold text-dark focus:border-aqua focus:outline-none focus:ring-4 focus:ring-aqua/20"
                aria-label="Country code"
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
                className={INPUT}
                value={form.phone}
                onChange={updateField("phone")}
                id="enrol-phone"
              />
            </div>
          </div>
          <div>
            <label htmlFor="enrol-childName" className={LABEL}>
              Child's Full Name
            </label>
            <input
              required
              className={INPUT}
              value={form.childName}
              onChange={updateField("childName")}
                id="enrol-childName"
            />
          </div>
          <div>
            <label htmlFor="enrol-childAge" className={LABEL}>
              Child's Age
            </label>
            <input
              required
              type="number"
              min="4"
              max="18"
              className={INPUT}
              value={form.childAge}
              onChange={updateField("childAge")}
                id="enrol-childAge"
            />
          </div>
          {error && (
            <p role="alert" className="rounded-2xl bg-crimson/10 px-4 py-3 font-body text-sm font-semibold text-crimson">
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full border-2 border-dark bg-aqua px-6 py-3.5 font-body text-[1.0625rem] font-extrabold text-dark shadow-press transition-[transform,box-shadow] duration-150 hover:-translate-y-px active:translate-y-1 active:shadow-none disabled:translate-y-0 disabled:opacity-60"
          >
            {loading
              ? "Redirecting to secure checkout…"
              : `Continue to Payment of ₦${course.price.toLocaleString()}`}
          </button>
          <p className="flex items-center justify-center gap-1.5 text-center font-body text-xs font-semibold text-dark/50">
            <Lock size={13} /> Secure checkout with Paystack
          </p>
        </form>
      </div>
    </div>
  );
}

function FAQ({ q, a, id }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-3xl border border-dark/10 bg-white">
      <button
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-body text-[1.0625rem] font-extrabold text-dark"
        aria-expanded={open}
        aria-controls={`faq-${id}`}
        onClick={() => setOpen((o) => !o)}
      >
        {q}
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cream text-dark">
          {open ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>
      {open && (
        <div
          id={`faq-${id}`}
          className="-mt-1 px-6 pb-6 font-body leading-relaxed text-dark/70"
        >
          {a}
        </div>
      )}
    </div>
  );
}

export default function CourseLandingPage({ course }) {
  const [modalOpen, setModalOpen] = useState(false);

  const enrolBtn = (variant = "yellow", label) => (
    <Button
      variant={variant === "yellow" ? "yellow" : "primary"}
      size="lg"
      onClick={() => setModalOpen(true)}
    >
      {label || `Enrol my child now for ₦${course.price.toLocaleString()}`}
    </Button>
  );

  const glance = [
    { label: "Starts", value: course.schedule.month },
    { label: "Duration", value: course.schedule.duration },
    { label: "Sessions", value: course.schedule.sessionSchedule },
    { label: "Ages", value: course.schedule.ages },
    { label: "Format", value: course.schedule.format },
  ];

  return (
    <div className="min-h-screen font-body">
      {/* HEADER: logo plus an always-visible enrol button */}
      <header className="sticky top-0 z-40 border-b border-dark/10 bg-canvas/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
          <Link to="/" className="inline-flex items-center gap-2">
            <img
              src={discoveryHavenLogo}
              alt=""
              className="h-9 w-9 object-contain"
            />
            <span className="font-logo text-xl text-dark">
              Discovery Haven
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="hidden font-body font-extrabold text-dark sm:block">
              ₦{course.price.toLocaleString()}
            </span>
            <Button size="sm" onClick={() => setModalOpen(true)}>
              Enrol now
            </Button>
          </div>
        </div>
      </header>

      {/* S1 — HERO */}
      {course.heroImage ? (
        <section className="bg-[#0D1B2A] py-20 md:py-28 px-4 text-white">
          <motion.div
            className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center"
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            <div className="text-center lg:text-left">
              <SectionLabel>{course.tag}</SectionLabel>
              <h1 className="font-cherry text-h1 bg-gradient-to-r from-amber-200 to-cyan-400 bg-clip-text text-transparent mb-6 mt-2">
                {course.headline}
              </h1>
              <p className="font-body text-lead text-white/85 mb-10">
                {course.subheadline}
              </p>
              {enrolBtn("yellow", course.heroCta)}
              <p className="mt-5 text-white/60 font-body font-semibold text-sm">
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
                    <span className="font-body font-bold text-white text-[9px] sm:text-[11px]">
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
        <section className="bg-dark px-5 pb-20 pt-14 text-white sm:px-8 md:pb-28 md:pt-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <motion.div variants={fadeUp} initial="hidden" animate="show">
              <SectionLabel>{course.tag}</SectionLabel>
              <h1 className="font-cherry text-h1 bg-gradient-to-r from-amber-200 to-cyan-400 bg-clip-text text-transparent mb-6 mt-2">
                {course.headline}
              </h1>
              <p className="font-body text-lead text-white/80 max-w-prose mb-10">
                {course.subheadline}
              </p>
              <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-7">
                {enrolBtn("yellow")}
                <Link
                  to="/community-hour"
                  className="font-body font-extrabold text-white underline decoration-aqua decoration-[3px] underline-offset-[6px] hover:text-aqua transition-colors"
                >
                  Book a free call first
                </Link>
              </div>
              <p className="mt-6 text-white/55 font-body font-semibold text-sm">
                {course.smallText}
              </p>
            </motion.div>

            <motion.div
              className="rounded-4xl border border-white/10 bg-cocoa p-7 sm:p-8"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.15 }}
            >
              <p className="mb-3 font-body text-sm font-extrabold text-yellow">
                At a glance
              </p>
              <dl className="divide-y divide-white/10">
                {glance.map(({ label, value }) => (
                  <div key={label} className="flex justify-between gap-6 py-3.5">
                    <dt className="font-body text-[0.9375rem] font-semibold text-white/60">
                      {label}
                    </dt>
                    <dd className="text-right font-body text-[0.9375rem] font-bold">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-3 flex items-end justify-between gap-4 border-t border-white/10 pt-6">
                <div>
                  <p className="font-body text-sm font-semibold text-white/60">
                    Investment
                  </p>
                  <p className="font-cherry text-h3 text-white">
                    {course.schedule.investment}
                  </p>
                </div>
                <span className="pb-1 font-body text-sm font-semibold text-white/50">
                  per child
                </span>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* S1.5 — CENTER STAGE */}
      {course.centerStageImage && (
        <section className="bg-canvas py-16 md:py-24 px-4 text-center overflow-hidden">
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

      {/* S1.6 — WHAT & WHY SPLIT */}
      {course.splitLeftImage && course.splitRightImage && (
        <section className="bg-cream py-16 md:py-24 px-4">
          <motion.div
            className="max-w-5xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="aspect-[3/4] rounded-3xl shadow-2xl overflow-hidden">
                <img
                  src={course.splitLeftImage}
                  alt={course.splitLeftAlt || course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-3xl shadow-2xl overflow-hidden">
                <img
                  src={course.splitRightImage}
                  alt={course.splitRightAlt || course.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {course.splitCta && (
              <div className="text-center mt-12">
                {enrolBtn("yellow", course.splitCta)}
              </div>
            )}
          </motion.div>
        </section>
      )}

      {/* S1.7 — STORYBOOK SHOWCASE */}
      {course.showcaseImage && (
        <section className="bg-[#0D1B2A] py-16 md:py-24 overflow-hidden">
          <motion.div
            className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center px-4 mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            <h2 className="font-cherry text-h2 bg-gradient-to-r from-amber-200 to-cyan-400 bg-clip-text text-transparent text-center lg:text-left">
              {course.showcaseHeadline}
            </h2>
            <img
              src={course.showcaseImage}
              alt={course.title}
              className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
            />
          </motion.div>

          {course.showcaseBooks && (
            <div className="relative overflow-hidden mb-16">
              <motion.div
                className="flex gap-6 w-max px-4"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              >
                {[...course.showcaseBooks, ...course.showcaseBooks].map(
                  (book, i) =>
                    book.image ? (
                      <div
                        key={`${book.title}-${i}`}
                        className="w-48 sm:w-56 shrink-0 aspect-[500/798] rounded-2xl shadow-2xl overflow-hidden"
                      >
                        <img
                          src={book.image}
                          alt={`${book.title}${book.author ? ` ${book.author}` : ""}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div
                        key={`${book.title}-${i}`}
                        className={`w-48 sm:w-56 shrink-0 aspect-[3/4] rounded-2xl shadow-2xl p-5 flex flex-col justify-between bg-gradient-to-br ${book.gradient}`}
                      >
                        <BookOpen
                          size={32}
                          strokeWidth={1.5}
                          className="text-white/40"
                        />
                        <div>
                          <p className="font-cherry text-white text-lg leading-snug mb-1">
                            {book.title}
                          </p>
                          {book.author && (
                            <p className="font-body text-white/80 text-xs">
                              {book.author}
                            </p>
                          )}
                        </div>
                      </div>
                    ),
                )}
              </motion.div>
            </div>
          )}

          {course.showcaseRemark && (
            <p className="font-cherry text-2xl sm:text-3xl text-yellow text-center max-w-2xl mx-auto px-4 leading-tight">
              {course.showcaseRemark}
            </p>
          )}
        </section>
      )}

      {/* S1.8 — JOURNEY & GAINS SPLIT */}
      {course.journeyLeftImage && course.journeyRightImage && (
        <section className="bg-cream py-16 md:py-24 px-4">
          <motion.div
            className="max-w-5xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="aspect-[3/4] rounded-3xl shadow-2xl overflow-hidden">
                <img
                  src={course.journeyLeftImage}
                  alt={course.journeyLeftAlt || course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-3xl shadow-2xl overflow-hidden">
                <img
                  src={course.journeyRightImage}
                  alt={course.journeyRightAlt || course.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* S1.9 — INVESTMENT & ABOUT */}
      {course.investmentImage && course.aboutImage && (
        <section className="bg-cream py-16 md:py-24 px-4">
          <motion.div
            className="max-w-md mx-auto flex flex-col gap-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            <img
              src={course.investmentImage}
              alt={course.investmentAlt || course.title}
              className="w-full rounded-3xl shadow-2xl"
            />
            <img
              src={course.aboutImage}
              alt={course.aboutAlt || course.title}
              className="w-full rounded-3xl shadow-2xl"
            />
          </motion.div>
        </section>
      )}

      {/* S1.95 — Q&A */}
      {course.qanda && (
        <section className="bg-canvas">
          <div className="h-4 bg-yellow" />
          <motion.div
            className="max-w-3xl mx-auto px-6 py-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            <div className="flex items-center justify-between mb-12">
              <h2 className="font-cherry text-h2 text-orange-400">
                Q&amp;A
              </h2>
              <img
                src={discoveryHavenLogo}
                alt="Discovery Haven"
                className="w-12 h-12 sm:w-14 sm:h-14"
              />
            </div>

            <ol className="divide-y divide-dark/10 border-y border-dark/10">
              {course.qanda.map((item, i) => (
                <li key={item.q} className="flex gap-5 py-7">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-400 font-body text-sm font-extrabold text-dark">
                    {i + 1}
                  </span>
                  <div>
                    <h4 className="font-body font-extrabold text-h4 text-dark mb-2">
                      {item.q}
                    </h4>
                    <p className="font-body text-[1.0625rem] text-dark/75 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            {course.founder && (
              <div className="mt-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
                <div>
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 40 40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-slate-900 mb-3"
                    aria-hidden="true"
                  >
                    {Array.from({ length: 12 }).map((_, i) => {
                      const angle = ((i * 30) / 180) * Math.PI;
                      const x1 = 20 + Math.cos(angle) * 4;
                      const y1 = 20 + Math.sin(angle) * 4;
                      const x2 = 20 + Math.cos(angle) * 18;
                      const y2 = 20 + Math.sin(angle) * 18;
                      return (
                        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
                      );
                    })}
                  </svg>
                  <p className="font-cherry text-aqua text-lg sm:text-xl">
                    {course.founder.name}
                  </p>
                  <p className="font-body font-bold text-orange-400 mt-1">
                    {course.founder.role}
                  </p>
                </div>
                <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-full overflow-hidden ring-[10px] ring-aqua shrink-0 self-center sm:self-auto">
                  <img
                    src={course.founder.image}
                    alt={course.founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
          </motion.div>
          <div className="h-4 bg-aqua" />
        </section>
      )}

      {!course.hideStandardSections && (
        <>
          {/* S2–S3 — THE CHALLENGE & OUR APPROACH */}
          <section className="bg-canvas px-5 py-20 sm:px-8 md:py-28">
            <div className="mx-auto max-w-6xl divide-y divide-dark/10">
              {[
                {
                  label: "The challenge",
                  heading: course.problemHeading,
                  body: course.problemBody,
                },
                {
                  label: "Our approach",
                  heading: course.whatItIsHeading,
                  body: course.whatItIsBody,
                },
              ].map((row) => (
                <motion.div
                  key={row.label}
                  className="grid gap-6 py-14 first:pt-0 last:pb-0 md:grid-cols-12 md:gap-12 md:py-20"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={useViewport}
                >
                  <div className="md:col-span-5">
                    <SectionLabel>{row.label}</SectionLabel>
                    <h2 className="font-cherry text-h2 text-dark mt-2">
                      {row.heading}
                    </h2>
                  </div>
                  <p className="font-body text-lead text-dark/70 md:col-span-7 md:pt-16">
                    {row.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* S4 — OUTCOMES */}
          <section className="bg-cream px-5 py-20 sm:px-8 md:py-28">
            <div className="mx-auto max-w-6xl">
              <motion.div
                className="mb-12 text-center"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={useViewport}
              >
                <SectionLabel>What your child gains</SectionLabel>
                <h2 className="font-cherry text-h2 text-dark mx-auto mt-2 max-w-3xl">
                  {course.outcomesHeading}
                </h2>
              </motion.div>
              <motion.ul
                className="grid grid-cols-1 gap-5 sm:grid-cols-2"
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={useViewport}
              >
                {course.outcomes.map((o) => (
                  <motion.li
                    key={o}
                    variants={scaleIn}
                    className="flex items-start gap-4 rounded-3xl border border-dark/10 bg-white p-6"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-aqua">
                      <Check size={20} strokeWidth={3} className="text-dark" />
                    </span>
                    <span className="pt-1.5 font-body text-[1.0625rem] leading-relaxed text-dark/80">
                      {o}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </section>

          {/* S5 — BONUS */}
          <section className="bg-canvas px-5 py-20 sm:px-8 md:py-28">
            <motion.div
              className="mx-auto max-w-5xl rounded-4xl border-2 border-dark bg-yellow p-8 shadow-[0_8px_0_0_#1a1a1a] sm:p-12 lg:p-16"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={useViewport}
            >
              <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-dark px-4 py-1.5 font-body text-sm font-extrabold text-yellow">
                <Sparkles size={16} /> Bonus outcome
              </span>
              <h2 className="font-cherry text-h2 text-dark mb-6 max-w-3xl">
                {course.bonusHeading}
              </h2>
              <p className="font-body text-lead text-dark/80 max-w-prose">
                {course.bonusBody}
              </p>
            </motion.div>
          </section>

          {/* S6 — SCHEDULE & PRICING */}
          <section className="bg-cream px-5 py-20 sm:px-8 md:py-28">
            <div className="mx-auto max-w-6xl">
              <motion.div
                className="mb-12 text-center"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={useViewport}
              >
                <SectionLabel>{course.schedule.course}</SectionLabel>
                <h2 className="font-cherry text-h2 text-dark mt-2">
                  Schedule & Investment
                </h2>
              </motion.div>
              <motion.div
                className="grid items-stretch gap-5 lg:grid-cols-[1.4fr_1fr]"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={useViewport}
              >
                <dl className="divide-y divide-dark/10 rounded-4xl border border-dark/10 bg-white px-6 py-2 sm:px-8">
                  {[
                    { label: "Month", value: course.schedule.month },
                    { label: "Duration", value: course.schedule.duration },
                    { label: "Schedule", value: course.schedule.sessionSchedule },
                    { label: "Ages", value: course.schedule.ages },
                    { label: "Grouping", value: course.schedule.grouping },
                    { label: "Format", value: course.schedule.format },
                  ].map(({ label, value }) => (
                    <div
                      key={label}
                      className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                    >
                      <dt className="font-body text-sm font-bold text-dark/55">
                        {label}
                      </dt>
                      <dd className="font-body font-bold text-dark sm:text-right">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="flex flex-col rounded-4xl bg-cocoa p-8 text-white sm:p-10">
                  <p className="font-body text-sm font-extrabold text-yellow">
                    Investment
                  </p>
                  <p className="font-cherry text-h1 mt-2">
                    {course.schedule.investment}
                  </p>
                  <p className="mt-2 font-body font-semibold text-white/60">
                    Per child, covering all {course.schedule.duration.toLowerCase()}
                  </p>
                  <div className="mt-auto pt-10">
                    <Button
                      variant="ember"
                      size="lg"
                      className="w-full"
                      onClick={() => setModalOpen(true)}
                    >
                      Reserve my child's spot
                    </Button>
                    <p className="mt-4 flex items-center justify-center gap-1.5 font-body text-sm font-semibold text-white/50">
                      <Lock size={14} /> Secure checkout with Paystack
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* S7 — TESTIMONIAL */}
          <section className="bg-dark px-5 py-20 text-white sm:px-8 md:py-28">
            <motion.figure
              className="mx-auto max-w-3xl text-center"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={useViewport}
            >
              <SectionLabel>What parents are saying</SectionLabel>
              <div
                className="mt-4 mb-8 flex justify-center gap-1"
                aria-label="5 out of 5 stars"
              >
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="22"
                    height="22"
                    viewBox="0 0 18 18"
                    fill="#ffec00"
                    aria-hidden="true"
                  >
                    <path d="M9 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L9 13.27l-4.77 2.44.91-5.32L1.27 6.62l5.34-.78L9 1z" />
                  </svg>
                ))}
              </div>
              <blockquote className="font-body text-h4 font-bold leading-relaxed text-white">
                “{course.testimonial.quote}”
              </blockquote>
              <figcaption className="mt-8 font-body font-bold text-white/55">
                {course.testimonial.author}
              </figcaption>
            </motion.figure>
          </section>

          {/* S8 — FAQ */}
          <section className="bg-canvas px-5 py-20 sm:px-8 md:py-28">
            <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={useViewport}
              >
                <SectionLabel>FAQ</SectionLabel>
                <h2 className="font-cherry text-h2 text-dark mb-5 mt-2">
                  Common questions
                </h2>
                <p className="font-body text-dark/70 mb-6 max-w-sm">
                  Can't find your answer? Talk to our founder before you
                  enrol.
                </p>
                <Link
                  to="/community-hour"
                  className="font-body font-extrabold text-dark underline decoration-aqua decoration-[3px] underline-offset-[6px] hover:text-aqua transition-colors"
                >
                  Book a free call
                </Link>
              </motion.div>
              <div className="flex flex-col gap-3">
                {[
                  ...(Array.isArray(course.faqSpecific)
                    ? course.faqSpecific
                    : [course.faqSpecific]),
                  ...course.faqCommon,
                ].map((faq, i) => (
                  <FAQ key={faq.q} id={i} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>
          </section>

          {/* S9 — FINAL CTA */}
          <section className="bg-dark px-5 py-20 text-center text-white sm:px-8 md:py-28">
            <motion.div
              className="mx-auto max-w-3xl"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={useViewport}
            >
              <h2 className="font-cherry text-h2 text-white mb-10">
                {course.finalCTA}
              </h2>
              {enrolBtn("yellow")}
              <div className="mt-8">
                <Link
                  to="/community-hour"
                  className="font-body font-bold text-white/70 underline decoration-aqua decoration-2 underline-offset-4 hover:text-white transition-colors"
                >
                  Not sure yet? Book a free 15-minute call with our founder
                  first
                </Link>
              </div>
            </motion.div>
          </section>
        </>
      )}

      {/* S10 — CLOSING */}
      {course.closingImage && (
        <section className="bg-[#0D1B2A] py-20 md:py-28 px-4 text-center text-white overflow-hidden">
          <motion.div
            className="max-w-md mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            <img
              src={course.closingImage}
              alt={course.title}
              className="w-full rounded-3xl shadow-2xl mb-10"
            />
            {course.closingHook && (
              <h2 className="font-cherry text-h2 text-yellow mb-8">
                {course.closingHook}
              </h2>
            )}
            {enrolBtn("yellow", course.closingCta)}
            {course.whatsappNumber && (
              <a
                href={`https://wa.me/${course.whatsappNumber}?text=${encodeURIComponent(
                  `Hello Discovery Haven! I'm interested in enrolling my child in ${course.title}.`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366]/10 border border-[#25D366]/40 px-5 py-3 font-body text-sm text-white/90 hover:bg-[#25D366]/20 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="#25D366"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.859L.057 23.899l6.199-1.458A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.002-1.368l-.36-.214-3.68.865.93-3.58-.234-.369A9.818 9.818 0 1112 21.818z" />
                </svg>
                Prefer to chat? Tap to message us directly on WhatsApp at{" "}
                +2349167723140.
              </a>
            )}
          </motion.div>
        </section>
      )}

      <EnrolModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        course={course}
      />
    </div>
  );
}
