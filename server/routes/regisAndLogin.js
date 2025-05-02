const express = require('express');
const { register } = require('../controller/register');
const router = express.Router()

router.post('/register',register)

module.exports = {loginAndRegist : router}