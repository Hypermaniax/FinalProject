import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState, useMemo } from "react";
const data = [
  {
    name: "Ocean Suite",
    place: "Bali, Indonesia",
    rating: 5,
    reviews: 120,
    price_per_night: 350,
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Garden Room",
    place: "Paris, France",
    rating: 4,
    reviews: 98,
    price_per_night: 180,
    img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Penthouse",
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
    name: "Beach Villa",
    place: "Maldives",
    rating: 4,
    reviews: 135,
    price_per_night: 750,
    img: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Mountain Lodge",
    place: "Switzerland",
    rating: 4,
    reviews: 178,
    price_per_night: 250,
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "City Studio",
    place: "London, UK",
    rating: 4,
    reviews: 143,
    price_per_night: 130,
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
];

import pinkArrow from "../assets/icons/pinkArrow.svg";
import UseTopRated from "../hooks/listing/UseTopRated";

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
  const {top} = UseTopRated()
  useEffect(() => {
    setDummy(data);
  }, []);
  // console.log(top)
  const randomRight = useMemo(() => generateRandomClassName(), []);
  const randomLeft = useMemo(() => generateRandomClassName(), []);

  return (
    <section className="text-center mt-8">
      {heading && <h4 className="text-pink text-sm font-bold">{heading}</h4>}
      <h1
        className={`text-2xl md:mb-5 -mb-5 font-bold ${
          text ? "text-center" : "text-start"
        }`}
      >
        {title}
      </h1>

      {/* Container relatif */}
      <div className="relative ">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: `.${randomLeft}`,
            nextEl: `.${randomRight}`,
          }}
          spaceBetween={10}
          slidesPerView={4}
          breakpoints={{
            375: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {!!dummy &&
            dummy.map((item) => (
              <SwiperSlide
                key={item.id}
                className="pt-10 md:pb-0 pb-5 rounded-xl md:-top-5 -top-0 md:mx-0 mx-1"
              >
                <div className="bg-white md:w-full w-40  transition-all cursor-pointer duration-300 ease-in-out hover:translate-y-[-10px] rounded-3xl shadow-[0_8px_10px_-4px_rgba(0,0,0,0.2)] overflow-hidden">
                  <img
                    src={item.img}
                    className="md:w-full object-cover md:h-60 h-28"
                    alt={item.name}
                  />
                  <div className="text-start md:text-base text-sm p-4">
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
          className={`${randomLeft} absolute md:-left-7 left-20  md:top-1/2 -translate-y-1/2   bg-white rounded-full text-pink shadow-2xl z-10`}
        >
          <img
            src={pinkArrow}
            className="md:h-14 h-10 transform -scale-x-100"
            alt=""
          />
        </button>

        {/* Tombol Next di kanan */}
        <button
          className={`${randomRight} absolute md:-right-7  right-20  md:top-1/2 top-2/2 -translate-y-1/2 text-3xl  bg-white rounded-full text-pink shadow-2xl z-10`}
        >
          <img src={pinkArrow} className="md:h-14 h-10 transform " alt="" />
        </button>
      </div>
    </section>
  );
}
