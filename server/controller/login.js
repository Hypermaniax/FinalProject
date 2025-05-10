const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { guest } = require('../db/schema');

const login = async (req, res) => {
    const { userLogin, passwordLogin } = req.body

    const getData = await guest.findOne({ $or: [{ email: userLogin }, { userName: userLogin }] })

    if (!getData) {
        return res.status(404).json("Username or email is not registered");
    }

    const compare = await bcrypt.compare(passwordLogin, getData.hashPassword)

    if (!compare) {
        return res.status(404).json("Wrong Password");
    }

    const payload = {
        userName: getData.userName,
        email: getData.email,
        createdAt: getData.createdAt,

    }

    const token = jwt.sign(payload, process.env.JWT_TOKEN, { expiresIn: '5m' })

    return res.status(200).json({ message: `Welcome Back ${payload.userName}`, token })
}

module.exports = { login }