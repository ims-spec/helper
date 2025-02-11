import React from "react";
import { Outlet } from "react-router";

import Header from "../../containers/header/Header";
import Boostrap from "../../containers/sidebar/bootstrap/Boostrap";

export default function Dashboard() {
  return (
    <div>
      <Header />
      <div className="d-flex">
        <Boostrap />
        <Outlet />
      </div>
    </div>
  );
}
