import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentPost from "./commentpost";
import "./postList.css";
const PostList = () => {
  const [post, setPost] = useState({});
  const fetchPost = async () => {
    try {
      const response = await axios.get("http://localhost:4000/posts");
      setPost(response.data);
    } catch (error) {
      console.log("Cannot fetch data", error);
    }
  };
  useEffect(() => {
    fetchPost();
  }, []);
  console.log(post);
  return (
    <div className="container">
      {Object.entries(post).map(([key, value]) => {
        return (
          <div key={key} className="displayPost">
            <h1>{value.title} </h1>
            <CommentPost id={value.id} />
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
