// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; // Import the getDatabase function

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8iXP9g89obu6npwvMfiI47tVkzpqutVo",
  authDomain: "intersect-id.firebaseapp.com",
  databaseURL: "https://intersect-id-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "intersect-id",
  storageBucket: "intersect-id.appspot.com",
  messagingSenderId: "832236750074",
  appId: "1:832236750074:web:883c0b8e1943de3e79f543",
  measurementId: "G-8ME27HBR3N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app); // Initialize and assign the database

export { db, analytics }; // Export the database as 'db' and analytics
