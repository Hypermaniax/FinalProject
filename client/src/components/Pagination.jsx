import { useState } from "react";
const indonesiaProvinces = [
  { province: "Bali", hotels: 1200 },
  { province: "Jakarta", hotels: 1500 },
  { province: "West Java", hotels: 800 },
  { province: "East Java", hotels: 950 },
  { province: "Yogyakarta", hotels: 600 },
  { province: "North Sumatra", hotels: 350 },
  { province: "South Sulawesi", hotels: 450 },
  { province: "Central Java", hotels: 750 },
  { province: "Aceh", hotels: 200 },
  { province: "Lampung", hotels: 400 },
  { province: "Banten", hotels: 300 },
  { province: "North Sulawesi", hotels: 250 },
  { province: "South Sumatra", hotels: 500 },
  { province: "West Sumatra", hotels: 400 },
  { province: "East Kalimantan", hotels: 250 },
  { province: "West Kalimantan", hotels: 300 },
  { province: "Central Kalimantan", hotels: 200 },
  { province: "North Kalimantan", hotels: 150 },
  { province: "Maluku", hotels: 120 },
  { province: "North Maluku", hotels: 100 },
  { province: "Papua", hotels: 180 },
  { province: "West Papua", hotels: 150 },
  { province: "Gorontalo", hotels: 90 },
  { province: "Sulawesi Tenggara", hotels: 200 },
  { province: "Sulawesi Tengah", hotels: 150 },
  { province: "Nusa Tenggara Barat", hotels: 500 },
  { province: "Nusa Tenggara Timur", hotels: 350 },
  { province: "Jambi", hotels: 180 },
  { province: "Riau", hotels: 250 },
  { province: "Bengkulu", hotels: 150 },
  { province: "Kepulauan Riau", hotels: 200 },
  { province: "Kalimantan Selatan", hotels: 250 },
  { province: "Kalimantan Tengah", hotels: 200 },
  { province: "Kalimantan Barat", hotels: 250 },
];

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);

  const itemPerPage = 8;
  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const item = indonesiaProvinces.slice(startIndex, endIndex);

  return (
    <div>
      <ul>
        {item.map((item, index) => (
          <li>
            <p>
              {item.province}
              {index}
            </p>
          </li>
        ))}
      </ul>
      <div className="w-10 flex justify-between">
        <button
          className="bg-pink p-5 font-semibold  rounded-full"
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          {"<"}
        </button>
        <p className="bg-pink p-5 font-semibold  rounded-full">{currentPage}</p>
        <button
          className="bg-pink p-5 font-semibold rounded-full"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
