import { useEffect, useState } from "react";
import monas from "../assets/Monas.png";
import damn from "../assets/spongebob.jpeg";
import logo1 from "../assets/logosn1.png";
import logo2 from "../assets/logosn2.png";
import host from "../assets/hostIMG.png";
import "swiper/css";
import "swiper/css/autoplay";

// Example: 10 images (repeat or replace as needed)
const images = [damn, monas, damn, logo1, host, damn, logo2, damn, monas, damn];

export default function GridSwiper({ imgUrl }) {
  const [startIndex, setStartIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Start fade out
      setFade(false);

      setTimeout(() => {
        // Move to next image set
        setStartIndex((prev) => (prev + 1) % images.length);
        setFade(true); // Start fade in
      }, 200); // fade-out duration
    }, 3000); // interval

    return () => clearInterval(interval);
  }, []);

  const getImage = (offset) => {
    return imgUrl[(startIndex + offset) % imgUrl.length];
  };

  const fadeClass = fade
    ? "opacity-100 transition-opacity duration-300 ease-in"
    : "opacity-0 transition-opacity duration-200 ease-out";

  return (
    <div className=" mx-auto mt-10 grid grid-cols-3 gap-2 ">
      {/* Gambar besar */}
      <div className="col-span-2 aspect-video">
        <img
          key={`large-${getImage(0)}`}
          src={`${import.meta.env.VITE_API_URL_LISTING_IMG}${getImage(0)}.jpg`}
          alt="Large"
          className={`w-full h-full object-cover rounded-lg ${fadeClass}`}
        />
      </div>

      {/* Gambar kecil */}
      <div className="grid grid-cols-2 gap-1 ">
        {[1, 2, 3, 4].map((offset, idx) => (
          <div
            key={`small-${getImage(offset)}-${idx}`}
            className="w-full aspect-square h-full"
          >
            <img
              src={`${import.meta.env.VITE_API_URL_LISTING_IMG}${getImage(
                offset
              )}.jpg`}
              alt={`Small ${idx + 1}`}
              className={`w-full h-full object-cover rounded-lg ${fadeClass}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
