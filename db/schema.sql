-- // using the colors db to create our table for this application
DROP DATABASE IF EXISTS colors_dev;
CREATE DATABASE colors_dev;

\c colors_dev;

CREATE TABLE guests (
id SERIAL PRIMARY KEY,
name_last TEXT NOT NULL,
name_first TEXT NOT NULL,
street_address_one TEXT,
street_address_two TEXT,
city_state_zip TEXT,
address_is_confirmed BOOLEAN DEFAULT false,
invite_is_mailed BOOLEAN DEFAULT false,
rsvp_is_received BOOLEAN DEFAULT false,
is_attending BOOLEAN DEFAULT false,
party_total INT DEFAULT 0,
CHECK (party_total >= 0)
);
