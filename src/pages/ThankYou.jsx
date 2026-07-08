import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import discoveryHavenLogo from "../assets/dh.png";

const COURSE_NAMES = {
  "creative-quest": { name: "Creative Quest", month: "August 2026", price: 75000 },
  "loud-and-fearless": { name: "Loud & Fearless", month: "October 2026", price: 75000 },
  "curiosity-box": { name: "The Curiosity Box", month: "February 2027", price: 50000 },
  "eq-lab": { name: "The EQ Lab", month: "June 2027", price: 50000 },
};

export default function ThankYou() {
  const { slug } = useParams();
  const course = COURSE_NAMES[slug] || { name: "your course", month: "2026", price: 0 };

  useEffect(() => {
    // Paystack payment page redirects here after confirmed payment —
    // this is the authoritative place to fire the Purchase event.
    if (window.fbq) {
      window.fbq("track", "Purchase", {
        content_name: course.name,
        value: course.price,
        currency: "NGN",
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-aqua flex flex-col">
      <header className="py-4 px-6">
        <Link to="/" className="inline-flex items-center gap-2">
          <img src={discoveryHavenLogo} alt="Discovery Haven" className="w-9 h-9" />
          <span className="font-cherry text-xl text-white">Discovery Haven</span>
        </Link>
      </header>

      <div className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
              <CheckCircle size={48} className="text-white" />
            </div>
          </div>
          <h1 className="font-cherry text-4xl lg:text-5xl text-white mb-4">
            You're in. Welcome to the Haven.
          </h1>
          <p className="font-body text-white/90 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Your child's place in <strong>{course.name}</strong> has been reserved. You will receive a
            confirmation email within the next few minutes with everything you need to get started.
          </p>

          <div className="bg-white rounded-3xl p-8 text-left mb-8">
            <h2 className="font-cherry text-2xl text-slate-900 mb-6 text-center">What Happens Next</h2>
            <div className="flex flex-col gap-4">
              {[
                "Check your email for your confirmation and onboarding details",
                "Join our Haven Tribe WhatsApp community for parent updates",
                `Mark your calendar — ${course.name} begins ${course.month}, Saturdays`,
              ].map((step, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="w-7 h-7 rounded-full bg-aqua flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white font-bold text-xs">{i + 1}</span>
                  </div>
                  <span className="font-body text-gray-700 text-sm leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/2349163992614"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full font-cherry text-lg bg-yellow text-dark hover:scale-105 active:scale-95 transition-all"
            >
              Join the Haven Tribe Community →
            </a>
          </div>
          <div className="mt-5">
            <Link
              to="/haven-academy"
              className="font-body text-white/70 hover:text-white text-sm underline transition-colors"
            >
              Explore our other courses →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
