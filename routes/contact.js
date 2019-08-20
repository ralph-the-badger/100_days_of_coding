const path = require("path");
const express = require("express");

const router = express.Router();

router.use("/contact", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "contact.html"));
});

router.post("/new_contact", (req, res, next) => {
  console.log(req.body.message);
  res.redirect("/");
});

module.exports = router;
