const { getUser } = require("../service/getUserData");

const dataUser = async (req, res) => {
  try {
    const { token } = req.body;
    
    const data = await getUser(JSON.parse(token));
    
    res.status(200).json(data);
  } catch (error) {
    res.status(403).json(error);
  }
};
module.exports = dataUser;
