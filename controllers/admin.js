const Recipe = require("../models/recipe");
const Contact = require("../models/contact");

exports.getAddRecipe = (req, res, next) => {
  res.render("../views/admin/addRecipe.ejs", {
    pageTitle: "Rezept anlegen",
    path: "/rezept-anlegen"
  });
};

exports.postAddRecipe = (req, res, next) => {
  const recName = req.body.rezeptName;
  const recImage = req.body.rezeptBild;
  const recIngredients = req.body.rezeptZutaten;
  const recDescription = req.body.rezeptAnleitung;
  const recInfo = req.body.rezeptInfo;
  const recipe = new Recipe(
    recName,
    recImage,
    recIngredients,
    recDescription,
    recInfo
  );
  recipe.save();
  res.redirect("/rezepte");
};

exports.getEditRecipe = (req, res, next) => {
  const recId = req.params.rezeptId;
  Recipe.findRecipeById(recId, recipe => {
    res.render("../views/admin/editRecipe.ejs", {
      pageTitle: "Rezept bearbeiten",
      path: "/rezept-bearbeiten",
      recipe: recipe
    });
  });
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

// render page "Kontakt" with data for contact.ejs
exports.getNewContact = (req, res, next) => {
  res.render("../views/admin/contact.ejs", {
    pageTitle: "Kontakt",
    path: "/kontakt"
  });
};

// store data in array "person" and redirect to "Startseite"
exports.postNewContact = (req, res, next) => {
  const contact = new Contact(req.body.name);
  contact.save();
  res.redirect("/");
};

// render page "Startseite" and pass data from array "person" for home.ejs
exports.getContactForHome = (req, res, next) => {
  Contact.fetchAll(contacts => {
    res.render("../views/recipes/home.ejs", {
      pageTitle: "Startseite",
      path: "/",
      perso: contacts
    });
  });
};
