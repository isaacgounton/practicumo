import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyA3OLVNuNkUiGW0Ghpn8U3uY3CpOrAON5I",
  authDomain: "practicumo.firebaseapp.com",
  projectId: "practicumo",
  storageBucket: "practicumo.firebasestorage.app",
  messagingSenderId: "56744604231",
  appId: "1:56744604231:web:09f6c8d22b5f95dfbc3762",
  measurementId: "G-WJ885MPDVV"
};

// Initialize Firebase services
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);