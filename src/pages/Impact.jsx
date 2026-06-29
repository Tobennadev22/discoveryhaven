import { Button } from '../components/ui/Button'
import { SectionLabel } from '../components/ui/SectionLabel'
import { IMPACT_METRICS } from '../data/content'

export default function Impact() {
  return (
    <>
      <section className="bg-dark py-28">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <SectionLabel className="text-aqua">REPORTS & IMPACT</SectionLabel>
          <h1 className="font-cherry text-5xl lg:text-6xl text-white mb-6">Data, Transparency, and Cognitive Growth</h1>
          <p className="text-gray-300 font-body text-xl">Our commitment to measurable impact — documented, shared, and accountable.</p>
        </div>
      </section>

      <section className="py-16 bg-aqua">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {IMPACT_METRICS.map(m => (
              <div key={m.label} className="text-center">
                <div className="font-cherry text-5xl lg:text-6xl text-white mb-2">{m.number}</div>
                <div className="font-body text-white/80 font-semibold text-sm uppercase tracking-wide">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel>ANNUAL IMPACT REPORTS</SectionLabel>
            <h2 className="font-cherry text-4xl text-dark mb-4">Download Our Reports</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {['2023–2024 Impact Report', '2024–2025 Impact Report', 'SDG Alignment Document'].map((r, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 text-center hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">📄</div>
                <h3 className="font-cherry text-xl text-dark mb-3">{r}</h3>
                <Button variant="outline-dark" size="sm">Download PDF</Button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h2 className="font-cherry text-3xl text-dark mb-4">Partner with Discovery Haven</h2>
            <p className="text-gray-600 font-body text-lg mb-8 max-w-xl mx-auto">We're actively seeking institutional partners, grant bodies, and aligned organisations to scale our impact across Africa.</p>
            <Button variant="primary" size="lg" onClick={() => window.location.href='/friends'}>Explore Partnership →</Button>
          </div>
        </div>
      </section>
    </>
  )
}
