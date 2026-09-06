import { usePortfolio } from '../../hooks/usePortfolio'
import { GraphicsLayer, RingSet, TypeWatermark } from '../ui/BackgroundGraphics'
import { MixedHeading } from '../ui/MixedHeading'
import { FadeUp } from '../ui/Animations'

export function PublicationsSection() {
  const { publications } = usePortfolio()
  const pub = publications[0]

  if (!pub) return null
  return (
    <section
      id="publications"
      className="relative isolate overflow-hidden"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      {/* Background graphics */}
      <GraphicsLayer>
        <RingSet
          className="left-[-8%] bottom-[-16%]"
          size="min(60vw, 480px)"
          color="var(--border-dark)"
          opacity={0.7}
          count={4}
          dashed
        />
        <TypeWatermark
          text="06"
          position="top-right"
          size="clamp(7rem, 22vw, 20rem)"
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
          <span className="text-label">06 / RESEARCH</span>
          <span className="text-label hidden md:block">PUBLICATIONS</span>
        </div>
      </FadeUp>

      {/* Display heading */}
      <div className="section-pad-x" style={{ paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        <FadeUp>
          <MixedHeading line1="IEEE" line2="RESEARCH." />
        </FadeUp>
      </div>

      {/* Publication card */}
      <FadeUp delay={0.1}>
        <div
          className="section-pad-x"
          style={{
            borderTop: '1px solid var(--border)',
            borderBottom: '1px solid var(--border)',
            paddingTop: 'clamp(3rem, 5vw, 4rem)',
            paddingBottom: 'clamp(3rem, 5vw, 4rem)',
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left meta */}
            <div className="lg:col-span-3">
              <span
                className="font-mono font-medium block mb-4"
                style={{ fontSize: '3rem', lineHeight: 1, color: 'var(--muted-light)', letterSpacing: '-0.03em' }}
              >
                01
              </span>
              <div className="space-y-2">
                <div>
                  <p className="text-label" style={{ fontSize: '0.5rem', marginBottom: '0.1rem' }}>PUBLISHED</p>
                  <p className="font-mono text-xs" style={{ color: 'var(--foreground)' }}>{pub.date}</p>
                </div>
                <div>
                  <p className="text-label" style={{ fontSize: '0.5rem', marginBottom: '0.1rem' }}>CONFERENCE</p>
                  <p className="font-mono text-xs" style={{ color: 'var(--foreground)' }}>{pub.conference}</p>
                </div>
                <div>
                  <p className="text-label" style={{ fontSize: '0.5rem', marginBottom: '0.1rem' }}>ASSOCIATION</p>
                  <p className="font-mono text-xs" style={{ color: 'var(--accent)' }}>{pub.association}</p>
                </div>
              </div>
            </div>

            {/* Center: title + description */}
            <div className="lg:col-span-6">
              <h3
                className="font-display font-extrabold uppercase mb-4"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: 'var(--foreground)',
                }}
              >
                {pub.title}
              </h3>
              <p
                className="text-body mb-6"
                style={{ fontSize: '0.9rem', lineHeight: 1.7 }}
              >
                {pub.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {pub.tags.map(t => (
                  <span
                    key={t}
                    className="font-mono text-xs tracking-wider px-2.5 py-1"
                    style={{ border: '1px solid var(--border)', color: 'var(--foreground)' }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={pub.paperPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs"
                data-cursor="READ"
              >
                READ PAPER ↗
              </a>
            </div>

            {/* Right: certificate image */}
            <div className="lg:col-span-3">
              {/* Certificate preview */}
              <div
                className="project-image-wrap"
                style={{
                  border: '1px solid var(--border)',
                  height: '200px',
                  background: 'var(--surface)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                data-cursor="VIEW"
              >
                <img
                  src={pub.image}
                  alt={pub.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    const t = e.target as HTMLImageElement
                    t.style.display = 'none'
                    t.parentElement!.innerHTML = `<div style="text-align:center;padding:1rem"><p style="font-family:var(--font-mono);font-size:0.6rem;color:var(--muted);letter-spacing:0.1em">IEEE PAPER<br/>ICNPCV 2026</p></div>`
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  )
}
