const Recipe = require("../models/recipe");

exports.getRecipeDetails = (req, res, next) => {
  const recId = req.params.rezeptId;
  Recipe.findRecipeById(recId, recipe => {
    res.render("../views/recipes/recipe-details.ejs", {
      recipe: recipe,
      pageTitle: recipe.recipeName,
      path: "/rezepte"
    });
  });
};
