const bcrypt = require('bcrypt');
const { guest } = require('../db/schema');

const register = async (req, res) => {

    try {
        const { fullName, userName, email, password } = req.body;
        const hash = await bcrypt.hash(password, 10);

        const found = await guest.exists({ userName: userName, email: email })

        if (found) {
            return res.status(409).json('username or email is already exists');
        }

        await guest.create({
            name: fullName, userName: userName, email: email, hashPassword: hash
        })

        return res.status(200).json(`Successfully registered as ${userName}`)

    } catch (error) {
        console.log(error);

    }

}

module.exports = { register }