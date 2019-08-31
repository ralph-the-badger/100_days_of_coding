const Recipe = require("../models/recipe");

exports.getAddRecipe = (req, res, next) => {
  res.render("../views/admin/addRecipe.ejs", {
    pageTitle: "Rezept anlegen",
    path: "/rezept-anlegen"
  });
};

exports.postAddRecipe = (req, res, next) => {
  const recipe = new Recipe(req.body.rezeptName);
  recipe.save();
  res.redirect("/rezepte");
};

exports.displayNewRecipe = (req, res, next) => {
  Recipe.fetchAll(recipes => {
    res.render("../views/recipes/recipes.ejs", {
      pageTitle: "Rezepte",
      path: "/rezepte",
      rec: recipes
    });
  });
};
