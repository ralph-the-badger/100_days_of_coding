const path = require("path");
const express = require("express");

const contactData = require("./contact");

const router = express.Router();

router.get("/", (req, res, next) => {
  const myContactData = contactData.person;
  console.log(myContactData);
  res.render("home", {
    pageTitle: "Startseite",
    PN: [0, 1, 2],
    perso: myContactData
  });
  // res.sendFile(path.join(__dirname, "../", "views", "home.html"));
});

module.exports = router;
