const {
  registHost,
  existEmailOrUsername,
} = require("../../repositories/hostRepo");
const bcrypt = require("bcrypt");

const registHostService = async (username, email, name, password) => {
  const host = await existEmailOrUsername(username, email);

  if (host) throw Error("User not found");

  const hashPassword = await bcrypt.hash(password, 10);

  const data = { username, email, name, hashPassword };

  const register = await registHost(data);

  return register;
};

module.exports = { registHostService };
