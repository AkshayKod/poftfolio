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
  address: string
  bio: string
  social: SocialLinks
  hobbies: string[]
  resumePdf: string
  coverLetterPdf: string
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
  image?: string
  pdf?: string
}

export interface EducationItem {
  id: string
  degree: string
  institution: string
  period: string
  detail?: string
}

export interface PublicationItem {
  id: string
  title: string
  conference: string
  association: string
  date: string
  description: string
  tags: string[]
  paperPdf?: string
  image?: string
  certificateImage?: string
}

export interface CertificationItem {
  id: string
  title: string
  issuer: string
  year: string
  topics?: string[]
  image?: string
  pdfUrl?: string
}

export interface AchievementItem {
  id: string
  title: string
  description: string
  image?: string
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
  publications: PublicationItem[]
  certifications: CertificationItem[]
  education: EducationItem[]
  achievements: AchievementItem[]
  nav: NavLink[]
}

