import { usePortfolio } from '../../hooks/usePortfolio'
import { GraphicsLayer, LineGrid, TypeWatermark } from '../ui/BackgroundGraphics'
import { MixedHeading } from '../ui/MixedHeading'
import { FadeUp } from '../ui/Animations'

export function EducationSection() {
  const { education } = usePortfolio()
  return (
    <section
      id="education"
      className="relative isolate overflow-hidden"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      {/* Background graphics */}
      <GraphicsLayer>
        <LineGrid className="right-0 top-[6%] w-[60%] h-56 graphic-fade-side" opacity={0.3} />
        <TypeWatermark
          text="08"
          position="top-left"
          size="clamp(8rem, 24vw, 22rem)"
          opacity={0.05}
          italic
        />
      </GraphicsLayer>
      {/* Header */}
      <FadeUp>
        <div
          className="section-pad-x flex items-center justify-between"
          style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: '2rem' }}
        >
          <span className="text-label">08 / EDUCATION</span>
          <span className="text-label hidden md:block">ACADEMIC JOURNEY</span>
        </div>
      </FadeUp>

      {/* Display heading */}
      <div className="section-pad-x" style={{ paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        <FadeUp>
          <MixedHeading line1="ACADEMIC" line2="JOURNEY." />
        </FadeUp>
      </div>

      {/* Education timeline */}
      <div style={{ borderTop: '1px solid var(--border)' }}>
        {education.map((edu, i) => (
          <FadeUp key={edu.id} delay={0.08 * i}>
            <div
              className="section-pad-x grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
              style={{
                paddingTop: 'clamp(2rem, 4vw, 3rem)',
                paddingBottom: 'clamp(2rem, 4vw, 3rem)',
                borderBottom: '1px solid var(--border)',
              }}
            >
              {/* Num + year */}
              <div className="lg:col-span-2 flex flex-row lg:flex-col gap-3 items-start">
                <span
                  className="font-mono font-medium"
                  style={{ fontSize: '2.5rem', lineHeight: 1, color: 'var(--muted-light)', letterSpacing: '-0.03em' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-label mt-2" style={{ fontSize: '0.55rem' }}>{edu.period}</span>
              </div>

              {/* Short degree badge */}
              <div className="lg:col-span-2 flex items-start pt-2">
                <span
                  className="font-display font-extrabold"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                    letterSpacing: '-0.03em',
                    color: 'var(--muted-light)',
                    lineHeight: 1,
                  }}
                >
                  {edu.short}
                </span>
              </div>

              {/* Degree + institution */}
              <div className="lg:col-span-6">
                <h3
                  className="font-display font-bold uppercase mb-1"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                    color: 'var(--foreground)',
                  }}
                >
                  {edu.degree}
                </h3>
                <p
                  className="text-body"
                  style={{ fontSize: '0.85rem', lineHeight: 1.6 }}
                >
                  {edu.institution}
                </p>
              </div>

              {/* Grade */}
              <div className="lg:col-span-2">
                <p className="text-label" style={{ fontSize: '0.5rem', marginBottom: '0.2rem' }}>RESULT</p>
                <p
                  className="font-mono font-medium"
                  style={{ fontSize: '0.9rem', color: 'var(--foreground)' }}
                >
                  {edu.detail}
                </p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
