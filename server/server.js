const express = require("express");
const bodyParser = require("body-parser");
const decorator = require("./database/decorator");
const app = express();
const api = require("./routes/api");

const PORT = process.env.EXPRESS_HOST_PORT || 8080;

app.use(bodyParser.json());
app.use(decorator);

app.use("/api", api);

app.get("/smoke", (req, res) => {
  res.send("smoke test");
});

app.listen(PORT, () => {
  console.log(`Server started on PORT:${PORT}`);
});
