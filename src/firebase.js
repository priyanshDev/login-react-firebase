// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJhv39XiFZpcKTe7AlXPnLXAZeiHezcIQ",
  authDomain: "login-test-7b6af.firebaseapp.com",
  projectId: "login-test-7b6af",
  storageBucket: "login-test-7b6af.appspot.com",
  messagingSenderId: "425729711588",
  appId: "1:425729711588:web:654aa0e83b5d2af8f77bf1",
  measurementId: "G-Z7V5E33JGK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app, auth};