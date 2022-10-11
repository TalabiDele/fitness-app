import { useState, useEffect, createContext } from "react";
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
