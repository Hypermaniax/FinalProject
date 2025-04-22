import { useEffect, useState } from "react";
import monas from '../assets/Monas.png'
const indonesiaProvinces = [
  { province: "Bali", hotels: 1200 },
  { province: "Jakarta", hotels: 1500 },
  { province: "West Java", hotels: 800 },
  { province: "East Java", hotels: 950 },
  { province: "Yogyakarta", hotels: 600 },
  { province: "North Sumatra", hotels: 350 },
  { province: "South Sulawesi", hotels: 450 },
  { province: "Central Java", hotels: 750 },
];

export default function Card({ data }) {
  return (
    <>
      {data.map((item, index) => (
        <div
          className="relative h-60 rounded-xl overflow-hidden shadow-md w-full bg-pink"
          key={index}
        >
          <img
              src={monas}
              className="w-full object-cover"
              alt="Monas"
            />
          <div className="absolute bottom-2 left-2 right-2 text-black text-sm font-semibold flex justify-between ">
            <p>{item.province}</p>
            <p>{item.hotels}</p>
          </div>
        </div>
      ))}
    </>
  );
}
