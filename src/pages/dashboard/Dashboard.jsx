import React from "react";
import { Outlet } from "react-router";

import Header from "../../containers/header/Header";
import LeftBar from "../../containers/sidebar/LeftBar";

export default function Dashboard() {
  return (
    <div>
      <Header />
      <div className="d-flex justify-content-between">
        <LeftBar />
        <Outlet />
      </div>
    </div>
  );
}
