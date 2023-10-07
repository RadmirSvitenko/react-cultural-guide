import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_CULTURAL_GUIDE } from "requester";

const initialState = {
  post: {},
  isLoading: false,
};

export const getPostDetails = createAsyncThunk(
  "getPostDetails/get",
  async (id) => {
    const response = await API_CULTURAL_GUIDE.get(`ev/events/${id}`);
    return response.data;
  }
);

const postDetailsSlice = createSlice({
  name: "postsSlice",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getPostDetails.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getPostDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
    });

    builder.addCase(getPostDetails.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });
  },
});

export default postDetailsSlice.reducer;
