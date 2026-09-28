export type Language = 'pt' | 'en'
export type SkillLevel = 'primary' | 'secondary'
export type ResumeVariant = 'visual' | 'ats'

export interface PersonalData {
  fullName: string
  shortName: string
  title: string
  subtitle: string
  location: string
  email: string
  phone: string
  github: string
  linkedin: string
  website?: string
  initials: string
  avatar?: string
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

export interface CourseItem {
  title: string
  institution: string
  period: string
}

export interface LeadershipItem {
  organization: string
  role: string
  period: string
  highlights: string[]
}

export interface UiStrings {
  navigation: {
    about: string
    skills: string
    experience: string
    projects: string
    education: string
    resume: string
    resumeVisual: string
    resumeAts: string
    menuSections: string
    menuActions: string
    search: string
    theme: string
    menu: string
  }
  hero: {
    scroll: string
    email: string
    phone: string
    github: string
    linkedin: string
    website: string
  }
  sections: {
    about: string
    skills: string
    skillsSubtitle: string
    experience: string
    experienceSubtitle: string
    projects: string
    projectsSubtitle: string
    clients: string
    clientsSubtitle: string
    education: string
    educationSubtitle: string
    courses: string
    coursesSubtitle: string
    leadership: string
    leadershipSubtitle: string
  }
  search: {
    placeholder: string
    empty: string
    section: string
    skill: string
    project: string
    course: string
  }
  resume: {
    back: string
    print: string
    summary: string
    experience: string
    projects: string
    skills: string
    education: string
    courses: string
    leadership: string
    contact: string
    atsLabel: string
  }
}

export interface PortfolioData {
  personal: PersonalData
  summary: string
  skills: SkillCategory[]
  experience: ExperienceItem[]
  projects: ProjectItem[]
  clients: string[]
  education: EducationItem[]
  courses: CourseItem[]
  leadership: LeadershipItem[]
  ui: UiStrings
}
