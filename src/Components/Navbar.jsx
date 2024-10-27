import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../Style/Navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <>
      <nav
        className="navbar navbar-expand-lg fixed-top"
        style={{
          backgroundColor: "#ea672e",
        }}
      >
        <div className="container-fluid ms-5 me-5 ps-5 pe-5">
          <img
            src="/image/logo.png"
            alt="Logo Suitmedia"
            style={{ height: "60px" }}
          />
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
              <li className="nav-item">
                <Link
                  to="/home"
                  className={`nav-link ${
                    location.pathname === "/home" ? "active" : ""
                  }`}
                  aria-current="page"
                  href="#"
                  style={{ color: "white" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  href="#"
                  style={{ color: "white" }}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/services"
                  className={`nav-link ${
                    location.pathname === "/services" ? "active" : ""
                  }`}
                  aria-current="page"
                  href="#"
                  style={{ color: "white" }}
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  href="#"
                  style={{ color: "white" }}
                >
                  Ideas
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/careers"
                  className={`nav-link ${
                    location.pathname === "/careers" ? "active" : ""
                  }`}
                  aria-current="page"
                  href=""
                  style={{ color: "white" }}
                >
                  Careers
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className={`nav-link ${
                    location.pathname === "/contact" ? "active" : ""
                  }`}
                  aria-current="page"
                  href="#"
                  style={{ color: "white" }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
