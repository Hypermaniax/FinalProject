const { dataDashboard } = require("../../service/Listing/listingHostService");

const dataListingHost = async (req, res) => {
  try {
    const { token } = req.body;
  
    const listing = await dataDashboard(token);

    return res.status(200).json(listing);
  } catch (error) {
    return res.status(401).json(listing)
  }
};

module.exports = dataListingHost;
