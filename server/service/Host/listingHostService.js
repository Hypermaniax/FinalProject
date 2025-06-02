const { getAllData } = require("../../repositories/Listing");
const jwt = require("jsonwebtoken");

const dataDashboard = async (token) => {
  const parse = JSON.parse(token);

  const decode = jwt.verify(parse, process.env.JWT_TOKEN);

  const listData = await getAllData(decode.id);
  console.log(listData);

  return listData;
};

module.exports = { dataDashboard };
