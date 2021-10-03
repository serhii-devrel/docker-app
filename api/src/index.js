// Core
const express = require("express");

const app = express();
const port = process.env.PORT;

app.get("/api", (req, res) => {
  res.send("API server handle request properly");
});

app.listen(port, () => {
  console.log(`The API service was started on port ${port}`);
});
