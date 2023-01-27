import React, { useEffect, useState } from "react";

import project from "../../images/projects.png";
import { getProjectApi } from "../../api/projectApi";
import Title from "../Title";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const getProjects = async () => {
    try {
      const { success, results } = await (await getProjectApi()).data;
      if (success) {
        setProjects(results);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getProjects();
  }, []);
  return (
    <>
      <Title iconName="work" title="Projects" />
      {projects.map((p) => (
        <div className="project-container flex flex-wrap gap-10">
          <div className="flex w-1/2">
            <img src={project} alt="" width="300px" height="300px" />
            <div>
              <a href={p.link}>
                <p className="mt-10 font-bold text-primary text-[20px]">
                  {p.title}
                </p>
                <p className="text-mediumGray">{p.description}</p>
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Projects;
