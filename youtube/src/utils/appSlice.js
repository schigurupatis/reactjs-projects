import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    setMenuOpen: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { setMenuOpen } = appSlice.actions;
export default appSlice.reducer;
