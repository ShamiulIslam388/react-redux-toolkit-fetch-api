import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const postApi = "https://jsonplaceholder.typicode.com/posts";

export const fetchPost = createAsyncThunk("posts/fetchPost", async () => {
  const response = await axios.get(postApi);
  const data = response.data;
  return data;
});

const postSlice = createSlice({
  name: "posts",
  initialState: {
    loading: false,
    posts: [],
    error: ""
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPost.pending, (state, action) => {
      state.loading = true;
      state.posts = [];
      state.error = "";
    });
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = [...action.payload];
      state.error = "";
    });
    builder.addCase(fetchPost.rejected, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.error.message;
    });
  }
});

export default postSlice.reducer;
