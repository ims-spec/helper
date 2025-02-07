import React from "react";
import { Outlet } from "react-router";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Sidebar from "./components/sidebar/Sidebar";

export default function () {
  return (
    <div>
      <Header />
      <div className="d-flex" >
        <Sidebar />
        <Outlet  />
      </div>
      {/* <Footer /> */}
    </div>
  );
}
