import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Vite from "./pages/Vite";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Login from "./pages/Login";
import Register from "./pages/Register";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Vite />} />
        <Route path="/home" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
