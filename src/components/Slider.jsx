import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const dataImg = useSelector((state) => state.imgSlider)

  const counter = () => {
    setTimeout(() => {
      if (current >= dataImg.length-1) {
        setCurrent(0)
      }else{
        setCurrent(current+1)
      }
    }, 3000);
  }

  useEffect(() => {
    counter()
  })

  const dataLength = dataImg.length - 1;
  const handlePrev = () => {
    if (current === 0) {
        setCurrent(dataLength)
    }else{
        setCurrent(current-1)
    }
  };
  const handleNext = () => {
    if (current >= dataLength) {
        setCurrent(0)
    }else{
        setCurrent(current+1)
    }
  };

  const handleDot = (value) => {
    setCurrent(value)
  }

  return (
    <div className="slider">
      <div className="prevbtn" onClick={handlePrev}>
        <GrFormPrevious size="25px" />
      </div>
      <div className="nextbtn" onClick={handleNext}>
        <GrFormNext size="25vw" />
      </div>
      {dataImg.map((url, index) => {
        return (
          <div key={index}>
            <img
              className={index === current ? "item-active" : "item"}
              src={url}
              alt=""
            />
          </div>
        );
      })}
      <div className="dot-wrapper">
        {dataImg.map((url, index) => {
          return (
            <div
              className={index === current ? "dot-active" : "dot-inactive"}
              key={index}
              onClick={() => handleDot(index)}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
