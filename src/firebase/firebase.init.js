// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgf7Ppv5Kigd10-VAohlXw4M9F3gYOE1M",
  authDomain: "job-portal-cc988.firebaseapp.com",
  projectId: "job-portal-cc988",
  storageBucket: "job-portal-cc988.firebasestorage.app",
  messagingSenderId: "857395882297",
  appId: "1:857395882297:web:42affc3389c14813be20e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;