export interface PersonalInfo {
  name: string;
  title: string;
  primaryPositioning: string;
  secondaryPositioning: string[];
  bio: string[];
  tagline: string;
  location: string;
  email: string;
  phone?: string;
  github: string;
  githubUsername: string;
  linkedin: string;
  portfolioUrl?: string;
  resumeUrl: string;
  availability: {
    status: 'available' | 'busy' | 'open_to_work';
    text: string;
  };
  achievements?: string[];
  languages?: { language: string; proficiency: string }[];
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: SkillItem[];
}

export interface SkillItem {
  name: string;
  level: number; // 1-100
  iconName: string;
  highlight?: boolean;
  experience?: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Full Stack' | 'Cloud & DevOps' | 'Backend & Systems' | 'Distributed Systems';
  featured: boolean;
  image: string;
  githubUrl: string;
  liveUrl?: string;
  technologies: string[];
  overview: string;
  problem: string;
  architecture: string[];
  solution: string;
  features: string[];
  challenges: string[];
  metrics?: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Full-time' | 'Internship' | 'Contract' | 'Open Source';
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  coursework: string[];
  achievements: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
  badgeType: 'aws' | 'devops' | 'java' | 'cloud' | 'general';
}

export interface GitHubStats {
  totalRepos: number;
  totalStars: number;
  contributionsThisYear: number;
  topLanguages: { name: string; percentage: number; color: string }[];
  pinnedRepos: {
    name: string;
    description: string;
    language: string;
    stars: number;
    forks: number;
    url: string;
  }[];
}

export interface CodingActivity {
  weeklyHours: number;
  dailyAverage: string;
  topLanguages: { name: string; percent: number; time: string; color: string }[];
  categories: { name: string; percent: number }[];
  environments: { name: string; percent: number }[];
}
