const express = require("express");
const listingByid = require("../controller/listings/getLisitingById");
const deleteListing = require("../controller/listings/listingDeleteController");
const dataListingHost = require("../controller/listings/getListingHost");
const newListingHost = require("../controller/listings/listingAddController");
const pagination = require("../controller/Guest/PaginatioController");
const allDataListingGuest = require("../controller/listings/getAllDataListingGuest");

const upload = require("../middleware/multer");
const route = express.Router();

route.get("/spaces/:id", listingByid);
route.delete("/delete-listing", deleteListing);
route.post("/listing-host", dataListingHost);
route.get("/space", pagination);
route.get("/listing-data", allDataListingGuest);
route.post("/new-listing", upload.single("photo"), newListingHost);

module.exports = { listing: route };
