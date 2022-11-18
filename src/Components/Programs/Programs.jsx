import React from "react";
import "./Programs.css";
import { programsData } from "../../Data/programsData";
import RightArrow from "../../Assets/rightArrow.png";
const Programs = () => {
  return (
    <div className="Programs" id="programs">
      {/* Header  */}
      <div className="programs-header">
        <span className="stroke-text">Explore Our</span>
        <span>Programs</span>
        <span className="stroke-text">To Shape You</span>
      </div>
      {/* Cards  */}
      <div className="program-categories">
        {programsData.map((program,i) => (
          <div className="category" key={i}>
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <img src={RightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
