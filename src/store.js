import { configureStore } from "@reduxjs/toolkit";
import postDetailsSliceReducer from "reducers/postDetailsSlice";
import postsSliceReducer from "reducers/postsSlice";

export const store = configureStore({
  reducer: {
    posts: postsSliceReducer,
    post: postDetailsSliceReducer,
  },
});

export default store;
