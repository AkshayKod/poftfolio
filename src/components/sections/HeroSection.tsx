import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { GraphicsLayer, DotGrid, RingSet, CrossMarks, TypeWatermark } from '../ui/BackgroundGraphics'

const ROLES = [
  'FULL STACK DEVELOPER',
  'REACT · NODE.JS · SQL',
  'AI & CLOUD ENTHUSIAST',
  'MCA GRADUATE — 2026',
]

export function HeroSection() {
  const [roleIdx, setRoleIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setRoleIdx(i => (i + 1) % ROLES.length), 2800)
    return () => clearInterval(id)
  }, [])

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative isolate min-h-screen flex flex-col justify-between overflow-hidden"
      style={{ paddingTop: '7rem' }}
    >
      {/* Background graphics */}
      <GraphicsLayer>
        <RingSet
          className="right-[-10%] top-[8%]"
          size="min(70vw, 720px)"
          color="var(--border)"
          opacity={0.85}
          count={4}
          dashed
        />
        <DotGrid
          className="left-6 md:left-[4%] bottom-[16%] w-40 h-40 graphic-fade"
          opacity={0.55}
        />
        <CrossMarks
          className="left-[6%] top-[14%] hidden md:block"
          marks={[
            { top: '0', left: '0' },
            { top: '3rem', left: '2.2rem' },
            { top: '0', left: '4.4rem' },
          ]}
        />
        <TypeWatermark
          text="© 2026"
          position="bottom-right"
          size="clamp(4rem, 10vw, 8rem)"
          opacity={0.05}
        />
      </GraphicsLayer>
      {/* Top row: label + role ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex items-center justify-between section-pad-x"
      >
        <span className="text-label">PORTFOLIO — 2026</span>
        <span
          key={roleIdx}
          className="text-label hidden md:block"
          style={{ color: 'var(--foreground)' }}
        >
          <motion.span
            key={roleIdx}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.4 }}
          >
            {ROLES[roleIdx]}
          </motion.span>
        </span>
      </motion.div>

      {/* Main display typography */}
      <div className="section-pad-x flex flex-col gap-0" style={{ marginTop: 'clamp(2rem, 4vw, 4rem)' }}>
        {/* BUILDING */}
        <div style={{ overflow: 'hidden' }}>
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-hero"
            style={{ fontFamily: 'var(--font-display)', lineHeight: 0.88 }}
          >
            <span style={{ color: 'var(--foreground)', fontWeight: 800 }}>BUILDING</span>
          </motion.h1>
        </div>

        {/* SCALABLE row */}
        <div className="flex items-end justify-between flex-wrap gap-4" style={{ overflow: 'hidden' }}>
          <motion.div
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              className="text-hero"
              style={{
                fontFamily: 'var(--font-display)',
                lineHeight: 0.88,
                fontStyle: 'italic',
                background: 'linear-gradient(100deg, var(--foreground) 0%, var(--foreground) 40%, var(--accent) 70%, var(--accent) 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              SCALABLE
            </span>
          </motion.div>

          {/* Profile image inlined with text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:block rounded-full overflow-hidden flex-shrink-0"
            style={{ width: 'clamp(5rem, 8vw, 8rem)', height: 'clamp(5rem, 8vw, 8rem)', border: '2px solid var(--border-dark)' }}
            data-cursor="ABOUT"
            onClick={() => handleScroll('about')}
          >
            <img
              src="/profile.jpg"
              alt="Akshay G"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
            />
          </motion.div>
        </div>

        {/* SYSTEMS */}
        <div style={{ overflow: 'hidden' }}>
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-hero"
            style={{ fontFamily: 'var(--font-display)', lineHeight: 0.88 }}
          >
            SYSTEMS.
          </motion.h1>
        </div>
      </div>

      {/* Bottom row: bio + CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="section-pad-x flex flex-col md:flex-row items-start md:items-end justify-between gap-8"
        style={{
          paddingBottom: 'clamp(2rem, 5vw, 4rem)',
          paddingTop: 'clamp(2rem, 4vw, 4rem)',
          borderTop: '1px solid var(--border)',
          marginTop: 'clamp(2rem, 4vw, 4rem)',
        }}
      >
        {/* Bio */}
        <div className="max-w-sm">
          <p
            className="font-display font-bold uppercase"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1rem, 2vw, 1.35rem)',
              letterSpacing: '-0.02em',
              lineHeight: 1.4,
              marginBottom: '1rem',
            }}
          >
            <span style={{ color: 'var(--foreground)' }}>"STILL</span>
            <span style={{ color: 'var(--foreground)' }}> BECOMING,</span>
            <br />
            <span style={{ color: 'var(--accent)' }}>NEVER</span>
            <span style={{ color: 'var(--foreground)' }}> STOPPING."</span>
          </p>
          <p className="text-body" style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>
            MCA Graduate (2026) with hands-on experience in full-stack development,
            API integration, and database-driven applications.
            Based in <strong style={{ color: 'var(--foreground)', fontWeight: 500 }}>Mangalore, India</strong>.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => handleScroll('projects')}
            className="btn-primary"
            data-cursor="EXPLORE"
          >
            VIEW MY WORK ↓
          </button>
          <a
            href="/Akshay_G_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            data-cursor="DOWNLOAD"
          >
            RÉSUMÉ ↗
          </a>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-label" style={{ fontSize: '0.55rem' }}>SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: 1, height: 40, background: 'var(--border-dark)' }}
        />
      </motion.div>
    </section>
  )
}
