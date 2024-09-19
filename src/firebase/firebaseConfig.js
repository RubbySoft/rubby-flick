// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // For Firestore
import { getDatabase } from "firebase/database"; // For Realtime Database
import { getStorage } from "firebase/storage"; // For Storage
import { getAnalytics } from "firebase/analytics"; // Optional

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtUVSzf4cfx1d4plA_FTyk1KOEd3RFucE",
  authDomain: "rubbyflick.firebaseapp.com",
  projectId: "rubbyflick",
  storageBucket: "rubbyflick.appspot.com",
  messagingSenderId: "1009177860186",
  appId: "1:1009177860186:web:ae98cafcecae4df1f0a063",
  measurementId: "G-X51DM7GQP3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // Optional
export const auth = getAuth(app);
export const firestore = getFirestore(app); // For Firestore
export const database = getDatabase(app); // For Realtime Database
export const storage = getStorage(app); // For Storage
