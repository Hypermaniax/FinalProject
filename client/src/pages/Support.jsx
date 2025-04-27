import { useState } from "react";
import Hero from "../components/Hero";
import NabarSupport from "../components/NavbarSupport";
import CardSupport from "../components/CardSupport";
import AboutUs from "../components/AboutUs";

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
      <NabarSupport handleClick={setAbout} />
      {content}
    </>
  );
}
