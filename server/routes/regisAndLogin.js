const express = require('express');
const { register } = require('../controller/Guest/register');
const { login } = require('../controller/Guest/login');
const { verifyToken } = require('../middleware/verifyToken');
const { hostRegister } = require('../controller/Host/register');
const { loginHost } = require('../controller/Host/login');
const router = express.Router()

router.post('/register', register)
router.post('/registerHost', hostRegister)
router.post('/login', login)
router.post('/loginHost', loginHost)

// check token jwt
router.post('/protect', verifyToken, (req, res) => {

})

module.exports = { loginAndRegist: router }