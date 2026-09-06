import { usePortfolio } from '../../hooks/usePortfolio'
import { GraphicsLayer, DiamondMarks, TypeWatermark, DotGrid } from '../ui/BackgroundGraphics'
import { MixedHeading } from '../ui/MixedHeading'
import { FadeUp } from '../ui/Animations'

export function AchievementsSection() {
  const { achievements } = usePortfolio()
  return (
    <section
      id="achievements"
      className="relative isolate overflow-hidden"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      {/* Background graphics */}
      <GraphicsLayer>
        <DotGrid className="right-[4%] top-[8%] w-40 h-40 graphic-fade hidden md:block" opacity={0.4} />
        <TypeWatermark
          text="09"
          position="bottom-left"
          size="clamp(8rem, 24vw, 22rem)"
          opacity={0.05}
          italic
        />
        <DiamondMarks
          className="top-[16%] left-[4%] hidden lg:flex"
          color="var(--muted-light)"
          opacity={0.5}
          rotate={false}
        />
      </GraphicsLayer>
      {/* Header */}
      <FadeUp>
        <div
          className="section-pad-x flex items-center justify-between"
          style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: '2rem' }}
        >
          <span className="text-label">09 / ACTIVITIES</span>
          <span className="text-label hidden md:block">ACHIEVEMENTS & EVENTS</span>
        </div>
      </FadeUp>

      {/* Display heading */}
      <div className="section-pad-x" style={{ paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        <FadeUp>
          <MixedHeading line1="BEYOND" line2="CODE." />
        </FadeUp>
      </div>

      {/* Achievements */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        {achievements.map((ach, i) => (
          <FadeUp key={ach.id} delay={0.07 * i}>
            <div
              className="p-6 lg:p-8"
              style={{
                borderRight: '1px solid var(--border)',
                borderBottom: '1px solid var(--border)',
                minHeight: '180px',
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-number">{String(i + 1).padStart(2, '0')}</span>
                <span style={{ fontSize: '1.2rem', color: 'var(--muted-light)', lineHeight: 1 }}>{ach.icon}</span>
              </div>
              <h3
                className="font-display font-bold uppercase mb-3"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(0.9rem, 1.5vw, 1.2rem)',
                  letterSpacing: '-0.01em',
                  lineHeight: 1.1,
                  color: 'var(--foreground)',
                }}
              >
                {ach.title}
              </h3>
              <p className="text-body" style={{ fontSize: '0.85rem', lineHeight: 1.65 }}>
                {ach.description}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
