const { registHostService } = require("../../service/Host/registerHostService");

const registHostController = async (req, res) => {
  const { name, userName, email, password } = req.body;

  await registHostService(userName, email, name, password);
  
  return res.status(200).json({
    message: `Host registration successful. Welcome, ${userName}!`,
  });
};

module.exports = registHostController;
