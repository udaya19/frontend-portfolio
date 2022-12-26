import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/UserComponents/Login";
import Header from "./components/UserComponents/Header";
import About from "./components/UserComponents/About";
import Education from "./components/UserComponents/Education";
import Experience from "./components/UserComponents/Experience";
import Projects from "./components/UserComponents/Projects";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Routes>
        {/* <Route path="/" element={<Header />} /> */}
        {/* <Route path="/" element={<About />} />
        <Route path="/" element={<Education />} /> */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
