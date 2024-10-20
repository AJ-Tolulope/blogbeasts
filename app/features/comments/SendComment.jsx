"use client";

import { useState } from "react";

const SendComment = ({ comments, setComments }) => {
  const [newcomment, setNewcomment] = useState({});

  function handleChange(e) {
    const date = new Date();

    setNewcomment({
      ...newcomment,
      id: (e.target.name = "comment" ? e.target.name : e.target.name),
      date: date.getTime,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit() {
    const { by, comment } = newcomment;
    if (by && comment) {
      setComments([...comments, newcomment]);
      setNewcomment({
        by: "",
        comment: "",
      });
    }
  }
  return (
    <div className="add-comment">
      <h4>add your comment</h4>
      <input
        type="text"
        value={newcomment.by}
        name="by"
        placeholder="enter a username"
        onChange={handleChange}
      />
      <textarea
        value={newcomment.comment}
        name="comment"
        id="comment"
        cols="30"
        rows="10"
        placeholder="comment your thought"
        onChange={handleChange}></textarea>

      <span className="btn-c" onClick={handleSubmit}>
        send comment
      </span>
    </div>
  );
};

export default SendComment;
