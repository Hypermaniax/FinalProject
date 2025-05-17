import Accomodation from "../../ui/Accomodation";
import Carousel from "../../ui/Carousel";
import Headline from "../../ui/Headline";
import Hero from "../../ui/Hero";

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
