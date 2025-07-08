import { X } from "lucide-react";
import useToggle from "../../hooks/UseToggle";
import { ToastContainer } from "react-toastify";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../store/AuthContext";
import { useNavigate } from "react-router-dom";
import SignInUser from "../../components/SignInUser";
import SignUpUser from "../../components/SignUpUser";

export default function AuthModalGuest() {
  const { toggle, state } = useToggle();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) return navigate("/bookings");
  }, [user]);

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-50 flex items-center justify-center z-50">
      <ToastContainer />
      <div className="bg-white relative text-gray grid font-bold px-16 py-10 mt-5  text-left rounded-2xl gap-5 w-2/6">
        <div className="absolute top-3 right-3 cursor-pointer text-gray-400 hover:bg-pink hover:rounded-full hover:text-white p-1">
          <X size={20} onClick={() => navigate(-1)} />
        </div>
        {state ? (
          <SignUpUser handleClick={toggle} />
        ) : (
          <SignInUser handleClick={toggle} />
        )}
      </div>
    </div>
  );
}
