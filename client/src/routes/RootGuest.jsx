import { Routes, Route } from "react-router-dom";
import Home from "../pages/guest/Home";
import Spaces from "../pages/guest/Space";
import Support from "../pages/guest/Support";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Bookings from "../pages/guest/Bookings";
import BookingDetails from "../pages/guest/BookingDetails";
import { ToastContainer } from "react-toastify";
import AuthModalGuest from "../pages/guest/AuthModalGuest";
import ProtectedRoute from "./protected/ProtectRoute";

export default function RootGuest() {
  return (
    <div className="flex flex-col min-h-screen">
      <ToastContainer />
      <Header />
      <div className="flex-1">
        <Routes>
          <Route index element={<Home />} />
          <Route path="space" element={<Spaces />} />
          <Route path="space/:id" element={<BookingDetails />} />
          <Route
            path="bookings/*"
            element={
              <ProtectedRoute role={"guest"}>
                <Bookings />
              </ProtectedRoute>
            }
          />
          <Route path="support" element={<Support />} />
          <Route path="login-guest" element={<AuthModalGuest />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
