import { useState, useEffect } from "react";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import { X } from "lucide-react";

export default function LoginOrSignUp({ isOpen, handleClick }) {
  if (!isOpen) return null;

  const [signUp, setSignUp] = useState(false);

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-transparent flex items-center justify-center z-50">
      <div className="bg-white relative text-gray grid font-bold px-16 py-10 mt-5  text-left rounded-2xl gap-5 w-2/6">
        <div className="absolute top-3 right-3 cursor-pointer text-gray-400 hover:bg-pink hover:rounded-full hover:text-white p-1">
          <X size={20} onClick={handleClick} />
        </div>
        {signUp ? (
          <SignUp handleClick={() => setSignUp(!signUp)}  />
        ) : (
          <Login handleClick={() => setSignUp(!signUp)} handleClose={handleClick} />
        )}
      </div>
    </div>
  );
}
