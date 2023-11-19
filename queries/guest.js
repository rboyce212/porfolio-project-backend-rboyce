const db = require("../db/dbConfig");

const getAllGuests = async () => {
  try {
    const allGuests = await db.any("SELECT * FROM guests");
    return allGuests;
  } catch (error) {
    return error;
  }
};

const getGuest = async (id) => {
  try {
    const oneGuest = await db.one("SELECT * FROM guests WHERE id=$1", id);
    return oneGuest;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllGuests,
  getGuest,
};
