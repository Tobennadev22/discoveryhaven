import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Users, BookOpen, Star, CheckCircle } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import { SectionLabel } from '../components/ui/SectionLabel'
import { Card } from '../components/ui/Card'
import { EnrollModal } from '../components/ui/EnrollModal'
import { COURSES, EVENTS, TESTIMONIALS, IMPACT_METRICS } from '../data/content'

export default function Home() {
  const [enrollEvent, setEnrollEvent] = useState(null)
  const [email, setEmail] = useState('')

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-dark">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=80')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/50 to-dark/80" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-20">
          <Badge color="aqua" className="mb-6">Where Intellectual Curiosity Meets Radical Confidence</Badge>
          <h1 className="font-cherry text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-6 text-shadow">
            Every Child Deserves<br />to Come Alive
          </h1>
          <p className="text-white/80 font-body text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Discovery Haven builds confident thinkers, fearless storytellers, and curious leaders through transformative after-school programmes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="primary" onClick={() => window.location.href='/haven-academy'}>
              Explore Our Courses <ArrowRight size={18} />
            </Button>
            <Button size="lg" variant="outline" onClick={() => window.location.href='/haven-tribe'}>
              Join the Haven Tribe
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {[0,1,2].map(i => <div key={i} className={`w-2 h-2 rounded-full ${i===0 ? 'bg-aqua' : 'bg-white/30'}`} />)}
        </div>
      </section>

      {/* POSITIONING STRIP */}
      <section className="bg-dark py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-cherry text-4xl lg:text-5xl text-white mb-6 leading-tight">
            We Don't Just Teach.<br />We Transform.
          </h2>
          <p className="text-gray-300 font-body text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
            Discovery Haven runs virtual and in-person learning programmes that build the skills children need most — not just for school, but for life. Confidence, communication, critical thinking, and emotional intelligence.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Badge color="yellow">SDG 4 — Quality Education</Badge>
            <Badge color="yellow">SDG 17 — Partnerships for the Goals</Badge>
          </div>
        </div>
      </section>

      {/* HAVEN ACADEMY OVERVIEW */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionLabel>OUR FOUR STUDIO TRACKS</SectionLabel>
            <h2 className="font-cherry text-4xl lg:text-5xl text-dark mb-4">Haven Academy</h2>
            <p className="text-gray-600 font-body text-lg max-w-2xl mx-auto">
              Four carefully designed learning tracks that give your child the tools to think clearly, speak confidently, and lead with empathy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {COURSES.map(course => (
              <Card key={course.id} className="group hover:shadow-lg transition-all duration-300">
                <div className="h-3 w-full" style={{ backgroundColor: course.color }} />
                <div className="p-8">
                  <div className="text-4xl mb-4">{course.icon}</div>
                  <h3 className="font-cherry text-2xl text-dark mb-1">{course.title}</h3>
                  <p className="text-aqua font-bold font-body text-sm uppercase tracking-wide mb-3">{course.subtitle}</p>
                  <p className="text-gray-600 font-body text-sm leading-relaxed mb-4">{course.description}</p>
                  <div className="flex gap-3 flex-wrap mb-5">
                    <span className="bg-gray-100 rounded-full px-3 py-1 text-xs font-bold font-body text-gray-600">Ages {course.ages}</span>
                    <span className="bg-gray-100 rounded-full px-3 py-1 text-xs font-bold font-body text-gray-600">{course.duration}</span>
                    <span className="bg-gray-100 rounded-full px-3 py-1 text-xs font-bold font-body text-gray-600">{course.format}</span>
                  </div>
                  <Link to="/haven-academy" className="inline-flex items-center gap-1 text-aqua font-bold font-body text-sm hover:gap-2 transition-all">
                    Learn More <ArrowRight size={15} />
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="dark" size="lg" onClick={() => window.location.href='/haven-academy'}>
              View All Courses & Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* IMPACT METRICS */}
      <section className="bg-aqua py-16">
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

      {/* UPCOMING EVENTS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionLabel>UPCOMING EVENTS</SectionLabel>
            <h2 className="font-cherry text-4xl lg:text-5xl text-dark mb-4">Don't Miss What's Coming</h2>
            <p className="text-gray-600 font-body text-lg max-w-xl mx-auto">
              Cohorts fill fast. Secure your child's spot before registration closes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EVENTS.map(ev => (
              <Card key={ev.id} className="hover:shadow-lg transition-all duration-300">
                <div className="px-6 py-3 font-bold font-body text-sm flex justify-between items-center" style={{ backgroundColor: ev.dateBarColor, color: ev.dateBarTextColor }}>
                  <span>{ev.date}</span>
                  <span>{ev.duration}</span>
                </div>
                <div className="p-7">
                  <h3 className="font-cherry text-xl text-dark mb-3 leading-snug">{ev.title}</h3>
                  <p className="text-gray-600 font-body text-sm leading-relaxed mb-6">{ev.description}</p>
                  {ev.price && <p className="text-aqua font-bold font-body text-sm mb-4">₦{ev.price.toLocaleString()}</p>}
                  <div className="flex flex-col gap-2">
                    <Button variant="primary" size="sm" className="w-full" onClick={() => setEnrollEvent(ev)}>
                      {ev.type === 'summit' ? 'Register Interest' : 'Register'}
                    </Button>
                    <Button variant="ghost" size="sm" className="w-full text-gray-500 hover:text-dark">
                      <Calendar size={15} /> Add to Calendar
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-aqua">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-cherry text-4xl lg:text-5xl text-white mb-4">Parents Are Talking</h2>
            <p className="text-white/80 font-body text-lg">Real results from real families across Nigeria.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} className="fill-yellow text-yellow" />)}
                </div>
                <p className="text-gray-700 font-body text-base leading-relaxed italic mb-6">"{t.quote}"</p>
                <div>
                  <p className="font-bold font-body text-dark">{t.name}</p>
                  <p className="text-gray-400 font-body text-sm">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY HOUR CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="text-5xl mb-6">☕</div>
          <h2 className="font-cherry text-4xl lg:text-5xl text-dark mb-4">Not Sure Yet? Let's Talk.</h2>
          <p className="text-gray-600 font-body text-lg leading-relaxed mb-4">
            Book a free 15-minute conversation with our founder. No pitch, no pressure — just an honest conversation about your child's learning journey.
          </p>
          <p className="text-gray-400 font-body text-sm mb-8">15-Minute Sprint · Zoom or Phone · No obligation</p>
          <Button variant="yellow" size="lg" onClick={() => window.location.href='/community-hour'}>
            Book Your Free 15-Minute Call →
          </Button>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-20 bg-yellow">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-cherry text-4xl text-dark mb-3">Stay in the Loop</h2>
          <p className="text-dark/70 font-body text-lg mb-8">
            Get the Discovery Letter — weekly insights on child development, creative learning, and early programme access.
          </p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={e => { e.preventDefault(); setEmail(''); alert('You\'re on the list!') }}>
            <input
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="flex-1 px-5 py-4 rounded-full font-body text-dark bg-white border-0 focus:outline-none focus:ring-2 focus:ring-dark"
            />
            <Button type="submit" variant="dark" size="lg">Join the Dispatch</Button>
          </form>
          <p className="text-dark/50 font-body text-xs mt-4">We respect your privacy and your child's.</p>
        </div>
      </section>

      <EnrollModal isOpen={!!enrollEvent} onClose={() => setEnrollEvent(null)} event={enrollEvent} />
    </>
  )
}
