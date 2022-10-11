import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "firebase/firestore";
import {
  getFirestore,
  doc,
  setDoc,
  getDocs,
  addDoc,
  serverTimestamp,
  collection,
} from "firebase/firestore";
import { getDatabase } from "firebase/database";
import AuthContext from "./AuthContext";

const firebaseConfig = {
  apiKey: "AIzaSyCDZ0kT5Z5UfayfwrNWul9G9O_09sxhB_M",
  authDomain: "fitness-app-d56b5.firebaseapp.com",
  projectId: "fitness-app-d56b5",
  storageBucket: "fitness-app-d56b5.appspot.com",
  messagingSenderId: "363831697550",
  appId: "1:363831697550:web:d41edbc3f3149cc38069df",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
