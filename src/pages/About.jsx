import { ArrowRight } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { SectionLabel } from '../components/ui/SectionLabel'
import { VALUES } from '../data/content'

export default function About() {
  return (
    <>
      <section className="bg-dark py-28">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <SectionLabel className="text-aqua">ABOUT US</SectionLabel>
          <h1 className="font-cherry text-5xl lg:text-7xl text-white mb-6 leading-tight">
            Building Tomorrow's Leaders Today
          </h1>
          <p className="text-gray-300 font-body text-xl leading-relaxed">
            Discovery Haven is a learning organisation built on the belief that every child carries extraordinary potential — and our job is to help them find it.
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <SectionLabel>OUR MISSION</SectionLabel>
              <h2 className="font-cherry text-4xl text-dark mb-6">Why We Exist</h2>
              <p className="text-gray-600 font-body text-lg leading-relaxed">
                To cultivate intellectually curious, emotionally sovereign, and radically confident children — through programmes that honour their natural intelligence and prepare them for the real world.
              </p>
            </div>
            <div>
              <SectionLabel>OUR VISION</SectionLabel>
              <h2 className="font-cherry text-4xl text-dark mb-6">Where We're Going</h2>
              <p className="text-gray-600 font-body text-lg leading-relaxed">
                A generation of African children who think clearly, speak fearlessly, and lead with empathy — children who know who they are and what they stand for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel>OUR CORE VALUES</SectionLabel>
            <h2 className="font-cherry text-4xl text-dark mb-4">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((v, i) => (
              <div key={i} className="text-center p-8">
                <div className="text-5xl mb-5">{v.icon}</div>
                <h3 className="font-cherry text-2xl text-dark mb-3">{v.title}</h3>
                <p className="text-gray-600 font-body leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER'S STORY */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel className="text-aqua">FOUNDER'S STORY</SectionLabel>
              <h2 className="font-cherry text-4xl text-white mb-6">Meet Stella</h2>
              <p className="text-gray-300 font-body text-lg leading-relaxed mb-6">
                Discovery Haven was born out of a simple but urgent observation: that Nigeria's brightest children were graduating school without the ability to communicate, think independently, or manage their emotions.
              </p>
              <p className="text-gray-300 font-body text-lg leading-relaxed mb-8">
                Stella founded Discovery Haven to fill that gap — not just as an educator, but as a mother who refused to accept that confidence and critical thinking were luxuries. Every programme is built on lived experience, research, and a deep respect for each child's unique intelligence.
              </p>
              <Button variant="primary" size="lg">Read Stella's Full Story →</Button>
            </div>
            <div className="bg-aqua/10 rounded-3xl p-12 text-center">
              <div className="w-32 h-32 rounded-full bg-aqua mx-auto flex items-center justify-center text-6xl mb-6">👩🏾‍🏫</div>
              <h3 className="font-cherry text-2xl text-white mb-2">Stella</h3>
              <p className="text-aqua font-bold font-body">Founder, Discovery Haven Kids Co.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <SectionLabel>WHO WE SERVE</SectionLabel>
          <h2 className="font-cherry text-4xl text-dark mb-6">Built for Every Curious Child</h2>
          <p className="text-gray-600 font-body text-lg leading-relaxed mb-10">
            We work with children aged 4–15 across Nigeria and the diaspora. Whether your child is shy or outspoken, academic or creative — there's a track designed for exactly where they are and where they're going.
          </p>
          <Button variant="primary" size="lg" onClick={() => window.location.href='/haven-academy'}>
            Find the Right Programme <ArrowRight size={18} />
          </Button>
        </div>
      </section>
    </>
  )
}
