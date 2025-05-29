const jwt = require("jsonwebtoken");
const { getIdGuest } = require("../repositories/guestRepo");
const { getIdHost } = require("../repositories/hostRepo");

const getUser = async (token) => {
  let verify;
  try {
    verify = jwt.verify(token, process.env.JWT_TOKEN);
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      throw new Error("Token has expired");
    } else {
      throw new Error("Invalid token");
    }
  }
  const { id } = verify;

  const host = await getIdHost(id);
  if (host) return host;

  const guest = await getIdGuest(id);
  if (guest) return guest;

  throw Error("User not Found");
};

module.exports = { getUser };
