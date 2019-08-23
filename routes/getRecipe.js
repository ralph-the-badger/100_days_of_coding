const express = require("express");

const router = express.Router();

router.get("/rezept-suchen", (req, res, next) => {
  res.render("getRecipe", {
    pageTitle: "Rezept suchen",
    path: "/rezept-suchen"
  });
});

exports.getRecipeOfRouter = router;
