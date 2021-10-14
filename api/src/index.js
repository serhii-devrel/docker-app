// Core
const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");

// Config
const { port, AUTH_BASE_URL } = require("./configs");

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

app.get("/catalog", (req, res) => {
  console.log("AUTH SERVICE URL IS: ", AUTH_BASE_URL);
  axios.get(`${AUTH_BASE_URL}/user`).then((response) => {
    res.json({
      currentUser: response.data,
    });
  });
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
