import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BrowseSpaces from "./pages/Space";

function App() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-screen-xl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/space" element={<BrowseSpaces />} />
        </Routes>
      </main>
    </>
  );
}

export default App;