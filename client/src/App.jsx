import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BrowseSpaces from "./pages/Space";
import Bookings from "./pages/Bookings";
import Support from "./pages/Support";

function App() {
  return (
    <>
      <Header />
      <main className="md:mx-auto mx-3 pb-16 max-w-screen-xl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/space" element={<BrowseSpaces />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </main>
    </>
  );
}

export default App;