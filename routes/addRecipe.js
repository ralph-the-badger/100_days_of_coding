const express = require("express");
const controllerRecipe = require("../controllers/recipe");

const router = express.Router();

router.get("/rezept-anlegen", controllerRecipe.addRecipe);

exports.addRecipeOfRouter = router;
