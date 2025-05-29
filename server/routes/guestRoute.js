const express = require("express");

const loginGuestController = require("../controller/Guest/loginController");
const registerGuestController = require("../controller/Guest/registerController");
const dataUser = require("../controller/getUserController");

const route = express.Router();

route.post('/user',dataUser)

route.post("/login-guest", loginGuestController);
route.post("/regist-guest", registerGuestController);


module.exports = { loginGuest: route };
