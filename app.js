const express = require("express");
const app = express();
const morgan = require("morgan");
const guestsController = require("./controllers/guestsController.js");

const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use("/guests", guestsController);

app.get("/", (req, res) => {
  res.send("Welcome to my Wedding Guest Invitation Manager App");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

module.exports = app;
