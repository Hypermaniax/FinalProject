import { useEffect, useRef } from "react";
import Input from "./Input";
import UseRegister from "../hooks/UseRegister";
import Loading from "./Loading";
import { ToastContainer, toast } from "react-toastify";

export default function SignUp({ register,handleClick }) {
  const fullNameref = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const { onSubmit,  loading } = UseRegister(register);


  return (
    <>
      <ToastContainer />
      <header className="text-center">
        <h1 className="text-2xl">
          Welcome to Stay<span className="text-pink">Nesia</span>
        </h1>
        <h4 className="text-xs text-black text-opacity-40 mt-3">
          Come on and create an account
        </h4>
      </header>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Input typeInput="text" label="Full name" ref={fullNameref} />
          <Input typeInput="text" spaceBar label="Username" ref={usernameRef} />
          <Input typeInput="email" spaceBar label="Email" ref={emailRef} />
          <Input
            label="password"
            typeInput="password"
            spaceBar
            ref={passwordRef}
          />
          <button
            className="bg-pink rounded-xl bg-opacity-80 hover:bg-opacity-100  hover:bg-pink py-1.5 text-white"
            onClick={() =>
              onSubmit({
                fullNameref: fullNameref.current.value(),
                usernameRef: usernameRef.current.value(),
                emailRef: emailRef.current.value(),
                passwordRef: passwordRef.current.value(),
              })
            }
          >
            Sign Up
          </button>
          <p className="text-gray-500 font-medium text-center">
            already a member ?{" "}
            <span
              className="hover:text-pink cursor-pointer"
              onClick={handleClick}
            >
              Login
            </span>{" "}
          </p>
        </>
      )}
    </>
  );
}
