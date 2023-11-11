const express = require("express");
const app = express();
const port = process.env.PORT || 2000;
const hbs = require("hbs");
const path = require("path");

const staticPages = path.join(__dirname, "/staticPages");
app.use(express.static(staticPages));

const partialsPath = path.join(__dirname, "/partials");
hbs.registerPartials(partialsPath);

app.set("view engine", "hbs");

app.get("", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(port);
