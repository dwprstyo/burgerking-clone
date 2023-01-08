import React from "react";
import { Link } from "react-router-dom";

import { FaShoppingCart } from "react-icons/fa";
import { BiMenu, BiX } from "react-icons/bi";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpent] = useState(false);

  const handleOverlay = () => {
    isOpen ? setIsOpent(false) : setIsOpent(true);
  };

  const menuClick = () => {
    setIsOpent(false);
  }
  return (
    <div className="navbar">
      <div className={isOpen ? "overlay-menu-active" : "overlay-menu"}>
        <Link to="/" onClick={() => menuClick()}>
          <div className="group-title">
            <div className="title">Home</div>
          </div>
        </Link>
        <Link to="/menus" onClick={() => menuClick()}>
          <div className="group-title">
            <div className="subtitle">Delivery</div>
            <div className="title">Order</div>
          </div>
        </Link>
        <Link to="/promo" onClick={() => menuClick()}>
          <div className="group-title">
            <div className="subtitle">Get Fresh</div>
            <div className="title">Promotion</div>
          </div>
        </Link>
        <div className="line"></div>
        <Link to="/login" onClick={() => menuClick()}>
          <div className="group-title">
            <div className="title">Login</div>
          </div>
        </Link>
      </div>
      <div className="navbar-wrapper">
        <div className="website">
          <div className="logo-wrapper">
            <Link to="/">
              <img
                className="logo"
                src="https://bkdelivery.co.id/static/website/img/logo_2022_x2.6bb6d972f0a5.png"
                alt="logo"
              />
            </Link>
          </div>
          <div className="left-navigation">
            <Link to="/menus">
              <div className="group-title">
                <div className="subtitle">Delivery</div>
                <div className="title">Order</div>
              </div>
            </Link>
            <Link to="/promo">
              <div className="group-title">
                <div className="subtitle">Get Fresh</div>
                <div className="title">Promotions</div>
              </div>
            </Link>
          </div>
          <div className="right-navigation">
            <div className="group">
              <Link to="/login">
                <div className="login">Login</div>
              </Link>
              <div className="cart">
                <FaShoppingCart color="white" size="25px" />
              </div>
            </div>
          </div>
        </div>
        <div className="mobile">
          <div className="menu-wrapper">
            {isOpen ? (
              <BiX color="orange" size="25px" onClick={() => handleOverlay()} />
            ) : (
              <BiMenu
                color="orange"
                size="25px"
                onClick={() => handleOverlay()}
              />
            )}
          </div>
          <div>
            <img
              className="logo"
              src="https://bkdelivery.co.id/static/website/img/logo_2022_x2.6bb6d972f0a5.png"
              alt="logo"
            />
          </div>
          <div className="cart">
            <FaShoppingCart color="white" size="25px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
