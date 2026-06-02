import { motion } from 'framer-motion'
import { usePortfolio } from '../../hooks/usePortfolio'
import { SectionHeading } from '../ui/SectionHeading'
import { RevealOnScroll } from '../ui/RevealOnScroll'
import { staggerContainer, scaleIn } from '../../utils/motion'

export function AboutSection() {
  const { profile, stats } = usePortfolio()

  return (
    <section id="about" className="relative px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading number="01" title="About Me" subtitle="Who I am & what I build" />

        <RevealOnScroll>
          <div className="glass-card gradient-border rounded-2xl p-8 md:p-12">
            <p className="bio-text max-w-3xl text-lg leading-relaxed text-[#bbccd7] md:text-xl">
              {profile.bio}
            </p>
            <p className="mt-4 text-sm text-[#8a8a8a]">
              {profile.location} · {profile.specialization}
            </p>
          </div>
        </RevealOnScroll>

        <motion.div
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={scaleIn}
              className="glass-card group rounded-xl p-6 transition-all duration-300 hover:border-emerald-500/30 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]"
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <p className="text-2xl font-bold accent-gradient-text">{stat.label}</p>
              <p className="mt-2 font-mono text-sm text-[#8a8a8a]">{stat.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
