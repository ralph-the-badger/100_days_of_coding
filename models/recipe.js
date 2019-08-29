const fs = require("fs");
const path = require("path");

const recipeFilePath = path.join(
  path.dirname("process.mainModule.filename"),
  "data",
  "recipes.json"
);

const getRecipeFromFile = cb => {
  fs.readFile(recipeFilePath, (err, fileContent) => {
    if (err) {
      return cb([]);
    } else {
      return cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Recipe {
  constructor(recipeName) {
    this.recipeName = recipeName;
  }
  save() {
    getRecipeFromFile(recipes => {
      recipes.push(this);
      fs.writeFile(recipeFilePath, JSON.stringify(recipes), err => {
        console.log(err);
      });
    });
  }
  static fetchAll(cb) {
    getRecipeFromFile(cb);
  }
};
