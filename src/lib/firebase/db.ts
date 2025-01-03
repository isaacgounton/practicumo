import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  query,
  where,
  orderBy,
  type QueryConstraint
} from 'firebase/firestore';
import { db } from './config';
import type { User, Internship, Application } from './types';

// Users
export async function getUser(userId: string) {
  const docRef = doc(db, 'users', userId);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data() as User : null;
}

export async function createUser(userId: string, userData: Partial<User>) {
  await setDoc(doc(db, 'users', userId), userData);
}

export async function updateUser(userId: string, userData: Partial<User>) {
  await updateDoc(doc(db, 'users', userId), userData);
}

// Internships
export async function getInternships(filters?: QueryConstraint[]) {
  const internshipsRef = collection(db, 'internships');
  const q = filters ? query(internshipsRef, ...filters) : internshipsRef;
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Internship[];
}

export async function getInternship(internshipId: string) {
  const docRef = doc(db, 'internships', internshipId);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } as Internship : null;
}

// Applications
export async function getUserApplications(userId: string) {
  const applicationsRef = collection(db, 'applications');
  const q = query(
    applicationsRef,
    where('userId', '==', userId),
    orderBy('createdAt', 'desc')
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Application[];
}

export async function createApplication(applicationData: Omit<Application, 'id'>) {
  const docRef = doc(collection(db, 'applications'));
  await setDoc(docRef, applicationData);
  return docRef.id;
}

export async function updateApplication(applicationId: string, applicationData: Partial<Application>) {
  await updateDoc(doc(db, 'applications', applicationId), applicationData);
}