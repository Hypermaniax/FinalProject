import sleep from "../assets/sleep.png";

const data = [
  {
    text: "StayNesia is a trusted accommodation provider platform in Indonesia that is here to make your trip easier, whether for a vacation, business trip, or just a short staycation. We present thousands of accommodation options ranging from starred hotels, exclusive villas, to unique homestays spread throughout the country - from big cities to enchanting hidden destinations.",
  },
  {
    text: "With affordable prices, various options to suit every need and budget, and an easy-to-use platform, StayNesia ensures a seamless booking experience for every traveler. Whether you’re looking for a luxury getaway, a cozy spot close to nature, or a simple room in the heart of the city, you’ll find the perfect stay in just a few clicks.",
  },
];

export default function AboutUs() {
  return (
    <>
      <section className="relative mb-60 ">
        <img
          src={sleep}
          alt=""
          className=" shadow-[0px_25px_0px_10px_theme('colors.pink')]  rounded-xl"
        />
        <div className="absolute bottom-64 w-full top-1/2 left-1/2 text-center transform -translate-x-1/2 -translate-y-1/2 ">
          <h1 className="text-8xl font-bold ">
            <span className="text-black">Stay </span>
            <span className="text-pink">Nesia</span>
          </h1>
          <h3 className="mt-5 font-bold text-4xl ">
            Accommodation Provider Platform in Indonesia
          </h3>
        </div>
        <div className="bg-white absolute font-sans text-2xl font-thin w-full -bottom-52 p-5 opacity-90 grid grid-cols-1 gap-5 rounded-xl ">
          {data.map(item=><p>{item.text}</p>)}
        </div>
      </section>
    </>
  );
}
