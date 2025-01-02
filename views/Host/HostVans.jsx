import React from "react";
import { Link } from "react-router-dom";

import HostVansCatalog from "./HostVansCatalog.jsx";

import "../../styles/HostVans.css";

export default function HostVans() {
  return (
    <section className="host-vans-section">
      <h1>Your listed vans</h1>
      <HostVansCatalog />
    </section>
  );
}
