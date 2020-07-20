const express = require("express");
const router = express.Router();

router.get("/smoke", (req, res) => {
  console.log("users smoke test");

  return res.json({ message: "users smoke" });
});

router.put("/:id", (req, res) => {
  res.json({ message: `/users/${req.params.id} PUT`, body: req.body });
});

module.exports = router;
