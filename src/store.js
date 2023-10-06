import { configureStore } from "@reduxjs/toolkit";
import postsSliceReducer from "reducers/postsSlice";

export const store = configureStore({
  reducer: {
    posts: postsSliceReducer,
  },
});

export default store;
