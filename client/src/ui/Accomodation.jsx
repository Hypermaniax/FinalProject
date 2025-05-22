import Card from "./Card";

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

export default function Accomodation({ heading, title }) {
  return (
    <section className="text-center mt-24 mb-24">
      <div className="flex flex-col  items-center">
        <h4 className="text-pink text-sm w-64  font-bold">{heading}</h4>
        <h1 className="text-3xl mb-10 w-64  font-bold">{title}</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center">
        <Card data={indonesiaProvinces} />
      </div>
    </section>
  );
}