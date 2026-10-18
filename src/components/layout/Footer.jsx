import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { BRAND, FOOTER_LINKS } from "../../data/content";
import discoveryHavenLogo from "../../assets/dh.png";

function InstagramIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="3.5"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function FacebookIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

function YoutubeIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-20 pb-10 lg:pt-24">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-14 md:flex-row md:items-end md:justify-between">
          <h2 className="font-cherry text-h2 text-white max-w-xl">
            {BRAND.taglineShort}
          </h2>
          <Link
            to="/haven-academy"
            className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-dark bg-yellow px-7 py-3.5 font-body text-[1.0625rem] font-extrabold text-dark shadow-[0_4px_0_0_#05c3dd] transition-transform hover:-translate-y-px active:translate-y-1 active:shadow-none"
          >
            Find a programme
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-12 py-14 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="mb-5 flex items-center gap-2">
              <img src={discoveryHavenLogo} alt="" className="h-9 w-9 object-contain" />
              <span className="font-cherry text-xl">Discovery Haven</span>
            </div>
            <p className="mb-6 max-w-xs font-body text-[0.9375rem] leading-relaxed text-white/60">
              {BRAND.tagline}
            </p>
            <a
              href={`mailto:${BRAND.email.trim()}`}
              className="mb-3 flex w-fit items-center gap-2 font-body text-[0.9375rem] font-semibold text-white/80 transition-colors hover:text-aqua"
            >
              <Mail size={16} />
              {BRAND.email.trim()}
            </a>
            <p className="mb-7 font-body text-[0.9375rem] font-semibold text-white/80">
              {BRAND.phoneNumber}
            </p>
            <div className="flex gap-2">
              <a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 transition-colors hover:bg-aqua hover:text-dark">
                <InstagramIcon size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 transition-colors hover:bg-aqua hover:text-dark">
                <FacebookIcon size={18} />
              </a>
              <a href="#" aria-label="YouTube" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 transition-colors hover:bg-aqua hover:text-dark">
                <YoutubeIcon size={18} />
              </a>
            </div>
          </div>

          <div>
            <p className="mb-5 font-body text-sm font-extrabold text-yellow">Programmes</p>
            <ul className="space-y-3">
              {FOOTER_LINKS.programmes.map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className="font-body text-[0.9375rem] text-white/70 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-5 font-body text-sm font-extrabold text-yellow">Organisation</p>
            <ul className="space-y-3">
              {FOOTER_LINKS.organisation.map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className="font-body text-[0.9375rem] text-white/70 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="font-body text-sm text-white/45">
            © 2026 Discovery Haven Kids Co. Ltd. All rights reserved.
          </p>
          <p className="font-body text-sm text-white/45">{BRAND.website}</p>
        </div>
      </div>
    </footer>
  );
}
