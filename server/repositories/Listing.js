const Listing = require("../models/listing");

const getAllData = async (id) => {
  return await Listing.find({ host: id });
};

const Pagination = async (page) => {
  return await Listing.find().limit(page);
};

const addNewListing = async (params) => {
  const listing = new Listing(params);

  return await listing.save();
};

const deleteListingById = async (id) => {
  return await Listing.findByIdAndDelete(id);
};

const getListing = async () => {
  return await Listing.find({});
};

const getListingsWithRating = async () => {
  const result = await Listing.aggregate([
    {
      $lookup: {
        from: "reviews",
        localField: "_id",
        foreignField: "listing",
        as: "reviews",
      },
    },
    {
      $addFields: {
        avgRating: { $avg: "$reviews.rating" },
        totalRating: { $size: "$reviews" },
      },
    },
  ]);
  return result;
};

const getListingsByPagination = async (page, limit, query, sortBy) => {
  const skip = (page - 1) * limit;

  // Query Logic
  const listing = await Listing.find()
    .populate([{ path: "host", select: ["username", "imageUrl"] }])
    .sort(sortBy)
    .skip(skip)
    .limit(limit);

  // Pagination Logic
  const total = await Listing.countDocuments();
  const totalPages = Math.ceil(total / limit);

  return {
    data: listing,
    currentPage: page,
    totalPages: totalPages,
    totalItems: total,
  };
};

module.exports = {
  getAllData,
  addNewListing,
  deleteListingById,
  getListing,
  getListingsByPagination,
  getListingsWithRating,
};
