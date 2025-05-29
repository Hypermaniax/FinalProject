const Host = require("../models/host");

const findEmailOrUsername = async (input) => {
  return await Host.findOne({
    $or: [{ username: input }, { email: input }],
  });
};

const existEmailOrUsername = async (username, email) => {
  return await Host.exists({
    $or: [{ email: email }, { username: username }],
  });
};

const registHost = async (data) => {
  const host = new Host(data);
  return host.save();
};

const getIdHost = async (id) => {
  return Host.findById(id);
};

module.exports = {
  findEmailOrUsername,
  registHost,
  existEmailOrUsername,
  getIdHost,
};
