import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/guest/Home";
import Spaces from "../pages/guest/Space";
import Support from "../pages/guest/Support";
import ProtectedRoutesProvider from "./ProtectedRoute";
import Header from "../ui/Header";
import Footer from "../ui/Footer";

export default function RootGuest() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/space" element={<Spaces />} />
        <Route
          path="/bookings"
          element={
            <ProtectedRoutesProvider>
              <>Bookings</>
            </ProtectedRoutesProvider>
          }
        />
        <Route path="/support" element={<Support />} />
      </Routes>
      <Footer />
    </>
  );
}
