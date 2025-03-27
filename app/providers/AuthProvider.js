"use client";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [failedAttempts, setFailedAttempts] = useState({});
  const [lockoutUntil, setLockoutUntil] = useState({});
  const googleProvider = new GoogleAuthProvider();

  const MAX_ATTEMPTS = 3; // Max failed attempts before lockout
  const LOCKOUT_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = async (email, password) => {
    setLoading(true);

    // Check if the account is locked
    const lockoutTime = lockoutUntil[email];
    if (lockoutTime && Date.now() < lockoutTime) {
      setLoading(false);
      throw new Error(
        `Account is locked. Try again after ${Math.ceil(
          (lockoutTime - Date.now()) / 60000
        )} minutes.`
      );
    }

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      // Reset failed attempts on successful login
      setFailedAttempts((prev) => ({ ...prev, [email]: 0 }));
      setLockoutUntil((prev) => ({ ...prev, [email]: null }));
      return result;
    } catch (err) {
      // Increment failed attempts
      const attempts = (failedAttempts[email] || 0) + 1;
      setFailedAttempts((prev) => ({ ...prev, [email]: attempts }));

      // Lock the account if max attempts reached
      if (attempts >= MAX_ATTEMPTS) {
        setLockoutUntil((prev) => ({
          ...prev,
          [email]: Date.now() + LOCKOUT_DURATION,
        }));
        throw new Error(
          `Too many failed attempts. Account locked for ${
            LOCKOUT_DURATION / 60000
          } minutes.`
        );
      }
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateUserProfile = (name) => {
    setLoading(true);
    return updateProfile(auth.currentUser, { displayName: name });
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    loading,
    googleSignIn,
    signInUser,
    createUser,
    updateUserProfile,
    signOutUser,
    failedAttempts,
    lockoutUntil,
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser && currentUser?.email) {
        setUser(currentUser);
      }
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;