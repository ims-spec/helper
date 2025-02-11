import React from "react";
import FooterBar from "./FooterBar";
import Main from "./Main";
import MenuBar from "./MenuBar";
import SavedReports from "./SavedReports";

export default function Boostrap() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
            <div
              className="offcanvas-md offcanvas-end bg-body-tertiary"
              tabIndex="-1"
              id="sidebarMenu"
              aria-labelledby="sidebarMenuLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="sidebarMenuLabel">
                  Company name
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  data-bs-target="#sidebarMenu"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                <MenuBar />
                <SavedReports />
                <hr className="my-3" />
                <FooterBar />
              </div>
            </div>
          </div>
          <Main/>
        </div>
      </div>
    </>
  );
}
