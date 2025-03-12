import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    darkTheme: false,
    background: "#ffffff",
  },
  reducers: {
    toggleDarkTheme: (state, action) => {
      state.darkTheme =
        action.payload !== undefined ? action.payload : !state.darkTheme;
    },

    setBackground: (state, action) => {
      state.background = action.payload;
    },
  },
});

export const { toggleDarkTheme, setBackground } = themeSlice.actions;
export default themeSlice.reducer;
