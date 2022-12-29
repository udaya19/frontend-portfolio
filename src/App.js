import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/UserComponents/Login";
import Header from "./components/UserComponents/Header";
import About from "./components/UserComponents/About";
import Education from "./components/UserComponents/Education";
import Experience from "./components/UserComponents/Experience";
import Projects from "./components/UserComponents/Projects";
import Contact from "./components/UserComponents/Contact";

function App() {
  return (
    <div>
      {/* <Header />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Contact /> */}
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Education />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Experience />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Projects />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Contact />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
