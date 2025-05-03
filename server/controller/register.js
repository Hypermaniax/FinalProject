const bcrypt = require('bcrypt');
const { user } = require('../db/schema');

const register = async (req, res) => {

    try {
        const { fullName, userName, email, password } = req.body;
        const hash = await bcrypt.hash(password, 10);
        console.log(req.body);
        
        const found = await user.exists({ userName: userName, email: email })
        
        
        if (found) {
            console.log(found);
            return res.status(409).json('username or email is already exists');
        }

        await user.create({
            name: fullName, userName: userName, email: email, password: hash
        })


        return res.status(200).json(`Success register in  ${found}`)

    } catch (error) {
        console.log(error);

    }



}

module.exports = { register }