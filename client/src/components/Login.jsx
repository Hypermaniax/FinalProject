import { useRef, useEffect } from "react";
import UseLogin from "../hooks/UseLogin";
import Input from "./Input";
import Loading from "./Loading";
import { ToastContainer, toast } from "react-toastify";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function Login({ handleClick, handleClose }) {
  const { onsubmit, loading, response } = UseLogin();
  const userLogin = useRef();
  const passwordLogin = useRef();

  const notify = () => {
    response?.status === 200
      ? toast.success(response?.data.message, {
          position: "top-center",
          autoClose: false,
          closeButton : false
        })
      : toast.error(response?.data, {
          position: "top-center",
        });
  };

  useEffect(() => {
    const handleResponse = async () => {
      if (response) {
        notify();
        if (response.status === 200) {
          await delay(3000);
          handleClose();
          handleClick(localStorage)
        }
      }
    };

    handleResponse();
  }, [response, handleClose]);

  return (
    <>
      <ToastContainer />
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1 className="text-2xl">
            Welcome to Stay<span className="text-pink">Nesia</span>
          </h1>
          <Input label="Email or Username" ref={userLogin} />
          <Input label="Password" typeInput ='password' ref={passwordLogin} />
          <button
            onClick={() =>
              onsubmit({
                userLogin: userLogin.current.value(),
                passwordLogin: passwordLogin.current.value(),
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
        </>
      )}
    </>
  );
}
