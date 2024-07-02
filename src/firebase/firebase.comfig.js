// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVWp2ZQFbAe1CYHGFrCWvAxxeZP9s2gTE",
  authDomain: "user-moha-milon-b5426.firebaseapp.com",
  projectId: "user-moha-milon-b5426",
  storageBucket: "user-moha-milon-b5426.appspot.com",
  messagingSenderId: "1034945992788",
  appId: "1:1034945992788:web:2281eae674974bdc9435c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;