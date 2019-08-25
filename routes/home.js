const express = require("express");

const contactData = require("../controllers/newContact");

const router = express.Router();

router.get("/", contactData.getContactForHome);

module.exports = router;
