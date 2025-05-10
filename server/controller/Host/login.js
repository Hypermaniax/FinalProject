const { Host } = require("../../db/schema");

const loginHost = async (req, res) => {
    const { username, password } = req.body

    const getData = await Host.findOne({ $or: [{ email: username }, { username: username }] })

    return res.json(getData)
}

module.exports = { loginHost }