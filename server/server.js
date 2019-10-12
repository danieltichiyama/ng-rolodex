const express = require("express");
const bodyParser = require("body-parser");
const decorator = require("./database/decorator");
const app = express();
const users = require("./routes/users");
const contacts = require("./routes/contacts");

const PORT = process.env.EXPRESS_HOST_PORT || 8080;

app.use(bodyParser.json());
app.use(decorator);

app.get("/api/profile", (req, res) => {
  // console.log("req.query", req.query);
  console.log("/profile GET");
  return res.json({ message: "/profile GET" });
});

app.use("/api/users", users);
app.use("/api/contacts", contacts);

app.get("/smoke", (req, res) => {
  res.send("smoke test");
});

app.listen(PORT, () => {
  console.log(`Server started on PORT:${PORT}`);
});
