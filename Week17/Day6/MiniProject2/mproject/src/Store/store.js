import { configureStore } from "@reduxjs/toolkit";

import moviesReducer from "../Elements/moviesSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});