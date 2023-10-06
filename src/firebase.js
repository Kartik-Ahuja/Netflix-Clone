import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  apiKey: "AIzaSyDpOL1nHkMVcYcMAzq-BfkAsvRX6L-cl48",
  authDomain: "netflix-clone-b2c47.firebaseapp.com",
  projectId: "netflix-clone-b2c47",
  storageBucket: "netflix-clone-b2c47.appspot.com",
  messagingSenderId: "387571347538",
  appId: "1:387571347538:web:66554be92e8ec425cbaf8b",
  measurementId: "G-7BW6HBRZ48",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
