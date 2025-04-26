// do not share your firebase config online

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9LwFzIFy8Gxdc4o1b5mlXZ_rOqXOoaHY",
  authDomain: "simple-firebase-auth-a730e.firebaseapp.com",
  projectId: "simple-firebase-auth-a730e",
  storageBucket: "simple-firebase-auth-a730e.firebasestorage.app",
  messagingSenderId: "310087399036",
  appId: "1:310087399036:web:41d1ce18597a8c4fc5fbf9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);