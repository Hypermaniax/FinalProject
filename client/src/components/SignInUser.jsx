import { useRef } from "react";
import UseLogin from "../hooks/auth/UseLogin";
import Loading from "./Loading";
import Input from "./Input";
import useToggle from "../hooks/UseToggle";

export default function SignInUser({ handleClick }) {
  const { open, close, state } = useToggle();
  const { onsubmit, loading } = UseLogin(state ? "host" : "guest");
  
  const userLogin = useRef();
  const passwordLogin = useRef();

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1 className="text-2xl text-center">
            Welcome to Stay<span className="text-pink">Nesia</span>
          </h1>

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

          <Input label="Email or Username" ref={userLogin} />
          <Input label="Password" typeInput="password" ref={passwordLogin} />
          <button
            onClick={() =>
              onsubmit({
                field1: userLogin.current.value(),
                field2: passwordLogin.current.value(),
              })
            }
            className="bg-pink bg-opacity-80 hover:bg-opacity-100 rounded-xl py-1.5 text-white"
          >
            Login
          </button>
          <p className="text-gray-500 text-center font-medium">
            Don’t have an account?{" "}
            <span
              className="hover:text-pink underline cursor-pointer"
              onClick={handleClick}
            >
              Sign up
            </span>
          </p>
          <></>
        </>
      )}
    </>
  );
}
