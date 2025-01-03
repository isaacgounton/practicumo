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