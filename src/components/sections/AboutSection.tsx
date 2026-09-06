import { useState } from 'react'
import { usePortfolio } from '../../hooks/usePortfolio'
import { GraphicsLayer, DotGrid, TypeWatermark } from '../ui/BackgroundGraphics'
import { MixedHeading } from '../ui/MixedHeading'
import { FadeUp, Typewriter } from '../ui/Animations'

export function AboutSection() {
  const { info, stats } = usePortfolio()
  const [flipped, setFlipped] = useState(false)

  return (
    <section
      id="about"
      className="relative isolate overflow-hidden"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      {/* Background graphics */}
      <GraphicsLayer>
        <DotGrid className="right-[4%] top-[12%] w-56 h-56 graphic-fade" opacity={0.5} />
        <TypeWatermark
          text="02"
          position="bottom-right"
          size="clamp(8rem, 26vw, 24rem)"
          opacity={0.05}
          italic
        />
        <TypeWatermark
          text="ABOUT"
          position="top-left"
          size="clamp(5rem, 16vw, 14rem)"
          opacity={0.035}
        />
      </GraphicsLayer>
      {/* Section header */}
      <FadeUp>
        <div
          className="section-pad-x flex items-center justify-between"
          style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: '2rem' }}
        >
          <span className="text-label">02 / ABOUT</span>
          <span className="text-label hidden md:block">GET TO KNOW ME</span>
        </div>
      </FadeUp>

      {/* Display heading */}
      <div className="section-pad-x" style={{ paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        <div style={{ overflow: 'hidden' }}>
          <FadeUp>
            <MixedHeading line1="ABOUT" line2="ME." />
          </FadeUp>
        </div>
      </div>

      {/* Three-column asymmetric grid */}
      <div
        className="grid grid-cols-1 lg:grid-cols-3"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        {/* Col 1 – Flip Card */}
        <div
          className="flip-card"
          style={{
            borderRight: 'none',
            height: 'clamp(320px, 40vw, 480px)',
            padding: 'clamp(1.5rem, 3vw, 2.5rem)',
            background: 'var(--surface)',
            borderBottom: '1px solid var(--border)',
          }}
          onClick={() => setFlipped(f => !f)}
          data-cursor={flipped ? 'FLIP BACK' : 'FLIP'}
        >
          <div className={`flip-card-inner ${flipped ? 'is-flipped' : ''}`}>
            {/* Front */}
            <div
              className="flip-card-face flex flex-col h-full justify-between"
              style={{ background: 'var(--surface)', padding: '0' }}
            >
              <div className="w-full h-full overflow-hidden rounded-sm">
                <img
                  src="/profile.jpg"
                  alt="Akshay G"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    transition: 'transform 0.6s ease',
                  }}
                />
              </div>
              <p
                className="font-mono text-xs tracking-widest uppercase mt-3"
                style={{ color: 'var(--muted)' }}
              >
                ↻ CLICK TO FLIP
              </p>
            </div>

            {/* Back */}
            <div
              className="flip-card-face flip-card-back flex flex-col items-start justify-center p-6"
              style={{ background: 'var(--foreground)' }}
            >
              <p
                className="font-mono text-xs tracking-widest uppercase mb-4"
                style={{ color: 'rgba(245,240,235,0.4)' }}
              >
                // DEVELOPER MINDSET
              </p>
              <h3
                className="font-display font-extrabold uppercase"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                  lineHeight: 0.96,
                  letterSpacing: '-0.03em',
                  color: 'var(--background)',
                  marginBottom: '1.5rem',
                }}
              >
                KEEP<br/>BUILDING.<br/>KEEP<br/>SHIPPING.
              </h3>
              <p
                className="font-mono text-xs tracking-wide"
                style={{ color: 'rgba(245,240,235,0.5)', lineHeight: 1.6 }}
              >
                "Every great product starts with a <br/>problem worth solving."
              </p>
            </div>
          </div>
        </div>

        {/* Col 2 – Bio */}
        <div
          className="flex flex-col justify-between"
          style={{
            padding: 'clamp(2rem, 4vw, 3rem)',
            borderBottom: '1px solid var(--border)',
            borderLeft: '1px solid var(--border)',
            borderRight: '1px solid var(--border)',
          }}
        >
          <div>
            <Typewriter
              delay={0.1}
              text="MCA student with hands-on experience in full-stack web development, API integration, and database-driven applications. Skilled in building scalable systems, optimizing performance, and delivering real-world solutions."
              className="text-body"
              style={{ fontSize: 'clamp(1rem, 1.5vw, 1.1rem)', lineHeight: 1.8, marginBottom: '2rem', color: 'var(--foreground)', opacity: 0.75 }}
            />
            <Typewriter
              delay={1.5}
              text="Certified in Generative AI, Python Digital Forensics, and Docker containerization. Published research at IEEE ICNPCV 2026 on real-time sign language recognition using MobileNetV2."
              className="text-body"
              style={{ fontSize: 'clamp(1rem, 1.5vw, 1.1rem)', lineHeight: 1.8, color: 'var(--foreground)', opacity: 0.75 }}
            />
          </div>

          {/* Info boxes */}
          <FadeUp delay={0.3}>
            <div className="grid grid-cols-2 gap-3 mt-8">
              {info.map(item => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 p-3"
                  style={{ border: '1px solid var(--border)' }}
                >
                  <span style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1 }}>{item.icon}</span>
                  <div>
                    <p className="text-label" style={{ fontSize: '0.55rem', marginBottom: '0.15rem' }}>{item.label}</p>
                    <p className="font-mono text-xs font-medium" style={{ color: 'var(--foreground)' }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>

        {/* Col 3 – Stats */}
        <div
          className="grid grid-cols-2"
          style={{ borderBottom: '1px solid var(--border)' }}
        >
          {stats.map((stat, i) => (
            <FadeUp key={stat.num} delay={0.1 * i}>
              <div
                className="flex flex-col justify-between p-6"
                style={{
                  borderRight: i % 2 === 0 ? '1px solid var(--border)' : 'none',
                  borderBottom: i < 2 ? '1px solid var(--border)' : 'none',
                  minHeight: 'clamp(120px, 18vw, 200px)',
                  borderLeft: '1px solid var(--border)',
                }}
              >
                <p
                  className="font-display font-extrabold"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                    lineHeight: 1,
                    letterSpacing: '-0.04em',
                    color: 'var(--foreground)',
                  }}
                >
                  {stat.num}
                </p>
                <p
                  className="font-mono text-xs tracking-widest uppercase"
                  style={{ color: 'var(--muted)', lineHeight: 1.5, whiteSpace: 'pre-line' }}
                >
                  {stat.label}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>

      {/* Hobbies / interests strip */}
      <FadeUp>
        <div
          className="section-pad-x flex items-center gap-6 flex-wrap"
          style={{
            paddingTop: '1.5rem',
            paddingBottom: '1.5rem',
            borderTop: '1px solid var(--border)',
          }}
        >
          <span className="text-label">INTERESTS</span>
          {['CYCLING', 'CRICKET', 'BADMINTON', 'OPEN-SOURCE'].map(h => (
            <span
              key={h}
              className="font-mono text-xs tracking-wider px-3 py-1"
              style={{
                border: '1px solid var(--border)',
                color: 'var(--muted)',
              }}
            >
              {h}
            </span>
          ))}
        </div>
      </FadeUp>
    </section>
  )
}
