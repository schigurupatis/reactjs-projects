// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDqqFcmOghO8yBsw5Hn-KBVSeEh2NPdsA",
  authDomain: "netflixgpt-14769.firebaseapp.com",
  projectId: "netflixgpt-14769",
  storageBucket: "netflixgpt-14769.appspot.com",
  messagingSenderId: "238150017483",
  appId: "1:238150017483:web:000703ff3a925c1042964e",
  measurementId: "G-BEKB5HV79Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
