import { Button } from '../components/ui/Button'
import { SectionLabel } from '../components/ui/SectionLabel'

export default function CommunityHour() {
  return (
    <>
      <section className="bg-dark py-28">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <SectionLabel className="text-aqua">COMMUNITY HOUR</SectionLabel>
          <h1 className="font-cherry text-5xl lg:text-6xl text-white mb-4 leading-tight">
            Access the Sanctuary
          </h1>
          <p className="font-cherry text-2xl text-aqua mb-6">A Private, 15-Minute Conversation with Our Founder</p>
          <p className="text-gray-300 font-body text-xl leading-relaxed">
            No sales pitch. No pressure. Just an honest conversation about your child's learning journey and how we can help.
          </p>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: '⏱', title: '15 Minutes', desc: 'A focused, purposeful conversation — no fluff.' },
              { icon: '💻', title: 'Zoom or Phone', desc: 'Whatever works best for you.' },
              { icon: '🎁', title: 'Completely Free', desc: 'No obligation, no follow-up pressure.' },
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 text-center shadow-sm">
                <div className="text-4xl mb-3">{f.icon}</div>
                <h3 className="font-cherry text-xl text-dark mb-2">{f.title}</h3>
                <p className="text-gray-500 font-body text-sm">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-sm text-center">
            <h2 className="font-cherry text-3xl text-dark mb-4">Book Your Slot</h2>
            <p className="text-gray-600 font-body mb-8 max-w-lg mx-auto">
              Select a time that works for you. Stella will personally host the call — no assistants, no sales team.
            </p>
            {/* Calendly embed placeholder */}
            <div className="bg-cream rounded-2xl border-2 border-dashed border-gray-200 p-16 mb-6">
              <p className="text-gray-400 font-body text-sm">Calendly booking widget will be embedded here.</p>
              <p className="text-gray-400 font-body text-xs mt-2">Connect your Calendly account at calendly.com</p>
            </div>
            <Button variant="primary" size="lg">Secure Your 15-Minute Slot</Button>
          </div>
        </div>
      </section>
    </>
  )
}
