// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_rKnfoSucf0bS7qjArCOsIXBDQAVPOqQ",
  authDomain: "ask-lena.firebaseapp.com",
  projectId: "ask-lena",
  storageBucket: "ask-lena.firebasestorage.app",
  messagingSenderId: "555768374299",
  appId: "1:555768374299:web:27ab6642d0bb21fecf84be",
  measurementId: "G-TGF9WQVYZ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
