function Comments({ comment }) {
  return (
    <div className="comment">
      <div className="flex">
        <span className="by">comment made by {comment.by}</span>
        <span className="time">{comment.date}</span>
      </div>
      <p>{comment.comment}</p>
    </div>
  );
}

export default Comments;
