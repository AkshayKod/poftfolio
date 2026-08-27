import { motion } from 'framer-motion'
import { MapPin, Sparkles, Activity, GraduationCap, Award, Briefcase, Code2, CheckCircle2 } from 'lucide-react'
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
          <div className="glass-card gradient-border space-y-8 rounded-2xl p-8 md:p-12">
            {/* Top Grid Layout filling right side */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              {/* Left Column: Bio & Overview */}
              <div className="space-y-4 lg:col-span-7">
                <p className="bio-text text-lg leading-relaxed text-[#bbccd7] md:text-xl">
                  {profile.bio}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-[#bbccd7]">
                  <div className="flex items-center gap-2.5 rounded-xl border border-white/5 bg-white/[0.02] p-3 transition-colors hover:border-emerald-500/30">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>Full-Stack & REST API Specialist</span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-xl border border-white/5 bg-white/[0.02] p-3 transition-colors hover:border-cyan-500/30">
                    <Award size={16} className="text-cyan-400 shrink-0" />
                    <span>Published IEEE Conference Author</span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-xl border border-white/5 bg-white/[0.02] p-3 transition-colors hover:border-emerald-500/30">
                    <Code2 size={16} className="text-emerald-400 shrink-0" />
                    <span>React.js, Node.js & SQL Developer</span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-xl border border-white/5 bg-white/[0.02] p-3 transition-colors hover:border-purple-500/30">
                    <Briefcase size={16} className="text-purple-400 shrink-0" />
                    <span>2 Completed Tech Internships</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Highlights Card filling empty space */}
              <div className="lg:col-span-5">
                <div className="relative rounded-xl border border-emerald-500/20 bg-emerald-500/[0.03] p-6 backdrop-blur-md shadow-[0_0_30px_rgba(16,185,129,0.05)]">
                  <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-3">
                    <Sparkles size={18} className="text-emerald-400" />
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Highlights</h4>
                  </div>
                  <div className="space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                      <div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-400 shrink-0 mt-0.5">
                        <GraduationCap size={16} />
                      </div>
                      <div>
                        <p className="text-xs text-[#8a8a8a] uppercase tracking-wider font-mono">Degrees</p>
                        <p className="font-medium text-white">MCA (2026) & BCA (2024)</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="rounded-lg bg-cyan-500/10 p-2 text-cyan-400 shrink-0 mt-0.5">
                        <Award size={16} />
                      </div>
                      <div>
                        <p className="text-xs text-[#8a8a8a] uppercase tracking-wider font-mono">Key Publication</p>
                        <p className="font-medium text-white">IEEE ICNPCV 2026 Author</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="rounded-lg bg-purple-500/10 p-2 text-purple-400 shrink-0 mt-0.5">
                        <MapPin size={16} />
                      </div>
                      <div>
                        <p className="text-xs text-[#8a8a8a] uppercase tracking-wider font-mono">Location & Status</p>
                        <p className="font-medium text-white">Mangalore, India • Ready to Work</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* GPA Performance Bar */}
            <div className="flex flex-wrap items-center gap-3 border-t border-white/10 pt-6">
              <span className="text-xs uppercase tracking-wider text-[#8a8a8a] font-mono flex items-center gap-1.5 mr-2">
                <GraduationCap size={16} className="text-emerald-400" /> Academic Performance / GPA:
              </span>
              <span className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-300 flex items-center gap-1.5 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                <span className="text-white/60">MCA:</span> 7.15 CGPA
              </span>
              <span className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1.5 text-xs font-semibold text-cyan-300 flex items-center gap-1.5">
                <span className="text-white/60">BCA:</span> 6.23 CGPA
              </span>
              <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-[#bbccd7]">
                <span className="text-white/50">PUC:</span> 78.65%
              </span>
              <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-[#bbccd7]">
                <span className="text-white/50">SSLC:</span> 76.96%
              </span>
            </div>
            
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
              <div className="flex items-center gap-2 text-sm text-[#8a8a8a]">
                <MapPin size={16} className="text-emerald-400" />
                <span>{profile.location}</span>
                <span className="hidden sm:inline text-white/30">•</span>
                <span className="hidden sm:inline font-mono text-xs">{profile.specialization}</span>
              </div>

              {profile.hobbies && profile.hobbies.length > 0 && (
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase tracking-wider text-[#8a8a8a] flex items-center gap-1">
                    <Activity size={14} className="text-cyan-400" /> Interests:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {profile.hobbies.map((hobby) => (
                      <span
                        key={hobby}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#bbccd7] transition-colors hover:border-emerald-500/30 hover:text-white"
                      >
                        {hobby}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
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
              <div className="flex items-center justify-between">
                <p className="text-2xl font-bold accent-gradient-text">{stat.value}</p>
                <Sparkles size={16} className="text-emerald-400/40 group-hover:text-emerald-400 transition-colors" />
              </div>
              <p className="mt-2 font-mono text-sm text-[#8a8a8a]">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
