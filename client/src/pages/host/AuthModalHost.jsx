import { X } from "lucide-react";
import useToggle from "../../hooks/UseToggle";
import LoginHost from "../../ui/LoginHost";
import SignUpHost from "../../ui/SignUpHost";
import { ToastContainer } from "react-toastify";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../routes/AuthContext";
import { useNavigate } from "react-router-dom";

export default function AuthModalHost() {
  const { toggle, state } = useToggle();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) return navigate("/host/dashboard/dashboard-host");
  }, [user]);

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-50 flex items-center justify-center z-50">
      <ToastContainer />
      <div className="bg-white relative text-gray grid font-bold px-16 py-10 mt-5  text-left rounded-2xl gap-5 w-2/6">
        <div className="absolute top-3 right-3 cursor-pointer text-gray-400 hover:bg-pink hover:rounded-full hover:text-white p-1">
          <X size={20} onClick={() => navigate(-1)} />
        </div>
        {state ? (
          <SignUpHost handleClick={toggle} />
        ) : (
          <LoginHost handleClick={toggle} />
        )}
      </div>
    </div>
  );
}
