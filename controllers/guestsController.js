const express = require("express");
const guests = express.Router();
const {
  getAllGuests,
  getGuest,
  createGuest,
  deleteGuest,
  updateGuest,
} = require("../queries/guest");
const {
  checkNameLast,
  checkNameFirst,
  checkBooleanAddress,
  checkBooleanInvite,
  checkBooleanRsvp,
  checkBooleanAttending,
} = require("../validations/checksGuests");

// GET ALL
guests.get("/", async (req, res) => {
  const allGuests = await getAllGuests();
  if (allGuests[0]) {
    res.status(200).json(allGuests);
  } else {
    res.status(500).json({ error: "There was a server error" });
  }
});

// GET ONE
guests.get("/:id", async (req, res) => {
  const { id } = req.params;
  const oneGuest = await getGuest(id);
  if (oneGuest) {
    res.status(200).json(oneGuest);
  } else {
    res.status(404).json({ error: "Guest Not Found" });
  }
});

module.exports = guests;
