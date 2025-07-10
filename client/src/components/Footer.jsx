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
    <div className="bg-black mt-10 text-white py-10 px-6">
      <WrapperContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {/* Logo & Intro */}
          <div className="text-center lg:text-left">
            <img src={logo} alt="Staynesia Logo" className="h-24 mx-auto lg:mx-0" />
            <h1 className="text-2xl font-bold mt-4">staynesia</h1>
            <p className="text-sm mt-2 max-w-xs mx-auto lg:mx-0">
              Make your simple way to rent or host spaces
            </p>
          </div>

          {/* Social Media */}
          <div className="text-center sm:text-left">
            <h1 className="text-xl mb-4 font-bold">Our Social Media</h1>
            <div className="flex flex-col items-center sm:items-start gap-3">
              {icon.map((item, index) => (
                <div key={index} className="flex items-center gap-2 hover:cursor-pointer">
                  {item} <span>staynesia</span>
                </div>
              ))}
            </div>
          </div>

          {/* Support */}
          <div className="text-center sm:text-left">
            <h1 className="text-xl mb-4 font-bold">Support</h1>
            <ul className="flex flex-col gap-2">
              {support.map((item, index) => (
                <li key={index} className="hover:cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          {/* Hosting */}
          <div className="text-center sm:text-left">
            <h1 className="text-xl mb-4 font-bold">Hosting</h1>
            <ul className="flex flex-col gap-2">
              {Hosting.map((item, index) => (
                <li key={index} className="hover:cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h1 className="text-xl mb-4 font-bold">Quick Links</h1>
            <ul className="flex flex-col gap-2">
              {navLinks.map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className="hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </WrapperContent>
    </div>
  );
}
