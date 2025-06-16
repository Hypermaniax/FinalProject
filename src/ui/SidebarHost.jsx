import {
  Cog,
  House,
  LayoutDashboard,
  Paperclip,
  Star,
  Wallet,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { path: "dashboard-host", label: "Dashboard", icon: <LayoutDashboard /> },
  { path: "booking-host", label: "Bookings", icon: <Paperclip /> },
  { path: "listing-host", label: "Listing", icon: <House /> },
  { path: "review-host", label: "Reviews", icon: <Star /> },
  { path: "payout-host", label: "Payouts", icon: <Wallet /> },
];

export default function SidebarHost() {
  const [activeLabel, setActiveLabel] = useState(null);

  return (
    <div className="bg-pink h-screen col-span-1 top-0 sticky  flex flex-col py-10 px-5">
      <h1 className="text-white text-3xl font-bold font-Poppins">StayNesia</h1>
      <ul className="text-white mt-10 font-semibold flex flex-col gap-5">
        {navLinks.map((item) => (
          <li key={item.label}>
            <Link
              to={item.path}
              onClick={() => setActiveLabel(item.label)}
              className={`flex items-center px-2 py-1 gap-2 rounded-lg transition duration-300
              ${
                activeLabel === item.label
                  ? "bg-white text-pink"
                  : "hover:bg-white hover:text-pink"
              }`}
            >
              {item.icon} {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-auto">
        <Link
          to="settings-host"
          onClick={() => setActiveLabel("Settings")}
          className={`flex items-center px-2 py-1 gap-2 font-semibold rounded-lg transition duration-300
          ${
            activeLabel === "Settings"
              ? "bg-white text-pink"
              : "hover:bg-white hover:text-pink text-white"
          }`}
        >
          <Cog />
          Settings
        </Link>
      </div>
    </div>
  );
}
