import Accomodation from "../components/Accomodation";
import Carousel from "../components/Carousel";
import Headline from "../components/Headline";
import Hero from "../components/Hero";
import HowItsWorks from "../components/HowItsWorks";

export default function Home() {
  return (
    <>
      <Headline />
      <HowItsWorks />
      <Hero>
        <p className="font-OleoScript text-white text-[64px] font-bold">INDONESIA</p>
      </Hero>
      <Accomodation heading={'ACCOMODATION'} title={'Explore Spaces In Indonesia'}/>
      <Accomodation heading={'PROMOTION'} title={'Trendy Spaces'}/>
      <Carousel/>
    </>
  );
}
