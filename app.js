const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const contactRoute = require("./routes/contact");
const homeRoute = require("./routes/home");

const app = express();

app.set("view engine", "ejs");
// app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(contactRoute.myRouter);

app.use(homeRoute);

app.listen(3000);
