const getAllDataListing = require("../../service/Guest/listingGuest");

const allDataListinghost = async (req, res) => {
  try {
    const dataListing = getAllDataListing;
    res.status(200).json({dataListing});
  } catch (error) {}
};
module.exports = allDataListinghost;
