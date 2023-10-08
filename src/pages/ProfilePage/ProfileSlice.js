import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../requester";

const initialState = {
  currentUser: {},
  isLoading: false,
};

export const getUserDetails = createAsyncThunk("userDetails", async () => {
  const response = await API.get("/profile/");
  const profile = response.data;
  return profile;
});

export const updateUserDetails = createAsyncThunk(
  "userData/updateUserDetails",
  async (updatedUserData) => {
    try {
      const response = await API.put(`/profile/`, updatedUserData);
      const data = response.data;
      return data;
    } catch (error) {
      throw new Error("Ошибка обновления пользователя: " + error.message);
    }
  }
);

const userProfileSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload;
      })
      .addCase(updateUserDetails.fulfilled, (state, action) => {
        state.currentUser = { ...state.currentUser, ...action.payload };
      });
  },
});

export const { setCurrentUser } = userProfileSlice.actions;

export default userProfileSlice.reducer;
