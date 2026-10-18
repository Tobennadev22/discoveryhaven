import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../../data/content";
import { Button } from "../ui/Button";
import discoveryHavenLogo from "../../assets/dh.png";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-5">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border border-dark/10 bg-white/90 pl-4 pr-2.5 shadow-lift backdrop-blur-md sm:pl-5">
        <Link
          to="/"
          className="flex flex-shrink-0 items-center gap-2 rounded-full"
          onClick={() => setOpen(false)}
        >
          <img
            src={discoveryHavenLogo}
            alt=""
            className="h-9 w-9 object-contain"
          />
          <span className="font-logo text-xl text-dark">Discovery Haven</span>
        </Link>

        <div className="hidden items-center gap-0.5 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-3.5 py-2 font-body text-[0.9375rem] font-bold transition-colors xl:px-4 ${
                  active
                    ? "bg-aqua/15 text-dark"
                    : "text-dark/75 hover:bg-dark/5 hover:text-dark"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <Button
            variant="primary"
            size="sm"
            onClick={() => (window.location.href = "/haven-academy")}
          >
            Enrol your child
          </Button>
        </div>

        <button
          className="flex h-11 w-11 items-center justify-center rounded-full text-dark hover:bg-dark/5 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-7xl rounded-3xl border border-dark/10 bg-white p-3 shadow-lift lg:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              aria-current={location.pathname === link.href ? "page" : undefined}
              className={`block rounded-2xl px-4 py-3 font-body text-lg font-bold transition-colors ${
                location.pathname === link.href
                  ? "bg-aqua/15 text-dark"
                  : "text-dark hover:bg-dark/5"
              }`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="px-1 pb-1 pt-3">
            <Button
              variant="primary"
              className="w-full"
              onClick={() => {
                setOpen(false);
                window.location.href = "/haven-academy";
              }}
            >
              Enrol your child
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
