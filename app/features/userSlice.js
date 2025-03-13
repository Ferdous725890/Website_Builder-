import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  isAuthenticated: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { uid, email, displayName, photoURL, isAuthenticate } =
        action.payload;
      state.uid = uid;
      state.email = email;
      state.displayName = displayName;
      state.photoURL = photoURL;
      state.isAuthenticated = isAuthenticate;
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
