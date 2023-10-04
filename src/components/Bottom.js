import React from "react";
import checked from "../images/checked.png";
import remove from "../images/remove.png";

const Bottom = ({ data, onCorrectClick, onIncorrectClick }) => {
    const handleCorrectClick = () => {
        if (data.flag === 0) {
          onCorrectClick();
        } else {
          onIncorrectClick();
        }
      };
    
      const handleIncorrectClick = () => {
        if (data.flag === 1) {
          onCorrectClick();
        } else {
          onIncorrectClick();
        }
      };
  return (
    <>
      <div className="header_main">
        <div className="col-md-8 m-auto">
          <div className="d-flex justify-content-between">
            <div className="check_rem" onClick={handleIncorrectClick}>
              <img height={70} src={remove} alt="remove.png"></img>
            </div>
            <div className="check_rem" onClick={handleCorrectClick}>
              <img height={70} src={checked} alt="checked.png" ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bottom;
