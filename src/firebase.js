// src/firebase.js
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBi3rIeTsrSBPVm_MP7xVruvYLDKw56ZQc",
    authDomain: "react-firebase-app-23576.firebaseapp.com",
    projectId: "react-firebase-app-23576",
    storageBucket: "react-firebase-app-23576.firebasestorage.app",
    messagingSenderId: "915108911812",
    appId: "1:915108911812:web:7767296bb52629f94f4791"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();