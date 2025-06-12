const express = require("express");
const { Guest } = require("./guestRoute");
const { Host } = require("./hostRoute");
const { bookingsRoute } = require("./bookingsRoute");
const { listing } = require("./listingRoute");
const path = require("path");
const dataUser = require("../controller/getUserController");
const router = express.Router();

router.use("/", Guest);
router.use("", listing);
router.use("/", bookingsRoute);
router.use("/", Host);

router.use("/uploads", express.static(path.join(__dirname, "../uploads")));
router.post("/user", dataUser);

module.exports = { router };
