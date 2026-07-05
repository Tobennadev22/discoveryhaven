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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9  flex items-center justify-center">
                <img src={discoveryHavenLogo} alt="discoveryHavenLogo" />
              </div>
              <span className="font-cherry text-xl">Discovery Haven</span>
            </div>
            <p className="text-gray-400 font-body text-sm leading-relaxed mb-6">
              {BRAND.taglineShort}
            </p>
            <a
              href={`mailto:${BRAND.email}`}
              className="flex items-center gap-2 text-gray-400 hover:text-aqua transition-colors font-body text-sm mb-6"
            >
              <Mail size={16} />
              {BRAND.email}
            </a>
            <div className=" text-gray-400 font-body text-sm mb-6">
              {BRAND.phoneNumber}
            </div>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-aqua transition-colors">
                <InstagramIcon size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-aqua transition-colors">
                <FacebookIcon size={20} />
              </a>
              <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-aqua transition-colors">
                <YoutubeIcon size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-cherry text-lg mb-5">Programmes</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.programmes.map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className="text-gray-400 hover:text-aqua transition-colors font-body text-sm"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-cherry text-lg mb-5">Organisation</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.organisation.map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className="text-gray-400 hover:text-aqua transition-colors font-body text-sm"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 font-body text-sm">
            © 2026 Discovery Haven Kids Co. Ltd. All Rights Reserved.
          </p>
          <p className="text-gray-500 font-body text-sm">{BRAND.website}</p>
        </div>
      </div>
    </footer>
  );
}
