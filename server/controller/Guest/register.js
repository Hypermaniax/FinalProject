const bcrypt = require('bcrypt');
const { Guest } = require('../../db/schema');

const register = async (req, res) => {

    try {
        const { name, username, email, password } = req.body;
        const hash = await bcrypt.hash(password, 10);
        console.log(username);
        
        const exist = await Guest.exists({ username: username, email: email })

        if (exist) {
            return res.status(409).json('username or email is already exists');
        }

        await Guest.create({
            name: name, username: username, email: email, hashPassword: hash
        })

        return res.status(200).json(`Successfully registered as ${username}`)

    } catch (error) {
        console.log(error);

    }

}

module.exports = { register }