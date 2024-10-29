import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCQYGE2802HwFyUYDtW_4lCE_E1Nx71Ybs",
  authDomain: "blog-beasts.firebaseapp.com",
  projectId: "blog-beasts",
  storageBucket: "blog-beasts.appspot.com",
  messagingSenderId: "121970347733",
  appId: "1:121970347733:web:99070b351da55d5d971c5c",
  measurementId: "G-M2X40PZP45",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth };
