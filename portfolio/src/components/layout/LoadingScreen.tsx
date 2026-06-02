import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { CoverLetter } from './CoverLetter'

interface LoadingScreenProps {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const duration = prefersReduced ? 400 : 2200
    const start = performance.now()

    const tick = (now: number) => {
      const elapsed = now - start
      const pct = Math.min(100, (elapsed / duration) * 100)
      setProgress(pct)
      if (pct < 100) {
        requestAnimationFrame(tick)
      } else {
        setTimeout(onComplete, prefersReduced ? 100 : 400)
      }
    }

    requestAnimationFrame(tick)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0C0C0C]"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.p
        className="hero-heading text-5xl font-bold tracking-tight md:text-7xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        AG
      </motion.p>
      <motion.p
        className="mt-2 text-sm uppercase tracking-[0.4em] text-[#8a8a8a]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Loading portfolio
      </motion.p>
      <div className="mt-8 h-0.5 w-48 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full accent-gradient"
          style={{ width: `${progress}%` }}
        />
      </div>
    </motion.div>
  )
}

export function LoadingGate({ children }: { children: React.ReactNode }) {
  const [stage, setStage] = useState<'loading' | 'cover' | 'ready'>('loading')

  return (
    <>
      <AnimatePresence mode="wait">
        {stage === 'loading' && <LoadingScreen key="loader" onComplete={() => setStage('cover')} />}
        {stage === 'cover' && <CoverLetter key="cover" onComplete={() => setStage('ready')} />}
      </AnimatePresence>
      {stage === 'ready' && children}
    </>
  )
}
