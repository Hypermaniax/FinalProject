const express = require('express');
const createBookings = require('../controller/bookings/bookingsCreate');

const route = express.Router()

route.post('/create-bookings',createBookings)

module.exports = {bookingsRoute : route}