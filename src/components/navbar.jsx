import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark" id="nav">
        <div className="container">
          <Link className="navbar-brand" to="/">
            REACT APP
          </Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ml-auto ">
              <li className="nav-item active">
                <Link className="nav-link" to="/home">
                  home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/team">
                  team
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="dropdownId"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </Link>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <Link className="dropdown-item" to="">
                    Action 1
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Action 2
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
