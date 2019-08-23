const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const contactRoute = require("./routes/contact");
const getRecipeRoute = require("./routes/getRecipe");
const addRecipeRoute = require("./routes/addRecipe");
const homeRoute = require("./routes/home");

const app = express();

app.set("view engine", "ejs");
// app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(contactRoute.contactRouter);
app.use(getRecipeRoute.getRecipeOfRouter);
app.use(addRecipeRoute.addRecipeOfRouter);
app.use(homeRoute);

app.listen(80);
