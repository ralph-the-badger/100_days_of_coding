const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const adminRoute = require("./routes/admin");
const recipeRoute = require("./routes/recipes");

const app = express();

app.set("view engine", "ejs");
// app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(adminRoute);
app.use(recipeRoute);

app.listen(process.env.PORT || 3000);
