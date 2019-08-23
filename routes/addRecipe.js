const express = require("express");

const router = express.Router();

router.get("/rezept-anlegen", (req, res, next) => {
  res.render("addRecipe", {
    pageTitle: "Rezept anlegen",
    path: "/rezept-anlegen"
  });
});

exports.addRecipeOfRouter = router;
