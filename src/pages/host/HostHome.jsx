import { useState } from "react";
import Login from "../../ui/Login";
import SignUp from "../../ui/SignUp";
import NavbarHost from "../../ui/NavbarHost";
import Hero from "../../ui/Hero";
import hostHero from "../../assets/hostHero.png";
import WrapperContent from "../../ui/WrapperContent";
import hostImg from "../../assets/hostIMG.png";
import {
  ClockFading,
  ShieldUser,
  HandCoins,
  MonitorSmartphone,
  House,
  Columns3Cog,
  MessageCircle,
} from "lucide-react";
import Footer from "../../ui/Footer";

const content = {
  heading: "Start Earning by Sharing Your Space",
  paragraph:
    "Turn any space—whether a cozy room, a modern apartment, or your entire home—into extra income. You control pricing, availability, and house rules. From listing to booking, we’re here to support you, making hosting easy and rewarding.",
};

const host = [
  {
    title: "Total Flexibility",
    description:
      "Set your own availability and pricing. You decide when and how often to host—no long-term commitments required.",
    icon: ClockFading,
  },
  {
    title: "Safety and Peace of Mind",
    description:
      "We provide verified guest profiles, 24/7 support, and host protection insurance so you can host confidently.",
    icon: ShieldUser,
  },
  {
    title: "Earn Extra Income",
    description:
      "Turn your extra space into a reliable source of income. Whether it’s a spare room, vacation home, or apartment—it can all work for you.",
    icon: HandCoins,
  },
  {
    title: "Everything at 1 Click",
    description:
      "Manage messages, bookings, calendar, and pricing with ease using our simple and powerful tools.",
    icon: MonitorSmartphone,
  },
];

const steps = [
  {
    title: "List your spaces",
    description:
      "Capture a few photos, write a brief description, and highlight what makes your space unique.",
    icon: House, // replace with actual icon component or path
  },
  {
    title: "Customize your spaces",
    description:
      "Set your pricing, manage availability, and define your house rules.",
    icon: Columns3Cog, // replace with actual icon
  },
  {
    title: "Communicate",
    description:
      "Connect directly with your guests before they arrive. Answer questions, share local tips, or simply say hello.",
    icon: MessageCircle, // replace with actual icon
  },
];

export default function HostHome() {
  return (
    <div className="bg-darkWhite min:h-screen w-full">
      <NavbarHost />
      <Hero link={`url(${hostHero})`}>
        <div className="max-w-7xl w-full mx-auto grid h-full items-center  text-left">
          <div className="w-2/5  mt-14">
            <p className="text-white font-bold text-5xl">
              Lets Your Spaces Be Their Destination.
            </p>
            <p className="text-2xl font-bold mt-7 mb-7">
              More Profit await you
            </p>
            <button className="px-3 bg-pink rounded-lg font-bold py-1 ">
              Get Started
            </button>
          </div>
        </div>
      </Hero>
      <WrapperContent>
        <div className="grid items-center grid-cols-2 mt-10">
          <div className="col-span-1 space-y-20">
            <h1 className="font-bold text-4xl">{content.heading}</h1>
            <p>{content.paragraph}</p>
          </div>
          <div className="col-span-1 ">
            <img src={hostImg} alt="" />
          </div>
        </div>
      </WrapperContent>
      <WrapperContent>
        <div className="text-center space-y-3 my-10">
          <h1 className="font-bold text-4xl">Why Host With Us?</h1>
          <h5 className="font-bold text-pink text-xl">
            4 Things You Need to Know
          </h5>
        </div>
        <section className="grid grid-cols-1  md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">
          {host.map((item, index) => (
            <div key={index} className="flex items-center gap-4  p-6">
              <item.icon className="h-32 w-32 text-pink" />
              <div>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </section>
      </WrapperContent>
      <WrapperContent>
        <div className="bg-white text-center mb-14 rounded-2xl p-5 ">
          <h1 className="font-bold text-4xl">Super Easy to Get Started</h1>
          <h5 className="font-bold text-pink text-xl">Only 3 simple Step</h5>

          <section className="items-center text-center mt-10  grid grid-cols-3">
            {steps.map((item, index) => (
              <div className="text-center space-y-10" key={index}>
                <item.icon className="h-20 w-20 mx-auto" />
                <h1 className="font-semibold text-xl ">{item.title}</h1>
                <p>{item.description}</p>
              </div>
            ))}
          </section>
        </div>
      </WrapperContent>
      <Footer />
    </div>
  );
}
{
  /* <div className="fixed inset-0 backdrop-blur-sm bg-transparent flex items-center justify-center z-50">
        <div className="bg-white relative text-gray grid font-bold px-16 py-10 mt-5  text-left rounded-2xl gap-5 w-2/6">
          <div className="absolute top-3 right-3 cursor-pointer text-gray-400 hover:bg-pink hover:rounded-full hover:text-white p-1"></div>
          {signUp ? (
            <SignUp handleClick={() => setSignUp(!signUp)} />
          ) : (
            <Login
              heading
              text
              handleClick={() => setSignUp(!signUp)}
            />
          )}
        </div>
      </div> */
}
