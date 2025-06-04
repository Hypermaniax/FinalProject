const { getListingsByPagination } = require("../../repositories/Listing");

const paginationGuest = async (query) => {
  try {
    const {
      page,
      sortBy,
      province,
      city,
      category,
      facility,
      capacity,
      price,
      rating,
      limit,
    } = query;

    const queryObject = {};
    let sorted;

    const location = {
      province,
      city,
    };

    if (location) {
      queryObject.location = { $regex: location, $options: "i" };
    }

    if (category) {
      queryObject.category = { $regex: category, $options: "i" };
    }

    if (facility) {
      queryObject.facility = { $regex: facility, $options: "i" };
    }

    // Sorted By -price(desc) price(asc)
    if (sortBy) {
      sorted = sortBy.split(",").join(" ");
    }

    // Limit for pagination

    const filtered = await getListingsByPagination(
      page,
      limit,
      queryObject,
      sorted
    );
    console.log(filtered);
    
    return filtered;
  } catch (e) {
    throw Error(e);
  }
};

module.exports = { paginationGuest };
