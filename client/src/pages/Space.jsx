import BookingsCards from "../components/BookingsCards";
import Hero from "../components/Hero";
import Carousel from '../components/Carousel'
import Pagination from "../components/Pagination";
import data from "../jsonFile/hotelAndVilla";
console.log(data.map(item=>item.name));

export default function Spaces() {
  return (
    <>
      <Hero />
      <BookingsCards />
      <Carousel title={'Top Rating Spaces'} />
      <Carousel title={'Most Affordable'} />
      <Pagination data={data}/>
    </>
  );
}
