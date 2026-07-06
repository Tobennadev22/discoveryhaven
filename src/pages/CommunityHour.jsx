import { Timer, MonitorSmartphone, Gift } from "lucide-react";
import { Button } from "../components/ui/Button";
import { SectionLabel } from "../components/ui/SectionLabel";
import {
  motion,
  fadeUp,
  stagger,
  scaleIn,
  useViewport,
} from "../components/ui/Motion";

export default function CommunityHour() {
  return (
    <>
      <section className="bg-dark py-28">
        <motion.div
          className="max-w-3xl mx-auto px-4 text-center"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <SectionLabel className="text-aqua">COMMUNITY HOUR</SectionLabel>
          <h1 className="font-cherry text-5xl lg:text-6xl bg-gradient-to-r from-amber-200 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight">
            Access the Sanctuary
          </h1>
          <p className="font-cherry text-2xl text-aqua mb-6">
            A Private, 20-Minute Conversation with Our Founder
          </p>
          <p className="text-gray-300 font-body text-xl leading-relaxed">
            No sales pitch. No pressure. Just an honest conversation about your
            child's learning journey and how we can help.
          </p>
        </motion.div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-16"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            {[
              {
                Icon: Timer,
                title: "20 Minutes",
                desc: "A focused, purposeful conversation — no fluff.",
              },
              {
                Icon: MonitorSmartphone,
                title: "Zoom or Phone",
                desc: "Whatever works best for you.",
              },
              {
                Icon: Gift,
                title: "Completely Free",
                desc: "No obligation, no follow-up pressure.",
              },
            ].map((f, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                className="bg-white rounded-2xl p-7 text-center shadow-sm"
              >
                <div className="flex justify-center mb-3">
                  <f.Icon size={40} className="text-aqua" />
                </div>
                <h3 className="font-cherry text-xl text-slate-900 mb-2">
                  {f.title}
                </h3>
                <p className="text-gray-500 font-body text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="bg-white rounded-3xl p-10 shadow-sm text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            <h2 className="font-cherry text-3xl text-slate-900 mb-4">
              Book Your Slot
            </h2>
            <p className="text-gray-600 font-body mb-8 max-w-lg mx-auto">
              Select a time that works for you. Stella will personally host the
              call — no assistants, no sales team.
            </p>
            <div className="rounded-2xl overflow-hidden" style={{ minHeight: 660 }}>
              <iframe
                src="https://calendly.com/stella-chibuikeezike"
                width="100%"
                height="660"
                frameBorder="0"
                title="Book a Community Hour with Stella"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
