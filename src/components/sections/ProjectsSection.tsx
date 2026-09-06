import { useState } from 'react'
import { usePortfolio } from '../../hooks/usePortfolio'
import { GraphicsLayer, DotGrid, TypeWatermark, DiamondMarks } from '../ui/BackgroundGraphics'
import { MixedHeading } from '../ui/MixedHeading'
import { FadeUp } from '../ui/Animations'

export function ProjectsSection() {
  const { projects } = usePortfolio()
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      {/* Background graphics */}
      <GraphicsLayer>
        <DotGrid className="right-[3%] top-[10%] w-48 h-48 graphic-fade hidden md:block" opacity={0.45} />
        <TypeWatermark
          text="05"
          position="bottom-left"
          size="clamp(8rem, 24vw, 22rem)"
          opacity={0.05}
        />
        <DiamondMarks
          className="top-[30%] left-[4%] hidden lg:flex"
          color="var(--border-dark)"
          opacity={0.55}
          count={4}
          gap="1rem"
        />
      </GraphicsLayer>
      {/* Header */}
      <FadeUp>
        <div
          className="section-pad-x flex items-center justify-between"
          style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: '2rem' }}
        >
          <span className="text-label">05 / PROJECTS</span>
          <span className="text-label hidden md:block">SELECTED WORK</span>
        </div>
      </FadeUp>

      {/* Display heading */}
      <div className="section-pad-x" style={{ paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        <FadeUp>
          <MixedHeading line1="SELECTED" line2="WORK." />
        </FadeUp>
      </div>

      {/* Project list */}
      <div style={{ borderTop: '1px solid var(--border)' }}>
        {projects.map((proj, i) => (
          <FadeUp key={proj.id} delay={0.05 * i}>
            <div
              className="section-pad-x"
              style={{
                borderBottom: '1px solid var(--border)',
                paddingTop: 'clamp(2.5rem, 5vw, 4rem)',
                paddingBottom: 'clamp(2.5rem, 5vw, 4rem)',
                background: hovered === proj.id ? 'var(--surface)' : 'transparent',
                transition: 'background 0.3s ease',
              }}
              onMouseEnter={() => setHovered(proj.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Top row: number + title + year + CTA */}
              <div className="flex items-start justify-between gap-8 mb-8">
                <div className="flex items-start gap-6 flex-1 min-w-0">
                  <span
                    className="font-mono font-medium flex-shrink-0 mt-1"
                    style={{ fontSize: '0.75rem', color: 'var(--muted-light)', letterSpacing: '0.05em' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0">
                    <h3
                      className="font-display font-extrabold uppercase"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.4rem, 4vw, 3rem)',
                        letterSpacing: '-0.02em',
                        lineHeight: 0.95,
                        color: 'var(--foreground)',
                        marginBottom: '0.4rem',
                        transition: 'transform 0.3s ease',
                        transform: hovered === proj.id ? 'translateX(4px)' : 'none',
                      }}
                    >
                      {proj.title}
                    </h3>
                    <p className="text-label" style={{ fontSize: '0.6rem', color: 'var(--muted)' }}>
                      {proj.subtitle}
                    </p>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex items-center gap-3 flex-shrink-0 mt-1">
                  <span className="text-label hidden md:block" style={{ color: 'var(--muted-light)' }}>
                    {proj.year}
                  </span>
                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-xs"
                      data-cursor="OPEN"
                    >
                      LIVE ↗
                    </a>
                  )}
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost text-xs"
                      data-cursor="CODE"
                    >
                      CODE ↗
                    </a>
                  )}
                </div>
              </div>

              {/* Bottom row: description + tech + image */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <p className="text-body" style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>
                    {proj.description}
                  </p>
                </div>
                <div className="lg:col-span-1">
                  <p className="text-label mb-3">TECH STACK</p>
                  <div className="flex flex-wrap gap-2">
                    {proj.stack.map(t => (
                      <span
                        key={t}
                        className="font-mono text-xs tracking-wider px-2.5 py-1"
                        style={{ border: '1px solid var(--border)', color: 'var(--foreground)' }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-6 mt-4">
                    <div>
                      <p className="text-label" style={{ fontSize: '0.5rem', marginBottom: '0.1rem' }}>ROLE</p>
                      <p className="font-mono text-xs" style={{ color: 'var(--foreground)' }}>{proj.role}</p>
                    </div>
                    <div>
                      <p className="text-label" style={{ fontSize: '0.5rem', marginBottom: '0.1rem' }}>YEAR</p>
                      <p className="font-mono text-xs" style={{ color: 'var(--foreground)' }}>{proj.year}</p>
                    </div>
                  </div>
                </div>

                {/* Image */}
                {proj.image && (
                  <div
                    className="lg:col-span-1 project-image-wrap rounded-sm"
                    style={{
                      height: 'clamp(140px, 16vw, 220px)',
                      border: '1px solid var(--border)',
                      overflow: 'hidden',
                    }}
                    data-cursor="VIEW"
                  >
                    <img
                      src={proj.image}
                      alt={proj.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                )}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
