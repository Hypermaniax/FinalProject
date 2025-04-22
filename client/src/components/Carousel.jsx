import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState,useMemo } from "react";
const hotelRooms = [
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    rating: "⭐⭐⭐⭐⭐",
    booked: 120,
    name: "Luxury Ocean View Suite",
    description: "A beautiful suite with panoramic ocean views and luxurious amenities.",
    location: "Bali, Indonesia",
    price: 350, // per night
    type: "Suite",
    amenities: ["King Bed", "Private Balcony", "Ocean View", "Free Wi-Fi"],
  },
  {
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
    rating: "⭐⭐⭐⭐",
    booked: 98,
    name: "Garden View Room",
    description: "A cozy room overlooking the lush garden, perfect for a relaxing stay.",
    location: "Paris, France",
    price: 180, // per night
    type: "Standard Room",
    amenities: ["Queen Bed", "Garden View", "Free Wi-Fi", "Mini Bar"],
  },
  {
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80",
    rating: "⭐⭐⭐⭐⭐",
    booked: 215,
    name: "Skyline Penthouse",
    description: "Enjoy the city skyline from this luxurious penthouse with a rooftop jacuzzi.",
    location: "New York, USA",
    price: 500, // per night
    type: "Penthouse",
    amenities: ["King Bed", "Rooftop Jacuzzi", "City View", "Free Wi-Fi", "Private Elevator"],
  },
  {
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80", // 1
    rating: "⭐⭐⭐",
    booked: 74,
    name: "Economy Room",
    description: "A budget-friendly room with all the essentials for a comfortable stay.",
    location: "Tokyo, Japan",
    price: 90, // per night
    type: "Standard Room",
    amenities: ["Single Bed", "Free Wi-Fi", "Air Conditioning"],
  },
  {
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80",
    rating: "⭐⭐⭐⭐",
    booked: 135,
    name: "Beachfront Villa",
    description: "A private villa just steps away from the beach, perfect for a romantic getaway.",
    location: "Maldives",
    price: 750, // per night
    type: "Villa",
    amenities: ["King Bed", "Private Pool", "Beach Access", "Free Wi-Fi"],
  },
  {
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    rating: "⭐⭐⭐⭐",
    booked: 178,
    name: "Mountain View Lodge",
    description: "A tranquil lodge located in the mountains, ideal for nature lovers.",
    location: "Swiss Alps, Switzerland",
    price: 250, // per night
    type: "Lodge",
    amenities: ["Queen Bed", "Mountain View", "Hiking Trails", "Free Wi-Fi"],
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    rating: "⭐⭐⭐⭐",
    booked: 143,
    name: "Cozy City Studio",
    description: "A modern studio apartment in the heart of the city, perfect for short stays.",
    location: "London, UK",
    price: 130, // per night
    type: "Studio",
    amenities: ["Double Bed", "City View", "Free Wi-Fi", "Fully Equipped Kitchen"],
  },
];

function generateRandomClassName(length = 8, prefix = 'cls-') {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let className = prefix;
  for (let i = 0; i < length; i++) {
    className += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return className;
}
export default function Carousel({ heading, title }) {
  const [dummy,setDummy] = useState()
  
  useEffect(()=>{
    setDummy(hotelRooms)
  },[])

  const randomRight = useMemo(() => generateRandomClassName(), []);
  const randomLeft = useMemo(() => generateRandomClassName(), []);


  
  return (
    <section className="text-center mt-24">
      {heading && <h4 className="text-pink text-sm font-bold">{heading}</h4>}
      <h1 className="text-2xl mb-10 font-bold">{title}</h1>
      <div className=" justify-items-center">
        <div className="flex justify-end items-center -mx-10 mb-4">
          <button className={`${randomLeft} text-3xl px-3 py-2 bg-gray-200 rounded-full bg-white text-pink  -mr-5 relative z-20 shadow-2xl`}>
            {"<"}
          </button>
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: `.${randomLeft}`,
              nextEl: `.${randomRight}`,
            }}
            spaceBetween={20}
            slidesPerView={4}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {!!dummy && dummy.map(item=>(<SwiperSlide>
              <div className="bg-white">
                <img
                  src={item.image}
                  className="w-full h-full object-cover"
                  alt="Monas"
                />
                <div className="text-start">
                  <p className="text-start font-bold">Name : {item.name} </p>
                  <p className="text-start font-bold">Location : {item.location} </p>
                  <p className="text-start font-bold">Price : {item.price}$ </p>
                  <p className="text-start font-bold">Type : {item.type} </p>
                </div>
              </div>
            </SwiperSlide>))}
          </Swiper>
          <button className={`${randomRight} text-3xl px-3 py-2 bg-gray-200 rounded-full bg-white  -ml-5 relative z-20  text-pink shadow-2xl`}>
            {">"}
          </button>
        </div>
      </div>
    </section>
  );
}
