import { useState } from "react";
import {
  Calendar,
  Trophy,
  CheckCircle,
  PlayCircle,
  Images,
  BookOpen,
  ChevronDown,
} from "lucide-react";
import { Button, ButtonLink } from "../components/ui/Button";
import { SectionLabel } from "../components/ui/SectionLabel";
import { Card } from "../components/ui/Card";
import { EnrollModal } from "../components/ui/EnrollModal";
import { getUpcomingEvents } from "../data/content";
import { buildGoogleCalendarUrl } from "../lib/calendar";
import eventImg1 from "../assets/EventImg1.jpg";
import eventImg2 from "../assets/EventImg2.jpg";
import eventImg3 from "../assets/EventImg3.jpg";
import eventImg4 from "../assets/EventImg4.jpg";
import eventImg5 from "../assets/EventImg5.jpg";
import eventImg6 from "../assets/EventImg6.jpg";
import eventImg7 from "../assets/EventImg7.jpg";
import eventImg8 from "../assets/EventImg8.jpg";
import eventImg9 from "../assets/EventImg9.jpg";
import {
  motion,
  fadeUp,
  stagger,
  slideLeft,
  slideRight,
  scaleIn,
  useViewport,
} from "../components/ui/Motion";
import { Seo } from "../components/Seo";
import { COMMUNITY_HREF } from "../data/site";

const GALLERY_IMAGES = [
  eventImg1,
  eventImg2,
  eventImg3,
  eventImg4,
  eventImg5,
  eventImg6,
  eventImg7,
  eventImg8,
  eventImg9,
];
const GALLERY_COUNT = GALLERY_IMAGES.length;

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
          <h3 className="font-cherry text-h3 text-white">Photo Gallery</h3>
          <p className="text-gray-400 font-body text-sm">
            Snapshots from our events, cohorts, and community moments
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {GALLERY_IMAGES.slice(0, visible).map((image, i) => (
          <div
            key={i}
            className="aspect-square rounded-2xl overflow-hidden border border-white/10 hover:border-yellow/40 transition-colors"
          >
            <img
              src={image}
              alt={`Discovery Haven event photo ${i + 1}`}
              className="w-full h-full object-cover"
            />
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
  const upcoming = getUpcomingEvents();
  const summit = upcoming.find((ev) => ev.type === "summit");
  const otherEvents = upcoming.filter((ev) => ev.type !== "summit");

  return (
    <>
      <Seo title="Experiences" description={"Field trips and experiences from Discovery Haven. Selected experiences welcome children from age 4. Check the age range on each event before registering."} />
      <section className="bg-cream pt-36 pb-16 lg:pt-44 lg:pb-20">
        <motion.div
          className="max-w-3xl mx-auto px-4 text-center"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <SectionLabel>Experiences</SectionLabel>
          <h1 className="font-cherry text-h1 text-dark mb-6">
            Little explorers welcome.
          </h1>
          <p className="text-dark/80 font-body text-lead">
            Selected field trips and experiences welcome children from age 4.
            Check the age range on each event before registering.
          </p>
        </motion.div>
      </section>

      {summit && (
        <section className="py-16 md:py-24 bg-canvas">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={slideLeft}
                initial="hidden"
                whileInView="show"
                viewport={useViewport}
              >
                <SectionLabel>Annual flagship</SectionLabel>
                <h2 className="font-cherry text-h2 text-dark mb-4">
                  Discovery Haven Children's Summit
                </h2>
                <p className="inline-block bg-peach text-dark border-2 border-dark px-4 py-2 rounded-full font-bold font-body text-sm mb-6">
                  Theme: The Confident Generation
                </p>
                <p className="text-dark/80 font-body text-lead mb-8">
                  Our annual flagship summit brings young people together for
                  performances, panels, competitions and the Little Voices
                  book launch. Virtual and in Abuja.
                </p>
                <h3 className="font-body font-extrabold text-h4 text-dark mb-4">
                  What happens at the Summit
                </h3>
                <ul className="space-y-3 mb-8">
                  {[
                    "School pitch competition with debate elements",
                    "Children's published stories showcase and the Little Voices Book Series Vol. 1 launch",
                    "Live performances, panels and awards",
                    "Guest speakers and institutional partners",
                    "Parent and community networking",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <CheckCircle
                        size={18}
                        className="text-aqua flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="text-dark/80 font-body">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => setEnrollEvent(summit)}
                  >
                    Register for the Summit
                  </Button>
                  <a
                    href={buildGoogleCalendarUrl(summit)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-2 text-dark/75 hover:text-dark font-body font-bold text-sm transition-colors"
                  >
                    <Calendar size={16} aria-hidden="true" /> Add the Summit
                    to Google Calendar
                  </a>
                </div>
              </motion.div>
              <motion.div
                className="bg-dark rounded-4xl p-10 text-center text-white"
                variants={slideRight}
                initial="hidden"
                whileInView="show"
                viewport={useViewport}
              >
                <div className="flex justify-center mb-6">
                  <Trophy size={72} className="text-yellow" aria-hidden="true" />
                </div>
                <p className="font-cherry text-h3 mb-3">{summit.date}</p>
                <p className="font-body text-white/80 mb-2">
                  {summit.duration} · {summit.location}
                </p>
                <p className="font-body text-yellow font-bold">
                  ₦{summit.price?.toLocaleString()} per delegate
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {otherEvents.length > 0 ? (
            <>
              <motion.div
                className="text-center mb-14"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={useViewport}
              >
                <SectionLabel>Coming up</SectionLabel>
                <h2 className="font-cherry text-h2 text-dark mb-4">
                  Book your child's place
                </h2>
                <p className="text-dark/80 font-body text-lead">
                  Check the age range on each event before registering.
                </p>
              </motion.div>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={useViewport}
              >
                {otherEvents.map((ev) => (
                  <motion.div key={ev.id} variants={scaleIn}>
                    <Card className="h-full">
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
                        <h3 className="font-cherry text-h3 text-dark mb-3">
                          {ev.title}
                        </h3>
                        <p className="text-dark/75 font-body text-sm leading-relaxed mb-5">
                          {ev.description}
                        </p>
                        {ev.price && (
                          <p className="text-dark font-extrabold font-body mb-5">
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
                            Register for {ev.title.split(":")[0]}
                          </Button>
                          <a
                            href={buildGoogleCalendarUrl(ev)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex min-h-[44px] items-center justify-center gap-2 w-full text-dark/75 hover:text-dark font-body font-bold text-sm rounded-full transition-colors"
                          >
                            <Calendar size={14} aria-hidden="true" /> Add to
                            Google Calendar
                          </a>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </>
          ) : (
            !summit && (
              <motion.div
                className="mx-auto max-w-3xl rounded-4xl border-2 border-dark bg-white p-8 text-center shadow-press sm:p-12"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={useViewport}
              >
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
            )
          )}
        </div>
      </section>

      {/* ── PAST EVENTS ── */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            <SectionLabel>Past events</SectionLabel>
            <h2 className="font-cherry text-h2 text-dark mb-4">
              What We've Done Together
            </h2>
            <p className="text-gray-600 font-body text-lead max-w-xl mx-auto">
              A look back at the cohorts, summits, and showcases that shaped our
              community.
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
              {
                title: "Creative Quest: Cohort 1",
                date: "March 2024",
                tag: "Writing Studio",
                color: "#c8b5ff",
              },
              {
                title: "Loud & Fearless: Cohort 3",
                date: "October 2024",
                tag: "Public Speaking",
                color: "#ffe14d",
              },
              {
                title: "Discovery Haven Children's Summit 2024",
                date: "November 2024",
                tag: "Annual Summit",
                color: "#ffc93c",
              },
              {
                title: "The Curiosity Box: Cohort 2",
                date: "January 2025",
                tag: "Critical Thinking",
                color: "#9be3c4",
              },
              {
                title: "The EQ Lab: Cohort 1",
                date: "April 2025",
                tag: "Emotional Intelligence",
                color: "#ffb894",
              },
              {
                title: "Creative Quest: Cohort 4",
                date: "June 2025",
                tag: "Writing Studio",
                color: "#c8b5ff",
              },
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
                      className="text-xs font-bold font-body px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: ev.color,
                        color: "#2b1838",
                      }}
                    >
                      {ev.tag}
                    </span>
                    <span className="text-xs font-bold font-body px-3 py-1 rounded-full bg-gray-100 text-gray-400">
                      Past Event
                    </span>
                  </div>
                  <h3 className="font-cherry text-h3 text-dark mb-1">
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
      <section className="py-16 md:py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            <SectionLabel className="text-aqua">
              Artifacts from events
            </SectionLabel>
            <h2 className="font-cherry text-h2 text-white mb-4">
              Moments Worth Remembering
            </h2>
            <p className="text-gray-400 font-body text-lead max-w-xl mx-auto">
              Highlights, stories, and memories captured from every event.
            </p>
          </motion.div>

          {/* Loud & Fearless Videos
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
                <h3 className="font-cherry text-h3 text-white">
                  Loud & Fearless
                </h3>
                <p className="text-gray-400 font-body text-sm">
                  Performance clips from our public speaking showcases
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="aspect-video bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 hover:border-aqua/40 transition-colors cursor-pointer group"
                >
                  <div className="text-center">
                    <PlayCircle
                      size={40}
                      className="text-white/40 group-hover:text-lilac transition-colors mx-auto mb-2"
                    />
                    <p className="text-white/30 font-body text-xs group-hover:text-white/60 transition-colors">
                      Video #{i}: Coming Soon
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          */}

          {/* Photo Gallery */}
          <PhotoGallery />

          {/* Books by Kids
          <motion.div
            className="mt-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-aqua/20 flex items-center justify-center">
                <BookOpen size={22} className="text-lilac" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-cherry text-h3 text-white">
                  Books by Kids
                </h3>
                <p className="text-gray-400 font-body text-sm">
                  Stories written and published by our Creative Quest scholars
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-[3/4] bg-gradient-to-br from-aqua/20 to-aqua/5 rounded-2xl flex items-center justify-center border border-white/10 hover:border-aqua/40 transition-colors"
                >
                  <div className="text-center px-4">
                    <BookOpen size={36} className="text-lilac/60 mx-auto mb-2" aria-hidden="true" />
                    <p className="text-white/30 font-body text-xs">
                      Book cover #{i}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          */}
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
