const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const recipes = require("./data/recipe_categories.json");
const chefs = require("./data/chefs.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Bangldeshi Chef website is running");
});

app.get("/recipes", (req, res) => {
  res.send(recipes);
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/chefs/:id", (req, res) => {
  const id = req.params.id;
  const selectedChef = chefs.find((r) => r.chef_id === id);
  res.send(selectedChef);
});

app.listen(port, () => {
  console.log(`Chef website is running on port: ${port}`);
});
