const Contact = require("../models/contact");

// render page "Kontakt" with data for contact.ejs
exports.getNewContact = (req, res, next) => {
  res.render("contact", {
    pageTitle: "Kontakt",
    path: "/kontakt"
  });
};

// store data in array "person" and redirect to "Startseite"
exports.postNewContact = (req, res, next) => {
  const contact = new Contact(req.body.newName);
  contact.save();
  res.redirect("/");
};

// render page "Startseite" and pass data from array "person" for home.ejs
exports.getContactForHome = (req, res, next) => {
  Contact.fetchAll(contacts => {
    res.render("home", {
      pageTitle: "Startseite",
      path: "/",
      perso: contacts
    });
  });
};
