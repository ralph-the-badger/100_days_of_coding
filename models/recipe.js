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
  constructor(
    recipeName,
    recipeImage,
    recipeIngredients,
    recipeDescription,
    recipeInfo
  ) {
    this.recipeName = recipeName;
    this.recipeImage = recipeImage;
    this.recipeIngredients = recipeIngredients;
    this.recipeDescription = recipeDescription;
    this.recipeInfo = recipeInfo;
  }
  save() {
    this.id = Math.floor(Math.random() * 100).toString();
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
  static findRecipeById(id, cb) {
    getRecipeFromFile(recipes => {
      const recipe = recipes.find(r => r.id === id);
      cb(recipe);
    });
  }
};
