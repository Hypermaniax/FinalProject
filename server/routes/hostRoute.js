const express = require("express");
const registHostController = require("../controller/Host/registerHostController");
const loginHostController = require("../controller/Host/loginControllerHost");
const dataListingHost = require("../controller/Host/listingController");
const { verifyToken } = require("../middleware/verifyToken");

const route = express.Router();

route.post("/regist-host", registHostController);
route.post("/login-host", loginHostController);
route.post('/listing-host',dataListingHost)

module.exports = { registerHost: route };
