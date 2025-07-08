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
import DashboardGuest from "../components/DashboardGuest";
import Wishlist from "../components/WishList";
import MyTransaction from "../components/MyTransaction";
import AccountSetting from "../components/AccountSetting";
import RequestToBook from "../components/RequestTobook";

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
            path="bookings"
            element={
              <ProtectedRoute role="guest">
                <Bookings />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardGuest />} />
            <Route path="bookings" element={<DashboardGuest />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="transaction" element={<MyTransaction />} />
            <Route path="account" element={<AccountSetting />} />
            <Route path="logout" element={<>logout</>} />
          </Route>
          <Route path="request-to-book/:id" element={<RequestToBook />} />
          <Route path="support" element={<Support />} />
          <Route path="login-guest" element={<AuthModalGuest />} />
        </Routes>
      </div>
      <Footer /> 
    </div>
  );
}
