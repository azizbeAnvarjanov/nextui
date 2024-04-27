// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6LtGZKa_iCQVJWEJxx6k8SohTRNC7hYQ",
  authDomain: "nextui-9e6d9.firebaseapp.com",
  projectId: "nextui-9e6d9",
  storageBucket: "nextui-9e6d9.appspot.com",
  messagingSenderId: "795033534971",
  appId: "1:795033534971:web:b1b49a8d707480474d4b5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);