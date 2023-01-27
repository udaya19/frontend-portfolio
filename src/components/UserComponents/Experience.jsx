import React, { useEffect, useState } from "react";

import Title from "../Title";
import { getExperienceApi } from "../../api/experienceApi";

const Experience = () => {
  const [experience, setExperience] = useState([]);
  const getExperience = async () => {
    try {
      const { success, results } = await (await getExperienceApi()).data;
      if (success) {
        setExperience(results);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getExperience();
  }, []);
  return (
    <div>
      <Title title="Experience" iconName="work_history" />
      {experience.map((e) => (
        <div className="educationName mt-8 flex justify-center">
          <img src={e.logo.url} alt="NSM" className="rounded-full mr-4 " />
          <div className="flex flex-col justify-center">
            <h1 className="text-primary text-xl font-bold">{e.name}</h1>
            <h2 className="text-secondary text-lg">{e.role}</h2>
            <h2 className="text-mediumGray text-lg font-semibold">
              {e.from} to {e.to}
            </h2>
            <h4 className="text-mediumGray text-lg">
              {e.city}, {e.state}, {e.country}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
