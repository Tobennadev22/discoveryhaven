import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { BRAND, FOOTER_LINKS } from "../../data/content";
import discoveryHavenLogo from "../../assets/dh.png";

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
              <a
                href="#"
                className="text-gray-400 hover:text-aqua transition-colors font-body text-sm font-bold"
              >
                IG
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-aqua transition-colors font-body text-sm font-bold"
              >
                FB
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-aqua transition-colors font-body text-sm font-bold"
              >
                YT
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
