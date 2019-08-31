const express = require("express");

const adminController = require("../controllers/admin");

const router = express.Router();

router.get("/rezept-anlegen", adminController.getAddRecipe);

router.post("/neues_rezept", adminController.postAddRecipe);

router.get("/rezepte", adminController.displayNewRecipe);

module.exports = router;
