import { configureStore } from "@reduxjs/toolkit";
import postDetailsSliceReducer from "reducers/postDetailsSlice";
import postsSliceReducer from "reducers/postsSlice";
import authReducer from "./components/Authentication/Authorization/AuthorizationSlice";
import registerReducer from "./components/Authentication/Registration/registrationSlice";
import userProfileReducer from "./pages/ProfilePage/ProfileSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    register: registerReducer,
    userData: userProfileReducer,
    posts: postsSliceReducer,
    post: postDetailsSliceReducer,
  },
});

export default store;
