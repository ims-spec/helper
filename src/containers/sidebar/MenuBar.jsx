import React from "react";
import { Link } from "react-router";



export default function MenuBar() {
  return (
    <>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link
            className="nav-link d-flex align-items-center gap-2 active"
            aria-current="page"
            to="/"
          >
            <i className="bi bi-house-fill"></i>
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link d-flex align-items-center gap-2" to="todos">
            <i className="bi bi-list-task"></i>
            Todo list
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link d-flex align-items-center gap-2" to="budget">
            <i className="bi bi-currency-dollar"></i>
            My budget
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link d-flex align-items-center gap-2" to="reports">
            <i className="bi bi-graph-up"></i>
            Reports
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link d-flex align-items-center gap-2" href="experience">
          <i className="bi bi-explicit"></i>
            My experience
          </Link>
        </li>
      </ul>
    </>
  );
}
