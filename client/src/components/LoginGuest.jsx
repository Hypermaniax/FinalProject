import { useRef } from "react";
import UseLogin from "../hooks/auth/UseLogin";
import Loading from "./Loading";
import Input from "./Input";

export default function LoginGuest({handleClick}) {
  const { onsubmit, loading } = UseLogin("Guest");

  const userLogin = useRef();
  const passwordLogin = useRef();

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1 className="text-2xl">
            Welcome to Stay<span className="text-pink">Nesia</span>
          </h1>

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
              className="hover:text-pink cursor-pointer"
              onClick={handleClick}
            >
              Sign up here
            </span>
          </p>
          <></>
        </>
      )}
    </>
  );
}
