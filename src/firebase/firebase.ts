import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
   
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  
};
 
console.log("Firebase config loaded");
console.log(import.meta.env.VITE_FIREBASE_API_KEY);
// const firebaseConfig = {
//     apiKey: "AIzaSyASc2BBCCc7DrTTqZ4AKEk8YRW06aqXA2I",
//     authDomain: "data-viz-ai.firebaseapp.com",
//     projectId: "data-viz-ai",
//     storageBucket: "data-viz-ai.firebasestorage.app",
//     messagingSenderId: "1085584235920",
//     appId: "1:1085584235920:web:8ed2c101c3d05666b7a715",
//     measurementId: "G-SXF2PWTKXX"
//   };
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 