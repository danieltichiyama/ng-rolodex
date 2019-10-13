const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("/contacts GET");
  return req.database.Contact.fetchAll()
    .then(results => {
      return res.json(results);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/smoke", (req, res) => {
  console.log("contacts smoke test");

  return res.json({ message: "contacts smoke" });
});

router.get("/:id", (req, res) => {
  console.log(`/contacts/${req.params.id} GET`);

  return res.json({ message: `/contact/${req.params.id} GET` });
});

router.post("/", (req, res) => {
  console.log("/contacts POST body", req.body);

  return res.json({ message: "/contacts POST", body: req.body });
});

router.put("/:id", (req, res) => {
  console.log(`/contacts/${req.params.id} PUT body`, req.body);

  return res.json({
    message: `/contacts/${req.params.id} PUT`,
    body: req.body
  });
});

router.delete("/:id", (req, res) => {
  console.log(`/contacts/${req.params.id} DELETE`);

  return res.json({
    message: `/contacts/${req.params.id} DELETE`
  });
});

module.exports = router;
