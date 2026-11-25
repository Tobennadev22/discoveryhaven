import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import { BRAND, FOOTER_LINKS } from "../../data/content";
import { SmartLink } from "../ui/SmartLink";
import discoveryHavenLogo from "../../assets/dh.png";

// Social links were placeholders (href="#"). Add them back here, with their
// real profile URLs, once those are confirmed.

function FooterList({ title, links }) {
  return (
    <div>
      <p className="mb-5 font-body text-sm font-extrabold text-yellow">
        {title}
      </p>
      <ul className="space-y-1">
        {links.map((l) => (
          <li key={l.href}>
            <SmartLink
              href={l.href}
              className="inline-block py-1.5 font-body text-[0.9375rem] text-white/75 transition-colors hover:text-white"
            >
              {l.label}
            </SmartLink>
          </li>
        ))}
      </ul>
    </div>
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
            className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-dark bg-yellow px-7 py-3.5 font-body text-[1.0625rem] font-extrabold text-dark shadow-[0_4px_0_0_#c8b5ff] transition-transform hover:-translate-y-px active:translate-y-1 active:shadow-none"
          >
            Explore Haven Academy
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-12 py-14 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="mb-5 flex items-center gap-2">
              <img
                src={discoveryHavenLogo}
                alt=""
                width="36"
                height="36"
                className="h-9 w-9 object-contain"
              />
              <span className="font-logo text-xl">Discovery Haven</span>
            </div>
            <p className="mb-6 max-w-xs font-body text-[0.9375rem] leading-relaxed text-white/70">
              Helping children explore their interests, build confidence
              through practice and learn to lead with care.
            </p>
            <a
              href={`mailto:${BRAND.email}`}
              className="mb-2 flex w-fit items-center gap-2 py-1 font-body text-[0.9375rem] font-semibold text-white/85 transition-colors hover:text-lilac"
            >
              <Mail size={16} aria-hidden="true" />
              {BRAND.email}
            </a>
            <p className="flex items-center gap-2 font-body text-[0.9375rem] font-semibold text-white/85">
              <Phone size={16} aria-hidden="true" />
              {BRAND.phoneNumber}
            </p>
          </div>

          <FooterList title="Programmes" links={FOOTER_LINKS.programmes} />
          <FooterList title="Discovery Haven" links={FOOTER_LINKS.organisation} />
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="font-body text-sm text-white/60">
            © {new Date().getFullYear()} {BRAND.legalName}. All rights
            reserved.
          </p>
          <p className="font-body text-sm text-white/60">{BRAND.website}</p>
        </div>
      </div>
    </footer>
  );
}
