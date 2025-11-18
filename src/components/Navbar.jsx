import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

function NavLink({ href = '#', children }) {
  return (
    <a href={href} className="text-sm md:text-base text-neutral-300 hover:text-white transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-black/40 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-lime-400 via-emerald-400 to-cyan-400 shadow-[0_0_30px_rgba(163,230,53,0.35)]" />
          <span className="text-white font-semibold tracking-wide group-hover:text-lime-300 transition-colors">Mantis</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="#work">Work</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <a href="#contact" className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-black bg-lime-300 hover:bg-lime-200 transition-colors">Start a project</a>
        </nav>

        <button className="md:hidden text-white" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/70 backdrop-blur">
          <div className="px-6 py-4 flex flex-col gap-4">
            <NavLink href="#work">Work</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <a href="#contact" className="mt-2 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium text-black bg-lime-300">Start a project</a>
          </div>
        </div>
      )}
    </header>
  )
}
