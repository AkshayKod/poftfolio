import { motion } from 'framer-motion'
import { usePortfolio } from '../../hooks/usePortfolio'
import { SectionHeading } from '../ui/SectionHeading'
import { staggerContainer, scaleIn } from '../../utils/motion'

export function SkillsSection() {
  const { skills } = usePortfolio()

  return (
    <section id="skills" className="relative px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading number="02" title="Skills" subtitle="Technologies I work with" />

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {skills.categories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              variants={scaleIn}
              className="glass-card group relative overflow-hidden rounded-2xl p-6"
              whileHover={{ scale: 1.03 }}
              animate={{ y: [0, -4, 0] }}
              transition={{
                y: {
                  duration: 4 + catIndex * 0.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-emerald-500/10 blur-2xl transition-opacity group-hover:opacity-100 opacity-50" />
              <h3 className="text-lg font-semibold text-white">{category.name}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <motion.li
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-[#bbccd7] transition-all hover:border-emerald-500/40 hover:text-white hover:shadow-[0_0_20px_rgba(16,185,129,0.25)]"
                    whileHover={{ scale: 1.08 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
