const Recipe = require("../models/recipe");

exports.getRecipe = (req, res, next) => {
  res.render("getRecipe", {
    pageTitle: "Rezept suchen",
    path: "/rezept-suchen"
  });
};

exports.postRecipe = (req, res, next) => {
  const recipe = new Recipe(req.body.rezeptName);
  recipe.save();
  res.redirect("../rezept-anlegen");
};

exports.addRecipe = (req, res, next) => {
  Recipe.fetchAll(recipes => {
    res.render("addRecipe", {
      pageTitle: "Rezept anlegen",
      path: "/rezept-anlegen",
      rec: recipes
    });
  });
};
