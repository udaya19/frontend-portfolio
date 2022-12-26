import React from "react";
import spotflock from "../../images/spotflock-logo.png";

const Experience = () => {
  return (
    <div>
      <div className="educationTitle flex justify-center gap-2 mt-8">
        <span class="material-symbols-outlined text-primary">work</span>
        <h1 className="text-primary font-bold text-4xl">Experience</h1>
      </div>
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
