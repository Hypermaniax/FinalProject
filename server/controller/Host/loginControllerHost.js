const { loginHostService } = require("../../service/Host/loginHostService");

const loginHostController = async (req, res) => {
  try {
    const { username, password } = req.body;

    const result = await loginHostService(username, password);
    
    return res.status(200).json({ message: `Welcome ${username}`, result });
  } catch (error) {
    return res.status(401).json({ message: "User not Found", error });
  }
};

module.exports = loginHostController;
