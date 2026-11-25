import campingNigeriaLogo from "../assets/campingNigerialogo.png";
import socLogo from "../assets/soc.png";
import schoolofconfidenceLogo from "../assets/schoolofconfidence.png";
import nigeriaMagazineLogo from "../assets/Nigeriamagazine.png";
import { Users, Landmark, Handshake } from "lucide-react";
import { Button } from "../components/ui/Button";
import { BRAND } from "../data/content";
import { SITE } from "../data/site";
import { SectionLabel } from "../components/ui/SectionLabel";
import {
  motion,
  fadeUp,
  stagger,
  scaleIn,
  useViewport,
} from "../components/ui/Motion";
import { Seo } from "../components/Seo";

// Partnership enquiries go to the brand inbox. Change this if a
// different enquiry destination is approved.
const PARTNERSHIP_ENQUIRY_HREF = `mailto:${BRAND.email}?subject=${encodeURIComponent(
  "Partnership enquiry",
)}`;

const TIERS = [
  {
    id: "friend",
    icon: Users,
    title: "Become a Friend of DH",
    subtitle: "The Power of Collective Community",
    desc: "Our ecosystem thrives on the shared commitment of visionary individuals and institutions. Becoming a Friend of Discovery Haven means embedding yourself directly into our creative and analytical community. Whether you are an individual looking to sponsor a child's journey through our intensive weekend tracks, a thought leader eager to participate in our seasonal summits, or an educational institution ready to formally endorse our studio-style pedagogy, your presence strengthens our collective impact.",
    engage:
      "Direct child sponsorships, event panels, or organisational endorsements.",
  },
  {
    id: "fund",
    icon: Landmark,
    title: "Fund Our Programmes & Outreach",
    subtitle: "Fuel the Engine of Deeper Learning",
    desc: "Sustainable educational reform requires predictable, strategic capital. By funding our core programs and localised outreach tracks, your corporate foundation or philanthropic house directly underwrites the raw infrastructure of innovation. Your capital funds open-access publication copies of The Discovery Codex, provides high-fidelity logic toolkits for our studios, and powers the expansion of our flagship inter-school tournaments across new regions.",
    engage:
      "Corporate CSR grants, programmatic sponsorships, or infrastructure funding.",
  },
  {
    id: "collaborate",
    icon: Handshake,
    title: "Co-Curate & Collaborate",
    subtitle: "Bridge Industries with Youth Logic",
    desc: "We believe that learning shouldn't be isolated from the real world. This tier is designed for forward-thinking brands, research universities, creative industries, and civic bodies that want to actively co-create with us. Whether it is a telecommunications giant wanting to brand our tech-logic labs, an arts institute co-archiving our youth literary publications, or a university department providing graduate mentors for our student portfolios, this is where we build high-impact, mutually beneficial collaborations.",
    engage:
      "Brand activations, internship and mentor placements, industry hosting and co-hosting, or co-published media projects.",
  },
];

// The interest forms here used to discard what people typed. Until an
// approved enquiry destination is connected, each path links to email and
// Book a call instead.
function TierCard({ tier }) {
  const Icon = tier.icon;
  return (
    <motion.div
      variants={scaleIn}
      className="bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="p-8">
        <div className="w-12 h-12 rounded-2xl bg-aqua/10 flex items-center justify-center mb-5">
          <Icon size={24} className="text-aqua" />
        </div>
        <h3 className="font-cherry text-h3 text-dark mb-1">
          {tier.title}
        </h3>
        <p className="font-body text-xs font-bold text-aqua mb-4">
          {tier.subtitle}
        </p>
        <p className="text-gray-600 font-body text-sm leading-relaxed mb-4">
          {tier.desc}
        </p>
        <p className="text-gray-500 font-body text-xs leading-relaxed italic">
          <span className="font-bold not-italic text-dark/80">
            How you can engage:{" "}
          </span>
          {tier.engage}
        </p>
      </div>
      <div className="flex flex-col gap-2 border-t border-dark/10 px-8 py-5 sm:flex-row sm:items-center sm:gap-6">
        <a
          href={`mailto:${BRAND.email}?subject=${encodeURIComponent(`Partnership enquiry: ${tier.title}`)}`}
          className="inline-flex min-h-[44px] items-center font-body font-extrabold text-dark underline decoration-aqua decoration-[3px] underline-offset-[6px] hover:text-aqua"
        >
          Discuss a partnership<span className="sr-only">: {tier.title}</span>
        </a>
        <a
          href={SITE.calendlyUrl}
          className="inline-flex min-h-[44px] items-center font-body font-bold text-dark/80 underline underline-offset-4 hover:text-dark"
        >
          Book a call
        </a>
      </div>
    </motion.div>
  );
}

const PARTNERS = [
  { name: "Our Nigeria Publishing", logo: socLogo },
  { name: "Camping Nigeria", logo: campingNigeriaLogo },
  { name: "School of Confidence", logo: schoolofconfidenceLogo },
  { name: "Our Nigeria News Magazine", logo: nigeriaMagazineLogo },
];

export default function Partnership() {
  return (
    <>
      <Seo title="Partnerships" description={"We work with schools and organisations that want children to explore, create and lead beyond the classroom."} />
      {/* HERO */}
      <section className="bg-cream overflow-hidden pt-36 pb-16 lg:pt-44 lg:pb-24">
        <motion.div
          className="max-w-4xl mx-auto px-4 text-center"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <SectionLabel>Partnerships</SectionLabel>
          <h1 className="font-cherry text-h1 text-dark mb-6">
            Let’s create something children will remember.
          </h1>
          <p className="text-dark/80 font-body text-lead max-w-3xl mx-auto mb-6">
            We work with schools and organisations that want children to
            explore, create and lead beyond the classroom.
          </p>
          <p className="text-dark/70 font-body text-sm max-w-2xl mx-auto mb-10 leading-relaxed">
            We are aligned with UN SDG 4 (Quality Education) and SDG 17
            (Partnerships for the Goals).
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PARTNERSHIP_ENQUIRY_HREF}
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border-2 border-dark bg-aqua px-7 py-3.5 font-body text-[1.0625rem] font-extrabold text-white shadow-press transition-[transform,box-shadow,background-color] duration-150 hover:-translate-y-px hover:bg-aquaDark active:translate-y-1 active:shadow-none"
            >
              Discuss a partnership
            </a>
            <Button
              variant="outline-dark"
              size="lg"
              onClick={() =>
                document
                  .getElementById("partnership-tiers")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              See ways to partner
            </Button>
          </div>
        </motion.div>
      </section>

      {/* PARTNER LOGOS STRIP */}
      <section className="bg-canvas py-14 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <SectionLabel className="mb-6">
            Our current partners and collaborators
          </SectionLabel>
          <motion.div
            className="flex flex-wrap justify-center gap-6 my-8"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            {PARTNERS.map((p, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                className="bg-gray-50 border border-gray-200 rounded-2xl px-4 py-2 flex items-center justify-center min-w-[100px]"
              >
                {p.logo ? (
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="h-32 w-auto"
                    // style={{
                    //   filter:
                    //     "brightness(0) saturate(100%) invert(28%) sepia(13%) saturate(757%) hue-rotate(175deg) brightness(94%) contrast(85%)",
                    // }}
                  />
                ) : (
                  <span className="font-bold font-body text-dark/80 text-sm">
                    {p.name}
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>
          <p className="text-gray-400 font-body text-sm">
            Interested in joining this list? Choose your partnership path below.
          </p>
        </div>
      </section>

      {/* PARTNERSHIP TIERS */}
      <section id="partnership-tiers" className="bg-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            <SectionLabel>Partnership paths</SectionLabel>
            <h2 className="font-cherry text-h2 text-dark mb-4">
              How We Can Work Together
            </h2>
            <p className="text-gray-500 font-body text-lead max-w-xl mx-auto">
              Three distinct paths, one shared purpose. Choose the one that fits
              your capacity and vision.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            {TIERS.map((tier) => (
              <TierCard key={tier.id} tier={tier} />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
