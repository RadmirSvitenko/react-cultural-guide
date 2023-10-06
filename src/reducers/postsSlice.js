import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_CULTURAL_GUIDE } from "requester";

const initialState = {
  postsList: [],
  isLoading: false,
};

export const getPostsList = createAsyncThunk("getPostsList/get", async () => {
  const response = await API_CULTURAL_GUIDE.get("ev/events/");
  return response.data;
});

const postsSlice = createSlice({
  name: "postsSlice",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getPostsList.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getPostsList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.postsList = action.payload;
    });

    builder.addCase(getPostsList.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });
  },
});

export default postsSlice.reducer;
