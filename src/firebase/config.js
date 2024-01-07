// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
import {  getFirestore } from "firebase/firestore";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVxjkd7BoUfmZzx6bib50PjtItILN2xrI",
  authDomain: "shopify-b33b1.firebaseapp.com",
  projectId: "shopify-b33b1",
  storageBucket: "shopify-b33b1.appspot.com",
  messagingSenderId: "247579501016",
  appId: "1:247579501016:web:eff23bc73ae015399292ad"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const googleIn = new GoogleAuthProvider();
export const db = getFirestore();
export const storage = getStorage()
