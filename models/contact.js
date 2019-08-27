const fs = require("fs");
const path = require("path");

const contacts = [];

module.exports = class Contact {
  constructor(name) {
    this.name = name;
  }
  save() {
    const contactFilePath = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "contacts.json"
    );
    fs.readFile(contactFilePath, (err, fileContent) => {
      let contacts = [];
      if (!err) {
        contacts = JSON.parse(fileContent);
      }
      contacts.push(this);
      fs.writeFile(contactFilePath, JSON.stringify(contacts), err => {
        console.log(err);
      });
    });
  }
  static fetchAll(cb) {
    const contactFilePath = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "contacts.json"
    );
    fs.readFile(contactFilePath, (err, fileContent) => {
      if (err) {
        cb([]);
      } else {
        cb(JSON.parse(fileContent));
      }
    });
  }
};
