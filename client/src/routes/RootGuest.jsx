import { Routes, Route } from "react-router-dom";
import Home from "../pages/guest/Home";
import Spaces from "../pages/guest/Space";
import Support from "../pages/guest/Support";

import Header from "../ui/Header";
import Footer from "../ui/Footer";
import Bookings from "../pages/guest/Bookings";
import ProtectedRoute from "./ProtectRoute";


export default function RootGuest() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">
        <Routes>
          <Route index element={<Home />} />
          <Route path="space" element={<Spaces />} />
          <Route
            path="bookings/*"
            element={
              <ProtectedRoute>
                <Bookings />
              </ProtectedRoute>
            }
          />
          <Route path="support" element={<Support />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
