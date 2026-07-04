import { BookOpen, PenLine, Mic2, SearchCheck, Brain } from "lucide-react";

const COURSE_ICONS = { PenLine, Mic2, SearchCheck, Brain };
import { Button } from "../components/ui/Button";
import { SectionLabel } from "../components/ui/SectionLabel";
import { COURSES } from "../data/content";
import {
  motion,
  fadeUp,
  stagger,
  scaleIn,
  useViewport,
} from "../components/ui/Motion";

export default function Explorers() {
  return (
    <>
      <section className="bg-yellow py-28">
        <motion.div
          className="max-w-3xl mx-auto px-4 text-center"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <h1 className="font-cherry text-5xl lg:text-7xl text-slate-900 mb-4">
            Hey Explorer! 👋
          </h1>
          <p className="font-cherry text-3xl text-slate-900/70 mb-6">
            Ready for an Adventure?
          </p>
          <p className="text-slate-900/60 font-body text-xl">
            Discovery Haven is your place to learn cool stuff, make friends, and
            discover what makes YOU amazing.
          </p>
        </motion.div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.h2
            className="font-cherry text-4xl text-slate-900 mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            What Will YOU Do Here?
          </motion.h2>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            {COURSES.map((c) => (
              <motion.div
                key={c.id}
                variants={scaleIn}
                className="rounded-3xl p-6 text-center"
                style={{ backgroundColor: c.color + "20" }}
              >
                <div className="mb-4 flex justify-center">
                  {(() => { const Icon = COURSE_ICONS[c.icon]; return Icon ? <Icon size={48} style={{ color: c.color }} /> : null; })()}
                </div>
                <h3 className="font-cherry text-lg text-slate-900">
                  {c.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            <SectionLabel>PUBLISHED STORIES</SectionLabel>
            <h2 className="font-cherry text-4xl text-slate-900 mb-4">
              Little Voices Book Series
            </h2>
            <p className="text-gray-600 font-body text-lg max-w-xl mx-auto">
              Stories written by our Creative Quest scholars — published,
              distributed, and celebrated.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                className="aspect-[3/4] bg-gradient-to-br from-aqua/20 to-aqua/5 rounded-2xl flex items-center justify-center"
              >
                <BookOpen size={48} className="text-aqua/60" />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            <SectionLabel>DEBATE & SPEECH</SectionLabel>
            <h2 className="font-cherry text-4xl text-slate-900 mb-4">
              Loud & Fearless Showcases
            </h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                className="aspect-video bg-dark rounded-2xl flex items-center justify-center"
              >
                <span className="text-white font-body text-sm">
                  Video #{i} coming soon
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-aqua">
        <motion.div
          className="max-w-2xl mx-auto px-4 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={useViewport}
        >
          <h2 className="font-cherry text-4xl text-white mb-4">
            Tell Your Parents!
          </h2>
          <p className="text-white/80 font-body text-lg mb-8">
            Show them this page and ask them to sign you up. Your adventure
            starts here.
          </p>
          <Button
            variant="yellow"
            size="lg"
            onClick={() => (window.location.href = "/haven-academy")}
          >
            Enrol Your Child & Watch Their Work Come Alive →
          </Button>
        </motion.div>
      </section>
    </>
  );
}
