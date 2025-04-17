import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Headline from "./components/Headline";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-screen-xl ">
        <Headline />
      </main>
      <Hero/>
    </>
  );
}

export default App;
