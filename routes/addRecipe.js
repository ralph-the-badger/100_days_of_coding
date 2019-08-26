const express = require("express");
const controllerRecipe = require("../controllers/recipe");

const router = express.Router();

// define route of "Rezept anlegen" and get data from recipe controller
router.get("/rezept-anlegen", controllerRecipe.addRecipe);

exports.addRecipeOfRouter = router;
