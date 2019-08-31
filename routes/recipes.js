const express = require("express");

const recipeRoute = require("../controllers/recipes");

const router = express.Router();

router.get("/", recipeRoute.getIndex);

router.get("/products");

router.get("/kontakt");

module.exports = router;
