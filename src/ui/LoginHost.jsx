import { useRef } from "react";
import UseLogin from "../hooks/UseLogin";
import Loading from "./Loading";
import Input from "./Input";

export default function LoginHost({handleClick}) {
  const { onsubmit, loading } = UseLogin("Host");

  const userLogin = useRef();
  const passwordLogin = useRef();

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="text-center mb-8">
            <h1 className="text-3xl">
              Welcome Back, <span className="text-pink">Host!</span>
            </h1>
            <h1 className="text-lg">
              Please sign in to manage your{" "}
              <span className="text-pink">listings</span> and
              <span className="text-pink"> reservations.</span>
            </h1>
          </div>

          <Input label="Email or Username" ref={userLogin} />
          <Input label="Password" typeInput="password" ref={passwordLogin} />
          <button
            onClick={() =>
              onsubmit({
                username: userLogin.current.value(),
                password: passwordLogin.current.value(),
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
