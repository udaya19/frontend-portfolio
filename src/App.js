import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/UserComponents/Login";
import Header from "./components/UserComponents/Header";
import About from "./components/UserComponents/About";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
