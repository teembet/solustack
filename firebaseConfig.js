// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDJpiQLH3wikUNqvRCvt5LcswdBTzP3hKA",
  authDomain: "solustack-website.firebaseapp.com",
  projectId: "solustack-website",
  storageBucket: "solustack-website.appspot.com",
  messagingSenderId: "173929656599",
  appId: "1:173929656599:web:fc3e27651d137cc597c752",
  measurementId: "G-BFC9KVSJ5K",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
//const analytics = getAnalytics(app);
