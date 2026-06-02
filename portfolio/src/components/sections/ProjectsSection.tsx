import { useMemo } from 'react'
import { usePortfolio } from '../../hooks/usePortfolio'
import { SectionHeading } from '../ui/SectionHeading'
import { ProjectCard } from './ProjectCard'

export function ProjectsSection() {
  const { projects } = usePortfolio()

  const sorted = useMemo(
    () => [...projects].sort((a, b) => (b.highlight ? 1 : 0) - (a.highlight ? 1 : 0)),
    [projects],
  )

  return (
    <section id="projects" className="relative px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          number="04"
          title="Projects"
          subtitle="Selected work & builds"
        />

        <div className="relative space-y-8 pb-[50vh]">
          {sorted.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              total={sorted.length}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
