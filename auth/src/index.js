// Core
const express = require("express");

// Config
const { port } = require("./configs");

// DB
const { connectToDb } = require("./helpers/db");

const app = express();

app.get("/auth", (_, res) => {
  res.send("AUTH service handle request properly");
});

app.get("/auth/user", (req, res) => {
  res.json({
    id: "foo",
    email: "foo@bar.baz",
  });
});

const startAPIServer = async () => {
  app.listen(port, () => {
    console.log(`The AUTH service was started on port ${port}`);
  });
};

connectToDb()
  .on("error", console.log)
  .on("disconnected", connectToDb)
  .once("open", startAPIServer);
