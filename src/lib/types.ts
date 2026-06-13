export interface PersonalInfo {
  fullName: string
  email: string
  phone: string
  location: string
  website: string
  linkedin: string
  title: string
}

export interface Experience {
  id: string
  company: string
  position: string
  startDate: string
  endDate: string
  current: boolean
  description: string[]
  location: string
}

export interface Education {
  id: string
  school: string
  degree: string
  field: string
  startDate: string
  endDate: string
  gpa: string
  achievements: string[]
}

export interface Skill {
  id: string
  name: string
  level: number
}

export interface SkillCategory {
  id: string
  name: string
  skills: Skill[]
}

export interface Project {
  id: string
  name: string
  description: string
  technologies: string[]
  url: string
  startDate: string
  endDate: string
}

export interface Certification {
  id: string
  name: string
  issuer: string
  date: string
  url: string
}

export interface Language {
  id: string
  name: string
  proficiency: "Native" | "Fluent" | "Advanced" | "Intermediate" | "Basic"
}

export interface ResumeData {
  personalInfo: PersonalInfo
  summary: string
  experience: Experience[]
  education: Education[]
  skillCategories: SkillCategory[]
  projects: Project[]
  certifications: Certification[]
  languages: Language[]
}

export type ResumeTemplate = "classic" | "modern" | "professional" | "creative"

export type ThemeColor = "blue" | "green" | "red" | "purple" | "orange" | "teal" | "slate"

export interface ResumeConfig {
  template: ResumeTemplate
  theme: ThemeColor
  fontSize: "small" | "medium" | "large"
  sectionOrder: string[]
  showSummary: boolean
  showExperience: boolean
  showEducation: boolean
  showSkills: boolean
  showProjects: boolean
  showCertifications: boolean
  showLanguages: boolean
}
