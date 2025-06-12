const { getListing } = require("../../repositories/Listing");

const getAllDataListing = async () => {
  try {
    return await getListing();
  } catch (error) {}
};
module.exports = getAllDataListing;
