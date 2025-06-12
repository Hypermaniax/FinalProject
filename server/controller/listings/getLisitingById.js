const getListingByidService = require("../../service/Listing/getListingById");

const listingByid = async (req,res) => {
    try {
        const result = await getListingByidService(req.params.id)

        res.status(200).json({result})
    } catch (error) {
        res.status(401).json({error})
    }
}
module.exports = listingByid