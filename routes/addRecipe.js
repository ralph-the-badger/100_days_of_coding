const express = require("express");

const router = express.Router();

router.get("/addRecipe", (req, res, next) => {
  res.render("addRecipe", {
    pageTitle: "Rezept hinzufügen",
    path: "/addRecipe"
  });
});

exports.addRecipeRouter = router;
