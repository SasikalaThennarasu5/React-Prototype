import React from 'react';
import { NavLink } from 'react-router-dom';
import { HouseFill, Grid3x3GapFill } from 'react-bootstrap-icons';
import '../styles/Sidebar.css';

const Sidebar1 = () => {
  return (
    <div className="sidebar-custom p-3 d-flex flex-column min-vh-100">
      <div className="text-center mb-4">
        <img src="/images/logo.png" alt="Logo" className="rounded-circle mb-2" width="60" height="60" />
        <h5 className="m-0 text-primary">Vetri Market</h5>
      </div>

      <NavLink
        to="/"
        className={({ isActive }) =>
          `nav-link-custom ${isActive ? 'active' : ''}`
        }
      >
        <HouseFill /> Home
      </NavLink>

      <NavLink
        to="/products"
        className={({ isActive }) =>
          `nav-link-custom ${isActive ? 'active' : ''}`
        }
      >
        <Grid3x3GapFill /> Products
      </NavLink>
    </div>
  );
};

export default Sidebar1;
