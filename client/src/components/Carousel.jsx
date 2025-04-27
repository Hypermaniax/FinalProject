import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState, useMemo } from "react";
const data = [
  {
    name: "Luxury Ocean View Suite",
    place: "Bali, Indonesia",
    rating: 5,
    reviews: 120,
    price_per_night: 350,
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Garden View Room",
    place: "Paris, France",
    rating: 4,
    reviews: 98,
    price_per_night: 180,
    img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Skyline Penthouse",
    place: "New York, USA",
    rating: 5,
    reviews: 215,
    price_per_night: 500,
    img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Economy Room",
    place: "Tokyo, Japan",
    rating: 3,
    reviews: 74,
    price_per_night: 90,
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Beachfront Villa",
    place: "Maldives",
    rating: 4,
    reviews: 135,
    price_per_night: 750,
    img: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Mountain View Lodge",
    place: "Swiss Alps, Switzerland",
    rating: 4,
    reviews: 178,
    price_per_night: 250,
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Cozy City Studio",
    place: "London, UK",
    rating: 4,
    reviews: 143,
    price_per_night: 130,
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
];
import pinkArrow from "../assets/icons/pinkArrow.svg";

function generateRandomClassName(length = 8, prefix = "cls-") {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let className = prefix;
  for (let i = 0; i < length; i++) {
    className += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return className;
}
export default function Carousel({ heading, title, text }) {
  const [dummy, setDummy] = useState();

  useEffect(() => {
    setDummy(data);
  }, []);

  const randomRight = useMemo(() => generateRandomClassName(), []);
  const randomLeft = useMemo(() => generateRandomClassName(), []);

  return (
    <section className="text-center mt-8">
      {heading && <h4 className="text-pink text-sm font-bold">{heading}</h4>}
      <h1
        className={`text-2xl mb-5 font-bold ${
          text ? "text-center" : "text-start"
        }`}
      >
        {title}
      </h1>

      {/* Container relatif */}
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: `.${randomLeft}`,
            nextEl: `.${randomRight}`,
          }}
          spaceBetween={10}
          slidesPerView={4}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {!!dummy &&
            dummy.map((item) => (
              <SwiperSlide
                key={item.id}
                className="pt-10 rounded-xl  -top-5"
              >
                <div className="bg-white transition-all cursor-pointer duration-300 ease-in-out hover:translate-y-[-10px] rounded-3xl shadow-[0_8px_10px_-4px_rgba(0,0,0,0.2)] overflow-hidden">
                  <img
                    src={item.img}
                    className="w-full object-cover h-60"
                    alt={item.name}
                  />
                  <div className="text-start p-4">
                    <p>{item.name}</p>
                    <p>{item.place}</p>
                    <p>⭐{item.rating}</p>
                    <p>Rp.{item.price_per_night}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>

        {/* Tombol Prev di kiri */}
        <button
          className={`${randomLeft} absolute -left-7 top-1/2 -translate-y-1/2  bg-white rounded-full text-pink shadow-2xl z-10`}
        >
          <img src={pinkArrow} className="h-14 transform -scale-x-100" alt="" />
        </button>

        {/* Tombol Next di kanan */}
        <button
          className={`${randomRight} absolute -right-7 top-1/2 -translate-y-1/2 text-3xl  bg-white rounded-full text-pink shadow-2xl z-10`}
        >
          <img src={pinkArrow} className="h-14 transform " alt="" />
        </button>
      </div>
    </section>
  );
}
