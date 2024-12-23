// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-cc558.firebaseapp.com",
  projectId: "mern-blog-cc558",
  storageBucket: "mern-blog-cc558.firebasestorage.app",
  messagingSenderId: "387743500129",
  appId: "1:387743500129:web:8d7a7825068e1bd2872720"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
