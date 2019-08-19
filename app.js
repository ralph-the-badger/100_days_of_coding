const express = require("express");
const bodyParser = require("body-parser");

const contactRoute = require("./routes/contact");
const homeRoute = require("./routes/home");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(contactRoute);

app.use(homeRoute);

app.listen(3000);
