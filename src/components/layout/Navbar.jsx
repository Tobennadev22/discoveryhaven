import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, BOOK_A_CALL } from "../../data/content";
import { SmartLink } from "../ui/SmartLink";
import discoveryHavenLogo from "../../assets/dh.png";

// "Book a call" is the secondary action: an outlined pill, so it sits
// beside the links without competing with each page's primary purple CTA.
const bookCallClass =
  "inline-flex items-center justify-center gap-2 rounded-full border-2 border-dark bg-white font-body font-extrabold text-dark shadow-press-sm transition-[transform,box-shadow,background-color] duration-150 hover:-translate-y-px hover:bg-cream active:translate-y-1 active:shadow-none";

function isActive(pathname, href) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav
      aria-label="Main"
      className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-5"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border border-dark/10 bg-white/90 pl-4 pr-2.5 shadow-lift backdrop-blur-md sm:pl-5">
        <Link
          to="/"
          className="flex flex-shrink-0 items-center gap-2 rounded-full"
          onClick={() => setOpen(false)}
        >
          <img
            src={discoveryHavenLogo}
            alt=""
            width="36"
            height="36"
            className="h-9 w-9 object-contain"
          />
          <span className="font-logo text-xl text-dark">Discovery Haven</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = isActive(location.pathname, link.href);
            return (
              <Link
                key={link.href}
                to={link.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-4 py-2.5 font-body text-[0.9375rem] font-bold transition-colors ${
                  active
                    ? "bg-aqua/10 text-aqua"
                    : "text-dark/75 hover:bg-dark/5 hover:text-dark"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <SmartLink
            href={BOOK_A_CALL.href}
            className={`${bookCallClass} px-4 py-2 text-sm`}
          >
            <Phone size={15} aria-hidden="true" />
            {BOOK_A_CALL.label}
          </SmartLink>
        </div>

        <button
          className="flex h-11 w-11 items-center justify-center rounded-full text-dark hover:bg-dark/5 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="mx-auto mt-2 max-w-7xl rounded-3xl border border-dark/10 bg-white p-3 shadow-lift lg:hidden"
        >
          {NAV_LINKS.map((link) => {
            const active = isActive(location.pathname, link.href);
            return (
              <Link
                key={link.href}
                to={link.href}
                aria-current={active ? "page" : undefined}
                className={`block rounded-2xl px-4 py-3 font-body text-lg font-bold transition-colors ${
                  active ? "bg-aqua/10 text-aqua" : "text-dark hover:bg-dark/5"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="px-1 pb-1 pt-3">
            <SmartLink
              href={BOOK_A_CALL.href}
              className={`${bookCallClass} w-full px-6 py-3 text-base`}
              onClick={() => setOpen(false)}
            >
              <Phone size={16} aria-hidden="true" />
              {BOOK_A_CALL.label}
            </SmartLink>
          </div>
        </div>
      )}
    </nav>
  );
}
