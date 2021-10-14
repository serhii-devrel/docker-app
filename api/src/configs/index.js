const port = process.env.PORT;
const db = process.env.DB_URL;
const AUTH_BASE_URL = process.env.AUTH_BASE_URL;

module.exports = {
  port,
  db,
  AUTH_BASE_URL,
};
