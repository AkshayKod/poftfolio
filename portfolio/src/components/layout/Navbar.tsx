import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { usePortfolio } from '../../hooks/usePortfolio'

export function Navbar() {
  const { nav, profile } = usePortfolio()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 40)
  })

  const handleNav = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-card border-b border-white/5 py-3' : 'bg-transparent py-5'
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            handleNav('#home')
          }}
          className="text-lg font-bold tracking-wider text-white"
        >
          <span className="accent-gradient-text">{profile.shortName}</span>
          <span className="text-[#8a8a8a]">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNav(link.href)
                }}
                className="text-xs font-medium tracking-[0.2em] text-[#8a8a8a] transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="glass-card flex h-10 w-10 items-center justify-center rounded-lg text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <motion.div
        className="glass-card mx-4 mt-2 overflow-hidden rounded-2xl md:hidden"
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ul className="flex flex-col gap-1 p-4">
          {nav.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNav(link.href)
                }}
                className="block rounded-lg px-4 py-3 text-sm tracking-widest text-[#bbccd7] hover:bg-white/5"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.header>
  )
}
