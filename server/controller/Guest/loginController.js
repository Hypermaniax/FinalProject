const { loginGuestService } = require("../../service/Guest/loginGuestService");

const loginGuestController = async (req, res) => {
  try {
    
    const { username, password } = req.body;
    
    const result = await loginGuestService(username, password);
    return res.status(200).json({ message: `Welcome ${username}` , result });
  } catch (error) {
    return res.status(401).json({message : 'User not Found'})
  }
};

module.exports = loginGuestController;
