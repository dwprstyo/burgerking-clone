import React from 'react'
import { useState } from 'react';

import { BiSearch, BiDownArrowAlt, BiArrowBack } from "react-icons/bi";
import AngryMenu from './AngryMenu';

const Menu = () => {
  const [isOpen, setIsOpent] = useState(false);

  const handleOverlay = () => {
    isOpen ? setIsOpent(false) : setIsOpent(true);
  };

  return (
    <div className="menu">
      <div className="content">
        <div className="content-wrapper">
          <div className="item-categories">
            <div className="search">
              <input className="input-search" type="text" name="search" placeholder="Search Menu..." />
              <div className="btn-search"><BiSearch color="white" size="25px" /></div>
            </div>
            <div className="overlay-category">
              <div className="category">Angry Menu</div>
              <div className="category">Bk App Exclusive</div>
              <div className="category">Cheese Burger Favorite</div>
              <div className="category">Cheese Whopper</div>
              <div className="category">Gold Collection</div>
              <div className="category">King's Chicken</div>
              <div className="category">Kids Meal</div>
              <div className="category">Side and Dessert</div>
              <div className="category">Beverages</div>
              <div className="category">Kupon Januari</div>
            </div>
          </div>
          <div className="item-categories-mobile">
            <div className="search-mobile">
              {isOpen ? <BiArrowBack color="white" size="25px" onClick={() => handleOverlay()} /> : <BiSearch color="white" size="25px" onClick={() => handleOverlay()} />}
            </div>
            {isOpen ? <input className="search-overlay"  type="text" name="search" placeholder="Search Menu..." /> : <div className="category-mobile"><span>Angry Menu </span><BiDownArrowAlt /></div>}
          </div>
          <div className="item-list">
            <AngryMenu/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu