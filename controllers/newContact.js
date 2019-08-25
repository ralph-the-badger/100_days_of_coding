const person = [];

exports.getNewContact = (req, res, next) => {
  res.render("contact", {
    pageTitle: "Kontakt",
    path: "/kontakt"
  });
};

exports.postNewContact = (req, res, next) => {
  person.push({ personName: req.body.newName });
  res.redirect("/");
};

exports.getContactForHome = (req, res, next) => {
  res.render("home", {
    pageTitle: "Startseite",
    path: "/",
    perso: person
  });
};
