import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { removeTokensFromCookies } from "cookies";
import { getUser, login } from "./AuthorizationAPI";

const initialState = {
  user: null,
  status: "notLoggedIn",
  isLoading: false,
};

export const loginAsync = createAsyncThunk("auth/login", async (data) => {
  const response = await login(data);
  return response.user;
});

export const getUserAsync = createAsyncThunk("auth/getUser", async () => {
  const response = await getUser();
  return response;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => {
      removeTokensFromCookies();

      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = "loading";
        state.isLoading = true;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = "isLoggedIn";
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(loginAsync.rejected, (state) => {
        state.status = "notLoggedIn";
        state.isLoading = false;
      })
      .addCase(getUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUserAsync.fulfilled, (state, action) => {
        state.status = "isLoggedIn";
        state.user = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;

export const authSelectors = {
  user: (state) => state.auth.user,
  isLoading: (state) => state.auth.isLoading,
};

export default authSlice.reducer;
