import { Link } from "react-router-dom";
import { FileText, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/Button";
import { SectionLabel } from "../components/ui/SectionLabel";
import {
  motion,
  fadeUp,
  stagger,
  scaleIn,
  useViewport,
} from "../components/ui/Motion";

const METRICS = [
  { number: "200+", label: "Children Reached" },
  { number: "12+", label: "Programmes Delivered" },
  { number: "4", label: "Studio Tracks" },
  { number: "3+", label: "Countries Represented" },
  { number: "2", label: "Years of Measurable Impact" },
];

const SDGS = [
  {
    number: "SDG 4",
    label: "Quality Education",
    heading: "Dethroning Rote Memorisation",
    body: "We build learning environments where critical thinking, structural logic, and emotional sovereignty replace passive copying. Every Discovery Haven studio is designed to develop the kind of deep, transferable learning that standard schooling rarely reaches. We do not ask children to memorise and repeat. We ask them to investigate, debate, create, and prove.",
    outcomes: [
      "Studio-based learning that develops critical thinking over content recall",
      "Weekly live sessions that build communication and self-expression progressively",
      "A published youth literary anthology that gives scholars a permanent creative legacy",
      "Open-licensed pedagogical resources available to educators globally",
    ],
    actions: [
      { label: "View Studio Media and Student Projects →", href: "/explore" },
      { label: "Watch Our Labs in Action →", href: "/explore" },
    ],
  },
  {
    number: "SDG 5",
    label: "Gender Equality",
    heading: "Elevating Diverse Youth Voices",
    body: "Our studios intentionally cultivate space for young girls to lead. In every cohort, we ensure that female scholars are not just participants but protagonists — mastering forensic logic, debate, and strategic communication so they can confidently shape civic discourse now and in the future. Discovery Haven believes that gender equality in education begins not at university but in the earliest years of learning, when a child first discovers what she is capable of.",
    outcomes: [
      "Intentional facilitation that draws female scholars into leadership roles within every session",
      "Debate and public speaking tracks that give young girls a structured platform to own their voice",
      "A gallery of student leaders documenting the achievements of female scholars across every cohort",
    ],
    actions: [
      { label: "See Our Gallery of Student Leaders →", href: "/explore" },
      { label: "Watch Tournament Debates →", href: "/explore" },
    ],
  },
  {
    number: "SDG 10",
    label: "Reduced Inequalities",
    heading: "Democratising Elite 21st-Century Competencies",
    body: "The skills Discovery Haven teaches — critical thinking, emotional intelligence, confident communication, creative expression — have historically been available only to children in elite private institutions. We reject that status quo. By designing virtual, accessible programmes and actively taking our methodology into underserved communities through outreach tracks, we ensure that no child is excluded from the kind of learning that changes the trajectory of a life.",
    outcomes: [
      "Virtual delivery model that removes geographic and logistical barriers to access",
      "Scholarship and sponsorship pathways for children from underserved communities",
      "Outreach tracks that bring Discovery Haven methodology directly into public schools and community spaces",
      "Open-access publication of student work celebrating achievement across all backgrounds",
    ],
    actions: [
      { label: "Explore Our Outreach Footprint →", href: "/explore" },
      { label: "See Our Community Works →", href: "/explore" },
    ],
  },
  {
    number: "SDG 17",
    label: "Partnerships for the Goals",
    heading: "Building the Alliances That Scale the Work",
    body: "Discovery Haven cannot achieve its mission alone — and we are not trying to. SDG 17 is about building the strategic partnerships that multiply impact beyond what any single organisation can achieve. Every friend of Discovery Haven, every co-curator, and every institutional funder is a direct expression of SDG 17 in action. We actively build and maintain partnerships with cultural institutes, corporate foundations, universities, publishing houses, civic organisations, and government education bodies around a shared commitment to transformative child education.",
    outcomes: [
      "Active partnership framework connecting cultural institutes, embassies, and philanthropic foundations",
      "Co-publication and co-distribution of student work through Our Nigeria Publishing",
      "Community event partnerships including WildRoots Camp and Base Camp Kids",
      "Institutional endorsement programme for schools and educational bodies",
    ],
    actions: [
      { label: "Explore Partnership Opportunities →", href: "/partnership" },
      { label: "Download Our Sponsorship Kit →", href: "/partnership" },
    ],
  },
];

const REPORT_ITEMS = [
  "Cohort-by-cohort scholar development data",
  "Critical thinking and logical reasoning growth metrics",
  "Communication confidence assessments before and after each studio",
  "Emotional intelligence and self-regulation outcome tracking",
  "Pedagogical performance analysis and programme evolution notes",
  "Case studies from individual scholar journeys",
];

const ADVOCACY_ITEMS = [
  "Open-access publication of The Discovery Codex — our permanent youth literary anthology",
  "Inter-school and inter-district tournaments open to public and private schools across Nigeria",
  "Community outreach sessions bringing Discovery Haven methodology into underserved neighbourhoods",
  "Public exhibitions of student work celebrating every scholar's achievement regardless of background",
  "Partnerships with civic bodies, local government education departments, and cultural organisations",
  "The Discovery Haven Children's Summit — our annual flagship event where scholars perform, present, and lead before a live audience",
];

const FUNDERS = [
  "British Council",
  "UNICEF",
  "Goethe-Institut",
  "Ford Foundation",
  "Tony Elumelu Foundation",
  "African Development Bank",
  "Commonwealth Education Trust",
];

export default function Impact() {
  return (
    <>
      {/* HERO */}
      <section className="bg-dark py-28 overflow-hidden">
        <motion.div
          className="max-w-4xl mx-auto px-4 text-center"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <SectionLabel className="text-aqua">
            Discovery Haven · Impact, Advocacy & Global Alignment
          </SectionLabel>
          <h1 className="font-cherry text-5xl lg:text-7xl bg-gradient-to-r from-amber-200 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight">
            We Do Not Just Believe in What We Build. We Measure It.
          </h1>
          <p className="text-gray-300 font-body text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
            Discovery Haven is not a feel-good programme. It is a measurable,
            evidence-based learning institute whose work is anchored in global
            standards, driven by real data, and accountable to the children,
            families, and communities it serves. Every studio we run, every
            scholar we develop, and every community we enter is tracked,
            evaluated, and reported with full transparency.
          </p>
          {/* SDG positioning strip */}
          <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 mb-10 max-w-3xl mx-auto text-left">
            <p className="font-body text-yellow text-sm font-bold mb-1">
              Primary Alignment: SDG 4 — Quality Education · SDG 17 —
              Partnerships for the Goals
            </p>
            <p className="font-body text-white/60 text-sm">
              Secondary Alignment: SDG 5 — Gender Equality · SDG 10 — Reduced
              Inequalities · SDG 16 — Peace, Justice and Strong Institutions
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => (window.location.href = "/contact")}
            >
              Download Our Latest Impact Report →
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => (window.location.href = "/partnership")}
            >
              View Our SDG Mapping →
            </Button>
          </div>
        </motion.div>
      </section>

      {/* SECTION INTRO */}
      <section className="py-20 bg-white">
        <motion.div
          className="max-w-3xl mx-auto px-4 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={useViewport}
        >
          <h2 className="font-cherry text-3xl lg:text-4xl text-slate-900 mb-6 leading-tight">
            Impact, advocacy, and global alignment — three parts of one mission.
          </h2>
          <p className="text-gray-600 font-body text-lg leading-relaxed">
            At Discovery Haven, impact is not a department. It is a way of
            operating. Everything we measure, every partnership we build, and
            every community we advocate for is rooted in the same conviction
            that drove Stella to start this organisation — that every child
            carries extraordinary potential, and that potential deserves to be
            nurtured, documented, and amplified. This page tells the story of
            what that looks like in practice.
          </p>
        </motion.div>
      </section>

      {/* METRICS STRIP */}
      <section className="bg-aqua py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-5 gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            {METRICS.map((m) => (
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

      {/* PART ONE — IMPACT REPORTS */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            <SectionLabel>PART ONE · IMPACT REPORTS AND INSIGHTS</SectionLabel>
            <h2 className="font-cherry text-4xl lg:text-5xl text-slate-900 mb-3 mt-4">
              Data That Proves the Work.
            </h2>
            <p className="font-body text-aqua font-bold text-lg mb-6">
              We do not just believe in our programmes. We measure them.
            </p>
            <p className="text-gray-600 font-body text-lg leading-relaxed mb-4">
              At Discovery Haven, every cohort ends with a comprehensive
              evaluation. We track how scholars grow across three core
              dimensions — critical thinking and logical reasoning,
              communication and self-expression, and emotional intelligence and
              self-regulation. Our seasonal impact reports translate what
              happens inside our virtual studios into hard, honest metrics that
              tell us what is working, what needs to evolve, and how far each
              child has come from where they started.
            </p>
            <p className="text-gray-600 font-body text-lg leading-relaxed mb-10">
              We open-license our insights deliberately. We want our models to
              serve as transparent blueprints for educators, researchers, and
              policymakers who are working toward the same goal — a generation
              of children who are genuinely prepared for the world they are
              inheriting.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-3xl p-8 mb-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            <h3 className="font-cherry text-2xl text-slate-900 mb-6">
              What Our Reports Contain
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {REPORT_ITEMS.map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-aqua flex-shrink-0 mt-0.5 flex items-center justify-center">
                    <span className="text-white font-bold text-xs">
                      {i + 1}
                    </span>
                  </div>
                  <span className="font-body text-gray-700 text-sm leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
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
              Download Our Latest Impact Report →
            </Button>
          </motion.div>
        </div>
      </section>

      {/* PART TWO — SDGs */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
            className="mb-16"
          >
            <SectionLabel>
              PART TWO · GLOBAL ALIGNMENT AND SDG MAPPING
            </SectionLabel>
            <h2 className="font-cherry text-4xl lg:text-5xl text-slate-900 mb-3 mt-4 leading-tight">
              Local Execution. Global Standards. Measurable Impact.
            </h2>
            <p className="font-body text-aqua font-bold text-lg mb-6">
              Discovery Haven maps every learning outcome against the United
              Nations Sustainable Development Goals — because local execution
              must meet global accountability.
            </p>
            <p className="text-gray-600 font-body text-lg leading-relaxed mb-4">
              When Discovery Haven maps its work against the United Nations
              SDGs, it is not performative. It is strategic. It signals to
              global funders, embassies, cultural institutes, and philanthropic
              foundations that our work meets internationally recognised
              standards of educational impact. It opens doors to partnerships
              with the British Council, UNICEF, the Goethe-Institut, the Ford
              Foundation, the African Development Bank, and the Commonwealth
              Education Trust. And it holds us accountable — because measuring
              against global benchmarks means we cannot hide behind vague claims
              of positive impact. We have to prove it.
            </p>
            <p className="text-gray-600 font-body text-lg leading-relaxed">
              When a child in Lagos learns to debate with evidence and lead with
              empathy, that is SDG 4 in action. When a young girl stands up in
              our Loud and Fearless studio and delivers a speech that changes
              how her peers think, that is SDG 5. When a child from an
              underserved community accesses the same quality of deeper learning
              as their counterpart in a private school, that is SDG 10. When
              Discovery Haven builds strategic partnerships with cultural
              institutes, embassies, and philanthropic foundations to scale that
              access, that is SDG 17.
            </p>
          </motion.div>

          <div className="flex flex-col gap-10">
            {SDGS.map((sdg, i) => (
              <motion.div
                key={sdg.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={useViewport}
                className="bg-gray-50 rounded-3xl p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-aqua text-white font-bold font-body text-xs tracking-widest uppercase px-3 py-1.5 rounded-full">
                    {sdg.number}
                  </span>
                  <span className="font-cherry text-xl text-slate-900">
                    {sdg.label}
                  </span>
                </div>
                <h3 className="font-cherry text-2xl text-slate-900 mb-3">
                  {sdg.heading}
                </h3>
                <p className="text-gray-600 font-body text-base leading-relaxed mb-6">
                  {sdg.body}
                </p>
                <p className="font-bold font-body text-slate-900 text-sm mb-3">
                  How we advance {sdg.number}:
                </p>
                <ul className="flex flex-col gap-2 mb-6">
                  {sdg.outcomes.map((o, j) => (
                    <li key={j} className="flex gap-3 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-aqua flex-shrink-0 mt-2" />
                      <span className="font-body text-gray-700 text-sm leading-relaxed">
                        {o}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  {sdg.actions.map((a) => (
                    <Link
                      key={a.label}
                      to={a.href}
                      className="inline-flex items-center gap-1 text-aqua font-bold font-body text-sm hover:gap-2 transition-all"
                    >
                      {a.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => (window.location.href = "/partnership")}
            >
              View Our Full SDG Mapping Document →
            </Button>
          </motion.div>
        </div>
      </section>

      {/* PART THREE — ADVOCACY */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
            className="mb-12"
          >
            <SectionLabel>PART THREE · ADVOCACY AND OUTREACH</SectionLabel>
            <h2 className="font-cherry text-4xl lg:text-5xl text-slate-900 mb-3 mt-4 leading-tight">
              Advocacy That Goes Beyond the Classroom.
            </h2>
            <p className="font-body text-aqua font-bold text-lg mb-6">
              True educational equity means ensuring that high-calibre deeper
              learning is never a luxury.
            </p>
            <p className="text-gray-600 font-body text-lg leading-relaxed mb-4">
              The children who need Discovery Haven most are not always the ones
              who can find us most easily. That is why advocacy is not an
              afterthought at Discovery Haven — it is a core function of
              everything we build.
            </p>
            <p className="text-gray-600 font-body text-lg leading-relaxed mb-4">
              Through our outreach tracks, we actively take our studio
              methodologies into underserved communities. We bridge gaps between
              public and private educational networks. We challenge the
              rote-learning status quo through public exhibitions,
              inter-district tournaments, and localised community activities. We
              document and share what we find — because the evidence of what is
              possible for children who are given the right environment is the
              most powerful advocacy tool we have.
            </p>
            <p className="text-gray-600 font-body text-lg leading-relaxed">
              We are not just building programmes. We are building the argument
              for a different kind of education — and making that argument loud
              enough that systems have to listen.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-3xl p-8 mb-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            <h3 className="font-cherry text-2xl text-slate-900 mb-6">
              Our Advocacy Work Includes
            </h3>
            <div className="flex flex-col gap-3">
              {ADVOCACY_ITEMS.map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-aqua flex-shrink-0 mt-2" />
                  <span className="font-body text-gray-700 text-sm leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => (window.location.href = "/explore")}
            >
              Explore Our Outreach Footprint →
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FUNDER CREDIBILITY */}
      <section className="bg-dark py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            <SectionLabel className="text-yellow">
              FOR INSTITUTIONAL PARTNERS AND FUNDERS
            </SectionLabel>
            <h2 className="font-cherry text-4xl lg:text-5xl text-white mb-6 mt-4 leading-tight">
              Discovery Haven is built for institutional partnership.
            </h2>
            <p className="text-gray-300 font-body text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
              Our impact documentation, SDG alignment framework, and
              open-licensed pedagogical reports are designed to meet the due
              diligence requirements of global funders and institutional
              partners. We maintain detailed cohort records, outcome data, and
              programme evaluation reports that are available to verified
              institutional partners on request.
            </p>
            <p className="text-gray-400 font-body text-base mb-8">
              We are actively pursuing partnerships and funding relationships
              with the following organisations:
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {FUNDERS.map((f) => (
                <span
                  key={f}
                  className="bg-white/10 text-white font-body text-sm font-bold px-4 py-2 rounded-full"
                >
                  {f}
                </span>
              ))}
            </div>
            <p className="text-gray-400 font-body text-base mb-10 max-w-xl mx-auto">
              If you represent a funding body, embassy, cultural institute, or
              institutional partner and would like to discuss a formal
              partnership, programme sponsorship, or grant alignment, we would
              love to hear from you.
            </p>
            <Button
              variant="yellow"
              size="lg"
              onClick={() => (window.location.href = "/contact")}
            >
              Get in Touch About a Partnership →
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CLOSING STRIP */}
      <section className="bg-aqua py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            <h2 className="font-cherry text-4xl lg:text-5xl text-white mb-6 leading-tight">
              Every data point represents a child who showed up, did the work,
              and left different.
            </h2>
            <p className="text-white/85 font-body text-lg leading-relaxed mb-10">
              Behind every metric in our impact reports is a real child — a
              child who found their voice in Loud and Fearless, who published
              their first story in Creative Quest, who learned to sit with a
              difficult emotion in the EQ Lab, or who cracked a logic puzzle in
              the Curiosity Box and realised for the first time that they loved
              thinking. That is what we are measuring. That is what we are
              protecting. And that is what every partnership, every report, and
              every advocacy effort at Discovery Haven exists to sustain.
            </p>
            <Button
              variant="yellow"
              size="lg"
              onClick={() => (window.location.href = "/partnership")}
            >
              Join the Mission — Become a Partner →
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
