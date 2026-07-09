import { useState } from "react";
import { Mail, CheckCircle } from "lucide-react";
import { Button } from "../components/ui/Button";
import { SectionLabel } from "../components/ui/SectionLabel";
import {
  motion,
  fadeUp,
  slideLeft,
  slideRight,
  useViewport,
} from "../components/ui/Motion";

const ENQUIRY_TYPES = [
  "General Enquiry",
  "Media & Press",
  "Partnership",
  "Enrolment Support",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <section className="bg-dark py-28">
        <motion.div
          className="max-w-2xl mx-auto px-4 text-center"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <SectionLabel className="text-aqua">CONTACT</SectionLabel>
          <h1 className="font-cherry text-5xl lg:text-7xl bg-gradient-to-r from-amber-200 to-cyan-400 bg-clip-text text-transparent mb-6">
            Get in Touch
          </h1>
          <p className="text-gray-300 font-body text-xl">
            We'd love to hear from you. Choose how you'd like to connect.
          </p>
        </motion.div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              variants={slideLeft}
              initial="hidden"
              whileInView="show"
              viewport={useViewport}
            >
              <h2 className="font-cherry text-3xl text-slate-900 mb-8">
                Send a Message
              </h2>
              {sent ? (
                <div className="bg-aqua/10 border border-aqua/30 rounded-2xl p-8 text-center">
                  <div className="flex justify-center mb-4"><CheckCircle size={40} className="text-aqua" /></div>
                  <h3 className="font-cherry text-2xl text-slate-900 mb-2">
                    Message Received!
                  </h3>
                  <p className="text-gray-600 font-body">
                    We'll get back to you within 24–48 hours.
                  </p>
                  <Button className="mt-6" onClick={() => setSent(false)}>
                    Send Another
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-bold font-body text-slate-900 mb-2">
                      Full Name
                    </label>
                    <input
                      required
                      className="w-full border border-gray-200 rounded-xl px-5 py-4 font-body text-sm focus:outline-none focus:ring-2 focus:ring-aqua bg-white"
                      value={form.name}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, name: e.target.value }))
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold font-body text-slate-900 mb-2">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      className="w-full border border-gray-200 rounded-xl px-5 py-4 font-body text-sm focus:outline-none focus:ring-2 focus:ring-aqua bg-white"
                      value={form.email}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, email: e.target.value }))
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold font-body text-slate-900 mb-2">
                      Enquiry Type
                    </label>
                    <select
                      required
                      className="w-full border border-gray-200 rounded-xl px-5 py-4 font-body text-sm focus:outline-none focus:ring-2 focus:ring-aqua bg-white"
                      value={form.type}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, type: e.target.value }))
                      }
                    >
                      <option value="">Select…</option>
                      {ENQUIRY_TYPES.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold font-body text-slate-900 mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full border border-gray-200 rounded-xl px-5 py-4 font-body text-sm focus:outline-none focus:ring-2 focus:ring-aqua bg-white resize-none"
                      value={form.message}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, message: e.target.value }))
                      }
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </motion.div>

            <motion.div
              className="space-y-8"
              variants={slideRight}
              initial="hidden"
              whileInView="show"
              viewport={useViewport}
            >
              <div>
                <h2 className="font-cherry text-3xl text-slate-900 mb-8">
                  Connect Directly
                </h2>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-aqua/10 flex items-center justify-center text-aqua">
                    <Mail size={22} />
                  </div>
                  <div>
                    <p className="font-bold font-body text-slate-900 text-sm">
                      Email
                    </p>
                    <a
                      href="mailto:info@discoveryhaven.org"
                      className="text-aqua font-body hover:underline"
                    >
                      info@discoveryhaven.org
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <p className="font-bold font-body text-slate-900 mb-4">
                  Follow Us
                </p>
                <div className="flex gap-4 flex-wrap">
                  {[
                    {
                      label: "Instagram",
                      href: "https://instagram.com/discoveryhavenkids",
                      icon: (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                          <circle cx="12" cy="12" r="4"/>
                          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                        </svg>
                      ),
                    },
                    {
                      label: "Facebook",
                      href: "https://facebook.com/discoveryhavenkids",
                      icon: (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                        </svg>
                      ),
                    },
                    {
                      label: "YouTube",
                      href: "https://youtube.com/@discoveryhavenkids",
                      icon: (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                          <polygon fill="currentColor" stroke="none" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
                        </svg>
                      ),
                    },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-50 hover:bg-aqua hover:text-white text-gray-600 px-4 py-2.5 rounded-xl transition-all font-body text-sm font-bold"
                    >
                      {s.icon} {s.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-dark rounded-2xl p-8 text-white">
                <h3 className="font-cherry text-2xl mb-3">
                  Not sure where to start?
                </h3>
                <p className="text-gray-400 font-body text-sm leading-relaxed mb-6">
                  Book a free 20-minute call with our founder. It's the fastest
                  way to find the right programme for your child.
                </p>
                <Button
                  variant="yellow"
                  onClick={() => (window.location.href = "/community-hour")}
                >
                  Book Your Free Call →
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
