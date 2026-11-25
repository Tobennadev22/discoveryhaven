import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Star, Phone, Sparkles } from "lucide-react";
import havenVideoLp from "../assets/discoveryhaven-LP-video.mp4";
import {
  fadeUp,
  stagger,
  slideLeft,
  slideRight,
  scaleIn,
  useViewport,
} from "../components/ui/Motion";
import { Button, ButtonLink } from "../components/ui/Button";
import { SectionLabel } from "../components/ui/SectionLabel";
import { Card } from "../components/ui/Card";
import { EnrollModal } from "../components/ui/EnrollModal";
import { TrackCard } from "../components/ui/TrackCard";
import { ParentSignup } from "../components/ui/ParentSignup";
import {
  COURSES,
  TESTIMONIALS,
  IMPACT_METRICS,
  BOOK_A_CALL,
  getUpcomingEvents,
} from "../data/content";
import { buildGoogleCalendarUrl } from "../lib/calendar";
import discoveryhavenHeroImg from "../assets/discoveryhaven-Hero1.jpg";
import discoveryhavenHeroImg1 from "../assets/discoveryhaven-haventribe.jpg";
import { Seo } from "../components/Seo";
import { COMMUNITY_HREF } from "../data/site";

const SDG_CARDS = [
  {
    number: "SDG 4",
    title: "Quality Education",
    desc: "We ensure inclusive and equitable quality education by providing creative, skills-based learning programmes that go beyond the traditional classroom.",
    card: "bg-aqua text-white",
    chip: "bg-white/20",
    body: "text-white/85",
    link: "text-white decoration-yellow",
  },
  {
    number: "SDG 17",
    title: "Partnerships for the Goals",
    desc: "We build purposeful relationships with schools, publishers, institutional partners, and the broader community to amplify our impact across Africa.",
    card: "bg-cocoa text-white",
    chip: "bg-white/10",
    body: "text-white/80",
    link: "text-ember decoration-ember",
  },
];

// The reach strip repeats the headline impact figures.
const REACH_ITEMS = IMPACT_METRICS.map(
  (m) => [m.number, m.label.toLowerCase()],
);

export default function Home() {
  const [enrollEvent, setEnrollEvent] = useState(null);
  const upcomingEvents = getUpcomingEvents();

  return (
    <>
      <Seo title="Discovery Haven" description={"Discovery Haven helps children aged 7 to 16 explore their interests, build confidence through practice and learn to lead with care."} />
      {/* ─── HERO ─── */}
      <section className="bg-cream pt-32 lg:pt-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.h1
            className="font-cherry text-h1 text-dark text-center mt-2 mb-7"
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            Big ideas.
            <br />
            <span className="text-aqua">Brave voices.</span>
          </motion.h1>

          <motion.p
            className="font-body text-lead text-dark/80 text-center max-w-prose mx-auto mb-10"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.15 }}
          >
            Give your child room to experiment, tell their own stories and lead
            with care. At Discovery Haven, learning continues long after the
            school bell rings.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16 lg:mb-20"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.25 }}
          >
            <ButtonLink to="/haven-academy" size="lg" variant="primary">
              Explore Haven Academy <ArrowRight size={18} aria-hidden="true" />
            </ButtonLink>
            <ButtonLink to={BOOK_A_CALL.href} size="lg" variant="outline-dark">
              <Phone size={18} aria-hidden="true" /> Book a call
            </ButtonLink>
          </motion.div>

          {/* ── IMAGE COLLAGE ──
              Swap these for the approved editorial photos (a child or teen
              testing an idea, sharing a story, collaborating or speaking)
              once publication permission is confirmed. */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 items-stretch"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <motion.div
              variants={slideLeft}
              className="relative rounded-4xl overflow-hidden h-[340px] md:h-[440px] lg:h-[520px] border-2 border-dark"
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
                  Live online courses, wherever your family is
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-4 lg:gap-5 md:h-[440px] lg:h-[520px]"
            >
              <div className="rounded-4xl p-7 flex flex-col justify-between gap-8 flex-1 bg-yellow text-dark border-2 border-dark">
                <Sparkles size={36} aria-hidden="true" />
                <div>
                  <p className="font-cherry text-h2">Four tracks</p>
                  <p className="font-body font-bold text-dark/80 text-[0.9375rem] mt-2">
                    Experiment, connect, create and speak up
                  </p>
                </div>
              </div>

              <div className="rounded-4xl p-7 flex flex-col justify-between gap-6 flex-1 bg-dark text-white">
                <p className="font-cherry text-h3">
                  Separate groups for ages 7 to 11 and 12 to 16
                </p>
                <p className="font-body font-bold text-white/75 text-sm">
                  So every child is challenged at the right level
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={slideRight}
              className="relative rounded-4xl overflow-hidden h-[340px] md:h-[440px] lg:h-[520px] border-2 border-dark"
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
                <span>
                  <span className="block font-body font-extrabold text-h5 text-dark">
                    Explore Loud & Fearless
                  </span>
                  <span className="block text-dark/70 font-body font-semibold text-sm">
                    Public speaking and debate
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="w-10 h-10 rounded-full bg-aqua flex items-center justify-center flex-shrink-0 transition-transform group-hover:translate-x-0.5"
                >
                  <ArrowRight size={16} className="text-white" />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* ── REACH STRIP ── */}
        <div className="marquee mt-16 lg:mt-20 bg-dark py-7 overflow-hidden">
          <p className="sr-only">
            {REACH_ITEMS.map(([n, l]) => `${n} ${l}`).join(", ")}
          </p>
          {/* Two identical halves: the track slides left by exactly one half,
              so the loop is seamless. */}
          <div className="marquee-track flex w-max" aria-hidden="true">
            {[0, 1].map((half) => (
              <div key={half} className="flex shrink-0">
                {[0, 1].flatMap((rep) =>
                  REACH_ITEMS.map(([n, l]) => (
                    <span
                      key={`${rep}-${l}`}
                      className="flex items-center gap-8 pr-8 font-cherry text-h3 whitespace-nowrap text-white"
                    >
                      <span>
                        <span className="text-yellow">{n}</span> {l}
                      </span>
                      <span className="text-lilac">✦</span>
                    </span>
                  )),
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── POSITIONING ─── */}
      <section className="py-20 md:py-28 bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
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
                Explore. Practise. Lead.
              </h2>
              <p className="font-body text-lead text-dark/80 max-w-prose mb-8">
                Discovery Haven helps children explore their interests, build
                confidence through practice and learn to lead with care. Young
                people get to try things, share their ideas and see how far
                they can go.
              </p>
              <ButtonLink to="/about" variant="outline-dark">
                Read our story
              </ButtonLink>
            </motion.div>
            <motion.div variants={slideRight} className="flex justify-center">
              {/* Source footage is portrait (shot vertically) - aspect-video
                  (16:9) here would force a landscape crop that cuts off
                  faces, so this matches the actual 9:16 content instead. */}
              <div className="relative w-[calc(100%-1rem)] max-w-sm">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 translate-x-4 translate-y-4 rounded-4xl bg-lilac"
                />
                <video
                  className="relative w-full rounded-4xl aspect-[9/16] object-cover bg-dark border-2 border-dark"
                  controls
                  preload="metadata"
                  aria-label="Discovery Haven programme highlights"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div
            className="text-center mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            <SectionLabel>Haven Academy</SectionLabel>
            <h2 className="font-cherry text-h2 text-dark mb-5">
              Find their next adventure.
            </h2>
            <p className="font-body text-lead text-dark/80 max-w-prose mx-auto">
              Our courses are for ages 7 to 16, with separate groups for ages
              7 to 11 and 12 to 16.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {COURSES.map((course) => (
              <TrackCard key={course.id} course={course} />
            ))}
          </div>

          <div className="text-center">
            <ButtonLink to="/haven-academy" variant="dark" size="lg">
              Explore Haven Academy
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* ─── IMPACT METRICS ─── */}
      <section className="bg-canvas py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center">
          <SectionLabel>Impact so far</SectionLabel>
          <dl className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-y-10 sm:divide-x sm:divide-dark/10">
            {IMPACT_METRICS.map((m) => (
              <div key={m.label} className="px-4 flex flex-col">
                <dt className="font-body font-bold text-dark/70 text-sm mt-2">
                  {m.label}
                </dt>
                <dd className="order-first font-cherry text-h1 text-dark">
                  {m.number}
                </dd>
              </div>
            ))}
          </dl>
          <Link
            to="/impact"
            className="mt-10 inline-flex min-h-[44px] items-center gap-1.5 font-body font-extrabold text-dark underline decoration-aqua decoration-[3px] underline-offset-[6px] hover:gap-2.5 transition-all"
          >
            See our impact <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* ─── SDG ALIGNMENT ─── */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
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
            <p className="font-body text-lead text-dark/80 max-w-prose mx-auto">
              Every programme we run is designed around two global goals for
              change.
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
                  to="/impact"
                  className={`mt-auto inline-flex min-h-[44px] w-fit items-center gap-2 font-body font-extrabold underline decoration-[3px] underline-offset-[6px] ${sdg.link} hover:gap-3 transition-all`}
                >
                  How we work towards {sdg.number}{" "}
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-20 md:py-28 bg-lilac">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-14">
            <h2 className="font-cherry text-h2 text-dark mb-4">
              Parents are talking
            </h2>
            <p className="font-body text-lead text-dark/80">
              What families across Nigeria tell us.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.name}
                className="bg-white rounded-4xl p-8 flex flex-col border-2 border-dark shadow-press"
              >
                <div className="flex gap-1 mb-5" role="img" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={18}
                      className="fill-yellow text-dark"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="font-body text-[1.0625rem] leading-relaxed text-dark/85 mb-8">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-auto">
                  <p className="font-body font-extrabold text-dark">{t.name}</p>
                  <p className="font-body text-sm text-dark/70">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EVENTS ─── */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {upcomingEvents.length > 0 ? (
            <>
              <motion.div
                className="text-center mb-14"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={useViewport}
              >
                <SectionLabel>Experiences</SectionLabel>
                <h2 className="font-cherry text-h2 text-dark mb-5">
                  What’s coming up
                </h2>
                <p className="font-body text-lead text-dark/80 max-w-prose mx-auto">
                  Check the age range on each event before registering.
                </p>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-5"
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={useViewport}
              >
                {upcomingEvents.map((ev) => (
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
                        <p className="text-dark/75 font-body text-[0.9375rem] leading-relaxed mb-6">
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
                            Register for {ev.title.split(":")[0]}
                          </Button>
                          <a
                            href={buildGoogleCalendarUrl(ev)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full font-body text-sm font-bold text-dark/75 hover:bg-dark/5 hover:text-dark"
                          >
                            <Calendar size={14} aria-hidden="true" /> Add to
                            calendar
                          </a>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </>
          ) : (
            <motion.div
              className="mx-auto max-w-3xl rounded-4xl border-2 border-dark bg-white p-8 text-center shadow-press sm:p-12"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={useViewport}
            >
              <span className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-lilac">
                <Sparkles size={26} className="text-dark" aria-hidden="true" />
              </span>
              <h2 className="font-cherry text-h2 text-dark mb-4">
                More adventures are in the works.
              </h2>
              <p className="font-body text-lead text-dark/80 max-w-prose mx-auto mb-8">
                Join the parent community to hear when our next experience
                opens.
              </p>
              <ButtonLink to={COMMUNITY_HREF} variant="primary" size="lg">
                Join the parent community
              </ButtonLink>
            </motion.div>
          )}
        </div>
      </section>

      {/* ─── BOOK A CALL ─── */}
      <motion.section
        className="py-20 md:py-28 bg-canvas"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={useViewport}
      >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-full bg-peach">
            <Phone size={28} className="text-dark" aria-hidden="true" />
          </span>
          <h2 className="font-cherry text-h2 text-dark mb-5">Book a call.</h2>
          <p className="font-body text-lead text-dark/80 max-w-prose mx-auto mb-9">
            Want help choosing a programme or exploring a partnership? Pick a
            time to talk with us.
          </p>
          <ButtonLink to={BOOK_A_CALL.href} variant="outline-dark" size="lg">
            Pick a time to talk
          </ButtonLink>
        </div>
      </motion.section>

      {/* ─── PARENT COMMUNITY SIGNUP ─── */}
      <ParentSignup />

      <EnrollModal
        isOpen={!!enrollEvent}
        onClose={() => setEnrollEvent(null)}
        event={enrollEvent}
      />
    </>
  );
}
