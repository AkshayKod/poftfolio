import type { CSSProperties, ReactNode } from 'react'

/* ─────────────────────────────────────────────
   LAYER WRAPPER
   Absolutely positioned, non-interactive backdrop
─ ───────────────────────────────────────────── */
interface GraphicsLayerProps {
  children?: ReactNode
  className?: string
  style?: CSSProperties
}

export function GraphicsLayer({ children, className = '', style }: GraphicsLayerProps) {
  return (
    <div aria-hidden="true" className={`graphic-layer ${className}`} style={style}>
      {children}
    </div>
  )
}

/* ─────────────────────────────────────────────
   DOT GRID
   Fine matrix of dots, tiled via CSS
─ ───────────────────────────────────────────── */
interface DotGridProps {
  className?: string
  style?: CSSProperties
  opacity?: number
}

export function DotGrid({ className = '', style, opacity = 0.5 }: DotGridProps) {
  return (
    <div
      className={`bg-dot-grid ${className}`}
      style={{ ...style, opacity }}
    />
  )
}

/* ─────────────────────────────────────────────
   LINE GRID
   Architectural grid of fine lines
─ ───────────────────────────────────────────── */
interface LineGridProps {
  className?: string
  style?: CSSProperties
  opacity?: number
  fade?: boolean
}

export function LineGrid({ className = '', style, opacity = 0.45, fade = false }: LineGridProps) {
  return (
    <div
      className={`bg-line-grid ${fade ? 'graphic-fade' : ''} ${className}`}
      style={{ ...style, opacity }}
    />
  )
}

/* ─────────────────────────────────────────────
   TYPE WATERMARK
   Oversized display typography behind content
─ ───────────────────────────────────────────── */
interface TypeWatermarkProps {
  text: string
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  size?: string
  opacity?: number
  color?: string
  italic?: boolean
}

const WM_POSITION: Record<NonNullable<TypeWatermarkProps['position']>, CSSProperties> = {
  'top-left': { top: '-0.12em', left: '-0.04em' },
  'top-right': { top: '-0.12em', right: '-0.04em' },
  'bottom-left': { bottom: '-0.18em', left: '-0.04em' },
  'bottom-right': { bottom: '-0.18em', right: '-0.04em' },
}

export function TypeWatermark({
  text,
  position = 'top-right',
  size = 'clamp(7rem, 22vw, 22rem)',
  opacity = 0.06,
  color = 'var(--foreground)',
  italic = false,
}: TypeWatermarkProps) {
  return (
    <span
      className="font-display font-extrabold uppercase leading-none select-none"
      style={{
        ...WM_POSITION[position],
        fontFamily: 'var(--font-display)',
        fontSize: size,
        letterSpacing: '-0.04em',
        lineHeight: 1,
        color,
        opacity,
        fontStyle: italic ? 'italic' : 'normal',
      }}
    >
      {text}
    </span>
  )
}

/* ─────────────────────────────────────────────
   RING SET
   Concentric technical circles (vision / focus)
─ ───────────────────────────────────────────── */
interface RingSetProps {
  size?: string
  className?: string
  color?: string
  opacity?: number
  count?: number
  dashed?: boolean
  center?: boolean
}

export function RingSet({
  size = 'min(65vw, 500px)',
  className = '',
  color = 'var(--border-dark)',
  opacity = 1,
  count = 3,
  dashed = false,
  center = true,
}: RingSetProps) {
  const viewBox = 200
  const rings = Array.from({ length: count }, (_, i) => {
    const r = (viewBox / 2) * (1 - i / (count + 1))
    return r
  })
  const circleOffset = 1

  return (
    <svg
      className={className}
      viewBox={`${-(circleOffset)} ${-(circleOffset)} ${viewBox + circleOffset * 2} ${viewBox + circleOffset * 2}`}
      style={{
        width: size,
        height: size,
        opacity,
        overflow: 'visible',
        position: 'absolute',
      }}
    >
      {rings.map((r, i) => {
        const isCenterDot = i === count - 1
        const c = center && isCenterDot ? 'var(--accent)' : color
        return (
          <circle
            key={i}
            cx={viewBox / 2 + circleOffset}
            cy={viewBox / 2 + circleOffset}
            r={r}
            fill="none"
            stroke={c}
            strokeOpacity={0.4}
            strokeWidth={0.75}
            strokeDasharray={dashed ? '2.5 3.5' : undefined}
          />
        )
      })}
      {center && (
        <circle
          cx={viewBox / 2 + circleOffset}
          cy={viewBox / 2 + circleOffset}
          r={2.2}
          fill="var(--accent)"
          fillOpacity={0.55}
        />
      )}
    </svg>
  )
}

/* ─────────────────────────────────────────────
   CROSS MARKS
   Editorial "+" registration marks
─ ───────────────────────────────────────────── */
interface CrossMarksProps {
  className?: string
  color?: string
  opacity?: number
  marks?: { top?: string; left?: string; size?: string }[]
}

export function CrossMarks({
  className = '',
  color = 'var(--muted-light)',
  opacity = 0.9,
  marks = [
    { top: '12%', left: '6%' },
    { top: '18%', left: '10%' },
    { top: '9%', left: '14%' },
    { top: '14%', left: '19%' },
  ],
}: CrossMarksProps) {
  return (
    <div className={className} style={{ color, opacity }}>
      {marks.map((m, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="font-mono select-none absolute leading-none"
          style={{
            top: m.top,
            left: m.left,
            fontSize: m.size ?? '1.4rem',
            fontWeight: 400,
            lineHeight: 1,
          }}
        >
          +
        </span>
      ))}
    </div>
  )
}

/* ─────────────────────────────────────────────
   DIAMOND MARKS
   Rotated squares / asterisks in a line
─ ───────────────────────────────────────────── */
interface DiamondMarksProps {
  className?: string
  color?: string
  opacity?: number
  count?: number
  gap?: string
  rotate?: boolean
}

export function DiamondMarks({
  className = '',
  color = 'var(--border-dark)',
  opacity = 0.8,
  count = 6,
  gap = '1.25rem',
  rotate = true,
}: DiamondMarksProps) {
  const dots = Array.from({ length: count }, (_, i) => (
    <span
      key={i}
      style={{
        display: 'inline-block',
        width: 7,
        height: 7,
        border: '1px solid currentColor',
        transform: rotate ? 'rotate(45deg)' : 'none',
      }}
    />
  ))
  return (
    <div
      className={className}
      style={{ color, opacity, display: 'flex', gap, alignItems: 'center' }}
    >
      {dots}
    </div>
  )
}