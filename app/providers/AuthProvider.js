"use client";
import {
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

  const authInfo = {
    user,
    loading,
    googleSignIn,
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
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
