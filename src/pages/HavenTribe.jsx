import { Lightbulb, Sprout, Bell } from "lucide-react";
import { SectionLabel } from "../components/ui/SectionLabel";
import { ParentSignup } from "../components/ui/ParentSignup";
import {
  motion,
  fadeUp,
  stagger,
  scaleIn,
  useViewport,
} from "../components/ui/Motion";
import { Seo } from "../components/Seo";
import { SITE } from "../data/site";

const BENEFITS = [
  {
    Icon: Lightbulb,
    title: "Activities to try together",
    desc: "Simple ideas you can do at home in a few minutes, with no special kit.",
  },
  {
    Icon: Sprout,
    title: "Raising confident young leaders",
    desc: "Practical ideas for building curiosity, confidence and care.",
  },
  {
    Icon: Bell,
    title: "Programme updates",
    desc: "Hear when new courses and experiences open for registration.",
  },
];

export default function HavenTribe() {
  return (
    <>
      <Seo title="Parent Community" description={"Join the Discovery Haven Parent Community for simple activities to try together, ideas for raising confident young leaders and updates on upcoming programmes."} />
      <section className="bg-cream pt-36 pb-16 lg:pt-44 lg:pb-24">
        <motion.div
          className="max-w-3xl mx-auto px-4 text-center"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <SectionLabel>Parent Community</SectionLabel>
          <h1 className="font-cherry text-h1 text-dark mb-6">
            Bring a little discovery home.
          </h1>
          <p className="text-dark/80 font-body text-lead mb-10">
            Get simple activities to try together, ideas for raising confident
            young leaders and updates on upcoming programmes.
          </p>
          <a
            href={SITE.communityOptInUrl || "#join"}
            className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border-2 border-dark bg-aqua px-7 py-3.5 font-body text-[1.0625rem] font-extrabold text-white shadow-press transition-[transform,box-shadow,background-color] duration-150 hover:-translate-y-px hover:bg-aquaDark active:translate-y-1 active:shadow-none"
          >
            Join the parent community
          </a>
        </motion.div>
      </section>

      <section className="py-16 md:py-24 bg-canvas">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            <SectionLabel>What you’ll get</SectionLabel>
            <h2 className="font-cherry text-h2 text-dark">
              Small ideas, big conversations
            </h2>
          </motion.div>
          <motion.ul
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            {BENEFITS.map(({ Icon, title, desc }) => (
              <motion.li
                key={title}
                variants={scaleIn}
                className="rounded-4xl border-2 border-dark bg-white p-7"
              >
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow text-dark">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="font-body font-extrabold text-h4 text-dark mb-2">
                  {title}
                </h3>
                <p className="font-body text-dark/80 leading-relaxed">{desc}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <div id="join" className="scroll-mt-24">
        <ParentSignup heading="Join the parent community" />
      </div>
    </>
  );
}
