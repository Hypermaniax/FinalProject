const express = require("express");
const registHostController = require("../controller/Host/registerHostController");
const loginHostController = require("../controller/Host/loginControllerHost");
const dataListingHost = require("../controller/Host/listingDataController");
const newListingHost = require("../controller/Host/listingAddController");
const upload = require("../middleware/multer");
const { verifyToken } = require("../middleware/verifyToken");
const path = require("path");
const deleteListing = require("../controller/Host/listingDeleteController");

const route = express.Router();

route.post("/regist-host", registHostController);
route.post("/login-host", loginHostController);
route.post("/listing-host", dataListingHost);
route.delete('/delete-listing',deleteListing)
route.use("/uploads", express.static(path.join(__dirname, "../uploads")));
route.post("/new-listing", upload.single("photo"), newListingHost);

module.exports = { registerHost: route };
