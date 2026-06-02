export interface SocialLinks {
  github: string
  linkedin: string
  email: string
  phone: string
  instagram?: string
  website?: string
}

export interface Profile {
  name: string
  shortName: string
  displayName: string
  tagline: string
  role: string
  specialization: string
  location: string
  bio: string
  social: SocialLinks
}

export interface StatItem {
  label: string
  value: string
}

export interface SkillCategory {
  name: string
  items: string[]
}

export interface ExperienceItem {
  id: string
  company: string
  role: string
  period: string
  location: string
  summary: string
  highlights: string[]
}

export interface ProjectItem {
  id: string
  title: string
  subtitle: string
  description: string
  stack: string[]
  role: string
  year: string
  link: string
  github: string
  highlight: boolean
}

export interface EducationItem {
  id: string
  degree: string
  institution: string
  period: string
  detail?: string
}

export interface AchievementItem {
  id: string
  title: string
  description: string
}

export interface NavLink {
  id: string
  label: string
  href: string
}

export interface PortfolioData {
  profile: Profile
  stats: StatItem[]
  skills: { categories: SkillCategory[] }
  experience: ExperienceItem[]
  projects: ProjectItem[]
  education: EducationItem[]
  achievements: AchievementItem[]
  nav: NavLink[]
}
