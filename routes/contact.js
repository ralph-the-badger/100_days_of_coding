const path = require("path");
const express = require("express");

const router = express.Router();

const person = [];

router.use("/contact", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "contact.html"));
});

router.post("/new_contact", (req, res, next) => {
  person.push({ personName: req.body.newName });
  res.redirect("/");
});

module.exports = router;
// module.exports = person;
// exports.bubu = "Bubu";
