import React from "react";

export default function MenuBar() {
  return (
    <>
      <ul className="nav flex-column">
        <li className="nav-item">
          <a
            className="nav-link d-flex align-items-center gap-2 active"
            aria-current="page"
            href="#"
          >
            <i class="bi bi-house-fill"></i>
            Dashboard
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link d-flex align-items-center gap-2" href="#">
            <i className="bi bi-file-earmark"></i>
            Orders
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link d-flex align-items-center gap-2" href="#">
            <i className="bi bi-cart"></i>
            Products
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link d-flex align-items-center gap-2" href="#">
            <i className="bi bi-people"></i>
            Customers
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link d-flex align-items-center gap-2" href="#">
            <i className="bi bi-graph-up"></i>
            Reports
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link d-flex align-items-center gap-2" href="#">
            <i className="bi bi-puzzle"></i>
            Integrations
          </a>
        </li>
      </ul>
    </>
  );
}
