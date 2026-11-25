import { CheckCircle, Phone } from "lucide-react";
import imgCreativeQuest from "../assets/creative_quest.png";
import imgLoudFearless from "../assets/loud_&_fearless.png";
import imgCuriosityBox from "../assets/curiosity_box.png";
import imgEQLab from "../assets/The_EQ_lab.png";
import { ButtonLink } from "../components/ui/Button";
import { SectionLabel } from "../components/ui/SectionLabel";
import { TrackCard } from "../components/ui/TrackCard";
import { COURSES, BOOK_A_CALL } from "../data/content";
import { enrolmentState } from "../lib/enrolment";
import {
  motion,
  fadeUp,
  slideLeft,
  slideRight,
  useViewport,
} from "../components/ui/Motion";
import { Seo } from "../components/Seo";

const COURSE_IMAGES = {
  "creative-quest": imgCreativeQuest,
  "loud-fearless": imgLoudFearless,
  "curiosity-box": imgCuriosityBox,
  "eq-lab": imgEQLab,
};

// Track detail: activity and learning outcome first, then age bands,
// format and what to expect. Dates and fees live on the campaign page,
// reached only when a group is open with a campaign URL.
function CourseSection({ course, reverse = false }) {
  const state = enrolmentState(course);
  return (
    <section
      id={course.id}
      aria-labelledby={`${course.id}-title`}
      className="border-b border-dark/10 py-20 lg:py-28 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            className={reverse ? "lg:order-2" : ""}
            variants={reverse ? slideRight : slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            <p
              className="inline-block rounded-full border-2 border-dark px-4 py-1.5 mb-4 text-sm font-extrabold font-body text-dark"
              style={{ backgroundColor: course.color }}
            >
              {course.subtitle}
            </p>
            <h2
              id={`${course.id}-title`}
              className="font-cherry text-h2 text-dark mb-5"
            >
              {course.title}
            </h2>

            <p className="font-body text-lead font-semibold text-dark mb-6">
              {course.activity}
            </p>

            <h3 className="font-body font-extrabold text-h5 text-dark mb-3">
              What your child will learn
            </h3>
            <ul className="space-y-2.5 mb-7">
              {course.outcomes.map((o) => (
                <li key={o} className="flex gap-3 items-start">
                  <CheckCircle
                    size={18}
                    className="text-aqua flex-shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <span className="text-dark/80 font-body">{o}</span>
                </li>
              ))}
            </ul>

            <h3 className="font-body font-extrabold text-h5 text-dark mb-3">
              What to expect
            </h3>
            <ul className="flex gap-2 flex-wrap mb-4">
              {[
                "Separate groups for ages 7 to 11 and 12 to 16",
                course.duration,
                course.format,
              ].map((tag) => (
                <li
                  key={tag}
                  className="bg-cream rounded-full px-3 py-1.5 text-sm font-bold font-body text-dark/80"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <p className="text-dark/80 font-body mb-8">{course.bonus}</p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <ButtonLink to={course.href} variant="primary" size="lg">
                {course.cta}
              </ButtonLink>
              <div className="font-body text-sm">
                <p className="font-bold text-dark/80">{state.label}</p>
                <ButtonLink
                  to={state.action.href}
                  variant="ghost"
                  size="sm"
                  className="-ml-4 underline underline-offset-4"
                >
                  {state.action.label}
                  <span className="sr-only"> for {course.title}</span>
                </ButtonLink>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={reverse ? "lg:order-1" : ""}
            variants={reverse ? slideLeft : slideRight}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            <div
              className="relative rounded-4xl overflow-hidden aspect-[4/5] border-2 border-dark"
              style={{ backgroundColor: course.color }}
            >
              {course.image && (
                <img
                  src={course.image}
                  alt=""
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function HavenAcademy() {
  return (
    <>
      <Seo title="Haven Academy" description={"Haven Academy courses for ages 7 to 16 in critical thinking, emotional intelligence, creative writing and public speaking, with separate groups for ages 7 to 11 and 12 to 16."} />
      <section className="bg-cream pt-36 pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
        <motion.div
          className="max-w-4xl mx-auto px-4 text-center"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <SectionLabel>Haven Academy</SectionLabel>
          <h1 className="font-cherry text-h1 text-dark mb-6">
            Find their next adventure.
          </h1>
          <p className="text-dark/80 font-body text-lead max-w-2xl mx-auto">
            Our courses are for ages 7 to 16, with separate groups for ages 7
            to 11 and 12 to 16.
          </p>
        </motion.div>
      </section>

      <section aria-labelledby="tracks-heading" className="bg-cream pb-20 lg:pb-28">
        <h2 id="tracks-heading" className="sr-only">
          The four tracks
        </h2>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {COURSES.map((course) => (
            <TrackCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {COURSES.map((course, i) => (
        <CourseSection
          key={course.id}
          course={{ ...course, image: COURSE_IMAGES[course.id] || course.image }}
          reverse={i % 2 !== 0}
        />
      ))}

      <section className="py-20 md:py-28 bg-canvas">
        <motion.div
          className="max-w-3xl mx-auto px-4 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={useViewport}
        >
          <h2 className="font-cherry text-h2 text-dark mb-4">
            Not sure which track fits?
          </h2>
          <p className="text-dark/80 font-body text-lead mb-10">
            Want help choosing a programme? Pick a time to talk with us.
          </p>
          <ButtonLink to={BOOK_A_CALL.href} variant="outline-dark" size="lg">
            <Phone size={18} aria-hidden="true" /> Book a call
          </ButtonLink>
        </motion.div>
      </section>
    </>
  );
}
