import { motion } from 'framer-motion'

export function LoadingScreen() {
  return (
    <motion.div
      key="loading"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      style={{ background: 'var(--foreground)' }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
    >
      {/* Logo mark */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="text-center mb-12"
      >
        <p className="font-mono text-xs tracking-[0.3em] uppercase mb-3" style={{ color: 'rgba(245,240,235,0.4)' }}>
          01 / PORTFOLIO
        </p>
        <h1
          className="font-display font-extrabold uppercase"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 8vw, 6rem)',
            lineHeight: 0.9,
            letterSpacing: '-0.03em',
            color: 'var(--background)',
          }}
        >
          AKSHAY G.
        </h1>
      </motion.div>

      {/* Progress bar */}
      <div className="w-48 h-px" style={{ background: 'rgba(245,240,235,0.15)' }}>
        <motion.div
          className="h-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: 'left', background: 'var(--background)' }}
        />
      </div>
    </motion.div>
  )
}
