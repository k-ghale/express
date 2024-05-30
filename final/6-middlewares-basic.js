const express = require("express");
const logger = require("./logger.js");
const auth = require("./authorize.js");
const morgan = require("morgan");

const app = express();
app.use(morgan('tiny'));

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about/", (req, res) => {
  res.send("About Page");
});

app.get("/api/", [logger, auth], (req, res) => {
  res.send("APIs");
});

app.get("/contact/", (req, res) => {
  res.send("About Page");
});

app.get("/product/", (req, res) => {
  res.send("Products");
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
