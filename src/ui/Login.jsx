import { useRef, useEffect, useContext } from "react";
import UseLogin from "../hooks/UseLogin";
import Input from "./Input";
import Loading from "./Loading";
import { toast } from "react-toastify";
import { AuthContext } from "../routes/AuthContext";

export default function Login({
  riderect,
  handleClick,
  heading,
  login,
  handleClose,
}) {
  const { onsubmit, loading, response } = UseLogin(login, riderect);

  const userLogin = useRef();
  const passwordLogin = useRef();

  const { setToken } = useContext(AuthContext);

  useEffect(() => {
    const handleResponse = async () => {
      if (response) {
        if (response.status === 200) {
          toast.success(response?.data.message);
          setToken(JSON.stringify(response?.data.result.token));
        } else {
          toast.error(response?.data.message);
        }
      }
    };

    handleResponse();
  }, [response]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {heading ? (
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
          ) : (
            <h1 className="text-2xl">
              Welcome to Stay<span className="text-pink">Nesia</span>
            </h1>
          )}
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
//
