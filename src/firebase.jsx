import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBhtNW7YQuaUxmCFF4mNmYV50u9NEpYNjw',
  authDomain: 'chat-4816c.firebaseapp.com',
  projectId: 'chat-4816c',
  storageBucket: 'chat-4816c.appspot.com',
  messagingSenderId: '493280358260',
  appId: '1:493280358260:web:651f1565fb384528a54621',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
