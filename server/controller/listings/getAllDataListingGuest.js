const getAllDataListing = require("../../service/Listing/getAllListingGuest");

const allDataListingGuest = async (req, res) => {
  try {
    const dataListing = getAllDataListing;
    res.status(200).json({dataListing});
  } catch (error) {}
};
module.exports = allDataListingGuest;
