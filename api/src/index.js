// Core
const express = require("express");
const mongoose = require("mongoose");

// Config
const { port } = require("./configs");

// DB
const { connectToDb, handleError } = require("./helpers/db");

const app = express();

const postSchema = new mongoose.Schema({
  name: String,
});

const PostModel = mongoose.model("Post", postSchema);

app.get("/api", (_, res) => {
  res.send("API server handle request properly");
});

const startAPIServer = async () => {
  app.listen(port, () => {
    console.log(`The API service was started on port ${port}`);
  });

  const testPost = new PostModel({ name: "Test Post" });
  testPost.save(function (err) {
    if (err) return handleError(err);
    console.log("The post is successfully saved");
    PostModel.find(function (err, posts) {
      if (err) return handleError(err);
      console.log(`The full list of posts: ${posts}`);
    });
  });
};

connectToDb()
  .on("error", console.log)
  .on("disconnected", connectToDb)
  .once("open", startAPIServer);
