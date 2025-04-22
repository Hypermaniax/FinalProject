import BookingsCards from "../components/BookingsCards";
import Hero from "../components/Hero";
import Carousel from '../components/Carousel'
import Pagination from "../components/Pagination";
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
export default function Spaces() {
  return (
    <>
      <Hero />
      <BookingsCards />
      <Carousel title={'Top Rating Spaces'} />
      <Carousel title={'Most Affordable'} />
      <Pagination data={indonesiaProvinces}/>
    </>
  );
}
