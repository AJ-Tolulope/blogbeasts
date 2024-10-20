import { createSlice } from "@reduxjs/toolkit";

// Safely access localStorage for checking if the user is logged in
const getInitialUserLogged = () => {
  if (typeof window !== "undefined") {
    try {
      return localStorage.getItem("ukcjgbSDHaksjdcserdfgvikjlakknacv")
        ? true
        : false;
    } catch (error) {
      console.error("Error accessing localStorage:", error);
    }
  }
  return false; // Default to false if localStorage cannot be accessed
};

const initialState = {
  isUserLogged: getInitialUserLogged(),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state) => {
      state.isUserLogged = true;
      if (typeof window !== "undefined") {
        localStorage.setItem("ukcjgbSDHaksjdcserdfgvikjlakknacv", "true");
      }
    },
    logout: (state) => {
      state.isUserLogged = false;
      if (typeof window !== "undefined") {
        localStorage.removeItem("ukcjgbSDHaksjdcserdfgvikjlakknacv");
      }
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
