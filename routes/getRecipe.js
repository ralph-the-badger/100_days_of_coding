const express = require("express");

const controllerRecipe = require("../controllers/recipe");

const router = express.Router();

router.get("/rezept-suchen", controllerRecipe.getRecipe);

exports.getRecipeOfRouter = router;
