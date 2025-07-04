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
      <div className="col-span-1 p-3 h-fit rounded-xl bg-white">
        <div className="col-span-1 items-center grid grid-cols-2 ">
          <div className="col-span-1 ">
            <img
              src={damn}
              alt=""
              className="w-28 h-28 rounded-full object-center "
            />
          </div>
          <div className="col-span-1">
            <p className="font-bold">{user.name}</p>
            <p className="text-xs">Since {user.crea}</p>
          </div>
        </div>
        <div className="mt-10 mx-auto">
          <ul className="space-y-6 ">
            {menus.map((item, index) => (
              <Link
                to={`/bookings/${item.path === "bookings" ? "" : item.path}`}
                key={index}
                className="flex gap-5 mx-7"
              >
                <item.icon /> <span className="text-base">{item.label}</span>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
