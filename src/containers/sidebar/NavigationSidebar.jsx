import React from "react";
import { NavLink } from "react-router";

export default function NavigationSidebar() {
  return (
    <div>
      <ul className="nav nav-pills flex-column mb-auto">
        {/* <li className="nav-item">
          <NavLink to="/"  className="nav-link active" aria-current="page">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </NavLink>
        </li> */}
        <li>
          <NavLink to="/" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="todos" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#table"></use>
            </svg>
            Todos
          </NavLink>
        </li>
        {/* <li>
          <a href="#" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#grid"></use>
            </svg>
            Products
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#people-circle"></use>
            </svg>
            Customers
          </a>
        </li> */}
      </ul>
    </div>
  );
}
