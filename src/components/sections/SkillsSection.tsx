import { usePortfolio } from '../../hooks/usePortfolio'
import { GraphicsLayer, LineGrid, TypeWatermark, DiamondMarks } from '../ui/BackgroundGraphics'
import { MixedHeading } from '../ui/MixedHeading'
import { FadeUp } from '../ui/Animations'

export function SkillsSection() {
  const { skills } = usePortfolio()
  return (
    <section
      id="skills"
      className="relative isolate overflow-hidden"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      {/* Background graphics */}
      <GraphicsLayer>
        <LineGrid className="inset-0 graphic-fade" opacity={0.35} />
        <TypeWatermark
          text="SKILLS"
          position="top-right"
          size="clamp(6rem, 18vw, 16rem)"
          opacity={0.04}
        />
        <DiamondMarks
          className="bottom-[14%] right-[6%]"
          color="var(--muted-light)"
          opacity={0.6}
        />
      </GraphicsLayer>
      {/* Header */}
      <FadeUp>
        <div
          className="section-pad-x flex items-center justify-between"
          style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: '2rem' }}
        >
          <span className="text-label">03 / SKILLS</span>
          <span className="text-label hidden md:block">TECHNICAL EXPERTISE</span>
        </div>
      </FadeUp>

      {/* Display heading */}
      <div className="section-pad-x" style={{ paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        <FadeUp>
          <MixedHeading line1="SKILL" line2="WALL." />
        </FadeUp>
      </div>

      {/* Skill grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        {skills.categories.map((cat, catIdx) => (
          <FadeUp key={cat.name} delay={0.05 * catIdx}>
            <div
              className="p-6 lg:p-8"
              style={{
                borderRight: '1px solid var(--border)',
                borderBottom: '1px solid var(--border)',
                minHeight: '220px',
              }}
            >
              {/* Number + Name */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-number">{String(catIdx + 1).padStart(2, '0')}</span>
                <span
                  className="font-mono font-medium uppercase tracking-widest"
                  style={{ fontSize: '0.6rem', color: 'var(--foreground)' }}
                >
                  {cat.name}
                </span>
              </div>

              {/* Skills list */}
              <div className="flex flex-wrap gap-x-3 gap-y-2">
                {cat.items.map(skill => (
                  <span
                    key={skill}
                    className="skill-item font-display font-bold uppercase"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.05rem, 2vw, 1.4rem)',
                      letterSpacing: '-0.01em',
                      lineHeight: 1.2,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>

      {/* Marquee strip */}
      <FadeUp>
        <div
          className="section-pad-x flex items-center gap-6 overflow-hidden"
          style={{
            paddingTop: '1.5rem',
            paddingBottom: '1.5rem',
            borderTop: '1px solid var(--border)',
          }}
        >
          <span className="text-label flex-shrink-0">ALSO FAMILIAR WITH</span>
          <div className="flex gap-4 flex-wrap">
            {skills.alsoFamiliar.map(t => (
              <span
                key={t}
                className="font-mono text-xs tracking-wider px-3 py-1"
                style={{ border: '1px solid var(--border)', color: 'var(--muted)' }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </FadeUp>
    </section>
  )
}
