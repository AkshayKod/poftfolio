interface MixedHeadingProps {
  line1: string
  line2: string
  className?: string
}

export function MixedHeading({ line1, line2, className = '' }: MixedHeadingProps) {
  return (
    <h2 className={`text-display ${className}`} style={{ fontFamily: 'var(--font-display)' }}>
      <span
        style={{
          color: 'var(--foreground)',
          fontWeight: 800,
        }}
      >
        {line1}
      </span>
      <br />
      <span
        style={{
          fontStyle: 'italic',
          fontWeight: 800,
          background: 'linear-gradient(100deg, var(--foreground) 0%, var(--foreground) 45%, var(--accent) 75%, var(--accent) 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
        }}
      >
        {line2}
      </span>
    </h2>
  )
}