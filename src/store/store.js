import { configureStore } from "@reduxjs/toolkit";
import browse from "./slices/browseSlice";
import transparent from "./slices/homeSlice";

export const store = configureStore({
  reducer: {
    transparent: transparent,
    browse: browse,
  },
});
