const express = require("express");
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
const commentsByPostId = {};
app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});
app.post("/posts/:id/comments", (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;
  console.log(content)
  const comment = commentsByPostId[req.params.id] || [];
  comment.push({ id: commentId, content });
  commentsByPostId[req.params.id] = comment;
  res.status(201).send(comment);
});
app.listen(4001, () => {
  console.log("listening at port 4001");
});
