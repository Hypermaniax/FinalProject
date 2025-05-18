const Listing = require("../models/listing");

const getAllData = async (id) => {
    return await Listing.find({host : id})
}

const Pagination = async (page) => {
    return await Listing.find().limit(page)
}

module.exports = {getAllData}