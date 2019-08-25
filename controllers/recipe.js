exports.getRecipe = (req, res, next) => {
  res.render("getRecipe", {
    pageTitle: "Rezept suchen",
    path: "/rezept-suchen"
  });
};

exports.addRecipe = (req, res, next) => {
  res.render("addRecipe", {
    pageTitle: "Rezept anlegen",
    path: "/rezept-anlegen"
  });
};
