const express = require("express");
const bodyParser = require("body-parser");
const decorator = require("./database/decorator");
const app = express();
const users = require("./api/users/index");
const auth = require("./api/users/auth");
const contacts = require("./api/contacts");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const bcrypt = require("bcryptjs");
const redis = require("redis");
const RedisStore = require("connect-redis")(session);

const PORT = process.env.EXPRESS_HOST_PORT || 8080;

const client = redis.createClient({ url: process.env.REDIS_URL });
const saltRounds = 12;
const SESSION_SECRET = process.env.SESSION_SECRET;
const REDIS_URL = process.env.REDIS_URL;
const User = require("./database/models/User");

require("dotenv").config();

if (!PORT) {
  console.log("No Port Found");
}
if (!SESSION_SECRET) {
  console.log("No Session Secret Found");
}
if (!REDIS_URL) {
  console.log("No Redis Hostname Found");
}
if (!PORT || !SESSION_SECRET || !REDIS_URL) {
  return process.exit(1);
}

app.use(bodyParser.json());
app.use(decorator);

app.get("/api/profile?user=:id", (req, res) => {
  console.log("/profile GET");
  return req.database.User.where({ id: req.params.id })
    .fetch()
    .then(results => {
      return res.json(results);
    });
});

app.use("/api/users", users);
app.use("/api/contacts", contacts);
app.use("/api", auth);

app.get("/smoke", (req, res) => {
  res.send("smoke test");
});

app.listen(PORT, () => {
  console.log(`Server started on PORT:${PORT}`);
});
