import React from "react";
import { Link } from "react-router-dom";
import useVans from "../../hooks/useVans.jsx";

import { getHostVans } from "../../api.js";

import "../../styles/HostVans.css";

export default function HostVans() {
  const { vans, status } = useVans({
    hostId: 123,
  });

  if (status.loading) {
    return (
      <p>
        <strong>Loading your vans...</strong>
      </p>
    );
  }

  if (status.error) {
    return (
      <div>
        <p>
          <strong>Failed to load your vans...</strong>
        </p>
        <p>{error.message}</p>
      </div>
    );
  }

  const vansElements = vans.map(({ id, name, imageUrl, price }) => (
    <li className="host-vans-list-card" key={id}>
      <Link to={`./${id}`} state={{ type: "your", vans: vans }}>
        <img className="host-vans-list-card--image" src={imageUrl} alt={name} />
      </Link>
      <div className="host-vans-list-card--info">
        <h2 className="host-vans-list-card--title">
          <Link to={`./${id}`} state={{ type: "your", vans: vans }}>
            {name}
          </Link>
        </h2>
        <p className="host-vans-list-card--price">${price} / day</p>
      </div>
    </li>
  ));

  return (
    <section className="host-vans-catalog">
      <ul className="host-vans-list">{vansElements}</ul>
    </section>
  );
}
