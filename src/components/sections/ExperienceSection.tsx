import { usePortfolio } from '../../hooks/usePortfolio'
import { GraphicsLayer, LineGrid, TypeWatermark, CrossMarks } from '../ui/BackgroundGraphics'
import { MixedHeading } from '../ui/MixedHeading'
import { FadeUp } from '../ui/Animations'

export function ExperienceSection() {
  const { experience } = usePortfolio()
  return (
    <section
      id="experience"
      className="relative isolate overflow-hidden"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      {/* Background graphics */}
      <GraphicsLayer>
        <LineGrid className="left-0 bottom-[8%] w-[70%] h-64 graphic-fade-side" opacity={0.3} />
        <TypeWatermark
          text="04"
          position="bottom-right"
          size="clamp(8rem, 24vw, 22rem)"
          opacity={0.05}
          italic
        />
        <CrossMarks
          className="right-[10%] top-[18%] hidden md:block"
          marks={[
            { top: '0', left: '0' },
            { top: '2.6rem', left: '3rem' },
            { top: '0', left: '6rem' },
          ]}
        />
      </GraphicsLayer>
      {/* Header */}
      <FadeUp>
        <div
          className="section-pad-x flex items-center justify-between"
          style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: '2rem' }}
        >
          <span className="text-label">04 / EXPERIENCE</span>
          <span className="text-label hidden md:block">INTERNSHIPS</span>
        </div>
      </FadeUp>

      {/* Display heading */}
      <div className="section-pad-x" style={{ paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        <FadeUp>
          <MixedHeading line1="WHERE" line2="I WORKED." />
        </FadeUp>
      </div>

      {/* Timeline entries */}
      <div style={{ borderTop: '1px solid var(--border)' }}>
        {experience.map((exp, i) => (
          <FadeUp key={exp.id} delay={0.1 * i}>
            <div
              className="section-pad-x grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12"
              style={{
                paddingTop: 'clamp(3rem, 5vw, 4rem)',
                paddingBottom: 'clamp(3rem, 5vw, 4rem)',
                borderBottom: '1px solid var(--border)',
              }}
            >
              {/* Left: number + year */}
              <div className="lg:col-span-2 flex flex-row lg:flex-col gap-4 items-start">
                <span
                  className="font-mono font-medium"
                  style={{ fontSize: '3rem', lineHeight: 1, color: 'var(--muted-light)', letterSpacing: '-0.03em' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <span className="text-label block mb-1">{exp.period.slice(-4)}</span>
                  <span className="text-label block" style={{ color: 'var(--muted-light)', fontSize: '0.55rem' }}>
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Center: role + description */}
              <div className="lg:col-span-6">
                <h3
                  className="font-display font-bold uppercase mb-1"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.3rem, 3vw, 2.2rem)',
                    letterSpacing: '-0.02em',
                    lineHeight: 1,
                    color: 'var(--foreground)',
                  }}
                >
                  {exp.role}
                </h3>
                <p
                  className="font-mono text-xs tracking-wide uppercase mb-4"
                  style={{ color: 'var(--accent)', letterSpacing: '0.05em' }}
                >
                  {exp.company} — {exp.location}
                </p>
                <p
                  className="text-body mb-4"
                  style={{ fontSize: '0.9rem', lineHeight: 1.7 }}
                >
                  {exp.summary}
                </p>
                <ul className="space-y-1.5">
                  {exp.highlights.map(h => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-body"
                      style={{ fontSize: '0.85rem' }}
                    >
                      <span style={{ color: 'var(--accent)', marginTop: '0.35rem', flexShrink: 0 }}>—</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: tech stack */}
              <div className="lg:col-span-4">
                <p className="text-label mb-3">TECH USED</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map(t => (
                    <span
                      key={t}
                      className="font-mono text-xs tracking-wider px-2.5 py-1"
                      style={{ border: '1px solid var(--border)', color: 'var(--foreground)' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
