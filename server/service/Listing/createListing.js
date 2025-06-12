const { addNewListing } = require("../../repositories/Listing");

const addListing = async (body, file) => {
  const numericPrice = Number(body.price.replace(/\./g, ""));
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
    price: numericPrice,
  };

  return await addNewListing(newListing);
};
module.exports = addListing;
