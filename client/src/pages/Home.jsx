import Accomodation from "../components/Accomodation";
import Carousel from "../components/Carousel";
import Headline from "../components/Headline";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Headline />
      <Hero>
        <p className="font-OleoScript text-white text-[64px] font-bold">
          INDONESIA
        </p>
      </Hero>
      <div className="flex flex-col items-start gap-2 p-4 bg-gray-900 text-white rounded-xl w-fit"></div>

      <Accomodation
        heading={"ACCOMODATION"}
        title={"Explore Spaces In Indonesia"}
      />
      <Carousel heading={"PROMOTION"} title={"Trendy Space"} text />
    </>
  );
}
