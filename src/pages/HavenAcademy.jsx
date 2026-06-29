import { useState } from 'react'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { SectionLabel } from '../components/ui/SectionLabel'
import { Card } from '../components/ui/Card'
import { EnrollModal } from '../components/ui/EnrollModal'
import { COURSES } from '../data/content'

function CourseSection({ course, reverse = false }) {
  const [modal, setModal] = useState(false)
  const event = {
    id: course.id,
    title: course.title,
    date: 'Next Cohort',
    duration: course.duration,
    description: course.description,
    price: course.price,
    dateBarColor: course.color,
    dateBarTextColor: course.color === '#ffec00' ? '#1a1a1a' : '#ffffff',
  }
  return (
    <>
      <section className="py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid lg:grid-cols-2 gap-16 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
            <div className={reverse ? 'lg:col-start-2' : ''}>
              <div className="inline-block px-4 py-2 rounded-2xl mb-4 text-sm font-bold font-body" style={{ backgroundColor: course.color + '20', color: course.color === '#ffec00' ? '#b45309' : course.color }}>
                {course.subtitle}
              </div>
              <h2 className="font-cherry text-4xl lg:text-5xl text-dark mb-4 leading-tight">{course.title}</h2>
              <div className="flex gap-3 flex-wrap mb-6">
                <span className="bg-gray-100 rounded-full px-3 py-1.5 text-xs font-bold font-body text-gray-600">Ages {course.ages}</span>
                <span className="bg-gray-100 rounded-full px-3 py-1.5 text-xs font-bold font-body text-gray-600">{course.duration}</span>
                <span className="bg-gray-100 rounded-full px-3 py-1.5 text-xs font-bold font-body text-gray-600">{course.format}</span>
              </div>
              <p className="text-gray-600 font-body text-lg leading-relaxed mb-6">{course.description}</p>
              <h4 className="font-bold font-body text-dark mb-3">What Your Child Will Do:</h4>
              <ul className="space-y-2 mb-6">
                {course.outcomes.map((o, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckCircle size={18} className="text-aqua flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-body text-sm">{o}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-cream rounded-2xl p-4 mb-8">
                <p className="text-sm font-bold font-body text-dark">🎁 Bonus Outcome</p>
                <p className="text-sm font-body text-gray-600 mt-1">{course.bonus}</p>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="primary" size="lg" onClick={() => setModal(true)}>
                  Enrol in {course.title} →
                </Button>
                <span className="font-bold font-body text-aqua text-lg">₦{course.price?.toLocaleString()}</span>
              </div>
            </div>
            <div className={`${reverse ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-gray-100">
                <div className="absolute inset-0 flex items-center justify-center text-9xl">
                  {course.icon}
                </div>
                <div className="absolute inset-0 rounded-3xl" style={{ background: `linear-gradient(135deg, ${course.color}15, ${course.color}30)` }} />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur rounded-2xl p-4">
                    <p className="font-cherry text-lg text-dark">{course.title}</p>
                    <p className="text-gray-500 font-body text-sm">{course.ages} · {course.duration}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <EnrollModal isOpen={modal} onClose={() => setModal(false)} event={event} />
    </>
  )
}

export default function HavenAcademy() {
  return (
    <>
      {/* HERO */}
      <section className="bg-dark py-28">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionLabel className="text-aqua">HAVEN ACADEMY</SectionLabel>
          <h1 className="font-cherry text-5xl lg:text-7xl text-white mb-6">
            Four Tracks.<br />One Confident Child.
          </h1>
          <p className="text-gray-300 font-body text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Each programme is carefully structured to unlock a specific dimension of your child's potential — communication, creativity, logic, and emotional intelligence.
          </p>
          <Button variant="yellow" size="lg">
            View Courses & Enrol
          </Button>
        </div>
      </section>

      {COURSES.map((course, i) => (
        <CourseSection key={course.id} course={course} reverse={i % 2 !== 0} />
      ))}

      {/* ENROLMENT CTA */}
      <section className="py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-cherry text-4xl lg:text-5xl text-dark mb-4">Ready to Begin?</h2>
          <p className="text-gray-600 font-body text-lg mb-10">
            Enrol your child in the programme that matches their spark. Each cohort is limited — don't miss the next intake.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" onClick={() => window.scrollTo({ top: 400, behavior: 'smooth' })}>Enrol Now</Button>
            <Button variant="yellow" size="lg" onClick={() => window.location.href='/community-hour'}>Book a Free 15-Minute Call First</Button>
          </div>
        </div>
      </section>
    </>
  )
}
