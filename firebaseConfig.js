// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDI1zNWoTxwKd4KJZEdZlPYo7iFrcytn9I",
  authDomain: "solustack.firebaseapp.com",
  projectId: "solustack",
  storageBucket: "solustack.appspot.com",
  messagingSenderId: "373866043997",
  appId: "1:373866043997:web:54fb58a415898f5661cbb4",
  measurementId: "G-41R4PYS0BK",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
//const analytics = getAnalytics(app);
