import { motion } from 'framer-motion'
import { fadeUp } from '../../utils/motion'

interface SectionHeadingProps {
  number: string
  title: string
  subtitle?: string
}

export function SectionHeading({ number, title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      className="mb-12 md:mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={fadeUp}
    >
      <span className="font-mono text-sm tracking-[0.3em] text-[#a855f7]">
        {number}
      </span>
      <h2 className="mt-2 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-xl text-lg text-[#8a8a8a]">{subtitle}</p>
      )}
    </motion.div>
  )
}
