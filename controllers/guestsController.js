const express = require("express");
const guests = express.Router();

// queries
const {
  getAllGuests,
  getGuest,
  createGuest,
  deleteGuest,
  updateGuest,
} = require("../queries/guest.js");

// validations
const {
  checkNameLast,
  checkNameFirst,
  checkBooleanAddress,
  checkBooleanInvite,
  checkBooleanRsvp,
  checkBooleanAttending,
} = require("../validations/checkGuests.js");

// GET ALL GUESTS ROUTE
guests.get("/", async (req, res) => {
  const allGuests = await getAllGuests();
  if (allGuests[0]) {
    res.status(200).json(allGuests);
  } else {
    res.status(500).json({ error: "There was a server error" });
  }
});

// GET ONE GUEST ROUTE
guests.get("/:id", async (req, res) => {
  const { id } = req.params;
  const oneGuest = await getOneGuest(id);
  if (oneGuest) {
    res.status(200).json(oneGuest);
  } else {
    res.status(404).json({ error: "Guest Not Found" });
  }
});

// CREATE ROUTE
guests.post(
  "/",
  checkNameLast,
  checkNameFirst,
  checkBooleanAddress,
  checkBooleanInvite,
  checkBooleanRsvp,
  checkBooleanAttending,
  async (req, res) => {
    const body = req.body;
    const guest = await createGuest(body);
    res.status(200).json(guest);
  }
);

// UPDATE ROUTE
guests.put(
  "/:id",
  checkNameLast,
  checkNameFirst,
  checkBooleanAddress,
  checkBooleanInvite,
  checkBooleanRsvp,
  checkBooleanAttending,
  async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const updatedGuest = await updateGuest(id, body);
    if (updatedGuest.id) {
      res.status(200).json(updatedGuest);
    } else {
      res.status(404).json({ error: "Guest Not Found" });
    }
  }
);

// DELETE ROUTE
guests.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedGuest = await deleteGuest(id);
  if (deletedGuest.id) {
    res.status(200).json(deletedGuest);
  } else {
    res.status(404).json({ error: "Guest Not Found" });
  }
});

module.exports = guests;
