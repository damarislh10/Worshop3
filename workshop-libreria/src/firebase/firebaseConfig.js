// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9PojQz4w3aSX-ZGaaDwJGCbVoocEmfAo",
  authDomain: "crud-libreria-5d97d.firebaseapp.com",
  projectId: "crud-libreria-5d97d",
  storageBucket: "crud-libreria-5d97d.appspot.com",
  messagingSenderId: "59051304765",
  appId: "1:59051304765:web:17475f9122efb31b2c0754",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const db = getFirestore();

export { app, google, db };
