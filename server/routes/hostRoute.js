const express = require("express");
const registHostController = require("../controller/Host/registerHostController");
const loginHostController = require("../controller/Host/loginControllerHost");
const { verifyToken } = require("../middleware/verifyToken");


const route = express.Router();

route.post("/regist-host", registHostController);
route.post("/login-host", loginHostController);


module.exports = { Host: route };
