const express = require("express");

const loginGuestController = require("../controller/Guest/loginController");
const registerGuestController = require("../controller/Guest/registerController");
const dataUser = require("../controller/getUserController");
const allDataListinghost = require("../controller/Guest/listingDataController");
const pagination = require("../controller/Guest/PaginatioController");

const route = express.Router();

route.post('/user',dataUser)

route.get('/listing-data',allDataListinghost)
route.post("/login-guest", loginGuestController);
route.post("/regist-guest", registerGuestController);
route.get('/space',pagination)


module.exports = { loginGuest: route };
