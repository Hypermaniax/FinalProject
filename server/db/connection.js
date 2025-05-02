const mongoose = require('mongoose');

const connection = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL)
    } catch (error) {
        console.error('MongoDB connection error:', err.message);
        process.exit(1); // Exit process on failure
    }
}

module.exports = {connection}