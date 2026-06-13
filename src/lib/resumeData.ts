import type { ResumeData, ResumeConfig, ThemeColor } from "./types"

export function getDefaultResumeData(): ResumeData {
  return {
    personalInfo: {
      fullName: "John Doe",
      email: "john.doe@email.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      website: "johndoe.com",
      linkedin: "linkedin.com/in/johndoe",
      title: "Software Engineer",
    },
    summary: "Experienced software engineer with 5+ years of expertise in full-stack development, cloud architecture, and team leadership. Passionate about building scalable applications and mentoring junior developers.",
    experience: [
      {
        id: "exp-1",
        company: "Tech Corp",
        position: "Senior Software Engineer",
        startDate: "2022-01",
        endDate: "2024-12",
        current: true,
        description: [
          "Led a team of 5 engineers to build a microservices architecture serving 1M+ users",
          "Reduced API response times by 40% through query optimization and caching strategies",
          "Implemented CI/CD pipelines reducing deployment time from 2 hours to 15 minutes",
        ],
        location: "San Francisco, CA",
      },
      {
        id: "exp-2",
        company: "Startup Inc",
        position: "Software Engineer",
        startDate: "2019-03",
        endDate: "2021-12",
        current: false,
        description: [
          "Developed and maintained RESTful APIs using Node.js and Express",
          "Built responsive React components with 95% test coverage",
          "Collaborated with product team to ship features ahead of schedule",
        ],
        location: "Remote",
      },
    ],
    education: [
      {
        id: "edu-1",
        school: "University of California",
        degree: "Bachelor of Science",
        field: "Computer Science",
        startDate: "2015-09",
        endDate: "2019-06",
        gpa: "3.8",
        achievements: ["Dean's List 2017, 2018", "CS Department Award for Academic Excellence"],
      },
    ],
    skillCategories: [
      {
        id: "cat-1",
        name: "Frontend",
        skills: [
          { id: "skill-1", name: "React", level: 5 },
          { id: "skill-2", name: "TypeScript", level: 5 },
          { id: "skill-3", name: "Next.js", level: 4 },
          { id: "skill-4", name: "Tailwind CSS", level: 4 },
        ],
      },
      {
        id: "cat-2",
        name: "Backend",
        skills: [
          { id: "skill-5", name: "Node.js", level: 5 },
          { id: "skill-6", name: "Python", level: 4 },
          { id: "skill-7", name: "PostgreSQL", level: 4 },
          { id: "skill-8", name: "Redis", level: 3 },
        ],
      },
      {
        id: "cat-3",
        name: "DevOps",
        skills: [
          { id: "skill-9", name: "Docker", level: 4 },
          { id: "skill-10", name: "AWS", level: 4 },
          { id: "skill-11", name: "Kubernetes", level: 3 },
        ],
      },
    ],
    projects: [
      {
        id: "proj-1",
        name: "E-Commerce Platform",
        description: "Built a full-stack e-commerce platform with payment processing, inventory management, and real-time analytics dashboard.",
        technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
        url: "github.com/johndoe/ecommerce",
        startDate: "2023-01",
        endDate: "2023-06",
      },
    ],
    certifications: [
      {
        id: "cert-1",
        name: "AWS Solutions Architect",
        issuer: "Amazon Web Services",
        date: "2023-03",
        url: "",
      },
    ],
    languages: [
      { id: "lang-1", name: "English", proficiency: "Native" },
      { id: "lang-2", name: "Spanish", proficiency: "Fluent" },
    ],
  }
}

export function getDefaultResumeConfig(): ResumeConfig {
  return {
    template: "classic",
    theme: "blue",
    fontSize: "medium",
    sectionOrder: ["summary", "experience", "education", "skills", "projects", "certifications", "languages"],
    showSummary: true,
    showExperience: true,
    showEducation: true,
    showSkills: true,
    showProjects: true,
    showCertifications: true,
    showLanguages: true,
  }
}

export const themeColors: Record<ThemeColor, { primary: string; light: string; dark: string; name: string }> = {
  blue: { primary: "#2563eb", light: "#dbeafe", dark: "#1d4ed8", name: "Blue" },
  green: { primary: "#16a34a", light: "#dcfce7", dark: "#15803d", name: "Green" },
  red: { primary: "#dc2626", light: "#fee2e2", dark: "#b91c1c", name: "Red" },
  purple: { primary: "#9333ea", light: "#f3e8ff", dark: "#7e22ce", name: "Purple" },
  orange: { primary: "#ea580c", light: "#ffedd5", dark: "#c2410c", name: "Orange" },
  teal: { primary: "#0d9488", light: "#ccfbf1", dark: "#0f766e", name: "Teal" },
  slate: { primary: "#475569", light: "#f1f5f9", dark: "#334155", name: "Slate" },
}

export const templates = [
  { id: "classic", name: "Classic", description: "Traditional resume layout with clear sections" },
  { id: "modern", name: "Modern", description: "Clean contemporary design with sidebar" },
  { id: "professional", name: "Professional", description: "Corporate style with elegant typography" },
  { id: "creative", name: "Creative", description: "Bold design for creative industries" },
] as const

export function formatDate(dateStr: string): string {
  if (!dateStr) return ""
  const [year, month] = dateStr.split("-")
  const date = new Date(Number(year), Number(month) - 1)
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short" })
}
