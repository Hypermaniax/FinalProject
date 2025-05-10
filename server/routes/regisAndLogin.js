const express = require('express');
const { register } = require('../controller/register');
const { login } = require('../controller/login');
const { verifyToken } = require('../middleware/verifyToken');
const router = express.Router()

router.post('/register', register)
router.post('/login',login)
router.post('/protect',verifyToken,(req,res)=>{
    console.log(req.payload);
    
    res.status(200).json()
})

module.exports = { loginAndRegist: router }