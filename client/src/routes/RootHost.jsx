import { Route, Routes } from "react-router-dom";
import DashboardHost from "../pages/host/DashboardHost";
import DashboardLayout from "../components/DashboardLayout";
import Listings from "../pages/host/Listings";
import { useContext } from "react";
import BookingHost from "../pages/host/BookingsHost";
import PayOutHistory from "../components/PayOutHistory";
import AuthModalHost from "../pages/host/AuthModalHost";
import HostHome from "../pages/host/HostHome";
import { AuthContext } from "../store/AuthContext";

export default function RootHost() {
  const { user } = useContext(AuthContext);

  return (
    <Routes>
      {/* Root login/signup */}
      <Route index element={<HostHome />} />
      <Route path="login-host" element={<AuthModalHost />} />
      {/* Dashboard layout with nested routes */}
      <Route path="dashboard" element={<DashboardLayout />}>
        <Route path="dashboard-host" element={<DashboardHost />} />
        <Route path="booking-host" element={<BookingHost />} />
        <Route path="listing-host" element={<Listings />} />
        <Route path="review-host" element={<>REVIEWS</>} />
        <Route path="payout-host" element={<PayOutHistory />} />
        <Route path="settings-host" element={<>SETTINGS</>} />
      </Route>
    </Routes>
  );
}
