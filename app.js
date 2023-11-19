const express = require("express");
const guestsController = require("./controllers/guestsController");

const app = express();

const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use("/guests", guestsController);

app.get("/", (req, res) => {
  res.send("Welcome to my Wedding Guest Invitation Manager App");
});

module.exports = app;
