"use client";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setLoading } from "../features/loadingSlice";
import auth from "../firebase/firebase.config";
import { createContext, useEffect } from "react";
import { addUser } from "../features/userSlice";
import axios from "axios";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const currentUserInStore = useSelector((state) => state.userReducer.email);
  const user = useSelector((state) => state.userReducer);
  const loading = useSelector((state) => state.loadingReducer);
  const dispatch = useDispatch();
  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = () => {
    dispatch(setLoading(true));
    return signInWithPopup(auth, googleProvider);
  };

  const createUser = (email, password) => {
    dispatch(setLoading(true));
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const authInfo = {
    user,
    loading,
    googleSignIn,
    createUser,
  };

  useEffect( () => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // For Set Database
      const name = currentUser?.displayName;
      const email = currentUser?.email;
      try {
        const resDatabase = axios.post("/api/users", { name, email });
        console.log(resDatabase);
      } catch (error) {
        console.log(error);
      }
      // for Current user Verify
      if (currentUser?.email !== currentUserInStore) {
        dispatch(addUser(currentUser));
      }
      dispatch(setLoading(false));
    });
    return () => unSubscribe();
  }, [currentUserInStore?.email]);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
