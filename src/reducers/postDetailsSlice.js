import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "requester";

const initialState = {
  post: {},
  meeting: [],
  isLoading: false,
};

export const getPostDetails = createAsyncThunk(
  "getPostDetails/get",
  async (id) => {
    const response = await API.get(`ev/events/${id}`);
    return response.data;
  }
);

export const getMeetingDetails = createAsyncThunk(
  "getMeetingDetails/get",
  async () => {
    const response = await API.get(`me/meetings/`);
    console.log("get meeting: ", response.data);
    return response.data;
  }
);

export const postMeetingDetails = createAsyncThunk(
  "postMeetingDetails/post",
  async (params) => {
    const response = await API.post(`me/meetings/`, {
      title: params.title,
      category: params.category,
      description: params.description,
      price: params.price,
      date: params.date,
      time_start: params.time_start,
      time_end: params.time_end,
      priority: params.priority,
      geolocation_name: params.geolocation_name,

      multi: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("response: ", response.data);
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
      state.meeting = action.payload;
    });

    builder.addCase(getPostDetails.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });
  },
});

export default postDetailsSlice.reducer;
