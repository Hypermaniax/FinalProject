const { addNewListing } = require("../../repositories/Listing");

const addListing = async (body, file) => {
  const newListing = {
    host: body.id,
    location: {
      province: body.province,
      city: body.city,
    },
    category: body.category,
    title: body.title,
    description: body.description,
    imgUrl: [file.filename],
    facility: body.facilities,
    capacity: body.capacity,
    price: body.price,
  };

  return await addNewListing(newListing);
};
module.exports = addListing;
