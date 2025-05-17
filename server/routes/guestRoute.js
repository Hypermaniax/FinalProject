const express = require("express");

const loginGuestController = require("../controller/Guest/loginController");
const registerGuestController = require("../controller/Guest/registerController");

const route = express.Router();

route.post("/login-guest", loginGuestController);
route.post("/regist-guest", registerGuestController);

module.exports = { loginGuest: route };
