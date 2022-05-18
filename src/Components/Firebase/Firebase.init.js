// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhMvAHYkpTomDRJJlrAFB0_lwHREnDoYY",
  authDomain: "to-do-list-cc425.firebaseapp.com",
  projectId: "to-do-list-cc425",
  storageBucket: "to-do-list-cc425.appspot.com",
  messagingSenderId: "281156325403",
  appId: "1:281156325403:web:36a402b749dfea33dda8be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;