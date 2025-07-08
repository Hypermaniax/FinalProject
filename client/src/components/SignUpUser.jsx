import { useRef } from "react";
import Input from "./Input";
import Loading from "./Loading";
import UseRegister from "../hooks/auth/UseRegister";
import useToggle from "../hooks/UseToggle";

export default function SignUpUser({ handleClick }) {
  const fullNameref = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirm = useRef();
  const phoneRef = useRef();

  const { open, close, state } = useToggle();

  const { onSubmit, loading } = UseRegister(state ? "host" : "guest");

  return (
    <>
      <header className="text-center">
        <h1 className="text-2xl">
          Welcome to Stay<span className="text-pink">Nesia</span>
        </h1>
        <h4 className="text-xs text-black text-opacity-40 mt-3">
          Come on and create an account
        </h4>
      </header>

      <h1 className="text-center font-medium text-xl">Register As</h1>

      <div className="bg-darkWhite p-2 font-normal flex justify-between rounded-full">
        <button
          onClick={close}
          className={`w-full p-1.5 ${
            !state &&
            "bg-pink rounded-full transition-all font-semibold ease-in-out delay-200 text-white"
          }`}
        >
          Guest
        </button>
        <button
          onClick={open}
          className={`w-full p-1.5 ${
            state &&
            "bg-pink rounded-full transition-all font-semibold ease-in-out delay-200 text-white"
          }`}
        >
          Host
        </button>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Input typeInput="text" label="Full name" ref={fullNameref} />
          <Input typeInput="text" spaceBar label="Username" ref={usernameRef} />
          <Input typeInput="email" spaceBar label="Email" ref={emailRef} />
          <Input
            typeInput="number"
            spaceBar
            label="Phone Number"
            ref={phoneRef}
          />
          <Input
            label="password"
            typeInput="password"
            spaceBar
            ref={passwordRef}
          />
          <Input
            label="password"
            typeInput="password"
            spaceBar
            ref={passwordConfirm}
          />
          <button
            className="bg-pink rounded-xl bg-opacity-80 hover:bg-opacity-100  hover:bg-pink py-1.5 text-white"
            onClick={() =>
              onSubmit({
                name: fullNameref.current.value(),
                username: usernameRef.current.value(),
                email: emailRef.current.value(),
                password: passwordRef.current.value(),
                confirmPassword: passwordConfirm.current.value(),
                phone: phoneRef.current.value(),
              })
            }
          >
            Sign Up
          </button>
          <p className="text-gray-500 font-medium text-center">
            already a member ?{" "}
            <span
              className="hover:text-pink underline cursor-pointer"
              onClick={handleClick}
            >
              sign In
            </span>{" "}
          </p>
        </>
      )}
    </>
  );
}
