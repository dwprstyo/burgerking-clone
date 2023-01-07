import React from "react";
import {Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Menu from "../pages/Menu";

const AppRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menus" element={<Menu />} />
      </Routes>
  );
};

export default AppRouter;
