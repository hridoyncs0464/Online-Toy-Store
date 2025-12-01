import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext();

 export const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // use setLoading

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (displayName, photoURL) => {
    setLoading(true);
    return updateProfile(auth.currentUser, { displayName, photoURL })
      .then(() => {
        setUser((prev) =>
          prev ? { ...prev, displayName, photoURL } : auth.currentUser
        );
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        throw err;
      });
  };


const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email)
      .then(() => {
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        throw err;
      });
  };


 const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
     
    
    .then((result) => {
        setUser(result.user);
        setLoading(false);
        return result;
      })
      .catch((err) => {
        setLoading(false);
        throw err;
      });


  };





  const Logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authData = {
    user,
    loading,
    createUser,
    signIn,
    Logout,
    updateUserProfile,
    resetPassword,
    googleSignIn,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
