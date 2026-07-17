import { useState } from 'react'
import { X } from 'lucide-react'
import { Button } from './Button'
import { usePaystack } from '../../hooks/usePaystack'

export function EnrollModal({ isOpen, onClose, event }) {
  const [form, setForm] = useState({ name: '', email: '', childName: '', childAge: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const { pay } = usePaystack()

  if (!isOpen || !event) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    pay({
      email: form.email,
      amount: event.price,
      name: form.name,
      metadata: {
        'Child Name': form.childName,
        'Child Age': form.childAge,
        'Event': event.title,
        'Event Id': event.id,
      },
      onSuccess: (res) => {
        setLoading(false)
        setSuccess(true)
        if (window.fbq) {
          window.fbq('track', 'Purchase', {
            value: Number(event.price),
            currency: 'NGN',
            content_name: event.title,
            content_type: 'product',
          })
        }
      },
      onClose: () => setLoading(false),
    })
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 z-10">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-dark transition-colors">
          <X size={24} />
        </button>

        {success ? (
          <div className="text-center py-8">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="font-cherry text-2xl text-dark mb-2">You're Enrolled!</h3>
            <p className="text-gray-600 font-body">We'll send confirmation details to <strong>{form.email}</strong>. See you at <strong>{event.title}</strong>!</p>
            <Button className="mt-6" onClick={onClose}>Close</Button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <div className="inline-block px-3 py-1 rounded-full text-xs font-bold font-body mb-3" style={{ backgroundColor: event.dateBarColor, color: event.dateBarTextColor }}>
                {event.date} · {event.duration}
              </div>
              <h3 className="font-cherry text-2xl text-dark leading-tight">{event.title}</h3>
              <p className="text-aqua font-bold font-body mt-1">₦{event.price?.toLocaleString()}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-dark font-body mb-1">Your Name</label>
                <input required className="w-full border border-gray-200 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-aqua" value={form.name} onChange={e => setForm(p => ({...p, name: e.target.value}))} />
              </div>
              <div>
                <label className="block text-sm font-bold text-dark font-body mb-1">Your Email</label>
                <input required type="email" className="w-full border border-gray-200 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-aqua" value={form.email} onChange={e => setForm(p => ({...p, email: e.target.value}))} />
              </div>
              <div>
                <label className="block text-sm font-bold text-dark font-body mb-1">Child's Name</label>
                <input required className="w-full border border-gray-200 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-aqua" value={form.childName} onChange={e => setForm(p => ({...p, childName: e.target.value}))} />
              </div>
              <div>
                <label className="block text-sm font-bold text-dark font-body mb-1">Child's Age</label>
                <input required type="number" min="4" max="18" className="w-full border border-gray-200 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-aqua" value={form.childAge} onChange={e => setForm(p => ({...p, childAge: e.target.value}))} />
              </div>
              <Button type="submit" variant="primary" size="lg" className="w-full" disabled={loading}>
                {loading ? 'Processing...' : `Pay ₦${event.price?.toLocaleString()} & Enrol`}
              </Button>
              <p className="text-center text-xs text-gray-400 font-body">Secured by Paystack · SSL Encrypted</p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
