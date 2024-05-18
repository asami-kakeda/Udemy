// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIAhDaQrEMK7Fg7nOxj6ZEX4uZ7Li8NM8",
  authDomain: "householdtypescript-e537e.firebaseapp.com",
  projectId: "householdtypescript-e537e",
  storageBucket: "householdtypescript-e537e.appspot.com",
  messagingSenderId: "39760514568",
  appId: "1:39760514568:web:5e2f7c37fdec51e385cbbd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
