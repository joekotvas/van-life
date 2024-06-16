import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import "../../styles/Host.css";

export default function Host() {
  return (
    <>
      <nav className="host-navigation">
        <NavLink to="/host" end>
          Dashboard
        </NavLink>
        <NavLink to="income">Income</NavLink>
        <NavLink to="vans">Vans</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </nav>
      <Outlet />
    </>
  );
}
