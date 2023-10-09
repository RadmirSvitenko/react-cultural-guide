import { configureStore } from "@reduxjs/toolkit";
import postDetailsSliceReducer from "reducers/postDetailsSlice";
import postsSliceReducer from "reducers/postsSlice";
import authReducer from "./components/Authentication/Authorization/AuthorizationSlice";
import favoriteSliceReducer from "reducers/favoriteSlice";

export const store = configureStore({
  reducer: {
    posts: postsSliceReducer,
    post: postDetailsSliceReducer,
    favorite: favoriteSliceReducer,
    auth: authReducer,
  },
});

export default store;
