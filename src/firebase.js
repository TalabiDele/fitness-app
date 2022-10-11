import { useState, useEffect, useContext } from "react";
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

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDZ0kT5Z5UfayfwrNWul9G9O_09sxhB_M",
  authDomain: "fitness-app-d56b5.firebaseapp.com",
  projectId: "fitness-app-d56b5",
  storageBucket: "fitness-app-d56b5.appspot.com",
  messagingSenderId: "363831697550",
  appId: "1:363831697550:web:d41edbc3f3149cc38069df",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth();
export const db = getFirestore(app);

export const startFirebase = () => {
  return getDatabase(app);
};

// Register User
export const signup = async (email, password, name, country, state) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then(async (result) => {
      const { loading, setLoading } = useContext(AuthContext);
      setLoading(true);

      const ref = doc(db, "users", result.user.uid);
      const docRef = await setDoc(ref, { name, country, state })
        .then((re) => {
          console.log(re);
        })
        .catch((e) => {
          console.log(e.message);
        });

      setLoading(false);
    })
    .catch((isError) => {
      const { error, setError, loading, setLoading } = useContext(AuthContext);
      setLoading(true);
      if (error.code === "auth/email-already-in-use") {
        setError("Email already in use");
      } else {
        setError(isError.message);
      }

      setLoading(false);
    });
};

// Login User
export const login = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Logout user
export const logout = () => {
  return signOut(auth);
};

// Check user logged in
export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unsub;
  }, []);

  return currentUser;
};

export const sendMessage = async (user, text, id) => {
  // const groceriesColRef = collection(db, "messages");
  // return addDoc(groceriesColRef, {
  //   created: serverTimestamp(),
  //   message: [{ name: userName }],
  // });
};
