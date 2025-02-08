import React from "react";
import { Outlet } from "react-router";

import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Dashboard() {
  return (
    <div>
      <Header />
      <div className="d-flex" >
        <Sidebar />
        <Outlet  />
      </div>     
    </div>
  );
}
