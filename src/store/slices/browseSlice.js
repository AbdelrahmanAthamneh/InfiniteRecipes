import { createSlice } from "@reduxjs/toolkit";

export const browseSlice = createSlice({
  name: "browseSlice",
  initialState: [],
  reducers: {
    addIngredient: (state, action) => {
      state.push(action.payload);
    },
    deleteIngredient: (state, action) => {
      return state.filter((ingredient) => ingredient.id !== action.payload.id);
    },
    resetIngredients: (state) => {
      state.length = 0;
    },
  },
});

export const { addIngredient, deleteIngredient, resetIngredients } =
  browseSlice.actions;

export default browseSlice.reducer;
