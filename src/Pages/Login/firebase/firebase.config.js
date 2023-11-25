// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDThWnXNzVIIrhiEDvqdVwAQco0xjbdbUM",
  authDomain: "bistro-boss-b0e61.firebaseapp.com",
  projectId: "bistro-boss-b0e61",
  storageBucket: "bistro-boss-b0e61.appspot.com",
  messagingSenderId: "766694764910",
  appId: "1:766694764910:web:5da5c734c2969010c7d17f",
  measurementId: "G-KQNQW091WR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;