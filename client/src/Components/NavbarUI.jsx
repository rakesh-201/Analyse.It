import React from "react";
import {NavLink} from "react-router-dom"

const NavbarUI = ({ fileHandler, submitHandler, ...rest }) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <NavLink to="/" class="navbar-brand">
          PLOT-IT
        </NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse mx-3" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item mx-3">
              <NavLink class="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li class="nav-item mx-3">
                <NavLink to="/Analysis" className="nav-link">
                  Analysis Page
                </NavLink>
            </li>
          </ul>
          <form class="d-flex">
            <input
              type="file"
              class="btn btn-secondary"
              onChange={(e) => {
                console.log(e.target.files.length);
                fileHandler(e.target.files);
              }}
            />
            <a class="btn btn-primary mx-2" onClick={submitHandler}>
              Submit
            </a>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavbarUI;
