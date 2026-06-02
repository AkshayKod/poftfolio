import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { GitHubIcon } from '../ui/BrandIcons'
import type { ProjectItem } from '../../types/portfolio'

interface ProjectCardProps {
  project: ProjectItem
  index: number
  total: number
}

export function ProjectCard({ project, index, total }: ProjectCardProps) {
  const stackLabel = project.stack.join(' · ')

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
          <span className="font-mono text-sm text-[#a855f7]">
            {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
          <h3 className="mt-4 text-3xl font-bold text-white md:text-4xl">
            {project.title}
          </h3>
          <p className="mt-1 text-lg text-[#8a8a8a]">{project.subtitle}</p>
          <p className="bio-text mt-6 max-w-lg text-[#bbccd7]">{project.description}</p>
          <p className="mt-4 font-mono text-xs text-[#8a8a8a]">{stackLabel}</p>
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
        </div>
      </div>

      <div className="relative hidden w-2/5 overflow-hidden bg-[#141414] md:block">
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
      </div>
    </motion.article>
  )
}
