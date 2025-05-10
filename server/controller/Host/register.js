const { Host } = require("../../db/schema");
const bcrypt = require('bcrypt');

const hostRegister = async (req, res) => {
    try {
        const { username, name, email, password } = req.body
        console.log(username);

        const hash = await bcrypt.hash(password, 10)

        const exist = await Host.exists({ username: username, email: email })

        if (exist) {
            return res.status(409).json('username or email is already exists');
        }

        await Host.create({
            username: username, name: name, email: email, hashPassword: hash
        })

        return res.send(name, email, password)

    } catch (error) {
        return res.status(404).json(error)
    }
}
module.exports = { hostRegister }