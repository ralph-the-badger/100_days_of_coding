const fs = require("fs");
const path = require("path");

// define path to JSON-File
const contactFilePath = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "contacts.json"
);

/* 
read data from JSON-File: 
if file is empty -> create empty array, otherwise return data in array
callback (cb) is needed because data must be rendered after page was loaded (async)
*/
const getContactsFromFile = cb => {
  fs.readFile(contactFilePath, (err, fileContent) => {
    if (err) {
      return cb([]);
    } else {
      return cb(JSON.parse(fileContent));
    }
  });
};

// create class for single product with methods save and get all praoducts from file
module.exports = class Contact {
  constructor(name) {
    this.name = name;
  }
  // read JSON-file and push data as strings into it, if error occurs -> show error
  save() {
    getContactsFromFile(contacts => {
      contacts.push(this);
      fs.writeFile(contactFilePath, JSON.stringify(contacts), err => {
        console.log(err);
      });
    });
  }
  // read JSON-file and get all products from file
  static fetchAll(cb) {
    getContactsFromFile(cb);
  }
};
