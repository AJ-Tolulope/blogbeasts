import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    userId: "",
    userName: "",
    comment: "",
    date: "",
  },
];

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    addComment: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(userName, userComment) {
        return {
          payload: {
            userId: nanoid(), 
            userName,
            comment: userComment, 
            date: new Date().toISOString(), 
          },
        };
      },
    },
  },
});

export const { addComment } = commentSlice.actions;

export const { allComments } = (state) => state.comment.count;

export default commentSlice.reducer;
