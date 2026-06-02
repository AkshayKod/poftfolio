import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect } from 'react'

export function HeroAvatar() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 })

  const headX = useTransform(springX, [-1, 1], [-8, 8])
  const headY = useTransform(springY, [-1, 1], [-6, 6])
  const glowX = useTransform(springX, [-1, 1], [-20, 20])
  const glowY = useTransform(springY, [-1, 1], [-15, 15])

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      mouseX.set((e.clientX - cx) / cx)
      mouseY.set((e.clientY - cy) / cy)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [mouseX, mouseY])

  return (
    <div className="relative mx-auto flex h-[280px] w-[280px] items-center justify-center sm:h-[320px] sm:w-[320px] md:h-[360px] md:w-[360px]">
      <motion.div
        className="absolute inset-0 rounded-full accent-gradient opacity-40 blur-3xl"
        style={{ x: glowX, y: glowY }}
      />
      <motion.div
        className="relative z-10"
        style={{ x: headX, y: headY }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <svg
          viewBox="0 0 200 240"
          className="h-full w-full drop-shadow-2xl"
          aria-hidden
        >
          <defs>
            <linearGradient id="skin" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3d2f4a" />
              <stop offset="100%" stopColor="#1a1520" />
            </linearGradient>
            <linearGradient id="hair" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1a1a1a" />
              <stop offset="100%" stopColor="#0a0a0a" />
            </linearGradient>
            <linearGradient id="shirt" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
          </defs>
          <ellipse cx="100" cy="200" rx="70" ry="35" fill="url(#shirt)" opacity="0.9" />
          <path
            d="M 55 200 Q 100 175 145 200 L 145 240 L 55 240 Z"
            fill="url(#shirt)"
          />
          <ellipse cx="100" cy="115" rx="58" ry="65" fill="url(#skin)" />
          <path
            d="M 48 95 Q 45 40 100 35 Q 155 40 152 95 Q 140 55 100 50 Q 60 55 48 95"
            fill="url(#hair)"
          />
          <ellipse cx="78" cy="108" rx="8" ry="10" fill="#0C0C0C" />
          <ellipse cx="122" cy="108" rx="8" ry="10" fill="#0C0C0C" />
          <circle cx="80" cy="105" r="3" fill="#bbccd7" />
          <circle cx="124" cy="105" r="3" fill="#bbccd7" />
          <path
            d="M 85 135 Q 100 145 115 135"
            stroke="#ec4899"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <ellipse cx="68" cy="120" rx="6" ry="4" fill="rgba(236,72,153,0.2)" />
          <ellipse cx="132" cy="120" rx="6" ry="4" fill="rgba(236,72,153,0.2)" />
        </svg>
      </motion.div>
      {[...Array(6)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full bg-emerald-400/60"
          style={{
            left: `${20 + i * 12}%`,
            top: `${10 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -12, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2 + i * 0.3,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  )
}
