import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./components/Authentication/Authorization/AuthorizationSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
