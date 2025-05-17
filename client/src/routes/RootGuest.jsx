import { Routes, Route,Link } from "react-router-dom";
import Home from "../pages/guest/Home";
import Spaces from "../pages/guest/Space";
import Support from "../pages/guest/Support";
import ProtectedRoutesProvider from "./ProtectedRoute";
import Header from "../ui/Header";

export default function RootGuest() {
  return (
    <>
      <Header />
      <div className="mx-auto min-h-screen pb-16 max-w-screen-xl min-w-screen-l">
        <Link to='/host/dashboard/dashboard-host'>CLICK</Link>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/space" element={<Spaces />} />
          <Route path="/bookings" element={<></>} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </div>
    </>
  );
}
