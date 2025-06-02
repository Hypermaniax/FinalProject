import { Route, Routes } from "react-router-dom";
import LoginOrSignupHost from "../pages/host/HostHome";

import DashboardHost from "../pages/host/DashboardHost";
import DashboardLayout from "../ui/DashboardLayout";
import Listings from "../pages/host/Listings";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import BookingHost from "../pages/host/BookingsHost";
import PayOutHistory from "../ui/PayOutHistory";

export default function RootHost() {
  const {user} = useContext(AuthContext)
  
  return (
    <Routes>
      {/* Root login/signup */}
      <Route index element={<LoginOrSignupHost />} />
    
      {/* Dashboard layout with nested routes */}
      <Route path="dashboard" element={<DashboardLayout />}>
        <Route path="dashboard-host" element={<DashboardHost />} />
        <Route path="booking-host" element={<BookingHost/>} />
        <Route path="listing-host" element={<Listings/>} />
        <Route path="review-host" element={<>REVIEWS</>} />
        <Route path="payout-host" element={<PayOutHistory/>} />
        <Route path="settings-host" element={<>SETTINGS</>} />
      </Route>
    </Routes>
  );
}
