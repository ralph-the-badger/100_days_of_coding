const express = require("express");

const adminController = require("../controllers/admin");
const recipeController = require("../controllers/recipes");

const router = express.Router();

router.get("/rezept-anlegen", adminController.getAddRecipe);

router.post("/neues_rezept", adminController.postAddRecipe);

router.get("/rezepte", adminController.displayNewRecipe);

router.get("/rezepte/:rezeptId", recipeController.getRecipeDetails);

router.get("/kontakt", adminController.getNewContact);

router.post("/neuer_kontakt", adminController.postNewContact);

router.get("/", adminController.getContactForHome);

module.exports = router;
