import { Link, Outlet } from "react-router-dom";
import { BookText, LogOut, Cog, BookHeart, ScrollText } from "lucide-react";
import damn from "../assets/spongebob.jpeg";
import { useContext } from "react";
import { AuthContext } from "../store/AuthContext";

const menus = [
  { label: "My Booking", icon: BookText, path: "bookings" },
  { label: "My Wishlist", icon: BookHeart, path: "wishlist" },
  { label: "My Transaction", icon: ScrollText, path: "transaction" },
  { label: "Account Setting", icon: Cog, path: "account" },
  { label: "Log Out", icon: LogOut, path: "logout" },
];

export default function ProfileUser() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <div className="col-span-1 sm:mx-0 mx-4 sm:mt-0 mt-4 p-3 h-fit rounded-xl bg-white">
        <div className="items-center gap-4 flex ">
          <img
            src={damn}
            alt=""
            className="w-28 h-28 rounded-full object-cover shadow-xl border-2 border-gray-100"
          />
          <div>
            <p className="font-bold">{user.name}</p>
            <p className="text-xs">Since {user.crea}</p>
          </div>
        </div>

        <div className="sm:mt-10 mx-auto">
          <ul className="sm:flex-col flex gap-4 overflow-x-auto md:overflow-x-visible my-5 sm:my-0 sm:gap-8 ">
            {menus.map((item, index) => (
              <Link
                to={`/bookings/${item.path === "bookings" ? "" : item.path}`}
                key={index}
                className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-5 md:mx-7 p-3 md:p-0 rounded-lg md:rounded-none hover:bg-gray-50 md:hover:bg-transparent transition-colors min-w-fit"
              >
                <item.icon className="w-5 h-5 text-gray-600" />
                <span className="text-xs md:text-base font-medium whitespace-nowrap">
                  {item.label}
                </span>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
