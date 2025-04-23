import { useEffect, useState } from "react";
import monas from "../assets/Monas.png";

export default function Card({ data }) {
  console.log(data);
  
  return (
    <>
      {data.map((item, index) => (
        <div
          className="relative h-60 rounded-xl overflow-hidden shadow-md w-full bg-pink"
          key={index}
        >
          <img src={monas} className="object-contain" alt="Monas" />
          <div className="absolute bottom-2 left-2 right-2 text-black text-sm font-semibold flex justify-between ">
            <p>{item.province}</p>
            <p>{item.hotels}</p>
          </div>
        </div>
      ))}
    </>
  );
}
