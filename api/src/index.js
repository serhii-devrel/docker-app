// Core
const express = require("express");

const app = express();

app.get("/api", (req, res) => {
  res.send("API server handle request properly");
});

app.listen(3000, () => {
  console.log("The API service was started");
});
