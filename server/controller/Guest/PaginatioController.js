const {
  paginationGuest,
} = require("../../service/Guest/PaginationGuestService");

const pagination = async (req, res) => {
  try {
    const paginationdata = await paginationGuest(req.query);
    console.log(paginationdata);

    res.status(200).json(paginationdata);
  } catch (error) {}
};
module.exports = pagination;
