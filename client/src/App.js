import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin.jsx";
import Visitor from "./pages/Visitor"


function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/visitor" element={<Visitor />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/admin/:id" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
