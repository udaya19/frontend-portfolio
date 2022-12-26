import React from "react";
import nsm from "../../images/nsm-logo.jpeg";
import hvs from "../../images/hvs-logo.jpeg";
import bml from "../../images/bml-logo.jpeg";

const Education = () => {
  return (
    <div>
      <div className="educationTitle flex justify-center gap-2 mt-8">
        <span className="material-symbols-outlined text-primary mt-1 font-semibold">
          school
        </span>
        <h1 className="text-primary font-bold text-4xl">Education</h1>
      </div>
      <div className="educationName mt-8 flex ">
        <img src={nsm} alt="NSM" className="rounded-full mr-4 " />
        <div className="flex flex-col justify-center">
          <h1 className="text-primary text-xl font-bold">NSM Public School</h1>
          <h2 className="text-secondary text-lg">10th Grade</h2>
          <h2 className="text-mediumGray text-lg font-semibold">2017-18</h2>
          <h4 className="text-mediumGray text-lg">
            Vijayawada, AndhraPradesh, India
          </h4>
        </div>
      </div>
      <div className="educationName mt-8 flex ">
        <img src={hvs} alt="NSM" className="rounded-full mr-4 " />
        <div className="flex flex-col justify-center">
          <h1 className="text-primary text-xl font-bold">
            Happy Valley School
          </h1>
          <h2 className="text-secondary text-lg">12th Grade</h2>
          <h2 className="text-mediumGray text-lg font-semibold">2018-20</h2>
          <h4 className="text-mediumGray text-lg">
            Agiripalli, AndhraPradesh, India
          </h4>
        </div>
      </div>
      <div className="educationName mt-8 flex">
        <img src={bml} alt="NSM" className="rounded-full mr-4 " />
        <div className="flex flex-col justify-center">
          <h1 className="text-primary text-xl font-bold">
            Bml Munjal University
          </h1>
          <h2 className="text-secondary text-lg">
            B.Tech Computer Science Enfgineering
          </h2>
          <h2 className="text-mediumGray text-lg font-semibold">2020-24</h2>
          <h4 className="text-mediumGray text-lg">Gurugram, Haryana, India</h4>
        </div>
      </div>
    </div>
  );
};

export default Education;
