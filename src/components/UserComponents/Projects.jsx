import React from "react";
import project from "../../images/projects.png";
import Title from "../Title";

const Projects = () => {
  return (
    <>
      <Title iconName="work" title="Projects" />
      <div className="project-container flex flex-wrap gap-10">
        <div className="flex w-1/2">
          <img src={project} alt="" width="300px" height="300px" />
          <div>
            <a href="/">
              <p className="mt-10 font-bold text-primary text-[20px]">
                Project Topic
              </p>
              <p className="text-mediumGray">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                delectus quidem placeat quisquam facere nihil, sunt deserunt
                praesentium dolore similique. Ea architecto neque repellat saepe
                laboriosam quasi beatae laborum recusandae.
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
