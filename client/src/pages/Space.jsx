import BookingsCards from "../components/BookingsCards";
import Hero from "../components/Hero";
import Carousel from '../components/Carousel'
import Pagination from "../components/Pagination";

export default function Spaces() {
  return (
    <>
      <Hero />
      <BookingsCards />
      <Carousel title={'Top Rating Spaces'} />
      <Carousel title={'Most Affordable'} />
      <Pagination/>
    </>
  );
}
