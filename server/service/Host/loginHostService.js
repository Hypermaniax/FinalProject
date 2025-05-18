const { findEmailOrUsername } = require("../../repositories/hostRepo");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Listing = require("../../models/listing");

// const file = [
//   {
//     location: { province: "Jawa Barat", city: "Garut" },
//     category: "Villa",
//     title: "Villa Pemandian Air Panas Garut",
//     description: "Villa nyaman dengan pemandangan gunung dan air panas alami.",
//     imgUrl: [
//       "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
//     ],
//     facility: ["Kolam Renang", "Dapur", "AC"],
//     capacity: 5,
//     price: 845000,
//     host: "68288c0b1dbeae21b9cf1675",
//     bookings: [],
//     reviews: [],
//     wishlists: [],
//   },
//   {
//     location: { province: "Jawa Tengah", city: "Magelang" },
//     category: "Penginapan",
//     title: "Penginapan Borobudur View",
//     description: "Terletak dekat Candi Borobudur dengan nuansa budaya Jawa.",
//     imgUrl: [
//       "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
//     ],
//     facility: ["Sarapan", "TV", "Parkir"],
//     capacity: 6,
//     price: 670000,
//     host: "68288c0b1dbeae21b9cf1675",
//     bookings: [],
//     reviews: [],
//     wishlists: [],
//   },
//   {
//     location: { province: "Sumatera Utara", city: "Parapat" },
//     category: "Hotel",
//     title: "Hotel Danau Toba Indah",
//     description: "Hotel tepi danau dengan panorama Danau Toba yang memesona.",
//     imgUrl: [
//       "https://images.pexels.com/photos/261395/pexels-photo-261395.jpeg",
//     ],
//     facility: ["WiFi", "Sarapan", "AC"],
//     capacity: 7,
//     price: 925000,
//     host: "68288c0b1dbeae21b9cf1675",
//     bookings: [],
//     reviews: [],
//     wishlists: [],
//   },
//   {
//     location: { province: "Kalimantan Barat", city: "Singkawang" },
//     category: "Resort",
//     title: "Resort Pantai Pasir Panjang",
//     description: "Liburan tropis terbaik di tepi pantai Kalimantan Barat.",
//     imgUrl: [
//       "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
//     ],
//     facility: ["Kolam Renang", "WiFi", "AC"],
//     capacity: 8,
//     price: 1120000,
//     host: "68288c0b1dbeae21b9cf1675",
//     bookings: [],
//     reviews: [],
//     wishlists: [],
//   },
//   {
//     location: { province: "NTB", city: "Mataram" },
//     category: "Penginapan",
//     title: "Guest House Mataram Timur",
//     description: "Penginapan murah dan nyaman di pusat kota Mataram.",
//     imgUrl: [
//       "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg",
//     ],
//     facility: ["AC", "Parkir", "Dapur"],
//     capacity: 4,
//     price: 540000,
//     host: "68288c0b1dbeae21b9cf1675",
//     bookings: [],
//     reviews: [],
//     wishlists: [],
//   },
//   {
//     location: { province: "Maluku", city: "Ambon" },
//     category: "Hotel",
//     title: "Hotel Pelabuhan Ambon",
//     description: "Hotel strategis dekat pelabuhan dan pusat kota Ambon.",
//     imgUrl: [
//       "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
//     ],
//     facility: ["TV", "WiFi", "Parkir"],
//     capacity: 6,
//     price: 789000,
//     host: "68288c0b1dbeae21b9cf1675",
//     bookings: [],
//     reviews: [],
//     wishlists: [],
//   },
//   {
//     location: { province: "Papua Barat", city: "Manokwari" },
//     category: "Resort",
//     title: "Resort Laut Manokwari",
//     description: "Pemandangan laut yang indah dan fasilitas snorkeling.",
//     imgUrl: [
//       "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
//     ],
//     facility: ["Kolam Renang", "WiFi", "Sarapan"],
//     capacity: 9,
//     price: 1195000,
//     host: "68288c0b1dbeae21b9cf1675",
//     bookings: [],
//     reviews: [],
//     wishlists: [],
//   },
//   {
//     location: { province: "Jawa Timur", city: "Banyuwangi" },
//     category: "Villa",
//     title: "Villa Gunung Ijen",
//     description: "Villa eksklusif dekat Kawah Ijen, cocok untuk pendaki.",
//     imgUrl: [
//       "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
//     ],
//     facility: ["AC", "Dapur", "Parkir"],
//     capacity: 5,
//     price: 865000,
//     host: "68288c5d1dbeae21b9cf1678",
//     bookings: [],
//     reviews: [],
//     wishlists: [],
//   },
//   {
//     location: { province: "Bali", city: "Kuta" },
//     category: "Hotel",
//     title: "Hotel Sunset Beach",
//     description: "Hotel mewah dengan akses langsung ke pantai Kuta.",
//     imgUrl: [
//       "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
//     ],
//     facility: ["Kolam Renang", "WiFi", "AC"],
//     capacity: 10,
//     price: 1350000,
//     host: "68288c5d1dbeae21b9cf1678",
//     bookings: [],
//     reviews: [],
//     wishlists: [],
//   },
//   {
//     location: { province: "Jawa Tengah", city: "Solo" },
//     category: "Penginapan",
//     title: "Penginapan Laweyan",
//     description: "Tempat tenang dengan nuansa heritage batik Solo.",
//     imgUrl: [
//       "https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg",
//     ],
//     facility: ["Sarapan", "TV", "AC"],
//     capacity: 4,
//     price: 580000,
//     host: "68288c5d1dbeae21b9cf1678",
//     bookings: [],
//     reviews: [],
//     wishlists: [],
//   },
//   {
//     location: { province: "Kalimantan Tengah", city: "Palangkaraya" },
//     category: "Hotel",
//     title: "Hotel Sungai Kahayan",
//     description: "Hotel pinggir sungai dengan pemandangan alam Kalimantan.",
//     imgUrl: [
//       "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
//     ],
//     facility: ["AC", "WiFi", "Dapur"],
//     capacity: 7,
//     price: 910000,
//     host: "68288c5d1dbeae21b9cf1678",
//     bookings: [],
//     reviews: [],
//     wishlists: [],
//   },
//   {
//     location: { province: "Sumatera Barat", city: "Padang" },
//     category: "Resort",
//     title: "Resort Pantai Padang",
//     description: "Resort pinggir pantai dengan masakan khas Minang.",
//     imgUrl: [
//       "https://images.pexels.com/photos/261395/pexels-photo-261395.jpeg",
//     ],
//     facility: ["Kolam Renang", "Sarapan", "Parkir"],
//     capacity: 8,
//     price: 1040000,
//     host: "68288c5d1dbeae21b9cf1678",
//     bookings: [],
//     reviews: [],
//     wishlists: [],
//   },
//   {
//     location: { province: "NTT", city: "Ende" },
//     category: "Penginapan",
//     title: "Guesthouse Kelimutu View",
//     description: "Penginapan sederhana dengan pemandangan gunung Kelimutu.",
//     imgUrl: [
//       "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg",
//     ],
//     facility: ["TV", "Parkir", "AC"],
//     capacity: 3,
//     price: 475000,
//     host: "68288c5d1dbeae21b9cf1678",
//     bookings: [],
//     reviews: [],
//     wishlists: [],
//   },
//   {
//     location: { province: "Sulawesi Utara", city: "Tomohon" },
//     category: "Villa",
//     title: "Villa Danau Linow",
//     description: "Villa damai dekat Danau Linow, cocok untuk staycation.",
//     imgUrl: [
//       "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
//     ],
//     facility: ["WiFi", "Sarapan", "Parkir"],
//     capacity: 6,
//     price: 930000,
//     host: "68288c5d1dbeae21b9cf1678",
//     bookings: [],
//     reviews: [],
//     wishlists: [],
//   },
// ];

const loginHostService = async (username, password) => {
  
  const host = await findEmailOrUsername(username);


  const isMatch = await bcrypt.hash(password, host.hashPassword);

  if (!isMatch) throw Error("Wrong Password");

  const token = jwt.sign({ id: host._id }, process.env.JWT_TOKEN, {
    expiresIn: "24h",
  });

  return { token };
};

module.exports = { loginHostService };
