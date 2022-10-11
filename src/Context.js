import { useState, useEffect, useContext, createContext } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { app, db } from "./firebase";

export const Context = createContext();

export const AuthProvider = ({ children }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // useAuth();
  // useEffect(() => {
  // }, []);

  const signup = async (email, password, name, country, state) => {
    setLoading(true);

    return createUserWithEmailAndPassword(auth, email, password)
      .then(async (result) => {
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
        if (isError.code === "auth/email-already-in-use") {
          setError("Email aready in use");

          setTimeout(() => {
            setError("");
          }, 4000);
        } else {
          setError(isError.message);

          setTimeout(() => {
            setError("");
          }, 4000);
        }
        setLoading(false);
      });
  };

  const login = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((e) => {
        console.log(e);
      })
      .catch((e) => {
        setError(e.message);
        console.log(error);

        setTimeout(() => {
          setError("");
        }, 4000);
      });
  };

  const logout = () => {
    return signOut(auth);
  };

  const startFirebase = () => {
    return getDatabase(app);
  };

  return (
    <Context.Provider
      value={{
        app,
        auth,
        db,
        signup,
        login,
        logout,
        useAuth,
        startFirebase,
        error,
        setError,
        loading,
        setLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};

const auth = getAuth();

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

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCDZ0kT5Z5UfayfwrNWul9G9O_09sxhB_M",
//   authDomain: "fitness-app-d56b5.firebaseapp.com",
//   projectId: "fitness-app-d56b5",
//   storageBucket: "fitness-app-d56b5.appspot.com",
//   messagingSenderId: "363831697550",
//   appId: "1:363831697550:web:d41edbc3f3149cc38069df",
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth();
// const db = getFirestore(app);

// export const startFirebase = () => {
//   return getDatabase(app);
// };

// Register User
// export const signup = async (email, password, name, country, state) => {
//   loading = true;

//   return createUserWithEmailAndPassword(auth, email, password)
//     .then(async (result) => {
//       const ref = doc(db, "users", result.user.uid);
//       const docRef = await setDoc(ref, { name, country, state })
//         .then((re) => {
//           console.log(re);
//         })
//         .catch((e) => {
//           console.log(e.message);
//         });
//       loading = false;
//     })
//     .catch((isError) => {
//       if (isError.code === "auth/email-already-in-use") {
//         emailError = true;

//         console.log(emailError);

//         setTimeout(() => {
//           emailError = false;
//         }, 4000);
//       } else {
//         error = isError.message;

//         setTimeout(() => {
//           error = "";
//         }, 4000);
//       }
//       loading = false;
//     });
// };

// Login User
// export const login = async (email, password) => {
//   return signInWithEmailAndPassword(auth, email, password)
//     .then((e) => {
//       console.log(e);
//     })
//     .catch((e) => {
//       error = e.message;
//       console.log(error);

//       setTimeout(() => {
//         error = "";
//       }, 4000);
//     });
// };

// Logout user
// export const logout = () => {
//   return signOut(auth);
// };

// Check user logged in
// export const useAuth = () => {
//   const [currentUser, setCurrentUser] = useState();

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => {
//       setCurrentUser(user);
//     });
//     return unsub;
//   }, []);

//   return currentUser;
// };

// export const sendMessage = async (user, text, id) => {
// const groceriesColRef = collection(db, "messages");
// return addDoc(groceriesColRef, {
//   created: serverTimestamp(),
//   message: [{ name: userName }],
// });
// };
