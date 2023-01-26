import React from "react";
import spotflock from "../../images/spotflock-logo.png";
import Title from "../Title";

const Experience = () => {
  return (
    <div>
      <Title title="Experience" iconName="work_history" />
      <div className="educationName mt-8 flex justify-center">
        <img src={spotflock} alt="NSM" className="rounded-full mr-4 " />
        <div className="flex flex-col justify-center">
          <h1 className="text-primary text-xl font-bold">
            Spotflock Technologies
          </h1>
          <h2 className="text-secondary text-lg">
            Full Stack Developer internship
          </h2>
          <h2 className="text-mediumGray text-lg font-semibold">
            May 2022 to July 2022
          </h2>
          <h4 className="text-mediumGray text-lg">
            Hyderabad, Telangana, India
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Experience;
