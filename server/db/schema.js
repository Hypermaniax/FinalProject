const mongoose = require('mongoose');
const { Schema } = mongoose;

// Guest Schema
const GuestSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    hashPassword: {
        type: String,
        required: true
    },
    imageUrl: String,
    bookings: [{ type: Schema.Types.ObjectId, ref: 'Booking' }],
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
    wishlists: [{ type: Schema.Types.ObjectId, ref: 'Wishlist' }]
}, { timestamps: true });

// Host Schema
const HostSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    hashPassword: {
        type: String,
        required: true
    },
    imageUrl: String,
    listings: [{ type: Schema.Types.ObjectId, ref: 'Listing' }]
}, { timestamps: true });

// Listing Schema
const ListingSchema = new Schema({
    location: {
        province: {
            type: String, required: true
        },
        city: {
            type: String, required: true
        },

    },
    category: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imgUrl: {
        type: [String],
        required: true
    },
    facility: {
        type: [String],
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    bookings: [{ type: Schema.Types.ObjectId, ref: 'Booking' }],
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
    wishlists: [{ type: Schema.Types.ObjectId, ref: 'Wishlist' }]
}, { timestamps: true });



// Booking Schema
const BookingSchema = new Schema({
    guestId: { type: Schema.Types.ObjectId, ref: 'Guest' },
    listingId: { type: Schema.Types.ObjectId, ref: 'Listing' },
    checkIn: {
        type: Date,
        required: true
    },
    checkOut: {
        type: Date,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    status: String,
    payment: [{ type: Schema.Types.ObjectId, ref: 'Payment' }]
}, { timestamps: true });

// Payment Schema
const PaymentSchema = new Schema({
    bookingId: { type: Schema.Types.ObjectId, ref: 'Booking' },
    paymentMethod: {
        type: Number,
        required: true
    },
    paymentStatus: String,
    amount: {
        type: Number,
        required: true
    },
    paidAt: {
        type: Number
    }
}, { timestamps: true });

// Review Schema
const ReviewSchema = new Schema({
    guestId: { type: Schema.Types.ObjectId, ref: 'Guest' },
    listingId: { type: Schema.Types.ObjectId, ref: 'Listing' },
    rating: Number,
    reviews: String
}, { timestamps: true });

// Wishlist Schema
const WishlistSchema = new Schema({
    guestId: { type: Schema.Types.ObjectId, ref: 'Guest' },
    listingId: { type: Schema.Types.ObjectId, ref: 'Listing' }
}, { timestamps: true });


const Guest = mongoose.model('Guest', GuestSchema);
const Host = mongoose.model('Host', HostSchema);
const Listing = mongoose.model('Listing', ListingSchema);
const Booking = mongoose.model('Booking', BookingSchema);
const Payment = mongoose.model('Payment', PaymentSchema);
const Review = mongoose.model('Review', ReviewSchema);
const Wishlist = mongoose.model('Wishlist', WishlistSchema);


module.exports = {
    Guest,
    Host,
    Listing,
    Booking,
    Payment,
    Review,
    Wishlist
};