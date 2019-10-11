const express = require("express");
const router = express.Router();

router.get("/profile", (req, res) => {
  console.log("req.query", req.query);
  console.log("GET /api/profile hit");
  return res.json({ message: "GET /api/profile hit" });
});

module.exports = router;
