import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <header className="main-header">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo */}
        <div className="logo-section d-flex align-items-center">
          <img src={logo} alt="ZAHIRX Logo" className="logo-img" />
          <span className="logo-text">ZAHRIX</span>
        </div>

        {/* Navigation */}
        <nav className="nav-menu">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/aboutus" className="nav-link">About Us</Link>

          <div className="dropdown d-inline-block">
            <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
              Services
            </span>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/electricals">Electricals</Link></li>
              <li><Link className="dropdown-item" to="/cctv">CCTV</Link></li>
              <li><Link className="dropdown-item" to="/bms">BMS</Link></li>
            </ul>
          </div>

          <Link to="/projects" className="nav-link">Projects</Link>
        </nav>

        {/* Get a Quote Button */}
        <Link to="/get-a-quote" className="quote-btn">Get a Quote</Link>
      </div>
    </header>
  );
};

export default Header;
