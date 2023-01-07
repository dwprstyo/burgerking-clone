import React from "react";
import { useSelector } from "react-redux";
import Slider from "../components/Slider";

const Home = () => {
  const dataMenu = useSelector((state) => state.menu);

  return (
    <div className="home">
      <Slider />
      <div className="content">
        <div className="content-wrapper">
          <div className="wonderfull-menu">Our Menu</div>
          <div className="menu-box-wrapper">
            {dataMenu.map((data, index) => {
              return (
                <div className="card-menu" key={index}>
                  <img className="img-menu" src={data.img} alt="" />
                  <div className="title-menu">
                    <div className="menu-name">{data.menuName}</div>
                    <div className="btn-menu">Order</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
