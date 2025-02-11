import React from "react";

export default function FooterBar() {
  return (
    <>
      <ul className="nav flex-column mb-auto">
        <li className="nav-item">
          <a className="nav-link d-flex align-items-center gap-2" href="#">
          <i className="bi bi-gear-wide-connected"></i>
            Settings
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link d-flex align-items-center gap-2" href="#">
          <i className="bi bi-door-closed"></i>
            Sign out
          </a>
        </li>
      </ul>
    </>
  );
}
