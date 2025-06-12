const { deleteListingById } = require("../../repositories/Listing");

const deleteListing = async (id) => {
  await deleteListingById(id);
};

module.exports = deleteListing;
