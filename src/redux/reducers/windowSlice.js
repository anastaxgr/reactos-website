import { createSlice } from "@reduxjs/toolkit";

const windowSlice = createSlice({
  name: "windows",
  initialState: {
    profile: false,
    images: false,
    portfolio: false,
    certificates: false,
    apps: false,
    music:false

  },
  reducers: {
    openWindow: (state, action) => {
      const windowName = action.payload;
      if (windowName && state.hasOwnProperty(windowName)) {
        state[windowName] = true;
      }
    },

    closeWindow: (state, action) => {
      const windowName = action.payload;
      if (windowName && state.hasOwnProperty(windowName)) {
        state[windowName] = false;
      }
    },
  },
});

export const { openWindow, closeWindow } = windowSlice.actions;
export default windowSlice.reducer;
