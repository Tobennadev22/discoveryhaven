import { FileText } from "lucide-react";
import { Button } from "../components/ui/Button";
import { SectionLabel } from "../components/ui/SectionLabel";
import { IMPACT_METRICS } from "../data/content";
import {
  motion,
  fadeUp,
  stagger,
  scaleIn,
  useViewport,
} from "../components/ui/Motion";

export default function Impact() {
  return (
    <>
      <section className="bg-dark py-28">
        <motion.div
          className="max-w-3xl mx-auto px-4 text-center"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <SectionLabel className="text-aqua">REPORTS & IMPACT</SectionLabel>
          <h1 className="font-cherry text-5xl lg:text-6xl text-aqua mb-6">
            Data, Transparency, and Cognitive Growth
          </h1>
          <p className="text-gray-300 font-body text-xl">
            Our commitment to measurable impact — documented, shared, and
            accountable.
          </p>
        </motion.div>
      </section>

      <section className="py-16 bg-aqua">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            {IMPACT_METRICS.map((m) => (
              <motion.div
                key={m.label}
                variants={scaleIn}
                className="text-center"
              >
                <div className="font-cherry text-5xl lg:text-6xl text-white mb-2">
                  {m.number}
                </div>
                <div className="font-body text-white/80 font-semibold text-sm uppercase tracking-wide">
                  {m.label}
                </div>
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
            <SectionLabel>ANNUAL IMPACT REPORTS</SectionLabel>
            <h2 className="font-cherry text-4xl text-slate-900 mb-4">
              Download Our Reports
            </h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            {[
              "2023–2024 Impact Report",
              "2024–2025 Impact Report",
              "SDG Alignment Document",
            ].map((r, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                className="bg-white rounded-2xl p-8 border border-gray-100 text-center hover:shadow-md transition-shadow"
              >
                <div className="flex justify-center mb-4"><FileText size={40} className="text-aqua" /></div>
                <h3 className="font-cherry text-xl text-slate-900 mb-3">{r}</h3>
                <Button variant="outline-dark" size="sm">
                  Download PDF
                </Button>
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
            <h2 className="font-cherry text-3xl text-slate-900 mb-4">
              Partner with Discovery Haven
            </h2>
            <p className="text-gray-600 font-body text-lg mb-8 max-w-xl mx-auto">
              We're actively seeking institutional partners, grant bodies, and
              aligned organisations to scale our impact across Africa.
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={() => (window.location.href = "/friends")}
            >
              Explore Partnership →
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
