import { ArrowRight } from "lucide-react";
import { Button } from "../components/ui/Button";
import { SectionLabel } from "../components/ui/SectionLabel";
import { VALUES } from "../data/content";
import {
  motion,
  fadeUp,
  stagger,
  slideLeft,
  slideRight,
  scaleIn,
  useViewport,
} from "../components/ui/Motion";
import FounderImg from "../assets/stellaChibuikeEzike.jpg";

export default function About() {
  return (
    <>
      <section className="bg-dark py-28">
        <motion.div
          className="max-w-3xl mx-auto px-4 text-center"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <SectionLabel className="text-aqua">ABOUT US</SectionLabel>
          <h1 className="font-cherry text-5xl lg:text-7xl bg-gradient-to-r from-amber-200 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight">
            Building Tomorrow's Leaders Today
          </h1>
          <p className="text-gray-300 font-body text-xl leading-relaxed">
            Discovery Haven is a learning organisation built on the belief that
            every child carries extraordinary potential — and our job is to help
            them find it.
          </p>
        </motion.div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              variants={slideLeft}
              initial="hidden"
              whileInView="show"
              viewport={useViewport}
            >
              <SectionLabel>OUR MISSION</SectionLabel>
              <h2 className="font-cherry text-4xl text-slate-900 mb-6">
                Why We Exist
              </h2>
              <p className="text-gray-600 font-body text-lg leading-relaxed">
                To cultivate intellectually curious, emotionally sovereign, and
                radically confident children — through programmes that honour
                their natural intelligence and prepare them for the real world.
              </p>
            </motion.div>
            <motion.div
              variants={slideRight}
              initial="hidden"
              whileInView="show"
              viewport={useViewport}
            >
              <SectionLabel>OUR VISION</SectionLabel>
              <h2 className="font-cherry text-4xl text-slate-900 mb-6">
                Where We're Going
              </h2>
              <p className="text-gray-600 font-body text-lg leading-relaxed">
                A generation of African children who think clearly, speak
                fearlessly, and lead with empathy — children who know who they
                are and what they stand for.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            <SectionLabel>OUR CORE VALUES</SectionLabel>
            <h2 className="font-cherry text-4xl text-slate-900 mb-4">
              What We Stand For
            </h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            {VALUES.map((v, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                className="text-center p-8"
              >
                <div className="text-5xl mb-5">{v.icon}</div>
                <h3 className="font-cherry text-2xl text-slate-900 mb-3">
                  {v.title}
                </h3>
                <p className="text-gray-600 font-body leading-relaxed">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={slideLeft}
              initial="hidden"
              whileInView="show"
              viewport={useViewport}
            >
              <SectionLabel className="text-yellow">
                FOUNDER'S STORY
              </SectionLabel>
              <h2 className="font-cherry text-4xl text-white mb-6">
                Meet Stella
              </h2>
              <p className="text-gray-300 font-body text-lg leading-relaxed mb-6">
                Discovery Haven was born out of a simple but urgent observation:
                that Nigeria's brightest children were graduating school without
                the ability to communicate, think independently, or manage their
                emotions.
              </p>
              <p className="text-gray-300 font-body text-lg leading-relaxed mb-8">
                Stella founded Discovery Haven to fill that gap — not just as an
                educator, but as a mother who refused to accept that confidence
                and critical thinking were luxuries. Every programme is built on
                lived experience, research, and a deep respect for each child's
                unique intelligence.
              </p>
              <Button variant="yellow" size="lg">
                Read Stella's Full Story →
              </Button>
            </motion.div>
            <motion.div
              className="bg-aqua/10 rounded-3xl p-12 text-center"
              variants={slideRight}
              initial="hidden"
              whileInView="show"
              viewport={useViewport}
            >
              <div className="w-60 h-60  mx-auto flex items-center justify-center text-6xl mb-6">
                <img src={FounderImg} alt="stella chibuike-ezike" />
              </div>
              <h3 className="font-cherry text-2xl text-white mb-2">Stella</h3>
              <p className="text-yellow font-bold font-body">
                Founder, Discovery Haven Kids Co.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <motion.div
          className="max-w-3xl mx-auto px-4 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={useViewport}
        >
          <SectionLabel>WHO WE SERVE</SectionLabel>
          <h2 className="font-cherry text-4xl text-slate-900 mb-6">
            Built for Every Curious Child
          </h2>
          <p className="text-gray-600 font-body text-lg leading-relaxed mb-10">
            We work with children aged 4–15 across Nigeria and the diaspora.
            Whether your child is shy or outspoken, academic or creative —
            there's a track designed for exactly where they are and where
            they're going.
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => (window.location.href = "/haven-academy")}
          >
            Find the Right Programme <ArrowRight size={18} />
          </Button>
        </motion.div>
      </section>
    </>
  );
}
