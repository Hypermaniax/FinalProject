const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Host } = require("../../db/schema");

const loginHost = async (req, res) => {
    const { username, password } = req.body

    const getData = await Host.findOne({ $or: [{ email: username }, { username: username }] })

    if (!getData) {
        return res.status(404).json("Username or email is not registered");
    }
    const compare = await bcrypt.compare(password, getData.hashPassword)

    if (!compare) {
        return res.status(404).json("Wrong Password");
    }

    const payload = {
        username: getData.username
    }

    const token = jwt.sign(payload, process.env.JWT_TOKEN, { expiresIn: '1h' })
    
    return res.status(200).json({ message: `Welcome Back ${payload.username}`, token })
}

module.exports = { loginHost }