const Listing = require("../../models/listing");
const addListing = require("../../service/Host/addListingService");

const newListingHost = async (req, res) => {
  try {
    await addListing(req.body, req.file);
    console.log(req.file);
    
    res.status(200).json({ message: "succeess full upload" });
  } catch (error) {
    res.status(401).json({ message: "cannot upload" });
  }
};

module.exports = newListingHost;
