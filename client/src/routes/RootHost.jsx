import { Route, Routes } from "react-router-dom";
import LoginOrSignupHost from "../pages/host/HostHome";

import DashboardHost from "../pages/host/DashboardHost";
import DashboardLayout from "../ui/DashboardLayout";
import Listings from "../pages/host/Listings";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export default function RootHost() {
  const {user} = useContext(AuthContext)
  console.log(user);
  
  return (
    <Routes>
      {/* Root login/signup */}
      <Route index element={<LoginOrSignupHost />} />
    
      {/* Dashboard layout with nested routes */}
      <Route path="dashboard" element={<DashboardLayout />}>
        <Route path="dashboard-host" element={<DashboardHost />} />
        <Route path="booking-host" element={<>BOOKINGS</>} />
        <Route path="listing-host" element={<Listings/>} />
        <Route path="message-host" element={<>MESSAGES</>} />
        <Route path="review-host" element={<>REVIEWS</>} />
        <Route path="payout-host" element={<>PAYOUTS</>} />
        <Route path="settings-host" element={<>SETTINGS</>} />
      </Route>
    </Routes>
  );
}
