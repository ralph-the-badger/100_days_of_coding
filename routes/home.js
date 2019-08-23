const path = require("path");
const express = require("express");

const contactData = require("./kontakt");

const router = express.Router();

router.get("/", (req, res, next) => {
  const myContactData = contactData.person;
  res.render("home", {
    pageTitle: "Startseite",
    path: "/",
    perso: myContactData
  });
});

module.exports = router;
