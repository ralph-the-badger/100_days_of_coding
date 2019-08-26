const person = [];

// render page "Kontakt" with data for contact.ejs
exports.getNewContact = (req, res, next) => {
  res.render("contact", {
    pageTitle: "Kontakt",
    path: "/kontakt"
  });
};

// store data in array "person" and redirect to "Startseite"
exports.postNewContact = (req, res, next) => {
  person.push({ personName: req.body.newName });
  res.redirect("/");
};

// render page "Startseite" and pass data from array "person" for home.ejs
exports.getContactForHome = (req, res, next) => {
  res.render("home", {
    pageTitle: "Startseite",
    path: "/",
    perso: person
  });
};
