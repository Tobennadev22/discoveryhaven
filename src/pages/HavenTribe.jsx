import { ArrowRight, Users, BookOpen, Bell, Globe } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { SectionLabel } from '../components/ui/SectionLabel'
import { Card } from '../components/ui/Card'
import { motion, fadeUp, stagger, scaleIn, useViewport } from '../components/ui/Motion'

const TRIBE_BENEFITS = [
  { icon: <BookOpen size={22} />, title: 'The Discovery Letter', desc: 'Weekly newsletter on child development and creative learning — delivered every Monday.' },
  { icon: <Bell size={22} />, title: 'Early Access', desc: 'Register for new courses and cohorts before they open to the public.' },
  { icon: <Users size={22} />, title: 'Community Events', desc: 'Invitations to open days, parent information sessions, and community meetups.' },
  { icon: <Globe size={22} />, title: 'Community Space', desc: 'Access to the Discovery Haven community space for networking and collaboration.' },
]

export default function HavenTribe() {
  return (
    <>
      <section className="bg-aqua py-28">
        <motion.div
          className="max-w-3xl mx-auto px-4 text-center"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <h1 className="font-cherry text-5xl lg:text-7xl text-white mb-6">Haven Tribe</h1>
          <p className="text-white/85 font-body text-xl leading-relaxed">
            Our community of parents, educators, and advocates who believe every child deserves to come alive. Welcome to the tribe.
          </p>
        </motion.div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={useViewport}>
            <SectionLabel>WHO BELONGS</SectionLabel>
            <h2 className="font-cherry text-4xl text-dark mb-12">This Is Your Community If…</h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            {[
              'Your child has attended any Haven Academy course',
              "You're a parent or family member of a Discovery Haven scholar",
              "You're an educator or school partner who shares our mission",
              "You're a Friend of Discovery Haven — supporter, collaborator, advocate",
              'You believe in learning beyond the classroom',
            ].map((item, i) => (
              <motion.div key={i} variants={scaleIn} className="bg-cream rounded-2xl p-6 text-left">
                <div className="w-8 h-8 bg-aqua rounded-full flex items-center justify-center mb-3">
                  <span className="text-white font-bold text-sm">{i+1}</span>
                </div>
                <p className="font-body text-gray-700">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-dark">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div className="text-center mb-14" variants={fadeUp} initial="hidden" whileInView="show" viewport={useViewport}>
            <SectionLabel className="text-aqua">MEMBER BENEFITS</SectionLabel>
            <h2 className="font-cherry text-4xl text-white mb-4">What Tribe Members Receive</h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            {TRIBE_BENEFITS.map((b, i) => (
              <motion.div key={i} variants={scaleIn}>
                <Card className="bg-white/5 border-white/10">
                  <div className="p-7">
                    <div className="w-11 h-11 rounded-xl bg-aqua/20 flex items-center justify-center text-aqua mb-4">
                      {b.icon}
                    </div>
                    <h3 className="font-cherry text-xl text-white mb-2">{b.title}</h3>
                    <p className="text-gray-400 font-body text-sm leading-relaxed">{b.desc}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-yellow">
        <motion.div
          className="max-w-2xl mx-auto px-4 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={useViewport}
        >
          <h2 className="font-cherry text-4xl text-dark mb-4">How to Join</h2>
          <p className="text-dark/70 font-body text-lg leading-relaxed mb-8">
            Tribe membership is earned, not bought. Complete any Haven Academy programme and you're automatically welcomed into the community. Ready to start?
          </p>
          <Button variant="dark" size="lg" onClick={() => window.location.href='/haven-academy'}>
            Explore Our Courses →
          </Button>
        </motion.div>
      </section>
    </>
  )
}
