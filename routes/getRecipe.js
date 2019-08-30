const express = require("express");

const controllerRecipe = require("../controllers/recipe");

const router = express.Router();

// define route of "Rezept suchen" and get data from recipe controller
router.get("/rezept-suchen", controllerRecipe.getRecipes);

router.post("/neues_rezept", controllerRecipe.postRecipes);

exports.getRecipeOfRouter = router;
