const { paginationGuest } = require("../../service/Guest/PaginationGuestService")

const pagination = async (req,res) => {
    const {page,limit} = req.body

    const pagination = await paginationGuest(page,limit)

    return pagination
}