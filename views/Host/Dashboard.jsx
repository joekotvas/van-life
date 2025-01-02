import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

import HostVansCatalog from "./HostVansCatalog";
import Star from "../../images/Star.svg";

export default function Dashboard() {
  useTitle("Host Dashboard | #VANLIFE");
  return (
    <section className="host-dashboard">
      <section className="income-dashboard-section">
        <h1>Welcome!</h1>
        <header>
          <p>
            Income last{" "}
            <Link
              to="/host/income"
              title="View income details"
              className="income-filter-link"
            >
              30 days
            </Link>
          </p>
          <Link to="/host/income">Details</Link>
        </header>
        <p className="income-amount">$2,260</p>
      </section>
      <section className="review-dashboard-section">
        <h2>
          Review Score{" "}
          <span className="review-score">
            <strong>
              <img src={Star} alt="Star" />
              5.0
            </strong>
            /5
          </span>
        </h2>
        <Link to="/host/reviews">Details</Link>
      </section>
      <section className="vans-dashboard-section">
        <header>
          <h2>Your listed vans</h2>
          <Link to="/host/vans">View all</Link>
        </header>
        <HostVansCatalog />
      </section>
    </section>
  );
}
