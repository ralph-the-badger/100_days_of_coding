const express = require("express");

const router = express.Router();

router.get("/getRecipe", (req, res, next) => {
  res.render("getRecipe", {
    pageTitle: "Rezept suchen",
    path: "/getRecipe"
  });
});

exports.getRecipeRouter = router;
