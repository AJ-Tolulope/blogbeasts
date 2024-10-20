import { createSlice } from "@reduxjs/toolkit";

import allPosts from "../../hooks/useFetch/useFetch";
const { posts, postCategories } = allPosts;

const initialState = {
  posts: posts,
  postCategory: postCategories,
  // post: post
};

export const postSlice = createSlice({
  name: "allPosts",
  initialState,
  reducers: {
    // currentPost: (state, action) => {

    // },
    isLiked: (state, action) => {
      const id = action.payload;
      let position = 0;
      state.posts.forEach((post) => {
        if (post.id === id) {
          state.posts[position].attributes.like.isLiked =
            !state.posts[position].attributes.like.isLiked;
        }

        position++;
      });
    },
    toggleLike: (state, action) => {
      const id = action.payload;
      let position = 0;
      let numberOfLikes;
      state.posts.forEach((post) => {
        if (post.id === id) {
          const like = state.posts[position].attributes.like;
          if (like.isLiked) {
            numberOfLikes = like.numberOfLikes - 1;
          } else {
            numberOfLikes = like.numberOfLikes + 1;
          }
          state.posts[position].attributes.like = {
            ...like,
            numberOfLikes: numberOfLikes,
          };
          return;
        }
        position++;
      });
    },
  },
});

export const { isLiked, toggleLike } = postSlice.actions;

export default postSlice.reducer;
