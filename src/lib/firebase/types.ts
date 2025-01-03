import { Timestamp } from 'firebase/firestore';

export interface User {
  id: string;
  email: string;
  fullName: string | null;
  role: 'admin' | 'user';
  profileComplete: boolean;
  educationLevel: string | null;
  skills: string[];
  experience: Experience[];
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface Experience {
  title: string;
  company: string;
  startDate: Timestamp;
  endDate: Timestamp | null;
  description: string;
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
  deadline: Timestamp;
  sector: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface Application {
  id: string;
  userId: string;
  internshipId: string;
  status: 'draft' | 'submitted' | 'reviewing' | 'accepted' | 'rejected';
  resumeUrl: string | null;
  coverLetterUrl: string | null;
  submittedAt: Timestamp | null;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}