import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BrowseSpaces from "./pages/Space";
import Bookings from "./pages/Bookings";
import Support from "./pages/Support";
import ProtectedRoutes from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Header />
      <main className="mx-auto  pb-16 max-w-screen-xl min-w-screen-l">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/space" element={<BrowseSpaces />} />
          <Route
            path="/bookings"
            element={<ProtectedRoutes>
              <Bookings/>
            </ProtectedRoutes>}
          />
          <Route path="/support" element={<Support />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
