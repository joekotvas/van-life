import React from "react";
import { Link, NavLink } from "react-router-dom";

import AvatarIcon from "../../images/avatar-icon.svg";

import "../../styles/SiteHeader.css";

export default function SiteHeader() {
  return (
    <nav className="site-nav">
      <div className="logo-wrapper">
        <Link to="/" className="site-nav-link logo">
          #VANLIFE
        </Link>
      </div>
      <NavLink to="/host" className="site-nav-link">
        Host
      </NavLink>
      <NavLink to="/about" className="site-nav-link">
        About
      </NavLink>
      <NavLink to="/vans" className="site-nav-link">
        Vans
      </NavLink>
      <NavLink to="/login" className="site-nav-link">
        <img src={AvatarIcon} alt="Log In" />
      </NavLink>
    </nav>
  );
}
