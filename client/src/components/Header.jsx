import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../store/AuthContext";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/space", label: "Space" },
  { path: "/bookings", label: "Bookings" },
  { path: "/support", label: "Support" },
  { path: "/host", label: "Host" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [login, setlogin] = useState(false);

  const navigate = useNavigate();

  const { user,  handleLogout } = useContext(AuthContext);
  
  return (
    <nav className="bg-white sticky sm:px-0 px-4  top-0 shadow-lg z-50">
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between items-center py-4">
          <h1 className="font-extrabold text-2xl">
            <span className="text-black">Stay</span>
            <span className="text-pink">Nesia</span>
          </h1>
          <ul className="hidden md:flex gap-8 font-medium text-lg">
            {navLinks.map((link) => (
              <li
                key={link.path}
                className="hover:text-pink-500 transition-colors"
              >
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>

          <button
            onClick={
              !!user
                ? () => {
                    handleLogout();
                  }
                : () => navigate("/login")
            }
            className=" hidden md:flex bg-pink-500 text-white px-5 py-2 bg-pink rounded-lg text-lg font-bold hover:bg-pink-600 transition-colors"
          >
            {!!user ? "Logout" : "Login"}
          </button>

          <button
            className="md:hidden text-pink-500 bg-pink p-2 rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} color="white" />
            ) : (
              <Menu color="white" size={24} />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <ul className="flex flex-col gap-4 font-medium text-lg mb-4">
              {navLinks.map((link) => (
                <li
                  key={link.path}
                  className="hover:text-pink-500 transition-colors"
                >
                  <Link to={link.path} onClick={() => setIsOpen(false)}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              onClick={
              !!user
                ? () => {
                    handleLogout();
                  }
                : () => navigate("/login")
            }
              className="bg-pink-500 text-white bg-pink px-5 py-2 rounded-lg text-lg font-bold hover:bg-pink-600 transition-colors"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
