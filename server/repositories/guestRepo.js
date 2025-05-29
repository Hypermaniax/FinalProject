const Guest = require("../models/guestSchema");

const findEmailOrUsername = async (input) => {
  return await Guest.findOne({
    $or: [{ email: input }, { username: input }],
  });
};

const existEmailOrUsername = async (username, email) => {
  return await Guest.exists({
    $or: [{ email: email }, { username: username }],
  });
};

const registGuest = async (data) => {
  const guest = new Guest(data);
  return guest.save();
};

const updateGuest = async (id) => {
  return await Guest.findByIdAndUpdate(id);
};

const getIdGuest = async (id) => {
  return Guest.findById(id)
}

module.exports = {
  findEmailOrUsername,
  existEmailOrUsername,
  registGuest,
  updateGuest,
  getIdGuest
};
