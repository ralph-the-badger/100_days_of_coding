// const Recipe = require("../models/recipe");

// exports.getRecipe = (req, res, next) => {
//   res.render("getRecipe", {
//     pageTitle: "Rezept suchen",
//     path: "/rezept-suchen"
//   });
// };

// exports.postRecipe = (req, res, next) => {
//   const recipe = new Recipe(req.body.rezeptName);
//   recipe.save();
//   res.redirect("../rezept-anlegen");
// };

// exports.addRecipe = (req, res, next) => {
//   Recipe.fetchAll(recipes => {
//     res.render("addRecipe", {
//       pageTitle: "Rezept anlegen",
//       path: "/rezept-anlegen",
//       rec: recipes
//     });
//   });
// };

// exports.getNewRecipe = (req, res, next) => {
//   res.render("/views/addRecipe.ejs", {
//     pageTitle: "Rezept anlegen",
//     path: "/rezept-anlegen"
//   });
// };

// // store data in array "person" and redirect to "Startseite"
// exports.postNewRecipe = (req, res, next) => {
//   const contact = new Recipe(req.body.rezeptName);
//   contact.save();
//   res.redirect("/rezepte");
// };

// // render page "Startseite" and pass data from array "person" for home.ejs
// exports.getRecipeForRezepte = (req, res, next) => {
//   Contact.fetchAll(recipes => {
//     res.render("/views/recipes.ejs", {
//       pageTitle: "Rezepte",
//       path: "/",
//       rec: recipes
//     });
//   });
// };
