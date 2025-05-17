const { dataDashboard } = require("../../service/Host/listingHostService");
const dataListingHost = async (req, res) => {
  const { token } = req.body;
  const listing = await dataDashboard(token)
  console.log(listing);
  
  return res.status(200).json(listing)
};

module.exports = dataListingHost;