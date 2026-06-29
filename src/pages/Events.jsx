import { useState } from 'react'
import { Calendar } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { SectionLabel } from '../components/ui/SectionLabel'
import { Card } from '../components/ui/Card'
import { EnrollModal } from '../components/ui/EnrollModal'
import { EVENTS } from '../data/content'
import { motion, fadeUp, stagger, slideLeft, slideRight, scaleIn, useViewport } from '../components/ui/Motion'

function buildGoogleCalendarUrl(ev) {
  const base = 'https://calendar.google.com/calendar/render?action=TEMPLATE'
  const params = new URLSearchParams({
    text: ev.title,
    dates: `${ev.gcalStart}/${ev.gcalEnd}`,
    details: ev.description,
    location: ev.location || '',
  })
  return `${base}&${params.toString()}`
}

export default function Events() {
  const [enrollEvent, setEnrollEvent] = useState(null)

  return (
    <>
      <section className="bg-dark py-28">
        <motion.div
          className="max-w-3xl mx-auto px-4 text-center"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <SectionLabel className="text-aqua">EVENTS</SectionLabel>
          <h1 className="font-cherry text-5xl lg:text-7xl text-white mb-6">What's Coming Up</h1>
          <p className="text-gray-300 font-body text-xl leading-relaxed">
            From weekly cohorts to our annual Children's Summit — every event is designed to spark something extraordinary in your child.
          </p>
        </motion.div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={slideLeft} initial="hidden" whileInView="show" viewport={useViewport}>
              <SectionLabel>ANNUAL FLAGSHIP EVENT</SectionLabel>
              <h2 className="font-cherry text-4xl lg:text-5xl text-dark mb-4 leading-tight">Discovery Haven Children's Summit</h2>
              <div className="inline-block bg-crimson text-white px-4 py-2 rounded-full font-bold font-body text-sm mb-6">
                Theme: The Confident Generation
              </div>
              <p className="text-gray-600 font-body text-lg leading-relaxed mb-8">
                Our annual flagship summit brings together the brightest young minds in Nigeria for a day of performances, panels, competitions, and the Little Voices book launch. Virtual and Abuja.
              </p>
              <h4 className="font-bold font-body text-dark mb-4">What Happens at the Summit:</h4>
              <ul className="space-y-3 mb-8">
                {[
                  'School pitch competition with debate elements',
                  "Children's published stories showcase — Little Voices Book Series Vol. 1 launch",
                  'Live performances, panels, and awards',
                  'Guest speakers and institutional partners',
                  'Parent and community networking',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="w-5 h-5 rounded-full bg-yellow flex-shrink-0 mt-0.5 flex items-center justify-center text-xs font-bold">✓</span>
                    <span className="text-gray-600 font-body text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="yellow" size="lg" onClick={() => setEnrollEvent(EVENTS[2])}>Register Your Interest</Button>
                <a
                  href={buildGoogleCalendarUrl(EVENTS[2])}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-dark font-body font-bold text-sm transition-colors"
                >
                  <Calendar size={16} /> Add to Google Calendar
                </a>
              </div>
            </motion.div>
            <motion.div
              className="bg-dark rounded-3xl p-10 text-center text-white"
              variants={slideRight}
              initial="hidden"
              whileInView="show"
              viewport={useViewport}
            >
              <div className="text-8xl mb-6">🏆</div>
              <h3 className="font-cherry text-3xl mb-3">November 2026</h3>
              <p className="font-body text-gray-300 mb-2">Annual Flagship · Virtual & Abuja</p>
              <p className="font-body text-aqua font-bold">₦{EVENTS[2].price?.toLocaleString()} per delegate</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-14" variants={fadeUp} initial="hidden" whileInView="show" viewport={useViewport}>
            <SectionLabel>UPCOMING COHORTS</SectionLabel>
            <h2 className="font-cherry text-4xl text-dark mb-4">Book Your Child's Spot</h2>
            <p className="text-gray-600 font-body text-lg">Cohorts are capped at 15 learners. Spaces fill fast.</p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            {EVENTS.map(ev => (
              <motion.div key={ev.id} variants={scaleIn}>
                <Card className="hover:shadow-lg transition-all duration-300 h-full">
                  <div className="px-6 py-3 font-bold font-body text-sm flex justify-between" style={{ backgroundColor: ev.dateBarColor, color: ev.dateBarTextColor }}>
                    <span>{ev.date}</span><span>{ev.duration}</span>
                  </div>
                  <div className="p-7">
                    <h3 className="font-cherry text-xl text-dark mb-3 leading-snug">{ev.title}</h3>
                    <p className="text-gray-500 font-body text-sm leading-relaxed mb-5">{ev.description}</p>
                    {ev.price && <p className="text-aqua font-bold font-body mb-5">₦{ev.price.toLocaleString()}</p>}
                    <div className="flex flex-col gap-2">
                      <Button variant="primary" size="sm" className="w-full" onClick={() => setEnrollEvent(ev)}>
                        {ev.type === 'summit' ? 'Register Interest' : 'Register & Pay'}
                      </Button>
                      <a
                        href={buildGoogleCalendarUrl(ev)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full text-gray-400 hover:text-dark font-body font-bold text-sm py-2 rounded-full transition-colors"
                      >
                        <Calendar size={14} /> Add to Google Calendar
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <EnrollModal isOpen={!!enrollEvent} onClose={() => setEnrollEvent(null)} event={enrollEvent} />
    </>
  )
}
