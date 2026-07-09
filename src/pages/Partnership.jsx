import { useState } from "react";
import campingNigeriaLogo from "../assets/campingNigerialogo.webp";
import { Users, Landmark, Handshake, ChevronDown, ChevronUp } from "lucide-react";
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
    id: "friend",
    icon: Users,
    title: "Become a Friend of DH",
    subtitle: "The Power of Collective Community",
    desc: "Our ecosystem thrives on the shared commitment of visionary individuals and institutions. Becoming a Friend of Discovery Haven means embedding yourself directly into our creative and analytical community. Whether you are an individual looking to sponsor a child's journey through our intensive weekend tracks, a thought leader eager to participate in our seasonal summits, or an educational institution ready to formally endorse our studio-style pedagogy, your presence strengthens our collective impact.",
    engage: "Direct child sponsorships, event panels, or organisational endorsements.",
  },
  {
    id: "fund",
    icon: Landmark,
    title: "Fund Our Programmes & Outreach",
    subtitle: "Fuel the Engine of Deeper Learning",
    desc: "Sustainable educational reform requires predictable, strategic capital. By funding our core programs and localised outreach tracks, your corporate foundation or philanthropic house directly underwrites the raw infrastructure of innovation. Your capital funds open-access publication copies of The Discovery Codex, provides high-fidelity logic toolkits for our studios, and powers the expansion of our flagship inter-school tournaments across new regions.",
    engage: "Corporate CSR grants, programmatic sponsorships, or infrastructure funding.",
  },
  {
    id: "collaborate",
    icon: Handshake,
    title: "Co-Curate & Collaborate",
    subtitle: "Bridge Industries with Youth Logic",
    desc: "We believe that learning shouldn't be isolated from the real world. This tier is designed for forward-thinking brands, research universities, creative industries, and civic bodies that want to actively co-create with us. Whether it is a telecommunications giant wanting to brand our tech-logic labs, an arts institute co-archiving our youth literary publications, or a university department providing graduate mentors for our student portfolios, this is where we build high-impact, mutually beneficial collaborations.",
    engage: "Brand activations, internship and mentor placements, industry hosting and co-hosting, or co-published media projects.",
  },
];

function FormFriend({ onClose }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", plugIn: [], message: "" });
  const options = [
    "Sponsor a child's studio track",
    "Attend or speak at our events and summits",
    "Provide an official institutional endorsement",
  ];
  const toggle = (opt) => setForm((f) => ({
    ...f,
    plugIn: f.plugIn.includes(opt) ? f.plugIn.filter((o) => o !== opt) : [...f.plugIn, opt],
  }));
  return (
    <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input required placeholder="Full Name / Institutional Contact" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="input-field" />
        <input required type="email" placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="input-field" />
      </div>
      <input placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="input-field" />
      <div>
        <p className="font-bold font-body text-slate-900 text-sm mb-3">How would you like to plug in?</p>
        <div className="flex flex-col gap-2">
          {options.map((opt) => (
            <label key={opt} className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" checked={form.plugIn.includes(opt)} onChange={() => toggle(opt)} className="w-4 h-4 accent-aqua" />
              <span className="font-body text-sm text-gray-700">{opt}</span>
            </label>
          ))}
        </div>
      </div>
      <textarea rows={4} placeholder="Tell us why you're passionate about Discovery Haven..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="input-field resize-none" />
      <Button variant="primary" size="lg" type="submit">Submit →</Button>
    </form>
  );
}

function FormFund({ onClose }) {
  const [form, setForm] = useState({ org: "", contact: "", email: "", website: "", area: "", message: "", budget: "" });
  return (
    <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input required placeholder="Organisation / Foundation Name" value={form.org} onChange={(e) => setForm({ ...form, org: e.target.value })} className="input-field" />
        <input required placeholder="Primary Contact Person & Title" value={form.contact} onChange={(e) => setForm({ ...form, contact: e.target.value })} className="input-field" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input required type="email" placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="input-field" />
        <input placeholder="Corporate Website" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} className="input-field" />
      </div>
      <div>
        <p className="font-bold font-body text-slate-900 text-sm mb-3">Funding Area of Interest</p>
        <div className="flex flex-col gap-2">
          {[
            "Core Programme Sponsorship (Studios, Curricula)",
            "Regional Outreach & Tournament Expansion",
            "Printing & Open Educational Resources (OER) Distribution",
          ].map((opt) => (
            <label key={opt} className="flex items-center gap-3 cursor-pointer">
              <input type="radio" name="area" value={opt} checked={form.area === opt} onChange={() => setForm({ ...form, area: opt })} className="w-4 h-4 accent-aqua" />
              <span className="font-body text-sm text-gray-700">{opt}</span>
            </label>
          ))}
        </div>
      </div>
      <textarea rows={4} placeholder="What would you like to fund? Tell us why you're passionate about Discovery Haven..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="input-field resize-none" />
      <input placeholder="Estimated Budget / Grant Range (optional)" value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} className="input-field" />
      <Button variant="primary" size="lg" type="submit">Submit →</Button>
    </form>
  );
}

function FormCollaborate({ onClose }) {
  const [form, setForm] = useState({ company: "", contact: "", email: "", website: "", pathways: [], idea: "" });
  const options = [
    "Host youth internships or offer mentor placements",
    "Co-create studio content / Brand activations",
    "Media, publishing, or research collaboration",
    "Industry hosting and co-hosting",
  ];
  const toggle = (opt) => setForm((f) => ({
    ...f,
    pathways: f.pathways.includes(opt) ? f.pathways.filter((o) => o !== opt) : [...f.pathways, opt],
  }));
  return (
    <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input required placeholder="Company / Creative Collective Name" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="input-field" />
        <input required placeholder="Contact Person & Designation" value={form.contact} onChange={(e) => setForm({ ...form, contact: e.target.value })} className="input-field" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input required type="email" placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="input-field" />
        <input placeholder="Portfolio / Website Link" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} className="input-field" />
      </div>
      <div>
        <p className="font-bold font-body text-slate-900 text-sm mb-3">Collaboration Pathway</p>
        <div className="flex flex-col gap-2">
          {options.map((opt) => (
            <label key={opt} className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" checked={form.pathways.includes(opt)} onChange={() => toggle(opt)} className="w-4 h-4 accent-aqua" />
              <span className="font-body text-sm text-gray-700">{opt}</span>
            </label>
          ))}
        </div>
      </div>
      <textarea rows={4} placeholder="Briefly describe your idea for collaboration..." value={form.idea} onChange={(e) => setForm({ ...form, idea: e.target.value })} className="input-field resize-none" />
      <Button variant="primary" size="lg" type="submit">Submit →</Button>
    </form>
  );
}

const FORMS = { friend: FormFriend, fund: FormFund, collaborate: FormCollaborate };

function TierCard({ tier }) {
  const [open, setOpen] = useState(false);
  const Icon = tier.icon;
  const Form = FORMS[tier.id];
  return (
    <motion.div variants={scaleIn} className="bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-8">
        <div className="w-12 h-12 rounded-2xl bg-aqua/10 flex items-center justify-center mb-5">
          <Icon size={24} className="text-aqua" />
        </div>
        <h3 className="font-cherry text-2xl text-slate-900 mb-1">{tier.title}</h3>
        <p className="font-body text-xs font-bold text-aqua uppercase tracking-widest mb-4">{tier.subtitle}</p>
        <p className="text-gray-600 font-body text-sm leading-relaxed mb-4">{tier.desc}</p>
        <p className="text-gray-500 font-body text-xs leading-relaxed italic">
          <span className="font-bold not-italic text-slate-700">How you can engage: </span>{tier.engage}
        </p>
      </div>
      <div className="border-t border-gray-100 px-8 py-4">
        <button
          onClick={() => setOpen((o) => !o)}
          className="w-full flex items-center justify-between font-cherry text-lg text-aqua hover:text-aqua/80 transition-colors"
        >
          <span>{open ? "Close Form" : "Express Interest →"}</span>
          {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
        {open && (
          <div className="mt-6 pb-2">
            <Form />
          </div>
        )}
      </div>
    </motion.div>
  );
}

const PARTNERS = [
  { name: "Our Nigeria Publishing", logo: null },
  { name: "Camping Nigeria", logo: campingNigeriaLogo },
];

export default function Partnership() {
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
            Friends of Discovery Haven · Partnerships & Collaborations
          </SectionLabel>
          <h1 className="font-cherry text-5xl lg:text-7xl bg-gradient-to-r from-amber-200 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight">
            Build the Future of Learning. With Us.
          </h1>
          <p className="text-gray-300 font-body text-xl max-w-3xl mx-auto mb-6 leading-relaxed">
            Discovery Haven does not grow in isolation. Every child we reach, every studio we run, every publication we produce, and every summit we host is made possible by a growing network of visionary individuals, forward-thinking organisations, and purpose-driven institutions who believe that the next generation deserves something better than ordinary education. This is your invitation to be part of that network.
          </p>
          <p className="text-gray-500 font-body text-sm max-w-2xl mx-auto mb-10 leading-relaxed">
            We are aligned with UN SDG 4 (Quality Education) and SDG 17 (Partnerships for the Goals). Our partners include cultural institutes, publishing houses, civic organisations, and educational bodies across Africa and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" onClick={() => document.getElementById("partnership-tiers").scrollIntoView({ behavior: "smooth" })}>
              Become a Partner Today →
            </Button>
            <Button variant="outline" size="lg">
              Download Our Partnership Proposal →
            </Button>
          </div>
        </motion.div>
      </section>

      {/* PARTNER LOGOS STRIP */}
      <section className="bg-white py-14 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <SectionLabel className="text-aqua mb-6">OUR CURRENT PARTNERS AND COLLABORATORS</SectionLabel>
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
                className="bg-gray-50 border border-gray-200 rounded-2xl px-8 py-5 flex items-center justify-center min-w-[180px]"
              >
                {p.logo ? (
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="h-10 w-auto"
                    style={{ filter: "brightness(0) saturate(100%) invert(22%) sepia(13%) saturate(757%) hue-rotate(175deg) brightness(94%) contrast(85%)" }}
                  />
                ) : (
                  <span className="font-bold font-body text-slate-700 text-sm">{p.name}</span>
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
      <section id="partnership-tiers" className="bg-cream py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            <SectionLabel>PARTNERSHIP PATHS</SectionLabel>
            <h2 className="font-cherry text-4xl lg:text-5xl text-slate-900 mb-4">
              How We Can Work Together
            </h2>
            <p className="text-gray-500 font-body text-lg max-w-xl mx-auto">
              Three distinct paths, one shared purpose. Choose the one that fits your capacity and vision.
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
