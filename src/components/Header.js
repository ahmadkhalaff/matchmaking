import React from "react";
import angry from "../images/angry.png";
import happy from "../images/happy.png";

const Header = ({angryCount,happyCount}) => {
  return (
    <>
      <div className="header_main">
        <div className="col-md-8 m-auto">
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <img height={70} src={angry} alt="angry.png"></img>
              <p className="points_number ms-2">{angryCount}</p>
            </div>
            <div className="d-flex align-items-center">
              <p className="text-white fs-3">ANIMAL ZOO</p>
            </div>
            <div className="d-flex align-items-center">
              <img height={70} src={happy} alt="happy.png"></img>
              <p className="points_number points_green ms-2">{happyCount}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
