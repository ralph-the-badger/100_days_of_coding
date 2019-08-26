const express = require("express");

const controllerRecipe = require("../controllers/recipe");

const router = express.Router();

// define route of "Rezept suchen" and get data from recipe controller
router.get("/rezept-suchen", controllerRecipe.getRecipe);

exports.getRecipeOfRouter = router;
