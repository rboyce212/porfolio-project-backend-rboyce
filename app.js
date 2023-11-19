const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to my Wedding Guest Invitation Manager App");
});

const guestsController = require("./controllers/guestsController.js");
app.use("/guests", guestsController);

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

module.exports = app;
