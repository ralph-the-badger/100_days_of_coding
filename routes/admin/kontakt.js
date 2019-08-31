const express = require("express");

const controllerNewContact = require("../../controllers/newContact");

const router = express.Router();

// define route of "Kontakt" and get data from newContact.js
router.get("/kontakt", controllerNewContact.getNewContact);

// define route of "Neuer Kontakt" and get data from newContact.js
router.post("/neuer_kontakt", controllerNewContact.postNewContact);

module.exports = router;
