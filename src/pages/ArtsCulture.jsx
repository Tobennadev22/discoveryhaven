import { Button } from "../components/ui/Button";
import { SectionLabel } from "../components/ui/SectionLabel";
import {
  motion,
  fadeUp,
  stagger,
  scaleIn,
  useViewport,
} from "../components/ui/Motion";

export default function ArtsCulture() {
  return (
    <>
      <section className="bg-dark pt-36 pb-20 lg:pt-44 lg:pb-28">
        <motion.div
          className="max-w-3xl mx-auto px-4 text-center"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <SectionLabel className="text-aqua">Arts & culture</SectionLabel>
          <h1 className="font-cherry text-h1 bg-gradient-to-r from-amber-200 to-cyan-400 bg-clip-text text-transparent mb-6">
            The Student Gallery
          </h1>
          <p className="text-gray-300 font-body text-lead">
            Where children's brilliance gets the spotlight it deserves.
          </p>
        </motion.div>
      </section>

      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            <SectionLabel>Published stories</SectionLabel>
            <h2 className="font-cherry text-h2 text-slate-900 mb-4">
              Little Voices Book Series
            </h2>
            <p className="text-gray-600 font-body text-lead max-w-xl mx-auto">
              Stories written by our Creative Quest scholars that are published,
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
                <span className="text-5xl">📖</span>
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
            <SectionLabel>Debate & speech</SectionLabel>
            <h2 className="font-cherry text-h2 text-slate-900 mb-4">
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
                className="aspect-video bg-cocoa rounded-2xl flex items-center justify-center"
              >
                <span className="text-white font-body text-sm">
                  Video #{i} coming soon
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => (window.location.href = "/haven-academy")}
            >
              Enrol Your Child & Watch Their Work Come Alive
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
