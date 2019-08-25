const path = require("path");
const express = require("express");

const controllerNewContact = require("../controllers/newContact");

const router = express.Router();

router.get("/kontakt", controllerNewContact.getNewContact);

router.post("/neuer_kontakt", controllerNewContact.postNewContact);

module.exports = router;
