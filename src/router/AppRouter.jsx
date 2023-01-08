import React from "react";
import {Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Menu from "../pages/Menu";
import Promo from "../pages/Promo";

const AppRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menus" element={<Menu />} />
        <Route path="/promo" element={<Promo />} />
        <Route path="/login" element={<Login />} />
      </Routes>
  );
};

export default AppRouter;
