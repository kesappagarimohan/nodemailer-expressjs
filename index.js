"use strict";

const express = require("express");
const config = require("./helpers/config");
const expresslayout = require("express-ejs-layouts");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const emailRoutes = require("./routes/email-route");

const app = express();
app.use(expresslayout);
app.set("view engine", "ejs");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(emailRoutes.routes);
app.listen(config.port, () =>
  console.log(`app is listening on url :${config.port}`)
);
