// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-01-6ff28.firebaseapp.com",
  projectId: "mern-blog-01-6ff28",
  storageBucket: "mern-blog-01-6ff28.appspot.com",
  messagingSenderId: "678205468479",
  appId: "1:678205468479:web:1ac6c57e4480cff7646d8a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);