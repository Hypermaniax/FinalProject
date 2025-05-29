const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {

    const token = req.header('Authorization')

    if (!token) return res.status(403).json('Acces denied')
    try {
        const decode = jwt.verify(token, process.env.JWT_TOKEN)
        req.payload = decode
        
        next()
    } catch (error) {
        res.status(401).json('Invalid token')
    }
}

module.exports = {verifyToken}