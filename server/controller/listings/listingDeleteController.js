const deleteListing = require("../../service/Listing/deleteListingService");

const deleteListingId = async (req, res) => {
  try {
    await deleteListing(req.query.id);
    res.status(200).json({ message: "success full Deleting listing" });
  } catch (error) {
    res.status(401).json({ message: "cannot Delete" });
  }
};

module.exports = deleteListingId;
