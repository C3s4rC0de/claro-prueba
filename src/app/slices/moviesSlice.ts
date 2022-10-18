import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MovieType } from "../../types/MovieType";
import { fetchMovies } from "../../utils/fetchMovies";

export interface MoviesState {
  movies: MovieType[];
  status: "idle" | "loading" | "failed";
}

const initialState: MoviesState = {
  movies: [],
  status: "idle",
};

export const getMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const { data } = await fetchMovies();
  return data.response.groups;
});

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
  },

  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.status = "idle";
        state.movies = action.payload;
      })
      .addCase(getMovies.rejected, (state) => {
        state.status = "failed";
      });
  },
});

// export const { } = moviesSlice.actions;

export default moviesSlice.reducer;
