import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router} from "react-router-dom";

import { store } from "../redux/store";

import AppRouter from "../router/AppRouter";
import Footer from "./Footer";
import Navbar from "./Navbar";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Provider store={store}>
        <Router>
          <Navbar />
          <AppRouter />
          <Footer />
        </Router>
      </Provider>
    </div>
  );
};

export default AppLayout;
