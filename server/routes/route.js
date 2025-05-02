const express = require('express');
const { loginAndRegist } = require('./regisAndLogin');

const router = express.Router()

router.use('/',loginAndRegist)

module.exports={router}