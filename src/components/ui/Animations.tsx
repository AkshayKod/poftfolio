import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface FadeUpProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  delay?: number
}

export function FadeUp({ children, className = '', style = {}, delay = 0 }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-5% 0px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

interface TypewriterProps {
  text: string
  className?: string
  style?: React.CSSProperties
  delay?: number
}

export function Typewriter({ text, className = '', style = {}, delay = 0 }: TypewriterProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const inView = useInView(ref, { once: true, margin: '-5% 0px' })

  // split text into words and then characters to preserve word wrapping
  const words = text.split(' ')

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.015, delayChildren: delay }
    }
  }

  const child = {
    hidden: { opacity: 0, display: 'none' },
    visible: { opacity: 1, display: 'inline' }
  }

  return (
    <motion.p
      ref={ref}
      className={className}
      style={style}
      variants={container}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block whitespace-nowrap" style={{ marginRight: '0.25em' }}>
          {Array.from(word).map((char, index) => (
            <motion.span key={index} variants={child}>
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.p>
  )
}
