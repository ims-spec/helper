import React from "react";

export default function SavedReports() {
  return (
    <>
      <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
        <span>Saved reports</span>
        <a className="link-secondary" href="#" aria-label="Add a new report">
          <i className="bi bi-plus-circle"></i>
        </a>
      </h6>
      <ul className="nav flex-column mb-auto">
        <li className="nav-item">
          <a className="nav-link d-flex align-items-center gap-2" href="#">
          <i className="bi bi-file-earmark-text"></i>
            Current month
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link d-flex align-items-center gap-2" href="#">
          <i className="bi bi-file-earmark-text"></i>
            Last quarter
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link d-flex align-items-center gap-2" href="#">
          <i className="bi bi-file-earmark-text"></i>
            Social engagement
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link d-flex align-items-center gap-2" href="#">
          <i className="bi bi-file-earmark-text"></i>
            Year-end sale
          </a>
        </li>
      </ul>
    </>
  );
}
