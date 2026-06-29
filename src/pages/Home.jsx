import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Star, CheckCircle, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import { SectionLabel } from '../components/ui/SectionLabel'
import { Card } from '../components/ui/Card'
import { EnrollModal } from '../components/ui/EnrollModal'
import { fadeUp, fadeIn, stagger, slideLeft, slideRight, scaleIn, useViewport } from '../components/ui/Motion'
import { COURSES, EVENTS, TESTIMONIALS, IMPACT_METRICS } from '../data/content'

const HERO_IMAGES = {
  left: 'https://images.unsplash.com/photo-1497375638960-ca368c7231e4?w=600&q=80',
  center: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&q=80',
  right: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?w=600&q=80',
}

const TRUST_LOGOS = [
  'British Council', 'UNICEF', 'UNESCO', 'Ford Foundation', 'Oxford',
]

export default function Home() {
  const [enrollEvent, setEnrollEvent] = useState(null)
  const [email, setEmail] = useState('')

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="bg-cream pt-12 pb-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* top label */}
          <motion.div className="flex justify-center mb-6" variants={fadeIn} initial="hidden" animate="show">
            <span className="inline-flex items-center gap-2 bg-aqua/10 text-aqua text-xs font-bold font-body tracking-widest uppercase px-4 py-2 rounded-full">
              <Sparkles size={13} /> Where Children Come Alive
            </span>
          </motion.div>

          {/* heading */}
          <motion.h1
            className="font-cherry text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-dark text-center leading-none mb-6"
            variants={fadeUp} initial="hidden" animate="show"
          >
            Every Child Deserves<br />
            <span className="text-aqua">to Come Alive</span>
          </motion.h1>

          <motion.p
            className="text-gray-500 font-body text-lg sm:text-xl text-center max-w-2xl mx-auto mb-10 leading-relaxed"
            variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.15 }}
          >
            Discovery Haven builds confident thinkers, fearless storytellers, and curious leaders through transformative after-school programmes designed for children aged 4–15.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.25 }}
          >
            <Button size="lg" variant="primary" onClick={() => window.location.href='/haven-academy'}>
              Explore Our Courses <ArrowRight size={18} />
            </Button>
            <Button size="lg" variant="outline-dark" onClick={() => window.location.href='/community-hour'}>
              Book a Free 15-Min Call
            </Button>
          </motion.div>

          {/* ── IMAGE COLLAGE ── */}
          <motion.div
            className="grid grid-cols-3 gap-4 items-end"
            variants={stagger} initial="hidden" animate="show"
          >
            {/* LEFT PHOTO */}
            <motion.div variants={slideLeft} className="relative rounded-3xl overflow-hidden h-[380px] lg:h-[460px]">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=700&q=80"
                alt="Child learning"
                className="w-full h-full object-cover"
              />
              {/* floating badge */}
              <div className="absolute top-5 left-5 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-aqua flex items-center justify-center text-white text-sm font-bold">✓</div>
                <div>
                  <p className="font-bold font-body text-dark text-xs leading-tight">Professional</p>
                  <p className="text-aqua font-bold font-body text-xs">Educators</p>
                </div>
              </div>
              {/* bottom card */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-2xl p-3 flex items-center gap-3">
                <div className="text-2xl">✍️</div>
                <div>
                  <p className="font-cherry text-sm text-dark">Creative Quest</p>
                  <p className="text-gray-400 font-body text-xs">Ages 8–14 · 6 Weeks</p>
                </div>
              </div>
            </motion.div>

            {/* CENTER COLUMN — stacked cards + photo */}
            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              {/* top card */}
              <div className="bg-yellow rounded-3xl p-6 text-center">
                <p className="font-cherry text-xl text-dark mb-1">Every child</p>
                <p className="font-cherry text-xl text-dark mb-1">deserves the</p>
                <p className="font-cherry text-xl text-dark">chance to learn</p>
                <div className="mt-3 flex justify-center">
                  <span className="text-3xl">🌟</span>
                </div>
              </div>
              {/* center photo */}
              <div className="relative rounded-3xl overflow-hidden h-[200px] lg:h-[240px]">
                <img
                  src="https://images.unsplash.com/photo-1497375638960-ca368c7231e4?w=700&q=80"
                  alt="Happy children"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-dark/20" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur rounded-xl p-3">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {['bg-aqua','bg-yellow','bg-crimson'].map((c,i) => (
                        <div key={i} className={`w-7 h-7 rounded-full ${c} border-2 border-white flex items-center justify-center text-white text-xs font-bold`}>{i+1}</div>
                      ))}
                    </div>
                    <div>
                      <p className="font-bold font-body text-dark text-xs">40+ Educators</p>
                      <p className="text-gray-400 font-body text-xs">across Nigeria</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* stat */}
              <div className="bg-dark rounded-3xl p-5 text-center">
                <p className="font-cherry text-3xl text-yellow">2,400+</p>
                <p className="font-body text-gray-400 text-xs mt-1">Children transformed</p>
              </div>
            </motion.div>

            {/* RIGHT PHOTO */}
            <motion.div variants={slideRight} className="relative rounded-3xl overflow-hidden h-[380px] lg:h-[460px]">
              <img
                src="https://images.unsplash.com/photo-1503676382389-4809596d5290?w=700&q=80"
                alt="Child reading"
                className="w-full h-full object-cover"
              />
              {/* top floating card */}
              <div className="absolute top-5 right-5 bg-white rounded-2xl shadow-lg px-4 py-2">
                <p className="font-cherry text-sm text-dark">The EQ Lab</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs font-body text-gray-400">12 Weeks</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-aqua" />
                  <span className="text-xs font-body text-aqua font-bold">Virtual</span>
                </div>
              </div>
              {/* SDG badges */}
              <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-2">
                <span className="bg-yellow text-dark text-xs font-bold font-body px-3 py-1.5 rounded-full inline-block text-center">SDG 4 — Quality Education</span>
                <span className="bg-yellow text-dark text-xs font-bold font-body px-3 py-1.5 rounded-full inline-block text-center">SDG 17 — Partnerships</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ── STATS STRIP ── */}
        <div className="mt-12 bg-white border-t border-b border-gray-100 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-between gap-4"
              variants={fadeIn} initial="hidden" whileInView="show" viewport={useViewport}
            >
              <p className="font-cherry text-2xl text-dark text-center">
                2,400+ Students Empowered Since Launch
              </p>
              <div className="flex items-center gap-6 flex-wrap justify-center">
                {TRUST_LOGOS.map((logo) => (
                  <span key={logo} className="text-gray-300 font-body font-bold text-sm tracking-wide">{logo}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── POSITIONING ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid lg:grid-cols-2 gap-16 items-center"
            variants={stagger} initial="hidden" whileInView="show" viewport={useViewport}
          >
            <motion.div variants={slideLeft}>
              <SectionLabel>OUR APPROACH</SectionLabel>
              <h2 className="font-cherry text-4xl lg:text-5xl text-dark mb-6 leading-tight">
                Skills That Shape Tomorrow
              </h2>
              <p className="text-gray-500 font-body text-lg leading-relaxed mb-8">
                We don't just teach — we transform. Discovery Haven runs virtual and in-person programmes that build the skills children need most. Not just for school, but for life.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge color="yellow">SDG 4 — Quality Education</Badge>
                <Badge color="yellow">SDG 17 — Partnerships</Badge>
              </div>
            </motion.div>
            <motion.div variants={slideRight} className="grid grid-cols-1 gap-4">
              {[
                { title: 'Join My EdSkills To Activate Your Learning', bg: 'bg-aqua', text: 'text-white', icon: '✍️' },
                { title: 'Join Haven Academy to Activate Your Teaching', bg: 'bg-yellow', text: 'text-dark', icon: '🎤' },
                { title: "Support Your Child's Learning Through Discovery Haven", bg: 'bg-dark', text: 'text-white', icon: '🔍' },
              ].map((c, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className={`${c.bg} ${c.text} rounded-2xl p-6 flex items-center justify-between group cursor-pointer hover:scale-[1.02] transition-transform`}
                  onClick={() => window.location.href = i === 0 ? '/haven-academy' : i === 1 ? '/haven-tribe' : '/contact'}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{c.icon}</span>
                    <p className="font-cherry text-lg leading-tight max-w-xs">{c.title}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                    <ArrowRight size={18} />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── FOUR TRACKS ─── */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={fadeUp} initial="hidden" whileInView="show" viewport={useViewport}>
            <SectionLabel>OUR FOUR STUDIO TRACKS</SectionLabel>
            <h2 className="font-cherry text-4xl lg:text-5xl text-dark mb-4">Haven Academy</h2>
            <p className="text-gray-500 font-body text-lg max-w-2xl mx-auto">Four carefully designed learning tracks that give your child the tools to think clearly, speak confidently, and lead with empathy.</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12"
            variants={stagger} initial="hidden" whileInView="show" viewport={useViewport}
          >
            {COURSES.map(course => (
              <motion.div key={course.id} variants={scaleIn}>
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="h-2 w-full" style={{ backgroundColor: course.color }} />
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-4xl">{course.icon}</span>
                      <span className="text-xs font-bold font-body text-gray-300 bg-gray-50 px-3 py-1.5 rounded-full">Ages {course.ages}</span>
                    </div>
                    <h3 className="font-cherry text-2xl text-dark mb-1">{course.title}</h3>
                    <p className="font-bold font-body text-xs uppercase tracking-widest mb-3" style={{ color: course.color === '#ffec00' ? '#b45309' : course.color }}>{course.subtitle}</p>
                    <p className="text-gray-500 font-body text-sm leading-relaxed mb-5">{course.description}</p>
                    <div className="flex gap-3 flex-wrap mb-5">
                      <span className="bg-gray-100 rounded-full px-3 py-1 text-xs font-bold font-body text-gray-500">{course.duration}</span>
                      <span className="bg-gray-100 rounded-full px-3 py-1 text-xs font-bold font-body text-gray-500">{course.format}</span>
                      <span className="bg-gray-100 rounded-full px-3 py-1 text-xs font-bold font-body text-gray-500">₦{course.price?.toLocaleString()}</span>
                    </div>
                    <Link to="/haven-academy" className="inline-flex items-center gap-1 font-bold font-body text-sm hover:gap-2 transition-all" style={{ color: course.color === '#ffec00' ? '#b45309' : course.color }}>
                      Learn More <ArrowRight size={15} />
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="text-center" variants={fadeUp} initial="hidden" whileInView="show" viewport={useViewport}>
            <Button variant="dark" size="lg" onClick={() => window.location.href='/haven-academy'}>View All Courses & Pricing</Button>
          </motion.div>
        </div>
      </section>

      {/* ─── IMPACT STRIP ─── */}
      <section className="bg-aqua py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            variants={stagger} initial="hidden" whileInView="show" viewport={useViewport}
          >
            {IMPACT_METRICS.map(m => (
              <motion.div key={m.label} variants={scaleIn} className="text-center">
                <div className="font-cherry text-5xl lg:text-6xl text-white mb-2">{m.number}</div>
                <div className="font-body text-white/70 font-semibold text-xs uppercase tracking-widest">{m.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── PERSONALIZED LEARNING — reference-style feature block ─── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* image mosaic */}
            <motion.div
              className="relative"
              variants={slideLeft} initial="hidden" whileInView="show" viewport={useViewport}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-3xl overflow-hidden h-56">
                    <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80" alt="Kids learning" className="w-full h-full object-cover" />
                  </div>
                  <div className="bg-dark rounded-3xl p-5">
                    <p className="font-cherry text-white text-xl mb-1">Earn While</p>
                    <p className="font-cherry text-yellow text-xl mb-3">You Learn</p>
                    <p className="text-gray-400 font-body text-xs leading-relaxed">Accumulate scholarship funds as you progress through our programmes.</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-aqua rounded-3xl p-6">
                    <p className="font-cherry text-white text-xl mb-2">Personalized Learning Paths</p>
                    <p className="text-white/70 font-body text-xs">AI-adapted courses to your unique learning style.</p>
                  </div>
                  <div className="rounded-3xl overflow-hidden h-48">
                    <img src="https://images.unsplash.com/photo-1607453998774-d533f65dac99?w=600&q=80" alt="Child with headphones" className="w-full h-full object-cover" />
                  </div>
                  <div className="bg-yellow rounded-2xl p-4 text-center">
                    <p className="font-cherry text-dark text-lg">Verified</p>
                    <p className="font-cherry text-dark text-lg">Credentials</p>
                    <p className="text-dark/60 font-body text-xs mt-1">Digital certificates for every achievement.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* text */}
            <motion.div
              variants={slideRight} initial="hidden" whileInView="show" viewport={useViewport}
            >
              <SectionLabel>EXPERIENCE LEARNING</SectionLabel>
              <h2 className="font-cherry text-4xl lg:text-5xl text-dark mb-6 leading-tight">
                Experience Learning Like Never Before
              </h2>
              <p className="text-gray-500 font-body text-lg leading-relaxed mb-8">
                Discover personalised, AI-powered learning that prepares students for success in the real world. Every child gets a learning path designed around their natural strengths.
              </p>
              <ul className="space-y-4 mb-10">
                {['Courses built around each child\'s unique intelligence', 'Weekly live sessions with expert educators', 'Published outcomes — stories, speeches, and certificates', 'Parent progress reports after every session'].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckCircle size={20} className="text-aqua flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-body">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="primary" size="lg" onClick={() => window.location.href='/haven-academy'}>Start Your Journey →</Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── EVENTS ─── */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={fadeUp} initial="hidden" whileInView="show" viewport={useViewport}>
            <SectionLabel>UPCOMING EVENTS</SectionLabel>
            <h2 className="font-cherry text-4xl lg:text-5xl text-dark mb-4">Don't Miss What's Coming</h2>
            <p className="text-gray-500 font-body text-lg max-w-xl mx-auto">Cohorts fill fast. Secure your child's spot before registration closes.</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={stagger} initial="hidden" whileInView="show" viewport={useViewport}
          >
            {EVENTS.map(ev => (
              <motion.div key={ev.id} variants={scaleIn}>
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="px-6 py-3 font-bold font-body text-sm flex justify-between items-center" style={{ backgroundColor: ev.dateBarColor, color: ev.dateBarTextColor }}>
                    <span>{ev.date}</span><span>{ev.duration}</span>
                  </div>
                  <div className="p-7">
                    <h3 className="font-cherry text-xl text-dark mb-3 leading-snug">{ev.title}</h3>
                    <p className="text-gray-500 font-body text-sm leading-relaxed mb-5">{ev.description}</p>
                    {ev.price && <p className="text-aqua font-bold font-body text-sm mb-5">₦{ev.price.toLocaleString()}</p>}
                    <div className="flex flex-col gap-2">
                      <Button variant="primary" size="sm" className="w-full" onClick={() => setEnrollEvent(ev)}>
                        {ev.type === 'summit' ? 'Register Interest' : 'Register'}
                      </Button>
                      <Button variant="ghost" size="sm" className="w-full text-gray-400 hover:text-dark">
                        <Calendar size={14} /> Add to Calendar
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24 bg-aqua">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-14" variants={fadeUp} initial="hidden" whileInView="show" viewport={useViewport}>
            <h2 className="font-cherry text-4xl lg:text-5xl text-white mb-4">Parents Are Talking</h2>
            <p className="text-white/70 font-body text-lg">Real results from real families across Nigeria.</p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={stagger} initial="hidden" whileInView="show" viewport={useViewport}
          >
            {TESTIMONIALS.map((t, i) => (
              <motion.div key={i} variants={scaleIn} className="bg-white rounded-2xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} size={15} className="fill-yellow text-yellow" />)}
                </div>
                <p className="text-gray-700 font-body text-sm leading-relaxed italic mb-6">"{t.quote}"</p>
                <div>
                  <p className="font-bold font-body text-dark text-sm">{t.name}</p>
                  <p className="text-gray-400 font-body text-xs">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── COMMUNITY HOUR CTA ─── */}
      <motion.section
        className="py-24 bg-white"
        variants={fadeUp} initial="hidden" whileInView="show" viewport={useViewport}
      >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="text-5xl mb-6">☕</div>
          <h2 className="font-cherry text-4xl lg:text-5xl text-dark mb-4">Not Sure Yet? Let's Talk.</h2>
          <p className="text-gray-500 font-body text-lg leading-relaxed mb-4">Book a free 15-minute conversation with our founder. No pitch, no pressure.</p>
          <p className="text-gray-400 font-body text-sm mb-8">15-Minute Sprint · Zoom or Phone · No obligation</p>
          <Button variant="yellow" size="lg" onClick={() => window.location.href='/community-hour'}>
            Book Your Free 15-Minute Call →
          </Button>
        </div>
      </motion.section>

      {/* ─── JOIN COMMUNITY BANNER ─── */}
      <section className="py-16 bg-dark mx-4 sm:mx-8 lg:mx-16 rounded-3xl mb-16 overflow-hidden relative">
        <div className="absolute top-4 left-8 w-16 h-16 rounded-full border-2 border-white/10" />
        <div className="absolute bottom-4 right-12 w-8 h-8 rounded-full border-2 border-yellow/30" />
        <div className="absolute top-1/2 right-8 -translate-y-1/2 w-12 h-12 rounded-full bg-aqua/20" />
        <motion.div
          className="text-center px-4"
          variants={fadeUp} initial="hidden" whileInView="show" viewport={useViewport}
        >
          <div className="text-4xl mb-4">🌍</div>
          <h2 className="font-cherry text-4xl text-white mb-3">Join Our Community</h2>
          <p className="text-gray-400 font-body mb-8 max-w-md mx-auto">Get early access to new cohorts, the Discovery Letter, and community events — all free.</p>
          <Button variant="yellow" size="lg" onClick={() => window.location.href='/haven-tribe'}>Join Now →</Button>
        </motion.div>
      </section>

      {/* ─── NEWSLETTER ─── */}
      <section className="py-20 bg-yellow">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={useViewport}>
            <h2 className="font-cherry text-4xl text-dark mb-3">Stay in the Loop</h2>
            <p className="text-dark/60 font-body text-lg mb-8">Get the Discovery Letter — weekly insights on child development and early programme access.</p>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={e => { e.preventDefault(); setEmail(''); alert("You're on the list!") }}>
              <input type="email" required placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)}
                className="flex-1 px-5 py-4 rounded-full font-body text-dark bg-white border-0 focus:outline-none focus:ring-2 focus:ring-dark" />
              <Button type="submit" variant="dark" size="lg">Join the Dispatch</Button>
            </form>
            <p className="text-dark/40 font-body text-xs mt-4">We respect your privacy and your child's.</p>
          </motion.div>
        </div>
      </section>

      <EnrollModal isOpen={!!enrollEvent} onClose={() => setEnrollEvent(null)} event={enrollEvent} />
    </>
  )
}
