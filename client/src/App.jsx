import "./App.css";
import RootGuest from "./routes/RootGuest";
import { Route, Routes } from "react-router-dom";
import RootHost from "./routes/RootHost";


function App() {
  return (
    <Routes>
      <Route path="/*" element={<RootGuest />} />
      <Route path="/host/*" element={<RootHost />} />
    </Routes>
  );
}

export default App;
