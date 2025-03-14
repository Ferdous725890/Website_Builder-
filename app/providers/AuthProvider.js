"use client";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setLoading } from "../features/loadingSlice";
import auth from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import { addUser } from "../features/userSlice";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // const currentUserInStore = useSelector((state) => state.userReducer.email);
  // const user = useSelector((state) => state.userReducer);
  // const loading = useSelector((state) => state.loadingReducer);
  const dispatch = useDispatch();
  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };
  const authInfo = {
    user,
    loading,
    googleSignIn,
    signInUser,
    createUser,
    updateUserProfile,
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
  console.log(user);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
