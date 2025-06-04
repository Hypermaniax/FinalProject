const deleteListing = require("../../service/Host/deleteListingService");

const deleteListingId = async (req, res) => {
    try {
        await deleteListing(req.query.id)
        res.status(200).json({message : 'success full Deleting listing'})
    } catch (error) {
        
    }
};

module.exports = deleteListingId;
