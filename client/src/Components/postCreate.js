import React, { useState } from "react";
import axios from "axios"
import "./postCreate.css";
const PostCreate = () => {
  const [title, setTitle] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/posts", {
      title,
    });
    setTitle("");
  };
  return (
    <div>
      <form className="post" onSubmit={handleSubmit}>
        <label htmlFor="posts">Title :</label>
        <textarea
          type="textbox"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          rows="5"
          name="posts"
        />
        <button type="Submit"> Submit </button>
      </form>
    </div>
  );
};

export default PostCreate;
