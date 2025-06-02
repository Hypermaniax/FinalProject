const deleteListing = require("../../service/Host/deleteListingService");

const deleteListingId = async (req, res) => {
    try {
        await deleteListing(req.query.id)
    } catch (error) {
        
    }
};

module.exports = deleteListingId;
