import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'

export function CursorGlow() {
  const mouseX = useMotionValue(-200)
  const mouseY = useMotionValue(-200)
  const springX = useSpring(mouseX, { stiffness: 80, damping: 25 })
  const springY = useSpring(mouseY, { stiffness: 80, damping: 25 })

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (isTouch) return

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [mouseX, mouseY])

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[5] hidden h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 mix-blend-screen md:block"
      style={{
        x: springX,
        y: springY,
        background:
          'radial-gradient(circle, rgba(16,185,129,0.35) 0%, rgba(236,72,153,0.15) 40%, transparent 70%)',
      }}
      aria-hidden
    />
  )
}
