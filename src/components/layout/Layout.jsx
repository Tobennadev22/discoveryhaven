import { Navbar } from './Navbar'
import { Footer } from './Footer'

// The navbar floats over each page's first section, so pages give their
// first section enough top padding to clear it (about 8rem).
export function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}
