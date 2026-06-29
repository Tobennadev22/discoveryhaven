import { useState } from 'react'
import { Calendar, MapPin, Clock } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { SectionLabel } from '../components/ui/SectionLabel'
import { Card } from '../components/ui/Card'
import { EnrollModal } from '../components/ui/EnrollModal'
import { EVENTS } from '../data/content'

export default function Events() {
  const [enrollEvent, setEnrollEvent] = useState(null)

  return (
    <>
      <section className="bg-dark py-28">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <SectionLabel className="text-aqua">EVENTS</SectionLabel>
          <h1 className="font-cherry text-5xl lg:text-7xl text-white mb-6">What's Coming Up</h1>
          <p className="text-gray-300 font-body text-xl leading-relaxed">
            From weekly cohorts to our annual Children's Summit — every event is designed to spark something extraordinary in your child.
          </p>
        </div>
      </section>

      {/* FLAGSHIP SUMMIT */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
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
              <Button variant="yellow" size="lg" onClick={() => setEnrollEvent(EVENTS[2])}>Register Your Interest</Button>
            </div>
            <div className="bg-dark rounded-3xl p-10 text-center text-white">
              <div className="text-8xl mb-6">🏆</div>
              <h3 className="font-cherry text-3xl mb-3">November 2026</h3>
              <p className="font-body text-gray-300 mb-2">Annual Flagship · Virtual & Abuja</p>
              <p className="font-body text-aqua font-bold">₦{EVENTS[2].price?.toLocaleString()} per delegate</p>
            </div>
          </div>
        </div>
      </section>

      {/* UPCOMING COHORTS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel>UPCOMING COHORTS</SectionLabel>
            <h2 className="font-cherry text-4xl text-dark mb-4">Book Your Child's Spot</h2>
            <p className="text-gray-600 font-body text-lg">Cohorts are capped at 15 learners. Spaces fill fast.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EVENTS.map(ev => (
              <Card key={ev.id} className="hover:shadow-lg transition-all duration-300">
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
                    <Button variant="ghost" size="sm" className="w-full text-gray-400 hover:text-dark">
                      <Calendar size={14} /> Add to Calendar
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <EnrollModal isOpen={!!enrollEvent} onClose={() => setEnrollEvent(null)} event={enrollEvent} />
    </>
  )
}
