import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useRef, type ReactNode, type MouseEvent } from 'react'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  variant?: 'primary' | 'ghost'
}

export function MagneticButton({
  children,
  className = '',
  href,
  onClick,
  type = 'button',
  variant = 'primary',
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 20 })
  const springY = useSpring(y, { stiffness: 300, damping: 20 })

  const handleMouse = (e: MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * 0.15)
    y.set((e.clientY - centerY) * 0.15)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  const baseClass =
    variant === 'primary'
      ? 'accent-gradient text-white shadow-lg shadow-emerald-500/20'
      : 'glass-card text-white hover:border-white/20'

  const inner = (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className={`inline-flex cursor-pointer items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold uppercase tracking-wider transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(16,185,129,0.45)] ${baseClass} ${className}`}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  )

  if (href) {
    return (
      <a href={href} className="inline-block" onClick={onClick}>
        {inner}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className="inline-block border-0 bg-transparent p-0">
      {inner}
    </button>
  )
}
