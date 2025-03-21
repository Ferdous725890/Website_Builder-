import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import loadingReducer from "../features/loadingSlice";
import headingReducer from "../features/headingSlice";
export default configureStore({
  reducer: {
    userReducer,
    loadingReducer,
    headingReducer,
  },
});
