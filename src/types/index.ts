export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
  profileComplete: boolean;
  createdAt: Date;
}

export interface Internship {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  requirements: string[];
  type: 'remote' | 'onsite' | 'hybrid';
  isPaid: boolean;
  duration: string;
  deadline: Date;
  sector: string;
  createdAt: Date;
}

export interface Application {
  id: string;
  userId: string;
  internshipId: string;
  status: 'draft' | 'submitted' | 'reviewing' | 'accepted' | 'rejected';
  submittedAt: Date;
  lastUpdated: Date;
}

export interface JobListing {
  id: string;
  title: string;
  company: string;
  location: string;
  salary?: string;
  description: string;
  requirements: string[];
  type: 'remote' | 'onsite' | 'hybrid';
  source: {
    name: 'LinkedIn' | 'Indeed' | 'GlassDoor' | 'Direct';
    url: string;
    logo: string;
  };
  postedAt: Date;
}

export interface ResumeTemplate {
  font: string;
  fontSize: string;
  spacing: string;
  margins: string;
  colors: {
    primary: string;
    secondary: string;
  };
}

export interface ResumeSection {
  title: string;
  content: string;
}

export interface ParsedResume {
  template: ResumeTemplate;
  sections: ResumeSection[];
}