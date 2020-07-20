const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  return req.database.User.where({ username: req.body.username })
    .fetch()
    .then((result) => {
      return res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/logout", (req, res) => {
  req.logout();
  console.log("logged out");
  res.send("logged out");
});

module.exports = router;
