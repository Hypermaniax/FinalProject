const { getLisitingById } = require("../../repositories/Listing");

const getListingByidService = async (id) => {
  return await getLisitingById(id);
};

module.exports = getListingByidService;
