import { MonitorSmartphone, Gift } from "lucide-react";
import { SectionLabel } from "../components/ui/SectionLabel";
import {
  motion,
  fadeUp,
  stagger,
  scaleIn,
  useViewport,
} from "../components/ui/Motion";
import { Seo } from "../components/Seo";
import { SITE } from "../data/site";

export default function CommunityHour() {
  return (
    <>
      <Seo title="Book a call" description={"Want help choosing a programme or exploring a partnership? Pick a time to talk with us."} />
      <section className="bg-cream pt-36 pb-12 lg:pt-44 lg:pb-16">
        <motion.div
          className="max-w-3xl mx-auto px-4 text-center"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <SectionLabel>Book a call</SectionLabel>
          <h1 className="font-cherry text-h1 text-dark mb-6">Book a call.</h1>
          <p className="text-dark/80 font-body text-lead">
            Want help choosing a programme or exploring a partnership? Pick a
            time to talk with us.
          </p>
        </motion.div>
      </section>

      <section className="pb-16 md:pb-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-2 gap-6 mb-16 max-w-2xl mx-auto"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            {[
              {
                Icon: MonitorSmartphone,
                title: "Zoom or phone",
                desc: "Whatever works best for you.",
              },
              {
                Icon: Gift,
                title: "Free",
                desc: "No obligation, no follow-up pressure.",
              },
            ].map((f, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                className="bg-white rounded-3xl border-2 border-dark p-7 text-center"
              >
                <div className="flex justify-center mb-3">
                  <f.Icon size={40} className="text-aqua" aria-hidden="true" />
                </div>
                <h3 className="font-cherry text-h3 text-dark mb-2">
                  {f.title}
                </h3>
                <p className="text-gray-500 font-body text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="bg-white rounded-4xl border-2 border-dark p-5 sm:p-10 shadow-press text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            <h2 className="font-cherry text-h2 text-dark mb-4">
              Pick a time
            </h2>
            <p className="text-gray-600 font-body mb-8 max-w-lg mx-auto">
              Choose a time that works for you. Our founder, Stella, hosts each
              call.
            </p>
            <div className="rounded-2xl overflow-hidden" style={{ minHeight: 660 }}>
              <iframe
                src={SITE.calendlyUrl}
                width="100%"
                height="660"
                frameBorder="0"
                title="Book a call with Discovery Haven (Calendly)"
                className="w-full"
              />
            </div>
            <p className="mt-6 font-body text-sm text-dark/80">
              Booking calendar not showing?{" "}
              <a
                href={SITE.calendlyUrl}
                className="font-bold text-dark underline underline-offset-4"
              >
                Open the booking page
              </a>
              .
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
