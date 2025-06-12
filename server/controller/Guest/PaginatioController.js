const {
  paginationGuest,
} = require("../../service/Listing/pagiantionListing");

const pagination = async (req, res) => {
  try {
    const paginationdata = await paginationGuest(req.query);
    res.status(200).json(paginationdata);
  } catch (error) {}
};
module.exports = pagination;
