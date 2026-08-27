import { motion } from 'framer-motion'
import { ExternalLink, FileText, Download } from 'lucide-react'
import { GitHubIcon } from '../ui/BrandIcons'
import type { ProjectItem } from '../../types/portfolio'

interface ProjectCardProps {
  project: ProjectItem
  index: number
  total: number
}

export function ProjectCard({ project, index, total }: ProjectCardProps) {
  return (
    <motion.article
      className="gradient-border glass-card sticky top-24 flex min-h-[420px] flex-col overflow-hidden rounded-2xl md:min-h-[480px] md:flex-row"
      style={{ zIndex: total - index }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.01 }}
    >
      <div className="relative flex flex-1 flex-col justify-between p-8 md:p-10">
        <div>
          <div className="flex items-center justify-between gap-2">
            <span className="font-mono text-xs font-semibold text-emerald-400">
              {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
            {project.role && (
              <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 font-mono text-xs text-[#bbccd7]">
                {project.role}
              </span>
            )}
          </div>
          <h3 className="mt-4 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
            {project.title}
          </h3>
          <p className="mt-1 text-base text-emerald-300/80 md:text-lg">{project.subtitle}</p>
          <p className="bio-text mt-5 max-w-xl text-base text-[#bbccd7] leading-relaxed">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span key={tech} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-xs text-[#8a8a8a]">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.link && (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="accent-gradient inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(16,185,129,0.4)' }}
            >
              Live Preview <ExternalLink size={16} />
            </motion.a>
          )}
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white"
              whileHover={{ scale: 1.05 }}
            >
              GitHub <GitHubIcon size={16} />
            </motion.a>
          )}
          {project.pdf && (
            <>
              <motion.a
                href={project.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white border border-cyan-500/30 bg-cyan-950/20 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <FileText size={16} className="text-cyan-400" />
                View PDF <ExternalLink size={13} className="text-[#8a8a8a]" />
              </motion.a>
              <motion.a
                href={project.pdf}
                download
                className="glass-card inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-[#bbccd7] hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Download size={15} />
                Download
              </motion.a>
            </>
          )}
        </div>
      </div>

      <div className={`relative overflow-hidden bg-[#141414] ${project.image ? 'h-60 w-full md:h-auto md:w-2/5' : 'hidden md:block md:w-2/5'}`}>
        {project.image ? (
          <div className="relative h-full w-full overflow-hidden group/img">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover object-center transition-transform duration-500 group-hover/img:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-[#0d0d0d]/80 p-3 backdrop-blur-md border border-white/10">
              <p className="font-mono text-xs text-emerald-400 font-semibold">{project.title}</p>
              <p className="text-xs text-[#8a8a8a]">{project.role} • {project.year}</p>
            </div>
          </div>
        ) : (
          <>
            <div className="absolute inset-0 accent-gradient opacity-20" />
            <div className="flex h-full items-center justify-center p-8">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <p className="hero-heading text-6xl font-bold opacity-40">
                  {project.title.charAt(0)}
                </p>
                <p className="mt-2 text-sm text-[#8a8a8a]">{project.year}</p>
              </motion.div>
            </div>
          </>
        )}
      </div>
    </motion.article>
  )
}
