const Listing = require("../models/listing");

const getAllData = async (id) => {
    return await Listing.find({host : id})
}

module.exports = {getAllData}