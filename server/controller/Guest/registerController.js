const {
  registGuestService,
} = require("../../service/Guest/registerGuestService");

const registerGuestController = async (req, res) => {
  const { name, userName, email, password } = req.body;

  await registGuestService(userName, email, name, password);

  return res
    .status(200)
    .json({ message: `Registration successful ${userName}` });
};

module.exports = registerGuestController;
