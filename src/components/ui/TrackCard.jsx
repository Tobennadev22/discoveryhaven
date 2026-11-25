import { Link } from "react-router-dom";
import { ArrowRight, PenLine, Mic2, SearchCheck, Brain } from "lucide-react";
import { SmartLink } from "./SmartLink";
import { enrolmentState } from "../../lib/enrolment";

const ICONS = { PenLine, Mic2, SearchCheck, Brain };

// One Haven Academy track. The track colour is the card's only accent:
// the colour block at the top. Everything else is plum on white so accent
// colours never stack inside one card.
export function TrackCard({ course, headingLevel = "h3" }) {
  const Icon = ICONS[course.icon];
  const Heading = headingLevel;
  const state = enrolmentState(course);
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-4xl border-2 border-dark bg-white shadow-press">
      <div className="p-6 pb-5" style={{ backgroundColor: course.color }}>
        {Icon && (
          <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-dark bg-white text-dark">
            <Icon size={22} aria-hidden="true" />
          </span>
        )}
        <Heading className="font-cherry text-h3 text-dark">
          {course.title}
        </Heading>
        <p className="mt-1 font-body text-sm font-bold text-dark/75">
          {course.subtitle}
        </p>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="mb-2 font-body text-xs font-extrabold uppercase tracking-wider text-dark/60">
          What you’ll do
        </p>
        <p className="mb-6 font-body text-[1rem] font-semibold leading-relaxed text-dark">
          {course.activity}
        </p>

        <ul className="mb-5 mt-auto flex flex-wrap gap-2" aria-label="Course details">
          {[`Ages ${course.ages}`, course.duration, course.format].map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-cream px-3 py-1 font-body text-xs font-bold text-dark/75"
            >
              {tag}
            </li>
          ))}
        </ul>

        <p className="mb-1 flex items-center gap-2 font-body text-sm font-bold text-dark/80">
          <span
            aria-hidden="true"
            className={`h-2 w-2 rounded-full ${state.status === "open" ? "bg-aqua" : "bg-dark/30"}`}
          />
          {state.label}
        </p>
        <SmartLink
          href={state.action.href}
          className="mb-3 inline-flex min-h-[44px] w-fit items-center font-body text-sm font-bold text-dark/80 underline underline-offset-4 hover:text-aqua"
        >
          {state.action.label}
          <span className="sr-only"> for {course.title}</span>
        </SmartLink>

        <Link
          to={course.href}
          className="inline-flex min-h-[44px] w-fit items-center gap-1.5 font-body text-[0.9375rem] font-extrabold text-dark underline decoration-dark decoration-2 underline-offset-[6px] transition-all hover:gap-2.5 hover:text-aqua"
        >
          {course.cta} <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
