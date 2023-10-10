import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "requester";

const initialState = {
  postsList: [],
  isLoading: false,
};

export const getPostsList = createAsyncThunk(
  "getPostsList/get",
  async (params) => {
    const response = await API.get(`ev/events/`, { params: params });
    return response.data;
  }
);

export const getPostsCategory = createAsyncThunk(
  "getPostsCategory/get",
  async (params) => {
    const response = await API.get(`ev/category/${params.id}`);
    console.log("category", response.data);
    return response.data;
  }
);

export const serchPostsByPostList = createAsyncThunk(
  "getPostsList/search",
  async (title) => {
    const response = await API.get(`ev/events/?search=${title}`);
    console.log("response: ", response.data);
    return response.data;
  }
);

export const addPost = createAsyncThunk("addPostsList/post", async (params) => {
  const response = await API.post("ev/events/", {
    title: params.title,
    category: params.category,
    description: params.description,
    price: params.price,
    date: params.date,
    time_start: params.time_start,
    time_end: params.time_end,
    priority: params.priority,
    geolocation_name: params.geolocation_name,
    category__titles: params.category__titles,
    organizer: params.organizer,

    multi: true,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
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
