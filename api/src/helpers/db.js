// Core
const mongoose = require("mongoose");

// Config
const { db } = require("../configs");

const connectToDb = () => {
  mongoose.connect(db, { useNewUrlParser: true });
  console.log(`Connection string is ${db}`);
  return mongoose.connection;
};

const handleError = (err) => {
  console.log(`Something went wrong, error is: ${err}`);
};

module.exports = {
  connectToDb,
  handleError,
};
