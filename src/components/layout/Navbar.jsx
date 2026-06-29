import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../../data/content'
import { Button } from '../ui/Button'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-9 h-9 rounded-full bg-aqua flex items-center justify-center">
              <span className="text-white font-cherry text-lg">D</span>
            </div>
            <span className="font-cherry text-xl text-dark hidden sm:block">Discovery Haven</span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-2 rounded-full text-sm font-bold font-body transition-colors ${
                  location.pathname === link.href
                    ? 'bg-aqua/10 text-aqua'
                    : 'text-dark hover:text-aqua hover:bg-aqua/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="primary" size="sm" as={Link} onClick={() => window.location.href='/haven-academy'}>
              Enrol Your Child
            </Button>
          </div>

          <button className="lg:hidden p-2 text-dark" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-6 space-y-2">
          {NAV_LINKS.map(link => (
            <Link
              key={link.href}
              to={link.href}
              className="block px-4 py-3 rounded-xl font-bold font-body text-dark hover:bg-aqua/5 hover:text-aqua transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4">
            <Button variant="primary" className="w-full" onClick={() => { setOpen(false); window.location.href='/haven-academy' }}>
              Enrol Your Child
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
