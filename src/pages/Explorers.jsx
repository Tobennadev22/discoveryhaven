import { Button } from '../components/ui/Button'
import { COURSES } from '../data/content'
import { motion, fadeUp, stagger, scaleIn, useViewport } from '../components/ui/Motion'

export default function Explorers() {
  return (
    <>
      <section className="bg-yellow py-28">
        <motion.div
          className="max-w-3xl mx-auto px-4 text-center"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <h1 className="font-cherry text-5xl lg:text-7xl text-dark mb-4">Hey Explorer! 👋</h1>
          <p className="font-cherry text-3xl text-dark/70 mb-6">Ready for an Adventure?</p>
          <p className="text-dark/60 font-body text-xl">Discovery Haven is your place to learn cool stuff, make friends, and discover what makes YOU amazing.</p>
        </motion.div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.h2
            className="font-cherry text-4xl text-dark mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            What Will YOU Do Here?
          </motion.h2>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={useViewport}
          >
            {COURSES.map(c => (
              <motion.div key={c.id} variants={scaleIn} className="rounded-3xl p-6 text-center" style={{ backgroundColor: c.color + '20' }}>
                <div className="text-5xl mb-4">{c.icon}</div>
                <h3 className="font-cherry text-lg text-dark">{c.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-aqua">
        <motion.div
          className="max-w-2xl mx-auto px-4 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={useViewport}
        >
          <h2 className="font-cherry text-4xl text-white mb-4">Tell Your Parents!</h2>
          <p className="text-white/80 font-body text-lg mb-8">Show them this page and ask them to sign you up. Your adventure starts here.</p>
          <Button variant="yellow" size="lg" onClick={() => window.location.href='/haven-academy'}>Tell My Parents! →</Button>
        </motion.div>
      </section>
    </>
  )
}
