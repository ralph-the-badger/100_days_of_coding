const path = require("path");
const express = require("express");

const router = express.Router();

const person = [];

router.get("/contact", (req, res, next) => {
  res.render("contact", {
    pageTitle: "Kontakt",
    path: "/contact"
  });
});

router.post("/new_contact", (req, res, next) => {
  person.push({ personName: req.body.newName });
  res.redirect("/");
});

// module.exports = router;
// module.exports = person;
// exports.bubu = "Bubu";

exports.contactRouter = router;
exports.person = person;
