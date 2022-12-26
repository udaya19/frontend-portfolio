import React from "react";
import project from "../../images/projects.png";

const Projects = () => {
  return (
    <div>
      <div className="educationTitle flex justify-center gap-2 mt-8">
        <span class="material-symbols-outlined text-primary font-semibold mt-1">
          work
        </span>
        <h1 className="text-primary font-bold text-4xl">Projects</h1>
      </div>
      <div id="portfolio-container">
        <a
          href="https://github.com/udaya19/HCI-sleepwebapp"
          rel="noreferrer"
          target="_blank"
        >
          <div class="portfolio-image-container">
            <img src={project} alt="" />
            <div class="portfolio-details">
              <p>HCI Sleep Monitoring prototype.</p>
            </div>
          </div>
        </a>
        <a
          href="https://github.com/udaya19/wp_project"
          rel="noreferrer"
          target="_blank"
        >
          <div class="portfolio-image-container">
            <img alt="" src={project} />
            <div class="portfolio-details">
              <p>Basic e-commerce website.</p>
            </div>
          </div>
        </a>
        <a
          href="https://github.com/udaya19/DSA_python"
          rel="noreferrer"
          target="_blank"
        >
          <div class="portfolio-image-container">
            <img alt="" src={project} />
            <div class="portfolio-details">
              <p>Data Structures and algorithms in Python.</p>
            </div>
          </div>
        </a>
        <a
          href="https://github.com/udaya19/Portfolio_Udaya_Kiran"
          rel="noreferrer"
          target="_blank"
        >
          <div class="portfolio-image-container">
            <img src={project} alt="" />
            <div class="portfolio-details">
              <p>Portfolio Website.</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
