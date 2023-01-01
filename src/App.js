import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/UserComponents/Login";
import Admin from "./components/AdminComponents/Admin";
import Home from "./components/UserComponents/Home";

function App() {
  const token = localStorage.getItem("token");
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        {token ? (
          <Route path="/admin" element={<Admin />} />
        ) : (
          <Route path="/login" element={<Login />} />
        )}
      </Routes>
    </div>
  );
}

export default App;
