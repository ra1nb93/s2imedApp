// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2koHLiW7LOy85d8Iq0vzknVrXxAi7LEI",
  authDomain: "s2i-medapp-e5c51.firebaseapp.com",
  projectId: "s2i-medapp-e5c51",
  storageBucket: "s2i-medapp-e5c51.appspot.com",
  messagingSenderId: "316267891383",
  appId: "1:316267891383:web:071e2f4fb1ab415258db32",
  measurementId: "G-4JHKSPXXCM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
