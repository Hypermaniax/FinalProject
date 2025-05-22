import { useState } from "react";
import Hero from "../../ui/Hero";
import NabarSupport from "../../ui/NavbarSupport";
import CardSupport from "../../ui/CardSupport";
import AboutUs from "../../ui/AboutUs";
import WrapperContent from "../../ui/WrapperContent";

export default function Support() {
  const [about, setAbout] = useState("aboutRent");

  let content;

  switch (about) {
    case "aboutRent":
      content = (
        <>
          <CardSupport
            title={"FOUND YOUR PERFECT PLACES TO STAY"}
            heading={"HOW IT WORKS"}
            icon
          />
          <CardSupport heading={"WHAT WE OFFER"} />
        </>
      );
      break;
    case "aboutUs":
      content = (
        <>
          <AboutUs />
        </>
      );
      break;
  }

  return (
    <>
      <Hero>
        <h1 className="font-semibold text-5xl italic mb-5">Support</h1>
        <h4 className="font-semibold italic text-2xl">
          Any Information about our Website
        </h4>
      </Hero>
      <WrapperContent>
      <NabarSupport handleClick={setAbout} />
      {content}
      </WrapperContent>
    </>
  );
}
