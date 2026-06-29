import { Button } from '../components/ui/Button'
import { SectionLabel } from '../components/ui/SectionLabel'

const SDGS = [
  { num: 'SDG 4', title: 'Quality Education', desc: 'All our programmes directly deliver quality, inclusive, equitable education and promote lifelong learning.', primary: true },
  { num: 'SDG 17', title: 'Partnerships for the Goals', desc: 'We actively build partnerships with schools, institutions, embassies, and community organisations to amplify impact.', primary: true },
  { num: 'SDG 3', title: 'Good Health & Well-Being', desc: 'Emotional intelligence and self-regulation training supports children\'s mental health and well-being.', primary: false },
  { num: 'SDG 5', title: 'Gender Equality', desc: 'We ensure equal access and representation for girls in all our programmes and leadership spaces.', primary: false },
  { num: 'SDG 10', title: 'Reduced Inequalities', desc: 'Scholarship pathways and community partnerships bring Discovery Haven to underserved communities.', primary: false },
  { num: 'SDG 16', title: 'Peace, Justice & Strong Institutions', desc: 'We build children who resolve conflicts peacefully, think critically, and participate constructively in society.', primary: false },
]

export default function Advocacy() {
  return (
    <>
      <section className="bg-dark py-28">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <SectionLabel className="text-aqua">ADVOCACY & SDGs</SectionLabel>
          <h1 className="font-cherry text-5xl lg:text-6xl text-white mb-6">Global Impact, Local Execution</h1>
          <p className="text-gray-300 font-body text-xl">How Discovery Haven maps to the United Nations Sustainable Development Goals.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel>SDG ALIGNMENT</SectionLabel>
            <h2 className="font-cherry text-4xl text-dark mb-4">Our Global Framework</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SDGS.map((sdg, i) => (
              <div key={i} className={`rounded-2xl p-7 border ${sdg.primary ? 'bg-aqua text-white border-aqua' : 'bg-cream border-gray-100'}`}>
                <div className={`font-bold font-body text-xs uppercase tracking-wide mb-3 ${sdg.primary ? 'text-white/70' : 'text-aqua'}`}>{sdg.num}</div>
                <h3 className={`font-cherry text-2xl mb-3 ${sdg.primary ? 'text-white' : 'text-dark'}`}>{sdg.title}</h3>
                <p className={`font-body text-sm leading-relaxed ${sdg.primary ? 'text-white/80' : 'text-gray-600'}`}>{sdg.desc}</p>
                {sdg.primary && <span className="inline-block mt-4 bg-white/20 text-white text-xs font-bold font-body px-3 py-1 rounded-full">Primary SDG</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-cherry text-4xl text-white mb-4">Align Your Organisation</h2>
          <p className="text-gray-400 font-body text-lg mb-8">Partner with Discovery Haven to advance quality education and build the next generation of African leaders.</p>
          <Button variant="aqua" size="lg" className="bg-aqua text-white hover:bg-opacity-90" onClick={() => window.location.href='/friends'}>Explore Partnership →</Button>
        </div>
      </section>
    </>
  )
}
