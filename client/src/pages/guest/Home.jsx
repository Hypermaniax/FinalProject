import Accomodation from "../../ui/Accomodation";
import Carousel from "../../ui/Carousel";
import Headline from "../../ui/Headline";
import Hero from "../../ui/Hero";
import WrapperContent from "../../ui/WrapperContent";
import Ordering from "./Ordering";
export default function Home() {
  return (
    <>
      <WrapperContent>
        <Headline />
      </WrapperContent>
      <Hero>
        <p className="font-OleoScript text-white text-[64px] font-bold">
          INDONESIA
        </p>
      </Hero>
      <WrapperContent>
        <Accomodation
          heading={"ACCOMODATION"}
          title={"Explore Spaces In Indonesia"}
        />
        <Carousel heading={"PROMOTION"} title={"Trendy Space"} text />
      </WrapperContent>
    </>
  );
}
