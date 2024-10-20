import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "../features/stateSlice/modeSlice";
import postReducer from "../features/stateSlice/postsSlice";
import userReducer from "../features/stateSlice/userSlice";

// Configure the store with reducers
export const store = configureStore({
  reducer: {
    modeSwitch: modeReducer,
    allPosts: postReducer,
    user: userReducer,
  },
});

// Export RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
