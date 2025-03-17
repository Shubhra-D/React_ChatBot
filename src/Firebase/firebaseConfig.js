// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI-SzR5XY-cmBbfed7Qli09icNEPleQII",
  authDomain: "mock-firebase-ca5fa.firebaseapp.com",
  databaseURL: "https://mock-firebase-ca5fa-default-rtdb.firebaseio.com",
  projectId: "mock-firebase-ca5fa",
  storageBucket: "mock-firebase-ca5fa.firebasestorage.app",
  messagingSenderId: "97661832662",
  appId: "1:97661832662:web:e5dc20f0ca89bc23fd2877",
  measurementId: "G-WN8M1L2DRV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app) ;
 export const provider = new GoogleAuthProvider(app)
