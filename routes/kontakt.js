const path = require("path");
const express = require("express");

const router = express.Router();

const person = [];

router.get("/kontakt", (req, res, next) => {
  // rendern der ejs
  res.render("contact", {
    pageTitle: "Kontakt",
    path: "/kontakt"
  });
});

router.post("/neuer_kontakt", (req, res, next) => {
  person.push({ personName: req.body.newName });
  res.redirect("/");
});

// module.exports = router;
// module.exports = person;
// exports.bubu = "Bubu";

exports.contactRouter = router;
exports.person = person;
