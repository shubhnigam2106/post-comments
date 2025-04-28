import { useState } from "react";
import axios from "axios";

const CommentPost = ({ id }) => {
  const [comment, setComment] = useState("");
  const SubmitComment = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:4001/posts/${id}/comments`, {
        content: comment,
      });
      setComment("");
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };
  return (
    <div>
      <h5> Add Comment</h5>
      <form onSubmit={SubmitComment}>
        <label htmlFor="comment">Comment</label>
        <input
          type="text"
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit"> Submit</button>
      </form>
    </div>
  );
};
export default CommentPost;
