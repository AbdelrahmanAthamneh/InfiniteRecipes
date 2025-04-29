import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: false };

export const homeSlice = createSlice({
  initialState,
  name: "homeSlice",
  reducers: {
    setTransparent: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setTransparent } = homeSlice.actions;
export default homeSlice.reducer;
