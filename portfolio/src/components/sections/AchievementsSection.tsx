import { motion } from 'framer-motion'
import { Award, Trophy, BookOpen, Code2, Mic } from 'lucide-react'
import { usePortfolio } from '../../hooks/usePortfolio'
import { SectionHeading } from '../ui/SectionHeading'
import { staggerContainer, scaleIn } from '../../utils/motion'

const icons = [Trophy, Award, BookOpen, Code2, Mic]

export function AchievementsSection() {
  const { achievements } = usePortfolio()

  return (
    <section id="achievements" className="relative px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          number="06"
          title="Achievements"
          subtitle="Activities & milestones"
        />

        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {achievements.map((item, index) => {
            const Icon = icons[index % icons.length]
            return (
              <motion.div
                key={item.id}
                variants={scaleIn}
                className="glass-card rounded-2xl p-6 transition-shadow hover:shadow-[0_0_40px_rgba(16,185,129,0.12)]"
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-emerald-400">
                  <Icon size={20} />
                </div>
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="bio-text mt-2 text-sm text-[#8a8a8a]">{item.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
