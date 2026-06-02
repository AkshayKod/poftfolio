import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { usePortfolio } from '../../hooks/usePortfolio'
import { SectionHeading } from '../ui/SectionHeading'
import { RevealOnScroll } from '../ui/RevealOnScroll'

export function EducationSection() {
  const { education } = usePortfolio()

  return (
    <section id="education" className="relative px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading number="05" title="Education" subtitle="Academic background" />

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((item, index) => (
            <RevealOnScroll key={item.id} delay={index * 0.08}>
              <motion.div
                className="glass-card group flex gap-5 rounded-2xl p-6 md:p-8"
                whileHover={{ y: -4, borderColor: 'rgba(168, 85, 247, 0.25)' }}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl accent-gradient">
                  <GraduationCap className="text-white" size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.degree}</h3>
                  <p className="mt-1 text-[#bbccd7]">{item.institution}</p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <span className="font-mono rounded-full border border-white/10 px-3 py-1 text-xs text-[#8a8a8a]">
                      {item.period}
                    </span>
                    {item.detail && (
                      <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
                        {item.detail}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
