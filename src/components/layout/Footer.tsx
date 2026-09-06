
import { GraphicsLayer, TypeWatermark } from '../ui/BackgroundGraphics'

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const SOCIALS = [
    { label: 'GitHub', href: 'https://github.com/AkshayKod', abbr: 'GH' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/akshay-g-55821b270', abbr: 'LI' },
    { label: 'Email', href: 'mailto:acharyaakshay367@gmail.com', abbr: 'ML' },
    { label: 'Resume', href: '/Akshay_G_Resume.pdf', abbr: 'CV' },
  ]

  return (
    <footer className="relative isolate overflow-hidden" style={{ borderTop: '1px solid var(--border)', background: 'var(--foreground)' }}>
      {/* Background graphics (dark) */}
      <GraphicsLayer>
        <TypeWatermark
          text="© 2026"
          position="bottom-left"
          size="clamp(5rem, 14vw, 12rem)"
          opacity={0.12}
          color="rgba(245,240,235,0.5)"
        />
        <TypeWatermark
          text="AKSHAY"
          position="top-right"
          size="clamp(8rem, 30vw, 28rem)"
          opacity={0.05}
          color="rgba(245,240,235,0.6)"
        />
      </GraphicsLayer>
      {/* Main footer content */}
      <div
        className="section-pad-x"
        style={{ paddingTop: 'clamp(3rem, 7vw, 6rem)', paddingBottom: 'clamp(3rem, 7vw, 6rem)' }}
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
          {/* Large name */}
          <div>
            <p
              className="font-mono text-xs tracking-widest uppercase mb-4"
              style={{ color: 'rgba(245,240,235,0.35)' }}
            >
              PORTFOLIO — 2026
            </p>
            <h2
              className="font-display font-extrabold uppercase"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3rem, 10vw, 9rem)',
                lineHeight: 0.88,
                letterSpacing: '-0.04em',
              }}
            >
              <span
                style={{
                  color: 'var(--background)',
                  fontWeight: 800,
                }}
              >
                AKSHAY G.
              </span>
            </h2>
            <p
              className="font-mono text-xs tracking-widest uppercase mt-4"
              style={{ color: 'rgba(245,240,235,0.4)' }}
            >
              FULL STACK DEVELOPER · MCA GRADUATE
            </p>
          </div>

          {/* Social links */}
          <div className="flex flex-col gap-3 lg:items-end">
            {SOCIALS.map(s => (
              <a
                key={s.abbr}
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
                data-cursor={s.abbr}
              >
                <span
                  className="font-mono text-xs tracking-widest uppercase"
                  style={{
                    color: 'rgba(245,240,235,0.35)',
                    transition: 'color 0.2s',
                  }}
                >
                  {s.abbr}
                </span>
                <span
                  className="font-display font-bold uppercase"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                    letterSpacing: '-0.01em',
                    color: 'var(--background)',
                    transition: 'opacity 0.2s',
                  }}
                >
                  {s.label} ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="section-pad-x flex items-center justify-between flex-wrap gap-4"
        style={{
          borderTop: '1px solid rgba(245,240,235,0.1)',
          paddingTop: '1.25rem',
          paddingBottom: '1.25rem',
        }}
      >
        <p
          className="font-mono text-xs tracking-wider"
          style={{ color: 'rgba(245,240,235,0.3)' }}
        >
          © 2026 Akshay G. All rights reserved.
        </p>
        <button
          onClick={scrollToTop}
          className="font-mono text-xs tracking-widest uppercase flex items-center gap-2"
          style={{ color: 'rgba(245,240,235,0.5)', transition: 'color 0.2s', cursor: 'none' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--background)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,240,235,0.5)')}
          data-cursor="TOP"
        >
          BACK TO TOP ↑
        </button>
      </div>
    </footer>
  )
}
