const path = require("path");
const express = require("express");

const contactData = require("./contact");

const router = express.Router();

router.get("/", (req, res, next) => {
  const myContactData = contactData.person;
  const myBubu = contactData.bubu;
  console.log(myContactData, myBubu);
  res.render("home", {
    pageTitle: "Startseite",
    PN: [0, 1, 2],
    perso: myContactData,
    lala: myBubu
  });
  // res.sendFile(path.join(__dirname, "../", "views", "home.html"));
});

module.exports = router;
