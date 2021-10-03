// Core
const express = require("express");

// Config
const { port } = require("./configs");

// DB
const { connectToDb } = require("./helpers/db");

const app = express();

app.get("/api", (_, res) => {
  res.send("API server handle request properly");
});

const startAPIServer = () => {
  app.listen(port, () => {
    console.log(`The API service was started on port ${port}`);
  });
};

connectToDb()
  .on("error", console.log)
  .on("disconnected", connectToDb)
  .once("open", startAPIServer);
