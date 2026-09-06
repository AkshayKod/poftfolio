import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePortfolio } from '../../hooks/usePortfolio'
import type { CertificationItem } from '../../types/portfolio'
import { GraphicsLayer, DotGrid, TypeWatermark, CrossMarks } from '../ui/BackgroundGraphics'
import { MixedHeading } from '../ui/MixedHeading'
import { FadeUp } from '../ui/Animations'

export function CertificationsSection() {
  const { certifications } = usePortfolio()
  const [selected, setSelected] = useState<CertificationItem | null>(null)

  return (
    <section
      id="certifications"
      className="relative isolate overflow-hidden"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      {/* Background graphics */}
      <GraphicsLayer>
        <DotGrid className="left-[4%] top-[10%] w-52 h-52 graphic-fade hidden md:block" opacity={0.4} />
        <TypeWatermark
          text="07"
          position="bottom-right"
          size="clamp(8rem, 24vw, 22rem)"
          opacity={0.05}
          italic
        />
        <CrossMarks
          className="right-[5%] top-[70%] hidden md:block"
          color="var(--border-dark)"
          marks={[
            { top: '0', left: '0' },
            { top: '2.4rem', left: '0' },
          ]}
        />
      </GraphicsLayer>
      {/* Header */}
      <FadeUp>
        <div
          className="section-pad-x flex items-center justify-between"
          style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: '2rem' }}
        >
          <span className="text-label">07 / CERTIFICATIONS</span>
          <span className="text-label hidden md:block">7 VERIFIED</span>
        </div>
      </FadeUp>

      {/* Display heading */}
      <div className="section-pad-x" style={{ paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        <FadeUp>
          <MixedHeading line1="CERTIFIED" line2="SKILLS." />
        </FadeUp>
      </div>

      {/* Certs list */}
      <div style={{ borderTop: '1px solid var(--border)' }}>
        {certifications.map((cert, i) => (
          <FadeUp key={cert.id} delay={0.04 * i}>
            <div
              className="section-pad-x flex items-start justify-between gap-6 cursor-none"
              style={{
                borderBottom: '1px solid var(--border)',
                paddingTop: '1.5rem',
                paddingBottom: '1.5rem',
                transition: 'background 0.25s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--surface)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              onClick={() => cert.image ? setSelected(cert) : null}
              data-cursor={cert.image ? 'VIEW CERT' : ''}
            >
              <div className="flex items-start gap-6 flex-1 min-w-0">
                <span
                  className="font-mono flex-shrink-0 mt-0.5"
                  style={{ fontSize: '0.7rem', color: 'var(--muted-light)', letterSpacing: '0.05em' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0">
                  <h3
                    className="font-display font-bold uppercase"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(0.9rem, 2vw, 1.3rem)',
                      letterSpacing: '-0.01em',
                      lineHeight: 1.1,
                      color: 'var(--foreground)',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {cert.title}
                  </h3>
                  <p className="text-label" style={{ fontSize: '0.55rem', color: 'var(--accent)' }}>
                    {cert.issuer}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 flex-shrink-0">
                <div className="hidden md:flex flex-wrap gap-1.5">
                  {cert.topics?.slice(0, 2).map(t => (
                    <span
                      key={t}
                      className="font-mono"
                      style={{ fontSize: '0.6rem', color: 'var(--muted)', letterSpacing: '0.03em' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span
                  className="font-mono text-xs"
                  style={{ color: 'var(--muted-light)', letterSpacing: '0.05em' }}
                >
                  {cert.year}
                </span>
                {cert.image && (
                  <span style={{ color: 'var(--muted)', fontSize: '0.7rem' }}>↗</span>
                )}
                {cert.pdfUrl && (
                  <a
                    href={cert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs"
                    style={{ color: 'var(--accent)', letterSpacing: '0.05em' }}
                    onClick={(e) => e.stopPropagation()}
                    data-cursor="DOWNLOAD"
                  >
                    PDF ↗
                  </a>
                )}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="cert-modal"
            className="cert-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{ background: 'var(--background)', maxWidth: '700px', width: '100%', padding: '2rem' }}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3
                    className="font-display font-bold uppercase"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1rem, 2vw, 1.4rem)',
                      letterSpacing: '-0.01em',
                      color: 'var(--foreground)',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {selected.title}
                  </h3>
                  <p className="text-label" style={{ fontSize: '0.55rem', color: 'var(--accent)' }}>
                    {selected.issuer} — {selected.year}
                  </p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="font-mono text-xs tracking-widest uppercase"
                  style={{ color: 'var(--muted)' }}
                >
                  CLOSE ✕
                </button>
              </div>
              <img
                src={selected.image}
                alt={selected.title}
                style={{ width: '100%', height: 'auto', border: '1px solid var(--border)' }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
