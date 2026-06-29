import { useState } from 'react'
import { Mail } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { SectionLabel } from '../components/ui/SectionLabel'

const ENQUIRY_TYPES = ['General Enquiry', 'Media & Press', 'Partnership', 'Enrolment Support']

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <section className="bg-dark py-28">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <SectionLabel className="text-aqua">CONTACT</SectionLabel>
          <h1 className="font-cherry text-5xl lg:text-7xl text-white mb-6">Get in Touch</h1>
          <p className="text-gray-300 font-body text-xl">We'd love to hear from you. Choose how you'd like to connect.</p>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* FORM */}
            <div>
              <h2 className="font-cherry text-3xl text-dark mb-8">Send a Message</h2>
              {sent ? (
                <div className="bg-aqua/10 border border-aqua/30 rounded-2xl p-8 text-center">
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="font-cherry text-2xl text-dark mb-2">Message Received!</h3>
                  <p className="text-gray-600 font-body">We'll get back to you within 24–48 hours.</p>
                  <Button className="mt-6" onClick={() => setSent(false)}>Send Another</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-bold font-body text-dark mb-2">Full Name</label>
                    <input required className="w-full border border-gray-200 rounded-xl px-5 py-4 font-body text-sm focus:outline-none focus:ring-2 focus:ring-aqua bg-white" value={form.name} onChange={e => setForm(p=>({...p,name:e.target.value}))} />
                  </div>
                  <div>
                    <label className="block text-sm font-bold font-body text-dark mb-2">Email Address</label>
                    <input required type="email" className="w-full border border-gray-200 rounded-xl px-5 py-4 font-body text-sm focus:outline-none focus:ring-2 focus:ring-aqua bg-white" value={form.email} onChange={e => setForm(p=>({...p,email:e.target.value}))} />
                  </div>
                  <div>
                    <label className="block text-sm font-bold font-body text-dark mb-2">Enquiry Type</label>
                    <select required className="w-full border border-gray-200 rounded-xl px-5 py-4 font-body text-sm focus:outline-none focus:ring-2 focus:ring-aqua bg-white" value={form.type} onChange={e => setForm(p=>({...p,type:e.target.value}))}>
                      <option value="">Select…</option>
                      {ENQUIRY_TYPES.map(t => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold font-body text-dark mb-2">Message</label>
                    <textarea required rows={5} className="w-full border border-gray-200 rounded-xl px-5 py-4 font-body text-sm focus:outline-none focus:ring-2 focus:ring-aqua bg-white resize-none" value={form.message} onChange={e => setForm(p=>({...p,message:e.target.value}))} />
                  </div>
                  <Button type="submit" variant="primary" size="lg" className="w-full">Send Message</Button>
                </form>
              )}
            </div>

            {/* CONTACT INFO */}
            <div className="space-y-8">
              <div>
                <h2 className="font-cherry text-3xl text-dark mb-8">Connect Directly</h2>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-aqua/10 flex items-center justify-center text-aqua">
                    <Mail size={22} />
                  </div>
                  <div>
                    <p className="font-bold font-body text-dark text-sm">Email</p>
                    <a href="mailto:info@discoveryhaven.org" className="text-aqua font-body hover:underline">info@discoveryhaven.org</a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <p className="font-bold font-body text-dark mb-4">Follow Us</p>
                <div className="flex gap-4">
                  {[
                    { icon: '📷', label: 'Instagram' },
                    { icon: '👥', label: 'Facebook' },
                    { icon: '▶️', label: 'YouTube' },
                  ].map(s => (
                    <a key={s.label} href="#" className="flex items-center gap-2 bg-gray-50 hover:bg-aqua hover:text-white text-gray-600 px-4 py-2.5 rounded-xl transition-all font-body text-sm font-bold">
                      {s.icon} {s.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-dark rounded-2xl p-8 text-white">
                <h3 className="font-cherry text-2xl mb-3">Not sure where to start?</h3>
                <p className="text-gray-400 font-body text-sm leading-relaxed mb-6">
                  Book a free 15-minute call with our founder. It's the fastest way to find the right programme for your child.
                </p>
                <Button variant="yellow" onClick={() => window.location.href='/community-hour'}>
                  Book Your Free Call →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
