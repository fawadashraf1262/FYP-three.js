// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDV9DQO0do95f2Cl-gTeZhnzEoPLAryRRA",
  authDomain: "pattern-fusion.firebaseapp.com",
  projectId: "pattern-fusion",
  storageBucket: "pattern-fusion.appspot.com",
  messagingSenderId: "84553745073",
  appId: "1:84553745073:web:edaf1a546b219e173e5890",
  measurementId: "G-N8XJFYJZB7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
