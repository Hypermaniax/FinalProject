import WrapperContent from "./WrapperContent";
import logo from "../assets/logosn2.png";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const icon = [<Instagram />, <Facebook />, <Twitter />];
const navLinks = [
  { path: "/", label: "Home" },
  { path: "/space", label: "Space" },
  { path: "/bookings", label: "Bookings" },
  { path: "/support", label: "Support" },
  { path: "/host", label: "Host" },
];
const support = ["Help Center", "About Rent", "About Us", "Contact Us"];
const Hosting = ["About Host", "Benefit", "Responsibilities"];

export default function Footer() {
  return (
    <div className="bg-black mt-10 text-white p-9 ">
      <WrapperContent>
        <div className="grid grid-cols-5 gap-16 content-center">
          <div className="col-span-1 items-center justify-center w-36">
            <img src={logo} alt="" className="h-36" />
            <h1 className="text-2xl font-bold">staynesia</h1>
            <p className="text-sm">
              Make your simple way to rent or host spaces
            </p>
          </div>
          <div className="col-span-4 grid-cols-4 grid  justify-center ">
            <div className="col-span-1 ">
              <h1 className="text-xl mb-6 font-bold">Our Social Media</h1>
              {icon.map((item,index) => (
                <div key={index} className="flex mt-3 gap-2 hover:cursor-pointer">
                  {item} <span>staynesia</span>
                </div>
              ))}
            </div>
            <div className="col-span-1 ">
              <h1 className="text-xl mb-6 font-bold">Support</h1>
              <ul className="flex flex-col gap-2">
                {support.map((item,index) => (
                  <li key={index} className="hover:cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>
            <div className="col-span-1 ">
              <h1 className="text-xl mb-6 font-bold">Hosting</h1>
              <ul className="flex flex-col gap-2">
                {support.map((item,index) => (
                  <li key={index} className="hover:cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>
            <div className="col-span-1 ">
              <h1 className="text-xl mb-6 font-bold">Quick Links</h1>
              <ul className="flex flex-col gap-2">
                {navLinks.map((item,index) => (
                  <li key={index}>
                    <Link to={item.path}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </WrapperContent>
    </div>
  );
}
{
  /* <div className="col-span-1 ">
              <h1 className="text-xl mb-6 font-bold">Quick Links</h1>
              <ul className="flex flex-col gap-2">
              {navLinks.map(item=><li>
                <Link to={item.path}>{item.label}</Link>
              </li>)}
              </ul>
            </div> */
}
