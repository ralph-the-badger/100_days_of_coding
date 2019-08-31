const Recipe = require("../models/recipe");

exports.getIndex = (req, res, next) => {
  Recipe.fetchAll(recipes => {
    res.render("../views/recipes/home.ejs", {
      pageTitle: "Startseite",
      path: "/",
      rec: recipes
    });
  });
};
