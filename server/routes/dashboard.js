const express = require('express');
const { verifyToken } = require('../middleware/verifyToken');

const router = express.Router()

router.post('/dashboardHost',verifyToken)