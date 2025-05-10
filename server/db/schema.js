const mongoose = require('mongoose');
const { Schema } = mongoose;
// Guest Schema
const GuestSchema = new Schema({
    name: String,
    userName: { type: String, unique: true },
    email: {
        type: String,
        unique: true,
        sparse: true
    },
    hashPassword: String,
    imageUrl: String,
    bookings: [{ type: Schema.Types.ObjectId, ref: 'Booking' }],
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
    wishlists: [{ type: Schema.Types.ObjectId, ref: 'Wishlist' }]
}, { timestamps: true });

// Host Schema
const HostSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        sparse: true
    },
    hashPassword: String,
    imageUrl: String,
    ratings: Number,
    review: Number,
    listings: [{ type: Schema.Types.ObjectId, ref: 'Listing' }]
}, { timestamps: true });

// Listing Schema
const ListingSchema = new Schema({
    hostId: { type: Schema.Types.ObjectId, ref: 'Host' },
    province: String,
    city: String,
    category: String,
    title: String,
    description: {
        type: String,
        required: true
    },
    imgUrl: [String],
    facility: [String],
    maxGuest: Schema.Types.Mixed, // BigInt alternative
    numBedroom: Number,
    numBathroom: Number,
    price: Schema.Types.Mixed, // BigInt alternative
    ratingCount: Number,
    soldCount: Number,
    bookings: [{ type: Schema.Types.ObjectId, ref: 'Booking' }],
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
    wishlists: [{ type: Schema.Types.ObjectId, ref: 'Wishlist' }]
}, { timestamps: true });

// Booking Schema
const BookingSchema = new Schema({
    guestId: { type: Schema.Types.ObjectId, ref: 'Guest' },
    listingId: { type: Schema.Types.ObjectId, ref: 'Listing' },
    checkIn: Date,
    checkOut: Date,
    totalPrice: Schema.Types.Mixed,
    status: String,
    payment: [{ type: Schema.Types.ObjectId, ref: 'Payment' }]
}, { timestamps: true });

// Payment Schema
const PaymentSchema = new Schema({
    bookingId: { type: Schema.Types.ObjectId, ref: 'Booking' },
    paymentMethod: String,
    paymentStatus: String,
    amount: Schema.Types.Mixed,
    paidAt: Date
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


const guest = mongoose.model('User', GuestSchema)

module.exports = { guest }