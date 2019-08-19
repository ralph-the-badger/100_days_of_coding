const express = require("express");

const router = express.Router();

router.use("/contact", (req, res, next) => {
  res.send(
    '<form action="/new_contact" method="POST"><input type="text" name="message"><button type="submit">Send message</button></form>'
  );
});

router.post("/new_contact", (req, res, next) => {
  console.log(req.body.message);
  res.redirect("/");
});

module.exports = router;
