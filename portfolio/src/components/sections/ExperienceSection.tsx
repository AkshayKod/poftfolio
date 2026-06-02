import { motion } from 'framer-motion'
import { usePortfolio } from '../../hooks/usePortfolio'
import { SectionHeading } from '../ui/SectionHeading'
import { RevealOnScroll } from '../ui/RevealOnScroll'

export function ExperienceSection() {
  const { experience } = usePortfolio()

  return (
    <section id="experience" className="relative px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          number="03"
          title="Experience"
          subtitle="Professional journey"
        />

        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-emerald-500/50 via-cyan-500/30 to-transparent md:left-8 md:block" />

          <div className="space-y-12">
            {experience.map((item, index) => (
              <RevealOnScroll key={item.id} delay={index * 0.1}>
                <div className="relative flex flex-col gap-6 md:flex-row md:gap-12">
                  <div className="flex items-start gap-6 md:w-48 md:shrink-0">
                    <span className="hidden font-mono text-4xl font-bold text-white/10 md:block">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <motion.div
                      className="relative z-10 flex h-4 w-4 shrink-0 rounded-full accent-gradient shadow-[0_0_20px_rgba(16,185,129,0.6)] md:ml-6"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 200 }}
                    />
                  </div>

                  <motion.article
                    className="glass-card flex-1 rounded-2xl p-6 md:p-8"
                    whileHover={{
                      borderColor: 'rgba(168, 85, 247, 0.3)',
                      boxShadow: '0 0 50px rgba(168, 85, 247, 0.1)',
                    }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white md:text-2xl">
                          {item.company}
                        </h3>
                        <p className="mt-1 text-[#bbccd7]">{item.role}</p>
                      </div>
                      <span className="font-mono rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-[#8a8a8a]">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-[#8a8a8a]">{item.location}</p>
                    <p className="bio-text mt-4 text-[#bbccd7]">{item.summary}</p>
                    <ul className="mt-6 space-y-2">
                      {item.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-3 text-sm text-[#bbccd7]"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full accent-gradient" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </motion.article>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
