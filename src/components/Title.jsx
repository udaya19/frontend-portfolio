import React from "react";

const Title = ({ iconName, title }) => {
  return (
    <>
      <div className="educationTitle flex justify-center gap-2 mt-8">
        <span className="material-symbols-outlined text-primary mt-1 font-semibold">
          {iconName}
        </span>
        <h1 className="text-primary font-bold text-4xl">{title}</h1>
      </div>
    </>
  );
};

export default Title;
