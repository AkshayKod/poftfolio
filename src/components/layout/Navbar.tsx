import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'HOME',     href: '#home' },
  { label: 'ABOUT',   href: '#about' },
  { label: 'SKILLS',  href: '#skills' },
  { label: 'WORK',    href: '#experience' },
  { label: 'PROJECTS',href: '#projects' },
  { label: 'RESEARCH',href: '#publications' },
  { label: 'CONTACT', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sectionIds = NAV_LINKS.map(l => l.href.slice(1))
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { rootMargin: '-30% 0px -60% 0px' }
    )

    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleNav = (href: string) => {
    setOpen(false)
    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 350)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[8000] transition-all duration-500 ${scrolled ? 'navbar-scrolled' : ''}`}
        style={{ borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent' }}
      >
        <div
          className="flex items-center justify-between"
          style={{
            padding: scrolled ? '0.8rem clamp(1.25rem, 5vw, 5rem)' : '1.2rem clamp(1.25rem, 5vw, 5rem)',
            transition: 'padding 0.4s ease',
          }}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNav('#home') }}
            className="font-display font-extrabold uppercase tracking-tight"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              letterSpacing: '-0.02em',
              color: 'var(--foreground)',
            }}
            data-cursor="HOME"
          >
            AKSHAY G.
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
                className="text-label transition-colors duration-200"
                style={{
                  color: activeSection === link.href.slice(1) ? 'var(--foreground)' : 'var(--muted)',
                }}
                data-cursor={link.label}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Hire Me CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="mailto:acharyaakshay367@gmail.com"
              className="btn-primary text-xs"
              data-cursor="CONTACT"
            >
              HIRE ME ↗
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            style={{ cursor: 'none' }}
          >
            {[0, 1, 2].map(i => (
              <span
                key={i}
                className="block w-6 h-px"
                style={{ background: 'var(--foreground)' }}
              />
            ))}
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-nav"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="mobile-nav-overlay"
          >
            {/* Close */}
            <div className="flex justify-between items-center mb-16">
              <span
                className="font-display font-extrabold uppercase"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.2rem',
                  letterSpacing: '-0.02em',
                  color: 'var(--background)',
                }}
              >
                AKSHAY G.
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="font-mono text-xs tracking-widest uppercase"
                style={{ color: 'rgba(245,240,235,0.5)' }}
              >
                CLOSE ✕
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col gap-2 flex-1 justify-center">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i + 0.2, duration: 0.5, ease: 'easeOut' }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
                    className="block font-display font-extrabold uppercase"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(2.5rem, 10vw, 5rem)',
                      lineHeight: 1,
                      letterSpacing: '-0.03em',
                      color: 'var(--background)',
                    }}
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}
            </nav>

            {/* Footer in overlay */}
            <div className="flex items-center gap-6 mt-12 pt-6" style={{ borderTop: '1px solid rgba(245,240,235,0.1)' }}>
              {[
                { label: 'GH', href: 'https://github.com/AkshayKod' },
                { label: 'LI', href: 'https://www.linkedin.com/in/akshay-g-55821b270' },
                { label: 'MAIL', href: 'mailto:acharyaakshay367@gmail.com' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs tracking-widest uppercase"
                  style={{ color: 'rgba(245,240,235,0.5)' }}
                >
                  {s.label} ↗
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
