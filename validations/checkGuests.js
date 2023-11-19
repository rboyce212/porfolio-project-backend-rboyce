const checkNameLast = (req, res, next) => {
  if (req.body.name_last) {
    return next();
  } else {
    res.status(400).json({ error: "Last name is required" });
  }
};

const checkNameFirst = (req, res, next) => {
  if (req.body.name_first) {
    return next();
  } else {
    res.status(400).json({ error: "First name is required" });
  }
};

const checkBooleanAddress = (req, res, next) => {
  const address = req.body.address_is_confirmed;
  if (typeof address === "boolean") {
    next();
  } else {
    res
      .status(400)
      .json({ error: "address_is_confirmed must be true or false" });
  }
};

const checkBooleanInvite = (req, res, next) => {
  const invite = req.body.invite_is_mailed;
  if (typeof invite === "boolean") {
    next();
  } else {
    res.status(400).json({ error: "invite_is_mailed must be true or false" });
  }
};

const checkBooleanRsvp = (req, res, next) => {
  const rsvp = req.body.rsvp_is_received;
  if (typeof rsvp === "boolean") {
    next();
  } else {
    res.status(400).json({ error: "rsvp_is_received must be true or false" });
  }
};

const checkBooleanAttending = (req, res, next) => {
  const attending = req.body.is_attending;
  if (typeof attending === "boolean") {
    next();
  } else {
    res.status(400).json({ error: "is_attending must be true or false" });
  }
};

module.exports = {
  checkNameLast,
  checkNameFirst,
  checkBooleanAddress,
  checkBooleanInvite,
  checkBooleanRsvp,
  checkBooleanAttending,
};
