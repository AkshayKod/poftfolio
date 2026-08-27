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
    <div className="relative mx-auto flex h-[340px] w-[270px] items-center justify-center sm:h-[420px] sm:w-[320px] md:h-[470px] md:w-[360px] lg:h-[530px] lg:w-[410px] -mt-4 sm:-mt-6 lg:-mt-12">
      <motion.div
        className="absolute inset-0 rounded-full accent-gradient opacity-40 blur-3xl"
        style={{ x: glowX, y: glowY }}
      />
      <motion.div
        className="relative z-10 flex h-full w-full items-center justify-center"
        style={{ x: headX, y: headY }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src="/profile_nobg.png"
          alt="Profile"
          className="max-h-full max-w-full object-contain object-top drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:scale-[1.02]"
        />
      </motion.div>
      {[...Array(6)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full bg-emerald-400/60 pointer-events-none"
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
