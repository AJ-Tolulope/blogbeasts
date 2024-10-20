"use client";

import { useDispatch } from "react-redux";
import Link from "next/link";
import { isLiked, toggleLike } from "../stateSlice/postsSlice";

import "./Reactions.css";

const Reactions = ({ currentPost }) => {
  const dispatch = useDispatch();

  let like = currentPost.attributes.like.isLiked;
  let likeNum = currentPost.attributes.like.numberOfLikes;
  let commentNum = currentPost.attributes.comments.length;

  function dispatcher() {
    dispatch(toggleLike(currentPost.id));
    dispatch(isLiked(currentPost.id));
  }

  function handleCountLogic(num) {
    if (num > 999999) {
      let result = Math.floor(num / 1000000);
      let diff = Math.floor((num - Math.floor(result) * 1000000) / 100000);

      return `${result}.${diff}m`;
    } else if (num > 999) {
      let result = Math.floor(num / 1000);
      let diff = Math.floor((num - Math.floor(result) * 1000) / 100);

      return `${result}.${diff}k`;
    } else {
      return num;
    }
  }

  return (
    <div className="reactions">
      <span className="like btn-c" onClick={dispatcher}>
        <i className={like ? "fas fa-heart active" : "far fa-heart"}></i>
        <p>like</p>
        <span>{currentPost && handleCountLogic(likeNum)}</span>
      </span>
      <Link href="#comment">
        <span className="comment btn-c">
          <i className="far fa-comment"></i>
          <p>comment</p>
          <span>{currentPost && handleCountLogic(commentNum)}</span>
        </span>
      </Link>
    </div>
  );
};

export default Reactions;
