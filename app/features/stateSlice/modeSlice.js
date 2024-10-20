import { createSlice } from "@reduxjs/toolkit";

// Safely access localStorage for themeMode
const getInitialThemeMode = () => {
  if (typeof window !== "undefined") {
    try {
      const theme = localStorage.getItem("themeMode");
      return theme === "true" ? true : false;
    } catch (error) {
      console.error("Error accessing localStorage:", error);
    }
  }
  return false; // Default to false (light mode) if there's an error or no value in localStorage
};

const initialState = {
  themeMode: getInitialThemeMode(),
};

export const modeSlice = createSlice({
  name: "modeSwitch",
  initialState,
  reducers: {
    changeMode: (state) => {
      state.themeMode = !state.themeMode;
      if (typeof window !== "undefined") {
        localStorage.setItem("themeMode", state.themeMode);
      }
    },
  },
});

export const { changeMode } = modeSlice.actions;

export default modeSlice.reducer;
