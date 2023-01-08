import React from "react";
import { useSelector } from "react-redux";

const AngryMenu = () => {
  const dataMenu = useSelector((state) => state.menu);

  return (
    <div className="menu-box-wrapper">
      {dataMenu.map((data, index) => {
        return (
          <div className="menu-box" key={index}>
            <img src={data.img} alt="" className="menu-img" />
            <div className="menu-detail">
              <div className="menu-name">{data.menuName}</div>
              <div className="menu-price">{data.price}</div>
            </div>
          </div>
        );
      })}
      ;
    </div>
  );
};

export default AngryMenu;
