import React from "react";
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Header from "./Header";
import Projects from "./Projects";

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
