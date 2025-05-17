const { findEmailOrUsername } = require("../../repositories/guestRepo");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginGuestService = async (username, password) => {    
  const guest = await findEmailOrUsername(username);
  if (!guest) throw Error("User not found");

  const isMatch = bcrypt.compare(password, guest.hashPassword);

  if (!isMatch) throw Error("Wrong Password");

  const token = jwt.sign({ id: guest._id }, process.env.JWT_TOKEN, {
    expiresIn: "1h",
  });

  return { token, guest };
};

module.exports = {loginGuestService}