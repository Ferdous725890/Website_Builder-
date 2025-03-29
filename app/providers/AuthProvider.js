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
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const googleProvider = new GoogleAuthProvider();
  const [users, setUsers] = useState([]);
  const [failedAttempts, setFailedAttempts] = useState({});

  useEffect(() => {
    axios.get("http://localhost:5000/users").then(({ data }) => {
      setUsers(data);
    });
  }, []);
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
  // console.log(,failedAttempts);

  const signInUser = async (email, password) => {
    setLoading(true);
    const userFind = users.find((usr) => usr?.email === email);

    // Check if the account is locked
    const lockoutTime = userFind?.duration;
    if (userFind && Date.now() < lockoutTime) {
      setLoading(false);
      throw new Error(
        `Account is locked. Try again after ${Math.ceil(
          (lockoutTime - Date.now()) / 60000
        )} minutes.`
      );
    }
    else if(userFind && Date.now() > lockoutTime){
      axios.delete(`http://localhost:5000/users/${userFind._id}`)
      .then(res => {
        console.log(res.data); 
      })
    }

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      return result;
    } catch (err) {
      // Increment failed attempts
      const attempts = (failedAttempts[email] || 0) + 1;
      setFailedAttempts((prev) => ({ ...prev, [email]: attempts }));

      // Lock the account if max attempts reached
      if (attempts >= MAX_ATTEMPTS) {
        const userInfo = {
          email: email,
          duration: Date.now() + LOCKOUT_DURATION,
          failedAttempt: 0
        };
        axios.post("http://localhost:5000/users", userInfo);
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
    failedAttempts
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
