import React from "react";
import { Link } from "react-router-dom";

import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="website">
          <img
            className="logo"
            src="https://bkdelivery.co.id/static/website/img/logo_2022_x2.6bb6d972f0a5.png"
            alt="logo"
          />
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
              <div className="login">Login</div>
              <div className="cart">
                <FaShoppingCart color="white" size="25px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
