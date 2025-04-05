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
import { useDispatch } from "react-redux";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import auth from "../firebase/firebase.config";
import useFailedAttempts from "../getByTanstack/useFailedAttempts";
import useUsers from "../getByTanstack/useUsers";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const googleProvider = new GoogleAuthProvider();
  const [users, refetchUser] = useUsers([]);
  const [failedAttempts, refetchAttempts] = useFailedAttempts([]);

  const maxAttempts = 3; // Max failed attempts before lockout
  const lockoutDuration = 5 * 60 * 1000; // 5 minutes in milliseconds

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
    const userFind = users.find((usr) => usr?.email === email);
    const attemptsFind = failedAttempts.find(
      (failedAttempt) => failedAttempt?.email === email
    );

    // Check if the account is locked
    const lockoutTime = userFind?.duration;
    if (userFind) {
      if (Date.now() < lockoutTime) {
        setLoading(false);
        throw new Error(
          `Account is locked. Try again after ${Math.ceil(
            (lockoutTime - Date.now()) / 60000
          )} minutes.`
        );
      } else {
        await axios.delete(`https://build-master-server.vercel.app/users/${userFind?._id}`);
      }
    }
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      await axios.delete(`https://build-master-server.vercel.app/failedAttempts/${email}`);
      refetchAttempts();
      return result;
    } catch (err) {
      // Increment failed attempts
      const attemptsInfo = {
        email: email,
        attempts: 1,
      };
      if (attemptsFind) {
        axios
          .patch(`https://build-master-server.vercel.app/failedAttempts/${email}`)
          .then((res) => {
            refetchAttempts();
          });
      } else {
        axios
          .post("https://build-master-server.vercel.app/failedAttempts", attemptsInfo)
          .then((res) => {
            refetchAttempts();
          });
      }
      const attempts = attemptsFind?.attempts || 1;

      // Lock the account if max attempts reached
      if (attempts >= maxAttempts) {
        await axios.delete(`https://build-master-server.vercel.app/failedAttempts/${email}`);
        refetchAttempts();
        const userInfo = {
          email: email,
          duration: Date.now() + lockoutDuration,
        };
        axios.post("https://build-master-server.vercel.app/users", userInfo).then((res) => {
          refetchUser();
        });

        throw new Error(
          `Too many failed attempts. Account locked for ${
            lockoutDuration / 60000
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
