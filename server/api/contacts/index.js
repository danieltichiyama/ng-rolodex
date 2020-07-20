const express = require("express");
const router = express.Router();

router.get("/search/:term", (req, res) => {
  return req.database.Contact.where({ created_by: req.query.user })
    .fetchAll()
    .then((results) => {
      return results.toJSON();
    })
    .then((results) => {
      return results.filter((element) => {
        return element.name
          .toLowerCase()
          .includes(req.params.term.toLowerCase());
      });
    })
    .then((results) => {
      return res.json(results);
    });
});

router.get("/", (req, res) => {
  return req.database.Contact.where({ created_by: req.query.user })
    .fetchAll()
    .then((results) => {
      return res.json(results);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/smoke", (req, res) => {
  console.log("contacts smoke test");
  return res.json({ message: "contacts smoke" });
});

router.get("/:id", (req, res) => {
  return res.json({ message: `/contact/${req.params.id} GET` });
});

router.post("/", (req, res) => {
  return req.database.Contact.forge(req.body)
    .save()
    .then((results) => {
      return res.json(results);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put("/:id", (req, res) => {
  return req.database.Contact.where({ id: req.body.id })
    .save(req.body, { method: "update", patch: true })
    .then((results) => {
      return res.json(results);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete("/:id", (req, res) => {
  return req.database.Contact.where({ id: req.params.id })
    .destroy()
    .then((results) => {
      return res.status(200).json({ message: "DELETE successful" });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
