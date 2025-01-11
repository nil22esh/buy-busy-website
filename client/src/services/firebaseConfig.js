// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMEGCbUWyBCQPGrGYOLwDs4xQrJ-7-Erg",
  authDomain: "swift-cart-ed154.firebaseapp.com",
  projectId: "swift-cart-ed154",
  storageBucket: "swift-cart-ed154.firebasestorage.app",
  messagingSenderId: "920751903009",
  appId: "1:920751903009:web:16b870a8387c42921aae60",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
