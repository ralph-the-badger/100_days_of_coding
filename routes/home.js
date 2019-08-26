const express = require("express");

const contactData = require("../controllers/newContact");

const router = express.Router();

// define route for "Startseite" and get data from newContact.js
router.get("/", contactData.getContactForHome);

module.exports = router;
