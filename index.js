const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const recipe_categories = require("./data/recipe_categories.json");
const chefs = require("./data/chefs.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Chef website is running");
});

app.get("/recipe_categories", (req, res) => {
  res.send(recipe_categories);
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.listen(port, () => {
  console.log(`Chef website is running on port: ${port}`);
});
