const express = require('express');
const { loginGuest } = require('./guestRoute');
const { registerHost } = require('./hostRoute');
const router = express.Router()


router.use('/',loginGuest)
router.use('/',registerHost)

module.exports={router}