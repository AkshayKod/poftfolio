import { motion } from 'framer-motion'
import { usePortfolio } from '../../hooks/usePortfolio'
import { MagneticButton } from '../ui/MagneticButton'
import { SocialLinks } from '../layout/SocialLinks'
import { HeroAvatar } from './HeroAvatar'

const letterVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.4 + i * 0.04, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export function HeroSection() {
  const { profile } = usePortfolio()
  const letters = profile.displayName.split('')

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
        <div className="text-center lg:text-left">
          <motion.p
            className="mb-4 text-sm uppercase tracking-[0.35em] text-[#8a8a8a]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Portfolio 2026
          </motion.p>

          <h1
            className="hero-heading font-bold leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 9rem)' }}
          >
            {letters.map((char, i) => (
              <motion.span
                key={`${char}-${i}`}
                className="inline-block"
                custom={i}
                initial="hidden"
                animate="visible"
                variants={letterVariants}
                style={{ whiteSpace: char === ' ' ? 'pre' : undefined }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="mt-6 max-w-xl text-lg text-[#bbccd7] md:text-xl lg:mx-0 mx-auto"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
          >
            <MagneticButton href="#projects">View Projects</MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              Contact Me
            </MagneticButton>
          </motion.div>

          <motion.div
            className="mt-10 flex justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            <SocialLinks social={profile.social} />
          </motion.div>
        </div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <HeroAvatar />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="h-10 w-6 rounded-full border border-white/20 p-1">
          <motion.div
            className="mx-auto h-2 w-1 rounded-full bg-white/50"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
