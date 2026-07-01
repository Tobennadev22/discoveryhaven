import { Button } from "../components/ui/Button";
import { SectionLabel } from "../components/ui/SectionLabel";
import {
  motion,
  fadeUp,
  stagger,
  scaleIn,
  useViewport,
} from "../components/ui/Motion";

const TIERS = [
  {
    title: "Institutional Funding",
    desc: "Apply for grant funding to support Discovery Haven programmes and scholarship pathways.",
    icon: "🏛️",
    cta: "Apply for Funding",
  },
  {
    title: "Event Partnership",
    desc: "Co-host, sponsor, or collaborate on the Discovery Haven Children's Summit and annual events.",
    icon: "🤝",
    cta: "Request Event Partnership",
  },
  {
    title: "School & Network Access",
    desc: "Integrate Discovery Haven into your school's enrichment programme or educator network.",
    icon: "🏫",
    cta: "Explore School Access",
  },
];

export default function Friends() {
  return (
    <>
      <section className="bg-dark py-28">
        <motion.div
          className="max-w-3xl mx-auto px-4 text-center"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <SectionLabel className="text-aqua">
            FRIENDS OF DISCOVERY HAVEN
          </SectionLabel>
          <h1 className="font-cherry text-5xl lg:text-6xl text-white mb-6">
            Collaborate with the Haven
          </h1>
          <p className="text-gray-300 font-body text-xl">
            Build something meaningful with us. Every great mission needs great
            allies.
          </p>
        </motion.div>
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
            <SectionLabel>CURRENT PARTNERS</SectionLabel>
            <h2 className="font-cherry text-4xl text-slate-900 mb-4">
              Our Community
            </h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            {[
              "Our Nigeria Publishing",
              "Camping Nigeria",
              "Partner 3",
              "Partner 4",
            ].map((p, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                className="bg-white rounded-2xl p-8 text-center border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-3">🤝</div>
                <p className="font-bold font-body text-slate-900 text-sm">
                  {p}
                </p>
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
            <SectionLabel>PARTNERSHIP TIERS</SectionLabel>
            <h2 className="font-cherry text-4xl text-slate-900 mb-4">
              How We Can Work Together
            </h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            {TIERS.map((t, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-shadow text-center"
              >
                <div className="text-4xl mb-4">{t.icon}</div>
                <h3 className="font-cherry text-2xl text-slate-900 mb-3">
                  {t.title}
                </h3>
                <p className="text-gray-500 font-body text-sm leading-relaxed mb-6">
                  {t.desc}
                </p>
                <Button variant="outline-dark" size="sm">
                  {t.cta}
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
            <Button
              variant="primary"
              size="lg"
              onClick={() => (window.location.href = "/contact")}
            >
              Get in Touch →
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
