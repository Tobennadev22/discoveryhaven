import { useState } from "react";
import { Calendar, Trophy, CheckCircle, PlayCircle, Images, BookOpen, ChevronDown } from "lucide-react";
import { Button } from "../components/ui/Button";
import { SectionLabel } from "../components/ui/SectionLabel";
import { Card } from "../components/ui/Card";
import { EnrollModal } from "../components/ui/EnrollModal";
import { EVENTS } from "../data/content";
import {
  motion,
  fadeUp,
  stagger,
  slideLeft,
  slideRight,
  scaleIn,
  useViewport,
} from "../components/ui/Motion";

function buildGoogleCalendarUrl(ev) {
  const base = "https://calendar.google.com/calendar/render?action=TEMPLATE";
  const params = new URLSearchParams({
    text: ev.title,
    dates: `${ev.gcalStart}/${ev.gcalEnd}`,
    details: ev.description,
    location: ev.location || "",
  });
  return `${base}&${params.toString()}`;
}

const GALLERY_COUNT = 9;

function PhotoGallery() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? GALLERY_COUNT : 9;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={useViewport}
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-yellow/20 flex items-center justify-center">
          <Images size={22} className="text-yellow" />
        </div>
        <div>
          <h3 className="font-cherry text-2xl text-white">Photo Gallery</h3>
          <p className="text-gray-400 font-body text-sm">Snapshots from our events, cohorts, and community moments</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {Array.from({ length: visible }).map((_, i) => (
          <div
            key={i}
            className="aspect-square bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 hover:border-yellow/40 transition-colors"
          >
            <div className="text-center">
              <Images size={24} className="text-white/20 mx-auto mb-1" />
              <p className="text-white/20 font-body text-[10px]">Photo {i + 1}</p>
            </div>
          </div>
        ))}
      </div>
      {!showAll && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(true)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/40 font-body font-bold text-sm transition-all"
          >
            <ChevronDown size={16} /> Load More Photos
          </button>
        </div>
      )}
    </motion.div>
  );
}

export default function Explore() {
  const [enrollEvent, setEnrollEvent] = useState(null);

  return (
    <>
      <section className="bg-dark py-28">
        <motion.div
          className="max-w-3xl mx-auto px-4 text-center"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <SectionLabel className="text-aqua">EVENTS</SectionLabel>
          <h1 className="font-cherry text-5xl lg:text-7xl bg-gradient-to-r from-amber-200 to-cyan-400 bg-clip-text text-transparent mb-6">
            What's Coming Up
          </h1>
          <p className="text-gray-300 font-body text-xl leading-relaxed">
            From weekly cohorts to our annual Children's Summit — every event is
            designed to spark something extraordinary in your child.
          </p>
        </motion.div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={slideLeft}
              initial="hidden"
              whileInView="show"
              viewport={useViewport}
            >
              <SectionLabel>ANNUAL FLAGSHIP EVENT</SectionLabel>
              <h2 className="font-cherry text-4xl lg:text-5xl text-slate-900 mb-4 leading-tight">
                Discovery Haven Children's Summit
              </h2>
              <div className="inline-block bg-crimson text-white px-4 py-2 rounded-full font-bold font-body text-sm mb-6">
                Theme: The Confident Generation
              </div>
              <p className="text-gray-600 font-body text-lg leading-relaxed mb-8">
                Our annual flagship summit brings together the brightest young
                minds in Nigeria for a day of performances, panels,
                competitions, and the Little Voices book launch. Virtual and
                Abuja.
              </p>
              <h4 className="font-bold font-body text-slate-900 mb-4">
                What Happens at the Summit:
              </h4>
              <ul className="space-y-3 mb-8">
                {[
                  "School pitch competition with debate elements",
                  "Children's published stories showcase — Little Voices Book Series Vol. 1 launch",
                  "Live performances, panels, and awards",
                  "Guest speakers and institutional partners",
                  "Parent and community networking",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="w-5 h-5 rounded-full bg-aqua text-white flex-shrink-0 mt-0.5 flex items-center justify-center">
                      <CheckCircle size={12} />
                    </span>
                    <span className="text-gray-600 font-body text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4 items-center">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => setEnrollEvent(EVENTS[2])}
                >
                  Register Your Interest
                </Button>
                <a
                  href={buildGoogleCalendarUrl(EVENTS[2])}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-slate-900 font-body font-bold text-sm transition-colors"
                >
                  <Calendar size={16} /> Add to Google Calendar
                </a>
              </div>
            </motion.div>
            <motion.div
              className="bg-dark rounded-3xl p-10 text-center text-white"
              variants={slideRight}
              initial="hidden"
              whileInView="show"
              viewport={useViewport}
            >
              <div className="flex justify-center mb-6"><Trophy size={72} className="text-yellow" /></div>
              <h3 className="font-cherry text-3xl mb-3">November 2026</h3>
              <p className="font-body text-gray-300 mb-2">
                Annual Flagship · Virtual & Abuja
              </p>
              <p className="font-body text-aqua font-bold">
                ₦{EVENTS[2].price?.toLocaleString()} per delegate
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            <SectionLabel>UPCOMING COHORTS</SectionLabel>
            <h2 className="font-cherry text-4xl text-slate-900 mb-4">
              Book Your Child's Spot
            </h2>
            <p className="text-gray-600 font-body text-lg">
              Cohorts are capped at 15 learners. Spaces fill fast.
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
                <Card className="hover:shadow-lg transition-all duration-300 h-full">
                  <div
                    className="px-6 py-3 font-bold font-body text-sm flex justify-between"
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
                      <p className="text-aqua font-bold font-body mb-5">
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
                          : "Register & Pay"}
                      </Button>
                      <a
                        href={buildGoogleCalendarUrl(ev)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full text-gray-400 hover:text-slate-900 font-body font-bold text-sm py-2 rounded-full transition-colors"
                      >
                        <Calendar size={14} /> Add to Google Calendar
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PAST EVENTS ── */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            <SectionLabel>PAST EVENTS</SectionLabel>
            <h2 className="font-cherry text-4xl text-slate-900 mb-4">
              What We've Done Together
            </h2>
            <p className="text-gray-600 font-body text-lg max-w-xl mx-auto">
              A look back at the cohorts, summits, and showcases that shaped our community.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            {[
              { title: "Creative Quest — Cohort 1", date: "March 2024", tag: "Writing Studio", color: "#05c3dd" },
              { title: "Loud & Fearless — Cohort 3", date: "October 2024", tag: "Public Speaking", color: "#de2d10" },
              { title: "Discovery Haven Children's Summit 2024", date: "November 2024", tag: "Annual Summit", color: "#1a1a1a" },
              { title: "The Curiosity Box — Cohort 2", date: "January 2025", tag: "Critical Thinking", color: "#ffec00" },
              { title: "The EQ Lab — Cohort 1", date: "April 2025", tag: "Emotional Intelligence", color: "#7c3aed" },
              { title: "Creative Quest — Cohort 4", date: "June 2025", tag: "Writing Studio", color: "#05c3dd" },
            ].map((ev, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 opacity-60 grayscale pointer-events-none select-none"
              >
                <div
                  className="h-2 w-full"
                  style={{ backgroundColor: ev.color }}
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-xs font-bold font-body uppercase tracking-wide px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: ev.color + "20",
                        color: ev.color === "#ffec00" ? "#b45309" : ev.color,
                      }}
                    >
                      {ev.tag}
                    </span>
                    <span className="text-xs font-bold font-body uppercase tracking-wide px-3 py-1 rounded-full bg-gray-100 text-gray-400">
                      Past Event
                    </span>
                  </div>
                  <h3 className="font-cherry text-lg text-slate-900 mb-1 leading-snug">
                    {ev.title}
                  </h3>
                  <p className="text-gray-400 font-body text-sm">{ev.date}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── ARTIFACTS FROM EVENTS ── */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            <SectionLabel className="text-aqua">ARTIFACTS FROM EVENTS</SectionLabel>
            <h2 className="font-cherry text-4xl text-white mb-4">
              Moments Worth Remembering
            </h2>
            <p className="text-gray-400 font-body text-lg max-w-xl mx-auto">
              Highlights, stories, and memories captured from every event.
            </p>
          </motion.div>

          {/* Loud & Fearless Videos */}
          <motion.div
            className="mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-crimson/20 flex items-center justify-center">
                <PlayCircle size={22} className="text-crimson" />
              </div>
              <div>
                <h3 className="font-cherry text-2xl text-white">Loud & Fearless</h3>
                <p className="text-gray-400 font-body text-sm">Performance clips from our public speaking showcases</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="aspect-video bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 hover:border-aqua/40 transition-colors cursor-pointer group"
                >
                  <div className="text-center">
                    <PlayCircle size={40} className="text-white/30 group-hover:text-aqua transition-colors mx-auto mb-2" />
                    <p className="text-white/30 font-body text-xs group-hover:text-white/60 transition-colors">
                      Video #{i} — Coming Soon
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Photo Gallery */}
          <PhotoGallery />

          {/* Books by Kids */}
          <motion.div
            className="mt-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-aqua/20 flex items-center justify-center">
                <BookOpen size={22} className="text-aqua" />
              </div>
              <div>
                <h3 className="font-cherry text-2xl text-white">Books by Kids</h3>
                <p className="text-gray-400 font-body text-sm">Stories written and published by our Creative Quest scholars</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-[3/4] bg-gradient-to-br from-aqua/20 to-aqua/5 rounded-2xl flex items-center justify-center border border-white/10 hover:border-aqua/40 transition-colors"
                >
                  <div className="text-center px-4">
                    <BookOpen size={36} className="text-aqua/50 mx-auto mb-2" />
                    <p className="text-white/30 font-body text-xs">Book cover #{i}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
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
