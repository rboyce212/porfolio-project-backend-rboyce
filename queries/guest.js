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

const createGuest = async (guest) => {
  try {
    const newGuest = await db.one(
      "INSERT INTO guests (name_last, name_first, street_address_one, street_address_two, city_state_zip, address_is_confirmed, invite_is_mailed, rsvp_is_received, is_attending, party_total) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
      [
        guest.name_last,
        guest.name_first,
        guest.street_address_one,
        guest.street_address_two,
        guest.city_state_zip,
        guest.address_is_confirmed,
        guest.invite_is_mailed,
        guest.rsvp_is_received,
        guest.is_attending,
        guest.party_total,
      ]
    );
    return newGuest;
  } catch (error) {
    return error;
  }
};

const deleteGuest = async (id) => {
  try {
    const deletedGuest = await db.one(
      "DELETE FROM guests WHERE id = $1 RETURNING *",
      id
    );
    return deletedGuest;
  } catch (error) {
    return error;
  }
};

const updateGuest = async (id, guest) => {
  try {
    const updatedGuest = await db.one(
      "UPDATE guests SET name_last=$1, name_first=$2, street_address_one=$3, street_address_two=$4, city_state_zip=$5, address_is_confirmed=$6, invite_is_mailed=$7, rsvp_is_received=$8, is_attending=$9, party_total=$10 where id=$11 RETURNING *",
      [
        guest.name_last,
        guest.name_first,
        guest.street_address_one,
        guest.street_address_two,
        guest.city_state_zip,
        guest.address_is_confirmed,
        guest.invite_is_mailed,
        guest.rsvp_is_received,
        guest.is_attending,
        guest.party_total,
        id,
      ]
    );
    return updatedGuest;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllGuests,
  getGuest,
  createGuest,
  deleteGuest,
  updateGuest,
};
