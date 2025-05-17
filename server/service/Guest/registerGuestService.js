const {
  existEmailOrUsername,
  registGuest,
} = require("../../repositories/guestRepo");
const bcrypt = require("bcrypt");

const registGuestService = async (username, email, name, password) => {
  const guest = await existEmailOrUsername(username,email);

  if (guest) throw new Error("Email or username has been taken");

  const hashPassword = await bcrypt.hash(password, 10);

  const data = { username, email, name, hashPassword };

  const register = await registGuest(data);

  return register;
};

module.exports = { registGuestService };
