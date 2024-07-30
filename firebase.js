// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8Mss2Xt9BOrFE8muw7jr_NCzi9k5NRXI",
  authDomain: "s2i-medapp-ac1cc.firebaseapp.com",
  projectId: "s2i-medapp-ac1cc",
  storageBucket: "s2i-medapp-ac1cc.appspot.com",
  messagingSenderId: "1043715385241",
  appId: "1:1043715385241:web:a37ed3e81fd7dc90649508",
  measurementId: "G-WG79350RP9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);