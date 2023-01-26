import React, { useState, useEffect } from "react";

import { getEducationApi } from "../../api/educationApi";

const Education = () => {
  const [education, setEducation] = useState([]);
  const getEducation = async () => {
    try {
      const { success, results } = await (await getEducationApi()).data;
      if (success) {
        setEducation(results);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getEducation();
  }, []);
  return (
    <div>
      <div className="educationTitle flex justify-center gap-2 mt-8">
        <span className="material-symbols-outlined text-primary mt-1 font-semibold">
          school
        </span>
        <h1 className="text-primary font-bold text-4xl">Education</h1>
      </div>
      {education.map((ed, index) => (
        <div className="educationName mt-8 flex " key={index}>
          <img src={ed.logo.url} alt="NSM" className="rounded-full mr-4 " />
          <div className="flex flex-col justify-center">
            <h1 className="text-primary text-xl font-bold">{ed.name}</h1>
            <h2 className="text-secondary text-lg">{ed.grade}</h2>
            <h2 className="text-mediumGray text-lg font-semibold">{ed.year}</h2>
            <h4 className="text-mediumGray text-lg">
              {ed.city}, {ed.state}, {ed.country}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
