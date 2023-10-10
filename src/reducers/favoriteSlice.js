import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "requester";

const initialState = {
  favoriteList: [],
  isLoading: false,
};

export const getFavoriteList = createAsyncThunk(
  "getFavoriteList/get",
  async () => {
    const response = await API.get("favourites/");
    console.log("redux favorite", response.data);
    return response.data;
  }
);

export const postFavoriteList = createAsyncThunk(
  "postFavoriteList/post",
  async (params) => {
    console.log("id: ", params.id);
    const response = await API.post(`add_to_favourites/${params.id}/`);
    return response.data;
  }
);

const favoriteSlice = createSlice({
  name: "favoriteSlice",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getFavoriteList.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getFavoriteList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.favoriteList = action.payload;
    });

    builder.addCase(getFavoriteList.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });
  },
});

export default favoriteSlice.reducer;
