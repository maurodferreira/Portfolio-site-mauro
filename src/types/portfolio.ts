export type SkillLevel = 'primary' | 'secondary'

export interface PersonalData {
  fullName: string
  shortName: string
  title: string
  location: string
  email: string
  phone: string
  github: string
  linkedin: string
  website?: string
  initials: string
}

export interface SkillItem {
  name: string
  level: SkillLevel
}

export interface SkillCategory {
  name: string
  description: string
  skills: SkillItem[]
}

export interface ExperienceItem {
  role: string
  company: string
  location: string
  period: string
  highlights: string[]
}

export interface ProjectItem {
  name: string
  description: string
  link?: string
  tags: string[]
}

export interface EducationItem {
  course: string
  institution: string
  location: string
  period: string
}

export interface PortfolioData {
  personal: PersonalData
  summary: string
  skills: SkillCategory[]
  experience: ExperienceItem[]
  projects: ProjectItem[]
  education: EducationItem[]
}
