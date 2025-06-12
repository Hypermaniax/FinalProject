const Listing = require("../../models/listing");
const addListing = require("../../service/Listing/createListing");

const newListingHost = async (req, res) => {
  try {
    console.log(req.file);
    await addListing(req.body, req.file);
    
    res.status(200).json({ message: "succeess full upload" });
  } catch (error) {
    res.status(401).json({ message: "cannot upload" });
  }
};

module.exports = newListingHost;
