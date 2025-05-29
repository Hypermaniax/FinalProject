import { useState } from "react";
import logoSn1 from "../assets/logosn1.png";
import LoginOrSignUp from "../pages/LoginOrSignUp";

const loginHost = "http://localhost:3000/login-host";
const registerHost = "http://localhost:3000/regist-host";
const riderect = '/host/dashboard/dashboard-host'

export default function NavbarHost() {
  const [isOPen, setIsopen] = useState(false);

  return (
    <>
      <nav className="bg-white flex sticky top-0 shadow-lg z-50">
        <div className="max-w-7xl w-full mx-auto ">
          <div className="flex justify-between items-center py-4">
            <div className="flex space-x-2 ">
              <img src={logoSn1} alt="" className="h-7" />
              <h1 className="font-extrabold text-2xl">
                <span className="text-black">Stay</span>
                <span className="text-pink">Nesia</span>
              </h1>
            </div>
            <button
              onClick={() => setIsopen(!isOPen)}
              className=" hidden md:flex bg-pink-500 text-white px-5 py-1 bg-pink rounded-lg text-lg font-bold hover:bg-pink-600 transition-colors"
            >
              Login
            </button>
          </div>
        </div>
      </nav>
      <LoginOrSignUp
        login={loginHost}
        register={registerHost}
        ridrect = {riderect}
        heading
        isOpen={isOPen}
        handleClick={() => setIsopen(!isOPen)}
      />
    </>
  );
}
