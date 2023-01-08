import React from "react";
import { useSelector } from "react-redux";

const Promo = () => {
  const dataPromo = useSelector((state) => state.promo);

  return (
    <div className="promo">
      <div className="content">
        <div className="content-wrapper">
          {dataPromo.map((url, index) => {
            return (
                <img className="img-promo" src={url} alt="" key={index} />
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Promo;
