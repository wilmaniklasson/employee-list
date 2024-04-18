// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDH-UNcPITP_F2KMEuI2QwsIyKq15SEyDM",
  authDomain: "potent-app-408121.firebaseapp.com",
  projectId: "potent-app-408121",
  storageBucket: "potent-app-408121.appspot.com",
  messagingSenderId: "434485994881",
  appId: "1:434485994881:web:3030296966df35e9d07480"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{ db }