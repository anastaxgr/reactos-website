import { createSlice } from "@reduxjs/toolkit";

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  return savedTheme ? JSON.parse(savedTheme) : { darkTheme: false, background: "bg1",language:"en" };
};

const themeSlice = createSlice({
  name: "theme",
  initialState: getInitialTheme(),
  reducers: {
    toggleDarkTheme: (state, action) => {
      state.darkTheme = action.payload !== undefined ? action.payload : !state.darkTheme;
      localStorage.setItem("theme", JSON.stringify(state)); 
    },

    setBackground: (state, action) => {
      state.background = action.payload;
      localStorage.setItem("theme", JSON.stringify(state));  
    },

    
    setLanguage: (state, action) => {
      state.language = action.payload;
      localStorage.setItem("theme", JSON.stringify(state));  
    },
  },
});

export const { toggleDarkTheme, setBackground,setLanguage } = themeSlice.actions;
export default themeSlice.reducer;
