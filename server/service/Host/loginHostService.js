const { findEmailOrUsername } = require("../../repositories/hostRepo");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginHostService = async (username, password) => {
  const host = await findEmailOrUsername(username);
  // const data = await Listing.create(lisitngData);
  // console.log(data);
  
  const isMatch = await bcrypt.hash(password, host.hashPassword);

  if (!isMatch) throw Error("Wrong Password");

  const token = jwt.sign({ id: host._id }, process.env.JWT_TOKEN, {
    expiresIn: "24h",
  });

  return { token };
};

module.exports = { loginHostService };
