import { storage, db } from '../firebase/config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
import type { ResumeTemplate, ParsedResume } from '@/types';

const PARSER_API_URL = 'http://localhost:8000/parse-resume';

export async function uploadAndParseResume(file: File, userId: string): Promise<ParsedResume> {
  try {
    // First, parse the resume using pyresparser
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(PARSER_API_URL, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to parse resume');
    }

    const parsedContent: ParsedResume = await response.json();

    // Then upload the original file to Firebase Storage
    const storageRef = ref(storage, `resumes/${userId}/${file.name}`);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);

    // Store parsed data and file URL in Firestore
    await setDoc(doc(db, 'resumes', userId), {
      originalFile: downloadURL,
      parsed: parsedContent,
      updatedAt: new Date()
    });

    return parsedContent;
  } catch (error) {
    console.error('Error parsing resume:', error);
    throw error;
  }
}
